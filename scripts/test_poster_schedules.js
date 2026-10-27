const posterSchedules = {
  'Grup A': [
    { day: 1, match: 1, a: 'Native', b: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)' },
    { day: 1, match: 2, a: 'Yokke Cikarang', b: 'My Palembang' },
    { day: 2, match: 1, a: 'IOS', b: 'My Palembang' },
    { day: 2, match: 2, a: 'Native', b: 'Yokke Cikarang' },
    { day: 3, match: 1, a: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)', b: 'Yokke Cikarang' },
    { day: 3, match: 2, a: 'IOS', b: 'Native' },
    { day: 4, match: 1, a: 'My Palembang', b: 'Native' },
    { day: 4, match: 2, a: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)', b: 'IOS' },
    { day: 5, match: 1, a: 'Yokke Cikarang', b: 'IOS' },
    { day: 5, match: 2, a: 'My Palembang', b: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)' }
  ],
  'Grup B': [
    { day: 1, match: 1, a: 'Anti Climax', b: '7 SINS' },
    { day: 1, match: 2, a: 'Yokke Batam Squad (YBS)', b: 'DEWA (Dark Elite Warriors Asli Medan)' },
    { day: 2, match: 1, a: 'SGMO', b: 'DEWA (Dark Elite Warriors Asli Medan)' },
    { day: 2, match: 2, a: 'Anti Climax', b: 'Yokke Batam Squad (YBS)' },
    { day: 3, match: 1, a: '7 SINS', b: 'Yokke Batam Squad (YBS)' },
    { day: 3, match: 2, a: 'SGMO', b: 'Anti Climax' },
    { day: 4, match: 1, a: 'DEWA (Dark Elite Warriors Asli Medan)', b: 'Anti Climax' },
    { day: 4, match: 2, a: '7 SINS', b: 'SGMO' },
    { day: 5, match: 1, a: 'Yokke Batam Squad (YBS)', b: 'SGMO' },
    { day: 5, match: 2, a: 'DEWA (Dark Elite Warriors Asli Medan)', b: '7 SINS' }
  ],
  'Grup C': [
    { day: 1, match: 1, a: 'AANG ALPHA', b: 'REKAN OM' },
    { day: 1, match: 2, a: 'Red Razor', b: 'TY BEKASI' },
    { day: 2, match: 1, a: 'BIKINI BOTTOM', b: 'TY BEKASI' },
    { day: 2, match: 2, a: 'AANG ALPHA', b: 'Red Razor' },
    { day: 3, match: 1, a: 'REKAN OM', b: 'Red Razor' },
    { day: 3, match: 2, a: 'BIKINI BOTTOM', b: 'AANG ALPHA' },
    { day: 4, match: 1, a: 'TY BEKASI', b: 'AANG ALPHA' },
    { day: 4, match: 2, a: 'REKAN OM', b: 'BIKINI BOTTOM' },
    { day: 5, match: 1, a: 'Red Razor', b: 'BIKINI BOTTOM' },
    { day: 5, match: 2, a: 'TY BEKASI', b: 'REKAN OM' }
  ],
  'Grup D': [
    { day: 1, match: 1, a: 'ATMO', b: 'DEADLINE SLAYER' },
    { day: 1, match: 2, a: '666', b: 'AVATAR BORNEO' },
    { day: 2, match: 1, a: 'DARFAT LIVIN FOOD', b: 'AVATAR BORNEO' },
    { day: 2, match: 2, a: 'ATMO', b: '666' },
    { day: 3, match: 1, a: 'DEADLINE SLAYER', b: '666' },
    { day: 3, match: 2, a: 'DARFAT LIVIN FOOD', b: 'ATMO' },
    { day: 4, match: 1, a: 'AVATAR BORNEO', b: 'ATMO' },
    { day: 4, match: 2, a: 'DEADLINE SLAYER', b: 'DARFAT LIVIN FOOD' },
    { day: 5, match: 1, a: '666', b: 'DARFAT LIVIN FOOD' },
    { day: 5, match: 2, a: 'AVATAR BORNEO', b: 'DEADLINE SLAYER' }
  ],
  'Grup E': [
    { day: 1, match: 1, a: 'APPA LINUX', b: 'DEPOK MAUNG' },
    { day: 1, match: 2, a: 'Tugu Muda', b: 'MiracleXStars' },
    { day: 2, match: 1, a: 'Miskin Mekanik', b: 'MiracleXStars' },
    { day: 2, match: 2, a: 'APPA LINUX', b: 'Tugu Muda' },
    { day: 3, match: 1, a: 'DEPOK MAUNG', b: 'Tugu Muda' },
    { day: 3, match: 2, a: 'Miskin Mekanik', b: 'APPA LINUX' },
    { day: 4, match: 1, a: 'MiracleXStars', b: 'APPA LINUX' },
    { day: 4, match: 2, a: 'DEPOK MAUNG', b: 'Miskin Mekanik' },
    { day: 5, match: 1, a: 'Tugu Muda', b: 'Miskin Mekanik' },
    { day: 5, match: 2, a: 'MiracleXStars', b: 'DEPOK MAUNG' }
  ],
  'Grup F': [
    { day: 1, match: 1, a: 'YOKKE LAMPUNG', b: 'VALKYRIE' },
    { day: 1, match: 2, a: 'WINGSKANAN ESPORT 2', b: 'NAMJUG' },
    { day: 1, match: 3, a: 'Colorbook', b: 'Xorps E- Sport' },
    { day: 2, match: 1, a: 'YOKKE LAMPUNG', b: 'NAMJUG' },
    { day: 2, match: 2, a: 'VALKYRIE', b: 'Xorps E- Sport' },
    { day: 2, match: 3, a: 'WINGSKANAN ESPORT 2', b: 'Colorbook' },
    { day: 3, match: 1, a: 'YOKKE LAMPUNG', b: 'Xorps E- Sport' },
    { day: 3, match: 2, a: 'NAMJUG', b: 'Colorbook' },
    { day: 3, match: 3, a: 'VALKYRIE', b: 'WINGSKANAN ESPORT 2' },
    { day: 4, match: 1, a: 'YOKKE LAMPUNG', b: 'Colorbook' },
    { day: 4, match: 2, a: 'Xorps E- Sport', b: 'WINGSKANAN ESPORT 2' },
    { day: 4, match: 3, a: 'NAMJUG', b: 'VALKYRIE' },
    { day: 5, match: 1, a: 'YOKKE LAMPUNG', b: 'WINGSKANAN ESPORT 2' },
    { day: 5, match: 2, a: 'Colorbook', b: 'VALKYRIE' },
    { day: 5, match: 3, a: 'Xorps E- Sport', b: 'NAMJUG' }
  ],
  'Grup G': [
    { day: 1, match: 1, a: 'Gado Gado Esports', b: 'Yokke.Syindicate' },
    { day: 1, match: 2, a: 'LOLO', b: 'AANG Beta' },
    { day: 2, match: 1, a: 'TABRAK AJALAH', b: 'AANG Beta' },
    { day: 2, match: 2, a: 'Gado Gado Esports', b: 'LOLO' },
    { day: 3, match: 1, a: 'Yokke.Syindicate', b: 'LOLO' },
    { day: 3, match: 2, a: 'TABRAK AJALAH', b: 'Gado Gado Esports' },
    { day: 4, match: 1, a: 'AANG Beta', b: 'Gado Gado Esports' },
    { day: 4, match: 2, a: 'Yokke.Syindicate', b: 'TABRAK AJALAH' },
    { day: 5, match: 1, a: 'LOLO', b: 'TABRAK AJALAH' },
    { day: 5, match: 2, a: 'AANG Beta', b: 'Yokke.Syindicate' }
  ],
  'Grup H': [
    { day: 1, match: 1, a: 'WINGSKANAN ESPORT 1', b: 'MBG ( Mas Bahlil Guanteng )' },
    { day: 1, match: 2, a: 'Yokke Batam', b: 'MTI BANJARMASIN' },
    { day: 2, match: 1, a: 'BOLO CLUB', b: 'MTI BANJARMASIN' },
    { day: 2, match: 2, a: 'WINGSKANAN ESPORT 1', b: 'Yokke Batam' },
    { day: 3, match: 1, a: 'MBG ( Mas Bahlil Guanteng )', b: 'Yokke Batam' },
    { day: 3, match: 2, a: 'BOLO CLUB', b: 'WINGSKANAN ESPORT 1' },
    { day: 4, match: 1, a: 'MTI BANJARMASIN', b: 'WINGSKANAN ESPORT 1' },
    { day: 4, match: 2, a: 'MBG ( Mas Bahlil Guanteng )', b: 'BOLO CLUB' },
    { day: 5, match: 1, a: 'Yokke Batam', b: 'BOLO CLUB' },
    { day: 5, match: 2, a: 'MTI BANJARMASIN', b: 'MBG ( Mas Bahlil Guanteng )' }
  ]
};

for (const [gName, matches] of Object.entries(posterSchedules)) {
  const pairSet = new Set();
  const dayTeamCount = {};
  for (const m of matches) {
    const pair = [m.a, m.b].sort().join('__');
    if (pairSet.has(pair)) {
      console.error('ERROR: Duplicate pair in ' + gName + ': ' + pair);
    }
    pairSet.add(pair);

    dayTeamCount[m.day] = dayTeamCount[m.day] || {};
    dayTeamCount[m.day][m.a] = (dayTeamCount[m.day][m.a] || 0) + 1;
    dayTeamCount[m.day][m.b] = (dayTeamCount[m.day][m.b] || 0) + 1;
  }
  const expectedPairs = gName === 'Grup F' ? 15 : 10;
  console.log(gName + ': ' + pairSet.size + '/' + expectedPairs + ' unique pairs.');
  for (const d in dayTeamCount) {
    for (const t in dayTeamCount[d]) {
      if (dayTeamCount[d][t] > 1) {
        console.error('ERROR: ' + t + ' plays more than once on Day ' + d + ' in ' + gName + '!');
      }
    }
  }
}
console.log('All posters checked!');
