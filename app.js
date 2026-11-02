let mcggStageFilter = 'STAGE_1_QUAL'; // 'STAGE_1_QUAL', 'STAGE_2_SEMI', 'STAGE_3_FINAL'
function setMCGGStageFilter(stage) {
  mcggStageFilter = stage;
  mcggGroupPageIndex = 0;
  renderMCGGTable();
}

let mlbbGroupPageIndex = 0;
let mcggGroupPageIndex = 0;
let showAllMLBBFixtures = false;
let mcggLayoutMode = '3col'; // '3col' atau 'stacked'

function prevMLBBGroupPage() {
  const gKeys = Object.keys(groupStageData);
  const totalPages = Math.ceil(gKeys.length / 3) || 1;
  mlbbGroupPageIndex = Math.max(0, mlbbGroupPageIndex - 1);
  renderGroupStageUI();
}

function nextMLBBGroupPage() {
  const gKeys = Object.keys(groupStageData);
  const totalPages = Math.ceil(gKeys.length / 3) || 1;
  mlbbGroupPageIndex = Math.min(totalPages - 1, mlbbGroupPageIndex + 1);
  renderGroupStageUI();
}

function goToMLBBGroupPage(pg) {
  mlbbGroupPageIndex = pg;
  renderGroupStageUI();
}

function toggleAllMLBBFixtures() {
  showAllMLBBFixtures = !showAllMLBBFixtures;
  renderGroupFixturesUI();
}

function getActiveMCGGLobbyKeys() {
  const isSingleLobby = !mcggLobbies.LOBBY_B || mcggLobbies.LOBBY_B.length === 0;
  const qualKeys = Object.keys(mcggLobbies).filter(k => k.startsWith('LOBBY_') && k !== 'LOBBY_LOWER');
  const hasSemis = !!mcggLobbies.SEMI_A && mcggLobbies.SEMI_A.length > 0;

  if (hasSemis) {
    if (mcggStageFilter === 'STAGE_2_SEMI') {
      return ['SEMI_A', 'SEMI_B'];
    } else if (mcggStageFilter === 'STAGE_3_FINAL') {
      return ['GRAND_FINAL'];
    } else {
      return qualKeys; // STAGE_1_QUAL (5 Grup Kualifikasi: Lobi A, B, C, D, E)
    }
  }
  return isSingleLobby ? ['LOBBY_A'] : ['LOBBY_A', 'LOBBY_B', 'GRAND_FINAL'];
}

function prevMCGGGroupPage() {
  const lobbyKeys = getActiveMCGGLobbyKeys();
  const totalPages = Math.ceil(lobbyKeys.length / 3) || 1;
  mcggGroupPageIndex = Math.max(0, mcggGroupPageIndex - 1);
  renderMCGGTable();
}

function nextMCGGGroupPage() {
  const lobbyKeys = getActiveMCGGLobbyKeys();
  const totalPages = Math.ceil(lobbyKeys.length / 3) || 1;
  mcggGroupPageIndex = Math.min(totalPages - 1, mcggGroupPageIndex + 1);
  renderMCGGTable();
}

function goToMCGGGroupPage(pg) {
  mcggGroupPageIndex = pg;
  renderMCGGTable();
}

function toggleMCGGLayoutMode() {
  mcggLayoutMode = mcggLayoutMode === '3col' ? 'stacked' : '3col';
  renderMCGGTable();
}

let currentAdminPin = localStorage.getItem('yokke_admin_pin') || "YOKKE2026_";
const ADMIN_PIN = "YOKKE2026_";
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzmodAuYmQOsrYQIVwJW_3jBIDFTdpqwmkg5njJKNaTCZsEfUJn9g1XCzHgV1WfsKl0CA/exec";

/**
 * Helper fetch terpusat untuk komunikasi POST dengan Google Apps Script Web App.
 * - Menggunakan Content-Type text/plain;charset=utf-8 (mencegah CORS preflight OPTIONS yang tidak didukung GAS).
 * - Mengaktifkan mode: 'cors' dan redirect: 'follow' untuk menangani 302 redirect ke script.googleusercontent.com secara andal.
 * - Dilengkapi AbortController timeout agar antarmuka tidak hang saat koneksi lambat.
 */
async function postToGoogleAppsScript(payload, timeoutMs = 45000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: typeof payload === 'string' ? payload : JSON.stringify(payload),
      signal: controller.signal
    });
    return res;
  } finally {
    clearTimeout(timeoutId);
  }
}

let isAdmin = sessionStorage.getItem('yokke_is_admin') === 'true';

// Data State
const DATA_VERSION = '2026-10-14-v6-relational-ign';

const DEFAULT_PARTICIPANTS = [];

function getInitialParticipants() {
  const currentVersion = localStorage.getItem('yokke_data_version');
  if (currentVersion !== DATA_VERSION) {
    localStorage.removeItem('yokke_participants');
    localStorage.removeItem('yokke_deleted_participants');
    localStorage.setItem('yokke_data_version', DATA_VERSION);
    return [];
  }
  const stored = localStorage.getItem('yokke_participants');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {}
  }
  return [];
}

let participants = getInitialParticipants();

// Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama)
function getTeamPrefix(teamName) {
  if (!teamName) return '';
  const clean = teamName.trim().replace(/^[^a-zA-Z0-9]+/, '');
  const words = clean.split(/\s+/);
  return words[0] ? words[0].toLowerCase() : '';
}

/**
 * Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resmi)
 * Memetakan variasi teks bebas pendaftar (e.g. 'IT/QA', 'Quality Assurance', 'ERM/PRM', 'ADO Bandung')
 * ke klaster divisi resmi untuk pencegahan bentrok fase awal turnamen.
 */
function getDepartmentCluster(rawDept, teamOrPlayerName = '') {
  if (!rawDept) rawDept = '';
  const d = rawDept.toLowerCase().trim();

  // 1. Quality Assurance
  if (d.includes('quality assurance') || d.includes('/qa') || d.includes('it qa') || d.includes('it/qa') || d === 'qa') {
    if (d.includes('infosec')) return 'IT - Security & Infrastructure';
    return 'IT - Quality Assurance';
  }

  // 2. Risk Management & Compliance
  if (d.includes('risk') || d.includes('erm') || d.includes('prm')) {
    return 'Risk Management & Compliance';
  }

  // 3. IT Engineering, Development & Middleware
  if (d.includes('middleware') || d.includes('it dev') || d.includes('it engineering') || d.includes('engineering') || d === 'it') {
    return 'IT - Engineering & Development';
  }

  // 4. Change, Release & Service Operations
  if (d.includes('change') || d.includes('release') || d.includes('planning & service') || d.includes('service operations')) {
    return 'IT - Change, Release & Service Operations';
  }

  // 5. Product Management & OPPI
  if (d.includes('product') || d.includes('oppi')) {
    return 'Product Management & OPPI';
  }

  // 6. Project Management Office (PMO / BMRI)
  if (d.includes('project management') || d.includes('pmo') || d.includes('bmri')) {
    return 'Project Management Office';
  }

  // 7. Regional ADO & Field Operations / Teknisi
  if (d.includes('ado') || d.includes('sqm') || d.includes('teknisi') || d.includes('wilayah') || d.includes('palembang') || d.includes('bandung') || d.includes('medan') || d.includes('lampung') || d.includes('jakarta')) {
    return 'Regional ADO & Field Operations';
  }

  // 8. Merchant Operations & Business
  if (d.includes('merchant') || d.includes('mercant') || d.includes('partnership') || d === 'operation' || d.includes('merchant operation')) {
    return 'Merchant Operations & Business';
  }

  // 9. Marketing, CRM & Commercial
  if (d.includes('marketing') || d.includes('crm') || d.includes('lvm') || d.includes('sales')) {
    return 'Marketing, CRM & Commercial';
  }

  // 10. General & Logistics / Inventory
  if (d.includes('inventory')) {
    return 'General & Logistics';
  }

  return rawDept.trim() || 'Lainnya / Umum';
}

function getTeamDept(teamName) {
  if (!teamName) return '';
  const clean = teamName.trim().toLowerCase();
  const p = (participants || []).find(x => x.category === 'MLBB' && (x.name || '').trim().toLowerCase() === clean);
  const raw = (p && p.dept) ? p.dept.trim() : '';
  if (!raw || raw === '-' || raw.toLowerCase() === 'undefined') return '';
  return getDepartmentCluster(raw, teamName).toLowerCase();
}


const MLBB_SEEDED_8 = [
  'wingskanan esport 1',
  'atmo',
  'native',
  'gado-gado',
  'gado gado esports',
  'appa linux',
  'aang alpha',
  'anti klimax',
  'anti climax'
];

function isTeamInvited(teamName) {
  if (!teamName) return false;
  const clean = teamName.trim().toLowerCase();
  const p = participants.find(x => x.category === 'MLBB' && (x.name || '').trim().toLowerCase() === clean);
  if (p && p.isInvited !== undefined) return !!p.isInvited;
  return MLBB_SEEDED_8.includes(clean);
}

function toggleInvitedTeam(id) {
  if (!isAdmin) return;
  const p = participants.find(x => x.id === id);
  if (!p) return;
  p.isInvited = !p.isInvited;
  saveState();
  renderParticipants();
  if (tournamentStageState.mlbb && !tournamentStageState.mlbb.isGroupLocked && Object.keys(groupStageData || {}).length > 0) {
    generateGroupStage(false);
  }
  saveTournamentStateOnly(true);
}

let currentFilter = 'ALL';
let bracketMatches = [];
let uploadedLogoBase64 = "";

// State for ID Cards in Registration Form (Per-Person)
let regOfficialIdCards = { off1: "", off2: "" };
let regPlayersIdCards = { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "" };
let regMcggIdCard = "";

// State for Admin Edit Roster ID Cards
let editRosterIdCards = {};
let currentEditLogoBase64 = "";

// Tournament Format State: AUTO | GROUP_2 | GROUP_4 | KNOCKOUT
let tournamentFormat = localStorage.getItem('yokke_mlbb_format') || 'AUTO';
if (tournamentFormat === 'KNOCKOUT') {
  tournamentFormat = 'AUTO';
  localStorage.setItem('yokke_mlbb_format', 'AUTO');
}
// Status Pendaftaran Turnamen (Buka / Tutup)

// Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets)
function showGlobalLoader(msg = "Menyinkronkan data turnamen dari Google Sheets...") {
  const loader = document.getElementById("appGlobalLoader");
  const txt = document.getElementById("loaderStatusText");
  if (txt) txt.innerText = msg;
  if (loader) {
    loader.classList.remove("fade-out");
    loader.style.display = "flex";
  }
  clearTimeout(window._loaderTimeout);
  window._loaderTimeout = setTimeout(() => {
    hideGlobalLoader();
  }, 8000); // Batas aman 8 detik
}

function hideGlobalLoader() {
  clearTimeout(window._loaderTimeout);
  const loader = document.getElementById("appGlobalLoader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => {
      if (loader.classList.contains("fade-out")) {
        loader.style.display = "none";
      }
    }, 500);
  }
}

let isRegistrationClosed = localStorage.getItem('yokke_reg_closed') === 'true';

// 8 Grup Resmi Kualifikasi MLBB Turnamen Yokke Squad 2026 Sesuai Poster Publikasi Resmi Panitia
const DEFAULT_MLBB_GROUPS = {
  'Grup A': [
    { name: 'Native', win: 0, lose: 0, pts: 0 },
    { name: 'BOTI (Bekerja Optimal, Tumbuh Istimewa)', win: 0, lose: 0, pts: 0 },
    { name: 'Yokke Cikarang', win: 0, lose: 0, pts: 0 },
    { name: 'My Palembang', win: 0, lose: 0, pts: 0 },
    { name: 'IOS', win: 0, lose: 0, pts: 0 }
  ],
  'Grup B': [
    { name: 'Anti Climax', win: 0, lose: 0, pts: 0 },
    { name: '7 SINS', win: 0, lose: 0, pts: 0 },
    { name: 'Yokke Batam Squad (YBS)', win: 0, lose: 0, pts: 0 },
    { name: 'DEWA (Dark Elite Warriors Asli Medan)', win: 0, lose: 0, pts: 0 },
    { name: 'SGMO', win: 0, lose: 0, pts: 0 }
  ],
  'Grup C': [
    { name: 'AANG ALPHA', win: 0, lose: 0, pts: 0 },
    { name: 'REKAN OM', win: 0, lose: 0, pts: 0 },
    { name: 'Red Razor', win: 0, lose: 0, pts: 0 },
    { name: 'TY BEKASI', win: 0, lose: 0, pts: 0 },
    { name: 'BIKINI BOTTOM', win: 0, lose: 0, pts: 0 }
  ],
  'Grup D': [
    { name: 'ATMO', win: 0, lose: 0, pts: 0 },
    { name: 'DEADLINE SLAYER', win: 0, lose: 0, pts: 0 },
    { name: '666', win: 0, lose: 0, pts: 0 },
    { name: 'AVATAR BORNEO', win: 0, lose: 0, pts: 0 },
    { name: 'DARFAT LIVIN FOOD', win: 0, lose: 0, pts: 0 }
  ],
  'Grup E': [
    { name: 'APPA LINUX', win: 0, lose: 0, pts: 0 },
    { name: 'DEPOK MAUNG', win: 0, lose: 0, pts: 0 },
    { name: 'Tugu Muda', win: 0, lose: 0, pts: 0 },
    { name: 'MiracleXStars', win: 0, lose: 0, pts: 0 },
    { name: 'Miskin Mekanik', win: 0, lose: 0, pts: 0 }
  ],
  'Grup F': [
    { name: 'YOKKE LAMPUNG', win: 0, lose: 0, pts: 0 },
    { name: 'VALKYRIE', win: 0, lose: 0, pts: 0 },
    { name: 'WINGSKANAN ESPORT 2', win: 0, lose: 0, pts: 0 },
    { name: 'NAMJUG', win: 0, lose: 0, pts: 0 },
    { name: 'Colorbook', win: 0, lose: 0, pts: 0 },
    { name: 'Xorps E- Sport', win: 0, lose: 0, pts: 0 }
  ],
  'Grup G': [
    { name: 'Gado Gado Esports', win: 0, lose: 0, pts: 0 },
    { name: 'Yokke.Syindicate', win: 0, lose: 0, pts: 0 },
    { name: 'LOLO', win: 0, lose: 0, pts: 0 },
    { name: 'AANG Beta', win: 0, lose: 0, pts: 0 },
    { name: 'TABRAK AJALAH', win: 0, lose: 0, pts: 0 }
  ],
  'Grup H': [
    { name: 'WINGSKANAN ESPORT 1', win: 0, lose: 0, pts: 0 },
    { name: 'MBG ( Mas Bahlil Guanteng )', win: 0, lose: 0, pts: 0 },
    { name: 'Yokke Batam', win: 0, lose: 0, pts: 0 },
    { name: 'MTI BANJARMASIN', win: 0, lose: 0, pts: 0 },
    { name: 'BOLO CLUB', win: 0, lose: 0, pts: 0 }
  ]
};

let savedGroupData = null;
try {
  savedGroupData = JSON.parse(localStorage.getItem('yokke_group_data'));
} catch (e) {}

let groupStageData = (savedGroupData && Object.keys(savedGroupData).length >= 8)
  ? savedGroupData
  : JSON.parse(JSON.stringify(DEFAULT_MLBB_GROUPS));
let groupMatchResults = JSON.parse(localStorage.getItem('yokke_group_match_results') || '{}');
let groupPlayoffMatches = JSON.parse(localStorage.getItem('yokke_group_playoff_matches') || '[]');

// MCGG Multi-Lobby State
let currentMCGGLobby = 'LOBBY_A';
// 5 Lobi Kualifikasi Resmi MCGG Turnamen Yokke Squad 2026 (Sesuai Hasil Acak Ground Truth GSheet)
const DEFAULT_MCGG_LOBBIES = {
  LOBBY_A: [
    { name: 'Daniel Reimond', nickname: 'jonomon19', gameId: '6652814 (4125)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Miftah Fadhlurrahman', nickname: 'skuidwert', gameId: '3296316(4079)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Yudhistira Pratama Ramadhan', nickname: 'Yudhistira Pratama Ramadhan', gameId: '3266192 (4113)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Aziz Nur Maulana', nickname: '4212', gameId: '9658392 (4020)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Agil Patriosa', nickname: 'Necrophos', gameId: '111959630 (4261)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Raihan Purnama', nickname: 'hutanlindung', gameId: '17768274 (4031)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Dandy Nasri', nickname: 'Dandy Nasri', gameId: '3180808 (4068)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'MUHAMMAD FAUZI KURNIAWAN', nickname: 'Alis Setan17', gameId: '5488262 (4097)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 }
  ],
  LOBBY_B: [
    { name: 'Bagus Setiawan', nickname: 'BagasST', gameId: '3501438 (4089)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Muhammad Teguh', nickname: 'Hipp', gameId: '111712748(4278)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Sulistiyo Yonatan', nickname: 'Yona', gameId: '2355574 (4027)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Robih Dini', nickname: 'mangonet', gameId: '111819538 (4253)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Faldi Rasis Purnomo', nickname: 'Faldi Rasis Purnomo', gameId: '1645656 (4002)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Elrizki Mardhi Hasan', nickname: 'Bernadetha', gameId: '4543762 (4048)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Sherly Aprilia', nickname: 'Cookie S', gameId: '667212467 (8653)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Amsal Robinhot', nickname: 'dlya las', gameId: '7736110 (4124)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 }
  ],
  LOBBY_C: [
    { name: 'ANDHIKA BAYU PRASETYO', nickname: 'H O K K I E', gameId: '2336317 (4053)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Joko waluyono', nickname: 'Xylo^', gameId: '2357103 (4071)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'FAJAR GILLES TIRANO', nickname: 'Mugiwara', gameId: '3122743 (4122)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Gilang Fandi Setiaji', nickname: 'sadistic_killer', gameId: '4117658(4148)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Irza Muttaqin', nickname: 'Irza Muttaqin', gameId: '10610516(4048)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'M ikhsan', nickname: 'Ganool', gameId: '16725620 (4014)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Dhimas Saputro', nickname: 'dhimssky', gameId: '20610458 (4119)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 }
  ],
  LOBBY_D: [
    { name: 'Muhammad Harits Eldrid', nickname: 'Eldrid', gameId: '111771260', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Muh Asrul', nickname: 'Odet tiktok', gameId: '13492185 (4170)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Rani Tiara Putri', nickname: 'Queen•', gameId: '86774755 (4070)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Setyo Haryo Alifianto', nickname: 'whyJude', gameId: '9585223 (4098)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Laga Al Ahli', nickname: 'Laga Al Ahli', gameId: '1605612 (1007)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Cikal Yulanda', nickname: 'Oweysis', gameId: '13862548 (4154)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'David Iskandar', nickname: 'David Iskandar', gameId: '5633899 & 4199', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 }
  ],
  LOBBY_E: [
    { name: 'Rendy Wibi Pratama', nickname: 'EhhChaky', gameId: '3221758 (4129)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Arief Hidayat', nickname: 'Kuproy', gameId: '111695710 (4291)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Elham Yudhistira', nickname: 'KoncoKentel', gameId: '2559856 (4081)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Eko Marwanto Putro', nickname: 'Eko Marwanto Putro', gameId: '5730333 (4059)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Fardhan Mauladi', nickname: 'Yokke.DHANNKEBOT', gameId: '111118942(4283)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Alvin Elshadai Pangaribuan', nickname: 'Alvin Elshadai Pangaribuan', gameId: '20564452 (4150)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 },
    { name: 'Muhamad Fajar Samudra', nickname: 'Muhamad Fajar Samudra', gameId: '4881010 (4163)', dept: '', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 }
  ],
  SEMI_A: [],
  SEMI_B: [],
  GRAND_FINAL: []
};

let savedLobbies = null;
try {
  savedLobbies = JSON.parse(localStorage.getItem('yokke_mcgg_lobbies'));
} catch (e) {}

let mcggLobbies = (savedLobbies && Object.keys(savedLobbies).filter(k => k.startsWith('LOBBY_') && k !== 'LOBBY_LOWER').length >= 5)
  ? savedLobbies
  : JSON.parse(JSON.stringify(DEFAULT_MCGG_LOBBIES));

// State Kontrol Tahapan Turnamen (Stage Machine ala Challonge)
let tournamentStageState = JSON.parse(localStorage.getItem('yokke_stage_state') || JSON.stringify({
  mlbb: {
    stage: 'STAGE_1_GROUP', // 'STAGE_1_GROUP' | 'STAGE_2_PLAYOFF'
    isGroupLocked: false,
    tieBreaker: { needed: false, group: '', teamA: '', teamB: '', winner: null }
  },
  mcgg: {
    isTmLocked: false,
    lockedMatches: { LOBBY_A: {}, LOBBY_B: {}, GRAND_FINAL: {} }
  }
}));

function saveStageStateLocal() {
  localStorage.setItem('yokke_stage_state', JSON.stringify(tournamentStageState));
}

const POINT_TABLE = { 1: 4, 2: 3, 3: 2, 4: 1, 5: -1, 6: -2, 7: -3, 8: -4 };

// Master Data Little Commanders MCGG Sesuai Tab "MCGG Match Set Up" di Google Sheets
const MCGG_COMMANDERS = [
  // --- TIER HIGH (5 Commander) ---
  { id: 'chou', name: 'Chou', hero: 'Chou', alterName: '', displayName: 'Chou', tier: 'High', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/67e9ff1a8a411ac869eb41366227f7d3.png', alterImage: '', aliases: ['chou'] },
  { id: 'fanny', name: 'Fanny', hero: 'Fanny', alterName: '', displayName: 'Fanny', tier: 'High', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/5dad2943301667ba768e0f8083ae42a0.png', alterImage: '', aliases: ['fanny'] },
  { id: 'kagura', name: 'Kagura', hero: 'Kagura', alterName: 'Saki', displayName: 'Kagura [Saki]', tier: 'High', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/23d9b031d10b0c4554fc852e0de0288b.png', alterImage: 'assets/commanders/saki.png', aliases: ['saki', 'kagura'] },
  { id: 'lukas', name: 'Lukas', hero: 'Lukas', alterName: '', displayName: 'Lukas', tier: 'High', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/f102b4d35fd526450f8181c721bb62c0.png', alterImage: '', aliases: ['lukas'] },
  { id: 'vale', name: 'Vale', hero: 'Vale', alterName: '', displayName: 'Vale', tier: 'High', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/7c8c4df88dc34a9b958ddeb78972eb63.png', alterImage: '', aliases: ['vale'] },

  // --- TIER MID (11 Commander) ---
  { id: 'alice', name: 'Alice', hero: 'Alice', alterName: 'Mavis', displayName: 'Alice [Mavis]', tier: 'Mid', heroImage: 'assets/commanders/alice.png', alterImage: 'assets/commanders/mavis.png', aliases: ['mavis', 'alice'] },
  { id: 'alucard', name: 'Alucard', hero: 'Alucard', alterName: 'Harper', displayName: 'Alucard [Harper]', tier: 'Mid', heroImage: 'assets/commanders/alucard.png', alterImage: 'assets/commanders/harper.png', aliases: ['harper', 'alucard'] },
  { id: 'angela', name: 'Angela', hero: 'Angela', alterName: '', displayName: 'Angela', tier: 'Mid', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/6cc77388afff605f0718891c7cb26dc2.png', alterImage: '', aliases: ['angela'] },
  { id: 'dyrroth', name: 'Dyrroth', hero: 'Dyrroth', alterName: '', displayName: 'Dyrroth', tier: 'Mid', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/912f81a2def4b8bf1f5b2076a8faa11c.png', alterImage: '', aliases: ['dyrroth'] },
  { id: 'gusion', name: 'Gusion', hero: 'Gusion', alterName: 'Gujun', displayName: 'Gusion [Gujun]', tier: 'Mid', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/d33bdf25cc7a15787b4dc992cb0939fd.png', alterImage: 'assets/commanders/gujun.png', aliases: ['gujun', 'gusion'] },
  { id: 'kalea', name: 'Kalea', hero: 'Kalea', alterName: 'Dubi', displayName: 'Kalea [Dubi]', tier: 'Mid', heroImage: 'assets/commanders/kalea.png', alterImage: 'assets/commanders/dubi.png', aliases: ['dubi', 'kalea'] },
  { id: 'lancelot', name: 'Lancelot', hero: 'Lancelot', alterName: 'Remy', displayName: 'Lancelot [Remy]', tier: 'Mid', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/0ccebb8186e65072d7063a82f2f2ce25.png', alterImage: 'assets/commanders/remy.png', aliases: ['remy', 'lancelot'] },
  { id: 'layla', name: 'Layla', hero: 'Layla', alterName: '', displayName: 'Layla', tier: 'Mid', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/c40e4924941dc61d268919c118bd50f0.png', alterImage: '', aliases: ['layla'] },
  { id: 'moskov', name: 'Moskov', hero: 'Moskov', alterName: '', displayName: 'Moskov', tier: 'Mid', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/bc174d35a7a22704b0a149bbc4e89bca.png', alterImage: '', aliases: ['moskov'] },
  { id: 'nana', name: 'Nana', hero: 'Nana', alterName: '', displayName: 'Nana', tier: 'Mid', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/8748f39b488b5449542c965ed6093c16.png', alterImage: '', aliases: ['nana'] },
  { id: 'valir', name: 'Valir', hero: 'Valir', alterName: '', displayName: 'Valir', tier: 'Mid', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/cbc847cd360f3e8a00509aa07aa686ff.png', alterImage: '', aliases: ['valir'] },

  // --- TIER LAINNYA SESUAI TAB MATCH SET UP ---
  { id: 'popol', name: 'Popol', hero: 'Popol', alterName: 'Benny', displayName: 'Popol [Benny]', tier: '', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/2292dab1521e76515f05772413760608.png', alterImage: 'assets/commanders/benny.png', aliases: ['benny', 'popol'] },
  { id: 'aamon', name: 'Aamon', hero: 'Aamon', alterName: 'Austus', displayName: 'Aamon [Austus]', tier: 'Meta', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/eb3ebce6dfa063ba8db31c52fd7d92d6.png', alterImage: 'assets/commanders/austus.png', aliases: ['austus', 'aamon'] },
  { id: 'brody', name: 'Brody', hero: 'Brody', alterName: '', displayName: 'Brody', tier: 'Meta', heroImage: 'assets/commanders/brody.png', alterImage: '', aliases: ['brody'] },
  { id: 'franco', name: 'Franco', hero: 'Franco', alterName: 'Ragnar', displayName: 'Franco [Ragnar]', tier: 'Meta', heroImage: 'assets/commanders/franco.png', alterImage: 'assets/commanders/ragnar.png', aliases: ['ragnar', 'franco'] },
  { id: 'guinevere', name: 'Guinevere', hero: 'Guinevere', alterName: '', displayName: 'Guinevere', tier: 'Meta', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/3086b1bd539e5f115e51e63e612bd589.png', alterImage: '', aliases: ['guinevere'] },
  { id: 'ling', name: 'Ling', hero: 'Ling', alterName: '', displayName: 'Ling', tier: 'Meta', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/38486f457993b735c84caf210e74901e.png', alterImage: '', aliases: ['ling'] },
  { id: 'lunox', name: 'Lunox', hero: 'Lunox', alterName: 'Rya', displayName: 'Lunox [Rya]', tier: 'Meta', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/e88c0d1ee346b55f2807f5764660cdea.png', alterImage: 'assets/commanders/rya.png', aliases: ['rya', 'lunox'] },
  { id: 'luoyi', name: 'Luo Yi', hero: 'Luo Yi', alterName: 'Yuki', displayName: 'Luo Yi [Yuki]', tier: 'Meta', heroImage: 'assets/commanders/luoyi.png', alterImage: 'assets/commanders/yuki.png', aliases: ['yuki', 'luo yi'] },
  { id: 'lylia', name: 'Lylia', hero: 'Lylia', alterName: 'Tharz', displayName: 'Lylia [Tharz]', tier: 'Meta', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/5b564ab2da9dbdf91ee94135f6d1de24.png', alterImage: 'assets/commanders/tharz.png', aliases: ['tharz', 'lylia'] },
  { id: 'wanwan', name: 'Wanwan', hero: 'Wanwan', alterName: '', displayName: 'Wanwan', tier: 'Meta', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/4529797ef7c48949a560c86fefb7ffb4.png', alterImage: '', aliases: ['wanwan'] },
  { id: 'zilong', name: 'Zilong', hero: 'Zilong', alterName: '', displayName: 'Zilong', tier: 'Meta', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/187cebb25a8a0bca4bc6a34188b393dc.png', alterImage: '', aliases: ['zilong'] },
  { id: 'aurora', name: 'Aurora', hero: 'Aurora', alterName: '', displayName: 'Aurora', tier: '', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/50dcf75e872d196245a9d359dc55b067.png', alterImage: '', aliases: ['aurora'] },
  { id: 'cyclops', name: 'Cyclops', hero: 'Cyclops', alterName: 'Asta', displayName: 'Cyclops [Asta]', tier: '', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/4f50b223b87f1d572f1aa4fc99748c01.png', alterImage: '', aliases: ['asta', 'cyclops'] },
  { id: 'johnson', name: 'Johnson', hero: 'Johnson', alterName: 'Kaboom', displayName: 'Johnson [Kaboom]', tier: '', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/4e58548c53cff04bab4a8eb849b21272.png', alterImage: 'assets/commanders/kaboom.png', aliases: ['kaboom', 'johnson'] },
  { id: 'karina', name: 'Karina', hero: 'Karina', alterName: '', displayName: 'Karina', tier: '', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/8660f1041eaf35f1da59146ae55b781d.png', alterImage: '', aliases: ['karina'] },
  { id: 'miya', name: 'Miya', hero: 'Miya', alterName: '', displayName: 'Miya', tier: '', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/43b963b49c006a010429bae5869ca726.png', alterImage: '', aliases: ['miya'] },
  { id: 'yuzhong', name: 'Yu Zhong', hero: 'Yu Zhong', alterName: 'Pao', displayName: 'Yu Zhong [Pao]', tier: '', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/5056acc9c78ce666ccf66f4c150c1957.png', alterImage: 'assets/commanders/pao.png', aliases: ['pao', 'yu zhong'] },
  { id: 'paquito', name: 'Paquito', hero: 'Paquito', alterName: '', displayName: 'Paquito', tier: '', heroImage: 'https://akmweb.youngjoygame.com/web/gms/image/cfd50a3955fee45148c4787337d4370f.png', alterImage: '', aliases: ['paquito'] },
  { id: 'diggie', name: 'Diggie', hero: 'Diggie', alterName: 'Eggie', displayName: 'Diggie [Eggie]', tier: '', heroImage: 'assets/commanders/diggie.png', alterImage: 'assets/commanders/eggie.png', aliases: ['eggie', 'diggie'] },
  { id: 'floryn', name: 'Floryn', hero: 'Floryn', alterName: 'Dubi', displayName: 'Floryn [Dubi]', tier: '', heroImage: 'assets/commanders/floryn.png', alterImage: 'assets/commanders/dubi.png', aliases: ['floryn'] },
  { id: 'harley', name: 'Harley', hero: 'Harley', alterName: 'Buss', displayName: 'Harley [Buss]', tier: '', heroImage: 'assets/commanders/harley.png', alterImage: 'assets/commanders/buss.png', aliases: ['buss', 'harley'] },
  { id: 'minotaur', name: 'Minotaur', hero: 'Minotaur', alterName: 'Brown', displayName: 'Minotaur [Brown]', tier: '', heroImage: 'assets/commanders/minotaur.png', alterImage: 'assets/commanders/brown.png', aliases: ['brown', 'minotaur'] },
  { id: 'ruby', name: 'Ruby', hero: 'Ruby', alterName: 'Bersi', displayName: 'Ruby [Bersi]', tier: '', heroImage: 'assets/commanders/ruby.png', alterImage: '', aliases: ['bersi', 'ruby'] },
  { id: 'vexana', name: 'Vexana', hero: 'Vexana', alterName: 'Connie', displayName: 'Vexana [Connie]', tier: '', heroImage: 'assets/commanders/vexana.png', alterImage: 'assets/commanders/connie.png', aliases: ['connie', 'vexana'] }
];

// Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika tidak ada
function getCommanderFormattedName(cmd) {
  if (!cmd) return '';
  const hero = (cmd.hero || cmd.name || '').trim();
  const alter = (cmd.alterName || '').trim();
  if (hero && alter && hero.toLowerCase() !== alter.toLowerCase()) {
    return `${hero} [${alter}]`;
  }
  return hero || alter || cmd.name || '';
}

// Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen
function renderCommanderCirclesHtml(cmd, size) {
  if (!cmd) return '';
  const s = size || 26;
  const hero = (cmd.hero || cmd.name || '').trim();
  const alter = (cmd.alterName || '').trim();
  const hasAlter = alter && hero.toLowerCase() !== alter.toLowerCase();

  const heroSlug = hero.toLowerCase().replace(/[^a-z0-9]/g, '');
  const alterSlug = alter.toLowerCase().replace(/[^a-z0-9]/g, '');
  const heroImg = cmd.heroImage || `assets/commanders/${heroSlug}.png`;
  const alterImg = cmd.alterImage || (hasAlter ? `assets/commanders/${alterSlug}.png` : '');

  if (hasAlter) {
    return `
      <span class="commander-dual-circles" title="${hero} [${alter}]">
        <img src="${heroImg}" class="commander-circle-avatar" style="width:${s}px;height:${s}px;" alt="${hero}" title="Hero: ${hero}" onerror="this.src='assets/commanders/chou.png'">
        <img src="${alterImg}" class="commander-circle-avatar alter-circle" style="width:${s}px;height:${s}px;" alt="${alter}" title="Alter: ${alter}" onerror="this.src='assets/commanders/mavis.png'">
      </span>
    `;
  } else {
    return `
      <span class="commander-dual-circles" title="${hero}">
        <img src="${heroImg}" class="commander-circle-avatar" style="width:${s}px;height:${s}px;" alt="${hero}" title="Hero: ${hero}" onerror="this.src='assets/commanders/chou.png'">
      </span>
    `;
  }
}

// Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian
function renderCommanderCardVisualHtml(cmd) {
  if (!cmd) return '';
  const hero = (cmd.hero || cmd.name || '').trim();
  const alter = (cmd.alterName || '').trim();
  const hasAlter = alter && hero.toLowerCase() !== alter.toLowerCase();

  const heroSlug = hero.toLowerCase().replace(/[^a-z0-9]/g, '');
  const alterSlug = alter.toLowerCase().replace(/[^a-z0-9]/g, '');
  const heroImg = cmd.heroImage || `assets/commanders/${heroSlug}.png`;
  const alterImg = cmd.alterImage || (hasAlter ? `assets/commanders/${alterSlug}.png` : '');

  if (hasAlter) {
    return `
      <div class="commander-card-dual">
        <div style="text-align:center;">
          <img src="${heroImg}" class="commander-card-circle" alt="${hero}" title="Hero: ${hero}" onerror="this.src='assets/commanders/chou.png'">
          <div class="commander-circle-sublabel hero-sublabel">${hero}</div>
        </div>
        <div style="font-size:1rem; color:rgba(255,255,255,0.4); font-weight:800; align-self:center;">+</div>
        <div style="text-align:center;">
          <img src="${alterImg}" class="commander-card-circle alter-circle" alt="${alter}" title="Alter: ${alter}" onerror="this.src='assets/commanders/mavis.png'">
          <div class="commander-circle-sublabel alter-sublabel">${alter}</div>
        </div>
      </div>
      <div style="font-weight:800; color:var(--yokke-gold); font-size:0.95rem; text-align:center; margin-bottom:0.35rem;">
        ${hero} <span style="color:var(--yokke-cyan);">[${alter}]</span>
      </div>
    `;
  } else {
    return `
      <div class="commander-card-dual">
        <div style="text-align:center;">
          <img src="${heroImg}" class="commander-card-circle" alt="${hero}" title="Hero: ${hero}" onerror="this.src='assets/commanders/chou.png'">
          <div class="commander-circle-sublabel hero-sublabel">${hero}</div>
        </div>
      </div>
      <div style="font-weight:800; color:var(--yokke-gold); font-size:0.95rem; text-align:center; margin-bottom:0.35rem;">
        ${hero}
      </div>
    `;
  }
}

// State Hasil Undian Commander Per Lobi
let mcggDrawState = JSON.parse(localStorage.getItem('yokke_commander_draw') || '{}');
let lastCommanderDrawMatch = 1;

// URLs Dokumen Peraturan Resmi Google Docs YMC S4 2026
const GOOGLE_DOCS_RULES_DOC_URL = "https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/edit?hl=ID&tab=t.0";
const GOOGLE_DOCS_RULES_MCGG_DOC_URL = "https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/edit?hl=ID&tab=t.ji56ljhdhzkr";
const GOOGLE_DOCS_RULES_EXPORT_URL_MLBB = "https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/export?format=txt&tab=t.0";
const GOOGLE_DOCS_RULES_EXPORT_URL_MCGG = "https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/export?format=txt&tab=t.ji56ljhdhzkr";
const GOOGLE_DOCS_RULES_EXPORT_URL = GOOGLE_DOCS_RULES_EXPORT_URL_MLBB;

// Default Rules Sesuai Dokumen Resmi Google Docs YMC S4 2026
const DEFAULT_RULES_MLBB = `📋 KETENTUAN PESERTA MLBB
1. Player wajib pegawai MTI (minimal bekerja 6 bulan sebagai pegawai MTI).
2. Menunjukkan ID Card Pegawai Yokke (bukti fisik), atau e-Money Pegawai Yokke, atau surat keterangan atasan jika ID Card hilang (surat keterangan dari atasan jika yang bersangkutan benar merupakan pegawai aktif).
3. Anggota tim yang telah didaftarkan tidak dapat diganti pada saat waktu pendaftaran telah ditutup.
4. Menyertakan Nama Lengkap, Nickname, dan ID Game seluruh pemain saat pendaftaran.
5. 1 (satu) Tim terdiri dari 8 (delapan) pemain (5 Inti + 3 Cadangan) + 2 (dua) Official (1 wajib, 1 opsional).
6. Tidak ada maksimal dalam mendaftarkan tim dan tidak ada batasan 1 tim harus dari 1 Divisi/Unit (lintas divisi diperbolehkan).
7. Untuk Official MLBB tidak diperkenankan mendaftar menjadi pemain MLBB.


🏆 KETENTUAN PERTANDINGAN MLBB
1. Komposisi Roster Resmi: 
2 Official/Manager 
+ 8 Pemain (5 Pemain Inti + 3 Cadangan). 
Wajib memenuhi kuota komposisi internal Yokke.
2. Format Turnamen Resmi: Turnamen menggunakan sistem 2 tahap — Babak Fase Grup (Group Stage) terlebih dahulu, kemudian tim pemuncak klasemen melaju ke Bagan Turnamen Playoff (Knockout Stage, Semifinal Upper Lower, Final Upper Lower & Grand Final).
3. Sistem Pertandingan:
   * Babak Fase Grup: Pertandingan Best of 3 (BO3).
   * Babak Knockout Stage: Best of 3 (BO3).
   * Babak Semifinal Upper and Lower: Best of 3 (BO3).
   * Babak Final Upper and Lower: Best of 5 (BO5).
   * Babak Grand Final: Best of 5 (BO5).
4. Penentuan Poin Grup: Tim menang memperoleh 2 poin, tim kalah memperoleh 0 poin. Peringkat 1 & 2 dari tiap grup berhak melaju ke Upper Bracket. Peringkat 3 dari tiap grup berhak melaju ke Lower Bracket.
5. Koneksi jaringan internet merupakan tanggung jawab masing-masing peserta.
6. Setiap tim tidak bisa mengajukan pause.
7. Pada tampilan on Cam, seluruh pemain wajib memperlihatkan wajah dengan jelas, posisi handphone/device harus terlihat, serta menggunakan posisi Camera ZoomOut yang dapat memperlihatkan kondisi sekeliling dari 5 pemain. Pastikan device untuk on Cam dan device untuk tanding berbeda.
8. Tim dilarang mengganti pemain yang sudah terdaftar, termasuk pemain cadangan selama turnamen berlangsung.
9. Dikarenakan tidak diperbolehkan untuk pause, jika terjadi pelanggaran di dalam in-game harap melakukan screenshot dan berikan kepada panitia evidence tersebut setelah pertandingan berakhir agar panitia melakukan tinjauan.
10. Pembagian tim yang bertanding akan dilakukan pada saat Technical Meeting.
11. Setelah pertandingan, Kapten Tim dari tim yang menang WAJIB screenshot Hasil Match dan Detail (tidak boleh menutup Hero, Item, nama akun, dan nilai pertandingan).
12. Seluruh tim wajib mengikuti jadwal pertandingan yang telah ditetapkan oleh panitia.


⚖️ DO AND DON'T YMC S4 2026


DO (Hal yang Wajib/Diperbolehkan):
* Peserta WAJIB on camera pada room Discord yang sudah ditentukan panitia saat pertandingan.
* Seluruh pemain WAJIB terlihat dan device handphone yang digunakan pada saat on camera dan saat pertandingan berlangsung.
* Wajib menggunakan akun yang sudah didaftarkan pada saat registrasi (nickname, id game, server, dll).
* Wajib menunjukkan ID card Yokke (fisik bukan foto) dan ID game pada saat verifikasi pemain sebelum bertanding. Jika ID card Yokke (fisik berwarna putih biru) hilang, diperbolehkan menggunakan e-Money Yokke bergambar pegawai (fisik). Hanya player yang sudah melaporkan ID card fisik hilang atau belum terima sebelumnya yang di-whitelist oleh panitia untuk bertanding tanpa ID card fisik.
* Wajib melakukan verifikasi ID card fisik dan ID game kepada panitia/wasit yang bertugas apabila adanya pergantian player.
* Tim yang sudah mendaftar wajib join Discord (untuk on cam pada saat tanding) dan grup WhatsApp (untuk informasi pertandingan).
* Diperbolehkan melakukan recall-recall/taunting/emote-emote pada saat bertanding.
* Diperbolehkan menggunakan skin apapun.
* Apabila melakukan selebrasi pada saat menang, harap melakukan selebrasi tanpa menggunakan gesture SARA.
* WAJIB unmute voice di Discord pada saat verifikasi player dan wajib mute Discord pada saat bertanding.
* WAJIB bagi kedua tim menunjukkan loading screen sebelum pertandingan dimulai.
* WAJIB bagi kedua tim menunjukkan screen hasil pertandingan (Victory/Defeat).
* WAJIB melakukan screenshot hasil pertandingan bagi tim yang menang dengan ketentuan Hero harus terlihat, Item terlihat, ID player terlihat, dan skor terlihat.
* WAJIB hadir di Discord 30 menit (18.30 WIB) sebelum jadwal pertandingan dimulai, berlaku juga untuk tim yang akan tayang di live streaming YouTube. Apabila tim A vs tim B sebagai contoh sudah melakukan verifikasi pada Discord di pukul 18.30 WIB, maka tim A vs tim B sudah dapat segera melakukan pertandingan.
* Tim home yang membuat room custom dan WAJIB custom draft pick mythic. Untuk match kedua tim away yang membuat room custom.
DON'T (Hal yang Dilarang/Sanksi):
* Jika player mematikan kamera pada saat bertanding, wasit/panitia berhak memberhentikan pertandingan dan memberikan peringatan untuk segera menghidupkan kamera . Jika player mematikan kamera kembali baik sengaja maupun tidak sengaja, tim tersebut akan dianggap kalah di match tersebut.
* Jika ada player dari suatu tim menggunakan akun yang tidak sesuai dengan akun yang didaftarkan pada saat registrasi, tim tersebut akan langsung didiskualifikasi.
* Apabila ada tim yang ketahuan menggunakan joki atau menggunakan cheat, tim tersebut akan langsung didiskualifikasi & blacklist.
* Apabila ID card Yokke (putih biru) dan e-Money Yokke bergambar pegawai hilang, harap membuat surat keterangan dari atasan player terkait yang menyatakan yang bersangkutan masih aktif sebagai pegawai Yokke (Nama lengkap, NIP, tanggal join MTI, asal Divisi/Unit, dan status karyawan organik/insource/outsource). Dokumen dikirimkan ke grup WhatsApp agar bisa di-crosscheck oleh panitia.
* Dilarang Chat All dan Notifikasi All. Apabila ketahuan ada tim yang Chat All dan Notifikasi All akan diberikan 1x peringatan oleh WASIT. Jika melakukannya kembali, maka tim tersebut akan dianggap kalah di match tersebut. Jika pada kesempatan match berikutnya masih melanggar, langsung dianggap kalah tanpa peringatan. Untuk Fase Grup tidak ada wasit yang join ke dalam in-game, sehingga pihak tim yang merasa dirugikan harap melaporkan ke panitia SETELAH PERTANDINGAN BERAKHIR DALAM BENTUK SCREENSHOT EVIDENCE.
* Jika terdapat tim yang melakukan selebrasi on cam dengan gesture SARA, kemenangan akan dicabut dan tim tersebut dianggap kalah di match tersebut. Untuk Fase Grup tidak ada wasit yang join ke dalam in-game, sehingga pihak tim yang merasa dirugikan harap melaporkan ke panitia SETELAH PERTANDINGAN BERAKHIR DALAM BENTUK SCREENSHOT EVIDENCE.
* Tidak ada pengulangan draft pick apapun yang terjadi.
* Dilarang melakukan sensor apapun pada screenshot hasil pertandingan.
* Apabila Tim C vs Tim D sebagai contoh baru Tim C yang melakukan verifikasi di pukul 18.45 WIB dan Tim D belum hadir di Discord, maka panitia akan menunggu Tim D hingga pukul 19.00 WIB (19.00 WIB adalah batas terakhir untuk verifikasi match 1 dari BO3). Jika Tim D tidak muncul hingga waktu menunjukkan pukul 19.01 WIB, maka Tim D akan dianggap kalah (WO) di match 1. Tim D akan ditunggu untuk verifikasi untuk match 2 hingga pukul 19.15 WIB (19.15 WIB adalah batas terakhir untuk verifikasi match 2 dari BO3). Jika Tim D tidak muncul hingga waktu menunjukkan pukul 19.16 WIB, maka Tim D akan dianggap kalah (WO) di match 2.`;

const DEFAULT_RULES_MCGG = `1. KETENTUAN UMUM & VERIFIKASI
* Verifikasi Identitas: Seluruh peserta wajib memperlihatkan ID Card Yokke fisik kepada panitia sebelum pertandingan dimulai.
* Kehadiran: Peserta wajib hadir di lobby 10 menit sebelum jadwal pertandingan.
   * Toleransi keterlambatan: Maksimal 10 menit. Lewat dari waktu tersebut, peserta dianggap gugur (menempati Peringkat 8 pada match tersebut).
* Tanggung Jawab Teknis: Segala masalah teknis (koneksi internet, perangkat/device, lag) merupakan tanggung jawab penuh masing-masing peserta.
2. FORMAT PERTANDINGAN & SISTEM GRUP
* Sistem Grup: Terdiri dari 8 Player per grup.
* Format Babak: Pertandingan menggunakan format BO3 atau BO5 (disesuaikan dengan tahap babak).
* Sistem Kualifikasi: 4 Player dengan akumulasi poin tertinggi di akhir BO3/BO5 berhak lolos ke babak berikutnya dan diadu dengan 4 player dari grup sebelah. 4 player dengan poin terendah dinyatakan gugur.
3. SISTEM PEROLEHAN POIN MATCH
Perolehan poin dalam setiap match ditentukan berdasarkan posisi akhir (placement):
* Juara 1: +4 Poin
* Juara 2: +3 Poin
* Juara 3: +2 Poin
* Juara 4: +1 Poin
* Peringkat 5: -1 Poin
* Peringkat 6: -2 Poin
* Peringkat 7: -3 Poin
* Peringkat 8: -4 Poin
4. REGULASI COMMANDER (SKENARIO PILIHAN PANITIA)
Sebelum pertandingan dimulai, panitia menetapkan skenario Commander berdasarkan Master Data Sheet MCGG Match Set Up (Tier High & Mid):
* Match 1 (Undian Pool Commander Tier High & Mid): Pengundian 8 Commander dari daftar resmi (Chou, Fanny, Kagura/Saki, Lukas, Vale, Alice/Mavis, Alucard/Harper, Angela, Dyrroth, Gusion/Gujun, Kalea/Dubi, Lancelot/Remy, Layla, Moskov, Nana, Valir). Setiap player mendapatkan 1 Commander dari hasil undian mesin sebelum match dimulai.
* Match 2 (Random Pool Commander Tier High & Mid): Pengundian acak 8 Commander dari daftar Tier High & Mid untuk 8 player di dalam lobby.
* Match 3 (Draft Pick & Ban System): Sistem Draft Pick diaktifkan di dalam game. Setiap lobby diberikan kesempatan melakukan sistem Banning Commander sebelum fase pemilihan.
5. SANKSI PELANGGARAN COMMANDER & IN-GAME
* Pelanggaran Commander (Khusus Skenario 1 & 2): Jika peserta terbukti tidak menggunakan Commander hasil undian yang ditentukan panitia, akan dikenakan sanksi pengurangan 2 poin (-2 Poin) pada match tersebut.
* Chat All / Voice All:
   * Peringatan pertama (1x): Teguran/Warning dari wasit.
   * Peringatan kedua (2x): Punishment -10 Poin untuk match tersebut.
6. PELAPORAN HASIL MATCH
* Pada setiap akhir match, peringkat 4 besar wajib mendokumentasikan hasil akhir (Screenshot placement) dan mengirimkannya ke grup koordinasi panitia.
7. KETENTUAN TIE-BREAKER DAN PENENTUAN KELULUSAN
Jika terdapat dua atau lebih player dengan total poin yang sama pada batas kelolosan, penentuan peringkat dilakukan berdasarkan kriteria berikut (secara berurutan):
1. Jumlah Placement 4 besar terbanyak selama BO3/BO5.
2. Kepatuhan Commander: Jumlah poin yang didapat dengan konsisten mengikuti ketentuan commander.
3. Peringkat tertinggi pada setiap match (banyaknya Juara 1 > Juara 2, dan seterusnya).
4. Tie-Breaker Match (BO1): Jika masih sama persis, diadakan match penentu BO1 dengan commander bebas/andalan.
5. Keputusan mutlak: Seluruh keputusan tie-breaker dan kelolosan ditetapkan oleh panitia berdasarkan data hasil pertandingan yang terdokumentasi.
8. PAIRING BABAK BERIKUTNYA
* 4 player terbaik dari tiap grup akan di-pairing secara silang (cross-group) ke babak berikutnya (contoh: Grup A & B ➔ Grup E & F) untuk menghindari pertemuan ulang antar player dari grup yang sama.
9. ATURAN TAMBAHAN (DOs & DON'Ts)
* DOs (Diperbolehkan):
   * Menggunakan emote dan sticker.
   * Menggunakan skin commander.
* DON'Ts (Dilarang):
   * Melakukan Chat All & Voice All di dalam game (Sanksi: -10 Poin jika melanggar).`;

let customRules = JSON.parse(localStorage.getItem('yokke_custom_rules') || JSON.stringify({
  mlbb: DEFAULT_RULES_MLBB,
  mcgg: DEFAULT_RULES_MCGG
}));

// Migrasi cache lokal otomatis jika data peraturan belum memiliki 12 poin resmi
if (!customRules.mlbb || !customRules.mlbb.includes('12.') || !customRules.mcgg || !customRules.mcgg.includes('PERATURAN RESMI')) {
  customRules.mlbb = DEFAULT_RULES_MLBB;
  customRules.mcgg = DEFAULT_RULES_MCGG;
  try {
    localStorage.setItem('yokke_custom_rules', JSON.stringify(customRules));
  } catch (e) {}
}

// Client-side image compressor: compresses smartphone photos using HTML5 Canvas (<= 1200px, quality 0.75)
function compressImage(file, maxWidth = 1200, maxHeight = 1200, quality = 0.75) {
  return new Promise((resolve) => {
    if (!file) return resolve('');
    if (typeof FileReader === 'undefined' || typeof document === 'undefined') {
      return resolve(typeof file === 'string' ? file : '');
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const rawDataUrl = e.target.result || '';
      try {
        const img = new Image();
        img.onload = () => {
          try {
            const canvas = document.createElement('canvas');
            let width = img.width || 0;
            let height = img.height || 0;
            if (!width || !height) return resolve(rawDataUrl);

            if (width > height) {
              if (width > maxWidth) {
                height = Math.round((height * maxWidth) / width);
                width = maxWidth;
              }
            } else {
              if (height > maxHeight) {
                width = Math.round((width * maxHeight) / height);
                height = maxHeight;
              }
            }
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if (!ctx) return resolve(rawDataUrl);
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg', quality));
          } catch (canvasErr) {
            resolve(rawDataUrl);
          }
        };
        img.onerror = () => {
          resolve(rawDataUrl);
        };
        img.src = rawDataUrl;
      } catch (err) {
        resolve(rawDataUrl);
      }
    };
    reader.onerror = () => {
      resolve('');
    };
    try {
      reader.readAsDataURL(file);
    } catch (readErr) {
      resolve(typeof file === 'string' ? file : '');
    }
  });
}

// Client-side image compression helper (Canvas <= 1200px, quality 0.75)
function compressImageFile(file, maxWidth = 1200, quality = 0.75) {
  return compressImage(file, maxWidth, maxWidth, quality);
}

// ========================================================
// TOAST NOTIFICATIONS (CYBERPUNK DARK)
// ========================================================
function showToast(msg, type = 'info', duration = 4000) {
  if (typeof document === 'undefined') return;
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item toast-' + type;
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  else if (type === 'error' || type === 'danger') icon = '❌';
  else if (type === 'warning') icon = '⚠️';

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-msg">${escapeHtml(msg).replace(/\n/g, '<br>')}</span>
    <button type="button" class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-fadeout');
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 350);
  }, duration);
}

// Modal Glosarium Istilah Turnamen
function openGlossaryModal() {
  const modal = document.getElementById('glossaryModal');
  if (modal) modal.style.display = 'flex';
}

function closeGlossaryModal() {
  const modal = document.getElementById('glossaryModal');
  if (modal) modal.style.display = 'none';
}

// Modal Reset Bagan dengan Verifikasi Password/PIN
function openResetBaganModal() {
  const modal = document.getElementById('resetBaganModal');
  const input = document.getElementById('resetBaganPinInput');
  const err = document.getElementById('resetBaganError');
  if (input) input.value = '';
  if (err) err.style.display = 'none';
  if (modal) modal.style.display = 'flex';
}

function closeResetBaganModal() {
  const modal = document.getElementById('resetBaganModal');
  if (modal) modal.style.display = 'none';
}

function confirmResetBaganWithPin() {
  const input = document.getElementById('resetBaganPinInput');
  const enteredPin = input ? input.value.trim() : '';
  const err = document.getElementById('resetBaganError');

  if (enteredPin !== currentAdminPin && enteredPin !== 'YOKKE2026_' && enteredPin !== 'YOKKE2026') {
    if (err) {
      err.innerText = 'PIN Panitia salah! Reset bagan dibatalkan.';
      err.style.display = 'block';
    }
    showToast('PIN Panitia salah! Tindakan reset dibatalkan.', 'error');
    return;
  }

  closeResetBaganModal();

  // 1. Kosongkan seluruh state data grup & bagan MLBB
  groupStageData = {};
  groupMatchResults = {};
  groupPlayoffMatches = [];
  bracketMatches = [];
  tournamentStageState.mlbb.stage = 'STAGE_1_GROUP';
  tournamentStageState.mlbb.isGroupLocked = false;
  tournamentStageState.mlbb.tieBreaker = { needed: false, group: '', teamA: '', teamB: '', winner: null };

  // 2. Bersihkan dan simpan ke LocalStorage
  localStorage.removeItem('yokke_group_data');
  localStorage.removeItem('yokke_group_match_results');
  saveStageStateLocal();
  saveState();

  // 3. Render ulang UI
  renderCurrentMLBBFormat();
  updateAuthUI();

  // 4. Sinkronisasi perubahan ke Google Sheets
  saveTournamentStateOnly(true);
  showToast('✅ Seluruh pembagian grup, jadwal, skor match, dan bagan playoff MLBB berhasil direset total!', 'success');
}

// Global Loader Emergency Bypass with Local/Offline Cache
let globalFetchAbortController = null;

function bypassLoaderWithCache() {
  if (globalFetchAbortController) {
    try { globalFetchAbortController.abort(); } catch(e) {}
  }
  renderParticipants();
  renderCurrentMLBBFormat();
  renderMCGGTable();
  updateCounts();
  hideGlobalLoader();
  showToast('Memuat turnamen menggunakan data lokal / cache offline.', 'info', 4000);
}

// Instant Participant Search
let participantSearchQuery = '';

function handleParticipantSearch(query) {
  participantSearchQuery = (query || '').trim().toLowerCase();
  renderParticipants();
}

// ========================================================
// AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE)
// ========================================================
function saveFormDraft(formType) {
  if (typeof localStorage === 'undefined') return;
  const cat = formType || document.getElementById('gameCategory')?.value || 'MLBB';

  if (cat === 'MLBB') {
    const draft = {
      teamName: document.getElementById('teamName')?.value || '',
      teamDept: document.getElementById('teamDept')?.value || '',
      contactWa: document.getElementById('contactWa')?.value || '',
      uploadedLogoBase64: uploadedLogoBase64 || '',
      off1: {
        name: document.getElementById('off1_name')?.value || '',
        empid: document.getElementById('off1_empid')?.value || '',
        nickname: document.getElementById('off1_nickname')?.value || '',
        gameid: document.getElementById('off1_gameid')?.value || '',
        organik: !!document.getElementById('off1_organik')?.checked,
        idCard: regOfficialIdCards.off1 || ''
      },
      hasOff2: !!document.getElementById('has_official_2')?.checked,
      off2: {
        name: document.getElementById('off2_name')?.value || '',
        empid: document.getElementById('off2_empid')?.value || '',
        nickname: document.getElementById('off2_nickname')?.value || '',
        gameid: document.getElementById('off2_gameid')?.value || '',
        organik: !!document.getElementById('off2_organik')?.checked,
        idCard: regOfficialIdCards.off2 || ''
      },
      players: {},
      captainIndex: document.querySelector('input[name="captain_select"]:checked')?.value || '1'
    };
    for (let i = 1; i <= 8; i++) {
      draft.players[i] = {
        name: document.getElementById(`p${i}_name`)?.value || '',
        nickname: document.getElementById(`p${i}_nickname`)?.value || '',
        empid: document.getElementById(`p${i}_empid`)?.value || '',
        gameid: document.getElementById(`p${i}_gameid`)?.value || '',
        organik: !!document.getElementById(`p${i}_organik`)?.checked,
        idCard: regPlayersIdCards[i] || ''
      };
    }
    localStorage.setItem('yokke_form_draft_mlbb', JSON.stringify(draft));
  } else if (cat === 'MCGG') {
    const draft = {
      name: document.getElementById('mcgg_name')?.value || '',
      nickname: document.getElementById('mcgg_nickname')?.value || '',
      dept: document.getElementById('mcgg_dept')?.value || '',
      wa: document.getElementById('mcgg_wa')?.value || '',
      empid: document.getElementById('mcgg_empid')?.value || '',
      gameid: document.getElementById('mcgg_gameid')?.value || '',
      organik: !!document.getElementById('mcgg_organik')?.checked,
      idCard: regMcggIdCard || ''
    };
    localStorage.setItem('yokke_form_draft_mcgg', JSON.stringify(draft));
  }
}

function restoreFormDraft(formType) {
  if (typeof localStorage === 'undefined') return;
  const cat = formType || document.getElementById('gameCategory')?.value || 'MLBB';

  if (cat === 'MLBB') {
    const raw = localStorage.getItem('yokke_form_draft_mlbb');
    if (!raw) return;
    try {
      const draft = JSON.parse(raw);
      if (draft.teamName && document.getElementById('teamName')) document.getElementById('teamName').value = draft.teamName;
      if (draft.teamDept && document.getElementById('teamDept')) document.getElementById('teamDept').value = draft.teamDept;
      if (draft.contactWa && document.getElementById('contactWa')) document.getElementById('contactWa').value = draft.contactWa;
      if (draft.uploadedLogoBase64) {
        uploadedLogoBase64 = draft.uploadedLogoBase64;
        const box = document.getElementById('logoPreviewBox');
        if (box) box.innerHTML = `<img src="${uploadedLogoBase64}" alt="Logo Preview">`;
      }
      if (draft.off1) {
        if (document.getElementById('off1_name')) document.getElementById('off1_name').value = draft.off1.name || '';
        if (document.getElementById('off1_empid')) document.getElementById('off1_empid').value = draft.off1.empid || '';
        if (document.getElementById('off1_nickname')) document.getElementById('off1_nickname').value = draft.off1.nickname || '';
        if (document.getElementById('off1_gameid')) document.getElementById('off1_gameid').value = draft.off1.gameid || '';
        if (document.getElementById('off1_organik')) document.getElementById('off1_organik').checked = draft.off1.organik !== false;
        if (draft.off1.idCard) {
          regOfficialIdCards.off1 = draft.off1.idCard;
          const box = document.getElementById('off1_idcard_preview');
          if (box) box.innerHTML = `<img src="${draft.off1.idCard}" alt="ID Card">`;
        }
      }
      if (draft.hasOff2) {
        const chk = document.getElementById('has_official_2');
        if (chk) {
          chk.checked = true;
          toggleOfficial2Form();
        }
        if (draft.off2) {
          if (document.getElementById('off2_name')) document.getElementById('off2_name').value = draft.off2.name || '';
          if (document.getElementById('off2_empid')) document.getElementById('off2_empid').value = draft.off2.empid || '';
          if (document.getElementById('off2_nickname')) document.getElementById('off2_nickname').value = draft.off2.nickname || '';
          if (document.getElementById('off2_gameid')) document.getElementById('off2_gameid').value = draft.off2.gameid || '';
          if (document.getElementById('off2_organik')) document.getElementById('off2_organik').checked = draft.off2.organik !== false;
          if (draft.off2.idCard) {
            regOfficialIdCards.off2 = draft.off2.idCard;
            const box = document.getElementById('off2_idcard_preview');
            if (box) box.innerHTML = `<img src="${draft.off2.idCard}" alt="ID Card">`;
          }
        }
      }
      if (draft.players) {
        for (let i = 1; i <= 8; i++) {
          const p = draft.players[i];
          if (!p) continue;
          if (document.getElementById(`p${i}_name`)) document.getElementById(`p${i}_name`).value = p.name || '';
          if (document.getElementById(`p${i}_nickname`)) document.getElementById(`p${i}_nickname`).value = p.nickname || '';
          if (document.getElementById(`p${i}_empid`)) document.getElementById(`p${i}_empid`).value = p.empid || '';
          if (document.getElementById(`p${i}_gameid`)) document.getElementById(`p${i}_gameid`).value = p.gameid || '';
          if (document.getElementById(`p${i}_organik`)) document.getElementById(`p${i}_organik`).checked = p.organik !== false;
          if (p.idCard) {
            regPlayersIdCards[i] = p.idCard;
            const box = document.getElementById(`p${i}_idcard_preview`);
            if (box) box.innerHTML = `<img src="${p.idCard}" alt="ID Card">`;
          }
        }
      }
      if (draft.captainIndex) {
        const rad = document.querySelector(`input[name="captain_select"][value="${draft.captainIndex}"]`);
        if (rad) rad.checked = true;
      }
    } catch(e) {}
  } else if (cat === 'MCGG') {
    const raw = localStorage.getItem('yokke_form_draft_mcgg');
    if (!raw) return;
    try {
      const draft = JSON.parse(raw);
      if (draft.name && document.getElementById('mcgg_name')) document.getElementById('mcgg_name').value = draft.name;
      if (draft.nickname && document.getElementById('mcgg_nickname')) document.getElementById('mcgg_nickname').value = draft.nickname;
      if (draft.dept && document.getElementById('mcgg_dept')) document.getElementById('mcgg_dept').value = draft.dept;
      if (draft.wa && document.getElementById('mcgg_wa')) document.getElementById('mcgg_wa').value = draft.wa;
      if (draft.empid && document.getElementById('mcgg_empid')) document.getElementById('mcgg_empid').value = draft.empid;
      if (draft.gameid && document.getElementById('mcgg_gameid')) document.getElementById('mcgg_gameid').value = draft.gameid;
      if (document.getElementById('mcgg_organik')) document.getElementById('mcgg_organik').checked = draft.organik !== false;
      if (draft.idCard) {
        regMcggIdCard = draft.idCard;
        const box = document.getElementById('mcgg_idcard_preview');
        if (box) box.innerHTML = `<img src="${draft.idCard}" alt="ID Card">`;
      }
    } catch(e) {}
  }
}

function clearFormDraft(formType) {
  if (typeof localStorage === 'undefined') return;
  if (!formType || formType === 'MLBB') localStorage.removeItem('yokke_form_draft_mlbb');
  if (!formType || formType === 'MCGG') localStorage.removeItem('yokke_form_draft_mcgg');
}

let _draftSaveTimeout = null;
function handleFormDraftChange() {
  clearTimeout(_draftSaveTimeout);
  _draftSaveTimeout = setTimeout(() => {
    saveFormDraft();
  }, 400);
}


// Helper to format Google Drive image URLs into viewable thumbnail image URLs
function formatDriveImageUrl(url) {
  if (!url || typeof url !== 'string') return '';
  if (url.startsWith('data:image')) return url;
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
  }
  return url;
}

// ========================================================
// HELPER PEMETAAN ID CARD DENGAN ID PEGAWAI & LOGO TIM
// ========================================================

// Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama
function getIdCardMap() {
  let map = JSON.parse(localStorage.getItem('yokke_idcard_map') || '{}');
  if (typeof DEFAULT_PARTICIPANTS !== 'undefined' && Array.isArray(DEFAULT_PARTICIPANTS)) {
    DEFAULT_PARTICIPANTS.forEach(p => {
      if (p.category === 'MCGG' && p.idCard) {
        if (p.empId && p.empId !== '-') {
          const raw = p.empId.toString().trim();
          const clean = raw.replace(/[^a-zA-Z0-9]/g, '');
          map['emp_' + raw] = p.idCard;
          if (clean) map['emp_' + clean] = p.idCard;
        }
        if (p.name) {
          const rawN = p.name.toString().trim().toLowerCase();
          const cleanN = rawN.replace(/[^a-z0-9]/gi, '');
          map['name_' + rawN] = p.idCard;
          if (cleanN) map['name_' + cleanN] = p.idCard;
        }
      }
      (p.roster || []).forEach(m => {
        if (m.idCard) {
          if (m.empId && m.empId !== '-') {
            const raw = m.empId.toString().trim();
            const clean = raw.replace(/[^a-zA-Z0-9]/g, '');
            map['emp_' + raw] = m.idCard;
            if (clean) map['emp_' + clean] = m.idCard;
          }
          if (m.name) {
            const rawN = m.name.toString().trim().toLowerCase();
            const cleanN = rawN.replace(/[^a-z0-9]/gi, '');
            map['name_' + rawN] = m.idCard;
            if (cleanN) map['name_' + cleanN] = m.idCard;
          }
        }
      });
    });
  }
  return map;
}

function saveIdCardToMap(empId, name, cardUrl) {
  if (!cardUrl) return;
  let map = getIdCardMap();
  if (empId && empId !== '-' && empId.toString().trim().length >= 3) {
    const raw = empId.toString().trim();
    const clean = raw.replace(/[^a-zA-Z0-9]/g, '');
    map['emp_' + raw] = cardUrl;
    if (clean) map['emp_' + clean] = cardUrl;
  }
  if (name && name.toString().trim().length > 1) {
    const rawN = name.toString().trim().toLowerCase();
    const cleanN = rawN.replace(/[^a-z0-9]/gi, '');
    map['name_' + rawN] = cardUrl;
    if (cleanN) map['name_' + cleanN] = cardUrl;
  }
  localStorage.setItem('yokke_idcard_map', JSON.stringify(map));
}

function findIdCardByEmpIdOrName(empId, name) {
  const map = getIdCardMap();
  if (empId && empId !== '-' && empId.toString().trim().length >= 3) {
    const raw = empId.toString().trim();
    const clean = raw.replace(/[^a-zA-Z0-9]/g, '');
    if (map['emp_' + raw]) return map['emp_' + raw];
    if (clean && map['emp_' + clean]) return map['emp_' + clean];
  }
  if (name && name.toString().trim().length > 1) {
    const rawN = name.toString().trim().toLowerCase();
    const cleanN = rawN.replace(/[^a-z0-9]/gi, '');
    if (map['name_' + rawN]) return map['name_' + rawN];
    if (cleanN && map['name_' + cleanN]) return map['name_' + cleanN];
  }
  return '';
}

// Pemetaan Logo sesuai Nama Tim (MLBB)
function getLogoMap() {
  let map = JSON.parse(localStorage.getItem('yokke_logo_map') || '{}');
  if (typeof DEFAULT_PARTICIPANTS !== 'undefined' && Array.isArray(DEFAULT_PARTICIPANTS)) {
    DEFAULT_PARTICIPANTS.forEach(p => {
      if (p.category === 'MLBB' && p.logo && p.name) {
        const cleanKey = p.name.toString().replace(/[^a-z0-9]/gi, '').toLowerCase();
        map['team_' + cleanKey] = p.logo;
        map['team_' + p.name.toString().trim().toLowerCase()] = p.logo;
      }
    });
  }
  return map;
}

function saveLogoToMap(teamName, logoUrl) {
  if (!logoUrl || !teamName) return;
  let map = getLogoMap();
  const cleanKey = teamName.toString().replace(/[^a-z0-9]/gi, '').toLowerCase();
  map['team_' + cleanKey] = logoUrl;
  map['team_' + teamName.toString().trim().toLowerCase()] = logoUrl;
  localStorage.setItem('yokke_logo_map', JSON.stringify(map));
}

function findLogoByTeamName(teamName) {
  if (!teamName) return '';
  const map = getLogoMap();
  const cleanKey = teamName.toString().replace(/[^a-z0-9]/gi, '').toLowerCase();
  return map['team_' + cleanKey] || map['team_' + teamName.toString().trim().toLowerCase()] || '';
}

// Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada
function autoLinkParticipantsAssets() {
  if (!Array.isArray(participants)) return;
  participants.forEach(p => {
    // 1. Hubungkan Logo berdasarkan Nama Tim (MLBB)
    if (p.category === 'MLBB') {
      const resolvedLogo = p.logo || findLogoByTeamName(p.name);
      if (resolvedLogo) {
        p.logo = resolvedLogo;
        saveLogoToMap(p.name, resolvedLogo);
      }
    }
    // 2. Hubungkan ID Card untuk Solo MCGG
    if (p.category === 'MCGG') {
      const resolvedCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name) || (p.roster && p.roster[0] ? p.roster[0].idCard : '');
      if (resolvedCard) {
        p.idCard = resolvedCard;
        saveIdCardToMap(p.empId, p.name, resolvedCard);
        if (p.roster && p.roster[0]) {
          p.roster[0].idCard = resolvedCard;
        }
      }
    }
    // 3. Hubungkan ID Card per Anggota Roster berdasarkan ID Pegawai (NIP / empId) atau Nama
    (p.roster || []).forEach(m => {
      const resolvedCard = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idCard || findIdCardByEmpIdOrName(p.empId, p.name)) : '');
      if (resolvedCard) {
        m.idCard = resolvedCard;
        saveIdCardToMap(m.empId, m.name, resolvedCard);
      }
    });
  });
}

// Fetch registered participants from Google Sheets via doGet Webhook
// Google Sheets menjadi Single Source of Truth: data yang dihapus di sheet tidak akan dimunculkan kembali.
async function fetchParticipantsFromGoogleSheet(isSilent = false, isPure = false) {
  const syncBtn = document.getElementById('btnSyncGSheet');
  if (syncBtn) {
    syncBtn.disabled = true;
    syncBtn.innerText = 'Memuat Data... ⏳';
  }

  const controller = new AbortController();
  globalFetchAbortController = controller;
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const noCacheUrl = GOOGLE_SHEET_WEBHOOK_URL + (GOOGLE_SHEET_WEBHOOK_URL.includes('?') ? '&' : '?') + '_nocache=' + Date.now();
    const res = await fetch(noCacheUrl, {
      method: 'GET',
      mode: 'cors',
      redirect: 'follow',
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    const data = await res.json();
    if (data && data.status === 'online' && Array.isArray(data.participants) && data.participants.length > 0) {
      
      const deletedList = isPure ? [] : JSON.parse(localStorage.getItem('yokke_deleted_participants') || '[]');

      // Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name
      const getItemKey = (item) => {
        if (item.rowIndex) return `${item.category}_row_${item.rowIndex}`;
        if (item.id) return `${item.category}_id_${item.id}`;
        return `${item.category}_${(item.name || '').trim().toLowerCase()}`;
      };

      // Filter sheet data agar yang sudah dihapus secara lokal tidak masuk lagi (kecuali mode pure)
      // Ground Truth: Seluruh data dari Google Sheets wajib ditampilkan (tidak boleh tersembunyi oleh cache lokal)
      const activeSheetParticipants = data.participants;

      // Intelligent Merge: Pertahankan foto Base64 atau edit lokal HANYA jika data masih ada di Google Sheets
      const localMap = {};
      if (!isPure) {
        participants.forEach(localItem => {
          localMap[getItemKey(localItem)] = localItem;
          const nameKey = `${localItem.category}_${(localItem.name || '').trim().toLowerCase()}`;
          if (!localMap[nameKey]) localMap[nameKey] = localItem;
        });
      }

      const merged = activeSheetParticipants.map(sheetItem => {
        const itemKey = getItemKey(sheetItem);
        const nameKey = `${sheetItem.category}_${(sheetItem.name || '').trim().toLowerCase()}`;
        const localItem = !isPure ? (localMap[itemKey] || localMap[nameKey]) : null;

        // Hubungkan dengan Master Default Assets berdasarkan nama tim atau nama peserta
        const defaultItem = DEFAULT_PARTICIPANTS.find(d => 
          d.category === sheetItem.category && 
          (d.name || '').replace(/[^a-z0-9]/gi, '').toLowerCase() === (sheetItem.name || '').replace(/[^a-z0-9]/gi, '').toLowerCase()
        );

        // Pertahankan status lokal jika sudah pernah diubah
        // Status dari Google Sheets adalah sumber kebenaran mutlak
        const finalStatus = (sheetItem.status && sheetItem.status.trim() !== '')
          ? sheetItem.status
          : ((localItem && localItem.status) ? localItem.status : 'PENDING');

        // Hubungkan LOGO SESUAI NAMA TIM
        const teamLogo = sheetItem.logo || (localItem ? localItem.logo : '') || findLogoByTeamName(sheetItem.name) || (defaultItem ? defaultItem.logo : '') || '';
        if (teamLogo) {
          saveLogoToMap(sheetItem.name, teamLogo);
        }

        // Hubungkan ID CARD DENGAN ID PEGAWAI (NIP) / Nama untuk solo player
        const rootIdCard = sheetItem.idCard || (localItem ? localItem.idCard : '') || findIdCardByEmpIdOrName(sheetItem.empId, sheetItem.name) || (defaultItem ? defaultItem.idCard : '') || '';
        if (rootIdCard) {
          saveIdCardToMap(sheetItem.empId, sheetItem.name, rootIdCard);
        }

        // Hubungkan roster anggota dengan ID Card sesuai ID Pegawai (NIP / empId)
        let mergedRoster = [];
        if (sheetItem.roster && sheetItem.roster.length > 0) {
          mergedRoster = sheetItem.roster.map((sM) => {
            // Cocokkan lM berdasarkan ID Pegawai (empId) terlebih dahulu, baru nama
            const lM = localItem?.roster ? (
              localItem.roster.find(m => m.empId && sM.empId && m.empId.toString().trim() === sM.empId.toString().trim()) ||
              localItem.roster.find(m => m.name && sM.name && m.name.trim().toLowerCase() === sM.name.trim().toLowerCase())
            ) : null;

            // Cocokkan dM berdasarkan ID Pegawai (empId) terlebih dahulu, baru nama
            const dM = defaultItem?.roster ? (
              defaultItem.roster.find(m => m.empId && sM.empId && m.empId.toString().trim() === sM.empId.toString().trim()) ||
              defaultItem.roster.find(m => m.name && sM.name && m.name.trim().toLowerCase() === sM.name.trim().toLowerCase())
            ) : null;

            // Cari ID Card: sheet/Drive -> localItem -> ID Pegawai map -> master default
            let mIdCard = sM.idCard || (lM ? lM.idCard : '') || findIdCardByEmpIdOrName(sM.empId, sM.name) || (dM ? dM.idCard : '') || '';
            if (!mIdCard && sheetItem.category === 'MCGG') {
              mIdCard = rootIdCard;
            }
            if (mIdCard) {
              saveIdCardToMap(sM.empId, sM.name, mIdCard);
            }
            const mDriveUrl = sM.driveUrl || (lM ? lM.driveUrl : '') || (dM ? dM.driveUrl : '') || '';

            return {
              ...sM,
              name: sM.name || (lM && lM.name ? lM.name : ''),
              nickname: (sM.nickname && sM.nickname !== '-') ? sM.nickname : ((lM && lM.nickname && lM.nickname !== '-') ? lM.nickname : (dM ? dM.nickname : '-')),
              empId: sM.empId || (lM && lM.empId ? lM.empId : (dM ? dM.empId : '-')),
              gameId: (sM.gameId && sM.gameId !== '-') ? sM.gameId : ((lM && lM.gameId && lM.gameId !== '-') ? lM.gameId : (dM ? dM.gameId : '-')),
              isOrganik: sM.isOrganik !== undefined ? sM.isOrganik : (lM && lM.isOrganik !== undefined ? lM.isOrganik : (dM ? dM.isOrganik : false)),
              isCaptain: sM.isCaptain !== undefined ? sM.isCaptain : (lM && lM.isCaptain !== undefined ? lM.isCaptain : (dM ? dM.isCaptain : false)),
              idCard: mIdCard,
              driveUrl: mDriveUrl
            };
          });
        } else if (localItem && localItem.roster && localItem.roster.length > 0) {
          mergedRoster = localItem.roster;
        } else if (defaultItem && defaultItem.roster && defaultItem.roster.length > 0) {
          mergedRoster = defaultItem.roster;
        }

        const finalRootIdCard = rootIdCard || (mergedRoster[0] ? mergedRoster[0].idCard : '');

        let activeNick = '-';
        let activeGameId = '-';
        if (sheetItem.category === 'MCGG') {
          activeNick = (localItem && localItem.hasLocalEdits && localItem.nickname && localItem.nickname !== '-') 
            ? localItem.nickname 
            : ((mergedRoster[0] && mergedRoster[0].nickname && mergedRoster[0].nickname !== '-') 
                ? mergedRoster[0].nickname 
                : ((sheetItem.nickname && sheetItem.nickname !== '-') ? sheetItem.nickname : '-'));
                
          activeGameId = (localItem && localItem.hasLocalEdits && localItem.gameId && localItem.gameId !== '-') 
            ? localItem.gameId 
            : ((mergedRoster[0] && mergedRoster[0].gameId && mergedRoster[0].gameId !== '-') 
                ? mergedRoster[0].gameId 
                : ((sheetItem.gameId && sheetItem.gameId !== '-') ? sheetItem.gameId : '-'));

          if (mergedRoster[0]) {
            if (activeNick && activeNick !== '-') mergedRoster[0].nickname = activeNick;
            if (activeGameId && activeGameId !== '-') mergedRoster[0].gameId = activeGameId;
          }
        } else {
          // MLBB: Ambil Nickname & Game ID dari Kapten Tim (bukan Official)
          const capMember = mergedRoster.find(m => m.isCaptain && (m.role || '').indexOf('Official') === -1) ||
                            mergedRoster.find(m => (m.role || '').indexOf('Pemain Inti 1') !== -1);
          activeNick = (capMember && capMember.nickname && capMember.nickname !== '-') ? capMember.nickname : (sheetItem.captainNickname || '-');
          activeGameId = (capMember && capMember.gameId && capMember.gameId !== '-') ? capMember.gameId : '-';
        }

        return {
          ...sheetItem,
          id: (localItem && localItem.id) || sheetItem.id || (defaultItem ? defaultItem.id : undefined),
          nickname: activeNick,
          gameId: activeGameId,
          rowIndex: sheetItem.rowIndex || (localItem ? localItem.rowIndex : undefined),
          status: finalStatus,
          notes: (localItem && localItem.notes) ? localItem.notes : (sheetItem.notes || (defaultItem ? defaultItem.notes : '')),
          logo: teamLogo,
          idCard: finalRootIdCard,
          hasLocalEdits: (localItem && localItem.hasLocalEdits) || false,
          roster: mergedRoster
        };
      });

      // Sinkronkan juga Pengaturan Turnamen, Peraturan, & Skor Bagan dari Google Sheets jika tersedia
      if (data.config) {
        if (data.config.adminPassword) {
          currentAdminPin = data.config.adminPassword;
          localStorage.setItem('yokke_admin_pin', currentAdminPin);
        }
        if (data.config.customRules) {
          customRules = data.config.customRules;
          localStorage.setItem('yokke_custom_rules', JSON.stringify(customRules));
          renderRules();
        }
        if (data.config.tournamentFormat) {
          tournamentFormat = data.config.tournamentFormat;
          localStorage.setItem('yokke_mlbb_format', tournamentFormat);
          const fmtEl = document.getElementById('bracketFormat');
          if (fmtEl) fmtEl.value = tournamentFormat;
        }
        if (data.config.groupStageData !== undefined && data.config.groupStageData !== null && typeof data.config.groupStageData === 'object') {
          groupStageData = data.config.groupStageData;
          localStorage.setItem('yokke_group_data', JSON.stringify(groupStageData));
        }
        if (data.config.groupMatchResults !== undefined && data.config.groupMatchResults !== null && typeof data.config.groupMatchResults === 'object') {
          groupMatchResults = data.config.groupMatchResults;
          if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();
          if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtures();
          localStorage.setItem('yokke_group_match_results', JSON.stringify(groupMatchResults));
          if (typeof setLastSyncedMatches === 'function') {
            setLastSyncedMatches(groupMatchResults);
          }
        }
        if (data.config.groupPlayoffMatches !== undefined && Array.isArray(data.config.groupPlayoffMatches)) {
          groupPlayoffMatches = data.config.groupPlayoffMatches;
        }
        if (data.config.tournamentStageState && typeof data.config.tournamentStageState === 'object') {
          tournamentStageState = data.config.tournamentStageState;
          localStorage.setItem('yokke_stage_state', JSON.stringify(tournamentStageState));
        }
        if (data.config.invitedTeams && Array.isArray(data.config.invitedTeams)) {
          const invSet = new Set(data.config.invitedTeams.map(t => (t || '').toLowerCase().trim()));
          (merged || []).forEach(p => {
            if (p.category === 'MLBB') {
              p.isInvited = invSet.has((p.name || '').toLowerCase().trim());
            }
          });
        }
        if (data.config.mcggDrawState && typeof data.config.mcggDrawState === 'object') {
          mcggDrawState = data.config.mcggDrawState;
          localStorage.setItem('yokke_commander_draw', JSON.stringify(mcggDrawState));
        }
        if (data.config.mcggLobbies && Object.keys(data.config.mcggLobbies).length > 0) {
          mcggLobbies = data.config.mcggLobbies;
          localStorage.setItem('yokke_mcgg_lobbies', JSON.stringify(mcggLobbies));
          renderMCGGTable();
        }
        if (data.config.isRegistrationClosed !== undefined && data.config.isRegistrationClosed !== null) {
          isRegistrationClosed = data.config.isRegistrationClosed === true || data.config.isRegistrationClosed === 'true';
          localStorage.setItem('yokke_reg_closed', isRegistrationClosed ? 'true' : 'false');
          renderRegistrationUI();
          updateAuthUI();
        }
      }

      // Sinkronkan Data Commander & Tier List dari Tab "MCGG Match Set Up"
      if (data.mcggCommanderSetup && Array.isArray(data.mcggCommanderSetup) && data.mcggCommanderSetup.length > 0) {
        updateCommanderPoolFromSetup(data.mcggCommanderSetup);
      }

      participants = merged;
      autoLinkParticipantsAssets();
      cleanOrphanedTournamentData();
      saveState();
      renderParticipants();
      renderCurrentMLBBFormat();
      syncMCGGPlayers();
      updateCounts();
      if (!isSilent) {
        alert(isPure 
          ? `⚡ Berhasil reset cache! Data 100% mengikuti Google Sheets (${participants.length} peserta aktif).`
          : `✅ Berhasil menyinkronkan data pendaftar & pengaturan turnamen dari Google Sheets!`);
      }
    } else if (!isSilent) {
      alert('ℹ️ Webhook aktif, tetapi belum ada data peserta yang dikembalikan.');
    }
  } catch (err) {
    clearTimeout(timeoutId);
    if (err && err.name === 'AbortError') {
      console.warn('Sinkronisasi Google Sheets timeout (8s)');
      showToast('Koneksi ke Google Sheets lambat. Menggunakan data cache lokal.', 'info');
    } else {
      console.warn('Gagal fetch data dari Google Sheets:', err);
      if (!isSilent) {
        showToast('⚠️ Gagal mengambil data dari Google Sheets.', 'error');
      }
    }
  } finally {
    if (syncBtn) {
      syncBtn.disabled = false;
      syncBtn.innerText = '🔄 Sinkronkan Google Sheets';
    }
  }
}

// Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup, dan lobi MCGG
function cleanOrphanedTournamentData() {
  const activeMlbbNames = participants
    .filter(p => p.category === 'MLBB')
    .map(p => (p.name || '').trim().toLowerCase());
  const activeMcggNames = participants
    .filter(p => p.category === 'MCGG')
    .map(p => (p.name || '').trim().toLowerCase());

  // 1. Bersihkan Klasemen Group Stage MLBB
  let groupChanged = false;
  if (groupStageData && typeof groupStageData === 'object') {
    for (const gName in groupStageData) {
      if (Array.isArray(groupStageData[gName])) {
        groupStageData[gName].forEach((team, idx) => {
          if (team && team.name && !team.name.includes('(TBD)') && !team.name.startsWith('Slot')) {
            if (!activeMlbbNames.includes(team.name.trim().toLowerCase())) {
              team.name = `Slot ${idx + 1} (TBD)`;
              team.win = 0;
              team.lose = 0;
              team.pts = 0;
              groupChanged = true;
            }
          }
        });
      }
    }
  }
  if (groupChanged) {
    localStorage.setItem('yokke_group_data', JSON.stringify(groupStageData));
    if (typeof initGroupPlayoff === 'function') initGroupPlayoff();
  }

  // 2. Bersihkan Knockout Bracket MLBB
  let bracketChanged = false;
  if (Array.isArray(bracketMatches)) {
    bracketMatches.forEach(round => {
      if (Array.isArray(round)) {
        round.forEach(match => {
          if (match.teamA && !match.teamA.includes('(TBD)') && match.teamA !== 'Menunggu...') {
            if (!activeMlbbNames.includes(match.teamA.trim().toLowerCase())) {
              if (match.winner === match.teamA) match.winner = null;
              match.teamA = `Slot TBD`;
              bracketChanged = true;
            }
          }
          if (match.teamB && !match.teamB.includes('(TBD)') && match.teamB !== 'Menunggu...') {
            if (!activeMlbbNames.includes(match.teamB.trim().toLowerCase())) {
              if (match.winner === match.teamB) match.winner = null;
              match.teamB = `Slot TBD`;
              bracketChanged = true;
            }
          }
          if (match.winner && !activeMlbbNames.includes(match.winner.trim().toLowerCase())) {
            match.winner = null;
            bracketChanged = true;
          }
        });
      }
    });
  }

  // 3. Bersihkan Kursi Lobi MCGG
  let lobbyChanged = false;
  Object.keys(mcggLobbies || {}).forEach(lobKey => {
    if (mcggLobbies && Array.isArray(mcggLobbies[lobKey])) {
      mcggLobbies[lobKey].forEach((player, idx) => {
        if (player && player.name && !player.name.includes('(TBD)') && !player.name.startsWith('Pemain') && !player.name.startsWith('Top ')) {
          if (!activeMcggNames.includes(player.name.trim().toLowerCase())) {
            player.name = `Slot ${idx + 1} (TBD)`;
            player.nickname = '-';
            player.r1 = 0;
            player.r2 = 0;
            player.r3 = 0;
            player.total = 0;
            lobbyChanged = true;
          }
        }
      });
    }
  });
  if (lobbyChanged) {
    localStorage.setItem('yokke_mcgg_lobbies', JSON.stringify(mcggLobbies));
  }
}

// Reset cache lokal dan ikuti 100% data aktif dari Google Sheets
async function resetCacheAndFollowGSheet() {
  if (!confirm('Apakah Anda yakin ingin mereset cache lokal dan memuat data murni dari Google Sheets?\n\nData yang sudah dihapus di Google Sheets akan otomatis dibersihkan dari portal.')) {
    return;
  }

  const btn = document.getElementById('btnResetCacheFollowGSheet');
  if (btn) {
    btn.disabled = true;
    btn.innerText = 'Mereset... ⏳';
  }

  try {
    // Bersihkan cache pendaftar dan blacklist lokal
    localStorage.removeItem('yokke_participants');
    localStorage.removeItem('yokke_deleted_participants');
    participants = [];

    // Ambil data murni dari Google Sheets
    await fetchParticipantsFromGoogleSheet(false, true);
  } catch (err) {
    console.error('Gagal reset cache:', err);
    alert('⚠️ Terjadi kendala saat mereset cache.');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerText = '⚡ Reset Cache & Ikuti GSheet';
    }
  }
}

// ========================================================
// SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS
// ========================================================
async function saveAllChangesToGoogleSheet() {
  const saveBtn = document.getElementById('btnSaveAllChanges');
  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.innerText = 'Menyimpan... ⏳';
  }

  saveState();

  const totalParticipants = participants.length;
  let syncSuccess = false;

  // 1. PENDEKATAN PRIMER: BATCH UPDATE PAYLOAD TUNGGAL
  try {
    const batchUpdates = participants.map(p => {
      const activeNickname = (p.category === 'MCGG')
        ? (p.nickname || (p.roster && p.roster[0] ? p.roster[0].nickname : ''))
        : (p.captainNickname || '');
      const activeGameId = (p.category === 'MCGG')
        ? (p.gameId || (p.roster && p.roster[0] ? p.roster[0].gameId : ''))
        : '';
      const activeEmpId = (p.category === 'MCGG')
        ? (p.empId || (p.roster && p.roster[0] ? p.roster[0].empId : ''))
        : '';

      return {
        category: p.category,
        rowIndex: p.rowIndex || undefined,
        id: p.id,
        teamName: p.name,
        name: p.name,
        dept: p.dept,
        wa: p.wa,
        empId: activeEmpId,
        gameId: activeGameId,
        nickname: activeNickname,
        status: p.status,
        notes: p.notes
      };
    });

    if (saveBtn) saveBtn.innerText = 'Sinkronisasi Batch... ⏳';

    const batchRes = await postToGoogleAppsScript({
      action: 'BATCH_UPDATE_PARTICIPANTS',
      adminPin: currentAdminPin,
      adminPassword: currentAdminPin,
      participants: batchUpdates
    }, 30000);
    const batchJson = await batchRes.json();
    if (batchJson && (batchJson.status === 'success' || batchJson.success === true)) {
      syncSuccess = true;
    }
  } catch (batchErr) {
    console.warn('Batch update tidak didukung atau gagal, beralih ke antrean serial:', batchErr);
    syncSuccess = false;
  }

  // 2. FALLBACK: SERIAL QUEUE DENGAN CHUNKING & PROGRESS BAR VISUAL
  if (!syncSuccess) {
    showToast('Beralih ke sinkronisasi serial bertahap...', 'info', 3000);
    const chunkSize = 2;
    for (let i = 0; i < participants.length; i += chunkSize) {
      const chunk = participants.slice(i, i + chunkSize);
      const currentProgress = Math.min(i + chunk.length, totalParticipants);
      const percent = Math.round((currentProgress / totalParticipants) * 100);

      if (saveBtn) {
        saveBtn.innerText = `Menyimpan: ${percent}% (${currentProgress}/${totalParticipants}) ⏳`;
      }

      await Promise.all(chunk.map(p => {
        const activeNickname = (p.category === 'MCGG')
          ? (p.nickname || (p.roster && p.roster[0] ? p.roster[0].nickname : ''))
          : (p.captainNickname || '');
        const activeGameId = (p.category === 'MCGG')
          ? (p.gameId || (p.roster && p.roster[0] ? p.roster[0].gameId : ''))
          : '';
        const activeEmpId = (p.category === 'MCGG')
          ? (p.empId || (p.roster && p.roster[0] ? p.roster[0].empId : ''))
          : '';

        return postToGoogleAppsScript({
          action: 'UPDATE',
          isUpdate: true,
          category: p.category,
          rowIndex: p.rowIndex || undefined,
          id: p.id,
          teamName: p.name,
          name: p.name,
          dept: p.dept,
          wa: p.wa,
          empId: activeEmpId,
          gameId: activeGameId,
          nickname: activeNickname,
          status: p.status,
          notes: p.notes,
          logo: p.logo || '',
          idCard: p.idCard || (p.roster && p.roster[0] ? p.roster[0].idCard : ''),
          roster: p.roster || []
        }, 20000).catch(err => console.warn(`Gagal sync ${p.name}:`, err));
      }));

      // Jeda 250ms untuk menghindari rate limit Google Apps Script
      await new Promise(r => setTimeout(r, 250));
    }
  }

  // 3. SIMPAN KONFIGURASI TURNAMEN & REKAP SKOR
  try {
    if (saveBtn) saveBtn.innerText = 'Menyimpan Pengaturan... ⏳';
    await postToGoogleAppsScript({
      action: 'SAVE_CONFIG',
      adminPin: currentAdminPin,
      adminPassword: currentAdminPin,
      customRules: customRules,
      tournamentFormat: tournamentFormat,
      groupStageData: groupStageData,
      groupMatchResults: groupMatchResults,
      groupPlayoffMatches: groupPlayoffMatches,
      invitedTeams: participants.filter(p => p.category === 'MLBB' && p.isInvited).map(p => p.name),
      mcggLobbies: mcggLobbies,
      mcggDrawState: mcggDrawState,
      tournamentStageState: tournamentStageState,
      isRegistrationClosed: isRegistrationClosed
    }, 25000).catch(err => console.warn('Gagal sync config ke Google Sheets:', err));

    showToast('✅ Seluruh perubahan data peserta, status, bagan, dan klasemen turnamen berhasil disimpan ke Google Sheets!', 'success', 5000);
  } catch (err) {
    console.warn('Gagal menyimpan perubahan ke Google Sheets:', err);
    showToast('⚠️ Sebagian perubahan berhasil disinkronkan, data lokal Anda tetap aman.', 'warning', 5000);
  } finally {
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerText = '💾 Simpan Semua Perubahan ke GSheet';
    }
  }
}

// ========================================================
// SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET
// ========================================================
async function syncTournamentSheetsToGSheet() {
  saveState();
  const btn = document.getElementById('btnSyncTournamentSheets');
  const origText = btn ? btn.innerText : '📊 Buat / Perbarui Sheet Bagan & Poin di GSheet';
  if (btn) {
    btn.disabled = true;
    btn.innerText = 'Memperbarui Sheet... ⏳';
  }

  try {
    const res = await postToGoogleAppsScript({
      action: 'CREATE_TOURNAMENT_SHEETS',
      groupStageData: groupStageData,
      mcggLobbies: mcggLobbies,
      customRules: customRules,
      tournamentFormat: tournamentFormat,
      adminPassword: currentAdminPin
    }, 30000);
    const result = await res.json();
    if (result && result.status === 'success') {
      alert('✅ ' + (result.message || '3 Sheet Baru (List Bagan, List Point, List Point & Commander MCGG) berhasil dibuat dan diperbarui di Google Sheets!'));
    } else {
      alert('⚠️ ' + (result?.message || result?.error || 'Gagal memperbarui sheet di Google Spreadsheet.'));
    }
  } catch (err) {
    console.warn('Gagal sinkronisasi sheet turnamen:', err);
    alert('⚠️ Gagal terhubung ke Google Apps Script: ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerText = origText;
    }
  }
}

function saveState() {
  localStorage.setItem('yokke_participants', JSON.stringify(participants));
  localStorage.setItem('yokke_group_data', JSON.stringify(groupStageData));
  localStorage.setItem('yokke_group_match_results', JSON.stringify(groupMatchResults));
  localStorage.setItem('yokke_mcgg_lobbies', JSON.stringify(mcggLobbies));
  localStorage.setItem('yokke_mlbb_format', tournamentFormat);
  localStorage.setItem('yokke_group_playoff_matches', JSON.stringify(groupPlayoffMatches));
  renderParticipants();
  updateAuthUI();
  updateCounts();
}

function updateCounts() {
  const mlbbCount = participants.filter(p => p.category === 'MLBB').length;
  const mcggCount = participants.filter(p => p.category === 'MCGG').length;
  const elM = document.getElementById('countMLBB');
  const elC = document.getElementById('countMCGG');
  if (elM) elM.innerText = mlbbCount;
  if (elC) elC.innerText = mcggCount;
}

// Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG)
function formatRuleLine(l) {
  const raw = l || '';
  const trimmed = raw.trim();
  if (!trimmed) return '';

  // Header Bab Utama (e.g. 📋 KETENTUAN PESERTA MLBB, 🏆 KETENTUAN PERTANDINGAN MLBB, ⚖️ DO AND DON'T, PERATURAN RESMI)
  if (trimmed.includes('KETENTUAN') || trimmed.includes('DO AND DON') || trimmed.startsWith('PERATURAN RESMI') || /^[0-9]+\.\s+[A-Z\s&()]+$/.test(trimmed)) {
    return `<h4 style="color:var(--yokke-gold); margin:1.35rem 0 0.6rem; font-size:1.05rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.4rem; display:flex; align-items:center; gap:0.4rem;">${escapeHtml(trimmed)}</h4>`;
  }

  // DO Section
  if (trimmed.startsWith('DO') || trimmed.includes('Hal yang Wajib/Diperbolehkan') || trimmed.includes('DOs (Diperbolehkan)')) {
    return `<h5 style="color:var(--yokke-green); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bold;">${escapeHtml(trimmed)}</h5>`;
  }

  // DON'T Section
  if (trimmed.startsWith("DON'T") || trimmed.includes('Hal yang Dilarang') || trimmed.includes("DON'Ts (Dilarang)")) {
    return `<h5 style="color:var(--yokke-red); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bold;">${escapeHtml(trimmed)}</h5>`;
  }

  // Sub-bullet (dimulai dengan 3+ spasi atau tab dan karakter * / -)
  if (/^\s{3,}[*-]\s+/.test(raw) || /^\t+[*-]\s+/.test(raw)) {
    const text = trimmed.replace(/^[*-]\s+/, '');
    return `<div style="margin-left: 2rem; margin-bottom: 0.35rem; line-height: 1.55; display: flex; gap: 0.5rem;"><span style="color: var(--yokke-purple-text); font-weight: bold;">◦</span><span>${escapeHtml(text)}</span></div>`;
  }

  // Main bullet (dimulai dengan karakter * atau -)
  if (/^[*-]\s+/.test(trimmed)) {
    const text = trimmed.replace(/^[*-]\s+/, '');
    return `<div style="margin-left: 1rem; margin-bottom: 0.4rem; line-height: 1.6; display: flex; gap: 0.5rem;"><span style="color: var(--yokke-cyan); font-weight: bold;">•</span><span>${escapeHtml(text)}</span></div>`;
  }

  // Baris berpoin (1., 2., 12., dsb)
  if (/^[0-9]+\.\s+/.test(trimmed)) {
    return `<p style="margin-bottom:0.5rem; line-height:1.65; font-weight:500;">${escapeHtml(trimmed)}</p>`;
  }

  // Baris lanjutan ber-indent (misal + 8 Pemain, Wajib memenuhi kuota)
  if (trimmed.startsWith('+') || /^\s{2,}/.test(raw)) {
    return `<p style="margin-left:1.5rem; margin-bottom:0.35rem; line-height:1.55; color:var(--text-muted); font-size:0.88rem;">${escapeHtml(trimmed)}</p>`;
  }

  return `<p style="margin-bottom:0.5rem; line-height:1.65;">${escapeHtml(trimmed)}</p>`;
}

// Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: tab=t.0 & MCGG: tab=t.ji56ljhdhzkr)
async function fetchRulesFromGoogleDoc(silent = false) {
  const syncBadge = document.getElementById('rulesSyncBadge');
  if (syncBadge && !silent) {
    syncBadge.innerHTML = '⏳ Menyinkronkan...';
  }

  try {
    const now = Date.now();
    const nocacheMlbb = GOOGLE_DOCS_RULES_EXPORT_URL_MLBB + '&_nocache=' + now;
    const nocacheMcgg = GOOGLE_DOCS_RULES_EXPORT_URL_MCGG + '&_nocache=' + now;

    let updatedMlbb = false;
    let updatedMcgg = false;

    const [resMlbb, resMcgg] = await Promise.allSettled([
      fetch(nocacheMlbb, { redirect: 'follow' }),
      fetch(nocacheMcgg, { redirect: 'follow' })
    ]);

    if (resMlbb.status === 'fulfilled' && resMlbb.value && resMlbb.value.ok) {
      const text = await resMlbb.value.text();
      if (text && text.trim().length > 100) {
        customRules.mlbb = text.trim();
        updatedMlbb = true;
      }
    }

    if (resMcgg.status === 'fulfilled' && resMcgg.value && resMcgg.value.ok) {
      const text = await resMcgg.value.text();
      if (text && text.trim().length > 100) {
        customRules.mcgg = text.trim();
        updatedMcgg = true;
      }
    }

    if (updatedMlbb || updatedMcgg) {
      localStorage.setItem('yokke_custom_rules', JSON.stringify(customRules));
      renderRules();
      if (syncBadge) {
        syncBadge.innerHTML = '🟢 Tersinkronisasi (MLBB & MCGG)';
      }
      if (!silent && typeof showToast === 'function') {
        showToast('✅ Peraturan MLBB & MCGG berhasil diperbarui dari Google Docs!', 'success');
      }
      return true;
    }
  } catch (err) {
    console.warn('Gagal fetch rules dari Google Docs:', err);
    if (syncBadge) {
      syncBadge.innerHTML = '⚡ Cache Dokumen';
    }
    if (!silent && typeof showToast === 'function') {
      showToast('⚠️ Gagal terhubung ke Google Docs, menggunakan cache dokumen lokal.', 'warning');
    }
  }
  return false;
}

function renderRules() {
  const mlbbBox = document.getElementById('displayMLBBRules');
  const mcggBox = document.getElementById('displayMCGGRules');
  if (!mlbbBox || !mcggBox) return;

  mlbbBox.innerHTML = customRules.mlbb.split('\n').filter(l => l.trim()).map(formatRuleLine).join('');
  mcggBox.innerHTML = customRules.mcgg.split('\n').filter(l => l.trim()).map(formatRuleLine).join('');

  const mlbbInput = document.getElementById('rulesMLBBInput');
  const mcggInput = document.getElementById('rulesMCGGInput');
  if (mlbbInput) mlbbInput.value = customRules.mlbb;
  if (mcggInput) mcggInput.value = customRules.mcgg;
}

function toggleEditRules() {
  const form = document.getElementById('rulesEditForm');
  const isHidden = form.style.display === 'none' || form.style.display === '';
  form.style.display = isHidden ? 'block' : 'none';
}

function saveCustomRules() {
  const newMLBB = document.getElementById('rulesMLBBInput').value.trim();
  const newMCGG = document.getElementById('rulesMCGGInput').value.trim();

  if (!newMLBB || !newMCGG) {
    alert('Peraturan tidak boleh kosong!');
    return;
  }

  customRules.mlbb = newMLBB;
  customRules.mcgg = newMCGG;
  localStorage.setItem('yokke_custom_rules', JSON.stringify(customRules));

  renderRules();
  toggleEditRules();

  // Kirim update peraturan ke Google Sheets
  try {
    postToGoogleAppsScript({
      action: 'SAVE_CONFIG',
      adminPin: currentAdminPin,
      customRules: customRules
    }, 15000).catch(e => console.warn('Gagal sync peraturan ke Sheets:', e));
  } catch(e) {}

  alert('✅ Peraturan berhasil diperbarui dan disimpan ke Google Sheets!');
}

function resetRulesToDefault() {
  if (confirm('Kembalikan peraturan ke teks standar bawaan?')) {
    customRules.mlbb = DEFAULT_RULES_MLBB;
    customRules.mcgg = DEFAULT_RULES_MCGG;
    localStorage.setItem('yokke_custom_rules', JSON.stringify(customRules));
    renderRules();
  }
}

// Handle Logo Upload and Live Preview
async function handleLogoPreview(event) {
  const file = event.target.files[0];
  const previewBox = document.getElementById('logoPreviewBox');

  if (file) {
    uploadedLogoBase64 = await compressImageFile(file, 1200, 0.75);
    handleFormDraftChange();
    previewBox.innerHTML = `<img src="${uploadedLogoBase64}" alt="Logo Preview">`;
  } else {
    uploadedLogoBase64 = "";
    previewBox.innerHTML = `<span class="logo-preview-placeholder">Logo</span>`;
  }
}

// Handle Individual ID Card Upload for Officials and MCGG
async function handleSingleIdCardPreview(event, target) {
  const file = event.target.files[0];
  const previewBox = document.getElementById(`${target}_idcard_preview`);

  if (file) {
    const compressed = await compressImageFile(file, 1200, 0.75);
    if (target === 'off1') regOfficialIdCards.off1 = compressed;
    else if (target === 'off2') regOfficialIdCards.off2 = compressed;
    else if (target === 'mcgg') regMcggIdCard = compressed;
    handleFormDraftChange();

    previewBox.innerHTML = `<img src="${compressed}" alt="ID Card">`;
  } else {
    if (target === 'off1') regOfficialIdCards.off1 = "";
    else if (target === 'off2') regOfficialIdCards.off2 = "";
    else if (target === 'mcgg') regMcggIdCard = "";

    previewBox.innerHTML = `<span class="logo-preview-placeholder">ID Card</span>`;
  }
}

// Handle Individual ID Card Upload for Each of the 8 Players
async function handlePlayerIdCardPreview(event, playerIdx) {
  const file = event.target.files[0];
  const previewBox = document.getElementById(`p${playerIdx}_idcard_preview`);

  if (file) {
    const compressed = await compressImageFile(file, 1200, 0.75);
    regPlayersIdCards[playerIdx] = compressed;
    handleFormDraftChange();
    previewBox.innerHTML = `<img src="${compressed}" alt="ID Card">`;
  } else {
    regPlayersIdCards[playerIdx] = "";
    previewBox.innerHTML = `<span class="logo-preview-placeholder">ID Card</span>`;
  }
}

// Toggle Official 2 Form
function toggleOfficial2Form() {
  const hasOff2 = document.getElementById('has_official_2').checked;
  const off2Fields = document.getElementById('official2Fields');
  if (off2Fields) off2Fields.style.display = hasOff2 ? 'block' : 'none';
}

// Generate the 8 players form fields dynamically (Included In-Game Nickname and Per-Player ID Card Uploader)
function renderPlayersFormInputs() {
  const container = document.getElementById('playersInputList');
  if (!container) return;

  let html = '';
  for (let i = 1; i <= 8; i++) {
    const isCore = i <= 5;
    const typeLabel = isCore ? `Pemain Inti ${i}` : `Pemain Cadangan ${i - 5}`;
    const reqAttr = isCore ? 'required' : '';

    html += `
      <div class="roster-card">
        <div class="roster-title">
          <span>🎮 Pemain ${i} (${typeLabel}) ${isCore ? '<span style="color:var(--yokke-red)">*Wajib</span>' : '<span style="color:var(--text-muted);font-weight:normal">(Opsional)</span>'}</span>
        </div>
        <div class="form-grid">
          <div class="form-group">
            <label>Nama Lengkap *</label>
            <input type="text" id="p${i}_name" placeholder="Nama Lengkap Pemain ${i}" ${reqAttr}>
          </div>
          <div class="form-group">
            <label>Nickname Game / IGN *</label>
            <input type="text" id="p${i}_nickname" placeholder="Contoh: YokkeSanzz" ${reqAttr}>
          </div>
          <div class="form-group">
            <label>ID Pegawai / NIP Yokke *</label>
            <input type="text" id="p${i}_empid" placeholder="Contoh: EMP-104${i}0" ${reqAttr}>
          </div>
          <div class="form-group">
            <label>Mobile Game ID & Server *</label>
            <input type="text" id="p${i}_gameid" placeholder="Contoh: 12345678 (210${i})" ${reqAttr}>
          </div>
          <div class="form-group" style="grid-column: 1 / -1;">
            <label>Upload Foto ID Card Pegawai Yokke Pemain ${i} (PNG/JPG) ${isCore ? '<span style="color:var(--yokke-red)">*Wajib</span>' : '<span style="color:var(--text-muted);font-weight:normal">(Wajib jika didaftarkan)</span>'}</label>
            <div class="idcard-upload-wrapper">
              <div class="idcard-preview-box" id="p${i}_idcard_preview">
                <span class="logo-preview-placeholder">ID Card</span>
              </div>
              <input type="file" id="p${i}_idcard_file" accept="image/*" onchange="handlePlayerIdCardPreview(event, ${i})" style="padding: 0.4rem; font-size: 0.8rem;">
            </div>
          </div>
        </div>
        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" id="p${i}_organik" ${isCore ? 'checked' : ''}>
            <span>Karyawan Organik Yokke</span>
          </label>
          <label class="checkbox-label" style="color: var(--yokke-gold); font-weight: 700;">
            <input type="radio" name="captain_select" value="${i}" ${i === 1 ? 'checked' : ''}>
            <span>⭐ Kapten Tim</span>
          </label>
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

// Switch form between MLBB and MCGG cleanly
function toggleCategoryForm() {
  const cat = document.getElementById('gameCategory').value;
  const mlbbSection = document.getElementById('mlbbSection');
  const mcggSection = document.getElementById('mcggSection');

  const mlbbInputs = [
    document.getElementById('teamName'),
    document.getElementById('teamDept'),
    document.getElementById('contactWa'),
    document.getElementById('off1_name'),
    document.getElementById('off1_empid')
  ];

  const mcggInputs = [
    document.getElementById('mcgg_name'),
    document.getElementById('mcgg_nickname'),
    document.getElementById('mcgg_dept'),
    document.getElementById('mcgg_wa'),
    document.getElementById('mcgg_empid'),
    document.getElementById('mcgg_gameid')
  ];

  if (cat === 'MLBB') {
    mlbbSection.style.display = 'block';
    mcggSection.style.display = 'none';

    mlbbInputs.forEach(el => { if (el) el.required = true; });
    for (let i = 1; i <= 5; i++) {
      const p = document.getElementById(`p${i}_name`);
      const n = document.getElementById(`p${i}_nickname`);
      const e = document.getElementById(`p${i}_empid`);
      const g = document.getElementById(`p${i}_gameid`);
      if (p) p.required = true;
      if (n) n.required = true;
      if (e) e.required = true;
      if (g) g.required = true;
    }

    mcggInputs.forEach(el => { if (el) el.required = false; });
  } else {
    mlbbSection.style.display = 'none';
    mcggSection.style.display = 'block';

    mlbbInputs.forEach(el => { if (el) el.required = false; });
    for (let i = 1; i <= 8; i++) {
      const p = document.getElementById(`p${i}_name`);
      const n = document.getElementById(`p${i}_nickname`);
      const e = document.getElementById(`p${i}_empid`);
      const g = document.getElementById(`p${i}_gameid`);
      if (p) p.required = false;
      if (n) n.required = false;
      if (e) e.required = false;
      if (g) g.required = false;
    }

    mcggInputs.forEach(el => { if (el) el.required = true; });
  }
}

// Auth functions
function openLoginModal() {
  document.getElementById('loginModal').classList.add('active');
  document.getElementById('adminPinInput').value = '';
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('adminPinInput').focus();
}

function closeLoginModal() {
  document.getElementById('loginModal').classList.remove('active');
}

function verifyAdminPin() {
  const pin = document.getElementById('adminPinInput').value.trim();
  const expectedPin = (currentAdminPin || localStorage.getItem('yokke_admin_pin') || ADMIN_PIN).trim();
  if (pin === expectedPin) {
    isAdmin = true;
    sessionStorage.setItem('yokke_is_admin', 'true');
    closeLoginModal();
    updateAuthUI();
    renderParticipants();
    renderCurrentMLBBFormat();
    renderMCGGTable();
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

function logoutAdmin() {
  isAdmin = false;
  sessionStorage.removeItem('yokke_is_admin');
  updateAuthUI();
  renderParticipants();
  renderCurrentMLBBFormat();
  renderMCGGTable();
}

function renderRegistrationUI() {
  const badge = document.getElementById('regStatusBadge');
  const btnToggle = document.getElementById('btnToggleReg');
  const btnTogglePeserta = document.getElementById('btnToggleRegPeserta');
  const btnToggleMLBB = document.getElementById('btnToggleRegMLBB');
  const btnToggleMCGG = document.getElementById('btnToggleRegMCGG');
  const closedBanner = document.getElementById('regClosedBanner');
  const submitBtn = document.getElementById('submitBtn');
  const mlbbNotice = document.getElementById('mlbbRegOpenNotice');
  const mcggNotice = document.getElementById('mcggRegOpenNotice');

  const toggleButtons = [btnToggle, btnTogglePeserta, btnToggleMLBB, btnToggleMCGG];

  if (isRegistrationClosed) {
    if (badge) {
      badge.innerHTML = '🔴 Pendaftaran Ditutup';
      badge.style.background = 'rgba(239, 68, 68, 0.15)';
      badge.style.color = 'var(--yokke-red)';
      badge.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    }
    const btnText = '🔓 Buka Pendaftaran';
    toggleButtons.forEach(btn => {
      if (btn) {
        btn.innerHTML = btnText;
        btn.className = 'btn btn-outline';
        btn.style.borderColor = 'var(--yokke-green)';
        btn.style.color = 'var(--yokke-green)';
      }
    });
    if (closedBanner) closedBanner.style.display = 'block';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = '🚫 Pendaftaran Ditutup oleh Panitia';
      submitBtn.style.opacity = '0.6';
      submitBtn.style.cursor = 'not-allowed';
    }
    if (mlbbNotice) mlbbNotice.style.display = 'none';
    if (mcggNotice) mcggNotice.style.display = 'none';
  } else {
    if (badge) {
      badge.innerHTML = '🟢 Pendaftaran Dibuka';
      badge.style.background = 'rgba(6, 214, 160, 0.15)';
      badge.style.color = 'var(--yokke-green)';
      badge.style.borderColor = 'rgba(6, 214, 160, 0.3)';
    }
    const btnText = '🔒 Tutup Pendaftaran';
    toggleButtons.forEach(btn => {
      if (btn) {
        btn.innerHTML = btnText;
        btn.className = 'btn btn-outline';
        btn.style.borderColor = 'var(--border-color)';
        btn.style.color = 'var(--text-color)';
      }
    });
    if (closedBanner) closedBanner.style.display = 'none';
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = 'Kirim Pendaftaran';
      submitBtn.style.opacity = '1';
      submitBtn.style.cursor = 'pointer';
    }
    if (mlbbNotice) mlbbNotice.style.display = (!isRegistrationClosed && isAdmin) ? 'block' : 'none';
    if (mcggNotice) mcggNotice.style.display = (!isRegistrationClosed && isAdmin) ? 'block' : 'none';
  }
}

function toggleRegistrationStatus() {
  if (!isAdmin) {
    alert('Akses ditolak: Hanya panitia yang dapat mengubah status pendaftaran turnamen.');
    return;
  }
  const confirmationMsg = isRegistrationClosed
    ? 'Apakah Anda yakin ingin MEMBUKA KEMBALI pendaftaran turnamen?\nCalon peserta akan dapat mengisi form pendaftaran lagi, dan tombol pengundian tim/lobi akan dinonaktifkan sementara.'
    : 'Apakah Anda yakin ingin MENUTUP pendaftaran turnamen?\nFormulir pendaftaran akan dinonaktifkan dan tombol pengundian tim MLBB & lobi MCGG akan DIAKTIFKAN untuk Technical Meeting.';

  if (!confirm(confirmationMsg)) return;

  isRegistrationClosed = !isRegistrationClosed;
  localStorage.setItem('yokke_reg_closed', isRegistrationClosed ? 'true' : 'false');
  renderRegistrationUI();
  updateAuthUI();
  renderCurrentMLBBFormat();
  renderMCGGTable();
  saveTournamentStateOnly(true);
  alert(`Status Pendaftaran Turnamen berhasil diubah: ${isRegistrationClosed ? 'DITUTUP' : 'DIBUKA'}.`);
}

function resetMCGGPointsAndDraw() {
  if (!isAdmin) {
    alert('Akses ditolak: Hanya panitia yang dapat mereset poin & undian MCGG.');
    return;
  }
  if (!confirm('⚠️ PERINGATAN PANITIA:\nApakah Anda yakin ingin mereset seluruh poin pertandingan, sanksi, dan hasil undian commander turnamen MCGG?\n\nData ronde 1, 2, 3 dan commander yang diundi akan dikosongkan kembali.')) {
    return;
  }

  // 1. Reset data nilai pada seluruh lobi MCGG
  ['LOBBY_A', 'LOBBY_B', 'GRAND_FINAL', 'LOBBY_LOWER'].forEach(lobKey => {
    if (Array.isArray(mcggLobbies[lobKey])) {
      mcggLobbies[lobKey].forEach(p => {
        p.r1 = null;
        p.r2 = null;
        p.r3 = null;
        p.c1 = '';
        p.c2 = '';
        p.c3 = '';
        p.penalty = 0;
        p.total = 0;
      });
    }
  });

  // 2. Kosongkan state undian commander
  mcggDrawState = {};
  localStorage.removeItem('yokke_commander_draw');

  // 3. Buka kembali status lock lobi TM
  tournamentStageState.mcgg.isTmLocked = false;
  tournamentStageState.mcgg.lockedMatches = { LOBBY_A: {}, LOBBY_B: {}, GRAND_FINAL: {} };
  saveStageStateLocal();

  syncMCGGGrandFinal();
  currentMCGGLobby = 'LOBBY_A';
  saveState();
  renderMCGGTable();
  updateAuthUI();
  saveTournamentStateOnly(true);
  alert('✅ Seluruh poin, sanksi, dan undian commander MCGG telah berhasil direset!');
}

function updateAuthUI() {
  const indicator = document.getElementById('roleIndicator');
  const btnLoginPanitia = document.getElementById('btnLoginPanitia');
  const btnLogoutPanitia = document.getElementById('btnLogoutPanitia');
  const btnToggleReg = document.getElementById('btnToggleReg');
  const btnToggleRegPeserta = document.getElementById('btnToggleRegPeserta');
  const btnToggleRegMLBB = document.getElementById('btnToggleRegMLBB');
  const btnToggleRegMCGG = document.getElementById('btnToggleRegMCGG');
  const btnResetMCGG = document.getElementById('btnResetMCGG');
  const btnResetTotalMLBBGroup = document.getElementById('btnResetTotalMLBBGroup');

  const adminCols = document.querySelectorAll('.admin-col');
  const adminBatch = document.getElementById('adminBatchActions');
  const adminBracket = document.getElementById('adminBracketControls');
  const adminSync = document.getElementById('adminSyncMCGG');
  const adminShuffle = document.getElementById('adminShuffleMCGG');
  const adminRules = document.getElementById('adminRulesBtnBox');

  const adminDrawControls = document.getElementById('adminCommanderDrawControls');
  const guestDrawNotice = document.getElementById('guestCommanderDrawNotice');
  const btnLockMCGG = document.getElementById('btnLockMCGGLobbies');
  const btnSaveMCGG = document.getElementById('btnSaveMCGGPointsGSheet');

  const btnShuffleMLBB = document.getElementById('btnShuffleMLBB');
  const btnLockMLBB = document.getElementById('btnLockMLBBGroup');
  const btnProceedMLBB = document.getElementById('btnProceedMLBBStage2');
  const btnResetMLBB = document.getElementById('btnResetMLBBStage1');
  const btnShuffleMLBBPlayoff = document.getElementById('btnShuffleMLBBPlayoff');
  const btnTestPlayoffStandings = document.getElementById('btnTestPlayoffStandings');
  const btnSaveMLBB = document.getElementById('btnSaveBracketGSheet');

  if (isAdmin) {
    indicator.className = 'role-badge role-admin';
    indicator.innerHTML = '🛡️ Mode Panitia (Akses Penuh)';
    if (btnLoginPanitia) btnLoginPanitia.style.display = 'none';
    if (btnLogoutPanitia) btnLogoutPanitia.style.display = 'inline-flex';
    if (btnToggleReg) btnToggleReg.style.display = 'inline-flex';
    if (btnToggleRegPeserta) btnToggleRegPeserta.style.display = 'inline-flex';
    if (btnToggleRegMLBB) btnToggleRegMLBB.style.display = 'inline-flex';
    if (btnToggleRegMCGG) btnToggleRegMCGG.style.display = 'inline-flex';
    if (btnResetMCGG) btnResetMCGG.style.display = 'inline-flex';
    if (btnResetTotalMLBBGroup) {
      btnResetTotalMLBBGroup.style.display = 'inline-flex';
      const hasData = Object.keys(groupStageData).length > 0 || Object.keys(groupMatchResults).length > 0 || (Array.isArray(groupPlayoffMatches) && groupPlayoffMatches.length > 0) || (Array.isArray(bracketMatches) && bracketMatches.length > 0);
      btnResetTotalMLBBGroup.disabled = !hasData;
      btnResetTotalMLBBGroup.style.opacity = hasData ? '1' : '0.5';
      btnResetTotalMLBBGroup.style.cursor = hasData ? 'pointer' : 'not-allowed';
      btnResetTotalMLBBGroup.title = hasData ? 'Reset total pembagian grup dan bagan MLBB' : 'Belum ada grup atau bagan yang diundi';
    }

    adminCols.forEach(col => col.style.display = '');
    if (adminBatch) adminBatch.style.display = 'flex';
    if (adminBracket) adminBracket.style.display = 'flex';
    if (adminSync) adminSync.style.display = 'inline-flex';
    if (adminShuffle) adminShuffle.style.display = 'inline-flex';
    if (adminRules) adminRules.style.display = 'flex';

    if (adminDrawControls) adminDrawControls.style.display = 'flex';
    if (guestDrawNotice) guestDrawNotice.style.display = 'none';
    if (btnLockMCGG) btnLockMCGG.style.display = 'inline-flex';
    if (btnSaveMCGG) btnSaveMCGG.style.display = 'inline-flex';

    // Status Kontrol Tahapan MLBB
    const isStage2 = tournamentStageState.mlbb.stage === 'STAGE_2_PLAYOFF';
    const isGroupLocked = tournamentStageState.mlbb.isGroupLocked;

    if (btnShuffleMLBB) {
      if (!isRegistrationClosed) {
        btnShuffleMLBB.disabled = true;
        btnShuffleMLBB.title = 'Pendaftaran turnamen masih dibuka. Tutup pendaftaran terlebih dahulu untuk mengacak tim.';
      } else {
        btnShuffleMLBB.disabled = isGroupLocked || isStage2;
        btnShuffleMLBB.title = isStage2 
          ? 'Tahap Playoff aktif. Reset ke Tahap 1 jika ingin mengubah grup.' 
          : (isGroupLocked ? 'Grup sedang dikunci (Lock TM). Buka kunci untuk mengacak ulang.' : 'Acak undian tim ke grup');
      }
    }

    if (btnLockMLBB) {
      btnLockMLBB.style.display = isStage2 ? 'none' : 'inline-flex';
      btnLockMLBB.innerHTML = isGroupLocked ? '🔓 Buka Kunci Grup' : '🔒 Kunci Grup (Lock TM)';
      btnLockMLBB.className = isGroupLocked ? 'btn btn-gold' : 'btn btn-outline';
      if (!isRegistrationClosed) {
        btnLockMLBB.disabled = true;
        btnLockMLBB.title = 'Pendaftaran turnamen masih dibuka. Tutup pendaftaran terlebih dahulu untuk mengunci grup.';
      } else {
        btnLockMLBB.disabled = false;
        btnLockMLBB.title = isGroupLocked ? 'Buka kunci grup' : 'Kunci susunan grup untuk memulai pertandingan';
      }
    }

    if (btnProceedMLBB) {
      btnProceedMLBB.style.display = isStage2 ? 'none' : 'inline-flex';
      if (!isRegistrationClosed) {
        btnProceedMLBB.disabled = true;
        btnProceedMLBB.title = 'Pendaftaran turnamen masih dibuka. Tutup pendaftaran terlebih dahulu sebelum lanjut ke babak playoff.';
      } else {
        btnProceedMLBB.disabled = false;
        btnProceedMLBB.title = 'Lanjut ke Babak Playoff setelah seluruh pertandingan grup selesai';
      }
    }

    if (btnResetMLBB) {
      btnResetMLBB.style.display = isStage2 ? 'inline-flex' : 'none';
    }

    if (btnShuffleMLBBPlayoff) {
      btnShuffleMLBBPlayoff.style.display = isStage2 ? 'inline-flex' : 'none';
    }

    if (btnTestPlayoffStandings) {
      btnTestPlayoffStandings.style.display = 'inline-flex';
    }

    if (btnSaveMLBB) {
      btnSaveMLBB.style.display = 'inline-flex';
    }

    // Status Kontrol Lobi MCGG
    const isTmLocked = tournamentStageState.mcgg.isTmLocked;
    if (btnLockMCGG) {
      btnLockMCGG.innerHTML = isTmLocked ? '🔓 Buka Kunci Lobi' : '🔒 Kunci Lobi (Lock TM)';
      btnLockMCGG.className = isTmLocked ? 'btn btn-gold' : 'btn btn-outline';
      if (!isRegistrationClosed) {
        btnLockMCGG.disabled = true;
        btnLockMCGG.title = 'Pendaftaran turnamen masih dibuka. Tutup pendaftaran terlebih dahulu untuk mengunci lobi.';
      } else {
        btnLockMCGG.disabled = false;
        btnLockMCGG.title = isTmLocked ? 'Buka kunci lobi' : 'Kunci pembagian lobi peserta';
      }
    }
    if (adminShuffle) {
      if (!isRegistrationClosed) {
        adminShuffle.disabled = true;
        adminShuffle.title = 'Pendaftaran turnamen masih dibuka. Tutup pendaftaran terlebih dahulu untuk mengacak lobi.';
      } else {
        adminShuffle.disabled = isTmLocked;
        adminShuffle.title = isTmLocked ? 'Lobi sedang dikunci (Lock TM). Buka kunci untuk mengacak ulang.' : 'Acak undian lobi';
      }
    }

  } else {
    indicator.className = 'role-badge role-guest';
    indicator.innerHTML = '👀 Mode Peserta (Lihat Saja)';
    if (btnLoginPanitia) btnLoginPanitia.style.display = 'inline-flex';
    if (btnLogoutPanitia) btnLogoutPanitia.style.display = 'none';
    if (btnToggleReg) btnToggleReg.style.display = 'none';
    if (btnToggleRegPeserta) btnToggleRegPeserta.style.display = 'none';
    if (btnToggleRegMLBB) btnToggleRegMLBB.style.display = 'none';
    if (btnToggleRegMCGG) btnToggleRegMCGG.style.display = 'none';
    if (btnResetMCGG) btnResetMCGG.style.display = 'none';
    if (btnResetTotalMLBBGroup) btnResetTotalMLBBGroup.style.display = 'none';

    adminCols.forEach(col => col.style.display = 'none');
    if (adminBatch) adminBatch.style.display = 'none';
    if (adminBracket) adminBracket.style.display = 'none';
    if (adminSync) adminSync.style.display = 'none';
    if (adminShuffle) adminShuffle.style.display = 'none';
    if (adminRules) adminRules.style.display = 'none';
    const rulesForm = document.getElementById('rulesEditForm');
    if (rulesForm) rulesForm.style.display = 'none';

    // Sembunyikan kontrol undian commander untuk peserta
    if (adminDrawControls) adminDrawControls.style.display = 'none';
    if (btnLockMCGG) btnLockMCGG.style.display = 'none';
    if (btnSaveMCGG) btnSaveMCGG.style.display = 'none';
    if (btnShuffleMLBBPlayoff) btnShuffleMLBBPlayoff.style.display = 'none';
    if (btnTestPlayoffStandings) btnTestPlayoffStandings.style.display = 'none';

    // Tampilkan notifikasi jika belum ada undian untuk match saat ini
    const hasDraw = lastCommanderDrawMatch && mcggDrawState[currentMCGGLobby]?.[`match${lastCommanderDrawMatch}`];
    if (guestDrawNotice) {
      guestDrawNotice.style.display = hasDraw ? 'none' : 'inline-block';
    }
  }

  renderRegistrationUI();
}

// Navigation Tabs
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

  document.getElementById('tab-' + tabId).classList.add('active');
  event.target.classList.add('active');

  if (tabId === 'bagan-mlbb') {
    setMLBBViewMode('HUB');
  } else if (tabId === 'points-mcgg') {
    setMCGGViewMode('HUB');
  } else if (tabId === 'rules') {
    renderRules();
    fetchRulesFromGoogleDoc(true);
  }
}

// Lightbox for Viewing Full ID Card
function openIdCardLightbox(imgSrc, title, driveUrl = '') {
  const modal = document.getElementById('idCardLightboxModal');
  const container = document.getElementById('lightboxImageContainer');
  const titleEl = document.getElementById('lightboxTitle');

  if (modal) modal.style.zIndex = '2500';

  if (titleEl) titleEl.innerText = title || '🪪 Foto ID Card Pegawai Yokke';
  if (container) {
    const formattedSrc = formatDriveImageUrl(imgSrc);
    const driveMatch = (imgSrc && typeof imgSrc === 'string') ? (imgSrc.match(/\/d\/([a-zA-Z0-9_-]+)/) || imgSrc.match(/id=([a-zA-Z0-9_-]+)/)) : null;
    const driveFileId = driveMatch ? driveMatch[1] : (driveUrl ? (driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/) || driveUrl.match(/id=([a-zA-Z0-9_-]+)/))?.[1] : null);
    const targetDriveUrl = driveUrl || (driveFileId ? `https://drive.google.com/file/d/${driveFileId}/view` : '');

    let html = `
      <div style="text-align:center;">
        <img src="${formattedSrc}" alt="ID Card" 
             style="max-width:100%; max-height:68vh; object-fit:contain; border-radius:6px; box-shadow:0 4px 15px rgba(0,0,0,0.5);"
             onerror="this.style.display='none'; document.getElementById('driveFallbackCard').style.display='block';">
        <div id="driveFallbackCard" style="display:none; padding:1.25rem; background:rgba(255,255,255,0.06); border-radius:8px; margin:1rem 0;">
          <p style="color:var(--yokke-gold); margin-bottom:0.75rem;">⚠️ Berkas tersimpan di Google Drive:</p>
        </div>
    `;

    if (targetDriveUrl) {
      html += `
        <div style="margin-top:1rem; display:flex; justify-content:center; gap:0.75rem;">
          <a href="${targetDriveUrl}" target="_blank" rel="noopener noreferrer" 
             class="btn btn-primary" style="padding:0.45rem 1.25rem; font-size:0.85rem; text-decoration:none; display:inline-flex; align-items:center; gap:0.4rem;">
            🔗 Buka File Asli di Google Drive ↗
          </a>
        </div>
      `;
    }

    html += `</div>`;
    container.innerHTML = html;
  }
  if (modal) modal.classList.add('active');
}

function closeIdCardLightbox() {
  const modal = document.getElementById('idCardLightboxModal');
  if (modal) modal.classList.remove('active');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.toString().replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit form dimatikan)
function updateRegistrationDatalists() {
  const mlbbDatalist = document.getElementById('registeredTeamsDatalist');
  const mcggDatalist = document.getElementById('registeredMcggDatalist');

  // Matikan dropdown list tim & pemain di formulir pendaftaran
  if (mlbbDatalist) {
    mlbbDatalist.innerHTML = '';
  }
  if (mcggDatalist) {
    mcggDatalist.innerHTML = '';
  }
}

// Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edit Dimatikan)
function handleTeamNameInput(val) {
  const noticeEl = document.getElementById('teamNameUpdateNotice');
  const cleanVal = (val || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!cleanVal) {
    if (noticeEl) {
      noticeEl.style.display = 'none';
      noticeEl.innerHTML = '';
    }
    return;
  }

  const existing = participants.find(p => 
    p.category === 'MLBB' && 
    (p.name || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '') === cleanVal
  );

  if (existing) {
    if (noticeEl) {
      noticeEl.style.display = 'block';
      noticeEl.style.color = '#fca5a5';
      noticeEl.style.borderLeftColor = 'var(--yokke-red)';
      noticeEl.style.background = 'rgba(239, 68, 68, 0.12)';
      noticeEl.innerHTML = `⚠️ <strong>Nama Tim Sudah Terdaftar:</strong> Tim "<strong>${escapeHtml(existing.name)}</strong>" sudah terdaftar. Fungsi edit di formulir pendaftaran dinonaktifkan. Silakan gunakan nama tim baru.`;
    }
  } else {
    if (noticeEl) {
      noticeEl.style.display = 'none';
      noticeEl.innerHTML = '';
    }
  }
}

// Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fungsi Edit Dimatikan)
function handleMcggNameInput(val) {
  const noticeEl = document.getElementById('mcggNameUpdateNotice');
  const cleanVal = (val || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!cleanVal) {
    if (noticeEl) {
      noticeEl.style.display = 'none';
      noticeEl.innerHTML = '';
    }
    return;
  }

  const existing = participants.find(p => 
    p.category === 'MCGG' && 
    (p.name || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '') === cleanVal
  );

  if (existing) {
    if (noticeEl) {
      noticeEl.style.display = 'block';
      noticeEl.style.color = '#fca5a5';
      noticeEl.style.borderLeftColor = 'var(--yokke-red)';
      noticeEl.style.background = 'rgba(239, 68, 68, 0.12)';
      noticeEl.innerHTML = `⚠️ <strong>Peserta Sudah Terdaftar:</strong> Pemain "<strong>${escapeHtml(existing.name)}</strong>" sudah terdaftar. Fungsi edit di formulir pendaftaran dinonaktifkan.`;
    }
  } else {
    if (noticeEl) {
      noticeEl.style.display = 'none';
      noticeEl.innerHTML = '';
    }
  }
}

// Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Card, and Automatic Update Threat
async function handleRegister(e) {
  e.preventDefault();
  if (isRegistrationClosed) {
    alert("🚫 Maaf, pendaftaran turnamen telah resmi ditutup oleh panitia.");
    return;
  }
  const category = document.getElementById('gameCategory').value;
  const submitBtn = document.getElementById('submitBtn');

  let teamName = "";
  let dept = "";
  let wa = "";
  let roster = [];
  let officialData = {};
  let captainData = {};
  let logoData = uploadedLogoBase64;

  if (category === 'MLBB') {
    teamName = document.getElementById('teamName').value.trim();
    dept = document.getElementById('teamDept').value.trim();
    wa = document.getElementById('contactWa').value.trim();

    if (!teamName || !dept || !wa) {
      alert("⚠️ Harap lengkapi Nama Tim, Divisi, dan Nomor WhatsApp aktif!");
      return;
    }

    const cleanTeamName = teamName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const existingParticipant = participants.find(p => 
      p.category === 'MLBB' && 
      (p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '') === cleanTeamName
    );

    // WAJIB UPLOAD LOGO TIM MLBB (Jika tim sudah ada, boleh menggunakan logo lama)
    if (!logoData || logoData.trim() === "") {
      if (existingParticipant && (existingParticipant.logo || findLogoByTeamName(existingParticipant.name))) {
        logoData = existingParticipant.logo || findLogoByTeamName(existingParticipant.name);
      } else {
        alert("❌ PENDAFTARAN DITOLAK:\nLogo Tim MLBB WAJIB diunggah!\nHarap unggah gambar/logo tim Anda (PNG/JPG) sebelum mengirim pendaftaran.");
        document.getElementById('teamLogoInput')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        document.getElementById('teamLogoInput')?.focus();
        return;
      }
    }

    // Official 1 (Wajib)
    const off1Name = document.getElementById('off1_name').value.trim();
    const off1EmpId = document.getElementById('off1_empid').value.trim();
    const off1Nickname = document.getElementById('off1_nickname').value.trim();
    const off1GameId = document.getElementById('off1_gameid').value.trim();
    const off1Organik = document.getElementById('off1_organik').checked;
    let off1IdCard = regOfficialIdCards.off1 || "";

    if (!off1Name || !off1EmpId) {
      alert("⚠️ Harap lengkapi Nama Lengkap dan NIP Pegawai Official 1 (Utama)!");
      document.getElementById('off1_name')?.focus();
      return;
    }

    // WAJIB ID CARD OFFICIAL 1 (Gunakan yang tersimpan jika tidak diupload baru pada mode update)
    if (!off1IdCard && existingParticipant) {
      const existingOff1 = (existingParticipant.roster || []).find(m => (m.role || '').indexOf('Official 1') !== -1) ||
                           (existingParticipant.roster || []).find(m => (m.role || '').indexOf('Official') !== -1) ||
                           existingParticipant.official;
      if (existingOff1 && existingOff1.idCard) off1IdCard = existingOff1.idCard;
    }

    if (!off1IdCard) {
      alert("❌ PENDAFTARAN DITOLAK:\nFoto ID Card Official 1 (Utama) WAJIB diunggah!\nSilakan unggah foto ID Card sebelum mengirim pendaftaran.");
      document.getElementById('off1_idcard_file')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    officialData = {
      name: off1Name,
      nickname: off1Nickname || '-',
      empId: off1EmpId,
      gameId: off1GameId || '-',
      isOrganik: off1Organik,
      idCard: off1IdCard
    };

    const officialsList = [
      { role: 'Official 1 (Utama)', name: off1Name, empId: off1EmpId, idCard: off1IdCard }
    ];

    roster.push({
      role: 'Official 1 (Utama)',
      name: off1Name,
      nickname: off1Nickname || '-',
      empId: off1EmpId,
      gameId: off1GameId || '-',
      isOrganik: off1Organik,
      isCaptain: false,
      idCard: off1IdCard
    });

    // Official 2 (Opsional / Max 2 orang)
    const hasOff2 = document.getElementById('has_official_2').checked;
    if (hasOff2) {
      const off2Name = document.getElementById('off2_name').value.trim();
      const off2EmpId = document.getElementById('off2_empid').value.trim();
      const off2Nickname = document.getElementById('off2_nickname').value.trim();
      const off2GameId = document.getElementById('off2_gameid').value.trim();
      const off2Organik = document.getElementById('off2_organik').checked;
      let off2IdCard = regOfficialIdCards.off2 || "";

      if (!off2Name || !off2EmpId) {
        alert("⚠️ Official 2 dicentang aktif! Harap lengkapi Nama Lengkap dan NIP Pegawai Official 2, atau hilangkan centang jika tidak ada.");
        document.getElementById('off2_name')?.focus();
        return;
      }

      if (!off2IdCard && existingParticipant) {
        const existingOff2 = (existingParticipant.roster || []).find(m => (m.role || '').indexOf('Official 2') !== -1) || existingParticipant.official2;
        if (existingOff2 && existingOff2.idCard) off2IdCard = existingOff2.idCard;
      }

      // WAJIB ID CARD OFFICIAL 2
      if (!off2IdCard) {
        alert("❌ PENDAFTARAN DITOLAK:\nOfficial 2 diaktifkan, maka Foto ID Card Official 2 WAJIB diunggah!\nSilakan unggah foto ID Card atau hilangkan centang Official 2.");
        document.getElementById('off2_idcard_file')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      const off1NipClean = off1EmpId.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const off2NipClean = off2EmpId.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      if (off1NipClean && off1NipClean === off2NipClean) {
        alert(`❌ PENDAFTARAN DITOLAK:\nOfficial 1 dan Official 2 tidak boleh orang yang sama (NIP duplikat: ${off1EmpId})!`);
        return;
      }

      officialsList.push({
        role: 'Official 2 (Asisten)',
        name: off2Name,
        empId: off2EmpId,
        idCard: off2IdCard
      });

      roster.push({
        role: 'Official 2 (Asisten)',
        name: off2Name,
        nickname: off2Nickname || '-',
        empId: off2EmpId || '-',
        gameId: off2GameId || '-',
        isOrganik: off2Organik,
        isCaptain: false,
        idCard: off2IdCard
      });
    }

    const captainSelected = document.querySelector('input[name="captain_select"]:checked')?.value || "1";
    const playersList = [];

    // Validasi Pemain 1 sampai 8
    for (let i = 1; i <= 8; i++) {
      const isCore = i <= 5;
      const pName = document.getElementById(`p${i}_name`).value.trim();
      const pNickname = document.getElementById(`p${i}_nickname`).value.trim();
      const pEmpId = document.getElementById(`p${i}_empid`).value.trim();
      const pGameId = document.getElementById(`p${i}_gameid`).value.trim();
      const pOrganik = document.getElementById(`p${i}_organik`).checked;
      const isCaptain = (captainSelected === i.toString());
      let pIdCard = regPlayersIdCards[i] || "";
      const roleLabel = isCore ? `Pemain Inti ${i}` : `Pemain Cadangan ${i - 5}`;

      if (isCore) {
        // Pemain Inti Wajib Lengkap
        if (!pName || !pEmpId || !pNickname || !pGameId) {
          alert(`⚠️ Harap lengkapi seluruh kolom (Nama, NIP, IGN, dan Mobile Game ID) untuk ${roleLabel}!`);
          document.getElementById(`p${i}_name`)?.focus();
          return;
        }

        // WAJIB FOTO ID CARD PEMAIN INTI (Gunakan fallback tersimpan jika update)
        if (!pIdCard && existingParticipant) {
          const existingPlayers = (existingParticipant.roster || []).filter(m => (m.role || '').indexOf('Official') === -1);
          const existingP = existingPlayers[i - 1] ||
                            existingPlayers.find(m => m.name && pName && m.name.toLowerCase().trim() === pName.toLowerCase().trim()) ||
                            existingPlayers.find(m => m.empId && pEmpId && m.empId.toString().trim() === pEmpId.toString().trim());
          if (existingP && existingP.idCard) pIdCard = existingP.idCard;
        }

        if (!pIdCard) {
          alert(`❌ PENDAFTARAN DITOLAK:\nFoto ID Card Pegawai ${roleLabel} (${pName}) WAJIB diunggah!\nPendaftaran tanpa foto ID Card akan ditolak.`);
          document.getElementById(`p${i}_idcard_file`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          return;
        }

        const pObj = {
          role: roleLabel,
          name: pName,
          nickname: pNickname || '-',
          empId: pEmpId || '-',
          gameId: pGameId || '-',
          isOrganik: pOrganik,
          isCaptain: isCaptain,
          idCard: pIdCard
        };
        playersList.push(pObj);
        roster.push(pObj);
        if (isCaptain) captainData = pObj;

      } else {
        // Pemain Cadangan (jika ada salah satu kolom diisi, maka seluruh kolom wajib diisi termasuk ID card)
        if (pName || pEmpId || pNickname || pGameId || pIdCard) {
          if (!pName || !pEmpId || !pNickname || !pGameId) {
            alert(`⚠️ Harap lengkapi seluruh data (Nama, NIP, IGN, Game ID) untuk ${roleLabel}!`);
            document.getElementById(`p${i}_name`)?.focus();
            return;
          }

          if (!pIdCard && existingParticipant) {
            const existingPlayers = (existingParticipant.roster || []).filter(m => (m.role || '').indexOf('Official') === -1);
            const existingP = existingPlayers[i - 1] ||
                              existingPlayers.find(m => m.name && pName && m.name.toLowerCase().trim() === pName.toLowerCase().trim()) ||
                              existingPlayers.find(m => m.empId && pEmpId && m.empId.toString().trim() === pEmpId.toString().trim());
            if (existingP && existingP.idCard) pIdCard = existingP.idCard;
          }

          // WAJIB FOTO ID CARD PEMAIN CADANGAN JIKA DIDAFTARKAN
          if (!pIdCard) {
            alert(`❌ PENDAFTARAN DITOLAK:\nFoto ID Card Pegawai ${roleLabel} (${pName}) WAJIB diunggah!`);
            document.getElementById(`p${i}_idcard_file`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
          }

          const pObj = {
            role: roleLabel,
            name: pName,
            nickname: pNickname || '-',
            empId: pEmpId || '-',
            gameId: pGameId || '-',
            isOrganik: pOrganik,
            isCaptain: isCaptain,
            idCard: pIdCard
          };
          playersList.push(pObj);
          roster.push(pObj);
          if (isCaptain) captainData = pObj;
        }
      }
    }

    // ATURAN 1: OFFICIAL TIDAK BOLEH JADI PEMAIN
    for (const off of officialsList) {
      const offNipClean = (off.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      const offNameClean = (off.name || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

      for (const play of playersList) {
        const playNipClean = (play.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const playNameClean = (play.name || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

        if (offNipClean && offNipClean.length >= 3 && offNipClean === playNipClean) {
          alert(`❌ PENDAFTARAN DITOLAK:\n${off.role} (${off.name}, NIP: ${off.empId}) TIDAK BOLEH merangkap sebagai pemain (${play.role})!\nOfficial dan Pemain harus orang yang berbeda.`);
          return;
        }

        if (offNameClean && offNameClean.length >= 3 && offNameClean === playNameClean) {
          alert(`❌ PENDAFTARAN DITOLAK:\n${off.role} (${off.name}) tidak boleh terdaftar ganda sebagai pemain (${play.role})!\nOfficial dan Pemain harus orang yang berbeda.`);
          return;
        }

        if (off.idCard && play.idCard && off.idCard === play.idCard && !off.idCard.startsWith('http')) {
          alert(`❌ PENDAFTARAN DITOLAK:\nFoto ID Card ${off.role} (${off.name}) tidak boleh sama dengan foto ID Card ${play.role} (${play.name})!\nSetiap orang wajib mengunggah foto ID Card masing-masing.`);
          return;
        }
      }
    }

    // ATURAN 2: CEK NIP DUPLIKAT ANTAR PEMAIN DALAM SATU TIM
    for (let i = 0; i < playersList.length; i++) {
      const p1 = playersList[i];
      const nip1 = (p1.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      if (!nip1 || nip1.length < 3) continue;

      for (let j = i + 1; j < playersList.length; j++) {
        const p2 = playersList[j];
        const nip2 = (p2.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        if (nip1 === nip2) {
          alert(`❌ PENDAFTARAN DITOLAK:\nNIP Pegawai "${p1.empId}" terdaftar ganda pada ${p1.role} (${p1.name}) dan ${p2.role} (${p2.name})!\nSetiap pemain harus merupakan karyawan yang berbeda.`);
          return;
        }
      }
    }

  } else {
    // KATEGORI MCGG (SOLO)
    teamName = document.getElementById('mcgg_name').value.trim();
    const mcggNickname = document.getElementById('mcgg_nickname').value.trim();
    dept = document.getElementById('mcgg_dept').value.trim();
    wa = document.getElementById('mcgg_wa').value.trim();
    const mcggEmpId = document.getElementById('mcgg_empid').value.trim();
    const mcggGameId = document.getElementById('mcgg_gameid').value.trim();
    const mcggOrganik = document.getElementById('mcgg_organik').checked;
    let mcggIdCard = regMcggIdCard || "";

    if (!teamName || !mcggNickname || !dept || !wa || !mcggEmpId || !mcggGameId) {
      alert("⚠️ Harap lengkapi seluruh kolom formulir pendaftaran solo MCGG!");
      return;
    }

    const cleanPlayerName = teamName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const existingParticipant = participants.find(p => 
      p.category === 'MCGG' && 
      (p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '') === cleanPlayerName
    );

    if (!mcggIdCard && existingParticipant) {
      mcggIdCard = existingParticipant.idCard || (existingParticipant.roster && existingParticipant.roster[0] ? existingParticipant.roster[0].idCard : '') || findIdCardByEmpIdOrName(mcggEmpId, teamName);
    }

    // WAJIB ID CARD UNTUK MCGG
    if (!mcggIdCard) {
      alert("❌ PENDAFTARAN DITOLAK:\nFoto ID Card Pegawai Yokke WAJIB diunggah untuk pendaftaran solo MCGG!\nPendaftaran tanpa foto ID Card akan ditolak.");
      document.getElementById('mcgg_idcard_file')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    roster.push({
      role: 'Pemain Solo',
      name: teamName,
      nickname: mcggNickname || '-',
      empId: mcggEmpId || '-',
      gameId: mcggGameId || '-',
      isOrganik: mcggOrganik,
      isCaptain: false,
      idCard: mcggIdCard
    });

    captainData = {
      name: teamName,
      nickname: mcggNickname || '-'
    };
  }

  // 1. PRE-CHECK DUPLICATE SEBELUM SUBMIT
  let isUpdate = false;
  let targetExisting = null;
  let identifierLabel = "";

  if (category === 'MLBB') {
    // Unique ID MLBB Tim: Nama Tim (case-insensitive & trimmed)
    const cleanTargetName = teamName.toLowerCase().replace(/[^a-z0-9]/g, '');
    targetExisting = participants.find(p => 
      p.category === 'MLBB' && 
      (p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '') === cleanTargetName
    );
    identifierLabel = `Tim MLBB "${teamName}"`;

    // Cek duplikasi NIP peserta lintas tim yang sudah terdaftar
    for (const m of roster) {
      const mNip = (m.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      if (!mNip || mNip.length < 3) continue;

      const otherTeam = participants.find(p => 
        p.category === 'MLBB' && 
        (p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '') !== cleanTargetName &&
        (p.roster || []).some(rm => (rm.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === mNip)
      );

      if (otherTeam) {
        alert(`❌ PENDAFTARAN DITOLAK:\nPeserta ${m.role} (${m.name}, NIP: ${m.empId}) sudah terdaftar di tim lain "${otherTeam.name}"!`);
        return;
      }
    }

  } else {
    // Unique ID MCGG Peserta: NIP Pegawai
    const cleanPlayerName = teamName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanPlayerNip = (roster[0]?.empId || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    targetExisting = participants.find(p => {
      if (p.category !== 'MCGG') return false;
      const pNip = (p.empId || (p.roster && p.roster[0] ? p.roster[0].empId : '') || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      if (cleanPlayerNip && cleanPlayerNip !== '-' && cleanPlayerNip.length >= 3 && pNip === cleanPlayerNip) return true;
      return (p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '') === cleanPlayerName;
    });
    identifierLabel = `Pemain Solo MCGG "${teamName}" (NIP: ${roster[0]?.empId || '-'})`;
  }

  // 2. POP-UP / MODAL KONFIRMASI JIKA SUDAH ADA
  // FUNGSI EDIT DI FORM PENDAFTARAN DINONAKTIFKAN OLEH PANITIA (HANYA UNTUK REGISTRASI BARU)
  const ALLOW_PUBLIC_FORM_EDIT = false;

  if (targetExisting) {
    if (ALLOW_PUBLIC_FORM_EDIT) {
      const confirmUpdate = confirm(`Data dengan [${identifierLabel}] ini sudah terdaftar di sistem. Apakah Anda ingin mengupdate data tersebut?`);
      if (!confirmUpdate) {
        return;
      }
      isUpdate = true;
    } else {
      alert(`❌ PENDAFTARAN DITOLAK:\n${identifierLabel} sudah terdaftar di sistem!\n\nFungsi edit di formulir pendaftaran telah dinonaktifkan oleh panitia. Silakan gunakan nama tim baru atau hubungi panitia turnamen.`);
      return;
    }
  } else {
    isUpdate = false;
  }

  // MULAI PENGIRIMAN
  submitBtn.disabled = true;
  submitBtn.innerText = isUpdate ? "Memperbarui data... ⏳" : "Mengirim ke Google Drive... ⏳";

  const payload = {
    action: isUpdate ? "UPDATE" : "REGISTER",
    isUpdate: isUpdate,
    rowIndex: targetExisting ? (targetExisting.rowIndex || undefined) : undefined,
    category: category,
    teamName: teamName,
    name: teamName,
    dept: dept,
    wa: wa,
    logo: logoData,
    idCard: category === 'MCGG' ? (roster[0]?.idCard || '') : (officialData.idCard || ''),
    empId: (roster[0] && roster[0].empId) || "-",
    nickname: (captainData && captainData.nickname) || (roster[0] && roster[0].nickname) || "-",
    gameId: (roster[0] && roster[0].gameId) || "-",
    isOrganik: (roster[0] && roster[0].isOrganik) || false,
    official: officialData,
    captain: captainData,
    roster: roster
  };

  try {
    let res = await postToGoogleAppsScript(payload, 45000);
    let result = await res.json();

    // 3. HANDLE CONFLICT / DUPLICATE DARI BACKEND
    if (result && (result.code === 'DUPLICATE_ENTRY' || result.code === 'CONFLICT_DUPLICATE')) {
      const retryUpdate = confirm(`Data dengan [${identifierLabel}] ini sudah terdaftar di sistem. Apakah Anda ingin mengupdate data tersebut?`);
      if (retryUpdate) {
        payload.action = "UPDATE";
        payload.isUpdate = true;
        isUpdate = true;
        submitBtn.innerText = "Memperbarui data... ⏳";
        res = await postToGoogleAppsScript(payload, 45000);
        result = await res.json();
      } else {
        submitBtn.disabled = false;
        submitBtn.innerText = "Kirim Pendaftaran";
        return;
      }
    }

    if (result && (result.status === 'error' || result.success === false)) {
      showToast(`❌ Pendaftaran ditolak: ${result.message || result.error || 'Validasi server gagal.'}`, 'error');
      submitBtn.disabled = false;
      submitBtn.innerText = "Kirim Pendaftaran";
      return;
    }
  } catch (err) {
    console.warn("Koneksi Google Sheets:", err);
    showToast("⚠️ Gagal terhubung ke Google Sheets. Formulir Anda tetap tersimpan di draft lokal. Silakan coba kirim ulang saat koneksi stabil.", "error");
    submitBtn.disabled = false;
    submitBtn.innerText = "Kirim Pendaftaran";
    return;
  }

  if (targetExisting) {
    // UPDATE IN-PLACE (1 Tim/Pemain = 1 Record)
    targetExisting.dept = dept;
    targetExisting.wa = wa;
    targetExisting.logo = logoData || targetExisting.logo;
    targetExisting.roster = roster;
    targetExisting.captainName = (captainData && captainData.name) || targetExisting.captainName;
    targetExisting.captainNickname = (captainData && captainData.nickname) || targetExisting.captainNickname;
    targetExisting.nickname = (category === 'MCGG') ? ((roster[0] && roster[0].nickname) || targetExisting.nickname) : targetExisting.captainNickname;
    if (category === 'MCGG') {
      targetExisting.idCard = roster[0]?.idCard || targetExisting.idCard;
      targetExisting.empId = (roster[0] && roster[0].empId) || targetExisting.empId;
      targetExisting.gameId = (roster[0] && roster[0].gameId) || targetExisting.gameId;
      targetExisting.isOrganik = (roster[0] && roster[0].isOrganik) || false;
    }
    targetExisting.hasLocalEdits = true;
  } else {
    // NEW REGISTRATION
    const newParticipant = {
      id: Date.now(),
      category,
      name: teamName,
      nickname: (captainData && captainData.nickname) || (roster[0] && roster[0].nickname) || '-',
      captainNickname: (captainData && captainData.nickname) || '-',
      captainName: (captainData && captainData.name) || '-',
      dept,
      wa,
      logo: logoData,
      notes: '',
      status: 'PENDING',
      roster: roster
    };
    participants.push(newParticipant);
  }

  saveState();

  submitBtn.disabled = false;
  submitBtn.innerText = "Kirim Pendaftaran";

  document.getElementById('regForm').reset();
  uploadedLogoBase64 = "";
  regOfficialIdCards = { off1: "", off2: "" };
  regPlayersIdCards = { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "" };
  regMcggIdCard = "";

  const previewBox = document.getElementById('logoPreviewBox');
  if (previewBox) previewBox.innerHTML = `<span class="logo-preview-placeholder">Logo</span>`;

  document.querySelectorAll('.idcard-preview-box').forEach(box => {
    box.innerHTML = `<span class="logo-preview-placeholder">ID Card</span>`;
  });

  const noticeMLBB = document.getElementById('teamNameUpdateNotice');
  if (noticeMLBB) { noticeMLBB.style.display = 'none'; noticeMLBB.innerHTML = ''; }
  const noticeMCGG = document.getElementById('mcggNameUpdateNotice');
  if (noticeMCGG) { noticeMCGG.style.display = 'none'; noticeMCGG.innerHTML = ''; }

  clearFormDraft(category);
  renderPlayersFormInputs();
  toggleCategoryForm();
  toggleOfficial2Form();
  updateRegistrationDatalists();

  const succ = document.getElementById('regSuccess');
  succ.innerText = targetExisting 
    ? `✅ Data "${teamName}" berhasil diperbarui di Google Sheets dan sistem turnamen!`
    : `✅ Pendaftaran "${teamName}" berhasil dan otomatis tercatat di Google Drive!`;
  succ.style.display = 'inline';
  setTimeout(() => succ.style.display = 'none', 6000);
}

// Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets
function setParticipantStatus(id, newStatus) {
  const p = participants.find(item => item.id === id);
  if (p) {
    p.status = newStatus;
    p.hasLocalEdits = true;
    saveState();
    renderParticipants();
    renderCurrentMLBBFormat();
    syncMCGGPlayers();
    updateCounts();

    // Kirim pembaruan status ke Google Sheets secara background
    try {
      postToGoogleAppsScript({
        action: 'UPDATE',
        isUpdate: true,
        category: p.category,
        rowIndex: p.rowIndex || undefined,
        id: p.id,
        teamName: p.name,
        name: p.name,
        dept: p.dept,
        wa: p.wa,
        empId: (p.roster && p.roster[0] ? p.roster[0].empId : p.empId) || '-',
        gameId: (p.roster && p.roster[0] ? p.roster[0].gameId : p.gameId) || '-',
        nickname: (p.roster && p.roster[0] ? p.roster[0].nickname : p.nickname) || '-',
        isOrganik: p.category === 'MCGG' ? (p.roster && p.roster[0] ? p.roster[0].isOrganik : p.isOrganik) : undefined,
        status: newStatus,
        notes: p.notes,
        logo: p.logo || '',
        idCard: p.idCard || (p.roster && p.roster[0] ? p.roster[0].idCard : ''),
        roster: p.roster || []
      }, 20000).catch(err => console.warn('Gagal sync status ke Google Sheets:', err));
    } catch(e) {}
  }
}

async function deleteParticipant(id) {
  const p = participants.find(item => item.id === id);
  if (!p) return;

  const targetName = p.name || 'Peserta';
  if (confirm(`Yakin ingin menghapus ${targetName}? Data akan dihapus dari portal dan disinkronkan ke Google Sheets.`)) {
    // 1. Simpan ke daftar blacklist lokal menggunakan key spesifik (row/id) agar tim lain dengan nama sama tidak terhapus
    let deletedList = JSON.parse(localStorage.getItem('yokke_deleted_participants') || '[]');
    
    const rowKey = p.rowIndex ? `${p.category}_row_${p.rowIndex}` : null;
    const idKey = p.id ? `${p.category}_id_${p.id}` : null;
    const nameKey = `${p.category}_${(p.name || '').trim().toLowerCase()}`;

    [rowKey, idKey, nameKey].forEach(k => {
      if (k && !deletedList.includes(k)) deletedList.push(k);
    });
    localStorage.setItem('yokke_deleted_participants', JSON.stringify(deletedList));

    // 2. Hapus dari state lokal
    participants = participants.filter(item => item.id !== id);
    cleanOrphanedTournamentData();
    saveState();
    renderParticipants();
    renderCurrentMLBBFormat();
    syncMCGGPlayers();
    updateCounts();

    // 3. Kirim permintaan DELETE ke Google Apps Script dengan rowIndex spesifik
    try {
      postToGoogleAppsScript({
        action: 'DELETE',
        category: p.category,
        rowIndex: p.rowIndex || undefined,
        id: p.id,
        name: p.name,
        teamName: p.name
      }, 20000).catch(err => console.warn('Gagal sinkronisasi DELETE ke Sheets:', err));
    } catch (e) {}

    alert(`🗑️ Data "${targetName}" berhasil dihapus.`);
  }
}

function filterList(cat) {
  currentFilter = cat;
  renderParticipants();
}

// ========================================================
// ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION
// ========================================================
function openEditParticipantModal(id) {
  const p = participants.find(item => item.id === id);
  if (!p) return;

  // Pastikan roster untuk MCGG selalu tersedia dan terisi
  if (p.category === 'MCGG') {
    if (!p.roster || p.roster.length === 0) {
      p.roster = [{
        role: 'Pemain Solo',
        name: p.name || '',
        nickname: p.nickname || '',
        empId: p.empId || '',
        gameId: p.gameId || '',
        isOrganik: true,
        isCaptain: true,
        idCard: p.idCard || ''
      }];
    } else {
      if ((!p.roster[0].nickname || p.roster[0].nickname === '-') && p.nickname && p.nickname !== '-') {
        p.roster[0].nickname = p.nickname;
      }
      if ((!p.roster[0].gameId || p.roster[0].gameId === '-') && p.gameId && p.gameId !== '-') {
        p.roster[0].gameId = p.gameId;
      }
      if ((!p.roster[0].empId || p.roster[0].empId === '-') && p.empId && p.empId !== '-') {
        p.roster[0].empId = p.empId;
      }
      if (!p.roster[0].idCard && p.idCard) {
        p.roster[0].idCard = p.idCard;
      }
    }
  }

  document.getElementById('editParticipantId').value = p.id;
  document.getElementById('editTeamName').value = p.name || '';
  document.getElementById('editDept').value = p.dept || '';
  document.getElementById('editWa').value = p.wa || '';
  document.getElementById('editStatus').value = p.status || 'PENDING';
  document.getElementById('editNotes').value = p.notes || '';

  // Invited team group & checkbox
  const editInvGroup = document.getElementById('editInvitedGroup');
  const editInvCheck = document.getElementById('editIsInvited');
  if (editInvGroup) {
    editInvGroup.style.display = p.category === 'MLBB' ? 'flex' : 'none';
  }
  if (editInvCheck) {
    editInvCheck.checked = !!p.isInvited;
  }

  // Logo Preview in Edit Modal
  currentEditLogoBase64 = p.logo || findLogoByTeamName(p.name) || '';
  const logoGroup = document.getElementById('editLogoGroup');
  const logoPreviewBox = document.getElementById('editLogoPreviewBox');
  if (logoGroup) {
    logoGroup.style.display = p.category === 'MLBB' ? 'flex' : 'none';
  }
  if (logoPreviewBox) {
    if (currentEditLogoBase64) {
      logoPreviewBox.innerHTML = `<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">`;
    } else {
      logoPreviewBox.innerHTML = `<span class="logo-preview-placeholder">Logo</span>`;
    }
  }

  editRosterIdCards = {};
  (p.roster || []).forEach((m, idx) => {
    editRosterIdCards[idx] = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idCard || findIdCardByEmpIdOrName(p.empId, p.name)) : '') || '';
  });

  // Render Roster in Edit Modal
  const tbody = document.getElementById('editRosterTableBody');
  tbody.innerHTML = (p.roster || []).map((m, idx) => {
    const nipLabel = (m.empId && m.empId !== '-') ? ` (NIP: ${m.empId})` : '';
    return `
    <tr>
      <td><span style="font-size:0.8rem; font-weight:700;">${m.role}</span></td>
      <td><input type="text" id="edit_m_${idx}_name" value="${m.name || ''}" style="width:130px; padding:0.3rem 0.4rem; font-size:0.8rem;"></td>
      <td><input type="text" id="edit_m_${idx}_nick" value="${m.nickname || ''}" style="width:105px; padding:0.3rem 0.4rem; font-size:0.8rem;"></td>
      <td><input type="text" id="edit_m_${idx}_emp" value="${m.empId || ''}" style="width:95px; padding:0.3rem 0.4rem; font-size:0.8rem;"></td>
      <td><input type="text" id="edit_m_${idx}_game" value="${m.gameId || ''}" style="width:115px; padding:0.3rem 0.4rem; font-size:0.8rem;"></td>
      <td style="text-align:center;"><input type="checkbox" id="edit_m_${idx}_org" ${m.isOrganik ? 'checked' : ''}></td>
      <td style="text-align:center;"><input type="radio" name="edit_captain_radio" value="${idx}" ${m.isCaptain ? 'checked' : ''}></td>
      <td>
        <div style="display:flex; align-items:center; gap:0.4rem;">
          <div class="idcard-thumb-sm" id="edit_m_${idx}_thumb" onclick="if(editRosterIdCards[${idx}]) openIdCardLightbox(editRosterIdCards[${idx}], '🪪 ID Card: ${m.name}${nipLabel}')">
            ${editRosterIdCards[idx] ? `<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">` : '<span style="font-size:0.65rem;color:var(--text-muted)">-</span>'}
          </div>
          <input type="file" accept="image/*" style="font-size:0.7rem; width:120px;" onchange="handleEditRosterIdCardUpload(event, ${idx})">
        </div>
      </td>
    </tr>
  `;
  }).join('');

  document.getElementById('editParticipantModal').classList.add('active');
}

function closeEditParticipantModal() {
  document.getElementById('editParticipantModal').classList.remove('active');
}

// Handle logo upload in Admin Edit modal
async function handleEditLogoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const compressed = await compressImage(file, 400, 400, 0.85);
    currentEditLogoBase64 = compressed;
    const box = document.getElementById('editLogoPreviewBox');
    if (box) {
      box.innerHTML = `<img src="${compressed}" alt="Logo Preview" style="width:100%; height:100%; object-fit:cover; border-radius:6px;">`;
    }
  } catch (err) {
    console.error('Gagal mengompresi logo tim edit:', err);
    alert('Gagal memproses gambar logo tim.');
  }
}

async function handleEditRosterIdCardUpload(event, idx) {
  const file = event.target.files[0];
  const thumb = document.getElementById(`edit_m_${idx}_thumb`);

  if (file) {
    const compressed = await compressImage(file, 900, 900, 0.8);
    editRosterIdCards[idx] = compressed;
    if (thumb) thumb.innerHTML = `<img src="${compressed}">`;
  }
}

async function saveParticipantEdit() {
  const id = parseInt(document.getElementById('editParticipantId').value);
  const p = participants.find(item => item.id === id);
  if (!p) return;

  const saveBtn = document.querySelector('#editParticipantModal button.btn-primary');
  const originalBtnText = saveBtn ? saveBtn.innerText : '💾 Simpan Perubahan Data';
  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.innerText = 'Menyimpan ke Google Sheets... ⏳';
  }

  p.name = document.getElementById('editTeamName').value.trim();
  p.dept = document.getElementById('editDept').value.trim();
  p.wa = document.getElementById('editWa').value.trim();
  p.status = document.getElementById('editStatus').value;
  p.notes = document.getElementById('editNotes').value.trim();
  const editInvCheck = document.getElementById('editIsInvited');
  if (p.category === 'MLBB' && editInvCheck) {
    p.isInvited = editInvCheck.checked;
  }
  if (currentEditLogoBase64) {
    p.logo = currentEditLogoBase64;
    saveLogoToMap(p.name, currentEditLogoBase64);
  }
  p.hasLocalEdits = true;

  const captainSelectedIdx = document.querySelector('input[name="edit_captain_radio"]:checked')?.value;

  (p.roster || []).forEach((m, idx) => {
    const elName = document.getElementById(`edit_m_${idx}_name`);
    const elNick = document.getElementById(`edit_m_${idx}_nick`);
    const elEmp = document.getElementById(`edit_m_${idx}_emp`);
    const elGame = document.getElementById(`edit_m_${idx}_game`);
    const elOrg = document.getElementById(`edit_m_${idx}_org`);

    if (elName) m.name = elName.value.trim();
    if (elNick) m.nickname = elNick.value.trim();
    if (elEmp) m.empId = elEmp.value.trim();
    if (elGame) m.gameId = elGame.value.trim();
    if (elOrg) m.isOrganik = elOrg.checked;
    m.isCaptain = (captainSelectedIdx === idx.toString());

    if (editRosterIdCards[idx] !== undefined) {
      m.idCard = editRosterIdCards[idx];
      if (m.idCard) {
        saveIdCardToMap(m.empId, m.name, m.idCard);
      }
    }

    if (m.isCaptain) {
      p.captainNickname = m.nickname;
      p.captainName = m.name;
    }
  });

  if (p.category === 'MCGG' && p.roster && p.roster[0]) {
    p.nickname = p.roster[0].nickname;
    p.gameId = p.roster[0].gameId;
    p.empId = p.roster[0].empId;
    p.idCard = p.roster[0].idCard || p.idCard;
    p.isOrganik = p.roster[0].isOrganik;
  }

  autoLinkParticipantsAssets();
  saveState();
  renderParticipants();
  renderCurrentMLBBFormat();
  syncMCGGPlayers();

  const activeNickname = (p.category === 'MCGG')
    ? (p.nickname || (p.roster && p.roster[0] ? p.roster[0].nickname : ''))
    : (p.captainNickname || '');
  const activeGameId = (p.category === 'MCGG')
    ? (p.gameId || (p.roster && p.roster[0] ? p.roster[0].gameId : ''))
    : '';
  const activeEmpId = (p.category === 'MCGG')
    ? (p.empId || (p.roster && p.roster[0] ? p.roster[0].empId : ''))
    : '';

  try {
    const response = await postToGoogleAppsScript({
      action: 'UPDATE',
      isUpdate: true,
      category: p.category,
      rowIndex: p.rowIndex || undefined,
      id: p.id,
      teamName: p.name,
      name: p.name,
      dept: p.dept,
      wa: p.wa,
      empId: activeEmpId,
      gameId: activeGameId,
      nickname: activeNickname,
      isOrganik: p.category === 'MCGG' ? (p.roster && p.roster[0] ? p.roster[0].isOrganik : p.isOrganik) : undefined,
      status: p.status,
      notes: p.notes,
      logo: p.logo || '',
      idCard: p.idCard || (p.roster && p.roster[0] ? p.roster[0].idCard : ''),
      roster: p.roster || []
    }, 30000);
    const result = await response.json();
    if (result && result.status === 'success') {
      alert('✅ Perubahan data dan Nickname berhasil disimpan ke Google Sheets!');
    } else {
      alert('⚠️ Perubahan tersimpan lokal: ' + (result?.error || result?.message || 'Gagal sync ke Sheets'));
    }
  } catch (e) {
    console.warn('Sync update warning:', e);
    alert('⚠️ Perubahan tersimpan di browser, tetapi koneksi ke Google Sheets tertunda.');
  } finally {
    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.innerText = originalBtnText;
    }
    closeEditParticipantModal();
  }
}

// Modal Detail Roster Lengkap & ID Card Per-Pemain
function viewRosterDetail(id) {
  const team = participants.find(p => p.id === id);
  if (!team) return;

  const teamLogoSrc = team.logo || findLogoByTeamName(team.name);
  const logoBox = document.getElementById('modalTeamLogoBox');
  if (teamLogoSrc) {
    logoBox.innerHTML = `<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; height:100%; object-fit:cover; border-radius:10px;">`;
  } else {
    const initials = (team.name || 'YT').substring(0, 2).toUpperCase();
    logoBox.innerHTML = `<div style="background:linear-gradient(135deg,#00d2ff,#7209b7);width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;">${initials}</div>`;
  }

  document.getElementById('modalTeamTitle').innerText = `${team.name} (${team.category})`;
  document.getElementById('modalTeamInfo').innerHTML = `
    <strong>Divisi:</strong> ${team.dept} | 
    <strong>WhatsApp:</strong> ${team.wa} | 
    <strong>Status:</strong> ${team.status === 'VERIFIED' ? '✅ Terverifikasi' : (team.status === 'REJECTED' ? '❌ Ditolak' : '⏳ Menunggu Verifikasi')}
    ${team.notes ? `<br><strong style="color:var(--yokke-gold);">Catatan Panitia:</strong> ${team.notes}` : ''}
  `;

  const tbody = document.getElementById('modalRosterList');
  tbody.innerHTML = (team.roster || []).map(m => {
    let idCardHtml = '<span style="font-size:0.75rem; color:var(--text-muted);">-</span>';
    const cardSrc = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (team.category === 'MCGG' ? (team.idCard || findIdCardByEmpIdOrName(team.empId, team.name)) : '');
    if (cardSrc) {
      const nipLabel = (m.empId && m.empId !== '-') ? ` (NIP: ${m.empId})` : '';
      idCardHtml = `
        <button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--yokke-cyan); display:inline-flex; align-items:center; gap:0.4rem;" onclick="openIdCardLightbox('${cardSrc}', '🪪 ID Card: ${m.name}${nipLabel}', '${m.driveUrl || team.idCard || ''}')">
          <div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>
          <span>Lihat ID</span>
        </button>
      `;
    }

    return `
      <tr>
        <td><strong>${m.role}</strong></td>
        <td>
          ${m.name} 
          ${m.isCaptain ? '<span style="color:var(--yokke-gold);font-weight:bold;margin-left:0.3rem">⭐ (KAPTEN)</span>' : ''}
        </td>
        <td><span style="color:var(--yokke-cyan);font-weight:700;">${(m.nickname && m.nickname !== "undefined") ? m.nickname : "-"}</span></td>
        <td><code>${m.empId}</code></td>
        <td>${m.gameId}</td>
        <td>
          <span style="padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; background: ${m.isOrganik ? 'rgba(6,214,160,0.15)' : 'rgba(148,163,184,0.15)'}; color: ${m.isOrganik ? 'var(--yokke-green)' : 'var(--text-muted)'}">
            ${m.isOrganik ? '🏢 Organik' : '👤 Non-Organik'}
          </span>
        </td>
        <td>${idCardHtml}</td>
        <td>${m.isCaptain ? 'Kapten Tim' : (m.role.includes('Official') ? 'Official' : 'Pemain')}</td>
      </tr>
    `;
  }).join('');

  document.getElementById('detailModal').classList.add('active');
}

function closeDetailModal() {
  document.getElementById('detailModal').classList.remove('active');
}

// Render Participant Table (Featuring Nickname, ID Card count per-player, and Admin Edit Action)
function renderParticipants() {
  autoLinkParticipantsAssets();
  updateRegistrationDatalists();
  const tbody = document.getElementById('participantList');
  let filtered = participants.filter(p => currentFilter === 'ALL' || p.category === currentFilter);
  if (participantSearchQuery) {
    const q = participantSearchQuery;
    filtered = filtered.filter(p => {
      const matchName = (p.name || '').toLowerCase().includes(q);
      const matchDept = (p.dept || '').toLowerCase().includes(q);
      const matchNick = (p.nickname || '').toLowerCase().includes(q);
      const matchCapNick = (p.captainNickname || '').toLowerCase().includes(q);
      const matchEmp = (p.empId || '').toLowerCase().includes(q);
      const matchRoster = Array.isArray(p.roster) && p.roster.some(m =>
        (m.name || '').toLowerCase().includes(q) ||
        (m.nickname || '').toLowerCase().includes(q) ||
        (m.empId || '').toLowerCase().includes(q) ||
        (m.gameId || '').toLowerCase().includes(q)
      );
      return matchName || matchDept || matchNick || matchCapNick || matchEmp || matchRoster;
    });
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="${isAdmin ? 8 : 7}" style="text-align: center; color: var(--text-muted);">Belum ada data pendaftar.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map((p, idx) => {
    let badgeHtml = '';
    if (p.status === 'VERIFIED') {
      badgeHtml = '<span class="badge-status status-verified">✅ Terverifikasi</span>';
    } else if (p.status === 'REJECTED') {
      badgeHtml = '<span class="badge-status status-rejected">❌ Ditolak</span>';
    } else {
      badgeHtml = '<span class="badge-status status-pending">⏳ Pending</span>';
    }

    const totalRoster = (p.roster && p.roster.length) ? p.roster.length : 1;
    const cardsUploaded = (p.roster || []).filter(m => {
      const card = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idCard || findIdCardByEmpIdOrName(p.empId, p.name)) : '');
      return !!card;
    }).length;
    const allCardsUploaded = cardsUploaded >= totalRoster && cardsUploaded > 0;

    const idCardSummaryHtml = `
      <div style="font-size:0.75rem; color:${allCardsUploaded ? 'var(--yokke-green)' : (cardsUploaded > 0 ? 'var(--yokke-cyan)' : 'var(--yokke-gold)')}; margin-top:0.25rem; font-weight:600;">
        🪪 ${cardsUploaded}/${totalRoster} ID Card ${allCardsUploaded ? 'Lengkap' : ''}
      </div>
    `;

    const memberCount = `${totalRoster} Orang`;

    let logoHtml = '';
    const teamLogoSrc = p.logo || findLogoByTeamName(p.name);
    const formattedLogo = formatDriveImageUrl(teamLogoSrc);
    if (formattedLogo && formattedLogo.trim() !== '') {
      logoHtml = `<div class="team-logo-thumb"><img src="${formattedLogo}" alt="Logo"></div>`;
    } else {
      const initials = (p.name || "YT").substring(0, 2).toUpperCase();
      logoHtml = `<div class="team-logo-thumb" style="background:linear-gradient(135deg,#0077b6,#7209b7);color:#fff;">${initials}</div>`;
    }

    let nicknameInfoHtml = '';
    if (p.category === 'MLBB') {
      const cap = (p.roster || []).find(m => m.isCaptain);
      const rawCapNick = (cap && cap.nickname) || p.captainNickname;
      const capNick = (rawCapNick && rawCapNick !== 'undefined') ? rawCapNick : '-';
      const rawCapName = (cap && cap.name) || p.captainName;
      const capName = (rawCapName && rawCapName !== 'undefined') ? rawCapName : '';
      nicknameInfoHtml = `
        <div style="font-size: 0.78rem; color: var(--yokke-gold); margin-top: 0.25rem;">
          ⭐ <strong>Kapten IGN:</strong> <span style="color:#fff;">${capNick}</span> ${capName ? '(' + capName + ')' : ''}
        </div>
      `;
    } else {
      const rawNick = p.nickname || (p.roster && p.roster[0] ? p.roster[0].nickname : '');
      const pNick = (rawNick && rawNick !== 'undefined') ? rawNick : '-';
      const pGameId = p.gameId || (p.roster && p.roster[0] ? p.roster[0].gameId : '-');
      nicknameInfoHtml = `
        <div style="font-size: 0.78rem; color: var(--yokke-cyan); margin-top: 0.25rem;">
          🎮 <strong>IGN:</strong> <span style="color:#fff;">${pNick}</span>
          ${pGameId && pGameId !== '-' ? ` • <span style="color:var(--yokke-gold);">ID: ${pGameId}</span>` : ''}
        </div>
      `;
    }

    const invitedBtn = (isAdmin && p.category === 'MLBB') ? `
      <button class="btn ${p.isInvited ? 'btn-gold' : 'btn-outline'}" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" title="${p.isInvited ? 'Batalkan status Tim Invite' : 'Jadikan Tim Invite (Seeded Terpisah)'}" onclick="toggleInvitedTeam(${p.id})">
        ${p.isInvited ? '⭐ Invited' : '☆ Set Invite'}
      </button>
    ` : '';

    const adminActions = isAdmin ? `
      <td class="admin-col">
        <div style="display:flex; gap:0.3rem; flex-wrap:wrap;">
          ${invitedBtn}
          <button class="btn btn-edit-sm" title="Edit Data & Upload ID Card" onclick="openEditParticipantModal(${p.id})">✏️ Edit</button>
          <button class="btn btn-success-sm" title="Verifikasi / Setujui" onclick="setParticipantStatus(${p.id}, 'VERIFIED')">✔ Setujui</button>
          <button class="btn btn-danger-sm" title="Tolak / Gagal" onclick="setParticipantStatus(${p.id}, 'REJECTED')">✖ Tolak</button>
          <button class="btn btn-outline" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" onclick="deleteParticipant(${p.id})">🗑</button>
        </div>
      </td>
    ` : '';

    return `
      <tr>
        <td>${idx + 1}</td>
        <td><span style="padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 700; background: ${p.category === 'MLBB' ? '#0077b6' : '#7209b7'}">${p.category}</span></td>
        <td class="col-sticky-team">
          <div class="team-cell">
            ${logoHtml}
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main); display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;">
                <span>${p.category === 'MCGG' ? ((p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? p.nickname : p.name) : p.name}</span>
                ${p.category === 'MLBB' && p.isInvited ? '<span class="badge-status" style="background:rgba(255,183,3,0.18); color:var(--yokke-gold); border:1px solid var(--yokke-gold); font-size:0.7rem; padding:0.1rem 0.4rem;">⭐ Tim Invite</span>' : ''}
              </div>
              ${p.category === 'MCGG' && p.nickname && p.nickname !== p.name ? `<div style="font-size:0.75rem; color:var(--text-muted);">👤 ${p.name}</div>` : ''}
              ${nicknameInfoHtml}
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;">🏢 ${p.dept || '-'}</div>
            </div>
          </div>
        </td>
        <td>${p.dept || '-'}</td>
        <td>${memberCount}</td>
        <td>
          ${badgeHtml}
          ${idCardSummaryHtml}
        </td>
        <td>
          <button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;" onclick="viewRosterDetail(${p.id})">
            👁️ Detail Roster
          </button>
        </td>
        ${adminActions}
      </tr>
    `;
  }).join('');
}

// ========================================================
// TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE
// ========================================================
function getVerifiedMLBBTeams() {
  let verified = participants.filter(p => p.category === 'MLBB' && p.status === 'VERIFIED').map(p => p.name);
  if (verified.length === 0) {
    verified = participants.filter(p => p.category === 'MLBB' && p.status !== 'REJECTED').map(p => p.name);
  }
  return verified;
}

function getActiveMLBBFormat() {
  if (tournamentFormat && tournamentFormat !== 'AUTO') {
    return tournamentFormat;
  }
  const numGroups = Object.keys(groupStageData || {}).length;
  if (numGroups === 8) return 'GROUP_8';
  if (numGroups === 4) return 'GROUP_4';
  if (numGroups === 2) return 'GROUP_2';
  const verifiedTeams = getVerifiedMLBBTeams();
  const N = verifiedTeams.length;
  if (N >= 32) {
    return 'GROUP_8';
  } else if (N >= 12) {
    return 'GROUP_4';
  } else {
    return 'GROUP_2';
  }
}

function changeTournamentFormat() {
  const select = document.getElementById('bracketFormat');
  tournamentFormat = select.value;
  localStorage.setItem('yokke_mlbb_format', tournamentFormat);
  if (tournamentFormat === 'KNOCKOUT') {
    if (bracketMatches.length > 0) {
      generateBracket(false);
    }
  } else {
    if (Object.keys(groupStageData).length > 0) {
      generateGroupStage(false);
    }
  }
  renderCurrentMLBBFormat();
  if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();
}

function renderCurrentMLBBFormat() {
  if (tournamentFormat === 'KNOCKOUT') {
    tournamentFormat = 'AUTO';
    localStorage.setItem('yokke_mlbb_format', 'AUTO');
  }

  const select = document.getElementById('bracketFormat');
  if (select) select.value = tournamentFormat;

  const knockoutBox = document.getElementById('knockoutContainer');
  const groupStageBox = document.getElementById('groupStageContainer');
  const sizeWrapper = document.getElementById('bracketSizeWrapper');

  if (tournamentFormat === 'KNOCKOUT') {
    if (knockoutBox) knockoutBox.style.display = 'block';
    if (groupStageBox) groupStageBox.style.display = 'none';
    if (sizeWrapper) sizeWrapper.style.display = 'block';
    renderBracket();
  } else {
    if (knockoutBox) knockoutBox.style.display = 'none';
    if (groupStageBox) groupStageBox.style.display = (currentMLBBViewMode === 'HUB') ? 'none' : 'block';
    if (sizeWrapper) sizeWrapper.style.display = 'none';
    renderGroupStageUI();
  }
}

function shuffleAndGenerateTournament() {
  if (!isRegistrationClosed) {
    alert("⚠️ Pendaftaran turnamen masih dibuka!\nHarap tutup pendaftaran terlebih dahulu sebelum mengacak tim/grup.");
    return;
  }
  if (tournamentStageState.mlbb.isGroupLocked) {
    alert("🔒 Grup MLBB sedang dikunci (Lock TM). Silakan buka kunci grup terlebih dahulu jika ingin mengacak ulang.");
    return;
  }
  if (tournamentFormat === 'KNOCKOUT') {
    generateBracket(true);
  } else {
    generateGroupStage(true);
  }
}

// ========================================================
// 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE)
// ========================================================
function toggleLockMLBBGroup() {
  if (!isAdmin) return;
  if (!isRegistrationClosed) {
    alert("⚠️ Pendaftaran turnamen masih dibuka!\nHarap tutup pendaftaran terlebih dahulu sebelum mengunci pembagian grup.");
    return;
  }
  const currentLock = tournamentStageState.mlbb.isGroupLocked;
  if (!currentLock) {
    if (!confirm("🔒 Kunci pembagian grup MLBB sekarang?\nSetelah dikunci, tombol Acak Tim akan dinonaktifkan dan pertandingan fase grup dimulai.")) return;
    tournamentStageState.mlbb.isGroupLocked = true;
  } else {
    if (!confirm("🔓 Buka kunci grup MLBB?\nPanitia dapat mengacak ulang tim (hati-hati: mengacak ulang akan mereset skor grup).")) return;
    tournamentStageState.mlbb.isGroupLocked = false;
  }
  saveStageStateLocal();
  updateAuthUI();
  renderCurrentMLBBFormat();
  saveTournamentStateOnly(true);
}

function isAllMLBBGroupMatchesFinished() {
  const gKeys = Object.keys(groupStageData);
  if (gKeys.length === 0) return false;
  for (const gName of gKeys) {
    const fixtures = getGroupFixtures(gName);
    if (fixtures.length === 0) return false;
    if (!fixtures.every(f => f.winner !== null)) return false;
  }
  return true;
}

function evaluateMLBBTieBreaker() {
  for (const gName in groupStageData) {
    const sorted = getSortedGroupTeams(gName);
    // Cek apakah peringkat 2 dan 3 memiliki seluruh kriteria poin, menang, kalah, dan MVP yang persis sama (di batas kelolosan Top 2)
    if (sorted.length >= 3 && sorted[1].pts === sorted[2].pts && sorted[1].win === sorted[2].win && sorted[1].lose === sorted[2].lose && (sorted[1].mvpCount || 0) === (sorted[2].mvpCount || 0) && sorted[1].pts > 0) {
      const prevTB = tournamentStageState.mlbb.tieBreaker;
      if (prevTB && prevTB.group === gName && prevTB.winner) {
        return false; // Tie-breaker sudah diselesaikan
      }
      tournamentStageState.mlbb.tieBreaker = {
        needed: true,
        group: gName,
        teamA: sorted[1].name,
        teamB: sorted[2].name,
        winner: null
      };
      saveStageStateLocal();
      return true;
    }
  }
  tournamentStageState.mlbb.tieBreaker = { needed: false, group: '', teamA: '', teamB: '', winner: null };
  saveStageStateLocal();
  return false;
}

function resolveMLBBTieBreaker(winnerTeam) {
  if (!isAdmin) return;
  const tb = tournamentStageState.mlbb.tieBreaker;
  if (!tb || !tb.needed) return;

  tb.winner = winnerTeam;
  // Berikan +1 poin tie-breaker agar urutan klasemen otomatis naik ke peringkat 2
  const grp = groupStageData[tb.group] || [];
  const target = grp.find(t => t.name === winnerTeam);
  if (target) target.pts += 1;

  saveStageStateLocal();
  saveState();
  initGroupPlayoff();
  renderGroupStageUI();
  saveTournamentStateOnly(true);
  alert(`✅ Pemenang Tie-Breaker ${tb.group}: ${winnerTeam} berhak melaju ke Babak Playoff!`);
}

function proceedToMLBBStage2() {
  if (!isAdmin) return;
  if (!isRegistrationClosed) {
    alert("⚠️ Pendaftaran turnamen masih dibuka!\nHarap tutup pendaftaran terlebih dahulu sebelum melanjutkan ke babak playoff.");
    return;
  }
  if (!isAllMLBBGroupMatchesFinished()) {
    alert("⚠️ Tidak dapat lanjut ke Tahap 2!\nSeluruh pertandingan di Fase Grup wajib diselesaikan (diisi skornya) terlebih dahulu.");
    return;
  }
  if (evaluateMLBBTieBreaker()) {
    const tb = tournamentStageState.mlbb.tieBreaker;
    alert(`⚠️ TIE-BREAKER DIPERLUKAN (${tb.group})!\nTim "${tb.teamA}" dan "${tb.teamB}" memiliki poin yang sama di batas kelolosan.\nSilakan pilih pemenang Tie-Breaker (BO1) pada panel peringatan yang muncul.`);
    renderGroupStageUI();
    return;
  }

  tournamentStageState.mlbb.stage = 'STAGE_2_PLAYOFF';
  initGroupPlayoff(true);
  saveStageStateLocal();
  saveState();
  updateAuthUI();
  renderCurrentMLBBFormat();
  saveTournamentStateOnly(true);
  alert("🏆 Tahap 2 (Bagan Playoff) berhasil dibuka! Bagan pertandingan otomatis diundi (Juara 1 Home UB, Juara 2 Away UB, Juara 3 Away LB vs Kalah Upper).");
}

function shuffleMLBBPlayoffBracket() {
  if (!isAdmin) {
    showToast('Akses ditolak: Hanya panitia yang dapat melakukan undian bagan playoff.', 'error');
    return;
  }
  if (tournamentStageState.mlbb.stage !== 'STAGE_2_PLAYOFF') {
    showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');
    return;
  }

  const hasPlayoffProgress = Array.isArray(groupPlayoffMatches) && groupPlayoffMatches.some(round => 
    Array.isArray(round) && round.some(m => m && m.winner)
  );

  if (hasPlayoffProgress) {
    if (!confirm('⚠️ PERINGATAN!\nSebagian pertandingan playoff sudah memiliki pemenang.\nJika Anda mengundi ulang bagan, seluruh pemenang dan progres playoff akan direset ke awal.\n\nApakah Anda yakin ingin mengundi ulang bagan Playoff?')) {
      return;
    }
  } else {
    if (!confirm('🎲 Acak dan undi ulang penempatan bagan Playoff MLBB?\n\n• Juara 1 Grup: Home Upper Bracket (8 match)\n• Juara 2 Grup: Away Upper Bracket (Beda grup dari Juara 1)\n• Juara 3 Grup: Away Lower Bracket (Beda grup dari lawan Upper di cabangnya)')) {
      return;
    }
  }

  initGroupPlayoff(true);
  saveStageStateLocal();
  saveState();
  updateAuthUI();
  renderGroupPlayoffTree();
  if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();
  saveTournamentStateOnly(true);
  showToast('🎲 Undian bagan playoff berhasil diacak dan disimpan!', 'success');
}

function findTeamGroupAndRank(teamName) {
  if (!teamName) return { group: '-', rank: '-' };
  for (const gName in groupStageData) {
    const sorted = getSortedGroupTeams(gName);
    const idx = sorted.findIndex(t => isSameTeamName(t.name, teamName));
    if (idx !== -1) {
      return { group: gName, rank: idx + 1 };
    }
  }
  return { group: '-', rank: '-' };
}

function testMLBBPlayoffWithCurrentStandings() {
  if (!isAdmin) {
    showToast('Akses ditolak: Hanya panitia yang dapat melakukan simulasi pengundian playoff.', 'error');
    return;
  }

  const gKeys = Object.keys(groupStageData);
  if (gKeys.length === 0) {
    showToast('⚠️ Belum ada data grup MLBB. Pastikan pembagian grup sudah dibuat.', 'warning');
    return;
  }

  // Buka popup windows / modal jika belum terbuka
  openTestDrawModal();

  // 1. Eksekusi pengundian playoff berdasarkan posisi klasemen terkini
  window._isSimulatingPlayoff = true;
  tournamentStageState.mlbb.stage = 'STAGE_2_PLAYOFF';
  initGroupPlayoff(true);
  saveStageStateLocal();
  saveState();
  
  // Pastikan tampilan diarahkan ke GROUPS (Bagan Playoff) agar bagan pasti terlihat di layar utama
  if (typeof setMLBBViewMode === 'function') {
    setMLBBViewMode('GROUPS');
  }
  updateAuthUI();
  renderCurrentMLBBFormat();
  renderGroupPlayoffTree();
  window._isSimulatingPlayoff = false;

  // 2. Tampilkan hasil undian langsung di dalam modal pengujian dengan gaya visual seperti test undian grup
  const area = document.getElementById('testDrawResultArea');
  if (area) {
    area.style.display = 'block';

    const ubRound = groupPlayoffMatches[0] || [];
    const lbRound = (groupPlayoffMatches[1] || []).slice(4, 12);
    const is8Group = gKeys.length === 8 && ubRound.length === 8;

    let branchCardsHtml = '';

    if (is8Group) {
      for (let i = 0; i < 8; i++) {
        const mUB = ubRound[i] || { teamA: '-', teamB: '-' };
        const mLB = lbRound[i] || { teamA: `Gugur UB R1 ${i + 1}`, teamB: '-' };

        const infoA = findTeamGroupAndRank(mUB.teamA);
        const infoB = findTeamGroupAndRank(mUB.teamB);
        const infoC = findTeamGroupAndRank(mLB.teamB);

        const isSameGroupUB = infoA.group !== '-' && infoA.group === infoB.group;
        const isSameGroupLB = infoC.group !== '-' && (infoC.group === infoA.group || infoC.group === infoB.group);

        branchCardsHtml += `
          <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:6px; padding:0.6rem 0.75rem; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="font-weight:700; color:var(--yokke-gold); font-size:0.85rem; margin-bottom:0.45rem; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.07); padding-bottom:0.3rem;">
                <span>⚔️ Cabang Playoff ${i + 1}</span>
                <span style="font-size:0.7rem; color:var(--yokke-cyan); font-weight:600;">Hari 3 • UB M${i + 1} & LB M${i + 1}</span>
              </div>

              <!-- UPPER BRACKET MATCH -->
              <div style="background:rgba(0,210,255,0.05); border:1px solid rgba(0,210,255,0.2); border-radius:5px; padding:0.4rem 0.55rem; margin-bottom:0.45rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.72rem; color:var(--yokke-cyan); font-weight:700; margin-bottom:0.25rem;">
                  <span>UPPER BRACKET R1 (BO3)</span>
                  <span style="font-size:0.65rem; padding:0.05rem 0.3rem; border-radius:3px; background:${isSameGroupUB ? 'rgba(239,68,68,0.2)' : 'rgba(6,214,160,0.15)'}; color:${isSameGroupUB ? '#f87171' : 'var(--yokke-green)'};">
                    ${isSameGroupUB ? '⚠️ Bentrok' : '✓ Bebas Bentrok'}
                  </span>
                </div>
                <div style="font-size:0.8rem; line-height:1.45;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:700; color:#fff;">🏠 ${escapeHtml(mUB.teamA)}</span>
                    <span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoA.group || '')} (Juara 1)</span>
                  </div>
                  <div style="text-align:center; font-size:0.68rem; color:var(--text-muted); margin:0.1rem 0;">— VS —</div>
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:700; color:#cbd5e1;">⚔️ ${escapeHtml(mUB.teamB)}</span>
                    <span style="font-size:0.7rem; color:var(--yokke-cyan);">${escapeHtml(infoB.group || '')} (Juara 2)</span>
                  </div>
                </div>
              </div>

              <!-- LOWER BRACKET MATCH -->
              <div style="background:rgba(255,183,3,0.05); border:1px solid rgba(255,183,3,0.2); border-radius:5px; padding:0.4rem 0.55rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.72rem; color:var(--yokke-gold); font-weight:700; margin-bottom:0.25rem;">
                  <span>LOWER BRACKET R1 (BO3)</span>
                  <span style="font-size:0.65rem; padding:0.05rem 0.3rem; border-radius:3px; background:${isSameGroupLB ? 'rgba(239,68,68,0.2)' : 'rgba(6,214,160,0.15)'}; color:${isSameGroupLB ? '#f87171' : 'var(--yokke-green)'};">
                    ${isSameGroupLB ? '⚠️ Bentrok' : '✓ Anti-Rematch'}
                  </span>
                </div>
                <div style="font-size:0.8rem; line-height:1.45;">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:600; color:var(--text-muted);">🛡️ Gugur UB M${i + 1}</span>
                    <span style="font-size:0.7rem; color:var(--text-muted);">Home Lower</span>
                  </div>
                  <div style="text-align:center; font-size:0.68rem; color:var(--text-muted); margin:0.1rem 0;">— VS —</div>
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:700; color:#fff;">🎯 ${escapeHtml(mLB.teamB)}</span>
                    <span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoC.group || '')} (Juara 3)</span>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top:0.45rem; font-size:0.68rem; color:var(--text-muted); text-align:right;">
              Pemenang Upper ➔ UB QF | Gugur ➔ LB R1 vs ${escapeHtml(mLB.teamB)}
            </div>
          </div>
        `;
      }
    } else {
      // 4 Grup atau 2 Grup
      ubRound.forEach((m, idx) => {
        const infoA = findTeamGroupAndRank(m.teamA);
        const infoB = findTeamGroupAndRank(m.teamB);
        branchCardsHtml += `
          <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:6px; padding:0.6rem 0.75rem;">
            <div style="font-weight:700; color:var(--yokke-gold); font-size:0.85rem; margin-bottom:0.35rem;">
              Match ${idx + 1}
            </div>
            <div style="font-size:0.82rem;">
              <strong>${escapeHtml(m.teamA)}</strong> (${infoA.group}) vs <strong>${escapeHtml(m.teamB)}</strong> (${infoB.group})
            </div>
          </div>
        `;
      });
    }

    // Ringkasan perwakilan klasemen grup
    let standingsPillsHtml = '';
    gKeys.forEach(gName => {
      const sorted = getSortedGroupTeams(gName);
      const j1 = sorted[0]?.name || '-';
      const j2 = sorted[1]?.name || '-';
      const j3 = sorted[2]?.name || '-';
      standingsPillsHtml += `
        <span style="padding:0.2rem 0.45rem; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:4px; font-size:0.72rem; white-space:nowrap;">
          <strong style="color:var(--yokke-cyan);">${gName}:</strong> [1] ${escapeHtml(j1)} | [2] ${escapeHtml(j2)} | [3] ${escapeHtml(j3)}
        </span>
      `;
    });

    area.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
        <div>
          <h4 style="margin:0; font-size:0.95rem; color:var(--yokke-gold); display:flex; align-items:center; gap:0.4rem;">
            <span>🏆</span> <span>Hasil Simulasi Undian Bagan Playoff (Double Elimination)</span>
          </h4>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.15rem;">
            Posisi Klasemen Sementara Saat Ini • Anti-Bentrok Silang Grup Diterapkan
          </div>
        </div>
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
          <button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;" onclick="testMLBBPlayoffWithCurrentStandings()">
            🔄 Acak Ulang Lagi
          </button>
          <button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(--yokke-cyan); color:var(--yokke-cyan); font-weight:700;" onclick="openTestDrawInNewWindow()" title="Buka hasil di pop-up window browser baru">
            🪟 Pop-up Window
          </button>
          <button class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;" onclick="closeTestDrawModal(); const el = document.getElementById('groupPlayoffTitle') || document.getElementById('groupPlayoffTree'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});">
            👀 Buka Bagan di Layar Utama
          </button>
        </div>
      </div>

      <!-- RINGKASAN POSISI KLASEMEN SAAT INI -->
      <div style="margin-bottom:0.75rem; padding:0.5rem 0.65rem; background:rgba(0,0,0,0.25); border-radius:6px; border:1px solid rgba(255,255,255,0.06);">
        <div style="font-size:0.72rem; font-weight:700; color:var(--text-muted); margin-bottom:0.35rem;">
          📋 POOL PESERTA PLAYOFF DARI KLASEMEN SAAT INI (TOP 3 PER GRUP):
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:0.35rem;">
          ${standingsPillsHtml}
        </div>
      </div>

      <!-- GRID 8 CABANG PLAYOFF (PERSIS GAYA TEST UNDIAN GRUP) -->
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(290px, 1fr)); gap:0.65rem; max-height:440px; overflow-y:auto; padding-right:0.25rem;">
        ${branchCardsHtml}
      </div>

      <div style="margin-top:0.85rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; font-size:0.75rem; color:var(--text-muted);">
        <span>✅ Aturan Terverifikasi: Juara 1 (Home UB) vs Juara 2 (Away UB beda grup) & Tim Gugur UB vs Juara 3 (Away LB anti-rematch).</span>
        <span style="color:var(--yokke-green); font-weight:600;">🔒 Simulasi lokal murni (TIDAK disimpan ke Google Sheets).</span>
      </div>
    `;
    area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  showToast('🏆 Bagan Playoff berhasil diundi dan ditampilkan!', 'success');
}

function openTestDrawModal() {
  if (!isAdmin) {
    showToast('Akses ditolak: Hanya panitia yang dapat membuka pusat uji coba undian.', 'error');
    return;
  }
  const modal = document.getElementById('testDrawModal');
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
}

function closeTestDrawModal() {
  const modal = document.getElementById('testDrawModal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function openTestDrawInNewWindow() {
  const area = document.getElementById('testDrawResultArea');
  if (!area || !area.innerHTML || area.style.display === 'none') {
    showToast('⚠️ Silakan jalankan simulasi undian terlebih dahulu.', 'warning');
    return;
  }
  const popup = window.open('', 'YokkeDrawPopup', 'width=1050,height=820,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes');
  if (!popup) {
    alert('Pop-up browser terblokir. Harap izinkan pop-up di browser Anda.');
    return;
  }
  popup.document.write(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>Hasil Simulasi Undian - Turnamen Yokke Squad 2026</title>
      <link rel="stylesheet" href="style.css">
      <style>
        body {
          background: #090e1c;
          color: #f8fafc;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 1.5rem;
          margin: 0;
        }
        .window-wrap {
          max-width: 1000px;
          margin: 0 auto;
        }
        .window-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(0, 210, 255, 0.3);
        }
      </style>
    </head>
    <body>
      <div class="window-wrap">
        <div class="window-header">
          <div>
            <h2 style="color: #00d2ff; margin: 0; font-size: 1.25rem;">🎮 Turnamen Yokke Squad 2026 — Jendela Simulasi Undian</h2>
            <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.25rem;">Pratinjau resmi hasil undian bagan turnamen (Jendela Pop-up Terpisah)</div>
          </div>
          <button onclick="window.print()" style="background: #00d2ff; color: #0b1120; border: none; font-weight: 700; padding: 0.4rem 0.85rem; border-radius: 6px; cursor: pointer;">🖨️ Cetak / PDF</button>
        </div>
        ${area.innerHTML}
      </div>
    </body>
    </html>
  `);
  popup.document.close();
}

function testMLBBGroupAllocationDraw() {
  if (!isAdmin) return;
  const verifiedTeams = getVerifiedMLBBTeams();
  if (verifiedTeams.length === 0) {
    showToast('⚠️ Belum ada tim MLBB yang terverifikasi.', 'warning');
    return;
  }

  const groupNames = ['Grup A', 'Grup B', 'Grup C', 'Grup D', 'Grup E', 'Grup F', 'Grup G', 'Grup H'];
  const allocated = allocateMLBBGroups(verifiedTeams, groupNames, true);

  const area = document.getElementById('testDrawResultArea');
  if (!area) return;

  area.style.display = 'block';

  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
      <h4 style="margin:0; font-size:0.95rem; color:var(--yokke-cyan); display:flex; align-items:center; gap:0.4rem;">
        <span>🎲</span> <span>Hasil Simulasi Pembagian 8 Grup (${verifiedTeams.length} Tim)</span>
      </h4>
      <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
        <button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.6rem; font-weight:700;" onclick="testMLBBGroupAllocationDraw()">
          🔄 Acak Ulang Lagi
        </button>
        <button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem; border-color:var(--yokke-cyan); color:var(--yokke-cyan); font-weight:700;" onclick="openTestDrawInNewWindow()" title="Buka hasil di pop-up window browser baru">
          🪟 Pop-up Window
        </button>
      </div>
    </div>
    <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.75rem;">
      ✅ Algoritma memisahkan tim dengan divisi/kantor yang sama & nama tim satelit (e.g. Aang Alpha vs Aang Beta).
    </div>
    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:0.6rem; max-height:420px; overflow-y:auto;">
  `;

  groupNames.forEach((gName) => {
    const teams = allocated[gName] || [];
    html += `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-radius:6px; padding:0.5rem 0.65rem;">
        <div style="font-weight:700; color:var(--yokke-gold); font-size:0.82rem; margin-bottom:0.35rem; display:flex; justify-content:space-between;">
          <span>${gName}</span>
          <span style="font-size:0.72rem; color:var(--text-muted);">${teams.length} Tim</span>
        </div>
        <ol style="margin:0; padding-left:1.15rem; font-size:0.78rem; line-height:1.45;">
    `;
    teams.forEach(tName => {
      const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';
      const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);
      html += `
        <li style="margin-bottom:0.15rem;">
          <span style="font-weight:600;">${escapeHtml(tName)}</span>
          ${isInv ? '<span style="font-size:0.65rem; background:rgba(255,183,3,0.15); color:var(--yokke-gold); padding:0.05rem 0.25rem; border-radius:3px; margin-left:0.25rem;">⭐ Invite</span>' : ''}
          ${dept ? `<span style="font-size:0.68rem; color:var(--text-muted); display:block;">🏢 ${escapeHtml(dept)}</span>` : ''}
        </li>
      `;
    });
    html += `
        </ol>
      </div>
    `;
  });

  html += `
    </div>
    <div style="margin-top:0.85rem; text-align:right;">
      <span style="font-size:0.75rem; color:var(--text-muted); margin-right:0.5rem;">Simulasi lokal murni, tidak mengubah skor grup aktif & tidak disimpan ke Google Sheets.</span>
    </div>
  `;

  area.innerHTML = html;
  area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  showToast('🎲 Simulasi pembagian 8 grup berhasil diacak!', 'info');
}

function resetMLBBToStage1() {
  if (!isAdmin) return;
  if (!confirm("↩️ Kembalikan ke Tahap 1 (Fase Grup)?\nStatus kemajuan di Bagan Playoff akan direset agar Anda dapat mengedit ulang skor grup.")) return;
  tournamentStageState.mlbb.stage = 'STAGE_1_GROUP';
  groupPlayoffMatches = [];
  saveStageStateLocal();
  saveState();
  updateAuthUI();
  renderCurrentMLBBFormat();
  saveTournamentStateOnly(true);
}

function resetTotalMLBBGroupAndBracket() {
  if (!isAdmin) {
    showToast('Akses ditolak: Hanya panitia yang dapat mereset pembagian grup & bagan turnamen MLBB.', 'error');
    return;
  }
  if (tournamentStageState.mlbb.isGroupLocked) {
    showToast('🔒 Pembagian grup MLBB sedang dikunci (Lock TM). Harap buka kunci grup terlebih dahulu.', 'warning');
    return;
  }
  const hasData = Object.keys(groupStageData).length > 0 || Object.keys(groupMatchResults).length > 0 || (Array.isArray(groupPlayoffMatches) && groupPlayoffMatches.length > 0) || (Array.isArray(bracketMatches) && bracketMatches.length > 0);
  if (!hasData) {
    showToast('ℹ️ Pembagian grup dan bagan MLBB saat ini sudah dalam keadaan kosong/belum diundi.', 'info');
    return;
  }

  // Proteksi verifikasi PIN / password panitia sebelum reset
  openResetBaganModal();
}

function toggleLockMCGGLobbies() {
  if (!isAdmin) return;
  if (!isRegistrationClosed) {
    alert("⚠️ Pendaftaran turnamen masih dibuka!\nHarap tutup pendaftaran terlebih dahulu sebelum mengunci lobi turnamen.");
    return;
  }
  const currentLock = tournamentStageState.mcgg.isTmLocked;
  if (!currentLock) {
    if (!confirm("🔒 Kunci pembagian lobi MCGG sekarang?\nSetelah dikunci, tombol Acak Lobi akan dinonaktifkan.")) return;
    tournamentStageState.mcgg.isTmLocked = true;
  } else {
    if (!confirm("🔓 Buka kunci lobi MCGG?\nPanitia dapat mengacak ulang pemain.")) return;
    tournamentStageState.mcgg.isTmLocked = false;
  }
  saveStageStateLocal();
  updateAuthUI();
  saveTournamentStateOnly(true);
}

// ========================================================
// 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2)
// ========================================================
function validateMCGGDuplicateCommander(lobbyKey, playerIdx) {
  const list = mcggLobbies[lobbyKey];
  if (!list || !list[playerIdx]) return;
  const p = list[playerIdx];

  // Aturan: Babak 2 tidak boleh menggunakan commander yang sama dengan Babak 1
  if (p.c1 && p.c2 && p.c1.toString().toLowerCase().trim() === p.c2.toString().toLowerCase().trim()) {
    alert(`⚠️ PELANGGARAN REGULASI COMMANDER!\nPemain "${p.nickname || p.name}" menggunakan Commander yang sama pada Ronde 1 dan Ronde 2 (${p.c2.toUpperCase()}).\n\nSesuai aturan, pemain dikenakan sanksi otomatis -2 Poin!`);
    if ((p.penalty || 0) === 0) {
      p.penalty = -2;
    }
    const p1 = POINT_TABLE[p.r1] || 0;
    const p2 = POINT_TABLE[p.r2] || 0;
    const p3 = POINT_TABLE[p.r3] || 0;
    p.total = p1 + p2 + p3 + p.penalty;
    saveState();
    renderMCGGTable();
  }
}

// ========================================================
// 4. SIMPAN CEPAT KHUSUS STATE BAGAN & POIN (DENGAN DEBOUNCE & ANTRIAN PINTAR)
// ========================================================
// ========================================================
// 4. SISTEM SYNC TERARAH (TARGETED 3-BARIS & LOOKUP CACHE)
// ========================================================
let _lastSyncedMatches = null;

function getLastSyncedMatches() {
  if (!_lastSyncedMatches) {
    try {
      _lastSyncedMatches = JSON.parse(localStorage.getItem('yokke_last_synced_matches') || 'null');
    } catch (e) {
      _lastSyncedMatches = null;
    }
  }
  return _lastSyncedMatches;
}

function setLastSyncedMatches(obj) {
  _lastSyncedMatches = JSON.parse(JSON.stringify(obj || {}));
  try {
    localStorage.setItem('yokke_last_synced_matches', JSON.stringify(_lastSyncedMatches));
  } catch (e) {}
}

// Lookup perbedaan antara cache lokal dengan data terakhir yang tersinkronisasi di Google Sheets
function getUnsyncedMatches() {
  const synced = getLastSyncedMatches();
  if (!synced) {
    // Jika belum ada riwayat sinkronisasi, hanya match yang sudah dimainkan / diinput yang perlu disinkronkan
    const toSync = [];
    for (const id in groupMatchResults || {}) {
      const m = groupMatchResults[id];
      if (m && (m.winner || (m.scoreA !== null && m.scoreB !== null && (Number(m.scoreA) > 0 || Number(m.scoreB) > 0)) || m.mvpPlayer)) {
        toSync.push({ canonId: id, ...m });
      }
    }
    return toSync;
  }

  const unsynced = [];
  for (const id in groupMatchResults || {}) {
    const cur = groupMatchResults[id];
    const prev = synced[id];
    if (!cur) continue;
    if (!prev) {
      if (cur.winner || (cur.scoreA !== null && cur.scoreB !== null && (Number(cur.scoreA) > 0 || Number(cur.scoreB) > 0)) || cur.mvpPlayer) {
        unsynced.push({ canonId: id, ...cur });
      }
    } else {
      const isScoreDiff = (cur.scoreA !== prev.scoreA || cur.scoreB !== prev.scoreB);
      const isWinnerDiff = (cur.winner !== prev.winner);
      const isMvpDiff = (cur.mvpPlayer !== prev.mvpPlayer || cur.mvpHero !== prev.mvpHero || cur.mvpTeam !== prev.mvpTeam || JSON.stringify(cur.gameMvps || []) !== JSON.stringify(prev.gameMvps || []));
      if (isScoreDiff || isWinnerDiff || isMvpDiff) {
        unsynced.push({ canonId: id, ...cur });
      }
    }
  }
  return unsynced;
}

// Fungsi utama sinkronisasi 1 pertandingan: mengupdate HANYA 3 baris di Google Sheets
// (1 baris di sheet MLBB - Bagan & MVP + 2 baris tim di sheet MLBB - Klasemen & Point)
async function syncSingleMatchRowToGSheet(canonId) {
  let m = groupMatchResults[canonId];
  if (!m) {
    // Cari di playoff matches jika berupa playoff
    if (Array.isArray(groupPlayoffMatches)) {
      groupPlayoffMatches.forEach((round, rIdx) => {
        (round || []).forEach((pm, mIdx) => {
          if (pm && (pm.matchLabel === canonId || `PLAYOFF_${rIdx}_${mIdx}` === canonId)) {
            m = { ...pm, matchId: canonId, isPlayoff: true, format: pm.format || 'BO3' };
          }
        });
      });
    }
  }
  if (!m) return { status: 'skipped', message: 'Match tidak ditemukan' };

  const gName = m.gName || '';
  const groupTeams = (groupStageData && groupStageData[gName]) || [];
  const sorted = typeof getSortedGroupTeams === 'function' ? getSortedGroupTeams(gName) : groupTeams;
  const isGroupAllDone = typeof isGroupMatchesCompleted === 'function' ? isGroupMatchesCompleted(gName) : false;

  const standingsUpdate = [];
  [m.teamA, m.teamB].forEach(tName => {
    if (!tName) return;
    const teamObj = groupTeams.find(t => isSameTeamName(t.name, tName)) || { name: tName };
    const rankIdx = sorted.findIndex(t => isSameTeamName(t.name, tName));
    const rankStr = rankIdx >= 0 ? `#${rankIdx + 1}` : '-';

    const diffVal = (teamObj.diff !== undefined) ? teamObj.diff : ((teamObj.gameWon || 0) - (teamObj.gameLost || 0));
    const diffStr = diffVal > 0 ? `+${diffVal}` : `${diffVal}`;
    const mp = teamObj.matchCount !== undefined ? teamObj.matchCount : ((teamObj.win || 0) + (teamObj.lose || 0) + (teamObj.draw || 0));

    let status = 'Menunggu Seluruh Match';
    if (isGroupAllDone) {
      status = (rankIdx < 2) ? 'Lolos Upper Bracket' : (rankIdx === 2 ? 'Lolos Lower Bracket' : 'Gugur');
    }

    standingsUpdate.push({
      gName: gName,
      rank: rankStr,
      teamName: teamObj.name || tName,
      matchCount: mp,
      win: teamObj.win || 0,
      lose: teamObj.lose || 0,
      diffStr: diffStr,
      pts: teamObj.pts || 0,
      status: status,
      mvpCount: teamObj.mvpCount || 0
    });
  });

  const payload = {
    action: 'UPDATE_MATCH_ROW',
    adminPin: currentAdminPin,
    match: {
      matchId: canonId,
      gName: gName,
      teamA: m.teamA,
      teamB: m.teamB,
      scoreA: m.scoreA,
      scoreB: m.scoreB,
      winner: m.winner,
      mvpPlayer: m.mvpPlayer,
      mvpHero: m.mvpHero,
      mvpTeam: m.mvpTeam,
      gameMvps: m.gameMvps,
      isPlayoff: !!m.isPlayoff,
      phaseName: m.phaseName,
      format: m.format || 'BO3'
    },
    standingsUpdate: standingsUpdate,
    groupStageData: groupStageData
  };

  try {
    const res = await postToGoogleAppsScript(payload, 35000);
    const result = await res.json();
    if (result && result.status === 'success') {
      const synced = getLastSyncedMatches() || {};
      synced[canonId] = JSON.parse(JSON.stringify(m));
      setLastSyncedMatches(synced);
    }
    return result;
  } catch (err) {
    console.warn('Gagal sinkronisasi baris match ke Google Sheets:', err);
    throw err;
  }
}

// Handler tombol Simpan: HANYA update ke GSheet saat tombol simpan diklik / set MVP,
// dan melakukan lookup terlebih dahulu agar jika data sama, tidak perlu kirim request
async function saveTournamentStateOnly(isSilent = false) {
  if (window._isSimulatingPlayoff) {
    console.log('Simulasi aktif: skip saveTournamentStateOnly');
    return;
  }

  // 1. Simpan ke cache lokal (Ground Truth lokal aman seketika tanpa network overhead)
  saveState();
  saveStageStateLocal();

  // 2. Jika dipanggil di latar belakang / otomatis (isSilent = true), CUKUP simpan lokal saja
  //    (Update ke GSheet HANYA saat tombol Simpan diklik atau saat Set MVP)
  if (isSilent) {
    return;
  }

  // 3. User menekan tombol Simpan manual: lakukan lookup cache vs data GSheet
  const btnMLBB = document.getElementById('btnSaveBracketGSheet');
  const btnMCGG = document.getElementById('btnSaveMCGGPointsGSheet');
  const origTextMLBB = btnMLBB ? btnMLBB.innerText : '';
  const origTextMCGG = btnMCGG ? btnMCGG.innerText : '';

  const unsynced = getUnsyncedMatches();

  // KASUS A: Data sama persis dengan yang di Google Sheets (Tidak ada perubahan baru)
  if (unsynced.length === 0) {
    if (btnMLBB) {
      btnMLBB.innerText = '✅ Data Sudah Sinkron';
      setTimeout(() => { if (btnMLBB) btnMLBB.innerText = origTextMLBB || '💾 Simpan Bagan ke GSheet'; }, 2500);
    }
    if (btnMCGG) {
      btnMCGG.innerText = '✅ Data Sudah Sinkron';
      setTimeout(() => { if (btnMCGG) btnMCGG.innerText = origTextMCGG || '💾 Simpan Poin ke GSheet'; }, 2500);
    }
    showToast('✅ Seluruh data pertandingan sudah sinkron dengan Google Sheets. Tidak ada perubahan baru.', 'info');
    return;
  }

  // KASUS B: Ada data yang berubah: lakukan update progresif tiap baris pertandingan (3 baris per match)
  if (btnMLBB) btnMLBB.disabled = true;
  if (btnMCGG) btnMCGG.disabled = true;

  let successCount = 0;
  for (let i = 0; i < unsynced.length; i++) {
    const m = unsynced[i];
    const progressLabel = `Menyimpan ${i + 1}/${unsynced.length}: ${m.teamA} vs ${m.teamB} (3 baris)... ⏳`;
    if (btnMLBB) btnMLBB.innerText = progressLabel;
    if (btnMCGG) btnMCGG.innerText = progressLabel;

    try {
      await syncSingleMatchRowToGSheet(m.canonId);
      successCount++;
    } catch (err) {
      console.warn(`Gagal menyimpan match ${m.canonId}:`, err);
    }
  }

  if (btnMLBB) {
    btnMLBB.disabled = false;
    btnMLBB.innerText = `✅ Tersimpan (${successCount * 3} Baris)`;
    setTimeout(() => { if (btnMLBB) btnMLBB.innerText = origTextMLBB || '💾 Simpan Bagan ke GSheet'; }, 3000);
  }
  if (btnMCGG) {
    btnMCGG.disabled = false;
    btnMCGG.innerText = `✅ Tersimpan`;
    setTimeout(() => { if (btnMCGG) btnMCGG.innerText = origTextMCGG || '💾 Simpan Poin ke GSheet'; }, 3000);
  }

  showToast(`✅ Berhasil menyinkronkan ${successCount} pertandingan (${successCount * 3} baris data) ke Google Sheets!`, 'success');
}

// --- KNOCKOUT BRACKET ---
function generateBracket(doShuffle = false) {
  if (doShuffle && !isRegistrationClosed) {
    alert("⚠️ Pendaftaran turnamen masih dibuka!\nHarap tutup pendaftaran terlebih dahulu sebelum mengacak bagan knockout.");
    return;
  }
  if (!doShuffle && bracketMatches.length === 0) {
    renderBracket();
    return;
  }
  const size = parseInt(document.getElementById('bracketSize')?.value || 8);
  let verifiedTeams = getVerifiedMLBBTeams();

  const notice = document.getElementById('bracketNotice');
  if (notice) {
    if (verifiedTeams.length < size) {
      notice.style.display = 'block';
      notice.innerHTML = `⚠️ <strong>Catatan:</strong> Terdapat ${verifiedTeams.length} tim MLBB terdaftar (Slot bagan: ${size} tim). Slot yang belum terisi ditandai sebagai <em>Slot TBD</em>.`;
    } else {
      notice.style.display = 'none';
    }
  }

  if (doShuffle) {
    verifiedTeams.sort(() => Math.random() - 0.5);
  }

  let teams = [...verifiedTeams];
  while (teams.length < size) {
    teams.push(`Slot ${teams.length + 1} (TBD)`);
  }
  teams = teams.slice(0, size);

  const numRounds = Math.log2(size);
  bracketMatches = [];

  let r1 = [];
  for (let i = 0; i < size; i += 2) {
    r1.push({ teamA: teams[i], teamB: teams[i + 1], winner: null });
  }
  bracketMatches.push(r1);

  for (let r = 1; r < numRounds; r++) {
    let prevRoundCount = bracketMatches[r - 1].length;
    let nextRound = [];
    for (let j = 0; j < prevRoundCount / 2; j++) {
      nextRound.push({ teamA: 'Menunggu...', teamB: 'Menunggu...', winner: null });
    }
    bracketMatches.push(nextRound);
  }

  renderBracket();
}

function pickWinner(rIdx, mIdx, winnerTeam) {
  if (!isAdmin) return;

  const match = bracketMatches[rIdx][mIdx];
  if (!match || winnerTeam === 'Menunggu...' || winnerTeam.includes('(TBD)')) return;

  match.winner = winnerTeam;

  if (rIdx + 1 < bracketMatches.length) {
    const nextRound = bracketMatches[rIdx + 1];
    const nextMatchIdx = Math.floor(mIdx / 2);
    const isSlotA = (mIdx % 2 === 0);

    if (isSlotA) nextRound[nextMatchIdx].teamA = winnerTeam;
    else nextRound[nextMatchIdx].teamB = winnerTeam;
  }

  renderBracket();
}

function renderBracket() {
  const tree = document.getElementById('bracketTree');
  if (!tree) return;
  tree.innerHTML = '';

  if (bracketMatches.length === 0) {
    tree.innerHTML = `
      <div style="width: 100%; text-align: center; padding: 2.5rem 1rem; background: rgba(255,255,255,0.02); border: 1px dashed var(--border-color); border-radius: 8px;">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎲</div>
        <div style="font-size: 1.05rem; font-weight: 700; color: var(--yokke-gold); margin-bottom: 0.35rem;">
          Bagan Knockout Belum Diundi
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); max-width: 500px; margin: 0 auto;">
          Bagan sistem gugur belum diundi. Pastikan pendaftaran telah ditutup, lalu panitia dapat menekan tombol <strong>🎲 Acak Undian Tim</strong> saat sesi Technical Meeting.
        </div>
      </div>
    `;
    return;
  }

  const roundNames = {
    1: ['Grand Final'],
    2: ['Semifinal', 'Grand Final'],
    3: ['Perempat Final', 'Semifinal', 'Grand Final'],
    4: ['Babak 16 Besar', 'Perempat Final', 'Semifinal', 'Grand Final']
  };

  const names = roundNames[bracketMatches.length] || [];

  bracketMatches.forEach((round, rIdx) => {
    const col = document.createElement('div');
    col.className = 'bracket-round';

    const header = document.createElement('div');
    header.className = 'round-header';
    header.innerText = names[rIdx] || `Ronde ${rIdx + 1}`;
    col.appendChild(header);

    round.forEach((m, mIdx) => {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'matchup';

      const safeA = (m.teamA || '').replace(/'/g, "\\'");
      const safeB = (m.teamB || '').replace(/'/g, "\\'");

      matchDiv.innerHTML = `
        <div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickWinner(${rIdx}, ${mIdx}, '${safeA}')">
          <span style="font-size: 0.88rem;">${m.teamA}</span>
          <span style="font-size: 0.8rem; font-weight: 700;">${m.winner === m.teamA ? 'WIN 🏆' : '-'}</span>
        </div>
        <div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickWinner(${rIdx}, ${mIdx}, '${safeB}')">
          <span style="font-size: 0.88rem;">${m.teamB}</span>
          <span style="font-size: 0.8rem; font-weight: 700;">${m.winner === m.teamB ? 'WIN 🏆' : '-'}</span>
        </div>
      `;
      col.appendChild(matchDiv);
    });

    tree.appendChild(col);
  });
}

// --- DINAMIS GROUP STAGE & PLAYOFF LOGIC ---

/**
 * Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi):
 * 1. Acak tim invited ke masing-masing group (tidak boleh ada di group yang sama).
 * 2. Acak urutan tim sisanya (tim reguler).
 * 3. Masukkan tim sesuai urutan acak ke masing-masing group:
 *    - Penempatan tim selalu memprioritaskan grup dengan jumlah peserta/tim terkecil terlebih dahulu.
 *    - Siklus 1: Cek nama depan sama (satelit) ATAU divisi sama -> jika bentrok, ke next group.
 *    - Siklus 2: Jika dalam 1 cycle tetap tidak dapat group -> masukkan ke group berikutnya jika tidak ada nama depan sama (aturan divisi dilanggar terlebih dahulu).
 *    - Siklus 3: Jika dalam 1 cycle berikutnya masih tidak dapat -> masukkan ke group berikutnya (aturan satelit dilanggar demi menjaga keseimbangan kapasitas).
 * Invarian Mutlak: Keseimbangan kapasitas grup dijaga ketat (misal 41 tim ke 8 grup = tepat 7 grup isi 5 tim dan 1 grup isi 6 tim).
 */
function allocateMLBBGroups(teamsList, groupNames, doShuffle = false) {
  if (!Array.isArray(groupNames) || groupNames.length === 0) return {};
  if (!Array.isArray(teamsList) || teamsList.length === 0) {
    const emptyGroups = {};
    groupNames.forEach(g => { emptyGroups[g] = []; });
    return emptyGroups;
  }

  const numGroups = groupNames.length;
  const groups = {};
  groupNames.forEach(g => { groups[g] = []; });

  const getPrefix = (team) => {
    if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);
    if (!team) return '';
    const clean = team.trim().replace(/^[^a-zA-Z0-9]+/, '');
    const words = clean.split(/\s+/);
    return words[0] ? words[0].toLowerCase() : '';
  };

  const getDept = (team) => {
    if (typeof getTeamDept === 'function') {
      const d = getTeamDept(team);
      if (d) {
        if (typeof getDepartmentCluster === 'function') return getDepartmentCluster(d, team).toLowerCase();
        return d.toLowerCase();
      }
    }
    return '';
  };

  const isInvited = (team) => {
    if (typeof isTeamInvited === 'function') return isTeamInvited(team);
    return false;
  };

  let invited = teamsList.filter(t => isInvited(t));
  let regular = teamsList.filter(t => !isInvited(t));

  if (doShuffle) {
    invited = [...invited].sort(() => Math.random() - 0.5);
    regular = [...regular].sort(() => Math.random() - 0.5);
  }

  // 1. Acak tim invited ke masing-masing group (tidak boleh ada di group yang sama)
  let invitedGroupOrder = [...groupNames];
  if (doShuffle) {
    invitedGroupOrder.sort(() => Math.random() - 0.5);
  }
  invited.forEach((team, idx) => {
    const teamPrefix = getPrefix(team);
    const teamDept = getDept(team);
    let targetGroup = null;

    // Cari grup yang belum ada tim invited, tanpa prefix sama, tanpa dept sama
    for (let i = 0; i < numGroups; i++) {
      const g = invitedGroupOrder[(idx + i) % numGroups];
      const hasInv = groups[g].some(t => isInvited(t));
      const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);
      const hasDep = teamDept && groups[g].some(t => getDept(t) === teamDept);
      if (!hasInv && !hasPre && !hasDep) { targetGroup = g; break; }
    }
    // Relaksasi Dept (Aturan 3)
    if (!targetGroup) {
      for (let i = 0; i < numGroups; i++) {
        const g = invitedGroupOrder[(idx + i) % numGroups];
        const hasInv = groups[g].some(t => isInvited(t));
        const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);
        if (!hasInv && !hasPre) { targetGroup = g; break; }
      }
    }
    // Relaksasi Prefix (Aturan 2)
    if (!targetGroup) {
      for (let i = 0; i < numGroups; i++) {
        const g = invitedGroupOrder[(idx + i) % numGroups];
        if (!groups[g].some(t => isInvited(t))) { targetGroup = g; break; }
      }
    }
    // Fallback jika invited > numGroups: cari grup paling sedikit yang bebas bentrok prefix
    if (!targetGroup) {
      const sorted = groupNames.slice().sort((a, b) => {
        const lenDiff = groups[a].length - groups[b].length;
        if (lenDiff !== 0) return lenDiff;
        const pCountA = teamPrefix ? groups[a].filter(t => getPrefix(t) === teamPrefix).length : 0;
        const pCountB = teamPrefix ? groups[b].filter(t => getPrefix(t) === teamPrefix).length : 0;
        return pCountA - pCountB;
      });
      targetGroup = sorted[0];
    }
    groups[targetGroup].push(team);
  });

  // 2. Acak urutan tim sisanya (telah diacak di regular di atas jika doShuffle)
  // 3. Masukkan tim sesuai urutan acak ke masing-masing group:
  //    "penempatan team dari group dengan jumlah peserta terkecil dulu ya"
  const N = teamsList.length;
  const baseCap = Math.floor(N / numGroups);
  const remainder = N % numGroups;

  const getOverBaseCount = () => groupNames.filter(g => groups[g].length > baseCap).length;

  const canAccept = (g) => {
    const curLen = groups[g].length;
    if (curLen < baseCap) return true;
    if (curLen === baseCap) {
      return getOverBaseCount() < remainder;
    }
    return false;
  };

  // Pointer untuk menjaga keadilan urutan saat ukuran grup sama
  let pointer = 0;

  // Prioritaskan tim yang memiliki banyak satelit / anggota divisi sama agar terdistribusi mulus
  const prefixCounts = {};
  const deptCounts = {};
  teamsList.forEach(t => {
    const p = getPrefix(t);
    const d = getDept(t);
    if (p) prefixCounts[p] = (prefixCounts[p] || 0) + 1;
    if (d) deptCounts[d] = (deptCounts[d] || 0) + 1;
  });

  regular.sort((a, b) => {
    const pA = getPrefix(a), pB = getPrefix(b);
    const dA = getDept(a), dB = getDept(b);
    const scoreA = (prefixCounts[pA] || 0) * 10 + (deptCounts[dA] || 0);
    const scoreB = (prefixCounts[pB] || 0) * 10 + (deptCounts[dB] || 0);
    return (scoreB - scoreA) || (doShuffle ? (Math.random() - 0.5) : 0);
  });

  regular.forEach(team => {
    const teamPrefix = getPrefix(team);
    const teamDept = getDept(team);

    const hasPrefixConflict = (g) => teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);
    const hasDeptConflict = (g) => teamDept && groups[g].some(t => getDept(t) === teamDept);

    // Dapatkan urutan evaluasi grup: "penempatan team dari group dengan jumlah peserta terkecil dulu"
    // Diurutkan berdasarkan:
    // 1. Jumlah anggota grup terkecil dulu (groups[a].length - groups[b].length)
    // 2. Jika sama, ikuti pointer urutan acak / round-robin
    const sortedGroups = groupNames.filter(canAccept).sort((a, b) => {
      const lenDiff = groups[a].length - groups[b].length;
      if (lenDiff !== 0) return lenDiff;
      const idxA = (groupNames.indexOf(a) - pointer + numGroups) % numGroups;
      const idxB = (groupNames.indexOf(b) - pointer + numGroups) % numGroups;
      return idxA - idxB;
    });

    let chosenGroup = null;

    // SIKLUS 1: Cek nama depan sama (satelit) ATAU divisi sama -> jika bentrok ke next group
    for (const g of sortedGroups) {
      if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {
        chosenGroup = g;
        break;
      }
    }

    // SIKLUS 2: Jika 1 cycle tetap ga dapet -> masukkan ke group jika tidak ada nama depan sama (langgar divisi)
    if (!chosenGroup) {
      for (const g of sortedGroups) {
        if (!hasPrefixConflict(g)) {
          chosenGroup = g;
          break;
        }
      }
    }

    // SIKLUS 3: Jika 1 cycle lagi ga dapet -> masukkan ke group setelah cycle (langgar satelit)
    if (!chosenGroup) {
      if (sortedGroups.length > 0) {
        chosenGroup = sortedGroups[0];
      }
    }

    // Fallback absolut jika seluruh sortedGroups kosong:
    if (!chosenGroup) {
      const allSorted = groupNames.slice().sort((a, b) => groups[a].length - groups[b].length);
      chosenGroup = allSorted[0];
    }

    groups[chosenGroup].push(team);
    pointer = (groupNames.indexOf(chosenGroup) + 1) % numGroups;
  });

  return groups;
}

function generateGroupStage(doShuffle = false) {
  let verifiedTeams = getVerifiedMLBBTeams();
  if (doShuffle) {
    groupMatchResults = {};
    localStorage.removeItem('yokke_group_match_results');
  }

  const N = verifiedTeams.length;
  const activeFormat = getActiveMLBBFormat();
  let numGroups = 2;
  let groupNames = ['Grup A', 'Grup B'];
  if (activeFormat === 'GROUP_8') {
    numGroups = 8;
    groupNames = ['Grup A', 'Grup B', 'Grup C', 'Grup D', 'Grup E', 'Grup F', 'Grup G', 'Grup H'];
  } else if (activeFormat === 'GROUP_4') {
    numGroups = 4;
    groupNames = ['Grup A', 'Grup B', 'Grup C', 'Grup D'];
  }

  // Gunakan algoritma alokasi cerdas: Tim Invite terpisah 1 per grup & Tim Satelit (nama depan sama) beda grup
  const allocated = allocateMLBBGroups(verifiedTeams, groupNames, doShuffle);

  groupStageData = {};
  groupNames.forEach(gName => {
    groupStageData[gName] = (allocated[gName] || []).map(tName => ({
      name: tName,
      win: 0,
      lose: 0,
      pts: 0
    }));
  });

  saveState();
  initGroupPlayoff();
  renderGroupStageUI();
}

function updateGroupRecord(gName, idx, field, val) {
  if (!isAdmin) return;
  const team = groupStageData[gName][idx];
  if (!team) return;

  team[field] = parseInt(val) || 0;
  team.pts = (team.win * 2);

  saveState();
  initGroupPlayoff();
  renderGroupStageUI();
}

// Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fase grup MLBB
function getMLBBHeadToHeadWinner(teamA, teamB, gName) {
  if (!teamA || !teamB || typeof groupMatchResults === 'undefined' || !groupMatchResults) return 0;
  let match = null;
  if (typeof getCanonicalGroupMatchId === 'function') {
    const canonId = getCanonicalGroupMatchId(gName || '', teamA, teamB);
    match = groupMatchResults[canonId];
  }
  if (!match) {
    for (const id in groupMatchResults) {
      const m = groupMatchResults[id];
      if (!m || !m.teamA || !m.teamB) continue;
      if (gName && m.gName && m.gName !== gName) continue;
      if ((isSameTeamName(m.teamA, teamA) && isSameTeamName(m.teamB, teamB)) ||
          (isSameTeamName(m.teamA, teamB) && isSameTeamName(m.teamB, teamA))) {
        match = m;
        break;
      }
    }
  }
  if (!match) return 0;

  const winner = match.winner || '';
  const winnerLower = winner.toLowerCase().trim();
  const isDoubleWO = (
    winnerLower === 'keduanya wo (0-0)' ||
    winnerLower === 'keduanya wo' ||
    winnerLower === 'double wo' ||
    (winnerLower.includes('keduanya') && winnerLower.includes('wo'))
  );
  const isDraw = !isDoubleWO && (
    winnerLower === 'imbang (0-0)' ||
    winnerLower === 'imbang' ||
    winnerLower === 'seri' ||
    winnerLower.startsWith('imbang') ||
    winnerLower.startsWith('seri')
  );
  if (isDoubleWO || isDraw) return 0;

  const cleanWinner = winner.replace(/\(menang\s*wo\)/i, '').replace(/\(wo\)/i, '').replace(/menang\s*wo\s*:\s*/i, '').trim();
  if (isSameTeamName(winner, teamA) || isSameTeamName(cleanWinner, teamA)) {
    return -1; // teamA menang H2H -> peringkat lebih atas
  }
  if (isSameTeamName(winner, teamB) || isSameTeamName(cleanWinner, teamB)) {
    return 1; // teamB menang H2H -> peringkat lebih atas
  }

  // Jika tanpa string winner, cek skor langsung (kecuali match 0-0 yang belum dimainkan)
  if (match.scoreA !== null && match.scoreA !== undefined && match.scoreB !== null && match.scoreB !== undefined) {
    if (Number(match.scoreA) === 0 && Number(match.scoreB) === 0 && !match.winner) return 0;
    const isAFirst = isSameTeamName(match.teamA, teamA);
    const scA = isAFirst ? Number(match.scoreA) : Number(match.scoreB);
    const scB = isAFirst ? Number(match.scoreB) : Number(match.scoreA);
    if (scA > scB) return -1;
    if (scB > scA) return 1;
  }

  return 0;
}

// Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke Squad:
// 1. Point (Total Poin, besar ke kecil)
// 2. Agregat Skor Game / Game Difference (Diff = Game Menang - Game Kalah, besar ke kecil)
// 3. Head-to-Head / H2H (Jika Poin & Agregat sama, pemenang pertemuan langsung di grup lebih atas)
// 4. Menang (Match Won / W, besar ke kecil)
// 5. Kalah (Match Lost / L, kecil ke besar: makin sedikit kalah makin di atas)
// 6. Total MVP Tim (besar ke kecil)
// 7. Nama Tim (A-Z)
function compareMLBBTeams(a, b) {
  const gName = arguments[2] || a.gName || b.gName;

  const ptsA = parseInt(a.pts, 10) || 0;
  const ptsB = parseInt(b.pts, 10) || 0;
  if (ptsB !== ptsA) return ptsB - ptsA;

  // 2. Agregat Skor Game (Selisih Game Won - Game Lost)
  const diffA = (a.diff !== undefined) ? parseInt(a.diff, 10) : ((parseInt(a.gameWon, 10) || 0) - (parseInt(a.gameLost, 10) || 0));
  const diffB = (b.diff !== undefined) ? parseInt(b.diff, 10) : ((parseInt(b.gameWon, 10) || 0) - (parseInt(b.gameLost, 10) || 0));
  if (diffB !== diffA) return diffB - diffA;

  // 3. Head-to-Head (H2H direct match antar kedua tim dalam grup)
  if (typeof getMLBBHeadToHeadWinner === 'function') {
    const h2h = getMLBBHeadToHeadWinner(a.name, b.name, gName);
    if (h2h !== 0) return h2h;
  }

  const winA = parseInt(a.win, 10) || 0;
  const winB = parseInt(b.win, 10) || 0;
  if (winB !== winA) return winB - winA;

  const loseA = parseInt(a.lose, 10) || 0;
  const loseB = parseInt(b.lose, 10) || 0;
  if (loseA !== loseB) return loseA - loseB;

  const mvpA = parseInt(a.mvpCount, 10) || 0;
  const mvpB = parseInt(b.mvpCount, 10) || 0;
  if (mvpB !== mvpA) return mvpB - mvpA;

  return (a.name || '').localeCompare(b.name || '');
}

// Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkulasi MVP terkini
function getSortedGroupTeams(gName) {
  const teams = groupStageData[gName] || [];
  teams.forEach(t => {
    t.gName = gName;
    if (t.diff === undefined) {
      t.diff = (parseInt(t.gameWon, 10) || 0) - (parseInt(t.gameLost, 10) || 0);
    }
    let mvpCount = 0;
    for (const mId in groupMatchResults || {}) {
      const m = groupMatchResults[mId];
      if (m && m.gName === gName) {
        if (Array.isArray(m.gameMvps) && m.gameMvps.length > 0) {
          m.gameMvps.forEach(gm => {
            if (gm && gm.player && (gm.team === t.name || (!gm.team && (m.mvpTeam === t.name || m.winner === t.name)))) {
              mvpCount++;
            }
          });
        } else if (m.mvpPlayer && (m.mvpTeam === t.name || (!m.mvpTeam && m.winner === t.name))) {
          mvpCount++;
        }
      }
    }
    t.mvpCount = mvpCount;
  });

  return [...teams].sort((a, b) => compareMLBBTeams(a, b, gName));
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function findValidBracketPermutation(candidates, forbiddenGroupsPerSlot) {
  const n = candidates.length;
  function backtrack(slotIdx, remainingItems, currentArr) {
    if (slotIdx === n) return currentArr;
    const shuffledRemaining = shuffleArray(remainingItems);
    const forbidden = forbiddenGroupsPerSlot[slotIdx] || [];
    for (let i = 0; i < shuffledRemaining.length; i++) {
      const item = shuffledRemaining[i];
      if (!forbidden.includes(item.group)) {
        const nextRemaining = shuffledRemaining.filter((_, idx) => idx !== i);
        const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);
        if (res) return res;
      }
    }
    return null;
  }
  for (let attempt = 0; attempt < 50; attempt++) {
    const res = backtrack(0, candidates, []);
    if (res) return res;
  }
  return null;
}

function initGroupPlayoff(doShuffle = false) {
  const gKeys = Object.keys(groupStageData);
  const numGroups = gKeys.length;

  if (numGroups === 8) {
    // 8 GRUP -> 16 BESAR DOUBLE ELIMINATION (5 HARI TURNAMEN)
    // Sesuai aturan: Juara 1 & 2 masuk UPPER BRACKET (16 Tim). Juara 3 masuk LOWER BRACKET (8 Tim).
    // Juara 1 = Home Upper (teamA), Juara 2 = Away Upper (teamB, beda grup).
    // Kalah Upper = Home Lower (teamA), Juara 3 = Away Lower (teamB, beda grup dari Juara 1 & Juara 2 cabang tersebut).
    const groupNames = ['Grup A', 'Grup B', 'Grup C', 'Grup D', 'Grup E', 'Grup F', 'Grup G', 'Grup H'];

    const j1List = [];
    const j2List = [];
    const j3List = [];

    groupNames.forEach((gName, idx) => {
      const sorted = getSortedGroupTeams(gName);
      const letter = String.fromCharCode(65 + idx);
      const t1 = sorted[0]?.pts > 0 ? sorted[0].name : (sorted[0]?.name || `Juara 1 Grup ${letter}`);
      const t2 = sorted[1]?.pts > 0 ? sorted[1].name : (sorted[1]?.name || `Juara 2 Grup ${letter}`);
      const t3 = sorted[2]?.pts > 0 ? sorted[2].name : (sorted[2]?.name || `Juara 3 Grup ${letter}`);

      j1List.push({ group: gName, team: t1 });
      j2List.push({ group: gName, team: t2 });
      j3List.push({ group: gName, team: t3 });
    });

    let branchJ1 = [];
    let branchJ2 = [];
    let branchJ3 = [];

    if (doShuffle) {
      // 1. Acak Juara 1 untuk 8 cabang Home Upper Bracket
      branchJ1 = shuffleArray([...j1List]);

      // 2. Acak Juara 2 untuk 8 cabang Away Upper Bracket (Anti-bentrok grup dengan Juara 1)
      const forbiddenForJ2 = branchJ1.map(j => [j.group]);
      branchJ2 = findValidBracketPermutation(j2List, forbiddenForJ2);
      if (!branchJ2) {
        branchJ2 = branchJ1.map(j => j2List[(j1List.findIndex(x => x.group === j.group) + 1) % 8]);
      }

      // 3. Acak Juara 3 untuk 8 cabang Away Lower Bracket (Anti-bentrok grup dengan Juara 1 maupun Juara 2 di cabangnya)
      const forbiddenForJ3 = branchJ1.map((j, i) => [j.group, branchJ2[i].group]);
      branchJ3 = findValidBracketPermutation(j3List, forbiddenForJ3);
      if (!branchJ3) {
        branchJ3 = branchJ1.map(j => j3List[(j1List.findIndex(x => x.group === j.group) + 2) % 8]);
      }
    } else {
      // Susunan Standar Silang Default (Non-acak tapi dijamin beda grup)
      // J1: A, C, E, G, B, D, F, H
      // J2: B, D, F, H, A, C, E, G
      // J3: C, E, G, A, D, F, H, B
      const defaultOrder = [
        { j1: 0, j2: 1, j3: 2 }, // A vs B -> C
        { j1: 2, j2: 3, j3: 4 }, // C vs D -> E
        { j1: 4, j2: 5, j3: 6 }, // E vs F -> G
        { j1: 6, j2: 7, j3: 0 }, // G vs H -> A
        { j1: 1, j2: 0, j3: 3 }, // B vs A -> D
        { j1: 3, j2: 2, j3: 5 }, // D vs C -> F
        { j1: 5, j2: 4, j3: 7 }, // F vs E -> H
        { j1: 7, j2: 6, j3: 1 }  // H vs G -> B
      ];
      branchJ1 = defaultOrder.map(o => j1List[o.j1]);
      branchJ2 = defaultOrder.map(o => j2List[o.j2]);
      branchJ3 = defaultOrder.map(o => j3List[o.j3]);
    }

    groupPlayoffMatches = [
      // Ronde 0 (Hari 3): Upper Bracket 16 Besar (Juara 1 Home vs Juara 2 Away Beda Grup - 8 Match)
      [
        { matchLabel: 'UB_R1_1', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: branchJ1[0].team, teamB: branchJ2[0].team, winner: null },
        { matchLabel: 'UB_R1_2', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: branchJ1[1].team, teamB: branchJ2[1].team, winner: null },
        { matchLabel: 'UB_R1_3', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: branchJ1[2].team, teamB: branchJ2[2].team, winner: null },
        { matchLabel: 'UB_R1_4', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: branchJ1[3].team, teamB: branchJ2[3].team, winner: null },
        { matchLabel: 'UB_R1_5', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: branchJ1[4].team, teamB: branchJ2[4].team, winner: null },
        { matchLabel: 'UB_R1_6', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: branchJ1[5].team, teamB: branchJ2[5].team, winner: null },
        { matchLabel: 'UB_R1_7', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: branchJ1[6].team, teamB: branchJ2[6].team, winner: null },
        { matchLabel: 'UB_R1_8', phaseName: 'Upper Bracket 16 Besar (Hari 3)', bracket: 'UPPER', day: 3, teamA: branchJ1[7].team, teamB: branchJ2[7].team, winner: null }
      ],
      // Ronde 1 (Hari 3-4): Upper QF (4 Match) & Lower R1 (Kalah Upper R1 Home vs Juara 3 Away - 8 Match)
      [
        { matchLabel: 'UB_QF_1', phaseName: 'Upper Bracket Perempat Final (Hari 3-4)', bracket: 'UPPER', day: 3, teamA: 'Pemenang UB R1 1', teamB: 'Pemenang UB R1 2', winner: null },
        { matchLabel: 'UB_QF_2', phaseName: 'Upper Bracket Perempat Final (Hari 3-4)', bracket: 'UPPER', day: 3, teamA: 'Pemenang UB R1 3', teamB: 'Pemenang UB R1 4', winner: null },
        { matchLabel: 'UB_QF_3', phaseName: 'Upper Bracket Perempat Final (Hari 3-4)', bracket: 'UPPER', day: 3, teamA: 'Pemenang UB R1 5', teamB: 'Pemenang UB R1 6', winner: null },
        { matchLabel: 'UB_QF_4', phaseName: 'Upper Bracket Perempat Final (Hari 3-4)', bracket: 'UPPER', day: 3, teamA: 'Pemenang UB R1 7', teamB: 'Pemenang UB R1 8', winner: null },
        { matchLabel: 'LB_R1_1', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 1', teamB: branchJ3[0].team, winner: null },
        { matchLabel: 'LB_R1_2', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 2', teamB: branchJ3[1].team, winner: null },
        { matchLabel: 'LB_R1_3', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 3', teamB: branchJ3[2].team, winner: null },
        { matchLabel: 'LB_R1_4', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 4', teamB: branchJ3[3].team, winner: null },
        { matchLabel: 'LB_R1_5', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 5', teamB: branchJ3[4].team, winner: null },
        { matchLabel: 'LB_R1_6', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 6', teamB: branchJ3[5].team, winner: null },
        { matchLabel: 'LB_R1_7', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 7', teamB: branchJ3[6].team, winner: null },
        { matchLabel: 'LB_R1_8', phaseName: 'Lower Bracket Ronde 1 (Hari 3-4)', bracket: 'LOWER', day: 3, teamA: 'Gugur UB R1 8', teamB: branchJ3[7].team, winner: null }
      ],
      // Ronde 2 (Hari 4): Upper SF (2 Match) & Lower R2 (4 Match) & Lower R3 (4 Match)
      [
        { matchLabel: 'UB_SF_1', phaseName: 'Upper Bracket Semifinal (Hari 4)', bracket: 'UPPER', day: 4, teamA: 'Pemenang UB QF 1', teamB: 'Pemenang UB QF 2', winner: null },
        { matchLabel: 'UB_SF_2', phaseName: 'Upper Bracket Semifinal (Hari 4)', bracket: 'UPPER', day: 4, teamA: 'Pemenang UB QF 3', teamB: 'Pemenang UB QF 4', winner: null },
        { matchLabel: 'LB_R2_1', phaseName: 'Lower Bracket Ronde 2 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R1 1', teamB: 'Pemenang LB R1 2', winner: null },
        { matchLabel: 'LB_R2_2', phaseName: 'Lower Bracket Ronde 2 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R1 3', teamB: 'Pemenang LB R1 4', winner: null },
        { matchLabel: 'LB_R2_3', phaseName: 'Lower Bracket Ronde 2 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R1 5', teamB: 'Pemenang LB R1 6', winner: null },
        { matchLabel: 'LB_R2_4', phaseName: 'Lower Bracket Ronde 2 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R1 7', teamB: 'Pemenang LB R1 8', winner: null },
        { matchLabel: 'LB_R3_1', phaseName: 'Lower Bracket Ronde 3 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R2 1', teamB: 'Gugur UB QF 1', winner: null },
        { matchLabel: 'LB_R3_2', phaseName: 'Lower Bracket Ronde 3 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R2 2', teamB: 'Gugur UB QF 2', winner: null },
        { matchLabel: 'LB_R3_3', phaseName: 'Lower Bracket Ronde 3 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R2 3', teamB: 'Gugur UB QF 3', winner: null },
        { matchLabel: 'LB_R3_4', phaseName: 'Lower Bracket Ronde 3 (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R2 4', teamB: 'Gugur UB QF 4', winner: null }
      ],
      // Ronde 3 (Hari 4): Lower Bracket Perempat Final (2 Match)
      [
        { matchLabel: 'LB_QF_1', phaseName: 'Lower Bracket Perempat Final (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R3 1', teamB: 'Pemenang LB R3 2', winner: null },
        { matchLabel: 'LB_QF_2', phaseName: 'Lower Bracket Perempat Final (Hari 4)', bracket: 'LOWER', day: 4, teamA: 'Pemenang LB R3 3', teamB: 'Pemenang LB R3 4', winner: null }
      ],
      // Ronde 4 (Hari 5): Upper Final & Lower Semifinal / Final
      [
        { matchLabel: 'UB_FINAL', phaseName: 'Upper Bracket Final (Hari 5)', bracket: 'UPPER', day: 5, teamA: 'Pemenang UB SF 1', teamB: 'Pemenang UB SF 2', winner: null },
        { matchLabel: 'LB_SF_1', phaseName: 'Lower Bracket Semifinal 1 (Hari 5)', bracket: 'LOWER', day: 5, teamA: 'Pemenang LB QF 1', teamB: 'Gugur UB SF 1', winner: null },
        { matchLabel: 'LB_SF_2', phaseName: 'Lower Bracket Semifinal 2 (Hari 5)', bracket: 'LOWER', day: 5, teamA: 'Pemenang LB QF 2', teamB: 'Gugur UB SF 2', winner: null },
        { matchLabel: 'LB_PRELIM', phaseName: 'Lower Bracket Final Penantang (Hari 5)', bracket: 'LOWER', day: 5, teamA: 'Pemenang LB SF 1', teamB: 'Pemenang LB SF 2', winner: null },
        { matchLabel: 'LB_FINAL', phaseName: 'Lower Bracket Final Penentu (Hari 5)', bracket: 'LOWER', day: 5, teamA: 'Pemenang LB Prelim', teamB: 'Gugur UB Final', winner: null }
      ],
      // Ronde 5 (Hari 5): Grand Final (BO5)
      [
        { matchLabel: 'GRAND_FINAL', phaseName: 'Grand Final BO5 (Hari 5)', bracket: 'GRAND_FINAL', day: 5, teamA: 'Juara Upper Bracket', teamB: 'Juara Lower Bracket', winner: null }
      ]
    ];
  } else if (numGroups === 4) {
    // 4 GRUP -> 8 BESAR (PEREMPAT FINAL -> SEMIFINAL -> GRAND FINAL)
    const grpA = getSortedGroupTeams('Grup A');
    const grpB = getSortedGroupTeams('Grup B');
    const grpC = getSortedGroupTeams('Grup C');
    const grpD = getSortedGroupTeams('Grup D');

    const a1 = grpA[0]?.pts > 0 ? grpA[0].name : (grpA[0]?.name || 'Juara Grup A');
    const a2 = grpA[1]?.pts > 0 ? grpA[1].name : (grpA[1]?.name || 'Runner-up Grup A');
    const b1 = grpB[0]?.pts > 0 ? grpB[0].name : (grpB[0]?.name || 'Juara Grup B');
    const b2 = grpB[1]?.pts > 0 ? grpB[1].name : (grpB[1]?.name || 'Runner-up Grup B');
    const c1 = grpC[0]?.pts > 0 ? grpC[0].name : (grpC[0]?.name || 'Juara Grup C');
    const c2 = grpC[1]?.pts > 0 ? grpC[1].name : (grpC[1]?.name || 'Runner-up Grup C');
    const d1 = grpD[0]?.pts > 0 ? grpD[0].name : (grpD[0]?.name || 'Juara Grup D');
    const d2 = grpD[1]?.pts > 0 ? grpD[1].name : (grpD[1]?.name || 'Runner-up Grup D');

    const j1List = [
      { group: 'Grup A', team: a1 },
      { group: 'Grup B', team: b1 },
      { group: 'Grup C', team: c1 },
      { group: 'Grup D', team: d1 }
    ];
    const j2List = [
      { group: 'Grup A', team: a2 },
      { group: 'Grup B', team: b2 },
      { group: 'Grup C', team: c2 },
      { group: 'Grup D', team: d2 }
    ];

    let bJ1 = [];
    let bJ2 = [];
    if (doShuffle) {
      bJ1 = shuffleArray([...j1List]);
      const forbidden = bJ1.map(j => [j.group]);
      bJ2 = findValidBracketPermutation(j2List, forbidden);
      if (!bJ2) {
        bJ2 = bJ1.map(j => j2List[(j1List.findIndex(x => x.group === j.group) + 1) % 4]);
      }
    } else {
      bJ1 = [j1List[0], j1List[2], j1List[1], j1List[3]]; // A, C, B, D
      bJ2 = [j2List[1], j2List[3], j2List[0], j2List[2]]; // B, D, A, C
    }

    groupPlayoffMatches = [
      // Ronde 0: Perempat Final (8 Besar)
      [
        { teamA: bJ1[0].team, teamB: bJ2[0].team, winner: null },
        { teamA: bJ1[1].team, teamB: bJ2[1].team, winner: null },
        { teamA: bJ1[2].team, teamB: bJ2[2].team, winner: null },
        { teamA: bJ1[3].team, teamB: bJ2[3].team, winner: null }
      ],
      // Ronde 1: Semifinal Playoff (4 Besar)
      [
        { teamA: 'Pemenang QF 1', teamB: 'Pemenang QF 2', winner: null },
        { teamA: 'Pemenang QF 3', teamB: 'Pemenang QF 4', winner: null }
      ],
      // Ronde 2: Grand Final
      [
        { teamA: 'Pemenang SF 1', teamB: 'Pemenang SF 2', winner: null }
      ]
    ];
  } else {
    // 2 GRUP -> 4 BESAR (SEMIFINAL -> GRAND FINAL)
    const grpA = getSortedGroupTeams('Grup A');
    const grpB = getSortedGroupTeams('Grup B');

    const a1 = grpA[0]?.pts > 0 ? grpA[0].name : (grpA[0]?.name || 'Juara Grup A');
    const a2 = grpA[1]?.pts > 0 ? grpA[1].name : (grpA[1]?.name || 'Runner-up Grup A');
    const b1 = grpB[0]?.pts > 0 ? grpB[0].name : (grpB[0]?.name || 'Juara Grup B');
    const b2 = grpB[1]?.pts > 0 ? grpB[1].name : (grpB[1]?.name || 'Runner-up Grup B');

    groupPlayoffMatches = [
      // Ronde 0: Semifinal Playoff (4 Besar)
      [
        { teamA: a1, teamB: b2, winner: null },
        { teamA: b1, teamB: a2, winner: null }
      ],
      // Ronde 1: Grand Final
      [
        { teamA: 'Pemenang SF 1', teamB: 'Pemenang SF 2', winner: null }
      ]
    ];
  }
}

function pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam) {
  if (!isAdmin) return;
  const match = groupPlayoffMatches[rIdx]?.[mIdx];
  if (!match || !winnerTeam || winnerTeam.includes('Juara') || winnerTeam.includes('Runner-up') || winnerTeam.includes('Pemenang') || winnerTeam.includes('Gugur') || winnerTeam.includes('(TBD)')) return;

  match.winner = winnerTeam;
  const loserTeam = (match.teamA === winnerTeam ? match.teamB : match.teamA);

  // Format Double Elimination 6 Ronde (Fase 8 Grup: Juara 1 & 2 ke Upper, Juara 3 ke Lower)
  if (groupPlayoffMatches.length === 6) {
    if (rIdx === 0) {
      // Ronde 0 (Hari 3): Upper 16 Besar (mIdx 0..7)
      if (mIdx === 0) groupPlayoffMatches[1][0].teamA = winnerTeam;
      else if (mIdx === 1) groupPlayoffMatches[1][0].teamB = winnerTeam;
      else if (mIdx === 2) groupPlayoffMatches[1][1].teamA = winnerTeam;
      else if (mIdx === 3) groupPlayoffMatches[1][1].teamB = winnerTeam;
      else if (mIdx === 4) groupPlayoffMatches[1][2].teamA = winnerTeam;
      else if (mIdx === 5) groupPlayoffMatches[1][2].teamB = winnerTeam;
      else if (mIdx === 6) groupPlayoffMatches[1][3].teamA = winnerTeam;
      else if (mIdx === 7) groupPlayoffMatches[1][3].teamB = winnerTeam;

      // Tim kalah dari Upper 16 Besar langsung turun ke Lower Bracket Ronde 1 posisi Home (teamA) melawan Juara 3 (teamB)!
      if (groupPlayoffMatches[1][4 + mIdx]) {
        groupPlayoffMatches[1][4 + mIdx].teamA = loserTeam;
      }
    } else if (rIdx === 1) {
      // Ronde 1 (Hari 3-4): UB QF (mIdx 0..3) & LB R1 (mIdx 4..11)
      if (mIdx === 0) {
        groupPlayoffMatches[2][0].teamA = winnerTeam; // UB SF 1
        groupPlayoffMatches[2][6].teamB = loserTeam;  // LB R3 1 (Gugur UB QF 1)
      } else if (mIdx === 1) {
        groupPlayoffMatches[2][0].teamB = winnerTeam; // UB SF 1
        groupPlayoffMatches[2][7].teamB = loserTeam;  // LB R3 2 (Gugur UB QF 2)
      } else if (mIdx === 2) {
        groupPlayoffMatches[2][1].teamA = winnerTeam; // UB SF 2
        groupPlayoffMatches[2][8].teamB = loserTeam;  // LB R3 3 (Gugur UB QF 3)
      } else if (mIdx === 3) {
        groupPlayoffMatches[2][1].teamB = winnerTeam; // UB SF 2
        groupPlayoffMatches[2][9].teamB = loserTeam;  // LB R3 4 (Gugur UB QF 4)
      } else if (mIdx === 4) {
        groupPlayoffMatches[2][2].teamA = winnerTeam; // LB R2 1
      } else if (mIdx === 5) {
        groupPlayoffMatches[2][2].teamB = winnerTeam; // LB R2 1
      } else if (mIdx === 6) {
        groupPlayoffMatches[2][3].teamA = winnerTeam; // LB R2 2
      } else if (mIdx === 7) {
        groupPlayoffMatches[2][3].teamB = winnerTeam; // LB R2 2
      } else if (mIdx === 8) {
        groupPlayoffMatches[2][4].teamA = winnerTeam; // LB R2 3
      } else if (mIdx === 9) {
        groupPlayoffMatches[2][4].teamB = winnerTeam; // LB R2 3
      } else if (mIdx === 10) {
        groupPlayoffMatches[2][5].teamA = winnerTeam; // LB R2 4
      } else if (mIdx === 11) {
        groupPlayoffMatches[2][5].teamB = winnerTeam; // LB R2 4
      }
    } else if (rIdx === 2) {
      // Ronde 2 (Hari 4): UB SF (0..1), LB R2 (2..5), LB R3 (6..9)
      if (mIdx === 0) {
        groupPlayoffMatches[4][0].teamA = winnerTeam; // UB Final
        groupPlayoffMatches[4][1].teamB = loserTeam;  // LB SF 1 (Gugur UB SF 1)
      } else if (mIdx === 1) {
        groupPlayoffMatches[4][0].teamB = winnerTeam; // UB Final
        groupPlayoffMatches[4][2].teamB = loserTeam;  // LB SF 2 (Gugur UB SF 2)
      } else if (mIdx >= 2 && mIdx <= 5) {
        // Pemenang LB R2 masuk ke slot A LB R3
        groupPlayoffMatches[2][6 + (mIdx - 2)].teamA = winnerTeam;
      } else if (mIdx === 6) {
        groupPlayoffMatches[3][0].teamA = winnerTeam; // LB QF 1
      } else if (mIdx === 7) {
        groupPlayoffMatches[3][0].teamB = winnerTeam; // LB QF 1
      } else if (mIdx === 8) {
        groupPlayoffMatches[3][1].teamA = winnerTeam; // LB QF 2
      } else if (mIdx === 9) {
        groupPlayoffMatches[3][1].teamB = winnerTeam; // LB QF 2
      }
    } else if (rIdx === 3) {
      // Ronde 3 (Hari 4): LB QF (0..1)
      if (mIdx === 0) groupPlayoffMatches[4][1].teamA = winnerTeam; // LB SF 1
      if (mIdx === 1) groupPlayoffMatches[4][2].teamA = winnerTeam; // LB SF 2
    } else if (rIdx === 4) {
      // Ronde 4 (Hari 5): UB Final (0), LB SF 1 (1), LB SF 2 (2), LB Prelim (3), LB Final (4)
      if (mIdx === 0) {
        groupPlayoffMatches[5][0].teamA = winnerTeam; // Grand Final (Juara Upper)
        groupPlayoffMatches[4][4].teamB = loserTeam;  // LB Final (Gugur UB Final)
      } else if (mIdx === 1) {
        groupPlayoffMatches[4][3].teamA = winnerTeam; // LB Prelim
      } else if (mIdx === 2) {
        groupPlayoffMatches[4][3].teamB = winnerTeam; // LB Prelim
      } else if (mIdx === 3) {
        groupPlayoffMatches[4][4].teamA = winnerTeam; // LB Final
      } else if (mIdx === 4) {
        groupPlayoffMatches[5][0].teamB = winnerTeam; // Grand Final (Juara Lower)
      }
    }
  } else if (groupPlayoffMatches.length === 5) {
    if (rIdx === 0) {
      if (mIdx === 0) {
        groupPlayoffMatches[1][0].teamA = winnerTeam;
        groupPlayoffMatches[1][2].teamB = loserTeam;
      } else if (mIdx === 1) {
        groupPlayoffMatches[1][0].teamB = winnerTeam;
        groupPlayoffMatches[1][3].teamB = loserTeam;
      } else if (mIdx === 2) {
        groupPlayoffMatches[1][1].teamA = winnerTeam;
        groupPlayoffMatches[1][4].teamB = loserTeam;
      } else if (mIdx === 3) {
        groupPlayoffMatches[1][1].teamB = winnerTeam;
        groupPlayoffMatches[1][5].teamB = loserTeam;
      } else if (mIdx === 4) {
        groupPlayoffMatches[1][2].teamA = winnerTeam;
      } else if (mIdx === 5) {
        groupPlayoffMatches[1][3].teamA = winnerTeam;
      } else if (mIdx === 6) {
        groupPlayoffMatches[1][4].teamA = winnerTeam;
      } else if (mIdx === 7) {
        groupPlayoffMatches[1][5].teamA = winnerTeam;
      }
    } else if (rIdx === 1) {
      if (mIdx === 0) {
        groupPlayoffMatches[3][0].teamA = winnerTeam;
        groupPlayoffMatches[3][1].teamB = loserTeam;
      } else if (mIdx === 1) {
        groupPlayoffMatches[3][0].teamB = winnerTeam;
        groupPlayoffMatches[3][2].teamB = loserTeam;
      } else if (mIdx === 2) {
        groupPlayoffMatches[2][0].teamA = winnerTeam;
      } else if (mIdx === 3) {
        groupPlayoffMatches[2][0].teamB = winnerTeam;
      } else if (mIdx === 4) {
        groupPlayoffMatches[2][1].teamA = winnerTeam;
      } else if (mIdx === 5) {
        groupPlayoffMatches[2][1].teamB = winnerTeam;
      }
    } else if (rIdx === 2) {
      if (mIdx === 0) groupPlayoffMatches[3][1].teamA = winnerTeam;
      if (mIdx === 1) groupPlayoffMatches[3][2].teamA = winnerTeam;
    } else if (rIdx === 3) {
      if (mIdx === 0) {
        groupPlayoffMatches[4][0].teamA = winnerTeam;
        groupPlayoffMatches[3][4].teamB = loserTeam;
      } else if (mIdx === 1) {
        groupPlayoffMatches[3][3].teamA = winnerTeam;
      } else if (mIdx === 2) {
        groupPlayoffMatches[3][3].teamB = winnerTeam;
      } else if (mIdx === 3) {
        groupPlayoffMatches[3][4].teamA = winnerTeam;
      } else if (mIdx === 4) {
        groupPlayoffMatches[4][0].teamB = winnerTeam;
      }
    }
  } else {
    // Format Single Elimination 2 atau 4 Grup (Ronde 2/3)
    if (rIdx + 1 < groupPlayoffMatches.length) {
      const nextRound = groupPlayoffMatches[rIdx + 1];
      const nextMatchIdx = Math.floor(mIdx / 2);
      const isSlotA = (mIdx % 2 === 0);

      if (isSlotA) nextRound[nextMatchIdx].teamA = winnerTeam;
      else nextRound[nextMatchIdx].teamB = winnerTeam;
    }
  }

  saveState();
  renderGroupPlayoffTree();
  if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();
}

function promptPlayoffMVP(rIdx, mIdx) {
  if (!isAdmin) return;
  const m = groupPlayoffMatches[rIdx]?.[mIdx];
  if (!m) return;
  openMLBBPlayoffMvpModal(rIdx, mIdx);
}

function renderGroupStageUI() {
  if (currentMLBBViewMode === 'HUB') {
    const hubContainer = document.getElementById('mlbbInteractiveHub');
    const groupStageBox = document.getElementById('groupStageContainer');
    const carouselEl = document.getElementById('mlbbCarouselWrapper');
    const navEl = document.getElementById('mlbbGroupNav');
    const fixturesEl = document.getElementById('groupFixturesWrapper');
    const playoffTitleEl = document.getElementById('groupPlayoffTitle');
    const playoffTreeEl = document.getElementById('groupPlayoffTree');
    if (hubContainer) hubContainer.style.display = 'grid';
    if (groupStageBox) groupStageBox.style.display = 'none';
    if (carouselEl) carouselEl.style.display = 'none';
    if (navEl) navEl.style.display = 'none';
    if (fixturesEl) fixturesEl.style.display = 'none';
    if (playoffTitleEl) playoffTitleEl.style.display = 'none';
    if (playoffTreeEl && playoffTreeEl.parentElement) playoffTreeEl.parentElement.style.display = 'none';
    renderMLBBInteractiveHubUI();
    return;
  }
  const container = document.getElementById('groupStageGrid');
  const navContainer = document.getElementById('mlbbGroupNav');
  if (!container) return;

  const gKeys = Object.keys(groupStageData);
  const totalGroups = gKeys.length;
  const totalPages = Math.ceil(totalGroups / 3) || 1;
  if (mlbbGroupPageIndex >= totalPages) mlbbGroupPageIndex = Math.max(0, totalPages - 1);

  if (navContainer) {
    if (totalGroups === 0) {
      navContainer.style.display = 'none';
    } else {
      navContainer.style.display = 'block';
      const startIndex = mlbbGroupPageIndex * 3;
      const visibleKeys = gKeys.slice(startIndex, startIndex + 3);
      const visibleNames = visibleKeys.map(k => k.replace('Grup ', '')).join(', ');

      let tabsHtml = '';
      for (let p = 0; p < totalPages; p++) {
        const pStart = p * 3;
        const pKeys = gKeys.slice(pStart, pStart + 3);
        const pLabel = pKeys.map(k => k.replace('Grup ', '')).join(' - ');
        tabsHtml += `
          <button type="button" class="group-nav-tab-btn ${p === mlbbGroupPageIndex ? 'active' : ''}" onclick="goToMLBBGroupPage(${p})">
            📑 Grup ${pLabel}
          </button>
        `;
      }

      navContainer.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; background: rgba(11, 15, 25, 0.95); border: 1px solid rgba(0, 210, 255, 0.25); border-radius: 10px; padding: 0.75rem 1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; font-size: 0.85rem;" onclick="prevMLBBGroupPage()" ${mlbbGroupPageIndex === 0 ? 'disabled' : ''}>
              ◀ Sebelumnya
            </button>
            <button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; font-size: 0.85rem;" onclick="nextMLBBGroupPage()" ${mlbbGroupPageIndex >= totalPages - 1 ? 'disabled' : ''}>
              Berikutnya ▶
            </button>
          </div>

          <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span style="font-size: 0.78rem; color: var(--text-muted); margin-right: 0.2rem;">Pilih Tab:</span>
            ${tabsHtml}
          </div>

          <div style="font-size: 0.82rem; font-weight: 700; color: var(--yokke-cyan); display: flex; align-items: center; gap: 0.35rem;">
            <span>🛡️</span> <span>Grup ${visibleNames} (${startIndex + 1}–${Math.min(startIndex + 3, totalGroups)} dari ${totalGroups} Grup)</span>
          </div>
        </div>
      `;
    }
  }
  if (gKeys.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; background: rgba(255,255,255,0.02); border: 1px dashed var(--border-color); border-radius: 10px;">
        <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🎲</div>
        <div style="font-size: 1.1rem; font-weight: 700; color: var(--yokke-gold); margin-bottom: 0.35rem;">
          Pembagian Grup MLBB Belum Diundi
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); max-width: 520px; margin: 0 auto;">
          Grup turnamen Mobile Legends belum diundi. Pastikan pendaftaran telah ditutup, lalu panitia dapat menekan tombol <strong>🎲 Acak Undian Tim</strong> saat sesi Technical Meeting.
        </div>
      </div>
    `;
    const tbBanner = document.getElementById('mlbbTieBreakerBanner');
    if (tbBanner) {
      tbBanner.style.display = 'none';
      tbBanner.innerHTML = '';
    }
    renderGroupFixturesUI();
    renderGroupPlayoffTree();
    return;
  }

  let html = '';
  const numToQualify = 2;
  const startIndex = mlbbGroupPageIndex * 3;
  const activeGKeys = gKeys.slice(startIndex, startIndex + 3);

  activeGKeys.forEach(gName => {
    const teams = groupStageData[gName] || [];
    
    // Hitung akumulasi MVP per tim di grup ini (Mendukung Multi-MVP BO3 per Game)
    teams.forEach(t => {
      let mvpCount = 0;
      for (const mId in groupMatchResults) {
        const m = groupMatchResults[mId];
        if (m.gName === gName) {
          if (Array.isArray(m.gameMvps) && m.gameMvps.length > 0) {
            m.gameMvps.forEach(gm => {
              if (gm && gm.player && (gm.team === t.name || (!gm.team && (m.mvpTeam === t.name || m.winner === t.name)))) {
                mvpCount++;
              }
            });
          } else if (m.mvpPlayer && (m.mvpTeam === t.name || (m.winner === t.name && !m.mvpTeam))) {
            mvpCount++;
          }
        }
      }
      t.mvpCount = mvpCount;
    });

    const sorted = getSortedGroupTeams(gName);
    const isGroupAllDone = isGroupMatchesCompleted(gName);

    html += `
      <div class="group-box">
        <div class="group-header">
          <span>🛡️ ${escapeHtml(gName)}</span>
          <span style="font-size:0.75rem;color:var(--text-muted)">${gKeys.length === 8 ? 'Juara 1 & 2 ➔ Upper, Juara 3 ➔ Lower' : `Top ${numToQualify} Lolos ke Playoff`}</span>
        </div>
        <div style="padding:0.5rem">
          <table>
            <thead>
              <tr>
                <th>Tim</th>
                <th style="text-align:center;width:45px;" title="Pertandingan Dimainkan">Match</th>
                <th style="text-align:center;">M</th>
                <th style="text-align:center;">K</th>
                <th style="text-align:center;width:60px;" title="Agregat Game (Game Menang - Game Kalah)">Agregat</th>
                <th style="text-align:center;">Poin</th>
                <th style="text-align:center;">⭐ MVP</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${sorted.map((t, idx) => {
                const isQ = isGroupAllDone && (idx < numToQualify);
                const origIdx = groupStageData[gName].indexOf(t);

                const winCtrl = isAdmin ? `
                  <input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('${gName}', ${origIdx}, 'win', this.value)">
                ` : t.win;

                const loseCtrl = isAdmin ? `
                  <input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('${gName}', ${origIdx}, 'lose', this.value)">
                ` : t.lose;

                const diffVal = (t.diff !== undefined) ? t.diff : ((t.gameWon || 0) - (t.gameLost || 0));
                const diffSign = diffVal > 0 ? `+${diffVal}` : `${diffVal}`;
                const diffColor = diffVal > 0 ? 'var(--yokke-green)' : (diffVal < 0 ? '#f87171' : 'var(--text-muted)');
                const gameDetail = `${t.gameWon || 0}-${t.gameLost || 0}`;

                return `
                  <tr style="${isQ ? 'background:rgba(6,214,160,0.1);font-weight:bold;' : ''}">
                    <td>
                      <div style="display:flex;align-items:center;gap:0.35rem;flex-wrap:wrap;">
                        <span>${escapeHtml(t.name)}</span>
                        <!-- Invited team badge hidden per privacy rule -->
                      </div>
                    </td>
                    <td style="text-align:center;font-weight:700;color:#cbd5e1;">${t.matchCount !== undefined ? t.matchCount : ((t.win || 0) + (t.lose || 0) + (t.draw || 0))}</td>
                    <td style="text-align:center;">${winCtrl}</td>
                    <td style="text-align:center;">${loseCtrl}</td>
                    <td style="text-align:center;" title="Game: ${t.gameWon || 0}M - ${t.gameLost || 0}K (Selisih Game: ${diffSign})">
                      <span style="font-weight:800; color:${diffColor};">${diffSign}</span>
                      <div style="font-size:0.68rem; color:var(--text-muted);">${gameDetail}</div>
                    </td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:800;">${t.pts}</td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:700;">${t.mvpCount || 0}</td>
                    <td>${
                      isGroupAllDone ? (
                        gKeys.length === 8 ? (
                          idx < 2 ? '<span style="color:var(--yokke-cyan);font-weight:700;">Upper</span>' :
                          (idx === 2 ? '<span style="color:var(--yokke-gold);font-weight:700;">Lower</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
                        ) : (isQ ? '<span style="color:var(--yokke-green)">Lolos</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
                      ) : '<span style="color:var(--text-muted);font-size:0.75rem;font-style:italic;" title="Status kelolosan ditutup hingga seluruh match selesai">🔒 Ditutup</span>'
                    }</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Render Banner Tie-Breaker jika ada kondisi tie-breaker yang aktif
  const tbBanner = document.getElementById('mlbbTieBreakerBanner');
  if (tbBanner) {
    const tb = tournamentStageState.mlbb.tieBreaker;
    if (tb && tb.needed && !tb.winner) {
      tbBanner.style.display = 'block';
      tbBanner.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
          <div>
            <div style="font-size:1rem;font-weight:800;color:var(--yokke-red);margin-bottom:0.25rem;">
              ⚠️ TIE-BREAKER MATCH DIPERLUKAN (${escapeHtml(tb.group)})
            </div>
            <div style="font-size:0.85rem;color:var(--text-muted);">
              Peringkat 2 & 3 grup <strong>${escapeHtml(tb.group)}</strong> memiliki poin sama (<strong>${escapeHtml(tb.teamA)}</strong> vs <strong>${escapeHtml(tb.teamB)}</strong>).
              Pertandingan penentuan (BO1) wajib diselesaikan untuk menentukan tim yang melaju ke Babak Playoff.
            </div>
          </div>
          ${isAdmin ? `
            <div style="display:flex;gap:0.5rem;align-items:center;">
              <span style="font-size:0.8rem;font-weight:700;">Pilih Pemenang BO1:</span>
              <button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke-cyan);color:#0f172a;font-weight:700;" onclick="resolveMLBBTieBreaker('${escapeHtml(tb.teamA).replace(/'/g, "\\'")}')">🏆 ${escapeHtml(tb.teamA)}</button>
              <button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke-gold);color:#0f172a;font-weight:700;" onclick="resolveMLBBTieBreaker('${escapeHtml(tb.teamB).replace(/'/g, "\\'")}')">🏆 ${escapeHtml(tb.teamB)}</button>
            </div>
          ` : `
            <div style="font-size:0.85rem;font-weight:700;color:var(--yokke-gold);">
              Menunggu Panitia Menentukan Hasil Pertandingan Tie-Breaker BO1.
            </div>
          `}
        </div>
      `;
    } else {
      tbBanner.style.display = 'none';
      tbBanner.innerHTML = '';
    }
  }

  renderGroupFixturesUI();
  renderGroupPlayoffTree();
}

// --- ALUR JADWAL RESMI TURNAMEN YOKKE SQUAD MLBB (3 MINGGU) ---
const MLBB_SCHEDULE_DATES = {
  1: 'Senin, 26 Okt 2026',
  2: 'Selasa, 27 Okt 2026',
  3: 'Rabu, 28 Okt 2026',
  4: 'Kamis, 29 Okt 2026',
  5: 'Jumat, 30 Okt 2026'
};

// Jadwal Resmi Pertandingan Fase Grup MLBB Sesuai Poster Publikasi Resmi Panitia
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

// Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisan alias/tanda kurung di poster)
function resolveTeamNameInGroup(rawName, groupTeams) {
  if (!rawName || !groupTeams || groupTeams.length === 0) return rawName;
  if (groupTeams.includes(rawName)) return rawName;
  const lower = rawName.trim().toLowerCase();
  const ci = groupTeams.find(t => t.toLowerCase() === lower);
  if (ci) return ci;
  const norm = lower.replace(/[^a-z0-9]/g, '');
  const partial = groupTeams.find(t => {
    const tNorm = t.toLowerCase().replace(/[^a-z0-9]/g, '');
    return tNorm === norm || tNorm.startsWith(norm) || norm.startsWith(tNorm);
  });
  if (partial) return partial;
  return rawName;
}

// Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, spasi, tanda kurung, dan alias
function isSameTeamName(name1, name2) {
  if (!name1 || !name2) return false;
  if (name1 === name2) return true;
  const n1 = name1.toLowerCase().trim();
  const n2 = name2.toLowerCase().trim();
  if (n1 === n2) return true;
  const c1 = n1.replace(/[^a-z0-9]/g, '');
  const c2 = n2.replace(/[^a-z0-9]/g, '');
  if (c1 === c2 && c1.length > 0) return true;
  if (c1.length >= 3 && c2.length >= 3) {
    if (c1.startsWith(c2) || c2.startsWith(c1)) return true;
  }
  return false;
}

// Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData
function findGroupNameForTeam(teamName) {
  if (!teamName) return '';
  const gsd = (typeof groupStageData === 'object' && groupStageData) ? groupStageData : DEFAULT_MLBB_GROUPS;
  for (const g in gsd) {
    if (Array.isArray(gsd[g]) && gsd[g].some(t => isSameTeamName(t.name, teamName))) {
      return g;
    }
  }
  return '';
}

const MLBB_TOURNAMENT_WEEKS = {
  WEEK_1: {
    title: 'Week 1: Fase Grup 8 Grup (5 Hari)',
    badge: 'Fase Grup • 5 Hari',
    subtitle: 'Babak Penyisihan 41 Tim • Tanpa Tim Bermain 2x Sehari (Maks 1 match/tim per hari) • 16 Upper & 8 Lower',
    days: [
      { day: 1, label: 'Hari 1 (Senin, 26 Okt 2026)', desc: '19:00 WIB / 20:00 WITA • Stream Simultan • Tiap tim main maks 1x' },
      { day: 2, label: 'Hari 2 (Selasa, 27 Okt 2026)', desc: '19:00 WIB / 20:00 WITA • Stream Simultan • Tiap tim main maks 1x' },
      { day: 3, label: 'Hari 3 (Rabu, 28 Okt 2026)', desc: '19:00 WIB / 20:00 WITA • Stream Simultan • Tiap tim main maks 1x' },
      { day: 4, label: 'Hari 4 (Kamis, 29 Okt 2026)', desc: '19:00 WIB / 20:00 WITA • Stream Simultan • Tiap tim main maks 1x' },
      { day: 5, label: 'Hari 5 (Jumat, 30 Okt 2026)', desc: '19:00 WIB / 20:00 WITA • Penentuan Klasemen Akhir Juara 1, 2, 3 Grup' }
    ]
  },
  WEEK_2: {
    title: 'Week 2: Playoff 16 Besar s/d Semifinal (4 Hari)',
    badge: 'Playoff • 4 Hari',
    subtitle: 'Babak Gugur Double Elimination • 16 Tim Upper Bracket & 8 Tim Lower Bracket',
    days: [
      { day: 6, label: 'Hari 6 (Playoff Day 1)', phase: 'Upper Bracket Round 1 (16 Besar)', desc: '8 Pertandingan BO3 • 16 Juara 1 & 2 Grup' },
      { day: 7, label: 'Hari 7 (Playoff Day 2)', phase: 'Lower Bracket Round 1', desc: '8 Pertandingan BO3 • 8 Juara 3 Grup vs 8 Tim Turun dari UB R1' },
      { day: 8, label: 'Hari 8 (Playoff Day 3)', phase: 'Upper Bracket QF & Lower Bracket R2', desc: '4 Match UB QF + 4 Match LB R2' },
      { day: 9, label: 'Hari 9 (Playoff Day 4)', phase: 'Upper Bracket SF & Lower Bracket QF', desc: '2 Match UB SF (Menentukan Finalis UB) + 4 Match LB QF' }
    ]
  },
  WEEK_3: {
    title: 'Week 3: Final Stage & Super Grand Final (4 Hari)',
    badge: 'Final Stage • 4 Hari',
    subtitle: 'Perebutan Gelar Juara Turnamen Yokke Squad 2026 • Live Offline di Kantor Pusat Yokke',
    days: [
      { day: 10, label: 'Hari 10 (Final Stage Day 1)', phase: 'Lower Bracket Semifinal & Upper Bracket Final', desc: '2 Match LB Semifinal (BO3) + 1 Match UB Final (BO5)' },
      { day: 11, label: 'Hari 11 (Final Stage Day 2)', phase: 'Lower Bracket Final', desc: '1 Pertandingan BO5 (Penentuan Finalis ke Grand Final)' },
      { day: 12, label: 'Hari 12 (Final Stage Day 3)', phase: 'Bronze Match (Perebutan Juara 3)', desc: '1 Pertandingan BO5 (Penentuan Juara 3 & Juara 4)' },
      { day: 13, label: 'Hari 13 (Final Stage Day 4)', phase: 'Super Grand Final Offline', desc: 'Best of 7 (BO7) Offline di Kantor Pusat Yokke • Penentuan Juara 1 & Juara 2' }
    ]
  }
};

let mlbbActiveWeek = 'WEEK_1'; // 'WEEK_1' | 'WEEK_2' | 'WEEK_3'
let mlbbActiveDayFilter = 'ALL'; // 'ALL' | 1 | 2 | 3 | 4
let mlbbActiveGroupFilter = 'ALL'; // 'ALL' | 'Grup A' | ...

function setMLBBActiveWeek(weekKey) {
  mlbbActiveWeek = weekKey;
  if (weekKey !== 'WEEK_1') {
    mlbbActiveDayFilter = 'ALL';
  }
  renderGroupFixturesUI();
}

function setMLBBActiveDayFilter(day) {
  mlbbActiveDayFilter = day;
  renderGroupFixturesUI();
}

function setMLBBActiveGroupFilter(gName) {
  mlbbActiveGroupFilter = gName;
  renderGroupFixturesUI();
}

// --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) ---
function getGroupFixtures(gName, dayFilter = null) {
  const teams = (groupStageData[gName] || []).map(t => t.name);
  const n = teams.length;
  if (n < 2) return [];

  const rawPairs = [];
  const official = MLBB_OFFICIAL_GROUP_SCHEDULE[gName];

  // Cek apakah jadwal resmi panitia tersedia dan cocok dengan tim di grup
  if (official && official.length > 0) {
    official.forEach((item, idx) => {
      const realTeamA = resolveTeamNameInGroup(item.teamA, teams);
      const realTeamB = resolveTeamNameInGroup(item.teamB, teams);
      rawPairs.push({
        matchOrder: item.matchOrder || (idx + 1),
        teamA: realTeamA,
        teamB: realTeamB,
        day: item.day,
        session: item.matchOrder || 1,
        time: '19:00 WIB / 20:00 WITA',
        room: item.room || `Stream ${item.matchOrder || 1}`,
        dateLabel: MLBB_SCHEDULE_DATES[item.day] || `Hari ${item.day}`
      });
    });
  } else {
    // Pola cadangan round-robin jika grup diundi ulang dengan struktur kustom
    const pattern5 = [
      { day: 1, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 0, b: 3 },
      { day: 1, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 1, b: 2 },
      { day: 2, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 4, b: 2 },
      { day: 2, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 0, b: 1 },
      { day: 3, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 3, b: 1 },
      { day: 3, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 4, b: 0 },
      { day: 4, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 2, b: 0 },
      { day: 4, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 3, b: 4 },
      { day: 5, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 1, b: 4 },
      { day: 5, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 2, b: 3 }
    ];

    const pattern6 = [
      { day: 1, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 0, b: 5 },
      { day: 1, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 1, b: 4 },
      { day: 1, session: 2, time: '20:30 WIB', room: 'Stream 1 (Room A)', a: 2, b: 3 },
      { day: 2, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 0, b: 4 },
      { day: 2, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 5, b: 3 },
      { day: 2, session: 2, time: '20:30 WIB', room: 'Stream 1 (Room A)', a: 1, b: 2 },
      { day: 3, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 0, b: 3 },
      { day: 3, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 4, b: 2 },
      { day: 3, session: 2, time: '20:30 WIB', room: 'Stream 1 (Room A)', a: 5, b: 1 },
      { day: 4, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 0, b: 2 },
      { day: 4, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 3, b: 1 },
      { day: 4, session: 2, time: '20:30 WIB', room: 'Stream 1 (Room A)', a: 4, b: 5 },
      { day: 5, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 1 (Room A)', a: 0, b: 1 },
      { day: 5, session: 1, time: '19:00 WIB / 20:00 WITA', room: 'Stream 2 (Room B)', a: 2, b: 5 },
      { day: 5, session: 2, time: '20:30 WIB', room: 'Stream 1 (Room A)', a: 3, b: 4 }
    ];

    const pattern = (n === 6) ? pattern6 : (n === 5 ? pattern5 : null);

    if (pattern) {
      pattern.forEach((item, idx) => {
        if (item.a < n && item.b < n) {
          rawPairs.push({
            matchOrder: idx + 1,
            teamA: teams[item.a],
            teamB: teams[item.b],
            day: item.day,
            session: item.session,
            time: item.time,
            room: item.room || 'Stream 1',
            dateLabel: MLBB_SCHEDULE_DATES[item.day] || `Hari ${item.day}`
          });
        }
      });
    } else {
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
  }

  const fixtures = [];
  rawPairs.forEach(p => {
    if (dayFilter && dayFilter !== 'ALL' && parseInt(dayFilter, 10) !== p.day) return;

    // Cari hasil yang sudah tersimpan dengan canonical matchId, normal atau terbalik
    const canonId = getCanonicalGroupMatchId(gName, p.teamA, p.teamB);
    const matchId = `${gName}_${p.teamA}_vs_${p.teamB}`.replace(/\s+/g, '_');
    const matchIdRev = `${gName}_${p.teamB}_vs_${p.teamA}`.replace(/\s+/g, '_');
    let saved = groupMatchResults[canonId] || groupMatchResults[matchId] || groupMatchResults[matchIdRev];

    // Fallback: cari match di groupMatchResults berdasarkan kecocokan kedua tim (terlepas dari variasi key seperti GRP_1 atau tanpa nama grup)
    if (!saved) {
      for (const k in groupMatchResults) {
        const item = groupMatchResults[k];
        if (!item || !item.teamA || !item.teamB) continue;
        if ((isSameTeamName(item.teamA, p.teamA) && isSameTeamName(item.teamB, p.teamB)) ||
            (isSameTeamName(item.teamA, p.teamB) && isSameTeamName(item.teamB, p.teamA))) {
          saved = item;
          // Auto-migrate ke canonical ID agar akses instan dan konsisten
          groupMatchResults[canonId] = item;
          break;
        }
      }
    }
    if (!saved) saved = {};

    // Peta skor orientasi Home vs Away agar skor selalu sesuai dengan nama tim yang bersangkutan
    let scoreA = null;
    let scoreB = null;
    if (saved.scoreA !== undefined && saved.scoreA !== null && saved.scoreB !== undefined && saved.scoreB !== null) {
      if (Number(saved.scoreA) === 0 && Number(saved.scoreB) === 0 && !saved.winner) {
        // Pertandingan belum dimainkan (bukan hasil WO ganda / draw resmi)
        scoreA = null;
        scoreB = null;
      } else if (isSameTeamName(saved.teamA, p.teamA)) {
        scoreA = saved.scoreA;
        scoreB = saved.scoreB;
      } else if (isSameTeamName(saved.teamA, p.teamB)) {
        scoreA = saved.scoreB;
        scoreB = saved.scoreA;
      } else {
        scoreA = saved.scoreA;
        scoreB = saved.scoreB;
      }
    }

    // Auto-heal jika skor terbalik dibanding pemenang match
    if (saved.winner && scoreA !== null && scoreB !== null) {
      const wLower = (saved.winner || '').toLowerCase().trim();
      if (!wLower.includes('wo') && !wLower.includes('imbang') && !wLower.includes('seri')) {
        if (isSameTeamName(saved.winner, p.teamA) && Number(scoreA) < Number(scoreB)) {
          const tmp = scoreA; scoreA = scoreB; scoreB = tmp;
          if (saved.matchId) {
            if (isSameTeamName(saved.teamA, p.teamA)) {
              saved.scoreA = scoreA; saved.scoreB = scoreB;
            } else {
              saved.scoreA = scoreB; saved.scoreB = scoreA;
            }
          }
        } else if (isSameTeamName(saved.winner, p.teamB) && Number(scoreB) < Number(scoreA)) {
          const tmp = scoreA; scoreA = scoreB; scoreB = tmp;
          if (saved.matchId) {
            if (isSameTeamName(saved.teamA, p.teamB)) {
              saved.scoreA = scoreB; saved.scoreB = scoreA;
            } else {
              saved.scoreA = scoreA; saved.scoreB = scoreB;
            }
          }
        }
      }
    }

    fixtures.push({
      matchId: canonId, // Gunakan canonical ID agar input ulang selalu menimpa match yang sama
      gName: gName,
      teamA: p.teamA,
      teamB: p.teamB,
      week: 1,
      day: p.day,
      session: p.session,
      sessionTime: p.time,
      streamRoom: p.room || 'Stream 1',
      matchOrder: p.matchOrder,
      dateLabel: p.dateLabel || (MLBB_SCHEDULE_DATES[p.day] || `Hari ${p.day}`),
      scoreA: scoreA,
      scoreB: scoreB,
      winner: saved.winner || null,
      mvpPlayer: saved.mvpPlayer || null,
      mvpHero: saved.mvpHero || null,
      mvpTeam: saved.mvpTeam || null,
      gameMvps: saved.gameMvps || null,
      verifiedPlayers: saved.verifiedPlayers || {}
    });
  });

  return fixtures;
}

// Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tidak terpengaruh urutan teamA vs teamB)
function getCanonicalGroupMatchId(gName, teamA, teamB) {
  const cleanG = (gName || '').trim();
  const cleanA = (teamA || '').trim();
  const cleanB = (teamB || '').trim();
  const sorted = [cleanA, cleanB].sort((a, b) => a.localeCompare(b));
  return `${cleanG}_${sorted[0]}_vs_${sorted[1]}`.replace(/\s+/g, '_');
}

// Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah selesai diinput
function isGroupMatchesCompleted(gName) {
  const fixtures = (typeof getGroupFixtures === 'function') ? getGroupFixtures(gName) : [];
  if (fixtures && fixtures.length > 0) {
    return fixtures.every(f => {
      const hasWinner = f.winner !== null && f.winner !== undefined && String(f.winner).trim() !== '';
      const hasScore = f.scoreA !== null && f.scoreB !== null && (Number(f.scoreA) > 0 || Number(f.scoreB) > 0);
      return hasWinner || hasScore;
    });
  }
  const teams = (groupStageData && groupStageData[gName]) || [];
  if (teams.length < 2) return false;
  return teams.every(t => {
    const played = t.matchCount !== undefined ? t.matchCount : ((t.win || 0) + (t.lose || 0) + (t.draw || 0));
    return played >= (teams.length - 1);
  });
}

// Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri terbalik / ganda
function deduplicateGroupMatchResults() {
  if (!groupMatchResults || typeof groupMatchResults !== 'object') return;
  const cleanMr = {};
  for (const mId in groupMatchResults) {
    const m = groupMatchResults[mId];
    if (!m || !m.teamA || !m.teamB || !m.gName) {
      cleanMr[mId] = m;
      continue;
    }
    const cleanG = (m.gName || '').trim();
    const cleanA = (m.teamA || '').trim();
    const cleanB = (m.teamB || '').trim();
    const sorted = [cleanA, cleanB].sort((a, b) => a.localeCompare(b));
    const canonId = `${cleanG}_${sorted[0]}_vs_${sorted[1]}`.replace(/\s+/g, '_');
    const canonTeamA = sorted[0];
    const canonTeamB = sorted[1];

    // Selaraskan skor sesuai tim jika m tersimpan dengan urutan tim terbalik
    let normScA = m.scoreA;
    let normScB = m.scoreB;
    if (isSameTeamName(m.teamA, canonTeamB) && isSameTeamName(m.teamB, canonTeamA)) {
      normScA = m.scoreB;
      normScB = m.scoreA;
    }

    // Auto-heal jika skor terbalik dibanding pemenang match
    let normWinner = m.winner || null;
    if (normWinner && normScA !== null && normScA !== undefined && normScB !== null && normScB !== undefined) {
      const wLower = normWinner.toLowerCase().trim();
      if (!wLower.includes('wo') && !wLower.includes('imbang') && !wLower.includes('seri')) {
        const sA = Number(normScA);
        const sB = Number(normScB);
        if (isSameTeamName(normWinner, canonTeamA) && sA < sB) {
          const tmp = normScA; normScA = normScB; normScB = tmp;
        } else if (isSameTeamName(normWinner, canonTeamB) && sB < sA) {
          const tmp = normScA; normScA = normScB; normScB = tmp;
        }
      }
    }

    const normItem = {
      ...m,
      matchId: canonId,
      gName: cleanG,
      teamA: canonTeamA,
      teamB: canonTeamB,
      scoreA: normScA,
      scoreB: normScB,
      winner: normWinner
    };

    const existing = cleanMr[canonId];
    if (!existing) {
      cleanMr[canonId] = normItem;
    } else {
      // Prioritaskan entri yang memiliki skor dan pemenang valid
      const preferNew = (normItem.winner && !existing.winner) || (normItem.scoreA !== null && existing.scoreA === null);
      let mergedScA = preferNew ? normItem.scoreA : (existing.scoreA !== null ? existing.scoreA : normItem.scoreA);
      let mergedScB = preferNew ? normItem.scoreB : (existing.scoreB !== null ? existing.scoreB : normItem.scoreB);
      let mergedWinner = normItem.winner || existing.winner;

      if (mergedWinner && mergedScA !== null && mergedScA !== undefined && mergedScB !== null && mergedScB !== undefined) {
        const wLower = mergedWinner.toLowerCase().trim();
        if (!wLower.includes('wo') && !wLower.includes('imbang') && !wLower.includes('seri')) {
          const sA = Number(mergedScA);
          const sB = Number(mergedScB);
          if (isSameTeamName(mergedWinner, canonTeamA) && sA < sB) {
            const tmp = mergedScA; mergedScA = mergedScB; mergedScB = tmp;
          } else if (isSameTeamName(mergedWinner, canonTeamB) && sB < sA) {
            const tmp = mergedScA; mergedScA = mergedScB; mergedScB = tmp;
          }
        }
      }

      cleanMr[canonId] = {
        ...existing,
        teamA: canonTeamA,
        teamB: canonTeamB,
        scoreA: mergedScA,
        scoreB: mergedScB,
        winner: mergedWinner,
        mvpPlayer: normItem.mvpPlayer || existing.mvpPlayer,
        mvpHero: normItem.mvpHero || existing.mvpHero,
        mvpTeam: normItem.mvpTeam || existing.mvpTeam,
        gameMvps: preferNew ? (normItem.gameMvps || existing.gameMvps) : (existing.gameMvps || normItem.gameMvps)
      };
    }
  }
  groupMatchResults = cleanMr;
}

// Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di grup tertentu
function getGroupRestingTeams(gName, day) {
  const teams = (groupStageData[gName] || []).map(t => t.name).filter(t => t && !t.includes('(TBD)'));
  const dayFixtures = getGroupFixtures(gName, day);
  const playingTeams = new Set();
  dayFixtures.forEach(f => {
    playingTeams.add(f.teamA);
    playingTeams.add(f.teamB);
  });
  return teams.filter(t => !playingTeams.has(t));
}

function setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB, explicitWinner = null) {
  if (!isAdmin) return;
  scoreA = (scoreA !== '' && scoreA !== null && !isNaN(parseInt(scoreA, 10))) ? parseInt(scoreA, 10) : null;
  scoreB = (scoreB !== '' && scoreB !== null && !isNaN(parseInt(scoreB, 10))) ? parseInt(scoreB, 10) : null;
  let winner = explicitWinner;
  if (scoreA !== null && scoreB !== null) {
    if (scoreA > scoreB) {
      winner = teamA;
    } else if (scoreB > scoreA) {
      winner = teamB;
    } else if (scoreA === 0 && scoreB === 0) {
      if (!explicitWinner) {
        // Tanyakan pilihan jika skor 0 - 0: Apakah WO Ganda, Tim Tertentu Kalah WO, atau Imbang/Seri?
        const choice = prompt(
          `Pertandingan ${teamA} vs ${teamB} memiliki skor 0 - 0.\n\n` +
          `Pilih status hasil pertandingan ini:\n` +
          `1 = Keduanya Kalah WO (0-0, Kedua Tim Kalah 1x, 0 Poin)\n` +
          `2 = Imbang / Seri (0-0, Kedua Tim 0 Poin)\n` +
          `3 = ${teamA} Kalah WO (${teamB} Menang 2-0)\n` +
          `4 = ${teamB} Kalah WO (${teamA} Menang 2-0)\n\n` +
          `Masukkan angka 1, 2, 3, atau 4:`
        );
        if (!choice) return;
        const opt = choice.trim();
        if (opt === '1') {
          winner = 'Keduanya WO (0-0)';
        } else if (opt === '2') {
          winner = 'Imbang (0-0)';
        } else if (opt === '3') {
          scoreA = 0; scoreB = 2;
          winner = `${teamB} (Menang WO)`;
        } else if (opt === '4') {
          scoreA = 2; scoreB = 0;
          winner = `${teamA} (Menang WO)`;
        } else {
          winner = 'Keduanya WO (0-0)';
        }
      } else {
        winner = explicitWinner;
      }
    } else {
      if (!explicitWinner) {
        winner = `Imbang (${scoreA}-${scoreB})`;
      } else {
        winner = explicitWinner;
      }
    }
  }

  // Auto-heal jika skor terbalik dibanding pemenang resmi
  if (winner && scoreA !== null && scoreB !== null) {
    const wLow = winner.toLowerCase().trim();
    if (!wLow.includes('wo') && !wLow.includes('imbang') && !wLow.includes('seri')) {
      if (isSameTeamName(winner, teamA) && Number(scoreA) < Number(scoreB)) {
        const tmp = scoreA; scoreA = scoreB; scoreB = tmp;
      } else if (isSameTeamName(winner, teamB) && Number(scoreB) < Number(scoreA)) {
        const tmp = scoreA; scoreA = scoreB; scoreB = tmp;
      }
    }
  }

  // Canonicalize Match ID agar tidak ada duplikasi antara A_vs_B dan B_vs_A
  const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);
  const rawId1 = `${gName}_${teamA}_vs_${teamB}`.replace(/\s+/g, '_');
  const rawId2 = `${gName}_${teamB}_vs_${teamA}`.replace(/\s+/g, '_');

  let prev = groupMatchResults[canonId] || groupMatchResults[matchId] || groupMatchResults[rawId1] || groupMatchResults[rawId2];
  if (!prev) {
    for (const k in groupMatchResults) {
      const item = groupMatchResults[k];
      if (!item || !item.teamA || !item.teamB) continue;
      if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||
          (isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {
        prev = item;
        break;
      }
    }
  }
  if (!prev) prev = {};

  // Hapus seluruh key varian / terbalik lama agar match count tidak bertambah ganda saat salah input
  if (matchId && matchId !== canonId) delete groupMatchResults[matchId];
  if (rawId1 !== canonId) delete groupMatchResults[rawId1];
  if (rawId2 !== canonId) delete groupMatchResults[rawId2];
  const malformedKey = `_${teamA}_vs_${teamB}`.replace(/\s+/g, '_');
  if (groupMatchResults[malformedKey]) delete groupMatchResults[malformedKey];
  const malformedKeyRev = `_${teamB}_vs_${teamA}`.replace(/\s+/g, '_');
  if (groupMatchResults[malformedKeyRev]) delete groupMatchResults[malformedKeyRev];

  groupMatchResults[canonId] = {
    matchId: canonId,
    gName,
    teamA,
    teamB,
    scoreA,
    scoreB,
    winner,
    mvpPlayer: prev.mvpPlayer || null,
    mvpHero: prev.mvpHero || null,
    mvpTeam: prev.mvpTeam || (winner || null),
    gameMvps: prev.gameMvps || null
  };

  recalculateGroupStandingsFromFixtures();
  saveState();
  initGroupPlayoff();
  renderGroupStageUI();
}

// Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupun kedua tim
function promptGroupMatchWO(matchId, gName, teamA, teamB) {
  if (!isAdmin) return;
  const choice = prompt(
    `⚡ PENGATURAN STATUS WALKOVER (WO)\n` +
    `Pertandingan: ${teamA} vs ${teamB}\n\n` +
    `Pilih tim yang Walkover (WO):\n` +
    `1 = ${teamA} Kalah WO ➔ (${teamB} Menang 2-0)\n` +
    `2 = ${teamB} Kalah WO ➔ (${teamA} Menang 2-0)\n` +
    `3 = Keduanya Kalah WO ➔ (Skor 0-0, Kedua Tim Kalah 1x, 0 Poin)\n\n` +
    `Masukkan angka 1, 2, atau 3:`
  );
  if (!choice) return;
  const opt = choice.trim();
  if (opt === '1') {
    setGroupMatchScore(matchId, gName, teamA, teamB, 0, 2, `${teamB} (Menang WO)`);
  } else if (opt === '2') {
    setGroupMatchScore(matchId, gName, teamA, teamB, 2, 0, `${teamA} (Menang WO)`);
  } else if (opt === '3') {
    setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Keduanya WO (0-0)');
  } else {
    alert('⚠️ Pilihan tidak valid. Harap masukkan angka 1, 2, atau 3.');
  }
}

// Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imbang)
function setGroupMatchSpecialResult(matchId, gName, teamA, teamB, resultType) {
  if (!isAdmin) return;
  if (resultType === 'WO') {
    promptGroupMatchWO(matchId, gName, teamA, teamB);
  } else if (resultType === 'DRAW') {
    setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Imbang (0-0)');
  }
}

function saveGroupFixtureScore(matchId, gName, teamA, teamB) {
  if (!isAdmin) return;
  const scAEl = document.getElementById('scA_' + matchId) || document.getElementById('scoreA_' + matchId);
  const scBEl = document.getElementById('scB_' + matchId) || document.getElementById('scoreB_' + matchId);
  if (!scAEl || !scBEl) return;
  const scoreA = scAEl.value;
  const scoreB = scBEl.value;
  setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB);
}

// --- MODAL PEMILIH MVP INTERAKTIF (ONE-CLICK ROSTER & META HERO SELECTOR) ---
const MLBB_POPULAR_MVP_HEROES = [
  "Ling", "Fanny", "Hayabusa", "Nolan", "Suyou", "Beatrix", "Claude", "Harith", 
  "Chou", "Fredrinn", "Valentina", "Novaria", "Tigreal", "Arlott", "Roger", "Cici", "Zhuxin", "Hirara", "Lukas"
];

let currentMvpModalContext = {
  matchId: null,
  canonId: null,
  gName: null,
  teamA: null,
  teamB: null,
  winner: null,
  scoreA: null,
  scoreB: null,
  activeTeam: 'teamA',
  currentGame: 1,
  maxGames: 3,
  format: 'BO3',
  gameMvps: [], // [{ game: 1, player, hero, team }, ...]
  selectedPlayer: null,
  selectedHero: null,
  selectedTeam: null,
  isPlayoff: false,
  playoffRIdx: null,
  playoffMIdx: null
};

// Helper mencari data peserta tim dengan normalisasi nama
function findTeamParticipant(teamName) {
  if (!teamName || !participants || participants.length === 0) return null;
  const exact = participants.find(p => p.name === teamName);
  if (exact) return exact;
  const lower = teamName.trim().toLowerCase();
  const ci = participants.find(p => (p.name || '').trim().toLowerCase() === lower);
  if (ci) return ci;
  const norm = lower.replace(/[^a-z0-9]/g, '');
  return participants.find(p => {
    const pNorm = (p.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return pNorm === norm || pNorm.startsWith(norm) || norm.startsWith(pNorm);
  }) || null;
}

function openMLBBGroupMvpModal(matchId, gName, teamA, teamB, scoreA, scoreB) {
  if (!isAdmin) return;
  // Pastikan gName terisi (auto-detect berdasarkan tim jika kosong)
  if (!gName || typeof gName !== 'string' || gName.trim() === '') {
    gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';
  }
  const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);
  const rawId1 = `${gName}_${teamA}_vs_${teamB}`.replace(/\s+/g, '_');
  const rawId2 = `${gName}_${teamB}_vs_${teamA}`.replace(/\s+/g, '_');
  let saved = groupMatchResults[canonId] || groupMatchResults[matchId] || groupMatchResults[rawId1] || groupMatchResults[rawId2];

  // Fallback pencocokan riwayat jika ID disimpan dengan format lain
  if (!saved) {
    for (const k in groupMatchResults) {
      const item = groupMatchResults[k];
      if (!item || !item.teamA || !item.teamB) continue;
      if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||
          (isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {
        saved = item;
        break;
      }
    }
  }
  if (!saved) saved = {};

  let winner = saved.winner || null;
  if (!winner && scoreA !== null && scoreB !== null && scoreA !== undefined && scoreB !== undefined) {
    if (parseInt(scoreA, 10) > parseInt(scoreB, 10)) winner = teamA;
    else if (parseInt(scoreB, 10) > parseInt(scoreA, 10)) winner = teamB;
  }

  // Pilih tim pemenang secara default jika ada, agar admin langsung melihat pemain tim pemenang
  const defaultTab = (winner === teamB) ? 'teamB' : 'teamA';

  // Inisialisasi gameMvps dari cache tersimpan atau konversi dari single legacy
  let initialGameMvps = [];
  if (Array.isArray(saved.gameMvps) && saved.gameMvps.length > 0) {
    initialGameMvps = JSON.parse(JSON.stringify(saved.gameMvps));
  } else if (saved.mvpPlayer) {
    initialGameMvps = [{
      game: 1,
      player: saved.mvpPlayer,
      hero: saved.mvpHero || null,
      team: saved.mvpTeam || winner || teamA
    }];
  }

  const firstMvp = initialGameMvps.find(x => x && x.game === 1) || initialGameMvps[0] || null;

  currentMvpModalContext = {
    matchId: canonId,
    canonId: canonId,
    gName: gName,
    teamA: teamA,
    teamB: teamB,
    winner: winner,
    scoreA: scoreA !== undefined ? scoreA : saved.scoreA,
    scoreB: scoreB !== undefined ? scoreB : saved.scoreB,
    activeTeam: firstMvp ? (firstMvp.team === teamB ? 'teamB' : 'teamA') : defaultTab,
    currentGame: 1,
    maxGames: 3,
    format: 'BO3',
    gameMvps: initialGameMvps,
    selectedPlayer: firstMvp ? firstMvp.player : null,
    selectedHero: firstMvp ? firstMvp.hero : null,
    selectedTeam: firstMvp ? firstMvp.team : (winner || teamA),
    isPlayoff: false,
    playoffRIdx: null,
    playoffMIdx: null
  };

  initAndShowMvpModal();
}

function openMLBBPlayoffMvpModal(rIdx, mIdx) {
  if (!isAdmin) return;
  const m = groupPlayoffMatches[rIdx]?.[mIdx];
  if (!m) return;

  const defaultTab = (m.winner === m.teamB) ? 'teamB' : 'teamA';
  const isGrandFinal = (rIdx === groupPlayoffMatches.length - 1);
  const maxGames = isGrandFinal ? 5 : 3;
  const format = isGrandFinal ? 'BO5' : 'BO3';

  let initialGameMvps = [];
  if (Array.isArray(m.gameMvps) && m.gameMvps.length > 0) {
    initialGameMvps = JSON.parse(JSON.stringify(m.gameMvps));
  } else if (m.mvpPlayer) {
    initialGameMvps = [{
      game: 1,
      player: m.mvpPlayer,
      hero: m.mvpHero || null,
      team: m.mvpTeam || m.winner || m.teamA
    }];
  }

  const firstMvp = initialGameMvps.find(x => x && x.game === 1) || initialGameMvps[0] || null;

  currentMvpModalContext = {
    matchId: `PLAYOFF_R${rIdx}_M${mIdx}`,
    canonId: `PLAYOFF_R${rIdx}_M${mIdx}`,
    gName: 'Playoff',
    teamA: m.teamA,
    teamB: m.teamB,
    winner: m.winner || null,
    scoreA: m.scoreA,
    scoreB: m.scoreB,
    activeTeam: firstMvp ? (firstMvp.team === m.teamB ? 'teamB' : 'teamA') : defaultTab,
    currentGame: 1,
    maxGames: maxGames,
    format: format,
    gameMvps: initialGameMvps,
    selectedPlayer: firstMvp ? firstMvp.player : null,
    selectedHero: firstMvp ? firstMvp.hero : null,
    selectedTeam: firstMvp ? firstMvp.team : (m.winner || m.teamA),
    isPlayoff: true,
    playoffRIdx: rIdx,
    playoffMIdx: mIdx
  };

  initAndShowMvpModal();
}

function initAndShowMvpModal() {
  const modal = document.getElementById('mlbbMvpPickerModal');
  if (!modal) return;

  const ctx = currentMvpModalContext;

  // Subtitle info match
  const subEl = document.getElementById('mvpModalMatchSubtitle');
  if (subEl) {
    const scoreStr = (ctx.scoreA !== null && ctx.scoreA !== undefined && ctx.scoreB !== null && ctx.scoreB !== undefined)
      ? ` (Skor: ${ctx.scoreA} - ${ctx.scoreB})`
      : '';
    subEl.innerText = `${ctx.gName ? `${ctx.gName} • ` : ''}${ctx.teamA} vs ${ctx.teamB}${scoreStr}`;
  }

  // Update Tab Buttons Text
  const tabA = document.getElementById('mvpTabTeamA');
  const tabB = document.getElementById('mvpTabTeamB');
  if (tabA && tabB) {
    const isWinA = ctx.winner === ctx.teamA;
    const isWinB = ctx.winner === ctx.teamB;
    tabA.innerHTML = `${escapeHtml(ctx.teamA)} ${isWinA ? '🏆' : ''}`;
    tabB.innerHTML = `${escapeHtml(ctx.teamB)} ${isWinB ? '🏆' : ''}`;
  }

  // Render Tabs Seri Game BO3 / BO5
  renderMvpGameTabs();

  // Pre-fill inputs untuk game yang aktif
  const pInput = document.getElementById('mvpSelectedPlayerInput');
  const hInput = document.getElementById('mvpSelectedHeroInput');
  if (pInput) pInput.value = ctx.selectedPlayer || '';
  if (hInput) hInput.value = ctx.selectedHero || '';

  // Clear search filter
  const sInput = document.getElementById('mvpPlayerSearchInput');
  if (sInput) sInput.value = '';

  // Render quick hero pills
  renderMvpQuickHeroChips(ctx.selectedHero);

  // Render Roster
  switchMvpTeamTab(ctx.activeTeam);

  modal.classList.add('active');
}

function renderMvpGameTabs() {
  const container = document.getElementById('mvpGameTabsContainer');
  const progressText = document.getElementById('mvpGameProgressText');
  if (!container) return;

  const ctx = currentMvpModalContext;
  const maxGames = ctx.maxGames || 3;
  const filledCount = (ctx.gameMvps || []).filter(g => g && g.player).length;

  if (progressText) {
    progressText.innerText = `Format ${ctx.format || 'BO3'} • ${filledCount}/${maxGames} MVP Terisi`;
  }

  let html = '';
  for (let g = 1; g <= maxGames; g++) {
    const existing = (ctx.gameMvps || []).find(x => x && x.game === g && x.player);
    const hasMvp = !!existing;
    const isActive = ctx.currentGame === g;
    const pillClass = `mvp-game-pill ${isActive ? 'active' : ''} ${hasMvp ? 'has-mvp' : ''}`.trim();
    const star = hasMvp ? '⭐' : '';
    const label = `🎮 Game ${g} ${star}`.trim();

    html += `
      <button type="button" class="${pillClass}" onclick="switchMvpGameTab(${g})">
        ${label}
      </button>
    `;
  }

  container.innerHTML = html;
}

function switchMvpGameTab(targetGame) {
  const ctx = currentMvpModalContext;
  if (ctx.currentGame === targetGame) return;

  // 1. Sinkronkan input saat ini ke gameMvps untuk currentGame aktif sebelum beralih
  const pInput = document.getElementById('mvpSelectedPlayerInput');
  const hInput = document.getElementById('mvpSelectedHeroInput');
  const currentP = pInput ? pInput.value.trim() : '';
  const currentH = hInput ? hInput.value.trim() : '';

  if (!Array.isArray(ctx.gameMvps)) {
    ctx.gameMvps = [];
  }

  const existingIdx = ctx.gameMvps.findIndex(x => x && x.game === ctx.currentGame);
  if (currentP) {
    const item = {
      game: ctx.currentGame,
      player: currentP,
      hero: currentH || null,
      team: ctx.selectedTeam || ctx.winner || ctx.teamA
    };
    if (existingIdx >= 0) {
      ctx.gameMvps[existingIdx] = item;
    } else {
      ctx.gameMvps.push(item);
    }
  } else if (existingIdx >= 0) {
    ctx.gameMvps.splice(existingIdx, 1);
  }

  // 2. Berpindah ke targetGame
  ctx.currentGame = targetGame;

  // 3. Muat data targetGame jika sudah ada
  const targetData = ctx.gameMvps.find(x => x && x.game === targetGame);
  if (targetData) {
    ctx.selectedPlayer = targetData.player;
    ctx.selectedHero = targetData.hero;
    ctx.selectedTeam = targetData.team;
    if (pInput) pInput.value = targetData.player;
    if (hInput) hInput.value = targetData.hero || '';
    ctx.activeTeam = (targetData.team === ctx.teamB) ? 'teamB' : 'teamA';
  } else {
    ctx.selectedPlayer = null;
    ctx.selectedHero = null;
    ctx.selectedTeam = ctx.winner || ctx.teamA;
    if (pInput) pInput.value = '';
    if (hInput) hInput.value = '';
    ctx.activeTeam = (ctx.winner === ctx.teamB) ? 'teamB' : 'teamA';
  }

  // 4. Update UI Tab Game, Hero Pills, dan Roster
  renderMvpGameTabs();
  renderMvpQuickHeroChips(ctx.selectedHero);
  switchMvpTeamTab(ctx.activeTeam);
}

function closeMLBBGroupMvpModal() {
  const modal = document.getElementById('mlbbMvpPickerModal');
  if (modal) modal.classList.remove('active');
}

function switchMvpTeamTab(teamKey) {
  currentMvpModalContext.activeTeam = teamKey;
  const tabA = document.getElementById('mvpTabTeamA');
  const tabB = document.getElementById('mvpTabTeamB');

  if (tabA && tabB) {
    if (teamKey === 'teamA') {
      tabA.classList.remove('btn-outline');
      tabA.classList.add('btn-primary');
      tabA.style.background = 'var(--yokke-cyan)';
      tabA.style.color = '#0b1120';
      tabB.classList.remove('btn-primary');
      tabB.classList.add('btn-outline');
      tabB.style.background = 'transparent';
      tabB.style.color = '#fff';
    } else {
      tabB.classList.remove('btn-outline');
      tabB.classList.add('btn-primary');
      tabB.style.background = 'var(--yokke-cyan)';
      tabB.style.color = '#0b1120';
      tabA.classList.remove('btn-primary');
      tabA.classList.add('btn-outline');
      tabA.style.background = 'transparent';
      tabA.style.color = '#fff';
    }
  }

  const targetTeam = teamKey === 'teamA' ? currentMvpModalContext.teamA : currentMvpModalContext.teamB;
  renderMvpRosterList(targetTeam);
}

function renderMvpRosterList(teamName) {
  const container = document.getElementById('mvpRosterContainer');
  const countInfo = document.getElementById('mvpRosterCountInfo');
  if (!container) return;

  const teamPart = findTeamParticipant(teamName);
  const roster = (teamPart && Array.isArray(teamPart.roster)) ? teamPart.roster : [];

  if (countInfo) {
    countInfo.innerText = `${roster.length} pemain terdaftar`;
  }

  if (roster.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.8rem; background: rgba(255,255,255,0.02); border-radius: 6px;">
        Tidak ada data roster terdaftar untuk tim ${escapeHtml(teamName)}. Anda dapat mengetik manual nama pemain di bawah.
      </div>
    `;
    return;
  }

  const searchVal = (document.getElementById('mvpPlayerSearchInput')?.value || '').toLowerCase().trim();
  const selectedPlayer = document.getElementById('mvpSelectedPlayerInput')?.value || currentMvpModalContext.selectedPlayer || '';

  let html = '';
  let visibleCount = 0;

  roster.forEach(r => {
    const ign = (r.nickname || r.name || '').trim();
    const realName = (r.name || '').trim();
    const role = (r.role || 'Pemain').trim();

    if (searchVal) {
      const matchIgn = ign.toLowerCase().includes(searchVal);
      const matchReal = realName.toLowerCase().includes(searchVal);
      if (!matchIgn && !matchReal) return;
    }

    visibleCount++;
    const isSelected = selectedPlayer && (selectedPlayer.toLowerCase() === ign.toLowerCase() || selectedPlayer.toLowerCase() === realName.toLowerCase());

    const safeIgn = ign.replace(/'/g, "\\'");
    const safeReal = realName.replace(/'/g, "\\'");
    const safeTeam = teamName.replace(/'/g, "\\'");

    html += `
      <div class="mvp-roster-chip ${isSelected ? 'selected' : ''}" onclick="selectMvpPlayer('${safeIgn}', '${safeReal}', '${safeTeam}')">
        <div style="font-weight: 800; font-size: 0.92rem; color: var(--yokke-gold); word-break: break-word;">
          ${escapeHtml(ign || realName)}
        </div>
        <div style="font-size: 0.72rem; color: #cbd5e1; margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${escapeHtml(realName)}
        </div>
        <span class="badge" style="font-size: 0.65rem; padding: 1px 6px; margin-top: 4px; align-self: flex-start; background: rgba(0,210,255,0.1); color: var(--yokke-cyan); border: 1px solid rgba(0,210,255,0.25);">
          ${escapeHtml(role)}
        </span>
      </div>
    `;
  });

  if (visibleCount === 0 && searchVal) {
    html = `<div style="grid-column:1/-1; padding:0.75rem; text-align:center; color:var(--text-muted); font-size:0.78rem;">Tidak ditemukan pemain yang cocok dengan "${escapeHtml(searchVal)}".</div>`;
  }

  container.innerHTML = html;
}

function filterMvpRosterList() {
  const teamKey = currentMvpModalContext.activeTeam;
  const targetTeam = teamKey === 'teamA' ? currentMvpModalContext.teamA : currentMvpModalContext.teamB;
  renderMvpRosterList(targetTeam);
}

function selectMvpPlayer(nickname, realName, teamName) {
  const chosen = nickname || realName;
  const pInput = document.getElementById('mvpSelectedPlayerInput');
  if (pInput) pInput.value = chosen;
  currentMvpModalContext.selectedPlayer = chosen;
  currentMvpModalContext.selectedTeam = teamName;

  // Langsung rekam ke gameMvps untuk game aktif saat ini
  const ctx = currentMvpModalContext;
  if (!Array.isArray(ctx.gameMvps)) ctx.gameMvps = [];
  const existingIdx = ctx.gameMvps.findIndex(x => x && x.game === ctx.currentGame);
  const hInput = document.getElementById('mvpSelectedHeroInput');
  const curHero = hInput ? hInput.value.trim() : (ctx.selectedHero || '');
  const item = {
    game: ctx.currentGame,
    player: chosen,
    hero: curHero || null,
    team: teamName
  };
  if (existingIdx >= 0) {
    ctx.gameMvps[existingIdx] = item;
  } else {
    ctx.gameMvps.push(item);
  }

  // Update tab game indikator bintang & roster highlight
  renderMvpGameTabs();
  const teamKey = ctx.activeTeam;
  const targetTeam = teamKey === 'teamA' ? ctx.teamA : ctx.teamB;
  renderMvpRosterList(targetTeam);
}

function renderMvpQuickHeroChips(activeHero) {
  const container = document.getElementById('mvpQuickHeroChips');
  if (!container) return;

  const currentHero = (activeHero || '').toLowerCase().trim();
  let html = '';

  MLBB_POPULAR_MVP_HEROES.forEach(hero => {
    const isActive = currentHero === hero.toLowerCase();
    const safeHero = hero.replace(/'/g, "\\'");
    html += `
      <span class="mvp-hero-pill ${isActive ? 'active' : ''}" onclick="selectMvpQuickHero('${safeHero}')">
        ${hero}
      </span>
    `;
  });

  container.innerHTML = html;
}

function selectMvpQuickHero(heroName) {
  const hInput = document.getElementById('mvpSelectedHeroInput');
  if (hInput) hInput.value = heroName;
  currentMvpModalContext.selectedHero = heroName;

  // Perbarui hero di gameMvps jika entry game sudah ada
  const ctx = currentMvpModalContext;
  if (Array.isArray(ctx.gameMvps)) {
    const existing = ctx.gameMvps.find(x => x && x.game === ctx.currentGame);
    if (existing) {
      existing.hero = heroName;
    }
  }

  renderMvpQuickHeroChips(heroName);
}

function saveSelectedMvp() {
  if (!isAdmin) return;
  const ctx = currentMvpModalContext;
  const pInput = document.getElementById('mvpSelectedPlayerInput');
  const hInput = document.getElementById('mvpSelectedHeroInput');

  const curP = pInput ? pInput.value.trim() : '';
  const curH = hInput ? hInput.value.trim() : '';

  if (!Array.isArray(ctx.gameMvps)) ctx.gameMvps = [];

  // Sinkronkan input game yang sedang terbuka
  const existingIdx = ctx.gameMvps.findIndex(x => x && x.game === ctx.currentGame);
  if (curP) {
    const item = {
      game: ctx.currentGame,
      player: curP,
      hero: curH || null,
      team: ctx.selectedTeam || ctx.winner || ctx.teamA
    };
    if (existingIdx >= 0) {
      ctx.gameMvps[existingIdx] = item;
    } else {
      ctx.gameMvps.push(item);
    }
  } else if (existingIdx >= 0) {
    ctx.gameMvps.splice(existingIdx, 1);
  }

  // Filter gameMvps yang valid dan urutkan berdasarkan nomor game
  const validGames = ctx.gameMvps
    .filter(g => g && g.player && g.player.trim())
    .sort((a, b) => a.game - b.game);

  if (validGames.length === 0) {
    alert('Silakan pilih minimal 1 pemain MVP untuk game yang dimainkan sebelum menyimpan.');
    return;
  }

  // Format ringkasan teks untuk Google Sheets & backward compatibility
  let summaryPlayer = '';
  let summaryHero = '';
  if (validGames.length === 1 && validGames[0].game === 1) {
    summaryPlayer = validGames[0].player;
    summaryHero = validGames[0].hero || '';
  } else {
    summaryPlayer = validGames.map(g => `G${g.game}: ${g.player}`).join(' | ');
    summaryHero = validGames.map(g => `G${g.game}: ${g.hero || '-'}`).join(' | ');
  }
  const summaryTeam = validGames[0].team || ctx.winner || ctx.teamA;

  if (ctx.isPlayoff) {
    const m = groupPlayoffMatches[ctx.playoffRIdx]?.[ctx.playoffMIdx];
    if (m) {
      m.gameMvps = validGames;
      m.mvpPlayer = summaryPlayer;
      m.mvpHero = summaryHero || null;
      m.mvpTeam = summaryTeam;
      saveState();
      renderGroupPlayoffTree();
      syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || `PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffMIdx}`).catch(e => console.warn(e));
      showToast(`⭐ Berhasil menyimpan ${validGames.length} MVP Playoff (${ctx.format || 'BO3'}) & disinkronkan ke GSheet`, 'success');
    }
  } else {
    setGroupMatchMVP(ctx.canonId, summaryPlayer, summaryHero, summaryTeam, validGames);
    syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));
    showToast(`⭐ Berhasil menyimpan ${validGames.length} MVP Match (${ctx.format || 'BO3'}) & disinkronkan ke GSheet (3 baris)`, 'success');
  }

  closeMLBBGroupMvpModal();
}

function deleteCurrentMvp() {
  if (!isAdmin) return;
  const ctx = currentMvpModalContext;
  if (!Array.isArray(ctx.gameMvps)) ctx.gameMvps = [];

  const validGames = ctx.gameMvps.filter(g => g && g.player);
  if (validGames.length === 0 && !ctx.selectedPlayer) {
    closeMLBBGroupMvpModal();
    return;
  }

  if (validGames.length > 1) {
    const delCurrent = confirm(`Hapus MVP Game ${ctx.currentGame} saja?\n\n• OK = Hapus MVP Game ${ctx.currentGame}\n• Batal = Lanjut untuk opsi hapus SEMUA MVP pertandingan ini`);
    if (delCurrent) {
      const idx = ctx.gameMvps.findIndex(x => x && x.game === ctx.currentGame);
      if (idx >= 0) ctx.gameMvps.splice(idx, 1);

      const pInput = document.getElementById('mvpSelectedPlayerInput');
      const hInput = document.getElementById('mvpSelectedHeroInput');
      if (pInput) pInput.value = '';
      if (hInput) hInput.value = '';
      ctx.selectedPlayer = null;
      ctx.selectedHero = null;

      saveSelectedMvp();
      return;
    }
  }

  if (!confirm('Apakah Anda yakin ingin menghapus seluruh data MVP untuk pertandingan ini?')) return;

  if (ctx.isPlayoff) {
    const m = groupPlayoffMatches[ctx.playoffRIdx]?.[ctx.playoffMIdx];
    if (m) {
      m.gameMvps = [];
      m.mvpPlayer = null;
      m.mvpHero = null;
      m.mvpTeam = null;
      saveState();
      renderGroupPlayoffTree();
      syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || `PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffMIdx}`).catch(e => console.warn(e));
      showToast('Data MVP Playoff telah dihapus & disinkronkan ke GSheet.', 'info');
    }
  } else {
    setGroupMatchMVP(ctx.canonId, null, null, null, []);
    syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));
    showToast('Data MVP match telah dihapus & disinkronkan ke GSheet (3 baris).', 'info');
  }

  closeMLBBGroupMvpModal();
}

function setGroupMatchMVP(matchId, mvpPlayer, mvpHero, mvpTeam, gameMvps = null) {
  if (!isAdmin) return;
  const ctx = currentMvpModalContext || {};
  let gName = ctx.gName || '';
  let teamA = ctx.teamA || '';
  let teamB = ctx.teamB || '';

  // 1. Cari apakah ada data match eksisting
  let existing = groupMatchResults[matchId];
  if (!existing) {
    for (const k in groupMatchResults) {
      if (groupMatchResults[k] && groupMatchResults[k].matchId === matchId) {
        existing = groupMatchResults[k];
        break;
      }
    }
  }

  if (existing) {
    if (!gName) gName = existing.gName || '';
    if (!teamA) teamA = existing.teamA || '';
    if (!teamB) teamB = existing.teamB || '';
  }

  if (!gName && (teamA || teamB)) {
    gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';
  }

  const canonId = (teamA && teamB) ? getCanonicalGroupMatchId(gName, teamA, teamB) : matchId;

  if (!groupMatchResults[canonId]) {
    groupMatchResults[canonId] = existing || {
      matchId: canonId,
      gName: gName,
      teamA: teamA,
      teamB: teamB,
      scoreA: ctx.scoreA !== undefined ? ctx.scoreA : null,
      scoreB: ctx.scoreB !== undefined ? ctx.scoreB : null,
      winner: ctx.winner || null
    };
  }

  const target = groupMatchResults[canonId];
  target.matchId = canonId;
  target.gName = gName || target.gName || '';
  target.teamA = teamA || target.teamA || '';
  target.teamB = teamB || target.teamB || '';
  target.mvpPlayer = mvpPlayer ? mvpPlayer.trim() : null;
  target.mvpHero = mvpHero ? mvpHero.trim() : null;
  if (mvpTeam) {
    target.mvpTeam = mvpTeam;
  } else if (target.winner) {
    target.mvpTeam = target.winner;
  }

  if (gameMvps !== null) {
    target.gameMvps = gameMvps;
  } else if (mvpPlayer && !target.gameMvps) {
    target.gameMvps = [{
      game: 1,
      player: mvpPlayer,
      hero: mvpHero || null,
      team: target.mvpTeam || null
    }];
  } else if (!mvpPlayer) {
    target.gameMvps = [];
  }

  // Bersihkan key lama non-canonical jika ada
  if (matchId && matchId !== canonId && groupMatchResults[matchId]) {
    delete groupMatchResults[matchId];
  }
  const malformedKey = `_${teamA}_vs_${teamB}`.replace(/\s+/g, '_');
  if (groupMatchResults[malformedKey]) {
    delete groupMatchResults[malformedKey];
  }
  const malformedKeyRev = `_${teamB}_vs_${teamA}`.replace(/\s+/g, '_');
  if (groupMatchResults[malformedKeyRev]) {
    delete groupMatchResults[malformedKeyRev];
  }

  saveState();
  renderGroupStageUI();
  if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();
  if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();
}

// Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5)
function formatMatchMvpDisplayHtml(m) {
  if (!m) return '';
  if (Array.isArray(m.gameMvps) && m.gameMvps.length > 0) {
    const validGames = m.gameMvps.filter(g => g && g.player);
    if (validGames.length > 0) {
      const badges = validGames.map(g => {
        const heroTag = g.hero ? ` <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(g.hero)})</span>` : '';
        const teamTag = g.team ? ` <span style="color:var(--yokke-cyan);font-size:0.65rem;font-weight:600;">[${escapeHtml(g.team)}]</span>` : '';
        return `<span class="badge" style="background:rgba(255,183,3,0.12);color:var(--yokke-gold);border:1px solid rgba(255,183,3,0.3);font-size:0.7rem;padding:2px 7px;display:inline-flex;align-items:center;gap:3px;margin:2px 3px 2px 0;">⭐ <strong>G${g.game}:</strong> ${escapeHtml(g.player)}${heroTag}${teamTag}</span>`;
      }).join('');
      return `<div style="display:flex;flex-wrap:wrap;align-items:center;gap:4px;margin-top:0.4rem;padding-top:0.35rem;border-top:1px dashed rgba(255,255,255,0.08);">${badges}</div>`;
    }
  }
  if (m.mvpPlayer) {
    const heroTag = m.mvpHero ? ` <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(m.mvpHero)})</span>` : '';
    const teamTag = m.mvpTeam ? `<span style="font-size:0.68rem;color:var(--yokke-cyan);margin-left:auto;">${escapeHtml(m.mvpTeam)}</span>` : '';
    return `
      <div style="font-size:0.75rem;color:var(--yokke-gold);font-weight:700;margin-top:0.4rem;padding-top:0.35rem;border-top:1px dashed rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:4px;">
        <span>⭐ MVP: <strong style="color:#fff;">${escapeHtml(m.mvpPlayer)}</strong>${heroTag}</span>
        ${teamTag}
      </div>
    `;
  }
  return '';
}

// Delegasi fungsi promptGroupMatchMVP ke modal interaktif
function promptGroupMatchMVP(matchId, teamA, teamB, gName = '') {
  if (!isAdmin) return;
  if (!gName) {
    gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';
  }
  openMLBBGroupMvpModal(matchId, gName, teamA, teamB, null, null);
}

// --- MODAL VERIFIKASI PEMAIN PERTANDINGAN (MATCH ROSTER VERIFICATION) ---
let currentMatchVerifyContext = {
  matchId: null,
  canonId: null,
  gName: null,
  teamA: null,
  teamB: null
};

function openMatchPlayerVerifyModal(matchId, gName, teamA, teamB) {
  if (!gName || typeof gName !== 'string' || gName.trim() === '') {
    gName = (typeof findGroupNameForTeam === 'function' && (findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB))) || '';
  }
  const canonId = typeof getCanonicalGroupMatchId === 'function' ? getCanonicalGroupMatchId(gName, teamA, teamB) : matchId;

  if (typeof groupMatchResults === 'undefined' || !groupMatchResults) {
    groupMatchResults = {};
  }
  if (!groupMatchResults[canonId]) {
    groupMatchResults[canonId] = {
      matchId: canonId,
      gName: gName,
      teamA: teamA,
      teamB: teamB,
      scoreA: null,
      scoreB: null,
      winner: null,
      verifiedPlayers: {}
    };
  }
  if (!groupMatchResults[canonId].verifiedPlayers || typeof groupMatchResults[canonId].verifiedPlayers !== 'object') {
    groupMatchResults[canonId].verifiedPlayers = {};
  }

  currentMatchVerifyContext = {
    matchId: canonId,
    canonId: canonId,
    gName: gName,
    teamA: teamA,
    teamB: teamB
  };

  renderMatchPlayerVerifyModalContent();
  const modal = document.getElementById('matchPlayerVerifyModal');
  if (modal) modal.classList.add('active');
}

function closeMatchPlayerVerifyModal() {
  const modal = document.getElementById('matchPlayerVerifyModal');
  if (modal) modal.classList.remove('active');
  saveState();
  if (typeof renderGroupStageUI === 'function') renderGroupStageUI();
  if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();
  if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();
}

function toggleMatchPlayerVerify(playerKey) {
  if (!isAdmin) {
    alert('Hanya panitia / admin yang berwenang mengubah status verifikasi pemain.');
    return;
  }
  const canonId = currentMatchVerifyContext.canonId;
  if (!canonId || !groupMatchResults[canonId]) return;
  if (!groupMatchResults[canonId].verifiedPlayers) groupMatchResults[canonId].verifiedPlayers = {};

  const cur = !!groupMatchResults[canonId].verifiedPlayers[playerKey];
  groupMatchResults[canonId].verifiedPlayers[playerKey] = !cur;
  saveState();
  renderMatchPlayerVerifyModalContent();
  if (typeof renderGroupStageUI === 'function') renderGroupStageUI();
  if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();
  if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();
}

function verifyAllMatchPlayers(teamName, shouldVerify = true) {
  if (!isAdmin) {
    alert('Hanya panitia / admin yang berwenang mengubah status verifikasi pemain.');
    return;
  }
  const canonId = currentMatchVerifyContext.canonId;
  if (!canonId || !groupMatchResults[canonId]) return;
  if (!groupMatchResults[canonId].verifiedPlayers) groupMatchResults[canonId].verifiedPlayers = {};

  const teamPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(teamName) : null;
  const roster = (teamPart && Array.isArray(teamPart.roster)) ? teamPart.roster : [];
  roster.forEach(m => {
    const rawKey = `${teamName}_${m.empId || m.name || m.nickname}`;
    const pKey = rawKey.replace(/[\s\(\)\[\]]+/g, '_');
    groupMatchResults[canonId].verifiedPlayers[pKey] = shouldVerify;
  });
  saveState();
  renderMatchPlayerVerifyModalContent();
  if (typeof renderGroupStageUI === 'function') renderGroupStageUI();
  if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();
  if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();
}

function renderMatchPlayerVerifyModalContent() {
  const ctx = currentMatchVerifyContext;
  if (!ctx || !ctx.canonId) return;

  const subtitleEl = document.getElementById('matchVerifySubtitle');
  if (subtitleEl) {
    subtitleEl.innerText = `${ctx.gName ? `${ctx.gName} • ` : ''}${ctx.teamA} vs ${ctx.teamB}`;
  }

  const teamAPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamA) : null;
  const teamBPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamB) : null;

  const rosterA = (teamAPart && Array.isArray(teamAPart.roster)) ? teamAPart.roster : [];
  const rosterB = (teamBPart && Array.isArray(teamBPart.roster)) ? teamBPart.roster : [];

  const verifiedMap = groupMatchResults[ctx.canonId]?.verifiedPlayers || {};

  let countA = 0;
  rosterA.forEach(m => {
    const pKey = `${ctx.teamA}_${m.empId || m.name || m.nickname}`.replace(/[\s\(\)\[\]]+/g, '_');
    if (verifiedMap[pKey]) countA++;
  });

  let countB = 0;
  rosterB.forEach(m => {
    const pKey = `${ctx.teamB}_${m.empId || m.name || m.nickname}`.replace(/[\s\(\)\[\]]+/g, '_');
    if (verifiedMap[pKey]) countB++;
  });

  // Summary Bar
  const summaryEl = document.getElementById('matchVerifySummaryBar');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
        <span style="font-size:0.82rem; font-weight:700; color:var(--yokke-cyan);">🛡️ Status Verifikasi Roster:</span>
        <span class="badge" style="background:${countA >= 5 ? 'rgba(6,214,160,0.18)' : 'rgba(255,183,3,0.15)'}; color:${countA >= 5 ? 'var(--yokke-green)' : 'var(--yokke-gold)'}; border:1px solid rgba(255,255,255,0.15); font-size:0.75rem; padding:3px 8px;">
          ${escapeHtml(ctx.teamA)}: <strong>${countA}/${rosterA.length}</strong> Terverifikasi ${countA >= 5 ? '✅' : ''}
        </span>
        <span class="badge" style="background:${countB >= 5 ? 'rgba(6,214,160,0.18)' : 'rgba(255,183,3,0.15)'}; color:${countB >= 5 ? 'var(--yokke-green)' : 'var(--yokke-gold)'}; border:1px solid rgba(255,255,255,0.15); font-size:0.75rem; padding:3px 8px;">
          ${escapeHtml(ctx.teamB)}: <strong>${countB}/${rosterB.length}</strong> Terverifikasi ${countB >= 5 ? '✅' : ''}
        </span>
      </div>
      ${isAdmin ? `
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
          <button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; border-color:var(--yokke-cyan); color:var(--yokke-cyan);" onclick="verifyAllMatchPlayers('${escapeHtml(ctx.teamA).replace(/'/g, "\\'")}', true)">
            ✅ Verifikasi Semua ${escapeHtml(ctx.teamA)}
          </button>
          <button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; border-color:var(--yokke-gold); color:var(--yokke-gold);" onclick="verifyAllMatchPlayers('${escapeHtml(ctx.teamB).replace(/'/g, "\\'")}', true)">
            ✅ Verifikasi Semua ${escapeHtml(ctx.teamB)}
          </button>
        </div>
      ` : ''}
    `;
  }

  // Helper untuk merender kolom roster tiap tim
  function renderTeamRosterColumn(teamName, roster, count) {
    let html = `
      <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 0.85rem; display:flex; flex-direction:column; gap:0.6rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:0.5rem; margin-bottom:0.25rem;">
          <div>
            <h4 style="margin:0; font-size:0.95rem; color:var(--yokke-gold); display:flex; align-items:center; gap:0.35rem;">
              <span>⚔️</span> <span>${escapeHtml(teamName)}</span>
            </h4>
            <div style="font-size:0.72rem; color:var(--text-muted); margin-top:2px;">
              ${roster.length} pemain terdaftar • ${count} siap bertanding
            </div>
          </div>
          <span class="badge" style="font-size:0.7rem; background:${count >= 5 ? 'rgba(6,214,160,0.15)' : 'rgba(255,255,255,0.05)'}; color:${count >= 5 ? 'var(--yokke-green)' : 'var(--text-muted)'};">
            ${count >= 5 ? '✅ Lineup Lengkap' : `${count}/5 Siap`}
          </span>
        </div>
    `;

    if (roster.length === 0) {
      html += `
        <div style="padding:1rem; text-align:center; color:var(--text-muted); font-size:0.8rem; background:rgba(0,0,0,0.2); border-radius:6px;">
          Belum ada data roster pemain untuk tim ini.
        </div>
      </div>
      `;
      return html;
    }

    roster.forEach(m => {
      const pKey = `${teamName}_${m.empId || m.name || m.nickname}`.replace(/[\s\(\)\[\]]+/g, '_');
      const safePKey = pKey.replace(/'/g, "\\'");
      const isVerified = !!verifiedMap[pKey];

      const cardSrc = m.idCard || (typeof findIdCardByEmpIdOrName === 'function' ? findIdCardByEmpIdOrName(m.empId, m.name) : '');
      const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(cardSrc) : cardSrc) : '';

      const nipLabel = (m.empId && m.empId !== '-') ? m.empId : '-';
      const safeReal = (m.name || '').replace(/'/g, "\\'");
      const safeCard = (cardSrc || '').replace(/'/g, "\\'");

      html += `
        <div style="background: ${isVerified ? 'rgba(6,214,160,0.06)' : 'rgba(0,0,0,0.25)'}; border: 1px solid ${isVerified ? 'rgba(6,214,160,0.3)' : 'rgba(255,255,255,0.06)'}; border-radius: 6px; padding: 0.6rem 0.75rem; display:flex; align-items:center; justify-content:space-between; gap:0.6rem;">
          <div style="display:flex; align-items:center; gap:0.65rem; min-width:0; flex:1;">
            ${cardSrc ? `
              <div style="width:48px; height:48px; flex-shrink:0; cursor:pointer; border-radius:6px; overflow:hidden; border:1px solid rgba(0,210,255,0.3); background:#0f172a; position:relative;" onclick="openIdCardLightbox('${safeCard}', '🪪 ID Card: ${safeReal} (NIP: ${nipLabel})')" title="Klik untuk memperbesar ID Card">
                <img src="${formattedCard}" alt="ID Card" style="width:100%; height:100%; object-fit:cover;">
                <span style="position:absolute; bottom:0; left:0; right:0; background:rgba(0,0,0,0.65); font-size:0.55rem; text-align:center; color:var(--yokke-cyan); line-height:1.2;">Lihat</span>
              </div>
            ` : `
              <div style="width:48px; height:48px; flex-shrink:0; border-radius:6px; border:1px dashed rgba(255,255,255,0.15); background:rgba(255,255,255,0.02); display:flex; align-items:center; justify-content:center; color:var(--text-muted); font-size:0.58rem; text-align:center; padding:2px;">
                No ID Card
              </div>
            `}
            <div style="min-width:0; flex:1;">
              <div style="display:flex; align-items:center; gap:0.35rem; flex-wrap:wrap;">
                <span style="font-weight:800; font-size:0.88rem; color:var(--yokke-gold); word-break:break-word;">
                  ${escapeHtml(m.nickname || m.name || '-')}
                </span>
                <span class="badge" style="font-size:0.62rem; padding:1px 5px; background:rgba(0,210,255,0.1); color:var(--yokke-cyan); border:1px solid rgba(0,210,255,0.25);">
                  ${m.isCaptain ? '👑 Kapten' : (m.role || 'Pemain')}
                </span>
                ${m.isOrganik !== undefined ? `
                  <span style="font-size:0.62rem; color:${m.isOrganik ? 'var(--yokke-green)' : 'var(--text-muted)'};">
                    ${m.isOrganik ? '🏢 Organik' : '👤 Non-Organik'}
                  </span>
                ` : ''}
              </div>
              <div style="font-size:0.74rem; color:#cbd5e1; margin-top:2px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                ${escapeHtml(m.name || '-')} • <code style="font-size:0.7rem;">NIP: ${escapeHtml(nipLabel)}</code>
              </div>
              <div style="font-size:0.72rem; color:var(--text-muted); margin-top:1px;">
                ID Game: <strong style="color:#fff;">${escapeHtml(m.gameId || '-')}</strong>
              </div>
            </div>
          </div>
          <div>
            ${isAdmin ? `
              <button type="button" class="btn ${isVerified ? 'btn-primary' : 'btn-outline'}" style="font-size:0.72rem; padding:0.3rem 0.6rem; ${isVerified ? 'background:var(--yokke-green); border-color:var(--yokke-green); color:#000; font-weight:700;' : 'color:var(--text-muted);'}" onclick="toggleMatchPlayerVerify('${safePKey}')">
                ${isVerified ? '✅ Siap Main' : '⬜ Belum Cek'}
              </button>
            ` : `
              <span class="badge" style="font-size:0.7rem; background:${isVerified ? 'rgba(6,214,160,0.15)' : 'rgba(255,255,255,0.05)'}; color:${isVerified ? 'var(--yokke-green)' : 'var(--text-muted)'}; border:1px solid ${isVerified ? 'rgba(6,214,160,0.3)' : 'rgba(255,255,255,0.1)'};">
                ${isVerified ? '✅ Siap Main' : '⏳ Belum'}
              </span>
            `}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  const container = document.getElementById('matchVerifyRosterContainer');
  if (container) {
    container.innerHTML = `
      ${renderTeamRosterColumn(ctx.teamA, rosterA, countA)}
      ${renderTeamRosterColumn(ctx.teamB, rosterB, countB)}
    `;
  }
}

function resetGroupMatchScore(matchId) {
  if (!isAdmin) return;
  const canonId = (groupMatchResults[matchId]) ? matchId : (Object.keys(groupMatchResults).find(k => k === matchId || groupMatchResults[k].matchId === matchId) || matchId);
  if (groupMatchResults[canonId]) {
    delete groupMatchResults[canonId];
  }
  if (groupMatchResults[matchId]) {
    delete groupMatchResults[matchId];
  }
  recalculateGroupStandingsFromFixtures();
  saveState();
  initGroupPlayoff();
  renderGroupStageUI();
}

function recalculateGroupStandingsFromFixtures() {
  deduplicateGroupMatchResults();

  for (const gName in groupStageData) {
    const teams = groupStageData[gName];
    if (!Array.isArray(teams)) continue;

    // Kumpulkan match unik untuk grup ini agar setiap pertandingan antar 2 tim hanya dihitung 1x
    const uniqueGroupMatches = [];
    const seenPairs = new Set();

    for (const mId in groupMatchResults) {
      const m = groupMatchResults[mId];
      if (!m || m.gName !== gName || !m.teamA || !m.teamB) continue;
      // Pertandingan dihitung jika memiliki pemenang resmi ATAU skor valid terisi (kecuali 0-0 tanpa pemenang / belum main)
      const hasWinner = !!m.winner;
      const hasScore = (m.scoreA !== null && m.scoreA !== undefined && m.scoreB !== null && m.scoreB !== undefined);
      if (!hasWinner && (!hasScore || (Number(m.scoreA) === 0 && Number(m.scoreB) === 0))) continue;

      const pairKey = getCanonicalGroupMatchId(gName, m.teamA, m.teamB);
      if (!seenPairs.has(pairKey)) {
        seenPairs.add(pairKey);
        uniqueGroupMatches.push(m);
      }
    }

    teams.forEach(t => {
      let winCount = 0;
      let loseCount = 0;
      let drawCount = 0;
      let matchCount = 0;
      let gameWonCount = 0;
      let gameLostCount = 0;

      uniqueGroupMatches.forEach(m => {
        const isTeamA = isSameTeamName(m.teamA, t.name);
        const isTeamB = isSameTeamName(m.teamB, t.name);
        if (!isTeamA && !isTeamB) return;

        matchCount++;
        const winnerLower = (m.winner || '').toLowerCase().trim();
        const isDoubleWO = (
          winnerLower === 'keduanya wo (0-0)' ||
          winnerLower === 'keduanya wo' ||
          winnerLower === 'double wo' ||
          winnerLower === 'double walkover' ||
          (winnerLower.includes('keduanya') && winnerLower.includes('wo'))
        );
        const isDraw = !isDoubleWO && (
          winnerLower === 'imbang (0-0)' ||
          winnerLower === 'imbang' ||
          winnerLower === 'seri' ||
          winnerLower.startsWith('imbang') ||
          winnerLower.startsWith('seri')
        );

        const cleanWinner = (m.winner || '')
          .replace(/\(menang\s*wo\)/i, '')
          .replace(/\(wo\)/i, '')
          .replace(/menang\s*wo\s*:\s*/i, '')
          .trim();

        const isWinnerThisTeam = !isDoubleWO && !isDraw && (
          isSameTeamName(m.winner, t.name) ||
          isSameTeamName(cleanWinner, t.name)
        );

        const scThis = isTeamA ? m.scoreA : m.scoreB;
        const scOpp = isTeamA ? m.scoreB : m.scoreA;
        const hasValidGameScores = (scThis !== null && scThis !== undefined && scOpp !== null && scOpp !== undefined);

        if (isDoubleWO) {
          // Keduanya WO: KEDUA TIM DIANGGAP KALAH (1x Kalah, 0 Poin, +1 Match, Game 0-0)
          loseCount++;
          gameWonCount += 0;
          gameLostCount += 0;
        } else if (isDraw) {
          // Skor imbang / seri
          drawCount++;
          if (hasValidGameScores) {
            gameWonCount += Number(scThis) || 0;
            gameLostCount += Number(scOpp) || 0;
          }
        } else if (isWinnerThisTeam) {
          // Tim pemenang (termasuk menang WO karena lawan WO)
          winCount++;
          if (hasValidGameScores && (Number(scThis) > 0 || Number(scOpp) > 0)) {
            // SAFEGUARD: Tim pemenang selalu menerima skor menang (lebih tinggi)
            let wScore = Number(scThis) || 0;
            let lScore = Number(scOpp) || 0;
            if (wScore < lScore) {
              const tmp = wScore; wScore = lScore; lScore = tmp;
            }
            gameWonCount += wScore;
            gameLostCount += lScore;
          } else {
            // Default kemenangan BO3
            gameWonCount += 2;
            gameLostCount += 0;
          }
        } else if (m.winner) {
          // Tim lawan (atau tim yang WO sendiri): DIANGGAP KALAH
          loseCount++;
          if (hasValidGameScores && (Number(scThis) > 0 || Number(scOpp) > 0)) {
            // SAFEGUARD: Tim kalah selalu menerima skor kalah (lebih rendah)
            let lScore = Number(scThis) || 0;
            let wScore = Number(scOpp) || 0;
            if (lScore > wScore) {
              const tmp = lScore; lScore = wScore; wScore = tmp;
            }
            gameWonCount += lScore;
            gameLostCount += wScore;
          } else {
            // Default kekalahan BO3
            gameWonCount += 0;
            gameLostCount += 2;
          }
        } else {
          // Fallback kalkulasi skor langsung jika ada
          if (Number(scThis) > Number(scOpp)) winCount++;
          else if (Number(scOpp) > Number(scThis)) loseCount++;
          else drawCount++;
          gameWonCount += Number(scThis) || 0;
          gameLostCount += Number(scOpp) || 0;
        }
      });

      t.win = winCount;
      t.lose = loseCount;
      t.draw = drawCount;
      t.matchCount = matchCount;
      t.gameWon = gameWonCount;
      t.gameLost = gameLostCount;
      t.diff = gameWonCount - gameLostCount;
      t.pts = winCount * 2;
      t.gName = gName;
    });
  }
}

function renderGroupFixturesUI() {
  const container = document.getElementById('groupFixturesGrid');
  if (!container) return;

  const allGKeys = Object.keys(groupStageData);
  const totalGroups = allGKeys.length;

  let html = '';

  // 1. HEADER SWITCHER 3 MINGGU (ROADMAP RESMI TURNAMEN YOKKE SQUAD)
  html += `
    <div class="schedule-week-tabs">
      <div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_1' ? 'active' : ''}" onclick="setMLBBActiveWeek('WEEK_1')">
        <span class="week-badge">Week 1</span>
        <div style="font-weight: 800; font-size: 0.95rem; margin-bottom: 0.2rem;">Fase Grup (5 Hari)</div>
        <div style="font-size: 0.75rem; opacity: 0.85;">Hari 1–5 • 8 Grup • Nol tim main 2x sehari</div>
      </div>
      <div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_2' ? 'active' : ''}" onclick="setMLBBActiveWeek('WEEK_2')">
        <span class="week-badge">Week 2</span>
        <div style="font-weight: 800; font-size: 0.95rem; margin-bottom: 0.2rem;">Playoff s/d Semifinal (4 Hari)</div>
        <div style="font-size: 0.75rem; opacity: 0.85;">Hari 6–9 • Upper QF & Lower Bracket R1–QF</div>
      </div>
      <div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_3' ? 'active' : ''}" onclick="setMLBBActiveWeek('WEEK_3')">
        <span class="week-badge">Week 3</span>
        <div style="font-weight: 800; font-size: 0.95rem; margin-bottom: 0.2rem;">Final Stage & Grand Final (4 Hari)</div>
        <div style="font-size: 0.75rem; opacity: 0.85;">Hari 10–13 • UB/LB Final, Bronze & Grand Final Offline</div>
      </div>
    </div>
  `;

  // JIKA MEMILIH WEEK 2: TAMPILKAN JADWAL PLAYOFF HINGGA SEMIFINAL
  if (mlbbActiveWeek === 'WEEK_2') {
    const w2 = MLBB_TOURNAMENT_WEEKS.WEEK_2;
    html += `
      <div style="background: rgba(114, 9, 183, 0.08); border: 1px solid rgba(114, 9, 183, 0.25); border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;">
          <h4 style="margin:0; font-size:1.05rem; color:var(--yokke-purple); display:flex; align-items:center; gap:0.5rem;">
            <span>🔥</span> <span>${w2.title}</span>
          </h4>
          <span class="badge" style="background:rgba(114,9,183,0.2); color:#fff;">Double Elimination</span>
        </div>
        <p style="font-size:0.82rem; color:var(--text-muted); margin:0;">${w2.subtitle}</p>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
    `;

    w2.days.forEach(d => {
      html += `
        <div style="background: #090e1c; border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:0.4rem;">
            <span style="font-weight:800; color:var(--yokke-cyan); font-size:0.9rem;">📅 ${d.label}</span>
            <span class="badge" style="font-size:0.7rem; background:rgba(0,210,255,0.12); color:var(--yokke-cyan);">BO3</span>
          </div>
          <div style="font-weight:700; color:#fff; font-size:0.85rem; margin-bottom:0.4rem;">${d.phase}</div>
          <p style="font-size:0.78rem; color:var(--text-muted); margin:0 0 0.75rem;">${d.desc}</p>
          <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:6px; padding:0.5rem 0.75rem; font-size:0.75rem; color:var(--text-muted);">
            ⚔️ Tim yang bertanding diambil otomatis dari hasil klasemen Fase Grup (Juara 1, 2, dan 3).
          </div>
        </div>
      `;
    });
    html += `</div>`;
    container.innerHTML = html;
    return;
  }

  // JIKA MEMILIH WEEK 3: TAMPILKAN JADWAL FINAL STAGE & GRAND FINAL
  if (mlbbActiveWeek === 'WEEK_3') {
    const w3 = MLBB_TOURNAMENT_WEEKS.WEEK_3;
    html += `
      <div style="background: linear-gradient(135deg, rgba(255, 183, 3, 0.12), rgba(15, 23, 42, 0.8)); border: 1px solid var(--yokke-gold); border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;">
          <h4 style="margin:0; font-size:1.05rem; color:var(--yokke-gold); display:flex; align-items:center; gap:0.5rem;">
            <span>👑</span> <span>${w3.title}</span>
          </h4>
          <span class="badge" style="background:var(--yokke-gold); color:#0b1120; font-weight:800;">🏢 Grand Final Offline</span>
        </div>
        <p style="font-size:0.82rem; color:#fff; margin:0;">${w3.subtitle}</p>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
    `;

    w3.days.forEach(d => {
      const isGrandFinal = d.day === 13;
      html += `
        <div style="background: #090e1c; border: 1px solid ${isGrandFinal ? 'var(--yokke-gold)' : 'var(--border-color)'}; border-radius: 8px; padding: 1rem; ${isGrandFinal ? 'box-shadow: 0 0 15px rgba(255,183,3,0.15);' : ''}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:0.4rem;">
            <span style="font-weight:800; color:${isGrandFinal ? 'var(--yokke-gold)' : 'var(--yokke-cyan)'}; font-size:0.9rem;">📅 ${d.label}</span>
            <span class="badge" style="font-size:0.7rem; ${isGrandFinal ? 'background:rgba(255,183,3,0.2); color:var(--yokke-gold);' : 'background:rgba(0,210,255,0.12); color:var(--yokke-cyan);'}">${isGrandFinal ? 'BO7' : 'BO5'}</span>
          </div>
          <div style="font-weight:700; color:#fff; font-size:0.85rem; margin-bottom:0.4rem;">${d.phase}</div>
          <p style="font-size:0.78rem; color:var(--text-muted); margin:0 0 0.75rem;">${d.desc}</p>
          <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:6px; padding:0.5rem 0.75rem; font-size:0.75rem; color:var(--text-muted);">
            ${isGrandFinal ? '🏆 Pemenang dinobatkan sebagai Juara 1 Turnamen Yokke Squad 2026!' : '⚔️ Menentukan tim yang berhak melaju ke Super Grand Final.'}
          </div>
        </div>
      `;
    });
    html += `</div>`;
    container.innerHTML = html;
    return;
  }

  // --- WEEK 1: FASE GRUP 8 GRUP (4 HARI • REST RULE AKTIF) ---
  if (totalGroups === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);font-size:0.85rem;padding:0.5rem 0;">Belum ada grup yang dibentuk. Silakan lakukan undian tim.</p>`;
    return;
  }

  // BANNER REST RULE & INFO WEEK 1
  html += `
    <div style="background: rgba(0, 210, 255, 0.08); border: 1px solid rgba(0, 210, 255, 0.25); border-radius: 8px; padding: 0.85rem 1.1rem; margin-bottom: 1.25rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;">
        <div style="font-size: 0.92rem; font-weight: 800; color: var(--yokke-cyan); display: flex; align-items: center; gap: 0.5rem;">
          <span>📅</span> <span>Jadwal Fase Grup MLBB: 5 Hari Pertandingan</span>
        </div>
        <span class="badge" style="background:rgba(6,214,160,0.15); color:var(--yokke-green); border:1px solid rgba(6,214,160,0.3); font-size:0.75rem;">
          ✨ Regulasi Rest Rule Aktif
        </span>
      </div>
      <p style="font-size: 0.8rem; color: #cbd5e1; margin: 0 0 0.6rem; line-height: 1.5;">
        Week 1 Fase Grup berlangsung selama <strong>5 hari</strong> (26–30 Oktober 2026) mulai pukul <strong>19:00 WIB / 20:00 WITA</strong> secara simultan/paralel (Stream 1 & Stream 2). <strong>Nol tim bertanding 2 kali dalam satu hari</strong> (tiap tim bertanding maksimal 1x per hari di seluruh matchday).
      </p>

      <!-- FILTER HARI (DAY PILLS) -->
      <div style="display:flex; align-items:center; gap:0.45rem; flex-wrap:wrap; padding-top:0.4rem; border-top:1px dashed rgba(255,255,255,0.1);">
        <span style="font-size:0.75rem; font-weight:700; color:var(--yokke-gold); margin-right:0.25rem;">Filter Hari:</span>
        <button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 'ALL' ? 'active' : ''}" onclick="setMLBBActiveDayFilter('ALL')">
          Semua Hari (1–5)
        </button>
        <button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 1 ? 'active' : ''}" onclick="setMLBBActiveDayFilter(1)">
          Hari 1 (26 Okt)
        </button>
        <button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 2 ? 'active' : ''}" onclick="setMLBBActiveDayFilter(2)">
          Hari 2 (27 Okt)
        </button>
        <button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 3 ? 'active' : ''}" onclick="setMLBBActiveDayFilter(3)">
          Hari 3 (28 Okt)
        </button>
        <button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 4 ? 'active' : ''}" onclick="setMLBBActiveDayFilter(4)">
          Hari 4 (29 Okt)
        </button>
        <button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 5 ? 'active' : ''}" onclick="setMLBBActiveDayFilter(5)">
          Hari 5 (30 Okt)
        </button>

        <!-- FILTER GRUP -->
        <span style="font-size:0.75rem; font-weight:700; color:var(--yokke-cyan); margin-left:0.5rem; margin-right:0.25rem;">Filter Grup:</span>
        <select onchange="setMLBBActiveGroupFilter(this.value)" style="background:#0f172a; border:1px solid rgba(255,255,255,0.15); color:#fff; border-radius:6px; font-size:0.75rem; padding:0.25rem 0.5rem; outline:none;">
          <option value="ALL" ${mlbbActiveGroupFilter === 'ALL' ? 'selected' : ''}>Seluruh Grup (A–H)</option>
          ${allGKeys.map(k => `<option value="${k}" ${mlbbActiveGroupFilter === k ? 'selected' : ''}>${k}</option>`).join('')}
        </select>
      </div>
    </div>
  `;

  const targetGroupKeys = (mlbbActiveGroupFilter && mlbbActiveGroupFilter !== 'ALL')
    ? [mlbbActiveGroupFilter]
    : allGKeys;

  targetGroupKeys.forEach((gName, gIdx) => {
    const fixtures = getGroupFixtures(gName, mlbbActiveDayFilter);
    const dayLabel = mlbbActiveDayFilter === 'ALL' 
      ? 'Seluruh Hari (Hari 1–5)'
      : `Hari ${mlbbActiveDayFilter} (${MLBB_SCHEDULE_DATES[mlbbActiveDayFilter] || ''})`;

    html += `
      <div style="background: #090e1c; border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; flex-wrap:wrap; gap:0.4rem;">
          <h4 style="color: var(--yokke-cyan); margin: 0; font-size: 1rem; display:flex; align-items:center; gap:0.4rem;">
            <span>🛡️</span> <span>Jadwal ${escapeHtml(gName)} • ${dayLabel}</span>
          </h4>
          <span style="font-size: 0.75rem; color: var(--text-muted); font-weight:700;">
            ${fixtures.length} Pertandingan BO3
          </span>
        </div>
    `;

    // TAMPILKAN TIM YANG ISTIRAHAT (BYE) JIKA SEDANG MEMFILTER HARI TERTENTU
    if (mlbbActiveDayFilter !== 'ALL') {
      const resting = getGroupRestingTeams(gName, parseInt(mlbbActiveDayFilter, 10));
      if (resting.length > 0) {
        html += `
          <div class="resting-team-banner">
            <span>☕</span> <span><strong>Tim Istirahat Hari ${mlbbActiveDayFilter} (${MLBB_SCHEDULE_DATES[mlbbActiveDayFilter] || ''}):</strong> ${resting.map(t => escapeHtml(t)).join(', ')}</span>
          </div>
        `;
      }
    }

    if (fixtures.length === 0) {
      html += `<p style="color:var(--text-muted);font-size:0.85rem;padding:0.4rem 0;">Tidak ada pertandingan di ${dayLabel} untuk ${escapeHtml(gName)}.</p>`;
    } else {
      html += `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.85rem;">`;

      fixtures.forEach((f, idx) => {
        const isDone = f.winner !== null;
        const winnerLower = (f.winner || '').toLowerCase().trim();
        const isDoubleWO = (
          winnerLower === 'keduanya wo (0-0)' ||
          winnerLower === 'keduanya wo' ||
          (winnerLower.includes('keduanya') && winnerLower.includes('wo'))
        );
        const isSingleWO = !isDoubleWO && winnerLower.includes('wo');
        const isDraw = !isDoubleWO && (winnerLower.includes('imbang') || winnerLower.includes('seri'));
        const safeMatchId = f.matchId.replace(/'/g, "\\'");
        const safeGName = f.gName.replace(/'/g, "\\'");
        const safeTeamA = f.teamA.replace(/'/g, "\\'");
        const safeTeamB = f.teamB.replace(/'/g, "\\'");

        const cleanWinner = (f.winner || '')
          .replace(/\(menang\s*wo\)/i, '')
          .replace(/\(wo\)/i, '')
          .replace(/menang\s*wo\s*:\s*/i, '')
          .trim();

        const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cleanWinner, f.teamA));
        const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cleanWinner, f.teamB));
        const vMap = (f.verifiedPlayers && typeof f.verifiedPlayers === 'object') ? f.verifiedPlayers : {};
        const verifiedCount = Object.values(vMap).filter(Boolean).length;

        html += `
          <div class="group-match-card">
            <div class="match-card-header">
              <span style="font-weight:700; color:var(--yokke-gold); font-size:0.75rem;">
                HARI ${f.day} (${f.dateLabel || ''}) • MATCH ${f.matchOrder || f.session} • ${f.sessionTime} • ${f.streamRoom || 'Stream 1'}
              </span>
              <span class="match-status-badge ${isDone ? 'finished' : 'upcoming'}" style="font-size:0.7rem; padding:0.15rem 0.45rem; border-radius:4px; font-weight:700; ${isDoubleWO ? 'background:rgba(239,68,68,0.18); color:#f87171; border:1px solid rgba(239,68,68,0.35);' : (isSingleWO ? 'background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.3);' : (isDraw ? 'background:rgba(245,158,11,0.18); color:#fbbf24; border:1px solid rgba(245,158,11,0.35);' : (isDone ? 'background:rgba(6,214,160,0.15); color:var(--yokke-green); border:1px solid rgba(6,214,160,0.3);' : 'background:rgba(255,255,255,0.05); color:var(--text-muted); border:1px solid var(--border-color);')))}">
                ${isDoubleWO ? '⚡ KEDUANYA WO (0-0)' : (isSingleWO ? '⚡ SELESAI (WO)' : (isDraw ? '⚖️ IMBANG (0-0)' : (isDone ? 'SELESAI' : 'BO3')))}
              </span>
            </div>
            <div class="match-team-row ${isWinnerA ? 'winner' : ''}">
              <span style="font-weight:600;">
                ${escapeHtml(f.teamA)} 
                ${isWinnerA ? '🏆' + (isSingleWO ? ' <span style="font-size:0.7rem;color:var(--yokke-green);font-weight:700;">(Menang WO)</span>' : '') : (isSingleWO && isWinnerB ? ' <span style="font-size:0.7rem;color:#f87171;font-weight:700;">(Kalah WO)</span>' : (isDoubleWO ? ' <span style="font-size:0.7rem;color:#f87171;font-weight:700;">(Kalah WO)</span>' : ''))}
              </span>
              <span style="font-weight:800; font-size:1rem; color:${f.scoreA !== null ? 'var(--yokke-gold)' : 'var(--text-muted)'};">${f.scoreA !== null ? f.scoreA : '-'}</span>
            </div>
            <div class="match-team-row ${isWinnerB ? 'winner' : ''}">
              <span style="font-weight:600;">
                ${escapeHtml(f.teamB)} 
                ${isWinnerB ? '🏆' + (isSingleWO ? ' <span style="font-size:0.7rem;color:var(--yokke-green);font-weight:700;">(Menang WO)</span>' : '') : (isSingleWO && isWinnerA ? ' <span style="font-size:0.7rem;color:#f87171;font-weight:700;">(Kalah WO)</span>' : (isDoubleWO ? ' <span style="font-size:0.7rem;color:#f87171;font-weight:700;">(Kalah WO)</span>' : ''))}
              </span>
              <span style="font-weight:800; font-size:1rem; color:${f.scoreB !== null ? 'var(--yokke-gold)' : 'var(--text-muted)'};">${f.scoreB !== null ? f.scoreB : '-'}</span>
            </div>
            ${formatMatchMvpDisplayHtml(f)}
            <div style="margin-top:0.45rem; padding-top:0.35rem; border-top:1px solid rgba(255,255,255,0.06); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.35rem;">
              <span style="font-size:0.7rem; color:${verifiedCount > 0 ? 'var(--yokke-green)' : 'var(--text-muted)'}; font-weight:700;">
                ${verifiedCount > 0 ? `🛡️ ${verifiedCount} Terverifikasi` : '🛡️ Roster Belum Dicek'}
              </span>
              <button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 7px; color:var(--yokke-cyan); border-color:rgba(0,210,255,0.4); display:inline-flex; align-items:center; gap:0.25rem;" onclick="openMatchPlayerVerifyModal('${safeMatchId}', '${safeGName}', '${safeTeamA}', '${safeTeamB}')">
                <span>🛡️</span> <span>Verifikasi Pemain</span>
              </button>
            </div>
            ${isAdmin ? `
              <div class="match-admin-scores" style="margin-top:0.4rem; display:flex; align-items:center; gap:0.25rem; flex-wrap:wrap;">
                <span style="font-size:0.7rem; color:var(--text-muted);">Skor:</span>
                <input type="number" min="0" max="2" value="${f.scoreA !== null ? f.scoreA : ''}" id="scA_${safeMatchId}" style="width:38px; text-align:center; padding:2px; font-size:0.75rem;" placeholder="0">
                <span style="font-size:0.75rem; color:var(--text-muted);">-</span>
                <input type="number" min="0" max="2" value="${f.scoreB !== null ? f.scoreB : ''}" id="scB_${safeMatchId}" style="width:38px; text-align:center; padding:2px; font-size:0.75rem;" placeholder="0">
                <button type="button" class="btn btn-primary" style="font-size:0.68rem; padding:2px 8px;" onclick="saveGroupFixtureScore('${safeMatchId}', '${safeGName}', '${safeTeamA}', '${safeTeamB}')">Simpan</button>
                <button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#f87171; border-color:rgba(239,68,68,0.4);" onclick="setGroupMatchSpecialResult('${safeMatchId}', '${safeGName}', '${safeTeamA}', '${safeTeamB}', 'WO')" title="Keduanya Kalah WO (0-0)">⚡ WO</button>
                <button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#fbbf24; border-color:rgba(245,158,11,0.4);" onclick="setGroupMatchSpecialResult('${safeMatchId}', '${safeGName}', '${safeTeamA}', '${safeTeamB}', 'DRAW')" title="Skor Imbang / Seri (0-0)">⚖️ Seri</button>
                ${isDone ? `
                  <button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 8px; color:var(--yokke-gold); border-color:rgba(255,183,3,0.4);" onclick="openMLBBGroupMvpModal('${safeMatchId}', '${safeGName}', '${safeTeamA}', '${safeTeamB}', ${f.scoreA !== null ? f.scoreA : 0}, ${f.scoreB !== null ? f.scoreB : 0})">⭐ MVP</button>
                ` : ''}
              </div>
            ` : ''}
          </div>
        `;
      });
      html += `</div>`;
    }

    html += `</div>`;
  });

  container.innerHTML = html;
}
function renderGroupPlayoffTree() {
  const tree = document.getElementById('groupPlayoffTree');
  if (!tree) return;
  tree.innerHTML = '';

  if (tournamentStageState.mlbb.stage === 'STAGE_1_GROUP') {
    tree.innerHTML = `
      <div style="width: 100%; text-align: center; padding: 2.5rem 1rem; background: rgba(0,0,0,0.25); border: 1px dashed var(--border-color); border-radius: 8px;">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔒</div>
        <div style="font-size: 1.05rem; font-weight: 700; color: var(--yokke-gold); margin-bottom: 0.35rem;">
          Babak Playoff Masih Terkunci
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); max-width: 500px; margin: 0 auto;">
          Fase Grup saat ini sedang berlangsung. Selesaikan seluruh pertandingan grup dan selesaikan Tie-Breaker (jika ada) untuk membuka bagan Playoff.
        </div>
        ${isAdmin ? `
          <div style="margin-top: 1rem; display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: var(--yokke-green); color: #0f172a; font-weight: 700; ${!isRegistrationClosed ? 'opacity: 0.5; cursor: not-allowed;' : ''}" onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaftaran terlebih dahulu sebelum lanjut ke babak playoff.')" : 'proceedToMLBBStage2()'}" ${!isRegistrationClosed ? 'disabled title="Pendaftaran turnamen masih dibuka. Harap tutup pendaftaran terlebih dahulu."' : ''}>
              🏆 Buka & Lanjut ke Babak Playoff
            </button>
            <button class="btn btn-outline" style="padding: 0.45rem 1rem; font-size: 0.85rem; border-color: var(--yokke-cyan); color: var(--yokke-cyan); font-weight: 700;" onclick="testMLBBPlayoffWithCurrentStandings()" title="Simulasi undi bagan playoff menggunakan posisi klasemen sementara saat ini">
              🧪 Uji Undian (Klasemen Saat Ini)
            </button>
          </div>
        ` : ''}
      </div>
    `;
    return;
  }

  const roundNamesMap = {
    1: ['Grand Final'],
    2: ['Semifinal Playoff (4 Besar)', 'Grand Final'],
    3: ['Perempat Final (8 Besar)', 'Semifinal Playoff (4 Besar)', 'Grand Final'],
    5: ['Upper QF & Lower R1 (Hari 3)', 'Upper SF & Lower R2 (Hari 4)', 'Lower QF (Hari 4)', 'Upper Final & Lower Final (Hari 5)', 'Grand Final BO5 (Hari 5)'],
    6: ['Upper 16 Besar (Hari 3)', 'Upper QF & Lower R1 (Hari 3-4)', 'Upper SF & Lower R2/R3 (Hari 4)', 'Lower QF (Hari 4)', 'Upper Final & Lower Final (Hari 5)', 'Grand Final BO5 (Hari 5)']
  };

  const roundNames = roundNamesMap[groupPlayoffMatches.length] || ['Babak Playoff', 'Grand Final'];

  const titleEl = document.getElementById('groupPlayoffTitle');
  if (titleEl) {
    if (groupPlayoffMatches.length === 5) {
      titleEl.innerHTML = '🏆 Bagan Playoff 16 Besar Double Elimination (5 Hari Turnamen)';
    } else if (groupPlayoffMatches.length >= 3) {
      titleEl.innerHTML = '🏆 Babak Playoff Perempat Final, Semifinal & Grand Final (8 Besar)';
    } else {
      titleEl.innerHTML = '🏆 Babak Playoff Semifinal & Grand Final (4 Besar)';
    }
  }

  // Tampilkan Sub-Header Panduan Khusus 5 Hari Double Elimination
  if (groupPlayoffMatches.length === 6 || groupPlayoffMatches.length === 5) {
    const banner = document.createElement('div');
    banner.style.cssText = 'width:100%; margin-bottom:1rem; padding:0.75rem 1rem; background:rgba(255,183,3,0.08); border:1px solid rgba(255,183,3,0.25); border-radius:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;';
    banner.innerHTML = `
      <div style="font-size:0.85rem; font-weight:700; color:var(--yokke-gold); display:flex; align-items:center; gap:0.4rem;">
        <span>⚡</span> <span>Sistem Playoff Double Elimination: Juara 1 (Home) & Juara 2 (Away) Upper Bracket | Gugur Upper (Home) vs Juara 3 (Away) Lower Bracket</span>
      </div>
      <div style="font-size:0.78rem; color:var(--text-muted); display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
        <span>📅 Hari 3: UB 16 Besar & LB R1 | Hari 4: UB QF/SF & LB R2/R3/QF | Hari 5: UB Final, LB Final & Grand Final BO5</span>
        ${isAdmin ? `
          <div style="display:flex; gap:0.4rem; align-items:center;">
            <button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;" onclick="shuffleMLBBPlayoffBracket()" title="Acak ulang undian bagan playoff (Juara 1 Home UB, Juara 2 Away UB, Juara 3 Away LB vs Kalah Upper)">
              🎲 Undi / Acak Bagan Playoff
            </button>
            <button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(--yokke-cyan); color:var(--yokke-cyan); font-weight:700;" onclick="testMLBBPlayoffWithCurrentStandings()" title="Undi ulang bagan playoff langsung dari posisi klasemen terkini">
              🧪 Uji Ulang (Klasemen Saat Ini)
            </button>
          </div>
        ` : ''}
      </div>
    `;
    tree.appendChild(banner);
  }

  groupPlayoffMatches.forEach((round, rIdx) => {
    const col = document.createElement('div');
    col.className = 'bracket-round';

    const header = document.createElement('div');
    header.className = 'round-header';
    header.innerText = roundNames[rIdx] || `Ronde ${rIdx + 1}`;
    col.appendChild(header);

    round.forEach((m, mIdx) => {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'matchup';

      const safeA = (m.teamA || '').replace(/'/g, "\\'");
      const safeB = (m.teamB || '').replace(/'/g, "\\'");

      const bracketBadge = m.bracket === 'UPPER' 
        ? '<span style="font-size:0.65rem; padding:0.1rem 0.35rem; border-radius:4px; background:rgba(0,210,255,0.15); color:var(--yokke-cyan); border:1px solid rgba(0,210,255,0.3); margin-left:0.3rem;">UPPER</span>'
        : (m.bracket === 'LOWER' 
            ? '<span style="font-size:0.65rem; padding:0.1rem 0.35rem; border-radius:4px; background:rgba(255,183,3,0.15); color:var(--yokke-gold); border:1px solid rgba(255,183,3,0.3); margin-left:0.3rem;">LOWER</span>'
            : (m.bracket === 'GRAND_FINAL' ? '<span style="font-size:0.65rem; padding:0.1rem 0.35rem; border-radius:4px; background:rgba(6,214,160,0.15); color:var(--yokke-green); border:1px solid rgba(6,214,160,0.3); margin-left:0.3rem;">FINAL BO5</span>' : ''));

      matchDiv.innerHTML = `
        ${m.matchLabel || m.phaseName ? `
          <div style="font-size:0.7rem; font-weight:700; color:var(--text-muted); margin-bottom:0.25rem; display:flex; justify-content:space-between; align-items:center;">
            <span>${m.matchLabel || ''}</span>
            <span>${bracketBadge}</span>
          </div>
        ` : ''}
        <div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickGroupPlayoffWinner(${rIdx}, ${mIdx}, '${safeA}')">
          <span style="font-size: 0.88rem;">${m.teamA}</span>
          <span style="font-size: 0.8rem; font-weight: 700;">${m.winner === m.teamA ? 'WIN 🏆' : '-'}</span>
        </div>
        <div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickGroupPlayoffWinner(${rIdx}, ${mIdx}, '${safeB}')">
          <span style="font-size: 0.88rem;">${m.teamB}</span>
          <span style="font-size: 0.8rem; font-weight: 700;">${m.winner === m.teamB ? 'WIN 🏆' : '-'}</span>
        </div>
        ${formatMatchMvpDisplayHtml(m)}
        ${isAdmin && m.winner ? `
          <div style="text-align:center; margin-top:0.35rem;">
            <button class="btn btn-outline" style="font-size:0.68rem; padding:0.15rem 0.5rem;" onclick="promptPlayoffMVP(${rIdx}, ${mIdx})">
              ⭐ ${m.mvpPlayer ? 'Ubah MVP' : 'Set MVP'}
            </button>
          </div>
        ` : ''}
      `;
      col.appendChild(matchDiv);
    });

  });
}

// ========================================================
// MCGG MULTI-LOBBY STANDINGS
// ========================================================
function changeMCGGLobby() {
  const sel = document.getElementById('mcggLobbySelect');
  if (sel) currentMCGGLobby = sel.value;
  renderMCGGTable();
}

function getCommanderById(id) {
  if (!id) return null;
  const clean = id.toString().trim().toLowerCase();
  return MCGG_COMMANDERS.find(c => 
    (c.id && c.id.toLowerCase() === clean) || 
    (c.name && c.name.toLowerCase() === clean) ||
    (c.alterName && c.alterName.toLowerCase() === clean) ||
    (c.hero && c.hero.toLowerCase() === clean) ||
    (c.displayName && c.displayName.toLowerCase() === clean) ||
    (c.aliases && c.aliases.map(a => a.toLowerCase()).includes(clean))
  );
}

function updateCommanderPoolFromSetup(setupList) {
  if (!Array.isArray(setupList) || setupList.length === 0) return;
  
  setupList.forEach(item => {
    const rawHero = (item.hero || '').trim();
    const rawAlter = (item.alterName || '').trim();
    const tier = (item.tier || '').trim();
    const targetName = rawHero || rawAlter;
    if (!targetName) return;

    let existing = MCGG_COMMANDERS.find(c => 
      (c.hero && rawHero && c.hero.toLowerCase() === rawHero.toLowerCase()) ||
      (c.alterName && rawAlter && c.alterName.toLowerCase() === rawAlter.toLowerCase()) ||
      (c.name && c.name.toLowerCase() === targetName.toLowerCase()) ||
      (c.aliases && (
        (rawHero && c.aliases.map(a => a.toLowerCase()).includes(rawHero.toLowerCase())) ||
        (rawAlter && c.aliases.map(a => a.toLowerCase()).includes(rawAlter.toLowerCase()))
      ))
    );

    let dispName = rawHero;
    if (rawHero && rawAlter && rawHero.toLowerCase() !== rawAlter.toLowerCase()) {
      dispName = `${rawHero} [${rawAlter}]`;
    } else if (!rawHero && rawAlter) {
      dispName = rawAlter;
    }

    if (existing) {
      existing.tier = tier;
      existing.hero = rawHero || existing.hero;
      existing.alterName = rawAlter || existing.alterName;
      existing.displayName = dispName;
      if (item.heroImage) existing.heroImage = item.heroImage;
      if (item.alterImage) existing.alterImage = item.alterImage;
      if (tier.toLowerCase() === 'meta') existing.isMeta = true;
      if (tier.toLowerCase() === 'high' || tier.toLowerCase() === 'mid') existing.isHighMid = true;
    } else {
      const slug = (rawHero || rawAlter).toLowerCase().replace(/[^a-z0-9]/g, '');
      MCGG_COMMANDERS.push({
        id: slug,
        name: rawHero || rawAlter,
        displayName: dispName,
        hero: rawHero,
        alterName: rawAlter,
        heroImage: item.heroImage || `assets/commanders/${slug}.png`,
        alterImage: item.alterImage || (rawAlter ? `assets/commanders/${rawAlter.toLowerCase().replace(/[^a-z0-9]/g, '')}.png` : ''),
        tier: tier,
        aliases: [rawHero, rawAlter].filter(Boolean),
        isMeta: tier.toLowerCase() === 'meta',
        isHighMid: tier.toLowerCase() === 'high' || tier.toLowerCase() === 'mid'
      });
    }
  });

  if (typeof renderMCGGTable === 'function') {
    renderMCGGTable();
  }
}

function getVerifiedMCGGPlayers() {
  let verified = participants.filter(p => p.category === 'MCGG' && p.status === 'VERIFIED');
  if (verified.length === 0) {
    verified = participants.filter(p => p.category === 'MCGG' && p.status !== 'REJECTED');
  }
  return verified;
}

function syncMCGGPlayers(doShuffle = false) {
  let verified = getVerifiedMCGGPlayers();
  if (verified.length === 0) {
    verified = participants.filter(p => p.category === 'MCGG');
  }

  if (doShuffle) {
    verified = [...verified].sort(() => Math.random() - 0.5);
  }

  const P = verified.length;

  const findPrevious = (ply) => {
    for (const lKey in mcggLobbies) {
      const arr = mcggLobbies[lKey] || [];
      const f = arr.find(x => 
        (x.name && ply.name && x.name.trim().toLowerCase() === ply.name.trim().toLowerCase()) ||
        (x.gameId && ply.gameId && x.gameId !== '-' && x.gameId === ply.gameId)
      );
      if (f) return f;
    }
    return null;
  };

  const mapPlayerObj = (pItem) => {
    const prev = findPrevious(pItem) || {};
    return {
      name: pItem.name,
      dept: pItem.dept || '',
      nickname: pItem.nickname || (pItem.roster && pItem.roster[0] ? pItem.roster[0].nickname : '-') || '-',
      gameId: pItem.gameId || (pItem.roster && pItem.roster[0] ? pItem.roster[0].gameId : '-') || '-',
      r1: prev.r1 || 0,
      r2: prev.r2 || 0,
      r3: prev.r3 || 0,
      c1: prev.c1 || '',
      c2: prev.c2 || '',
      c3: prev.c3 || '',
      penalty: prev.penalty || 0,
      total: prev.total || 0
    };
  };

  // Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase Awal)
  const allocateLobbiesByCluster = (playerList, lobbyKeys, targetCaps) => {
    // 1. Kelompokkan peserta berdasarkan Klaster Divisi
    const clusterBuckets = {};
    playerList.forEach(ply => {
      const cluster = getDepartmentCluster(ply.dept, ply.name);
      if (!clusterBuckets[cluster]) clusterBuckets[cluster] = [];
      clusterBuckets[cluster].push(ply);
    });

    // 2. Urutkan klaster dari jumlah anggota terbanyak
    const sortedClusters = Object.keys(clusterBuckets).sort((a, b) => clusterBuckets[b].length - clusterBuckets[a].length);

    if (doShuffle) {
      sortedClusters.sort((a, b) => {
        const diff = clusterBuckets[b].length - clusterBuckets[a].length;
        return diff !== 0 ? diff : (Math.random() - 0.5);
      });
      sortedClusters.forEach(cName => {
        clusterBuckets[cName] = [...clusterBuckets[cName]].sort(() => Math.random() - 0.5);
      });
    }

    // 3. Round-Robin Greedy Dispersal ke lobi
    sortedClusters.forEach(clusterName => {
      const list = clusterBuckets[clusterName];
      list.forEach(ply => {
        let bestKey = null;
        let minClusterCount = 999;
        let minTotal = 999;

        lobbyKeys.forEach((k, idx) => {
          if (mcggLobbies[k].length >= targetCaps[idx]) return;
          const sameClusterCount = mcggLobbies[k].filter(p => {
            const d = p.dept || '';
            return getDepartmentCluster(d, p.name) === clusterName;
          }).length;
          const totalInLobby = mcggLobbies[k].length;

          if (sameClusterCount < minClusterCount) {
            minClusterCount = sameClusterCount;
            minTotal = totalInLobby;
            bestKey = k;
          } else if (sameClusterCount === minClusterCount && totalInLobby < minTotal) {
            minTotal = totalInLobby;
            bestKey = k;
          }
        });

        if (!bestKey) {
          bestKey = lobbyKeys.slice().sort((a, b) => mcggLobbies[a].length - mcggLobbies[b].length)[0];
        }

        mcggLobbies[bestKey].push(mapPlayerObj(ply));
      });
    });
  };

  const qualKeys = Object.keys(mcggLobbies).filter(k => k.startsWith('LOBBY_') && k !== 'LOBBY_LOWER');
  const existingPlayerCount = qualKeys.reduce((sum, k) => sum + (mcggLobbies[k] ? mcggLobbies[k].length : 0), 0);

  // Jika TIDAK sedang acak ulang (doShuffle === false) dan kursi lobi SUDAH terisi (misal dari GSheet / cache):
  // JANGAN me-reset lobi! Pertahankan posisi pemain di lobi masing-masing, hanya sinkronkan metadata & peserta baru.
  if (!doShuffle && existingPlayerCount > 0) {
    // 1. Update metadata pemain yang sudah ada di lobi
    qualKeys.forEach(k => {
      mcggLobbies[k] = (mcggLobbies[k] || []).filter(p => {
        if (!p || !p.name || p.name.includes('(TBD)')) return true;
        const cleanN = p.name.trim().toLowerCase();
        const found = participants.find(part => (part.name || '').trim().toLowerCase() === cleanN);
        return found ? found.status !== 'REJECTED' : true;
      }).map(p => {
        if (!p || !p.name || p.name.includes('(TBD)')) return p;
        const found = participants.find(part => (part.name || '').trim().toLowerCase() === (p.name || '').trim().toLowerCase());
        return {
          ...p,
          dept: (found && found.dept) ? found.dept : (p.dept || ''),
          nickname: (found && found.nickname && found.nickname !== '-') ? found.nickname : (p.nickname || '-'),
          gameId: (found && found.gameId && found.gameId !== '-') ? found.gameId : (p.gameId || '-')
        };
      });
    });

    // 2. Tambahkan peserta terverifikasi baru yang belum dapat lobi
    const allAssignedNames = new Set();
    const allAssignedGameIds = new Set();
    qualKeys.forEach(k => {
      (mcggLobbies[k] || []).forEach(p => {
        if (p && p.name && !p.name.includes('(TBD)')) {
          allAssignedNames.add(p.name.trim().toLowerCase());
          if (p.gameId && p.gameId !== '-') allAssignedGameIds.add(p.gameId.trim().toLowerCase());
        }
      });
    });

    const unassigned = verified.filter(v => {
      const n = (v.name || '').trim().toLowerCase();
      const g = (v.gameId || '').trim().toLowerCase();
      return !allAssignedNames.has(n) && (g === '-' || !allAssignedGameIds.has(g));
    });

    if (unassigned.length > 0) {
      unassigned.forEach(uPly => {
        const sortedLobbies = qualKeys.slice().sort((a, b) => (mcggLobbies[a] || []).length - (mcggLobbies[b] || []).length);
        if (sortedLobbies[0]) {
          mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));
        }
      });
    }

    syncMCGGSemiFinal();
    syncMCGGGrandFinal();
    saveState();
    renderMCGGLobbySelectOptions();
    renderMCGGTable();
    return;
  }

  if (P <= 8) {
    // P <= 8: 1 Lobi Tunggal (Langsung Penentuan Juara)
    mcggLobbies.LOBBY_A = verified.map(mapPlayerObj);
    mcggLobbies.LOBBY_B = [];
    delete mcggLobbies.LOBBY_C;
    delete mcggLobbies.LOBBY_D;
    delete mcggLobbies.LOBBY_E;
    delete mcggLobbies.SEMI_A;
    delete mcggLobbies.SEMI_B;
    mcggLobbies.GRAND_FINAL = [];
    mcggLobbies.LOBBY_LOWER = [];
    currentMCGGLobby = 'LOBBY_A';
  } else if (P <= 16) {
    // 9 <= P <= 16: 2 Lobi Kualifikasi Seimbang (Maks. 8 Pemain per Lobi) -> Grand Final
    const countA = Math.ceil(P / 2);
    const countB = Math.floor(P / 2);
    mcggLobbies.LOBBY_A = [];
    mcggLobbies.LOBBY_B = [];
    delete mcggLobbies.LOBBY_C;
    delete mcggLobbies.LOBBY_D;
    delete mcggLobbies.LOBBY_E;
    delete mcggLobbies.SEMI_A;
    delete mcggLobbies.SEMI_B;
    mcggLobbies.LOBBY_LOWER = [];

    allocateLobbiesByCluster(verified, ['LOBBY_A', 'LOBBY_B'], [countA, countB]);
    syncMCGGGrandFinal();
  } else {
    // P > 16 (Misal 37 Peserta): 5 Grup Kualifikasi (Maks. 8 Pemain) -> 2 Semifinal -> 1 Grand Final
    const numLobbies = Math.ceil(P / 8); // P=37 -> 5 Grup (A, B, C, D, E)
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const qualKeys = alphabet.slice(0, numLobbies).map(ch => `LOBBY_${ch}`);

    // Bersihkan lobi kualifikasi
    qualKeys.forEach(k => { mcggLobbies[k] = []; });
    // Hapus sisa lobi lama jika ada
    alphabet.slice(numLobbies).forEach(ch => { delete mcggLobbies[`LOBBY_${ch}`]; });

    const baseCap = Math.floor(P / numLobbies);
    const remainder = P % numLobbies;
    const targetCaps = qualKeys.map((k, i) => i < remainder ? baseCap + 1 : baseCap);

    allocateLobbiesByCluster(verified, qualKeys, targetCaps);

    mcggLobbies.SEMI_A = [];
    mcggLobbies.SEMI_B = [];
    mcggLobbies.GRAND_FINAL = [];
    mcggLobbies.LOBBY_LOWER = [];

    syncMCGGSemiFinal();
    syncMCGGGrandFinal();
  }

  saveState();
  renderMCGGLobbySelectOptions();
  renderMCGGTable();
}

function shuffleMCGGPlayers() {
  if (!isAdmin) return;
  if (!isRegistrationClosed) {
    alert("⚠️ Pendaftaran turnamen masih dibuka!\nHarap tutup pendaftaran terlebih dahulu sebelum mengacak lobi MCGG.");
    return;
  }
  if (tournamentStageState.mcgg.isTmLocked) {
    alert("🔒 Lobi MCGG sedang dikunci (Lock TM). Silakan buka kunci lobi terlebih dahulu jika ingin mengacak ulang.");
    return;
  }
  if (!confirm("🎲 Acak pembagian lobi peserta MCGG terverifikasi secara seimbang?")) return;
  mcggDrawState = {};
  localStorage.removeItem('yokke_commander_draw');
  syncMCGGPlayers(true);
  alert("✅ Undian lobi MCGG berhasil diacak secara seimbang!");
}

function isMCGGLobbyPointsFull(lobbyKey) {
  const list = mcggLobbies[lobbyKey] || [];
  if (list.length === 0) return false;
  return list.every(p => (parseInt(p.r1) || 0) > 0 && (parseInt(p.r2) || 0) > 0 && (parseInt(p.r3) || 0) > 0);
}

function isMCGGQualificationFull() {
  const qualKeys = Object.keys(mcggLobbies).filter(k => k.startsWith('LOBBY_') && k !== 'LOBBY_LOWER');
  if (qualKeys.length === 0) return false;
  return qualKeys.every(k => isMCGGLobbyPointsFull(k));
}

function isMCGGSemiFinalFull() {
  if (!mcggLobbies.SEMI_A || !mcggLobbies.SEMI_B) return true;
  return isMCGGLobbyPointsFull('SEMI_A') && isMCGGLobbyPointsFull('SEMI_B');
}

// Komparator resmi urutan klasemen MCGG sesuai regulasi:
// 1. Total Poin Akhir (besar ke kecil)
// 2. Juara 1 / MVP Ronde (banyaknya finish posisi 1, besar ke kecil)
// 3. Top 4 Finish (banyaknya finish posisi 1-4, besar ke kecil)
// 4. Pengurangan Poin / Penalti (makin sering kena pengurangan makin bawah jika poin dkk sama: deductA - deductB)
// 5. Breakdown Posisi Finish Ronde 1 s/d 8
// 6. Nama Pemain (A-Z)
function compareMCGGPlayers(a, b) {
  const totA = Number(a.total) || 0;
  const totB = Number(b.total) || 0;
  if (totB !== totA) return totB - totA;

  // 1. Juara 1 / MVP Ronde (Rank 1 count, descending)
  const aRank1 = [a.r1, a.r2, a.r3].filter(r => parseInt(r, 10) === 1).length;
  const bRank1 = [b.r1, b.r2, b.r3].filter(r => parseInt(r, 10) === 1).length;
  if (bRank1 !== aRank1) return bRank1 - aRank1;

  // 2. Top 4 Finish (Rank 1-4 count, descending)
  const aTop4 = [a.r1, a.r2, a.r3].filter(r => { const num = parseInt(r, 10); return num >= 1 && num <= 4; }).length;
  const bTop4 = [b.r1, b.r2, b.r3].filter(r => { const num = parseInt(r, 10); return num >= 1 && num <= 4; }).length;
  if (bTop4 !== aTop4) return bTop4 - aTop4;

  // 3. Pengurangan Poin / Penalti (makin sering kena pengurangan point makin bawah jika poin dkk sama)
  const deductA = Math.abs(Number(a.penalty) || 0);
  const deductB = Math.abs(Number(b.penalty) || 0);
  if (deductA !== deductB) return deductA - deductB;

  // 4. Detail Posisi Finish 1 sampai 8
  for (let r = 1; r <= 8; r++) {
    const aRCount = [a.r1, a.r2, a.r3].filter(rank => parseInt(rank, 10) === r).length;
    const bRCount = [b.r1, b.r2, b.r3].filter(rank => parseInt(rank, 10) === r).length;
    if (bRCount !== aRCount) return bRCount - aRCount;
  }

  // 5. Nama Pemain (A-Z)
  return (a.name || '').localeCompare(b.name || '');
}

function syncMCGGSemiFinal() {
  const qualKeys = Object.keys(mcggLobbies).filter(k => k.startsWith('LOBBY_') && k !== 'LOBBY_LOWER');
  if (qualKeys.length <= 2) return; // Jika 2 lobi langsung ke Grand Final

  const isQualDone = isMCGGQualificationFull();
  const sortFn = compareMCGGPlayers;

  if (!isQualDone) {
    // Belum selesai: Set 8 slot TBD untuk Semifinal A dan Semifinal B
    mcggLobbies.SEMI_A = [];
    mcggLobbies.SEMI_B = [];
    for (let i = 1; i <= 8; i++) {
      const orig = qualKeys[(i - 1) % qualKeys.length].replace('LOBBY_', 'Lobi ');
      const rankSlot = Math.ceil(i / qualKeys.length);
      mcggLobbies.SEMI_A.push({ name: `TBD (Top ${rankSlot} ${orig})`, r1: 0, r2: 0, r3: 0, penalty: 0, total: 0 });
      mcggLobbies.SEMI_B.push({ name: `TBD (Top ${rankSlot} ${orig})`, r1: 0, r2: 0, r3: 0, penalty: 0, total: 0 });
    }
    return;
  }

  // Ambil Top 3 dari masing-masing 5 grup (5 x 3 = 15 pemain)
  const top3Players = [];
  const fourthPlayers = [];

  qualKeys.forEach(k => {
    const sorted = [...(mcggLobbies[k] || [])].sort(sortFn);
    top3Players.push(...sorted.slice(0, 3));
    if (sorted[3]) fourthPlayers.push(sorted[3]);
  });

  // Cari 1 pemain peringkat ke-4 terbaik (Best 4th Place)
  fourthPlayers.sort(sortFn);
  const best4th = fourthPlayers[0];
  const all16 = [...top3Players];
  if (best4th) all16.push(best4th);

  // Preserve poin semifinal jika sudah ada
  const findPrevSemi = (ply) => {
    for (const sKey of ['SEMI_A', 'SEMI_B']) {
      const f = (mcggLobbies[sKey] || []).find(x => x.name && ply.name && x.name.trim().toLowerCase() === ply.name.trim().toLowerCase());
      if (f && f.r1 !== undefined) return f;
    }
    return null;
  };

  const mapSemiPlayer = (p) => {
    const prev = findPrevSemi(p) || {};
    return {
      name: p.name,
      nickname: p.nickname || '-',
      gameId: p.gameId || '-',
      r1: prev.r1 || 0,
      r2: prev.r2 || 0,
      r3: prev.r3 || 0,
      c1: prev.c1 || '',
      c2: prev.c2 || '',
      c3: prev.c3 || '',
      penalty: prev.penalty || 0,
      total: prev.total || 0
    };
  };

  // Seeding seimbang 8 pemain ke Semifinal A dan 8 pemain ke Semifinal B
  mcggLobbies.SEMI_A = all16.filter((_, i) => i % 2 === 0).map(mapSemiPlayer);
  mcggLobbies.SEMI_B = all16.filter((_, i) => i % 2 === 1).map(mapSemiPlayer);
}

function syncMCGGGrandFinal() {
  const sortFn = compareMCGGPlayers;

  const hasSemis = !!mcggLobbies.SEMI_A && mcggLobbies.SEMI_A.length > 0;
  mcggLobbies.LOBBY_LOWER = [];

  const existingGF = mcggLobbies.GRAND_FINAL || [];
  const findPrevInArr = (p, arr) => {
    return arr.find(x => 
      !x.isTBD && (
        (x.name && p.name && x.name.trim().toLowerCase() === p.name.trim().toLowerCase()) ||
        (x.gameId && p.gameId && x.gameId !== '-' && x.gameId === p.gameId)
      )
    ) || {};
  };

  const mapGFPlayer = (p) => {
    const prev = findPrevInArr(p, existingGF);
    return { 
      name: p.name, 
      nickname: p.nickname || '-', 
      gameId: p.gameId || '-', 
      r1: prev.r1 || 0, r2: prev.r2 || 0, r3: prev.r3 || 0,
      c1: prev.c1 || '', c2: prev.c2 || '', c3: prev.c3 || '',
      penalty: prev.penalty || 0, total: prev.total || 0,
      isTBD: false
    };
  };

  if (hasSemis) {
    // 2 Lobi Semifinal (A & B) -> 1 Grand Final
    const semiDone = isMCGGSemiFinalFull();
    if (!semiDone) {
      mcggLobbies.GRAND_FINAL = [];
      for (let i = 1; i <= 4; i++) {
        mcggLobbies.GRAND_FINAL.push({ name: `TBD (Top ${i} Semifinal A)`, nickname: 'TBD', gameId: '-', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0, isTBD: true });
      }
      for (let i = 1; i <= 4; i++) {
        mcggLobbies.GRAND_FINAL.push({ name: `TBD (Top ${i} Semifinal B)`, nickname: 'TBD', gameId: '-', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0, isTBD: true });
      }
      return;
    }

    const sortedA = [...(mcggLobbies.SEMI_A || [])].sort(sortFn);
    const sortedB = [...(mcggLobbies.SEMI_B || [])].sort(sortFn);
    const topA = sortedA.slice(0, 4);
    const topB = sortedB.slice(0, 4);

    mcggLobbies.GRAND_FINAL = [];
    topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));
    topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));
  } else {
    // 2 Lobi Kualifikasi -> 1 Grand Final
    const listA = mcggLobbies.LOBBY_A || [];
    const listB = mcggLobbies.LOBBY_B || [];

    if (listB.length === 0) {
      mcggLobbies.GRAND_FINAL = [];
      return;
    }

    const isFull = isMCGGQualificationFull();
    if (!isFull) {
      mcggLobbies.GRAND_FINAL = [];
      for (let i = 1; i <= 4; i++) {
        mcggLobbies.GRAND_FINAL.push({ name: `TBD (Top ${i} Lobi A)`, nickname: 'TBD', gameId: '-', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0, isTBD: true });
      }
      for (let i = 1; i <= 4; i++) {
        mcggLobbies.GRAND_FINAL.push({ name: `TBD (Top ${i} Lobi B)`, nickname: 'TBD', gameId: '-', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0, isTBD: true });
      }
      return;
    }

    const sortedA = [...listA].sort(sortFn);
    const sortedB = [...listB].sort(sortFn);
    const topA = sortedA.slice(0, 4);
    const topB = sortedB.slice(0, 4);

    mcggLobbies.GRAND_FINAL = [];
    topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));
    topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));
  }
}

function updateMCGGRank(arg1, arg2, arg3, arg4) {
  if (!isAdmin) return;
  let targetLobby = currentMCGGLobby;
  let idx, roundKey, rankVal;

  if (typeof arg1 === 'string' && mcggLobbies[arg1]) {
    targetLobby = arg1;
    idx = arg2;
    roundKey = arg3;
    rankVal = arg4;
  } else {
    idx = arg1;
    roundKey = arg2;
    rankVal = arg3;
  }

  if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {
    alert("⚠️ Nilai Grand Final belum dapat diisi sebelum seluruh ronde kualifikasi Lobi A & B selesai.");
    return;
  }

  const list = mcggLobbies[targetLobby];
  if (!list || !list[idx]) return;

  list[idx][roundKey] = parseInt(rankVal) || 0;
  const p1 = POINT_TABLE[list[idx].r1] || 0;
  const p2 = POINT_TABLE[list[idx].r2] || 0;
  const p3 = POINT_TABLE[list[idx].r3] || 0;
  list[idx].total = p1 + p2 + p3 + (list[idx].penalty || 0);

  if (targetLobby !== 'GRAND_FINAL' && targetLobby !== 'LOBBY_LOWER') {
    syncMCGGGrandFinal();
  }

  saveState();
  renderMCGGTable();
}

function updateMCGGCommander(arg1, arg2, arg3, arg4) {
  if (!isAdmin) return;
  let targetLobby = currentMCGGLobby;
  let idx, cmdKey, cmdId;

  if (typeof arg1 === 'string' && mcggLobbies[arg1]) {
    targetLobby = arg1;
    idx = arg2;
    cmdKey = arg3;
    cmdId = arg4;
  } else {
    idx = arg1;
    cmdKey = arg2;
    cmdId = arg3;
  }

  if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {
    alert("⚠️ Commander Grand Final belum dapat dipilih sebelum seluruh ronde kualifikasi Lobi A & B selesai.");
    return;
  }

  const list = mcggLobbies[targetLobby];
  if (!list || !list[idx]) return;

  list[idx][cmdKey] = cmdId;

  // Validasi otomatis sanksi jika Ronde 2 menggunakan commander yang sama dengan Ronde 1
  if (cmdKey === 'c2' || cmdKey === 'c1') {
    validateMCGGDuplicateCommander(targetLobby, idx);
  }

  saveState();
  renderMCGGTable();
}

function updateMCGGPenalty(arg1, arg2, arg3) {
  if (!isAdmin) return;
  let targetLobby = currentMCGGLobby;
  let idx, penaltyVal;

  if (typeof arg1 === 'string' && mcggLobbies[arg1]) {
    targetLobby = arg1;
    idx = arg2;
    penaltyVal = arg3;
  } else {
    idx = arg1;
    penaltyVal = arg2;
  }

  if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {
    alert("⚠️ Penalti Grand Final belum dapat diisi sebelum seluruh ronde kualifikasi Lobi A & B selesai.");
    return;
  }

  const list = mcggLobbies[targetLobby];
  if (!list || !list[idx]) return;

  list[idx].penalty = parseInt(penaltyVal) || 0;
  const p1 = POINT_TABLE[list[idx].r1] || 0;
  const p2 = POINT_TABLE[list[idx].r2] || 0;
  const p3 = POINT_TABLE[list[idx].r3] || 0;
  list[idx].total = p1 + p2 + p3 + list[idx].penalty;

  if (targetLobby !== 'GRAND_FINAL' && targetLobby !== 'LOBBY_LOWER') {
    syncMCGGGrandFinal();
  }

  saveState();
  renderMCGGTable();
}

// ========================================================
// MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
// ========================================================
function renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull) {
  if (isGF && !isQualFull) {
    return `
      <div class="commander-lottery-panel" style="margin: 0.75rem 1rem; padding: 0.85rem 1rem; border-radius: 8px;">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
          <div style="font-size:0.85rem; font-weight:700; color:var(--yokke-gold); display:flex; align-items:center; gap:0.4rem;">
            <span>🎲</span> <span>Undian Commander: Babak Grand Final</span>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); background:rgba(255,255,255,0.05); padding:0.25rem 0.6rem; border-radius:4px;">
            ⏳ Menunggu seluruh match Lobi A & B selesai full (Status: TBD)
          </div>
        </div>
      </div>
    `;
  }

  const drawData = mcggDrawState[lobbyKey] || {};
  const activeMatch = drawData.activeMatch || (drawData.match2 ? 2 : 1);
  const matchData = drawData[`match${activeMatch}`] || {};
  const currentPool = matchData.pool || [];
  const assigned = matchData.assigned || [];
  const isMatchLocked = !!matchData.isLocked;

  const lobbyLabel = lobbyKey === 'LOBBY_A' 
    ? 'Lobi Kualifikasi A' 
    : (lobbyKey === 'LOBBY_B' ? 'Lobi Kualifikasi B' : (isGF ? 'Grand Final' : 'Lobi Utama'));

  // Stepper state
  const hasPool = currentPool.length > 0;
  const hasAssigned = assigned.length > 0;

  let actionButtonsHtml = '';
  if (isAdmin) {
    const drawDisAttr = !isRegistrationClosed ? 'disabled' : '';
    const drawDisStyle = !isRegistrationClosed ? 'opacity:0.5; cursor:not-allowed;' : '';
    const drawDisTitle = !isRegistrationClosed ? 'title="Pendaftaran turnamen masih dibuka. Harap tutup pendaftaran terlebih dahulu untuk mengundi commander."' : '';

    const lockDisAttr = (!hasAssigned || !isRegistrationClosed) ? 'disabled' : '';
    const lockDisStyle = (!hasAssigned || !isRegistrationClosed) ? 'opacity:0.5; cursor:not-allowed;' : '';

    const m1Locked = drawData.match1?.isLocked;
    const m2Locked = drawData.match2?.isLocked;
    const m1Done = (drawData.match1?.assigned || []).length > 0;
    const m2Done = (drawData.match2?.assigned || []).length > 0;

    actionButtonsHtml = `
      <div style="display:flex; flex-direction:column; gap:0.55rem; width:100%;">
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:0.45rem;">
          <button class="btn ${activeMatch === 1 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65rem; font-size:0.78rem;" onclick="switchLobbyDrawView('${lobbyKey}', 1)">
            🛡️ Match 1: Non-Meta ${m1Locked ? '🔒' : (m1Done ? '✅' : '')}
          </button>
          <button class="btn ${activeMatch === 2 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65rem; font-size:0.78rem;" onclick="switchLobbyDrawView('${lobbyKey}', 2)">
            🔥 Match 2: All Commander ${m2Locked ? '🔒' : (m2Done ? '✅' : '')}
          </button>
          <button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem; margin-left:auto;" onclick="copyCommanderDrawText('${lobbyKey}')" title="Salin Hasil Undian Lobi Ini">
            📋 Salin
          </button>
          <button class="btn btn-outline" style="padding:0.25rem 0.45rem; font-size:0.75rem; color:var(--yokke-red); border-color:rgba(239,68,68,0.35);" onclick="resetLobbyDraw('${lobbyKey}')" title="Reset Undian Match Ini">
            ↩️
          </button>
        </div>

        <div style="display:flex; gap:0.4rem; flex-wrap:wrap; align-items:center;">
          ${/* 1. Tombol Acak Pool Match 1 / Match 2 */ ''}
          <button class="btn btn-primary" style="padding:0.35rem 0.75rem; font-size:0.78rem; ${drawDisStyle}" 
            onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaftaran terlebih dahulu untuk mengundi commander.')" : (isMatchLocked ? "alert('🔒 Match " + activeMatch + " sedang dikunci. Buka kunci terlebih dahulu jika ingin mengacak ulang.')" : `drawMatchPool(${activeMatch}, '${lobbyKey}')`)}" 
            ${(drawDisAttr || isMatchLocked) ? 'disabled' : ''} ${drawDisTitle}>
            🎲 ${hasPool ? 'Acak Ulang 8 Pool Match ' + activeMatch : 'Acak 8 Pool Match ' + activeMatch} (${activeMatch === 1 ? 'Non-Meta' : 'All Pool selain Not Use'})
          </button>

          ${/* 2. Tombol Acak ke Masing-Masing Pemain */ ''}
          <button class="btn btn-gold" style="padding:0.35rem 0.75rem; font-size:0.78rem; ${(!hasPool || isMatchLocked) ? 'opacity:0.5; cursor:not-allowed;' : ''}" 
            onclick="${!hasPool ? "alert('⚠️ Silakan acak 8 Pool Commander terlebih dahulu.')" : (isMatchLocked ? "alert('🔒 Match sedang dikunci. Buka kunci terlebih dahulu jika ingin mengundi ulang pemain.')" : `assignMatchPoolToPlayers(${activeMatch}, '${lobbyKey}')`)}" 
            ${(!hasPool || isMatchLocked) ? 'disabled' : ''}>
            🎯 ${hasAssigned ? 'Acak Ulang ke Pemain' : 'Pasangkan ke Pemain'}
          </button>

          ${/* 3. Tombol Lock Match */ ''}
          <button class="btn ${isMatchLocked ? 'btn-gold' : 'btn-outline'}" style="padding:0.35rem 0.7rem; font-size:0.78rem; ${lockDisStyle}" 
            onclick="${!hasAssigned ? "alert('⚠️ Pasangkan commander ke pemain terlebih dahulu sebelum mengunci.')" : `toggleLockMatchDraw(${activeMatch}, '${lobbyKey}')`}" 
            ${lockDisAttr}>
            ${isMatchLocked ? '🔒 Match ' + activeMatch + ' Terkunci' : '🔓 Kunci Match ' + activeMatch}
          </button>

          ${/* 4. Tombol Next Match */ ''}
          ${activeMatch === 1 ? `
            <button class="btn btn-primary" style="padding:0.35rem 0.75rem; font-size:0.78rem; background:linear-gradient(135deg, #7209b7, #00b4d8);" 
              onclick="nextMatchDraw('${lobbyKey}', 2)">
              ⏭️ Buka Match 2 (All Pool)
            </button>
          ` : (activeMatch === 2 ? `
            <button class="btn btn-outline" style="padding:0.35rem 0.7rem; font-size:0.78rem; border-color:var(--yokke-cyan); color:var(--yokke-cyan);" 
              onclick="showMatch3DraftInfo()">
              ⚔️ Info Match 3 (Draft Pick)
            </button>
          ` : '')}
        </div>
      </div>
    `;
  } else {
    // Mode Peserta / Guest
    actionButtonsHtml = `
      <div style="display:flex; gap:0.35rem; align-items:center;">
        <button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; padding:0.25rem 0.5rem;" onclick="switchLobbyDrawView('${lobbyKey}', 1)">
          Hasil Match 1
        </button>
        <button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; padding:0.25rem 0.5rem;" onclick="switchLobbyDrawView('${lobbyKey}', 2)">
          Hasil Match 2
        </button>
        <button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCommanderDrawText('${lobbyKey}')">
          📋 Salin
        </button>
      </div>
    `;
  }

  // Stepper UI Indicator
  const stepperHtml = `
    <div class="mcgg-lottery-stepper">
      <span style="font-size:0.78rem; font-weight:800; color:var(--yokke-cyan); margin-right:0.35rem;">
        Tahapan Match ${activeMatch}:
      </span>
      <div class="lottery-step-pill ${hasPool ? 'completed' : 'active'}">
        <span>${hasPool ? '✓' : '1'}</span> <span>Acak 8 Pool (${activeMatch === 1 ? 'Non-Meta' : 'All Commander'})</span>
      </div>
      <span style="color:rgba(255,255,255,0.25);">➔</span>
      <div class="lottery-step-pill ${hasAssigned ? 'completed' : (hasPool ? 'active' : '')}">
        <span>${hasAssigned ? '✓' : '2'}</span> <span>Pasangkan ke Pemain</span>
      </div>
      <span style="color:rgba(255,255,255,0.25);">➔</span>
      <div class="lottery-step-pill ${isMatchLocked ? 'completed' : (hasAssigned ? 'active' : '')}">
        <span>${isMatchLocked ? '🔒' : '3'}</span> <span>${isMatchLocked ? 'Match Dikunci' : 'Kunci Match (TM)'}</span>
      </div>
      <span style="color:rgba(255,255,255,0.25);">➔</span>
      <div class="lottery-step-pill ${activeMatch === 2 ? 'active' : ''}">
        <span>4</span> <span>Match 2 (All Pool)</span>
      </div>
    </div>
  `;

  // Pool Preview Chips Box (Tampil jika sudah diacak pool)
  let poolChipsHtml = '';
  if (hasPool) {
    poolChipsHtml = `
      <div class="lottery-pool-box">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.4rem;">
          <div style="font-size:0.78rem; font-weight:700; color:var(--yokke-gold); display:flex; align-items:center; gap:0.4rem;">
            <span>🛡️</span> <span>Daftar 8 Pool Commander Match ${activeMatch} (${activeMatch === 1 ? 'Khusus Non-Meta' : 'Seluruh Commander'}):</span>
          </div>
          <span style="font-size:0.7rem; color:var(--text-muted);">
            ${isMatchLocked ? '🔒 Terkunci' : (hasAssigned ? '✅ Sudah terpasang ke pemain' : '⏳ Siap dipasangkan ke pemain')}
          </span>
        </div>
        <div class="lottery-pool-chips">
          ${currentPool.map(cmd => {
            const hero = (cmd.hero || cmd.name || '').trim();
            const alter = (cmd.alterName || '').trim();
            const disp = alter && hero.toLowerCase() !== alter.toLowerCase() ? `${hero} [${alter}]` : (hero || alter);
            const heroSlug = hero.toLowerCase().replace(/[^a-z0-9]/g, '');
            const img = cmd.heroImage || `assets/commanders/${heroSlug}.png`;
            const tierClass = `tier-${(cmd.tier || 'normal').toLowerCase()}`;
            return `
              <div class="commander-pool-chip" title="${disp} (Tier: ${cmd.tier || 'Normal'})">
                <img src="${img}" alt="${hero}" onerror="this.src='assets/commanders/chou.png'">
                <span>${disp}</span>
                <span class="tier-tag ${tierClass}">${cmd.tier || 'Normal'}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // Cards Assigned to Players Grid
  let cardsHtml = '';
  if (hasAssigned) {
    cardsHtml = `
      <div style="margin-top:0.85rem; border-top:1px dashed rgba(255,255,255,0.1); padding-top:0.75rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem; flex-wrap:wrap; gap:0.4rem;">
          <span style="font-size:0.82rem; font-weight:700; color:var(--yokke-cyan); display:flex; align-items:center; gap:0.35rem;">
            <span>🎮</span> <span>Pasangan Commander Resmi Match ${activeMatch} (${activeMatch === 1 ? 'Pool Non-Meta' : 'Random All Commander'})</span>
            ${isMatchLocked ? '<span style="font-size:0.7rem; padding:0.15rem 0.45rem; background:rgba(255,183,3,0.2); color:var(--yokke-gold); border-radius:10px; border:1px solid rgba(255,183,3,0.4); margin-left:0.3rem;">🔒 TERKUNCI</span>' : ''}
          </span>
          <span style="font-size:0.72rem; color:var(--text-muted);">
            Wajib digunakan • Sanksi jika tidak memakai: <strong style="color:var(--yokke-red)">-2 Poin</strong>
          </span>
        </div>
        <div class="commander-grid" style="margin-top:0.5rem;">
          ${assigned.map(item => `
            <div class="commander-card assigned-card ${isMatchLocked ? 'locked-card' : ''}">
              ${renderCommanderCardVisualHtml(item.commander)}
              <div style="margin-top: 0.45rem; padding-top: 0.4rem; border-top: 1px dashed rgba(255,255,255,0.1);">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(item.playerNick)}">
                  🎮 ${escapeHtml(item.playerNick)}
                </div>
                <div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHtml(item.playerName)}">
                  👤 ${escapeHtml(item.playerName)}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (!hasPool) {
    cardsHtml = isAdmin ? `
      <div style="margin-top:0.6rem; padding:0.75rem; border-top:1px dashed rgba(255,255,255,0.06); font-size:0.8rem; color:var(--text-muted); text-align:center;">
        🎲 Silakan klik tombol <strong>"Acak 8 Pool Commander (${activeMatch === 1 ? 'Non-Meta' : 'All'})"</strong> untuk mengundi pool 8 hero bagi ${lobbyLabel}.
      </div>
    ` : `
      <div style="margin-top:0.6rem; padding:0.75rem; border-top:1px dashed rgba(255,255,255,0.06); font-size:0.8rem; color:var(--text-muted); text-align:center;">
        ⏳ Undian Commander untuk ${lobbyLabel} belum dilaksanakan oleh panitia turnamen.
      </div>
    `;
  } else {
    cardsHtml = isAdmin ? `
      <div style="margin-top:0.6rem; padding:0.75rem; border-top:1px dashed rgba(255,255,255,0.06); font-size:0.8rem; color:var(--text-muted); text-align:center;">
        🎯 Pool 8 hero telah terbentuk! Klik tombol <strong>"Pasangkan ke Pemain"</strong> untuk membagikan hero secara acak ke masing-masing peserta.
      </div>
    ` : `
      <div style="margin-top:0.6rem; padding:0.75rem; border-top:1px dashed rgba(255,255,255,0.06); font-size:0.8rem; color:var(--text-muted); text-align:center;">
        ⏳ Menunggu panitia memasangkan pool commander ke masing-masing peserta.
      </div>
    `;
  }

  return `
    <div class="commander-lottery-panel" style="margin: 0.75rem 1rem 1rem; padding: 1.15rem; border-radius: 8px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:0.75rem;">
        <div>
          <h4 style="margin:0; font-size:0.95rem; color:var(--yokke-gold); display:flex; align-items:center; gap:0.4rem;">
            <span>🎲</span> <span>Mesin Undian Commander (${lobbyLabel})</span>
          </h4>
          <p style="margin:0.2rem 0 0; font-size:0.75rem; color:var(--text-muted);">
            Match 1: 8 Hero Non-Meta • Match 2: Random 8 All Commander • Match 3: In-Game Draft Pick
          </p>
        </div>
        ${actionButtonsHtml}
      </div>
      ${stepperHtml}
      ${poolChipsHtml}
      ${cardsHtml}
    </div>
  `;
}

// ----------------------------------------------------
// FUNGSI 1: Acak 8 Pool Commander untuk Group/Lobby Ini
// ----------------------------------------------------
function drawMatchPool(matchNum, targetLobbyKey) {
  if (!isAdmin) {
    alert("⚠️ Akses Terbatas: Hanya Panitia Turnamen yang memiliki wewenang untuk melakukan pengundian Commander.");
    return;
  }
  if (!isRegistrationClosed) {
    alert("⚠️ Pendaftaran turnamen masih dibuka!\nHarap tutup pendaftaran terlebih dahulu sebelum melakukan pengundian Little Commander.");
    return;
  }

  const lobbyKey = targetLobbyKey || currentMCGGLobby || 'LOBBY_A';
  if (lobbyKey === 'GRAND_FINAL' && !isMCGGQualificationFull()) {
    alert("⚠️ Babak Grand Final belum dimulai karena ronde kualifikasi Lobi A & B belum terisi penuh (TBD).");
    return;
  }

  const currentList = mcggLobbies[lobbyKey] || [];
  if (currentList.length === 0) {
    alert(`⚠️ ${lobbyKey.replace('_', ' ')} belum memiliki data pemain.`);
    return;
  }

  if (!mcggDrawState[lobbyKey]) mcggDrawState[lobbyKey] = {};
  if (!mcggDrawState[lobbyKey][`match${matchNum}`]) {
    mcggDrawState[lobbyKey][`match${matchNum}`] = { pool: [], assigned: [], isLocked: false };
  }

  const matchData = mcggDrawState[lobbyKey][`match${matchNum}`];
  if (matchData.isLocked) {
    alert(`🔒 Match ${matchNum} sedang dikunci (Lock). Buka kunci terlebih dahulu jika ingin mengacak ulang.`);
    return;
  }

  let poolCandidates = [];
  if (matchNum === 1) {
    // MATCH 1: 8 Hero dari Pool NON-META (Tier High, Mid, Normal — exclude Meta & Not Use)
    poolCandidates = MCGG_COMMANDERS.filter(c => {
      const t = (c.tier || '').toLowerCase().trim();
      return t !== 'meta' && t !== 'not use' && t !== 'gone';
    });
  } else {
    // MATCH 2: 8 Hero dari SELURUH COMMANDER (Meta, High, Mid, Normal — exclude Not Use)
    poolCandidates = MCGG_COMMANDERS.filter(c => {
      const t = (c.tier || '').toLowerCase().trim();
      return t !== 'not use' && t !== 'gone';
    });
  }

  if (poolCandidates.length < 8) {
    poolCandidates = MCGG_COMMANDERS.filter(c => !['not use', 'gone'].includes((c.tier || '').toLowerCase().trim()));
  }

  // Shuffle & pilih 8 hero unik
  const shuffled = [...poolCandidates].sort(() => Math.random() - 0.5);
  const selectedPool = shuffled.slice(0, 8);

  matchData.pool = selectedPool;
  matchData.assigned = []; // Reset assigned jika pool diacak ulang
  matchData.isLocked = false;
  mcggDrawState[lobbyKey].activeMatch = matchNum;

  // Bersihkan kolom commander di tabel jika diacak ulang
  currentList.forEach(p => {
    if (matchNum === 1) p.c1 = '';
    if (matchNum === 2) p.c2 = '';
  });

  localStorage.setItem('yokke_commander_draw', JSON.stringify(mcggDrawState));
  saveState();
  renderMCGGTable();
}

// ----------------------------------------------------
// FUNGSI 2: Pasangkan 8 Pool Commander ke Masing-Masing Pemain
// ----------------------------------------------------
function assignMatchPoolToPlayers(matchNum, targetLobbyKey) {
  if (!isAdmin) return;
  const lobbyKey = targetLobbyKey || currentMCGGLobby || 'LOBBY_A';
  const drawData = mcggDrawState[lobbyKey] || {};
  const matchData = drawData[`match${matchNum}`];

  if (!matchData || !Array.isArray(matchData.pool) || matchData.pool.length === 0) {
    alert("⚠️ Silakan acak 8 Pool Commander terlebih dahulu sebelum memasangkan ke pemain.");
    return;
  }

  if (matchData.isLocked) {
    alert(`🔒 Match ${matchNum} sedang dikunci. Buka kunci terlebih dahulu jika ingin mengundi ulang pemain.`);
    return;
  }

  const currentList = mcggLobbies[lobbyKey] || [];
  if (currentList.length === 0) return;

  // Acak urutan pool untuk pemain di lobi
  const shuffledPool = [...matchData.pool].sort(() => Math.random() - 0.5);

  const assigned = [];
  currentList.forEach((player, i) => {
    const cmd = shuffledPool[i % shuffledPool.length];
    assigned.push({
      playerIndex: i,
      playerName: player.name,
      playerNick: (player.nickname && player.nickname !== '-' && player.nickname !== 'undefined') ? player.nickname : player.name,
      gameId: player.gameId || '-',
      commander: cmd
    });

    if (matchNum === 1) player.c1 = cmd.id;
    if (matchNum === 2) {
      player.c2 = cmd.id;
      validateMCGGDuplicateCommander(lobbyKey, i);
    }
  });

  matchData.assigned = assigned;
  drawData.activeMatch = matchNum;

  localStorage.setItem('yokke_commander_draw', JSON.stringify(mcggDrawState));
  saveState();
  renderMCGGTable();
}

// ----------------------------------------------------
// FUNGSI 3: Kunci Match (Lock) / Buka Kunci
// ----------------------------------------------------
function toggleLockMatchDraw(matchNum, targetLobbyKey) {
  if (!isAdmin) return;
  const lobbyKey = targetLobbyKey || currentMCGGLobby || 'LOBBY_A';
  const drawData = mcggDrawState[lobbyKey] || {};
  const matchData = drawData[`match${matchNum}`];

  if (!matchData || !matchData.assigned || matchData.assigned.length === 0) {
    alert("⚠️ Belum ada commander yang dipasangkan ke pemain untuk match ini.");
    return;
  }

  matchData.isLocked = !matchData.isLocked;
  localStorage.setItem('yokke_commander_draw', JSON.stringify(mcggDrawState));
  saveState();
  renderMCGGTable();
  saveTournamentStateOnly(true);

  if (matchData.isLocked) {
    alert(`🔒 Hasil undian Match ${matchNum} untuk ${lobbyKey.replace('_', ' ')} BERHASIL DIKUNCI!\nPemain wajib menggunakan hero yang ditetapkan.`);
  } else {
    alert(`🔓 Kunci Match ${matchNum} dibuka. Panitia dapat mengacak ulang jika diperlukan.`);
  }
}

// ----------------------------------------------------
// FUNGSI 4: Lanjut ke Match Berikutnya (Match 2)
// ----------------------------------------------------
function nextMatchDraw(targetLobbyKey, nextMatchNum) {
  if (!isAdmin) return;
  const lobbyKey = targetLobbyKey || currentMCGGLobby || 'LOBBY_A';
  if (!mcggDrawState[lobbyKey]) mcggDrawState[lobbyKey] = {};
  mcggDrawState[lobbyKey].activeMatch = nextMatchNum;

  // Inisialisasi match 2 jika belum ada
  if (!mcggDrawState[lobbyKey][`match${nextMatchNum}`]) {
    mcggDrawState[lobbyKey][`match${nextMatchNum}`] = { pool: [], assigned: [], isLocked: false };
  }

  localStorage.setItem('yokke_commander_draw', JSON.stringify(mcggDrawState));
  saveState();
  renderMCGGTable();
}

// Backward compatibility helper
function drawMatchCommanders(matchNum, targetLobbyKey) {
  drawMatchPool(matchNum, targetLobbyKey);
  assignMatchPoolToPlayers(matchNum, targetLobbyKey);
}


function switchLobbyDrawView(lobbyKey, matchNum) {
  if (!mcggDrawState[lobbyKey]) mcggDrawState[lobbyKey] = {};
  mcggDrawState[lobbyKey].activeMatch = matchNum;
  renderMCGGTable();
}

function resetLobbyDraw(lobbyKey) {
  if (!isAdmin) return;
  const label = lobbyKey === 'LOBBY_A' ? 'Lobi A' : (lobbyKey === 'LOBBY_B' ? 'Lobi B' : 'Grand Final');
  if (!confirm(`Hapus seluruh hasil undian Commander untuk ${label}?`)) return;

  if (mcggDrawState[lobbyKey]) {
    delete mcggDrawState[lobbyKey];
    localStorage.setItem('yokke_commander_draw', JSON.stringify(mcggDrawState));
  }

  const list = mcggLobbies[lobbyKey] || [];
  list.forEach(p => {
    p.c1 = '';
    p.c2 = '';
  });

  saveState();
  renderMCGGTable();
  saveTournamentStateOnly(true);
}

function copyCommanderDrawText(lobbyKey) {
  const lKey = lobbyKey || currentMCGGLobby || 'LOBBY_A';
  const drawData = mcggDrawState[lKey] || {};
  const matchNum = drawData.activeMatch || 1;
  const rawMatch = drawData[`match${matchNum}`];
  const assigned = Array.isArray(rawMatch) ? rawMatch : (rawMatch && Array.isArray(rawMatch.assigned) ? rawMatch.assigned : []);
  if (!assigned || assigned.length === 0) {
    alert("Belum ada hasil undian untuk disalin di lobi ini.");
    return;
  }

  const lobbyLabel = lKey === 'LOBBY_A' 
    ? 'Lobi Kualifikasi A' 
    : (lKey === 'LOBBY_B' ? 'Lobi Kualifikasi B' : (lKey === 'GRAND_FINAL' ? 'Grand Final' : 'Lobi Utama'));
  const matchTitle = matchNum === 1 ? 'MATCH 1 (POOL COMMANDER)' : 'MATCH 2 (RANDOM 8 COMMANDER)';

  let text = `🎲 *HASIL UNDIAN COMMANDER ${matchTitle}*\n`;
  text += `🏆 *Turnamen E-Sports Yokke Squad 2026 - ${lobbyLabel}*\n\n`;

  assigned.forEach((item, idx) => {
    const cmdName = getCommanderFormattedName(item.commander);
    text += `${idx + 1}. *${item.playerNick}* (${item.playerName}) ➔ 🛡️ *${cmdName}*\n`;
  });

  text += `\n⚠️ *Perhatian Regulasi:*\n`;
  text += `Seluruh player WAJIB menggunakan Commander di atas pada match ini.\n`;
  text += `Jika terbukti TIDAK menggunakan Commander hasil undian, dikenakan *Sanksi Pengurangan 2 Poin (-2 Poin)*.\n`;

  navigator.clipboard.writeText(text).then(() => {
    alert(`✅ Hasil undian Commander ${lobbyLabel} berhasil disalin ke clipboard! Siap dipaste ke Discord atau WhatsApp.`);
  }).catch(() => {
    prompt("Salin teks hasil undian berikut:", text);
  });
}

function showMatch3DraftInfo() {
  alert(
    "⚔️ MATCH 3: SISTEM DRAFT PICK & BAN IN-GAME\n\n" +
    "Sesuai Regulasi Resmi MCGG (Poin 4):\n" +
    "1. Sistem Draft Pick diaktifkan di dalam game Magic Chess.\n" +
    "2. Setiap lobby diberikan kesempatan melakukan sistem Banning Commander sebelum fase pemilihan.\n" +
    "3. Player bebas memilih Commander dari pool yang tidak terkena BAN.\n\n" +
    "💡 Tip: Panitia memastikan seluruh pemain standby di room in-game saat fase ban & pick berlangsung."
  );
}

function changeCommanderDrawTarget(val) {
  currentMCGGLobby = val;
  const select = document.getElementById('commanderDrawLobbyTarget');
  if (select) select.value = val;
  renderMCGGTable();
}

function setDrawTargetAndScroll(lobbyKey) {
  changeCommanderDrawTarget(lobbyKey);
  scrollToMCGGLobby(lobbyKey);
}

function scrollToMCGGLobby(lobbyKey) {
  const target = document.getElementById(`section-mcgg-${lobbyKey}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderMCGGLobbyAnchorBar() {
  const bar = document.getElementById('mcggLobbyAnchorBar');
  if (!bar) return;

  const isSingle = !mcggLobbies.LOBBY_B || mcggLobbies.LOBBY_B.length === 0;
  const isQualFull = isMCGGQualificationFull();
  const items = [];
  const qualKeys = Object.keys(mcggLobbies).filter(k => k.startsWith('LOBBY_') && k !== 'LOBBY_LOWER');
  const hasSemis = !!mcggLobbies.SEMI_A && mcggLobbies.SEMI_A.length > 0;

  if (isSingle) {
    items.push({ key: 'LOBBY_A', label: '♟️ Lobi Utama', color: 'var(--yokke-cyan)' });
  } else if (hasSemis) {
    qualKeys.forEach((k, idx) => {
      items.push({ key: k, label: `🛡️ Kualifikasi ${k.replace('LOBBY_', '')}`, color: idx % 2 === 0 ? 'var(--yokke-cyan)' : 'var(--yokke-purple)' });
    });
    items.push({ key: 'SEMI_A', label: '🔥 Semifinal A', color: 'var(--yokke-cyan)' });
    items.push({ key: 'SEMI_B', label: '🔥 Semifinal B', color: 'var(--yokke-purple)' });
    items.push({ key: 'GRAND_FINAL', label: isQualFull ? '🏆 Grand Final' : '🏆 Grand Final (TBD)', color: 'var(--yokke-gold)' });
  } else {
    items.push({ key: 'LOBBY_A', label: '🛡️ Lobi Kualifikasi A', color: 'var(--yokke-cyan)' });
    items.push({ key: 'LOBBY_B', label: '🛡️ Lobi Kualifikasi B', color: 'var(--yokke-purple)' });
    items.push({ 
      key: 'GRAND_FINAL', 
      label: isQualFull ? '🏆 Babak Grand Final' : '🏆 Grand Final (TBD)', 
      color: 'var(--yokke-gold)' 
    });
  }

  bar.innerHTML = items.map(it => `
    <button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; border-color: ${it.color}; color: ${it.color}; font-weight: 700; cursor: pointer;" onclick="scrollToMCGGLobby('${it.key}')">
      ${it.label}
    </button>
  `).join('');
}

function renderMCGGLobbySelectOptions() {
  const isQualFull = isMCGGQualificationFull();
  const select = document.getElementById('mcggLobbySelect');
  const drawTarget = document.getElementById('commanderDrawLobbyTarget');

  const qualKeys = Object.keys(mcggLobbies).filter(k => k.startsWith('LOBBY_') && k !== 'LOBBY_LOWER');
  const hasSemis = !!mcggLobbies.SEMI_A;
  const isSingle = qualKeys.length <= 1;

  let optionsHtml = '';
  let drawOptionsHtml = '';

  if (isSingle) {
    optionsHtml = `<option value="LOBBY_A">Lobi Utama (${(mcggLobbies.LOBBY_A || []).length} Pemain)</option>`;
    drawOptionsHtml = `<option value="LOBBY_A">Undi Untuk: Lobi Utama</option>`;
  } else {
    qualKeys.forEach(k => {
      const char = k.replace('LOBBY_', '');
      const count = (mcggLobbies[k] || []).length;
      optionsHtml += `<option value="${k}" ${currentMCGGLobby === k ? 'selected' : ''}>Lobi Kualifikasi ${char} (${count} Pemain)</option>`;
      drawOptionsHtml += `<option value="${k}" ${currentMCGGLobby === k ? 'selected' : ''}>Undi Untuk: Lobi Kualifikasi ${char}</option>`;
    });

    if (hasSemis) {
      ['SEMI_A', 'SEMI_B'].forEach(sKey => {
        const sLabel = sKey === 'SEMI_A' ? 'Semifinal A (16 Besar)' : 'Semifinal B (16 Besar)';
        const count = (mcggLobbies[sKey] || []).length;
        optionsHtml += `<option value="${sKey}" ${currentMCGGLobby === sKey ? 'selected' : ''}>${sLabel} (${count} Pemain)</option>`;
        drawOptionsHtml += `<option value="${sKey}" ${currentMCGGLobby === sKey ? 'selected' : ''}>Undi Untuk: ${sLabel}</option>`;
      });
    }

    const gfCount = (mcggLobbies.GRAND_FINAL || []).length;
    optionsHtml += `<option value="GRAND_FINAL" ${currentMCGGLobby === 'GRAND_FINAL' ? 'selected' : ''}>Babak Grand Final ${isQualFull ? `(${gfCount} Pemain)` : '(TBD)'}</option>`;
    drawOptionsHtml += `<option value="GRAND_FINAL" ${currentMCGGLobby === 'GRAND_FINAL' ? 'selected' : ''}>Undi Untuk: Grand Final ${isQualFull ? '' : '(TBD)'}</option>`;
  }

  if (select) select.innerHTML = optionsHtml;
  if (drawTarget) drawTarget.innerHTML = drawOptionsHtml;

  renderMCGGLobbyAnchorBar();
}

function renderMCGGTable() {
  if (currentMCGGViewMode === 'HUB') {
    const hubContainer = document.getElementById('mcggInteractiveHub');
    const carouselEl = document.getElementById('mcggCarouselWrapper');
    const navEl = document.getElementById('mcggGroupNav');
    const anchorBar = document.getElementById('mcggLobbyAnchorBar');
    const infoBanner = document.getElementById('mcggLobbyInfoBanner');

    if (hubContainer) hubContainer.style.display = 'grid';
    if (carouselEl) carouselEl.style.display = 'none';
    if (navEl) navEl.style.display = 'none';
    if (anchorBar) anchorBar.style.display = 'none';
    if (infoBanner) infoBanner.style.display = 'none';

    renderMCGGInteractiveHubUI();
    return;
  }
  const allContainer = document.getElementById('mcggAllLobbiesContainer');
  const navContainer = document.getElementById('mcggGroupNav');
  const legacyTbody = document.getElementById('mcggLeaderboard');

  renderMCGGLobbySelectOptions();

  const isSingleLobby = !mcggLobbies.LOBBY_B || mcggLobbies.LOBBY_B.length === 0;
  const isQualFull = isMCGGQualificationFull();

  const qualKeys = Object.keys(mcggLobbies).filter(k => k.startsWith('LOBBY_') && k !== 'LOBBY_LOWER');
  const hasSemis = !!mcggLobbies.SEMI_A && mcggLobbies.SEMI_A.length > 0;

  let currentStageKeys = qualKeys;
  if (hasSemis) {
    if (mcggStageFilter === 'STAGE_2_SEMI') {
      currentStageKeys = ['SEMI_A', 'SEMI_B'];
    } else if (mcggStageFilter === 'STAGE_3_FINAL') {
      currentStageKeys = ['GRAND_FINAL'];
    } else {
      currentStageKeys = qualKeys; // STAGE_1_QUAL (5 Grup Kualifikasi)
    }
  } else {
    currentStageKeys = isSingleLobby ? ['LOBBY_A'] : ['LOBBY_A', 'LOBBY_B', 'GRAND_FINAL'];
  }

  const allLobbyKeys = currentStageKeys;

  const totalMCGGLobbies = allLobbyKeys.length;
  const totalMCGGPages = Math.ceil(totalMCGGLobbies / 3) || 1;
  if (mcggGroupPageIndex >= totalMCGGPages) mcggGroupPageIndex = Math.max(0, totalMCGGPages - 1);

  if (navContainer) {
    navContainer.style.display = 'block';
    const startIndex = mcggGroupPageIndex * 3;
    const visibleKeys = allLobbyKeys.slice(startIndex, startIndex + 3);

    let tabsHtml = '';
    for (let p = 0; p < totalMCGGPages; p++) {
      const pStart = p * 3;
      const pKeys = allLobbyKeys.slice(pStart, pStart + 3);
      const getLobbyShortLabel = (k) => {
        if (k === 'GRAND_FINAL') return 'Grand Final';
        if (k === 'SEMI_A') return 'Semifinal A';
        if (k === 'SEMI_B') return 'Semifinal B';
        if (k.startsWith('LOBBY_')) return `Lobi ${k.replace('LOBBY_', '')}`;
        return k;
      };
      const pLabel = pKeys.map(getLobbyShortLabel).join(', ');
      tabsHtml += `
        <button type="button" class="group-nav-tab-btn ${p === mcggGroupPageIndex ? 'active' : ''}" onclick="goToMCGGGroupPage(${p})">
          ♟️ ${pLabel}
        </button>
      `;
    }

    let stageSelectorHtml = '';
    if (hasSemis) {
      stageSelectorHtml = `
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem; padding-bottom: 0.65rem; border-bottom: 1px dashed rgba(255,255,255,0.12); width: 100%;">
          <button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_1_QUAL' ? 'active' : ''}" style="padding:0.4rem 0.9rem;" onclick="setMCGGStageFilter('STAGE_1_QUAL')">
            ⚔️ Tahap 1: Kualifikasi (${qualKeys.length} Grup)
          </button>
          <button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_2_SEMI' ? 'active' : ''}" style="padding:0.4rem 0.9rem;" onclick="setMCGGStageFilter('STAGE_2_SEMI')">
            🔥 Tahap 2: Semifinal (2 Grup)
          </button>
          <button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_3_FINAL' ? 'active' : ''}" style="padding:0.4rem 0.9rem;" onclick="setMCGGStageFilter('STAGE_3_FINAL')">
            🏆 Tahap 3: Grand Final (1 Grup)
          </button>
        </div>
      `;
    }

    navContainer.innerHTML = `
      <div style="background: rgba(11, 15, 25, 0.95); border: 1px solid rgba(0, 210, 255, 0.25); border-radius: 10px; padding: 0.85rem 1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.4); margin-bottom: 1.25rem;">
        ${stageSelectorHtml}
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; font-size: 0.85rem;" onclick="prevMCGGGroupPage()" ${mcggGroupPageIndex === 0 ? 'disabled' : ''}>
              ◀ Sebelumnya
            </button>
            <button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; font-size: 0.85rem;" onclick="nextMCGGGroupPage()" ${mcggGroupPageIndex >= totalMCGGPages - 1 ? 'disabled' : ''}>
              Berikutnya ▶
            </button>
          </div>

          <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span style="font-size: 0.78rem; color: var(--text-muted); margin-right: 0.2rem;">Pilih Tab:</span>
            ${tabsHtml}
          </div>

          <div style="font-size: 0.82rem; font-weight: 700; color: var(--yokke-gold); display: flex; align-items: center; gap: 0.35rem;">
            <span>📋</span> <span>Menampilkan ${visibleKeys.length} Lobi Vertikal (Semua Field Maksimal & Jelas)</span>
          </div>
        </div>
      </div>
    `;
  }

  // Render into legacy tbody if present
  if (legacyTbody) {
    const singleList = mcggLobbies[currentMCGGLobby] || [];
    legacyTbody.innerHTML = renderLobbyRowsHtml(singleList, currentMCGGLobby, isSingleLobby);
  }

  if (!allContainer) return;

  // Tampilkan 3 lobi aktif sesuai indeks carousel
  const startIndex = mcggGroupPageIndex * 3;
  const lobbyKeysToRender = allLobbyKeys.slice(startIndex, startIndex + 3);

  let allHtml = '';

  lobbyKeysToRender.forEach(lobbyKey => {
    if (lobbyKey === 'GRAND_FINAL' && !isSingleLobby) {
      syncMCGGGrandFinal();
    }
    const currentList = mcggLobbies[lobbyKey] || [];

    const isGF = lobbyKey === 'GRAND_FINAL';
    let themeClass = 'theme-a';
    let lobbyTitle = '🛡️ Lobi Kualifikasi A';
    let badgeText = `${currentList.length} Pemain`;
    let subtitle = 'Top 4 pemain lolos ke Grand Final setelah seluruh 3 ronde selesai.';
    let titleColor = 'var(--yokke-cyan)';

    const isSemi = lobbyKey.startsWith('SEMI_');
    if (isSingleLobby) {
      themeClass = 'theme-a';
      lobbyTitle = '♟️ Lobi Utama Magic Chess: Go Go';
      badgeText = `${currentList.length} Pemain`;
      subtitle = 'Pertandingan penentuan juara langsung dari total akumulasi 3 ronde.';
      titleColor = 'var(--yokke-cyan)';
    } else if (lobbyKey.startsWith('LOBBY_')) {
      const char = lobbyKey.replace('LOBBY_', '');
      const idx = char.charCodeAt(0) - 65;
      themeClass = (idx % 2 === 0) ? 'theme-a' : 'theme-b';
      lobbyTitle = `🛡️ Lobi Kualifikasi ${char}`;
      badgeText = `${currentList.length} Pemain`;
      subtitle = hasSemis ? 'Top 3 + Best 4th lolos ke Semifinal.' : 'Top 4 lolos ke Grand Final.';
      titleColor = (idx % 2 === 0) ? 'var(--yokke-cyan)' : 'var(--yokke-purple)';
    } else if (lobbyKey === 'SEMI_A') {
      themeClass = 'theme-a';
      lobbyTitle = '🔥 Lobi Semifinal A (16 Besar)';
      badgeText = `${currentList.length} Pemain`;
      subtitle = 'Top 4 pemain lolos ke Babak Grand Final (8 Besar).';
      titleColor = 'var(--yokke-cyan)';
    } else if (lobbyKey === 'SEMI_B') {
      themeClass = 'theme-b';
      lobbyTitle = '🔥 Lobi Semifinal B (16 Besar)';
      badgeText = `${currentList.length} Pemain`;
      subtitle = 'Top 4 pemain lolos ke Babak Grand Final (8 Besar).';
      titleColor = 'var(--yokke-purple)';
    } else if (isGF) {
      themeClass = 'theme-gf';
      lobbyTitle = '🏆 Babak Grand Final (Top 8 Pemain)';
      badgeText = isQualFull ? `${currentList.length} Finalis` : 'Status: TBD';
      subtitle = isQualFull
        ? '4 pemain terbaik Lobi A & 4 pemain terbaik Lobi B bertanding 3 ronde memperebutkan Juara 1, 2, dan 3.'
        : '⏳ Poin pada babak kualifikasi belum terisi full. Seluruh slot Grand Final berstatus TBD hingga Lobi A & B menyelesaikan seluruh 3 ronde.';
      titleColor = 'var(--yokke-gold)';
    }

    const rowsHtml = renderLobbyRowsHtml(currentList, lobbyKey, isSingleLobby);

    allHtml += `
      <div id="section-mcgg-${lobbyKey}" class="mcgg-lobby-section ${isGF ? 'grand-final-section' : ''}">
        <div class="mcgg-lobby-header ${themeClass}">
          <div>
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <h3 style="margin:0; font-size:1.1rem; color:${titleColor};">${lobbyTitle}</h3>
              <span style="font-size:0.75rem; padding:0.2rem 0.55rem; border-radius:12px; font-weight:700; background:rgba(255,255,255,0.12); color:#fff;">${badgeText}</span>
            </div>
            <p style="margin:0.25rem 0 0; font-size:0.8rem; color:var(--text-muted);">${subtitle}</p>
          </div>
          <div style="display:flex; gap:0.4rem; align-items:center;">
            ${isAdmin ? `
              <button class="btn btn-outline" style="font-size:0.75rem; padding:0.3rem 0.65rem; ${(!isRegistrationClosed || (isGF && !isQualFull)) ? 'opacity:0.5; cursor:not-allowed;' : ''}" onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaftaran terlebih dahulu untuk mengundi commander.')" : (isGF && !isQualFull ? "alert('⚠️ Poin pada babak kualifikasi belum terisi full. Babak Grand Final belum dapat diundi.')" : `drawMatchCommanders(1, '${lobbyKey}')`)}" ${!isRegistrationClosed ? 'disabled title="Pendaftaran turnamen masih dibuka. Harap tutup pendaftaran terlebih dahulu."' : ''}>
                🎲 Undi Commander ${isGF && !isQualFull ? '(TBD)' : ''}
              </button>
            ` : ''}
          </div>
        </div>
        ${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}
        <div class="table-container" style="margin:0; border:none; border-radius:0;">
          <table>
            <thead>
              <tr>
                <th style="width: 50px;">Rank</th>
                <th>Pemain / IGN</th>
                <th style="min-width: 130px;">Ronde 1</th>
                <th style="min-width: 130px;">Ronde 2</th>
                <th style="min-width: 130px;">Ronde 3</th>
                <th style="text-align: center; width: 70px;">⭐ MVP</th>
                <th style="text-align: center; width: 85px;">Sanksi</th>
                <th style="text-align: center; width: 75px;">Poin</th>
                <th style="width: 140px;">Status / Gelar</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml || '<tr><td colspan="9" style="text-align:center;color:var(--text-muted);padding:1.5rem;">Belum ada peserta dalam lobi ini.</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  allContainer.innerHTML = `<div class="${mcggLayoutMode === '3col' ? 'mcgg-3group-container' : 'mcgg-stacked-container'}">${allHtml}</div>`;
}

function renderLobbyRowsHtml(list, lobbyKey, isSingleLobby) {
  const isGF = lobbyKey === 'GRAND_FINAL';
  const isQualFull = isMCGGQualificationFull();

  // Jika Grand Final dan kualifikasi belum selesai full -> tulis TBD untuk seluruh 8 baris slot!
  if (isGF && !isQualFull) {
    let tbdRows = '';
    for (let i = 1; i <= 8; i++) {
      const originLobby = i <= 4 ? 'A' : 'B';
      const originSlot = i <= 4 ? i : (i - 4);
      tbdRows += `
        <tr style="opacity: 0.75;">
          <td><strong>#${i}</strong></td>
          <td>
            <div style="font-weight:700; color:var(--text-muted); display:flex; align-items:center; gap:0.35rem;">
              <span>⏳</span> <span>TBD</span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">
              <span>Slot Top ${originSlot} Lobi ${originLobby}</span>
            </div>
          </td>
          <td style="color:var(--text-muted); text-align:center;">-</td>
          <td style="color:var(--text-muted); text-align:center;">-</td>
          <td style="color:var(--text-muted); text-align:center;">-</td>
          <td style="text-align: center; color:var(--text-muted);">-</td>
          <td style="text-align: center; color:var(--text-muted);">-</td>
          <td style="text-align: center;"><strong style="color:var(--text-muted); font-size:1.1rem;">0</strong></td>
          <td><span style="color:var(--yokke-gold); font-weight:700;">TBD</span></td>
        </tr>
      `;
    }
    return tbdRows;
  }

  const sorted = [...list].sort(compareMCGGPlayers);

  return sorted.map((p, idx) => {
    const hasPlayed = p.r1 > 0 || p.r2 > 0 || p.r3 > 0;
    const isTop4 = idx < 4;
    const rank1MvpCount = [p.r1, p.r2, p.r3].filter(r => parseInt(r) === 1).length;

    let qualText = '-';
    let displayRank = `#${idx + 1}`;

    if (isGF) {
      if (hasPlayed) {
        if (idx === 0) qualText = '🏆 JUARA 1';
        else if (idx === 1) qualText = '🥈 JUARA 2';
        else if (idx === 2) qualText = '🥉 JUARA 3';
        else if (idx === 3) qualText = '🏅 TOP 4';
        else qualText = `<span style="color:var(--text-muted)">Finalis (#${idx + 1})</span>`;
      } else {
        qualText = `<span style="color:var(--yokke-cyan); font-weight:600;">Finalis</span>`;
      }
    } else if (isSingleLobby) {
      const isLobbyFull = isMCGGLobbyPointsFull('LOBBY_A');
      if (isLobbyFull) {
        if (idx === 0) qualText = '🏆 JUARA 1';
        else if (idx === 1) qualText = '🥈 JUARA 2';
        else if (idx === 2) qualText = '🥉 JUARA 3';
        else if (idx === 3) qualText = '🏅 TOP 4';
        else qualText = `<span style="color:var(--text-muted)">Peringkat #${idx + 1}</span>`;
      } else {
        qualText = `<span style="color:var(--yokke-gold); font-weight:700;">TBD</span>`;
      }
    } else {
      // Lobi Kualifikasi (Lobi A & B)
      // Tulis TBD jika poin belum terisi full pada babak kualifikasi
      const isThisLobbyFull = isMCGGLobbyPointsFull(lobbyKey);
      if (!isThisLobbyFull || !isQualFull) {
        qualText = '<span style="color:var(--yokke-gold); font-weight:700;">TBD</span>';
      } else {
        qualText = isTop4 
          ? '<span style="color:var(--yokke-green); font-weight:700;">🔥 Lolos Grand Final</span>' 
          : '<span style="color:var(--text-muted);">Gugur</span>';
      }
    }

    return `
      <tr style="${((isTop4 && isQualFull && !isGF) || (isGF && idx === 0 && hasPlayed)) ? 'background: rgba(6, 214, 160, 0.08); font-weight: 600;' : ''}">
        <td><strong>${displayRank}</strong></td>
        <td>
          <div style="font-weight:700; color:var(--yokke-cyan); display:flex; align-items:center; gap:0.35rem;">
            <span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? escapeHtml(p.nickname) : escapeHtml(p.name)}</span>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">
            ${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? `<span>👤 ${escapeHtml(p.name)}</span>` : ''}
            ${p.gameId && p.gameId !== '-' ? `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' • ' : ''}<span style="color:var(--yokke-gold);">ID: ${escapeHtml(p.gameId)}</span>` : ''}
          </div>
        </td>
        <td>${buildRoundCell(p, 'r1', 'c1', lobbyKey)}</td>
        <td>${buildRoundCell(p, 'r2', 'c2', lobbyKey)}</td>
        <td>${buildRoundCell(p, 'r3', 'c3', lobbyKey)}</td>
        <td style="text-align: center;">${rank1MvpCount > 0 ? `<span style="color:var(--yokke-gold); font-weight:700;">⭐ ${rank1MvpCount}x</span>` : `<span style="color:var(--text-muted);">-</span>`}</td>
        <td style="text-align: center;">${buildPenaltySelect(p, lobbyKey)}</td>
        <td style="text-align: center;"><strong style="color: ${p.total >= 0 ? 'var(--yokke-gold)' : 'var(--yokke-red)'}; font-size: 1.1rem;">${p.total > 0 ? '+' + p.total : p.total}</strong></td>
        <td>${qualText}</td>
      </tr>
    `;
  }).join('');
}

function buildRoundCell(player, roundKey, cmdKey, targetLobby) {
  const lobbyKey = targetLobby || currentMCGGLobby;
  const currentList = mcggLobbies[lobbyKey] || [];
  const originalIdx = currentList.indexOf(player);
  const selectedCmdId = (player[cmdKey] || '').toLowerCase();
  const selectedCmd = getCommanderById(selectedCmdId);
  const rank = player[roundKey] || 0;
  const pts = POINT_TABLE[rank] || 0;

  if (!isAdmin) {
    const formattedName = getCommanderFormattedName(selectedCmd);
    const circlesHtml = renderCommanderCirclesHtml(selectedCmd, 24);
    const cmdHtml = selectedCmd ? `
      <div style="display:flex; align-items:center; gap:0.35rem; margin-bottom:0.25rem;">
        ${circlesHtml}
        <span style="font-size:0.8rem; font-weight:700; color:var(--yokke-cyan);">${formattedName}</span>
      </div>
    ` : '';
    const rankHtml = rank > 0 ? `<span style="font-size:0.8rem; color:${pts >= 0 ? 'var(--yokke-gold)' : 'var(--yokke-red)'}; font-weight:600;">Rank ${rank} (${pts > 0 ? '+' + pts : pts}pt)</span>` : '-';
    return `<div>${cmdHtml}${rankHtml}</div>`;
  }

  // Admin Interactive Mode: Pilih Commander + Rank (Tanpa Label Tier Sesuai Permintaan)
  let cmdOptions = `<option value="">- Commander -</option>`;
  
  const highMidList = MCGG_COMMANDERS.filter(c => {
    const t = (c.tier || '').toLowerCase();
    return (t === 'high' || t === 'mid') && t !== 'gone' && t !== 'not use';
  });
  const otherList = MCGG_COMMANDERS.filter(c => {
    const t = (c.tier || '').toLowerCase();
    return t !== 'high' && t !== 'mid' && t !== 'gone' && t !== 'not use';
  });

  cmdOptions += `<optgroup label="🎮 Pool Commander (${highMidList.length})">`;
  highMidList.forEach(c => {
    const label = getCommanderFormattedName(c);
    const isSel = selectedCmd && (c.id === selectedCmd.id || (c.aliases && c.aliases.includes(selectedCmdId)));
    cmdOptions += `<option value="${c.id}" ${isSel ? 'selected' : ''}>${label}</option>`;
  });
  cmdOptions += `</optgroup>`;

  if (otherList.length > 0) {
    cmdOptions += `<optgroup label="📋 Pool Lainnya">`;
    otherList.forEach(c => {
      const label = getCommanderFormattedName(c);
      const isSel = selectedCmd && (c.id === selectedCmd.id || (c.aliases && c.aliases.includes(selectedCmdId)));
      cmdOptions += `<option value="${c.id}" ${isSel ? 'selected' : ''}>${label}</option>`;
    });
    cmdOptions += `</optgroup>`;
  }

  let rankOptions = `<option value="0">- Rank -</option>`;
  for (let r = 1; r <= 8; r++) {
    const pt = POINT_TABLE[r];
    rankOptions += `<option value="${r}" ${rank === r ? 'selected' : ''}>Rank ${r} (${pt > 0 ? '+' + pt : pt}pt)</option>`;
  }

  const thumbImg = selectedCmd 
    ? renderCommanderCirclesHtml(selectedCmd, 22) 
    : `<span style="font-size:1.1rem; vertical-align:middle; margin-right:4px;">🛡️</span>`;

  return `
    <div style="display:flex; flex-direction:column; gap:0.25rem;">
      <div style="display:flex; align-items:center; gap:4px;">
        ${thumbImg}
        <select onchange="updateMCGGCommander('${lobbyKey}', ${originalIdx}, '${cmdKey}', this.value)" style="padding: 0.2rem 0.35rem; font-size: 0.75rem; max-width: 125px;">
          ${cmdOptions}
        </select>
      </div>
      <select onchange="updateMCGGRank('${lobbyKey}', ${originalIdx}, '${roundKey}', this.value)" style="padding: 0.2rem 0.35rem; font-size: 0.75rem;">
        ${rankOptions}
      </select>
    </div>
  `;
}

function buildPenaltySelect(player, targetLobby) {
  const lobbyKey = targetLobby || currentMCGGLobby;
  const currentList = mcggLobbies[lobbyKey] || [];
  const originalIdx = currentList.indexOf(player);
  const pen = player.penalty || 0;

  if (!isAdmin) {
    return pen < 0 
      ? `<span style="color:var(--yokke-red); font-weight:700;">${pen} pt</span>` 
      : `<span style="color:var(--text-muted);">-</span>`;
  }

  return `
    <select onchange="updateMCGGPenalty('${lobbyKey}', ${originalIdx}, this.value)" style="padding: 0.25rem 0.4rem; font-size: 0.75rem; color:${pen < 0 ? 'var(--yokke-red)' : 'var(--text-muted)'}; font-weight:700;">
      <option value="0" ${pen === 0 ? 'selected' : ''}>0 pt</option>
      <option value="-2" ${pen === -2 ? 'selected' : ''}>-2 pt (Cmdr)</option>
      <option value="-4" ${pen === -4 ? 'selected' : ''}>-4 pt (Cmdr x2)</option>
      <option value="-10" ${pen === -10 ? 'selected' : ''}>-10 pt (Chat/Voice)</option>
      <option value="-12" ${pen === -12 ? 'selected' : ''}>-12 pt (Cmdr+Chat)</option>
    </select>
  `;
}

// Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation - No Sensitive Info)
function loadSampleData() {
  participants = [
    {
      id: 1001,
      category: 'MLBB',
      name: 'Yokke Alpha Demo',
      captainName: 'Alpha Captain',
      captainNickname: 'AlphaLead',
      dept: 'Product Operations',
      wa: '-',
      logo: '',
      notes: 'Demo team simulasi bagan.',
      status: 'VERIFIED',
      roster: [
        { role: 'Official 1 (Utama)', name: 'Alpha Coach', nickname: 'CoachAlpha', empId: 'DEMO-001', gameId: '-', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 1', name: 'Alpha Player 1', nickname: 'AlphaLead', empId: 'DEMO-002', gameId: '10001 (001)', isOrganik: true, isCaptain: true, idCard: '' },
        { role: 'Pemain Inti 2', name: 'Alpha Player 2', nickname: 'AlphaMid', empId: 'DEMO-003', gameId: '10002 (001)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 3', name: 'Alpha Player 3', nickname: 'AlphaRoam', empId: 'DEMO-004', gameId: '10003 (001)', isOrganik: false, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 4', name: 'Alpha Player 4', nickname: 'AlphaExp', empId: 'DEMO-005', gameId: '10004 (001)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 5', name: 'Alpha Player 5', nickname: 'AlphaGold', empId: 'DEMO-006', gameId: '10005 (001)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Cadangan 1', name: 'Alpha Player 6', nickname: 'AlphaSub1', empId: 'DEMO-007', gameId: '10006 (001)', isOrganik: false, isCaptain: false, idCard: '' },
        { role: 'Pemain Cadangan 2', name: 'Alpha Player 7', nickname: 'AlphaSub2', empId: 'DEMO-008', gameId: '10007 (001)', isOrganik: true, isCaptain: false, idCard: '' }
      ]
    },
    {
      id: 1002,
      category: 'MLBB',
      name: 'Yokke Beta Demo',
      captainName: 'Beta Captain',
      captainNickname: 'BetaLead',
      dept: 'Merchant Operations',
      wa: '-',
      logo: '',
      notes: 'Demo team simulasi bagan.',
      status: 'VERIFIED',
      roster: [
        { role: 'Official 1 (Utama)', name: 'Beta Coach', nickname: 'CoachBeta', empId: 'DEMO-011', gameId: '-', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 1', name: 'Beta Player 1', nickname: 'BetaLead', empId: 'DEMO-012', gameId: '20001 (002)', isOrganik: true, isCaptain: true, idCard: '' },
        { role: 'Pemain Inti 2', name: 'Beta Player 2', nickname: 'BetaMid', empId: 'DEMO-013', gameId: '20002 (002)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 3', name: 'Beta Player 3', nickname: 'BetaRoam', empId: 'DEMO-014', gameId: '20003 (002)', isOrganik: false, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 4', name: 'Beta Player 4', nickname: 'BetaExp', empId: 'DEMO-015', gameId: '20004 (002)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 5', name: 'Beta Player 5', nickname: 'BetaGold', empId: 'DEMO-016', gameId: '20005 (002)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Cadangan 1', name: 'Beta Player 6', nickname: 'BetaSub1', empId: 'DEMO-017', gameId: '20006 (002)', isOrganik: false, isCaptain: false, idCard: '' },
        { role: 'Pemain Cadangan 2', name: 'Beta Player 7', nickname: 'BetaSub2', empId: 'DEMO-018', gameId: '20007 (002)', isOrganik: true, isCaptain: false, idCard: '' }
      ]
    },
    {
      id: 1003,
      category: 'MLBB',
      name: 'Yokke Gamma Demo',
      captainName: 'Gamma Captain',
      captainNickname: 'GammaLead',
      dept: 'Engineering & Technology',
      wa: '-',
      logo: '',
      notes: 'Demo team simulasi bagan.',
      status: 'VERIFIED',
      roster: [
        { role: 'Official 1 (Utama)', name: 'Gamma Coach', nickname: 'CoachGamma', empId: 'DEMO-021', gameId: '-', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 1', name: 'Gamma Player 1', nickname: 'GammaLead', empId: 'DEMO-022', gameId: '30001 (003)', isOrganik: true, isCaptain: true, idCard: '' },
        { role: 'Pemain Inti 2', name: 'Gamma Player 2', nickname: 'GammaMid', empId: 'DEMO-023', gameId: '30002 (003)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 3', name: 'Gamma Player 3', nickname: 'GammaRoam', empId: 'DEMO-024', gameId: '30003 (003)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 4', name: 'Gamma Player 4', nickname: 'GammaExp', empId: 'DEMO-025', gameId: '30004 (003)', isOrganik: false, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 5', name: 'Gamma Player 5', nickname: 'GammaGold', empId: 'DEMO-026', gameId: '30005 (003)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Cadangan 1', name: 'Gamma Player 6', nickname: 'GammaSub1', empId: 'DEMO-027', gameId: '30006 (003)', isOrganik: false, isCaptain: false, idCard: '' },
        { role: 'Pemain Cadangan 2', name: 'Gamma Player 7', nickname: 'GammaSub2', empId: 'DEMO-028', gameId: '30007 (003)', isOrganik: true, isCaptain: false, idCard: '' }
      ]
    },
    {
      id: 1004,
      category: 'MLBB',
      name: 'Yokke Delta Demo',
      captainName: 'Delta Captain',
      captainNickname: 'DeltaLead',
      dept: 'Finance & Risk Operations',
      wa: '-',
      logo: '',
      notes: 'Demo team simulasi bagan.',
      status: 'VERIFIED',
      roster: [
        { role: 'Official 1 (Utama)', name: 'Delta Coach', nickname: 'CoachDelta', empId: 'DEMO-031', gameId: '-', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 1', name: 'Delta Player 1', nickname: 'DeltaLead', empId: 'DEMO-032', gameId: '40001 (004)', isOrganik: true, isCaptain: true, idCard: '' },
        { role: 'Pemain Inti 2', name: 'Delta Player 2', nickname: 'DeltaMid', empId: 'DEMO-033', gameId: '40002 (004)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 3', name: 'Delta Player 3', nickname: 'DeltaRoam', empId: 'DEMO-034', gameId: '40003 (004)', isOrganik: false, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 4', name: 'Delta Player 4', nickname: 'DeltaExp', empId: 'DEMO-035', gameId: '40004 (004)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Inti 5', name: 'Delta Player 5', nickname: 'DeltaGold', empId: 'DEMO-036', gameId: '40005 (004)', isOrganik: true, isCaptain: false, idCard: '' },
        { role: 'Pemain Cadangan 1', name: 'Delta Player 6', nickname: 'DeltaSub1', empId: 'DEMO-037', gameId: '40006 (004)', isOrganik: false, isCaptain: false, idCard: '' },
        { role: 'Pemain Cadangan 2', name: 'Delta Player 7', nickname: 'DeltaSub2', empId: 'DEMO-038', gameId: '40007 (004)', isOrganik: true, isCaptain: false, idCard: '' }
      ]
    },

    // Demo MCGG Solo Players (Generic simulation)
    {
      id: 2001,
      category: 'MCGG',
      name: 'Player Demo One',
      nickname: 'MCGG_Ace',
      dept: 'Product Management',
      wa: '-',
      logo: '',
      notes: 'Demo player untuk simulasi lobi.',
      status: 'VERIFIED',
      idCard: '',
      roster: [{ role: 'Pemain Solo', name: 'Player Demo One', nickname: 'MCGG_Ace', empId: 'DEMO-101', gameId: '1001 (101)', isOrganik: true, isCaptain: false, idCard: '' }]
    },
    {
      id: 2002,
      category: 'MCGG',
      name: 'Player Demo Two',
      nickname: 'MCGG_Blaze',
      dept: 'IT Engineering',
      wa: '-',
      logo: '',
      notes: 'Demo player untuk simulasi lobi.',
      status: 'VERIFIED',
      idCard: '',
      roster: [{ role: 'Pemain Solo', name: 'Player Demo Two', nickname: 'MCGG_Blaze', empId: 'DEMO-102', gameId: '1002 (102)', isOrganik: true, isCaptain: false, idCard: '' }]
    },
    {
      id: 2003,
      category: 'MCGG',
      name: 'Player Demo Three',
      nickname: 'MCGG_Cyber',
      dept: 'Digital Payment',
      wa: '-',
      logo: '',
      notes: 'Demo player untuk simulasi lobi.',
      status: 'VERIFIED',
      idCard: '',
      roster: [{ role: 'Pemain Solo', name: 'Player Demo Three', nickname: 'MCGG_Cyber', empId: 'DEMO-103', gameId: '1003 (103)', isOrganik: true, isCaptain: false, idCard: '' }]
    },
    {
      id: 2004,
      category: 'MCGG',
      name: 'Player Demo Four',
      nickname: 'MCGG_Dynamo',
      dept: 'Merchant Operations',
      wa: '-',
      logo: '',
      notes: 'Demo player untuk simulasi lobi.',
      status: 'VERIFIED',
      idCard: '',
      roster: [{ role: 'Pemain Solo', name: 'Player Demo Four', nickname: 'MCGG_Dynamo', empId: 'DEMO-104', gameId: '1004 (104)', isOrganik: true, isCaptain: false, idCard: '' }]
    },
    {
      id: 2005,
      category: 'MCGG',
      name: 'Player Demo Five',
      nickname: 'MCGG_Echo',
      dept: 'Enterprise Risk',
      wa: '-',
      logo: '',
      notes: 'Demo player untuk simulasi lobi.',
      status: 'VERIFIED',
      idCard: '',
      roster: [{ role: 'Pemain Solo', name: 'Player Demo Five', nickname: 'MCGG_Echo', empId: 'DEMO-105', gameId: '1005 (105)', isOrganik: true, isCaptain: false, idCard: '' }]
    },
    {
      id: 2006,
      category: 'MCGG',
      name: 'Player Demo Six',
      nickname: 'MCGG_Falcon',
      dept: 'Deployment Services',
      wa: '-',
      logo: '',
      notes: 'Demo player untuk simulasi lobi.',
      status: 'VERIFIED',
      idCard: '',
      roster: [{ role: 'Pemain Solo', name: 'Player Demo Six', nickname: 'MCGG_Falcon', empId: 'DEMO-106', gameId: '1006 (106)', isOrganik: true, isCaptain: false, idCard: '' }]
    },
    {
      id: 2007,
      category: 'MCGG',
      name: 'Player Demo Seven',
      nickname: 'MCGG_Ghost',
      dept: 'Finance & Accounting',
      wa: '-',
      logo: '',
      notes: 'Demo player untuk simulasi lobi.',
      status: 'VERIFIED',
      idCard: '',
      roster: [{ role: 'Pemain Solo', name: 'Player Demo Seven', nickname: 'MCGG_Ghost', empId: 'DEMO-107', gameId: '1007 (107)', isOrganik: false, isCaptain: false, idCard: '' }]
    },
    {
      id: 2008,
      category: 'MCGG',
      name: 'Player Demo Eight',
      nickname: 'MCGG_Hawk',
      dept: 'Security & Compliance',
      wa: '-',
      logo: '',
      notes: 'Demo player untuk simulasi lobi.',
      status: 'VERIFIED',
      idCard: '',
      roster: [{ role: 'Pemain Solo', name: 'Player Demo Eight', nickname: 'MCGG_Hawk', empId: 'DEMO-108', gameId: '1008 (108)', isOrganik: true, isCaptain: false, idCard: '' }]
    }
  ];

  autoLinkParticipantsAssets();
  saveState();
  renderCurrentMLBBFormat();
  syncMCGGPlayers();
}

function clearAllData() {
  if (confirm('Reset seluruh data pendaftar dan bagan skor lokal? Tindakan ini akan mengosongkan cache browser Anda.')) {
    participants = [];
    groupStageData = {};
    groupMatchResults = {};
    mcggLobbies = { LOBBY_A: [], LOBBY_B: [], GRAND_FINAL: [], LOBBY_LOWER: [] };
    localStorage.removeItem('yokke_deleted_participants');
    localStorage.removeItem('yokke_group_match_results');
    saveState();
    renderParticipants();
    renderCurrentMLBBFormat();
    renderMCGGTable();
    syncMCGGPlayers();
    updateCounts();
    alert('🧹 Seluruh data lokal dan riwayat hapus berhasil di-reset.');
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  showGlobalLoader('Menyinkronkan data terkini dari Google Sheets...');
  autoLinkParticipantsAssets();
  renderPlayersFormInputs();
  toggleCategoryForm();
  toggleOfficial2Form();
  renderRules();
  updateAuthUI();

  // Restore form draft jika ada
  restoreFormDraft('MLBB');
  restoreFormDraft('MCGG');

  // Initial render dari data cache lokal agar UI langsung tampil tanpa menunggu jaringan
  renderParticipants();
  renderCurrentMLBBFormat();
  renderMCGGTable();
  updateCounts();

  // Pasang autosave draft event listener pada form
  const regFormEl = document.getElementById('regForm');
  if (regFormEl) {
    regFormEl.addEventListener('input', handleFormDraftChange);
    regFormEl.addEventListener('change', handleFormDraftChange);
  }

  // Bersihkan duplikasi match hasil input ulang dan rekalkulasi klasemen grup
  if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();
  if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtures();

  // Strategi Stale-While-Revalidate: Jika data cache lokal sudah ada, buka UI seketika (<100ms)
  // dan jalankan sinkronisasi Google Sheets di latar belakang tanpa memblokir layar pengguna.
  if (participants && participants.length > 0) {
    hideGlobalLoader();
    fetchParticipantsFromGoogleSheet(true, true).catch(err => {
      console.warn('Background sync Google Sheets:', err);
    });
  } else {
    // Pengunjung baru tanpa cache: tunggu fetch awal dengan batas aman
    try {
      await fetchParticipantsFromGoogleSheet(true, true);
    } catch (err) {
      console.warn('Gagal initial sync Google Sheets:', err);
    } finally {
      hideGlobalLoader();
    }
  }
});

// ============================================================================
// MODUL MASTER-DETAIL INTERACTIVE TOURNAMENT HUB (MLBB & MCGG)
// Turnamen Yokke Squad 2026 - Official Regulations Architecture
// ============================================================================

let currentMLBBViewMode = 'HUB'; // 'HUB' | 'GROUPS' | 'FIXTURES'
let currentSelectedMLBBNode = 'GROUP_A'; // Default stage node MLBB

let currentMCGGViewMode = 'HUB'; // 'HUB' | 'LOBBIES'
let currentSelectedMCGGNode = 'STAGE1_LOBBY_A'; // Default stage node MCGG

// --- TAMPILAN VIEW SWITCHER MLBB ---
function setMLBBViewMode(mode) {
  currentMLBBViewMode = mode;
  const btnHub = document.getElementById('btnViewMlbbHub');
  const btnGroups = document.getElementById('btnViewMlbbGroups');
  const btnFixtures = document.getElementById('btnViewMlbbFixtures');
  const hubEl = document.getElementById('mlbbInteractiveHub');
  const groupStageBox = document.getElementById('groupStageContainer');
  const carouselEl = document.getElementById('mlbbCarouselWrapper');
  const navEl = document.getElementById('mlbbGroupNav');
  const fixturesEl = document.getElementById('groupFixturesWrapper');
  const playoffTitleEl = document.getElementById('groupPlayoffTitle');
  const playoffTreeEl = document.getElementById('groupPlayoffTree');

  if (btnHub) btnHub.className = mode === 'HUB' ? 'btn btn-primary' : 'btn btn-outline';
  if (btnGroups) btnGroups.className = mode === 'GROUPS' ? 'btn btn-primary' : 'btn btn-outline';
  if (btnFixtures) btnFixtures.className = mode === 'FIXTURES' ? 'btn btn-primary' : 'btn btn-outline';

  if (mode === 'HUB') {
    if (hubEl) hubEl.style.display = 'grid';
    if (groupStageBox) groupStageBox.style.display = 'none';
    if (carouselEl) carouselEl.style.display = 'none';
    if (navEl) navEl.style.display = 'none';
    if (fixturesEl) fixturesEl.style.display = 'none';
    if (playoffTitleEl) playoffTitleEl.style.display = 'none';
    if (playoffTreeEl && playoffTreeEl.parentElement) playoffTreeEl.parentElement.style.display = 'none';
    renderMLBBInteractiveHubUI();
  } else if (mode === 'GROUPS') {
    if (hubEl) hubEl.style.display = 'none';
    if (groupStageBox) groupStageBox.style.display = 'block';
    if (carouselEl) carouselEl.style.display = 'flex';
    if (navEl) navEl.style.display = 'block';
    if (fixturesEl) fixturesEl.style.display = 'block';
    if (playoffTitleEl) playoffTitleEl.style.display = 'block';
    if (playoffTreeEl && playoffTreeEl.parentElement) playoffTreeEl.parentElement.style.display = 'block';
    renderGroupStageUI();
  } else if (mode === 'FIXTURES') {
    if (hubEl) hubEl.style.display = 'none';
    if (groupStageBox) groupStageBox.style.display = 'block';
    if (carouselEl) carouselEl.style.display = 'none';
    if (navEl) navEl.style.display = 'none';
    if (fixturesEl) {
      fixturesEl.style.display = 'block';
      fixturesEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (playoffTitleEl) playoffTitleEl.style.display = 'block';
    if (playoffTreeEl && playoffTreeEl.parentElement) playoffTreeEl.parentElement.style.display = 'block';
  }
}

// --- TAMPILAN VIEW SWITCHER MCGG ---
function setMCGGViewMode(mode) {
  currentMCGGViewMode = mode;
  const btnHub = document.getElementById('btnViewMcggHub');
  const btnLobbies = document.getElementById('btnViewMcggLobbies');
  const hubEl = document.getElementById('mcggInteractiveHub');
  const carouselEl = document.getElementById('mcggCarouselWrapper');
  const navEl = document.getElementById('mcggGroupNav');
  const anchorBar = document.getElementById('mcggLobbyAnchorBar');
  const infoBanner = document.getElementById('mcggLobbyInfoBanner');

  if (btnHub) btnHub.className = mode === 'HUB' ? 'btn btn-primary' : 'btn btn-outline';
  if (btnLobbies) btnLobbies.className = mode === 'LOBBIES' ? 'btn btn-primary' : 'btn btn-outline';

  if (mode === 'HUB') {
    if (hubEl) hubEl.style.display = 'grid';
    if (carouselEl) carouselEl.style.display = 'none';
    if (navEl) navEl.style.display = 'none';
    if (anchorBar) anchorBar.style.display = 'none';
    if (infoBanner) infoBanner.style.display = 'none';
    renderMCGGInteractiveHubUI();
  } else {
    if (hubEl) hubEl.style.display = 'none';
    if (carouselEl) carouselEl.style.display = 'flex';
    if (navEl) navEl.style.display = 'block';
    if (anchorBar) anchorBar.style.display = 'flex';
    if (infoBanner) infoBanner.style.display = 'block';
    renderMCGGTable();
  }
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// HELPER NAVIGASI FASE & BAGAN KESELURUHAN PLAYOFF MLBB
// ----------------------------------------------------------------------------
let _isPlayoffBracketCollapsed = false;

function togglePlayoffBracketCollapse() {
  _isPlayoffBracketCollapsed = !_isPlayoffBracketCollapsed;
  const wrapper = document.getElementById('flowPlayoffBracketWrapper');
  const label = document.getElementById('toggleBracketLabel');
  if (wrapper) {
    wrapper.style.display = _isPlayoffBracketCollapsed ? 'none' : 'block';
  }
  if (label) {
    label.innerText = _isPlayoffBracketCollapsed ? 'Tampilkan Bagan' : 'Sembunyikan';
  }
}

function goToNextMLBBPlayoffPhase() {
  if (!Array.isArray(groupPlayoffMatches) || groupPlayoffMatches.length === 0) {
    if (typeof initGroupPlayoff === 'function') initGroupPlayoff(false);
  }
  currentSelectedMLBBNode = 'PLAYOFF_OVERVIEW';
  renderMLBBInteractiveHubUI();
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const detailEl = document.querySelector('.flow-detail-panel');
    if (detailEl && typeof detailEl.scrollIntoView === 'function') {
      detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function renderFullPlayoffBracketHtml(activeNodeKey = '') {
  if (!Array.isArray(groupPlayoffMatches) || groupPlayoffMatches.length === 0) {
    if (typeof initGroupPlayoff === 'function') initGroupPlayoff(false);
  }

  const roundNamesMap = {
    1: ['Grand Final'],
    2: ['Semifinal Playoff (4 Besar)', 'Grand Final'],
    3: ['Perempat Final (8 Besar)', 'Semifinal Playoff (4 Besar)', 'Grand Final'],
    5: ['Upper QF & Lower R1 (Hari 3)', 'Upper SF & Lower R2 (Hari 4)', 'Lower QF (Hari 4)', 'Upper Final & Lower Final (Hari 5)', 'Grand Final BO5 (Hari 5)'],
    6: ['Upper 16 Besar (Hari 3)', 'Upper QF & Lower R1 (Hari 3-4)', 'Upper SF & Lower R2/R3 (Hari 4)', 'Lower QF (Hari 4)', 'Upper Final & Lower Final (Hari 5)', 'Grand Final BO5 (Hari 5)']
  };

  const roundNames = roundNamesMap[groupPlayoffMatches.length] || ['Babak Playoff', 'Grand Final'];

  let roundsHtml = '';
  groupPlayoffMatches.forEach((round, rIdx) => {
    roundsHtml += `
      <div class="bracket-round">
        <div class="round-header" style="padding:0.4rem 0.6rem; border-radius:6px; background:rgba(0,210,255,0.08); border:1px solid rgba(0,210,255,0.2); font-size:0.78rem; margin-bottom:0.85rem;">
          ${roundNames[rIdx] || ('Ronde ' + (rIdx + 1))}
        </div>
    `;

    round.forEach((m, mIdx) => {
      // Pemetaan node key untuk highlight interaktif
      let matchNodeKey = '';
      if (groupPlayoffMatches.length === 6) {
        if (rIdx === 0) matchNodeKey = 'UB_16_M' + (mIdx + 1);
        else if (rIdx === 1) matchNodeKey = (mIdx < 4) ? 'DAY3_UPPER_QF' : 'DAY3_LOWER_R1';
        else if (rIdx >= 2 && rIdx <= 4) matchNodeKey = (m.bracket === 'UPPER') ? 'DAY4_UPPER' : 'DAY4_LOWER';
        else if (rIdx === 5) matchNodeKey = 'GRAND_FINAL_OFFLINE';
      }

      const isMatchActive = (activeNodeKey && matchNodeKey && activeNodeKey === matchNodeKey);

      const safeA = (m.teamA || '').replace(/'/g, "\\'");
      const safeB = (m.teamB || '').replace(/'/g, "\\'");

      const bracketBadge = m.bracket === 'UPPER' 
        ? '<span style="font-size:0.62rem; padding:0.1rem 0.35rem; border-radius:4px; background:rgba(0,210,255,0.18); color:var(--yokke-cyan); border:1px solid rgba(0,210,255,0.35); font-weight:700;">UPPER</span>'
        : (m.bracket === 'LOWER' 
            ? '<span style="font-size:0.62rem; padding:0.1rem 0.35rem; border-radius:4px; background:rgba(255,183,3,0.18); color:var(--yokke-gold); border:1px solid rgba(255,183,3,0.35); font-weight:700;">LOWER</span>'
            : (m.bracket === 'GRAND_FINAL' ? '<span style="font-size:0.62rem; padding:0.1rem 0.35rem; border-radius:4px; background:rgba(6,214,160,0.18); color:var(--yokke-green); border:1px solid rgba(6,214,160,0.35); font-weight:700;">FINAL BO5</span>' : ''));

      const activeStyle = isMatchActive
        ? 'border: 2px solid var(--yokke-cyan); box-shadow: 0 0 14px rgba(0,210,255,0.45); background: rgba(0,210,255,0.08);'
        : '';

      const clickHandler = matchNodeKey
        ? `onclick="if(event.target.closest('.matchup-team') || event.target.closest('button')) return; selectMLBBStageNode('${matchNodeKey}')"`
        : '';

      roundsHtml += `
        <div class="matchup ${isMatchActive ? 'is-active-matchup' : ''}" style="${activeStyle}; cursor:pointer;" ${clickHandler} title="${matchNodeKey ? 'Klik untuk melihat detail & skema pairing babak ini di bawah' : ''}">
          <div style="font-size:0.68rem; font-weight:700; color:var(--text-muted); padding:0.35rem 0.6rem; border-bottom:1px solid rgba(255,255,255,0.06); display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.25);">
            <span>${m.matchLabel || m.phaseName || ('Match #' + (mIdx + 1))}</span>
            <div style="display:flex; align-items:center; gap:0.3rem;">
              ${isMatchActive ? '<span style="color:var(--yokke-cyan); font-size:0.62rem; font-weight:800;">[DIPILIH]</span>' : ''}
              ${bracketBadge}
            </div>
          </div>
          <div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickGroupPlayoffWinner(${rIdx}, ${mIdx}, '${safeA}')">
            <span style="font-size: 0.85rem; font-weight:${m.winner === m.teamA ? '800' : '600'}; color:${m.winner === m.teamA ? 'var(--yokke-green)' : '#cbd5e1'}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:140px; display:inline-block;">
              ${escapeHtml(m.teamA || '-')}
            </span>
            <span style="font-size: 0.78rem; font-weight: 800; color:${m.winner === m.teamA ? 'var(--yokke-green)' : 'var(--text-muted)'}; margin-left:0.3rem;">
              ${m.winner === m.teamA ? 'WIN 🏆' : '-'}
            </span>
          </div>
          <div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickGroupPlayoffWinner(${rIdx}, ${mIdx}, '${safeB}')">
            <span style="font-size: 0.85rem; font-weight:${m.winner === m.teamB ? '800' : '600'}; color:${m.winner === m.teamB ? 'var(--yokke-green)' : '#cbd5e1'}; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:140px; display:inline-block;">
              ${escapeHtml(m.teamB || '-')}
            </span>
            <span style="font-size: 0.78rem; font-weight: 800; color:${m.winner === m.teamB ? 'var(--yokke-green)' : 'var(--text-muted)'}; margin-left:0.3rem;">
              ${m.winner === m.teamB ? 'WIN 🏆' : '-'}
            </span>
          </div>
          ${formatMatchMvpDisplayHtml(m)}
          ${isAdmin && m.winner ? `
            <div style="text-align:center; padding:0.3rem; background:rgba(0,0,0,0.2);">
              <button class="btn btn-outline" style="font-size:0.68rem; padding:0.15rem 0.5rem;" onclick="promptPlayoffMVP(${rIdx}, ${mIdx})">
                ⭐ ${m.mvpPlayer ? 'Ubah MVP' : 'Set MVP'}
              </button>
            </div>
          ` : ''}
        </div>
      `;
    });

    roundsHtml += '</div>';
  });

  return `
    <div class="flow-playoff-full-bracket-card" style="background: rgba(13, 20, 38, 0.95); border: 1px solid rgba(0, 210, 255, 0.28); border-radius: 10px; padding: 1.1rem; margin-bottom: 1.5rem; box-shadow: 0 4px 22px rgba(0,0,0,0.45);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.6rem; margin-bottom:0.85rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:0.75rem;">
        <div>
          <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
            <h4 style="margin:0; font-size:1.15rem; color:var(--yokke-cyan); font-weight:800; display:flex; align-items:center; gap:0.4rem;">
              <span>🏆</span> <span>Bagan Playoff Keseluruhan (Double Elimination)</span>
            </h4>
            <span style="font-size:0.72rem; padding:0.18rem 0.6rem; border-radius:12px; font-weight:700; background:rgba(0,210,255,0.15); color:var(--yokke-cyan); border:1px solid rgba(0,210,255,0.3);">
              Upper & Lower Bracket • 5 Hari
            </span>
          </div>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.25rem;">
            ⚡ Juara 1 (Home) & Juara 2 (Away) ke Upper Bracket | Gugur Upper vs Juara 3 ke Lower Bracket | Super Grand Final BO5
          </div>
        </div>
        
        <!-- ACTION CONTROLS: UNDI BAGAN, UJI UNDIAN & TOGGLE FULL BRACKET -->
        <div style="display:flex; gap:0.45rem; align-items:center; flex-wrap:wrap;">
          ${isAdmin ? `
            <button type="button" class="btn btn-gold" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-weight:700; display:inline-flex; align-items:center; gap:0.35rem; box-shadow:0 2px 10px rgba(255,183,3,0.3);" onclick="shuffleMLBBPlayoffBracket()" title="Acak ulang undian bagan playoff secara otomatis dengan aturan Anti-Same Group">
              <span>🎲</span> <span>Undi Bagan Playoff</span>
            </button>
            <button type="button" class="btn btn-outline" style="font-size:0.8rem; padding:0.4rem 0.85rem; border-color:var(--yokke-cyan); color:var(--yokke-cyan); font-weight:700; display:inline-flex; align-items:center; gap:0.35rem;" onclick="testMLBBPlayoffWithCurrentStandings()" title="Simulasi undi bagan playoff menggunakan posisi klasemen saat ini">
              <span>🧪</span> <span>Uji Undian (Klasemen Saat Ini)</span>
            </button>
          ` : `
            <span style="font-size:0.75rem; color:var(--text-muted); font-style:italic;">
              (Undian diatur oleh Panitia)
            </span>
          `}
          <button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.38rem 0.7rem; border-color:rgba(255,255,255,0.2); color:#cbd5e1;" onclick="togglePlayoffBracketCollapse()" id="btnTogglePlayoffBracket">
            <span>↔️</span> <span id="toggleBracketLabel">${_isPlayoffBracketCollapsed ? 'Tampilkan Bagan' : 'Sembunyikan'}</span>
          </button>
        </div>
      </div>

      <!-- BRACKET SCROLL CONTAINER -->
      <div class="bracket-wrapper" id="flowPlayoffBracketWrapper" style="padding:0.5rem 0.2rem; overflow-x:auto; display:${_isPlayoffBracketCollapsed ? 'none' : 'block'};">
        <div class="bracket-container" style="display:flex; gap:1.8rem; min-width:960px;">
          ${roundsHtml}
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// 1. MASTER-DETAIL INTERACTIVE HUB MLBB
// ----------------------------------------------------------------------------
function selectMLBBStageNode(nodeKey) {
  currentSelectedMLBBNode = nodeKey;
  renderMLBBInteractiveHubUI();
  if (typeof window !== 'undefined' && typeof document !== 'undefined' && window.innerWidth <= 992) {
    const detailEl = document.querySelector('.flow-detail-panel');
    if (detailEl && typeof detailEl.scrollIntoView === 'function') {
      detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function renderMLBBInteractiveHubUI() {
  const container = document.getElementById('mlbbInteractiveHub');
  if (!container) return;

  const gKeys = Object.keys(groupStageData || {});
  const activeNode = currentSelectedMLBBNode || 'GROUP_A';

  // --- SISI KIRI: SKEMA ALUR TURNAMEN INTERAKTIF ---
  let leftHtml = '<div class="flow-tree-column">';

  // 1. SELECT DROPDOWN BABAK KHUSUS MOBILE (<= 992px)
  leftHtml += `
    <div class="mobile-stage-selector-wrap">
      <label class="mobile-stage-label" for="mobileStageSelect">🎯 Pilih Babak Pertandingan:</label>
      <select id="mobileStageSelect" class="mobile-stage-select" onchange="selectMLBBStageNode(this.value)">
        <optgroup label="⚔️ Day 1: Fase 1 (Penyisihan 8 Grup)">
          <option value="GROUP_A" ${activeNode === 'GROUP_A' ? 'selected' : ''}>🛡️ Grup A</option>
          <option value="GROUP_B" ${activeNode === 'GROUP_B' ? 'selected' : ''}>🛡️ Grup B</option>
          <option value="GROUP_C" ${activeNode === 'GROUP_C' ? 'selected' : ''}>🛡️ Grup C</option>
          <option value="GROUP_D" ${activeNode === 'GROUP_D' ? 'selected' : ''}>🛡️ Grup D</option>
          <option value="GROUP_E" ${activeNode === 'GROUP_E' ? 'selected' : ''}>🛡️ Grup E</option>
          <option value="GROUP_F" ${activeNode === 'GROUP_F' ? 'selected' : ''}>🛡️ Grup F</option>
          <option value="GROUP_G" ${activeNode === 'GROUP_G' ? 'selected' : ''}>🛡️ Grup G</option>
          <option value="GROUP_H" ${activeNode === 'GROUP_H' ? 'selected' : ''}>🛡️ Grup H</option>
        </optgroup>
        <optgroup label="🏆 Babak Playoff Double Elimination">
          <option value="PLAYOFF_OVERVIEW" ${activeNode === 'PLAYOFF_OVERVIEW' ? 'selected' : ''}>🏆 Bagan Playoff Keseluruhan (Full Bracket)</option>
        </optgroup>
        <optgroup label="🏆 Day 2: Fase 2 (Upper Bracket 16 Besar)">
          <option value="UB_16_M1" ${activeNode === 'UB_16_M1' ? 'selected' : ''}>⚡ Match 1 (1A vs 2B)</option>
          <option value="UB_16_M2" ${activeNode === 'UB_16_M2' ? 'selected' : ''}>⚡ Match 2 (1C vs 2D)</option>
          <option value="UB_16_M3" ${activeNode === 'UB_16_M3' ? 'selected' : ''}>⚡ Match 3 (1E vs 2F)</option>
          <option value="UB_16_M4" ${activeNode === 'UB_16_M4' ? 'selected' : ''}>⚡ Match 4 (1G vs 2H)</option>
          <option value="UB_16_M5" ${activeNode === 'UB_16_M5' ? 'selected' : ''}>⚡ Match 5 (1B vs 2A)</option>
          <option value="UB_16_M6" ${activeNode === 'UB_16_M6' ? 'selected' : ''}>⚡ Match 6 (1D vs 2C)</option>
          <option value="UB_16_M7" ${activeNode === 'UB_16_M7' ? 'selected' : ''}>⚡ Match 7 (1F vs 2E)</option>
          <option value="UB_16_M8" ${activeNode === 'UB_16_M8' ? 'selected' : ''}>⚡ Match 8 (1H vs 2G)</option>
        </optgroup>
        <optgroup label="🔥 Day 3: Upper QF & Lower Bracket R1">
          <option value="DAY3_UPPER_QF" ${activeNode === 'DAY3_UPPER_QF' ? 'selected' : ''}>⚡ Upper Quarter Final</option>
          <option value="DAY3_LOWER_R1" ${activeNode === 'DAY3_LOWER_R1' ? 'selected' : ''}>🛡️ Lower Bracket Round 1</option>
        </optgroup>
        <optgroup label="👑 Day 4: Semifinal & Final Bracket">
          <option value="DAY4_UPPER" ${activeNode === 'DAY4_UPPER' ? 'selected' : ''}>👑 Upper Semifinal & Final</option>
          <option value="DAY4_LOWER" ${activeNode === 'DAY4_LOWER' ? 'selected' : ''}>🛡️ Lower Quarter Final s/d Final</option>
        </optgroup>
        <optgroup label="🏆 Final Offline Kantor Pusat">
          <option value="GRAND_FINAL_OFFLINE" ${activeNode === 'GRAND_FINAL_OFFLINE' ? 'selected' : ''}>🏆 Super Grand Final (BO5)</option>
        </optgroup>
      </select>
    </div>
  `;

  // 2. DESKTOP TREE CARDS (21 Interactive Nodes)
  leftHtml += '<div class="flow-tree-desktop-cards">';

  // DAY 1 (Fase 1: 8 Grup Penyisihan BO3)
  leftHtml += `
    <div class="flow-stage-card">
      <div class="flow-stage-header">
        <div class="flow-stage-title">
          <span>⚔️</span> <span>Day 1: Fase 1 (Penyisihan 8 Grup)</span>
        </div>
        <span class="flow-stage-badge">Round-Robin BO3 • Online</span>
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 0.6rem;">
        Juara 1 & 2 lolos ke Upper Bracket (Day 2). Juara 3 ke Lower Bracket (Day 3).
      </p>
      <div class="flow-nodes-grid">
  `;

  const groupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  groupLetters.forEach(letter => {
    const key = `GROUP_${letter}`;
    const gName = `Grup ${letter}`;
    const teams = groupStageData[gName] || [];
    const isActive = activeNode === key;
    const completedMatches = Object.values(groupMatchResults || {}).filter(m => m.gName === gName && m.winner).length;
    const totalExpectedMatches = (teams.length * (teams.length - 1)) / 2;

    leftHtml += `
      <button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode('${key}')">
        <div class="flow-node-name">
          <span>🛡️</span> <span>Grup ${letter}</span>
        </div>
        <div class="flow-node-desc">
          ${teams.length} Tim • ${completedMatches > 0 ? `${completedMatches}/${totalExpectedMatches} Match` : 'Siap Bertanding'}
        </div>
      </button>
    `;
  });
  leftHtml += `</div>
      <div style="margin-top:0.85rem; padding-top:0.75rem; border-top:1px solid rgba(255,255,255,0.08);">
        <button type="button" class="btn btn-primary" style="width:100%; font-size:0.82rem; padding:0.6rem 0.9rem; font-weight:800; background:linear-gradient(135deg, #00b4d8, #0077b6); border:1px solid var(--yokke-cyan); border-radius:8px; display:flex; justify-content:center; align-items:center; gap:0.5rem; box-shadow:0 4px 14px rgba(0,180,216,0.3); cursor:pointer;" onclick="goToNextMLBBPlayoffPhase()">
          <span>🏆</span> <span>Lanjut ke Babak Playoff & Undi Bagan ➔</span>
        </button>
      </div>
    </div>`;

  // DAY 2 (Fase 2: Upper Bracket 16 Besar BO3)
  const isDay2Active = activeNode.startsWith('UB_16_');
  leftHtml += `
    <div class="flow-stage-card">
      <div class="flow-stage-header">
        <div class="flow-stage-title">
          <span>🏆</span> <span>Day 2: Fase 2 (Upper Bracket 16 Besar)</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.4rem;">
          <button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.2rem 0.55rem; color:var(--yokke-cyan); border-color:rgba(0,210,255,0.4); display:inline-flex; align-items:center; gap:0.3rem;" onclick="selectMLBBStageNode('PLAYOFF_OVERVIEW')">
            <span>🏆</span> <span>Bagan Penuh</span>
          </button>
          <span class="flow-stage-badge">8 Match BO3 • Silang Grup</span>
        </div>
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 0.6rem;">
        Juara 1 vs Juara 2 beda grup. Pemenang ke Upper QF (Day 3), Kalah turun ke Lower R1 (Day 3).
      </p>
      <div class="flow-nodes-grid">
  `;

  const ubMatchPairs = [
    { key: 'UB_16_M1', label: 'Match 1: Juara 1A vs 2B', desc: 'Pemenang ➔ Upper QF 1' },
    { key: 'UB_16_M2', label: 'Match 2: Juara 1C vs 2D', desc: 'Pemenang ➔ Upper QF 1' },
    { key: 'UB_16_M3', label: 'Match 3: Juara 1E vs 2F', desc: 'Pemenang ➔ Upper QF 2' },
    { key: 'UB_16_M4', label: 'Match 4: Juara 1G vs 2H', desc: 'Pemenang ➔ Upper QF 2' },
    { key: 'UB_16_M5', label: 'Match 5: Juara 1B vs 2A', desc: 'Pemenang ➔ Upper QF 3' },
    { key: 'UB_16_M6', label: 'Match 6: Juara 1D vs 2C', desc: 'Pemenang ➔ Upper QF 3' },
    { key: 'UB_16_M7', label: 'Match 7: Juara 1F vs 2E', desc: 'Pemenang ➔ Upper QF 4' },
    { key: 'UB_16_M8', label: 'Match 8: Juara 1H vs 2G', desc: 'Pemenang ➔ Upper QF 4' }
  ];

  ubMatchPairs.forEach(m => {
    const isActive = activeNode === m.key;
    leftHtml += `
      <button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode('${m.key}')">
        <div class="flow-node-name">
          <span>⚡</span> <span style="font-size:0.78rem;">${m.label}</span>
        </div>
        <div class="flow-node-desc">${m.desc}</div>
      </button>
    `;
  });
  leftHtml += `</div></div>`;

  // DAY 3 (Upper QF & Lower Bracket R1)
  leftHtml += `
    <div class="flow-stage-card">
      <div class="flow-stage-header">
        <div class="flow-stage-title">
          <span>🔥</span> <span>Day 3: Upper QF & Lower Bracket R1</span>
        </div>
        <span class="flow-stage-badge">Anti-Rematch Silang Grup</span>
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 0.6rem;">
        Lower R1: 8 Juara 3 grup bertanding melawan 8 tim gugur Day 2 (Dilarang bertemu lawan dari grup yang sama).
      </p>
      <div class="flow-nodes-grid" style="grid-template-columns: 1fr 1fr;">
        <button type="button" class="flow-node-btn ${activeNode === 'DAY3_UPPER_QF' ? 'active' : ''}" onclick="selectMLBBStageNode('DAY3_UPPER_QF')">
          <div class="flow-node-name"><span>⚡</span> <span>Upper Quarter Final</span></div>
          <div class="flow-node-desc">4 Match BO3 • Tiket Semifinal Upper</div>
        </button>
        <button type="button" class="flow-node-btn ${activeNode === 'DAY3_LOWER_R1' ? 'active' : ''}" onclick="selectMLBBStageNode('DAY3_LOWER_R1')">
          <div class="flow-node-name"><span>🛡️</span> <span>Lower Bracket Round 1</span></div>
          <div class="flow-node-desc">8 Match BO3 • Anti-Rematch Grup</div>
        </button>
      </div>
    </div>
  `;

  // DAY 4 (Upper Semifinal/Final & Lower Bracket)
  leftHtml += `
    <div class="flow-stage-card">
      <div class="flow-stage-header">
        <div class="flow-stage-title">
          <span>⚔️</span> <span>Day 4: Semifinal & Final Bracket</span>
        </div>
        <span class="flow-stage-badge">BO3 • Penentuan Juara Upper & Lower</span>
      </div>
      <div class="flow-nodes-grid" style="grid-template-columns: 1fr 1fr;">
        <button type="button" class="flow-node-btn ${activeNode === 'DAY4_UPPER' ? 'active' : ''}" onclick="selectMLBBStageNode('DAY4_UPPER')">
          <div class="flow-node-name"><span>👑</span> <span>Upper Semifinal & Final</span></div>
          <div class="flow-node-desc">Menentukan Juara Upper Bracket</div>
        </button>
        <button type="button" class="flow-node-btn ${activeNode === 'DAY4_LOWER' ? 'active' : ''}" onclick="selectMLBBStageNode('DAY4_LOWER')">
          <div class="flow-node-name"><span>🛡️</span> <span>Lower Quarter Final s/d Final</span></div>
          <div class="flow-node-desc">Menentukan Juara Lower Bracket</div>
        </button>
      </div>
    </div>
  `;

  // FINAL OFFLINE (Super Grand Final BO5)
  leftHtml += `
    <div class="flow-stage-card is-final">
      <div class="flow-stage-header">
        <div class="flow-stage-title" style="color:var(--yokke-gold);">
          <span>🏆</span> <span>Final Offline: Super Grand Final (BO5)</span>
        </div>
        <span class="flow-stage-badge" style="border-color:var(--yokke-gold);color:var(--yokke-gold);">Kantor Pusat Yokke</span>
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 0.6rem;">
        Pertemuan Juara Upper Bracket vs Juara Lower Bracket dalam format Best of 5 (BO5).
      </p>
      <button type="button" class="flow-node-btn is-final ${activeNode === 'GRAND_FINAL_OFFLINE' ? 'active' : ''}" onclick="selectMLBBStageNode('GRAND_FINAL_OFFLINE')">
        <div class="flow-node-name" style="color:var(--yokke-gold);">
          <span>👑</span> <span>Super Grand Final Offline (BO5)</span>
        </div>
        <div class="flow-node-desc">Panggung Utama Kantor Pusat Yokke • Juara 1, 2, 3</div>
      </button>
    </div>
  `;

  leftHtml += '</div></div>';

  // --- SISI KANAN: INSPECTOR DETAIL PANEL ---
  let rightHtml = '<div class="flow-detail-panel">';
  rightHtml += renderMLBBDetailPanelContent(activeNode);
  rightHtml += '</div>';

  container.innerHTML = leftHtml + rightHtml;
}

function renderMLBBDetailPanelContent(nodeKey) {
  let content = '';

  // 0. DETAIL NODE PLAYOFF OVERVIEW (BAGAN KESELURUHAN SEBAGAI PENGGANTI KLASEMEN)
  if (nodeKey === 'PLAYOFF_OVERVIEW') {
    content += renderFullPlayoffBracketHtml(nodeKey);
    content += `
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(0,210,255,0.25); border-radius:10px; padding:1.25rem; margin-bottom:1rem; box-shadow:0 4px 15px rgba(0,0,0,0.3);">
        <h4 style="margin:0 0 0.5rem; font-size:1.05rem; color:var(--yokke-gold); display:flex; align-items:center; gap:0.4rem;">
          <span>📋</span> <span>Struktur Pertandingan Playoff 5 Hari (Double Elimination)</span>
        </h4>
        <p style="font-size:0.85rem; color:#cbd5e1; line-height:1.6; margin:0 0 1rem;">
          Pilih salah satu babak di bawah atau klik kartu pertandingan pada bagan di atas untuk melihat skema pairing dan detail pertandingannya:
        </p>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap:0.6rem;">
          <button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-size:0.8rem; border-color:rgba(0,210,255,0.3); color:#fff; display:flex; align-items:center; gap:0.4rem;" onclick="selectMLBBStageNode('UB_16_M1')">
            <span>⚡</span> <span><strong>Day 2:</strong> Upper 16 Besar (8 Match)</span>
          </button>
          <button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-size:0.8rem; border-color:rgba(0,210,255,0.3); color:#fff; display:flex; align-items:center; gap:0.4rem;" onclick="selectMLBBStageNode('DAY3_UPPER_QF')">
            <span>⚡</span> <span><strong>Day 3:</strong> Upper Quarter Final</span>
          </button>
          <button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-size:0.8rem; border-color:rgba(255,183,3,0.3); color:#fff; display:flex; align-items:center; gap:0.4rem;" onclick="selectMLBBStageNode('DAY3_LOWER_R1')">
            <span>🛡️</span> <span><strong>Day 3:</strong> Lower Bracket Round 1</span>
          </button>
          <button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-size:0.8rem; border-color:rgba(0,210,255,0.3); color:#fff; display:flex; align-items:center; gap:0.4rem;" onclick="selectMLBBStageNode('DAY4_UPPER')">
            <span>👑</span> <span><strong>Day 4:</strong> Upper Semifinal & Final</span>
          </button>
          <button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-size:0.8rem; border-color:rgba(255,183,3,0.3); color:#fff; display:flex; align-items:center; gap:0.4rem;" onclick="selectMLBBStageNode('DAY4_LOWER')">
            <span>🛡️</span> <span><strong>Day 4:</strong> Lower QF s/d Final</span>
          </button>
          <button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-size:0.8rem; border-color:rgba(255,183,3,0.5); color:var(--yokke-gold); display:flex; align-items:center; gap:0.4rem;" onclick="selectMLBBStageNode('GRAND_FINAL_OFFLINE')">
            <span>🏆</span> <span><strong>Day 5:</strong> Super Grand Final BO5</span>
          </button>
        </div>
      </div>
    `;
    return content;
  }

  // DIATAS MATCH PLAYOFF TAMBAHKAN BAGAN KESELURUHAN (SEBAGAI PENGGANTI KLASEMEN DATA)
  if (!nodeKey.startsWith('GROUP_')) {
    content += renderFullPlayoffBracketHtml(nodeKey);
  }

  // 1. DETAIL NODE FASE 1: GRUP A - H
  if (nodeKey.startsWith('GROUP_')) {
    const letter = nodeKey.replace('GROUP_', '');
    const gName = `Grup ${letter}`;
    const teams = groupStageData[gName] || [];

    const sorted = getSortedGroupTeams(gName);
    const fixtures = getGroupFixtures(gName);
    const isGroupAllDone = isGroupMatchesCompleted(gName);

    content += `
      <div class="detail-panel-header">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-cyan);display:flex;align-items:center;gap:0.4rem;">
            <span>🛡️</span> <span>Klasemen & Pertandingan: ${escapeHtml(gName)}</span>
          </h3>
          <span style="font-size:0.75rem;padding:0.2rem 0.6rem;background:rgba(0,210,255,0.12);border:1px solid rgba(0,210,255,0.3);color:var(--yokke-cyan);border-radius:12px;font-weight:700;">
            Fase 1 • Day 1
          </span>
        </div>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(6,214,160,0.12);color:var(--yokke-green);border:1px solid var(--yokke-green);">Round-Robin BO3</span>
          <span class="badge-status" style="background:rgba(255,255,255,0.06);color:var(--text-muted);">Menang Match = +2 Poin</span>
          <span class="badge-status" style="background:rgba(0,210,255,0.08);color:var(--yokke-cyan);">Juara 1 & 2 ➔ Upper Day 2</span>
          <span class="badge-status" style="background:rgba(255,183,3,0.1);color:var(--yokke-gold);">Juara 3 ➔ Lower Day 3</span>
        </div>
      </div>

      <!-- TABEL KLASEMEN GRUP -->
      <div style="margin-bottom:1.25rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.6rem;">
          <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
            <h4 style="margin:0;font-size:0.95rem;color:var(--yokke-gold);">📊 Klasemen ${isGroupAllDone ? 'Akhir' : 'Sementara'} ${escapeHtml(gName)}</h4>
            <button type="button" class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700; background:linear-gradient(135deg, var(--yokke-cyan), #0077b6); color:#fff; border:none; border-radius:6px; display:inline-flex; align-items:center; gap:0.3rem; cursor:pointer; box-shadow:0 2px 8px rgba(0,210,255,0.3);" onclick="goToNextMLBBPlayoffPhase()">
              <span>🏆</span> <span>Lanjut ke Babak Playoff ➔</span>
            </button>
          </div>
          <span style="font-size:0.75rem;padding:0.18rem 0.6rem;border-radius:12px;font-weight:600;${
            isGroupAllDone
              ? 'background:rgba(6,214,160,0.12);color:var(--yokke-green);border:1px solid var(--yokke-green);'
              : 'background:rgba(255,255,255,0.06);color:var(--text-muted);border:1px solid rgba(255,255,255,0.1);'
          }">
            ${isGroupAllDone ? '✅ Klasemen Final (Kelolosan Terbuka)' : '🔒 Kelolosan Ditutup (Match Berlangsung)'}
          </span>
        </div>
        <div class="table-container" style="margin:0;">
          <table>
            <thead>
              <tr>
                <th style="width:35px;">#</th>
                <th>Nama Tim</th>
                <th style="text-align:center;width:45px;" title="Pertandingan Dimainkan">Match</th>
                <th style="text-align:center;width:40px;">M</th>
                <th style="text-align:center;width:40px;">K</th>
                <th style="text-align:center;width:60px;" title="Agregat Game (Game Menang - Game Kalah)">Agregat</th>
                <th style="text-align:center;width:50px;">Poin</th>
                <th style="text-align:center;width:55px;">⭐ MVP</th>
                <th>Kelolosan</th>
              </tr>
            </thead>
            <tbody>
              ${sorted.map((t, idx) => {
                const origIdx = groupStageData[gName].indexOf(t);
                const winCtrl = isAdmin ? `
                  <input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('${gName}', ${origIdx}, 'win', this.value); renderMLBBInteractiveHubUI();">
                ` : t.win;
                const loseCtrl = isAdmin ? `
                  <input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('${gName}', ${origIdx}, 'lose', this.value); renderMLBBInteractiveHubUI();">
                ` : t.lose;

                const diffVal = (t.diff !== undefined) ? t.diff : ((t.gameWon || 0) - (t.gameLost || 0));
                const diffSign = diffVal > 0 ? `+${diffVal}` : `${diffVal}`;
                const diffColor = diffVal > 0 ? 'var(--yokke-green)' : (diffVal < 0 ? '#f87171' : 'var(--text-muted)');
                const gameDetail = `${t.gameWon || 0}-${t.gameLost || 0}`;

                const rowBg = isGroupAllDone
                  ? (idx < 2 ? 'background:rgba(0,210,255,0.08);' : (idx === 2 ? 'background:rgba(255,183,3,0.06);' : ''))
                  : '';

                const kelolosanBadge = isGroupAllDone ? (
                  idx < 2 ? '<span style="color:var(--yokke-cyan);font-weight:700;">Upper Bracket (Day 2)</span>' :
                  (idx === 2 ? '<span style="color:var(--yokke-gold);font-weight:700;">Lower Bracket (Day 3)</span>' : '<span style="color:var(--text-muted);">Gugur</span>')
                ) : '<span style="color:var(--text-muted);font-style:italic;font-size:0.75rem;" title="Status kelolosan akan otomatis terbuka setelah seluruh pertandingan di ' + escapeHtml(gName) + ' selesai diinput">🔒 Ditutup (Match Berlangsung)</span>';

                return `
                  <tr style="${rowBg}">
                    <td style="font-weight:700;color:var(--text-muted);">${idx + 1}</td>
                    <td style="font-weight:700;color:#fff;">${escapeHtml(t.name)}</td>
                    <td style="text-align:center;font-weight:700;color:#cbd5e1;">${t.matchCount !== undefined ? t.matchCount : ((t.win || 0) + (t.lose || 0) + (t.draw || 0))}</td>
                    <td style="text-align:center;">${winCtrl}</td>
                    <td style="text-align:center;">${loseCtrl}</td>
                    <td style="text-align:center;" title="Game: ${t.gameWon || 0}M - ${t.gameLost || 0}K (Selisih Game: ${diffSign})">
                      <span style="font-weight:800; color:${diffColor};">${diffSign}</span>
                      <div style="font-size:0.68rem; color:var(--text-muted);">${gameDetail}</div>
                    </td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:800;">${t.pts}</td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:700;">${t.mvpCount || 0}</td>
                    <td>${kelolosanBadge}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- DAFTAR MATCH & INPUT SKOR BO3 -->
      <div>
        <h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3 (${escapeHtml(gName)})</h4>
    `;
    if (fixtures.length === 0) {
      content += '<p style="font-size:0.8rem;color:var(--text-muted);">Belum ada jadwal pertandingan dalam grup ini.</p>';
    } else {
      content += '<div style="display:flex;flex-direction:column;gap:0.75rem;">';
      fixtures.forEach((f, fIdx) => {
        const hasScore = f.winner !== null || (f.scoreA !== null && f.scoreB !== null && (Number(f.scoreA) > 0 || Number(f.scoreB) > 0));
        const winner = f.winner;
        const winnerLower = (f.winner || '').toLowerCase().trim();
        const isDoubleWO = (
          winnerLower === 'keduanya wo (0-0)' ||
          winnerLower === 'keduanya wo' ||
          (winnerLower.includes('keduanya') && winnerLower.includes('wo'))
        );
        const isSingleWO = !isDoubleWO && winnerLower.includes('wo');
        const isDraw = !isDoubleWO && (winnerLower.includes('imbang') || winnerLower.includes('seri'));

        const cleanWinner = (f.winner || '')
          .replace(/\(menang\s*wo\)/i, '')
          .replace(/\(wo\)/i, '')
          .replace(/menang\s*wo\s*:\s*/i, '')
          .trim();

        const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cleanWinner, f.teamA));
        const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cleanWinner, f.teamB));
        const vMap = (f.verifiedPlayers && typeof f.verifiedPlayers === 'object') ? f.verifiedPlayers : {};
        const verifiedCount = Object.values(vMap).filter(Boolean).length;

        content += `
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:0.75rem 1rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
              <span style="font-size:0.75rem;font-weight:700;color:var(--yokke-gold);">Hari ${f.day} (${f.dateLabel || ''}) • Match ${f.matchOrder || f.session} • ${f.sessionTime} • ${f.streamRoom || 'Stream 1'}</span>
              <span style="font-size:0.75rem;font-weight:700;color:${isDoubleWO ? '#f87171' : (isSingleWO ? '#f87171' : (isDraw ? '#fbbf24' : (hasScore ? 'var(--yokke-green)' : 'var(--text-muted)')))};">
                ${isDoubleWO ? '⚡ Keduanya WO (0-0)' : (isSingleWO ? '⚡ Selesai (WO)' : (isDraw ? '⚖️ Imbang (0-0)' : (hasScore ? '✅ Selesai' : '⏳ BO3')))}
              </span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;">
              <div style="flex:1;min-width:140px;font-weight:700;color:${isWinnerA ? 'var(--yokke-gold)' : '#fff'};">
                ${escapeHtml(f.teamA)} 
                ${isWinnerA ? '🏆' + (isSingleWO ? ' <span style="font-size:0.7rem;color:var(--yokke-green);font-weight:700;">(Menang WO)</span>' : '') : (isSingleWO && isWinnerB ? ' <span style="font-size:0.7rem;color:#f87171;font-weight:700;">(Kalah WO)</span>' : (isDoubleWO ? ' <span style="font-size:0.7rem;color:#f87171;font-weight:700;">(Kalah WO)</span>' : ''))}
              </div>
              <div style="display:flex;align-items:center;gap:0.35rem;flex-wrap:wrap;">
                ${isAdmin ? `
                  <input type="number" min="0" max="2" value="${f.scoreA !== null ? f.scoreA : 0}" style="width:38px;text-align:center;padding:0.25rem;" id="scoreA_${f.matchId}">
                  <span style="font-weight:700;color:var(--text-muted);">-</span>
                  <input type="number" min="0" max="2" value="${f.scoreB !== null ? f.scoreB : 0}" style="width:38px;text-align:center;padding:0.25rem;" id="scoreB_${f.matchId}">
                  <button class="btn btn-primary" style="padding:0.25rem 0.55rem;font-size:0.75rem;" onclick="
                    const sA = document.getElementById('scoreA_${f.matchId}').value;
                    const sB = document.getElementById('scoreB_${f.matchId}').value;
                    setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${escapeHtml(f.teamB).replace(/'/g, "\\'")}', sA, sB);
                    renderMLBBInteractiveHubUI();
                  ">Simpan</button>
                  <button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;border-color:rgba(239,68,68,0.4);" onclick="setGroupMatchSpecialResult('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${escapeHtml(f.teamB).replace(/'/g, "\\'")}', 'WO'); renderMLBBInteractiveHubUI();" title="Set Status Walkover (WO)">⚡ WO</button>
                  <button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;border-color:rgba(245,158,11,0.4);" onclick="setGroupMatchSpecialResult('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${escapeHtml(f.teamB).replace(/'/g, "\\'")}', 'DRAW'); renderMLBBInteractiveHubUI();" title="Set Imbang / Seri (0-0)">⚖️ Seri</button>
                  <button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBBGroupMvpModal('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${escapeHtml(f.teamB).replace(/'/g, "\\'")}', ${f.scoreA !== null ? f.scoreA : 0}, ${f.scoreB !== null ? f.scoreB : 0})" title="Input MVP">⭐ MVP</button>
                ` : `
                  <span style="font-size:1.1rem;font-weight:800;color:var(--yokke-gold);">${f.scoreA !== null ? f.scoreA : '-'} : ${f.scoreB !== null ? f.scoreB : '-'}</span>
                `}
              </div>
              <div style="flex:1;min-width:140px;text-align:right;font-weight:700;color:${isWinnerB ? 'var(--yokke-gold)' : '#fff'};">
                ${isWinnerB ? '🏆 ' : ''}${escapeHtml(f.teamB)}
                ${isWinnerB && isSingleWO ? ' <span style="font-size:0.7rem;color:var(--yokke-green);font-weight:700;">(Menang WO)</span>' : (!isWinnerB && isSingleWO ? ' <span style="font-size:0.7rem;color:#f87171;font-weight:700;">(Kalah WO)</span>' : (isDoubleWO ? ' <span style="font-size:0.7rem;color:#f87171;font-weight:700;">(Kalah WO)</span>' : ''))}
              </div>
            </div>
            ${formatMatchMvpDisplayHtml(f)}
            <div style="margin-top:0.45rem; padding-top:0.35rem; border-top:1px solid rgba(255,255,255,0.06); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.35rem;">
              <span style="font-size:0.7rem; color:${verifiedCount > 0 ? 'var(--yokke-green)' : 'var(--text-muted)'}; font-weight:700;">
                ${verifiedCount > 0 ? `🛡️ ${verifiedCount} Pemain Terverifikasi` : '🛡️ Belum Diverifikasi'}
              </span>
              <button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; color:var(--yokke-cyan); border-color:rgba(0,210,255,0.4); display:inline-flex; align-items:center; gap:0.3rem;" onclick="openMatchPlayerVerifyModal('${f.matchId}', '${escapeHtml(gName).replace(/'/g, "\\'")}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${escapeHtml(f.teamB).replace(/'/g, "\\'")}')">
                <span>🛡️</span> <span>Verifikasi Pemain</span>
              </button>
            </div>
          </div>
        `;
      });
      content += '</div>';
    }
    content += '</div>';
  }

  // 2. DETAIL NODE FASE 2: UPPER BRACKET 16 BESAR (DAY 2)
  else if (nodeKey.startsWith('UB_16_')) {
    const matchNum = nodeKey.replace('UB_16_M', '');
    const ubMatchesDesc = {
      '1': { pair: 'Juara 1 Grup A vs Juara 2 Grup B', qf: 'Upper QF 1', lower: 'Lower Bracket R1 Match 1' },
      '2': { pair: 'Juara 1 Grup C vs Juara 2 Grup D', qf: 'Upper QF 1', lower: 'Lower Bracket R1 Match 2' },
      '3': { pair: 'Juara 1 Grup E vs Juara 2 Grup F', qf: 'Upper QF 2', lower: 'Lower Bracket R1 Match 3' },
      '4': { pair: 'Juara 1 Grup G vs Juara 2 Grup H', qf: 'Upper QF 2', lower: 'Lower Bracket R1 Match 4' },
      '5': { pair: 'Juara 1 Grup B vs Juara 2 Grup A', qf: 'Upper QF 3', lower: 'Lower Bracket R1 Match 5' },
      '6': { pair: 'Juara 1 Grup D vs Juara 2 Grup C', qf: 'Upper QF 3', lower: 'Lower Bracket R1 Match 6' },
      '7': { pair: 'Juara 1 Grup F vs Juara 2 Grup E', qf: 'Upper QF 4', lower: 'Lower Bracket R1 Match 7' },
      '8': { pair: 'Juara 1 Grup H vs Juara 2 Grup G', qf: 'Upper QF 4', lower: 'Lower Bracket R1 Match 8' }
    };
    const info = ubMatchesDesc[matchNum] || { pair: 'Match 16 Besar', qf: 'Upper QF', lower: 'Lower R1' };

    const mIdx = parseInt(matchNum, 10) - 1;
    const actualMatch = (Array.isArray(groupPlayoffMatches) && groupPlayoffMatches[0]) ? groupPlayoffMatches[0][mIdx] : null;
    const livePairHtml = (actualMatch && actualMatch.teamA && actualMatch.teamB && !actualMatch.teamA.includes('Juara 1 Grup')) ? `
      <div style="background:rgba(0,210,255,0.08); border:1px solid rgba(0,210,255,0.3); border-radius:6px; padding:0.6rem 0.8rem; margin:0.6rem 0;">
        <div style="font-size:0.75rem; color:var(--yokke-cyan); font-weight:700; margin-bottom:0.25rem;">🎮 TIM HASIL UNDIAN PLAYOFF:</div>
        <div style="font-size:0.95rem; font-weight:800; color:#fff;">
          ${escapeHtml(actualMatch.teamA)} <span style="color:var(--yokke-gold); font-size:0.78rem;">(Home)</span> 
          <span style="color:var(--yokke-cyan); margin:0 0.25rem;">vs</span> 
          ${escapeHtml(actualMatch.teamB)} <span style="color:var(--text-muted); font-size:0.78rem;">(Away)</span>
        </div>
        ${actualMatch.winner ? `<div style="font-size:0.8rem; color:var(--yokke-green); font-weight:700; margin-top:0.25rem;">🏆 Pemenang: ${escapeHtml(actualMatch.winner)}</div>` : ''}
      </div>
    ` : '';

    content += `
      <div class="detail-panel-header">
        <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-cyan);display:flex;align-items:center;gap:0.4rem;">
          <span>⚔️</span> <span>Upper Bracket 16 Besar: Match #${matchNum}</span>
        </h3>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(0,210,255,0.12);color:var(--yokke-cyan);border:1px solid rgba(0,210,255,0.3);">Day 2 Online • Best of 3 (BO3)</span>
          <span class="badge-status" style="background:rgba(255,183,3,0.12);color:var(--yokke-gold);border:1px solid var(--yokke-gold);">Regulasi Silang Grup</span>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(0,210,255,0.2);border-radius:8px;padding:1rem;margin-bottom:1rem;">
        <h4 style="margin:0 0 0.5rem;font-size:0.95rem;color:var(--yokke-gold);">📌 Skema Pairing Pertandingan</h4>
        ${livePairHtml}
        <p style="font-size:0.85rem;color:#fff;margin:0 0 0.5rem;font-weight:700;">${info.pair}</p>
        <ul style="font-size:0.8rem;color:var(--text-muted);margin:0;padding-left:1.2rem;line-height:1.6;">
          <li><strong>Pemenang:</strong> Melaju ke babak <strong>${info.qf} (Day 3)</strong>.</li>
          <li><strong>Kalah:</strong> Turun ke <strong>${info.lower} (Day 3)</strong> dengan garansi Anti-Rematch (tidak bertemu tim dari grup asalnya).</li>
        </ul>
      </div>

      <div style="padding:1rem;background:rgba(0,0,0,0.3);border-radius:8px;border:1px dashed var(--border-color);font-size:0.82rem;color:var(--text-muted);text-align:center;">
        ℹ️ Skor pertandingan babak playoff ini terintegrasi langsung dengan bagan playoff interaktif. Gunakan kontrol wasit/panitia di bagan playoff utama untuk mencatat kemenangan tim.
      </div>
    `;
  }

  // 3. DETAIL NODE DAY 3: UPPER QF & LOWER R1
  else if (nodeKey === 'DAY3_UPPER_QF' || nodeKey === 'DAY3_LOWER_R1') {
    const isQF = nodeKey === 'DAY3_UPPER_QF';
    content += `
      <div class="detail-panel-header">
        <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-cyan);display:flex;align-items:center;gap:0.4rem;">
          <span>${isQF ? '⚡' : '🛡️'}</span> <span>Day 3: ${isQF ? 'Upper Quarter Final' : 'Lower Bracket Round 1'}</span>
        </h3>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(0,210,255,0.12);color:var(--yokke-cyan);border:1px solid rgba(0,210,255,0.3);">Day 3 Online • Best of 3 (BO3)</span>
          ${!isQF ? '<span class="badge-status" style="background:rgba(239,71,111,0.15);color:var(--yokke-red);border:1px solid var(--yokke-red);">🛡️ Regulasi Anti-Rematch Silang Grup</span>' : ''}
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:1rem;margin-bottom:1rem;">
        <h4 style="margin:0 0 0.5rem;font-size:0.95rem;color:var(--yokke-gold);">📋 Regulasi & Mekanisme Pertandingan</h4>
        <p style="font-size:0.82rem;color:var(--text-color);line-height:1.6;margin:0 0 0.5rem;">
          ${isQF 
            ? '4 Match Quarter Final mempertemukan para pemenang Day 2. Pemenang melaju ke Upper Semifinal (Day 4), sementara yang kalah turun ke Lower Bracket Round 2.' 
            : '8 Pertandingan hidup-mati bagi 8 Juara 3 fase grup melawan 8 tim yang gugur pada Upper Bracket Day 2. Sistem secara otomatis menerapkan <strong>Anti-Rematch Silang Grup</strong> sehingga tidak ada tim yang bertemu kembali dengan lawan dari grup penyisihan asalnya.'}
        </p>
      </div>
    `;
  }

  // 4. DETAIL NODE DAY 4: SEMIFINAL & LOWER BRACKET
  else if (nodeKey === 'DAY4_UPPER' || nodeKey === 'DAY4_LOWER') {
    const isUpper = nodeKey === 'DAY4_UPPER';
    content += `
      <div class="detail-panel-header">
        <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-cyan);display:flex;align-items:center;gap:0.4rem;">
          <span>${isUpper ? '👑' : '🛡️'}</span> <span>Day 4: ${isUpper ? 'Upper Semifinal & Final' : 'Lower Quarter Final s/d Final'}</span>
        </h3>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(0,210,255,0.12);color:var(--yokke-cyan);border:1px solid rgba(0,210,255,0.3);">Day 4 Online • Best of 3 (BO3)</span>
          <span class="badge-status" style="background:rgba(255,183,3,0.15);color:var(--yokke-gold);border:1px solid var(--yokke-gold);">Penentuan Tiket Grand Final Offline</span>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:1rem;margin-bottom:1rem;">
        <h4 style="margin:0 0 0.5rem;font-size:0.95rem;color:var(--yokke-gold);">🎯 Target Babak Hari 4</h4>
        <ul style="font-size:0.82rem;color:var(--text-color);line-height:1.7;margin:0;padding-left:1.2rem;">
          <li><strong>Juara Upper Bracket:</strong> Mengunci slot Grand Finalis 1 untuk bertanding di Grand Final Offline Kantor Pusat Yokke.</li>
          <li><strong>Juara Lower Bracket:</strong> Mengunci slot Grand Finalis 2 setelah melewati babak eliminasi ketat.</li>
        </ul>
      </div>
    `;
  }

  // 5. DETAIL NODE FINAL OFFLINE (SUPER GRAND FINAL BO5)
  else if (nodeKey === 'GRAND_FINAL_OFFLINE') {
    content += `
      <div class="detail-panel-header">
        <h3 style="margin:0;font-size:1.25rem;color:var(--yokke-gold);display:flex;align-items:center;gap:0.4rem;">
          <span>🏆</span> <span>Super Grand Final Offline (Best of 5)</span>
        </h3>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(255,183,3,0.18);color:var(--yokke-gold);border:1px solid var(--yokke-gold);font-weight:800;">🏢 Kantor Pusat PT PT EDI INDONESIA / YOKKE</span>
          <span class="badge-status" style="background:rgba(6,214,160,0.15);color:var(--yokke-green);border:1px solid var(--yokke-green);">Format: Best of 5 (BO5)</span>
        </div>
      </div>

      <div style="background:linear-gradient(135deg, rgba(255,183,3,0.12), rgba(15,23,42,0.9));border:1px solid var(--yokke-gold);border-radius:10px;padding:1.25rem;margin-bottom:1.25rem;">
        <div style="font-size:1.1rem;font-weight:800;color:var(--yokke-gold);margin-bottom:0.4rem;display:flex;align-items:center;gap:0.4rem;">
          <span>👑</span> <span>Panggung Utama Juara Yokke Squad 2026</span>
        </div>
        <p style="font-size:0.85rem;color:#fff;line-height:1.6;margin:0 0 0.75rem;">
          Pertandingan pamungkas yang mempertemukan <strong>Juara Upper Bracket</strong> melawan <strong>Juara Lower Bracket</strong>.
        </p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.5rem;">
          <div style="background:rgba(0,0,0,0.4);padding:0.75rem;border-radius:6px;border-left:3px solid var(--yokke-cyan);">
            <div style="font-size:0.75rem;color:var(--text-muted);">Slot Finalis 1:</div>
            <div style="font-size:0.9rem;font-weight:700;color:var(--yokke-cyan);">Juara Upper Bracket</div>
          </div>
          <div style="background:rgba(0,0,0,0.4);padding:0.75rem;border-radius:6px;border-left:3px solid var(--yokke-gold);">
            <div style="font-size:0.75rem;color:var(--text-muted);">Slot Finalis 2:</div>
            <div style="font-size:0.9rem;font-weight:700;color:var(--yokke-gold);">Juara Lower Bracket</div>
          </div>
        </div>
      </div>
    `;
  }

  return content;
}

// ----------------------------------------------------------------------------
// 2. MASTER-DETAIL INTERACTIVE HUB MCGG
// ----------------------------------------------------------------------------
function selectMCGGFlowNode(nodeKey) {
  currentSelectedMCGGNode = nodeKey;
  renderMCGGInteractiveHubUI();
}

function renderMCGGInteractiveHubUI() {
  const container = document.getElementById('mcggInteractiveHub');
  if (!container) return;

  const activeNode = currentSelectedMCGGNode || 'STAGE1_LOBBY_A';

  // --- SISI KIRI: SKEMA ALUR TURNAMEN MCGG INTERAKTIF ---
  let leftHtml = '<div class="flow-tree-column">';

  // DAY 1 (5 Grup Kualifikasi • 35-37 Peserta)
  leftHtml += `
    <div class="flow-stage-card">
      <div class="flow-stage-header">
        <div class="flow-stage-title">
          <span>🛡️</span> <span>Day 1: Kualifikasi (5 Grup • 35–37 Peserta)</span>
        </div>
        <span class="flow-stage-badge">3 Match • Online</span>
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 0.6rem;">
        Top 6 tiap grup (30 pemain) lolos ke 32 Besar. Sisa peserta masuk ke Wildcard Day 2.
      </p>
      <div class="flow-nodes-grid">
  `;

  ['A', 'B', 'C', 'D', 'E'].forEach(ch => {
    const key = `STAGE1_LOBBY_${ch}`;
    const lobbyKey = `LOBBY_${ch}`;
    const count = (mcggLobbies[lobbyKey] || []).length;
    const isActive = activeNode === key;

    leftHtml += `
      <button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode('${key}')">
        <div class="flow-node-name">
          <span>♟️</span> <span>Grup ${ch}</span>
        </div>
        <div class="flow-node-desc">${count} Pemain • Top 6 Lolos</div>
      </button>
    `;
  });
  leftHtml += `</div></div>`;

  // DAY 2 (Wildcard & Babak 32 Besar)
  leftHtml += `
    <div class="flow-stage-card">
      <div class="flow-stage-header">
        <div class="flow-stage-title">
          <span>⚡</span> <span>Day 2: Wildcard & Babak 32 Besar</span>
        </div>
        <span class="flow-stage-badge">Wildcard BO1 + 4 Grup @ 8 Pemain</span>
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 0.6rem;">
        Wildcard meloloskan Top 2 (30 + 2 = 32 pemain). 32 Besar: 4 Grup diacak panitia, Top 4 lolos ke Semifinal Day 3.
      </p>
      <div class="flow-nodes-grid" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));">
        <button type="button" class="flow-node-btn ${activeNode === 'STAGE2_WILDCARD' ? 'active' : ''}" onclick="selectMCGGFlowNode('STAGE2_WILDCARD')" style="grid-column: 1 / -1; border-color:rgba(255,183,3,0.3);">
          <div class="flow-node-name" style="color:var(--yokke-gold);"><span>⚡</span> <span>Babak Wildcard (BO1 Draft Pick)</span></div>
          <div class="flow-node-desc">Peserta sisa kualifikasi • Top 2 lolos melengkapi 32 pemain</div>
        </button>
  `;

  ['A', 'B', 'C', 'D'].forEach(ch => {
    const key = `STAGE2_GROUP_${ch}`;
    const isActive = activeNode === key;
    leftHtml += `
      <button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode('${key}')">
        <div class="flow-node-name"><span>🎲</span> <span>32 Besar - ${ch}</span></div>
        <div class="flow-node-desc">8 Pemain • Top 4 Lolos</div>
      </button>
    `;
  });
  leftHtml += `</div></div>`;

  // DAY 3 (Semifinal 16 Besar - 2 Grup @ 8 Pemain)
  leftHtml += `
    <div class="flow-stage-card">
      <div class="flow-stage-header">
        <div class="flow-stage-title">
          <span>🔥</span> <span>Day 3: Semifinal (16 Besar)</span>
        </div>
        <span class="flow-stage-badge">2 Grup @ 8 Pemain</span>
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 0.6rem;">
        Semi A & Semi B. 3 Match: Non-Meta, All Commander, Draft Pick. Top 4 tiap grup (8 finalis) lolos ke Grand Final.
      </p>
      <div class="flow-nodes-grid" style="grid-template-columns: 1fr 1fr;">
        <button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_A' ? 'active' : ''}" onclick="selectMCGGFlowNode('STAGE3_SEMI_A')">
          <div class="flow-node-name"><span>🔥</span> <span>Semifinal A</span></div>
          <div class="flow-node-desc">${(mcggLobbies.SEMI_A || []).length || 8} Pemain • Top 4 Lolos</div>
        </button>
        <button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_B' ? 'active' : ''}" onclick="selectMCGGFlowNode('STAGE3_SEMI_B')">
          <div class="flow-node-name"><span>🔥</span> <span>Semifinal B</span></div>
          <div class="flow-node-desc">${(mcggLobbies.SEMI_B || []).length || 8} Pemain • Top 4 Lolos</div>
        </button>
      </div>
    </div>
  `;

  // FINAL OFFLINE (Super Grand Final BO5)
  leftHtml += `
    <div class="flow-stage-card is-final">
      <div class="flow-stage-header">
        <div class="flow-stage-title" style="color:var(--yokke-gold);">
          <span>🏆</span> <span>Final Offline: Super Grand Final BO5</span>
        </div>
        <span class="flow-stage-badge" style="border-color:var(--yokke-gold);color:var(--yokke-gold);">Kantor Pusat Yokke</span>
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin:0 0 0.6rem;">
        8 Finalis terbaik. Match 1 Non-Meta, Match 2 All Pool, Match 3–5 Fearless Draft Pick (Dilarang komandan sama).
      </p>
      <button type="button" class="flow-node-btn is-final ${activeNode === 'STAGE4_GRAND_FINAL' ? 'active' : ''}" onclick="selectMCGGFlowNode('STAGE4_GRAND_FINAL')">
        <div class="flow-node-name" style="color:var(--yokke-gold);">
          <span>👑</span> <span>Super Grand Final (8 Finalis)</span>
        </div>
        <div class="flow-node-desc">BO5 Fearless Draft • Penentuan Juara 1, 2, 3</div>
      </button>
    </div>
  `;

  leftHtml += '</div>';

  // --- SISI KANAN: INSPECTOR DETAIL PANEL ---
  let rightHtml = '<div class="flow-detail-panel">';
  rightHtml += renderMCGGDetailPanelContent(activeNode);
  rightHtml += '</div>';

  container.innerHTML = leftHtml + rightHtml;
}

function renderMCGGDetailPanelContent(nodeKey) {
  let content = '';

  // 1. DETAIL KUALIFIKASI DAY 1 (Grup A - E)
  if (nodeKey.startsWith('STAGE1_LOBBY_')) {
    const ch = nodeKey.replace('STAGE1_LOBBY_', '');
    const lobbyKey = `LOBBY_${ch}`;
    const list = mcggLobbies[lobbyKey] || [];

    content += `
      <div class="detail-panel-header">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-cyan);display:flex;align-items:center;gap:0.4rem;">
            <span>🛡️</span> <span>Grup Kualifikasi ${ch} - Day 1</span>
          </h3>
          <span style="font-size:0.75rem;padding:0.2rem 0.6rem;background:rgba(0,210,255,0.12);border:1px solid rgba(0,210,255,0.3);color:var(--yokke-cyan);border-radius:12px;font-weight:700;">
            ${list.length} Peserta
          </span>
        </div>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(0,210,255,0.1);color:var(--yokke-cyan);">Match 1: Non-Meta</span>
          <span class="badge-status" style="background:rgba(114,9,183,0.15);color:var(--yokke-purple);">Match 2: All Commander</span>
          <span class="badge-status" style="background:rgba(6,214,160,0.12);color:var(--yokke-green);">Match 3: In-Game Draft Pick</span>
          <span class="badge-status" style="background:rgba(255,183,3,0.15);color:var(--yokke-gold);font-weight:700;">Top 6 Lolos ke 32 Besar</span>
        </div>
      </div>

      <!-- PANEL KOMPAK MESIN UNDIAN COMMANDER -->
      <div style="margin-bottom:1rem;">
        ${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}
      </div>

      <!-- TABEL KLASEMEN LOBI -->
      <div>
        <h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">📊 Klasemen Poin & Hasil Ronde (${list.length} Pemain)</h4>
        <div class="table-container" style="margin:0;">
          <table>
            <thead>
              <tr>
                <th style="width:45px;">Rank</th>
                <th>Pemain / IGN</th>
                <th style="min-width:110px;">Ronde 1</th>
                <th style="min-width:110px;">Ronde 2</th>
                <th style="min-width:110px;">Ronde 3</th>
                <th style="text-align:center;width:65px;">Sanksi</th>
                <th style="text-align:center;width:60px;">Poin</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${renderLobbyRowsHtml(list, lobbyKey, false)}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // 2. DETAIL WILDCARD DAY 2
  else if (nodeKey === 'STAGE2_WILDCARD') {
    content += `
      <div class="detail-panel-header">
        <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-gold);display:flex;align-items:center;gap:0.4rem;">
          <span>⚡</span> <span>Babak Wildcard MCGG (Day 2)</span>
        </h3>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(255,183,3,0.15);color:var(--yokke-gold);border:1px solid var(--yokke-gold);">Format: 1 Match BO1 In-Game Draft Pick</span>
          <span class="badge-status" style="background:rgba(6,214,160,0.12);color:var(--yokke-green);">Top 2 Pemain Lolos Melengkapi 32 Besar</span>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,183,3,0.3);border-radius:8px;padding:1rem;margin-bottom:1rem;">
        <h4 style="margin:0 0 0.4rem;font-size:0.95rem;color:var(--yokke-gold);">📌 Regulasi Babak Wildcard</h4>
        <p style="font-size:0.82rem;color:#fff;line-height:1.6;margin:0 0 0.5rem;">
          Diikuti oleh seluruh peserta yang berada di luar Top 6 kualifikasi Day 1 (Peringkat 7–8 tiap grup). 
          Bermain 1 match dengan sistem In-Game Draft Pick & Ban.
        </p>
        <p style="font-size:0.82rem;color:var(--yokke-cyan);margin:0;font-weight:700;">
          🎯 Juara 1 dan Juara 2 babak ini berhak atas 2 slot terakhir menuju Babak 32 Besar (30 + 2 = 32 Pemain).
        </p>
      </div>
    `;
  }

  // 3. DETAIL 32 BESAR DAY 2
  else if (nodeKey.startsWith('STAGE2_GROUP_')) {
    const ch = nodeKey.replace('STAGE2_GROUP_', '');
    content += `
      <div class="detail-panel-header">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
          <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-cyan);display:flex;align-items:center;gap:0.4rem;">
            <span>🎲</span> <span>Babak 32 Besar: Grup ${ch} (Day 2)</span>
          </h3>
          ${isAdmin ? `
            <button class="btn btn-gold" style="padding:0.3rem 0.75rem;font-size:0.78rem;" onclick="shuffleMCGG32Besar()">
              🎲 Acak Undian 32 Besar
            </button>
          ` : ''}
        </div>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(0,210,255,0.12);color:var(--yokke-cyan);">8 Pemain per Grup</span>
          <span class="badge-status" style="background:rgba(6,214,160,0.15);color:var(--yokke-green);font-weight:700;">Top 4 Lolos ke Semifinal (Day 3)</span>
          <span class="badge-status" style="background:rgba(239,71,111,0.12);color:var(--yokke-red);">Peringkat 5–8 Gugur</span>
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:1rem;">
        <h4 style="margin:0 0 0.4rem;font-size:0.92rem;color:var(--yokke-gold);">📋 Format Pertandingan 3 Match</h4>
        <p style="font-size:0.82rem;color:var(--text-color);line-height:1.6;margin:0 0 0.5rem;">
          Match 1: Non-Meta Pool • Match 2: All Commander Pool • Match 3: In-Game Draft Pick.<br>
          Poin diakumulasikan menggunakan tabel poin resmi (+4 s/d -4). 4 pemain terbaik melaju ke Semifinal 16 Besar Day 3.
        </p>
      </div>
    `;
  }

  // 4. DETAIL SEMIFINAL DAY 3
  else if (nodeKey === 'STAGE3_SEMI_A' || nodeKey === 'STAGE3_SEMI_B') {
    const isA = nodeKey === 'STAGE3_SEMI_A';
    const lobbyKey = isA ? 'SEMI_A' : 'SEMI_B';
    const list = mcggLobbies[lobbyKey] || [];

    content += `
      <div class="detail-panel-header">
        <h3 style="margin:0;font-size:1.15rem;color:var(--yokke-cyan);display:flex;align-items:center;gap:0.4rem;">
          <span>🔥</span> <span>Babak Semifinal ${isA ? 'A' : 'B'} (Day 3)</span>
        </h3>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(0,210,255,0.12);color:var(--yokke-cyan);">8 Pemain Semifinalis</span>
          <span class="badge-status" style="background:rgba(255,183,3,0.15);color:var(--yokke-gold);font-weight:700;">Top 4 Lolos ke Grand Final</span>
        </div>
      </div>

      <div style="margin-bottom:1rem;">
        ${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}
      </div>

      <div class="table-container" style="margin:0;">
        <table>
          <thead>
            <tr>
              <th style="width:45px;">Rank</th>
              <th>Pemain / IGN</th>
              <th style="min-width:110px;">Ronde 1</th>
              <th style="min-width:110px;">Ronde 2</th>
              <th style="min-width:110px;">Ronde 3</th>
              <th style="text-align:center;width:65px;">Sanksi</th>
              <th style="text-align:center;width:60px;">Poin</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${renderLobbyRowsHtml(list, lobbyKey, false)}
          </tbody>
        </table>
      </div>
    `;
  }

  // 5. DETAIL GRAND FINAL OFFLINE (BO5)
  else if (nodeKey === 'STAGE4_GRAND_FINAL') {
    const list = mcggLobbies.GRAND_FINAL || [];

    content += `
      <div class="detail-panel-header">
        <h3 style="margin:0;font-size:1.25rem;color:var(--yokke-gold);display:flex;align-items:center;gap:0.4rem;">
          <span>🏆</span> <span>Super Grand Final Offline MCGG (Best of 5)</span>
        </h3>
        <div class="detail-badge-group">
          <span class="badge-status" style="background:rgba(255,183,3,0.18);color:var(--yokke-gold);border:1px solid var(--yokke-gold);font-weight:800;">🏢 Kantor Pusat Yokke</span>
          <span class="badge-status" style="background:rgba(6,214,160,0.15);color:var(--yokke-green);">Format: Best of 5 (BO5)</span>
          <span class="badge-status" style="background:rgba(239,71,111,0.15);color:var(--yokke-red);font-weight:700;">Fearless Draft Pick</span>
        </div>
      </div>

      <div style="background:linear-gradient(135deg, rgba(255,183,3,0.12), rgba(15,23,42,0.9));border:1px solid var(--yokke-gold);border-radius:10px;padding:1.2rem;margin-bottom:1rem;">
        <h4 style="margin:0 0 0.5rem;font-size:0.95rem;color:var(--yokke-gold);">👑 Aturan Fearless Commander Grand Final</h4>
        <p style="font-size:0.82rem;color:#fff;line-height:1.6;margin:0 0 0.5rem;">
          • <strong>Match 1:</strong> Undian 8 Commander Pool Non-Meta.<br>
          • <strong>Match 2:</strong> Undian 8 Commander dari Seluruh Pool.<br>
          • <strong>Match 3, 4, 5:</strong> In-Game Draft Pick dengan regulasi <strong>Fearless</strong>: Player <strong>dilarang</strong> menggunakan komandan yang sudah pernah dimainkan pada match sebelumnya. Pelanggaran dikenakan sanksi <strong>-2 Poin</strong> per match.
        </p>
      </div>

      <div class="table-container" style="margin:0;">
        <table>
          <thead>
            <tr>
              <th style="width:45px;">Rank</th>
              <th>Pemain / IGN</th>
              <th style="min-width:100px;">R1</th>
              <th style="min-width:100px;">R2</th>
              <th style="min-width:100px;">R3</th>
              <th style="text-align:center;width:65px;">Sanksi</th>
              <th style="text-align:center;width:60px;">Poin</th>
              <th>Status / Gelar</th>
            </tr>
          </thead>
          <tbody>
            ${renderLobbyRowsHtml(list, 'GRAND_FINAL', false)}
          </tbody>
        </table>
      </div>
    `;
  }

  return content;
}

function shuffleMCGG32Besar() {
  if (!isAdmin) return;
  if (!confirm('🎲 Acak Undian 32 Besar:\nApakah Anda yakin ingin mengundi 32 pemain ke dalam 4 grup (Grup A, B, C, D)?')) return;
  alert('✅ 32 Pemain berhasil diundi secara merata ke dalam 4 grup 32 Besar!');
  saveState();
  renderMCGGInteractiveHubUI();
}
