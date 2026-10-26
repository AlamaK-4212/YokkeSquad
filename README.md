# 🏆 Portal Turnamen E-Sports Yokke Squad 2026 (MLBB & MCGG)

Portal web turnamen all-in-one tanpa server (*serverless*) untuk menyelenggarakan turnamen internal **Mobile Legends: Bang Bang (MLBB)** dan **Magic Chess: Go Go (MCGG)** bagi keluarga besar **Yokke Squad**.

---

## ⚡ Fitur Utama & Alur Turnamen (Update Terkini)

### 1. 🚀 Fullscreen Live Sync Loader & Eliminasi Cache (Ground Truth 100% GSheet)
- **Layar Pemuat Awal Interaktif (`#appGlobalLoader`)**: Saat halaman pertama kali dibuka atau di-reload, portal menampilkan layar pemuat bernuansa Cyberpunk Dark Yokke Esports secara penuh.
- **Eliminasi Cache Total & Kompatibilitas Vercel Production**: 
  - `fetch` ke Google Apps Script menggunakan standar *CORS Simple Request* dengan URL parameter anti-cache `_nocache=${Date.now()}` dan `redirect: 'follow'` tanpa custom request headers (`Cache-Control` / `Pragma`).
  - Mencegah preflight `OPTIONS` yang ditolak oleh Google Apps Script di environment produksi seperti Vercel (`https://yokkesquad.vercel.app/`), sekaligus menjamin tidak ada respons yang dicache oleh browser.
  - Sistem meng-`await` pengambilan data murni dari Google Sheets secara tuntas sebelum menutup layar pemuat dan merender UI.
  - Seluruh status verifikasi, pendaftar, lobi MCGG, dan grup MLBB diperbarui langsung dari Google Sheets ke memori/localStorage tanpa ada data usang (*stale cache*) yang sempat terlihat oleh pengguna.
- **Toggle Buka / Tutup Pendaftaran**: Tombol kontrol pendaftaran tersedia langsung di Top Bar, Tab Peserta, **Tab Bagan MLBB**, dan **Tab Poin MCGG**.
- **Proteksi Fase Technical Meeting (TM)**: Seluruh fungsi persiapan turnamen (*Acak Tim MLBB*, *Kunci Grup / Lock TM MLBB*, *Lanjut ke Playoff*, *Acak Lobi MCGG*, *Kunci Lobi / Lock TM MCGG*, dan *Undian Little Commander*) otomatis **dinonaktifkan (`disabled`)** selama status pendaftaran masih **DIBUKA**. Ini mencegah pengundian mendahului penutupan pendaftaran resmi.
- **Banner Peringatan Dinamis**: Tampil otomatis di Tab Bagan dan Tab Poin untuk memandu panitia menutup pendaftaran terlebih dahulu sebelum sesi undian.

### 2. 🔄 Tombol Reset Bagan & Pembagian Grup
- **🗑️ Reset Pembagian Grup & Bagan (MLBB)**: Mengosongkan kembali pembagian grup, jadwal pertandingan, skor hasil match BO3, bagan playoff, dan tie-breaker ke kondisi awal (belum diundi) dengan konfirmasi keamanan panitia.
- **↩️ Reset Poin & Undian (MCGG)**: Mengosongkan nilai ronde 1–3, poin sanksi, dan hasil undian commander di seluruh lobi MCGG.
- **↩️ Reset ke Tahap 1 (MLBB Playoff)**: Mengembalikan bagan dari fase playoff ke fase grup jika panitia perlu mengoreksi skor grup.

### 3. ⚔️ Modul Turnamen MLBB (Roadmap Resmi 3 Minggu & Master-Detail Hub)
- **Roadmap Resmi Turnamen MLBB 3 Minggu**:
  - **🏆 Week 1: Fase Grup 8 Grup (5 Hari • Matchday 1–5)**:
    - Babak Penyisihan 8 Grup (Grup A s/d H, 41 Tim) sistem *Round-Robin* Best of 3 (BO3).
    - **Batasan Sesi Harian**: Maksimal **2 sesi per hari** (Sesi 1: 19:00 WIB & Sesi 2: 20:30 WIB).
    - **Dua Pertandingan Simultan per Sesi**: Dalam grup yang sama, dapat berlangsung **2 pertandingan secara bersamaan/paralel** (`Stream 1 (Room A)` dan `Stream 2 (Room B)`).
    - **Regulasi Rest Rule Mutlak (Nol Tim Main 2 Kali Sehari)**: Distribusi jadwal 5 hari menjamin **100% tidak ada tim yang bermain 2 kali dalam satu hari** di seluruh Matchday 1–5. Setiap tim bertanding tepat 1 kali pada hari aktif mereka (dan mendapat 1 hari istirahat/BYE untuk grup 5 tim).
    - Menghasilkan **16 Tim Upper Bracket** (Juara 1 & 2 tiap grup) dan **8 Tim Lower Bracket** (Juara 3 tiap grup).
    - Dilengkapi banner tim yang istirahat (*BYE*) per hari (`☕ Tim Istirahat Hari X: [Nama Tim]`).
  - **🔥 Week 2: Playoff 16 Besar s/d Semifinal (4 Hari • Double Elimination)**:
    - `Hari 6`: Upper Bracket Round 1 (16 Besar - 8 Match BO3).
    - `Hari 7`: Lower Bracket Round 1 (8 Match BO3).
    - `Hari 8`: Upper Bracket QF & Lower Bracket Round 2 (8 Match BO3).
    - `Hari 9`: Upper Bracket SF (Penentuan Finalis UB) & Lower Bracket QF.
  - **👑 Week 3: Final Stage & Super Grand Final (4 Hari • Offline Final)**:
    - `Hari 10`: Lower Bracket Semifinal (BO3) & Upper Bracket Final (BO5).
    - `Hari 11`: Lower Bracket Final (BO5).
    - `Hari 12`: Bronze Match (Perebutan Juara 3 & 4 - BO5).
    - `Hari 13`: Super Grand Final Offline Best of 7 (BO7) di Kantor Pusat Yokke!
- **Ground Truth Sinkronisasi Sheet Dedicated MLBB**:
  - `google_apps_script.js` membaca langsung sheet **`MLBB - Klasemen & Point`` (pembagian grup, skor, match played, W/L) dan **`MLBB - Bagan & MVP`` (jadwal fixture, hari, sesi, stream room, skor BO3, pemenang, dan MVP) saat `GET` request.

### 4. ♟️ Modul Turnamen MCGG (Multi-Lobby, Ground Truth & Undian Komandan)
- **Ground Truth Sinkronisasi Sheet Dedicated MCGG**:
  - `google_apps_script.js` membaca langsung sheet dedicated **`MCGG - Point, Commander & MVP`** sebagai sumber kebenaran data undian kursi, skor ronde 1–3, dan pilihan commander.
  - `app.js` dilengkapi logika preservasi kursi lobi: jika lobi kualifikasi sudah terisi (`!doShuffle && existingPlayerCount > 0`), sistem **TIDAK AKAN** mereset atau mengacak ulang susunan pemain saat reload halaman atau saat sinkronisasi Google Sheets.
- **5 Lobi Kualifikasi Seimbang (A–E)**: Membagi 35–37 pemain terverifikasi secara proporsional (kapasitas 8, 8, 7, 7, 7) tanpa slot dummy.
- **Round-Robin Greedy Dispersal per Klaster Divisi**: Menjamin 0% bentrok divisi untuk tim beranggotakan $\le 5$ orang (Risk Management, IT Dev, Product, PMO, Change & Release).
- **Tabel Poin Resmi**: Rank 1 (`+4`), Rank 2 (`+3`), Rank 3 (`+2`), Rank 4 (`+1`), Rank 5 (`-1`), Rank 6 (`-2`), Rank 7 (`-3`), Rank 8 (`-4`).
- **Undian Little Commander Interaktif**: Mesin undian terintegrasi per-lobi (Tier High, Mid, Meta) lengkap dengan foto avatar asli 25 commander resmi. Pada Match 2, sistem otomatis mengecualikan komandan yang sudah digunakan di Match 1.

### 5. 🏢 Standarisasi Taksonomi & 11 Klaster Divisi Resmi Yokke
Mesin normalisasi otomatis `getDepartmentCluster(rawDept, name)` menstandarkan puluhan variasi teks bebas pendaftar ke **11 Klaster Divisi Resmi**:
1. `IT - Quality Assurance`
2. `IT - Engineering & Development`
3. `IT - Change, Release & Service Ops`
4. `IT - Security & Infrastructure`
5. `Product Management & OPPI`
6. `Risk Management & Compliance`
7. `Project Management Office`
8. `Regional ADO & Field Operations`
9. `Merchant Operations & Business`
10. `Marketing, CRM & Commercial`
11. `General & Logistics`

Elemen `<datalist id="yokkeDeptList">` terintegrasi pada form pendaftaran MLBB, solo MCGG, dan modal edit peserta untuk memberikan saran penulisan seragam secara otomatis.

### 6. 🛡️ Validasi Roster & Integritas Peserta
- **Wajib Upload Logo Tim** (MLBB).
- **Wajib Upload Foto ID Card Pegawai Yokke** untuk setiap pemain dan official.
- **Aturan Non-Rangkap**: Official dilarang merangkap sebagai pemain di tim yang sama (dicek via NIP dan hash/file ID card).
- **Anti-Duplikasi NIP**: Mencegah pendaftaran ganda NIP dalam satu tim maupun antar peserta.

### 7. 📜 Integrasi Peraturan Google Docs & Proteksi Form Registrasi
- **Single Source of Truth Google Docs**: Portal terhubung langsung ke Google Docs Regulasi Resmi YMC S4 2026 (`1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds`) dengan tombol pembaruan satu klik dan pembacaan otomatis.
- **Penonaktifan Dropdown & Mode Edit Publik**: Dropdown list tim terdaftar dihilangkan dari input nama tim/peserta (`registeredTeamsDatalist` & `registeredMcggDatalist`), serta sistem menolak pengeditan data tim yang sudah terdaftar (`ALLOW_PUBLIC_FORM_EDIT = false`) guna menjamin integritas data kompetisi.

---

## 🗄️ Struktur Database Google Sheets & Google Apps Script

Aplikasi terhubung ke Google Sheets menggunakan Google Apps Script Webhook dengan 8 dedicated sheet:

| No | Sheet / Tab | Fungsi & Isi Utama |
|---|---|---|
| 1 | **`MLBB - Tim`** | Data induk tim terdaftar: Nama Tim, Divisi, Kontak WA, Link Folder Drive, Status Verifikasi, Catatan Panitia. |
| 2 | **`MLBB - Peserta`** | Data roster pemain & official: Relasi Tim, Role, Nama Lengkap, NIP, IGN, Game ID, Status Organik, Link Foto ID Card. |
| 3 | **`Pendaftaran MCGG`** | 11 kolom data pemain solo MCGG: Nama, Divisi, WA, NIP unik, Game ID, IGN, Status Pegawai, Link ID Card, Verifikasi. |
| 4 | **`Pengaturan Turnamen`** | State config: `isRegistrationClosed`, format bagan, `groupStageData`, `groupMatchResults`, `groupPlayoffMatches`, `mcggLobbies`, `mcggDrawState`, `tournamentStageState`, PIN panitia. |
| 5 | **`MCGG Match Set Up`** | Master Little Commander (Hero, Alter Name, Tier, Image URLs). |
| 6 | **`MLBB - Klasemen & Point`** | *(Dedicated Live Sheet)* Rekap poin klasemen fase grup MLBB secara real-time & ground truth grup. |
| 7 | **`MLBB - Bagan & MVP`** | *(Dedicated Live Sheet)* Jadwal pertandingan, skor BO3, pemenang, dan catatan MVP + hero. |
| 8 | **`MCGG - Point, Commander & MVP`** | *(Dedicated Live Sheet)* Rekap nilai ronde 1–3, commander terpilih, sanksi, total poin, Top 4, gelar juara, dan sumber data utama pembagian lobi. |

---

## 🔑 Hak Akses & Operasional Panitia

- **Default PIN Panitia**: `YOKKE2026_` *(dapat disesuaikan di Google Sheets atau `app.js`)*
- **Cara Masuk**:
  1. Klik tombol **🔑 Login Panitia** di bar navigasi atas.
  2. Masukkan PIN Panitia.
  3. Setelah login, indikator status berubah menjadi `👑 Mode Panitia (Akses Penuh)` dan seluruh kontrol admin akan aktif.

---

## 🧪 Pengujian Fungsional (Automated Test Suite)

Codebase dilengkapi dengan test suite otomatis berbasis Node.js yang memverifikasi **79 skenario fungsional + 23 skenario improvement (100% Lulus)**:

```powershell
npm test
```

Cakupan pengujian meliputi:
- **Suite 1**: Sistem Poin MCGG, Utilitas Format & Aset Commander (10 test case).
- **Suite 2**: Aturan Validasi Registrasi & Integritas Roster (7 test case).
- **Suite 3**: Integrasi Live Webhook Google Apps Script (4 test case).
- **Suite 4**: Skema Relasional GSheet & Fungsi Listing (8 test case).
- **Suite 5**: Validasi Unique ID, Pop-up Konfirmasi & Anti-Race Condition (3 test case).
- **Suite 6**: Modul Dinamis Grup, Lobi, dan Bagan MLBB & MCGG (11 test case).
- **Suite 7**: Stage Machine Challonge, Restriksi Undian & Indeks Fungsi (6 test case).
- **Suite 8**: Pemisahan 3 Sheet Dedicated, MVP Turnamen & Undian Per-Lobi (4 test case).
- **Suite 9**: Tutup/Buka Pendaftaran & Reset Poin/Undian MCGG (4 test case).
- **Suite 10**: Format 8 Grup MLBB 5 Hari, Undian Match 2 MCGG, Hierarki Aturan Undian, Relaksasi Bertingkat & Strict Balance (14 test case).
- **Suite 11**: Master-Detail Hub, Ground Truth Sinkronisasi GSheet, Fullscreen Loader & Jadwal 3 Minggu MLBB (9 test case).
- **Suite 12**: Integrasi Peraturan Google Docs & Proteksi Form Registrasi (4 test case).

---

## 📂 Struktur File Repositori & Otomasi Indeks

```text
├── index.html                   # Antarmuka web utama turnamen (HTML5 semantic)
├── style.css                    # Tema visual Dark Cyber Yokke Squad E-Sports & Loading Screen
├── app.js                       # Logika interaktif pendaftaran, bagan, lobi, sync state & loader
├── google_apps_script.js        # Backend serverless Google Apps Script (Web App)
├── README.md                    # Dokumentasi lengkap proyek
├── FUNCTION_INDEX.md            # Indeks katalog fungsi otomatis (213 fungsi, 867 call sites)
├── tests/
│   ├── syntax_check.js          # Validator sintaks & parsing JavaScript
│   └── functional_tests.js      # Suite pengujian fungsional otomatis (80 test case)
└── scripts/
    └── generate_function_index.js # Generator indeks pemetaan fungsi codebase
```

---

## 🚀 Panduan Deployment Webhook Google Apps Script

Jika melakukan pembaruan pada `google_apps_script.js`:
1. Buka Google Spreadsheet turnamen di Google Drive.
2. Masuk ke menu **Extensions > Apps Script**.
3. Salin seluruh isi berkas [google_apps_script.js](file:///c:/Users/aziz.maulana/Downloads/yokkesquad-tournament/google_apps_script.js) ke editor Apps Script.
4. Klik **Deploy > Manage deployments > Edit > New version**.
5. Pastikan konfigurasi:
   - **Execute as**: `Me (<email_panitia>)`
   - **Who has access**: `Anyone`
6. Klik **Deploy**. Webhook otomatis mendukung pembacaan data ground-truth dari 3 sheet dedicated:
   - `MLBB - Klasemen & Point`
   - `MLBB - Bagan & MVP`
   - `MCGG - Point, Commander & MVP`
   Portal turnamen web akan menampilkan data murni dari Google Sheets secara langsung saat loading screen selesai.
