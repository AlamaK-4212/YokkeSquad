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

    if (isNormalized) {
      // MLBB - Tim: Col A: Timestamp, B: Nama Tim, C: Divisi Yokke, D: WhatsApp, E: Folder Drive, F: Status, G: Catatan
      folderUrl = row[4] ? row[4].toString().trim() : "";
      status = (row[5] && row[5].toString().trim()) ? row[5].toString().trim() : "PENDING";
      notes = row[6] ? row[6].toString().trim() : "";
    } else {
      // Legacy Pendaftaran MLBB
      status = (row[13] && row[13].toString().trim()) ? row[13].toString().trim() : "PENDING";
      notes = row[14] ? row[14].toString().trim() : "";
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
function doGet(e) {
  try {
    var ss = getTargetSpreadsheet();
    ensureRelationalSheetsExist(ss);

    var result = {
      status: "online",
      participants: []
    };

    var mainFolder = getOrCreateUploadFolder();

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

      // Cari Folder Google Drive Tim untuk Logo
      var logoUrl = "";
      var folderMatch = (team.folderUrl || team.notes || "").match(/folders\/([a-zA-Z0-9_-]+)/);
      var tFolder = null;
      if (folderMatch && folderMatch[1]) {
        try {
          tFolder = DriveApp.getFolderById(folderMatch[1]);
        } catch(err) {}
      }
      if (!tFolder && mainFolder) {
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
        } catch(err) {}
      }
      if (tFolder) {
        try {
          var logoFiles = tFolder.getFiles();
          while (logoFiles.hasNext()) {
            var lf = logoFiles.next();
            var lfn = lf.getName().toLowerCase();
            if (lfn.indexOf("logo") !== -1) {
              logoUrl = lf.getUrl();
              break;
            }
          }
        } catch(err) {}
      }

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
      adminPassword: null
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
          if (key === "mcggLobbies") appConfig.mcggLobbies = JSON.parse(val);
          if (key.toLowerCase() === "adminpassword" || key.toLowerCase() === "admin_password" || key === "ADMIN_PIN" || key === "adminPassword") {
            appConfig.adminPassword = val.toString().trim();
          }
        } catch(e) {
          if (key === "tournamentFormat") appConfig.tournamentFormat = val;
          if (key.toLowerCase() === "adminpassword" || key.toLowerCase() === "admin_password" || key === "ADMIN_PIN" || key === "adminPassword") {
            appConfig.adminPassword = val.toString().trim();
          }
        }
      }
    }
    result.config = appConfig;

    // D. BACA TAB MCGG MATCH SET UP (HERO, ALTER NAME, TIER LIST)
    var setupSheet = ss.getSheetByName("MCGG Match Set Up");
    var mcggCommanderSetup = [];
    if (setupSheet && setupSheet.getLastRow() > 1) {
      var sData = setupSheet.getDataRange().getValues();
      for (var s = 1; s < sData.length; s++) {
        var sRow = sData[s];
        if (!sRow || sRow.length === 0) continue;
        var hero = sRow[0] ? sRow[0].toString().trim() : "";
        var alterName = sRow[1] ? sRow[1].toString().trim() : "";
        var tier = sRow[2] ? sRow[2].toString().trim() : "";
        if (hero || alterName) {
          mcggCommanderSetup.push({
            hero: hero,
            alterName: alterName,
            tier: tier || "Normal",
            name: alterName || hero,
            displayName: alterName ? (alterName + " (" + hero + ")") : hero
          });
        }
      }
    }
    result.mcggCommanderSetup = mcggCommanderSetup;

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
        cfgSheet.appendRow(["Kunci Konfigurasi", "Isi JSON / Nilai", "Terakhir Diperbarui"]);
        cfgSheet.getRange(1, 1, 1, 3).setFontWeight("bold").setBackground("#1e293b").setFontColor("#ffffff");
      }

      var cfgData = cfgSheet.getDataRange().getValues();
      var keyMap = {};
      for (var k = 1; k < cfgData.length; k++) {
        var kName = cfgData[k][0] ? cfgData[k][0].toString().trim() : "";
        if (kName) keyMap[kName] = k + 1;
      }

      var itemsToSave = [
        { key: "customRules", val: data.customRules ? JSON.stringify(data.customRules) : null },
        { key: "tournamentFormat", val: data.tournamentFormat || null },
        { key: "groupStageData", val: data.groupStageData ? JSON.stringify(data.groupStageData) : null },
        { key: "mcggLobbies", val: data.mcggLobbies ? JSON.stringify(data.mcggLobbies) : null },
        { key: "adminpassword", val: data.adminPassword || null }
      ];

      itemsToSave.forEach(function(item) {
        if (item.val !== null) {
          if (keyMap[item.key]) {
            cfgSheet.getRange(keyMap[item.key], 2).setValue(item.val);
            cfgSheet.getRange(keyMap[item.key], 3).setValue(now);
          } else {
            cfgSheet.appendRow([item.key, item.val, now]);
          }
        }
      });

      // Otomatis sinkronkan sheet turnamen
      try {
        createOrUpdateAllTournamentSheets(data.groupStageData, data.mcggLobbies);
      } catch(sheetErr) {
        Logger.log("Peringatan sinkronisasi sheet turnamen: " + sheetErr.toString());
      }

      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Pengaturan turnamen serta Sheet List Bagan, List Point, dan List Point & Commander MCGG berhasil diperbarui!" 
      })).setMimeType(ContentService.MimeType.JSON);
    }

    if (data.action === "CREATE_TOURNAMENT_SHEETS") {
      var syncMsg = createOrUpdateAllTournamentSheets(data.groupStageData, data.mcggLobbies);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: syncMsg }))
        .setMimeType(ContentService.MimeType.JSON);
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
// 3. FUNGSI GENERASI OTOMATIS: LIST BAGAN, LIST POINT,
//    DAN LIST POINT + COMMANDER MCGG
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
 * Membuat & memperbarui sheet 'List Bagan'
 * Berisi:
 * 1. Bagan Babak Fase Grup MLBB (Group Stage)
 * 2. Bagan Playoff & Knockout Stage MLBB (Double Elimination)
 * 3. Bagan Lobi MCGG (Lobby A, Lobby B, Grand Final)
 */
function syncListBagan(ss, groupStageData, mcggLobbies) {
  var sheet = getOrCreateSheet(ss, "List Bagan");
  sheet.clear();
  
  // Title Header
  sheet.getRange("A1:G1").merge();
  sheet.getRange("A1").setValue("🏆 BAGAN TURNAMEN RESMI YOKKE SQUAD E-SPORTS 2026 (YMC S4)")
    .setFontWeight("bold").setFontSize(14).setBackground("#0f172a").setFontColor("#38bdf8")
    .setHorizontalAlignment("center").setVerticalAlignment("middle");
  sheet.setRowHeight(1, 36);

  sheet.getRange("A2:G2").merge();
  sheet.getRange("A2").setValue("Terakhir Diperbarui: " + new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }) + " WIB | Format: Babak Grup BO3 -> Playoff Double Elimination & Lobi MCGG")
    .setFontItalic(true).setFontSize(9).setBackground("#1e293b").setFontColor("#94a3b8")
    .setHorizontalAlignment("center");
  sheet.setRowHeight(2, 22);

  var currRow = 4;

  // SECTION 1: MLBB GROUP STAGE
  sheet.getRange(currRow, 1, 1, 6).merge();
  sheet.getRange(currRow, 1).setValue("1. BABAK FASE GRUP MLBB (GROUP STAGE - BEST OF 3)")
    .setFontWeight("bold").setFontSize(11).setBackground("#1e293b").setFontColor("#fbbf24");
  currRow++;

  var groups = (groupStageData && typeof groupStageData === "object" && Object.keys(groupStageData).length > 0) 
    ? groupStageData 
    : { "Grup A": [], "Grup B": [] };

  for (var gName in groups) {
    sheet.getRange(currRow, 1, 1, 6).merge();
    sheet.getRange(currRow, 1).setValue("📌 " + gName.toUpperCase())
      .setFontWeight("bold").setBackground("#334155").setFontColor("#ffffff");
    currRow++;

    sheet.getRange(currRow, 1, 1, 6).setValues([[
      "Slot / Pos", "Nama Tim", "Unit / Departemen", "No. WhatsApp", "Kapten", "Official / Manager"
    ]]).setFontWeight("bold").setBackground("#475569").setFontColor("#ffffff").setHorizontalAlignment("center");
    currRow++;

    var tList = groups[gName] || [];
    if (tList.length === 0) {
      sheet.getRange(currRow, 1, 1, 6).setValues([["-", "Belum ada tim yang diundi di grup ini", "-", "-", "-", "-"]])
        .setFontItalic(true).setHorizontalAlignment("center");
      currRow++;
    } else {
      for (var t = 0; t < tList.length; t++) {
        var team = tList[t];
        sheet.getRange(currRow, 1, 1, 6).setValues([[
          (t + 1),
          team.name || ("Slot " + (t + 1)),
          team.dept || "-",
          team.wa || "-",
          team.captain || "-",
          team.official || "-"
        ]]).setHorizontalAlignment("center");
        sheet.getRange(currRow, 2).setHorizontalAlignment("left").setFontWeight("bold");
        currRow++;
      }
    }
    currRow++; // empty spacing row
  }

  // SECTION 2: MLBB PLAYOFF BRACKET (DOUBLE ELIMINATION)
  sheet.getRange(currRow, 1, 1, 6).merge();
  sheet.getRange(currRow, 1).setValue("2. BAGAN PLAYOFF & KNOCKOUT STAGE MLBB (DOUBLE ELIMINATION)")
    .setFontWeight("bold").setFontSize(11).setBackground("#1e293b").setFontColor("#38bdf8");
  currRow++;

  sheet.getRange(currRow, 1, 1, 6).setValues([[
    "Bracket / Tahap", "Format", "Match Up (Pertandingan)", "Alur Pemenang", "Alur Kalah", "Status"
  ]]).setFontWeight("bold").setBackground("#475569").setFontColor("#ffffff").setHorizontalAlignment("center");
  currRow++;

  var playoffFixtures = [
    ["Upper Bracket Semifinal 1", "BO3", "Juara Grup A vs Runner-up Grup B", "Maju ke Upper Bracket Final", "Turun ke Lower Bracket Semifinal", "Scheduled"],
    ["Upper Bracket Semifinal 2", "BO3", "Juara Grup B vs Runner-up Grup A", "Maju ke Upper Bracket Final", "Turun ke Lower Bracket Semifinal", "Scheduled"],
    ["Upper Bracket Final", "BO5", "Pemenang UB Semi 1 vs Pemenang UB Semi 2", "Maju ke Grand Final", "Turun ke Lower Bracket Final", "Scheduled"],
    ["Lower Bracket Round 1", "BO3", "Peringkat 3 Grup A vs Peringkat 3 Grup B", "Maju ke Lower Bracket Semifinal", "Gugur dari Turnamen", "Scheduled"],
    ["Lower Bracket Semifinal", "BO3", "Pemenang LB R1 vs Tim Kalah UB Semi", "Maju ke Lower Bracket Final", "Gugur dari Turnamen", "Scheduled"],
    ["Lower Bracket Final", "BO5", "Pemenang LB Semifinal vs Tim Kalah UB Final", "Maju ke Grand Final", "Juara 3 (Bronze)", "Scheduled"],
    ["Grand Final MLBB", "BO5", "Juara Upper Bracket vs Juara Lower Bracket", "🏆 CHAMPION YMC S4 MLBB", "🥈 RUNNER UP MLBB", "Scheduled"]
  ];

  for (var pf = 0; pf < playoffFixtures.length; pf++) {
    sheet.getRange(currRow, 1, 1, 6).setValues([playoffFixtures[pf]])
      .setHorizontalAlignment("center");
    sheet.getRange(currRow, 1).setFontWeight("bold");
    sheet.getRange(currRow, 3).setFontWeight("bold").setHorizontalAlignment("left");
    if (playoffFixtures[pf][0].indexOf("Grand Final") !== -1) {
      sheet.getRange(currRow, 1, 1, 6).setBackground("#fef9c3");
    }
    currRow++;
  }
  currRow++;

  // SECTION 3: MCGG LOBBIES
  sheet.getRange(currRow, 1, 1, 6).merge();
  sheet.getRange(currRow, 1).setValue("3. BAGAN LOBI MCGG (MAGIC CHESS GO GO - 8 PLAYER PER LOBBY)")
    .setFontWeight("bold").setFontSize(11).setBackground("#1e293b").setFontColor("#a855f7");
  currRow++;

  var mcLobbies = (mcggLobbies && typeof mcggLobbies === "object") ? mcggLobbies : {};
  var lobbyKeys = [
    { key: "LOBBY_A", title: "LOBBY A (Penyisihan Grup 1 - 8 Player)" },
    { key: "LOBBY_B", title: "LOBBY B (Penyisihan Grup 2 - 8 Player)" },
    { key: "GRAND_FINAL", title: "GRAND FINAL MCGG (Top 4 Lobby A + Top 4 Lobby B)" }
  ];

  for (var lk = 0; lk < lobbyKeys.length; lk++) {
    var lInfo = lobbyKeys[lk];
    var lPlayers = mcLobbies[lInfo.key] || [];

    sheet.getRange(currRow, 1, 1, 6).merge();
    sheet.getRange(currRow, 1).setValue("♟️ " + lInfo.title)
      .setFontWeight("bold").setBackground("#334155").setFontColor("#ffffff");
    currRow++;

    sheet.getRange(currRow, 1, 1, 6).setValues([[
      "Slot", "Nama Pemain", "Nickname (IGN)", "ID Game", "Skenario Commander", "Ketentuan Kelolosan"
    ]]).setFontWeight("bold").setBackground("#475569").setFontColor("#ffffff").setHorizontalAlignment("center");
    currRow++;

    if (lPlayers.length === 0) {
      sheet.getRange(currRow, 1, 1, 6).setValues([["-", "Pemain belum dialokasikan ke lobi ini", "-", "-", "-", "-"]])
        .setFontItalic(true).setHorizontalAlignment("center");
      currRow++;
    } else {
      for (var lp = 0; lp < lPlayers.length; lp++) {
        var ply = lPlayers[lp];
        var ruleNote = (lInfo.key === "GRAND_FINAL") 
          ? (lp < 3 ? "Juara " + (lp + 1) : "Finalis") 
          : (lp < 4 ? "Lolos ke Grand Final (Top 4)" : "Gugur Fase Lobi");
        sheet.getRange(currRow, 1, 1, 6).setValues([[
          (lp + 1),
          ply.name || ("Pemain " + (lp + 1)),
          ply.nickname || "-",
          ply.gameId || "-",
          "M1: Preset S7 | M2: Random | M3: Draft Ban",
          ruleNote
        ]]).setHorizontalAlignment("center");
        sheet.getRange(currRow, 2).setHorizontalAlignment("left").setFontWeight("bold");
        currRow++;
      }
    }
    currRow++;
  }

  // Formatting widths
  sheet.setColumnWidth(1, 160);
  sheet.setColumnWidth(2, 220);
  sheet.setColumnWidth(3, 240);
  sheet.setColumnWidth(4, 200);
  sheet.setColumnWidth(5, 200);
  sheet.setColumnWidth(6, 180);
}

/**
 * Membuat & memperbarui sheet 'List Point' (Klasemen Babak Grup MLBB)
 * Aturan: Menang = +2 Poin, Kalah = 0 Poin
 */
function syncListPoint(ss, groupStageData) {
  var sheet = getOrCreateSheet(ss, "List Point");
  sheet.clear();

  // Title Header
  sheet.getRange("A1:H1").merge();
  sheet.getRange("A1").setValue("📊 KLASEMEN PEROLEHAN POIN MLBB (YMC S4 2026)")
    .setFontWeight("bold").setFontSize(14).setBackground("#0f172a").setFontColor("#38bdf8")
    .setHorizontalAlignment("center").setVerticalAlignment("middle");
  sheet.setRowHeight(1, 36);

  sheet.getRange("A2:H2").merge();
  sheet.getRange("A2").setValue("Aturan Poin: Menang (W) = +2 Poin | Kalah (L) = 0 Poin. Peringkat 1 & 2 -> Upper Bracket, Peringkat 3 -> Lower Bracket, Peringkat 4 -> Gugur.")
    .setFontItalic(true).setFontSize(9).setBackground("#1e293b").setFontColor("#94a3b8")
    .setHorizontalAlignment("center");
  sheet.setRowHeight(2, 22);

  var currRow = 4;
  var groups = (groupStageData && typeof groupStageData === "object" && Object.keys(groupStageData).length > 0)
    ? groupStageData
    : { "Grup A": [], "Grup B": [] };

  for (var gName in groups) {
    sheet.getRange(currRow, 1, 1, 8).merge();
    sheet.getRange(currRow, 1).setValue("🏆 KLASEMEN " + gName.toUpperCase())
      .setFontWeight("bold").setFontSize(11).setBackground("#1e293b").setFontColor("#fbbf24");
    currRow++;

    sheet.getRange(currRow, 1, 1, 8).setValues([[
      "Grup", "Pos", "Nama Tim", "Main (M)", "Menang (W)", "Kalah (L)", "Poin (PTS)", "Status Kualifikasi"
    ]]).setFontWeight("bold").setBackground("#334155").setFontColor("#ffffff").setHorizontalAlignment("center");
    currRow++;

    var tList = (groups[gName] || []).slice();
    // Sort descending by pts (win * 2)
    tList.sort(function(a, b) {
      var ptsA = (a.win || 0) * 2;
      var ptsB = (b.win || 0) * 2;
      if (ptsB !== ptsA) return ptsB - ptsA;
      return (a.loss || 0) - (b.loss || 0);
    });

    if (tList.length === 0) {
      sheet.getRange(currRow, 1, 1, 8).setValues([[gName, "-", "Belum ada tim di grup ini", 0, 0, 0, 0, "-"]])
        .setFontItalic(true).setHorizontalAlignment("center");
      currRow++;
    } else {
      for (var t = 0; t < tList.length; t++) {
        var tm = tList[t];
        var win = tm.win || 0;
        var loss = tm.loss || 0;
        var played = win + loss;
        var pts = win * 2;
        var status = "-";
        var bg = "#ffffff";
        var fg = "#000000";

        if (t === 0 || t === 1) {
          status = "Lolos ke Upper Bracket (Peringkat " + (t + 1) + ")";
          bg = "#dcfce7"; // light green
          fg = "#166534";
        } else if (t === 2) {
          status = "Lolos ke Lower Bracket (Peringkat 3)";
          bg = "#fef9c3"; // light yellow
          fg = "#854d0e";
        } else {
          status = "Gugur Babak Grup";
          bg = "#fee2e2"; // light red
          fg = "#991b1b";
        }

        sheet.getRange(currRow, 1, 1, 8).setValues([[
          gName,
          (t + 1),
          tm.name || ("Slot " + (t + 1)),
          played,
          win,
          loss,
          pts,
          status
        ]]).setHorizontalAlignment("center");

        sheet.getRange(currRow, 3).setHorizontalAlignment("left").setFontWeight("bold");
        sheet.getRange(currRow, 7).setFontWeight("bold");
        sheet.getRange(currRow, 8).setBackground(bg).setFontColor(fg).setFontWeight("bold");

        currRow++;
      }
    }
    currRow++; // empty spacing
  }

  sheet.setColumnWidth(1, 100);
  sheet.setColumnWidth(2, 60);
  sheet.setColumnWidth(3, 220);
  sheet.setColumnWidth(4, 90);
  sheet.setColumnWidth(5, 100);
  sheet.setColumnWidth(6, 90);
  sheet.setColumnWidth(7, 100);
  sheet.setColumnWidth(8, 240);
}

/**
 * Membuat & memperbarui sheet 'List Point & Commander MCGG'
 * Kolom: Lobi, Rank, Nama, IGN, Game ID, M1 Cmd, M1 Rank, M1 Pts, M2 Cmd, M2 Rank, M2 Pts, M3 Cmd, M3 Rank, M3 Pts, Penalti, Total Poin, Top 4 Finishes, Status
 */
function syncListPointAndCommanderMCGG(ss, mcggLobbies) {
  var sheet = getOrCreateSheet(ss, "List Point & Commander MCGG");
  sheet.clear();

  // Title Header
  sheet.getRange("A1:R1").merge();
  sheet.getRange("A1").setValue("♟️ KLASEMEN POIN & PENGGUNAAN COMMANDER MCGG - YMC S4 2026")
    .setFontWeight("bold").setFontSize(14).setBackground("#0f172a").setFontColor("#a855f7")
    .setHorizontalAlignment("center").setVerticalAlignment("middle");
  sheet.setRowHeight(1, 36);

  sheet.getRange("A2:R2").merge();
  sheet.getRange("A2").setValue("Sistem Poin: Juara 1 (+4), Juara 2 (+3), Juara 3 (+2), Juara 4 (+1), Pos 5 (-1), Pos 6 (-2), Pos 7 (-3), Pos 8 (-4) | Penalti Commander: -2 Poin | Penalti Chat All: -10 Poin")
    .setFontItalic(true).setFontSize(9).setBackground("#1e293b").setFontColor("#94a3b8")
    .setHorizontalAlignment("center");
  sheet.setRowHeight(2, 22);

  var pointMap = { 1: 4, 2: 3, 3: 2, 4: 1, 5: -1, 6: -2, 7: -3, 8: -4 };

  var lobbyDefs = [
    { key: "LOBBY_A", title: "KLASEMEN LOBBY A (Penyisihan 8 Player)" },
    { key: "LOBBY_B", title: "KLASEMEN LOBBY B (Penyisihan 8 Player)" },
    { key: "GRAND_FINAL", title: "KLASEMEN GRAND FINAL MCGG (8 Player Terbaik)" }
  ];

  var currRow = 4;
  var lobbies = (mcggLobbies && typeof mcggLobbies === "object") ? mcggLobbies : {};

  for (var ld = 0; ld < lobbyDefs.length; ld++) {
    var def = lobbyDefs[ld];
    var pList = (lobbies[def.key] || []).slice();

    sheet.getRange(currRow, 1, 1, 18).merge();
    sheet.getRange(currRow, 1).setValue("📌 " + def.title)
      .setFontWeight("bold").setFontSize(11).setBackground("#1e293b").setFontColor("#fbbf24");
    currRow++;

    sheet.getRange(currRow, 1, 1, 18).setValues([[
      "Lobi", "Rank", "Nama Peserta", "Nickname (IGN)", "ID Game",
      "M1 Commander", "M1 Rank", "M1 Pts",
      "M2 Commander", "M2 Rank", "M2 Pts",
      "M3 Commander", "M3 Rank", "M3 Pts",
      "Penalti", "Total Poin", "Top 4 Finishes", "Status Kualifikasi"
    ]]).setFontWeight("bold").setBackground("#334155").setFontColor("#ffffff").setHorizontalAlignment("center");
    currRow++;

    // Calculate details and Sort players according to Tie-Breaker
    var enriched = pList.map(function(p) {
      var r1 = p.r1 || 0;
      var r2 = p.r2 || 0;
      var r3 = p.r3 || 0;
      var pts1 = pointMap[r1] || 0;
      var pts2 = pointMap[r2] || 0;
      var pts3 = pointMap[r3] || 0;
      var penalty = p.penalty || 0;
      var totalPts = pts1 + pts2 + pts3 - penalty;

      var top4Count = [r1, r2, r3].filter(function(r) { return r >= 1 && r <= 4; }).length;
      var bestRank = Math.min(r1 || 99, r2 || 99, r3 || 99);

      return {
        raw: p,
        r1: r1, r2: r2, r3: r3,
        c1: p.c1 || "-", c2: p.c2 || "-", c3: p.c3 || "-",
        pts1: pts1, pts2: pts2, pts3: pts3,
        penalty: penalty,
        totalPts: totalPts,
        top4Count: top4Count,
        bestRank: bestRank
      };
    });

    enriched.sort(function(a, b) {
      if (b.totalPts !== a.totalPts) return b.totalPts - a.totalPts;
      if (b.top4Count !== a.top4Count) return b.top4Count - a.top4Count;
      if (a.penalty !== b.penalty) return a.penalty - b.penalty;
      return a.bestRank - b.bestRank;
    });

    if (enriched.length === 0) {
      sheet.getRange(currRow, 1, 1, 18).setValues([[def.key, "-", "Belum ada pemain di lobi ini", "-", "-", "-", "-", 0, "-", "-", 0, "-", "-", 0, 0, 0, 0, "-"]])
        .setFontItalic(true).setHorizontalAlignment("center");
      currRow++;
    } else {
      for (var ep = 0; ep < enriched.length; ep++) {
        var item = enriched[ep];
        var ply = item.raw;
        var rank = ep + 1;
        var status = "-";
        var bg = "#ffffff";
        var fg = "#000000";

        if (def.key === "GRAND_FINAL") {
          if (rank === 1) {
            status = "🏆 JUARA 1 (CHAMPION)";
            bg = "#fef08a"; fg = "#854d0e";
          } else if (rank === 2) {
            status = "🥈 JUARA 2 (RUNNER-UP)";
            bg = "#e2e8f0"; fg = "#1e293b";
          } else if (rank === 3) {
            status = "🥉 JUARA 3";
            bg = "#ffedd5"; fg = "#9a3412";
          } else if (rank === 4) {
            status = "PERINGKAT 4";
            bg = "#f3e8ff"; fg = "#6b21a8";
          } else {
            status = "FINALIS (Peringkat " + rank + ")";
            bg = "#f8fafc"; fg = "#64748b";
          }
        } else {
          if (rank <= 4) {
            status = "LOLOS KE GRAND FINAL (Top " + rank + ")";
            bg = "#dcfce7"; fg = "#166534";
          } else {
            status = "Gugur Fase Lobi";
            bg = "#fee2e2"; fg = "#991b1b";
          }
        }

        sheet.getRange(currRow, 1, 1, 18).setValues([[
          def.key,
          rank,
          ply.name || "-",
          ply.nickname || "-",
          ply.gameId || "-",
          item.c1, item.r1 ? ("Rank " + item.r1) : "-", item.pts1,
          item.c2, item.r2 ? ("Rank " + item.r2) : "-", item.pts2,
          item.c3, item.r3 ? ("Rank " + item.r3) : "-", item.pts3,
          item.penalty > 0 ? ("-" + item.penalty) : "0",
          item.totalPts,
          item.top4Count,
          status
        ]]).setHorizontalAlignment("center");

        sheet.getRange(currRow, 3).setHorizontalAlignment("left").setFontWeight("bold");
        sheet.getRange(currRow, 16).setFontWeight("bold");
        sheet.getRange(currRow, 18).setBackground(bg).setFontColor(fg).setFontWeight("bold");

        currRow++;
      }
    }
    currRow++; // empty spacing
  }

  sheet.setColumnWidth(1, 90);
  sheet.setColumnWidth(2, 50);
  sheet.setColumnWidth(3, 180);
  sheet.setColumnWidth(4, 140);
  sheet.setColumnWidth(5, 110);
  sheet.setColumnWidth(6, 120);
  sheet.setColumnWidth(7, 70);
  sheet.setColumnWidth(8, 60);
  sheet.setColumnWidth(9, 120);
  sheet.setColumnWidth(10, 70);
  sheet.setColumnWidth(11, 60);
  sheet.setColumnWidth(12, 120);
  sheet.setColumnWidth(13, 70);
  sheet.setColumnWidth(14, 60);
  sheet.setColumnWidth(15, 70);
  sheet.setColumnWidth(16, 90);
  sheet.setColumnWidth(17, 100);
  sheet.setColumnWidth(18, 220);
}

/**
 * ========================================================
 * MASTER FUNCTION: BUAT / PERBARUI SEMUA SHEET TURNAMEN
 * ========================================================
 * Fungsi ini dapat dijalankan langsung dari toolbar Apps Script,
 * atau dipanggil otomatis saat website menekan tombol simpan perubahan.
 */
function createOrUpdateAllTournamentSheets(explicitGroupStageData, explicitMcggLobbies) {
  Logger.log("--- MEMULAI GENERASI SEMUA SHEET TURNAMEN ---");
  var ss = getTargetSpreadsheet();

  var groupData = explicitGroupStageData;
  var mcggData = explicitMcggLobbies;

  // Jika tidak dipassing dari POST, baca dari sheet 'Pengaturan Turnamen'
  if (!groupData || !mcggData) {
    var cfgSheet = ss.getSheetByName("Pengaturan Turnamen");
    if (cfgSheet && cfgSheet.getLastRow() >= 2) {
      var cData = cfgSheet.getDataRange().getValues();
      for (var c = 1; c < cData.length; c++) {
        var key = cData[c][0] ? cData[c][0].toString().trim() : "";
        var val = cData[c][1] ? cData[c][1].toString() : "";
        try {
          if (!groupData && key === "groupStageData") groupData = JSON.parse(val);
          if (!mcggData && key === "mcggLobbies") mcggData = JSON.parse(val);
        } catch(e) {}
      }
    }
  }

  // 1. Sync List Bagan
  syncListBagan(ss, groupData, mcggData);
  Logger.log("1. Sheet 'List Bagan' berhasil dibuat/diperbarui!");

  // 2. Sync List Point
  syncListPoint(ss, groupData);
  Logger.log("2. Sheet 'List Point' berhasil dibuat/diperbarui!");

  // 3. Sync List Point & Commander MCGG
  syncListPointAndCommanderMCGG(ss, mcggData);
  Logger.log("3. Sheet 'List Point & Commander MCGG' berhasil dibuat/diperbarui!");

  Logger.log("=== SEMUA SHEET TURNAMEN SELESAI DIPERBARUI ===");
  return "Berhasil membuat & memperbarui 3 Sheet: List Bagan, List Point, dan List Point & Commander MCGG!";
}
