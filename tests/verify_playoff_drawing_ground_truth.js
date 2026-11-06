const fs = require('fs');
const assert = require('assert');

const originalJson = [
  [
    {"matchLabel":"UB_R1_1","phaseName":"Upper Bracket 16 Besar (Hari 3)","bracket":"UPPER","day":3,"teamA":"Anti Climax","teamB":"Miskin Mekanik","winner":null},
    {"matchLabel":"UB_R1_2","phaseName":"Upper Bracket 16 Besar (Hari 3)","bracket":"UPPER","day":3,"teamA":"ATMO","teamB":"IOS","winner":null},
    {"matchLabel":"UB_R1_3","phaseName":"Upper Bracket 16 Besar (Hari 3)","bracket":"UPPER","day":3,"teamA":"7 SINS","teamB":"APPA LINUX","winner":null},
    {"matchLabel":"UB_R1_4","phaseName":"Upper Bracket 16 Besar (Hari 3)","bracket":"UPPER","day":3,"teamA":"BOLO CLUB","teamB":"Native","winner":null},
    {"matchLabel":"UB_R1_5","phaseName":"Upper Bracket 16 Besar (Hari 3)","bracket":"UPPER","day":3,"teamA":"VALKYRIE","teamB":"Yokke.Syindicate","winner":null},
    {"matchLabel":"UB_R1_6","phaseName":"Upper Bracket 16 Besar (Hari 3)","bracket":"UPPER","day":3,"teamA":"TY BEKASI","teamB":"WINGSKANAN ESPORT 1","winner":null},
    {"matchLabel":"UB_R1_7","phaseName":"Upper Bracket 16 Besar (Hari 3)","bracket":"UPPER","day":3,"teamA":"666","teamB":"AANG ALPHA","winner":null},
    {"matchLabel":"UB_R1_8","phaseName":"Upper Bracket 16 Besar (Hari 3)","bracket":"UPPER","day":3,"teamA":"TABRAK AJALAH","teamB":"YOKKE LAMPUNG","winner":null}
  ],
  [
    {"matchLabel":"UB_QF_1","phaseName":"Upper Bracket Perempat Final (Hari 3-4)","bracket":"UPPER","day":3,"teamA":"Pemenang UB R1 1","teamB":"Pemenang UB R1 2","winner":null},
    {"matchLabel":"UB_QF_2","phaseName":"Upper Bracket Perempat Final (Hari 3-4)","bracket":"UPPER","day":3,"teamA":"Pemenang UB R1 3","teamB":"Pemenang UB R1 4","winner":null},
    {"matchLabel":"UB_QF_3","phaseName":"Upper Bracket Perempat Final (Hari 3-4)","bracket":"UPPER","day":3,"teamA":"Pemenang UB R1 5","teamB":"Pemenang UB R1 6","winner":null},
    {"matchLabel":"UB_QF_4","phaseName":"Upper Bracket Perempat Final (Hari 3-4)","bracket":"UPPER","day":3,"teamA":"Pemenang UB R1 7","teamB":"Pemenang UB R1 8","winner":null},
    {"matchLabel":"LB_R1_1","phaseName":"Lower Bracket Ronde 1 (Hari 3-4)","bracket":"LOWER","day":3,"teamA":"DEADLINE SLAYER","teamB":"Gugur UB R1 1","winner":null},
    {"matchLabel":"LB_R1_2","phaseName":"Lower Bracket Ronde 1 (Hari 3-4)","bracket":"LOWER","day":3,"teamA":"Gugur UB R1 2","teamB":"MiracleXStars","winner":null},
    {"matchLabel":"LB_R1_3","phaseName":"Lower Bracket Ronde 1 (Hari 3-4)","bracket":"LOWER","day":3,"teamA":"Gugur UB R1 3","teamB":"LOLO","winner":null},
    {"matchLabel":"LB_R1_4","phaseName":"Lower Bracket Ronde 1 (Hari 3-4)","bracket":"LOWER","day":3,"teamA":"Gugur UB R1 4","teamB":"Yokke Batam Squad (YBS)","winner":null},
    {"matchLabel":"LB_R1_5","phaseName":"Lower Bracket Ronde 1 (Hari 3-4)","bracket":"LOWER","day":3,"teamA":"Gugur UB R1 5","teamB":"Red Razor","winner":null},
    {"matchLabel":"LB_R1_6","phaseName":"Lower Bracket Ronde 1 (Hari 3-4)","bracket":"LOWER","day":3,"teamA":"Gugur UB R1 6","teamB":"My Palembang","winner":null},
    {"matchLabel":"LB_R1_7","phaseName":"Lower Bracket Ronde 1 (Hari 3-4)","bracket":"LOWER","day":3,"teamA":"Gugur UB R1 7","teamB":"Colorbook","winner":null},
    {"matchLabel":"LB_R1_8","phaseName":"Lower Bracket Ronde 1 (Hari 3-4)","bracket":"LOWER","day":3,"teamA":"Gugur UB R1 8","teamB":"Yokke Batam","winner":null}
  ],
  [
    {"matchLabel":"UB_SF_1","phaseName":"Upper Bracket Semifinal (Hari 4)","bracket":"UPPER","day":4,"teamA":"Pemenang UB QF 1","teamB":"Pemenang UB QF 2","winner":null},
    {"matchLabel":"UB_SF_2","phaseName":"Upper Bracket Semifinal (Hari 4)","bracket":"UPPER","day":4,"teamA":"Pemenang UB QF 3","teamB":"Pemenang UB QF 4","winner":null},
    {"matchLabel":"LB_R2_1","phaseName":"Lower Bracket Ronde 2 (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R1 1","teamB":"Pemenang LB R1 2","winner":null},
    {"matchLabel":"LB_R2_2","phaseName":"Lower Bracket Ronde 2 (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R1 3","teamB":"Pemenang LB R1 4","winner":null},
    {"matchLabel":"LB_R2_3","phaseName":"Lower Bracket Ronde 2 (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R1 5","teamB":"Pemenang LB R1 6","winner":null},
    {"matchLabel":"LB_R2_4","phaseName":"Lower Bracket Ronde 2 (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R1 7","teamB":"Pemenang LB R1 8","winner":null},
    {"matchLabel":"LB_R3_1","phaseName":"Lower Bracket Ronde 3 (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R2 1","teamB":"Gugur UB QF 1","winner":null},
    {"matchLabel":"LB_R3_2","phaseName":"Lower Bracket Ronde 3 (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R2 2","teamB":"Gugur UB QF 2","winner":null},
    {"matchLabel":"LB_R3_3","phaseName":"Lower Bracket Ronde 3 (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R2 3","teamB":"Gugur UB QF 3","winner":null},
    {"matchLabel":"LB_R3_4","phaseName":"Lower Bracket Ronde 3 (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R2 4","teamB":"Gugur UB QF 4","winner":null}
  ],
  [
    {"matchLabel":"LB_QF_1","phaseName":"Lower Bracket Perempat Final (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R3 1","teamB":"Pemenang LB R3 2","winner":null},
    {"matchLabel":"LB_QF_2","phaseName":"Lower Bracket Perempat Final (Hari 4)","bracket":"LOWER","day":4,"teamA":"Pemenang LB R3 3","teamB":"Pemenang LB R3 4","winner":null}
  ],
  [
    {"matchLabel":"UB_FINAL","phaseName":"Upper Bracket Final (Hari 5)","bracket":"UPPER","day":5,"teamA":"Pemenang UB SF 1","teamB":"Pemenang UB SF 2","winner":null},
    {"matchLabel":"LB_SF_1","phaseName":"Lower Bracket Semifinal 1 (Hari 5)","bracket":"LOWER","day":5,"teamA":"Pemenang LB QF 1","teamB":"Gugur UB SF 1","winner":null},
    {"matchLabel":"LB_SF_2","phaseName":"Lower Bracket Semifinal 2 (Hari 5)","bracket":"LOWER","day":5,"teamA":"Pemenang LB QF 2","teamB":"Gugur UB SF 2","winner":null},
    {"matchLabel":"LB_PRELIM","phaseName":"Lower Bracket Final Penantang (Hari 5)","bracket":"LOWER","day":5,"teamA":"Pemenang LB SF 1","teamB":"Pemenang LB SF 2","winner":null},
    {"matchLabel":"LB_FINAL","phaseName":"Lower Bracket Final Penentu (Hari 5)","bracket":"LOWER","day":5,"teamA":"Pemenang LB Prelim","teamB":"Gugur UB Final","winner":null}
  ],
  [
    {"matchLabel":"GRAND_FINAL","phaseName":"Grand Final BO5 (Hari 5)","bracket":"GRAND_FINAL","day":5,"teamA":"Juara Upper Bracket","teamB":"Juara Lower Bracket","winner":null}
  ]
];

// 1. Check app.js
const appCode = fs.readFileSync('app.js', 'utf8');
const appMatch = appCode.match(/const DEFAULT_MLBB_PLAYOFF_MATCHES = (\[[\s\S]*?\n\]);/);
assert(appMatch, 'DEFAULT_MLBB_PLAYOFF_MATCHES not found in app.js');
const appData = eval(appMatch[1]);
assert.deepStrictEqual(appData, originalJson, 'app.js DEFAULT_MLBB_PLAYOFF_MATCHES does not match original JSON');
console.log('✅ app.js DEFAULT_MLBB_PLAYOFF_MATCHES matches perfectly!');

// 2. Check google_apps_script.js
const gasCode = fs.readFileSync('google_apps_script.js', 'utf8');
const gasMatch = gasCode.match(/const DEFAULT_MLBB_PLAYOFF_MATCHES = (\[[\s\S]*?\n\]);/);
assert(gasMatch, 'DEFAULT_MLBB_PLAYOFF_MATCHES not found in google_apps_script.js');
const gasData = eval(gasMatch[1]);
assert.deepStrictEqual(gasData, originalJson, 'google_apps_script.js DEFAULT_MLBB_PLAYOFF_MATCHES does not match original JSON');
console.log('✅ google_apps_script.js DEFAULT_MLBB_PLAYOFF_MATCHES matches perfectly!');

// 3. Check total matches count
let totalMatches = 0;
originalJson.forEach((round, idx) => {
  totalMatches += round.length;
  console.log(`  Round ${idx}: ${round.length} matches`);
});
assert.strictEqual(totalMatches, 38, 'Total matches must be 38');
console.log(`✅ Total matches count: ${totalMatches}`);

// 4. Test Google Apps Script syncDedicatedTournamentSheets fallback with mock
class SheetMock {
  constructor(name) {
    this.name = name;
    this.data = [];
  }
  clear() { this.data = []; }
  getRange(r, c, nr, nc) {
    return {
      setValues: (vals) => { this.data = vals; },
      setFontWeight: () => ({ setBackground: () => ({ setFontColor: () => ({ setHorizontalAlignment: () => ({}) }) }) }),
      setHorizontalAlignment: () => ({}),
      setWrap: () => ({})
    };
  }
  setRowHeight() {}
  appendRow(row) { this.data.push(row); }
}

class SpreadsheetMock {
  constructor() {
    this.sheets = {};
  }
  getSheetByName(name) {
    return this.sheets[name] || null;
  }
  insertSheet(name) {
    this.sheets[name] = new SheetMock(name);
    return this.sheets[name];
  }
}

const gasVm = new Function('SpreadsheetApp', `
  ${gasCode}
  return { syncDedicatedTournamentSheets, DEFAULT_MLBB_PLAYOFF_MATCHES };
`);

const { syncDedicatedTournamentSheets } = gasVm({});

// 4a. When groupPlayoffMatches is undefined in payload
const ss1 = new SpreadsheetMock();
syncDedicatedTournamentSheets(ss1, { groupStageData: {} });
const sheet1 = ss1.getSheetByName('MLBB - Bagan & MVP');
const playoffRows1 = sheet1.data.filter(r => r[13] === 'UPPER' || r[13] === 'LOWER' || r[13] === 'GRAND_FINAL');
assert.strictEqual(playoffRows1.length, 38, 'Fallback must produce exactly 38 playoff rows when payload.groupPlayoffMatches is missing');
console.log('✅ GAS syncDedicatedTournamentSheets fallback produced 38 playoff rows when payload.groupPlayoffMatches is missing');

// 4b. When groupPlayoffMatches is empty array in payload
const ss2 = new SpreadsheetMock();
syncDedicatedTournamentSheets(ss2, { groupStageData: {}, groupPlayoffMatches: [] });
const sheet2 = ss2.getSheetByName('MLBB - Bagan & MVP');
const playoffRows2 = sheet2.data.filter(r => r[13] === 'UPPER' || r[13] === 'LOWER' || r[13] === 'GRAND_FINAL');
assert.strictEqual(playoffRows2.length, 38, 'Fallback must produce exactly 38 playoff rows when payload.groupPlayoffMatches is []');
console.log('✅ GAS syncDedicatedTournamentSheets fallback produced 38 playoff rows when payload.groupPlayoffMatches is []');

// 5. Check app.js initialization when localStorage is empty
const appInitVm = new Function(`
  const localStorage = {
    getItem: (key) => null,
    setItem: () => {}
  };
  ${appCode.match(/const DEFAULT_MLBB_GROUPS[\s\S]*?let groupPlayoffMatches =[\s\S]*?;/)[0]}
  return { groupPlayoffMatches, DEFAULT_MLBB_PLAYOFF_MATCHES };
`);
const { groupPlayoffMatches: initialPlayoffMatches } = appInitVm();
assert.strictEqual(initialPlayoffMatches.length, 6, 'groupPlayoffMatches must have 6 rounds when localStorage is empty');
let initTotal = 0;
initialPlayoffMatches.forEach(r => { initTotal += r.length; });
assert.strictEqual(initTotal, 38, 'groupPlayoffMatches must have 38 matches when localStorage is empty');
console.log('✅ app.js initial groupPlayoffMatches defaults to 38 matches when localStorage is empty');

// 6. Check initGroupPlayoff(!doShuffle) returns DEFAULT_MLBB_PLAYOFF_MATCHES
const initGroupVm = new Function(`
  const localStorage = { getItem: () => null, setItem: () => {} };
  ${appCode.match(/const DEFAULT_MLBB_GROUPS[\s\S]*?let groupPlayoffMatches =[\s\S]*?;/)[0]}
  function getSortedGroupTeams() { return []; }
  ${appCode.match(/function initGroupPlayoff\([\s\S]*?\n\}/)[0]}
  return { initGroupPlayoff, DEFAULT_MLBB_PLAYOFF_MATCHES, getGroupPlayoffMatches: () => groupPlayoffMatches };
`);
const { initGroupPlayoff, DEFAULT_MLBB_PLAYOFF_MATCHES: appDefMatches, getGroupPlayoffMatches } = initGroupVm();
const resNonShuffle = initGroupPlayoff(false);
assert.deepStrictEqual(resNonShuffle, appDefMatches, 'initGroupPlayoff(false) must return DEFAULT_MLBB_PLAYOFF_MATCHES');
assert.deepStrictEqual(getGroupPlayoffMatches(), appDefMatches, 'groupPlayoffMatches must equal DEFAULT_MLBB_PLAYOFF_MATCHES');
console.log('✅ initGroupPlayoff(false) successfully returns and sets DEFAULT_MLBB_PLAYOFF_MATCHES');

// 7. Check stale localStorage cache fallback (e.g. older 3-round bracket)
const staleCacheVm = new Function(`
  const localStorage = {
    getItem: (key) => key === 'yokke_group_playoff_matches' ? JSON.stringify([[], [], []]) : null,
    setItem: () => {}
  };
  ${appCode.match(/const DEFAULT_MLBB_GROUPS[\s\S]*?let groupPlayoffMatches =[\s\S]*?;/)[0]}
  return { groupPlayoffMatches };
`);
const { groupPlayoffMatches: recoveredPlayoffMatches } = staleCacheVm();
assert.strictEqual(recoveredPlayoffMatches.length, 6, 'groupPlayoffMatches must recover to 6 rounds when cache is stale');
let recoveredTotal = 0;
recoveredPlayoffMatches.forEach(r => { recoveredTotal += r.length; });
assert.strictEqual(recoveredTotal, 38, 'groupPlayoffMatches must have 38 matches after recovering from stale cache');
console.log('✅ Stale cache [3 rounds] successfully rejected and defaulted to 38 matches');

// 8. Check initGroupPlayoff(false) when groupStageData is empty (0 groups)
const emptyGroupVm = new Function(`
  const groupStageData = {};
  let groupPlayoffMatches = [];
  ${appCode.match(/const DEFAULT_MLBB_PLAYOFF_MATCHES = \[[\s\S]*?\n\];/)[0]}
  ${appCode.match(/function initGroupPlayoff\([\s\S]*?\n\}/)[0]}
  initGroupPlayoff(false);
  return { groupPlayoffMatches };
`);
const { groupPlayoffMatches: emptyGroupsPlayoff } = emptyGroupVm();
assert.strictEqual(emptyGroupsPlayoff.length, 6, 'groupPlayoffMatches must have 6 rounds when groupStageData has 0 groups and !doShuffle');
let emptyGroupsTotal = 0;
emptyGroupsPlayoff.forEach(r => { emptyGroupsTotal += r.length; });
assert.strictEqual(emptyGroupsTotal, 38, 'groupPlayoffMatches must have 38 matches when groupStageData has 0 groups and !doShuffle');
console.log('✅ initGroupPlayoff(false) with 0 groups correctly preserves 38 matches and does not drop to 2-group legacy');

// 9. Check renderFullPlayoffBracketHtml recovers from stale cache without throwing TypeError
const renderBracketVm = new Function(`
  let groupPlayoffMatches = [[], [], []];
  let currentPlayoffBracketFilter = 'UPPER';
  let _isPlayoffFullscreen = false;
  let _isPlayoffBracketCollapsed = false;
  let isAdmin = false;
  function escapeHtml(s) { return String(s || ''); }
  let tournamentStageState = { mlbb: { isPlayoffLocked: false } };
  ${appCode.match(/const DEFAULT_MLBB_PLAYOFF_MATCHES = \[[\s\S]*?\n\];/)[0]}
  ${appCode.match(/function isPlayoffPlaceholderTeam\([\s\S]*?\n\}/)[0]}
  ${appCode.match(/function renderSingleMatchNodeHtml\([\s\S]*?\n\}/)[0]}
  ${appCode.match(/function renderSvgConnectorColumn\([\s\S]*?\n\}/)[0]}
  ${appCode.match(/function initGroupPlayoff\([\s\S]*?\n\}/)[0]}
  ${appCode.match(/function renderFullPlayoffBracketHtml\([\s\S]*?\n\}/)[0]}
  return renderFullPlayoffBracketHtml();
`);
const bracketHtml = renderBracketVm();
assert(typeof bracketHtml === 'string' && bracketHtml.length > 0, 'renderFullPlayoffBracketHtml must return valid HTML');
assert(bracketHtml.includes('TABRAK AJALAH'), 'renderFullPlayoffBracketHtml must include ground truth team TABRAK AJALAH');
console.log('✅ renderFullPlayoffBracketHtml gracefully recovered from stale cache and rendered complete bracket');

// 10. Check end-to-end match winner and loser progression through all 6 rounds
const tournamentProgressionVm = new Function(`
  let isAdmin = true;
  function saveState() {}
  function renderGroupPlayoffTree() {}
  function renderMLBBInteractiveHubUI() {}
  function saveTournamentStateOnly() {}
  function syncSingleMatchRowToGSheet() { return Promise.resolve(); }
  ${appCode.match(/const DEFAULT_MLBB_PLAYOFF_MATCHES = \[[\s\S]*?\n\];/)[0]}
  let groupPlayoffMatches = JSON.parse(JSON.stringify(DEFAULT_MLBB_PLAYOFF_MATCHES));
  ${appCode.match(/function isPlayoffPlaceholderTeam\([\s\S]*?\n\}/)[0]}
  ${appCode.match(/function pickGroupPlayoffWinner\([\s\S]*?\n\}/)[0]}

  return {
    pick: pickGroupPlayoffWinner,
    getMatches: () => groupPlayoffMatches
  };
`);
const { pick, getMatches } = tournamentProgressionVm();

// Round 0 (UB 16 Besar)
pick(0, 0, 'Anti Climax');
pick(0, 1, 'ATMO');
pick(0, 2, '7 SINS');
pick(0, 3, 'Native');
pick(0, 4, 'VALKYRIE');
pick(0, 5, 'WINGSKANAN ESPORT 1');
pick(0, 6, 'AANG ALPHA');
pick(0, 7, 'TABRAK AJALAH');

const pm = getMatches();
// Round 1 UB QF pairings
assert.strictEqual(pm[1][0].teamA, 'Anti Climax');
assert.strictEqual(pm[1][0].teamB, 'ATMO');
assert.strictEqual(pm[1][1].teamA, '7 SINS');
assert.strictEqual(pm[1][1].teamB, 'Native');
assert.strictEqual(pm[1][2].teamA, 'VALKYRIE');
assert.strictEqual(pm[1][2].teamB, 'WINGSKANAN ESPORT 1');
assert.strictEqual(pm[1][3].teamA, 'AANG ALPHA');
assert.strictEqual(pm[1][3].teamB, 'TABRAK AJALAH');

// Round 1 LB R1 losers from UB 16 Besar vs Juara 3 (Ground Truth from GSheet)
assert.strictEqual(pm[1][4].teamA, 'DEADLINE SLAYER');
assert.strictEqual(pm[1][4].teamB, 'Miskin Mekanik');
assert.strictEqual(pm[1][5].teamA, 'IOS');
assert.strictEqual(pm[1][5].teamB, 'MiracleXStars');
assert.strictEqual(pm[1][6].teamA, 'APPA LINUX');
assert.strictEqual(pm[1][6].teamB, 'LOLO');
assert.strictEqual(pm[1][7].teamA, 'BOLO CLUB');
assert.strictEqual(pm[1][7].teamB, 'Yokke Batam Squad (YBS)');
assert.strictEqual(pm[1][8].teamA, 'Yokke.Syindicate');
assert.strictEqual(pm[1][8].teamB, 'Red Razor');
assert.strictEqual(pm[1][9].teamA, 'TY BEKASI');
assert.strictEqual(pm[1][9].teamB, 'My Palembang');
assert.strictEqual(pm[1][10].teamA, '666');
assert.strictEqual(pm[1][10].teamB, 'Colorbook');
assert.strictEqual(pm[1][11].teamA, 'YOKKE LAMPUNG');
assert.strictEqual(pm[1][11].teamB, 'Yokke Batam');

// Round 1 matches
// UB QF
pick(1, 0, 'ATMO');                // Anti Climax drops to LB R3 1
pick(1, 1, 'Native');              // 7 SINS drops to LB R3 2
pick(1, 2, 'VALKYRIE');            // WINGSKANAN ESPORT 1 drops to LB R3 3
pick(1, 3, 'AANG ALPHA');          // TABRAK AJALAH drops to LB R3 4

// LB R1
pick(1, 4, 'DEADLINE SLAYER');
pick(1, 5, 'MiracleXStars');
pick(1, 6, 'APPA LINUX');
pick(1, 7, 'BOLO CLUB');
pick(1, 8, 'Red Razor');
pick(1, 9, 'My Palembang');
pick(1, 10, 'Colorbook');
pick(1, 11, 'Yokke Batam');

// Round 2 UB SF
assert.strictEqual(pm[2][0].teamA, 'ATMO');
assert.strictEqual(pm[2][0].teamB, 'Native');
assert.strictEqual(pm[2][1].teamA, 'VALKYRIE');
assert.strictEqual(pm[2][1].teamB, 'AANG ALPHA');

// Round 2 LB R2
assert.strictEqual(pm[2][2].teamA, 'DEADLINE SLAYER');
assert.strictEqual(pm[2][2].teamB, 'MiracleXStars');
assert.strictEqual(pm[2][3].teamA, 'APPA LINUX');
assert.strictEqual(pm[2][3].teamB, 'BOLO CLUB');
assert.strictEqual(pm[2][4].teamA, 'Red Razor');
assert.strictEqual(pm[2][4].teamB, 'My Palembang');
assert.strictEqual(pm[2][5].teamA, 'Colorbook');
assert.strictEqual(pm[2][5].teamB, 'Yokke Batam');

// Round 2 LB R3 teamB (dropped from UB QF)
assert.strictEqual(pm[2][6].teamB, 'Anti Climax');
assert.strictEqual(pm[2][7].teamB, '7 SINS');
assert.strictEqual(pm[2][8].teamB, 'WINGSKANAN ESPORT 1');
assert.strictEqual(pm[2][9].teamB, 'TABRAK AJALAH');

// Round 2 LB R2 matches
pick(2, 2, 'DEADLINE SLAYER');     // -> LB R3 1 teamA
pick(2, 3, 'APPA LINUX');          // -> LB R3 2 teamA
pick(2, 4, 'Red Razor');           // -> LB R3 3 teamA
pick(2, 5, 'Colorbook');           // -> LB R3 4 teamA

assert.strictEqual(pm[2][6].teamA, 'DEADLINE SLAYER');
assert.strictEqual(pm[2][7].teamA, 'APPA LINUX');
assert.strictEqual(pm[2][8].teamA, 'Red Razor');
assert.strictEqual(pm[2][9].teamA, 'Colorbook');

// Round 2 UB SF matches
pick(2, 0, 'ATMO');                // Native drops to LB SF 1
pick(2, 1, 'AANG ALPHA');          // VALKYRIE drops to LB SF 2

// Round 2 LB R3 matches
pick(2, 6, 'Anti Climax');         // -> LB QF 1 teamA
pick(2, 7, 'APPA LINUX');          // -> LB QF 1 teamB
pick(2, 8, 'Red Razor');           // -> LB QF 2 teamA
pick(2, 9, 'TABRAK AJALAH');       // -> LB QF 2 teamB

// Round 3 LB QF
assert.strictEqual(pm[3][0].teamA, 'Anti Climax');
assert.strictEqual(pm[3][0].teamB, 'APPA LINUX');
assert.strictEqual(pm[3][1].teamA, 'Red Razor');
assert.strictEqual(pm[3][1].teamB, 'TABRAK AJALAH');

pick(3, 0, 'APPA LINUX');          // -> LB SF 1 teamA
pick(3, 1, 'TABRAK AJALAH');       // -> LB SF 2 teamA

// Round 4 (UB Final, LB SF 1, LB SF 2, LB Prelim, LB Final)
assert.strictEqual(pm[4][0].teamA, 'ATMO');
assert.strictEqual(pm[4][0].teamB, 'AANG ALPHA');
assert.strictEqual(pm[4][1].teamA, 'APPA LINUX');
assert.strictEqual(pm[4][1].teamB, 'Native');
assert.strictEqual(pm[4][2].teamA, 'TABRAK AJALAH');
assert.strictEqual(pm[4][2].teamB, 'VALKYRIE');

// Play UB Final
pick(4, 0, 'ATMO');                // -> Grand Final teamA, AANG ALPHA drops to LB Final teamB
assert.strictEqual(pm[5][0].teamA, 'ATMO');
assert.strictEqual(pm[4][4].teamB, 'AANG ALPHA');

// Play LB Semifinals
pick(4, 1, 'Native');              // -> LB Prelim teamA
pick(4, 2, 'VALKYRIE');            // -> LB Prelim teamB
assert.strictEqual(pm[4][3].teamA, 'Native');
assert.strictEqual(pm[4][3].teamB, 'VALKYRIE');

// Play LB Prelim
pick(4, 3, 'Native');              // -> LB Final teamA
assert.strictEqual(pm[4][4].teamA, 'Native');

// Play LB Final
pick(4, 4, 'AANG ALPHA');          // -> Grand Final teamB
assert.strictEqual(pm[5][0].teamB, 'AANG ALPHA');

// Round 5 Grand Final
pick(5, 0, 'ATMO');
assert.strictEqual(pm[5][0].winner, 'ATMO');
console.log('✅ End-to-end 38-match 6-round playoff progression verified 100% (ATMO is Champion)!');


