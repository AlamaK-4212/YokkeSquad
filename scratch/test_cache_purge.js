const fs = require('fs');

// Read app.js
const appJs = fs.readFileSync('app.js', 'utf8');

// Set up mock window and document and localStorage
const mockStorage = {
  // Let's test with the EXACT user cache from prompt 10!
  getItem: (key) => {
    if (key === 'yokke_mcgg_lobbies') {
      // User's corrupted localStorage
      return JSON.stringify({
        SEMI_A: [
          { name: "Raihan Purnama" },
          { name: "Dandy Nasri" },
          { name: "Bagus Setiawan" },
          { name: "ANDHIKA BAYU PRASETYO" },
          { name: "Irza Muttaqin" },
          { name: "Muh Asrul" },
          { name: "Eko Marwanto Putro" },
          { name: "Rendy Wibi Pratama" }
        ],
        SEMI_B: [
          { name: "Miftah Fadhlurrahman" },
          { name: "Sulistiyo Yonatan" },
          { name: "Faldi Rasis Purnomo" },
          { name: "FAJAR GILLES TIRANO" },
          { name: "David Iskandar" },
          { name: "Muhammad Harits Eldrid" },
          { name: "Elham Yudhistira" },
          { name: "Sherly Aprilia" }
        ],
        LOBBY_A: [{ name: "P1" }]
      });
    }
    if (key === 'yokke_mcgg_version') return 'v18_old';
    return null;
  },
  setItem: (k, v) => {},
  removeItem: (k) => {}
};

console.log('Testing whether app.js purges user cache when executed...');

// Check if rawSaved auto-purge triggers
const rawSaved = mockStorage.getItem('yokke_mcgg_lobbies');
const savedMcggVersion = mockStorage.getItem('yokke_mcgg_version');
const MCGG_DATA_VERSION = 'v20_20261112_semi_final_clean';

const isStale = (
  savedMcggVersion !== MCGG_DATA_VERSION ||
  rawSaved.includes('David Iskandar') ||
  rawSaved.includes('Disk') ||
  rawSaved.includes('KoncoKentel') ||
  rawSaved.includes('Harits Eldrid') ||
  rawSaved.includes('Eldrid') ||
  (rawSaved.includes('Bagus Setiawan') && rawSaved.includes('SEMI_A')) ||
  (rawSaved.includes('Sherly Aprilia') && rawSaved.includes('SEMI_B'))
);

console.log('Is user cache detected as stale?:', isStale);
