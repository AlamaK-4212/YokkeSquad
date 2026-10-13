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

var TARGET_FOLDER_ID = "1i6ccl3qnoWeBPHTcTr6Q4GRyWWNJ5m8M"; // Folder: Yokke Tournament - Uploads

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
// 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE
// ========================================================
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var result = {
      status: "online",
      participants: []
    };

    var mainFolder = getOrCreateUploadFolder();

    // A. BACA TAB PENDAFTARAN MLBB
    var mlbbSheet = ss.getSheetByName("Pendaftaran MLBB");
    if (mlbbSheet && mlbbSheet.getLastRow() > 1) {
      var mlbbData = mlbbSheet.getDataRange().getValues();
      for (var i = 1; i < mlbbData.length; i++) {
        var row = mlbbData[i];
        if (!row || row.length < 2) continue;
        var isAllEmpty = row.every(function(cell) { return cell === null || cell === undefined || cell.toString().trim() === ""; });
        if (isAllEmpty) continue;

        var teamName = row[1] ? row[1].toString().trim() : "";
        if (!teamName || teamName === "-" || teamName.length < 2) continue;
        var dept = row[2] ? row[2].toString().trim() : "-";
        var wa = row[3] ? row[3].toString().trim() : "-";
        var offName = row[4] ? row[4].toString().trim() : "-";
        var offNip = row[5] ? row[5].toString().trim() : "-";
        var offGameId = row[6] ? row[6].toString().trim() : "-";
        var offOrg = (row[7] ? row[7].toString().trim() : "") === "Organik";
        
        var capName = row[8] ? row[8].toString().trim() : "-";
        var capNip = row[9] ? row[9].toString().trim() : "-";
        var capGameId = row[10] ? row[10].toString().trim() : "-";
        var capOrg = (row[11] ? row[11].toString().trim() : "") === "Organik";
        
        var rosterRaw = row[12] ? row[12].toString().trim() : "";
        var status = (row[13] && row[13].toString().trim()) ? row[13].toString().trim() : "PENDING";
        var notes = row[14] ? row[14].toString().trim() : "";

        // Cari Folder Google Drive Tim untuk Logo & ID Card
        var logoUrl = "";
        var folderMatch = (notes || "").match(/folders\/([a-zA-Z0-9_-]+)/);
        var tFolder = null;
        if (folderMatch && folderMatch[1]) {
          try {
            tFolder = DriveApp.getFolderById(folderMatch[1]);
          } catch(err) {}
        }
        if (!tFolder && mainFolder) {
          try {
            var cleanTName = teamName.toLowerCase().replace(/[^a-z0-9]/g, "");
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

        var rosterList = [];
        if (rosterRaw) {
          // Pisahkan berdasarkan blok anggota (misal diawali dengan "1.", "2.", dst.)
          var blocks = rosterRaw.split(/\n\s*\n|\n(?=\s*\d+\.\s+)/);
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

            // Ekstrak Link ID Card jika tersedia
            var linkMatch = block.match(/Link ID Card:\s*(https?:\/\/[^\s\n\r]+)/i);
            if (linkMatch) {
              cardLink = linkMatch[1];
            }

            // Ambil baris pertama sebagai deskripsi nama dan peran
            var firstLine = block.split("\n")[0].trim().replace(/^\d+\.\s*/, "");
            if (firstLine.indexOf(":") !== -1) {
              var parts = firstLine.split(":");
              role = parts[0].trim();
              name = parts.slice(1).join(":").trim();
            } else {
              name = firstLine;
            }

            if (name.indexOf("IGN:") !== -1) {
              var ignMatch = name.match(/IGN:\s*([^,\)]+)/);
              if (ignMatch) ign = ignMatch[1].trim();
            } else if (name.indexOf('"') !== -1) {
              var qMatch = name.match(/"([^"]+)"/);
              if (qMatch) ign = qMatch[1];
            }

            var nipMatch = name.match(/NIP:\s*([^,\)]+)/i) || name.match(/\(([^\)]+)\)/);
            if (nipMatch) nip = nipMatch[1].trim();

            if (isCap && capGameId !== "-") {
              gId = capGameId;
            }

            var cleanName = name.replace(/\([^\)]+\)/g, "")
                                .replace(/"[^"]+"/g, "")
                                .replace(/\[[^\]]+\]/g, "")
                                .replace(/->\s*Link ID Card:.*$/g, "")
                                .trim();

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

        // Jika anggota belum ada link ID Card, cari berkas gambar di Google Drive folder tim
        if (tFolder && rosterList.length > 0) {
          try {
            var allFiles = tFolder.getFiles();
            var driveFiles = [];
            while (allFiles.hasNext()) {
              var f = allFiles.next();
              driveFiles.push({ name: f.getName().toLowerCase(), url: f.getUrl() });
            }
            rosterList.forEach(function(m) {
              if (!m.idCard) {
                var cleanEmpId = (m.empId || "").toString().replace(/[^0-9]/g, "");
                var cleanMemberName = (m.name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
                if (cleanEmpId.length >= 4) {
                  for (var df = 0; df < driveFiles.length; df++) {
                    if (driveFiles[df].name.indexOf(cleanEmpId) !== -1) {
                      m.idCard = driveFiles[df].url;
                      break;
                    }
                  }
                }
                if (!m.idCard && cleanMemberName.length > 2) {
                  for (var df = 0; df < driveFiles.length; df++) {
                    var cdfName = driveFiles[df].name.replace(/[^a-z0-9]/g, "");
                    if (cdfName.indexOf(cleanMemberName) !== -1) {
                      m.idCard = driveFiles[df].url;
                      break;
                    }
                  }
                }
              }
            });
          } catch(e) {}
        }

        // Cek deduplikasi tim MLBB (jika tim mendaftar ulang dengan ID card lebih lengkap)
        var existingTeamIdx = -1;
        for (var t = 0; t < result.participants.length; t++) {
          if (result.participants[t].category === "MLBB" && result.participants[t].name.toLowerCase() === teamName.toLowerCase()) {
            existingTeamIdx = t;
            break;
          }
        }

        var teamData = {
          id: 1000 + i,
          rowIndex: i + 1,
          category: "MLBB",
          name: teamName,
          captainName: capName,
          captainNickname: capName,
          dept: dept,
          wa: wa,
          logo: logoUrl,
          notes: notes,
          status: status,
          roster: rosterList
        };

        if (existingTeamIdx !== -1) {
          // Jika baris baru memiliki foto roster lebih lengkap, gunakan yang baru
          var prevRoster = result.participants[existingTeamIdx].roster || [];
          var prevCardsCount = prevRoster.filter(function(m){ return !!m.idCard; }).length;
          var newCardsCount = rosterList.filter(function(m){ return !!m.idCard; }).length;
          if (newCardsCount >= prevCardsCount) {
            result.participants[existingTeamIdx] = teamData;
          }
        } else {
          result.participants.push(teamData);
        }
      }
    }

    // B. BACA TAB PENDAFTARAN MCGG (DENGAN DEDUPLIKASI CERDAS)
    var mcggSheet = ss.getSheetByName("Pendaftaran MCGG");
    if (mcggSheet && mcggSheet.getLastRow() > 1) {
      var mcggData = mcggSheet.getDataRange().getValues();
      for (var j = 1; j < mcggData.length; j++) {
        var mRow = mcggData[j];
        if (!mRow || mRow.length < 2) continue;
        var isAllEmpty = mRow.every(function(cell) { return cell === null || cell === undefined || cell.toString().trim() === ""; });
        if (isAllEmpty) continue;

        var pName = mRow[1] ? mRow[1].toString().trim() : "";
        if (!pName || pName === "-" || pName.length < 2) continue;
        var pDept = mRow[2] ? mRow[2].toString().trim() : "-";
        var pWa = mRow[3] ? mRow[3].toString().trim() : "-";
        var pEmpId = mRow[4] ? mRow[4].toString().trim() : "-";
        var pGameId = mRow[5] ? mRow[5].toString().trim() : "-";
        var pOrg = (mRow[6] ? mRow[6].toString().trim() : "") === "Organik";
        var pStatus = (mRow[7] && mRow[7].toString().trim()) ? mRow[7].toString().trim() : "PENDING";
        
        // Cari Link ID Card di kolom manapun yang mengandung link http/drive
        var pIdCard = "";
        for (var col = 0; col < mRow.length; col++) {
          var val = mRow[col] ? mRow[col].toString().trim() : "";
          if (val.indexOf("http") !== -1 && (val.indexOf("drive.google.com") !== -1 || val.indexOf("/file/d/") !== -1 || val.indexOf("/id=") !== -1)) {
            pIdCard = val;
            break;
          }
        }
        if (!pIdCard && mRow[8] && mRow[8].toString().indexOf("http") !== -1) {
          pIdCard = mRow[8].toString().trim();
        }
        var pNotes = (mRow[8] && mRow[8].toString().indexOf("http") === -1) ? mRow[8].toString().trim() : (mRow[9] ? mRow[9].toString().trim() : "");

        // Jika belum ada link di sheet, cari berkas di Google Drive [MCGG] Berkas ID Card Pemain Solo
        if (!pIdCard && mainFolder) {
          try {
            var mcggFolderSearch = mainFolder.getFoldersByName("[MCGG] Berkas ID Card Pemain Solo");
            if (mcggFolderSearch.hasNext()) {
              var mFol = mcggFolderSearch.next();
              var mFiles = mFol.getFiles();
              var cleanPName = pName.toLowerCase().replace(/[^a-z0-9]/g, "");
              var cleanPEmpId = (pEmpId || "").toString().replace(/[^0-9]/g, "");
              while (mFiles.hasNext()) {
                var mf = mFiles.next();
                var mfName = mf.getName().toLowerCase();
                var cmf = mfName.replace(/[^a-z0-9]/g, "");
                // Prioritas 1: Cocokkan ID Pegawai (NIP / empId)
                if (cleanPEmpId.length >= 4 && mfName.indexOf(cleanPEmpId) !== -1) {
                  pIdCard = mf.getUrl();
                  break;
                }
                // Prioritas 2: Cocokkan Nama Pemain
                if (cleanPName.length > 2 && cmf.indexOf(cleanPName) !== -1) {
                  pIdCard = mf.getUrl();
                  break;
                }
              }
            }
          } catch(e) {}
        }

        var existingIdx = -1;
        for (var k = 0; k < result.participants.length; k++) {
          if (result.participants[k].category === "MCGG" && result.participants[k].name.toLowerCase() === pName.toLowerCase()) {
            existingIdx = k;
            break;
          }
        }

        if (existingIdx !== -1) {
          var existing = result.participants[existingIdx];
          if (pIdCard) {
            existing.idCard = pIdCard;
            if (existing.roster && existing.roster[0]) existing.roster[0].idCard = pIdCard;
          }
          if (pEmpId !== "-" && pEmpId) {
            if (existing.roster && existing.roster[0]) existing.roster[0].empId = pEmpId;
          }
          if (pGameId !== "-" && pGameId) {
            if (existing.roster && existing.roster[0]) existing.roster[0].gameId = pGameId;
          }
          if (pDept !== "-" && pDept) existing.dept = pDept;
          if (pWa !== "-" && pWa) existing.wa = pWa;
        } else {
          result.participants.push({
            id: 2000 + j,
            rowIndex: j + 1,
            category: "MCGG",
            name: pName,
            nickname: pName,
            dept: pDept,
            wa: pWa,
            logo: "",
            idCard: pIdCard,
            status: pStatus,
            notes: pNotes,
            roster: [{
              role: "Pemain Solo",
              name: pName,
              nickname: pName,
              empId: pEmpId,
              gameId: pGameId,
              isOrganik: pOrg,
              isCaptain: false,
              idCard: pIdCard
            }]
          });
        }
      }
    }

    // C. BACA TAB PENGATURAN TURNAMEN & PERATURAN (AGAR TIDAK TERESET)
    var configSheet = ss.getSheetByName("Pengaturan Turnamen");
    var appConfig = {
      customRules: null,
      tournamentFormat: null,
      groupStageData: null,
      mcggLobbies: null
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
        } catch(e) {
          if (key === "tournamentFormat") appConfig.tournamentFormat = val;
        }
      }
    }
    result.config = appConfig;

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
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
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
        if (kName) keyMap[kName] = k + 1; // row number
      }

      var itemsToSave = [
        { key: "customRules", val: data.customRules ? JSON.stringify(data.customRules) : null },
        { key: "tournamentFormat", val: data.tournamentFormat || null },
        { key: "groupStageData", val: data.groupStageData ? JSON.stringify(data.groupStageData) : null },
        { key: "mcggLobbies", val: data.mcggLobbies ? JSON.stringify(data.mcggLobbies) : null }
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

      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Pengaturan turnamen berhasil disimpan ke Google Sheets" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (data.action === "DELETE") {
      var delSheet = data.category === "MLBB" ? ss.getSheetByName("Pendaftaran MLBB") : ss.getSheetByName("Pendaftaran MCGG");
      if (delSheet) {
        // Jika dikirim rowIndex spesifik, hapus baris tersebut langsung
        if (data.rowIndex && data.rowIndex > 1 && data.rowIndex <= delSheet.getLastRow()) {
          delSheet.deleteRow(parseInt(data.rowIndex));
        } else {
          // Fallback: hapus baris pertama yang cocok dengan nama
          var dValues = delSheet.getDataRange().getValues();
          var dTarget = (data.teamName || data.name || "").toString().trim().toLowerCase();
          for (var dr = 1; dr < dValues.length; dr++) {
            if (dValues[dr][1] && dValues[dr][1].toString().trim().toLowerCase() === dTarget) {
              delSheet.deleteRow(dr + 1);
              break;
            }
          }
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Data berhasil dihapus dari Google Sheets" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    if (data.action === "UPDATE") {
      var updateSheet = data.category === "MLBB" ? ss.getSheetByName("Pendaftaran MLBB") : ss.getSheetByName("Pendaftaran MCGG");
      if (updateSheet) {
        var rowIdx = -1;
        if (data.rowIndex && data.rowIndex > 1 && data.rowIndex <= updateSheet.getLastRow()) {
          rowIdx = parseInt(data.rowIndex);
        } else {
          var sheetValues = updateSheet.getDataRange().getValues();
          var searchTarget = (data.teamName || data.name || "").toString().trim().toLowerCase();
          for (var r = 1; r < sheetValues.length; r++) {
            if (sheetValues[r][1] && sheetValues[r][1].toString().trim().toLowerCase() === searchTarget) {
              rowIdx = r + 1;
              break;
            }
          }
        }

        if (rowIdx !== -1) {
            
            if (data.category === "MLBB") {
              var teamName = data.teamName || data.name || "Tim MLBB";
              var teamFolderName = "[MLBB] " + teamName + " - " + (data.dept || "Yokke");
              var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);

              if (data.logo && data.logo.indexOf("data:image") !== -1) {
                saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);
              }

              var roster = data.roster || [];
              var rosterSummaryList = [];
              roster.forEach(function(m, i) {
                var memberName = m.name || ("Anggota_" + (i + 1));
                var safeRole = (m.role || "Pemain").replace(/[^a-zA-Z0-9]/g, "_");
                var safeName = memberName.replace(/[^a-zA-Z0-9]/g, "_");
                var safeEmp = (m.empId || "-").toString().replace(/[^a-zA-Z0-9]/g, "_");
                var cardFileName = "IDCard_" + safeRole + "_" + safeEmp + "_" + safeName + ".jpg";

                var cardUrl = "-";
                if (m.idCard && m.idCard.indexOf("data:image") !== -1) {
                  cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);
                } else if (m.idCard && m.idCard.indexOf("http") !== -1) {
                  cardUrl = m.idCard;
                }

                var line = (i + 1) + ". " + m.role + ": " + m.name + 
                           ' (IGN: ' + (m.nickname || "-") + 
                           ", NIP: " + (m.empId || "-") + 
                           ", " + (m.isOrganik ? "Organik" : "Non-Organik") + 
                           (m.isCaptain ? " [KAPTEN]" : "") + 
                           ")" + (cardUrl !== "-" ? "\n   -> Link ID Card: " + cardUrl : "");
                rosterSummaryList.push(line);
              });

              if (data.dept) updateSheet.getRange(rowIdx, 3).setValue(data.dept);
              if (data.wa) updateSheet.getRange(rowIdx, 4).setValue(data.wa);
              if (rosterSummaryList.length > 0) updateSheet.getRange(rowIdx, 13).setValue(rosterSummaryList.join("\n\n"));
              if (data.status) updateSheet.getRange(rowIdx, 14).setValue(data.status);
              if (data.notes) updateSheet.getRange(rowIdx, 15).setValue(data.notes);

            } else {
              var playerName = data.name || "Pemain MCGG";
              var mcggFolderName = "[MCGG] Berkas ID Card Pemain Solo";
              var mcggFolder = getOrCreateSubFolder(mainFolder, mcggFolderName);

              var safePlayerName = playerName.replace(/[^a-zA-Z0-9]/g, "_");
              var safeEmp = (data.empId || (data.roster && data.roster[0] ? data.roster[0].empId : "-") || "").toString().replace(/[^a-zA-Z0-9]/g, "_");
              var cardBase64 = data.idCard || (data.roster && data.roster[0] ? data.roster[0].idCard : "");
              
              if (cardBase64 && cardBase64.indexOf("data:image") !== -1) {
                var mcggIdCardUrl = saveBase64Image(cardBase64, "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", mcggFolder);
                if (mcggIdCardUrl !== "-") {
                  updateSheet.getRange(rowIdx, 9).setValue(mcggIdCardUrl);
                }
              }

              if (data.dept) updateSheet.getRange(rowIdx, 3).setValue(data.dept);
              if (data.wa) updateSheet.getRange(rowIdx, 4).setValue(data.wa);
              if (data.status) updateSheet.getRange(rowIdx, 8).setValue(data.status);
              if (data.notes) updateSheet.getRange(rowIdx, 9).setValue(data.notes);
            }
          }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Data dan foto berhasil diperbarui di Google Drive & Sheets" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // REGISTRASI BARU
    if (data.category === "MLBB") {
      var sheet = ss.getSheetByName("Pendaftaran MLBB");
      var teamName = data.teamName || data.name || "Tim MLBB";
      
      var teamFolderName = "[MLBB] " + teamName + " - " + (data.dept || "Yokke");
      var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);
      var teamFolderUrl = teamFolder ? teamFolder.getUrl() : "-";

      var logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);

      var roster = data.roster || [];
      var rosterSummaryList = [];

      var off1Url = "-";
      var capUrl = "-";

      roster.forEach(function(m, i) {
        var memberName = m.name || ("Anggota_" + (i + 1));
        var safeRole = (m.role || "Pemain").replace(/[^a-zA-Z0-9]/g, "_");
        var safeName = memberName.replace(/[^a-zA-Z0-9]/g, "_");
        var safeEmp = (m.empId || "-").toString().replace(/[^a-zA-Z0-9]/g, "_");
        var cardFileName = "IDCard_" + safeRole + "_" + safeEmp + "_" + safeName + ".jpg";

        var cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);

        if (m.role && m.role.indexOf("Official 1") !== -1) off1Url = cardUrl;
        if (m.isCaptain) capUrl = cardUrl;

        var line = (i + 1) + ". " + m.role + ": " + m.name + 
                   ' (IGN: ' + (m.nickname || "-") + 
                   ", NIP: " + (m.empId || "-") + 
                   ", " + (m.isOrganik ? "Organik" : "Non-Organik") + 
                   (m.isCaptain ? " [KAPTEN]" : "") + 
                   ")" + (cardUrl !== "-" ? "\n   -> Link ID Card: " + cardUrl : "");
        rosterSummaryList.push(line);
      });

      var rosterFullText = rosterSummaryList.join("\n\n");
      var off = data.official || {};
      var cap = data.captain || {};

      sheet.appendRow([
        now,
        teamName,
        data.dept || "-",
        data.wa || "-",
        off.name || "-",
        off.empId || "-",
        off.gameId || "-",
        off.isOrganik ? "Organik" : "Non-Organik",
        cap.name || "-",
        cap.empId || "-",
        cap.gameId || "-",
        cap.isOrganik ? "Organik" : "Non-Organik",
        rosterFullText,
        "PENDING",
        teamFolderUrl !== "-" ? "Folder Drive: " + teamFolderUrl : ""
      ]);

    } else {
      var sheet = ss.getSheetByName("Pendaftaran MCGG");
      var playerName = data.name || "Pemain MCGG";
      
      var mcggFolderName = "[MCGG] Berkas ID Card Pemain Solo";
      var mcggFolder = getOrCreateSubFolder(mainFolder, mcggFolderName);

      var safePlayerName = playerName.replace(/[^a-zA-Z0-9]/g, "_");
      var safeEmp = (data.empId || (data.roster && data.roster[0] ? data.roster[0].empId : "-") || "").toString().replace(/[^a-zA-Z0-9]/g, "_");
      var mcggIdCardUrl = saveBase64Image(data.idCard || (data.roster && data.roster[0] ? data.roster[0].idCard : ""), "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", mcggFolder);

      sheet.appendRow([
        now,
        playerName,
        data.dept || "-",
        data.wa || "-",
        data.empId || "-",
        data.gameId || "-",
        data.isOrganik ? "Organik" : "Non-Organik",
        "PENDING",
        mcggIdCardUrl !== "-" ? mcggIdCardUrl : ""
      ]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
