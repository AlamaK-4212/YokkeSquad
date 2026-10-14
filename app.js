let currentAdminPin = localStorage.getItem('yokke_admin_pin') || "YOKKE2026_";
const ADMIN_PIN = "YOKKE2026_";
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwwyjlegjl-SAyTdjyNecB76j0wmtwdh9hFTYILSYl44OTpsgpGBTAmVnHpDTpBZtOV4A/exec";

let isAdmin = sessionStorage.getItem('yokke_is_admin') === 'true';

// Data State
const DATA_VERSION = '2026-10-13-v5-sanitized';

const DEFAULT_PARTICIPANTS = [];

function getInitialParticipants() {
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

// Tournament Format State: KNOCKOUT | GROUP_2 | GROUP_4
let tournamentFormat = localStorage.getItem('yokke_mlbb_format') || 'KNOCKOUT';
let groupStageData = JSON.parse(localStorage.getItem('yokke_group_data') || '{}');
let groupPlayoffMatches = [];

// MCGG Multi-Lobby State
let currentMCGGLobby = 'LOBBY_A';
let mcggLobbies = JSON.parse(localStorage.getItem('yokke_mcgg_lobbies') || JSON.stringify({
  LOBBY_A: [],
  LOBBY_B: [],
  GRAND_FINAL: []
}));

const POINT_TABLE = { 1: 4, 2: 3, 3: 2, 4: 1, 5: -1, 6: -2, 7: -3, 8: -4 };

// Master Data 25 Little Commanders MCGG (dengan Foto Lokal & Kategori S7)
const MCGG_COMMANDERS = [
  // 8 Preset Non-Meta Season 7
  { id: 'abe', name: 'Abe', image: 'assets/commanders/abe.png', isPresetS7: true, title: 'Kungfu Expert' },
  { id: 'yuki', name: 'Yuki', image: 'assets/commanders/yuki.png', isPresetS7: true, title: 'Snow Witch' },
  { id: 'eva', name: 'Eva', image: 'assets/commanders/eva.png', isPresetS7: true, title: 'Mysterious Deer' },
  { id: 'mavis', name: 'Mavis', image: 'assets/commanders/mavis.png', isPresetS7: true, title: 'Vampire Countess' },
  { id: 'kaboom', name: 'Kaboom', image: 'assets/commanders/kaboom.png', isPresetS7: true, title: 'Ultra Guardian' },
  { id: 'dubi', name: 'Dubi', image: 'assets/commanders/dubi.png', isPresetS7: true, title: 'Jolly Sprite' },
  { id: 'buss', name: 'Buss', image: 'assets/commanders/buss.png', isPresetS7: true, title: 'Meowgician' },
  { id: 'pao', name: 'Pao', image: 'assets/commanders/pao.png', isPresetS7: true, title: 'Naughty Dragonling' },

  // Pool Commander Lainnya
  { id: 'harper', name: 'Harper', image: 'assets/commanders/harper.png', isPresetS7: false, title: 'Courageous Shield' },
  { id: 'ragnar', name: 'Ragnar', image: 'assets/commanders/ragnar.png', isPresetS7: false, title: 'Berserker' },
  { id: 'remy', name: 'Remy', image: 'assets/commanders/remy.png', isPresetS7: false, title: 'Fortune Cat' },
  { id: 'benny', name: 'Benny', image: 'assets/commanders/benny.png', isPresetS7: false, title: 'Stealth Hunter' },
  { id: 'eggie', name: 'Eggie', image: 'assets/commanders/eggie.png', isPresetS7: false, title: 'Little Scientist' },
  { id: 'connie', name: 'Connie', image: 'assets/commanders/connie.png', isPresetS7: false, title: 'Fairy of Blessings' },
  { id: 'tharz', name: 'Tharz', image: 'assets/commanders/tharz.png', isPresetS7: false, title: 'Gluttonous Demon' },
  { id: 'rya', name: 'Rya', image: 'assets/commanders/rya.png', isPresetS7: false, title: 'Night Fairy' },
  { id: 'brown', name: 'Brown', image: 'assets/commanders/brown.png', isPresetS7: false, title: 'Blacksmith' },
  { id: 'austus', name: 'Austus', image: 'assets/commanders/austus.png', isPresetS7: false, title: 'Totem Shaman' },
  { id: 'chou', name: 'Chou', image: 'assets/commanders/chou.png', isPresetS7: false, title: 'Kung Fu Boy' },
  { id: 'layla', name: 'Layla', image: 'assets/commanders/layla.png', isPresetS7: false, title: 'Cannon Girl' },
  { id: 'ling', name: 'Ling', image: 'assets/commanders/ling.png', isPresetS7: false, title: 'Cyan Finch' },
  { id: 'fanny', name: 'Fanny', image: 'assets/commanders/fanny.png', isPresetS7: false, title: 'Blade Dancer' },
  { id: 'vale', name: 'Vale', image: 'assets/commanders/vale.png', isPresetS7: false, title: 'Windtalker' },
  { id: 'gord', name: 'Gord', image: 'assets/commanders/gord.png', isPresetS7: false, title: 'Mystic Magician' },
  { id: 'wanwan', name: 'Wanwan', image: 'assets/commanders/wanwan.png', isPresetS7: false, title: 'Agile Tiger' }
];

// State Hasil Undian Commander Per Lobi
let mcggDrawState = JSON.parse(localStorage.getItem('yokke_commander_draw') || '{}');
let lastCommanderDrawMatch = 1;

// Default Rules Sesuai Regulasi Resmi YMC S4 2026
const DEFAULT_RULES_MLBB = `KETENTUAN PESERTA MLBB:
1. Player wajib pegawai MTI (min. bekerja 6 bulan sebagai pegawai MTI).
2. Menunjukkan ID Card Pegawai Yokke (bukti fisik), atau e-Money Pegawai Yokke, atau surat keterangan atasan jika ID Card hilang (Surat keterangan dari atasan jika yang bersangkutan benar merupakan pegawai aktif).
3. Anggota tim yang telah didaftarkan tidak dapat diganti pada saat waktu pendaftaran telah ditutup.
4. Menyertakan Nama Lengkap, Nickname, dan ID Game seluruh pemain saat pendaftaran.
5. 1 (satu) Tim terdiri dari 8 (delapan) pemain (5 Inti + 3 Cadangan) + 2 (dua) Official (1 wajib, 1 opsional).
6. Tidak ada maksimal dalam mendaftarkan tim dan tidak ada batasan 1 tim harus dari 1 Divisi/Unit (lintas divisi diperbolehkan).
7. Untuk Official MLBB tidak diperkenankan mendaftar menjadi pemain MLBB.

KETENTUAN PERTANDINGAN MLBB:
1. Komposisi Roster Resmi: 2 Official/Manager + 8 Pemain (5 Pemain Inti + 3 Cadangan). Wajib memenuhi kuota komposisi internal Yokke.
2. Format Turnamen Resmi: Turnamen menggunakan sistem 2 tahap — Babak Fase Grup (Group Stage) terlebih dahulu, kemudian tim pemuncak klasemen melaju ke Bagan Turnamen Playoff (Knockout Stage, Semifinal Upper Lower, Final Upper Lower & Grand Final).
3. Sistem Pertandingan:
   - Babak Fase Grup: Pertandingan Best of 3 (BO3).
   - Babak Knockout Stage: Best of 3 (BO3).
   - Babak Semifinal Upper and Lower: Best of 3 (BO3).
   - Babak Final Upper and Lower: Best of 5 (BO5).
   - Babak Grand Final: Best of 5 (BO5).
4. Penentuan Poin Grup: Tim menang memperoleh 2 poin, tim kalah memperoleh 0 poin. Peringkat 1 & 2 dari tiap grup berhak melaju ke Upper Bracket. Peringkat 3 dari tiap grup berhak melaju ke Lower Bracket.
5. Dikarenakan koneksi jaringan internet merupakan tanggung jawab masing-masing peserta, setiap tim tidak bisa mengajukan pause.
6. Pada tampilan on Cam, seluruh pemain wajib memperlihatkan wajah dengan jelas, posisi handphone/device harus terlihat, serta menggunakan posisi Camera ZoomOut yang dapat memperlihatkan kondisi sekeliling dari 5 pemain. Pastikan device untuk on Cam dan device untuk tanding berbeda.
7. Tim dilarang mengganti pemain yang sudah terdaftar, termasuk pemain cadangan selama turnamen berlangsung.
8. Dikarenakan tidak diperbolehkan untuk pause, jika terjadi pelanggaran di dalam ingame harap melakukan screenshot dan berikan kepada panitia evidence tersebut setelah pertandingan berakhir agar panitia melakukan tinjauan.
9. Pembagian tim yang bertanding akan dilakukan pada saat Technical Meeting.
10. Setelah pertandingan, Kapten Tim dari tim yang menang WAJIB screenshot Hasil Match dan Detail (tidak boleh menutup Hero, Item, nama akun, dan nilai pertandingan).
11. Seluruh tim wajib mengikuti jadwal pertandingan yang telah ditetapkan oleh panitia.

DO AND DON'T YMC S4 2026:
Do:
✅ Peserta WAJIB on camera pada room Discord yang sudah ditentukan panitia saat pertandingan.
✅ Seluruh pemain WAJIB terlihat dan device handphone yang digunakan pada saat on camera dan saat pertandingan berlangsung.
✅ Wajib menggunakan akun yang sudah didaftarkan pada saat registrasi.
✅ Wajib menunjukkan ID card Yokke (fisik bukan foto) dan ID game pada saat verifikasi pemain sebelum bertanding. Jika ID card Yokke (fisik berwarna putih biru) hilang, diperbolehkan menggunakan e-Money Yokke bergambar pegawai (fisik).
✅ Tim yang sudah mendaftar wajib join Discord (untuk on cam pada saat tanding) dan grup WhatsApp (untuk informasi pertandingan).
✅ Diperbolehkan melakukan recall-recall/taunting/emote-emote pada saat bertanding.
✅ Diperbolehkan menggunakan skin apapun.
✅ Apabila melakukan selebrasi pada saat menang, harap melakukan selebrasi tanpa menggunakan gesture SARA.
✅ WAJIB unmute voice di Discord pada saat verifikasi player dan wajib mute Discord pada saat bertanding.
✅ WAJIB melakukan screenshot hasil pertandingan bagi tim yang menang dengan ketentuan Hero harus terlihat, Item terlihat, ID player terlihat dan skor terlihat.
✅ WAJIB melakukan verifikasi tim 10 menit sebelum jadwal pertandingan berlangsung.

Don't:
⚠️ Jika player mematikan camera pada saat bertanding, wasit/panitia berhak memberhentikan pertandingan dan memberikan peringatan untuk segera menghidupkan camera. Jika player mematikan camera kembali baik sengaja maupun tidak sengaja, tim tersebut akan dianggap kalah di match tersebut.
⚠️ Jika ada player dari suatu tim menggunakan akun yang tidak sesuai dengan akun yang didaftarkan pada saat registrasi, tim tersebut akan langsung didiskualifikasi.
⚠️ Apabila ada tim yang ketahuan menggunakan joki atau menggunakan cheat, tim tersebut akan langsung didiskualifikasi & blacklist.
⚠️ Apabila ID card Yokke (putih biru) dan e-Money Yokke bergambar pegawai hilang, harap membuat surat keterangan dari atasan player terkait yang menyatakan yang bersangkutan masih aktif sebagai pegawai Yokke (Nama lengkap, NIP, tanggal join MTI, asal Divisi/Unit dan status karyawan organik/insource/outsource). Dokumen dikirimkan ke grup WhatsApp agar bisa di-crosscheck oleh panitia.
⚠️ Dilarang Chat All. Apabila ketahuan ada tim yang Chat All akan diberikan 1x peringatan oleh WASIT. Jika melakukannya kembali, maka tim tersebut akan dianggap kalah di match tersebut. Jika pada kesempatan match berikutnya masih melanggar, langsung dianggap kalah tanpa peringatan.
⚠️ Jika terdapat tim yang melakukan selebrasi on cam dengan gesture SARA, kemenangan akan dicabut dan tim tersebut dianggap kalah di match tersebut.
⚠️ Tidak ada pengulangan draft pick apapun yang terjadi.
⚠️ Dilarang melakukan sensor apapun pada screenshot hasil pertandingan.
⚠️ Apabila melakukan verifikasi lewat dari 10 menit sebelum pertandingan, tim yang telat akan dianggap kalah di match pertama.`;

const DEFAULT_RULES_MCGG = `1. KETENTUAN UMUM & VERIFIKASI
- Seluruh peserta wajib melakukan verifikasi identitas dengan memperlihatkan ID Card Yokke fisik kepada panitia sebelum pertandingan dimulai.
- Peserta wajib hadir di lobby 10 menit sebelum jadwal pertandingan. Toleransi keterlambatan maksimal 10 menit (lewat dari itu dianggap gugur/peringkat 8 pada match tersebut).
- Masalah teknis (koneksi internet, device, lag) merupakan tanggung jawab penuh masing-masing peserta.

2. FORMAT PERTANDINGAN & SISTEM GRUP
- Sistem Grup: Terdiri dari 8 Player per grup.
- Format Babak: Bermain dalam format BO3 / BO5 (sesuai tahap babak).
- Kualifikasi: 4 Player dengan akumulasi poin tertinggi di akhir BO3/BO5 akan lolos ke babak berikutnya dan diadu dengan 4 player dari grup sebelahnya. 4 player sisanya dinyatakan gugur.

3. SISTEM PEROLEHAN POIN MATCH
Dalam setiap match, perolehan poin ditentukan berdasarkan posisi akhir placement:
- Juara 1 : +4 Poin
- Juara 2 : +3 Poin
- Juara 3 : +2 Poin
- Juara 4 : +1 Poin
- Peringkat 5 : -1 Poin
- Peringkat 6 : -2 Poin
- Peringkat 7 : -3 Poin
- Peringkat 8 : -4 Poin

4. REGULASI COMMANDER (SKENARIO PILIHAN PANITIA)
Sebelum pertandingan dimulai, panitia akan menetapkan 3 Skenario Commander berikut:
- MATCH 1 (Preset Non-Meta Season 7):
  Panitia telah menentukan 8 Commander non-meta khusus Season 7: [Abe, Yuki, Eva, Mavis, Kaboom, Dubi, Buss, Pao]. Setiap player akan mendapatkan 1 Commander dari daftar ini melalui sistem undian sebelum match dimulai.
- MATCH 2 (Random All Commanders):
  Panitia mengundi secara acak 8 Commander dari seluruh pool Commander MCGG yang ada. Setelah 8 Commander terpilih, dilakukan pengundian untuk menentukan Commander yang harus dipakai oleh masing-masing player.
- MATCH 3 (Draft Pick & Ban System):
  Sistem Draft Pick diaktifkan di dalam game. Setiap lobby diberikan kesempatan melakukan sistem Banning Commander sebelum fase pemilihan.

5. SANKSI PELANGGARAN COMMANDER & IN-GAME
- Khusus pada Skenario 1 dan Skenario 2: Jika seorang player terbukti TIDAK menggunakan Commander hasil undian yang sudah ditentukan panitia, maka player tersebut akan dikenakan Sanksi Pengurangan 2 Poin (-2 Poin) pada match tersebut.
- Dilarang melakukan Chat All / Voice All: Apabila terbukti melakukan Chat All / Voice All sebanyak 1 kali akan diberikan warning dari wasit. Jika melakukan kembali untuk kedua kalinya, player tersebut akan diberikan punishment -10 Poin untuk match tersebut.

6. PELAPORAN HASIL MATCH
- Setiap akhir match, peringkat 4 besar wajib mendokumentasikan (Screenshot) hasil akhir placement dan mengirimkannya ke grup koordinasi panitia.

7. KETENTUAN TIE-BREAKER DAN PENENTUAN KELULUSAN
Apabila terdapat dua atau lebih player dengan total poin yang sama pada batas kelolosan, penentuan peringkat dilakukan berdasarkan urutan kriteria:
1. Jumlah Placement 4 besar terbanyak selama BO3/BO5.
2. Kepatuhan Commander: Jumlah poin yang didapat dengan mengikuti semua ketentuan commander memiliki hak lebih tinggi dalam peringkat.
3. Peringkat tertinggi pada setiap match (banyaknya Juara 1 > Juara 2, dst).
4. Tie-Breaker Match (BO1): Apabila masih sama persis, diadakan match penentu BO1 dengan commander bebas/andalan.
5. Seluruh keputusan mengenai tie-breaker dan penentuan kelolosan ditetapkan oleh panitia berdasarkan data hasil pertandingan yang terdokumentasi.

8. PAIRING BABAK BERIKUTNYA
- 4 player terbaik dari tiap grup di-pairing silang (cross-group) ke babak berikutnya (Grup A & B ➔ Grup E & F) untuk menghindari pertemuan ulang dari grup yang sama.

9. DO AND DON'T MCGG:
DO:
- Diperbolehkan menggunakan emote dan sticker.
- Diperbolehkan menggunakan skin commander.
DON'T:
- Dilarang Chat All & Voice All in game (-10 poin jika melanggar).`;

let customRules = JSON.parse(localStorage.getItem('yokke_custom_rules') || JSON.stringify({
  mlbb: DEFAULT_RULES_MLBB,
  mcgg: DEFAULT_RULES_MCGG
}));

// Client-side image compressor: compresses smartphone photos to clean ~80-120KB JPEG
function compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.8) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
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
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
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

  try {
    const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'GET',
      mode: 'cors'
    });
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
      const activeSheetParticipants = isPure ? data.participants : data.participants.filter(sheetItem => {
        const rowKey = sheetItem.rowIndex ? `${sheetItem.category}_row_${sheetItem.rowIndex}` : null;
        const idKey = sheetItem.id ? `${sheetItem.category}_id_${sheetItem.id}` : null;
        const nameKey = `${sheetItem.category}_${(sheetItem.name || '').trim().toLowerCase()}`;
        return !deletedList.includes(rowKey) && !deletedList.includes(idKey) && !deletedList.includes(nameKey);
      });

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
        const finalStatus = (localItem && localItem.status && localItem.status !== 'PENDING') 
          ? localItem.status 
          : (sheetItem.status || (localItem ? localItem.status : '') || (defaultItem ? defaultItem.status : '') || 'PENDING');

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
        if (data.config.groupStageData && Object.keys(data.config.groupStageData).length > 0) {
          groupStageData = data.config.groupStageData;
          localStorage.setItem('yokke_group_data', JSON.stringify(groupStageData));
        }
        if (data.config.mcggLobbies && Object.keys(data.config.mcggLobbies).length > 0) {
          mcggLobbies = data.config.mcggLobbies;
          localStorage.setItem('yokke_mcgg_lobbies', JSON.stringify(mcggLobbies));
          renderMCGGTable();
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
    console.warn('Gagal fetch data dari Google Sheets:', err);
    if (!isSilent) {
      alert('⚠️ Gagal mengambil data dari Google Sheets.');
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
  ['LOBBY_A', 'LOBBY_B', 'GRAND_FINAL'].forEach(lobKey => {
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

  try {
    // Kirim pembaruan setiap peserta yang memiliki status atau edit lokal
    const updatePromises = participants.map(p => {
      const activeNickname = (p.category === 'MCGG')
        ? (p.nickname || (p.roster && p.roster[0] ? p.roster[0].nickname : ''))
        : (p.captainNickname || '');
      const activeGameId = (p.category === 'MCGG')
        ? (p.gameId || (p.roster && p.roster[0] ? p.roster[0].gameId : ''))
        : '';
      const activeEmpId = (p.category === 'MCGG')
        ? (p.empId || (p.roster && p.roster[0] ? p.roster[0].empId : ''))
        : '';

      return fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
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
        })
      }).catch(err => console.warn(`Gagal sync ${p.name}:`, err));
    });

    // Simpan juga Konfigurasi Turnamen, Peraturan & Bagan Skor ke Google Sheets
    const configPromise = fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'SAVE_CONFIG',
        customRules: customRules,
        tournamentFormat: tournamentFormat,
        groupStageData: groupStageData,
        mcggLobbies: mcggLobbies,
        adminPassword: currentAdminPin
      })
    }).catch(err => console.warn('Gagal sync config ke Google Sheets:', err));

    await Promise.all([...updatePromises, configPromise]);
    alert('✅ Seluruh perubahan data, status, peraturan, serta Sheet List Bagan, List Point, dan List Point & Commander MCGG berhasil diperbarui di Google Sheets!');
  } catch (err) {
    console.warn('Gagal menyimpan perubahan ke Google Sheets:', err);
    alert('⚠️ Terjadi kendala saat menyimpan ke Google Sheets, namun data lokal Anda tetap aman tersimpan.');
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
    const res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'CREATE_TOURNAMENT_SHEETS',
        groupStageData: groupStageData,
        mcggLobbies: mcggLobbies,
        customRules: customRules,
        tournamentFormat: tournamentFormat,
        adminPassword: currentAdminPin
      })
    });
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
  localStorage.setItem('yokke_mcgg_lobbies', JSON.stringify(mcggLobbies));
  localStorage.setItem('yokke_mlbb_format', tournamentFormat);
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

// Rules System
function renderRules() {
  const mlbbBox = document.getElementById('displayMLBBRules');
  const mcggBox = document.getElementById('displayMCGGRules');
  if (!mlbbBox || !mcggBox) return;

  mlbbBox.innerHTML = customRules.mlbb.split('\n').filter(l => l.trim()).map(l => `<p style="margin-bottom:0.6rem;">${l}</p>`).join('');
  mcggBox.innerHTML = customRules.mcgg.split('\n').filter(l => l.trim()).map(l => `<p style="margin-bottom:0.6rem;">${l}</p>`).join('');

  document.getElementById('rulesMLBBInput').value = customRules.mlbb;
  document.getElementById('rulesMCGGInput').value = customRules.mcgg;
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
    fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'SAVE_CONFIG',
        customRules: customRules
      })
    }).catch(e => console.warn('Gagal sync peraturan ke Sheets:', e));
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
    uploadedLogoBase64 = await compressImage(file, 250, 250, 0.85);
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
    const compressed = await compressImage(file, 900, 900, 0.8);
    if (target === 'off1') regOfficialIdCards.off1 = compressed;
    else if (target === 'off2') regOfficialIdCards.off2 = compressed;
    else if (target === 'mcgg') regMcggIdCard = compressed;

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
    const compressed = await compressImage(file, 900, 900, 0.8);
    regPlayersIdCards[playerIdx] = compressed;
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

function updateAuthUI() {
  const indicator = document.getElementById('roleIndicator');
  const authActions = document.getElementById('authActions');
  const adminCols = document.querySelectorAll('.admin-col');
  const adminBatch = document.getElementById('adminBatchActions');
  const adminBracket = document.getElementById('adminBracketControls');
  const adminSync = document.getElementById('adminSyncMCGG');
  const adminRules = document.getElementById('adminRulesBtnBox');

  if (isAdmin) {
    indicator.className = 'role-badge role-admin';
    indicator.innerHTML = '🛡️ Mode Panitia (Akses Penuh)';
    authActions.innerHTML = '<button class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;" onclick="logoutAdmin()">🚪 Logout</button>';
    adminCols.forEach(col => col.style.display = '');
    if (adminBatch) adminBatch.style.display = 'flex';
    if (adminBracket) adminBracket.style.display = 'flex';
    if (adminSync) adminSync.style.display = 'inline-flex';
    if (adminRules) adminRules.style.display = 'flex';
  } else {
    indicator.className = 'role-badge role-guest';
    indicator.innerHTML = '👀 Mode Peserta (Lihat Saja)';
    authActions.innerHTML = '<button class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;" onclick="openLoginModal()">🔑 Login Panitia</button>';
    adminCols.forEach(col => col.style.display = 'none');
    if (adminBatch) adminBatch.style.display = 'none';
    if (adminBracket) adminBracket.style.display = 'none';
    if (adminSync) adminSync.style.display = 'none';
    if (adminRules) adminRules.style.display = 'none';
    document.getElementById('rulesEditForm').style.display = 'none';
  }
}

// Navigation Tabs
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

  document.getElementById('tab-' + tabId).classList.add('active');
  event.target.classList.add('active');

  if (tabId === 'bagan-mlbb') {
    renderCurrentMLBBFormat();
  } else if (tabId === 'points-mcgg') {
    renderMCGGTable();
  } else if (tabId === 'rules') {
    renderRules();
  }
}

// Lightbox for Viewing Full ID Card
function openIdCardLightbox(imgSrc, title, driveUrl = '') {
  const modal = document.getElementById('idCardLightboxModal');
  const container = document.getElementById('lightboxImageContainer');
  const titleEl = document.getElementById('lightboxTitle');

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

// Sinkronkan Datalist Nama Tim / Pemain untuk Fitur Update Cepat di Formulir Pendaftaran
function updateRegistrationDatalists() {
  const mlbbDatalist = document.getElementById('registeredTeamsDatalist');
  const mcggDatalist = document.getElementById('registeredMcggDatalist');

  if (mlbbDatalist) {
    const mlbbTeams = participants
      .filter(p => p.category === 'MLBB' && p.name && p.name.trim() !== '')
      .map(p => p.name.trim());
    const uniqueTeams = [...new Set(mlbbTeams)];
    mlbbDatalist.innerHTML = uniqueTeams.map(name => `<option value="${escapeHtml(name)}">`).join('');
  }

  if (mcggDatalist) {
    const mcggPlayers = participants
      .filter(p => p.category === 'MCGG' && p.name && p.name.trim() !== '')
      .map(p => p.name.trim());
    const uniquePlayers = [...new Set(mcggPlayers)];
    mcggDatalist.innerHTML = uniquePlayers.map(name => `<option value="${escapeHtml(name)}">`).join('');
  }
}

// Handler saat Peserta Mengetik / Memilih Nama Tim MLBB di Form Pendaftaran
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
      noticeEl.innerHTML = `🔄 <strong>Mode Pembaruan Data:</strong> Tim "<strong>${escapeHtml(existing.name)}</strong>" sudah terdaftar. Form terisi otomatis dan klik <em>"Kirim Pendaftaran"</em> akan memperbarui data tim ini (1 Tim = 1 Record).`;
    }

    // Pre-fill form fields
    const deptInput = document.getElementById('teamDept');
    if (deptInput) deptInput.value = existing.dept || '';

    const waInput = document.getElementById('contactWa');
    if (waInput) waInput.value = existing.wa || '';

    // Logo preview
    const teamLogo = existing.logo || findLogoByTeamName(existing.name);
    if (teamLogo) {
      uploadedLogoBase64 = teamLogo;
      const logoBox = document.getElementById('logoPreviewBox');
      if (logoBox) {
        logoBox.innerHTML = `<img src="${formatDriveImageUrl(teamLogo)}" alt="Logo ${escapeHtml(existing.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`;
      }
    }

    // Roster pre-fill
    const roster = existing.roster || [];
    const off1 = roster.find(m => (m.role || '').indexOf('Official 1') !== -1) ||
                 roster.find(m => (m.role || '').indexOf('Official') !== -1) ||
                 existing.official;
    if (off1) {
      const off1Name = document.getElementById('off1_name');
      const off1Emp = document.getElementById('off1_empid');
      const off1Nick = document.getElementById('off1_nickname');
      const off1Game = document.getElementById('off1_gameid');
      const off1Org = document.getElementById('off1_organik');

      if (off1Name) off1Name.value = off1.name || '';
      if (off1Emp) off1Emp.value = off1.empId || '';
      if (off1Nick) off1Nick.value = (off1.nickname && off1.nickname !== '-') ? off1.nickname : '';
      if (off1Game) off1Game.value = (off1.gameId && off1.gameId !== '-') ? off1.gameId : '';
      if (off1Org && off1.isOrganik !== undefined) off1Org.checked = off1.isOrganik;

      const off1Card = off1.idCard || findIdCardByEmpIdOrName(off1.empId, off1.name);
      if (off1Card) {
        regOfficialIdCards.off1 = off1Card;
        const off1Prev = document.getElementById('off1_idcard_preview');
        if (off1Prev) {
          off1Prev.innerHTML = `<img src="${formatDriveImageUrl(off1Card)}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`;
        }
      }
    }

    const off2 = roster.find(m => (m.role || '').indexOf('Official 2') !== -1) || existing.official2;
    const hasOff2Cb = document.getElementById('has_official_2');
    if (off2 && off2.name) {
      if (hasOff2Cb) {
        hasOff2Cb.checked = true;
        toggleOfficial2Form();
      }
      const off2Name = document.getElementById('off2_name');
      const off2Emp = document.getElementById('off2_empid');
      const off2Nick = document.getElementById('off2_nickname');
      const off2Game = document.getElementById('off2_gameid');
      const off2Org = document.getElementById('off2_organik');

      if (off2Name) off2Name.value = off2.name || '';
      if (off2Emp) off2Emp.value = off2.empId || '';
      if (off2Nick) off2Nick.value = (off2.nickname && off2.nickname !== '-') ? off2.nickname : '';
      if (off2Game) off2Game.value = (off2.gameId && off2.gameId !== '-') ? off2.gameId : '';
      if (off2Org && off2.isOrganik !== undefined) off2Org.checked = off2.isOrganik;

      const off2Card = off2.idCard || findIdCardByEmpIdOrName(off2.empId, off2.name);
      if (off2Card) {
        regOfficialIdCards.off2 = off2Card;
        const off2Prev = document.getElementById('off2_idcard_preview');
        if (off2Prev) {
          off2Prev.innerHTML = `<img src="${formatDriveImageUrl(off2Card)}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`;
        }
      }
    } else if (hasOff2Cb) {
      hasOff2Cb.checked = false;
      toggleOfficial2Form();
    }

    // Players 1 to 8
    const players = roster.filter(m => (m.role || '').indexOf('Official') === -1);
    for (let i = 1; i <= 8; i++) {
      const p = players[i - 1];
      const pName = document.getElementById(`p${i}_name`);
      const pEmp = document.getElementById(`p${i}_empid`);
      const pNick = document.getElementById(`p${i}_nickname`);
      const pGame = document.getElementById(`p${i}_gameid`);
      const pOrg = document.getElementById(`p${i}_organik`);
      const pPrev = document.getElementById(`p${i}_idcard_preview`);

      if (p) {
        if (pName) pName.value = p.name || '';
        if (pEmp) pEmp.value = p.empId || '';
        if (pNick) pNick.value = (p.nickname && p.nickname !== '-') ? p.nickname : '';
        if (pGame) pGame.value = (p.gameId && p.gameId !== '-') ? p.gameId : '';
        if (pOrg && p.isOrganik !== undefined) pOrg.checked = p.isOrganik;

        if (p.isCaptain || (existing.captainName && p.name && existing.captainName.toLowerCase() === p.name.toLowerCase())) {
          const rad = document.querySelector(`input[name="captain_select"][value="${i}"]`);
          if (rad) rad.checked = true;
        }

        const pCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name);
        if (pCard) {
          regPlayersIdCards[i] = pCard;
          if (pPrev) pPrev.innerHTML = `<img src="${formatDriveImageUrl(pCard)}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`;
        }
      } else if (i > 5) {
        if (pName) pName.value = '';
        if (pEmp) pEmp.value = '';
        if (pNick) pNick.value = '';
        if (pGame) pGame.value = '';
        if (pPrev) pPrev.innerHTML = `<span class="logo-preview-placeholder">ID Card</span>`;
        regPlayersIdCards[i] = '';
      }
    }

  } else {
    if (noticeEl) {
      noticeEl.style.display = 'none';
      noticeEl.innerHTML = '';
    }
  }
}

// Handler saat Peserta Mengetik / Memilih Nama Pemain Solo MCGG di Form Pendaftaran
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
      noticeEl.innerHTML = `🔄 <strong>Mode Pembaruan Data:</strong> Pemain "<strong>${escapeHtml(existing.name)}</strong>" sudah terdaftar. Form terisi otomatis dan klik <em>"Kirim Pendaftaran"</em> akan memperbarui data Anda (1 Pemain = 1 Record).`;
    }

    const firstRoster = (existing.roster && existing.roster[0]) || {};
    const nickInput = document.getElementById('mcgg_nickname');
    if (nickInput) nickInput.value = (existing.nickname && existing.nickname !== '-') ? existing.nickname : (firstRoster.nickname || '');

    const deptInput = document.getElementById('mcgg_dept');
    if (deptInput) deptInput.value = existing.dept || '';

    const waInput = document.getElementById('mcgg_wa');
    if (waInput) waInput.value = existing.wa || '';

    const empInput = document.getElementById('mcgg_empid');
    if (empInput) empInput.value = existing.empId || firstRoster.empId || '';

    const gameInput = document.getElementById('mcgg_gameid');
    if (gameInput) gameInput.value = existing.gameId || firstRoster.gameId || '';

    const orgInput = document.getElementById('mcgg_organik');
    if (orgInput && existing.isOrganik !== undefined) orgInput.checked = existing.isOrganik;

    const idCard = existing.idCard || firstRoster.idCard || findIdCardByEmpIdOrName(existing.empId, existing.name);
    if (idCard) {
      regMcggIdCard = idCard;
      const prevBox = document.getElementById('mcgg_idcard_preview');
      if (prevBox) {
        prevBox.innerHTML = `<img src="${formatDriveImageUrl(idCard)}" alt="ID Card" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`;
      }
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
  if (targetExisting) {
    const confirmUpdate = confirm(`Data dengan [${identifierLabel}] ini sudah terdaftar di sistem. Apakah Anda ingin mengupdate data tersebut?`);
    if (!confirmUpdate) {
      // User pilih "Batal": Hentikan proses submit, jangan kirim request ke server
      return;
    }
    isUpdate = true;
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
    let res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    let result = await res.json();

    // 3. HANDLE CONFLICT / DUPLICATE DARI BACKEND
    if (result && (result.code === 'DUPLICATE_ENTRY' || result.code === 'CONFLICT_DUPLICATE')) {
      const retryUpdate = confirm(`Data dengan [${identifierLabel}] ini sudah terdaftar di sistem. Apakah Anda ingin mengupdate data tersebut?`);
      if (retryUpdate) {
        payload.action = "UPDATE";
        payload.isUpdate = true;
        isUpdate = true;
        submitBtn.innerText = "Memperbarui data... ⏳";
        res = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        });
        result = await res.json();
      } else {
        submitBtn.disabled = false;
        submitBtn.innerText = "Kirim Pendaftaran";
        return;
      }
    }

    if (result && (result.status === 'error' || result.success === false)) {
      alert(`❌ PENDAFTARAN DITOLAK OLEH SERVER:\n${result.message || result.error || 'Validasi server gagal.'}`);
      submitBtn.disabled = false;
      submitBtn.innerText = "Kirim Pendaftaran";
      return;
    }
  } catch (err) {
    console.warn("Koneksi Google Sheets:", err);
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
      fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
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
        })
      }).catch(err => console.warn('Gagal sync status ke Google Sheets:', err));
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
      fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'DELETE',
          category: p.category,
          rowIndex: p.rowIndex || undefined,
          id: p.id,
          name: p.name,
          teamName: p.name
        })
      }).catch(err => console.warn('Gagal sinkronisasi DELETE ke Sheets:', err));
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
    const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
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
      })
    });
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
  const filtered = participants.filter(p => currentFilter === 'ALL' || p.category === currentFilter);

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

    const adminActions = isAdmin ? `
      <td class="admin-col">
        <div style="display:flex; gap:0.3rem; flex-wrap:wrap;">
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
        <td>
          <div class="team-cell">
            ${logoHtml}
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main);">${p.category === 'MCGG' ? ((p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? p.nickname : p.name) : p.name}</div>
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
function changeTournamentFormat() {
  const select = document.getElementById('bracketFormat');
  tournamentFormat = select.value;
  localStorage.setItem('yokke_mlbb_format', tournamentFormat);
  renderCurrentMLBBFormat();
}

function renderCurrentMLBBFormat() {
  const select = document.getElementById('bracketFormat');
  if (select) select.value = tournamentFormat;

  const knockoutBox = document.getElementById('knockoutContainer');
  const groupStageBox = document.getElementById('groupStageContainer');
  const sizeWrapper = document.getElementById('bracketSizeWrapper');

  if (tournamentFormat === 'KNOCKOUT') {
    if (knockoutBox) knockoutBox.style.display = 'block';
    if (groupStageBox) groupStageBox.style.display = 'none';
    if (sizeWrapper) sizeWrapper.style.display = 'block';
    if (bracketMatches.length === 0) generateBracket();
    else renderBracket();
  } else {
    if (knockoutBox) knockoutBox.style.display = 'none';
    if (groupStageBox) groupStageBox.style.display = 'block';
    if (sizeWrapper) sizeWrapper.style.display = 'none';
    if (Object.keys(groupStageData).length === 0) generateGroupStage();
    else renderGroupStageUI();
  }
}

function shuffleAndGenerateTournament() {
  if (tournamentFormat === 'KNOCKOUT') {
    generateBracket(true);
  } else {
    generateGroupStage(true);
  }
}

// --- KNOCKOUT BRACKET ---
function generateBracket(doShuffle = false) {
  const size = parseInt(document.getElementById('bracketSize').value);
  let verifiedTeams = participants.filter(p => p.category === 'MLBB' && p.status === 'VERIFIED').map(p => p.name);
  if (verifiedTeams.length === 0) {
    verifiedTeams = participants.filter(p => p.category === 'MLBB' && p.status !== 'REJECTED').map(p => p.name);
  }

  const notice = document.getElementById('bracketNotice');
  if (verifiedTeams.length < size) {
    notice.style.display = 'block';
    notice.innerHTML = `⚠️ <strong>Catatan:</strong> Terdapat ${verifiedTeams.length} tim MLBB terdaftar (Slot bagan: ${size} tim). Slot yang belum terisi ditandai sebagai <em>Slot TBD</em>.`;
  } else {
    notice.style.display = 'none';
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

      matchDiv.innerHTML = `
        <div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickWinner(${rIdx}, ${mIdx}, '${m.teamA}')">
          <span style="font-size: 0.88rem;">${m.teamA}</span>
          <span style="font-size: 0.8rem; font-weight: 700;">${m.winner === m.teamA ? 'WIN 🏆' : '-'}</span>
        </div>
        <div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickWinner(${rIdx}, ${mIdx}, '${m.teamB}')">
          <span style="font-size: 0.88rem;">${m.teamB}</span>
          <span style="font-size: 0.8rem; font-weight: 700;">${m.winner === m.teamB ? 'WIN 🏆' : '-'}</span>
        </div>
      `;
      col.appendChild(matchDiv);
    });

    tree.appendChild(col);
  });
}

// --- GROUP STAGE LOGIC ---
function generateGroupStage(doShuffle = false) {
  let verifiedTeams = participants.filter(p => p.category === 'MLBB' && p.status === 'VERIFIED').map(p => p.name);
  if (verifiedTeams.length === 0) {
    verifiedTeams = participants.filter(p => p.category === 'MLBB' && p.status !== 'REJECTED').map(p => p.name);
  }
  if (doShuffle) {
    verifiedTeams.sort(() => Math.random() - 0.5);
  }

  const numGroups = tournamentFormat === 'GROUP_4' ? 4 : 2;
  const groupNames = numGroups === 4 ? ['Grup A', 'Grup B', 'Grup C', 'Grup D'] : ['Grup A', 'Grup B'];

  groupStageData = {};
  groupNames.forEach(name => { groupStageData[name] = []; });

  verifiedTeams.forEach((t, i) => {
    const gName = groupNames[i % numGroups];
    groupStageData[gName].push({
      name: t,
      win: 0,
      lose: 0,
      pts: 0
    });
  });

  groupNames.forEach(name => {
    while (groupStageData[name].length < 4) {
      groupStageData[name].push({
        name: `Slot ${groupStageData[name].length + 1} (TBD)`,
        win: 0, lose: 0, pts: 0
      });
    }
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

function initGroupPlayoff() {
  let qualifiers = [];

  if (tournamentFormat === 'GROUP_2') {
    const grpA = [...(groupStageData['Grup A'] || [])].sort((a,b) => b.pts - a.pts);
    const grpB = [...(groupStageData['Grup B'] || [])].sort((a,b) => b.pts - a.pts);

    qualifiers = [
      grpA[0]?.name || 'Juara Grup A',
      grpB[1]?.name || 'Runner-up Grup B',
      grpB[0]?.name || 'Juara Grup B',
      grpA[1]?.name || 'Runner-up Grup A'
    ];
  } else {
    const grpA = [...(groupStageData['Grup A'] || [])].sort((a,b) => b.pts - a.pts);
    const grpB = [...(groupStageData['Grup B'] || [])].sort((a,b) => b.pts - a.pts);
    const grpC = [...(groupStageData['Grup C'] || [])].sort((a,b) => b.pts - a.pts);
    const grpD = [...(groupStageData['Grup D'] || [])].sort((a,b) => b.pts - a.pts);

    qualifiers = [
      grpA[0]?.name || 'Juara Grup A',
      grpB[0]?.name || 'Juara Grup B',
      grpC[0]?.name || 'Juara Grup C',
      grpD[0]?.name || 'Juara Grup D'
    ];
  }

  groupPlayoffMatches = [
    [
      { teamA: qualifiers[0], teamB: qualifiers[1], winner: null },
      { teamA: qualifiers[2], teamB: qualifiers[3], winner: null }
    ],
    [
      { teamA: 'Pemenang SF 1', teamB: 'Pemenang SF 2', winner: null }
    ]
  ];
}

function pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam) {
  if (!isAdmin) return;
  const match = groupPlayoffMatches[rIdx][mIdx];
  if (!match || winnerTeam.includes('Juara') || winnerTeam.includes('Runner-up') || winnerTeam.includes('Pemenang')) return;

  match.winner = winnerTeam;

  if (rIdx === 0) {
    if (mIdx === 0) groupPlayoffMatches[1][0].teamA = winnerTeam;
    else groupPlayoffMatches[1][0].teamB = winnerTeam;
  }

  renderGroupPlayoffTree();
}

function renderGroupStageUI() {
  const container = document.getElementById('groupStageGrid');
  if (!container) return;

  let html = '';
  const numToQualify = tournamentFormat === 'GROUP_2' ? 2 : 1;

  for (const gName in groupStageData) {
    const sorted = [...groupStageData[gName]].sort((a,b) => b.pts - a.pts);

    html += `
      <div class="group-box">
        <div class="group-header">
          <span>🛡️ ${gName}</span>
          <span style="font-size:0.75rem;color:var(--text-muted)">Top ${numToQualify} Lolos</span>
        </div>
        <div style="padding:0.5rem">
          <table>
            <thead>
              <tr>
                <th>Tim</th>
                <th style="text-align:center;">M</th>
                <th style="text-align:center;">K</th>
                <th style="text-align:center;">Poin</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${sorted.map((t, idx) => {
                const isQ = idx < numToQualify && t.pts > 0;
                const origIdx = groupStageData[gName].indexOf(t);

                const winCtrl = isAdmin ? `
                  <input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('${gName}', ${origIdx}, 'win', this.value)">
                ` : t.win;

                const loseCtrl = isAdmin ? `
                  <input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" onchange="updateGroupRecord('${gName}', ${origIdx}, 'lose', this.value)">
                ` : t.lose;

                return `
                  <tr style="${isQ ? 'background:rgba(6,214,160,0.1);font-weight:bold;' : ''}">
                    <td>${t.name}</td>
                    <td style="text-align:center;">${winCtrl}</td>
                    <td style="text-align:center;">${loseCtrl}</td>
                    <td style="text-align:center;color:var(--yokke-gold);font-weight:800;">${t.pts}</td>
                    <td>${isQ ? '<span style="color:var(--yokke-green)">Lolos</span>' : '-'}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
  renderGroupPlayoffTree();
}

function renderGroupPlayoffTree() {
  const tree = document.getElementById('groupPlayoffTree');
  if (!tree) return;
  tree.innerHTML = '';

  const roundNames = ['Semifinal Playoff', 'Grand Final'];

  groupPlayoffMatches.forEach((round, rIdx) => {
    const col = document.createElement('div');
    col.className = 'bracket-round';

    const header = document.createElement('div');
    header.className = 'round-header';
    header.innerText = roundNames[rIdx];
    col.appendChild(header);

    round.forEach((m, mIdx) => {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'matchup';

      matchDiv.innerHTML = `
        <div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickGroupPlayoffWinner(${rIdx}, ${mIdx}, '${m.teamA}')">
          <span style="font-size: 0.88rem;">${m.teamA}</span>
          <span style="font-size: 0.8rem; font-weight: 700;">${m.winner === m.teamA ? 'WIN 🏆' : '-'}</span>
        </div>
        <div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : ''}" onclick="pickGroupPlayoffWinner(${rIdx}, ${mIdx}, '${m.teamB}')">
          <span style="font-size: 0.88rem;">${m.teamB}</span>
          <span style="font-size: 0.8rem; font-weight: 700;">${m.winner === m.teamB ? 'WIN 🏆' : '-'}</span>
        </div>
      `;
      col.appendChild(matchDiv);
    });

    tree.appendChild(col);
  });
}

// ========================================================
// MCGG MULTI-LOBBY STANDINGS
// ========================================================
function changeMCGGLobby() {
  currentMCGGLobby = document.getElementById('mcggLobbySelect').value;
  renderMCGGTable();
}

function getCommanderById(id) {
  if (!id) return null;
  const clean = id.toString().trim().toLowerCase();
  return MCGG_COMMANDERS.find(c => 
    c.id.toLowerCase() === clean || 
    c.name.toLowerCase() === clean ||
    (c.alterName && c.alterName.toLowerCase() === clean) ||
    (c.hero && c.hero.toLowerCase() === clean)
  );
}

function updateCommanderPoolFromSetup(setupList) {
  if (!Array.isArray(setupList) || setupList.length === 0) return;
  
  setupList.forEach(item => {
    const rawHero = (item.hero || '').trim();
    const rawAlter = (item.alterName || '').trim();
    const tier = (item.tier || '').trim();
    const targetName = rawAlter || rawHero;
    if (!targetName) return;

    let existing = MCGG_COMMANDERS.find(c => 
      c.name.toLowerCase() === targetName.toLowerCase() ||
      (rawAlter && c.name.toLowerCase() === rawAlter.toLowerCase()) ||
      (rawHero && c.name.toLowerCase() === rawHero.toLowerCase()) ||
      (c.alterName && rawAlter && c.alterName.toLowerCase() === rawAlter.toLowerCase()) ||
      (c.hero && rawHero && c.hero.toLowerCase() === rawHero.toLowerCase())
    );

    if (existing) {
      existing.tier = tier;
      existing.hero = rawHero;
      existing.alterName = rawAlter;
      if (rawAlter && rawHero && rawAlter.toLowerCase() !== rawHero.toLowerCase()) {
        existing.displayName = `${rawAlter} (${rawHero})`;
      } else {
        existing.displayName = existing.name;
      }
      if (tier.toLowerCase() === 'meta') existing.isMeta = true;
    } else {
      const slug = targetName.toLowerCase().replace(/[^a-z0-9]/g, '');
      MCGG_COMMANDERS.push({
        id: slug,
        name: targetName,
        displayName: rawAlter && rawHero && rawAlter.toLowerCase() !== rawHero.toLowerCase() ? `${rawAlter} (${rawHero})` : targetName,
        image: `assets/commanders/${slug}.png`,
        isPresetS7: false,
        tier: tier,
        hero: rawHero,
        alterName: rawAlter,
        title: tier ? `Tier ${tier}` : 'Commander'
      });
    }
  });

  if (typeof renderMCGGTable === 'function') {
    renderMCGGTable();
  }
}

function syncMCGGPlayers() {
  let verified = participants.filter(p => p.category === 'MCGG' && p.status === 'VERIFIED');
  if (verified.length === 0) {
    verified = participants.filter(p => p.category === 'MCGG' && p.status !== 'REJECTED');
  }

  const existingA = mcggLobbies.LOBBY_A || [];
  mcggLobbies.LOBBY_A = [];
  for (let i = 0; i < 8; i++) {
    if (i < verified.length) {
      const pItem = verified[i];
      const prev = existingA[i] || {};
      mcggLobbies.LOBBY_A.push({
        name: pItem.name,
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
      });
    } else {
      mcggLobbies.LOBBY_A.push({ name: `Pemain A-${i + 1} (TBD)`, nickname: '-', gameId: '-', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 });
    }
  }

  const existingB = mcggLobbies.LOBBY_B || [];
  mcggLobbies.LOBBY_B = [];
  for (let i = 8; i < 16; i++) {
    if (i < verified.length) {
      const pItem = verified[i];
      const prev = existingB[i - 8] || {};
      mcggLobbies.LOBBY_B.push({
        name: pItem.name,
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
      });
    } else {
      mcggLobbies.LOBBY_B.push({ name: `Pemain B-${i - 7} (TBD)`, nickname: '-', gameId: '-', r1: 0, r2: 0, r3: 0, c1: '', c2: '', c3: '', penalty: 0, total: 0 });
    }
  }

  syncMCGGGrandFinal();
  saveState();
  renderMCGGTable();
}

function syncMCGGGrandFinal() {
  const sortFn = (a, b) => b.total - a.total;
  const topA = [...(mcggLobbies.LOBBY_A || [])].sort(sortFn).slice(0, 4);
  const topB = [...(mcggLobbies.LOBBY_B || [])].sort(sortFn).slice(0, 4);

  const existingGF = mcggLobbies.GRAND_FINAL || [];
  mcggLobbies.GRAND_FINAL = [];
  topA.forEach((p, idx) => {
    const prev = existingGF[idx] || {};
    mcggLobbies.GRAND_FINAL.push({ 
      name: p.name || `Top ${idx+1} Lobi A`, 
      nickname: p.nickname || '-', 
      gameId: p.gameId || '-', 
      r1: prev.r1 || 0, r2: prev.r2 || 0, r3: prev.r3 || 0,
      c1: prev.c1 || '', c2: prev.c2 || '', c3: prev.c3 || '',
      penalty: prev.penalty || 0, total: prev.total || 0 
    });
  });
  topB.forEach((p, idx) => {
    const prev = existingGF[idx + 4] || {};
    mcggLobbies.GRAND_FINAL.push({ 
      name: p.name || `Top ${idx+1} Lobi B`, 
      nickname: p.nickname || '-', 
      gameId: p.gameId || '-', 
      r1: prev.r1 || 0, r2: prev.r2 || 0, r3: prev.r3 || 0,
      c1: prev.c1 || '', c2: prev.c2 || '', c3: prev.c3 || '',
      penalty: prev.penalty || 0, total: prev.total || 0 
    });
  });
}

function updateMCGGRank(idx, roundKey, rankVal) {
  if (!isAdmin) return;
  const list = mcggLobbies[currentMCGGLobby];
  if (!list || !list[idx]) return;

  list[idx][roundKey] = parseInt(rankVal) || 0;
  const p1 = POINT_TABLE[list[idx].r1] || 0;
  const p2 = POINT_TABLE[list[idx].r2] || 0;
  const p3 = POINT_TABLE[list[idx].r3] || 0;
  list[idx].total = p1 + p2 + p3 + (list[idx].penalty || 0);

  if (currentMCGGLobby !== 'GRAND_FINAL') {
    syncMCGGGrandFinal();
  }

  saveState();
  renderMCGGTable();
}

function updateMCGGCommander(idx, cmdKey, cmdId) {
  if (!isAdmin) return;
  const list = mcggLobbies[currentMCGGLobby];
  if (!list || !list[idx]) return;

  list[idx][cmdKey] = cmdId;
  saveState();
  renderMCGGTable();
}

function updateMCGGPenalty(idx, penaltyVal) {
  if (!isAdmin) return;
  const list = mcggLobbies[currentMCGGLobby];
  if (!list || !list[idx]) return;

  list[idx].penalty = parseInt(penaltyVal) || 0;
  const p1 = POINT_TABLE[list[idx].r1] || 0;
  const p2 = POINT_TABLE[list[idx].r2] || 0;
  const p3 = POINT_TABLE[list[idx].r3] || 0;
  list[idx].total = p1 + p2 + p3 + list[idx].penalty;

  if (currentMCGGLobby !== 'GRAND_FINAL') {
    syncMCGGGrandFinal();
  }

  saveState();
  renderMCGGTable();
}

// ========================================================
// MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
// ========================================================
function drawMatchCommanders(matchNum) {
  const currentList = mcggLobbies[currentMCGGLobby] || [];
  if (currentList.length === 0) {
    alert("⚠️ Lobi belum memiliki data pemain.");
    return;
  }

  lastCommanderDrawMatch = matchNum;
  if (!mcggDrawState[currentMCGGLobby]) {
    mcggDrawState[currentMCGGLobby] = {};
  }

  let selectedPool = [];
  if (matchNum === 1) {
    // MATCH 1: 8 Preset Non-Meta S7 [Abe, Yuki, Eva, Mavis, Kaboom, Dubi, Buss, Pao]
    const s7 = MCGG_COMMANDERS.filter(c => c.isPresetS7);
    selectedPool = [...s7].sort(() => Math.random() - 0.5);
  } else if (matchNum === 2) {
    // MATCH 2: Random 8 dari seluruh 25 pool commanders
    const all = [...MCGG_COMMANDERS].sort(() => Math.random() - 0.5);
    selectedPool = all.slice(0, 8);
  }

  const assigned = [];
  currentList.forEach((player, i) => {
    const cmd = selectedPool[i % selectedPool.length];
    assigned.push({
      playerIndex: i,
      playerName: player.name,
      playerNick: (player.nickname && player.nickname !== '-' && player.nickname !== 'undefined') ? player.nickname : player.name,
      gameId: player.gameId || '-',
      commander: cmd
    });

    // Otomatis assign ke round data jika masih kosong
    if (matchNum === 1 && !player.c1) player.c1 = cmd.id;
    if (matchNum === 2 && !player.c2) player.c2 = cmd.id;
  });

  mcggDrawState[currentMCGGLobby][`match${matchNum}`] = assigned;
  localStorage.setItem('yokke_commander_draw', JSON.stringify(mcggDrawState));
  saveState();

  renderCommanderDrawResults(matchNum, assigned);
  renderMCGGTable();
}

function renderCommanderDrawResults(matchNum, assigned) {
  const container = document.getElementById('commanderDrawResults');
  const titleEl = document.getElementById('commanderDrawTitle');
  const gridEl = document.getElementById('commanderCardsGrid');
  const copyBtn = document.getElementById('btnCopyDrawResult');
  if (!container || !gridEl) return;

  const matchTitle = matchNum === 1 
    ? 'Hasil Undian Match 1 (Preset Non-Meta Season 7)' 
    : 'Hasil Undian Match 2 (Random 8 Full Pool)';

  if (titleEl) {
    titleEl.innerHTML = `🎲 <strong>${matchTitle}</strong> - ${currentMCGGLobby.replace('_', ' ')}`;
  }

  gridEl.innerHTML = assigned.map(item => `
    <div class="commander-card">
      <span class="commander-badge-s7">${matchNum === 1 ? 'S7 Preset' : 'Random'}</span>
      <img src="${item.commander.image}" class="commander-img" alt="${item.commander.name}" onerror="this.src='assets/commanders/abe.png'">
      <div style="font-weight: 800; color: var(--yokke-gold); font-size: 0.95rem;">${item.commander.name}</div>
      <div style="font-size: 0.7rem; color: var(--text-muted);">${item.commander.title}</div>
      <div style="margin-top: 0.45rem; padding-top: 0.4rem; border-top: 1px dashed rgba(255,255,255,0.1);">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          🎮 ${item.playerNick}
        </div>
        <div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          👤 ${item.playerName}
        </div>
      </div>
    </div>
  `).join('');

  container.style.display = 'block';
  if (copyBtn) copyBtn.style.display = 'inline-block';
}

function copyCommanderDrawText() {
  const matchNum = lastCommanderDrawMatch || 1;
  const assigned = mcggDrawState[currentMCGGLobby]?.[`match${matchNum}`];
  if (!assigned || assigned.length === 0) {
    alert("Belum ada hasil undian untuk disalin.");
    return;
  }

  const lobbyLabel = document.getElementById('mcggLobbySelect')?.selectedOptions[0]?.text || currentMCGGLobby;
  const matchTitle = matchNum === 1 ? 'MATCH 1 (PRESET NON-META S7)' : 'MATCH 2 (RANDOM 8 FULL POOL)';

  let text = `🎲 *HASIL UNDIAN COMMANDER ${matchTitle}*\n`;
  text += `🏆 *Turnamen E-Sports Yokke Squad 2026 - ${lobbyLabel}*\n\n`;

  assigned.forEach((item, idx) => {
    text += `${idx + 1}. *${item.playerNick}* (${item.playerName}) ➔ 🛡️ *${item.commander.name}* (${item.commander.title})\n`;
  });

  text += `\n⚠️ *Perhatian Regulasi:*\n`;
  text += `Seluruh player WAJIB menggunakan Commander di atas pada match ini.\n`;
  text += `Jika terbukti TIDAK menggunakan Commander hasil undian, dikenakan *Sanksi Pengurangan 2 Poin (-2 Poin)*.\n`;

  navigator.clipboard.writeText(text).then(() => {
    alert("✅ Hasil undian Commander berhasil disalin ke clipboard! Siap dipaste ke Discord atau WhatsApp.");
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

function renderMCGGTable() {
  const tbody = document.getElementById('mcggLeaderboard');
  if (!tbody) return;

  const currentList = mcggLobbies[currentMCGGLobby] || [];
  
  // Tie-Breaker Sorting Sesuai Regulasi Resmi:
  // 1. Akumulasi Poin Tertinggi
  // 2. Placement 4 Besar Terbanyak
  // 3. Kepatuhan Commander (Penalti lebih sedikit)
  // 4. Peringkat Terbaik pada match (Juara 1 > Juara 2 > dst)
  const sorted = [...currentList].sort((a, b) => {
    if (b.total !== a.total) return b.total - a.total;

    // Tie-Breaker 1: Placement 4 besar terbanyak
    const aTop4 = [a.r1, a.r2, a.r3].filter(r => r >= 1 && r <= 4).length;
    const bTop4 = [b.r1, b.r2, b.r3].filter(r => r >= 1 && r <= 4).length;
    if (bTop4 !== aTop4) return bTop4 - aTop4;

    // Tie-Breaker 2: Kepatuhan Commander (Penalti lebih sedikit)
    const aPen = a.penalty || 0;
    const bPen = b.penalty || 0;
    if (bPen !== aPen) return bPen - aPen;

    // Tie-Breaker 3: Peringkat individu terbaik
    for (let r = 1; r <= 8; r++) {
      const aRCount = [a.r1, a.r2, a.r3].filter(rank => rank === r).length;
      const bRCount = [b.r1, b.r2, b.r3].filter(rank => rank === r).length;
      if (bRCount !== aRCount) return bRCount - aRCount;
    }

    return 0;
  });

  const isFinal = currentMCGGLobby === 'GRAND_FINAL';

  tbody.innerHTML = sorted.map((p, idx) => {
    const isTop4 = idx < 4 && (p.r1 > 0 || p.r2 > 0 || p.r3 > 0);
    const isChamp = idx === 0 && (p.r1 > 0 || p.r2 > 0 || p.r3 > 0) && isFinal;

    let qualText = '-';
    if (p.r1 > 0 || p.r2 > 0 || p.r3 > 0) {
      if (isFinal) {
        if (idx === 0) qualText = '🏆 JUARA 1';
        else if (idx === 1) qualText = '🥈 JUARA 2';
        else if (idx === 2) qualText = '🥉 JUARA 3';
        else if (idx === 3) qualText = '🏅 TOP 4';
        else qualText = 'Gugur';
      } else {
        qualText = isTop4 ? '<span style="color:var(--yokke-green); font-weight:700;">🔥 Lolos Final</span>' : '<span style="color:var(--text-muted);">Gugur</span>';
      }
    }

    return `
      <tr style="${isTop4 ? 'background: rgba(6, 214, 160, 0.08); font-weight: 600;' : ''}">
        <td><strong>#${idx + 1}</strong></td>
        <td>
          <div style="font-weight:700; color:var(--yokke-cyan); display:flex; align-items:center; gap:0.35rem;">
            <span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? p.nickname : p.name}</span>
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">
            ${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? `<span>👤 ${p.name}</span>` : ''}
            ${p.gameId && p.gameId !== '-' ? `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' • ' : ''}<span style="color:var(--yokke-gold);">ID: ${p.gameId}</span>` : ''}
          </div>
        </td>
        <td>${buildRoundCell(p, 'r1', 'c1')}</td>
        <td>${buildRoundCell(p, 'r2', 'c2')}</td>
        <td>${buildRoundCell(p, 'r3', 'c3')}</td>
        <td style="text-align: center;">${buildPenaltySelect(p)}</td>
        <td style="text-align: center;"><strong style="color: ${p.total >= 0 ? 'var(--yokke-gold)' : 'var(--yokke-red)'}; font-size: 1.1rem;">${p.total > 0 ? '+' + p.total : p.total}</strong></td>
        <td>${qualText}</td>
      </tr>
    `;
  }).join('');
}

function buildRoundCell(player, roundKey, cmdKey) {
  const currentList = mcggLobbies[currentMCGGLobby] || [];
  const originalIdx = currentList.indexOf(player);
  const selectedCmdId = (player[cmdKey] || '').toLowerCase();
  const selectedCmd = getCommanderById(selectedCmdId);
  const rank = player[roundKey] || 0;
  const pts = POINT_TABLE[rank] || 0;

  if (!isAdmin) {
    const cmdHtml = selectedCmd ? `
      <div style="display:flex; align-items:center; gap:0.3rem; margin-bottom:0.25rem;">
        <img src="${selectedCmd.image}" class="commander-select-thumb" alt="${selectedCmd.name}" title="${selectedCmd.name} (${selectedCmd.title || selectedCmd.tier || ''})">
        <span style="font-size:0.8rem; font-weight:700; color:var(--yokke-purple);">${selectedCmd.displayName || selectedCmd.name} ${selectedCmd.tier ? `<span style="font-size:0.68rem; color:var(--yokke-gold); font-weight:normal;">[${selectedCmd.tier}]</span>` : ''}</span>
      </div>
    ` : '';
    const rankHtml = rank > 0 ? `<span style="font-size:0.8rem; color:${pts >= 0 ? 'var(--yokke-gold)' : 'var(--yokke-red)'};">Rank ${rank} (${pts > 0 ? '+' + pts : pts}pt)</span>` : '-';
    return `<div>${cmdHtml}${rankHtml}</div>`;
  }

  // Admin Interactive Mode: Pilih Commander + Rank
  let cmdOptions = `<option value="">- Commander -</option>`;
  cmdOptions += `<optgroup label="🌟 Preset Non-Meta S7">`;
  MCGG_COMMANDERS.filter(c => c.isPresetS7).forEach(c => {
    const label = `${c.displayName || c.name}${c.tier ? ` [${c.tier}]` : ''}`;
    cmdOptions += `<option value="${c.id}" ${selectedCmdId === c.id ? 'selected' : ''}>${label}</option>`;
  });
  cmdOptions += `</optgroup><optgroup label="⚔️ Pool Lainnya (Tier List)">`;
  MCGG_COMMANDERS.filter(c => !c.isPresetS7).forEach(c => {
    const label = `${c.displayName || c.name}${c.tier ? ` [${c.tier}]` : ''}`;
    cmdOptions += `<option value="${c.id}" ${selectedCmdId === c.id ? 'selected' : ''}>${label}</option>`;
  });
  cmdOptions += `</optgroup>`;

  let rankOptions = `<option value="0">- Rank -</option>`;
  for (let r = 1; r <= 8; r++) {
    const pt = POINT_TABLE[r];
    rankOptions += `<option value="${r}" ${rank === r ? 'selected' : ''}>Rank ${r} (${pt > 0 ? '+' + pt : pt}pt)</option>`;
  }

  const thumbImg = selectedCmd 
    ? `<img src="${selectedCmd.image}" class="commander-select-thumb" alt="${selectedCmd.name}">` 
    : `<span style="font-size:1.1rem; vertical-align:middle; margin-right:4px;">🛡️</span>`;

  return `
    <div style="display:flex; flex-direction:column; gap:0.25rem;">
      <div style="display:flex; align-items:center;">
        ${thumbImg}
        <select onchange="updateMCGGCommander(${originalIdx}, '${cmdKey}', this.value)" style="padding: 0.2rem 0.35rem; font-size: 0.75rem; max-width: 110px;">
          ${cmdOptions}
        </select>
      </div>
      <select onchange="updateMCGGRank(${originalIdx}, '${roundKey}', this.value)" style="padding: 0.2rem 0.35rem; font-size: 0.75rem;">
        ${rankOptions}
      </select>
    </div>
  `;
}

function buildPenaltySelect(player) {
  const currentList = mcggLobbies[currentMCGGLobby] || [];
  const originalIdx = currentList.indexOf(player);
  const pen = player.penalty || 0;

  if (!isAdmin) {
    return pen < 0 
      ? `<span style="color:var(--yokke-red); font-weight:700;">${pen} pt</span>` 
      : `<span style="color:var(--text-muted);">-</span>`;
  }

  return `
    <select onchange="updateMCGGPenalty(${originalIdx}, this.value)" style="padding: 0.25rem 0.4rem; font-size: 0.75rem; color:${pen < 0 ? 'var(--yokke-red)' : 'var(--text-muted)'}; font-weight:700;">
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
    mcggLobbies = { LOBBY_A: [], LOBBY_B: [], GRAND_FINAL: [] };
    localStorage.removeItem('yokke_deleted_participants');
    saveState();
    renderParticipants();
    renderCurrentMLBBFormat();
    renderMCGGTable();
    syncMCGGPlayers();
    updateCounts();
    alert('🧹 Seluruh data lokal dan riwayat hapus berhasil di-reset.');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  autoLinkParticipantsAssets();
  renderPlayersFormInputs();
  fetchParticipantsFromGoogleSheet(true);
  toggleCategoryForm();
  toggleOfficial2Form();
  renderRules();
  updateAuthUI();
  renderParticipants();
  renderCurrentMLBBFormat();
  syncMCGGPlayers();
  updateCounts();
});
