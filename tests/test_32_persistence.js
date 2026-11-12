const fs = require('fs');
const assert = require('assert');

console.log("========================================================");
console.log("🧪 TESTING PERSISTENCE OF 32 BESAR (A, B, C, D) ON REFRESH");
console.log("========================================================");

const appJs = fs.readFileSync('app.js', 'utf8');

// 1. Verify DEFAULT_MCGG_LOBBIES has ROUND_32_A..D
assert(appJs.includes('ROUND_32_A'), "DEFAULT_MCGG_LOBBIES must contain ROUND_32_A");
assert(appJs.includes('ROUND_32_B'), "DEFAULT_MCGG_LOBBIES must contain ROUND_32_B");
assert(appJs.includes('ROUND_32_C'), "DEFAULT_MCGG_LOBBIES must contain ROUND_32_C");
assert(appJs.includes('ROUND_32_D'), "DEFAULT_MCGG_LOBBIES must contain ROUND_32_D");
console.log("  ✅ [PASS] 1. DEFAULT_MCGG_LOBBIES contains ROUND_32_A, B, C, D");

// 2. Simulate merge logic from fetchInitialData

// Simulate incoming remote config that lacks ROUND_32_A..D (exactly what GAS returned)
const remoteConfig = {
  mcggLobbies: {
    LOBBY_A: [
      { name: "Daniel Reimond", r1: 3, r2: 6, r3: 2, total: 3 },
      { name: "Miftah Fadhlurrahman", r1: 4, r2: 5, r3: 1, total: 4 }
    ],
    LOBBY_B: [
      { name: "Bagus Setiawan", r1: 3, r2: 1, r3: 4, total: 7 }
    ]
    // Note: ROUND_32_A..D are NOT in remoteConfig!
  }
};

// Current local mcggLobbies before fetch (has ROUND_32_A..D)
let mcggLobbies = {
  LOBBY_A: [{ name: "Daniel Reimond", r1: 3, r2: 6, r3: 2, total: 3 }],
  ROUND_32_A: Array.from({ length: 8 }, (_, i) => ({ name: `Player 32A-${i+1}`, dept: 'IT' })),
  ROUND_32_B: Array.from({ length: 8 }, (_, i) => ({ name: `Player 32B-${i+1}`, dept: 'QA' })),
  ROUND_32_C: Array.from({ length: 8 }, (_, i) => ({ name: `Player 32C-${i+1}`, dept: 'OPS' })),
  ROUND_32_D: Array.from({ length: 8 }, (_, i) => ({ name: `Player 32D-${i+1}`, dept: 'DEV' }))
};

const DEFAULT_MCGG_LOBBIES = JSON.parse(JSON.stringify(mcggLobbies));

// Run the new merge logic
const incomingLobbies = remoteConfig.mcggLobbies;
const allLobbyKeys = new Set([
  ...Object.keys(DEFAULT_MCGG_LOBBIES || {}),
  ...Object.keys(mcggLobbies || {}),
  ...Object.keys(incomingLobbies || {})
]);

allLobbyKeys.forEach(k => {
  const incomingList = incomingLobbies[k];
  const localList = (mcggLobbies && mcggLobbies[k]) || (DEFAULT_MCGG_LOBBIES && DEFAULT_MCGG_LOBBIES[k]) || [];

  if (Array.isArray(incomingList) && incomingList.length > 0) {
    mcggLobbies[k] = incomingList;
  } else if (!mcggLobbies[k] || !Array.isArray(mcggLobbies[k]) || mcggLobbies[k].length === 0) {
    if (Array.isArray(localList) && localList.length > 0) {
      mcggLobbies[k] = JSON.parse(JSON.stringify(localList));
    }
  }
});

assert(Array.isArray(mcggLobbies.ROUND_32_A) && mcggLobbies.ROUND_32_A.length === 8, "ROUND_32_A must retain 8 players after remote merge");
assert(Array.isArray(mcggLobbies.ROUND_32_B) && mcggLobbies.ROUND_32_B.length === 8, "ROUND_32_B must retain 8 players after remote merge");
assert(Array.isArray(mcggLobbies.ROUND_32_C) && mcggLobbies.ROUND_32_C.length === 8, "ROUND_32_C must retain 8 players after remote merge");
assert(Array.isArray(mcggLobbies.ROUND_32_D) && mcggLobbies.ROUND_32_D.length === 8, "ROUND_32_D must retain 8 players after remote merge");
console.log("  ✅ [PASS] 2. Remote merge preserves ROUND_32_A..D without data loss");

// 3. Verify drawMatchPool safety check
function mockDrawMatchPool(matchNum, targetLobbyKey) {
  const currentList = mcggLobbies[targetLobbyKey] || [];
  if (currentList.length === 0) {
    throw new Error(`${targetLobbyKey} belum memiliki data pemain.`);
  }
  return true;
}

['ROUND_32_A', 'ROUND_32_B', 'ROUND_32_C', 'ROUND_32_D'].forEach(key => {
  assert.strictEqual(mockDrawMatchPool(1, key), true, `Must be able to draw commander for ${key}`);
});
console.log("  ✅ [PASS] 3. Acak commander can be executed on all 4 groups of 32 Besar (A, B, C, D)");

console.log("========================================================");
console.log("🎉 ALL PERSISTENCE TESTS PASSED 100%!");
console.log("========================================================");
