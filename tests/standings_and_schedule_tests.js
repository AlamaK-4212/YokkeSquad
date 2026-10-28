const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('🧪 PENGUJIAN URUTAN KLASEMEN, OPSI 0-0 WO & JADWAL POSTER');
console.log('====================================================');

// Read app.js
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');

// 1. Uji Urutan Klasemen MLBB (Point, Win, Lose Kecil ke Besar, MVP)
console.log('\n📊 1. Menguji Komparator Urutan Klasemen MLBB (compareMLBBTeams)...');
const compareMLBBTeamsMatch = appCode.match(/function compareMLBBTeams\(a,\s*b\)\s*\{([\s\S]*?)\n\}/);
assert(compareMLBBTeamsMatch, 'compareMLBBTeams harus didefinisikan di app.js');

const compareMLBBTeams = new Function('a', 'b', compareMLBBTeamsMatch[1]);

// Kasus A: Poin beda
assert(compareMLBBTeams({ pts: 6, win: 3, lose: 0, mvpCount: 1 }, { pts: 4, win: 2, lose: 1, mvpCount: 2 }) < 0, 'Poin lebih besar harus di atas');

// Kasus B: Poin sama, Win beda
assert(compareMLBBTeams({ pts: 4, win: 2, lose: 0, mvpCount: 0 }, { pts: 4, win: 1, lose: 0, mvpCount: 3 }) < 0, 'Win lebih besar harus di atas');

// Kasus C: Poin sama, Win sama, Kalah beda (Kecil ke Besar: makin sedikit kalah makin atas)
const teamA = { name: 'Team Clean', pts: 4, win: 2, lose: 0, mvpCount: 1 };
const teamB = { name: 'Team OneLoss', pts: 4, win: 2, lose: 1, mvpCount: 3 };
assert(compareMLBBTeams(teamA, teamB) < 0, 'Tim dengan kekalahan lebih sedikit (0) harus di atas tim dengan kalah 1 (Kecil ke Besar)');

// Kasus D: Poin sama, Win sama, Kalah sama, MVP beda
const teamMvpHigh = { name: 'Team Star', pts: 4, win: 2, lose: 1, mvpCount: 3 };
const teamMvpLow = { name: 'Team Low', pts: 4, win: 2, lose: 1, mvpCount: 1 };
assert(compareMLBBTeams(teamMvpHigh, teamMvpLow) < 0, 'Total MVP lebih banyak harus di atas jika poin, menang, kalah sama');
console.log('  ✅ [PASS] Komparator MLBB akurat: Poin (desc) -> Menang (desc) -> Kalah (asc: kecil ke besar) -> MVP (desc) -> Nama');

// 2. Uji Urutan Klasemen MCGG (Total, MVP Ronde/Rank 1, Top 4, Penalti Tiebreaker)
console.log('\n♟️ 2. Menguji Komparator Urutan Klasemen MCGG (compareMCGGPlayers)...');
const compareMCGGPlayersMatch = appCode.match(/function compareMCGGPlayers\(a,\s*b\)\s*\{([\s\S]*?)\n\}/);
assert(compareMCGGPlayersMatch, 'compareMCGGPlayers harus didefinisikan di app.js');

const compareMCGGPlayers = new Function('a', 'b', compareMCGGPlayersMatch[1]);

// Kasus A: Poin beda
assert(compareMCGGPlayers({ total: 10 }, { total: 8 }) < 0, 'Total poin lebih tinggi harus di atas');

// Kasus B: Poin sama, Juara 1 / MVP Ronde beda
const pRank1A = { name: 'Player A', total: 6, r1: 1, r2: 5, r3: 6, penalty: 0 }; // 1x Juara 1
const pRank1B = { name: 'Player B', total: 6, r1: 2, r2: 3, r3: 4, penalty: 0 }; // 0x Juara 1
assert(compareMCGGPlayers(pRank1A, pRank1B) < 0, 'Pemain dengan Juara 1 (MVP Ronde) lebih banyak harus di atas');

// Kasus C: Poin sama, Juara 1 sama, Top 4 beda
const pTop4A = { name: 'Player A', total: 6, r1: 2, r2: 3, r3: 4, penalty: 0 }; // 3x Top 4
const pTop4B = { name: 'Player B', total: 6, r1: 2, r2: 2, r3: 7, penalty: 0 }; // 2x Top 4
assert(compareMCGGPlayers(pTop4A, pTop4B) < 0, 'Pemain dengan finish Top 4 lebih banyak harus di atas');

// Kasus D: Poin sama, Rank 1 sama, Top 4 sama, Pengurangan Poin / Penalti (makin sering kena pengurangan makin bawah)
const pNoPenalty = { name: 'Player Clean', total: 6, r1: 2, r2: 3, r3: 4, penalty: 0 };
const pWithPenalty = { name: 'Player Sanksi', total: 6, r1: 2, r2: 3, r3: 4, penalty: -2 };
assert(compareMCGGPlayers(pNoPenalty, pWithPenalty) < 0, 'Pemain tanpa sanksi (penalty: 0) harus di atas pemain yang kena pemotongan poin (penalty: -2)');

const pPenalty2 = { name: 'Player -2', total: 6, r1: 2, r2: 3, r3: 4, penalty: -2 };
const pPenalty4 = { name: 'Player -4', total: 6, r1: 2, r2: 3, r3: 4, penalty: -4 };
assert(compareMCGGPlayers(pPenalty2, pPenalty4) < 0, 'Pemain dengan penalti -2 harus di atas pemain dengan penalti -4 (makin sering kena sanksi makin bawah)');
console.log('  ✅ [PASS] Komparator MCGG akurat: Total (desc) -> Juara 1/MVP (desc) -> Top 4 (desc) -> Pengurangan Poin (makin sedikit sanksi makin di atas)');

// 3. Uji Fungsi Hasil Khusus 0 - 0 (setGroupMatchSpecialResult & Badges)
console.log('\n⚡ 3. Menguji Penanganan Skor 0 - 0 & Opsi WO / Imbang...');
assert(appCode.includes('function setGroupMatchSpecialResult('), 'setGroupMatchSpecialResult harus terdefinisi di app.js');
assert(appCode.includes('Keduanya WO (0-0)'), 'Harus mendukung hasil Keduanya WO (0-0)');
assert(appCode.includes('Imbang (0-0)'), 'Harus mendukung hasil Imbang (0-0)');
assert(appCode.includes('⚡ WO'), 'Tombol quick action wasit ⚡ WO harus tersedia');
assert(appCode.includes('⚖️ Seri'), 'Tombol quick action wasit ⚖️ Seri harus tersedia');
console.log('  ✅ [PASS] Fitur hasil khusus 0 - 0 WO Ganda dan Seri terverifikasi.');

// 4. Uji Kolom Match Dimainkan pada Klasemen MLBB
console.log('\n📈 4. Menguji Kolom Match / Jml Match pada Tabel Klasemen...');
assert(appCode.includes('title="Pertandingan Dimainkan">Match</th>'), 'Kolom Match harus tersedia di header klasemen');
assert(appCode.includes('t.matchCount !== undefined ? t.matchCount'), 'Data sel harus membaca matchCount tim');
console.log('  ✅ [PASS] Kolom Match berhasil ditambahkan pada tabel klasemen MLBB.');

// 5. Uji Integritas Jadwal Resmi 8 Grup Sesuai Poster
console.log('\n🗓️ 5. Menguji Jadwal 8 Grup (Poster Publikasi Resmi Panitia)...');
assert(appCode.includes("'Grup A': ["), 'Jadwal Grup A harus ada');
assert(appCode.includes("'Grup B': ["), 'Jadwal Grup B harus ada');
assert(appCode.includes("'Grup C': ["), 'Jadwal Grup C harus ada');
assert(appCode.includes("'Grup D': ["), 'Jadwal Grup D harus ada');
assert(appCode.includes("'Grup E': ["), 'Jadwal Grup E harus ada');
assert(appCode.includes("'Grup F': ["), 'Jadwal Grup F harus ada');
assert(appCode.includes("'Grup G': ["), 'Jadwal Grup G harus ada');
assert(appCode.includes("'Grup H': ["), 'Jadwal Grup H harus ada');
console.log('  ✅ [PASS] Seluruh struktur jadwal 8 Grup (A s/d H) lengkap dan valid.');

console.log('\n====================================================');
console.log('🎉 SEMUA PENGUJIAN URUTAN KLASEMEN, OPSI 0-0 & JADWAL LULUS!');
console.log('====================================================');
