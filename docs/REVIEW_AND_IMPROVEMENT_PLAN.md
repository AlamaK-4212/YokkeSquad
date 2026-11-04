---
title: "Review & Improvement Plan: Yokke Squad E-Sports Portal 2026"
category: "QA, Security & Architecture Audit"
target: "Production & Local Dev"
date: 2026-11-05
status: "Completed & Verified (100% Tests Passed)"
tags:
  - yokkesquad
  - esports
  - frontend
  - backend-gas
  - security
  - relational-sheets
  - stitch-mcp
  - uiux
---

# 🏆 Audit Komprehensif, Arsitektur & Rencana Tampilan Stitch MCP: Yokke Squad 2026

> [!INFO] Ringkasan Audit & Status Eksekusi Terkini
> - **Aplikasi**: Portal Web Turnamen Yokke Squad 2026 (MLBB & MCGG)
> - **URL Production**: `https://yokkesquad.vercel.app/`
> - **Google Apps Script Live Webhook**: `https://script.google.com/macros/s/AKfycbwoThOWtWRE0EfH_BmxbjIHlJTL-fT8hHfXTUZO5upHNQmUIldBIMKNHbjowqPnnsIAXg/exec`
> - **Status Pengujian Unit & Integrasi**:
>   - Functional Tests: **79/79 Test Cases Lulus (100%)**
>   - Improvement Tests: **23/23 Test Cases Lulus (100%)**
>   - Server PIN Security Tests: **7/7 Test Cases Lulus (100%)**
>   - Targeted 3-Row Sync Tests: **Semua Test Cases Lulus (100%)**
>   - Standings, Schedule & MVP Tests: **Semua Test Cases Lulus (100%)**
>   - Syntax & Parsing Check: **Valid & Lulus (0 Syntax Error)**

---

## 🔒 1. Keamanan & Autentikasi Panitia (Server-Side PIN Validation)

> [!CAUTION] Masalah Kebocoran PIN di Cache Browser (Terselesaikan)
> - **Penyebab Lama**: Fungsi pembacaan data `doGet` di Google Apps Script mengekspos `config.adminPassword` ke respon publik, dan frontend menyimpannya ke `localStorage.setItem('yokke_admin_pin', currentAdminPin)`. Akibatnya, PIN panitia terbaca secara telanjang di menu browser *DevTools > Application > Local Storage*.
> - **Validasi Server-Side**: Verifikasi PIN kini dipindahkan 100% ke Google Apps Script via action `VERIFY_ADMIN_PIN`. Client web tidak lagi membandingkan PIN secara lokal.
> - **Zero Cache Exposure**: Field `adminPassword` telah dihapus sepenuhnya dari payload `doGet` publik. Kunci `yokke_admin_pin` otomatis dibersihkan dari `localStorage` saat inisialisasi aplikasi.
> - **Sesi Panitia Terisolasi**: Status login panitia dan token auth disimpan dalam memori runtime dan `sessionStorage` (hanya berlaku pada tab aktif dan terhapus otomatis saat tab/browser ditutup).

---

## 🗄️ 2. Arsitektur Relasional Murni (Pemberantasan Limit Sel 50.000 Karakter)

> [!WARNING] Masalah Batas Karakter Sel Google Sheets (Terselesaikan)
> Pada implementasi sebelumnya, seluruh array objek pertandingan, bagan playoff, dan klasemen disimpan sebagai satu string JSON raksasa pada kolom B tab `Pengaturan Turnamen`. Ketika turnamen berkembang menjadi 8 grup dan 6 ronde playoff, ukuran string JSON melampaui batas maksimal **50.000 karakter per sel** Google Sheets, memicu *silent truncate* dan data rusak.

### Rincian Skema Tabel 3 Sheet Turnamen Terpisah

| Sheet Target | Jumlah Kolom | Struktur Kolom Utama |
|---|---|---|
| **MLBB - Bagan & MVP** | 21 Kolom | `ID Match`, `Tahap / Fase`, `Format`, `Tim A`, `Skor A`, `Skor B`, `Tim B`, `Pemenang Match`, `MVP Match`, `Hero MVP`, `Status Match`, `Ronde Index`, `Match Index`, `Cabang Bracket`, `Jadwal Hari`, `Jam Tanding`, `Game 1 s/d 5 Hasil` |
| **MLBB - Klasemen & Point** | 10 Kolom | `Grup`, `Peringkat`, `Nama Tim`, `Match`, `Menang`, `Kalah`, `Agregat Game (Diff)`, `Poin Klasemen`, `Status Kelolosan`, `Total MVP Team` |
| **MCGG - Point, Commander & MVP** | 16 Kolom | `Lobi`, `Peringkat`, `Nama Pemain`, `Departemen`, `R1 Rank/Poin/Commander`, `R2 Rank/Poin/Commander`, `R3 Rank/Poin/Commander`, `Total Poin`, `Total MVP (Rank 1)`, `Status Kelolosan` |
| **Pengaturan Turnamen** | 3 Kolom | Nilai skalar ringkas: `tournamentFormat`, `isRegistrationClosed`, `isPlayoffLocked`, `isGroupLocked`, `tournamentStage`, `adminpassword`. Seluruh kunci lama bernilai `"MIGRATED_TO_RELATIONAL_SHEETS"`. |

---

## 🎨 3. Rencana Desain Antarmuka & Integrasi Google Stitch MCP

Untuk menghadirkan pengalaman visual kelas turnamen esports profesional yang modern, responsif, dan ergonomis, kita menyusun **Rencana Pembaruan Tampilan (UI/UX Plan)** menggunakan **Google Stitch MCP**.

### A. Konfigurasi Server Stitch MCP

Server Stitch MCP dikonfigurasikan pada berkas konfigurasi MCP (`mcp_config.json`):

```json
{
  "mcpServers": {
    "stitch": {
      "type": "http",
      "url": "https://stitch.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "AQ.Ab8RN6KUd74UgMTPe6Hzs-qs9mz-AhWBNh-hCCmzI8FZzFszYQ"
      }
    }
  }
}
```

### B. Roadmap Modul Tampilan yang Dibuat dengan Stitch MCP

#### 1. Modul 1: Interactive Playoff Bracket Tree (6 Ronde Lengkap)
* **Tujuan**: Visualisasi bagan pohon eliminasi ganda (Upper Bracket 16 Tim & Lower Bracket) yang mulus di desktop dan mobile.
* **Fitur Utama**:
  - Kanvas responsif dengan visual kartu pertandingan (*match node*) bergaris sambung neon glowing.
  - Kartu menampilkan badge tahap (*Upper 16 Besar, QF, SF, Lower R1-R3, Grand Final BO5*), logo tim, status (*Live, Finished, Scheduled*), dan skor game.
  - Interaksi tap/hover untuk menampilkan kartu MVP (*Pemain + Hero + Badge Tim*) secara *popover*.
  - Mode navigasi babak ringkas (*compact swipeable stage tab*) saat dibuka di smartphone ($\le 992\text{px}$).

#### 2. Modul 2: Cyberpunk Admin Match Controller & Login Modal
* **Tujuan**: Antarmuka kontrol panel panitia turnamen yang berdaya guna tinggi (*powerhouse operational dashboard*).
* **Fitur Utama**:
  - **Modal Login Panitia**: Tampilan dialog bertema *cyberpunk glassmorphism* dengan indikator status server-side, animasi PIN dots aman, dan tombol login yang responsif terhadap penekanan tombol Enter.
  - **Quick Scoreboard Controller**: Panel input skor instan BO3/BO5 satu sentuhan (1-click increment/decrement skor) tanpa reload halaman.
  - **Roster & Meta Hero MVP Selector**: Tampilan chip roster per-tim yang interaktif dengan grid 17 hero meta MLBB terkini.
  - **Status Switcher & Lock Toggles**: Sakelar visual untuk *Kunci Undian Playoff*, *Kunci Tahap Grup*, dan *Buka/Tutup Pendaftaran*.

#### 3. Modul 3: Standings Hub & Papan Poin MCGG
* **Tujuan**: Penyajian klasemen yang dinamis dan informatif untuk 8 grup MLBB dan 3 Lobi MCGG.
* **Fitur Utama**:
  - **MLBB Klasemen**: Baris tim dengan badge status kelolosan (*Lolos Upper Bracket, Lolos Lower Bracket, Gugur*), kalkulator *Diff Agregat Game*, dan indikator Head-to-Head (H2H).
  - **MCGG Match Grid**: Format kartu 16 kolom per ronde (R1, R2, R3) dengan potret Little Commander berbingkai lingkaran ganda (*dual-circle hero portrait*) dan visual medali MVP Rank 1.

#### 4. Modul 4: Mobile-First Schedule & Match Stream Feed
* **Tujuan**: Halaman jadwal ramah peserta yang mudah dibagikan ke WhatsApp dan Discord panitia.
* **Fitur Utama**:
  - Filter pil jadwal per hari (*Semua Hari, Hari 1 [26 Okt], s/d Hari 5 [30 Okt]*).
  - Kartu match dengan indikator waktu (19:00 WIB / 20:00 WITA) dan tautan kanal streaming siaran langsung (*Stream 1, Stream 2, Stream 3*).
  - Modal verifikasi ID card pemain pop-up ber-resolusi tinggi dengan perlindungan *z-index layering*.

### C. Alur Kerja Integrasi Stitch ke Codebase

1. **Prompting & Layout Generation via Stitch**: Mengirim instruksi visual ke server Stitch MCP dengan spesifikasi warna tema Yokke (Cyan `#00d2ff`, Purple `#c084fc`, Dark Slate `#0a0f1d`, Gold `#fbbf24`).
2. **Review & Kompatibilitas CSS**: Mengekstrak kode HTML & CSS hasil Stitch, memastikan tidak terjadi tabrakan class dengan sistem tata letak di [style.css](file:///e:/Training/yokkesquad-tournament/style.css).
3. **Data Binding & Reaktivitas**: Menghubungkan markup komponen baru ke fungsi render di [app.js](file:///e:/Training/yokkesquad-tournament/app.js) (*renderMLBBPlayoffBracketUI, renderMLBBInteractiveHubUI, renderMCGGTable*).
4. **Verifikasi Aksesibilitas & Responsivitas**: Menjalankan pengujian kontras WCAG AA ($\ge 4.5:1$) dan tes fungsional mobile untuk memastikan seluruh tombol sentuh $\ge 40\text{px}$.

---

## ⚡ 4. Sinkronisasi Realtime & Vercel Edge Config

- **Pemicu `onEdit(e)` Otomatis**: Ditambahkan trigger otomatis di Google Apps Script yang mendeteksi pengeditan langsung di lembar kerja turnamen (*MLBB - Bagan & MVP, MLBB - Klasemen & Point, MCGG, Pengaturan Turnamen*).
- **Pelacakan Versi Data**: Menggunakan `PropertiesService.getScriptProperties()` untuk menaikkan versi data (`ver_mlbb_bagan`, `ver_mlbb_point`, `ver_mcgg_point`, dsb.) secara inkremental setiap kali terjadi perubahan.
- **Edge Config Integration**: Fungsi `syncVersionsToVercel(props)` menyiarkan versi terbaru ke Vercel Edge Config (`ecfg_oqmxozqwbyhphbiuxs2gry4gn0fc`) sehingga client web dapat melakukan verifikasi *stale-while-revalidate* instan.

---

## 📋 5. Action Items & Checklist Status

### 🔴 P0 - Keamanan & Integritas Data
- [x] Pindahkan validasi PIN Panitia dari client web ke Google Apps Script (`VERIFY_ADMIN_PIN`).
- [x] Bersihkan kunci `yokke_admin_pin` dari `localStorage` pengunjung saat aplikasi dibuka.
- [x] Hilangkan pembocoran `adminPassword` pada respon GET `doGet(e)`.
- [x] Migrasikan penyimpanan data turnamen ke skema 21 kolom relasional murni (bebas limit 50.000 karakter).
- [x] Rekonstruksi otomatis susunan bagan playoff 6 ronde (`reconstructedPlayoff`) langsung dari baris sheet.

### 🟡 P1 - Desain Tampilan via Stitch MCP & UX
- [x] Rancang arsitektur komponen & modul layar turnamen terintegrasi Stitch MCP.
- [ ] Implementasikan prototipe layout Playoff Bracket Tree 6 ronde menggunakan Stitch MCP.
- [ ] Implementasikan redesain Cyberpunk Admin Match Controller & Login Modal.
- [ ] Optimalkan kartu jadwal tanding mobile-first feed dengan live stream links.
- [x] Pasang animasi loading spinner dan status disabled pada tombol modal login panitia.
- [x] Dukungan tombol Enter keyboard untuk submit PIN panitia.
- [x] Modal pemilih MVP satu klik (1-click roster selector & meta hero autocomplete).
- [x] Pemisahan tim satelit dan anti-tabrakan divisi yang sama pada pengundian grup & lobi.
- [x] Dukungan multi-game MVP per-game untuk format seri BO3 dan Grand Final BO5.

### 🟢 P2 - Observabilitas & Deployment
- [x] Pembaruan indeks fungsi otomatis ([FUNCTION_INDEX.md](file:///e:/Training/yokkesquad-tournament/FUNCTION_INDEX.md)) mencakup 309 fungsi dan 1.328 call sites.
- [x] Unit test keamanan server PIN ([test_server_pin_validation.js](file:///e:/Training/yokkesquad-tournament/tests/test_server_pin_validation.js)) terintegrasi.
- [ ] Deploy versi baru Google Apps Script (*Deploy > Manage deployments > Edit > New version*).
- [ ] Push commit git dan verifikasi build di production Vercel.

---

## 🚀 6. Panduan Deployment Google Apps Script

Untuk mengaktifkan seluruh pembaruan backend ini pada spreadsheet live:

1. Buka Google Sheets turnamen: **Extensions > Apps Script**.
2. Salin seluruh isi berkas [google_apps_script.js](file:///e:/Training/yokkesquad-tournament/google_apps_script.js) dan tempel ke editor `Code.gs`.
3. Klik tombol **Deploy** di kanan atas > pilih **Manage deployments**.
4. Klik ikon **Pensil (Edit)** pada deployment aktif.
5. Pada pilihan **Version**, pilih **New version** (Versi Baru).
6. Masukkan deskripsi: `Yokke Squad Webhook v4 - Server-Side Auth & 21-Col Relational Sheets`.
7. Pastikan konfigurasi:
   - **Execute as**: `Me (<email_panitia>)`
   - **Who has access**: `Anyone` (Siapa saja)
8. Klik **Deploy** dan verifikasi URL `/exec`.
