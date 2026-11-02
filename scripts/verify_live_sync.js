/**
 * Skrip Verifikasi Integritas & Sinkronisasi Live Data Google Sheets ke UI
 */
const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzmodAuYmQOsrYQIVwJW_3jBIDFTdpqwmkg5njJKNaTCZsEfUJn9g1XCzHgV1WfsKl0CA/exec";

async function run() {
  console.log("🔄 Mengambil data live dari Google Apps Script...");
  const res = await fetch(WEBHOOK_URL);
  const data = await res.json();

  console.log("=== VERIFIKASI SINKRONISASI DATA SHEET KE UI ===");

  const activeSheetParticipants = data.participants || [];
  console.log("1. Jumlah Pendaftar dari Sheet:");
  console.log("   - Total Pendaftar:", activeSheetParticipants.length);

  const mlbbTeams = activeSheetParticipants.filter(
    (p) => p.category === "MLBB",
  );
  const mcggPlayers = activeSheetParticipants.filter(
    (p) => p.category === "MCGG",
  );
  console.log("   - Tim MLBB:", mlbbTeams.length);
  console.log("   - Pemain MCGG:", mcggPlayers.length);

  // 2. Status Verifikasi
  const mlbbStatuses = {};
  mlbbTeams.forEach(
    (t) => (mlbbStatuses[t.status] = (mlbbStatuses[t.status] || 0) + 1),
  );
  console.log("\n2. Status Verifikasi Tim MLBB:", mlbbStatuses);

  const mcggStatuses = {};
  mcggPlayers.forEach(
    (p) => (mcggStatuses[p.status] = (mcggStatuses[p.status] || 0) + 1),
  );
  console.log("   Status Verifikasi Pemain MCGG:", mcggStatuses);

  // 3. Roster Completeness
  console.log("\n3. Kelengkapan Roster Tim MLBB:");
  let rosterComplete = 0;
  let rosterIncomplete = 0;
  mlbbTeams.forEach((t) => {
    if (t.roster && t.roster.length >= 5) {
      rosterComplete++;
    } else {
      rosterIncomplete++;
      console.log(
        `   [!] Tim "${t.name}" roster < 5 (${t.roster ? t.roster.length : 0})`,
      );
    }
  });
  console.log(
    `   - Tim dengan roster >= 5: ${rosterComplete}/${mlbbTeams.length}`,
  );

  // 4. Bagan MLBB (Group Stage Data)
  console.log("\n4. Bagan Fase Grup MLBB:");
  if (data.config && data.config.groupStageData) {
    const groups = data.config.groupStageData;
    let totalTeamsInGroups = 0;
    for (const [gName, teams] of Object.entries(groups)) {
      console.log(
        `   - ${gName}: ${teams.length} tim (${teams.map((t) => t.name).join(", ")})`,
      );
      totalTeamsInGroups += teams.length;
    }
    console.log(`   Total tim terdistribusi di grup: ${totalTeamsInGroups}`);
  } else {
    console.log("   [!] Tidak ada groupStageData");
  }

  // 5. Match Results MLBB
  console.log("\n5. Hasil Pertandingan MLBB (Bagan & MVP):");
  if (data.config && data.config.groupMatchResults) {
    const matches = data.config.groupMatchResults;
    const matchKeys = Object.keys(matches);
    console.log(`   - Total match tersimpan: ${matchKeys.length}`);
    const playedMatches = matchKeys.filter((k) => matches[k].winner);
    console.log(
      `   - Match yang sudah selesai/ada pemenang: ${playedMatches.length}`,
    );
    const withMvp = matchKeys.filter((k) => matches[k].mvpPlayer);
    console.log(`   - Match dengan MVP terisi: ${withMvp.length}`);
  }

  // 6. Lobi MCGG
  console.log("\n6. Lobi Turnamen MCGG:");
  if (data.config && data.config.mcggLobbies) {
    const lobbies = data.config.mcggLobbies;
    for (const [lKey, players] of Object.entries(lobbies)) {
      const playersWithPoints = players.filter(
        (p) => (p.total || 0) > 0 || p.r1 > 0,
      );
      console.log(
        `   - ${lKey}: ${players.length} pemain (${playersWithPoints.length} sudah ada poin)`,
      );
    }
  }

  // 7. Status Pendaftaran
  console.log("\n7. Status Pendaftaran:");
  console.log(
    "   - isRegistrationClosed:",
    data.config ? data.config.isRegistrationClosed : "undefined",
  );
  console.log(
    "   - Mode Bagan MLBB:",
    data.config ? data.config.tournamentFormat : "undefined",
  );

  // 8. Cek apakah ada tim di grup yang tidak ada di daftar participants
  console.log("\n8. Integritas Relasi:");
  if (data.config && data.config.groupStageData) {
    const partNameSet = new Set(
      mlbbTeams.map((t) => (t.name || "").trim().toLowerCase()),
    );
    let unmatchedInGroup = 0;
    for (const [gName, teams] of Object.entries(data.config.groupStageData)) {
      teams.forEach((t) => {
        const clean = (t.name || "").trim().toLowerCase();
        if (!partNameSet.has(clean)) {
          console.log(
            `   [!] Tim "${t.name}" di ${gName} tidak ditemukan di daftar pendaftar MLBB!`,
          );
          unmatchedInGroup++;
        }
      });
    }
    if (unmatchedInGroup === 0) {
      console.log(
        "   ✅ Seluruh tim di fase grup MLBB 100% cocok dengan data pendaftar.",
      );
    }
  }
}

run().catch(console.error);
