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
      adminPassword: null,
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
          if (key.toLowerCase() === "adminpassword" || key.toLowerCase() === "admin_password" || key === "ADMIN_PIN" || key === "adminPassword") {
            appConfig.adminPassword = val.toString().trim();
          }
        } catch(e) {
          if (key === "tournamentFormat") appConfig.tournamentFormat = val;
          if (key === "isRegistrationClosed") appConfig.isRegistrationClosed = (val === "true");
          if (key.toLowerCase() === "adminpassword" || key.toLowerCase() === "admin_password" || key === "ADMIN_PIN" || key === "adminPassword") {
            appConfig.adminPassword = val.toString().trim();
          }
        }
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

    // Validasi Keamanan Server: Setiap request perubahan administratif wajib menyertakan adminPin yang valid
    if (data.action === "SAVE_CONFIG" || data.action === "DELETE") {
      var reqPin = (data.adminPin || data.adminPassword || "").toString().trim();
      var validPins = ["YOKKE2026_", "YOKKE2026"];
      
      // Ambil PIN kustom dari sheet Pengaturan Turnamen jika ada
      var cfgSheetCheck = ss.getSheetByName("Pengaturan Turnamen");
      if (cfgSheetCheck && cfgSheetCheck.getLastRow() >= 2) {
        var cData = cfgSheetCheck.getDataRange().getValues();
        for (var c = 1; c < cData.length; c++) {
          var kName = cData[c][0] ? cData[c][0].toString().trim().toLowerCase() : "";
          if (kName === "adminpassword" || kName === "admin_password" || kName === "admin_pin") {
            if (cData[c][1]) validPins.push(cData[c][1].toString().trim());
          }
        }
      }

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
        { key: "groupMatchResults", val: data.groupMatchResults ? JSON.stringify(data.groupMatchResults) : null },
        { key: "groupPlayoffMatches", val: data.groupPlayoffMatches ? JSON.stringify(data.groupPlayoffMatches) : null },
        { key: "mcggLobbies", val: data.mcggLobbies ? JSON.stringify(data.mcggLobbies) : null },
        { key: "mcggDrawState", val: data.mcggDrawState ? JSON.stringify(data.mcggDrawState) : null },
        { key: "tournamentStageState", val: data.tournamentStageState ? JSON.stringify(data.tournamentStageState) : null },
        { key: "isRegistrationClosed", val: data.isRegistrationClosed !== undefined ? (data.isRegistrationClosed ? "true" : "false") : null },
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

      // Otomatis sinkronkan 3 Sheet Turnamen Terpisah (Tabel Murni + MVP)
      try {
        var payloadForSync = data.config || data;
        syncDedicatedTournamentSheets(ss, payloadForSync);
      } catch(sheetErr) {
        Logger.log("Peringatan sinkronisasi sheet turnamen: " + sheetErr.toString());
      }

      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Pengaturan turnamen serta Sheet MLBB - Klasemen & Point, MLBB - Bagan & MVP, dan MCGG - Point, Commander & MVP berhasil diperbarui!" 
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
 * Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah
 * Dipanggil otomatis saat action === 'SAVE_CONFIG' atau 'CREATE_TOURNAMENT_SHEETS'
 */
function syncDedicatedTournamentSheets(ss, payload) {
  if (!ss) ss = getTargetSpreadsheet();
  payload = payload || {};
  const POINT_MAP = { 1: 4, 2: 3, 3: 2, 4: 1, 5: -1, 6: -2, 7: -3, 8: -4 };

  // =========================================================
  // 1. SHEET: "MLBB - Klasemen & Point"
  // =========================================================
  let sheetMLBBPoint = ss.getSheetByName('MLBB - Klasemen & Point');
  if (!sheetMLBBPoint) sheetMLBBPoint = ss.insertSheet('MLBB - Klasemen & Point');
  sheetMLBBPoint.clearContents();

  const mlbbPointHeaders = [
    'Grup', 'Peringkat', 'Nama Tim', 'Match Dimainkan', 
    'Menang (W)', 'Kalah (L)', 'Total Poin', 'Status Kelolosan', 'Total MVP Tim'
  ];
  const mlbbPointRows = [mlbbPointHeaders];

  const groupData = payload.groupStageData || {};
  const matchResults = payload.groupMatchResults || {};

  // Hitung frekuensi MVP per tim dari hasil match
  const teamMvpCount = {};
  Object.keys(matchResults).forEach(mId => {
    const m = matchResults[mId];
    if (m.mvpTeam) {
      teamMvpCount[m.mvpTeam] = (teamMvpCount[m.mvpTeam] || 0) + 1;
    } else if (m.mvpPlayer && m.winner) {
      teamMvpCount[m.winner] = (teamMvpCount[m.winner] || 0) + 1;
    }
  });

  Object.keys(groupData).forEach(gName => {
    const sorted = (groupData[gName] || []).slice().sort((a, b) => (b.pts || 0) - (a.pts || 0));
    sorted.forEach((t, idx) => {
      const mp = (parseInt(t.win) || 0) + (parseInt(t.lose) || 0);
      const is8Group = Object.keys(groupData).length === 8;
      let status = 'Menunggu Match';
      if (t.pts > 0) {
        if (is8Group) {
          status = (idx < 2) ? 'Lolos Upper Bracket' : (idx === 2 ? 'Lolos Lower Bracket' : 'Gugur');
        } else {
          status = (idx < 2) ? 'Lolos Playoff' : 'Gugur';
        }
      }
      mlbbPointRows.push([
        gName,
        `#${idx + 1}`,
        t.name || '-',
        mp,
        t.win || 0,
        t.lose || 0,
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
    for (var c1 = 1; c1 <= mlbbPointHeaders.length; c1++) {
      try { sheetMLBBPoint.autoResizeColumn(c1); } catch(e) {}
    }
  }

  // =========================================================
  // 2. SHEET: "MLBB - Bagan & MVP"
  // =========================================================
  let sheetMLBBBagan = ss.getSheetByName('MLBB - Bagan & MVP');
  if (!sheetMLBBBagan) sheetMLBBBagan = ss.insertSheet('MLBB - Bagan & MVP');
  sheetMLBBBagan.clearContents();

  const mlbbBaganHeaders = [
    'ID Match', 'Tahap / Fase', 'Format', 'Tim A', 'Skor A', 
    'Skor B', 'Tim B', 'Pemenang Match', 'MVP Match (IGN / Nama)', 'Hero MVP', 'Status Match'
  ];
  const mlbbBaganRows = [mlbbBaganHeaders];

  // A. Masukkan Jadwal & Hasil Fase Grup
  Object.keys(matchResults).forEach((mId, i) => {
    const m = matchResults[mId];
    mlbbBaganRows.push([
      m.matchId || `GRP_${i + 1}`,
      `Fase Grup - ${m.gName || ''}`,
      'BO3',
      m.teamA || '-',
      m.scoreA !== null && m.scoreA !== undefined ? m.scoreA : '-',
      m.scoreB !== null && m.scoreB !== undefined ? m.scoreB : '-',
      m.teamB || '-',
      m.winner || 'TBD',
      m.mvpPlayer || '-',
      m.mvpHero || '-',
      m.winner ? 'FINISHED' : 'SCHEDULED'
    ]);
  });

  // B. Masukkan Bagan Playoff (Semifinal & Grand Final)
  const playoffRounds = payload.groupPlayoffMatches || [];
  const roundNames = playoffRounds.length === 5
    ? ['Upper QF & Lower R1 (Hari 3)', 'Upper SF & Lower R2 (Hari 4)', 'Lower QF (Hari 4)', 'Upper Final & Lower SF/Final (Hari 5)', 'Grand Final (Hari 5)']
    : (playoffRounds.length === 3 
        ? ['Perempat Final (8 Besar)', 'Semifinal (4 Besar)', 'Grand Final'] 
        : ['Semifinal (4 Besar)', 'Grand Final']);

  playoffRounds.forEach((round, rIdx) => {
    const defaultPhase = roundNames[rIdx] || `Playoff Ronde ${rIdx + 1}`;
    (round || []).forEach((m, mIdx) => {
      const matchLabel = m.matchLabel || `PO_R${rIdx + 1}_M${mIdx + 1}`;
      const phaseName = m.phaseName || defaultPhase;
      const formatStr = phaseName.includes('Grand Final') ? 'BO5' : 'BO3';
      mlbbBaganRows.push([
        matchLabel,
        phaseName,
        formatStr,
        m.teamA || 'TBD',
        m.scoreA !== undefined ? m.scoreA : '-',
        m.scoreB !== undefined ? m.scoreB : '-',
        m.teamB || 'TBD',
        m.winner || 'TBD',
        m.mvpPlayer || '-',
        m.mvpHero || '-',
        m.winner ? 'FINISHED' : 'SCHEDULED'
      ]);
    });
  });

  if (mlbbBaganRows.length > 0) {
    sheetMLBBBagan.getRange(1, 1, mlbbBaganRows.length, mlbbBaganHeaders.length).setValues(mlbbBaganRows);
    sheetMLBBBagan.getRange(1, 1, 1, mlbbBaganHeaders.length)
      .setFontWeight('bold').setBackground('#0f172a').setFontColor('#38bdf8').setHorizontalAlignment('center');
    sheetMLBBBagan.setRowHeight(1, 32);
    for (var c2 = 1; c2 <= mlbbBaganHeaders.length; c2++) {
      try { sheetMLBBBagan.autoResizeColumn(c2); } catch(e) {}
    }
  }

  // =========================================================
  // 3. SHEET: "MCGG - Point, Commander & MVP"
  // =========================================================
  let sheetMCGG = ss.getSheetByName('MCGG - Point, Commander & MVP');
  if (!sheetMCGG) sheetMCGG = ss.insertSheet('MCGG - Point, Commander & MVP');
  sheetMCGG.clearContents();

  const mcggHeaders = [
    'Tahap Lobi', 'Peringkat Lobi', 'Nama Lengkap Pemain', 'Nickname (IGN)', 'Game ID',
    'Ronde 1 - Commander', 'Ronde 1 - Rank & Poin',
    'Ronde 2 - Commander', 'Ronde 2 - Rank & Poin',
    'Ronde 3 - Commander', 'Ronde 3 - Rank & Poin',
    'Poin Sanksi / Penalti', 'Total Poin Akhir',
    'Jumlah Top 4', 'Jumlah Juara 1 (MVP Ronde)', 'Status / Gelar'
  ];
  const mcggRows = [mcggHeaders];

  const lobbies = payload.mcggLobbies || {};
  const lobbyKeysOrder = Object.keys(lobbies).length > 0 
    ? Object.keys(lobbies) 
    : ['LOBBY_A', 'LOBBY_B', 'LOBBY_C', 'LOBBY_D', 'LOBBY_E', 'SEMI_A', 'SEMI_B', 'GRAND_FINAL'];

  lobbyKeysOrder.forEach(lobbyKey => {
    const list = (lobbies[lobbyKey] || []).slice();
    if (list.length === 0) return;

    // Sort sesuai aturan Tie-Breaker resmi
    list.sort((a, b) => {
      if ((b.total || 0) !== (a.total || 0)) return (b.total || 0) - (a.total || 0);
      const aTop4 = [a.r1, a.r2, a.r3].filter(r => r >= 1 && r <= 4).length;
      const bTop4 = [b.r1, b.r2, b.r3].filter(r => r >= 1 && r <= 4).length;
      if (bTop4 !== aTop4) return bTop4 - aTop4;
      if ((b.penalty || 0) !== (a.penalty || 0)) return (b.penalty || 0) - (a.penalty || 0);
      const aWin = [a.r1, a.r2, a.r3].filter(r => r === 1).length;
      const bWin = [b.r1, b.r2, b.r3].filter(r => r === 1).length;
      return bWin - aWin;
    });

    list.forEach((p, idx) => {
      const fmtRank = (r) => {
        const rk = parseInt(r) || 0;
        if (!rk) return '-';
        const pt = POINT_MAP[rk] || 0;
        return `Rank ${rk} (${pt > 0 ? '+' + pt : pt} pt)`;
      };

      const top4Count = [p.r1, p.r2, p.r3].filter(r => r >= 1 && r <= 4).length;
      const rank1MvpCount = [p.r1, p.r2, p.r3].filter(r => r === 1).length;
      const allRoundsPlayed = (p.r1 > 0 && p.r2 > 0 && p.r3 > 0);

      let statusLabel = 'TBD';
      if (lobbyKey === 'GRAND_FINAL') {
        if (allRoundsPlayed) {
          if (idx === 0) statusLabel = '🏆 JUARA 1 + ⭐ MVP MCGG';
          else if (idx === 1) statusLabel = '🥈 JUARA 2';
          else if (idx === 2) statusLabel = '🥉 JUARA 3';
          else statusLabel = `Finalis (#${idx + 1})`;
        }
      } else if (lobbyKey.indexOf('SEMI_') === 0) {
        if (allRoundsPlayed) {
          statusLabel = idx < 4 ? 'LOLOS KE GRAND FINAL' : ('GUGUR (Peringkat ' + (idx + 1) + ')');
        }
      } else {
        if (allRoundsPlayed) {
          const hasSemis = !!lobbies.SEMI_A;
          if (hasSemis) {
            statusLabel = idx < 3 ? 'LOLOS KE SEMIFINAL' : (idx === 3 ? 'KANDIDAT BEST 4TH' : ('GUGUR (Peringkat ' + (idx + 1) + ')'));
          } else {
            statusLabel = idx < 4 ? 'LOLOS KE GRAND FINAL' : ('GUGUR (Peringkat ' + (idx + 1) + ')');
          }
        }
      }

      mcggRows.push([
        lobbyKey,
        `#${idx + 1}`,
        p.name || 'TBD',
        p.nickname || '-',
        p.gameId || '-',
        p.c1 ? p.c1.toUpperCase() : '-',
        fmtRank(p.r1),
        p.c2 ? p.c2.toUpperCase() : '-',
        fmtRank(p.r2),
        p.c3 ? p.c3.toUpperCase() : '-',
        fmtRank(p.r3),
        p.penalty || 0,
        p.total || 0,
        top4Count,
        rank1MvpCount,
        statusLabel
      ]);
    });
  });

  if (mcggRows.length > 0) {
    sheetMCGG.getRange(1, 1, mcggRows.length, mcggHeaders.length).setValues(mcggRows);
    sheetMCGG.getRange(1, 1, 1, mcggHeaders.length)
      .setFontWeight('bold').setBackground('#0f172a').setFontColor('#38bdf8').setHorizontalAlignment('center');
    sheetMCGG.setRowHeight(1, 32);
    for (var c3 = 1; c3 <= mcggHeaders.length; c3++) {
      try { sheetMCGG.autoResizeColumn(c3); } catch(e) {}
    }
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
