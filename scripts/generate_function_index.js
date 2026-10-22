/**
 * Generator Otomatis Indeks Fungsi Turnamen Yokke Squad 2026
 * 
 * Memindai seluruh codebase (app.js, google_apps_script.js, index.html, functional_tests.js),
 * mencatat definisi setiap fungsi, parameter, deskripsi, lokasi pemanggilan (call sites),
 * serta fungsi apa saja yang dipanggil.
 * 
 * Menghasilkan file dokumentasi: FUNCTION_INDEX.md
 * Mendukung mode watcher (--watch) untuk update otomatis setiap kali ada file yang berubah.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(ROOT_DIR, 'FUNCTION_INDEX.md');

const SOURCE_FILES = {
  app: path.join(ROOT_DIR, 'app.js'),
  gas: path.join(ROOT_DIR, 'google_apps_script.js'),
  html: path.join(ROOT_DIR, 'index.html'),
  tests: path.join(ROOT_DIR, 'tests', 'functional_tests.js')
};

// Pemetaan Kategori Berdasarkan Kata Kunci / Bagian Kode
function categorizeFunction(name, fileKey, lineNum, commentText) {
  if (fileKey === 'gas') {
    if (['doGet', 'doPost'].includes(name)) return '🌐 Web API & Endpoint Webhook';
    if (name.includes('Listing') || name.includes('Sheet') || name.includes('TargetSpreadsheet')) return '🗄️ Google Sheets Schema & Master Data';
    return '⚙️ Backend Apps Script Utility';
  }

  const n = name.toLowerCase();
  const c = (commentText || '').toLowerCase();

  if (n.includes('admin') || n.includes('login') || n.includes('auth') || n.includes('role') || n.includes('logout') || n.includes('pin')) {
    return '🛡️ Autentikasi & Hak Akses Panitia';
  }
  if (n.includes('mlbb') || n.includes('bracket') || n.includes('groupstage') || n.includes('playoff') || n.includes('fixture') || n.includes('tiebreaker')) {
    return '⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine)';
  }
  if (n.includes('mcgg') || n.includes('commander') || n.includes('lobby') || n.includes('lobbies') || n.includes('penalty')) {
    return '♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti)';
  }
  if (n.includes('idcard') || n.includes('logo') || n.includes('preview') || n.includes('modal') || n.includes('compress') || n.includes('fileinput')) {
    return '🆔 Modal Dialog & Bukti ID Card';
  }
  if (n.includes('participant') || n.includes('register') || n.includes('roster') || n.includes('export') || n.includes('batch') || n.includes('status')) {
    return '👥 Manajemen Peserta & Roster';
  }
  if (n.includes('sheet') || n.includes('webhook') || n.includes('sync') || n.includes('stagestatelocal') || n.includes('savetournamentstate')) {
    return '☁️ Sinkronisasi Google Sheets & State Storage';
  }
  if (n.includes('rule')) {
    return '📋 Regulasi Turnamen (Rules Editor)';
  }
  if (n.includes('toast') || n.includes('tab') || n.includes('scroll') || n.includes('copy') || n.includes('filter') || n.includes('escape') || n.includes('format') || n.includes('sanitize')) {
    return '🔧 Helper & UI Utility';
  }

  return '📦 Modul Aplikasi Umum';
}

// Kamus Deskripsi Fallback untuk Fungsi-Fungsi Kunci Turnamen
const FALLBACK_DESCRIPTIONS = {
  'getInitialParticipants': 'Inisialisasi daftar peserta dari localStorage dengan validasi versi data (DATA_VERSION), fallback ke array default.',
  'saveStageStateLocal': 'Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM, data tie-breaker) ke localStorage.',
  'saveIdCardToMap': 'Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasarkan NIP/Nama.',
  'findIdCardByEmpIdOrName': 'Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama peserta.',
  'saveLogoToMap': 'Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasarkan nama tim.',
  'findLogoByTeamName': 'Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peserta.',
  'saveState': 'Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi MCGG) ke localStorage.',
  'updateCounts': 'Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status verifikasi di header UI.',
  'toggleEditRules': 'Membuka/menutup form editor peraturan turnamen khusus panitia.',
  'saveCustomRules': 'Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Google Sheets.',
  'resetRulesToDefault': 'Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026.',
  'closeLoginModal': 'Menutup modal dialog login PIN panitia.',
  'verifyAdminPin': 'Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif penuh.',
  'logoutAdmin': 'Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (read-only).',
  'updateAuthUI': 'Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock, dan form interaktif.',
  'closeIdCardLightbox': 'Menutup modal pop-up lightbox preview ID Card pegawai.',
  'escapeHtml': 'Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dalam HTML DOM.',
  'deleteParticipant': 'Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat ke blacklist agar tidak ter-sync ulang.',
  'filterList': 'Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/MCGG), dan status verifikasi.',
  'closeEditParticipantModal': 'Menutup modal dialog edit peserta.',
  'handleEditRosterIdCardUpload': 'Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedit pada modal admin.',
  'closeDetailModal': 'Menutup modal dialog rincian roster tim dan galeri ID Card.',
  'getActiveMLBBFormat': 'Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N >= 12 tim).',
  'changeTournamentFormat': 'Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP_2, GROUP_4, KNOCKOUT).',
  'shuffleAndGenerateTournament': 'Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum dikunci.',
  'isAllMLBBGroupMatchesFinished': 'Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan memiliki pemenang.',
  'evaluateMLBBTieBreaker': 'Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosan babak Playoff.',
  'resolveMLBBTieBreaker': 'Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan +1 poin penentu ke klasemen.',
  'proceedToMLBBStage2': 'Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Bagan Playoff).',
  'resetMLBBToStage1': 'Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor jika diperlukan.',
  'toggleLockMCGGLobbies': 'Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM).',
  'validateMCGGDuplicateCommander': 'Memeriksa regulasi commander ronde 2 (dilarang sama dengan ronde 1), otomatis sanksi -2 poin jika melanggar.',
  'saveTournamentStateOnly': 'Menyimpan seluruh state bagan & poin ke Google Sheets dalam 1 payload JSON ringan (SAVE_CONFIG).',
  'drawMatchCommanders': 'Mengacak dan membagikan Little Commander untuk peserta di lobi aktif (khusus panitia).',
  'renderCommanderDrawResults': 'Merender galeri kartu visual hasil undian Little Commander peserta ke antarmuka turnamen.',
  'copyCommanderDrawText': 'Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk dibagikan ke WhatsApp grup.',
  'initMCGGLobbies': 'Inisialisasi lobi pertandingan MCGG (Lobi A, B, Grand Final) dan menyeimbangkan jumlah pemain.',
  'renderMCGGTable': 'Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang sedang aktif.',
  'renderAllMCGGLobbies': 'Merender seluruh lobi MCGG (Lobi A, Lobi B, Grand Final) dalam satu halaman vertikal terpadu.',
  'changeMCGGLobby': 'Mengganti fokus tampilan lobi MCGG melalui dropdown seleksi.',
  'updateMCGGRank': 'Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin otomatis (+4 s/d -4).',
  'updateMCGGCommander': 'Memperbarui pilihan commander pemain dan memicu validasi duplikasi commander ronde 2.',
  'updateMCGGPenalty': 'Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumulasi poin.',
  'syncMCGGGrandFinal': 'Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final setelah ronde kualifikasi penuh.',
  'isMCGGQualificationFull': 'Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3 ronde).',
  'getCommanderById': 'Mencari objek data commander dari master list berdasarkan ID, nama hero, atau alter name.',
  'toggleLockMLBBGroup': 'Mengunci/membuka kunci pembagian grup turnamen MLBB saat Technical Meeting.',
  'initGroupPlayoff': 'Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seeding Juara vs Runner-up).',
  'renderGroupPlayoffTree': 'Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau status terkunci jika grup belum selesai.',
  'pickGroupPlayoffWinner': 'Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya ke ronde berikutnya.',
  'getGroupFixtures': 'Menghasilkan jadwal pertandingan Round-Robin (BO3) untuk semua tim di dalam grup.',
  'setGroupMatchScore': 'Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara otomatis.',
  'resetGroupMatchScore': 'Mereset skor pertandingan grup MLBB ke status belum bertanding.',
  'recalculateGroupStandingsFromFixtures': 'Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan seluruh hasil pertandingan BO3.',
  'doGet': 'Endpoint HTTP GET Google Apps Script untuk sinkronisasi data peserta, listing master, dan konfigurasi turnamen.',
  'doPost': 'Endpoint HTTP POST Google Apps Script untuk menerima pendaftaran, verifikasi, hapus data, dan simpan konfigurasi.',
  'getMlbbTimListing': 'Membaca dan menormalisasi data tim MLBB dari sheet "MLBB - Tim" dengan deduplikasi in-memory.',
  'getMlbbPesertaListing': 'Membaca data seluruh anggota roster pemain dan official MLBB dari sheet "MLBB - Peserta".',
  'getMcggListing': 'Membaca dan menormalisasi data peserta solo MCGG dari sheet "Pendaftaran MCGG" (11 kolom).',
  'getMcggSetupListing': 'Membaca master Little Commander, alter name, tier list, dan URL foto dari sheet "MCGG Match Set Up".',
  'getTargetSpreadsheet': 'Membuka spreadsheet target Google Sheets menggunakan TARGET_SPREADSHEET_ID atau active spreadsheet.',
  'createTournamentSheets': 'Membuat atau memastikan ketersediaan seluruh lembar kerja (sheets) turnamen di Google Spreadsheet.'
};

// Ekstrak deskripsi fungsi dari komentar di atasnya atau dari kamus fallback
function extractDescription(lines, declLineIndex, funcName) {
  const comments = [];
  let idx = declLineIndex - 1;
  while (idx >= 0) {
    const line = lines[idx].trim();
    if (line.startsWith('//') || line.startsWith('*') || line.startsWith('/*')) {
      const clean = line.replace(/^\/\/\s*|\*+\s*|\/\*+\s*|\*+\/$/g, '').trim();
      if (clean && !clean.startsWith('=')) {
        comments.unshift(clean);
      }
      idx--;
    } else {
      break;
    }
  }
  if (comments.length > 0) {
    return comments.join(' ');
  }
  if (FALLBACK_DESCRIPTIONS[funcName]) {
    return FALLBACK_DESCRIPTIONS[funcName];
  }
  return '';
}

// Analisis File JavaScript untuk menemukan fungsi dan cakupan bloknya
function parseFunctions(filePath, fileKey) {
  if (!fs.existsSync(filePath)) return { functions: [], lines: [] };
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const functions = [];
  const funcDeclRegex = /^\s*(export\s+)?(async\s+)?function\s+([a-zA-Z0-9_$]+)\s*\(([^)]*)\)/;
  const arrowDeclRegex = /^\s*(const|let|var)\s+([a-zA-Z0-9_$]+)\s*=\s*(async\s*)?\(([^)]*)\)\s*=>/;
  const funcExprRegex = /^\s*(const|let|var)\s+([a-zA-Z0-9_$]+)\s*=\s*(async\s+)?function\s*\(([^)]*)\)/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let match = line.match(funcDeclRegex);
    let isArrow = false;
    let name = '';
    let params = '';

    if (match) {
      name = match[3];
      params = match[4] || '';
    } else {
      match = line.match(arrowDeclRegex);
      if (match) {
        isArrow = true;
        name = match[2];
        params = match[4] || '';
      } else {
        match = line.match(funcExprRegex);
        if (match) {
          name = match[2];
          params = match[4] || '';
        }
      }
    }

    if (match && name) {
      const desc = extractDescription(lines, i, name);
      const category = categorizeFunction(name, fileKey, i + 1, desc);

      functions.push({
        name,
        params: params.trim(),
        lineNum: i + 1,
        fileKey,
        fileName: path.basename(filePath),
        category,
        desc,
        startLine: i,
        endLine: -1,
        calledBy: [],
        calls: []
      });
    }
  }

  // Tentukan batas akhir (endLine) tiap fungsi dengan melacak kurung kurawal { }
  let openFuncStack = [];
  let braceCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const startingFunc = functions.find(f => f.startLine === i);
    if (startingFunc) {
      openFuncStack.push({ func: startingFunc, initialBraces: braceCount });
    }

    // Hitung kurung kurawal di baris (abaikan komentar string sederhana)
    const cleanLine = line.replace(/\/\/.*$/, '').replace(/(["'`]).*?\1/g, '');
    for (const char of cleanLine) {
      if (char === '{') braceCount++;
      if (char === '}') {
        braceCount--;
        if (openFuncStack.length > 0) {
          const top = openFuncStack[openFuncStack.length - 1];
          if (braceCount <= top.initialBraces) {
            top.func.endLine = i;
            openFuncStack.pop();
          }
        }
      }
    }
  }

  return { functions, lines };
}

// Analisis Call Sites (Lokasi Pemanggilan)
function findCallSites(allFunctions, parsedFiles) {
  const funcMap = new Map();
  allFunctions.forEach(f => funcMap.set(f.name, f));

  // 1. Pindai HTML untuk event handlers dan pemanggilan di tag <script>
  if (fs.existsSync(SOURCE_FILES.html)) {
    const htmlLines = fs.readFileSync(SOURCE_FILES.html, 'utf8').split('\n');
    htmlLines.forEach((line, idx) => {
      const lineNum = idx + 1;
      allFunctions.forEach(f => {
        // Cek regex pemanggilan foo( atau on...="foo
        const callRegex = new RegExp(`\\b${f.name}\\s*\\(`, 'g');
        if (callRegex.test(line)) {
          // Deteksi event HTML jika ada
          const eventMatch = line.match(new RegExp(`(on[a-z]+)=["'][^"']*?\\b${f.name}\\s*\\(`, 'i'));
          const eventLabel = eventMatch ? `Event \`${eventMatch[1]}\`` : 'Inline Script / Markup';
          f.calledBy.push({
            file: 'index.html',
            line: lineNum,
            context: eventLabel,
            snippet: line.trim().substring(0, 100)
          });
        }
      });
    });
  }

  // 2. Pindai file JS (app.js, google_apps_script.js, tests)
  for (const [key, filePath] of Object.entries(SOURCE_FILES)) {
    if (key === 'html' || !fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const baseName = path.basename(filePath);
    const fileFuncs = parsedFiles[key] ? parsedFiles[key].functions : [];

    lines.forEach((line, idx) => {
      const lineNum = idx + 1;
      // Jangan hitung jika baris adalah komentar murni
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) return;

      // Cari fungsi enclosing saat ini
      const enclosingFunc = fileFuncs.find(f => idx >= f.startLine && (f.endLine === -1 || idx <= f.endLine));

      allFunctions.forEach(f => {
        // Abaikan baris deklarasi dirinya sendiri
        if (f.fileName === baseName && f.lineNum === lineNum) return;

        const callRegex = new RegExp(`\\b${f.name}\\s*\\(`, 'g');
        if (callRegex.test(line)) {
          const contextDesc = enclosingFunc 
            ? `di dalam fungsi \`${enclosingFunc.name}()\`` 
            : (baseName.includes('test') ? 'pada skenario pengujian' : 'cakupan global / event handler');

          f.calledBy.push({
            file: baseName,
            line: lineNum,
            context: contextDesc,
            snippet: line.trim().substring(0, 100)
          });

          // Catat juga bahwa enclosingFunc memanggil f
          if (enclosingFunc && enclosingFunc.name !== f.name && !enclosingFunc.calls.includes(f.name)) {
            enclosingFunc.calls.push(f.name);
          }
        }
      });
    });
  }
}

// Generate Markdown Document
function generateMarkdown(allFunctions) {
  const timestamp = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
  const totalFuncs = allFunctions.length;
  const appFuncs = allFunctions.filter(f => f.fileKey === 'app').length;
  const gasFuncs = allFunctions.filter(f => f.fileKey === 'gas').length;
  const totalCalls = allFunctions.reduce((sum, f) => sum + f.calledBy.length, 0);

  // Kelompokkan per Kategori
  const categories = {};
  allFunctions.forEach(f => {
    if (!categories[f.category]) categories[f.category] = [];
    categories[f.category].push(f);
  });

  let md = `# 📖 INDEKS FUNGSI DAN PETA PEMANGGILAN KODE (FUNCTION MAP)
> **Turnamen E-Sports Yokke Squad 2026**  
> *Dokumen ini dibuat otomatis oleh script \`scripts/generate_function_index.js\`. Pembaruan dilakukan secara otomatis setiap kali ada perubahan pada source code.*

---

## 📊 Ringkasan Eksekutif
- **Total Fungsi Terdaftar:** ${totalFuncs} fungsi (${appFuncs} di \`app.js\`, ${gasFuncs} di \`google_apps_script.js\`)
- **Total Titik Pemanggilan (Call Sites):** ${totalCalls} titik pemanggilan teridentifikasi
- **Terakhir Diperbarui:** ${timestamp} WIB
- **Cara Memperbarui Otomatis:**
  - Sekali jalan: \`node scripts/generate_function_index.js\`
  - Mode Pantau (Realtime Auto-Update saat simpan kode): \`node scripts/generate_function_index.js --watch\`
  - Bersamaan saat test: \`node tests/functional_tests.js\`

---

## 📑 Daftar Isi Modul
`;

  Object.keys(categories).forEach((cat, idx) => {
    const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    md += `${idx + 1}. [${cat} (${categories[cat].length} fungsi)](#${slug})\n`;
  });

  md += `\n---\n\n## ⚡ Tabel Referensi Cepat (Pencarian Cepat / Ctrl+F)\n\n`;
  md += `| No | Nama Fungsi | File & Baris | Kategori | Ringkasan Kegunaan | Jumlah Pemanggilan |\n`;
  md += `|:--:|:---|:---|:---|:---|:--:|\n`;

  allFunctions.forEach((f, idx) => {
    const fileLink = `[${f.fileName}:${f.lineNum}](${f.fileName}#L${f.lineNum})`;
    const funcAnchor = `#${f.name.toLowerCase()}`;
    const briefDesc = f.desc ? f.desc.replace(/\|/g, '\\|') : `Fungsi operasional untuk ${f.name}`;
    md += `| ${idx + 1} | [**\`${f.name}()\`**](${funcAnchor}) | ${fileLink} | ${f.category} | ${briefDesc.substring(0, 75)}${briefDesc.length > 75 ? '...' : ''} | ${f.calledBy.length}x |\n`;
  });

  md += `\n---\n\n## 🔍 Rincian Lengkap Fungsi dan Lokasi Pemanggilan\n\n`;

  for (const [category, funcs] of Object.entries(categories)) {
    const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    md += `### ${category}\n\n`;

    funcs.forEach(f => {
      md += `<a id="${f.name.toLowerCase()}"></a>\n`;
      md += `#### \`${f.name}(${f.params})\`\n\n`;
      md += `- **Definisi:** [\`${f.fileName}:${f.lineNum}\`](${f.fileName}#L${f.lineNum})\n`;
      if (f.desc) {
        md += `- **Deskripsi:** ${f.desc}\n`;
      }
      
      // Callers (Dipanggil Oleh)
      if (f.calledBy.length === 0) {
        md += `- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*\n`;
      } else {
        md += `- **Titik Pemanggilan (${f.calledBy.length} lokasi):**\n`;
        f.calledBy.forEach(call => {
          md += `  - [\`${call.file}:${call.line}\`](${call.file}#L${call.line}) — ${call.context}\n`;
          if (call.snippet) {
            md += `    \`${call.snippet.replace(/`/g, "'")}\`\n`;
          }
        });
      }

      // Callees (Memanggil Fungsi Lain)
      if (f.calls.length > 0) {
        md += `- **Memanggil Fungsi Internal:** ${f.calls.map(c => `[\`${c}()\`](#${c.toLowerCase()})`).join(', ')}\n`;
      }

      md += `\n`;
    });

    md += `---\n\n`;
  }

  return md;
}

// Fungsi Eksekusi Pembuatan Indeks
function buildIndex() {
  console.log('🔍 Memindai seluruh fungsi dalam codebase...');
  const parsedFiles = {};
  let allFunctions = [];

  for (const [key, filePath] of Object.entries(SOURCE_FILES)) {
    if (key === 'html') continue;
    const res = parseFunctions(filePath, key);
    parsedFiles[key] = res;
    allFunctions = allFunctions.concat(res.functions);
  }

  console.log(`📌 Ditemukan ${allFunctions.length} fungsi. Menganalisis lokasi pemanggilan (Call Sites)...`);
  findCallSites(allFunctions, parsedFiles);

  console.log('📝 Menulis dokumentasi ke FUNCTION_INDEX.md...');
  const markdown = generateMarkdown(allFunctions);
  fs.writeFileSync(OUTPUT_FILE, markdown, 'utf8');

  console.log(`✅ BERHASIL: FUNCTION_INDEX.md telah diperbarui! (${allFunctions.length} fungsi, ${allFunctions.reduce((s, f) => s + f.calledBy.length, 0)} call sites).`);
  return allFunctions;
}

// Mode Watcher jika diberikan argumen --watch
if (process.argv.includes('--watch')) {
  buildIndex();
  console.log('\n👀 Mode Watcher AKTIF: Menunggu perubahan pada app.js, google_apps_script.js, atau index.html...\n');

  let debounceTimer = null;
  const filesToWatch = [SOURCE_FILES.app, SOURCE_FILES.gas, SOURCE_FILES.html];

  filesToWatch.forEach(file => {
    if (fs.existsSync(file)) {
      fs.watch(file, (eventType) => {
        if (debounceTimer) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          const now = new Date().toLocaleTimeString('id-ID');
          console.log(`\n🔄 [${now}] Perubahan terdeteksi pada ${path.basename(file)}! Memperbarui FUNCTION_INDEX.md...`);
          buildIndex();
        }, 300);
      });
    }
  });
} else {
  buildIndex();
}

module.exports = { buildIndex };
