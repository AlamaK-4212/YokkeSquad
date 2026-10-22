# 🏆 Portal Turnamen E-Sports Yokke Squad 2026 (MLBB & MCGG)

Portal web turnamen all-in-one tanpa server (*serverless*) untuk menyelenggarakan turnamen internal **Mobile Legends: Bang Bang (MLBB)** dan **Magic Chess: Go Go (MCGG)** bagi keluarga besar **Yokke Squad**.

---

## ⚡ Fitur Utama & Alur Turnamen (Update Terkini)

### 1. 🔒 Kontrol Status Pendaftaran & Proteksi Undian TM
- **Toggle Buka / Tutup Pendaftaran**: Tombol kontrol pendaftaran tersedia langsung di Top Bar, Tab Peserta, **Tab Bagan MLBB**, dan **Tab Poin MCGG**.
- **Proteksi Fase Technical Meeting (TM)**: Seluruh fungsi persiapan turnamen (*Acak Tim MLBB*, *Kunci Grup / Lock TM MLBB*, *Lanjut ke Playoff*, *Acak Lobi MCGG*, *Kunci Lobi / Lock TM MCGG*, dan *Undian Little Commander*) otomatis **dinonaktifkan (`disabled`)** selama status pendaftaran masih **DIBUKA**. Ini mencegah pengundian mendahului penutupan pendaftaran resmi.
- **Banner Peringatan Dinamis**: Tampil otomatis di Tab Bagan dan Tab Poin untuk memandu panitia menutup pendaftaran terlebih dahulu sebelum sesi undian.

### 2. 🔄 Tombol Reset Bagan & Pembagian Grup
- **🗑️ Reset Pembagian Grup & Bagan (MLBB)**: Mengosongkan kembali pembagian grup, jadwal pertandingan, skor hasil match BO3, bagan playoff, dan tie-breaker ke kondisi awal (belum diundi) dengan konfirmasi keamanan panitia.
- **↩️ Reset Poin & Undian (MCGG)**: Mengosongkan nilai ronde 1–3, poin sanksi, dan hasil undian commander di seluruh lobi MCGG.
- **↩️ Reset ke Tahap 1 (MLBB Playoff)**: Mengembalikan bagan dari fase playoff ke fase grup jika panitia perlu mengoreksi skor grup.

### 3. ⚔️ Modul Turnamen MLBB (Stage Machine ala Challonge)
- **Format Turnamen Fleksibel**:
  - `Otomatis (AUTO)`: Menyesuaikan pembagian grup berdasarkan jumlah tim terverifikasi (misal: 6 tim ➔ 2 grup @ 3 tim; ≥12 tim ➔ 4 grup).
  - `Fase 2 Grup (Grup A & B)`: Juara & Runner-up lolos ke Semifinal 4 Besar.
  - `Fase 4 Grup (Grup A, B, C, D)`: Juara & Runner-up lolos ke Perempat Final 8 Besar.
  - `Sistem Gugur (Knockout Bracket)`: Skema bracket 4, 8, atau 16 tim.
- **Pertandingan BO3 & Klasemen Otomatis**: Menghitung Match Win/Loss, Game Difference, dan Poin Klasemen secara otomatis.
- **Deteksi Tie-Breaker (BO1)**: Sistem mendeteksi otomatis jika ada nilai imbang di batas kualifikasi grup dan memunculkan match penentu BO1.
- **Penetapan MVP Match & Hero**: Panitia dapat mencatat MVP dan hero pilihan untuk tiap match yang selesai dipertandingkan.

### 4. ♟️ Modul Turnamen MCGG (Multi-Lobby & Commander Draw)
- **Pembagian Lobi Seimbang**: Membagi pemain terverifikasi ke Lobi Kualifikasi A dan B secara proporsional tanpa slot dummy.
- **Tabel Poin Resmi**: Rank 1 (`+4`), Rank 2 (`+3`), Rank 3 (`+2`), Rank 4 (`+1`), Rank 5 (`-1`), Rank 6 (`-2`), Rank 7 (`-3`), Rank 8 (`-4`).
- **Sistem Sanksi Otomatis**: Mendeteksi sanksi penggunaan commander yang sama pada ronde 2 berturut-turut (`-2 poin`).
- **Undian Little Commander Interaktif**: Panel undian commander per-lobi tepat di atas tabel masing-masing (Tier High, Mid, Meta) lengkap dengan foto avatar asli 25 commander resmi.
- **Rekap Prestasi**: Perhitungan otomatis jumlah Top 4 dan jumlah Juara 1 (MVP Ronde).

### 5. 🛡️ Validasi Roster & Integritas Peserta
- **Wajib Upload Logo Tim** (MLBB).
- **Wajib Upload Foto ID Card Pegawai Yokke** untuk setiap pemain dan official.
- **Aturan Non-Rangkap**: Official dilarang merangkap sebagai pemain di tim yang sama (dicek via NIP dan hash/file ID card).
- **Anti-Duplikasi NIP**: Mencegah pendaftaran ganda NIP dalam satu tim maupun antar peserta.

---

## 🗄️ Struktur Database Google Sheets & Google Apps Script

Aplikasi terhubung ke Google Sheets menggunakan Google Apps Script Webhook:

| No | Sheet / Tab | Fungsi & Isi Utama |
|---|---|---|
| 1 | **`MLBB - Tim`** | Data induk tim terdaftar: Nama Tim, Divisi, Kontak WA, Link Folder Drive, Status Verifikasi, Catatan Panitia. |
| 2 | **`MLBB - Peserta`** | Data roster pemain & official: Relasi Tim, Role, Nama Lengkap, NIP, IGN, Game ID, Status Organik, Link Foto ID Card. |
| 3 | **`Pendaftaran MCGG`** | 11 kolom data pemain solo MCGG: Nama, Divisi, WA, NIP unik, Game ID, IGN, Status Pegawai, Link ID Card, Verifikasi. |
| 4 | **`Pengaturan Turnamen`** | State config: `isRegistrationClosed`, format bagan, `groupStageData`, `groupMatchResults`, `groupPlayoffMatches`, `mcggLobbies`, `mcggDrawState`, `tournamentStageState`, PIN panitia. |
| 5 | **`MCGG Match Set Up`** | Master Little Commander (Hero, Alter Name, Tier, Image URLs). |
| 6 | **`MLBB - Klasemen & Point`** | *(Dedicated Live Sheet)* Rekap poin klasemen fase grup MLBB secara real-time. |
| 7 | **`MLBB - Bagan & MVP`** | *(Dedicated Live Sheet)* Jadwal pertandingan, skor BO3, pemenang, dan catatan MVP + hero. |
| 8 | **`MCGG - Point, Commander & MVP`** | *(Dedicated Live Sheet)* Rekap nilai ronde 1–3, commander terpilih, sanksi, total poin, Top 4, dan gelar juara. |

---

## 🔑 Hak Akses & Operasional Panitia

- **Default PIN Panitia**: `YOKKE2026_` *(dapat disesuaikan di Google Sheets atau `app.js`)*
- **Cara Masuk**:
  1. Klik tombol **🔑 Login Panitia** di bar navigasi atas.
  2. Masukkan PIN Panitia.
  3. Setelah login, indikator status berubah menjadi `👑 Mode Panitia (Akses Penuh)` dan seluruh kontrol admin akan aktif.

---

## 🧪 Pengujian Fungsional (Automated Test Suite)

Codebase dilengkapi dengan test suite otomatis berbasis Node.js yang memverifikasi 68 skenario fungsional:

```powershell
node tests/functional_tests.js
```

Cakupan pengujian meliputi:
- Perhitungan tabel poin MCGG & aset commander.
- Validasi registrasi (logo tim, NIP ganda, rangkap official-pemain, foto ID card).
- Stage machine Challonge MLBB & tie-breaker BO1.
- Guard clause penutupan pendaftaran & tombol reset total grup/bagan.
- Sinkronisasi state config kosong/reset ke Google Sheets.
- Otomasi pembaruan dokumentasi call graph di `FUNCTION_INDEX.md`.

---

## 📂 Struktur File Repositori

```text
├── index.html                   # Antarmuka web utama turnamen (HTML5 semantic)
├── style.css                    # Tema visual Dark Cyber Yokke Squad E-Sports
├── app.js                       # Logika interaktif pendaftaran, bagan, lobi & sync state
├── google_apps_script.js        # Backend serverless Google Apps Script (Web App)
├── README.md                    # Dokumentasi lengkap proyek
├── FUNCTION_INDEX.md            # Indeks katalog fungsi dan call sites otomatis
├── tests/
│   └── functional_tests.js      # Suite pengujian otomatis (68 test case)
└── scripts/
    └── generate_function_index.js # Generator indeks pemetaan fungsi codebase
```

---

## 🚀 Panduan Deployment Webhook Google Apps Script

Jika melakukan pembaruan pada `google_apps_script.js`:
1. Buka Google Spreadsheet turnamen di Google Drive.
2. Masuk ke menu **Extensions > Apps Script**.
3. Salin isi kode dari `google_apps_script.js` ke editor Apps Script.
4. Klik **Deploy > Manage deployments > Edit > New version**.
5. Pastikan konfigurasi:
   - **Execute as**: `Me (<email_panitia>)`
   - **Who has access**: `Anyone`
6. Salin URL Web App yang dihasilkan ke konstanta `GOOGLE_SHEET_WEBHOOK_URL` di `app.js`.
