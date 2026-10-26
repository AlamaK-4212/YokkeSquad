---
title: "Yokke Squad E-Sports 2026 - Update Log"
note_type: "release_note"
date: 2026-10-26
time: 11:40
tags:
  - project/yokkesquad
  - tournament/esports
  - feature/rules-sync
  - feature/security
  - release/v1-2-0
status: "completed"
related_files:
  - "[[app.js]]"
  - "[[index.html]]"
  - "[[tests/functional_tests.js]]"
  - "[[FUNCTION_INDEX.md]]"
  - "[[README.md]]"
---

# 🎮 Yokke Squad E-Sports 2026 — Log Pembaruan Sistem

> [!HEADER] Detail Rilis
> - **Versi**: `v1.2.0`
> - **Tanggal**: `2026-10-26`
> - **Tautan Google Docs Aturan**: [Buku Regulasi YMC S4 2026](https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/edit?hl=ID&tab=t.0)
> - **Status Pengujian**: `78/78 Functional (100%)` | `23/23 Improvement (100%)`

---

## 📌 Tujuan Pembaruan

Pembaruan ini berfokus pada dua kebutuhan mendesak:
1. **Sinkronisasi Peraturan Dinamis**: Menghubungkan portal turnamen secara langsung ke dokumen resmi Google Docs milik panitia agar setiap revisi aturan dapat dibaca seketika tanpa redeploy aplikasi.
2. **Integritas Pendaftaran (Anti-Edit Publik)**: Mencegah tim atau peserta terdaftar mengubah data yang telah tersimpan di Google Sheets melalui form publik, serta menghilangkan *dropdown suggestions* tim lain di kolom input.

---

## 🛠️ Ringkasan Teknis Perubahan

### 1. Sinkronisasi Google Docs (`[[app.js]]` & `[[index.html]]`)

> [!NOTE] Arsitektur Sinkronisasi
> Portal turnamen menggunakan endpoint ekspor teks publik Google Docs:
> `https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/export?format=txt`
> Dokumen ini memiliki header CORS terbuka (`access-control-allow-origin: *`), memungkinkan pembacaan langsung dari peramban web (*client-side fetch*).

```javascript
// Konstanta URL Google Docs Resmi
const GOOGLE_DOCS_RULES_DOC_URL = "https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/edit?hl=ID&tab=t.0";
const GOOGLE_DOCS_RULES_EXPORT_URL = "https://docs.google.com/document/d/1bnYv1aPVa1uCji9hJI-PumFIwaaovvdEPm-aasqLIds/export?format=txt";

// Fungsi sinkronisasi otomatis dan manual
async function fetchRulesFromGoogleDoc(silent = false) { ... }
```

- **Fitur Tambahan UI**:
  - Tombol aksi `Perbarui dari Google Docs` di tab *📜 Peraturan*.
  - Tautan langsung `Buka Google Docs Asli` untuk verifikasi dokumen.
  - Badge `#rulesSyncBadge` dengan status sinkronisasi terakhir.

---

### 2. Penonaktifan Fungsi Edit Form (`[[app.js]]` & `[[index.html]]`)

> [!WARNING] Kebijakan Form Pendaftaran
> Form pendaftaran kini berstatus **Append-Only** (hanya menerima entri tim baru). Segala bentuk pengubahan data roster atau tim harus melalui panitia turnamen.

- **Penonaktifan Datalist**:
  - Input `#teamName` dan `#mcgg_name` dilepaskan dari atribut `list`.
  - Datalist `#registeredTeamsDatalist` dan `#registeredMcggDatalist` disembunyikan dan selalu dikosongkan.
- **Peringatan Tim/Peserta Duplikat**:
  - Handler input menampilkan notifikasi peringatan jika mendeteksi nama tim atau NIP sudah terdaftar di sistem.
- **Validasi Mutlak Submit**:
  ```javascript
  const ALLOW_PUBLIC_FORM_EDIT = false;
  if (targetExisting) {
    if (ALLOW_PUBLIC_FORM_EDIT) {
      ...
    } else {
      alert(`❌ PENDAFTARAN DITOLAK:\n${identifierLabel} sudah terdaftar di sistem!\n\nFungsi edit di formulir pendaftaran telah dinonaktifkan oleh panitia.`);
      return;
    }
  }
  ```

---

## 🧪 Validasi Pengujian Otomatis (`[[tests/functional_tests.js]]`)

> [!CHECK] Suite 12: Integrasi Peraturan Google Docs & Form Registrasi
> - `✅ [PASS] 12.1`: Konfigurasi URL Google Docs dan fungsi sinkronisasi di `app.js`
> - `✅ [PASS] 12.2`: Peraturan Standar MLBB memuat regulasi resmi Google Docs
> - `✅ [PASS] 12.3`: Penonaktifan dropdown list tim/peserta pada form di `index.html`
> - `✅ [PASS] 12.4`: Penonaktifan fungsi edit registrasi publik di `app.js`

---

## 🔗 Referensi Terkait
- Dokumen Rencana Perbaikan: [[docs/REVIEW_AND_IMPROVEMENT_PLAN.md]]
- Dokumentasi Lengkap Proyek: [[README.md]]
- Indeks Fungsi Otomatis: [[FUNCTION_INDEX.md]]
