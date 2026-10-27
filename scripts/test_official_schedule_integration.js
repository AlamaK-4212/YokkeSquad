const fs = require('fs');

// 1. Official Schedule Definition
const MLBB_SCHEDULE_DATES = {
  1: 'Senin, 26 Okt 2026',
  2: 'Selasa, 27 Okt 2026',
  3: 'Rabu, 28 Okt 2026',
  4: 'Kamis, 29 Okt 2026',
  5: 'Jumat, 30 Okt 2026'
};

const MLBB_OFFICIAL_GROUP_SCHEDULE = {
  'Grup A': [
    { day: 1, matchOrder: 1, teamA: 'Native', teamB: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)', room: 'Stream 1 (Room A)' },
    { day: 1, matchOrder: 2, teamA: 'Yokke Cikarang', teamB: 'My Palembang', room: 'Stream 2 (Room B)' },
    { day: 2, matchOrder: 1, teamA: 'IOS', teamB: 'My Palembang', room: 'Stream 1 (Room A)' },
    { day: 2, matchOrder: 2, teamA: 'Native', teamB: 'Yokke Cikarang', room: 'Stream 2 (Room B)' },
    { day: 3, matchOrder: 1, teamA: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)', teamB: 'Yokke Cikarang', room: 'Stream 1 (Room A)' },
    { day: 3, matchOrder: 2, teamA: 'IOS', teamB: 'Native', room: 'Stream 2 (Room B)' },
    { day: 4, matchOrder: 1, teamA: 'My Palembang', teamB: 'Native', room: 'Stream 1 (Room A)' },
    { day: 4, matchOrder: 2, teamA: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)', teamB: 'IOS', room: 'Stream 2 (Room B)' },
    { day: 5, matchOrder: 1, teamA: 'Yokke Cikarang', teamB: 'IOS', room: 'Stream 1 (Room A)' },
    { day: 5, matchOrder: 2, teamA: 'My Palembang', teamB: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)', room: 'Stream 2 (Room B)' }
  ],
  'Grup B': [
    { day: 1, matchOrder: 1, teamA: 'Anti Climax', teamB: '7 SINS', room: 'Stream 1 (Room A)' },
    { day: 1, matchOrder: 2, teamA: 'Yokke Batam Squad (YBS)', teamB: 'DEWA (Dark Elite Warriors Asli Medan)', room: 'Stream 2 (Room B)' },
    { day: 2, matchOrder: 1, teamA: 'SGMO', teamB: 'DEWA (Dark Elite Warriors Asli Medan)', room: 'Stream 1 (Room A)' },
    { day: 2, matchOrder: 2, teamA: 'Anti Climax', teamB: 'Yokke Batam Squad (YBS)', room: 'Stream 2 (Room B)' },
    { day: 3, matchOrder: 1, teamA: '7 SINS', teamB: 'Yokke Batam Squad (YBS)', room: 'Stream 1 (Room A)' },
    { day: 3, matchOrder: 2, teamA: 'SGMO', teamB: 'Anti Climax', room: 'Stream 2 (Room B)' },
    { day: 4, matchOrder: 1, teamA: 'DEWA (Dark Elite Warriors Asli Medan)', teamB: 'Anti Climax', room: 'Stream 1 (Room A)' },
    { day: 4, matchOrder: 2, teamA: '7 SINS', teamB: 'SGMO', room: 'Stream 2 (Room B)' },
    { day: 5, matchOrder: 1, teamA: 'Yokke Batam Squad (YBS)', teamB: 'SGMO', room: 'Stream 1 (Room A)' },
    { day: 5, matchOrder: 2, teamA: 'DEWA (Dark Elite Warriors Asli Medan)', teamB: '7 SINS', room: 'Stream 2 (Room B)' }
  ],
  'Grup C': [
    { day: 1, matchOrder: 1, teamA: 'AANG ALPHA', teamB: 'REKAN OM', room: 'Stream 1 (Room A)' },
    { day: 1, matchOrder: 2, teamA: 'Red Razor', teamB: 'TY BEKASI', room: 'Stream 2 (Room B)' },
    { day: 2, matchOrder: 1, teamA: 'BIKINI BOTTOM', teamB: 'TY BEKASI', room: 'Stream 1 (Room A)' },
    { day: 2, matchOrder: 2, teamA: 'AANG ALPHA', teamB: 'Red Razor', room: 'Stream 2 (Room B)' },
    { day: 3, matchOrder: 1, teamA: 'REKAN OM', teamB: 'Red Razor', room: 'Stream 1 (Room A)' },
    { day: 3, matchOrder: 2, teamA: 'BIKINI BOTTOM', teamB: 'AANG ALPHA', room: 'Stream 2 (Room B)' },
    { day: 4, matchOrder: 1, teamA: 'TY BEKASI', teamB: 'AANG ALPHA', room: 'Stream 1 (Room A)' },
    { day: 4, matchOrder: 2, teamA: 'REKAN OM', teamB: 'BIKINI BOTTOM', room: 'Stream 2 (Room B)' },
    { day: 5, matchOrder: 1, teamA: 'Red Razor', teamB: 'BIKINI BOTTOM', room: 'Stream 1 (Room A)' },
    { day: 5, matchOrder: 2, teamA: 'TY BEKASI', teamB: 'REKAN OM', room: 'Stream 2 (Room B)' }
  ],
  'Grup D': [
    { day: 1, matchOrder: 1, teamA: 'ATMO', teamB: 'DEADLINE SLAYER', room: 'Stream 1 (Room A)' },
    { day: 1, matchOrder: 2, teamA: '666', teamB: 'AVATAR BORNEO', room: 'Stream 2 (Room B)' },
    { day: 2, matchOrder: 1, teamA: 'DARFAT LIVIN FOOD', teamB: 'AVATAR BORNEO', room: 'Stream 1 (Room A)' },
    { day: 2, matchOrder: 2, teamA: 'ATMO', teamB: '666', room: 'Stream 2 (Room B)' },
    { day: 3, matchOrder: 1, teamA: 'DEADLINE SLAYER', teamB: '666', room: 'Stream 1 (Room A)' },
    { day: 3, matchOrder: 2, teamA: 'DARFAT LIVIN FOOD', teamB: 'ATMO', room: 'Stream 2 (Room B)' },
    { day: 4, matchOrder: 1, teamA: 'AVATAR BORNEO', teamB: 'ATMO', room: 'Stream 1 (Room A)' },
    { day: 4, matchOrder: 2, teamA: 'DEADLINE SLAYER', teamB: 'DARFAT LIVIN FOOD', room: 'Stream 2 (Room B)' },
    { day: 5, matchOrder: 1, teamA: '666', teamB: 'DARFAT LIVIN FOOD', room: 'Stream 1 (Room A)' },
    { day: 5, matchOrder: 2, teamA: 'AVATAR BORNEO', teamB: 'DEADLINE SLAYER', room: 'Stream 2 (Room B)' }
  ],
  'Grup E': [
    { day: 1, matchOrder: 1, teamA: 'APPA LINUX', teamB: 'DEPOK MAUNG', room: 'Stream 1 (Room A)' },
    { day: 1, matchOrder: 2, teamA: 'Tugu Muda', teamB: 'MiracleXStars', room: 'Stream 2 (Room B)' },
    { day: 2, matchOrder: 1, teamA: 'Miskin Mekanik', teamB: 'MiracleXStars', room: 'Stream 1 (Room A)' },
    { day: 2, matchOrder: 2, teamA: 'APPA LINUX', teamB: 'Tugu Muda', room: 'Stream 2 (Room B)' },
    { day: 3, matchOrder: 1, teamA: 'DEPOK MAUNG', teamB: 'Tugu Muda', room: 'Stream 1 (Room A)' },
    { day: 3, matchOrder: 2, teamA: 'Miskin Mekanik', teamB: 'APPA LINUX', room: 'Stream 2 (Room B)' },
    { day: 4, matchOrder: 1, teamA: 'MiracleXStars', teamB: 'APPA LINUX', room: 'Stream 1 (Room A)' },
    { day: 4, matchOrder: 2, teamA: 'DEPOK MAUNG', teamB: 'Miskin Mekanik', room: 'Stream 2 (Room B)' },
    { day: 5, matchOrder: 1, teamA: 'Tugu Muda', teamB: 'Miskin Mekanik', room: 'Stream 1 (Room A)' },
    { day: 5, matchOrder: 2, teamA: 'MiracleXStars', teamB: 'DEPOK MAUNG', room: 'Stream 2 (Room B)' }
  ],
  'Grup F': [
    { day: 1, matchOrder: 1, teamA: 'YOKKE LAMPUNG', teamB: 'VALKYRIE', room: 'Stream 1 (Room A)' },
    { day: 1, matchOrder: 2, teamA: 'WINGSKANAN ESPORT 2', teamB: 'NAMJUG', room: 'Stream 2 (Room B)' },
    { day: 1, matchOrder: 3, teamA: 'Colorbook', teamB: 'Xorps E- Sport', room: 'Stream 3 (Room C)' },
    { day: 2, matchOrder: 1, teamA: 'YOKKE LAMPUNG', teamB: 'NAMJUG', room: 'Stream 1 (Room A)' },
    { day: 2, matchOrder: 2, teamA: 'VALKYRIE', teamB: 'Xorps E- Sport', room: 'Stream 2 (Room B)' },
    { day: 2, matchOrder: 3, teamA: 'WINGSKANAN ESPORT 2', teamB: 'Colorbook', room: 'Stream 3 (Room C)' },
    { day: 3, matchOrder: 1, teamA: 'YOKKE LAMPUNG', teamB: 'Xorps E- Sport', room: 'Stream 1 (Room A)' },
    { day: 3, matchOrder: 2, teamA: 'NAMJUG', teamB: 'Colorbook', room: 'Stream 2 (Room B)' },
    { day: 3, matchOrder: 3, teamA: 'VALKYRIE', teamB: 'WINGSKANAN ESPORT 2', room: 'Stream 3 (Room C)' },
    { day: 4, matchOrder: 1, teamA: 'YOKKE LAMPUNG', teamB: 'Colorbook', room: 'Stream 1 (Room A)' },
    { day: 4, matchOrder: 2, teamA: 'Xorps E- Sport', teamB: 'WINGSKANAN ESPORT 2', room: 'Stream 2 (Room B)' },
    { day: 4, matchOrder: 3, teamA: 'NAMJUG', teamB: 'VALKYRIE', room: 'Stream 3 (Room C)' },
    { day: 5, matchOrder: 1, teamA: 'YOKKE LAMPUNG', teamB: 'WINGSKANAN ESPORT 2', room: 'Stream 1 (Room A)' },
    { day: 5, matchOrder: 2, teamA: 'Colorbook', teamB: 'VALKYRIE', room: 'Stream 2 (Room B)' },
    { day: 5, matchOrder: 3, teamA: 'Xorps E- Sport', teamB: 'NAMJUG', room: 'Stream 3 (Room C)' }
  ],
  'Grup G': [
    { day: 1, matchOrder: 1, teamA: 'Gado Gado Esports', teamB: 'Yokke.Syindicate', room: 'Stream 1 (Room A)' },
    { day: 1, matchOrder: 2, teamA: 'LOLO', teamB: 'AANG Beta', room: 'Stream 2 (Room B)' },
    { day: 2, matchOrder: 1, teamA: 'TABRAK AJALAH', teamB: 'AANG Beta', room: 'Stream 1 (Room A)' },
    { day: 2, matchOrder: 2, teamA: 'Gado Gado Esports', teamB: 'LOLO', room: 'Stream 2 (Room B)' },
    { day: 3, matchOrder: 1, teamA: 'Yokke.Syindicate', teamB: 'LOLO', room: 'Stream 1 (Room A)' },
    { day: 3, matchOrder: 2, teamA: 'TABRAK AJALAH', teamB: 'Gado Gado Esports', room: 'Stream 2 (Room B)' },
    { day: 4, matchOrder: 1, teamA: 'AANG Beta', teamB: 'Gado Gado Esports', room: 'Stream 1 (Room A)' },
    { day: 4, matchOrder: 2, teamA: 'Yokke.Syindicate', teamB: 'TABRAK AJALAH', room: 'Stream 2 (Room B)' },
    { day: 5, matchOrder: 1, teamA: 'LOLO', teamB: 'TABRAK AJALAH', room: 'Stream 1 (Room A)' },
    { day: 5, matchOrder: 2, teamA: 'AANG Beta', teamB: 'Yokke.Syindicate', room: 'Stream 2 (Room B)' }
  ],
  'Grup H': [
    { day: 1, matchOrder: 1, teamA: 'WINGSKANAN ESPORT 1', teamB: 'MBG ( Mas Bahlil Guanteng )', room: 'Stream 1 (Room A)' },
    { day: 1, matchOrder: 2, teamA: 'Yokke Batam', teamB: 'MTI BANJARMASIN', room: 'Stream 2 (Room B)' },
    { day: 2, matchOrder: 1, teamA: 'BOLO CLUB', teamB: 'MTI BANJARMASIN', room: 'Stream 1 (Room A)' },
    { day: 2, matchOrder: 2, teamA: 'WINGSKANAN ESPORT 1', teamB: 'Yokke Batam', room: 'Stream 2 (Room B)' },
    { day: 3, matchOrder: 1, teamA: 'MBG ( Mas Bahlil Guanteng )', teamB: 'Yokke Batam', room: 'Stream 1 (Room A)' },
    { day: 3, matchOrder: 2, teamA: 'BOLO CLUB', teamB: 'WINGSKANAN ESPORT 1', room: 'Stream 2 (Room B)' },
    { day: 4, matchOrder: 1, teamA: 'MTI BANJARMASIN', teamB: 'WINGSKANAN ESPORT 1', room: 'Stream 1 (Room A)' },
    { day: 4, matchOrder: 2, teamA: 'MBG ( Mas Bahlil Guanteng )', teamB: 'BOLO CLUB', room: 'Stream 2 (Room B)' },
    { day: 5, matchOrder: 1, teamA: 'Yokke Batam', teamB: 'BOLO CLUB', room: 'Stream 1 (Room A)' },
    { day: 5, matchOrder: 2, teamA: 'MTI BANJARMASIN', teamB: 'MBG ( Mas Bahlil Guanteng )', room: 'Stream 2 (Room B)' }
  ]
};

function getCanonicalGroupMatchId(gName, teamA, teamB) {
  const cleanG = (gName || '').trim();
  const cleanA = (teamA || '').trim();
  const cleanB = (teamB || '').trim();
  const sorted = [cleanA, cleanB].sort((a, b) => a.localeCompare(b));
  return `${cleanG}_${sorted[0]}_vs_${sorted[1]}`.replace(/\s+/g, '_');
}

// Function to test getGroupFixtures with official schedule
function testGetGroupFixtures(gName, groupStageData, groupMatchResults, dayFilter = null) {
  const teams = (groupStageData[gName] || []).map(t => t.name);
  const n = teams.length;
  if (n < 2) return [];

  let rawPairs = [];
  const official = MLBB_OFFICIAL_GROUP_SCHEDULE[gName];

  if (official && official.length > 0) {
    // Gunakan Jadwal Resmi Turnamen yang telah dipublikasikan
    official.forEach((item, idx) => {
      rawPairs.push({
        matchOrder: item.matchOrder || (idx + 1),
        teamA: item.teamA,
        teamB: item.teamB,
        day: item.day,
        session: item.matchOrder || 1,
        time: '19:00 WIB / 20:00 WITA',
        room: item.room || `Stream ${item.matchOrder || 1}`,
        dateLabel: MLBB_SCHEDULE_DATES[item.day] || `Hari ${item.day}`
      });
    });
  } else {
    // Dynamic generator fallback
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        count++;
        const d = ((count - 1) % 5) + 1;
        rawPairs.push({
          matchOrder: count,
          teamA: teams[i],
          teamB: teams[j],
          day: d,
          session: 1,
          time: '19:00 WIB / 20:00 WITA',
          room: 'Stream 1',
          dateLabel: MLBB_SCHEDULE_DATES[d] || `Hari ${d}`
        });
      }
    }
  }

  const fixtures = [];
  rawPairs.forEach(p => {
    if (dayFilter && dayFilter !== 'ALL' && parseInt(dayFilter, 10) !== p.day) return;

    const canonId = getCanonicalGroupMatchId(gName, p.teamA, p.teamB);
    const matchId = `${gName}_${p.teamA}_vs_${p.teamB}`.replace(/\s+/g, '_');
    const matchIdRev = `${gName}_${p.teamB}_vs_${p.teamA}`.replace(/\s+/g, '_');
    const saved = groupMatchResults[canonId] || groupMatchResults[matchId] || groupMatchResults[matchIdRev] || {};

    let scoreA = null;
    let scoreB = null;
    if (saved.scoreA !== undefined && saved.scoreA !== null && saved.scoreB !== undefined && saved.scoreB !== null) {
      if (saved.teamA === p.teamA) {
        scoreA = saved.scoreA;
        scoreB = saved.scoreB;
      } else if (saved.teamA === p.teamB) {
        scoreA = saved.scoreB;
        scoreB = saved.scoreA;
      } else {
        scoreA = saved.scoreA;
        scoreB = saved.scoreB;
      }
    }

    fixtures.push({
      matchId: canonId,
      gName: gName,
      teamA: p.teamA,
      teamB: p.teamB,
      week: 1,
      day: p.day,
      session: p.session,
      sessionTime: p.time,
      streamRoom: p.room,
      matchOrder: p.matchOrder,
      dateLabel: p.dateLabel,
      scoreA: scoreA,
      scoreB: scoreB,
      winner: saved.winner || null,
      mvpPlayer: saved.mvpPlayer || null,
      mvpHero: saved.mvpHero || null,
      mvpTeam: saved.mvpTeam || null
    });
  });

  return fixtures;
}

module.exports = {
  MLBB_SCHEDULE_DATES,
  MLBB_OFFICIAL_GROUP_SCHEDULE,
  getCanonicalGroupMatchId,
  testGetGroupFixtures
};

