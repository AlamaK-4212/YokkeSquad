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
// 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE
// ========================================================
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var result = {
      status: "online",
      participants: []
    };

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
        if (folderMatch && folderMatch[1]) {
          try {
            var tFolder = DriveApp.getFolderById(folderMatch[1]);
            var logoFiles = tFolder.getFilesByName("Logo_" + teamName + ".jpg");
            if (logoFiles.hasNext()) {
              logoUrl = logoFiles.next().getUrl();
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
        var pIdCard = (mRow[8] && mRow[8].toString().indexOf("http") !== -1) ? mRow[8].toString().trim() : "";
        var pNotes = (mRow[8] && mRow[8].toString().indexOf("http") === -1) ? mRow[8].toString().trim() : (mRow[9] ? mRow[9].toString().trim() : "");

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

    var mainFolder = DriveApp.getFolderById(TARGET_FOLDER_ID);

    function saveBase64Image(base64Data, fileName, targetFolder) {
      if (!base64Data || typeof base64Data !== 'string' || base64Data.indexOf("data:image") === -1) {
        return "-";
      }
      try {
        var parts = base64Data.split(",");
        var contentType = parts[0].split(";")[0].replace("data:", "");
        var decoded = Utilities.base64Decode(parts[1]);
        var blob = Utilities.newBlob(decoded, contentType, fileName);
        var file = targetFolder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
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
              var teamFolder;
              var teamFolders = mainFolder.getFoldersByName(teamFolderName);
              if (teamFolders.hasNext()) {
                teamFolder = teamFolders.next();
              } else {
                teamFolder = mainFolder.createFolder(teamFolderName);
                teamFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
              }

              if (data.logo && data.logo.indexOf("data:image") !== -1) {
                saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);
              }

              var roster = data.roster || [];
              var rosterSummaryList = [];
              roster.forEach(function(m, i) {
                var memberName = m.name || ("Anggota_" + (i + 1));
                var safeRole = (m.role || "Pemain").replace(/[^a-zA-Z0-9]/g, "_");
                var safeName = memberName.replace(/[^a-zA-Z0-9]/g, "_");
                var cardFileName = "IDCard_" + safeRole + "_" + safeName + ".jpg";

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
              var mcggFolder;
              var mcggFolders = mainFolder.getFoldersByName(mcggFolderName);
              if (mcggFolders.hasNext()) {
                mcggFolder = mcggFolders.next();
              } else {
                mcggFolder = mainFolder.createFolder(mcggFolderName);
                mcggFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
              }

              var safePlayerName = playerName.replace(/[^a-zA-Z0-9]/g, "_");
              var cardBase64 = data.idCard || (data.roster && data.roster[0] ? data.roster[0].idCard : "");
              
              if (cardBase64 && cardBase64.indexOf("data:image") !== -1) {
                var mcggIdCardUrl = saveBase64Image(cardBase64, "IDCard_MCGG_" + safePlayerName + ".jpg", mcggFolder);
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
      var teamFolder = mainFolder.createFolder(teamFolderName);
      teamFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      var teamFolderUrl = teamFolder.getUrl();

      var logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);

      var roster = data.roster || [];
      var rosterSummaryList = [];

      var off1Url = "-";
      var capUrl = "-";

      roster.forEach(function(m, i) {
        var memberName = m.name || ("Anggota_" + (i + 1));
        var safeRole = (m.role || "Pemain").replace(/[^a-zA-Z0-9]/g, "_");
        var safeName = memberName.replace(/[^a-zA-Z0-9]/g, "_");
        var cardFileName = "IDCard_" + safeRole + "_" + safeName + ".jpg";

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
      var mcggFolder;
      var mcggFolders = mainFolder.getFoldersByName(mcggFolderName);
      if (mcggFolders.hasNext()) {
        mcggFolder = mcggFolders.next();
      } else {
        mcggFolder = mainFolder.createFolder(mcggFolderName);
        mcggFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      }

      var safePlayerName = playerName.replace(/[^a-zA-Z0-9]/g, "_");
      var mcggIdCardUrl = saveBase64Image(data.idCard || (data.roster && data.roster[0] ? data.roster[0].idCard : ""), "IDCard_MCGG_" + safePlayerName + ".jpg", mcggFolder);

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
