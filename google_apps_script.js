/**
 * ============================================================================
 * GOOGLE APPS SCRIPT - WEBHOOK TURNAMEN YOKKE SQUAD 2026 (MLBB & MCGG)
 * ============================================================================
 * 
 * PANDUAN PENTING DEPLOYMENT WEB APP:
 * ----------------------------------------------------------------------------
 * Agar website (Vercel / Local) dapat membaca dan mengirim data pendaftaran,
 * ikuti langkah deployment berikut:
 * 
 * 1. Di Google Sheets, buka: Extensions (Ekstensi) > Apps Script.
 * 2. Paste seluruh kode ini ke file Code.gs (atau google_apps_script.js).
 * 3. Klik tombol "Deploy" (Terapkan) di kanan atas > "Manage deployments" (Kelola penerapan).
 * 4. Klik ikon Pensil (Edit) pada deployment yang aktif, atau buat "New deployment" tipe "Web app".
 * 5. Konfigurasi WAJIB:
 *    - Version (Versi): "New version" (Versi Baru)
 *    - Description: "Yokke Squad E-Sports Webhook v3 - Full Assets & Roster ID Cards"
 *    - Execute as (Jalankan sebagai): "Me (<email_panitia>)"
 *    - Who has access (Yang memiliki akses): "Anyone" (Siapa saja)
 *      *PENTING*: JANGAN pilih "Only myself" atau "Anyone with Google account".
 *      Jika tidak dipilih "Anyone", Google akan meminta login akun dan menimbulkan error:
 *      "Sorry, unable to open the file at this time" terutama jika browser membuka
 *      dengan multiple account (authuser=2).
 * 6. Klik "Deploy", beri izin (Authorize access) jika diminta.
 * 7. Salin "Web app URL" (akhiran /exec) dan pastikan dimasukkan ke variabel
 *    GOOGLE_SHEET_WEBHOOK_URL di file app.js.
 * ============================================================================
 */

var TARGET_SPREADSHEET_ID = "17G8UlOAKAtjpW6mxOpSdnPiiy3haI-EJwtDClMLZY0U"; // Spreadsheet: Turnamen Yokke Squad 2026 Testing/Lokal
var TARGET_FOLDER_ID = "1i6ccl3qnoWeBPHTcTr6Q4GRyWWNJ5m8M"; // Folder: Yokke Tournament - Uploads

/**
 * Mendapatkan spreadsheet target turnamen secara andal.
 * Membuka spreadsheet berdasarkan TARGET_SPREADSHEET_ID untuk testing/lokal,
 * atau fallback ke active spreadsheet jika container-bound.
 */
function getTargetSpreadsheet() {
  if (TARGET_SPREADSHEET_ID && TARGET_SPREADSHEET_ID.length > 5) {
    try {
      return SpreadsheetApp.openById(TARGET_SPREADSHEET_ID);
    } catch(err) {
      Logger.log("openById fallback to active: " + err.toString());
    }
  }
  return SpreadsheetApp.getActiveSpreadsheet();
}

// ========================================================
// HELPER OTORISASI & GOOGLE DRIVE SHARING AMAN
// ========================================================

/**
 * Mengatur permission sharing secara aman.
 * Menghindari error 'Access denied: DriveApp' jika domain Google Workspace
 * membatasi sharing publik (ANYONE_WITH_LINK).
 */
function safeSetSharing(driveItem) {
  if (!driveItem) return;
  try {
    driveItem.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch(e1) {
    try {
      driveItem.setSharing(DriveApp.Access.DOMAIN_WITH_LINK, DriveApp.Permission.VIEW);
    } catch(e2) {
      // Kebijakan domain membatasi sharing otomatis, abaikan agar upload tidak gagal
    }
  }
}

/**
 * Mendapatkan atau membuat folder upload utama secara andal.
 * Jika TARGET_FOLDER_ID tidak dapat diakses atau bukan milik akun ini,
 * otomatis beralih membuat folder di My Drive (Root) milik akun panitia.
 */
function getOrCreateUploadFolder() {
  var folder = null;
  if (TARGET_FOLDER_ID && TARGET_FOLDER_ID.length > 5) {
    try {
      folder = DriveApp.getFolderById(TARGET_FOLDER_ID);
      folder.getName(); // Tes validitas akses
    } catch(err) {
      folder = null;
    }
  }
  if (!folder) {
    try {
      var root = DriveApp.getRootFolder();
      var folders = root.getFoldersByName("Yokke Tournament - Uploads");
      if (folders.hasNext()) {
        folder = folders.next();
      } else {
        folder = root.createFolder("Yokke Tournament - Uploads");
        safeSetSharing(folder);
      }
    } catch(err) {
      folder = null;
    }
  }
  return folder;
}

/**
 * ========================================================
 * FUNGSI UJI OTORISASI GOOGLE DRIVE & SPREADSHEET
 * ========================================================
 * PENTING: Pilih fungsi 'testDriveAuth' di dropdown toolbar atas Google Apps Script,
 * lalu klik tombol 'Run' (Jalankan).
 * Jika muncul popup 'Authorization Required' (Izin Diperlukan):
 * 1. Klik 'Review Permissions' (Tinjau Izin).
 * 2. Pilih akun Google pemilik spreadsheet.
 * 3. Klik 'Advanced' (Lanjutan) -> 'Go to Yokke Tournament Script (unsafe)'.
 * 4. Klik 'Allow' (Izinkan).
 */
function testDriveAuth() {
  Logger.log("--- MEMULAI UJI OTORISASI DRIVE & SHEET ---");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("1. Akses Spreadsheet: BERHASIL (" + ss.getName() + ")");
  
  var root = DriveApp.getRootFolder();
  Logger.log("2. Akses My Drive (Root): BERHASIL (" + root.getName() + ")");
  
  var uploadFolder = getOrCreateUploadFolder();
  if (uploadFolder) {
    Logger.log("3. Akses Folder Upload: BERHASIL (" + uploadFolder.getName() + " - ID: " + uploadFolder.getId() + ")");
  } else {
    Logger.log("3. Peringatan: Folder upload khusus tidak dapat diakses, fallback ke Root.");
  }
  
  // Uji membuat file kecil lalu hapus
  try {
    var testBlob = Utilities.newBlob("test auth yokke", "text/plain", "yokke_test_auth.txt");
    var testFolder = uploadFolder || root;
    var testFile = testFolder.createFile(testBlob);
    safeSetSharing(testFile);
    Logger.log("4. Uji Simpan Berkas ke Drive: BERHASIL (" + testFile.getUrl() + ")");
    testFile.setTrashed(true);
    Logger.log("5. Pembersihan berkas uji: BERHASIL");
  } catch(e) {
    Logger.log("4. Gagal uji simpan berkas: " + e.toString());
  }

  Logger.log("=== SEMUA OTORISASI TELAH LENGKAP DAN AKTIF ===");
  return "OTORISASI BERHASIL! Silakan Deploy Web App (New Version).";
}

/**
 * Mendapatkan atau membuat subfolder tim/kategori secara andal.
 */
function getOrCreateSubFolder(parentFolder, subFolderName) {
  var target = parentFolder || getOrCreateUploadFolder();
  var sub = null;
  if (target) {
    try {
      var folders = target.getFoldersByName(subFolderName);
      if (folders.hasNext()) {
        sub = folders.next();
      } else {
        sub = target.createFolder(subFolderName);
        safeSetSharing(sub);
      }
    } catch(err) {
      sub = null;
    }
  }
  if (!sub) {
    try {
      var root = DriveApp.getRootFolder();
      var rootFolders = root.getFoldersByName(subFolderName);
      if (rootFolders.hasNext()) {
        sub = rootFolders.next();
      } else {
        sub = root.createFolder(subFolderName);
        safeSetSharing(sub);
      }
    } catch(e) {
      sub = null;
    }
  }
  return sub;
}

/**
 * ========================================================
 * FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET
 * ========================================================
 * Jalankan fungsi ini jika Anda melihat tulisan
 * 'Link ID Card: Gagal: Exception: Access denied: DriveApp.' di spreadsheet.
 * Fungsi ini akan:
 * 1. Memeriksa Google Drive apakah berkas foto pemain sudah ada.
 * 2. Jika ada, mengganti teks gagal menjadi link Google Drive yang benar.
 * 3. Jika berkas belum ada, membersihkan teks gagal agar rapi.
 */
function relinkExistingFailedIDCards() {
  Logger.log("--- MEMULAI PERBAIKAN LINK ID CARD DI SPREADSHEET ---");
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var mainFolder = getOrCreateUploadFolder();

  // 1. Periksa Pendaftaran MLBB
  var mlbbSheet = ss.getSheetByName("Pendaftaran MLBB");
  if (mlbbSheet && mlbbSheet.getLastRow() > 1) {
    var mlbbData = mlbbSheet.getDataRange().getValues();
    for (var r = 1; r < mlbbData.length; r++) {
      var teamName = mlbbData[r][1] ? mlbbData[r][1].toString().trim() : "";
      var rosterCell = mlbbData[r][12] ? mlbbData[r][12].toString() : "";
      
      if (rosterCell.indexOf("Access denied: DriveApp") !== -1 || rosterCell.indexOf("Gagal:") !== -1) {
        Logger.log("Menemukan error di baris " + (r + 1) + " (Tim: " + teamName + ")");
        
        // Cari folder tim di Drive
        var cleanTName = teamName.toLowerCase().replace(/[^a-z0-9]/g, "");
        var tFolder = null;
        if (mainFolder) {
          try {
            var subFolders = mainFolder.getFolders();
            while (subFolders.hasNext()) {
              var sf = subFolders.next();
              var sfName = sf.getName().toLowerCase().replace(/[^a-z0-9]/g, "");
              if (sfName.indexOf(cleanTName) !== -1) {
                tFolder = sf;
                break;
              }
            }
          } catch(e) {}
        }

        var driveFiles = [];
        if (tFolder) {
          try {
            var files = tFolder.getFiles();
            while (files.hasNext()) {
              var f = files.next();
              safeSetSharing(f);
              driveFiles.push({ name: f.getName().toLowerCase(), url: f.getUrl() });
            }
          } catch(e) {}
        }

        // Parse dan perbaiki tiap blok roster
        var blocks = rosterCell.split(/\n\s*\n|\n(?=\s*\d+\.\s+)/);
        var updatedBlocks = blocks.map(function(block) {
          if (block.indexOf("Access denied: DriveApp") === -1 && block.indexOf("Gagal:") === -1) return block;

          // Cari nama dan NIP dari blok
          var nipMatch = block.match(/NIP:\s*([^,\)]+)/i);
          var nip = nipMatch ? nipMatch[1].trim().replace(/[^0-9]/g, "") : "";
          var firstLine = block.split("\n")[0];
          var cleanName = firstLine.replace(/^[0-9\.\s\w]+:\s*/, "")
                                   .replace(/\([^\)]+\)/g, "")
                                   .replace(/"[^"]+"/g, "")
                                   .toLowerCase().replace(/[^a-z0-9]/g, "");

          var foundUrl = "";
          if (nip.length >= 4) {
            for (var d = 0; d < driveFiles.length; d++) {
              if (driveFiles[d].name.indexOf(nip) !== -1) {
                foundUrl = driveFiles[d].url;
                break;
              }
            }
          }
          if (!foundUrl && cleanName.length >= 3) {
            for (var d = 0; d < driveFiles.length; d++) {
              if (driveFiles[d].name.replace(/[^a-z0-9]/g, "").indexOf(cleanName) !== -1) {
                foundUrl = driveFiles[d].url;
                break;
              }
            }
          }

          if (foundUrl) {
            return block.replace(/->\s*Link ID Card:\s*Gagal:.*$/im, "-> Link ID Card: " + foundUrl);
          } else {
            // Hapus baris gagal agar sheet tetap rapi dan bersih
            return block.replace(/\n\s*->\s*Link ID Card:\s*Gagal:.*$/im, "");
          }
        });

        var newRosterText = updatedBlocks.join("\n\n");
        mlbbSheet.getRange(r + 1, 13).setValue(newRosterText);
        Logger.log("   -> Baris " + (r + 1) + " berhasil diperbarui!");
      }
    }
  }

  // 2. Periksa Pendaftaran MCGG
  var mcggSheet = ss.getSheetByName("Pendaftaran MCGG");
  if (mcggSheet && mcggSheet.getLastRow() > 1) {
    var mcggData = mcggSheet.getDataRange().getValues();
    for (var m = 1; m < mcggData.length; m++) {
      var idCardCell = mcggData[m][8] ? mcggData[m][8].toString() : "";
      if (idCardCell.indexOf("Access denied: DriveApp") !== -1 || idCardCell.indexOf("Gagal:") !== -1) {
        mcggSheet.getRange(m + 1, 9).setValue("");
        Logger.log("Pendaftaran MCGG baris " + (m + 1) + ": pesan error dibersihkan.");
      }
    }
  }

  Logger.log("=== SELESAI: SEMUA LINK ID CARD TELAH DIPERBAIKI ===");
  return "Perbaikan Selesai!";
}

// ========================================================
// 0. FUNGSI LISTING & RELASIONAL NORMALISASI DATABASE GSHEET
// ========================================================

/**
 * Memastikan tabel relasional tersedia di Spreadsheet:
 * 1. 'MLBB - Tim' (Parent Tim)
 * 2. 'MLBB - Peserta' (Child Roster Anggota)
 * 3. 'Pendaftaran MCGG' (Pemain Solo)
 */
function ensureRelationalSheetsExist(ss) {
  var mlbbTimSheet = ss.getSheetByName("MLBB - Tim");
  if (!mlbbTimSheet) {
    mlbbTimSheet = ss.insertSheet("MLBB - Tim");
    mlbbTimSheet.appendRow([
      "Timestamp", "Nama Tim", "Divisi Yokke", "WhatsApp Kontak", 
      "Folder Drive Tim", "Status Verifikasi", "Catatan Panitia"
    ]);
    mlbbTimSheet.getRange(1, 1, 1, 7).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff");
  }

  var mlbbPesertaSheet = ss.getSheetByName("MLBB - Peserta");
  if (!mlbbPesertaSheet) {
    mlbbPesertaSheet = ss.insertSheet("MLBB - Peserta");
    mlbbPesertaSheet.appendRow([
      "Timestamp", "Nama Tim", "Role", "Nama Lengkap", "NIP Pegawai", 
      "Nickname Game (IGN)", "Game ID & Server", "Status Pegawai", "Link ID Card"
    ]);
    mlbbPesertaSheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff");
  }

  var mcggSheet = ss.getSheetByName("Pendaftaran MCGG");
  if (!mcggSheet) {
    mcggSheet = ss.insertSheet("Pendaftaran MCGG");
    mcggSheet.appendRow([
      "Timestamp", "Nama Lengkap Pemain", "Divisi Yokke", "WhatsApp", 
      "NIP Pegawai", "Mobile Game ID & Server", "Mobile Game Nickname", 
      "Status Kepegawaian", "Link ID Card", "Status Verifikasi", "Catatan Panitia"
    ]);
    mcggSheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff");
  }

  return {
    timSheet: mlbbTimSheet,
    pesertaSheet: mlbbPesertaSheet,
    mcggSheet: mcggSheet
  };
}

/**
 * Listing MLBB Tim (Distinct & Sorted in Memory)
 * Tabel Parent: 'MLBB - Tim'
 * Aturan:
 * - Deduplikasi berdasarkan 'Nama Tim' (case-insensitive & trimmed).
 * - Prioritas: utamakan baris yang Status Verifikasi == 'VERIFIED'. Jika status sama, ambil baris paling bawah (terbaru).
 * - Urutkan A-Z berdasarkan Nama Tim.
 * - Simpan rowNumber asli dari Google Sheets untuk referensi update.
 */
function getMlbbTimListing(ss) {
  var sheet = ss.getSheetByName("MLBB - Tim");
  var isNormalized = true;
  if (!sheet || sheet.getLastRow() <= 1) {
    var legacySheet = ss.getSheetByName("Pendaftaran MLBB");
    if (legacySheet && legacySheet.getLastRow() > 1) {
      sheet = legacySheet;
      isNormalized = false;
    } else if (!sheet) {
      return [];
    }
  }
  if (sheet.getLastRow() <= 1) return [];

  var data = sheet.getDataRange().getValues();
  var timMap = {}; // key: cleanName -> teamItem

  for (var r = 1; r < data.length; r++) {
    var row = data[r];
    if (!row || row.length < 2) continue;
    var rawName = row[1] ? row[1].toString().trim() : "";
    if (!rawName || rawName === "-" || rawName.length < 2) continue;

    var cleanKey = rawName.toLowerCase().replace(/[^a-z0-9]/g, "");
    var dept = row[2] ? row[2].toString().trim() : "-";
    var wa = row[3] ? row[3].toString().trim() : "-";
    var folderUrl = "";
    var status = "PENDING";
    var notes = "";
    var isInvited = false;
    var SEEDED_TEAMS = ["wingskanan esport 1", "atmo", "native", "gado-gado", "gado gado esports", "appa linux", "aang alpha", "anti klimax", "anti climax"];

    if (isNormalized) {
      // MLBB - Tim: Col A: Timestamp, B: Nama Tim, C: Divisi Yokke, D: WhatsApp, E: Folder Drive, F: Status, G: Catatan, H: Invited
      folderUrl = row[4] ? row[4].toString().trim() : "";
      status = (row[5] && row[5].toString().trim()) ? row[5].toString().trim() : "PENDING";
      notes = row[6] ? row[6].toString().trim() : "";
      var invitedVal = row[7] ? row[7].toString().trim().toLowerCase() : "";
      isInvited = (invitedVal === "true" || invitedVal === "yes" || invitedVal === "invited" || invitedVal === "1" || invitedVal === "y");
      if (!isInvited && SEEDED_TEAMS.indexOf(rawName.toLowerCase().trim()) !== -1) { isInvited = true; }
    } else {
      // Legacy Pendaftaran MLBB
      status = (row[13] && row[13].toString().trim()) ? row[13].toString().trim() : "PENDING";
      notes = row[14] ? row[14].toString().trim() : "";
      if (SEEDED_TEAMS.indexOf(rawName.toLowerCase().trim()) !== -1) { isInvited = true; }
    }

    var currentItem = {
      rowNumber: r + 1,
      rowIndex: r + 1,
      timestamp: row[0],
      teamName: rawName,
      dept: dept,
      wa: wa,
      folderUrl: folderUrl,
      status: status,
      notes: notes,
      isInvited: !!isInvited,
      isLegacy: !isNormalized,
      rawRow: isNormalized ? null : row
    };

    if (!timMap[cleanKey]) {
      timMap[cleanKey] = currentItem;
    } else {
      var prev = timMap[cleanKey];
      // Prioritaskan baris yang Status Verifikasi == VERIFIED
      if (prev.status !== "VERIFIED" && currentItem.status === "VERIFIED") {
        timMap[cleanKey] = currentItem;
      } else if (prev.status === currentItem.status) {
        // Jika status sama, ambil baris paling bawah (terbaru)
        timMap[cleanKey] = currentItem;
      }
    }
  }

  var listing = [];
  for (var k in timMap) {
    listing.push(timMap[k]);
  }

  // Urutkan (Sort) hasil distinct secara alfabetis (A-Z) berdasarkan Nama Tim
  listing.sort(function(a, b) {
    return (a.teamName || "").localeCompare(b.teamName || "");
  });

  return listing;
}

/**
 * Listing MLBB Peserta (Distinct & Sorted in Memory)
 * Tabel Child: 'MLBB - Peserta'
 * Kolom: Timestamp, Nama Tim, Role, Nama Lengkap, NIP Pegawai, Nickname Game (IGN), Game ID & Server, Status Pegawai, Link ID Card
 * Aturan:
 * - Deduplikasi berdasarkan NIP Pegawai (jika NIP kosong/-, gunakan fallback key Nama Tim + Role).
 * - Nickname Game (IGN) diambil langsung utuh dari cell (jangan pernah di-split dengan koma!).
 * - Simpan rowNumber asli masing-masing peserta.
 */
function getMlbbPesertaListing(ss) {
  var sheet = ss.getSheetByName("MLBB - Peserta");
  if (!sheet || sheet.getLastRow() <= 1) return [];

  var data = sheet.getDataRange().getValues();
  var pesertaMap = {}; // key -> pesertaItem

  for (var r = 1; r < data.length; r++) {
    var row = data[r];
    if (!row || row.length < 3) continue;

    var teamName = row[1] ? row[1].toString().trim() : "";
    var role = row[2] ? row[2].toString().trim() : "Pemain";
    var name = row[3] ? row[3].toString().trim() : "";
    var nip = row[4] ? row[4].toString().trim() : "-";
    // Nickname Game (IGN) berdiri sendiri di 1 cell, jangan pernah di-split dengan koma ','!
    var ign = (row[5] !== undefined && row[5] !== null) ? row[5].toString().trim() : "-";
    var gameId = row[6] ? row[6].toString().trim() : "-";
    var statusPegawai = row[7] ? row[7].toString().trim() : "";
    var idCardLink = row[8] ? row[8].toString().trim() : "";

    if (!teamName && !name) continue;

    var cleanNip = nip.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var cleanTeam = teamName.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Deduplikasi berdasarkan NIP Pegawai (jika NIP kosong/-, fallback Nama Tim + Role)
    var memberKey = (cleanNip && cleanNip !== "-")
      ? (cleanTeam + "_" + cleanNip)
      : (cleanTeam + "_" + role.toLowerCase().replace(/[^a-z0-9]/g, ""));

    var isOrg = statusPegawai.indexOf("Organik") !== -1 && statusPegawai.indexOf("Non-Organik") === -1;
    var isCap = role.indexOf("KAPTEN") !== -1 || role.indexOf("Kapten") !== -1;

    var item = {
      rowNumber: r + 1,
      rowIndex: r + 1,
      timestamp: row[0],
      teamName: teamName,
      role: role,
      name: name,
      empId: nip,
      nickname: ign, // IGN utuh tanpa split
      gameId: gameId,
      isOrganik: isOrg,
      isCaptain: isCap,
      idCard: idCardLink
    };

    // Ambil baris terbaru jika duplikat
    pesertaMap[memberKey] = item;
  }

  var list = [];
  for (var k in pesertaMap) {
    list.push(pesertaMap[k]);
  }
  return list;
}

/**
 * Listing MCGG (Distinct & Sorted in Memory)
 * Tabel: 'Pendaftaran MCGG'
 * Aturan:
 * - Deduplikasi berdasarkan NIP Pegawai (prioritaskan VERIFIED, atau baris terbaru jika status sama).
 * - Urutkan A-Z berdasarkan Nama Lengkap Pemain.
 * - Simpan rowNumber asli.
 */
function getMcggListing(ss) {
  var sheet = ss.getSheetByName("Pendaftaran MCGG");
  if (!sheet || sheet.getLastRow() <= 1) return [];

  var data = sheet.getDataRange().getValues();
  var headers = data[0] || [];

  // Default indeks kolom sesuai skema 11 kolom terbaru:
  // Col A (0): Timestamp
  // Col B (1): Nama Lengkap Pemain
  // Col C (2): Divisi Yokke
  // Col D (3): WhatsApp
  // Col E (4): NIP Pegawai (Unique Key)
  // Col F (5): Mobile Game ID & Server
  // Col G (6): Mobile Game Nickname
  // Col H (7): Status Kepegawaian (Organik / Non-Organik)
  // Col I (8): Link ID Card
  // Col J (9): Status Verifikasi
  // Col K (10): Catatan Panitia
  var nameColIdx = 1;
  var deptColIdx = 2;
  var waColIdx = 3;
  var empIdColIdx = 4;
  var gameIdColIdx = 5;
  var nickColIdx = 6;
  var statusPegawaiColIdx = 7;
  var idCardColIdx = 8;
  var statusColIdx = 9;
  var notesColIdx = 10;

  for (var h = 0; h < headers.length; h++) {
    var hText = headers[h] ? headers[h].toString().toLowerCase() : "";
    if (hText.indexOf("nickname") !== -1 || hText.indexOf("ign") !== -1 || hText.indexOf("nicname") !== -1) {
      nickColIdx = h;
    } else if (hText.indexOf("kepegawaian") !== -1 || hText.indexOf("status pegawai") !== -1) {
      statusPegawaiColIdx = h;
    } else if (hText.indexOf("link id card") !== -1 || hText.indexOf("id card") !== -1 || hText.indexOf("foto") !== -1) {
      idCardColIdx = h;
    } else if (hText.indexOf("verifikasi") !== -1) {
      statusColIdx = h;
    } else if (hText.indexOf("catatan") !== -1 || hText.indexOf("notes") !== -1) {
      notesColIdx = h;
    } else if (hText.indexOf("nip") !== -1) {
      empIdColIdx = h;
    } else if (hText.indexOf("game id") !== -1) {
      gameIdColIdx = h;
    } else if (hText.indexOf("divisi") !== -1 || hText.indexOf("dept") !== -1) {
      deptColIdx = h;
    } else if (hText.indexOf("wa") !== -1 || hText.indexOf("whatsapp") !== -1) {
      waColIdx = h;
    } else if (hText.indexOf("nama lengkap") !== -1 || hText.indexOf("nama pemain") !== -1) {
      nameColIdx = h;
    }
  }

  var mcggMap = {};

  for (var r = 1; r < data.length; r++) {
    var row = data[r];
    if (!row || row.length < 2) continue;

    var name = (row[nameColIdx] !== undefined && row[nameColIdx] !== null) ? row[nameColIdx].toString().trim() : "";
    if (!name || name === "-" || name.length < 2) continue;

    var dept = (row[deptColIdx] !== undefined && row[deptColIdx] !== null) ? row[deptColIdx].toString().trim() : "-";
    var wa = (row[waColIdx] !== undefined && row[waColIdx] !== null) ? row[waColIdx].toString().trim() : "-";
    var empId = (row[empIdColIdx] !== undefined && row[empIdColIdx] !== null) ? row[empIdColIdx].toString().trim() : "-";
    var gameId = (row[gameIdColIdx] !== undefined && row[gameIdColIdx] !== null) ? row[gameIdColIdx].toString().trim() : "-";
    var nickname = (row[nickColIdx] !== undefined && row[nickColIdx] !== null) ? row[nickColIdx].toString().trim() : "";
    var statusPegawai = (row[statusPegawaiColIdx] !== undefined && row[statusPegawaiColIdx] !== null) ? row[statusPegawaiColIdx].toString().trim() : "";
    // Ambil URL foto ID Card langsung dari Kolom I (Link ID Card), bukan lagi parsing dari Catatan Panitia
    var idCard = (row[idCardColIdx] !== undefined && row[idCardColIdx] !== null) ? row[idCardColIdx].toString().trim() : "";
    var status = (row[statusColIdx] !== undefined && row[statusColIdx] !== null && row[statusColIdx].toString().trim()) ? row[statusColIdx].toString().trim() : "PENDING";
    var notes = (row[notesColIdx] !== undefined && row[notesColIdx] !== null) ? row[notesColIdx].toString().trim() : "";

    if (!nickname || nickname === "-") {
      var ignMatch = name.match(/\(IGN:\s*([^)]+)\)/i) || name.match(/\(([^)]+)\)/);
      if (ignMatch) nickname = ignMatch[1].trim();
    }
    if (!nickname || nickname === "-") nickname = name;

    if (idCard === "-") idCard = "";

    // Gunakan NIP Pegawai (Kolom E) sebagai referensi utama pengecekan duplikasi (Upsert)
    var cleanNip = empId.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
    var key = (cleanNip && cleanNip !== "-" && cleanNip.length >= 3) ? cleanNip : cleanName;

    var currentItem = {
      rowNumber: r + 1,
      rowIndex: r + 1,
      timestamp: row[0],
      name: name,
      nickname: nickname,
      dept: dept,
      wa: wa,
      empId: empId,
      gameId: gameId,
      isOrganik: statusPegawai.indexOf("Organik") !== -1 && statusPegawai.indexOf("Non-Organik") === -1,
      status: status,
      notes: notes,
      isInvited: false,
      idCard: idCard
    };

    if (!mcggMap[key]) {
      mcggMap[key] = currentItem;
    } else {
      var prev = mcggMap[key];
      // Prioritaskan VERIFIED, jika status sama ambil baris terbaru
      if (prev.status !== "VERIFIED" && currentItem.status === "VERIFIED") {
        mcggMap[key] = currentItem;
      } else if (prev.status === currentItem.status) {
        mcggMap[key] = currentItem;
      }
    }
  }

  var list = [];
  for (var k in mcggMap) {
    list.push(mcggMap[k]);
  }

  // Urutkan alfabetis A-Z berdasarkan Nama Lengkap Pemain
  list.sort(function(a, b) {
    return (a.name || "").localeCompare(b.name || "");
  });

  return list;
}

// ========================================================
// 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE
// ========================================================
function getInitialData(ss) {
  if (!ss) ss = getTargetSpreadsheet();
  try {

    var result = {
      status: "online",
      participants: []
    };

    // A. BACA RELASIONAL MLBB (MLBB - Tim & MLBB - Peserta)
    var mlbbTimList = getMlbbTimListing(ss);
    var mlbbPesertaList = getMlbbPesertaListing(ss);

    // Grouping roster per tim (in-memory join)
    var pesertaByTeam = {};
    for (var p = 0; p < mlbbPesertaList.length; p++) {
      var pMember = mlbbPesertaList[p];
      var cleanTName = (pMember.teamName || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      if (!pesertaByTeam[cleanTName]) pesertaByTeam[cleanTName] = [];
      pesertaByTeam[cleanTName].push(pMember);
    }

    for (var i = 0; i < mlbbTimList.length; i++) {
      var team = mlbbTimList[i];
      var cleanTName = team.teamName.toLowerCase().replace(/[^a-z0-9]/g, "");
      var rosterList = pesertaByTeam[cleanTName] || [];

      // Fallback untuk data legacy jika MLBB - Peserta belum terisi
      if (rosterList.length === 0 && team.isLegacy && team.rawRow) {
        var legacyRosterRaw = team.rawRow[12] ? team.rawRow[12].toString().trim() : "";
        if (legacyRosterRaw) {
          var blocks = legacyRosterRaw.split(/\n\s*\n|\n(?=\s*\d+\.\s+)/);
          blocks.forEach(function(block) {
            block = block.trim();
            if (!block) return;
            var role = "Pemain";
            var name = "";
            var ign = "-";
            var nip = "-";
            var gId = "-";
            var cardLink = "";
            var isOrg = block.indexOf("Organik") !== -1 && block.indexOf("Non-Organik") === -1;
            var isCap = block.indexOf("KAPTEN") !== -1;

            var linkMatch = block.match(/Link ID Card:\s*(https?:\/\/[^\s\n\r]+)/i);
            if (linkMatch) cardLink = linkMatch[1];

            var firstLine = block.split("\n")[0].trim().replace(/^\d+\.\s*/, "");
            var colonIdx = firstLine.indexOf(":");
            if (colonIdx !== -1) {
              role = firstLine.substring(0, colonIdx).trim();
              name = firstLine.substring(colonIdx + 1).trim();
            } else {
              name = firstLine;
            }

            var ignMatch = block.match(/IGN:\s*([^,\n\]]+)/i);
            if (ignMatch) ign = ignMatch[1].trim();

            var nipMatch = block.match(/NIP:\s*([^,\n\]]+)/i);
            if (nipMatch) nip = nipMatch[1].trim();

            var gidMatch = block.match(/(?:Game\s*ID|ID\s*Game|GameID)\s*:\s*([^,\n\]]+)/i);
            if (gidMatch) gId = gidMatch[1].trim();

            var cleanName = name.replace(/->\s*Link ID Card:.*$/g, "").trim();
            rosterList.push({
              role: role,
              name: cleanName || name,
              nickname: ign,
              empId: nip,
              gameId: gId,
              isOrganik: isOrg,
              isCaptain: isCap,
              idCard: cardLink
            });
          });
        }
      }

      // Ambil URL logo/folder langsung dari data tim tanpa remote Drive scan yang lambat
      var logoUrl = (team.folderUrl && team.folderUrl.trim() !== "-") ? team.folderUrl.trim() : "";

      var realCap = rosterList.find(function(m){ return m.isCaptain && (m.role || '').indexOf('Official') === -1; }) ||
                    rosterList.find(function(m){ return (m.role || '').indexOf('Pemain Inti 1') !== -1; }) ||
                    rosterList[1] || rosterList[0];
      var realCapName = realCap ? realCap.name : "-";
      var realCapNick = realCap ? realCap.nickname : "-"; // Nickname IGN utuh dari Kolom F

      var realOff = rosterList.find(function(m){ return (m.role || '').indexOf('Official 1') !== -1; }) ||
                    rosterList.find(function(m){ return (m.role || '').indexOf('Official') !== -1; });
      var realOff2 = rosterList.find(function(m){ return (m.role || '').indexOf('Official 2') !== -1; });

      var teamData = {
        id: 1000 + team.rowNumber,
        rowIndex: team.rowNumber,
        category: "MLBB",
        name: team.teamName,
        captainName: realCapName,
        captainNickname: realCapNick,
        dept: team.dept,
        wa: team.wa,
        logo: logoUrl,
        notes: team.notes,
        status: team.status,
        isInvited: !!team.isInvited,
        roster: rosterList,
        official: {
          name: realOff ? realOff.name : "-",
          empId: realOff ? realOff.empId : "-",
          gameId: realOff ? realOff.gameId : "-",
          nickname: realOff ? realOff.nickname : "-",
          isOrganik: realOff ? realOff.isOrganik : false,
          idCard: realOff ? realOff.idCard : ""
        },
        captain: {
          name: realCapName,
          empId: realCap ? realCap.empId : "-",
          gameId: realCap ? realCap.gameId : "-",
          nickname: realCapNick,
          isOrganik: realCap ? realCap.isOrganik : false,
          idCard: realCap ? realCap.idCard : ""
        }
      };
      if (realOff2) {
        teamData.official2 = {
          name: realOff2.name,
          empId: realOff2.empId,
          gameId: realOff2.gameId,
          nickname: realOff2.nickname,
          isOrganik: realOff2.isOrganik,
          idCard: realOff2.idCard || ""
        };
      }
      result.participants.push(teamData);
    }

    // B. BACA PENDAFTARAN MCGG DARI LISTING
    var mcggList = getMcggListing(ss);
    for (var j = 0; j < mcggList.length; j++) {
      var pMcgg = mcggList[j];
      result.participants.push({
        id: 2000 + pMcgg.rowNumber,
        rowIndex: pMcgg.rowNumber,
        category: "MCGG",
        name: pMcgg.name,
        nickname: pMcgg.nickname,
        dept: pMcgg.dept,
        wa: pMcgg.wa,
        empId: pMcgg.empId,
        gameId: pMcgg.gameId,
        logo: "",
        idCard: pMcgg.idCard,
        status: pMcgg.status,
        notes: pMcgg.notes,
        roster: [{
          role: "Pemain Solo",
          name: pMcgg.name,
          nickname: pMcgg.nickname,
          empId: pMcgg.empId,
          gameId: pMcgg.gameId,
          isOrganik: pMcgg.isOrganik,
          isCaptain: false,
          idCard: pMcgg.idCard
        }]
      });
    }

    // C. BACA TAB PENGATURAN TURNAMEN & PERATURAN
    var configSheet = ss.getSheetByName("Pengaturan Turnamen");
    var appConfig = {
      customRules: null,
      tournamentFormat: null,
      groupStageData: null,
      mcggLobbies: null,
            invitedTeams: null,
      isRegistrationClosed: false
    };

    if (configSheet && configSheet.getLastRow() >= 2) {
      var cData = configSheet.getDataRange().getValues();
      for (var c = 1; c < cData.length; c++) {
        var key = cData[c][0] ? cData[c][0].toString().trim() : "";
        var val = cData[c][1] ? cData[c][1].toString() : "";
        if (!key) continue;
        try {
          if (key === "customRules") appConfig.customRules = JSON.parse(val);
          if (key === "tournamentFormat") appConfig.tournamentFormat = val;
          if (key === "groupStageData") appConfig.groupStageData = JSON.parse(val);
          if (key === "groupMatchResults") appConfig.groupMatchResults = JSON.parse(val);
          if (key === "groupPlayoffMatches") appConfig.groupPlayoffMatches = JSON.parse(val);
          if (key === "mcggLobbies") appConfig.mcggLobbies = JSON.parse(val);
          if (key === "mcggDrawState") appConfig.mcggDrawState = JSON.parse(val);
          if (key === "tournamentStageState") appConfig.tournamentStageState = JSON.parse(val);
          if (key === "invitedTeams") appConfig.invitedTeams = JSON.parse(val);
          if (key === "isRegistrationClosed") appConfig.isRegistrationClosed = (val === "true");
          if (key === "isPlayoffLocked" || key.toLowerCase() === "is_playoff_locked") {
            var lockVal = (val.toString().trim().toLowerCase() === "true" || val.toString().trim() === "1");
            appConfig.isPlayoffLocked = lockVal;
            if (!appConfig.tournamentStageState) appConfig.tournamentStageState = { mlbb: {}, mcgg: {} };
            if (!appConfig.tournamentStageState.mlbb) appConfig.tournamentStageState.mlbb = {};
            appConfig.tournamentStageState.mlbb.isPlayoffLocked = lockVal;
          }
          if (key === "isGroupLocked" || key.toLowerCase() === "is_group_locked") {
            var gLockVal = (val.toString().trim().toLowerCase() === "true" || val.toString().trim() === "1");
            appConfig.isGroupLocked = gLockVal;
            if (!appConfig.tournamentStageState) appConfig.tournamentStageState = { mlbb: {}, mcgg: {} };
            if (!appConfig.tournamentStageState.mlbb) appConfig.tournamentStageState.mlbb = {};
            appConfig.tournamentStageState.mlbb.isGroupLocked = gLockVal;
          }
          // adminPassword deliberately omitted from public GET response to prevent client cache exposure
        } catch(e) {
          if (key === "tournamentFormat") appConfig.tournamentFormat = val;
          if (key === "isRegistrationClosed") appConfig.isRegistrationClosed = (val === "true");
          if (key === "isPlayoffLocked" || key.toLowerCase() === "is_playoff_locked") {
            var lockVal = (val.toString().trim().toLowerCase() === "true" || val.toString().trim() === "1");
            appConfig.isPlayoffLocked = lockVal;
            if (!appConfig.tournamentStageState) appConfig.tournamentStageState = { mlbb: {}, mcgg: {} };
            if (!appConfig.tournamentStageState.mlbb) appConfig.tournamentStageState.mlbb = {};
            appConfig.tournamentStageState.mlbb.isPlayoffLocked = lockVal;
          }
          if (key === "isGroupLocked" || key.toLowerCase() === "is_group_locked") {
            var gLockVal = (val.toString().trim().toLowerCase() === "true" || val.toString().trim() === "1");
            appConfig.isGroupLocked = gLockVal;
            if (!appConfig.tournamentStageState) appConfig.tournamentStageState = { mlbb: {}, mcgg: {} };
            if (!appConfig.tournamentStageState.mlbb) appConfig.tournamentStageState.mlbb = {};
            appConfig.tournamentStageState.mlbb.isGroupLocked = gLockVal;
          }
          // adminPassword deliberately omitted from public GET response to prevent client cache exposure
        }
      }
    }
    // C.1. BACA SHEET KHUSUS "MCGG - Point, Commander & MVP" (Ground Truth Undian & Poin MCGG)
    var sheetMCGG = ss.getSheetByName("MCGG - Point, Commander & MVP");
    if (sheetMCGG && sheetMCGG.getLastRow() > 1) {
      var mcggDataRange = sheetMCGG.getDataRange().getValues();
      var sheetLobbies = {};
      var helperParseRank = function(val) {
        if (!val || val === "-" || val === "undefined") return 0;
        var str = val.toString().trim();
        var match = str.match(/Rank\s*(\d+)/i);
        if (match) return parseInt(match[1], 10);
        var parsed = parseInt(str, 10);
        return isNaN(parsed) ? 0 : parsed;
      };

      for (var mr = 1; mr < mcggDataRange.length; mr++) {
        var mRow = mcggDataRange[mr];
        if (!mRow || mRow.length < 3) continue;
        var rawLKey = mRow[0] ? mRow[0].toString().trim() : "";
        var pName = mRow[2] ? mRow[2].toString().trim() : "";
        if (!rawLKey || !pName || pName === "TBD" || pName === "-") continue;

        var lKey = rawLKey;
        var upL = rawLKey.toUpperCase().replace(/[\s-]+/g, "_");
        if (upL === "A" || upL === "LOBI_A" || upL === "LOBBY_A" || upL === "GRUP_A") lKey = "LOBBY_A";
        else if (upL === "B" || upL === "LOBI_B" || upL === "LOBBY_B" || upL === "GRUP_B") lKey = "LOBBY_B";
        else if (upL === "C" || upL === "LOBI_C" || upL === "LOBBY_C" || upL === "GRUP_C") lKey = "LOBBY_C";
        else if (upL === "D" || upL === "LOBI_D" || upL === "LOBBY_D" || upL === "GRUP_D") lKey = "LOBBY_D";
        else if (upL === "E" || upL === "LOBI_E" || upL === "LOBBY_E" || upL === "GRUP_E") lKey = "LOBBY_E";
        else if (upL.indexOf("SEMI_A") !== -1 || upL === "SEMIFINAL_A") lKey = "SEMI_A";
        else if (upL.indexOf("SEMI_B") !== -1 || upL === "SEMIFINAL_B") lKey = "SEMI_B";
        else if (upL.indexOf("GRAND_FINAL") !== -1 || upL === "FINAL") lKey = "GRAND_FINAL";

        if (!sheetLobbies[lKey]) sheetLobbies[lKey] = [];

        var pDept = "";
        for (var pi = 0; pi < result.participants.length; pi++) {
          var part = result.participants[pi];
          if (part.category === "MCGG") {
            if ((part.name && part.name.trim().toLowerCase() === pName.toLowerCase()) ||
                (part.nickname && mRow[3] && part.nickname.trim().toLowerCase() === mRow[3].toString().trim().toLowerCase()) ||
                (part.gameId && mRow[4] && part.gameId.toString().trim() === mRow[4].toString().trim())) {
              pDept = part.dept || "";
              break;
            }
          }
        }

        var c1Val = mRow[5] ? mRow[5].toString().trim() : "";
        var c2Val = mRow[7] ? mRow[7].toString().trim() : "";
        var c3Val = mRow[9] ? mRow[9].toString().trim() : "";
        if (c1Val === "-") c1Val = "";
        if (c2Val === "-") c2Val = "";
        if (c3Val === "-") c3Val = "";

        sheetLobbies[lKey].push({
          name: pName,
          dept: pDept,
          nickname: mRow[3] ? mRow[3].toString().trim() : "-",
          gameId: mRow[4] ? mRow[4].toString().trim() : "-",
          c1: c1Val,
          r1: helperParseRank(mRow[6]),
          c2: c2Val,
          r2: helperParseRank(mRow[8]),
          c3: c3Val,
          r3: helperParseRank(mRow[10]),
          penalty: parseFloat(mRow[11]) || 0,
          total: parseFloat(mRow[12]) || 0
        });
      }

      var qualKeysFromSheet = Object.keys(sheetLobbies).filter(function(k) {
        return k.indexOf("LOBBY_") === 0 && k !== "LOBBY_LOWER";
      });
      if (qualKeysFromSheet.length > 0) {
        appConfig.mcggLobbies = sheetLobbies;
      }
    }

    // C.2. BACA SHEET KHUSUS "MLBB - Klasemen & Point" (Ground Truth Klasemen & Grup MLBB)
    var sheetMLBBPoint = ss.getSheetByName("MLBB - Klasemen & Point");
    if (sheetMLBBPoint && sheetMLBBPoint.getLastRow() > 1) {
      var pData = sheetMLBBPoint.getDataRange().getValues();
      var sheetGroupData = {};
      for (var pr = 1; pr < pData.length; pr++) {
        var pRow = pData[pr];
        if (!pRow || pRow.length < 3) continue;
        var rawGName = pRow[0] ? pRow[0].toString().trim() : "";
        var tName = pRow[2] ? pRow[2].toString().trim() : "";
        if (!rawGName || !tName || tName === "-" || tName.indexOf("(TBD)") !== -1) continue;

        var gName = rawGName;
        var matchG = rawGName.match(/(?:Grup|Group)?\s*([A-H])/i);
        if (matchG) {
          gName = "Grup " + matchG[1].toUpperCase();
        }

        if (!sheetGroupData[gName]) sheetGroupData[gName] = [];
        sheetGroupData[gName].push({
          name: tName,
          win: parseInt(pRow[4], 10) || 0,
          lose: parseInt(pRow[5], 10) || 0,
          pts: (pRow[7] !== undefined && pRow[7] !== "") ? (parseInt(pRow[7], 10) || 0) : ((parseInt(pRow[4], 10) || 0) * 2)
        });
      }
      if (Object.keys(sheetGroupData).length > 0) {
        appConfig.groupStageData = sheetGroupData;
      }
    }

    // C.3. BACA SHEET KHUSUS "MLBB - Bagan & MVP" (Ground Truth Jadwal, Skor, MVP & Playoff 6 Ronde)
    var sheetMLBBBagan = ss.getSheetByName("MLBB - Bagan & MVP");
    if (sheetMLBBBagan && sheetMLBBBagan.getLastRow() > 1) {
      var bData = sheetMLBBBagan.getDataRange().getValues();
      var sheetMatchResults = {};
      var reconstructedPlayoff = [[], [], [], [], [], []]; // 6 ronde
      var hasPlayoffRows = false;

      for (var br = 1; br < bData.length; br++) {
        var bRow = bData[br];
        if (!bRow || bRow.length < 4) continue;
        var mId = bRow[0] ? bRow[0].toString().trim() : "";
        var phase = bRow[1] ? bRow[1].toString().trim() : "";
        var teamA = bRow[3] ? bRow[3].toString().trim() : "";
        var teamB = bRow[6] ? bRow[6].toString().trim() : "";
        if (!mId || (!teamA && !teamB)) continue;

        var sA = (bRow[4] !== "-" && bRow[4] !== "" && bRow[4] !== undefined && !isNaN(parseInt(bRow[4], 10))) ? parseInt(bRow[4], 10) : null;
        var sB = (bRow[5] !== "-" && bRow[5] !== "" && bRow[5] !== undefined && !isNaN(parseInt(bRow[5], 10))) ? parseInt(bRow[5], 10) : null;
        var winner = (bRow[7] && bRow[7] !== "TBD" && bRow[7] !== "-") ? bRow[7].toString().trim() : null;
        var mvpPlayer = (bRow[8] && bRow[8] !== "-") ? bRow[8].toString().trim() : "";
        var mvpHero = (bRow[9] && bRow[9] !== "-") ? bRow[9].toString().trim() : "";
        var status = bRow[10] ? bRow[10].toString().trim() : ((winner && winner !== "TBD") ? "FINISHED" : "SCHEDULED");

        var rawRIdx = bRow[11] !== undefined ? bRow[11].toString().trim() : "";
        var rawMIdx = bRow[12] !== undefined ? bRow[12].toString().trim() : "";
        var bracket = bRow[13] ? bRow[13].toString().trim() : "";
        var day = bRow[14] ? bRow[14].toString().trim() : "-";
        var time = bRow[15] ? bRow[15].toString().trim() : "-";
        var g1 = bRow[16] ? bRow[16].toString().trim() : "-";
        var g2 = bRow[17] ? bRow[17].toString().trim() : "-";
        var g3 = bRow[18] ? bRow[18].toString().trim() : "-";
        var g4 = bRow[19] ? bRow[19].toString().trim() : "-";
        var g5 = bRow[20] ? bRow[20].toString().trim() : "-";

        // Auto-heal jika skor terbalik terhadap pemenang match
        if (winner && sA !== null && sB !== null && teamA && teamB) {
          var wLower = winner.toLowerCase();
          if (wLower.indexOf("wo") === -1 && wLower.indexOf("imbang") === -1 && wLower.indexOf("seri") === -1) {
            var tALower = teamA.toLowerCase();
            var tBLower = teamB.toLowerCase();
            if (wLower === tALower && sA < sB) {
              var tmp = sA; sA = sB; sB = tmp;
            } else if (wLower === tBLower && sB < sA) {
              var tmp = sA; sA = sB; sB = tmp;
            }
          }
        }

        var isGroup = (rawRIdx === "GRP" || phase.indexOf("Fase Grup") === 0 || mId.indexOf("GRP_") === 0 || (!rawRIdx && mId.indexOf("_vs_") !== -1));

        if (isGroup) {
          var gNameParsed = phase.replace("Fase Grup - ", "").trim();
          var matchObj = {
            matchId: mId,
            gName: gNameParsed,
            teamA: teamA,
            teamB: teamB,
            scoreA: sA,
            scoreB: sB,
            winner: winner,
            mvpPlayer: mvpPlayer,
            mvpHero: mvpHero,
            status: status,
            day: day,
            time: time,
            format: bRow[2] || "BO3"
          };

          sheetMatchResults[mId] = matchObj;

          if (gNameParsed && teamA && teamB) {
            var sortedTeams = [teamA.trim(), teamB.trim()].sort();
            var canonKey = (gNameParsed + "_" + sortedTeams[0] + "_vs_" + sortedTeams[1]).replace(/\s+/g, "_");
            sheetMatchResults[canonKey] = matchObj;
          }
        } else {
          var rIdx = parseInt(rawRIdx, 10);
          var mIdx = parseInt(rawMIdx, 10);

          if (isNaN(rIdx) || isNaN(mIdx)) {
            if (mId.indexOf("UB_R1_") === 0) {
              rIdx = 0;
              mIdx = parseInt(mId.replace("UB_R1_", ""), 10) - 1;
              if (!bracket) bracket = "UPPER";
            } else if (mId.indexOf("UB_QF_") === 0) {
              rIdx = 1;
              mIdx = parseInt(mId.replace("UB_QF_", ""), 10) - 1;
              if (!bracket) bracket = "UPPER";
            } else if (mId.indexOf("LB_R1_") === 0) {
              rIdx = 1;
              mIdx = 4 + parseInt(mId.replace("LB_R1_", ""), 10) - 1;
              if (!bracket) bracket = "LOWER";
            } else if (mId.indexOf("UB_SF_") === 0) {
              rIdx = 2;
              mIdx = parseInt(mId.replace("UB_SF_", ""), 10) - 1;
              if (!bracket) bracket = "UPPER";
            } else if (mId.indexOf("LB_R2_") === 0) {
              rIdx = 2;
              mIdx = 2 + parseInt(mId.replace("LB_R2_", ""), 10) - 1;
              if (!bracket) bracket = "LOWER";
            } else if (mId.indexOf("LB_R3_") === 0) {
              rIdx = 2;
              mIdx = 6 + parseInt(mId.replace("LB_R3_", ""), 10) - 1;
              if (!bracket) bracket = "LOWER";
            } else if (mId.indexOf("LB_QF_") === 0) {
              rIdx = 3;
              mIdx = parseInt(mId.replace("LB_QF_", ""), 10) - 1;
              if (!bracket) bracket = "LOWER";
            } else if (mId === "UB_FINAL") {
              rIdx = 4;
              mIdx = 0;
              if (!bracket) bracket = "UPPER";
            } else if (mId.indexOf("LB_SF_") === 0) {
              rIdx = 4;
              mIdx = 1 + parseInt(mId.replace("LB_SF_", ""), 10) - 1;
              if (!bracket) bracket = "LOWER";
            } else if (mId === "LB_PRELIM") {
              rIdx = 4;
              mIdx = 3;
              if (!bracket) bracket = "LOWER";
            } else if (mId === "LB_FINAL") {
              rIdx = 4;
              mIdx = 4;
              if (!bracket) bracket = "LOWER";
            } else if (mId === "GRAND_FINAL") {
              rIdx = 5;
              mIdx = 0;
              if (!bracket) bracket = "GRAND_FINAL";
            } else {
              var poMatch = mId.match(/^PO_R(\d+)_M(\d+)$/);
              if (poMatch) {
                rIdx = parseInt(poMatch[1], 10) - 1;
                mIdx = parseInt(poMatch[2], 10) - 1;
              }
            }
          }

          if (!bracket) {
            bracket = (mId.indexOf("UB") === 0) ? "UPPER" : ((mId.indexOf("LB") === 0) ? "LOWER" : (mId.indexOf("GRAND_FINAL") === 0 ? "GRAND_FINAL" : "UPPER"));
          }

          var playoffObj = {
            matchId: mId,
            matchLabel: mId,
            phaseName: phase || (rIdx === 5 ? "Grand Final BO5 (Hari 5)" : ("Playoff Ronde " + (rIdx + 1))),
            format: bRow[2] || (phase.indexOf("Grand Final") !== -1 ? "BO5" : "BO3"),
            teamA: teamA,
            teamB: teamB,
            scoreA: sA,
            scoreB: sB,
            winner: winner,
            mvpPlayer: mvpPlayer,
            mvpHero: mvpHero,
            status: status,
            bracket: bracket,
            day: day,
            time: time,
            game1: g1,
            game2: g2,
            game3: g3,
            game4: g4,
            game5: g5
          };

          if (!isNaN(rIdx) && rIdx >= 0 && rIdx < 6 && !isNaN(mIdx) && mIdx >= 0) {
            reconstructedPlayoff[rIdx][mIdx] = playoffObj;
            hasPlayoffRows = true;
          }
        }
      }

      if (Object.keys(sheetMatchResults).length > 0) {
        appConfig.groupMatchResults = sheetMatchResults;
      }
      if (hasPlayoffRows) {
        appConfig.groupPlayoffMatches = reconstructedPlayoff.map(function(round) {
          return round.filter(Boolean);
        });
      }
    }

    result.config = appConfig;

    // D. BACA TAB MCGG MATCH SET UP (HERO, ALTER NAME, TIER LIST, URL GAMBAR HERO & ALTER)
    var setupSheet = ss.getSheetByName("MCGG Match Set Up") || 
                     ss.getSheetByName("mcgg set up") || 
                     ss.getSheetByName("MCGG Set Up") || 
                     ss.getSheetByName("MCGG Setup");
    var mcggCommanderSetup = [];
    if (setupSheet && setupSheet.getLastRow() > 1) {
      var sData = setupSheet.getDataRange().getValues();
      for (var s = 1; s < sData.length; s++) {
        var sRow = sData[s];
        if (!sRow || sRow.length === 0) continue;
        var hero = sRow[0] ? sRow[0].toString().trim() : "";
        var alterName = sRow[1] ? sRow[1].toString().trim() : "";
        var tier = sRow[2] ? sRow[2].toString().trim() : "";

        // Baca URL gambar hero dan alter jika diisi di kolom D/E/seterusnya
        var heroImage = "";
        var alterImage = "";
        for (var col = 3; col < sRow.length; col++) {
          var val = sRow[col] ? sRow[col].toString().trim() : "";
          if (val.indexOf("http") === 0) {
            if (!heroImage) {
              heroImage = val;
            } else if (!alterImage) {
              alterImage = val;
            }
          }
        }

        if (hero || alterName) {
          var formattedName = hero;
          if (hero && alterName && hero.toLowerCase() !== alterName.toLowerCase()) {
            formattedName = hero + " [" + alterName + "]";
          } else if (!hero && alterName) {
            formattedName = alterName;
          }

          mcggCommanderSetup.push({
            hero: hero,
            alterName: alterName,
            tier: tier || "Normal",
            name: hero || alterName,
            displayName: formattedName,
            heroImage: heroImage,
            alterImage: alterImage
          });
        }
      }
    }
    result.mcggCommanderSetup = mcggCommanderSetup;
    return result;

  } catch (err) {
    Logger.log("getInitialData Error: " + err.toString());
    return {
      status: "error",
      error: err.toString(),
      participants: [],
      config: {}
    };
  }
}

/**
 * 1. GET HANDLER: FETCH SEMUA PESERTA & KONFIGURASI KE WEBSITE
 */
function doGet(e) {
  try {
    var ss = getTargetSpreadsheet();
    var result = getInitialData(ss);
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ========================================================
// 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE
// ========================================================
function getValidAdminPins(ss) {
  var validPins = ["YOKKE2026_", "YOKKE2026"];
  try {
    var cfgSheetCheck = ss.getSheetByName("Pengaturan Turnamen");
    if (cfgSheetCheck && cfgSheetCheck.getLastRow() >= 2) {
      var cData = cfgSheetCheck.getDataRange().getValues();
      for (var c = 1; c < cData.length; c++) {
        var kName = cData[c][0] ? cData[c][0].toString().trim().toLowerCase() : "";
        if (kName === "adminpassword" || kName === "admin_password" || kName === "admin_pin") {
          if (cData[c][1]) {
            var customVal = cData[c][1].toString().trim();
            if (customVal && validPins.indexOf(customVal) === -1) {
              validPins.push(customVal);
            }
          }
        }
      }
    }
  } catch(e) {}
  return validPins;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  var hasLock = false;
  try {
    lock.waitLock(10000);
    hasLock = true;
  } catch(le) {
    hasLock = false;
  }

  if (!hasLock) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      status: "error",
      message: "Server sedang sibuk memproses pendaftaran lain. Silakan coba kembali dalam beberapa saat."
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var data = JSON.parse(e.postData.contents);
    var ss = getTargetSpreadsheet();
    var sheets = ensureRelationalSheetsExist(ss);
    var now = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

    // Action: Verifikasi Login Panitia (Server-Side Authentication)
    if (data.action === "VERIFY_ADMIN_PIN" || data.action === "LOGIN_PANITIA" || data.action === "LOGIN_ADMIN") {
      var reqPin = (data.adminPin || data.adminPassword || data.pin || "").toString().trim();
      var validPins = getValidAdminPins(ss);
      if (reqPin && validPins.indexOf(reqPin) !== -1) {
        return ContentService.createTextOutput(JSON.stringify({
          success: true,
          status: "success",
          message: "PIN Panitia valid. Akses login panitia diberikan.",
          isAdmin: true
        })).setMimeType(ContentService.MimeType.JSON);
      } else {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          status: "error",
          message: "PIN Panitia salah! Akses ditolak."
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // Validasi Keamanan Server: Setiap request perubahan administratif wajib menyertakan adminPin yang valid
    if (data.action === "SAVE_CONFIG" || data.action === "DELETE" || data.action === "BATCH_UPDATE_PARTICIPANTS" || data.action === "BATCH_UPDATE_ALL" || data.action === "UPDATE_MATCH_ROW") {
      var reqPin = (data.adminPin || data.adminPassword || "").toString().trim();
      var validPins = getValidAdminPins(ss);
      
      if (!validPins.includes(reqPin)) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          status: "error",
          message: "Akses ditolak: PIN Panitia tidak valid atau tidak disertakan."
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    var mainFolder = getOrCreateUploadFolder();

    function saveBase64Image(base64Data, fileName, targetFolder) {
      if (!base64Data || typeof base64Data !== 'string' || base64Data.indexOf("data:image") === -1) {
        return "-";
      }
      try {
        var parts = base64Data.split(",");
        var contentType = parts[0].split(";")[0].replace("data:", "");
        var decoded = Utilities.base64Decode(parts[1]);
        var blob = Utilities.newBlob(decoded, contentType, fileName);
        var destination = targetFolder || mainFolder || DriveApp.getRootFolder();
        var file = destination.createFile(blob);
        safeSetSharing(file);
        return file.getUrl();
      } catch (err) {
        return "Gagal: " + err.toString();
      }
    }

    if (data.action === "SAVE_CONFIG") {
      var cfgSheet = ss.getSheetByName("Pengaturan Turnamen");
      if (!cfgSheet) {
        cfgSheet = ss.insertSheet("Pengaturan Turnamen");
        cfgSheet.appendRow(["Kunci Konfigurasi", "Isi Nilai", "Terakhir Diperbarui"]);
        cfgSheet.getRange(1, 1, 1, 3).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff");
      }

      var rows = cfgSheet.getDataRange().getValues();
      var keyRowIdx = {};
      for (var k = 1; k < rows.length; k++) {
        var kName = rows[k][0] ? rows[k][0].toString().trim() : "";
        if (kName) keyRowIdx[kName] = k;
      }

      var stageMLBB = (data.tournamentStageState && data.tournamentStageState.mlbb && data.tournamentStageState.mlbb.stage) || 
                      (data.tournamentStage) || "STAGE_2_PLAYOFF";
      var isPlayoffLockedVal = data.isPlayoffLocked !== undefined ? (data.isPlayoffLocked ? "true" : "false") : (data.tournamentStageState && data.tournamentStageState.mlbb && data.tournamentStageState.mlbb.isPlayoffLocked !== undefined ? (data.tournamentStageState.mlbb.isPlayoffLocked ? "true" : "false") : null);
      var isGroupLockedVal = data.isGroupLocked !== undefined ? (data.isGroupLocked ? "true" : "false") : (data.tournamentStageState && data.tournamentStageState.mlbb && data.tournamentStageState.mlbb.isGroupLocked !== undefined ? (data.tournamentStageState.mlbb.isGroupLocked ? "true" : "false") : null);
      var isRegClosedVal = data.isRegistrationClosed !== undefined ? (data.isRegistrationClosed ? "true" : "false") : null;

      var customRulesMLBB = null;
      var customRulesMCGG = null;
      if (data.customRules) {
        if (typeof data.customRules === "string") {
          customRulesMLBB = data.customRules;
        } else if (typeof data.customRules === "object") {
          if (data.customRules.mlbb) customRulesMLBB = String(data.customRules.mlbb);
          if (data.customRules.mcgg) customRulesMCGG = String(data.customRules.mcgg);
        }
      }

      // Tuliskan HANYA nilai skalar pendek (Bebas JSON blob raksasa!)
      var itemsToSave = [
        { key: "tournamentFormat", val: data.tournamentFormat || "16_TEAM_GROUP_PLAYOFF" },
        { key: "isRegistrationClosed", val: isRegClosedVal },
        { key: "isPlayoffLocked", val: isPlayoffLockedVal },
        { key: "isGroupLocked", val: isGroupLockedVal },
        { key: "tournamentStage", val: stageMLBB },
        { key: "adminpassword", val: data.adminPassword || data.adminPin || null },
        { key: "customRules_mlbb", val: customRulesMLBB },
        { key: "customRules_mcgg", val: customRulesMCGG },
        // Timpa dan bersihkan kunci-kunci lama yang sebelumnya menyimpan JSON raksasa
        { key: "groupPlayoffMatches", val: "MIGRATED_TO_RELATIONAL_SHEETS" },
        { key: "groupMatchResults", val: "MIGRATED_TO_RELATIONAL_SHEETS" },
        { key: "groupStageData", val: "MIGRATED_TO_RELATIONAL_SHEETS" },
        { key: "mcggLobbies", val: "MIGRATED_TO_RELATIONAL_SHEETS" },
        { key: "tournamentStageState", val: "MIGRATED_TO_RELATIONAL_SHEETS" },
        { key: "customRules", val: "MIGRATED_TO_RELATIONAL_SHEETS" },
        { key: "mcggDrawState", val: "MIGRATED_TO_RELATIONAL_SHEETS" },
        { key: "invitedTeams", val: "MIGRATED_TO_RELATIONAL_SHEETS" }
      ];

      itemsToSave.forEach(function(item) {
        if (item.val !== null && item.val !== undefined) {
          if (keyRowIdx[item.key] !== undefined) {
            rows[keyRowIdx[item.key]][1] = item.val;
            rows[keyRowIdx[item.key]][2] = now;
          } else {
            rows.push([item.key, item.val, now]);
            keyRowIdx[item.key] = rows.length - 1;
          }
        }
      });

      if (rows.length > 0) {
        cfgSheet.getRange(1, 1, rows.length, 3).setValues(rows);
      }

      // Otomatis sinkronkan 3 Sheet Turnamen Terpisah (Tabel Murni Relasional + MVP)
      var payloadForSync = data.config || data;
      var syncMetrics = syncDedicatedTournamentSheets(ss, payloadForSync);
      if (syncMetrics && syncMetrics.config) {
        syncMetrics.config.rows = rows.length;
      }

      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Data turnamen berhasil disimpan murni per-baris & per-kolom tanpa limit sel!",
        metrics: syncMetrics
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // case 'UPDATE_MATCH_ROW': Sinkronisasi per pertandingan (1 baris di data match + 2 baris tim di klasemen = 3 baris data)
    if (data.action === "UPDATE_MATCH_ROW") {
      var match = data.match || {};
      var standings = data.standings || [];
      var gName = match.gName || "Grup A";
      var canonId = match.matchId;
      var teamA = match.teamA || "";
      var teamB = match.teamB || "";
      var scoreA = match.scoreA !== null ? match.scoreA : "-";
      var scoreB = match.scoreB !== null ? match.scoreB : "-";
      var winner = match.winner || "";
      var mvpPlayer = match.mvpPlayer || "-";
      var mvpHero = match.mvpHero || "-";
      var statusMatch = (winner && winner !== "TBD") ? "FINISHED" : "SCHEDULED";
      var updatedRowCount = 0;

      // 1. UPDATE DI SHEET "MLBB - Bagan & MVP" (1 Baris Data Match - 21 Kolom)
      var sheetBagan = ss.getSheetByName("MLBB - Bagan & MVP");
      if (!sheetBagan) {
        var payloadForSync = data.config || data;
        syncDedicatedTournamentSheets(ss, payloadForSync);
        sheetBagan = ss.getSheetByName("MLBB - Bagan & MVP");
      }

      if (sheetBagan && sheetBagan.getLastRow() >= 1) {
        var baganVals = sheetBagan.getDataRange().getValues();
        var matchRowIdx = -1;
        for (var b = 1; b < baganVals.length; b++) {
          if (baganVals[b][0] && baganVals[b][0].toString().trim() === canonId) {
            matchRowIdx = b + 1;
            break;
          }
        }
        var newMatchRow = [
          canonId,
          match.isPlayoff ? (match.phaseName || "Playoff") : ("Fase Grup - " + gName),
          match.format || "BO3",
          teamA,
          scoreA,
          scoreB,
          teamB,
          winner,
          mvpPlayer,
          mvpHero,
          statusMatch,
          match.isPlayoff ? (match.rIdx !== undefined ? match.rIdx : 0) : "GRP",
          match.mIdx !== undefined ? match.mIdx : 0,
          match.isPlayoff ? (match.bracket || "UPPER") : "GROUP",
          match.day ? (String(match.day).indexOf("Hari") !== -1 ? String(match.day) : ("Hari " + match.day)) : (match.isPlayoff ? "-" : "Hari 1"),
          match.time || "-",
          match.game1 || "-",
          match.game2 || "-",
          match.game3 || "-",
          match.game4 || "-",
          match.game5 || "-"
        ];
        if (matchRowIdx > 0) {
          sheetBagan.getRange(matchRowIdx, 1, 1, newMatchRow.length).setValues([newMatchRow]);
          updatedRowCount++;
        } else {
          sheetBagan.appendRow(newMatchRow);
          updatedRowCount++;
        }
      }

      // 2. UPDATE DI SHEET "MLBB - Klasemen & Point" (2 Baris Tim - 10 Kolom)
      var sheetPoint = ss.getSheetByName("MLBB - Klasemen & Point");
      if (sheetPoint && sheetPoint.getLastRow() >= 1 && standings.length > 0) {
        var pointVals = sheetPoint.getDataRange().getValues();
        standings.forEach(function(st) {
          var targetGrp = (st.gName || gName || "").toString().trim().toLowerCase();
          var targetTeam = (st.teamName || st.name || "").toString().trim().toLowerCase();
          var teamRowIdx = -1;
          for (var p = 1; p < pointVals.length; p++) {
            var rowGrp = (pointVals[p][0] || "").toString().trim().toLowerCase();
            var rowTeam = (pointVals[p][2] || "").toString().trim().toLowerCase();
            if (rowGrp === targetGrp && rowTeam === targetTeam) {
              teamRowIdx = p + 1;
              break;
            }
          }
          var newPointRow = [
            st.gName || gName,
            st.rank || (st.rankNum ? `#${st.rankNum}` : "-"),
            st.teamName || st.name,
            st.matchCount !== undefined ? st.matchCount : 0,
            st.win || 0,
            st.lose || 0,
            st.diffStr || (st.diff > 0 ? `+${st.diff}` : `${st.diff || 0}`),
            st.pts || 0,
            st.status || "Menunggu Seluruh Match",
            st.mvpCount || 0
          ];
          if (teamRowIdx > 0) {
            sheetPoint.getRange(teamRowIdx, 1, 1, newPointRow.length).setValues([newPointRow]);
            updatedRowCount++;
          }
        });
      }

      // CATATAN: TIDAK ADA PENYIMPANAN STRING JSON KE SHEET "Pengaturan Turnamen" AGAR BEBAS LIMIT 50.000 CHAR!

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        rowsUpdated: updatedRowCount,
        updatedRows: updatedRowCount,
        updatedRowCount: updatedRowCount,
        colsUpdated: 21,
        matchId: canonId,
        message: "Berhasil memperbarui " + updatedRowCount + " baris data (1 baris match + " + standings.length + " baris klasemen) untuk match " + canonId,
        metrics: {
          rowsUpdated: updatedRowCount,
          colsUpdated: 21,
          colsAdded: 0
        }
      })).setMimeType(ContentService.MimeType.JSON);
    }

    if (data.action === "CREATE_TOURNAMENT_SHEETS") {
      var payloadForSync = data.config || data;
      syncDedicatedTournamentSheets(ss, payloadForSync);
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Berhasil membuat & memperbarui 3 Sheet: MLBB - Klasemen & Point, MLBB - Bagan & MVP, dan MCGG - Point, Commander & MVP!" 
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // case 'BATCH_UPDATE_PARTICIPANTS': Pembaruan data peserta secara batch
    if (data.action === "BATCH_UPDATE_PARTICIPANTS" || data.action === "BATCH_UPDATE_ALL") {
      var updates = data.participants || data.updates || [];
      var updatedCount = 0;
      var timSheet = sheets.timSheet;
      var mcSheet = sheets.mcggSheet;

      var timVals = (timSheet && timSheet.getLastRow() > 1) ? timSheet.getDataRange().getValues() : [];
      var mcVals = (mcSheet && mcSheet.getLastRow() > 1) ? mcSheet.getDataRange().getValues() : [];

      updates.forEach(function(p) {
        if (!p) return;
        if (p.category === "MLBB") {
          var targetTeamName = (p.name || p.teamName || "").toString().trim().toLowerCase();
          for (var r = 1; r < timVals.length; r++) {
            var rowTeam = (timVals[r][1] || "").toString().trim().toLowerCase();
            if (rowTeam === targetTeamName) {
              if (p.status) timSheet.getRange(r + 1, 6).setValue(p.status);
              if (p.notes !== undefined) timSheet.getRange(r + 1, 7).setValue(p.notes);
              if (p.dept) timSheet.getRange(r + 1, 3).setValue(p.dept);
              if (p.wa) timSheet.getRange(r + 1, 4).setValue(p.wa);
              timSheet.getRange(r + 1, 1).setValue(now);
              updatedCount++;
              break;
            }
          }
        } else if (p.category === "MCGG") {
          var targetName = (p.name || "").toString().trim().toLowerCase();
          var targetNip = (p.empId || "").toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
          for (var mr = 1; mr < mcVals.length; mr++) {
            var rName = (mcVals[mr][1] || "").toString().trim().toLowerCase();
            var rNip = (mcVals[mr][4] || "").toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            if ((targetNip && targetNip.length >= 3 && rNip === targetNip) || (rName && rName === targetName)) {
              mcSheet.getRange(mr + 1, 1).setValue(now);
              if (p.dept) mcSheet.getRange(mr + 1, 3).setValue(p.dept);
              if (p.wa) mcSheet.getRange(mr + 1, 4).setValue(p.wa);
              if (p.gameId) mcSheet.getRange(mr + 1, 6).setValue(p.gameId);
              if (p.nickname) mcSheet.getRange(mr + 1, 7).setValue(p.nickname);
              if (p.status) mcSheet.getRange(mr + 1, 10).setValue(p.status);
              if (p.notes !== undefined) mcSheet.getRange(mr + 1, 11).setValue(p.notes);
              updatedCount++;
              break;
            }
          }
        }
      });

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        success: true,
        updatedCount: updatedCount,
        message: "Berhasil memperbarui " + updatedCount + " data peserta secara batch!"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    if (data.action === "DELETE") {
      if (data.category === "MLBB") {
        var targetTeamName = (data.teamName || data.name || "").toString().trim().toLowerCase();
        var timSheet = sheets.timSheet;
        var pesSheet = sheets.pesertaSheet;

        // 1. Hapus dari MLBB - Tim
        if (timSheet && timSheet.getLastRow() > 1) {
          var tVals = timSheet.getDataRange().getValues();
          for (var tr = tVals.length - 1; tr >= 1; tr--) {
            var rowName = (tVals[tr][1] || "").toString().trim().toLowerCase();
            if (rowName === targetTeamName) {
              timSheet.deleteRow(tr + 1);
            }
          }
        }

        // 2. Hapus seluruh roster anak dari MLBB - Peserta
        if (pesSheet && pesSheet.getLastRow() > 1) {
          var pVals = pesSheet.getDataRange().getValues();
          for (var pr = pVals.length - 1; pr >= 1; pr--) {
            var rTeam = (pVals[pr][1] || "").toString().trim().toLowerCase();
            if (rTeam === targetTeamName) {
              pesSheet.deleteRow(pr + 1);
            }
          }
        }

        // 3. Hapus dari legacy Pendaftaran MLBB jika ada
        var legacyMlbb = ss.getSheetByName("Pendaftaran MLBB");
        if (legacyMlbb && legacyMlbb.getLastRow() > 1) {
          var lVals = legacyMlbb.getDataRange().getValues();
          for (var lr = lVals.length - 1; lr >= 1; lr--) {
            if ((lVals[lr][1] || "").toString().trim().toLowerCase() === targetTeamName) {
              legacyMlbb.deleteRow(lr + 1);
            }
          }
        }
      } else {
        // MCGG
        var mcSheet = sheets.mcggSheet;
        if (mcSheet && mcSheet.getLastRow() > 1) {
          var mTargetName = (data.name || "").toString().trim().toLowerCase();
          var mTargetNip = (data.empId || "").toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
          var mVals = mcSheet.getDataRange().getValues();
          for (var mr = mVals.length - 1; mr >= 1; mr--) {
            var rName = (mVals[mr][1] || "").toString().trim().toLowerCase();
            var rNip = (mVals[mr][4] || "").toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            if ((mTargetNip && mTargetNip.length >= 3 && rNip === mTargetNip) || rName === mTargetName) {
              mcSheet.deleteRow(mr + 1);
              break;
            }
          }
        }
      }

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        success: true,
        message: "Data berhasil dihapus dari Google Sheets"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Flag update
    var isUpdate = (data.action === "UPDATE" || data.isUpdate === true);

    // ========================================================
    // LOGIKA PENDAFTARAN & UPDATE: MLBB (RELASIONAL PARENT & CHILD)
    // ========================================================
    if (data.category === "MLBB") {
      var teamName = data.teamName || data.name || "Tim MLBB";
      var roster = data.roster || [];
      var cleanTargetName = teamName.toLowerCase().replace(/[^a-z0-9]/g, "");

      var officials = roster.filter(function(m){ return (m.role || '').indexOf('Official') !== -1; });
      var players = roster.filter(function(m){ return (m.role || '').indexOf('Official') === -1; });

      // Validasi 0: Logo Tim MLBB Wajib Diunggah jika pendaftaran baru
      if (!isUpdate && (!data.logo || data.logo.trim() === "" || data.logo === "-")) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "error",
          success: false,
          message: "Pendaftaran ditolak: Logo Tim MLBB wajib diunggah!"
        })).setMimeType(ContentService.MimeType.JSON);
      }

      // Validasi 1: Foto ID Card wajib untuk setiap anggota yang terdaftar (jika pendaftaran baru)
      if (!isUpdate) {
        for (var r = 0; r < roster.length; r++) {
          var mCheck = roster[r];
          if (!mCheck.idCard || mCheck.idCard.trim() === "" || mCheck.idCard === "-") {
            return ContentService.createTextOutput(JSON.stringify({
              status: "error",
              success: false,
              message: "Pendaftaran ditolak: Foto ID Card " + (mCheck.role || "Anggota") + " (" + (mCheck.name || "-") + ") wajib diunggah!"
            })).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }

      // Validasi 2: Official tidak boleh merangkap sebagai pemain
      for (var o = 0; o < officials.length; o++) {
        var offItem = officials[o];
        var offNip = (offItem.empId || '').toString().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        var offName = (offItem.name || '').toString().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        for (var p = 0; p < players.length; p++) {
          var playItem = players[p];
          var playNip = (playItem.empId || '').toString().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
          var playName = (playItem.name || '').toString().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

          if (offNip && offNip.length >= 3 && offNip === playNip) {
            return ContentService.createTextOutput(JSON.stringify({
              status: "error",
              success: false,
              message: "Pendaftaran ditolak: " + offItem.role + " (" + offItem.name + ", NIP: " + offItem.empId + ") tidak boleh merangkap sebagai pemain (" + playItem.role + ")!"
            })).setMimeType(ContentService.MimeType.JSON);
          }
          if (offName && offName.length >= 3 && offName === playName) {
            return ContentService.createTextOutput(JSON.stringify({
              status: "error",
              success: false,
              message: "Pendaftaran ditolak: " + offItem.role + " (" + offItem.name + ") tidak boleh terdaftar sebagai pemain (" + playItem.role + ")!"
            })).setMimeType(ContentService.MimeType.JSON);
          }
          if (offItem.idCard && playItem.idCard && offItem.idCard === playItem.idCard) {
            return ContentService.createTextOutput(JSON.stringify({
              status: "error",
              success: false,
              message: "Pendaftaran ditolak: Foto ID Card " + offItem.role + " tidak boleh sama dengan foto ID Card " + playItem.role + "!"
            })).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }

      // Validasi 3: Cek duplikasi NIP antar pemain dalam satu tim
      for (var pi = 0; pi < players.length; pi++) {
        var p1 = players[pi];
        var nip1 = (p1.empId || '').toString().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        if (!nip1 || nip1.length < 3) continue;

        for (var pj = pi + 1; pj < players.length; pj++) {
          var p2 = players[pj];
          var nip2 = (p2.empId || '').toString().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
          if (nip1 === nip2) {
            return ContentService.createTextOutput(JSON.stringify({
              status: "error",
              success: false,
              message: "Pendaftaran ditolak: NIP Pegawai '" + p1.empId + "' terdaftar ganda pada " + p1.role + " (" + p1.name + ") dan " + p2.role + " (" + p2.name + ")!"
            })).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }

      // Cari atau buat folder Google Drive untuk tim
      var teamFolderName = "[MLBB] " + teamName + " - " + (data.dept || "Yokke");
      var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);
      var teamFolderUrl = teamFolder ? teamFolder.getUrl() : "-";

      var logoUrl = "-";
      if (data.logo && data.logo.indexOf("data:image") !== -1) {
        logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);
      } else if (data.logo && data.logo.indexOf("http") !== -1) {
        logoUrl = data.logo;
      }

      // Cek Listing MLBB Tim untuk mendeteksi apakah Tim SUDAH ADA (1 Tim = 1 Record)
      var timListing = getMlbbTimListing(ss);
      var existingTim = timListing.find(function(t) {
        return t.teamName.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanTargetName;
      });

      // KASUS 3: Data Sudah Ada tapi isUpdate !== true -> Kembalikan DUPLICATE_ENTRY
      if (existingTim && !isUpdate) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          status: "error",
          code: "DUPLICATE_ENTRY",
          message: "Data dengan Nama Tim '" + teamName + "' sudah terdaftar di sistem. Konfirmasi update diperlukan."
        })).setMimeType(ContentService.MimeType.JSON);
      }

      var timSheet = sheets.timSheet;
      var pesertaSheet = sheets.pesertaSheet;

      // KASUS 2: Data Sudah Ada & isUpdate === true -> SELECTIVE CELL UPDATE
      if (existingTim && isUpdate) {
        var tRow = existingTim.rowNumber;
        // Update selektif tabel Parent (MLBB - Tim) - 1 Tim = 1 Record
        timSheet.getRange(tRow, 1).setValue(now);
        if (teamName) timSheet.getRange(tRow, 2).setValue(teamName);
        if (data.dept) timSheet.getRange(tRow, 3).setValue(data.dept);
        if (data.wa) timSheet.getRange(tRow, 4).setValue(data.wa);
        if (teamFolderUrl && teamFolderUrl !== "-") timSheet.getRange(tRow, 5).setValue(teamFolderUrl);
        if (data.status) timSheet.getRange(tRow, 6).setValue(data.status);
        if (data.notes) timSheet.getRange(tRow, 7).setValue(data.notes);

        // Update selektif tabel Child (MLBB - Peserta)
        var allPesertaData = pesertaSheet.getDataRange().getValues();

        roster.forEach(function(m, idx) {
          var safeRole = (m.role || "Pemain").replace(/[^a-zA-Z0-9]/g, "_");
          var safeName = (m.name || ("Anggota_" + (idx + 1))).replace(/[^a-zA-Z0-9]/g, "_");
          var safeEmp = (m.empId || "-").toString().replace(/[^a-zA-Z0-9]/g, "_");
          var cardFileName = "IDCard_" + safeRole + "_" + safeEmp + "_" + safeName + ".jpg";

          var cardUrl = "-";
          if (m.idCard && m.idCard.indexOf("data:image") !== -1) {
            cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);
          } else if (m.idCard && m.idCard.indexOf("http") !== -1) {
            cardUrl = m.idCard;
          }

          var mNipClean = (m.empId || "").toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
          var mRoleClean = (m.role || "").toString().toLowerCase().replace(/[^a-z0-9]/g, "");

          var targetPesertaRow = -1;
          for (var pr = 1; pr < allPesertaData.length; pr++) {
            var pRowTeam = (allPesertaData[pr][1] || "").toString().toLowerCase().replace(/[^a-z0-9]/g, "");
            var pRowRole = (allPesertaData[pr][2] || "").toString().toLowerCase().replace(/[^a-z0-9]/g, "");
            var pRowNip = (allPesertaData[pr][4] || "").toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

            if (pRowTeam === cleanTargetName) {
              if (mNipClean && mNipClean !== "-" && mNipClean.length >= 3 && pRowNip === mNipClean) {
                targetPesertaRow = pr + 1;
                break;
              } else if (pRowRole === mRoleClean) {
                targetPesertaRow = pr + 1;
                break;
              }
            }
          }

          if (targetPesertaRow !== -1) {
            // Selective cell update pada baris peserta
            pesertaSheet.getRange(targetPesertaRow, 1).setValue(now);
            pesertaSheet.getRange(targetPesertaRow, 2).setValue(teamName);
            if (m.role) pesertaSheet.getRange(targetPesertaRow, 3).setValue(m.role);
            if (m.name) pesertaSheet.getRange(targetPesertaRow, 4).setValue(m.name);
            if (m.empId) pesertaSheet.getRange(targetPesertaRow, 5).setValue(m.empId);
            // Nickname Game (IGN) berdiri sendiri di 1 cell, tanpa split koma
            if (m.nickname) pesertaSheet.getRange(targetPesertaRow, 6).setValue(m.nickname);
            if (m.gameId) pesertaSheet.getRange(targetPesertaRow, 7).setValue(m.gameId);
            if (m.isOrganik !== undefined) pesertaSheet.getRange(targetPesertaRow, 8).setValue(m.isOrganik ? "Organik" : "Non-Organik");
            if (cardUrl && cardUrl !== "-") pesertaSheet.getRange(targetPesertaRow, 9).setValue(cardUrl);
          } else {
            // Tambahkan baris child baru jika belum ada
            pesertaSheet.appendRow([
              now,
              teamName,
              m.role || "Pemain",
              m.name || "-",
              m.empId || "-",
              m.nickname || "-",
              m.gameId || "-",
              m.isOrganik ? "Organik" : "Non-Organik",
              cardUrl !== "-" ? cardUrl : ""
            ]);
          }
        });

        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          success: true,
          message: "Data tim dan anggota berhasil diperbarui secara selektif!"
        })).setMimeType(ContentService.MimeType.JSON);

      } else {
        // KASUS 1: Data Belum Ada -> APPEND ROW BARU
        // 1. Simpan Parent Tim (MLBB - Tim)
        timSheet.appendRow([
          now,
          teamName,
          data.dept || "-",
          data.wa || "-",
          teamFolderUrl !== "-" ? teamFolderUrl : "",
          "PENDING",
          data.notes || ""
        ]);

        // 2. Simpan Child Roster (MLBB - Peserta)
        roster.forEach(function(m, idx) {
          var safeRole = (m.role || "Pemain").replace(/[^a-zA-Z0-9]/g, "_");
          var safeName = (m.name || ("Anggota_" + (idx + 1))).replace(/[^a-zA-Z0-9]/g, "_");
          var safeEmp = (m.empId || "-").toString().replace(/[^a-zA-Z0-9]/g, "_");
          var cardFileName = "IDCard_" + safeRole + "_" + safeEmp + "_" + safeName + ".jpg";

          var cardUrl = "-";
          if (m.idCard && m.idCard.indexOf("data:image") !== -1) {
            cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);
          } else if (m.idCard && m.idCard.indexOf("http") !== -1) {
            cardUrl = m.idCard;
          }

          pesertaSheet.appendRow([
            now,
            teamName,
            m.role || "Pemain",
            m.name || "-",
            m.empId || "-",
            m.nickname || "-", // IGN berdiri sendiri utuh di 1 cell
            m.gameId || "-",
            m.isOrganik ? "Organik" : "Non-Organik",
            cardUrl !== "-" ? cardUrl : ""
          ]);
        });

        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          success: true,
          message: "Pendaftaran tim MLBB baru berhasil disimpan!"
        })).setMimeType(ContentService.MimeType.JSON);
      }

    // ========================================================
    // LOGIKA PENDAFTARAN & UPDATE: MCGG (1 PEMAIN = 1 RECORD)
    // ========================================================
    } else {
      var mcggSheet = sheets.mcggSheet;
      var playerName = data.name || "Pemain MCGG";
      var mcggCard = data.idCard || (data.roster && data.roster[0] ? data.roster[0].idCard : "");

      // Validasi: Foto ID Card Pegawai Wajib untuk MCGG
      if (!isUpdate && (!mcggCard || mcggCard.trim() === "" || mcggCard === "-")) {
        return ContentService.createTextOutput(JSON.stringify({
          status: "error",
          success: false,
          message: "Pendaftaran ditolak: Foto ID Card Pegawai Yokke wajib diunggah untuk pendaftaran solo MCGG!"
        })).setMimeType(ContentService.MimeType.JSON);
      }

      var mcggNickname = data.nickname || (data.roster && data.roster[0] ? data.roster[0].nickname : "-") || "-";
      var mcggGameId = data.gameId || (data.roster && data.roster[0] ? data.roster[0].gameId : "-") || "-";
      var mcggEmpId = data.empId || (data.roster && data.roster[0] ? data.roster[0].empId : "-") || "-";

      var mcggFolderName = "[MCGG] Berkas ID Card Pemain Solo";
      var mcggFolder = getOrCreateSubFolder(mainFolder, mcggFolderName);

      var safePlayerName = playerName.replace(/[^a-zA-Z0-9]/g, "_");
      var safeEmp = mcggEmpId.toString().replace(/[^a-zA-Z0-9]/g, "_");
      var mcggIdCardUrl = "-";
      if (mcggCard && mcggCard.indexOf("data:image") !== -1) {
        mcggIdCardUrl = saveBase64Image(mcggCard, "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", mcggFolder);
      } else if (mcggCard && mcggCard.indexOf("http") !== -1) {
        mcggIdCardUrl = mcggCard;
      }

      // Cek Listing MCGG untuk mendeteksi apakah Pemain SUDAH ADA (1 Pemain = 1 Record)
      var cleanTargetName = playerName.toLowerCase().replace(/[^a-z0-9]/g, "");
      var cleanTargetNip = mcggEmpId.toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
      var mcggListing = getMcggListing(ss);

      var existingPlayer = mcggListing.find(function(p) {
        var pNip = (p.empId || "").toString().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        if (cleanTargetNip && cleanTargetNip !== "-" && cleanTargetNip.length >= 3 && pNip === cleanTargetNip) return true;
        return (p.name || "").toString().toLowerCase().replace(/[^a-z0-9]/g, "") === cleanTargetName;
      });

      // KASUS 3: Data Sudah Ada tapi isUpdate !== true -> Kembalikan DUPLICATE_ENTRY
      if (existingPlayer && !isUpdate) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          status: "error",
          code: "DUPLICATE_ENTRY",
          message: "Data dengan NIP '" + (mcggEmpId || playerName) + "' sudah terdaftar di sistem. Konfirmasi update diperlukan."
        })).setMimeType(ContentService.MimeType.JSON);
      }

      // KASUS 2: Data Sudah Ada & isUpdate === true -> SELECTIVE CELL UPDATE
      if (existingPlayer && isUpdate) {
        var pRow = existingPlayer.rowNumber;
        // Update selektif pada kolom-kolom yang nilainya dikirim (1 Pemain = 1 Record)
        // Struktur Kolom Sheet Pendaftaran MCGG (11 Kolom):
        // 1 (A): Timestamp
        // 2 (B): Nama Lengkap Pemain
        // 3 (C): Divisi Yokke
        // 4 (D): WhatsApp
        // 5 (E): NIP Pegawai (Unique Key)
        // 6 (F): Mobile Game ID & Server
        // 7 (G): Mobile Game Nickname
        // 8 (H): Status Kepegawaian
        // 9 (I): Link ID Card
        // 10 (J): Status Verifikasi
        // 11 (K): Catatan Panitia
        mcggSheet.getRange(pRow, 1).setValue(now);
        if (playerName) mcggSheet.getRange(pRow, 2).setValue(playerName);
        if (data.dept) mcggSheet.getRange(pRow, 3).setValue(data.dept);
        if (data.wa) mcggSheet.getRange(pRow, 4).setValue(data.wa);
        if (mcggEmpId && mcggEmpId !== "-") mcggSheet.getRange(pRow, 5).setValue(mcggEmpId);
        if (mcggGameId && mcggGameId !== "-") mcggSheet.getRange(pRow, 6).setValue(mcggGameId);
        if (mcggNickname && mcggNickname !== "-") mcggSheet.getRange(pRow, 7).setValue(mcggNickname);
        if (data.isOrganik !== undefined) mcggSheet.getRange(pRow, 8).setValue(data.isOrganik ? "Organik" : "Non-Organik");
        if (mcggIdCardUrl && mcggIdCardUrl !== "-") {
          mcggSheet.getRange(pRow, 9).setValue(mcggIdCardUrl);
        }
        if (data.status) mcggSheet.getRange(pRow, 10).setValue(data.status);
        if (data.notes !== undefined && data.notes !== null) {
          mcggSheet.getRange(pRow, 11).setValue(data.notes);
        }

        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          success: true,
          message: "Data pemain solo MCGG berhasil diperbarui secara selektif!"
        })).setMimeType(ContentService.MimeType.JSON);

      } else {
        // KASUS 1: Data Belum Ada -> APPEND ROW BARU (11 Kolom)
        mcggSheet.appendRow([
          now,                                                // Kolom A (1): Timestamp
          playerName,                                         // Kolom B (2): Nama Lengkap Pemain
          data.dept || "-",                                   // Kolom C (3): Divisi Yokke
          data.wa || "-",                                     // Kolom D (4): WhatsApp
          mcggEmpId || "-",                                   // Kolom E (5): NIP Pegawai
          mcggGameId || "-",                                  // Kolom F (6): Mobile Game ID & Server
          mcggNickname !== "-" ? mcggNickname : playerName,   // Kolom G (7): Mobile Game Nickname
          data.isOrganik ? "Organik" : "Non-Organik",         // Kolom H (8): Status Kepegawaian
          mcggIdCardUrl !== "-" ? mcggIdCardUrl : "",         // Kolom I (9): Link ID Card
          "PENDING",                                          // Kolom J (10): Status Verifikasi
          data.notes || ""                                    // Kolom K (11): Catatan Panitia
        ]);

        return ContentService.createTextOutput(JSON.stringify({
          status: "success",
          success: true,
          message: "Pendaftaran solo MCGG baru berhasil disimpan!"
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      success: false,
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    if (hasLock) {
      try {
        lock.releaseLock();
      } catch(e) {}
    }
  }
}

// ========================================================
// 3. FUNGSI GENERASI OTOMATIS: 3 SHEET TURNAMEN TERPISAH
//    (MLBB - Klasemen & Point, MLBB - Bagan & MVP, MCGG - Point, Commander & MVP)
// ========================================================

/**
 * Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada.
 */
function getOrCreateSheet(ss, sheetName) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  return sheet;
}

/**
 * Helper efisien untuk auto-resize banyak kolom dalam 1 panggilan RPC Google Apps Script.
 * Mengurangi waktu eksekusi dari ~45 detik menjadi < 1 detik.
 */
function safeBatchResizeColumns(sheet, numCols) {
  if (!sheet || !numCols || numCols <= 0) return;
  try {
    if (typeof sheet.autoResizeColumns === 'function') {
      sheet.autoResizeColumns(1, numCols);
      return;
    }
  } catch(e) {}
  try {
    for (var c = 1; c <= numCols; c++) {
      try { sheet.autoResizeColumn(c); } catch(errCol) {}
    }
  } catch(e) {}
}

// 38 Pertandingan Resmi Babak Playoff Double Elimination MLBB Turnamen Yokke Squad 2026 (Ground Truth Hasil Undian Resmi)
const DEFAULT_MLBB_PLAYOFF_MATCHES = [
  // Ronde 0 (Hari 3): Upper Bracket 16 Besar (8 Match)
  [
    { matchLabel: 'UB_R1_1', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: 'TABRAK AJALAH', teamB: 'Anti Climax', winner: null },
    { matchLabel: 'UB_R1_2', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: 'Native', teamB: 'BOLO CLUB', winner: null },
    { matchLabel: 'UB_R1_3', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: 'ATMO', teamB: 'IOS', winner: null },
    { matchLabel: 'UB_R1_4', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: 'WINGSKANAN ESPORT 1', teamB: 'TY BEKASI', winner: null },
    { matchLabel: 'UB_R1_5', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: 'Miskin Mekanik', teamB: '666', winner: null },
    { matchLabel: 'UB_R1_6', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: '7 SINS', teamB: 'APPA LINUX', winner: null },
    { matchLabel: 'UB_R1_7', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: 'VALKYRIE', teamB: 'Yokke.Syindicate', winner: null },
    { matchLabel: 'UB_R1_8', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: 'AANG ALPHA', teamB: 'YOKKE LAMPUNG', winner: null }
  ],
  // Ronde 1 (Hari 3-4): Upper Bracket Perempat Final (4 Match) & Lower Bracket Ronde 1 (8 Match)
  [
    { matchLabel: 'UB_QF_1', phaseName: 'Upper Bracket Perempat Final (Hari 3-4)', bracket: 'UPPER', day: 3, teamA: 'Pemenang UB R1 1', teamB: 'Pemenang UB R1 2', winner: null },
    { matchLabel: 'UB_QF_2', phaseName: 'Upper Bracket Perempat Final (Hari 3-4)', bracket: 'UPPER', day: 3, teamA: 'Pemenang UB R1 3', teamB: 'Pemenang UB R1 4', winner: null },
    { matchLabel: 'UB_QF_3', phaseName: 'Upper Bracket Perempat Final (Hari 3-4)', bracket: 'UPPER', day: 3, teamA: 'Pemenang UB R1 5', teamB: 'Pemenang UB R1 6', winner: null },
    { matchLabel: 'UB_QF_4', phaseName: 'Upper Bracket Perempat Final (Hari 3-4)', bracket: 'UPPER', day: 3, teamA: 'Pemenang UB R1 7', teamB: 'Pemenang UB R1 8', winner: null },
    { matchLabel: 'LB_R1_1', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 1', teamB: 'My Palembang', winner: null },
    { matchLabel: 'LB_R1_2', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 2', teamB: 'Colorbook', winner: null },
    { matchLabel: 'LB_R1_3', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 3', teamB: 'Yokke Batam', winner: null },
    { matchLabel: 'LB_R1_4', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 4', teamB: 'DEADLINE SLAYER', winner: null },
    { matchLabel: 'LB_R1_5', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 5', teamB: 'Red Razor', winner: null },
    { matchLabel: 'LB_R1_6', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 6', teamB: 'LOLO', winner: null },
    { matchLabel: 'LB_R1_7', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 7', teamB: 'Yokke Batam Squad (YBS)', winner: null },
    { matchLabel: 'LB_R1_8', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 8', teamB: 'MiracleXStars', winner: null }
  ],
  // Ronde 2 (Hari 4): Upper Bracket Semifinal (2 Match) & Lower Bracket Ronde 2 (4 Match) & Lower Bracket Ronde 3 (4 Match)
  [
    { matchLabel: 'UB_SF_1', phaseName: 'Upper Bracket Semifinal (Hari 4)', bracket: 'UPPER', day: 4, teamA: 'Pemenang UB QF 1', teamB: 'Pemenang UB QF 2', winner: null },
    { matchLabel: 'UB_SF_2', phaseName: 'Upper Bracket Semifinal (Hari 4)', bracket: 'UPPER', day: 4, teamA: 'Pemenang UB QF 3', teamB: 'Pemenang UB QF 4', winner: null },
    { matchLabel: 'LB_R2_1', phaseName: 'Lower Bracket Ronde 2 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R1 1', teamB: 'Pemenang LB R1 2', winner: null },
    { matchLabel: 'LB_R2_2', phaseName: 'Lower Bracket Ronde 2 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R1 3', teamB: 'Pemenang LB R1 4', winner: null },
    { matchLabel: 'LB_R2_3', phaseName: 'Lower Bracket Ronde 2 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R1 5', teamB: 'Pemenang LB R1 6', winner: null },
    { matchLabel: 'LB_R2_4', phaseName: 'Lower Bracket Ronde 2 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R1 7', teamB: 'Pemenang LB R1 8', winner: null },
    { matchLabel: 'LB_R3_1', phaseName: 'Lower Bracket Ronde 3 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R2 1', teamB: 'Gugur UB QF 1', winner: null },
    { matchLabel: 'LB_R3_2', phaseName: 'Lower Bracket Ronde 3 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R2 2', teamB: 'Gugur UB QF 2', winner: null },
    { matchLabel: 'LB_R3_3', phaseName: 'Lower Bracket Ronde 3 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R2 3', teamB: 'Gugur UB QF 3', winner: null },
    { matchLabel: 'LB_R3_4', phaseName: 'Lower Bracket Ronde 3 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R2 4', teamB: 'Gugur UB QF 4', winner: null }
  ],
  // Ronde 3 (Hari 4): Lower Bracket Perempat Final (2 Match)
  [
    { matchLabel: 'LB_QF_1', phaseName: 'Lower Bracket Perempat Final (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R3 1', teamB: 'Pemenang LB R3 2', winner: null },
    { matchLabel: 'LB_QF_2', phaseName: 'Lower Bracket Perempat Final (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R3 3', teamB: 'Pemenang LB R3 4', winner: null }
  ],
  // Ronde 4 (Hari 5): Upper Final & Lower Semifinal / Final (5 Match)
  [
    { matchLabel: 'UB_FINAL', phaseName: 'Upper Bracket Final (Hari 5)', bracket: 'UPPER', day: 5, teamA: 'Pemenang UB SF 1', teamB: 'Pemenang UB SF 2', winner: null },
    { matchLabel: 'LB_SF_1', phaseName: 'Lower Bracket Semifinal 1 (Hari 5)', bracket: 'LOWER', day: 5, teamA: 'Pemenang LB QF 1', teamB: 'Gugur UB SF 1', winner: null },
    { matchLabel: 'LB_SF_2', phaseName: 'Lower Bracket Semifinal 2 (Hari 5)', bracket: 'LOWER', day: 5, teamA: 'Pemenang LB QF 2', teamB: 'Gugur UB SF 2', winner: null },
    { matchLabel: 'LB_PRELIM', phaseName: 'Lower Bracket Final Penantang (Hari 5)', bracket: 'LOWER', day: 5, teamA: 'Pemenang LB SF 1', teamB: 'Pemenang LB SF 2', winner: null },
    { matchLabel: 'LB_FINAL', phaseName: 'Lower Bracket Final Penentu (Hari 5)', bracket: 'LOWER', day: 5, teamA: 'Pemenang LB Prelim', teamB: 'Gugur UB Final', winner: null }
  ],
  // Ronde 5 (Hari 5): Grand Final BO5 (1 Match)
  [
    { matchLabel: 'GRAND_FINAL', phaseName: 'Grand Final BO5 (Hari 5)', bracket: 'GRAND_FINAL', day: 5, teamA: 'Juara Upper Bracket', teamB: 'Juara Lower Bracket', winner: null }
  ]
];

/**
 * Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah
 * Dipanggil otomatis saat action === 'SAVE_CONFIG' atau 'CREATE_TOURNAMENT_SHEETS'
 */
function syncDedicatedTournamentSheets(ss, payload) {
  payload = payload || {};
  const POINT_MAP = { 1: 4, 2: 3, 3: 2, 4: 1, 5: -1, 6: -2, 7: -3, 8: -4 };

  var metrics = {
    mlbbPoint: { rows: 0, cols: 10, colsAdded: 0 },
    mlbbBagan: { rows: 0, cols: 21, colsAdded: 10 },
    mcggPoint: { rows: 0, cols: 16, colsAdded: 0 },
    config: { rows: 0, cols: 3, colsAdded: 0 },
    totalRows: 0,
    totalCols: 21,
    rowsUpdated: 0,
    colsUpdated: 21,
    colsAdded: 10
  };

  // =========================================================
  // 1. SHEET: "MLBB - Klasemen & Point"
  // =========================================================
  let sheetMLBBPoint = ss.getSheetByName('MLBB - Klasemen & Point');
  if (!sheetMLBBPoint) sheetMLBBPoint = ss.insertSheet('MLBB - Klasemen & Point');
  sheetMLBBPoint.clear();

  const mlbbPointHeaders = [
    'Grup', 'Peringkat', 'Nama Tim', 'Match', 'Menang', 
    'Kalah', 'Agregat Game (Diff)', 'Poin Klasemen', 'Status Kelolosan', 'Total MVP Team'
  ];
  const mlbbPointRows = [mlbbPointHeaders];

  const groupData = payload.groupStageData || {};
  const matchResults = payload.groupMatchResults || {};

  // Hitung akumulasi MVP per tim
  const teamMvpCount = {};
  Object.values(matchResults).forEach(m => {
    if (!m) return;
    if (Array.isArray(m.gameMvps) && m.gameMvps.length > 0) {
      m.gameMvps.forEach(gm => {
        if (gm && gm.team) {
          teamMvpCount[gm.team] = (teamMvpCount[gm.team] || 0) + 1;
        }
      });
    } else if (m.winner && m.mvpPlayer && m.mvpPlayer !== '-') {
      teamMvpCount[m.winner] = (teamMvpCount[m.winner] || 0) + 1;
    }
  });

  Object.keys(groupData).forEach(gName => {
    const teams = groupData[gName] || [];
    const sorted = [...teams].sort((a, b) => {
      if ((b.pts || 0) !== (a.pts || 0)) return (b.pts || 0) - (a.pts || 0);
      if ((b.win || 0) !== (a.win || 0)) return (b.win || 0) - (a.win || 0);
      if ((a.lose || 0) !== (b.lose || 0)) return (a.lose || 0) - (b.lose || 0);
      const bMvp = teamMvpCount[b.name] || b.mvpCount || 0;
      const aMvp = teamMvpCount[a.name] || a.mvpCount || 0;
      return bMvp - aMvp;
    });

    // Validasi apakah seluruh match dalam grup sudah tuntas
    let isGroupAllDone = false;
    const groupTeams = groupData[gName] || [];
    const n = groupTeams.length;
    if (n >= 2) {
      const totalPairs = (n * (n - 1)) / 2;
      let finishedPairs = 0;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const tA = groupTeams[i].name;
          const tB = groupTeams[j].name;
          let pairDone = false;
          for (const mId in matchResults) {
            const m = matchResults[mId];
            if (m && m.gName === gName) {
              const matchWinner = m.winner ? m.winner.trim() : '';
              if (((m.teamA === tA && m.teamB === tB) || (m.teamA === tB && m.teamB === tA)) && matchWinner && matchWinner !== 'TBD') {
                pairDone = true;
                break;
              }
            }
          }
          if (pairDone) finishedPairs++;
        }
      }
      if (finishedPairs >= totalPairs) {
        isGroupAllDone = true;
      } else if (groupTeams.every(tm => {
        const played = tm.matchCount !== undefined ? parseInt(tm.matchCount, 10) : ((parseInt(tm.win, 10) || 0) + (parseInt(tm.lose, 10) || 0) + (parseInt(tm.draw, 10) || 0));
        return played >= (n - 1);
      })) {
        isGroupAllDone = true;
      }
    }

    sorted.forEach((t, idx) => {
      const mp = t.matchCount !== undefined ? t.matchCount : ((parseInt(t.win) || 0) + (parseInt(t.lose) || 0) + (parseInt(t.draw) || 0));
      const is8Group = Object.keys(groupData).length === 8;
      let status = 'Menunggu Seluruh Match';
      if (isGroupAllDone) {
        if (is8Group) {
          status = (idx < 2) ? 'Lolos Upper Bracket' : (idx === 2 ? 'Lolos Lower Bracket' : 'Gugur');
        } else {
          status = (idx < 2) ? 'Lolos Playoff' : 'Gugur';
        }
      }
      const diffVal = (t.diff !== undefined) ? parseInt(t.diff, 10) : ((parseInt(t.gameWon, 10) || 0) - (parseInt(t.gameLost, 10) || 0));
      const diffStr = (diffVal > 0 ? '+' : '') + diffVal;
      mlbbPointRows.push([
        gName,
        `#${idx + 1}`,
        t.name || '-',
        mp,
        t.win || 0,
        t.lose || 0,
        diffStr,
        t.pts || 0,
        status,
        teamMvpCount[t.name] || t.mvpCount || 0
      ]);
    });
  });

  if (mlbbPointRows.length > 0) {
    sheetMLBBPoint.getRange(1, 1, mlbbPointRows.length, mlbbPointHeaders.length).setValues(mlbbPointRows);
    sheetMLBBPoint.getRange(1, 1, 1, mlbbPointHeaders.length)
      .setFontWeight('bold').setBackground('#0f172a').setFontColor('#38bdf8').setHorizontalAlignment('center');
    sheetMLBBPoint.setRowHeight(1, 32);
    safeBatchResizeColumns(sheetMLBBPoint, mlbbPointHeaders.length);
    metrics.mlbbPoint.rows = mlbbPointRows.length;
  }

  // =========================================================
  // 2. SHEET: "MLBB - Bagan & MVP" (21 Kolom Lengkap)
  // =========================================================
  let sheetMLBBBagan = ss.getSheetByName('MLBB - Bagan & MVP');
  if (!sheetMLBBBagan) sheetMLBBBagan = ss.insertSheet('MLBB - Bagan & MVP');
  sheetMLBBBagan.clear();

  const mlbbBaganHeaders = [
    'ID Match', 'Tahap / Fase', 'Format', 'Tim A', 'Skor A', 
    'Skor B', 'Tim B', 'Pemenang Match', 'MVP Match (IGN / Nama)', 'Hero MVP', 
    'Status Match', 'Ronde Index', 'Match Index', 'Cabang Bracket', 'Jadwal Hari', 
    'Jam Tanding', 'Game 1 - Hasil', 'Game 2 - Hasil', 'Game 3 - Hasil', 'Game 4 - Hasil', 'Game 5 - Hasil'
  ];
  const mlbbBaganRows = [mlbbBaganHeaders];

  // A. Masukkan Pertandingan Fase Grup
  Object.keys(groupData).forEach(gName => {
    const teams = groupData[gName] || [];
    const n = teams.length;
    let matchIdx = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        matchIdx++;
        const tA = teams[i].name;
        const tB = teams[j].name;
        const matchId = `${gName}_${tA}_vs_${tB}`.replace(/\s+/g, '_');
        
        // Cari hasil match (dukung varian kanonikal terbalik)
        let saved = matchResults[matchId];
        if (!saved) {
          const revId = `${gName}_${tB}_vs_${tA}`.replace(/\s+/g, '_');
          saved = matchResults[revId];
        }

        let sA = '-', sB = '-', w = 'TBD', mvp = '-', hero = '-';
        let status = 'SCHEDULED';
        if (saved) {
          sA = saved.teamA === tA ? (saved.scoreA !== null ? saved.scoreA : '-') : (saved.scoreB !== null ? saved.scoreB : '-');
          sB = saved.teamA === tA ? (saved.scoreB !== null ? saved.scoreB : '-') : (saved.scoreA !== null ? saved.scoreA : '-');
          w = saved.winner || 'TBD';
          mvp = saved.mvpPlayer || '-';
          hero = saved.mvpHero || '-';
          if (w && w !== 'TBD') status = 'FINISHED';
        }

        mlbbBaganRows.push([
          matchId,
          `Fase Grup - ${gName}`,
          'BO3',
          tA,
          sA,
          sB,
          tB,
          w,
          mvp,
          hero,
          status,
          'GRP',
          matchIdx,
          'GROUP',
          (saved && saved.day) || 'Hari 1',
          (saved && saved.time) || '-',
          (saved && saved.game1) || '-',
          (saved && saved.game2) || '-',
          (saved && saved.game3) || '-',
          (saved && saved.game4) || '-',
          (saved && saved.game5) || '-'
        ]);
      }
    }
  });

  // Masukkan Match Tie-Breaker MLBB jika ada
  const stageState = payload.tournamentStageState || {};
  const mlbbStage = stageState.mlbb || {};
  if (mlbbStage.tieBreaker && Array.isArray(mlbbStage.tieBreaker.matches)) {
    mlbbStage.tieBreaker.matches.forEach((m, i) => {
      let sA = m.scoreA !== null && m.scoreA !== undefined ? m.scoreA : '-';
      let sB = m.scoreB !== null && m.scoreB !== undefined ? m.scoreB : '-';
      let w = m.winner || 'TBD';
      mlbbBaganRows.push([
        m.matchId || `TB_${m.group}_${i+1}`,
        `Tie-Breaker - ${m.group}`,
        'BO1',
        m.teamA || '-',
        sA,
        sB,
        m.teamB || '-',
        w,
        m.mvpPlayer || '-',
        m.mvpHero || '-',
        (m.winner && m.winner !== 'TBD') ? 'FINISHED' : 'SCHEDULED',
        'GRP',
        i,
        'GROUP',
        m.day || 'Hari 1',
        m.time || '-',
        m.game1 || '-',
        m.game2 || '-',
        m.game3 || '-',
        m.game4 || '-',
        m.game5 || '-'
      ]);
    });
  }

  // B. Masukkan Bagan Playoff (6 Ronde)
  const playoffRounds = (Array.isArray(payload.groupPlayoffMatches) && payload.groupPlayoffMatches.length === 6)
    ? payload.groupPlayoffMatches
    : DEFAULT_MLBB_PLAYOFF_MATCHES;
  const roundNames = playoffRounds.length === 6
    ? ['Upper 16 Besar (Hari 3)', 'Upper QF & Lower R1 (Hari 3-4)', 'Upper SF & Lower R2/R3 (Hari 4)', 'Lower QF (Hari 4)', 'Upper Final & Lower SF/Final (Hari 5)', 'Grand Final (Hari 5)']
    : ['Perempat Final (QF)', 'Semifinal (SF)', 'Grand Final'];

  playoffRounds.forEach((round, rIdx) => {
    const defaultPhase = roundNames[rIdx] || `Playoff Ronde ${rIdx + 1}`;
    (round || []).forEach((m, mIdx) => {
      if (!m) return;
      const matchLabel = m.matchLabel || `PO_R${rIdx + 1}_M${mIdx + 1}`;
      const phaseName = m.phaseName || defaultPhase;
      const formatStr = phaseName.includes('Grand Final') ? 'BO5' : 'BO3';
      const bracket = m.bracket || (matchLabel.indexOf('UB') === 0 ? 'UPPER' : (matchLabel.indexOf('LB') === 0 ? 'LOWER' : 'GRAND_FINAL'));
      const dayVal = m.day ? (String(m.day).indexOf('Hari') !== -1 ? String(m.day) : ('Hari ' + m.day)) : '-';

      mlbbBaganRows.push([
        matchLabel,
        phaseName,
        formatStr,
        m.teamA || 'TBD',
        m.scoreA !== null && m.scoreA !== undefined ? m.scoreA : '-',
        m.scoreB !== null && m.scoreB !== undefined ? m.scoreB : '-',
        m.teamB || 'TBD',
        m.winner || 'TBD',
        m.mvpPlayer || '-',
        m.mvpHero || '-',
        (m.winner && m.winner !== 'TBD') ? 'FINISHED' : 'SCHEDULED',
        rIdx,
        mIdx,
        bracket,
        dayVal,
        m.time || '-',
        m.game1 || '-',
        m.game2 || '-',
        m.game3 || '-',
        m.game4 || '-',
        m.game5 || '-'
      ]);
    });
  });

  if (mlbbBaganRows.length > 0) {
    sheetMLBBBagan.getRange(1, 1, mlbbBaganRows.length, mlbbBaganHeaders.length).setValues(mlbbBaganRows);
    sheetMLBBBagan.getRange(1, 1, 1, mlbbBaganHeaders.length)
      .setFontWeight('bold').setBackground('#0f172a').setFontColor('#38bdf8').setHorizontalAlignment('center');
    sheetMLBBBagan.setRowHeight(1, 32);
    safeBatchResizeColumns(sheetMLBBBagan, mlbbBaganHeaders.length);
    metrics.mlbbBagan.rows = mlbbBaganRows.length;
  }

  // =========================================================
  // 3. SHEET: "MCGG - Point, Commander & MVP"
  // =========================================================
  let sheetMCGG = ss.getSheetByName('MCGG - Point, Commander & MVP');
  if (!sheetMCGG) sheetMCGG = ss.insertSheet('MCGG - Point, Commander & MVP');
  sheetMCGG.clear();

  const mcggHeaders = [
    'Lobi', 'Peringkat', 'Nama Pemain', 'Departemen / Divisi',
    'R1 - Rank', 'R1 - Point', 'R1 - Commander',
    'R2 - Rank', 'R2 - Point', 'R2 - Commander',
    'R3 - Rank', 'R3 - Point', 'R3 - Commander',
    'Total Poin', 'Total MVP (Rank 1)', 'Status Kelolosan'
  ];
  const mcggRows = [mcggHeaders];

  const lobbies = payload.mcggLobbies || {};
  Object.keys(lobbies).forEach(lobbyKey => {
    const pList = lobbies[lobbyKey] || [];
    const isQual = lobbyKey === 'LOBBY_A' || lobbyKey === 'LOBBY_B';
    const qualDone = pList.every(p => p.r1 && p.r2 && p.r3);

    pList.forEach((p, idx) => {
      let status = 'Babak Kualifikasi';
      if (lobbyKey === 'GRAND_FINAL') {
        status = 'Grand Finalist';
      } else if (isQual && qualDone) {
        status = (idx < 4) ? 'LOLOS KE GRAND FINAL' : ('GUGUR (Peringkat ' + (idx + 1) + ')');
      }

      mcggRows.push([
        lobbyKey,
        `#${idx + 1}`,
        p.name || '-',
        p.dept || '-',
        p.r1 ? `Rank ${p.r1}` : '-',
        p.r1 ? (POINT_MAP[p.r1] || 0) : 0,
        p.cmd1 || '-',
        p.r2 ? `Rank ${p.r2}` : '-',
        p.r2 ? (POINT_MAP[p.r2] || 0) : 0,
        p.cmd2 || '-',
        p.r3 ? `Rank ${p.r3}` : '-',
        p.r3 ? (POINT_MAP[p.r3] || 0) : 0,
        p.cmd3 || '-',
        p.total || 0,
        p.mvpCount || 0,
        status
      ]);
    });
  });

  if (mcggRows.length > 0) {
    sheetMCGG.getRange(1, 1, mcggRows.length, mcggHeaders.length).setValues(mcggRows);
    sheetMCGG.getRange(1, 1, 1, mcggHeaders.length)
      .setFontWeight('bold').setBackground('#0f172a').setFontColor('#38bdf8').setHorizontalAlignment('center');
    sheetMCGG.setRowHeight(1, 32);
    safeBatchResizeColumns(sheetMCGG, mcggHeaders.length);
    metrics.mcggPoint.rows = mcggRows.length;
  }

  metrics.totalRows = metrics.mlbbPoint.rows + metrics.mlbbBagan.rows + metrics.mcggPoint.rows;
  metrics.rowsUpdated = metrics.totalRows;

  try {
    if (typeof PropertiesService !== "undefined") {
      var props = PropertiesService.getScriptProperties();
      if (props) {
        var vBagan = parseInt(props.getProperty("ver_mlbb_bagan") || "1", 10) + 1;
        var vPoint = parseInt(props.getProperty("ver_mlbb_point") || "1", 10) + 1;
        var vMcgg = parseInt(props.getProperty("ver_mcgg_point") || "1", 10) + 1;
        var vCfg = parseInt(props.getProperty("ver_config") || "1", 10) + 1;
        props.setProperty("ver_mlbb_bagan", vBagan.toString());
        props.setProperty("ver_mlbb_point", vPoint.toString());
        props.setProperty("ver_mcgg_point", vMcgg.toString());
        props.setProperty("ver_config", vCfg.toString());
        props.setProperty("last_synced_at", new Date().toISOString());
        syncVersionsToVercel(props);
      }
    }
  } catch(e) {}

  return metrics;
}

/**
 * Trigger Otomatis saat sel diedit langsung di Spreadsheet
 */
function onEdit(e) {
  if (!e || !e.range) return;
  try {
    var sheet = e.range.getSheet();
    var sheetName = sheet.getName();
    var trackedSheets = {
      "MLBB - Bagan & MVP": "mlbb_bagan",
      "MLBB - Klasemen & Point": "mlbb_point",
      "MCGG - Point, Commander & MVP": "mcgg_point",
      "Pengaturan Turnamen": "config",
      "MLBB - Tim": "participants",
      "MLBB - Peserta": "participants",
      "Pendaftaran MCGG": "participants"
    };

    if (trackedSheets[sheetName]) {
      var sheetKey = trackedSheets[sheetName];
      if (typeof PropertiesService !== "undefined") {
        var props = PropertiesService.getScriptProperties();
        if (props) {
          var curVer = parseInt(props.getProperty("ver_" + sheetKey) || "1", 10) + 1;
          props.setProperty("ver_" + sheetKey, curVer.toString());
          props.setProperty("last_synced_at", new Date().toISOString());
          syncVersionsToVercel(props);
        }
      }
    }
  } catch(err) {
    Logger.log("onEdit Error: " + err.toString());
  }
}

/**
 * Helper pengiriman versi ke Vercel Edge Config REST API
 */
function syncVersionsToVercel(props) {
  if (!props && typeof PropertiesService !== "undefined") {
    props = PropertiesService.getScriptProperties();
  }
  if (!props) return;
  var token = props.getProperty("VERCEL_API_TOKEN");
  if (!token) return; // Lewati jika token belum dipasang panitia

  var edgeConfigId = "ecfg_oqmxozqwbyhphbiuxs2gry4gn0fc";
  var url = "https://api.vercel.com/v1/edge-config/" + edgeConfigId + "/items";

  var versionsPayload = {
    mlbb_bagan: parseInt(props.getProperty("ver_mlbb_bagan") || "1", 10),
    mlbb_point: parseInt(props.getProperty("ver_mlbb_point") || "1", 10),
    mcgg_point: parseInt(props.getProperty("ver_mcgg_point") || "1", 10),
    config: parseInt(props.getProperty("ver_config") || "1", 10),
    participants: parseInt(props.getProperty("ver_participants") || "1", 10),
    last_synced_at: props.getProperty("last_synced_at") || new Date().toISOString()
  };

  var options = {
    method: "patch",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + token },
    payload: JSON.stringify({
      items: [{ operation: "upsert", key: "sheet_versions", value: versionsPayload }]
    }),
    muteHttpExceptions: true
  };

  try {
    if (typeof UrlFetchApp !== "undefined") {
      UrlFetchApp.fetch(url, options);
    }
  } catch(e) {
    Logger.log("Gagal sync ke Vercel: " + e.toString());
  }
}

/**
 * Wrapper kompatibilitas untuk pemicu manual / lama
 */
function syncListBagan(ss, groupData, mcggData) {
  return syncDedicatedTournamentSheets(ss, { groupStageData: groupData, mcggLobbies: mcggData });
}

function syncListPoint(ss, groupData) {
  return syncDedicatedTournamentSheets(ss, { groupStageData: groupData });
}

function syncListPointAndCommanderMCGG(ss, mcggData) {
  return syncDedicatedTournamentSheets(ss, { mcggLobbies: mcggData });
}

function createOrUpdateAllTournamentSheets(groupStageData, mcggLobbies) {
  var ss = getTargetSpreadsheet();
  var payload = {
    groupStageData: groupStageData,
    mcggLobbies: mcggLobbies
  };

  // Baca pelengkap dari Pengaturan Turnamen jika ada
  var cfgSheet = ss.getSheetByName("Pengaturan Turnamen");
  if (cfgSheet && cfgSheet.getLastRow() >= 2) {
    var cData = cfgSheet.getDataRange().getValues();
    for (var c = 1; c < cData.length; c++) {
      var key = cData[c][0] ? cData[c][0].toString().trim() : "";
      var val = cData[c][1] ? cData[c][1].toString() : "";
      try {
        if (!payload.groupStageData && key === "groupStageData") payload.groupStageData = JSON.parse(val);
        if (!payload.mcggLobbies && key === "mcggLobbies") payload.mcggLobbies = JSON.parse(val);
        if (!payload.groupMatchResults && key === "groupMatchResults") payload.groupMatchResults = JSON.parse(val);
        if (!payload.groupPlayoffMatches && key === "groupPlayoffMatches") payload.groupPlayoffMatches = JSON.parse(val);
        if (!payload.tournamentStageState && key === "tournamentStageState") payload.tournamentStageState = JSON.parse(val);
      } catch(e) {}
    }
  }

  syncDedicatedTournamentSheets(ss, payload);
  return "Berhasil membuat & memperbarui 3 Sheet: MLBB - Klasemen & Point, MLBB - Bagan & MVP, dan MCGG - Point, Commander & MVP!";
}
