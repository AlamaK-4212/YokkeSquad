---
title: "Changelog: Sinkronisasi Google Docs Peraturan & Proteksi Form Registrasi"
date: 2026-10-26
version: "1.2.0"
author: "Yokke Squad E-Sports Tech Team"
tags:
  - yokkesquad
  - esports
  - changelog
  - rules-sync
  - google-docs
  - registration-protection
  - obsidian
---

# 📝 Catatan Rilis & Perubahan: Versi 1.2.0 (26 Oktober 2026)

> [!INFO] Ringkasan Eksekutif
> Pembaruan ini mengintegrasikan portal turnamen **Yokke Squad E-Sports 2026** langsung dengan **Google Docs Peraturan Resmi YMC S4 2026** sebagai *single source of truth*, serta mengamankan form pendaftaran dengan menonaktifkan fungsi edit publik dan dropdown tim terdaftar demi integritas data kompetisi.

---

## 🚀 Fitur Utama & Pembaruan

### 1. 📜 Integrasi Dinamis Dokumen Peraturan Resmi Google Docs
- **Sumber Regulasi Terpusat (Multi-Tab Google Docs)**:
  - Google Docs ID: `1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds`
  - **Tab MLBB**: [Dokumen MLBB (`tab=t.0`)](https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/edit?hl=ID&tab=t.0) — Export: `/export?format=txt&tab=t.0`
  - **Tab MCGG**: [Dokumen MCGG (`tab=t.ji56ljhdhzkr`)](https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/edit?hl=ID&tab=t.ji56ljhdhzkr) — Export: `/export?format=txt&tab=t.ji56ljhdhzkr`
- **Fungsi Sinkronisasi (`fetchRulesFromGoogleDoc`)**:
  - Otomatis mengambil isi terbaru saat pengguna membuka tab **📜 Peraturan**.
  - Dilengkapi fitur *cache-busting* (`_nocache=${Date.now()}`) dan penguraian baris otomatis (judul bab, penomoran, Do and Don't).
  - Terdapat tombol manual **"🔄 Perbarui dari Google Docs"** dan tombol tautan langsung **"↗️ Buka Google Docs Asli"**.
  - Indikator badge visual (`#rulesSyncBadge`) yang menampilkan status sinkronisasi *real-time* atau status *offline fallback*.
- **Pembaruan Fallback Offline (`DEFAULT_RULES_MLBB`)**:
  - Menyelaraskan teks bawaan di `app.js` dengan berkas Google Docs resmi:
    - **Ketentuan Peserta MLBB** (7 poin persyaratan kepegawaian MTI, ID card fisik/e-Money, surat keterangan atasan).
    - **Ketentuan Pertandingan MLBB** (11 poin sistem BO3, single/double elimination, fearless draft, jadwal, jeda rest rule).
    - **DO and DON'T YMC S4 2026**:
      - *Do (15 Poin)*: Wajib on-camera Discord, menunjukkan device handphone, verifikasi ID card fisik & ID game, kehadiran di Discord 30 menit sebelum jadwal (18.30 WIB), pembuatan room custom draft pick mythic oleh tim home, screenshot hasil tanding.
      - *Don't (9 Poin)*: Larangan mematikan kamera saat tanding, diskualifikasi penggunaan akun tidak terdaftar / joki / cheat, larangan Chat All, sanksi keterlambatan >10 menit.

---

### 2. 🔒 Penonaktifan Fungsi Edit Publik & Dropdown List Tim
- **Penonaktifan Datalist Dropdown Tim/Peserta**:
  - Menghapus atribut `list="registeredTeamsDatalist"` pada input `#teamName` (MLBB) dan `list="registeredMcggDatalist"` pada input `#mcgg_name` (MCGG).
  - Elemen datalist disembunyikan (`style="display:none;"`) dan selalu dikosongkan pada `updateRegistrationDatalists()`.
  - Mencegah browser menampilkan daftar tim atau peserta yang sudah mendaftar sebagai saran input.
- **Penonaktifan Auto-Fill Form**:
  - Fungsi `handleTeamNameInput()` dan `handleMcggNameInput()` tidak lagi memuat data roster atau identitas tim lama secara otomatis.
  - Memberikan visual feedback peringatan merah transparan (*warning badge*) jika nama yang dimasukkan sudah terdaftar:
    > ⚠️ **Nama Tim / Peserta Sudah Terdaftar:** Fungsi edit di formulir pendaftaran dinonaktifkan. Silakan gunakan nama tim baru.
- **Proteksi Penolakan Pembaruan Publik (`ALLOW_PUBLIC_FORM_EDIT = false`)**:
  - Pada fungsi `handleRegister()`, sistem menetapkan restriksi mutlak `ALLOW_PUBLIC_FORM_EDIT = false`.
  - Jika calon pendaftar mencoba mendaftarkan tim atau NIP yang sudah ada di database, submit otomatis dibatalkan dan memunculkan notifikasi penolakan resmi:
    > ❌ **PENDAFTARAN DITOLAK:** Data dengan identitas tersebut sudah terdaftar di sistem! Fungsi edit di formulir pendaftaran telah dinonaktifkan oleh panitia.

---

### 3. 🧪 Pengujian Fungsional & Integritas Codebase
- **Penambahan Test Suite 12 (`tests/functional_tests.js`)**:
  - `12.1`: Verifikasi konstanta `GOOGLE_DOCS_RULES_DOC_URL` dan fungsi `fetchRulesFromGoogleDoc` di `app.js`.
  - `12.2`: Verifikasi teks regulasi resmi Google Docs pada `DEFAULT_RULES_MLBB`.
  - `12.3`: Verifikasi penghapusan atribut list datalist dropdown pada `#teamName` dan `#mcgg_name` di `index.html`.
  - `12.4`: Verifikasi restriksi `ALLOW_PUBLIC_FORM_EDIT = false` dan pesan penolakan edit di `app.js`.
- **Hasil Pengujian**:
  - Functional Tests: **79 / 79 Lulus (100% PASS)**
  - Improvement Tests: **23 / 23 Lulus (100% PASS)**
  - Syntax Check & Parsing JS: **100% Valid (0 Error)**
  - Katalog Fungsi: **223 fungsi terindeks dengan 820 call sites** di `FUNCTION_INDEX.md`.

---

## 📂 Berkas yang Dimodifikasi

| Berkas | Jenis Perubahan | Deskripsi Singkat |
|---|---|---|
| `app.js` | Modifikasi Logika | Konstanta URL Google Docs, `DEFAULT_RULES_MLBB`, fungsi `fetchRulesFromGoogleDoc`, penonaktifan auto-fill & proteksi `ALLOW_PUBLIC_FORM_EDIT`. |
| `index.html` | Modifikasi UI | Tombol sinkronisasi Google Docs, tombol buka dokumen asli, penghapusan `list` datalist dropdown pada `#teamName` dan `#mcgg_name`. |
| `tests/functional_tests.js` | Modifikasi Test | Penambahan Suite 12 (4 skenario pengujian baru). |
| `FUNCTION_INDEX.md` | Dokumentasi Otomatis | Pembaruan katalog fungsi dan relasi pemanggilan (call sites). |
| `CHANGELOG.md` | Dokumentasi | Catatan rilis lengkap versi 1.2.0. |
| `docs/CHANGELOG_OBSIDIAN.md` | Dokumentasi Obsidian | Catatan rilis siap pakai untuk Obsidian vault dengan metadata & callout. |

---

> [!SUCCESS] Status Implementasi
> Seluruh kode telah diuji secara menyeluruh di lingkungan lokal dan siap dideploy ke server produksi (Vercel & Google Apps Script).

