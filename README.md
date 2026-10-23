# 🏆 Portal Turnamen E-Sports Yokke Squad 2026 (MLBB & MCGG)

Portal web turnamen all-in-one tanpa server (*serverless*) untuk menyelenggarakan turnamen internal **Mobile Legends: Bang Bang (MLBB)** dan **Magic Chess: Go Go (MCGG)** bagi keluarga besar **Yokke Squad**.

---

## ⚡ Fitur Utama & Alur Turnamen (Update Terkini)

### 1. 🚀 Fullscreen Live Sync Loader & Eliminasi Cache (Ground Truth 100% GSheet)
- **Layar Pemuat Awal Interaktif (`#appGlobalLoader`)**: Saat halaman pertama kali dibuka atau di-reload, portal menampilkan layar pemuat bernuansa Cyberpunk Dark Yokke Esports secara penuh.
- **Eliminasi Cache Total**: 
  - `fetch` ke Google Apps Script dilengkapi URL parameter anti-cache `_nocache=${Date.now()}` serta header `Cache-Control: no-cache, no-store`.
  - Sistem meng-`await` pengambilan data murni dari Google Sheets secara tuntas sebelum menutup layar pemuat dan merender UI.
  - Seluruh status verifikasi, pendaftar, lobi MCGG, dan grup MLBB diperbarui langsung dari Google Sheets ke memori/localStorage tanpa ada data usang (*stale cache*) yang sempat terlihat oleh pengguna.
- **Toggle Buka / Tutup Pendaftaran**: Tombol kontrol pendaftaran tersedia langsung di Top Bar, Tab Peserta, **Tab Bagan MLBB**, dan **Tab Poin MCGG**.
- **Proteksi Fase Technical Meeting (TM)**: Seluruh fungsi persiapan turnamen (*Acak Tim MLBB*, *Kunci Grup / Lock TM MLBB*, *Lanjut ke Playoff*, *Acak Lobi MCGG*, *Kunci Lobi / Lock TM MCGG*, dan *Undian Little Commander*) otomatis **dinonaktifkan (`disabled`)** selama status pendaftaran masih **DIBUKA**. Ini mencegah pengundian mendahului penutupan pendaftaran resmi.
- **Banner Peringatan Dinamis**: Tampil otomatis di Tab Bagan dan Tab Poin untuk memandu panitia menutup pendaftaran terlebih dahulu sebelum sesi undian.

### 2. 🔄 Tombol Reset Bagan & Pembagian Grup
- **🗑️ Reset Pembagian Grup & Bagan (MLBB)**: Mengosongkan kembali pembagian grup, jadwal pertandingan, skor hasil match BO3, bagan playoff, dan tie-breaker ke kondisi awal (belum diundi) dengan konfirmasi keamanan panitia.
- **↩️ Reset Poin & Undian (MCGG)**: Mengosongkan nilai ronde 1–3, poin sanksi, dan hasil undian commander di seluruh lobi MCGG.
- **↩️ Reset ke Tahap 1 (MLBB Playoff)**: Mengembalikan bagan dari fase playoff ke fase grup jika panitia perlu mengoreksi skor grup.

### 3. ⚔️ Modul Turnamen MLBB (8-Grup 5-Hari & Master-Detail Hub)
- **Format 8 Grup (5 Hari Kompetisi)**:
  - `Day 1`: Babak Penyisihan 8 Grup (Grup A s/d H) sistem *Round-Robin* Best of 3 (BO3).
  - `Day 2`: Upper Bracket Babak 16 Besar (Juara 1 & 2 tiap grup).
  - `Day 3`: Lower Bracket Babak 8 Besar (Juara 3 tiap grup).
  - `Day 4`: Semifinal Upper & Lower Bracket.
  - `Day 5`: Grand Final Offline.
- **Ground Truth Sinkronisasi Sheet Dedicated MLBB**:
  - `google_apps_script.js` membaca langsung sheet **`MLBB - Klasemen & Point`** (pembagian grup, skor, match played, W/L) dan **`MLBB - Bagan & MVP`** (jadwal fixture, skor BO3, pemenang, dan MVP) saat `GET /exec`.
  - Tampilan bagan dan klasemen MLBB di website 100% identik dengan sheet Google Sheets tanpa risiko ter-overwrite oleh algoritma undian lokal.
- **Master-Detail Interactive Tournament Hub (1:3 Split Pane)**:
  - Sisi kiri: Pohon alur navigasi tahapan kompetisi dengan lencana ringkasan metrik instan.
  - Sisi kanan: Panel detail dinamis yang menampilkan klasemen langsung, jadwal BO3, dan form skor pertandingan.
- **Hierarki 3 Aturan Emas Undian & Relaksasi Bertingkat (*Cascading Relaxation*)**:
  1. **Aturan 1 (Invited Teams)**: Maksimal 1 tim undangan/unggulan per grup, dialokasikan pertama kali.
  2. **Aturan 2 (Tim Satelit / Prefix Sama)**: Tim dengan kata depan identik (contoh: `AANG Alpha` vs `AANG Beta`) dilarang satu grup.
  3. **Aturan 3 (Anti-Bentrok Divisi)**: Tim dari klaster divisi yang sama disebar ke grup berbeda.
  - **Mekanisme Penempatan & 3 Siklus Relaksasi**:
    - Penempatan tim reguler selalu memprioritaskan grup dengan jumlah peserta terkecil terlebih dahulu (*Least-Filled Group First*), menggunakan *circular pointer* sebagai *tie-breaker*.
    - *Siklus 1 (Strict)*: Wajib memenuhi Aturan 2 (Satelit) dan Aturan 3 (Divisi).
    - *Siklus 2 (Relaksasi Divisi)*: Jika 1 putaran penuh gagal menemukan slot kosong, Aturan 3 (Divisi) dilonggarkan terlebih dahulu, sementara Aturan 2 (Satelit) tetap dijaga ketat.
    - *Siklus 3 (Relaksasi Satelit)*: Jika 2 putaran gagal, Aturan 2 (Satelit) dilonggarkan demi menjaga **keseimbangan kapasitas grup mutlak**.
- **Jaminan Strict Balance**: Untuk $N=41$ tim pada format 8 grup, sistem menjamin pembagian kapasitas mutlak: tepat **7 grup beranggotakan 5 tim** dan **1 grup beranggotakan 6 tim**.
- **Penetapan MVP Match & Hero**: Panitia dapat mencatat MVP dan hero pilihan untuk tiap match yang selesai dipertandingkan.

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

Codebase dilengkapi dengan test suite otomatis berbasis Node.js yang memverifikasi **80 skenario fungsional (100% Lulus)**:

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
- **Suite 11**: Master-Detail Hub, Ground Truth Sinkronisasi GSheet & Fullscreen Loader (8 test case).

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
