# Portal Turnamen E-Sports Yokke Squad 2026 (MLBB & MCGG)

Portal web turnamen all-in-one tanpa server untuk menyelenggarakan turnamen **Mobile Legends: Bang Bang (MLBB)** dan **Magic Chess: Go Go (MCGG)** bagi komunitas internal **Yokke Squad**.

---

## ⚡ Pembaruan Terbaru (Update 12 Oktober 2026)

### 1. Sinkronisasi Data Riil Pendaftar dari Database Google Sheets
Website telah terintegrasi dengan data pendaftar aktual dari Google Sheets:
- **Kategori MLBB**:
  - **Tim Yokke.AANG** (Divisi Product OPPI QA, Kontak WA: `081311665252`)
  - **Official 1**: Yugi Trilia Septiana (NIP: `2696260534`, Non-Organik)
  - **Kapten Tim**: Desiree Isaac Jacub (NIP: `2295130666`, Game ID: `47081647`, Organik)
  - **Roster Lengkap (7 Pemain)**: Achmad Fadly Djawas, Zidan Afandi, Aras Maulana, Farhan Ardiansyah, Muhammad Farhan Dany, Tunggul pasaribu.
- **Kategori MCGG (Pemain Solo)**:
  - **Fardhan Mauladi** (Product Management, Game ID: `111118942(4283)`)
  - **Gilang Fandi Setiaji** (IT Engineering, Game ID: `4117658(4148)`)
  - **Aziz Nur Maulana** (IT Engineering, Game ID: `9658392 (4020)`, Berkas ID Card di Drive)
  - **Pemain Uji Coba Drive Sukses** (IT QA, Game ID: `999999`, Berkas ID Card di Drive)

### 2. Penanganan Preview & Lightbox ID Card Google Drive
- Dukungan resolusi tinggi untuk tautan Google Drive (`drive.google.com`).
- Penambahan tombol **`[🔗 Buka File Asli di Google Drive ↗]`** pada Lightbox pop-up sehingga panitia dapat langsung memeriksa kartu pegawai resolusi penuh di Google Drive.
- Fallback otomatis apabila Google Drive membatasi tampilan iframe/thumbnail cross-origin.

### 3. Pembaruan Bagan MLBB & Lobi MCGG Otomatis
- Tim pendaftar aktif (seperti `Yokke.AANG`) otomatis diikutsertakan ke dalam bagan turnamen sistem gugur maupun fase grup tanpa harus menunggu pengubahan status manual.
- Pemain solo MCGG aktif otomatis mengisi slot kursi di **Lobi Kualifikasi A** dengan skor poin ronde yang siap dicatat oleh panitia.

---

## 🔑 Hak Akses Panitia
- **PIN Panitia**: `YOKKE2026`
- Fitur khusus panitia setelah login:
  - Verifikasi / Tolak pendaftaran (`VERIFIED` / `REJECTED`).
  - Edit Roster per-pemain, ubah NIP, Nickname IGN, dan ganti foto ID card.
  - Atur bagan sistem gugur (4, 8, 16 tim) atau fase grup (2 atau 4 grup).
  - Input skor kemenangan MLBB dan input ranking ronde MCGG (skema 10-8-6-5-4-3-2-1 pt).
  - Edit peraturan turnamen secara fleksibel.

---

## 🛠️ Panduan Integrasi Google Apps Script (Webhook)

Jika Anda melihat pesan *"Sorry, unable to open the file at this time"* saat mengakses tautan Apps Script:
1. Pesan tersebut muncul jika browser membuka URL Apps Script dengan multi-akun Google (`authuser=2`).
2. Pastikan Web App di Google Sheets dideploy dengan konfigurasi:
   - **Deploy > New deployment > Web app**
   - **Execute as (Jalankan sebagai)**: `Me (<email_panitia>)`
   - **Who has access (Akses)**: `Anyone` (Siapa saja, termasuk anonim).
3. Setelah dideploy, website dapat melakukan `GET` (sinkronisasi data ke web) dan `POST` (pendaftaran baru ke sheet & unggah foto ke Drive) secara otomatis tanpa kendala izin login.

---

## 📂 Struktur File

- `index.html`: Antarmuka utama aplikasi web turnamen.
- `style.css`: Tema visual Dark Gaming Cyber Yokke Squad.
- `app.js`: Logika interaktif pendaftaran, penyimpanan lokal, sinkronisasi Google Sheets, bagan turnamen, dan lobi MCGG.
- `google_apps_script.js`: Kode backend serverless Google Apps Script untuk Google Sheets & Google Drive.
- `README.md`: Dokumentasi teknis proyek.
- `yokkesquad-tournament.zip`: Paket arsip siap unggah ke GitHub / Vercel.
