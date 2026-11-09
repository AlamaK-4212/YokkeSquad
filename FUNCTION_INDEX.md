# 📖 INDEKS FUNGSI DAN PETA PEMANGGILAN KODE (FUNCTION MAP)
> **Turnamen E-Sports Yokke Squad 2026**  
> *Dokumen ini dibuat otomatis oleh script `scripts/generate_function_index.js`. Pembaruan dilakukan secara otomatis setiap kali ada perubahan pada source code.*

---

## 📊 Ringkasan Eksekutif
- **Total Fungsi Terdaftar:** 323 fungsi (283 di `app.js`, 27 di `google_apps_script.js`)
- **Total Titik Pemanggilan (Call Sites):** 1408 titik pemanggilan teridentifikasi
- **Terakhir Diperbarui:** 9/11/2026, 10.21.22 WIB
- **Cara Memperbarui Otomatis:**
  - Sekali jalan: `node scripts/generate_function_index.js`
  - Mode Pantau (Realtime Auto-Update saat simpan kode): `node scripts/generate_function_index.js --watch`
  - Bersamaan saat test: `node tests/functional_tests.js`

---

## 📑 Daftar Isi Modul
1. [♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) (55 fungsi)](#turnamen-mcgg-klasemen-undian-commander-penalti)
2. [⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) (70 fungsi)](#turnamen-mlbb-bagan-grup-playoff-engine)
3. [📦 Modul Aplikasi Umum (92 fungsi)](#modul-aplikasi-umum)
4. [👥 Manajemen Peserta & Roster (15 fungsi)](#manajemen-peserta-roster)
5. [☁️ Sinkronisasi Google Sheets & State Storage (11 fungsi)](#sinkronisasi-google-sheets-state-storage)
6. [🆔 Modal Dialog & Bukti ID Card (28 fungsi)](#modal-dialog-bukti-id-card)
7. [🔧 Helper & UI Utility (13 fungsi)](#helper-ui-utility)
8. [🛡️ Autentikasi & Hak Akses Panitia (6 fungsi)](#autentikasi-hak-akses-panitia)
9. [📋 Regulasi Turnamen (Rules Editor) (6 fungsi)](#regulasi-turnamen-rules-editor)
10. [🗄️ Google Sheets Schema & Master Data (8 fungsi)](#google-sheets-schema-master-data)
11. [⚙️ Backend Apps Script Utility (17 fungsi)](#backend-apps-script-utility)
12. [🌐 Web API & Endpoint Webhook (2 fungsi)](#web-api-endpoint-webhook)

---

## ⚡ Tabel Referensi Cepat (Pencarian Cepat / Ctrl+F)

| No | Nama Fungsi | File & Baris | Kategori | Ringkasan Kegunaan | Jumlah Pemanggilan |
|:--:|:---|:---|:---|:---|:--:|
| 1 | [**`setMCGGStageFilter()`**](#setmcggstagefilter) | [app.js:2](app.js#L2) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk setMCGGStageFilter | 3x |
| 2 | [**`prevMLBBGroupPage()`**](#prevmlbbgrouppage) | [app.js:13](app.js#L13) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk prevMLBBGroupPage | 3x |
| 3 | [**`nextMLBBGroupPage()`**](#nextmlbbgrouppage) | [app.js:20](app.js#L20) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk nextMLBBGroupPage | 3x |
| 4 | [**`goToMLBBGroupPage()`**](#gotomlbbgrouppage) | [app.js:27](app.js#L27) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk goToMLBBGroupPage | 2x |
| 5 | [**`toggleAllMLBBFixtures()`**](#toggleallmlbbfixtures) | [app.js:32](app.js#L32) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk toggleAllMLBBFixtures | 0x |
| 6 | [**`getActiveMCGGLobbyKeys()`**](#getactivemcgglobbykeys) | [app.js:37](app.js#L37) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getActiveMCGGLobbyKeys | 2x |
| 7 | [**`prevMCGGGroupPage()`**](#prevmcgggrouppage) | [app.js:54](app.js#L54) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk prevMCGGGroupPage | 3x |
| 8 | [**`nextMCGGGroupPage()`**](#nextmcgggrouppage) | [app.js:61](app.js#L61) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk nextMCGGGroupPage | 3x |
| 9 | [**`goToMCGGGroupPage()`**](#gotomcgggrouppage) | [app.js:68](app.js#L68) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk goToMCGGGroupPage | 1x |
| 10 | [**`toggleMCGGLayoutMode()`**](#togglemcgglayoutmode) | [app.js:73](app.js#L73) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk toggleMCGGLayoutMode | 0x |
| 11 | [**`postToGoogleAppsScript()`**](#posttogoogleappsscript) | [app.js:93](app.js#L93) | 📦 Modul Aplikasi Umum | Helper fetch terpusat untuk komunikasi POST dengan Google Apps Script Web A... | 14x |
| 12 | [**`getInitialParticipants()`**](#getinitialparticipants) | [app.js:118](app.js#L118) | 👥 Manajemen Peserta & Roster | Inisialisasi daftar peserta dari localStorage dengan validasi versi data (D... | 1x |
| 13 | [**`getTeamPrefix()`**](#getteamprefix) | [app.js:141](app.js#L141) | 📦 Modul Aplikasi Umum | Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama) | 4x |
| 14 | [**`getDepartmentCluster()`**](#getdepartmentcluster) | [app.js:153](app.js#L153) | 📦 Modul Aplikasi Umum | Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resm... | 7x |
| 15 | [**`getTeamDept()`**](#getteamdept) | [app.js:211](app.js#L211) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 4x |
| 16 | [**`isTeamInvited()`**](#isteaminvited) | [app.js:233](app.js#L233) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 17 | [**`toggleInvitedTeam()`**](#toggleinvitedteam) | [app.js:248](app.js#L248) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleInvitedTeam | 2x |
| 18 | [**`showGlobalLoader()`**](#showgloballoader) | [app.js:283](app.js#L283) | 📦 Modul Aplikasi Umum | Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets) | 1x |
| 19 | [**`hideGlobalLoader()`**](#hidegloballoader) | [app.js:297](app.js#L297) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hideGlobalLoader | 4x |
| 20 | [**`normalizeGroupPlayoffMatches()`**](#normalizegroupplayoffmatches) | [app.js:439](app.js#L439) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Normalisasi dan rekonsiliasi data playoff ke dalam 6 ronde kanonikal (38 ma... | 2x |
| 21 | [**`saveStageStateLocal()`**](#savestagestatelocal) | [app.js:601](app.js#L601) | ☁️ Sinkronisasi Google Sheets & State Storage | Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM,... | 15x |
| 22 | [**`getCommanderFormattedName()`**](#getcommanderformattedname) | [app.js:659](app.js#L659) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika t... | 5x |
| 23 | [**`renderCommanderCirclesHtml()`**](#rendercommandercircleshtml) | [app.js:678](app.js#L678) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen | 3x |
| 24 | [**`renderCommanderCardVisualHtml()`**](#rendercommandercardvisualhtml) | [app.js:710](app.js#L710) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian | 1x |
| 25 | [**`compressImage()`**](#compressimage) | [app.js:893](app.js#L893) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compressor: compresses smartphone photos using HTML5 Canv... | 3x |
| 26 | [**`compressImageFile()`**](#compressimagefile) | [app.js:952](app.js#L952) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compression helper (Canvas <= 1200px, quality 0.75) | 3x |
| 27 | [**`showToast()`**](#showtoast) | [app.js:959](app.js#L959) | 🔧 Helper & UI Utility | TOAST NOTIFICATIONS (CYBERPUNK DARK) | 60x |
| 28 | [**`openGlossaryModal()`**](#openglossarymodal) | [app.js:992](app.js#L992) | 🆔 Modal Dialog & Bukti ID Card | Modal Glosarium Istilah Turnamen | 1x |
| 29 | [**`closeGlossaryModal()`**](#closeglossarymodal) | [app.js:997](app.js#L997) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeGlossaryModal | 2x |
| 30 | [**`openResetBaganModal()`**](#openresetbaganmodal) | [app.js:1003](app.js#L1003) | 🆔 Modal Dialog & Bukti ID Card | Modal Reset Bagan dengan Verifikasi Password/PIN | 1x |
| 31 | [**`closeResetBaganModal()`**](#closeresetbaganmodal) | [app.js:1012](app.js#L1012) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeResetBaganModal | 2x |
| 32 | [**`confirmResetBaganWithPin()`**](#confirmresetbaganwithpin) | [app.js:1017](app.js#L1017) | 🛡️ Autentikasi & Hak Akses Panitia | Fungsi operasional untuk confirmResetBaganWithPin | 1x |
| 33 | [**`bypassLoaderWithCache()`**](#bypassloaderwithcache) | [app.js:1098](app.js#L1098) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk bypassLoaderWithCache | 1x |
| 34 | [**`handleParticipantSearch()`**](#handleparticipantsearch) | [app.js:1113](app.js#L1113) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk handleParticipantSearch | 1x |
| 35 | [**`saveFormDraft()`**](#saveformdraft) | [app.js:1121](app.js#L1121) | 📦 Modul Aplikasi Umum | AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE) | 1x |
| 36 | [**`restoreFormDraft()`**](#restoreformdraft) | [app.js:1177](app.js#L1177) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk restoreFormDraft | 2x |
| 37 | [**`clearFormDraft()`**](#clearformdraft) | [app.js:1267](app.js#L1267) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearFormDraft | 1x |
| 38 | [**`handleFormDraftChange()`**](#handleformdraftchange) | [app.js:1274](app.js#L1274) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk handleFormDraftChange | 3x |
| 39 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [app.js:1283](app.js#L1283) | 🔧 Helper & UI Utility | Helper to format Google Drive image URLs into viewable thumbnail image URLs | 9x |
| 40 | [**`getIdCardMap()`**](#getidcardmap) | [app.js:1304](app.js#L1304) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama | 2x |
| 41 | [**`saveIdCardToMap()`**](#saveidcardtomap) | [app.js:1343](app.js#L1343) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasar... | 5x |
| 42 | [**`findIdCardByEmpIdOrName()`**](#findidcardbyempidorname) | [app.js:1361](app.js#L1361) | 🆔 Modal Dialog & Bukti ID Card | Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama p... | 9x |
| 43 | [**`getLogoMap()`**](#getlogomap) | [app.js:1379](app.js#L1379) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan Logo sesuai Nama Tim (MLBB) | 2x |
| 44 | [**`saveLogoToMap()`**](#savelogotomap) | [app.js:1393](app.js#L1393) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasa... | 3x |
| 45 | [**`findLogoByTeamName()`**](#findlogobyteamname) | [app.js:1402](app.js#L1402) | 🆔 Modal Dialog & Bukti ID Card | Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peser... | 7x |
| 46 | [**`autoLinkParticipantsAssets()`**](#autolinkparticipantsassets) | [app.js:1410](app.js#L1410) | 👥 Manajemen Peserta & Roster | Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada | 5x |
| 47 | [**`fetchParticipantsFromGoogleSheet()`**](#fetchparticipantsfromgooglesheet) | [app.js:1445](app.js#L1445) | 👥 Manajemen Peserta & Roster | Fetch registered participants from Google Sheets via doGet Webhook Google S... | 4x |
| 48 | [**`getItemKey()`**](#getitemkey) | [app.js:1471](app.js#L1471) | 📦 Modul Aplikasi Umum | Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name | 2x |
| 49 | [**`cleanOrphanedTournamentData()`**](#cleanorphanedtournamentdata) | [app.js:1724](app.js#L1724) | 📦 Modul Aplikasi Umum | Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup... | 2x |
| 50 | [**`resetCacheAndFollowGSheet()`**](#resetcacheandfollowgsheet) | [app.js:1810](app.js#L1810) | ☁️ Sinkronisasi Google Sheets & State Storage | Reset cache lokal dan ikuti 100% data aktif dari Google Sheets | 1x |
| 51 | [**`saveAllChangesToGoogleSheet()`**](#saveallchangestogooglesheet) | [app.js:1843](app.js#L1843) | ☁️ Sinkronisasi Google Sheets & State Storage | SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS | 1x |
| 52 | [**`syncTournamentConfigToGSheet()`**](#synctournamentconfigtogsheet) | [app.js:1985](app.js#L1985) | ☁️ Sinkronisasi Google Sheets & State Storage | SINKRONISASI KONFIGURASI TURNAMEN & BAGAN KE GOOGLE SHEETS | 6x |
| 53 | [**`syncTournamentSheetsToGSheet()`**](#synctournamentsheetstogsheet) | [app.js:2037](app.js#L2037) | ☁️ Sinkronisasi Google Sheets & State Storage | SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET | 0x |
| 54 | [**`saveState()`**](#savestate) | [app.js:2076](app.js#L2076) | 📦 Modul Aplikasi Umum | Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi ... | 45x |
| 55 | [**`updateCounts()`**](#updatecounts) | [app.js:2089](app.js#L2089) | 📦 Modul Aplikasi Umum | Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status veri... | 7x |
| 56 | [**`formatRuleLine()`**](#formatruleline) | [app.js:2099](app.js#L2099) | 📋 Regulasi Turnamen (Rules Editor) | Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG) | 0x |
| 57 | [**`fetchRulesFromGoogleDoc()`**](#fetchrulesfromgoogledoc) | [app.js:2145](app.js#L2145) | 📋 Regulasi Turnamen (Rules Editor) | Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: t... | 2x |
| 58 | [**`renderRules()`**](#renderrules) | [app.js:2203](app.js#L2203) | 📋 Regulasi Turnamen (Rules Editor) | Fungsi operasional untuk renderRules | 6x |
| 59 | [**`toggleEditRules()`**](#toggleeditrules) | [app.js:2217](app.js#L2217) | 📋 Regulasi Turnamen (Rules Editor) | Membuka/menutup form editor peraturan turnamen khusus panitia. | 3x |
| 60 | [**`saveCustomRules()`**](#savecustomrules) | [app.js:2223](app.js#L2223) | 📋 Regulasi Turnamen (Rules Editor) | Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Goo... | 1x |
| 61 | [**`resetRulesToDefault()`**](#resetrulestodefault) | [app.js:2251](app.js#L2251) | 📋 Regulasi Turnamen (Rules Editor) | Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026... | 1x |
| 62 | [**`handleLogoPreview()`**](#handlelogopreview) | [app.js:2261](app.js#L2261) | 🆔 Modal Dialog & Bukti ID Card | Handle Logo Upload and Live Preview | 1x |
| 63 | [**`handleSingleIdCardPreview()`**](#handlesingleidcardpreview) | [app.js:2276](app.js#L2276) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Officials and MCGG | 3x |
| 64 | [**`handlePlayerIdCardPreview()`**](#handleplayeridcardpreview) | [app.js:2298](app.js#L2298) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Each of the 8 Players | 1x |
| 65 | [**`toggleOfficial2Form()`**](#toggleofficial2form) | [app.js:2314](app.js#L2314) | 📦 Modul Aplikasi Umum | Toggle Official 2 Form | 4x |
| 66 | [**`renderPlayersFormInputs()`**](#renderplayersforminputs) | [app.js:2321](app.js#L2321) | 📦 Modul Aplikasi Umum | Generate the 8 players form fields dynamically (Included In-Game Nickname a... | 2x |
| 67 | [**`toggleCategoryForm()`**](#togglecategoryform) | [app.js:2380](app.js#L2380) | 📦 Modul Aplikasi Umum | Switch form between MLBB and MCGG cleanly | 3x |
| 68 | [**`openLoginModal()`**](#openloginmodal) | [app.js:2440](app.js#L2440) | 🛡️ Autentikasi & Hak Akses Panitia | Auth functions | 1x |
| 69 | [**`closeLoginModal()`**](#closeloginmodal) | [app.js:2452](app.js#L2452) | 🛡️ Autentikasi & Hak Akses Panitia | Menutup modal dialog login PIN panitia. | 2x |
| 70 | [**`verifyAdminPin()`**](#verifyadminpin) | [app.js:2460](app.js#L2460) | 🛡️ Autentikasi & Hak Akses Panitia | Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif p... | 2x |
| 71 | [**`logoutAdmin()`**](#logoutadmin) | [app.js:2540](app.js#L2540) | 🛡️ Autentikasi & Hak Akses Panitia | Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (r... | 1x |
| 72 | [**`renderRegistrationUI()`**](#renderregistrationui) | [app.js:2557](app.js#L2557) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderRegistrationUI | 4x |
| 73 | [**`toggleRegistrationStatus()`**](#toggleregistrationstatus) | [app.js:2640](app.js#L2640) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk toggleRegistrationStatus | 5x |
| 74 | [**`resetMCGGPointsAndDraw()`**](#resetmcggpointsanddraw) | [app.js:2661](app.js#L2661) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetMCGGPointsAndDraw | 2x |
| 75 | [**`updateAuthUI()`**](#updateauthui) | [app.js:2704](app.js#L2704) | 🛡️ Autentikasi & Hak Akses Panitia | Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock,... | 16x |
| 76 | [**`switchTab()`**](#switchtab) | [app.js:2896](app.js#L2896) | 🔧 Helper & UI Utility | Navigation Tabs | 18x |
| 77 | [**`updateHubDynamicStats()`**](#updatehubdynamicstats) | [app.js:2963](app.js#L2963) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk updateHubDynamicStats | 3x |
| 78 | [**`handleHashNavigation()`**](#handlehashnavigation) | [app.js:2978](app.js#L2978) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk handleHashNavigation | 1x |
| 79 | [**`openIdCardLightbox()`**](#openidcardlightbox) | [app.js:3005](app.js#L3005) | 🆔 Modal Dialog & Bukti ID Card | Lightbox for Viewing Full ID Card | 3x |
| 80 | [**`closeIdCardLightbox()`**](#closeidcardlightbox) | [app.js:3046](app.js#L3046) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal pop-up lightbox preview ID Card pegawai. | 2x |
| 81 | [**`escapeHtml()`**](#escapehtml) | [app.js:3051](app.js#L3051) | 🔧 Helper & UI Utility | Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dal... | 97x |
| 82 | [**`updateRegistrationDatalists()`**](#updateregistrationdatalists) | [app.js:3063](app.js#L3063) | 📦 Modul Aplikasi Umum | Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit... | 3x |
| 83 | [**`handleTeamNameInput()`**](#handleteamnameinput) | [app.js:3077](app.js#L3077) | 📦 Modul Aplikasi Umum | Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edi... | 2x |
| 84 | [**`handleMcggNameInput()`**](#handlemcggnameinput) | [app.js:3110](app.js#L3110) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fu... | 2x |
| 85 | [**`handleRegister()`**](#handleregister) | [app.js:3143](app.js#L3143) | 👥 Manajemen Peserta & Roster | Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Ca... | 1x |
| 86 | [**`setParticipantStatus()`**](#setparticipantstatus) | [app.js:3675](app.js#L3675) | 👥 Manajemen Peserta & Roster | Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets | 2x |
| 87 | [**`deleteParticipant()`**](#deleteparticipant) | [app.js:3712](app.js#L3712) | 👥 Manajemen Peserta & Roster | Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat k... | 1x |
| 88 | [**`filterList()`**](#filterlist) | [app.js:3755](app.js#L3755) | 🔧 Helper & UI Utility | Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/... | 3x |
| 89 | [**`openEditParticipantModal()`**](#openeditparticipantmodal) | [app.js:3763](app.js#L3763) | 🆔 Modal Dialog & Bukti ID Card | ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION | 1x |
| 90 | [**`closeEditParticipantModal()`**](#closeeditparticipantmodal) | [app.js:3861](app.js#L3861) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog edit peserta. | 3x |
| 91 | [**`handleEditLogoUpload()`**](#handleeditlogoupload) | [app.js:3866](app.js#L3866) | 🆔 Modal Dialog & Bukti ID Card | Handle logo upload in Admin Edit modal | 1x |
| 92 | [**`handleEditRosterIdCardUpload()`**](#handleeditrosteridcardupload) | [app.js:3882](app.js#L3882) | 🆔 Modal Dialog & Bukti ID Card | Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedi... | 1x |
| 93 | [**`saveParticipantEdit()`**](#saveparticipantedit) | [app.js:3893](app.js#L3893) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk saveParticipantEdit | 1x |
| 94 | [**`viewRosterDetail()`**](#viewrosterdetail) | [app.js:4013](app.js#L4013) | 👥 Manajemen Peserta & Roster | Modal Detail Roster Lengkap & ID Card Per-Pemain | 1x |
| 95 | [**`closeDetailModal()`**](#closedetailmodal) | [app.js:4076](app.js#L4076) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog rincian roster tim dan galeri ID Card. | 1x |
| 96 | [**`renderParticipants()`**](#renderparticipants) | [app.js:4081](app.js#L4081) | 👥 Manajemen Peserta & Roster | Render Participant Table (Featuring Nickname, ID Card count per-player, and... | 13x |
| 97 | [**`getVerifiedMLBBTeams()`**](#getverifiedmlbbteams) | [app.js:4224](app.js#L4224) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE | 5x |
| 98 | [**`getActiveMLBBFormat()`**](#getactivemlbbformat) | [app.js:4232](app.js#L4232) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N... | 2x |
| 99 | [**`changeTournamentFormat()`**](#changetournamentformat) | [app.js:4251](app.js#L4251) | 🔧 Helper & UI Utility | Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP... | 1x |
| 100 | [**`renderCurrentMLBBFormat()`**](#rendercurrentmlbbformat) | [app.js:4268](app.js#L4268) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderCurrentMLBBFormat | 20x |
| 101 | [**`shuffleAndGenerateTournament()`**](#shuffleandgeneratetournament) | [app.js:4294](app.js#L4294) | 📦 Modul Aplikasi Umum | Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum di... | 1x |
| 102 | [**`toggleLockMLBBGroup()`**](#togglelockmlbbgroup) | [app.js:4324](app.js#L4324) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE) | 1x |
| 103 | [**`isAllMLBBGroupMatchesFinished()`**](#isallmlbbgroupmatchesfinished) | [app.js:4344](app.js#L4344) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan m... | 2x |
| 104 | [**`evaluateMLBBTieBreaker()`**](#evaluatemlbbtiebreaker) | [app.js:4355](app.js#L4355) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosa... | 2x |
| 105 | [**`resolveMLBBTieBreaker()`**](#resolvemlbbtiebreaker) | [app.js:4380](app.js#L4380) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan... | 3x |
| 106 | [**`proceedToMLBBStage2()`**](#proceedtomlbbstage2) | [app.js:4399](app.js#L4399) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Ba... | 3x |
| 107 | [**`refreshAndScrollToPlayoffBracket()`**](#refreshandscrolltoplayoffbracket) | [app.js:4435](app.js#L4435) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk refreshAndScrollToPlayoffBracket | 3x |
| 108 | [**`refreshAndScrollToGroupOrBracket()`**](#refreshandscrolltogrouporbracket) | [app.js:4464](app.js#L4464) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk refreshAndScrollToGroupOrBracket | 1x |
| 109 | [**`shuffleMLBBPlayoffBracket()`**](#shufflemlbbplayoffbracket) | [app.js:4490](app.js#L4490) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk shuffleMLBBPlayoffBracket | 3x |
| 110 | [**`toggleLockMLBBPlayoff()`**](#togglelockmlbbplayoff) | [app.js:4545](app.js#L4545) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk toggleLockMLBBPlayoff | 3x |
| 111 | [**`openPlayoffScoreModal()`**](#openplayoffscoremodal) | [app.js:4584](app.js#L4584) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openPlayoffScoreModal | 5x |
| 112 | [**`openPlayoffMvpFromScoreModal()`**](#openplayoffmvpfromscoremodal) | [app.js:4685](app.js#L4685) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openPlayoffMvpFromScoreModal | 1x |
| 113 | [**`closePlayoffScoreModal()`**](#closeplayoffscoremodal) | [app.js:4692](app.js#L4692) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk closePlayoffScoreModal | 6x |
| 114 | [**`stepPlayoffModalScore()`**](#stepplayoffmodalscore) | [app.js:4698](app.js#L4698) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk stepPlayoffModalScore | 4x |
| 115 | [**`setPlayoffModalQuickScore()`**](#setplayoffmodalquickscore) | [app.js:4713](app.js#L4713) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffModalQuickScore | 1x |
| 116 | [**`onPlayoffScoreInputChanged()`**](#onplayoffscoreinputchanged) | [app.js:4724](app.js#L4724) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk onPlayoffScoreInputChanged | 2x |
| 117 | [**`updatePlayoffModalWinnerPreview()`**](#updateplayoffmodalwinnerpreview) | [app.js:4735](app.js#L4735) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk updatePlayoffModalWinnerPreview | 4x |
| 118 | [**`savePlayoffModalScore()`**](#saveplayoffmodalscore) | [app.js:4765](app.js#L4765) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk savePlayoffModalScore | 1x |
| 119 | [**`resetPlayoffModalScore()`**](#resetplayoffmodalscore) | [app.js:4778](app.js#L4778) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetPlayoffModalScore | 1x |
| 120 | [**`setPlayoffMatchScore()`**](#setplayoffmatchscore) | [app.js:4786](app.js#L4786) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffMatchScore | 1x |
| 121 | [**`resetPlayoffMatchScore()`**](#resetplayoffmatchscore) | [app.js:4827](app.js#L4827) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetPlayoffMatchScore | 1x |
| 122 | [**`onPlayoffTeamClicked()`**](#onplayoffteamclicked) | [app.js:4846](app.js#L4846) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk onPlayoffTeamClicked | 4x |
| 123 | [**`renderPlayoffMatchCardHtml()`**](#renderplayoffmatchcardhtml) | [app.js:4856](app.js#L4856) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderPlayoffMatchCardHtml | 3x |
| 124 | [**`findTeamGroupAndRank()`**](#findteamgroupandrank) | [app.js:4916](app.js#L4916) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findTeamGroupAndRank | 5x |
| 125 | [**`testMLBBPlayoffWithCurrentStandings()`**](#testmlbbplayoffwithcurrentstandings) | [app.js:4928](app.js#L4928) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBPlayoffWithCurrentStandings | 5x |
| 126 | [**`openTestDrawModal()`**](#opentestdrawmodal) | [app.js:5121](app.js#L5121) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openTestDrawModal | 2x |
| 127 | [**`closeTestDrawModal()`**](#closetestdrawmodal) | [app.js:5133](app.js#L5133) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeTestDrawModal | 3x |
| 128 | [**`openTestDrawInNewWindow()`**](#opentestdrawinnewwindow) | [app.js:5141](app.js#L5141) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk openTestDrawInNewWindow | 3x |
| 129 | [**`testMLBBGroupAllocationDraw()`**](#testmlbbgroupallocationdraw) | [app.js:5198](app.js#L5198) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBGroupAllocationDraw | 2x |
| 130 | [**`resetMLBBToStage1()`**](#resetmlbbtostage1) | [app.js:5273](app.js#L5273) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor ji... | 2x |
| 131 | [**`resetTotalMLBBGroupAndBracket()`**](#resettotalmlbbgroupandbracket) | [app.js:5285](app.js#L5285) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetTotalMLBBGroupAndBracket | 1x |
| 132 | [**`toggleLockMCGGLobbies()`**](#togglelockmcgglobbies) | [app.js:5304](app.js#L5304) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM... | 1x |
| 133 | [**`validateMCGGDuplicateCommander()`**](#validatemcggduplicatecommander) | [app.js:5326](app.js#L5326) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2) | 3x |
| 134 | [**`getLastSyncedMatches()`**](#getlastsyncedmatches) | [app.js:5354](app.js#L5354) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk getLastSyncedMatches | 2x |
| 135 | [**`setLastSyncedMatches()`**](#setlastsyncedmatches) | [app.js:5365](app.js#L5365) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk setLastSyncedMatches | 2x |
| 136 | [**`getUnsyncedMatches()`**](#getunsyncedmatches) | [app.js:5373](app.js#L5373) | ☁️ Sinkronisasi Google Sheets & State Storage | Lookup perbedaan antara cache lokal dengan data terakhir yang tersinkronisa... | 1x |
| 137 | [**`syncSingleMatchRowToGSheet()`**](#syncsinglematchrowtogsheet) | [app.js:5410](app.js#L5410) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi utama sinkronisasi 1 pertandingan: mengupdate HANYA 3 baris di Googl... | 7x |
| 138 | [**`saveTournamentStateOnly()`**](#savetournamentstateonly) | [app.js:5500](app.js#L5500) | ☁️ Sinkronisasi Google Sheets & State Storage | Handler tombol Simpan: Sinkronkan seluruh konfigurasi turnamen, bagan playo... | 18x |
| 139 | [**`generateBracket()`**](#generatebracket) | [app.js:5580](app.js#L5580) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- KNOCKOUT BRACKET --- | 3x |
| 140 | [**`pickWinner()`**](#pickwinner) | [app.js:5633](app.js#L5633) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk pickWinner | 2x |
| 141 | [**`renderBracket()`**](#renderbracket) | [app.js:5653](app.js#L5653) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderBracket | 5x |
| 142 | [**`allocateMLBBGroups()`**](#allocatemlbbgroups) | [app.js:5728](app.js#L5728) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi)... | 3x |
| 143 | [**`getPrefix()`**](#getprefix) | [app.js:5740](app.js#L5740) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getPrefix | 9x |
| 144 | [**`getDept()`**](#getdept) | [app.js:5748](app.js#L5748) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getDept | 6x |
| 145 | [**`isInvited()`**](#isinvited) | [app.js:5759](app.js#L5759) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInvited | 5x |
| 146 | [**`getOverBaseCount()`**](#getoverbasecount) | [app.js:5827](app.js#L5827) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getOverBaseCount | 1x |
| 147 | [**`canAccept()`**](#canaccept) | [app.js:5829](app.js#L5829) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk canAccept | 0x |
| 148 | [**`hasPrefixConflict()`**](#hasprefixconflict) | [app.js:5863](app.js#L5863) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasPrefixConflict | 2x |
| 149 | [**`hasDeptConflict()`**](#hasdeptconflict) | [app.js:5864](app.js#L5864) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasDeptConflict | 1x |
| 150 | [**`generateGroupStage()`**](#generategroupstage) | [app.js:5918](app.js#L5918) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk generateGroupStage | 3x |
| 151 | [**`updateGroupRecord()`**](#updategrouprecord) | [app.js:5957](app.js#L5957) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk updateGroupRecord | 4x |
| 152 | [**`getMLBBHeadToHeadWinner()`**](#getmlbbheadtoheadwinner) | [app.js:5971](app.js#L5971) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fa... | 1x |
| 153 | [**`compareMLBBTeams()`**](#comparemlbbteams) | [app.js:6038](app.js#L6038) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke ... | 1x |
| 154 | [**`getSortedGroupTeams()`**](#getsortedgroupteams) | [app.js:6072](app.js#L6072) | 📦 Modul Aplikasi Umum | Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkula... | 13x |
| 155 | [**`shuffleArray()`**](#shufflearray) | [app.js:6100](app.js#L6100) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk shuffleArray | 9x |
| 156 | [**`findValidBracketPermutation()`**](#findvalidbracketpermutation) | [app.js:6109](app.js#L6109) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk findValidBracketPermutation | 4x |
| 157 | [**`backtrack()`**](#backtrack) | [app.js:6111](app.js#L6111) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk backtrack | 5x |
| 158 | [**`isTeamAtmo()`**](#isteamatmo) | [app.js:6133](app.js#L6133) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAtmo | 2x |
| 159 | [**`isTeamAlpha()`**](#isteamalpha) | [app.js:6138](app.js#L6138) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAlpha | 2x |
| 160 | [**`isTeamAppa()`**](#isteamappa) | [app.js:6144](app.js#L6144) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAppa | 1x |
| 161 | [**`isPlayoffInvitedTeam()`**](#isplayoffinvitedteam) | [app.js:6149](app.js#L6149) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk isPlayoffInvitedTeam | 2x |
| 162 | [**`solveRemainingBracketSlots()`**](#solveremainingbracketslots) | [app.js:6161](app.js#L6161) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk solveRemainingBracketSlots | 3x |
| 163 | [**`backtrack()`**](#backtrack) | [app.js:6163](app.js#L6163) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk backtrack | 5x |
| 164 | [**`drawMLBBPlayoffUpperBracket()`**](#drawmlbbplayoffupperbracket) | [app.js:6189](app.js#L6189) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Algoritma Pengundian Cerdas Playoff Upper Bracket 16 Besar (MLBB): 1. Undi ... | 1x |
| 165 | [**`isInv()`**](#isinv) | [app.js:6190](app.js#L6190) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInv | 7x |
| 166 | [**`drawMLBBPlayoffLowerBracket()`**](#drawmlbbplayofflowerbracket) | [app.js:6309](app.js#L6309) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk drawMLBBPlayoffLowerBracket | 1x |
| 167 | [**`isInv()`**](#isinv) | [app.js:6310](app.js#L6310) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInv | 7x |
| 168 | [**`initGroupPlayoff()`**](#initgroupplayoff) | [app.js:6346](app.js#L6346) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seed... | 11x |
| 169 | [**`isPlayoffPlaceholderTeam()`**](#isplayoffplaceholderteam) | [app.js:6597](app.js#L6597) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk isPlayoffPlaceholderTeam | 15x |
| 170 | [**`pickGroupPlayoffWinner()`**](#pickgroupplayoffwinner) | [app.js:6607](app.js#L6607) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya k... | 1x |
| 171 | [**`promptPlayoffMVP()`**](#promptplayoffmvp) | [app.js:6780](app.js#L6780) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk promptPlayoffMVP | 1x |
| 172 | [**`renderGroupStageUI()`**](#rendergroupstageui) | [app.js:6787](app.js#L6787) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupStageUI | 16x |
| 173 | [**`resolveTeamNameInGroup()`**](#resolveteamnameingroup) | [app.js:7142](app.js#L7142) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisa... | 2x |
| 174 | [**`isSameTeamName()`**](#issameteamname) | [app.js:7158](app.js#L7158) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, ... | 38x |
| 175 | [**`findGroupNameForTeam()`**](#findgroupnameforteam) | [app.js:7174](app.js#L7174) | 📦 Modul Aplikasi Umum | Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData | 4x |
| 176 | [**`setMLBBActiveWeek()`**](#setmlbbactiveweek) | [app.js:7226](app.js#L7226) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveWeek | 3x |
| 177 | [**`setMLBBActiveDayFilter()`**](#setmlbbactivedayfilter) | [app.js:7234](app.js#L7234) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveDayFilter | 6x |
| 178 | [**`setMLBBActiveGroupFilter()`**](#setmlbbactivegroupfilter) | [app.js:7239](app.js#L7239) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveGroupFilter | 1x |
| 179 | [**`getGroupFixtures()`**](#getgroupfixtures) | [app.js:7245](app.js#L7245) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) --- | 6x |
| 180 | [**`getCanonicalGroupMatchId()`**](#getcanonicalgroupmatchid) | [app.js:7439](app.js#L7439) | 📦 Modul Aplikasi Umum | Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tid... | 7x |
| 181 | [**`isGroupMatchesCompleted()`**](#isgroupmatchescompleted) | [app.js:7448](app.js#L7448) | 📦 Modul Aplikasi Umum | Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah s... | 3x |
| 182 | [**`deduplicateGroupMatchResults()`**](#deduplicategroupmatchresults) | [app.js:7466](app.js#L7466) | 📦 Modul Aplikasi Umum | Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri t... | 3x |
| 183 | [**`getGroupRestingTeams()`**](#getgrouprestingteams) | [app.js:7558](app.js#L7558) | 📦 Modul Aplikasi Umum | Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di... | 1x |
| 184 | [**`setGroupMatchScore()`**](#setgroupmatchscore) | [app.js:7569](app.js#L7569) | 📦 Modul Aplikasi Umum | Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara ... | 7x |
| 185 | [**`promptGroupMatchWO()`**](#promptgroupmatchwo) | [app.js:7679](app.js#L7679) | 📦 Modul Aplikasi Umum | Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupu... | 1x |
| 186 | [**`setGroupMatchSpecialResult()`**](#setgroupmatchspecialresult) | [app.js:7704](app.js#L7704) | 📦 Modul Aplikasi Umum | Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imba... | 4x |
| 187 | [**`saveGroupFixtureScore()`**](#savegroupfixturescore) | [app.js:7713](app.js#L7713) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk saveGroupFixtureScore | 1x |
| 188 | [**`findTeamParticipant()`**](#findteamparticipant) | [app.js:7752](app.js#L7752) | 👥 Manajemen Peserta & Roster | Helper mencari data peserta tim dengan normalisasi nama | 4x |
| 189 | [**`openMLBBGroupMvpModal()`**](#openmlbbgroupmvpmodal) | [app.js:7766](app.js#L7766) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBGroupMvpModal | 3x |
| 190 | [**`openMLBBPlayoffMvpModal()`**](#openmlbbplayoffmvpmodal) | [app.js:7840](app.js#L7840) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBPlayoffMvpModal | 8x |
| 191 | [**`initAndShowMvpModal()`**](#initandshowmvpmodal) | [app.js:7889](app.js#L7889) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk initAndShowMvpModal | 2x |
| 192 | [**`renderMvpGameTabs()`**](#rendermvpgametabs) | [app.js:7936](app.js#L7936) | 🔧 Helper & UI Utility | Fungsi operasional untuk renderMvpGameTabs | 3x |
| 193 | [**`switchMvpGameTab()`**](#switchmvpgametab) | [app.js:7968](app.js#L7968) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpGameTab | 1x |
| 194 | [**`closeMLBBGroupMvpModal()`**](#closemlbbgroupmvpmodal) | [app.js:8026](app.js#L8026) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk closeMLBBGroupMvpModal | 5x |
| 195 | [**`switchMvpTeamTab()`**](#switchmvpteamtab) | [app.js:8031](app.js#L8031) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpTeamTab | 4x |
| 196 | [**`renderMvpRosterList()`**](#rendermvprosterlist) | [app.js:8062](app.js#L8062) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk renderMvpRosterList | 3x |
| 197 | [**`filterMvpRosterList()`**](#filtermvprosterlist) | [app.js:8129](app.js#L8129) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk filterMvpRosterList | 1x |
| 198 | [**`selectMvpPlayer()`**](#selectmvpplayer) | [app.js:8135](app.js#L8135) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpPlayer | 1x |
| 199 | [**`renderMvpQuickHeroChips()`**](#rendermvpquickherochips) | [app.js:8167](app.js#L8167) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderMvpQuickHeroChips | 3x |
| 200 | [**`selectMvpQuickHero()`**](#selectmvpquickhero) | [app.js:8187](app.js#L8187) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpQuickHero | 1x |
| 201 | [**`saveSelectedMvp()`**](#saveselectedmvp) | [app.js:8204](app.js#L8204) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk saveSelectedMvp | 2x |
| 202 | [**`deleteCurrentMvp()`**](#deletecurrentmvp) | [app.js:8277](app.js#L8277) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk deleteCurrentMvp | 1x |
| 203 | [**`setGroupMatchMVP()`**](#setgroupmatchmvp) | [app.js:8330](app.js#L8330) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk setGroupMatchMVP | 3x |
| 204 | [**`formatMatchMvpDisplayHtml()`**](#formatmatchmvpdisplayhtml) | [app.js:8418](app.js#L8418) | 🔧 Helper & UI Utility | Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5) | 2x |
| 205 | [**`promptGroupMatchMVP()`**](#promptgroupmatchmvp) | [app.js:8445](app.js#L8445) | 📦 Modul Aplikasi Umum | Delegasi fungsi promptGroupMatchMVP ke modal interaktif | 1x |
| 206 | [**`openMatchPlayerVerifyModal()`**](#openmatchplayerverifymodal) | [app.js:8462](app.js#L8462) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openMatchPlayerVerifyModal | 2x |
| 207 | [**`closeMatchPlayerVerifyModal()`**](#closematchplayerverifymodal) | [app.js:8500](app.js#L8500) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeMatchPlayerVerifyModal | 2x |
| 208 | [**`toggleMatchPlayerVerify()`**](#togglematchplayerverify) | [app.js:8509](app.js#L8509) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleMatchPlayerVerify | 1x |
| 209 | [**`verifyAllMatchPlayers()`**](#verifyallmatchplayers) | [app.js:8527](app.js#L8527) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk verifyAllMatchPlayers | 2x |
| 210 | [**`renderMatchPlayerVerifyModalContent()`**](#rendermatchplayerverifymodalcontent) | [app.js:8550](app.js#L8550) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk renderMatchPlayerVerifyModalContent | 3x |
| 211 | [**`renderTeamRosterColumn()`**](#renderteamrostercolumn) | [app.js:8606](app.js#L8606) | 👥 Manajemen Peserta & Roster | Helper untuk merender kolom roster tiap tim | 2x |
| 212 | [**`resetGroupMatchScore()`**](#resetgroupmatchscore) | [app.js:8709](app.js#L8709) | 📦 Modul Aplikasi Umum | Mereset skor pertandingan grup MLBB ke status belum bertanding. | 0x |
| 213 | [**`recalculateGroupStandingsFromFixtures()`**](#recalculategroupstandingsfromfixtures) | [app.js:8724](app.js#L8724) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan selu... | 4x |
| 214 | [**`renderGroupFixturesUI()`**](#rendergroupfixturesui) | [app.js:8864](app.js#L8864) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupFixturesUI | 11x |
| 215 | [**`renderGroupPlayoffTree()`**](#rendergroupplayofftree) | [app.js:9145](app.js#L9145) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau statu... | 14x |
| 216 | [**`changeMCGGLobby()`**](#changemcgglobby) | [app.js:9269](app.js#L9269) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MCGG MULTI-LOBBY STANDINGS | 0x |
| 217 | [**`getCommanderById()`**](#getcommanderbyid) | [app.js:9275](app.js#L9275) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mencari objek data commander dari master list berdasarkan ID, nama hero, at... | 5x |
| 218 | [**`updateCommanderPoolFromSetup()`**](#updatecommanderpoolfromsetup) | [app.js:9300](app.js#L9300) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk updateCommanderPoolFromSetup | 1x |
| 219 | [**`getVerifiedMCGGPlayers()`**](#getverifiedmcggplayers) | [app.js:9365](app.js#L9365) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getVerifiedMCGGPlayers | 2x |
| 220 | [**`syncMCGGPlayers()`**](#syncmcggplayers) | [app.js:9373](app.js#L9373) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGPlayers | 8x |
| 221 | [**`findPrevious()`**](#findprevious) | [app.js:9385](app.js#L9385) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 222 | [**`mapPlayerObj()`**](#mapplayerobj) | [app.js:9397](app.js#L9397) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |
| 223 | [**`allocateLobbiesByCluster()`**](#allocatelobbiesbycluster) | [app.js:9416](app.js#L9416) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase ... | 3x |
| 224 | [**`shuffleMCGGPlayers()`**](#shufflemcggplayers) | [app.js:9591](app.js#L9591) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGGPlayers | 2x |
| 225 | [**`isMCGGLobbyPointsFull()`**](#ismcgglobbypointsfull) | [app.js:9608](app.js#L9608) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGLobbyPointsFull | 4x |
| 226 | [**`isMCGGQualificationFull()`**](#ismcggqualificationfull) | [app.js:9614](app.js#L9614) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3... | 11x |
| 227 | [**`isMCGGSemiFinalFull()`**](#ismcggsemifinalfull) | [app.js:9620](app.js#L9620) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGSemiFinalFull | 1x |
| 228 | [**`compareMCGGPlayers()`**](#comparemcggplayers) | [app.js:9632](app.js#L9632) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir ... | 0x |
| 229 | [**`syncMCGGSemiFinal()`**](#syncmcggsemifinal) | [app.js:9663](app.js#L9663) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGSemiFinal | 2x |
| 230 | [**`findPrevSemi()`**](#findprevsemi) | [app.js:9700](app.js#L9700) | 📦 Modul Aplikasi Umum | Preserve poin semifinal jika sudah ada | 1x |
| 231 | [**`mapSemiPlayer()`**](#mapsemiplayer) | [app.js:9708](app.js#L9708) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapSemiPlayer | 0x |
| 232 | [**`syncMCGGGrandFinal()`**](#syncmcgggrandfinal) | [app.js:9730](app.js#L9730) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final se... | 7x |
| 233 | [**`findPrevInArr()`**](#findprevinarr) | [app.js:9737](app.js#L9737) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevInArr | 1x |
| 234 | [**`mapGFPlayer()`**](#mapgfplayer) | [app.js:9746](app.js#L9746) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapGFPlayer | 4x |
| 235 | [**`updateMCGGRank()`**](#updatemcggrank) | [app.js:9814](app.js#L9814) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin... | 1x |
| 236 | [**`updateMCGGCommander()`**](#updatemcggcommander) | [app.js:9852](app.js#L9852) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui pilihan commander pemain dan memicu validasi duplikasi commande... | 1x |
| 237 | [**`updateMCGGPenalty()`**](#updatemcggpenalty) | [app.js:9887](app.js#L9887) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumul... | 1x |
| 238 | [**`renderLobbyCommanderDrawPanelHtml()`**](#renderlobbycommanderdrawpanelhtml) | [app.js:9926](app.js#L9926) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI) | 5x |
| 239 | [**`drawMatchPool()`**](#drawmatchpool) | [app.js:10176](app.js#L10176) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 1: Acak 8 Pool ... | 2x |
| 240 | [**`assignMatchPoolToPlayers()`**](#assignmatchpooltoplayers) | [app.js:10251](app.js#L10251) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 2: Pasangkan 8 ... | 2x |
| 241 | [**`toggleLockMatchDraw()`**](#togglelockmatchdraw) | [app.js:10302](app.js#L10302) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 3: Kunci Match ... | 1x |
| 242 | [**`nextMatchDraw()`**](#nextmatchdraw) | [app.js:10329](app.js#L10329) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 4: Lanjut ke Ma... | 1x |
| 243 | [**`drawMatchCommanders()`**](#drawmatchcommanders) | [app.js:10346](app.js#L10346) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Backward compatibility helper | 3x |
| 244 | [**`switchLobbyDrawView()`**](#switchlobbydrawview) | [app.js:10352](app.js#L10352) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk switchLobbyDrawView | 5x |
| 245 | [**`resetLobbyDraw()`**](#resetlobbydraw) | [app.js:10358](app.js#L10358) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetLobbyDraw | 2x |
| 246 | [**`copyCommanderDrawText()`**](#copycommanderdrawtext) | [app.js:10379](app.js#L10379) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk... | 2x |
| 247 | [**`showMatch3DraftInfo()`**](#showmatch3draftinfo) | [app.js:10414](app.js#L10414) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk showMatch3DraftInfo | 1x |
| 248 | [**`changeCommanderDrawTarget()`**](#changecommanderdrawtarget) | [app.js:10425](app.js#L10425) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk changeCommanderDrawTarget | 1x |
| 249 | [**`setDrawTargetAndScroll()`**](#setdrawtargetandscroll) | [app.js:10432](app.js#L10432) | 🔧 Helper & UI Utility | Fungsi operasional untuk setDrawTargetAndScroll | 0x |
| 250 | [**`scrollToMCGGLobby()`**](#scrolltomcgglobby) | [app.js:10437](app.js#L10437) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk scrollToMCGGLobby | 3x |
| 251 | [**`renderMCGGLobbyAnchorBar()`**](#rendermcgglobbyanchorbar) | [app.js:10444](app.js#L10444) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbyAnchorBar | 2x |
| 252 | [**`renderMCGGLobbySelectOptions()`**](#rendermcgglobbyselectoptions) | [app.js:10480](app.js#L10480) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbySelectOptions | 3x |
| 253 | [**`renderMCGGTable()`**](#rendermcggtable) | [app.js:10523](app.js#L10523) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang... | 29x |
| 254 | [**`getLobbyShortLabel()`**](#getlobbyshortlabel) | [app.js:10580](app.js#L10580) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getLobbyShortLabel | 0x |
| 255 | [**`renderLobbyRowsHtml()`**](#renderlobbyrowshtml) | [app.js:10750](app.js#L10750) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderLobbyRowsHtml | 5x |
| 256 | [**`buildRoundCell()`**](#buildroundcell) | [app.js:10852](app.js#L10852) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk buildRoundCell | 3x |
| 257 | [**`buildPenaltySelect()`**](#buildpenaltyselect) | [app.js:10929](app.js#L10929) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk buildPenaltySelect | 1x |
| 258 | [**`loadSampleData()`**](#loadsampledata) | [app.js:10953](app.js#L10953) | 📦 Modul Aplikasi Umum | Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation... | 1x |
| 259 | [**`clearAllData()`**](#clearalldata) | [app.js:11157](app.js#L11157) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearAllData | 1x |
| 260 | [**`setMLBBViewMode()`**](#setmlbbviewmode) | [app.js:11238](app.js#L11238) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- TAMPILAN VIEW SWITCHER MLBB --- | 6x |
| 261 | [**`setMCGGViewMode()`**](#setmcggviewmode) | [app.js:11288](app.js#L11288) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | --- TAMPILAN VIEW SWITCHER MCGG --- | 4x |
| 262 | [**`togglePlayoffBracketCollapse()`**](#toggleplayoffbracketcollapse) | [app.js:11324](app.js#L11324) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk togglePlayoffBracketCollapse | 1x |
| 263 | [**`goToNextMLBBPlayoffPhase()`**](#gotonextmlbbplayoffphase) | [app.js:11336](app.js#L11336) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk goToNextMLBBPlayoffPhase | 2x |
| 264 | [**`setPlayoffBracketFilter()`**](#setplayoffbracketfilter) | [app.js:11363](app.js#L11363) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffBracketFilter | 2x |
| 265 | [**`togglePlayoffFullscreen()`**](#toggleplayofffullscreen) | [app.js:11370](app.js#L11370) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk togglePlayoffFullscreen | 1x |
| 266 | [**`renderSingleMatchNodeHtml()`**](#rendersinglematchnodehtml) | [app.js:11383](app.js#L11383) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderSingleMatchNodeHtml | 16x |
| 267 | [**`renderSvgConnectorColumn()`**](#rendersvgconnectorcolumn) | [app.js:11469](app.js#L11469) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderSvgConnectorColumn | 11x |
| 268 | [**`renderFullPlayoffBracketHtml()`**](#renderfullplayoffbrackethtml) | [app.js:11501](app.js#L11501) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderFullPlayoffBracketHtml | 2x |
| 269 | [**`selectMLBBStageNode()`**](#selectmlbbstagenode) | [app.js:11741](app.js#L11741) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk selectMLBBStageNode | 17x |
| 270 | [**`renderMLBBInteractiveHubUI()`**](#rendermlbbinteractivehubui) | [app.js:11752](app.js#L11752) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBInteractiveHubUI | 26x |
| 271 | [**`renderMLBBDetailPanelContent()`**](#rendermlbbdetailpanelcontent) | [app.js:11979](app.js#L11979) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBDetailPanelContent | 1x |
| 272 | [**`selectMCGGFlowNode()`**](#selectmcggflownode) | [app.js:12389](app.js#L12389) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | ---------------------------------------------------------------------------... | 7x |
| 273 | [**`renderMCGGInteractiveHubUI()`**](#rendermcgginteractivehubui) | [app.js:12394](app.js#L12394) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGInteractiveHubUI | 5x |
| 274 | [**`renderMCGGDetailPanelContent()`**](#rendermcggdetailpanelcontent) | [app.js:12522](app.js#L12522) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGDetailPanelContent | 1x |
| 275 | [**`shuffleMCGG32Besar()`**](#shufflemcgg32besar) | [app.js:12731](app.js#L12731) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGG32Besar | 1x |
| 276 | [**`renderMCGGCommanderGalleryUI()`**](#rendermcggcommandergalleryui) | [app.js:13069](app.js#L13069) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGCommanderGalleryUI | 4x |
| 277 | [**`filterCommanderGalleryByTier()`**](#filtercommandergallerybytier) | [app.js:13185](app.js#L13185) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk filterCommanderGalleryByTier | 8x |
| 278 | [**`handleCommanderSearchInput()`**](#handlecommandersearchinput) | [app.js:13201](app.js#L13201) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk handleCommanderSearchInput | 1x |
| 279 | [**`clearCommanderSearch()`**](#clearcommandersearch) | [app.js:13210](app.js#L13210) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk clearCommanderSearch | 2x |
| 280 | [**`openCommanderVetoRulesModal()`**](#opencommandervetorulesmodal) | [app.js:13219](app.js#L13219) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk openCommanderVetoRulesModal | 1x |
| 281 | [**`closeCommanderVetoRulesModal()`**](#closecommandervetorulesmodal) | [app.js:13224](app.js#L13224) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk closeCommanderVetoRulesModal | 2x |
| 282 | [**`openCommanderDetailModal()`**](#opencommanderdetailmodal) | [app.js:13229](app.js#L13229) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk openCommanderDetailModal | 1x |
| 283 | [**`closeCommanderDetailModal()`**](#closecommanderdetailmodal) | [app.js:13294](app.js#L13294) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk closeCommanderDetailModal | 2x |
| 284 | [**`getTargetSpreadsheet()`**](#gettargetspreadsheet) | [google_apps_script.js:38](google_apps_script.js#L38) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet b... | 6x |
| 285 | [**`safeSetSharing()`**](#safesetsharing) | [google_apps_script.js:58](google_apps_script.js#L58) | ⚙️ Backend Apps Script Utility | Mengatur permission sharing secara aman. Menghindari error 'Access denied: ... | 6x |
| 286 | [**`getOrCreateUploadFolder()`**](#getorcreateuploadfolder) | [google_apps_script.js:76](google_apps_script.js#L76) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat folder upload utama secara andal. Jika TARGET_FOLD... | 4x |
| 287 | [**`testDriveAuth()`**](#testdriveauth) | [google_apps_script.js:115](google_apps_script.js#L115) | ⚙️ Backend Apps Script Utility | FUNGSI UJI OTORISASI GOOGLE DRIVE & SPREADSHEET PENTING: Pilih fungsi 'test... | 0x |
| 288 | [**`getOrCreateSubFolder()`**](#getorcreatesubfolder) | [google_apps_script.js:150](google_apps_script.js#L150) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat subfolder tim/kategori secara andal. / | 2x |
| 289 | [**`relinkExistingFailedIDCards()`**](#relinkexistingfailedidcards) | [google_apps_script.js:194](google_apps_script.js#L194) | ⚙️ Backend Apps Script Utility | FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ... | 0x |
| 290 | [**`ensureRelationalSheetsExist()`**](#ensurerelationalsheetsexist) | [google_apps_script.js:313](google_apps_script.js#L313) | 🗄️ Google Sheets Schema & Master Data | Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Paren... | 2x |
| 291 | [**`getMlbbTimListing()`**](#getmlbbtimlisting) | [google_apps_script.js:361](google_apps_script.js#L361) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' A... | 3x |
| 292 | [**`getMlbbPesertaListing()`**](#getmlbbpesertalisting) | [google_apps_script.js:459](google_apps_script.js#L459) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Pes... | 2x |
| 293 | [**`getMcggListing()`**](#getmcgglisting) | [google_apps_script.js:527](google_apps_script.js#L527) | 🗄️ Google Sheets Schema & Master Data | Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan... | 3x |
| 294 | [**`getInitialData()`**](#getinitialdata) | [google_apps_script.js:661](google_apps_script.js#L661) | ⚙️ Backend Apps Script Utility | 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE | 1x |
| 295 | [**`helperParseRank()`**](#helperparserank) | [google_apps_script.js:901](google_apps_script.js#L901) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk helperParseRank | 3x |
| 296 | [**`doGet()`**](#doget) | [google_apps_script.js:1371](google_apps_script.js#L1371) | 🌐 Web API & Endpoint Webhook | 1. GET HANDLER: FETCH SEMUA PESERTA & KONFIGURASI KE WEBSITE / | 0x |
| 297 | [**`getValidAdminPins()`**](#getvalidadminpins) | [google_apps_script.js:1386](google_apps_script.js#L1386) | ⚙️ Backend Apps Script Utility | 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE | 2x |
| 298 | [**`doPost()`**](#dopost) | [google_apps_script.js:1408](google_apps_script.js#L1408) | 🌐 Web API & Endpoint Webhook | Endpoint HTTP POST Google Apps Script untuk menerima pendaftaran, verifikas... | 1x |
| 299 | [**`saveBase64Image()`**](#savebase64image) | [google_apps_script.js:1468](google_apps_script.js#L1468) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk saveBase64Image | 4x |
| 300 | [**`getOrCreateSheet()`**](#getorcreatesheet) | [google_apps_script.js:2204](google_apps_script.js#L2204) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. / | 0x |
| 301 | [**`safeBatchResizeColumns()`**](#safebatchresizecolumns) | [google_apps_script.js:2216](google_apps_script.js#L2216) | ⚙️ Backend Apps Script Utility | Helper efisien untuk auto-resize banyak kolom dalam 1 panggilan RPC Google ... | 3x |
| 302 | [**`syncDedicatedTournamentSheets()`**](#syncdedicatedtournamentsheets) | [google_apps_script.js:2295](google_apps_script.js#L2295) | 🗄️ Google Sheets Schema & Master Data | Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah ... | 8x |
| 303 | [**`onEdit()`**](#onedit) | [google_apps_script.js:2671](google_apps_script.js#L2671) | ⚙️ Backend Apps Script Utility | Trigger Otomatis saat sel diedit langsung di Spreadsheet / | 0x |
| 304 | [**`syncVersionsToVercel()`**](#syncversionstovercel) | [google_apps_script.js:2706](google_apps_script.js#L2706) | ⚙️ Backend Apps Script Utility | Helper pengiriman versi ke Vercel Edge Config REST API / | 2x |
| 305 | [**`syncListBagan()`**](#synclistbagan) | [google_apps_script.js:2748](google_apps_script.js#L2748) | ⚙️ Backend Apps Script Utility | Wrapper kompatibilitas untuk pemicu manual / lama / | 1x |
| 306 | [**`syncListPoint()`**](#synclistpoint) | [google_apps_script.js:2752](google_apps_script.js#L2752) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPoint | 1x |
| 307 | [**`syncListPointAndCommanderMCGG()`**](#synclistpointandcommandermcgg) | [google_apps_script.js:2756](google_apps_script.js#L2756) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPointAndCommanderMCGG | 1x |
| 308 | [**`createOrUpdateAllTournamentSheets()`**](#createorupdatealltournamentsheets) | [google_apps_script.js:2760](google_apps_script.js#L2760) | 🗄️ Google Sheets Schema & Master Data | Fungsi operasional untuk createOrUpdateAllTournamentSheets | 1x |
| 309 | [**`countMVP()`**](#countmvp) | [google_apps_script.js:2793](google_apps_script.js#L2793) | ⚙️ Backend Apps Script Utility | Menghitung akumulasi MVP pemain resmi dari Sheet "MLBB - Bagan & MVP" (Kolo... | 0x |
| 310 | [**`countMLBBPlayerMVPs()`**](#countmlbbplayermvps) | [google_apps_script.js:2798](google_apps_script.js#L2798) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk countMLBBPlayerMVPs | 1x |
| 311 | [**`runTest()`**](#runtest) | [functional_tests.js:26](functional_tests.js#L26) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runTest | 75x |
| 312 | [**`runAsyncTest()`**](#runasynctest) | [functional_tests.js:37](functional_tests.js#L37) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk runAsyncTest | 4x |
| 313 | [**`sanitizeNip()`**](#sanitizenip) | [functional_tests.js:85](functional_tests.js#L85) | 🔧 Helper & UI Utility | Fungsi operasional untuk sanitizeNip | 3x |
| 314 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [functional_tests.js:94](functional_tests.js#L94) | 🔧 Helper & UI Utility | Fungsi operasional untuk formatDriveImageUrl | 9x |
| 315 | [**`validateRegistration()`**](#validateregistration) | [functional_tests.js:181](functional_tests.js#L181) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk validateRegistration | 7x |
| 316 | [**`runLiveIntegrationTests()`**](#runliveintegrationtests) | [functional_tests.js:363](functional_tests.js#L363) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runLiveIntegrationTests | 1x |
| 317 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:890](functional_tests.js#L890) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 318 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:896](functional_tests.js#L896) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 319 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:900](functional_tests.js#L900) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 4x |
| 320 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:946](functional_tests.js#L946) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 321 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:952](functional_tests.js#L952) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 322 | [**`findPrevious()`**](#findprevious) | [functional_tests.js:1085](functional_tests.js#L1085) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 323 | [**`mapPlayerObj()`**](#mapplayerobj) | [functional_tests.js:1087](functional_tests.js#L1087) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |

---

## 🔍 Rincian Lengkap Fungsi dan Lokasi Pemanggilan

### ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti)

<a id="setmcggstagefilter"></a>
#### `setMCGGStageFilter(stage)`

- **Definisi:** [`app.js:2`](app.js#L2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10599`](app.js#L10599) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_1_QUAL' ? 'active' : ''}`
  - [`app.js:10602`](app.js#L10602) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_2_SEMI' ? 'active' : ''}`
  - [`app.js:10605`](app.js#L10605) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_3_FINAL' ? 'active' : ''`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getactivemcgglobbykeys"></a>
#### `getActiveMCGGLobbyKeys()`

- **Definisi:** [`app.js:37`](app.js#L37)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:55`](app.js#L55) — di dalam fungsi `prevMCGGGroupPage()`
    `const lobbyKeys = getActiveMCGGLobbyKeys();`
  - [`app.js:62`](app.js#L62) — di dalam fungsi `nextMCGGGroupPage()`
    `const lobbyKeys = getActiveMCGGLobbyKeys();`

<a id="prevmcgggrouppage"></a>
#### `prevMCGGGroupPage()`

- **Definisi:** [`app.js:54`](app.js#L54)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1654`](index.html#L1654) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMCGGGroupPage()" i`
  - [`app.js:10617`](app.js#L10617) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:866`](functional_tests.js#L866) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMCGGGroupPage()'), 'Harus ada fungsi prevMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="nextmcgggrouppage"></a>
#### `nextMCGGGroupPage()`

- **Definisi:** [`app.js:61`](app.js#L61)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1660`](index.html#L1660) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMCGGGroupPage()" `
  - [`app.js:10620`](app.js#L10620) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:867`](functional_tests.js#L867) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMCGGGroupPage()'), 'Harus ada fungsi nextMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="gotomcgggrouppage"></a>
#### `goToMCGGGroupPage(pg)`

- **Definisi:** [`app.js:68`](app.js#L68)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10589`](app.js#L10589) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${p === mcggGroupPageIndex ? 'active' : ''}" onclick=`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="togglemcgglayoutmode"></a>
#### `toggleMCGGLayoutMode()`

- **Definisi:** [`app.js:73`](app.js#L73)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderformattedname"></a>
#### `getCommanderFormattedName(cmd)`

- **Definisi:** [`app.js:659`](app.js#L659)
- **Deskripsi:** Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika tidak ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10399`](app.js#L10399) — di dalam fungsi `copyCommanderDrawText()`
    `const cmdName = getCommanderFormattedName(item.commander);`
  - [`app.js:10862`](app.js#L10862) — di dalam fungsi `buildRoundCell()`
    `const formattedName = getCommanderFormattedName(selectedCmd);`
  - [`app.js:10888`](app.js#L10888) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`app.js:10897`](app.js#L10897) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`functional_tests.js:706`](functional_tests.js#L706) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getCommanderFormattedName('), 'Harus ada fungsi getCommanderFormat`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid)

<a id="rendercommandercircleshtml"></a>
#### `renderCommanderCirclesHtml(cmd, size)`

- **Definisi:** [`app.js:678`](app.js#L678)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10863`](app.js#L10863) — di dalam fungsi `buildRoundCell()`
    `const circlesHtml = renderCommanderCirclesHtml(selectedCmd, 24);`
  - [`app.js:10911`](app.js#L10911) — di dalam fungsi `buildRoundCell()`
    `? renderCommanderCirclesHtml(selectedCmd, 22)`
  - [`functional_tests.js:707`](functional_tests.js#L707) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderCommanderCirclesHtml('), 'Harus ada fungsi renderCommanderCi`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid)

<a id="rendercommandercardvisualhtml"></a>
#### `renderCommanderCardVisualHtml(cmd)`

- **Definisi:** [`app.js:710`](app.js#L710)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10117`](app.js#L10117) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `${renderCommanderCardVisualHtml(item.commander)}`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid)

<a id="resetmcggpointsanddraw"></a>
#### `resetMCGGPointsAndDraw()`

- **Definisi:** [`app.js:2661`](app.js#L2661)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1615`](index.html#L1615) — Event `onclick`
    `<button id="btnResetMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; border-c`
  - [`functional_tests.js:837`](functional_tests.js#L837) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMCGGPointsAndDraw()'), 'Harus memiliki resetMCGGPointsAndDraw`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handlemcggnameinput"></a>
#### `handleMcggNameInput(val)`

- **Definisi:** [`app.js:3110`](app.js#L3110)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1286`](index.html#L1286) — Event `oninput`
    `<input type="text" id="mcgg_name" oninput="handleMcggNameInput(this.value)" placeholder="Masukkan na`
  - [`functional_tests.js:173`](functional_tests.js#L173) — pada skenario pengujian
    `assert(appCode.includes('function handleMcggNameInput('), 'Harus ada handler handleMcggNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="togglelockmcgglobbies"></a>
#### `toggleLockMCGGLobbies()`

- **Definisi:** [`app.js:5304`](app.js#L5304)
- **Deskripsi:** Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1614`](index.html#L1614) — Event `onclick`
    `<button id="btnLockMCGGLobbies" class="btn btn-outline" style="display: none; font-size: 0.85rem;" o`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="validatemcggduplicatecommander"></a>
#### `validateMCGGDuplicateCommander(lobbyKey, playerIdx)`

- **Definisi:** [`app.js:5326`](app.js#L5326)
- **Deskripsi:** 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9880`](app.js#L9880) — di dalam fungsi `updateMCGGCommander()`
    `validateMCGGDuplicateCommander(targetLobby, idx);`
  - [`app.js:10287`](app.js#L10287) — di dalam fungsi `assignMatchPoolToPlayers()`
    `validateMCGGDuplicateCommander(lobbyKey, i);`
  - [`functional_tests.js:765`](functional_tests.js#L765) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function validateMCGGDuplicateCommander('), 'Harus ada fungsi validateMCGGD`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="changemcgglobby"></a>
#### `changeMCGGLobby()`

- **Definisi:** [`app.js:9269`](app.js#L9269)
- **Deskripsi:** MCGG MULTI-LOBBY STANDINGS
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderbyid"></a>
#### `getCommanderById(id)`

- **Definisi:** [`app.js:9275`](app.js#L9275)
- **Deskripsi:** Mencari objek data commander dari master list berdasarkan ID, nama hero, atau alter name.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:662`](app.js#L662) — di dalam fungsi `getCommanderFormattedName()`
    `const found = getCommanderById(cmd);`
  - [`app.js:681`](app.js#L681) — di dalam fungsi `renderCommanderCirclesHtml()`
    `cmd = getCommanderById(cmd) || { name: cmd };`
  - [`app.js:713`](app.js#L713) — di dalam fungsi `renderCommanderCardVisualHtml()`
    `cmd = getCommanderById(cmd) || { name: cmd };`
  - [`app.js:10857`](app.js#L10857) — di dalam fungsi `buildRoundCell()`
    `const selectedCmd = getCommanderById(selectedCmdId);`
  - [`app.js:13230`](app.js#L13230) — di dalam fungsi `openCommanderDetailModal()`
    `const cmd = getCommanderById(cmdId);`

<a id="updatecommanderpoolfromsetup"></a>
#### `updateCommanderPoolFromSetup(setupList)`

- **Definisi:** [`app.js:9300`](app.js#L9300)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1685`](app.js#L1685) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCommanderPoolFromSetup(data.mcggCommanderSetup);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getverifiedmcggplayers"></a>
#### `getVerifiedMCGGPlayers()`

- **Definisi:** [`app.js:9365`](app.js#L9365)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9374`](app.js#L9374) — di dalam fungsi `syncMCGGPlayers()`
    `let verified = getVerifiedMCGGPlayers();`
  - [`functional_tests.js:611`](functional_tests.js#L611) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMCGGPlayers()'), 'Harus ada getVerifiedMCGGPlayers()');`

<a id="syncmcggplayers"></a>
#### `syncMCGGPlayers(doShuffle = false)`

- **Definisi:** [`app.js:9373`](app.js#L9373)
- **Titik Pemanggilan (8 lokasi):**
  - [`index.html:1612`](index.html#L1612) — Event `onclick`
    `<button id="adminSyncMCGG" class="btn btn-primary" style="display: none; font-size: 0.85rem;" onclic`
  - [`app.js:1694`](app.js#L1694) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `syncMCGGPlayers();`
  - [`app.js:3683`](app.js#L3683) — di dalam fungsi `setParticipantStatus()`
    `syncMCGGPlayers();`
  - [`app.js:3736`](app.js#L3736) — di dalam fungsi `deleteParticipant()`
    `syncMCGGPlayers();`
  - [`app.js:3961`](app.js#L3961) — di dalam fungsi `saveParticipantEdit()`
    `syncMCGGPlayers();`
  - [`app.js:9604`](app.js#L9604) — di dalam fungsi `shuffleMCGGPlayers()`
    `syncMCGGPlayers(true);`
  - [`app.js:11154`](app.js#L11154) — di dalam fungsi `loadSampleData()`
    `syncMCGGPlayers();`
  - [`app.js:11169`](app.js#L11169) — di dalam fungsi `clearAllData()`
    `syncMCGGPlayers();`
- **Memanggil Fungsi Internal:** [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`findPrevious()`](#findprevious), [`getDepartmentCluster()`](#getdepartmentcluster), [`mapPlayerObj()`](#mapplayerobj), [`syncMCGGSemiFinal()`](#syncmcggsemifinal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`renderMCGGTable()`](#rendermcggtable), [`allocateLobbiesByCluster()`](#allocatelobbiesbycluster)

<a id="allocatelobbiesbycluster"></a>
#### `allocateLobbiesByCluster(playerList, lobbyKeys, targetCaps)`

- **Definisi:** [`app.js:9416`](app.js#L9416)
- **Deskripsi:** Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase Awal)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9558`](app.js#L9558) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, ['LOBBY_A', 'LOBBY_B'], [countA, countB]);`
  - [`app.js:9575`](app.js#L9575) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`
  - [`functional_tests.js:1094`](functional_tests.js#L1094) — pada skenario pengujian
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`

<a id="shufflemcggplayers"></a>
#### `shuffleMCGGPlayers()`

- **Definisi:** [`app.js:9591`](app.js#L9591)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1613`](index.html#L1613) — Event `onclick`
    `<button id="adminShuffleMCGG" class="btn btn-gold" style="display: none; font-size: 0.85rem;" onclic`
  - [`functional_tests.js:651`](functional_tests.js#L651) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function shuffleMCGGPlayers()'), 'Harus ada fungsi shuffleMCGGPlayers()');`
- **Memanggil Fungsi Internal:** [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="ismcgglobbypointsfull"></a>
#### `isMCGGLobbyPointsFull(lobbyKey)`

- **Definisi:** [`app.js:9608`](app.js#L9608)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:9617`](app.js#L9617) — di dalam fungsi `isMCGGQualificationFull()`
    `return qualKeys.every(k => isMCGGLobbyPointsFull(k));`
  - [`app.js:9622`](app.js#L9622) — di dalam fungsi `isMCGGSemiFinalFull()`
    `return isMCGGLobbyPointsFull('SEMI_A') && isMCGGLobbyPointsFull('SEMI_B');`
  - [`app.js:10805`](app.js#L10805) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isLobbyFull = isMCGGLobbyPointsFull('LOBBY_A');`
  - [`app.js:10818`](app.js#L10818) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isThisLobbyFull = isMCGGLobbyPointsFull(lobbyKey);`

<a id="ismcggqualificationfull"></a>
#### `isMCGGQualificationFull()`

- **Definisi:** [`app.js:9614`](app.js#L9614)
- **Deskripsi:** Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3 ronde).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:9667`](app.js#L9667) — di dalam fungsi `syncMCGGSemiFinal()`
    `const isQualDone = isMCGGQualificationFull();`
  - [`app.js:9791`](app.js#L9791) — di dalam fungsi `syncMCGGGrandFinal()`
    `const isFull = isMCGGQualificationFull();`
  - [`app.js:9830`](app.js#L9830) — di dalam fungsi `updateMCGGRank()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9868`](app.js#L9868) — di dalam fungsi `updateMCGGCommander()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9901`](app.js#L9901) — di dalam fungsi `updateMCGGPenalty()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:10187`](app.js#L10187) — di dalam fungsi `drawMatchPool()`
    `if (lobbyKey === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:10449`](app.js#L10449) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10481`](app.js#L10481) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10547`](app.js#L10547) — di dalam fungsi `renderMCGGTable()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10752`](app.js#L10752) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`functional_tests.js:625`](functional_tests.js#L625) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isMCGGQualificationFull()'), 'app.js harus memeriksa apakah poin kualifikas`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="ismcggsemifinalfull"></a>
#### `isMCGGSemiFinalFull()`

- **Definisi:** [`app.js:9620`](app.js#L9620)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9761`](app.js#L9761) — di dalam fungsi `syncMCGGGrandFinal()`
    `const semiDone = isMCGGSemiFinalFull();`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="comparemcggplayers"></a>
#### `compareMCGGPlayers(a, b)`

- **Definisi:** [`app.js:9632`](app.js#L9632)
- **Deskripsi:** Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir (besar ke kecil) 2. Juara 1 / MVP Ronde (banyaknya finish posisi 1, besar ke kecil) 3. Top 4 Finish (banyaknya finish posisi 1-4, besar ke kecil) 4. Pengurangan Poin / Penalti (makin sering kena pengurangan makin bawah jika poin dkk sama: deductA - deductB) 5. Breakdown Posisi Finish Ronde 1 s/d 8 6. Nama Pemain (A-Z)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncmcggsemifinal"></a>
#### `syncMCGGSemiFinal()`

- **Definisi:** [`app.js:9663`](app.js#L9663)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9525`](app.js#L9525) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
  - [`app.js:9582`](app.js#L9582) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`findPrevSemi()`](#findprevsemi)

<a id="syncmcgggrandfinal"></a>
#### `syncMCGGGrandFinal()`

- **Definisi:** [`app.js:9730`](app.js#L9730)
- **Deskripsi:** Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final setelah ronde kualifikasi penuh.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:2695`](app.js#L2695) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `syncMCGGGrandFinal();`
  - [`app.js:9526`](app.js#L9526) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9559`](app.js#L9559) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9583`](app.js#L9583) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9845`](app.js#L9845) — di dalam fungsi `updateMCGGRank()`
    `syncMCGGGrandFinal();`
  - [`app.js:9916`](app.js#L9916) — di dalam fungsi `updateMCGGPenalty()`
    `syncMCGGGrandFinal();`
  - [`app.js:10654`](app.js#L10654) — di dalam fungsi `renderMCGGTable()`
    `syncMCGGGrandFinal();`
- **Memanggil Fungsi Internal:** [`findPrevInArr()`](#findprevinarr), [`isMCGGSemiFinalFull()`](#ismcggsemifinalfull), [`mapGFPlayer()`](#mapgfplayer), [`isMCGGQualificationFull()`](#ismcggqualificationfull)

<a id="updatemcggrank"></a>
#### `updateMCGGRank(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:9814`](app.js#L9814)
- **Deskripsi:** Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin otomatis (+4 s/d -4).
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10922`](app.js#L10922) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGRank('${lobbyKey}', ${originalIdx}, '${roundKey}', this.value)" style="p`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggcommander"></a>
#### `updateMCGGCommander(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:9852`](app.js#L9852)
- **Deskripsi:** Memperbarui pilihan commander pemain dan memicu validasi duplikasi commander ronde 2.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10918`](app.js#L10918) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGCommander('${lobbyKey}', ${originalIdx}, '${cmdKey}', this.value)" style`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggpenalty"></a>
#### `updateMCGGPenalty(arg1, arg2, arg3)`

- **Definisi:** [`app.js:9887`](app.js#L9887)
- **Deskripsi:** Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumulasi poin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10942`](app.js#L10942) — di dalam fungsi `buildPenaltySelect()`
    `<select onchange="updateMCGGPenalty('${lobbyKey}', ${originalIdx}, this.value)" style="padding: 0.25`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="renderlobbycommanderdrawpanelhtml"></a>
#### `renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)`

- **Definisi:** [`app.js:9926`](app.js#L9926)
- **Deskripsi:** MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10722`](app.js#L10722) — di dalam fungsi `renderMCGGTable()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}`
  - [`app.js:12551`](app.js#L12551) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`app.js:12656`](app.js#L12656) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`functional_tests.js:798`](functional_tests.js#L798) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderLobbyCommanderDrawPanelHtml('), 'Harus memiliki generator pa`
  - [`functional_tests.js:802`](functional_tests.js#L802) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}'), 'Panel `
- **Memanggil Fungsi Internal:** [`switchLobbyDrawView()`](#switchlobbydrawview), [`copyCommanderDrawText()`](#copycommanderdrawtext), [`resetLobbyDraw()`](#resetlobbydraw), [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers), [`toggleLockMatchDraw()`](#togglelockmatchdraw), [`nextMatchDraw()`](#nextmatchdraw), [`showMatch3DraftInfo()`](#showmatch3draftinfo), [`renderCommanderCardVisualHtml()`](#rendercommandercardvisualhtml), [`escapeHtml()`](#escapehtml)

<a id="drawmatchcommanders"></a>
#### `drawMatchCommanders(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:10346`](app.js#L10346)
- **Deskripsi:** Backward compatibility helper
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10716`](app.js#L10716) — di dalam fungsi `renderMCGGTable()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.3rem 0.65rem; ${(!isRegistration`
  - [`functional_tests.js:741`](functional_tests.js#L741) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function drawMatchCommanders('), 'drawMatchCommanders harus tersedia');`
  - [`functional_tests.js:799`](functional_tests.js#L799) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('drawMatchCommanders(matchNum, targetLobbyKey)'), 'drawMatchCommanders harus`
- **Memanggil Fungsi Internal:** [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers)

<a id="switchlobbydrawview"></a>
#### `switchLobbyDrawView(lobbyKey, matchNum)`

- **Definisi:** [`app.js:10352`](app.js#L10352)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:9974`](app.js#L9974) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 1 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:9977`](app.js#L9977) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 2 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:10029`](app.js#L10029) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:10032`](app.js#L10032) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`functional_tests.js:800`](functional_tests.js#L800) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function switchLobbyDrawView('), 'Harus memiliki fungsi switch view match 1`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="resetlobbydraw"></a>
#### `resetLobbyDraw(lobbyKey)`

- **Definisi:** [`app.js:10358`](app.js#L10358)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9983`](app.js#L9983) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem; font-size:0.75rem; color:var(--yokke`
  - [`functional_tests.js:801`](functional_tests.js#L801) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetLobbyDraw('), 'Harus memiliki fungsi reset undian per-lobi re`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="copycommanderdrawtext"></a>
#### `copyCommanderDrawText(lobbyKey)`

- **Definisi:** [`app.js:10379`](app.js#L10379)
- **Deskripsi:** Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk dibagikan ke WhatsApp grup.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9980`](app.js#L9980) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem; margin-left:auto;`
  - [`app.js:10035`](app.js#L10035) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCom`
- **Memanggil Fungsi Internal:** [`getCommanderFormattedName()`](#getcommanderformattedname)

<a id="changecommanderdrawtarget"></a>
#### `changeCommanderDrawTarget(val)`

- **Definisi:** [`app.js:10425`](app.js#L10425)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10433`](app.js#L10433) — di dalam fungsi `setDrawTargetAndScroll()`
    `changeCommanderDrawTarget(lobbyKey);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="scrolltomcgglobby"></a>
#### `scrollToMCGGLobby(lobbyKey)`

- **Definisi:** [`app.js:10437`](app.js#L10437)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10434`](app.js#L10434) — di dalam fungsi `setDrawTargetAndScroll()`
    `scrollToMCGGLobby(lobbyKey);`
  - [`app.js:10474`](app.js#L10474) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`functional_tests.js:699`](functional_tests.js#L699) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function scrollToMCGGLobby('), 'app.js harus menyediakan fungsi scrollToMCG`

<a id="rendermcgglobbyanchorbar"></a>
#### `renderMCGGLobbyAnchorBar()`

- **Definisi:** [`app.js:10444`](app.js#L10444)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:10520`](app.js#L10520) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `renderMCGGLobbyAnchorBar();`
  - [`functional_tests.js:697`](functional_tests.js#L697) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderMCGGLobbyAnchorBar('), 'app.js harus memiliki generator rend`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="rendermcgglobbyselectoptions"></a>
#### `renderMCGGLobbySelectOptions()`

- **Definisi:** [`app.js:10480`](app.js#L10480)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9528`](app.js#L9528) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:9587`](app.js#L9587) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:10544`](app.js#L10544) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGLobbySelectOptions();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar)

<a id="rendermcggtable"></a>
#### `renderMCGGTable()`

- **Definisi:** [`app.js:10523`](app.js#L10523)
- **Deskripsi:** Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang sedang aktif.
- **Titik Pemanggilan (29 lokasi):**
  - [`app.js:5`](app.js#L5) — di dalam fungsi `setMCGGStageFilter()`
    `renderMCGGTable();`
  - [`app.js:58`](app.js#L58) — di dalam fungsi `prevMCGGGroupPage()`
    `renderMCGGTable();`
  - [`app.js:65`](app.js#L65) — di dalam fungsi `nextMCGGGroupPage()`
    `renderMCGGTable();`
  - [`app.js:70`](app.js#L70) — di dalam fungsi `goToMCGGGroupPage()`
    `renderMCGGTable();`
  - [`app.js:75`](app.js#L75) — di dalam fungsi `toggleMCGGLayoutMode()`
    `renderMCGGTable();`
  - [`app.js:1104`](app.js#L1104) — di dalam fungsi `bypassLoaderWithCache()`
    `renderMCGGTable();`
  - [`app.js:1673`](app.js#L1673) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderMCGGTable();`
  - [`app.js:2504`](app.js#L2504) — di dalam fungsi `verifyAdminPin()`
    `renderMCGGTable();`
  - [`app.js:2551`](app.js#L2551) — di dalam fungsi `logoutAdmin()`
    `renderMCGGTable();`
  - [`app.js:2656`](app.js#L2656) — di dalam fungsi `toggleRegistrationStatus()`
    `renderMCGGTable();`
  - [`app.js:2698`](app.js#L2698) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `renderMCGGTable();`
  - [`app.js:5342`](app.js#L5342) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `renderMCGGTable();`
  - [`app.js:9272`](app.js#L9272) — di dalam fungsi `changeMCGGLobby()`
    `renderMCGGTable();`
  - [`app.js:9361`](app.js#L9361) — di dalam fungsi `updateCommanderPoolFromSetup()`
    `renderMCGGTable();`
  - [`app.js:9529`](app.js#L9529) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:9588`](app.js#L9588) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:9849`](app.js#L9849) — di dalam fungsi `updateMCGGRank()`
    `renderMCGGTable();`
  - [`app.js:9884`](app.js#L9884) — di dalam fungsi `updateMCGGCommander()`
    `renderMCGGTable();`
  - [`app.js:9920`](app.js#L9920) — di dalam fungsi `updateMCGGPenalty()`
    `renderMCGGTable();`
  - [`app.js:10245`](app.js#L10245) — di dalam fungsi `drawMatchPool()`
    `renderMCGGTable();`
  - [`app.js:10296`](app.js#L10296) — di dalam fungsi `assignMatchPoolToPlayers()`
    `renderMCGGTable();`
  - [`app.js:10316`](app.js#L10316) — di dalam fungsi `toggleLockMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:10342`](app.js#L10342) — di dalam fungsi `nextMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:10355`](app.js#L10355) — di dalam fungsi `switchLobbyDrawView()`
    `renderMCGGTable();`
  - [`app.js:10375`](app.js#L10375) — di dalam fungsi `resetLobbyDraw()`
    `renderMCGGTable();`
  - [`app.js:10429`](app.js#L10429) — di dalam fungsi `changeCommanderDrawTarget()`
    `renderMCGGTable();`
  - [`app.js:11168`](app.js#L11168) — di dalam fungsi `clearAllData()`
    `renderMCGGTable();`
  - [`app.js:11191`](app.js#L11191) — cakupan global / event handler
    `renderMCGGTable();`
  - [`app.js:11314`](app.js#L11314) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGTable();`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`goToMCGGGroupPage()`](#gotomcgggrouppage), [`setMCGGStageFilter()`](#setmcggstagefilter), [`prevMCGGGroupPage()`](#prevmcgggrouppage), [`nextMCGGGroupPage()`](#nextmcgggrouppage), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`drawMatchCommanders()`](#drawmatchcommanders), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml)

<a id="getlobbyshortlabel"></a>
#### `getLobbyShortLabel(k)`

- **Definisi:** [`app.js:10580`](app.js#L10580)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="renderlobbyrowshtml"></a>
#### `renderLobbyRowsHtml(list, lobbyKey, isSingleLobby)`

- **Definisi:** [`app.js:10750`](app.js#L10750)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10641`](app.js#L10641) — di dalam fungsi `renderMCGGTable()`
    `legacyTbody.innerHTML = renderLobbyRowsHtml(singleList, currentMCGGLobby, isSingleLobby);`
  - [`app.js:10702`](app.js#L10702) — di dalam fungsi `renderMCGGTable()`
    `const rowsHtml = renderLobbyRowsHtml(currentList, lobbyKey, isSingleLobby);`
  - [`app.js:12572`](app.js#L12572) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:12674`](app.js#L12674) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:12721`](app.js#L12721) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, 'GRAND_FINAL', false)}`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull), [`escapeHtml()`](#escapehtml), [`buildRoundCell()`](#buildroundcell), [`buildPenaltySelect()`](#buildpenaltyselect)

<a id="buildpenaltyselect"></a>
#### `buildPenaltySelect(player, targetLobby)`

- **Definisi:** [`app.js:10929`](app.js#L10929)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10844`](app.js#L10844) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td style="text-align: center;">${buildPenaltySelect(p, lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`updateMCGGPenalty()`](#updatemcggpenalty)

<a id="setmcggviewmode"></a>
#### `setMCGGViewMode(mode)`

- **Definisi:** [`app.js:11288`](app.js#L11288)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MCGG ---
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:1637`](index.html#L1637) — Event `onclick`
    `<button type="button" id="btnViewMcggHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:1640`](index.html#L1640) — Event `onclick`
    `<button type="button" id="btnViewMcggLobbies" class="btn btn-outline" style="font-size: 0.8rem; padd`
  - [`app.js:2948`](app.js#L2948) — di dalam fungsi `switchTab()`
    `setMCGGViewMode('HUB');`
  - [`functional_tests.js:1171`](functional_tests.js#L1171) — pada skenario pengujian
    `assert(appCode.includes('function setMCGGViewMode('), 'app.js harus memiliki fungsi setMCGGViewMode'`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGTable()`](#rendermcggtable)

<a id="selectmcggflownode"></a>
#### `selectMCGGFlowNode(nodeKey)`

- **Definisi:** [`app.js:12389`](app.js#L12389)
- **Deskripsi:** ---------------------------------------------------------------------------- 2. MASTER-DETAIL INTERACTIVE HUB MCGG ----------------------------------------------------------------------------
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:12425`](app.js#L12425) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:12448`](app.js#L12448) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE2_WILDCARD' ? 'active' : ''}" oncl`
  - [`app.js:12458`](app.js#L12458) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:12479`](app.js#L12479) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_A' ? 'active' : ''}" onclic`
  - [`app.js:12483`](app.js#L12483) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_B' ? 'active' : ''}" onclic`
  - [`app.js:12503`](app.js#L12503) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'STAGE4_GRAND_FINAL' ? 'active'`
  - [`functional_tests.js:1173`](functional_tests.js#L1173) — pada skenario pengujian
    `assert(appCode.includes('function selectMCGGFlowNode('), 'app.js harus memiliki selectMCGGFlowNode')`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

<a id="rendermcgginteractivehubui"></a>
#### `renderMCGGInteractiveHubUI()`

- **Definisi:** [`app.js:12394`](app.js#L12394)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10537`](app.js#L10537) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:11307`](app.js#L11307) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:12391`](app.js#L12391) — di dalam fungsi `selectMCGGFlowNode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:12736`](app.js#L12736) — di dalam fungsi `shuffleMCGG32Besar()`
    `renderMCGGInteractiveHubUI();`
  - [`functional_tests.js:1172`](functional_tests.js#L1172) — pada skenario pengujian
    `assert(appCode.includes('function renderMCGGInteractiveHubUI()'), 'app.js harus memiliki renderMCGGI`
- **Memanggil Fungsi Internal:** [`selectMCGGFlowNode()`](#selectmcggflownode), [`renderMCGGDetailPanelContent()`](#rendermcggdetailpanelcontent)

<a id="rendermcggdetailpanelcontent"></a>
#### `renderMCGGDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:12522`](app.js#L12522)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:12516`](app.js#L12516) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `rightHtml += renderMCGGDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`shuffleMCGG32Besar()`](#shufflemcgg32besar)

<a id="shufflemcgg32besar"></a>
#### `shuffleMCGG32Besar()`

- **Definisi:** [`app.js:12731`](app.js#L12731)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:12616`](app.js#L12616) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `<button class="btn btn-gold" style="padding:0.3rem 0.75rem;font-size:0.78rem;" onclick="shuffleMCGG3`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

<a id="rendermcggcommandergalleryui"></a>
#### `renderMCGGCommanderGalleryUI(filter = null, searchQuery = null)`

- **Definisi:** [`app.js:13069`](app.js#L13069)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:2958`](app.js#L2958) — di dalam fungsi `switchTab()`
    `renderMCGGCommanderGalleryUI();`
  - [`app.js:13198`](app.js#L13198) — di dalam fungsi `filterCommanderGalleryByTier()`
    `renderMCGGCommanderGalleryUI();`
  - [`app.js:13207`](app.js#L13207) — di dalam fungsi `handleCommanderSearchInput()`
    `renderMCGGCommanderGalleryUI();`
  - [`app.js:13216`](app.js#L13216) — di dalam fungsi `clearCommanderSearch()`
    `renderMCGGCommanderGalleryUI();`
- **Memanggil Fungsi Internal:** [`filterCommanderGalleryByTier()`](#filtercommandergallerybytier), [`clearCommanderSearch()`](#clearcommandersearch), [`openCommanderDetailModal()`](#opencommanderdetailmodal)

<a id="filtercommandergallerybytier"></a>
#### `filterCommanderGalleryByTier(tier)`

- **Definisi:** [`app.js:13185`](app.js#L13185)
- **Titik Pemanggilan (8 lokasi):**
  - [`index.html:1753`](index.html#L1753) — Event `onclick`
    `<button type="button" class="cmd-filter-pill active" data-filter="all" onclick="filterCommanderGalle`
  - [`index.html:1754`](index.html#L1754) — Event `onclick`
    `<button type="button" class="cmd-filter-pill is-veto" data-filter="veto_m1" onclick="filterCommander`
  - [`index.html:1755`](index.html#L1755) — Event `onclick`
    `<button type="button" class="cmd-filter-pill" data-filter="non_meta" onclick="filterCommanderGallery`
  - [`index.html:1756`](index.html#L1756) — Event `onclick`
    `<button type="button" class="cmd-filter-pill" data-filter="High" onclick="filterCommanderGalleryByTi`
  - [`index.html:1757`](index.html#L1757) — Event `onclick`
    `<button type="button" class="cmd-filter-pill" data-filter="Meta" onclick="filterCommanderGalleryByTi`
  - [`index.html:1758`](index.html#L1758) — Event `onclick`
    `<button type="button" class="cmd-filter-pill" data-filter="Mid" onclick="filterCommanderGalleryByTie`
  - [`index.html:1759`](index.html#L1759) — Event `onclick`
    `<button type="button" class="cmd-filter-pill" data-filter="Normal" onclick="filterCommanderGalleryBy`
  - [`app.js:13120`](app.js#L13120) — di dalam fungsi `renderMCGGCommanderGalleryUI()`
    `<button type="button" class="btn btn-outline" style="border-color: var(--yokke-cyan); color: var(--y`
- **Memanggil Fungsi Internal:** [`renderMCGGCommanderGalleryUI()`](#rendermcggcommandergalleryui)

<a id="handlecommandersearchinput"></a>
#### `handleCommanderSearchInput(val)`

- **Definisi:** [`app.js:13201`](app.js#L13201)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1748`](index.html#L1748) — Event `oninput`
    `<input type="text" id="commanderSearchInput" class="commander-search-input" placeholder="Cari nama k`
- **Memanggil Fungsi Internal:** [`renderMCGGCommanderGalleryUI()`](#rendermcggcommandergalleryui)

<a id="clearcommandersearch"></a>
#### `clearCommanderSearch()`

- **Definisi:** [`app.js:13210`](app.js#L13210)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1749`](index.html#L1749) — Event `onclick`
    `<button type="button" id="btnClearCommanderSearch" class="btn-clear-search" onclick="clearCommanderS`
  - [`app.js:13120`](app.js#L13120) — di dalam fungsi `renderMCGGCommanderGalleryUI()`
    `<button type="button" class="btn btn-outline" style="border-color: var(--yokke-cyan); color: var(--y`
- **Memanggil Fungsi Internal:** [`renderMCGGCommanderGalleryUI()`](#rendermcggcommandergalleryui)

<a id="opencommandervetorulesmodal"></a>
#### `openCommanderVetoRulesModal()`

- **Definisi:** [`app.js:13219`](app.js#L13219)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1699`](index.html#L1699) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="border-color: var(--yokke-cyan); color: var(--y`

<a id="closecommandervetorulesmodal"></a>
#### `closeCommanderVetoRulesModal()`

- **Definisi:** [`app.js:13224`](app.js#L13224)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:2400`](index.html#L2400) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.5rem;" onclick="closeCommande`
  - [`index.html:2436`](index.html#L2436) — Event `onclick`
    `<button type="button" class="btn btn-primary" onclick="closeCommanderVetoRulesModal()">Saya Mengerti`

<a id="opencommanderdetailmodal"></a>
#### `openCommanderDetailModal(cmdId)`

- **Definisi:** [`app.js:13229`](app.js#L13229)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:13174`](app.js#L13174) — di dalam fungsi `renderMCGGCommanderGalleryUI()`
    `<button type="button" class="cmd-view-btn" onclick="openCommanderDetailModal('${cmd.id}')">`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid)

<a id="closecommanderdetailmodal"></a>
#### `closeCommanderDetailModal()`

- **Definisi:** [`app.js:13294`](app.js#L13294)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:2448`](index.html#L2448) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.5rem;" onclick="closeCommande`
  - [`index.html:2454`](index.html#L2454) — Event `onclick`
    `<button type="button" class="btn btn-outline" onclick="closeCommanderDetailModal()">Tutup</button>`

---

### ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine)

<a id="prevmlbbgrouppage"></a>
#### `prevMLBBGroupPage()`

- **Definisi:** [`app.js:13`](app.js#L13)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1557`](index.html#L1557) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMLBBGroupPage()" i`
  - [`app.js:6839`](app.js#L6839) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:847`](functional_tests.js#L847) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMLBBGroupPage()'), 'Harus ada fungsi prevMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="nextmlbbgrouppage"></a>
#### `nextMLBBGroupPage()`

- **Definisi:** [`app.js:20`](app.js#L20)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1563`](index.html#L1563) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMLBBGroupPage()" `
  - [`app.js:6842`](app.js#L6842) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:848`](functional_tests.js#L848) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMLBBGroupPage()'), 'Harus ada fungsi nextMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="gotomlbbgrouppage"></a>
#### `goToMLBBGroupPage(pg)`

- **Definisi:** [`app.js:27`](app.js#L27)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6830`](app.js#L6830) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="group-nav-tab-btn ${p === mlbbGroupPageIndex ? 'active' : ''}" onclick=`
  - [`functional_tests.js:849`](functional_tests.js#L849) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function goToMLBBGroupPage('), 'Harus ada fungsi goToMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="toggleallmlbbfixtures"></a>
#### `toggleAllMLBBFixtures()`

- **Definisi:** [`app.js:32`](app.js#L32)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="normalizegroupplayoffmatches"></a>
#### `normalizeGroupPlayoffMatches(incoming)`

- **Definisi:** [`app.js:439`](app.js#L439)
- **Deskripsi:** Normalisasi dan rekonsiliasi data playoff ke dalam 6 ronde kanonikal (38 matches). Memastikan slot array selalu utuh dan memetakan matchLabel ke slot kanonikal secara deterministik. /
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:516`](app.js#L516) — cakupan global / event handler
    `let groupPlayoffMatches = normalizeGroupPlayoffMatches(savedPlayoffData);`
  - [`app.js:1639`](app.js#L1639) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `groupPlayoffMatches = normalizeGroupPlayoffMatches(data.config.groupPlayoffMatches);`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam)

<a id="getverifiedmlbbteams"></a>
#### `getVerifiedMLBBTeams()`

- **Definisi:** [`app.js:4224`](app.js#L4224)
- **Deskripsi:** TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4240`](app.js#L4240) — di dalam fungsi `getActiveMLBBFormat()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:5200`](app.js#L5200) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:5590`](app.js#L5590) — di dalam fungsi `generateBracket()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:5919`](app.js#L5919) — di dalam fungsi `generateGroupStage()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`functional_tests.js:576`](functional_tests.js#L576) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMLBBTeams()'), 'Harus ada fungsi getVerifiedMLBBTeams()`

<a id="getactivemlbbformat"></a>
#### `getActiveMLBBFormat()`

- **Definisi:** [`app.js:4232`](app.js#L4232)
- **Deskripsi:** Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N >= 12 tim).
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5926`](app.js#L5926) — di dalam fungsi `generateGroupStage()`
    `const activeFormat = getActiveMLBBFormat();`
  - [`functional_tests.js:577`](functional_tests.js#L577) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getActiveMLBBFormat()'), 'Harus ada fungsi getActiveMLBBFormat()')`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="rendercurrentmlbbformat"></a>
#### `renderCurrentMLBBFormat()`

- **Definisi:** [`app.js:4268`](app.js#L4268)
- **Titik Pemanggilan (20 lokasi):**
  - [`app.js:1087`](app.js#L1087) — di dalam fungsi `confirmResetBaganWithPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1103`](app.js#L1103) — di dalam fungsi `bypassLoaderWithCache()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1693`](app.js#L1693) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2503`](app.js#L2503) — di dalam fungsi `verifyAdminPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2550`](app.js#L2550) — di dalam fungsi `logoutAdmin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2655`](app.js#L2655) — di dalam fungsi `toggleRegistrationStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3682`](app.js#L3682) — di dalam fungsi `setParticipantStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3735`](app.js#L3735) — di dalam fungsi `deleteParticipant()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3960`](app.js#L3960) — di dalam fungsi `saveParticipantEdit()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4264`](app.js#L4264) — di dalam fungsi `changeTournamentFormat()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4340`](app.js#L4340) — di dalam fungsi `toggleLockMLBBGroup()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4424`](app.js#L4424) — di dalam fungsi `proceedToMLBBStage2()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4469`](app.js#L4469) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderCurrentMLBBFormat === 'function') renderCurrentMLBBFormat();`
  - [`app.js:4525`](app.js#L4525) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4956`](app.js#L4956) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderCurrentMLBBFormat();`
  - [`app.js:5281`](app.js#L5281) — di dalam fungsi `resetMLBBToStage1()`
    `renderCurrentMLBBFormat();`
  - [`app.js:11153`](app.js#L11153) — di dalam fungsi `loadSampleData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:11167`](app.js#L11167) — di dalam fungsi `clearAllData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:11190`](app.js#L11190) — cakupan global / event handler
    `renderCurrentMLBBFormat();`
  - [`app.js:11347`](app.js#L11347) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `renderCurrentMLBBFormat();`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="togglelockmlbbgroup"></a>
#### `toggleLockMLBBGroup()`

- **Definisi:** [`app.js:4324`](app.js#L4324)
- **Deskripsi:** 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1504`](index.html#L1504) — Event `onclick`
    `<button id="btnLockMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="isallmlbbgroupmatchesfinished"></a>
#### `isAllMLBBGroupMatchesFinished()`

- **Definisi:** [`app.js:4344`](app.js#L4344)
- **Deskripsi:** Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan memiliki pemenang.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4405`](app.js#L4405) — di dalam fungsi `proceedToMLBBStage2()`
    `if (!isAllMLBBGroupMatchesFinished()) {`
  - [`functional_tests.js:752`](functional_tests.js#L752) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function isAllMLBBGroupMatchesFinished()'), 'Harus ada fungsi isAllMLBBGrou`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="evaluatemlbbtiebreaker"></a>
#### `evaluateMLBBTieBreaker()`

- **Definisi:** [`app.js:4355`](app.js#L4355)
- **Deskripsi:** Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosan babak Playoff.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4409`](app.js#L4409) — di dalam fungsi `proceedToMLBBStage2()`
    `if (evaluateMLBBTieBreaker()) {`
  - [`functional_tests.js:759`](functional_tests.js#L759) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function evaluateMLBBTieBreaker()'), 'Harus ada fungsi evaluateMLBBTieBreak`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`saveStageStateLocal()`](#savestagestatelocal)

<a id="resolvemlbbtiebreaker"></a>
#### `resolveMLBBTieBreaker(winnerTeam)`

- **Definisi:** [`app.js:4380`](app.js#L4380)
- **Deskripsi:** Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan +1 poin penentu ke klasemen.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7007`](app.js#L7007) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:7008`](app.js#L7008) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`functional_tests.js:760`](functional_tests.js#L760) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resolveMLBBTieBreaker('), 'Harus ada fungsi resolveMLBBTieBreaker'`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="proceedtomlbbstage2"></a>
#### `proceedToMLBBStage2()`

- **Definisi:** [`app.js:4399`](app.js#L4399)
- **Deskripsi:** Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Bagan Playoff).
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1505`](index.html#L1505) — Event `onclick`
    `<button id="btnProceedMLBBStage2" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`app.js:9162`](app.js#L9162) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: var(--`
  - [`functional_tests.js:753`](functional_tests.js#L753) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function proceedToMLBBStage2()'), 'Harus ada fungsi proceedToMLBBStage2');`
- **Memanggil Fungsi Internal:** [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`renderGroupStageUI()`](#rendergroupstageui), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="refreshandscrolltoplayoffbracket"></a>
#### `refreshAndScrollToPlayoffBracket()`

- **Definisi:** [`app.js:4435`](app.js#L4435)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4429`](app.js#L4429) — di dalam fungsi `proceedToMLBBStage2()`
    `refreshAndScrollToPlayoffBracket();`
  - [`app.js:4530`](app.js#L4530) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `refreshAndScrollToPlayoffBracket();`
  - [`app.js:11354`](app.js#L11354) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `refreshAndScrollToPlayoffBracket();`
- **Memanggil Fungsi Internal:** [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="refreshandscrolltogrouporbracket"></a>
#### `refreshAndScrollToGroupOrBracket()`

- **Definisi:** [`app.js:4464`](app.js#L4464)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4313`](app.js#L4313) — di dalam fungsi `shuffleAndGenerateTournament()`
    `refreshAndScrollToGroupOrBracket();`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderBracket()`](#renderbracket), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat)

<a id="shufflemlbbplayoffbracket"></a>
#### `shuffleMLBBPlayoffBracket()`

- **Definisi:** [`app.js:4490`](app.js#L4490)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1507`](index.html#L1507) — Event `onclick`
    `<button id="btnShuffleMLBBPlayoff" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`app.js:9215`](app.js#L9215) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700; ${i`
  - [`app.js:11700`](app.js#L11700) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-gold" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-wei`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="togglelockmlbbplayoff"></a>
#### `toggleLockMLBBPlayoff()`

- **Definisi:** [`app.js:4545`](app.js#L4545)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1508`](index.html#L1508) — Event `onclick`
    `<button id="btnLockMLBBPlayoff" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`app.js:9212`](app.js#L9212) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn ${isPlayoffLocked ? 'btn-gold' : 'btn-outline'}" style="font-size:0.75rem; paddin`
  - [`app.js:11697`](app.js#L11697) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${isPlayoffLocked ? 'btn-gold' : 'btn-outline'}" style="font-size:0`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="openplayoffscoremodal"></a>
#### `openPlayoffScoreModal(rIdx, mIdx, preselectWinner = null)`

- **Definisi:** [`app.js:4584`](app.js#L4584)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4853`](app.js#L4853) — di dalam fungsi `onPlayoffTeamClicked()`
    `openPlayoffScoreModal(rIdx, mIdx, teamName);`
  - [`app.js:4877`](app.js#L4877) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<button type="button" class="btn-playoff-score" onclick="event.stopPropagation(); openPlayoffScoreMo`
  - [`app.js:11430`](app.js#L11430) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<button type="button" class="btn-playoff-score" onclick="event.stopPropagation(); openPlayoffScoreMo`
  - [`app.js:12259`](app.js#L12259) — cakupan global / event handler
    `<button type="button" class="btn btn-primary" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-`
  - [`app.js:12371`](app.js#L12371) — cakupan global / event handler
    `<button type="button" class="btn btn-gold" style="font-size:0.85rem; padding:0.45rem 1rem; font-weig`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`isSameTeamName()`](#issameteamname), [`escapeHtml()`](#escapehtml), [`setPlayoffModalQuickScore()`](#setplayoffmodalquickscore), [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="openplayoffmvpfromscoremodal"></a>
#### `openPlayoffMvpFromScoreModal()`

- **Definisi:** [`app.js:4685`](app.js#L4685)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:2172`](index.html#L2172) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.76rem; padding: 0.3rem 0.7rem; bor`
- **Memanggil Fungsi Internal:** [`closePlayoffScoreModal()`](#closeplayoffscoremodal), [`openMLBBPlayoffMvpModal()`](#openmlbbplayoffmvpmodal)

<a id="closeplayoffscoremodal"></a>
#### `closePlayoffScoreModal()`

- **Definisi:** [`app.js:4692`](app.js#L4692)
- **Titik Pemanggilan (6 lokasi):**
  - [`index.html:2104`](index.html#L2104) — Event `onclick`
    `<div id="playoffScoreModal" class="modal-overlay" onclick="if(event.target === this) closePlayoffSco`
  - [`index.html:2115`](index.html#L2115) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.85rem;" on`
  - [`index.html:2188`](index.html#L2188) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.75rem;" on`
  - [`app.js:4688`](app.js#L4688) — di dalam fungsi `openPlayoffMvpFromScoreModal()`
    `closePlayoffScoreModal();`
  - [`app.js:4774`](app.js#L4774) — di dalam fungsi `savePlayoffModalScore()`
    `closePlayoffScoreModal();`
  - [`app.js:4783`](app.js#L4783) — di dalam fungsi `resetPlayoffModalScore()`
    `closePlayoffScoreModal();`

<a id="stepplayoffmodalscore"></a>
#### `stepPlayoffModalScore(team, delta)`

- **Definisi:** [`app.js:4698`](app.js#L4698)
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:2133`](index.html#L2133) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 1rem; font-w`
  - [`index.html:2135`](index.html#L2135) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 1rem; font-w`
  - [`index.html:2150`](index.html#L2150) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 1rem; font-w`
  - [`index.html:2152`](index.html#L2152) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 1rem; font-w`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="setplayoffmodalquickscore"></a>
#### `setPlayoffModalQuickScore(sA, sB)`

- **Definisi:** [`app.js:4713`](app.js#L4713)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4664`](app.js#L4664) — di dalam fungsi `openPlayoffScoreModal()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem; font`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="onplayoffscoreinputchanged"></a>
#### `onPlayoffScoreInputChanged()`

- **Definisi:** [`app.js:4724`](app.js#L4724)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:2134`](index.html#L2134) — Event `oninput`
    `<input type="number" id="playoffModalScoreA" min="0" max="5" value="0" style="width: 52px; font-size`
  - [`index.html:2151`](index.html#L2151) — Event `oninput`
    `<input type="number" id="playoffModalScoreB" min="0" max="5" value="0" style="width: 52px; font-size`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="updateplayoffmodalwinnerpreview"></a>
#### `updatePlayoffModalWinnerPreview()`

- **Definisi:** [`app.js:4735`](app.js#L4735)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4681`](app.js#L4681) — di dalam fungsi `openPlayoffScoreModal()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4710`](app.js#L4710) — di dalam fungsi `stepPlayoffModalScore()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4721`](app.js#L4721) — di dalam fungsi `setPlayoffModalQuickScore()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4732`](app.js#L4732) — di dalam fungsi `onPlayoffScoreInputChanged()`
    `updatePlayoffModalWinnerPreview();`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="saveplayoffmodalscore"></a>
#### `savePlayoffModalScore()`

- **Definisi:** [`app.js:4765`](app.js#L4765)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:2191`](index.html#L2191) — Event `onclick`
    `<button type="button" id="btnSavePlayoffScore" class="btn btn-primary" style="font-size: 0.8rem; pad`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`setPlayoffMatchScore()`](#setplayoffmatchscore), [`closePlayoffScoreModal()`](#closeplayoffscoremodal)

<a id="resetplayoffmodalscore"></a>
#### `resetPlayoffModalScore()`

- **Definisi:** [`app.js:4778`](app.js#L4778)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:2184`](index.html#L2184) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.75rem; bor`
- **Memanggil Fungsi Internal:** [`resetPlayoffMatchScore()`](#resetplayoffmatchscore), [`closePlayoffScoreModal()`](#closeplayoffscoremodal)

<a id="setplayoffmatchscore"></a>
#### `setPlayoffMatchScore(rIdx, mIdx, scoreA, scoreB)`

- **Definisi:** [`app.js:4786`](app.js#L4786)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4772`](app.js#L4772) — di dalam fungsi `savePlayoffModalScore()`
    `const ok = setPlayoffMatchScore(rIdx, mIdx, scoreA, scoreB);`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`pickGroupPlayoffWinner()`](#pickgroupplayoffwinner), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`escapeHtml()`](#escapehtml)

<a id="resetplayoffmatchscore"></a>
#### `resetPlayoffMatchScore(rIdx, mIdx)`

- **Definisi:** [`app.js:4827`](app.js#L4827)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4782`](app.js#L4782) — di dalam fungsi `resetPlayoffModalScore()`
    `resetPlayoffMatchScore(rIdx, mIdx);`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast)

<a id="onplayoffteamclicked"></a>
#### `onPlayoffTeamClicked(rIdx, mIdx, teamName)`

- **Definisi:** [`app.js:4846`](app.js#L4846)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4886`](app.js#L4886) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamA ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:4894`](app.js#L4894) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamB ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:11439`](app.js#L11439) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<div class="bracket-node-team ${m.winner === effectiveTeamA ? 'is-winner' : ''} ${isAdmin && isReady`
  - [`app.js:11447`](app.js#L11447) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<div class="bracket-node-team ${m.winner === effectiveTeamB ? 'is-winner' : ''} ${isAdmin && isReady`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`showToast()`](#showtoast), [`openPlayoffScoreModal()`](#openplayoffscoremodal)

<a id="renderplayoffmatchcardhtml"></a>
#### `renderPlayoffMatchCardHtml(m, rIdx, mIdx, activeNodeKey = '', isIncoming = false, isLower = false)`

- **Definisi:** [`app.js:4856`](app.js#L4856)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9247`](app.js#L9247) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m1, rIdx, i, '', isIncoming, isLower)}`
  - [`app.js:9248`](app.js#L9248) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m2, rIdx, i + 1, '', isIncoming, isLower)}`
  - [`app.js:9256`](app.js#L9256) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m1, rIdx, i, '', isIncoming, isLower)}`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`openPlayoffScoreModal()`](#openplayoffscoremodal), [`openMLBBPlayoffMvpModal()`](#openmlbbplayoffmvpmodal), [`onPlayoffTeamClicked()`](#onplayoffteamclicked), [`escapeHtml()`](#escapehtml)

<a id="testmlbbplayoffwithcurrentstandings"></a>
#### `testMLBBPlayoffWithCurrentStandings()`

- **Definisi:** [`app.js:4928`](app.js#L4928)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:2251`](index.html#L2251) — Event `onclick`
    `<button class="btn btn-gold" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; font-`
  - [`app.js:5083`](app.js#L5083) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;" on`
  - [`app.js:9165`](app.js#L9165) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="padding: 0.45rem 1rem; font-size: 0.85rem; border-color: var(`
  - [`app.js:9218`](app.js#L9218) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(`
  - [`app.js:11703`](app.js#L11703) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.8rem; padding:0.4rem 0.85rem; borde`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openTestDrawModal()`](#opentestdrawmodal), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`setMLBBViewMode()`](#setmlbbviewmode), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`findTeamGroupAndRank()`](#findteamgroupandrank), [`escapeHtml()`](#escapehtml), [`getSortedGroupTeams()`](#getsortedgroupteams), [`openTestDrawInNewWindow()`](#opentestdrawinnewwindow), [`closeTestDrawModal()`](#closetestdrawmodal)

<a id="testmlbbgroupallocationdraw"></a>
#### `testMLBBGroupAllocationDraw()`

- **Definisi:** [`app.js:5198`](app.js#L5198)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:2235`](index.html#L2235) — Event `onclick`
    `<button class="btn btn-outline" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; bo`
  - [`app.js:5220`](app.js#L5220) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.6rem; font-weight:700;" onc`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`showToast()`](#showtoast), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`openTestDrawInNewWindow()`](#opentestdrawinnewwindow), [`getTeamDept()`](#getteamdept), [`isTeamInvited()`](#isteaminvited), [`escapeHtml()`](#escapehtml)

<a id="resetmlbbtostage1"></a>
#### `resetMLBBToStage1()`

- **Definisi:** [`app.js:5273`](app.js#L5273)
- **Deskripsi:** Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor jika diperlukan.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1506`](index.html#L1506) — Event `onclick`
    `<button id="btnResetMLBBStage1" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`functional_tests.js:754`](functional_tests.js#L754) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMLBBToStage1()'), 'Harus ada fungsi resetMLBBToStage1');`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resettotalmlbbgroupandbracket"></a>
#### `resetTotalMLBBGroupAndBracket()`

- **Definisi:** [`app.js:5285`](app.js#L5285)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1510`](index.html#L1510) — Event `onclick`
    `<button id="btnResetTotalMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5r`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openResetBaganModal()`](#openresetbaganmodal)

<a id="generatebracket"></a>
#### `generateBracket(doShuffle = false)`

- **Definisi:** [`app.js:5580`](app.js#L5580)
- **Deskripsi:** --- KNOCKOUT BRACKET ---
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1495`](index.html#L1495) — Event `onchange`
    `<select id="bracketSize" onchange="generateBracket()" style="padding: 0.5rem 0.8rem; font-size: 0.85`
  - [`app.js:4257`](app.js#L4257) — di dalam fungsi `changeTournamentFormat()`
    `generateBracket(false);`
  - [`app.js:4307`](app.js#L4307) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateBracket(true);`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="renderbracket"></a>
#### `renderBracket()`

- **Definisi:** [`app.js:5653`](app.js#L5653)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4285`](app.js#L4285) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderBracket();`
  - [`app.js:4467`](app.js#L4467) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderBracket === 'function') renderBracket();`
  - [`app.js:5586`](app.js#L5586) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:5630`](app.js#L5630) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:5650`](app.js#L5650) — di dalam fungsi `pickWinner()`
    `renderBracket();`
- **Memanggil Fungsi Internal:** [`pickWinner()`](#pickwinner)

<a id="allocatemlbbgroups"></a>
#### `allocateMLBBGroups(teamsList, groupNames, doShuffle = false)`

- **Definisi:** [`app.js:5728`](app.js#L5728)
- **Deskripsi:** Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi): 1. Acak tim invited ke masing-masing group (tidak boleh ada di group yang sama). 2. Acak urutan tim sisanya (tim reguler). 3. Masukkan tim sesuai urutan acak ke masing-masing group: - Penempatan tim selalu memprioritaskan grup dengan jumlah peserta/tim terkecil terlebih dahulu. - Siklus 1: Cek nama depan sama (satelit) ATAU divisi sama -> jika bentrok, ke next group. - Siklus 2: Jika dalam 1 cycle tetap tidak dapat group -> masukkan ke group berikutnya jika tidak ada nama depan sama (aturan divisi dilanggar terlebih dahulu). - Siklus 3: Jika dalam 1 cycle berikutnya masih tidak dapat -> masukkan ke group berikutnya (aturan satelit dilanggar demi menjaga keseimbangan kapasitas). Invarian Mutlak: Keseimbangan kapasitas grup dijaga ketat (misal 41 tim ke 8 grup = tepat 7 grup isi 5 tim dan 1 grup isi 6 tim). /
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5207`](app.js#L5207) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, true);`
  - [`app.js:5938`](app.js#L5938) — di dalam fungsi `generateGroupStage()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, doShuffle);`
  - [`functional_tests.js:885`](functional_tests.js#L885) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('allocateMLBBGroups('), 'app.js harus memiliki fungsi alokasi grup cerdas');`
- **Memanggil Fungsi Internal:** [`getTeamPrefix()`](#getteamprefix), [`getTeamDept()`](#getteamdept), [`getDepartmentCluster()`](#getdepartmentcluster), [`isTeamInvited()`](#isteaminvited), [`isInvited()`](#isinvited), [`getPrefix()`](#getprefix), [`getDept()`](#getdept), [`getOverBaseCount()`](#getoverbasecount), [`hasPrefixConflict()`](#hasprefixconflict), [`hasDeptConflict()`](#hasdeptconflict)

<a id="generategroupstage"></a>
#### `generateGroupStage(doShuffle = false)`

- **Definisi:** [`app.js:5918`](app.js#L5918)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:256`](app.js#L256) — di dalam fungsi `toggleInvitedTeam()`
    `generateGroupStage(false);`
  - [`app.js:4261`](app.js#L4261) — di dalam fungsi `changeTournamentFormat()`
    `generateGroupStage(false);`
  - [`app.js:4309`](app.js#L4309) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateGroupStage(true);`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="getmlbbheadtoheadwinner"></a>
#### `getMLBBHeadToHeadWinner(teamA, teamB, gName)`

- **Definisi:** [`app.js:5971`](app.js#L5971)
- **Deskripsi:** Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fase grup MLBB
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6052`](app.js#L6052) — di dalam fungsi `compareMLBBTeams()`
    `const h2h = getMLBBHeadToHeadWinner(a.name, b.name, gName);`
- **Memanggil Fungsi Internal:** [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="comparemlbbteams"></a>
#### `compareMLBBTeams(a, b)`

- **Definisi:** [`app.js:6038`](app.js#L6038)
- **Deskripsi:** Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke Squad: 1. Point (Total Poin, besar ke kecil) 2. Agregat Skor Game / Game Difference (Diff = Game Menang - Game Kalah, besar ke kecil) 3. Head-to-Head / H2H (Jika Poin & Agregat sama, pemenang pertemuan langsung di grup lebih atas) 4. Menang (Match Won / W, besar ke kecil) 5. Kalah (Match Lost / L, kecil ke besar: makin sedikit kalah makin di atas) 6. Total MVP Tim (besar ke kecil) 7. Nama Tim (A-Z)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6097`](app.js#L6097) — di dalam fungsi `getSortedGroupTeams()`
    `return [...teams].sort((a, b) => compareMLBBTeams(a, b, gName));`
- **Memanggil Fungsi Internal:** [`getMLBBHeadToHeadWinner()`](#getmlbbheadtoheadwinner)

<a id="findvalidbracketpermutation"></a>
#### `findValidBracketPermutation(candidates, forbiddenGroupsPerSlot)`

- **Definisi:** [`app.js:6109`](app.js#L6109)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:6399`](app.js#L6399) — di dalam fungsi `initGroupPlayoff()`
    `branchJ2 = findValidBracketPermutation(j2List, forbiddenForJ2);`
  - [`app.js:6411`](app.js#L6411) — di dalam fungsi `initGroupPlayoff()`
    `branchJ3 = findValidBracketPermutation(j3List, forbiddenForJ3);`
  - [`app.js:6530`](app.js#L6530) — di dalam fungsi `initGroupPlayoff()`
    `const candJ2 = findValidBracketPermutation(j2List, forbidden);`
  - [`app.js:6548`](app.js#L6548) — di dalam fungsi `initGroupPlayoff()`
    `bJ2 = findValidBracketPermutation(j2List, forbidden) || bJ1.map(j => j2List[(j1List.findIndex(x => x`
- **Memanggil Fungsi Internal:** [`backtrack()`](#backtrack), [`shuffleArray()`](#shufflearray)

<a id="isplayoffinvitedteam"></a>
#### `isPlayoffInvitedTeam(teamName)`

- **Definisi:** [`app.js:6149`](app.js#L6149)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6190`](app.js#L6190) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const isInv = (t) => isPlayoffInvitedTeam(t);`
  - [`app.js:6310`](app.js#L6310) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const isInv = (t) => isPlayoffInvitedTeam(t);`
- **Memanggil Fungsi Internal:** [`isTeamInvited()`](#isteaminvited)

<a id="solveremainingbracketslots"></a>
#### `solveRemainingBracketSlots(remainingItems, emptySlots, currentArray, validatorFn)`

- **Definisi:** [`app.js:6161`](app.js#L6161)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6290`](app.js#L6290) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const solvedBranchJ1 = solveRemainingBracketSlots(j1Regular, emptyJ1Slots, branchJ1, (slot, item) =>`
  - [`app.js:6297`](app.js#L6297) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const solvedBranchJ2 = solveRemainingBracketSlots(j2Regular, emptyJ2Slots, branchJ2, (slot, item) =>`
  - [`app.js:6337`](app.js#L6337) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const solved = solveRemainingBracketSlots(j3Regular, emptySlots, branchJ3, (slot, item) => {`
- **Memanggil Fungsi Internal:** [`shuffleArray()`](#shufflearray), [`backtrack()`](#backtrack)

<a id="drawmlbbplayoffupperbracket"></a>
#### `drawMLBBPlayoffUpperBracket(j1List, j2List)`

- **Definisi:** [`app.js:6189`](app.js#L6189)
- **Deskripsi:** Algoritma Pengundian Cerdas Playoff Upper Bracket 16 Besar (MLBB): 1. Undi tim invited terlebih dahulu. 2. Bagi acak tim invited ke 2 wings (Pool Atas [0..3] vs Pool Bawah [4..7]). - Jika ada ATMO dan ALPHA (Aang Alpha), pisahkan mereka di wings/pool yang berbeda! 3. Pisahkan mereka pada match yang berbeda di Tahap 1 (tidak saling berhadapan di 16 Besar, beda sayap QF). 4. Setelah menempatkan tim invited, undi tim reguler lain untuk menempati bagan yang kosong. 5. Pastikan syarat anti-rematch grup (Juara 2 beda grup dari Juara 1 di slot yang sama) tetap 100% terpenuhi. /
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6392`](app.js#L6392) — di dalam fungsi `initGroupPlayoff()`
    `const drawnUpper = drawMLBBPlayoffUpperBracket(j1List, j2List);`
- **Memanggil Fungsi Internal:** [`isPlayoffInvitedTeam()`](#isplayoffinvitedteam), [`isInv()`](#isinv), [`isTeamAtmo()`](#isteamatmo), [`isTeamAlpha()`](#isteamalpha), [`isTeamAppa()`](#isteamappa), [`shuffleArray()`](#shufflearray), [`solveRemainingBracketSlots()`](#solveremainingbracketslots)

<a id="drawmlbbplayofflowerbracket"></a>
#### `drawMLBBPlayoffLowerBracket(j3List, branchJ1, branchJ2)`

- **Definisi:** [`app.js:6309`](app.js#L6309)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6406`](app.js#L6406) — di dalam fungsi `initGroupPlayoff()`
    `const drawnLower = drawMLBBPlayoffLowerBracket(j3List, branchJ1, branchJ2);`
- **Memanggil Fungsi Internal:** [`isPlayoffInvitedTeam()`](#isplayoffinvitedteam), [`isInv()`](#isinv), [`shuffleArray()`](#shufflearray), [`solveRemainingBracketSlots()`](#solveremainingbracketslots)

<a id="initgroupplayoff"></a>
#### `initGroupPlayoff(doShuffle = false)`

- **Definisi:** [`app.js:6346`](app.js#L6346)
- **Deskripsi:** Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seeding Juara vs Runner-up).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:1753`](app.js#L1753) — di dalam fungsi `cleanOrphanedTournamentData()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff();`
  - [`app.js:4393`](app.js#L4393) — di dalam fungsi `resolveMLBBTieBreaker()`
    `initGroupPlayoff();`
  - [`app.js:4420`](app.js#L4420) — di dalam fungsi `proceedToMLBBStage2()`
    `initGroupPlayoff(true);`
  - [`app.js:4521`](app.js#L4521) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `initGroupPlayoff(true);`
  - [`app.js:4947`](app.js#L4947) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `initGroupPlayoff(true);`
  - [`app.js:5951`](app.js#L5951) — di dalam fungsi `generateGroupStage()`
    `initGroupPlayoff(doShuffle);`
  - [`app.js:5966`](app.js#L5966) — di dalam fungsi `updateGroupRecord()`
    `initGroupPlayoff();`
  - [`app.js:7674`](app.js#L7674) — di dalam fungsi `setGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:8720`](app.js#L8720) — di dalam fungsi `resetGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:11342`](app.js#L11342) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `initGroupPlayoff(!isLocked);`
  - [`app.js:11503`](app.js#L11503) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff(false);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`drawMLBBPlayoffUpperBracket()`](#drawmlbbplayoffupperbracket), [`shuffleArray()`](#shufflearray), [`findValidBracketPermutation()`](#findvalidbracketpermutation), [`drawMLBBPlayoffLowerBracket()`](#drawmlbbplayofflowerbracket), [`isTeamAtmo()`](#isteamatmo), [`isTeamAlpha()`](#isteamalpha)

<a id="isplayoffplaceholderteam"></a>
#### `isPlayoffPlaceholderTeam(teamName)`

- **Definisi:** [`app.js:6597`](app.js#L6597)
- **Titik Pemanggilan (15 lokasi):**
  - [`app.js:479`](app.js#L479) — di dalam fungsi `normalizeGroupPlayoffMatches()`
    `if (defaultMatch.matchLabel === 'LB_SF_1' && (!defaultMatch.teamB || defaultMatch.teamB === 'Gugur U`
  - [`app.js:482`](app.js#L482) — di dalam fungsi `normalizeGroupPlayoffMatches()`
    `if (defaultMatch.matchLabel === 'LB_SF_2' && (!defaultMatch.teamB || defaultMatch.teamB === 'Gugur U`
  - [`app.js:486`](app.js#L486) — di dalam fungsi `normalizeGroupPlayoffMatches()`
    `if (!defaultMatch.teamA || defaultMatch.teamA === 'Pemenang UB SF 1' || isPlayoffPlaceholderTeam(def`
  - [`app.js:487`](app.js#L487) — di dalam fungsi `normalizeGroupPlayoffMatches()`
    `if (!defaultMatch.teamB || defaultMatch.teamB === 'Pemenang UB SF 2' || isPlayoffPlaceholderTeam(def`
  - [`app.js:4796`](app.js#L4796) — di dalam fungsi `setPlayoffMatchScore()`
    `if (isPlayoffPlaceholderTeam(match.teamA) || isPlayoffPlaceholderTeam(match.teamB)) {`
  - [`app.js:4849`](app.js#L4849) — di dalam fungsi `onPlayoffTeamClicked()`
    `if (!m || isPlayoffPlaceholderTeam(m.teamA) || isPlayoffPlaceholderTeam(m.teamB)) {`
  - [`app.js:4868`](app.js#L4868) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `const isReady = !isPlayoffPlaceholderTeam(m.teamA) && !isPlayoffPlaceholderTeam(m.teamB);`
  - [`app.js:6610`](app.js#L6610) — di dalam fungsi `pickGroupPlayoffWinner()`
    `if (!match || !winnerTeam || isPlayoffPlaceholderTeam(winnerTeam)) return;`
  - [`app.js:6631`](app.js#L6631) — di dalam fungsi `pickGroupPlayoffWinner()`
    `if (lbMatch.teamB && (lbMatch.teamB.indexOf('Gugur UB R1') !== -1 || isPlayoffPlaceholderTeam(lbMatc`
  - [`app.js:11397`](app.js#L11397) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `if (m.matchLabel === 'LB_SF_1' && (effectiveTeamB === 'Gugur UB SF 1' || isPlayoffPlaceholderTeam(ef`
  - [`app.js:11399`](app.js#L11399) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `} else if (m.matchLabel === 'LB_SF_2' && (effectiveTeamB === 'Gugur UB SF 2' || isPlayoffPlaceholder`
  - [`app.js:11402`](app.js#L11402) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `if (effectiveTeamA === 'Pemenang UB SF 1' || isPlayoffPlaceholderTeam(effectiveTeamA)) effectiveTeam`
  - [`app.js:11403`](app.js#L11403) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `if (effectiveTeamB === 'Pemenang UB SF 2' || isPlayoffPlaceholderTeam(effectiveTeamB)) effectiveTeam`
  - [`app.js:11419`](app.js#L11419) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `const isReady = !isPlayoffPlaceholderTeam(effectiveTeamA) && !isPlayoffPlaceholderTeam(effectiveTeam`
  - [`app.js:11886`](app.js#L11886) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `const matchTitle = (pMatch && pMatch.teamA && pMatch.teamB && !isPlayoffPlaceholderTeam(pMatch.teamA`

<a id="pickgroupplayoffwinner"></a>
#### `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:6607`](app.js#L6607)
- **Deskripsi:** Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya ke ronde berikutnya.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4817`](app.js#L4817) — di dalam fungsi `setPlayoffMatchScore()`
    `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam);`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="promptplayoffmvp"></a>
#### `promptPlayoffMVP(rIdx, mIdx)`

- **Definisi:** [`app.js:6780`](app.js#L6780)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:792`](functional_tests.js#L792) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptPlayoffMVP('), 'Harus memiliki promptPlayoffMVP');`
- **Memanggil Fungsi Internal:** [`openMLBBPlayoffMvpModal()`](#openmlbbplayoffmvpmodal)

<a id="rendergroupstageui"></a>
#### `renderGroupStageUI()`

- **Definisi:** [`app.js:6787`](app.js#L6787)
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:17`](app.js#L17) — di dalam fungsi `prevMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:24`](app.js#L24) — di dalam fungsi `nextMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:29`](app.js#L29) — di dalam fungsi `goToMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:4290`](app.js#L4290) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderGroupStageUI();`
  - [`app.js:4394`](app.js#L4394) — di dalam fungsi `resolveMLBBTieBreaker()`
    `renderGroupStageUI();`
  - [`app.js:4412`](app.js#L4412) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupStageUI();`
  - [`app.js:4465`](app.js#L4465) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:5952`](app.js#L5952) — di dalam fungsi `generateGroupStage()`
    `renderGroupStageUI();`
  - [`app.js:5967`](app.js#L5967) — di dalam fungsi `updateGroupRecord()`
    `renderGroupStageUI();`
  - [`app.js:7675`](app.js#L7675) — di dalam fungsi `setGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:8412`](app.js#L8412) — di dalam fungsi `setGroupMatchMVP()`
    `renderGroupStageUI();`
  - [`app.js:8504`](app.js#L8504) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8522`](app.js#L8522) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8545`](app.js#L8545) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8721`](app.js#L8721) — di dalam fungsi `resetGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:11272`](app.js#L11272) — di dalam fungsi `setMLBBViewMode()`
    `renderGroupStageUI();`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`goToMLBBGroupPage()`](#gotomlbbgrouppage), [`prevMLBBGroupPage()`](#prevmlbbgrouppage), [`nextMLBBGroupPage()`](#nextmlbbgrouppage), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`getSortedGroupTeams()`](#getsortedgroupteams), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker)

<a id="setmlbbactiveweek"></a>
#### `setMLBBActiveWeek(weekKey)`

- **Definisi:** [`app.js:7226`](app.js#L7226)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8876`](app.js#L8876) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_1' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:8881`](app.js#L8881) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_2' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:8886`](app.js#L8886) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_3' ? 'active' : ''}" onclick="setMLBBActive`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivedayfilter"></a>
#### `setMLBBActiveDayFilter(day)`

- **Definisi:** [`app.js:7234`](app.js#L7234)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:8993`](app.js#L8993) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 'ALL' ? 'active' : ''}" onc`
  - [`app.js:8996`](app.js#L8996) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 1 ? 'active' : ''}" onclick`
  - [`app.js:8999`](app.js#L8999) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 2 ? 'active' : ''}" onclick`
  - [`app.js:9002`](app.js#L9002) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 3 ? 'active' : ''}" onclick`
  - [`app.js:9005`](app.js#L9005) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 4 ? 'active' : ''}" onclick`
  - [`app.js:9008`](app.js#L9008) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 5 ? 'active' : ''}" onclick`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivegroupfilter"></a>
#### `setMLBBActiveGroupFilter(gName)`

- **Definisi:** [`app.js:7239`](app.js#L7239)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9014`](app.js#L9014) — di dalam fungsi `renderGroupFixturesUI()`
    `<select onchange="setMLBBActiveGroupFilter(this.value)" style="background:#0f172a; border:1px solid `
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="getgroupfixtures"></a>
#### `getGroupFixtures(gName, dayFilter = null)`

- **Definisi:** [`app.js:7245`](app.js#L7245)
- **Deskripsi:** --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) ---
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:4348`](app.js#L4348) — di dalam fungsi `isAllMLBBGroupMatchesFinished()`
    `const fixtures = getGroupFixtures(gName);`
  - [`app.js:7449`](app.js#L7449) — di dalam fungsi `isGroupMatchesCompleted()`
    `const fixtures = (typeof getGroupFixtures === 'function') ? getGroupFixtures(gName) : [];`
  - [`app.js:7560`](app.js#L7560) — di dalam fungsi `getGroupRestingTeams()`
    `const dayFixtures = getGroupFixtures(gName, day);`
  - [`app.js:9027`](app.js#L9027) — di dalam fungsi `renderGroupFixturesUI()`
    `const fixtures = getGroupFixtures(gName, mlbbActiveDayFilter);`
  - [`app.js:12030`](app.js#L12030) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const fixtures = getGroupFixtures(gName);`
  - [`functional_tests.js:675`](functional_tests.js#L675) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getGroupFixtures('), 'app.js harus memiliki generator jadwal getGr`
- **Memanggil Fungsi Internal:** [`resolveTeamNameInGroup()`](#resolveteamnameingroup), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="savegroupfixturescore"></a>
#### `saveGroupFixtureScore(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:7713`](app.js#L7713)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9126`](app.js#L9126) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-primary" style="font-size:0.68rem; padding:2px 8px;" onclick="s`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="openmlbbgroupmvpmodal"></a>
#### `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, scoreA, scoreB)`

- **Definisi:** [`app.js:7766`](app.js#L7766)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8450`](app.js#L8450) — di dalam fungsi `promptGroupMatchMVP()`
    `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, null, null);`
  - [`app.js:9130`](app.js#L9130) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 8px; color:var(-`
  - [`app.js:12186`](app.js#L12186) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname), [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="openmlbbplayoffmvpmodal"></a>
#### `openMLBBPlayoffMvpModal(rIdx, mIdx)`

- **Definisi:** [`app.js:7840`](app.js#L7840)
- **Titik Pemanggilan (8 lokasi):**
  - [`app.js:4689`](app.js#L4689) — di dalam fungsi `openPlayoffMvpFromScoreModal()`
    `openMLBBPlayoffMvpModal(rIdx, mIdx);`
  - [`app.js:4880`](app.js#L4880) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<button type="button" class="btn-playoff-mvp" onclick="event.stopPropagation(); openMLBBPlayoffMvpMo`
  - [`app.js:4908`](app.js#L4908) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<button type="button" onclick="event.stopPropagation(); openMLBBPlayoffMvpModal(${rIdx}, ${mIdx})" s`
  - [`app.js:6784`](app.js#L6784) — di dalam fungsi `promptPlayoffMVP()`
    `openMLBBPlayoffMvpModal(rIdx, mIdx);`
  - [`app.js:11433`](app.js#L11433) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<button type="button" class="btn-playoff-mvp" onclick="event.stopPropagation(); openMLBBPlayoffMvpMo`
  - [`app.js:11461`](app.js#L11461) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<button type="button" onclick="event.stopPropagation(); openMLBBPlayoffMvpModal(${rIdx}, ${mIdx})" s`
  - [`app.js:12262`](app.js#L12262) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-`
  - [`app.js:12374`](app.js#L12374) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.85rem; padding:0.45rem 1rem; font-w`
- **Memanggil Fungsi Internal:** [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="closemlbbgroupmvpmodal"></a>
#### `closeMLBBGroupMvpModal()`

- **Definisi:** [`app.js:8026`](app.js#L8026)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:1991`](index.html#L1991) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:2059`](index.html#L2059) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;" on`
  - [`app.js:8274`](app.js#L8274) — di dalam fungsi `saveSelectedMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:8284`](app.js#L8284) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:8327`](app.js#L8327) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`

<a id="recalculategroupstandingsfromfixtures"></a>
#### `recalculateGroupStandingsFromFixtures()`

- **Definisi:** [`app.js:8724`](app.js#L8724)
- **Deskripsi:** Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan seluruh hasil pertandingan BO3.
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1632`](app.js#L1632) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
  - [`app.js:7672`](app.js#L7672) — di dalam fungsi `setGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:8718`](app.js#L8718) — di dalam fungsi `resetGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:11205`](app.js#L11205) — cakupan global / event handler
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
- **Memanggil Fungsi Internal:** [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="rendergroupfixturesui"></a>
#### `renderGroupFixturesUI()`

- **Definisi:** [`app.js:8864`](app.js#L8864)
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:34`](app.js#L34) — di dalam fungsi `toggleAllMLBBFixtures()`
    `renderGroupFixturesUI();`
  - [`app.js:6876`](app.js#L6876) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:7023`](app.js#L7023) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:7231`](app.js#L7231) — di dalam fungsi `setMLBBActiveWeek()`
    `renderGroupFixturesUI();`
  - [`app.js:7236`](app.js#L7236) — di dalam fungsi `setMLBBActiveDayFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:7241`](app.js#L7241) — di dalam fungsi `setMLBBActiveGroupFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:8413`](app.js#L8413) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8505`](app.js#L8505) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8523`](app.js#L8523) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8546`](app.js#L8546) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`functional_tests.js:677`](functional_tests.js#L677) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderGroupFixturesUI('), 'app.js harus memiliki renderer bagan re`
- **Memanggil Fungsi Internal:** [`setMLBBActiveWeek()`](#setmlbbactiveweek), [`setMLBBActiveDayFilter()`](#setmlbbactivedayfilter), [`setMLBBActiveGroupFilter()`](#setmlbbactivegroupfilter), [`getGroupFixtures()`](#getgroupfixtures), [`escapeHtml()`](#escapehtml), [`getGroupRestingTeams()`](#getgrouprestingteams), [`isSameTeamName()`](#issameteamname), [`formatMatchMvpDisplayHtml()`](#formatmatchmvpdisplayhtml), [`openMatchPlayerVerifyModal()`](#openmatchplayerverifymodal), [`saveGroupFixtureScore()`](#savegroupfixturescore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="rendergroupplayofftree"></a>
#### `renderGroupPlayoffTree()`

- **Definisi:** [`app.js:9145`](app.js#L9145)
- **Deskripsi:** Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau status terkunci jika grup belum selesai.
- **Titik Pemanggilan (14 lokasi):**
  - [`app.js:4425`](app.js#L4425) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupPlayoffTree();`
  - [`app.js:4442`](app.js#L4442) — di dalam fungsi `refreshAndScrollToPlayoffBracket()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:4466`](app.js#L4466) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:4526`](app.js#L4526) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `renderGroupPlayoffTree();`
  - [`app.js:4571`](app.js#L4571) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `renderGroupPlayoffTree();`
  - [`app.js:4837`](app.js#L4837) — di dalam fungsi `resetPlayoffMatchScore()`
    `renderGroupPlayoffTree();`
  - [`app.js:4957`](app.js#L4957) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderGroupPlayoffTree();`
  - [`app.js:5953`](app.js#L5953) — di dalam fungsi `generateGroupStage()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:6776`](app.js#L6776) — di dalam fungsi `pickGroupPlayoffWinner()`
    `renderGroupPlayoffTree();`
  - [`app.js:6877`](app.js#L6877) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:7024`](app.js#L7024) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:8263`](app.js#L8263) — di dalam fungsi `saveSelectedMvp()`
    `renderGroupPlayoffTree();`
  - [`app.js:8316`](app.js#L8316) — di dalam fungsi `deleteCurrentMvp()`
    `renderGroupPlayoffTree();`
  - [`app.js:11348`](app.js#L11348) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
- **Memanggil Fungsi Internal:** [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`testMLBBPlayoffWithCurrentStandings()`](#testmlbbplayoffwithcurrentstandings), [`toggleLockMLBBPlayoff()`](#togglelockmlbbplayoff), [`showToast()`](#showtoast), [`shuffleMLBBPlayoffBracket()`](#shufflemlbbplayoffbracket), [`renderPlayoffMatchCardHtml()`](#renderplayoffmatchcardhtml)

<a id="setmlbbviewmode"></a>
#### `setMLBBViewMode(mode)`

- **Definisi:** [`app.js:11238`](app.js#L11238)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MLBB ---
- **Titik Pemanggilan (6 lokasi):**
  - [`index.html:1534`](index.html#L1534) — Event `onclick`
    `<button type="button" id="btnViewMlbbHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:1537`](index.html#L1537) — Event `onclick`
    `<button type="button" id="btnViewMlbbGroups" class="btn btn-outline" style="font-size: 0.8rem; paddi`
  - [`index.html:1540`](index.html#L1540) — Event `onclick`
    `<button type="button" id="btnViewMlbbFixtures" class="btn btn-outline" style="font-size: 0.8rem; pad`
  - [`app.js:2946`](app.js#L2946) — di dalam fungsi `switchTab()`
    `setMLBBViewMode('HUB');`
  - [`app.js:4953`](app.js#L4953) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `setMLBBViewMode('GROUPS');`
  - [`functional_tests.js:1164`](functional_tests.js#L1164) — pada skenario pengujian
    `assert(appCode.includes('function setMLBBViewMode('), 'app.js harus memiliki fungsi setMLBBViewMode'`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="toggleplayoffbracketcollapse"></a>
#### `togglePlayoffBracketCollapse()`

- **Definisi:** [`app.js:11324`](app.js#L11324)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11714`](app.js#L11714) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.38rem 0.7rem; bord`

<a id="gotonextmlbbplayoffphase"></a>
#### `goToNextMLBBPlayoffPhase()`

- **Definisi:** [`app.js:11336`](app.js#L11336)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11845`](app.js#L11845) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="btn btn-primary" style="width:100%; font-size:0.82rem; padding:0.6rem 0`
  - [`app.js:12056`](app.js#L12056) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; fon`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="setplayoffbracketfilter"></a>
#### `setPlayoffBracketFilter(filter)`

- **Definisi:** [`app.js:11363`](app.js#L11363)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11723`](app.js#L11723) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${currentPlayoffBracketFilter === 'UPPER' ? 'btn-primary' : 'btn-ou`
  - [`app.js:11726`](app.js#L11726) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${currentPlayoffBracketFilter === 'LOWER' ? 'btn-gold' : 'btn-outli`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="toggleplayofffullscreen"></a>
#### `togglePlayoffFullscreen()`

- **Definisi:** [`app.js:11370`](app.js#L11370)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11711`](app.js#L11711) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.38rem 0.7rem; bord`

<a id="renderfullplayoffbrackethtml"></a>
#### `renderFullPlayoffBracketHtml(activeNodeKey = '')`

- **Definisi:** [`app.js:11501`](app.js#L11501)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11984`](app.js#L11984) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `content += renderFullPlayoffBracketHtml(nodeKey);`
  - [`app.js:12020`](app.js#L12020) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `content += renderFullPlayoffBracketHtml(nodeKey);`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff), [`renderSingleMatchNodeHtml()`](#rendersinglematchnodehtml), [`renderSvgConnectorColumn()`](#rendersvgconnectorcolumn), [`toggleLockMLBBPlayoff()`](#togglelockmlbbplayoff), [`showToast()`](#showtoast), [`shuffleMLBBPlayoffBracket()`](#shufflemlbbplayoffbracket), [`testMLBBPlayoffWithCurrentStandings()`](#testmlbbplayoffwithcurrentstandings), [`togglePlayoffFullscreen()`](#toggleplayofffullscreen), [`togglePlayoffBracketCollapse()`](#toggleplayoffbracketcollapse), [`setPlayoffBracketFilter()`](#setplayoffbracketfilter)

<a id="selectmlbbstagenode"></a>
#### `selectMLBBStageNode(nodeKey)`

- **Definisi:** [`app.js:11741`](app.js#L11741)
- **Titik Pemanggilan (17 lokasi):**
  - [`app.js:11416`](app.js#L11416) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `? 'onclick="if(event.target.closest('.bracket-node-team') || event.target.closest('button')) return;`
  - [`app.js:11766`](app.js#L11766) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<select id="mobileStageSelect" class="mobile-stage-select" onchange="selectMLBBStageNode(this.value)`
  - [`app.js:11833`](app.js#L11833) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:11860`](app.js#L11860) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.2rem 0.55rem; colo`
  - [`app.js:11891`](app.js#L11891) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:11914`](app.js#L11914) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_UPPER_QF' ? 'active' : ''}" onclic`
  - [`app.js:11918`](app.js#L11918) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_LOWER_R1' ? 'active' : ''}" onclic`
  - [`app.js:11936`](app.js#L11936) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_UPPER' ? 'active' : ''}" onclick="`
  - [`app.js:11940`](app.js#L11940) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_LOWER' ? 'active' : ''}" onclick="`
  - [`app.js:11960`](app.js#L11960) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'GRAND_FINAL_OFFLINE' ? 'active`
  - [`app.js:11994`](app.js#L11994) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11997`](app.js#L11997) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:12000`](app.js#L12000) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:12003`](app.js#L12003) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:12006`](app.js#L12006) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:12009`](app.js#L12009) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`functional_tests.js:1166`](functional_tests.js#L1166) — pada skenario pengujian
    `assert(appCode.includes('function selectMLBBStageNode('), 'app.js harus memiliki selectMLBBStageNode`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermlbbinteractivehubui"></a>
#### `renderMLBBInteractiveHubUI()`

- **Definisi:** [`app.js:11752`](app.js#L11752)
- **Titik Pemanggilan (26 lokasi):**
  - [`app.js:4265`](app.js#L4265) — di dalam fungsi `changeTournamentFormat()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:4426`](app.js#L4426) — di dalam fungsi `proceedToMLBBStage2()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4443`](app.js#L4443) — di dalam fungsi `refreshAndScrollToPlayoffBracket()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4468`](app.js#L4468) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4527`](app.js#L4527) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:4572`](app.js#L4572) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4838`](app.js#L4838) — di dalam fungsi `resetPlayoffMatchScore()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:5954`](app.js#L5954) — di dalam fungsi `generateGroupStage()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:6777`](app.js#L6777) — di dalam fungsi `pickGroupPlayoffWinner()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:6803`](app.js#L6803) — di dalam fungsi `renderGroupStageUI()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:8264`](app.js#L8264) — di dalam fungsi `saveSelectedMvp()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8317`](app.js#L8317) — di dalam fungsi `deleteCurrentMvp()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8414`](app.js#L8414) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8506`](app.js#L8506) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8524`](app.js#L8524) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8547`](app.js#L8547) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:11263`](app.js#L11263) — di dalam fungsi `setMLBBViewMode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11349`](app.js#L11349) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:11366`](app.js#L11366) — di dalam fungsi `setPlayoffBracketFilter()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11743`](app.js#L11743) — di dalam fungsi `selectMLBBStageNode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:12087`](app.js#L12087) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:12090`](app.js#L12090) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
  - [`app.js:12182`](app.js#L12182) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:12184`](app.js#L12184) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:12185`](app.js#L12185) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`functional_tests.js:1165`](functional_tests.js#L1165) — pada skenario pengujian
    `assert(appCode.includes('function renderMLBBInteractiveHubUI()'), 'app.js harus memiliki renderMLBBI`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`goToNextMLBBPlayoffPhase()`](#gotonextmlbbplayoffphase), [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`escapeHtml()`](#escapehtml), [`renderMLBBDetailPanelContent()`](#rendermlbbdetailpanelcontent)

<a id="rendermlbbdetailpanelcontent"></a>
#### `renderMLBBDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:11979`](app.js#L11979)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11973`](app.js#L11973) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `rightHtml += renderMLBBDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderFullPlayoffBracketHtml()`](#renderfullplayoffbrackethtml), [`selectMLBBStageNode()`](#selectmlbbstagenode), [`getSortedGroupTeams()`](#getsortedgroupteams), [`getGroupFixtures()`](#getgroupfixtures), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`escapeHtml()`](#escapehtml), [`goToNextMLBBPlayoffPhase()`](#gotonextmlbbplayoffphase), [`updateGroupRecord()`](#updategrouprecord), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`isSameTeamName()`](#issameteamname), [`setGroupMatchScore()`](#setgroupmatchscore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

---

### 📦 Modul Aplikasi Umum

<a id="posttogoogleappsscript"></a>
#### `postToGoogleAppsScript(payload, timeoutMs = 45000)`

- **Definisi:** [`app.js:93`](app.js#L93)
- **Deskripsi:** Helper fetch terpusat untuk komunikasi POST dengan Google Apps Script Web App. - Menggunakan Content-Type text/plain;charset=utf-8 (mencegah CORS preflight OPTIONS yang tidak didukung GAS). - Mengaktifkan mode: 'cors' dan redirect: 'follow' untuk menangani 302 redirect ke script.googleusercontent.com secara andal. - Dilengkapi AbortController timeout agar antarmuka tidak hang saat koneksi lambat. /
- **Titik Pemanggilan (14 lokasi):**
  - [`app.js:1039`](app.js#L1039) — di dalam fungsi `confirmResetBaganWithPin()`
    `const res = await postToGoogleAppsScript({`
  - [`app.js:1886`](app.js#L1886) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `const batchRes = await postToGoogleAppsScript({`
  - [`app.js:1925`](app.js#L1925) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `return postToGoogleAppsScript({`
  - [`app.js:1954`](app.js#L1954) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `await postToGoogleAppsScript({`
  - [`app.js:2017`](app.js#L2017) — cakupan global / event handler
    `const res = await postToGoogleAppsScript(payload, 35000);`
  - [`app.js:2047`](app.js#L2047) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `const res = await postToGoogleAppsScript({`
  - [`app.js:2241`](app.js#L2241) — di dalam fungsi `saveCustomRules()`
    `postToGoogleAppsScript({`
  - [`app.js:2485`](app.js#L2485) — di dalam fungsi `verifyAdminPin()`
    `const res = await postToGoogleAppsScript({`
  - [`app.js:3568`](app.js#L3568) — di dalam fungsi `handleRegister()`
    `let res = await postToGoogleAppsScript(payload, 45000);`
  - [`app.js:3579`](app.js#L3579) — di dalam fungsi `handleRegister()`
    `res = await postToGoogleAppsScript(payload, 45000);`
  - [`app.js:3688`](app.js#L3688) — di dalam fungsi `setParticipantStatus()`
    `postToGoogleAppsScript({`
  - [`app.js:3741`](app.js#L3741) — di dalam fungsi `deleteParticipant()`
    `postToGoogleAppsScript({`
  - [`app.js:3974`](app.js#L3974) — di dalam fungsi `saveParticipantEdit()`
    `const response = await postToGoogleAppsScript({`
  - [`app.js:5485`](app.js#L5485) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const res = await postToGoogleAppsScript(payload, 35000);`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`app.js:141`](app.js#L141)
- **Deskripsi:** Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5741`](app.js#L5741) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="getdepartmentcluster"></a>
#### `getDepartmentCluster(rawDept, teamOrPlayerName = '')`

- **Definisi:** [`app.js:153`](app.js#L153)
- **Deskripsi:** Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resmi) Memetakan variasi teks bebas pendaftar (e.g. 'IT/QA', 'Quality Assurance', 'ERM/PRM', 'ADO Bandung') ke klaster divisi resmi untuk pencegahan bentrok fase awal turnamen. /
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:217`](app.js#L217) — di dalam fungsi `getTeamDept()`
    `return getDepartmentCluster(raw, teamName).toLowerCase();`
  - [`app.js:5752`](app.js#L5752) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getDepartmentCluster === 'function') return getDepartmentCluster(d, team).toLowerCase();`
  - [`app.js:9420`](app.js#L9420) — di dalam fungsi `syncMCGGPlayers()`
    `const cluster = getDepartmentCluster(ply.dept, ply.name);`
  - [`app.js:9450`](app.js#L9450) — di dalam fungsi `syncMCGGPlayers()`
    `return getDepartmentCluster(d, p.name) === clusterName;`
  - [`functional_tests.js:932`](functional_tests.js#L932) — pada skenario pengujian
    `assert(appCode.includes('function getDepartmentCluster('), 'app.js harus memiliki helper getDepartme`
  - [`functional_tests.js:985`](functional_tests.js#L985) — pada skenario pengujian
    `assert(appCode.includes('function getDepartmentCluster('), 'app.js harus memiliki helper getDepartme`
  - [`functional_tests.js:988`](functional_tests.js#L988) — pada skenario pengujian
    `return getDepartmentCluster(rawDept, name);`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`app.js:211`](app.js#L211)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5245`](app.js#L5245) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:5750`](app.js#L5750) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:900`](functional_tests.js#L900) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`
- **Memanggil Fungsi Internal:** [`getDepartmentCluster()`](#getdepartmentcluster)

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`app.js:233`](app.js#L233)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:5246`](app.js#L5246) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5760`](app.js#L5760) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:6152`](app.js#L6152) — di dalam fungsi `isPlayoffInvitedTeam()`
    `if (typeof isTeamInvited === 'function' && isTeamInvited(teamName)) return true;`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`

<a id="toggleinvitedteam"></a>
#### `toggleInvitedTeam(id)`

- **Definisi:** [`app.js:248`](app.js#L248)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4169`](app.js#L4169) — di dalam fungsi `renderParticipants()`
    `<button class="btn ${p.isInvited ? 'btn-gold' : 'btn-outline'}" style="padding: 0.35rem 0.55rem; fon`
  - [`functional_tests.js:877`](functional_tests.js#L877) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleInvitedTeam('), 'app.js harus memiliki toggleInvitedTeam');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="showgloballoader"></a>
#### `showGlobalLoader(msg = "Menyinkronkan data turnamen dari Google Sheets...")`

- **Definisi:** [`app.js:283`](app.js#L283)
- **Deskripsi:** Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11176`](app.js#L11176) — cakupan global / event handler
    `showGlobalLoader('Menyinkronkan data terkini dari Google Sheets...');`
- **Memanggil Fungsi Internal:** [`hideGlobalLoader()`](#hidegloballoader)

<a id="hidegloballoader"></a>
#### `hideGlobalLoader()`

- **Definisi:** [`app.js:297`](app.js#L297)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:293`](app.js#L293) — di dalam fungsi `showGlobalLoader()`
    `hideGlobalLoader();`
  - [`app.js:1106`](app.js#L1106) — di dalam fungsi `bypassLoaderWithCache()`
    `hideGlobalLoader();`
  - [`app.js:11210`](app.js#L11210) — cakupan global / event handler
    `hideGlobalLoader();`
  - [`app.js:11221`](app.js#L11221) — cakupan global / event handler
    `hideGlobalLoader();`

<a id="bypassloaderwithcache"></a>
#### `bypassLoaderWithCache()`

- **Definisi:** [`app.js:1098`](app.js#L1098)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:24`](index.html#L24) — Event `onclick`
    `<button id="btnBypassLoader" type="button" class="btn btn-outline" style="margin-top: 1.25rem; font-`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`updateCounts()`](#updatecounts), [`hideGlobalLoader()`](#hidegloballoader), [`showToast()`](#showtoast)

<a id="saveformdraft"></a>
#### `saveFormDraft(formType)`

- **Definisi:** [`app.js:1121`](app.js#L1121)
- **Deskripsi:** AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1277`](app.js#L1277) — di dalam fungsi `handleFormDraftChange()`
    `saveFormDraft();`

<a id="restoreformdraft"></a>
#### `restoreFormDraft(formType)`

- **Definisi:** [`app.js:1177`](app.js#L1177)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11185`](app.js#L11185) — cakupan global / event handler
    `restoreFormDraft('MLBB');`
  - [`app.js:11186`](app.js#L11186) — cakupan global / event handler
    `restoreFormDraft('MCGG');`
- **Memanggil Fungsi Internal:** [`toggleOfficial2Form()`](#toggleofficial2form)

<a id="clearformdraft"></a>
#### `clearFormDraft(formType)`

- **Definisi:** [`app.js:1267`](app.js#L1267)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3660`](app.js#L3660) — di dalam fungsi `handleRegister()`
    `clearFormDraft(category);`

<a id="handleformdraftchange"></a>
#### `handleFormDraftChange()`

- **Definisi:** [`app.js:1274`](app.js#L1274)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:2267`](app.js#L2267) — di dalam fungsi `handleLogoPreview()`
    `handleFormDraftChange();`
  - [`app.js:2285`](app.js#L2285) — di dalam fungsi `handleSingleIdCardPreview()`
    `handleFormDraftChange();`
  - [`app.js:2305`](app.js#L2305) — di dalam fungsi `handlePlayerIdCardPreview()`
    `handleFormDraftChange();`
- **Memanggil Fungsi Internal:** [`saveFormDraft()`](#saveformdraft)

<a id="getitemkey"></a>
#### `getItemKey(item)`

- **Definisi:** [`app.js:1471`](app.js#L1471)
- **Deskripsi:** Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1485`](app.js#L1485) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `localMap[getItemKey(localItem)] = localItem;`
  - [`app.js:1492`](app.js#L1492) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const itemKey = getItemKey(sheetItem);`

<a id="cleanorphanedtournamentdata"></a>
#### `cleanOrphanedTournamentData()`

- **Definisi:** [`app.js:1724`](app.js#L1724)
- **Deskripsi:** Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup, dan lobi MCGG
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1690`](app.js#L1690) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `cleanOrphanedTournamentData();`
  - [`app.js:3732`](app.js#L3732) — di dalam fungsi `deleteParticipant()`
    `cleanOrphanedTournamentData();`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff)

<a id="savestate"></a>
#### `saveState()`

- **Definisi:** [`app.js:2076`](app.js#L2076)
- **Deskripsi:** Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi MCGG) ke localStorage.
- **Titik Pemanggilan (45 lokasi):**
  - [`app.js:253`](app.js#L253) — di dalam fungsi `toggleInvitedTeam()`
    `saveState();`
  - [`app.js:1084`](app.js#L1084) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveState();`
  - [`app.js:1691`](app.js#L1691) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveState();`
  - [`app.js:1850`](app.js#L1850) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `saveState();`
  - [`app.js:1995`](app.js#L1995) — cakupan global / event handler
    `saveState();`
  - [`app.js:2038`](app.js#L2038) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `saveState();`
  - [`app.js:2697`](app.js#L2697) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveState();`
  - [`app.js:3637`](app.js#L3637) — di dalam fungsi `handleRegister()`
    `saveState();`
  - [`app.js:3680`](app.js#L3680) — di dalam fungsi `setParticipantStatus()`
    `saveState();`
  - [`app.js:3733`](app.js#L3733) — di dalam fungsi `deleteParticipant()`
    `saveState();`
  - [`app.js:3958`](app.js#L3958) — di dalam fungsi `saveParticipantEdit()`
    `saveState();`
  - [`app.js:4392`](app.js#L4392) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveState();`
  - [`app.js:4422`](app.js#L4422) — di dalam fungsi `proceedToMLBBStage2()`
    `saveState();`
  - [`app.js:4523`](app.js#L4523) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveState();`
  - [`app.js:4569`](app.js#L4569) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveState();`
  - [`app.js:4836`](app.js#L4836) — di dalam fungsi `resetPlayoffMatchScore()`
    `saveState();`
  - [`app.js:4949`](app.js#L4949) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveState();`
  - [`app.js:5279`](app.js#L5279) — di dalam fungsi `resetMLBBToStage1()`
    `saveState();`
  - [`app.js:5341`](app.js#L5341) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `saveState();`
  - [`app.js:5507`](app.js#L5507) — di dalam fungsi `saveTournamentStateOnly()`
    `saveState();`
  - [`app.js:5950`](app.js#L5950) — di dalam fungsi `generateGroupStage()`
    `saveState();`
  - [`app.js:5965`](app.js#L5965) — di dalam fungsi `updateGroupRecord()`
    `saveState();`
  - [`app.js:6775`](app.js#L6775) — di dalam fungsi `pickGroupPlayoffWinner()`
    `saveState();`
  - [`app.js:7673`](app.js#L7673) — di dalam fungsi `setGroupMatchScore()`
    `saveState();`
  - [`app.js:8262`](app.js#L8262) — di dalam fungsi `saveSelectedMvp()`
    `saveState();`
  - [`app.js:8315`](app.js#L8315) — di dalam fungsi `deleteCurrentMvp()`
    `saveState();`
  - [`app.js:8411`](app.js#L8411) — di dalam fungsi `setGroupMatchMVP()`
    `saveState();`
  - [`app.js:8503`](app.js#L8503) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `saveState();`
  - [`app.js:8520`](app.js#L8520) — di dalam fungsi `toggleMatchPlayerVerify()`
    `saveState();`
  - [`app.js:8543`](app.js#L8543) — di dalam fungsi `verifyAllMatchPlayers()`
    `saveState();`
  - [`app.js:8719`](app.js#L8719) — di dalam fungsi `resetGroupMatchScore()`
    `saveState();`
  - [`app.js:9527`](app.js#L9527) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:9586`](app.js#L9586) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:9848`](app.js#L9848) — di dalam fungsi `updateMCGGRank()`
    `saveState();`
  - [`app.js:9883`](app.js#L9883) — di dalam fungsi `updateMCGGCommander()`
    `saveState();`
  - [`app.js:9919`](app.js#L9919) — di dalam fungsi `updateMCGGPenalty()`
    `saveState();`
  - [`app.js:10244`](app.js#L10244) — di dalam fungsi `drawMatchPool()`
    `saveState();`
  - [`app.js:10295`](app.js#L10295) — di dalam fungsi `assignMatchPoolToPlayers()`
    `saveState();`
  - [`app.js:10315`](app.js#L10315) — di dalam fungsi `toggleLockMatchDraw()`
    `saveState();`
  - [`app.js:10341`](app.js#L10341) — di dalam fungsi `nextMatchDraw()`
    `saveState();`
  - [`app.js:10374`](app.js#L10374) — di dalam fungsi `resetLobbyDraw()`
    `saveState();`
  - [`app.js:11152`](app.js#L11152) — di dalam fungsi `loadSampleData()`
    `saveState();`
  - [`app.js:11165`](app.js#L11165) — di dalam fungsi `clearAllData()`
    `saveState();`
  - [`app.js:11345`](app.js#L11345) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `saveState();`
  - [`app.js:12735`](app.js#L12735) — di dalam fungsi `shuffleMCGG32Besar()`
    `saveState();`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`updateAuthUI()`](#updateauthui), [`updateCounts()`](#updatecounts)

<a id="updatecounts"></a>
#### `updateCounts()`

- **Definisi:** [`app.js:2089`](app.js#L2089)
- **Deskripsi:** Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status verifikasi di header UI.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:1105`](app.js#L1105) — di dalam fungsi `bypassLoaderWithCache()`
    `updateCounts();`
  - [`app.js:1695`](app.js#L1695) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCounts();`
  - [`app.js:2086`](app.js#L2086) — di dalam fungsi `saveState()`
    `updateCounts();`
  - [`app.js:3684`](app.js#L3684) — di dalam fungsi `setParticipantStatus()`
    `updateCounts();`
  - [`app.js:3737`](app.js#L3737) — di dalam fungsi `deleteParticipant()`
    `updateCounts();`
  - [`app.js:11170`](app.js#L11170) — di dalam fungsi `clearAllData()`
    `updateCounts();`
  - [`app.js:11192`](app.js#L11192) — cakupan global / event handler
    `updateCounts();`

<a id="toggleofficial2form"></a>
#### `toggleOfficial2Form()`

- **Definisi:** [`app.js:2314`](app.js#L2314)
- **Deskripsi:** Toggle Official 2 Form
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:1219`](index.html#L1219) — Event `onchange`
    `<input type="checkbox" id="has_official_2" onchange="toggleOfficial2Form()">`
  - [`app.js:1210`](app.js#L1210) — di dalam fungsi `restoreFormDraft()`
    `toggleOfficial2Form();`
  - [`app.js:3663`](app.js#L3663) — di dalam fungsi `handleRegister()`
    `toggleOfficial2Form();`
  - [`app.js:11180`](app.js#L11180) — cakupan global / event handler
    `toggleOfficial2Form();`

<a id="renderplayersforminputs"></a>
#### `renderPlayersFormInputs()`

- **Definisi:** [`app.js:2321`](app.js#L2321)
- **Deskripsi:** Generate the 8 players form fields dynamically (Included In-Game Nickname and Per-Player ID Card Uploader)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3661`](app.js#L3661) — di dalam fungsi `handleRegister()`
    `renderPlayersFormInputs();`
  - [`app.js:11178`](app.js#L11178) — cakupan global / event handler
    `renderPlayersFormInputs();`
- **Memanggil Fungsi Internal:** [`handlePlayerIdCardPreview()`](#handleplayeridcardpreview)

<a id="togglecategoryform"></a>
#### `toggleCategoryForm()`

- **Definisi:** [`app.js:2380`](app.js#L2380)
- **Deskripsi:** Switch form between MLBB and MCGG cleanly
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1111`](index.html#L1111) — Event `onchange`
    `<select id="gameCategory" required onchange="toggleCategoryForm()" style="font-size: 1rem; font-weig`
  - [`app.js:3662`](app.js#L3662) — di dalam fungsi `handleRegister()`
    `toggleCategoryForm();`
  - [`app.js:11179`](app.js#L11179) — cakupan global / event handler
    `toggleCategoryForm();`

<a id="renderregistrationui"></a>
#### `renderRegistrationUI()`

- **Definisi:** [`app.js:2557`](app.js#L2557)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1678`](app.js#L1678) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRegistrationUI();`
  - [`app.js:2653`](app.js#L2653) — di dalam fungsi `toggleRegistrationStatus()`
    `renderRegistrationUI();`
  - [`app.js:2892`](app.js#L2892) — di dalam fungsi `updateAuthUI()`
    `renderRegistrationUI();`
  - [`functional_tests.js:826`](functional_tests.js#L826) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderRegistrationUI()'), 'Harus memiliki renderRegistrationUI()')`
- **Memanggil Fungsi Internal:** [`switchTab()`](#switchtab), [`updateHubDynamicStats()`](#updatehubdynamicstats)

<a id="updatehubdynamicstats"></a>
#### `updateHubDynamicStats()`

- **Definisi:** [`app.js:2963`](app.js#L2963)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:2636`](app.js#L2636) — di dalam fungsi `renderRegistrationUI()`
    `updateHubDynamicStats();`
  - [`app.js:2954`](app.js#L2954) — di dalam fungsi `switchTab()`
    `updateHubDynamicStats();`
  - [`app.js:11193`](app.js#L11193) — cakupan global / event handler
    `if (typeof updateHubDynamicStats === 'function') updateHubDynamicStats();`

<a id="handlehashnavigation"></a>
#### `handleHashNavigation()`

- **Definisi:** [`app.js:2978`](app.js#L2978)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11194`](app.js#L11194) — cakupan global / event handler
    `if (typeof handleHashNavigation === 'function') handleHashNavigation();`
- **Memanggil Fungsi Internal:** [`switchTab()`](#switchtab)

<a id="updateregistrationdatalists"></a>
#### `updateRegistrationDatalists()`

- **Definisi:** [`app.js:3063`](app.js#L3063)
- **Deskripsi:** Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit form dimatikan)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3664`](app.js#L3664) — di dalam fungsi `handleRegister()`
    `updateRegistrationDatalists();`
  - [`app.js:4083`](app.js#L4083) — di dalam fungsi `renderParticipants()`
    `updateRegistrationDatalists();`
  - [`functional_tests.js:171`](functional_tests.js#L171) — pada skenario pengujian
    `assert(appCode.includes('function updateRegistrationDatalists('), 'Harus ada fungsi updateRegistrati`

<a id="handleteamnameinput"></a>
#### `handleTeamNameInput(val)`

- **Definisi:** [`app.js:3077`](app.js#L3077)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1126`](index.html#L1126) — Event `oninput`
    `<input type="text" id="teamName" oninput="handleTeamNameInput(this.value)" placeholder="Masukkan nam`
  - [`functional_tests.js:172`](functional_tests.js#L172) — pada skenario pengujian
    `assert(appCode.includes('function handleTeamNameInput('), 'Harus ada handler handleTeamNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="shuffleandgeneratetournament"></a>
#### `shuffleAndGenerateTournament()`

- **Definisi:** [`app.js:4294`](app.js#L4294)
- **Deskripsi:** Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum dikunci.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1503`](index.html#L1503) — Event `onclick`
    `<button id="btnShuffleMLBB" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0.85rem;`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`refreshAndScrollToGroupOrBracket()`](#refreshandscrolltogrouporbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="findteamgroupandrank"></a>
#### `findTeamGroupAndRank(teamName)`

- **Definisi:** [`app.js:4916`](app.js#L4916)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4976`](app.js#L4976) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(mUB.teamA);`
  - [`app.js:4977`](app.js#L4977) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(mUB.teamB);`
  - [`app.js:4978`](app.js#L4978) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoC = findTeamGroupAndRank(mLB.teamB);`
  - [`app.js:5043`](app.js#L5043) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(m.teamA);`
  - [`app.js:5044`](app.js#L5044) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(m.teamB);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`isSameTeamName()`](#issameteamname)

<a id="opentestdrawinnewwindow"></a>
#### `openTestDrawInNewWindow()`

- **Definisi:** [`app.js:5141`](app.js#L5141)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:2212`](index.html#L2212) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; co`
  - [`app.js:5086`](app.js#L5086) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(`
  - [`app.js:5223`](app.js#L5223) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem; border-color:var(-`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast)

<a id="pickwinner"></a>
#### `pickWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:5633`](app.js#L5633)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5699`](app.js#L5699) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:5703`](app.js#L5703) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket)

<a id="getprefix"></a>
#### `getPrefix(team)`

- **Definisi:** [`app.js:5740`](app.js#L5740)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:5778`](app.js#L5778) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:5786`](app.js#L5786) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:5795`](app.js#L5795) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:5811`](app.js#L5811) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountA = teamPrefix ? groups[a].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:5812`](app.js#L5812) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountB = teamPrefix ? groups[b].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:5845`](app.js#L5845) — di dalam fungsi `allocateMLBBGroups()`
    `const p = getPrefix(t);`
  - [`app.js:5852`](app.js#L5852) — di dalam fungsi `allocateMLBBGroups()`
    `const pA = getPrefix(a), pB = getPrefix(b);`
  - [`app.js:5860`](app.js#L5860) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:5863`](app.js#L5863) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPrefixConflict = (g) => teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`

<a id="getdept"></a>
#### `getDept(team)`

- **Definisi:** [`app.js:5748`](app.js#L5748)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:5779`](app.js#L5779) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:5787`](app.js#L5787) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDep = teamDept && groups[g].some(t => getDept(t) === teamDept);`
  - [`app.js:5846`](app.js#L5846) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getDept(t);`
  - [`app.js:5853`](app.js#L5853) — di dalam fungsi `allocateMLBBGroups()`
    `const dA = getDept(a), dB = getDept(b);`
  - [`app.js:5861`](app.js#L5861) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:5864`](app.js#L5864) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDeptConflict = (g) => teamDept && groups[g].some(t => getDept(t) === teamDept);`

<a id="isinvited"></a>
#### `isInvited(team)`

- **Definisi:** [`app.js:5759`](app.js#L5759)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5764`](app.js#L5764) — di dalam fungsi `allocateMLBBGroups()`
    `let invited = teamsList.filter(t => isInvited(t));`
  - [`app.js:5765`](app.js#L5765) — di dalam fungsi `allocateMLBBGroups()`
    `let regular = teamsList.filter(t => !isInvited(t));`
  - [`app.js:5785`](app.js#L5785) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:5794`](app.js#L5794) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:5803`](app.js#L5803) — di dalam fungsi `allocateMLBBGroups()`
    `if (!groups[g].some(t => isInvited(t))) { targetGroup = g; break; }`

<a id="getoverbasecount"></a>
#### `getOverBaseCount()`

- **Definisi:** [`app.js:5827`](app.js#L5827)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5833`](app.js#L5833) — di dalam fungsi `allocateMLBBGroups()`
    `return getOverBaseCount() < remainder;`

<a id="canaccept"></a>
#### `canAccept(g)`

- **Definisi:** [`app.js:5829`](app.js#L5829)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="hasprefixconflict"></a>
#### `hasPrefixConflict(g)`

- **Definisi:** [`app.js:5863`](app.js#L5863)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5882`](app.js#L5882) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`
  - [`app.js:5891`](app.js#L5891) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g)) {`

<a id="hasdeptconflict"></a>
#### `hasDeptConflict(g)`

- **Definisi:** [`app.js:5864`](app.js#L5864)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5882`](app.js#L5882) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`

<a id="updategrouprecord"></a>
#### `updateGroupRecord(gName, idx, field, val)`

- **Definisi:** [`app.js:5957`](app.js#L5957)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:6938`](app.js#L6938) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" o`
  - [`app.js:6942`](app.js#L6942) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" `
  - [`app.js:12087`](app.js#L12087) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:12090`](app.js#L12090) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="getsortedgroupteams"></a>
#### `getSortedGroupTeams(gName)`

- **Definisi:** [`app.js:6072`](app.js#L6072)
- **Deskripsi:** Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkulasi MVP terkini
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:4357`](app.js#L4357) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4919`](app.js#L4919) — di dalam fungsi `findTeamGroupAndRank()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:5061`](app.js#L5061) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:5428`](app.js#L5428) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const sorted = typeof getSortedGroupTeams === 'function' ? getSortedGroupTeams(gName) : groupTeams;`
  - [`app.js:6370`](app.js#L6370) — di dalam fungsi `initGroupPlayoff()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:6496`](app.js#L6496) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:6497`](app.js#L6497) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:6498`](app.js#L6498) — di dalam fungsi `initGroupPlayoff()`
    `const grpC = getSortedGroupTeams('Grup C');`
  - [`app.js:6499`](app.js#L6499) — di dalam fungsi `initGroupPlayoff()`
    `const grpD = getSortedGroupTeams('Grup D');`
  - [`app.js:6575`](app.js#L6575) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:6576`](app.js#L6576) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:6909`](app.js#L6909) — di dalam fungsi `renderGroupStageUI()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:12029`](app.js#L12029) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const sorted = getSortedGroupTeams(gName);`
- **Memanggil Fungsi Internal:** [`compareMLBBTeams()`](#comparemlbbteams)

<a id="shufflearray"></a>
#### `shuffleArray(arr)`

- **Definisi:** [`app.js:6100`](app.js#L6100)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:6113`](app.js#L6113) — di dalam fungsi `findValidBracketPermutation()`
    `const shuffledRemaining = shuffleArray(remainingItems);`
  - [`app.js:6162`](app.js#L6162) — di dalam fungsi `solveRemainingBracketSlots()`
    `const shuffledItems = shuffleArray(remainingItems);`
  - [`app.js:6206`](app.js#L6206) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const otherInvited = shuffleArray(allInvited.filter(x => x !== atmoItem && x !== alphaItem && x !== `
  - [`app.js:6258`](app.js#L6258) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const wingSlots = shuffleArray([w * 2, w * 2 + 1]);`
  - [`app.js:6319`](app.js#L6319) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const shuffledInv = shuffleArray(j3Invited);`
  - [`app.js:6320`](app.js#L6320) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const targetWings = shuffleArray([0, 1, 2, 3]);`
  - [`app.js:6397`](app.js#L6397) — di dalam fungsi `initGroupPlayoff()`
    `branchJ1 = shuffleArray([...j1List]);`
  - [`app.js:6528`](app.js#L6528) — di dalam fungsi `initGroupPlayoff()`
    `const candJ1 = shuffleArray([...j1List]);`
  - [`app.js:6546`](app.js#L6546) — di dalam fungsi `initGroupPlayoff()`
    `bJ1 = shuffleArray([...j1List]);`

<a id="backtrack"></a>
#### `backtrack(slotIdx, remainingItems, currentArr)`

- **Definisi:** [`app.js:6111`](app.js#L6111)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:6119`](app.js#L6119) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);`
  - [`app.js:6126`](app.js#L6126) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(0, candidates, []);`
  - [`app.js:6163`](app.js#L6163) — di dalam fungsi `solveRemainingBracketSlots()`
    `function backtrack(idx, arr) {`
  - [`app.js:6172`](app.js#L6172) — di dalam fungsi `solveRemainingBracketSlots()`
    `const res = backtrack(idx + 1, nextArr);`
  - [`app.js:6177`](app.js#L6177) — di dalam fungsi `solveRemainingBracketSlots()`
    `return backtrack(0, [...currentArray]);`

<a id="isteamatmo"></a>
#### `isTeamAtmo(teamName)`

- **Definisi:** [`app.js:6133`](app.js#L6133)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6203`](app.js#L6203) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const atmoItem = allInvited.find(x => isTeamAtmo(x.team));`
  - [`app.js:6532`](app.js#L6532) — di dalam fungsi `initGroupPlayoff()`
    `const atmoIdx = candJ1.findIndex(x => isTeamAtmo(x.team)) !== -1 ? candJ1.findIndex(x => isTeamAtmo(`

<a id="isteamalpha"></a>
#### `isTeamAlpha(teamName)`

- **Definisi:** [`app.js:6138`](app.js#L6138)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6204`](app.js#L6204) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const alphaItem = allInvited.find(x => isTeamAlpha(x.team) && x !== atmoItem);`
  - [`app.js:6533`](app.js#L6533) — di dalam fungsi `initGroupPlayoff()`
    `const alphaIdx = candJ1.findIndex(x => isTeamAlpha(x.team)) !== -1 ? candJ1.findIndex(x => isTeamAlp`

<a id="isteamappa"></a>
#### `isTeamAppa(teamName)`

- **Definisi:** [`app.js:6144`](app.js#L6144)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6205`](app.js#L6205) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const appaItem = allInvited.find(x => isTeamAppa(x.team) && x !== atmoItem && x !== alphaItem);`

<a id="backtrack"></a>
#### `backtrack(idx, arr)`

- **Definisi:** [`app.js:6163`](app.js#L6163)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:6111`](app.js#L6111) — di dalam fungsi `findValidBracketPermutation()`
    `function backtrack(slotIdx, remainingItems, currentArr) {`
  - [`app.js:6119`](app.js#L6119) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);`
  - [`app.js:6126`](app.js#L6126) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(0, candidates, []);`
  - [`app.js:6172`](app.js#L6172) — di dalam fungsi `solveRemainingBracketSlots()`
    `const res = backtrack(idx + 1, nextArr);`
  - [`app.js:6177`](app.js#L6177) — di dalam fungsi `solveRemainingBracketSlots()`
    `return backtrack(0, [...currentArray]);`

<a id="isinv"></a>
#### `isInv(t)`

- **Definisi:** [`app.js:6190`](app.js#L6190)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:6192`](app.js#L6192) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Invited = j1List.filter(item => isInv(item.team));`
  - [`app.js:6193`](app.js#L6193) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Regular = j1List.filter(item => !isInv(item.team));`
  - [`app.js:6194`](app.js#L6194) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Invited = j2List.filter(item => isInv(item.team));`
  - [`app.js:6195`](app.js#L6195) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Regular = j2List.filter(item => !isInv(item.team));`
  - [`app.js:6270`](app.js#L6270) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `(!branchJ1[s] || (!isInv(branchJ1[s].team) && branchJ1[s].group !== item.group))`
  - [`app.js:6311`](app.js#L6311) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Invited = j3List.filter(item => isInv(item.team));`
  - [`app.js:6312`](app.js#L6312) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Regular = j3List.filter(item => !isInv(item.team));`

<a id="isinv"></a>
#### `isInv(t)`

- **Definisi:** [`app.js:6310`](app.js#L6310)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:6192`](app.js#L6192) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Invited = j1List.filter(item => isInv(item.team));`
  - [`app.js:6193`](app.js#L6193) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Regular = j1List.filter(item => !isInv(item.team));`
  - [`app.js:6194`](app.js#L6194) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Invited = j2List.filter(item => isInv(item.team));`
  - [`app.js:6195`](app.js#L6195) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Regular = j2List.filter(item => !isInv(item.team));`
  - [`app.js:6270`](app.js#L6270) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `(!branchJ1[s] || (!isInv(branchJ1[s].team) && branchJ1[s].group !== item.group))`
  - [`app.js:6311`](app.js#L6311) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Invited = j3List.filter(item => isInv(item.team));`
  - [`app.js:6312`](app.js#L6312) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Regular = j3List.filter(item => !isInv(item.team));`

<a id="resolveteamnameingroup"></a>
#### `resolveTeamNameInGroup(rawName, groupTeams)`

- **Definisi:** [`app.js:7142`](app.js#L7142)
- **Deskripsi:** Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisan alias/tanda kurung di poster)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7256`](app.js#L7256) — di dalam fungsi `getGroupFixtures()`
    `const realTeamA = resolveTeamNameInGroup(item.teamA, teams);`
  - [`app.js:7257`](app.js#L7257) — di dalam fungsi `getGroupFixtures()`
    `const realTeamB = resolveTeamNameInGroup(item.teamB, teams);`

<a id="issameteamname"></a>
#### `isSameTeamName(name1, name2)`

- **Definisi:** [`app.js:7158`](app.js#L7158)
- **Deskripsi:** Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, spasi, tanda kurung, dan alias
- **Titik Pemanggilan (38 lokasi):**
  - [`app.js:4601`](app.js#L4601) — di dalam fungsi `openPlayoffScoreModal()`
    `if (isSameTeamName(preselectWinner, match.teamA)) {`
  - [`app.js:4604`](app.js#L4604) — di dalam fungsi `openPlayoffScoreModal()`
    `} else if (isSameTeamName(preselectWinner, match.teamB)) {`
  - [`app.js:4920`](app.js#L4920) — di dalam fungsi `findTeamGroupAndRank()`
    `const idx = sorted.findIndex(t => isSameTeamName(t.name, teamName));`
  - [`app.js:5434`](app.js#L5434) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const teamObj = groupTeams.find(t => isSameTeamName(t.name, tName)) || { name: tName };`
  - [`app.js:5435`](app.js#L5435) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const rankIdx = sorted.findIndex(t => isSameTeamName(t.name, tName));`
  - [`app.js:5983`](app.js#L5983) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if ((isSameTeamName(m.teamA, teamA) && isSameTeamName(m.teamB, teamB)) ||`
  - [`app.js:5984`](app.js#L5984) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `(isSameTeamName(m.teamA, teamB) && isSameTeamName(m.teamB, teamA))) {`
  - [`app.js:6010`](app.js#L6010) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamA) || isSameTeamName(cleanWinner, teamA)) {`
  - [`app.js:6013`](app.js#L6013) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamB) || isSameTeamName(cleanWinner, teamB)) {`
  - [`app.js:6020`](app.js#L6020) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const isAFirst = isSameTeamName(match.teamA, teamA);`
  - [`app.js:7178`](app.js#L7178) — di dalam fungsi `findGroupNameForTeam()`
    `if (Array.isArray(gsd[g]) && gsd[g].some(t => isSameTeamName(t.name, teamName))) {`
  - [`app.js:7355`](app.js#L7355) — di dalam fungsi `getGroupFixtures()`
    `if ((isSameTeamName(item.teamA, p.teamA) && isSameTeamName(item.teamB, p.teamB)) ||`
  - [`app.js:7356`](app.js#L7356) — di dalam fungsi `getGroupFixtures()`
    `(isSameTeamName(item.teamA, p.teamB) && isSameTeamName(item.teamB, p.teamA))) {`
  - [`app.js:7374`](app.js#L7374) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.teamA, p.teamA)) {`
  - [`app.js:7377`](app.js#L7377) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.teamA, p.teamB)) {`
  - [`app.js:7390`](app.js#L7390) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.winner, p.teamA) && Number(scoreA) < Number(scoreB)) {`
  - [`app.js:7393`](app.js#L7393) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.teamA, p.teamA)) {`
  - [`app.js:7399`](app.js#L7399) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.winner, p.teamB) && Number(scoreB) < Number(scoreA)) {`
  - [`app.js:7402`](app.js#L7402) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.teamA, p.teamB)) {`
  - [`app.js:7486`](app.js#L7486) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(m.teamA, canonTeamB) && isSameTeamName(m.teamB, canonTeamA)) {`
  - [`app.js:7498`](app.js#L7498) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(normWinner, canonTeamA) && sA < sB) {`
  - [`app.js:7500`](app.js#L7500) — di dalam fungsi `deduplicateGroupMatchResults()`
    `} else if (isSameTeamName(normWinner, canonTeamB) && sB < sA) {`
  - [`app.js:7532`](app.js#L7532) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(mergedWinner, canonTeamA) && sA < sB) {`
  - [`app.js:7534`](app.js#L7534) — di dalam fungsi `deduplicateGroupMatchResults()`
    `} else if (isSameTeamName(mergedWinner, canonTeamB) && sB < sA) {`
  - [`app.js:7622`](app.js#L7622) — di dalam fungsi `setGroupMatchScore()`
    `if (isSameTeamName(winner, teamA) && Number(scoreA) < Number(scoreB)) {`
  - [`app.js:7624`](app.js#L7624) — di dalam fungsi `setGroupMatchScore()`
    `} else if (isSameTeamName(winner, teamB) && Number(scoreB) < Number(scoreA)) {`
  - [`app.js:7640`](app.js#L7640) — di dalam fungsi `setGroupMatchScore()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:7641`](app.js#L7641) — di dalam fungsi `setGroupMatchScore()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:7782`](app.js#L7782) — di dalam fungsi `openMLBBGroupMvpModal()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:7783`](app.js#L7783) — di dalam fungsi `openMLBBGroupMvpModal()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:8759`](app.js#L8759) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamA = isSameTeamName(m.teamA, t.name);`
  - [`app.js:8760`](app.js#L8760) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamB = isSameTeamName(m.teamB, t.name);`
  - [`app.js:8787`](app.js#L8787) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(m.winner, t.name) ||`
  - [`app.js:8788`](app.js#L8788) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(cleanWinner, t.name)`
  - [`app.js:9082`](app.js#L9082) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:9083`](app.js#L9083) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`
  - [`app.js:12155`](app.js#L12155) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:12156`](app.js#L12156) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`

<a id="findgroupnameforteam"></a>
#### `findGroupNameForTeam(teamName)`

- **Definisi:** [`app.js:7174`](app.js#L7174)
- **Deskripsi:** Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:7770`](app.js#L7770) — di dalam fungsi `openMLBBGroupMvpModal()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:8355`](app.js#L8355) — di dalam fungsi `setGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:8448`](app.js#L8448) — di dalam fungsi `promptGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:8464`](app.js#L8464) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `gName = (typeof findGroupNameForTeam === 'function' && (findGroupNameForTeam(teamA) || findGroupName`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname)

<a id="getcanonicalgroupmatchid"></a>
#### `getCanonicalGroupMatchId(gName, teamA, teamB)`

- **Definisi:** [`app.js:7439`](app.js#L7439)
- **Deskripsi:** Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tidak terpengaruh urutan teamA vs teamB)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5975`](app.js#L5975) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const canonId = getCanonicalGroupMatchId(gName || '', teamA, teamB);`
  - [`app.js:7345`](app.js#L7345) — di dalam fungsi `getGroupFixtures()`
    `const canonId = getCanonicalGroupMatchId(gName, p.teamA, p.teamB);`
  - [`app.js:7631`](app.js#L7631) — di dalam fungsi `setGroupMatchScore()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:7772`](app.js#L7772) — di dalam fungsi `openMLBBGroupMvpModal()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:8358`](app.js#L8358) — di dalam fungsi `setGroupMatchMVP()`
    `const canonId = (teamA && teamB) ? getCanonicalGroupMatchId(gName, teamA, teamB) : matchId;`
  - [`app.js:8466`](app.js#L8466) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `const canonId = typeof getCanonicalGroupMatchId === 'function' ? getCanonicalGroupMatchId(gName, tea`
  - [`app.js:8743`](app.js#L8743) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const pairKey = getCanonicalGroupMatchId(gName, m.teamA, m.teamB);`

<a id="isgroupmatchescompleted"></a>
#### `isGroupMatchesCompleted(gName)`

- **Definisi:** [`app.js:7448`](app.js#L7448)
- **Deskripsi:** Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah selesai diinput
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5429`](app.js#L5429) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const isGroupAllDone = typeof isGroupMatchesCompleted === 'function' ? isGroupMatchesCompleted(gName`
  - [`app.js:6910`](app.js#L6910) — di dalam fungsi `renderGroupStageUI()`
    `const isGroupAllDone = isGroupMatchesCompleted(gName);`
  - [`app.js:12031`](app.js#L12031) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isGroupAllDone = isGroupMatchesCompleted(gName);`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="deduplicategroupmatchresults"></a>
#### `deduplicateGroupMatchResults()`

- **Definisi:** [`app.js:7466`](app.js#L7466)
- **Deskripsi:** Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri terbalik / ganda
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1631`](app.js#L1631) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
  - [`app.js:8725`](app.js#L8725) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `deduplicateGroupMatchResults();`
  - [`app.js:11204`](app.js#L11204) — cakupan global / event handler
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname)

<a id="getgrouprestingteams"></a>
#### `getGroupRestingTeams(gName, day)`

- **Definisi:** [`app.js:7558`](app.js#L7558)
- **Deskripsi:** Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di grup tertentu
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9046`](app.js#L9046) — di dalam fungsi `renderGroupFixturesUI()`
    `const resting = getGroupRestingTeams(gName, parseInt(mlbbActiveDayFilter, 10));`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="setgroupmatchscore"></a>
#### `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB, explicitWinner = null)`

- **Definisi:** [`app.js:7569`](app.js#L7569)
- **Deskripsi:** Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara otomatis.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:7693`](app.js#L7693) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 2, '${teamB} (Menang WO)');`
  - [`app.js:7695`](app.js#L7695) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 2, 0, '${teamA} (Menang WO)');`
  - [`app.js:7697`](app.js#L7697) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Keduanya WO (0-0)');`
  - [`app.js:7709`](app.js#L7709) — di dalam fungsi `setGroupMatchSpecialResult()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Imbang (0-0)');`
  - [`app.js:7720`](app.js#L7720) — di dalam fungsi `saveGroupFixtureScore()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB);`
  - [`app.js:12181`](app.js#L12181) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`functional_tests.js:676`](functional_tests.js#L676) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchScore('), 'app.js harus memiliki setter skor setGroup`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="promptgroupmatchwo"></a>
#### `promptGroupMatchWO(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:7679`](app.js#L7679)
- **Deskripsi:** Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupun kedua tim
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7707`](app.js#L7707) — di dalam fungsi `setGroupMatchSpecialResult()`
    `promptGroupMatchWO(matchId, gName, teamA, teamB);`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="setgroupmatchspecialresult"></a>
#### `setGroupMatchSpecialResult(matchId, gName, teamA, teamB, resultType)`

- **Definisi:** [`app.js:7704`](app.js#L7704)
- **Deskripsi:** Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imbang)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:9127`](app.js#L9127) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#f871`
  - [`app.js:9128`](app.js#L9128) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#fbbf`
  - [`app.js:12184`](app.js#L12184) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:12185`](app.js#L12185) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
- **Memanggil Fungsi Internal:** [`promptGroupMatchWO()`](#promptgroupmatchwo), [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="selectmvpplayer"></a>
#### `selectMvpPlayer(nickname, realName, teamName)`

- **Definisi:** [`app.js:8135`](app.js#L8135)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8108`](app.js#L8108) — di dalam fungsi `renderMvpRosterList()`
    `<div class="mvp-roster-chip ${isSelected ? 'selected' : ''}" onclick="selectMvpPlayer('${safeIgn}', `
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="rendermvpquickherochips"></a>
#### `renderMvpQuickHeroChips(activeHero)`

- **Definisi:** [`app.js:8167`](app.js#L8167)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7928`](app.js#L7928) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:8022`](app.js#L8022) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:8201`](app.js#L8201) — di dalam fungsi `selectMvpQuickHero()`
    `renderMvpQuickHeroChips(heroName);`
- **Memanggil Fungsi Internal:** [`selectMvpQuickHero()`](#selectmvpquickhero)

<a id="selectmvpquickhero"></a>
#### `selectMvpQuickHero(heroName)`

- **Definisi:** [`app.js:8187`](app.js#L8187)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8178`](app.js#L8178) — di dalam fungsi `renderMvpQuickHeroChips()`
    `<span class="mvp-hero-pill ${isActive ? 'active' : ''}" onclick="selectMvpQuickHero('${safeHero}')">`
- **Memanggil Fungsi Internal:** [`renderMvpQuickHeroChips()`](#rendermvpquickherochips)

<a id="saveselectedmvp"></a>
#### `saveSelectedMvp()`

- **Definisi:** [`app.js:8204`](app.js#L8204)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:2062`](index.html#L2062) — Event `onclick`
    `<button type="button" class="btn btn-primary" style="background: var(--yokke-gold); color: #0b1120; `
  - [`app.js:8301`](app.js#L8301) — di dalam fungsi `deleteCurrentMvp()`
    `saveSelectedMvp();`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp), [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal)

<a id="deletecurrentmvp"></a>
#### `deleteCurrentMvp()`

- **Definisi:** [`app.js:8277`](app.js#L8277)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:2055`](index.html#L2055) — Event `onclick`
    `<button type="button" id="btnDeleteMvp" class="btn btn-outline" style="color: var(--yokke-red); bord`
- **Memanggil Fungsi Internal:** [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal), [`saveSelectedMvp()`](#saveselectedmvp), [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp)

<a id="setgroupmatchmvp"></a>
#### `setGroupMatchMVP(matchId, mvpPlayer, mvpHero, mvpTeam, gameMvps = null)`

- **Definisi:** [`app.js:8330`](app.js#L8330)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8269`](app.js#L8269) — di dalam fungsi `saveSelectedMvp()`
    `setGroupMatchMVP(ctx.canonId, summaryPlayer, summaryHero, summaryTeam, validGames);`
  - [`app.js:8322`](app.js#L8322) — di dalam fungsi `deleteCurrentMvp()`
    `setGroupMatchMVP(ctx.canonId, null, null, null, []);`
  - [`functional_tests.js:790`](functional_tests.js#L790) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchMVP('), 'Harus memiliki setGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="promptgroupmatchmvp"></a>
#### `promptGroupMatchMVP(matchId, teamA, teamB, gName = '')`

- **Definisi:** [`app.js:8445`](app.js#L8445)
- **Deskripsi:** Delegasi fungsi promptGroupMatchMVP ke modal interaktif
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:791`](functional_tests.js#L791) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptGroupMatchMVP('), 'Harus memiliki promptGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="togglematchplayerverify"></a>
#### `toggleMatchPlayerVerify(playerKey)`

- **Definisi:** [`app.js:8509`](app.js#L8509)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8683`](app.js#L8683) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn ${isVerified ? 'btn-primary' : 'btn-outline'}" style="font-size:0.7`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="verifyallmatchplayers"></a>
#### `verifyAllMatchPlayers(teamName, shouldVerify = true)`

- **Definisi:** [`app.js:8527`](app.js#L8527)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8594`](app.js#L8594) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8597`](app.js#L8597) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="resetgroupmatchscore"></a>
#### `resetGroupMatchScore(matchId)`

- **Definisi:** [`app.js:8709`](app.js#L8709)
- **Deskripsi:** Mereset skor pertandingan grup MLBB ke status belum bertanding.
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="findprevious"></a>
#### `findPrevious(ply)`

- **Definisi:** [`app.js:9385`](app.js#L9385)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9398`](app.js#L9398) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`app.js:9397`](app.js#L9397)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9468`](app.js#L9468) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:9520`](app.js#L9520) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

<a id="findprevsemi"></a>
#### `findPrevSemi(ply)`

- **Definisi:** [`app.js:9700`](app.js#L9700)
- **Deskripsi:** Preserve poin semifinal jika sudah ada
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9709`](app.js#L9709) — di dalam fungsi `syncMCGGSemiFinal()`
    `const prev = findPrevSemi(p) || {};`

<a id="mapsemiplayer"></a>
#### `mapSemiPlayer(p)`

- **Definisi:** [`app.js:9708`](app.js#L9708)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevinarr"></a>
#### `findPrevInArr(p, arr)`

- **Definisi:** [`app.js:9737`](app.js#L9737)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9747`](app.js#L9747) — di dalam fungsi `syncMCGGGrandFinal()`
    `const prev = findPrevInArr(p, existingGF);`

<a id="mapgfplayer"></a>
#### `mapGFPlayer(p)`

- **Definisi:** [`app.js:9746`](app.js#L9746)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:9779`](app.js#L9779) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9780`](app.js#L9780) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9809`](app.js#L9809) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9810`](app.js#L9810) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`

<a id="drawmatchpool"></a>
#### `drawMatchPool(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:10176`](app.js#L10176)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 1: Acak 8 Pool Commander untuk Group/Lobby Ini ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9991`](app.js#L9991) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaft`
  - [`app.js:10347`](app.js#L10347) — di dalam fungsi `drawMatchCommanders()`
    `drawMatchPool(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="assignmatchpooltoplayers"></a>
#### `assignMatchPoolToPlayers(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:10251`](app.js#L10251)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 2: Pasangkan 8 Pool Commander ke Masing-Masing Pemain ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9998`](app.js#L9998) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasPool ? "alert('⚠️ Silakan acak 8 Pool Commander terlebih dahulu.')" : (isMatchLocked `
  - [`app.js:10348`](app.js#L10348) — di dalam fungsi `drawMatchCommanders()`
    `assignMatchPoolToPlayers(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="togglelockmatchdraw"></a>
#### `toggleLockMatchDraw(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:10302`](app.js#L10302)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 3: Kunci Match (Lock) / Buka Kunci ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10005`](app.js#L10005) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasAssigned ? "alert('⚠️ Pasangkan commander ke pemain terlebih dahulu sebelum mengunci.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="nextmatchdraw"></a>
#### `nextMatchDraw(targetLobbyKey, nextMatchNum)`

- **Definisi:** [`app.js:10329`](app.js#L10329)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 4: Lanjut ke Match Berikutnya (Match 2) ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10013`](app.js#L10013) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="nextMatchDraw('${lobbyKey}', 2)">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="showmatch3draftinfo"></a>
#### `showMatch3DraftInfo()`

- **Definisi:** [`app.js:10414`](app.js#L10414)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10018`](app.js#L10018) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="showMatch3DraftInfo()">`

<a id="buildroundcell"></a>
#### `buildRoundCell(player, roundKey, cmdKey, targetLobby)`

- **Definisi:** [`app.js:10852`](app.js#L10852)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10840`](app.js#L10840) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r1', 'c1', lobbyKey)}</td>`
  - [`app.js:10841`](app.js#L10841) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r2', 'c2', lobbyKey)}</td>`
  - [`app.js:10842`](app.js#L10842) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r3', 'c3', lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`updateMCGGCommander()`](#updatemcggcommander), [`updateMCGGRank()`](#updatemcggrank)

<a id="loadsampledata"></a>
#### `loadSampleData()`

- **Definisi:** [`app.js:10953`](app.js#L10953)
- **Deskripsi:** Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation - No Sensitive Info)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1351`](index.html#L1351) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="loadSamp`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="clearalldata"></a>
#### `clearAllData()`

- **Definisi:** [`app.js:11157`](app.js#L11157)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1352`](index.html#L1352) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="clearAll`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="rendersinglematchnodehtml"></a>
#### `renderSingleMatchNodeHtml(m, rIdx, mIdx, topPx, activeNodeKey, isLower = false)`

- **Definisi:** [`app.js:11383`](app.js#L11383)
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:11523`](app.js#L11523) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col0 += renderSingleMatchNodeHtml(groupPlayoffMatches[1]?.[4 + i], 1, 4 + i, c8[i] - 38, activeNodeK`
  - [`app.js:11539`](app.js#L11539) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col1 += renderSingleMatchNodeHtml(groupPlayoffMatches[2]?.[2 + i], 2, 2 + i, c4[i] - 38, activeNodeK`
  - [`app.js:11555`](app.js#L11555) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2]?.[6 + i], 2, 6 + i, c4[i] - 38, activeNodeK`
  - [`app.js:11568`](app.js#L11568) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[3]?.[0], 3, 0, c2[0] - 38, activeNodeKey, true`
  - [`app.js:11569`](app.js#L11569) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[3]?.[1], 3, 1, c2[1] - 38, activeNodeKey, true`
  - [`app.js:11581`](app.js#L11581) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col4 += renderSingleMatchNodeHtml(groupPlayoffMatches[4]?.[1], 4, 1, c2[0] - 38, activeNodeKey, true`
  - [`app.js:11582`](app.js#L11582) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col4 += renderSingleMatchNodeHtml(groupPlayoffMatches[4]?.[2], 4, 2, c2[1] - 38, activeNodeKey, true`
  - [`app.js:11591`](app.js#L11591) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col5 += renderSingleMatchNodeHtml(groupPlayoffMatches[4]?.[3], 4, 3, c1[0] - 38, activeNodeKey, true`
  - [`app.js:11600`](app.js#L11600) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col6 += renderSingleMatchNodeHtml(groupPlayoffMatches[4]?.[4], 4, 4, c1[0] - 38, activeNodeKey, true`
  - [`app.js:11609`](app.js#L11609) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col7 += renderSingleMatchNodeHtml(groupPlayoffMatches[5]?.[0], 5, 0, c1[0] - 38, activeNodeKey, fals`
  - [`app.js:11621`](app.js#L11621) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col0 += renderSingleMatchNodeHtml(groupPlayoffMatches[0]?.[i], 0, i, c8[i] - 38, activeNodeKey, fals`
  - [`app.js:11637`](app.js#L11637) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col1 += renderSingleMatchNodeHtml(groupPlayoffMatches[1]?.[i], 1, i, c4[i] - 38, activeNodeKey, fals`
  - [`app.js:11650`](app.js#L11650) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2]?.[0], 2, 0, c2[0] - 38, activeNodeKey, fals`
  - [`app.js:11651`](app.js#L11651) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2]?.[1], 2, 1, c2[1] - 38, activeNodeKey, fals`
  - [`app.js:11660`](app.js#L11660) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[4]?.[0], 4, 0, c1[0] - 38, activeNodeKey, fals`
  - [`app.js:11669`](app.js#L11669) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col4 += renderSingleMatchNodeHtml(groupPlayoffMatches[5]?.[0], 5, 0, c1[0] - 38, activeNodeKey, fals`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`selectMLBBStageNode()`](#selectmlbbstagenode), [`openPlayoffScoreModal()`](#openplayoffscoremodal), [`openMLBBPlayoffMvpModal()`](#openmlbbplayoffmvpmodal), [`onPlayoffTeamClicked()`](#onplayoffteamclicked), [`escapeHtml()`](#escapehtml)

<a id="rendersvgconnectorcolumn"></a>
#### `renderSvgConnectorColumn(pairs, strokeColor = '#00d2ff', width = 50, height = 750)`

- **Definisi:** [`app.js:11469`](app.js#L11469)
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:11534`](app.js#L11534) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg0 = renderSvgConnectorColumn(pairs0, '#ffb703');`
  - [`app.js:11550`](app.js#L11550) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg1 = renderSvgConnectorColumn(pairs1, '#ffb703');`
  - [`app.js:11564`](app.js#L11564) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg2 = renderSvgConnectorColumn(pairs2, '#ffb703');`
  - [`app.js:11577`](app.js#L11577) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg3 = renderSvgConnectorColumn(pairs3, '#ffb703');`
  - [`app.js:11587`](app.js#L11587) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg4 = renderSvgConnectorColumn(pairs4, '#ffb703');`
  - [`app.js:11596`](app.js#L11596) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg5 = renderSvgConnectorColumn(pairs5, '#ffb703');`
  - [`app.js:11605`](app.js#L11605) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg6 = renderSvgConnectorColumn(pairs6, '#ffb703');`
  - [`app.js:11632`](app.js#L11632) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg0 = renderSvgConnectorColumn(pairs0, '#00d2ff');`
  - [`app.js:11646`](app.js#L11646) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg1 = renderSvgConnectorColumn(pairs1, '#00d2ff');`
  - [`app.js:11656`](app.js#L11656) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg2 = renderSvgConnectorColumn(pairs2, '#00d2ff');`
  - [`app.js:11665`](app.js#L11665) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg3 = renderSvgConnectorColumn(pairs3, '#00d2ff');`

<a id="runtest"></a>
#### `runTest(testName, fn)`

- **Definisi:** [`functional_tests.js:26`](functional_tests.js#L26)
- **Titik Pemanggilan (75 lokasi):**
  - [`functional_tests.js:59`](functional_tests.js#L59) — pada skenario pengujian
    `runTest('1.1 Tabel Poin MCGG sesuai regulasi resmi (+4 s/d -4)', () => {`
  - [`functional_tests.js:70`](functional_tests.js#L70) — pada skenario pengujian
    `runTest('1.2 Kalkulasi akumulasi poin 3 ronde MCGG (+4, +2, -1 = 5)', () => {`
  - [`functional_tests.js:76`](functional_tests.js#L76) — pada skenario pengujian
    `runTest('1.3 Ketersediaan aset gambar 25 Little Commander MCGG', () => {`
  - [`functional_tests.js:84`](functional_tests.js#L84) — pada skenario pengujian
    `runTest('1.3 Normalisasi NIP Pegawai (menghilangkan tanda baca & karakter khusus)', () => {`
  - [`functional_tests.js:93`](functional_tests.js#L93) — pada skenario pengujian
    `runTest('1.4 Format Tautan Google Drive ke URL gambar langsung', () => {`
  - [`functional_tests.js:107`](functional_tests.js#L107) — pada skenario pengujian
    `runTest('1.5 Konfigurasi Admin PIN terverifikasi', () => {`
  - [`functional_tests.js:112`](functional_tests.js#L112) — pada skenario pengujian
    `runTest('1.6 Verifikasi fungsi generasi 3 Sheet Turnamen di google_apps_script.js', () => {`
  - [`functional_tests.js:121`](functional_tests.js#L121) — pada skenario pengujian
    `runTest('1.7 Logika pemetaan Hero, Alter Name & Tier List dari MCGG Match Set Up', () => {`
  - [`functional_tests.js:151`](functional_tests.js#L151) — pada skenario pengujian
    `runTest('1.8 Verifikasi aturan 1 Tim = 1 Record & 1 Pemain = 1 Record di google_apps_script.js', () `
  - [`functional_tests.js:158`](functional_tests.js#L158) — pada skenario pengujian
    `runTest('1.9 Verifikasi penghapusan tombol sinkronisasi sheet lama di index.html', () => {`
  - [`functional_tests.js:164`](functional_tests.js#L164) — pada skenario pengujian
    `runTest('1.10 Verifikasi datalist dan handler pembaruan otomatis di index.html dan app.js', () => {`
  - [`functional_tests.js:248`](functional_tests.js#L248) — pada skenario pengujian
    `runTest('2.1 Menolak pendaftaran MLBB tanpa logo tim', () => {`
  - [`functional_tests.js:261`](functional_tests.js#L261) — pada skenario pengujian
    `runTest('2.2 Menolak pendaftaran MLBB jika Official 1 tidak ada foto ID card', () => {`
  - [`functional_tests.js:276`](functional_tests.js#L276) — pada skenario pengujian
    `runTest('2.3 Menolak jika Official merangkap sebagai pemain (NIP sama)', () => {`
  - [`functional_tests.js:292`](functional_tests.js#L292) — pada skenario pengujian
    `runTest('2.4 Menolak jika foto ID Card Official sama persis dengan foto ID Card Pemain', () => {`
  - [`functional_tests.js:308`](functional_tests.js#L308) — pada skenario pengujian
    `runTest('2.5 Menolak jika ada dua pemain dengan NIP ganda dalam satu tim', () => {`
  - [`functional_tests.js:325`](functional_tests.js#L325) — pada skenario pengujian
    `runTest('2.6 Menolak pendaftaran solo MCGG tanpa ID Card', () => {`
  - [`functional_tests.js:339`](functional_tests.js#L339) — pada skenario pengujian
    `runTest('2.7 Menerima pendaftaran yang memenuhi seluruh kriteria', () => {`
  - [`functional_tests.js:456`](functional_tests.js#L456) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.1 TARGET_SPREADSHEET_ID dan fungsi getTargetSpreadsheet di google_apps_script.js', () => `
  - [`functional_tests.js:463`](functional_tests.js#L463) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.2 Ketersediaan fungsi listing getMlbbTimListing, getMlbbPesertaListing, getMcggListing', `
  - [`functional_tests.js:473`](functional_tests.js#L473) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.3 Prioritas VERIFIED > baris terbaru pada deduplikasi tim in-memory', () => {`
  - [`functional_tests.js:496`](functional_tests.js#L496) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.4 Sorting alfabetis A-Z dan pelestarian rowNumber asli', () => {`
  - [`functional_tests.js:511`](functional_tests.js#L511) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.5 Pembacaan IGN utuh tanpa pemotongan tanda koma (e.g. 4her,annn.)', () => {`
  - [`functional_tests.js:517`](functional_tests.js#L517) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.6 Struktur 11 Kolom Sheet Pendaftaran MCGG di google_apps_script.js', () => {`
  - [`functional_tests.js:524`](functional_tests.js#L524) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.7 Pembacaan ID Card langsung dari Kolom I (Link ID Card) & NIP sebagai Unique Key di getM`
  - [`functional_tests.js:532`](functional_tests.js#L532) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {`
  - [`functional_tests.js:546`](functional_tests.js#L546) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('5.1 Pre-check duplicate di app.js menggunakan Unique ID yang ditentukan', () => {`
  - [`functional_tests.js:553`](functional_tests.js#L553) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('5.2 Pengaturan isUpdate flag dan pop-up konfirmasi sebelum submit di app.js', () => {`
  - [`functional_tests.js:561`](functional_tests.js#L561) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('5.3 Script lock dan penanganan Kasus 1, 2, 3 di google_apps_script.js', () => {`
  - [`functional_tests.js:574`](functional_tests.js#L574) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.1 Logika Dinamis MLBB: 6 Tim (N=6) terbagi 2 grup seimbang (3 vs 3) & Playoff 4 Besar', (`
  - [`functional_tests.js:590`](functional_tests.js#L590) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.2 Logika Dinamis MLBB: N >= 12 Tim terbagi 4 grup seimbang & Playoff 8 Besar (QF -> SF ->`
  - [`functional_tests.js:609`](functional_tests.js#L609) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.3 Logika Dinamis MCGG: 13 Pemain (P=13) terbagi 2 lobi seimbang (7 dan 6 pemain) tanpa du`
  - [`functional_tests.js:623`](functional_tests.js#L623) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.4 Fase Final MCGG: Tanpa Lower Lobby & Grand Final Berstatus TBD Sebelum Kualifikasi Leng`
  - [`functional_tests.js:649`](functional_tests.js#L649) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.5 Pelestarian Skor & Handler Acak Undian Lobi MCGG', () => {`
  - [`functional_tests.js:655`](functional_tests.js#L655) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.6 UI Kontrol Dinamis di index.html (AUTO, Acak Lobi, Banner Informasi & Satu Halaman MCGG`
  - [`functional_tests.js:665`](functional_tests.js#L665) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.7 Status Kualifikasi MCGG di google_apps_script.js (Top 4 Lolos, Rank 5+ Gugur, Tanpa Low`
  - [`functional_tests.js:671`](functional_tests.js#L671) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.8 Bagan Pertandingan Fase Grup MLBB (Jadwal, Hasil BO3 & Integrasi Klasemen)', () => {`
  - [`functional_tests.js:692`](functional_tests.js#L692) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.9 Tampilan Satu Halaman Seluruh Lobi MCGG & Navigasi Cepat (Anchor Bar)', () => {`
  - [`functional_tests.js:702`](functional_tests.js#L702) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.10 Format Nama Commander Hero [Alter] & Visual Dua Lingkaran (Tanpa Label Tier)', () => {`
  - [`functional_tests.js:727`](functional_tests.js#L727) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.11 Pembacaan Image URL dan Penamaan Hero [Alter] dari Tab MCGG Match Set Up', () => {`
  - [`functional_tests.js:740`](functional_tests.js#L740) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.1 Restriksi Pengundian Commander khusus Panitia (Admin Only)', () => {`
  - [`functional_tests.js:745`](functional_tests.js#L745) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.2 MLBB Stage Machine: Lock TM mematikan tombol acak undian tim', () => {`
  - [`functional_tests.js:751`](functional_tests.js#L751) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.3 MLBB Stage Machine: Validasi kelengkapan match sebelum lanjut ke Tahap 2', () => {`
  - [`functional_tests.js:757`](functional_tests.js#L757) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.4 MLBB Stage Machine: Deteksi & Penyelesaian Tie-Breaker (BO1)', () => {`
  - [`functional_tests.js:764`](functional_tests.js#L764) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.5 MCGG Regulasi: Deteksi Sanksi Duplikat Commander Ronde 2 (-2 Poin)', () => {`
  - [`functional_tests.js:770`](functional_tests.js#L770) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.6 Otomasi Pembuatan & Pembaruan Indeks Fungsi (FUNCTION_INDEX.md)', () => {`
  - [`functional_tests.js:781`](functional_tests.js#L781) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('8.1 Pemisahan 3 Sheet Turnamen Terpisah di google_apps_script.js', () => {`
  - [`functional_tests.js:789`](functional_tests.js#L789) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('8.2 Fitur Input & Rekap MVP MLBB di app.js', () => {`
  - [`functional_tests.js:797`](functional_tests.js#L797) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('8.3 Undian Commander MCGG Per-Lobi Tepat di Atas Bagan Masing-Masing', () => {`
  - [`functional_tests.js:805`](functional_tests.js#L805) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('8.4 Rekap MVP Ronde MCGG (Berapa Kali Rank 1) di Tabel Lobi', () => {`
  - [`functional_tests.js:812`](functional_tests.js#L812) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.1 Tombol & Elemen Tutup Pendaftaran di index.html', () => {`
  - [`functional_tests.js:823`](functional_tests.js#L823) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.2 State dan Fungsi Tutup/Buka Pendaftaran di app.js', () => {`
  - [`functional_tests.js:830`](functional_tests.js#L830) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.3 Tombol Acak Grup/Lobi Nonaktif saat Pendaftaran Masih Dibuka', () => {`
  - [`functional_tests.js:836`](functional_tests.js#L836) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.4 Fungsi Reset Poin & Undian MCGG di app.js', () => {`
  - [`functional_tests.js:844`](functional_tests.js#L844) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('10.1 Navigasi 3 Grup MLBB (Tombol Kiri/Kanan & Carousel Paging)', () => {`
  - [`functional_tests.js:853`](functional_tests.js#L853) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('10.2 Format 8 Grup MLBB 5 Hari (Upper & Lower 16 Besar)', () => {`
  - [`functional_tests.js:862`](functional_tests.js#L862) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('10.3 Navigasi 3 Lobi MCGG (Tombol Kiri/Kanan & Grid 3 Kolom)', () => {`
  - [`functional_tests.js:871`](functional_tests.js#L871) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('10.4 Aturan Undian Commander Match 2 (All Pool selain Not Use)', () => {`
  - [`functional_tests.js:876`](functional_tests.js#L876) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('10.5 Flag Tim Invite MLBB & Persebaran 1 per Grup', () => {`
  - [`functional_tests.js:883`](functional_tests.js#L883) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('10.6 Pemisahan Tim Satelit Berdasarkan Nama Depan (e.g. Aang Alpha vs Aang Beta)', () => {`
  - [`functional_tests.js:923`](functional_tests.js#L923) — pada skenario pengujian
    `runTest('10.7 MLBB 8 Grup: Juara 1 & 2 ke Upper Bracket (16 Tim), Juara 3 ke Lower Bracket', () => {`
  - [`functional_tests.js:930`](functional_tests.js#L930) — pada skenario pengujian
    `runTest('10.8 Pemisahan Tim dari Divisi yang Sama di Fase Grup (Anti-Same Division Group Collision)'`
  - [`functional_tests.js:984`](functional_tests.js#L984) — pada skenario pengujian
    `runTest('10.9 Normalisasi Klaster Divisi (getDepartmentCluster) pada Variasi Teks Bebas Riil', () =>`
  - [`functional_tests.js:1025`](functional_tests.js#L1025) — pada skenario pengujian
    `runTest('10.10 Distribusi MCGG Bebas Bentrok Divisi (Round-Robin Greedy Dispersal)', () => {`
  - [`functional_tests.js:1133`](functional_tests.js#L1133) — pada skenario pengujian
    `runTest('10.11 Validasi Datalist Divisi Yokke Resmi di index.html', () => {`
  - [`functional_tests.js:1146`](functional_tests.js#L1146) — pada skenario pengujian
    `runTest('11.1 Container & Markup Hub Interaktif di index.html', () => {`
  - [`functional_tests.js:1154`](functional_tests.js#L1154) — pada skenario pengujian
    `runTest('11.2 Styling Split-Pane & Responsivitas di style.css', () => {`
  - [`functional_tests.js:1162`](functional_tests.js#L1162) — pada skenario pengujian
    `runTest('11.3 State & Fungsi Kontrol Master-Detail MLBB di app.js', () => {`
  - [`functional_tests.js:1169`](functional_tests.js#L1169) — pada skenario pengujian
    `runTest('11.4 State & Fungsi Kontrol Master-Detail MCGG di app.js', () => {`
  - [`functional_tests.js:1176`](functional_tests.js#L1176) — pada skenario pengujian
    `runTest('11.5 Verifikasi Penghapusan Badge Invite Publik', () => {`
  - [`functional_tests.js:1185`](functional_tests.js#L1185) — pada skenario pengujian
    `runTest('12.1 Konfigurasi URL Google Docs dan fungsi sinkronisasi peraturan di app.js', () => {`
  - [`functional_tests.js:1191`](functional_tests.js#L1191) — pada skenario pengujian
    `runTest('12.2 Peraturan Standar MLBB memuat regulasi resmi 12 Poin dari Google Docs', () => {`
  - [`functional_tests.js:1200`](functional_tests.js#L1200) — pada skenario pengujian
    `runTest('12.3 Penonaktifan dropdown list tim/peserta pada form pendaftaran di index.html', () => {`
  - [`functional_tests.js:1207`](functional_tests.js#L1207) — pada skenario pengujian
    `runTest('12.4 Penonaktifan fungsi edit registrasi publik di app.js', () => {`
  - [`functional_tests.js:1212`](functional_tests.js#L1212) — pada skenario pengujian
    `runTest('12.5 Konfigurasi Tab MCGG Google Docs (tab=t.ji56ljhdhzkr) & Regulasi Resmi MCGG', () => {`

<a id="validateregistration"></a>
#### `validateRegistration(data)`

- **Definisi:** [`functional_tests.js:181`](functional_tests.js#L181)
- **Titik Pemanggilan (7 lokasi):**
  - [`functional_tests.js:249`](functional_tests.js#L249) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:262`](functional_tests.js#L262) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:277`](functional_tests.js#L277) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:293`](functional_tests.js#L293) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:309`](functional_tests.js#L309) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:326`](functional_tests.js#L326) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:340`](functional_tests.js#L340) — pada skenario pengujian
    `const result = validateRegistration({`

<a id="runliveintegrationtests"></a>
#### `runLiveIntegrationTests()`

- **Definisi:** [`functional_tests.js:363`](functional_tests.js#L363)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:1228`](functional_tests.js#L1228) — pada skenario pengujian
    `runLiveIntegrationTests();`
- **Memanggil Fungsi Internal:** [`runAsyncTest()`](#runasynctest), [`runTest()`](#runtest), [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMlbbPesertaListing()`](#getmlbbpesertalisting), [`getMcggListing()`](#getmcgglisting), [`doPost()`](#dopost), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`shuffleMCGGPlayers()`](#shufflemcggplayers), [`getGroupFixtures()`](#getgroupfixtures), [`setGroupMatchScore()`](#setgroupmatchscore), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar), [`scrollToMCGGLobby()`](#scrolltomcgglobby), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`drawMatchCommanders()`](#drawmatchcommanders), [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`resetMLBBToStage1()`](#resetmlbbtostage1), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`setGroupMatchMVP()`](#setgroupmatchmvp), [`promptGroupMatchMVP()`](#promptgroupmatchmvp), [`promptPlayoffMVP()`](#promptplayoffmvp), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`switchLobbyDrawView()`](#switchlobbydrawview), [`resetLobbyDraw()`](#resetlobbydraw), [`toggleRegistrationStatus()`](#toggleregistrationstatus), [`renderRegistrationUI()`](#renderregistrationui), [`resetMCGGPointsAndDraw()`](#resetmcggpointsanddraw), [`prevMLBBGroupPage()`](#prevmlbbgrouppage), [`nextMLBBGroupPage()`](#nextmlbbgrouppage), [`goToMLBBGroupPage()`](#gotomlbbgrouppage), [`prevMCGGGroupPage()`](#prevmcgggrouppage), [`nextMCGGGroupPage()`](#nextmcgggrouppage), [`toggleInvitedTeam()`](#toggleinvitedteam), [`isTeamInvited()`](#isteaminvited), [`getTeamPrefix()`](#getteamprefix), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`getTeamDept()`](#getteamdept)

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:890`](functional_tests.js#L890)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:141`](app.js#L141) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:5741`](app.js#L5741) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:896`](functional_tests.js#L896)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:233`](app.js#L233) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:5246`](app.js#L5246) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5760`](app.js#L5760) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:6152`](app.js#L6152) — di dalam fungsi `isPlayoffInvitedTeam()`
    `if (typeof isTeamInvited === 'function' && isTeamInvited(teamName)) return true;`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`functional_tests.js:900`](functional_tests.js#L900)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:211`](app.js#L211) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`app.js:5245`](app.js#L5245) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:5750`](app.js#L5750) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:946`](functional_tests.js#L946)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:141`](app.js#L141) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:5741`](app.js#L5741) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:952`](functional_tests.js#L952)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:233`](app.js#L233) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:5246`](app.js#L5246) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5760`](app.js#L5760) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:6152`](app.js#L6152) — di dalam fungsi `isPlayoffInvitedTeam()`
    `if (typeof isTeamInvited === 'function' && isTeamInvited(teamName)) return true;`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`

<a id="findprevious"></a>
#### `findPrevious()`

- **Definisi:** [`functional_tests.js:1085`](functional_tests.js#L1085)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9398`](app.js#L9398) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`functional_tests.js:1087`](functional_tests.js#L1087)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9468`](app.js#L9468) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:9520`](app.js#L9520) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

---

### 👥 Manajemen Peserta & Roster

<a id="getinitialparticipants"></a>
#### `getInitialParticipants()`

- **Definisi:** [`app.js:118`](app.js#L118)
- **Deskripsi:** Inisialisasi daftar peserta dari localStorage dengan validasi versi data (DATA_VERSION), fallback ke array default.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:138`](app.js#L138) — cakupan global / event handler
    `let participants = getInitialParticipants();`

<a id="handleparticipantsearch"></a>
#### `handleParticipantSearch(query)`

- **Definisi:** [`app.js:1113`](app.js#L1113)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1378`](index.html#L1378) — Event `oninput`
    `<input type="text" id="participantSearchInput" placeholder="🔍 Cari Tim / IGN / Divisi..." oninput="`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants)

<a id="autolinkparticipantsassets"></a>
#### `autoLinkParticipantsAssets()`

- **Definisi:** [`app.js:1410`](app.js#L1410)
- **Deskripsi:** Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1689`](app.js#L1689) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3957`](app.js#L3957) — di dalam fungsi `saveParticipantEdit()`
    `autoLinkParticipantsAssets();`
  - [`app.js:4082`](app.js#L4082) — di dalam fungsi `renderParticipants()`
    `autoLinkParticipantsAssets();`
  - [`app.js:11151`](app.js#L11151) — di dalam fungsi `loadSampleData()`
    `autoLinkParticipantsAssets();`
  - [`app.js:11177`](app.js#L11177) — cakupan global / event handler
    `autoLinkParticipantsAssets();`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap)

<a id="fetchparticipantsfromgooglesheet"></a>
#### `fetchParticipantsFromGoogleSheet(isSilent = false, isPure = false)`

- **Definisi:** [`app.js:1445`](app.js#L1445)
- **Deskripsi:** Fetch registered participants from Google Sheets via doGet Webhook Google Sheets menjadi Single Source of Truth: data yang dihapus di sheet tidak akan dimunculkan kembali.
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:1364`](index.html#L1364) — Event `onclick`
    `<button class="btn btn-primary" id="btnSyncGSheet" style="padding: 0.45rem 0.9rem; font-size: 0.82re`
  - [`app.js:1828`](app.js#L1828) — di dalam fungsi `resetCacheAndFollowGSheet()`
    `await fetchParticipantsFromGoogleSheet(false, true);`
  - [`app.js:11211`](app.js#L11211) — cakupan global / event handler
    `fetchParticipantsFromGoogleSheet(true, true).catch(err => {`
  - [`app.js:11217`](app.js#L11217) — cakupan global / event handler
    `await fetchParticipantsFromGoogleSheet(true, true);`
- **Memanggil Fungsi Internal:** [`getItemKey()`](#getitemkey), [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap), [`renderRules()`](#renderrules), [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`setLastSyncedMatches()`](#setlastsyncedmatches), [`normalizeGroupPlayoffMatches()`](#normalizegroupplayoffmatches), [`renderMCGGTable()`](#rendermcggtable), [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`updateCommanderPoolFromSetup()`](#updatecommanderpoolfromsetup), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`showToast()`](#showtoast)

<a id="toggleregistrationstatus"></a>
#### `toggleRegistrationStatus()`

- **Definisi:** [`app.js:2640`](app.js#L2640)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:42`](index.html#L42) — Event `onclick`
    `<button id="btnToggleReg" class="btn btn-outline" style="display: none; padding: 0.25rem 0.65rem; fo`
  - [`index.html:1350`](index.html#L1350) — Event `onclick`
    `<button id="btnToggleRegPeserta" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0`
  - [`index.html:1502`](index.html#L1502) — Event `onclick`
    `<button id="btnToggleRegMLBB" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
  - [`index.html:1611`](index.html#L1611) — Event `onclick`
    `<button id="btnToggleRegMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; padd`
  - [`functional_tests.js:825`](functional_tests.js#L825) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleRegistrationStatus()'), 'Harus memiliki toggleRegistrationSt`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handleregister"></a>
#### `handleRegister(e)`

- **Definisi:** [`app.js:3143`](app.js#L3143)
- **Deskripsi:** Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Card, and Automatic Update Threat
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1107`](index.html#L1107) — Event `onsubmit`
    `<form id="regForm" onsubmit="handleRegister(event)">`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`showToast()`](#showtoast), [`saveState()`](#savestate), [`clearFormDraft()`](#clearformdraft), [`renderPlayersFormInputs()`](#renderplayersforminputs), [`toggleCategoryForm()`](#togglecategoryform), [`toggleOfficial2Form()`](#toggleofficial2form), [`updateRegistrationDatalists()`](#updateregistrationdatalists)

<a id="setparticipantstatus"></a>
#### `setParticipantStatus(id, newStatus)`

- **Definisi:** [`app.js:3675`](app.js#L3675)
- **Deskripsi:** Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4179`](app.js#L4179) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-success-sm" title="Verifikasi / Setujui" onclick="setParticipantStatus(${p.id`
  - [`app.js:4180`](app.js#L4180) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-danger-sm" title="Tolak / Gagal" onclick="setParticipantStatus(${p.id}, 'REJE`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="deleteparticipant"></a>
#### `deleteParticipant(id)`

- **Definisi:** [`app.js:3712`](app.js#L3712)
- **Deskripsi:** Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat ke blacklist agar tidak ter-sync ulang.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4181`](app.js#L4181) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" onclick="delet`
- **Memanggil Fungsi Internal:** [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="saveparticipantedit"></a>
#### `saveParticipantEdit()`

- **Definisi:** [`app.js:3893`](app.js#L3893)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1854`](index.html#L1854) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveParticipantEdit()">💾 Simpan Perubahan Data</button>`
- **Memanggil Fungsi Internal:** [`saveLogoToMap()`](#savelogotomap), [`saveIdCardToMap()`](#saveidcardtomap), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`closeEditParticipantModal()`](#closeeditparticipantmodal)

<a id="viewrosterdetail"></a>
#### `viewRosterDetail(id)`

- **Definisi:** [`app.js:4013`](app.js#L4013)
- **Deskripsi:** Modal Detail Roster Lengkap & ID Card Per-Pemain
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4211`](app.js#L4211) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;" onclick="viewRos`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox)

<a id="renderparticipants"></a>
#### `renderParticipants()`

- **Definisi:** [`app.js:4081`](app.js#L4081)
- **Deskripsi:** Render Participant Table (Featuring Nickname, ID Card count per-player, and Admin Edit Action)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:254`](app.js#L254) — di dalam fungsi `toggleInvitedTeam()`
    `renderParticipants();`
  - [`app.js:1102`](app.js#L1102) — di dalam fungsi `bypassLoaderWithCache()`
    `renderParticipants();`
  - [`app.js:1115`](app.js#L1115) — di dalam fungsi `handleParticipantSearch()`
    `renderParticipants();`
  - [`app.js:1692`](app.js#L1692) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderParticipants();`
  - [`app.js:2084`](app.js#L2084) — di dalam fungsi `saveState()`
    `renderParticipants();`
  - [`app.js:2502`](app.js#L2502) — di dalam fungsi `verifyAdminPin()`
    `renderParticipants();`
  - [`app.js:2549`](app.js#L2549) — di dalam fungsi `logoutAdmin()`
    `renderParticipants();`
  - [`app.js:3681`](app.js#L3681) — di dalam fungsi `setParticipantStatus()`
    `renderParticipants();`
  - [`app.js:3734`](app.js#L3734) — di dalam fungsi `deleteParticipant()`
    `renderParticipants();`
  - [`app.js:3757`](app.js#L3757) — di dalam fungsi `filterList()`
    `renderParticipants();`
  - [`app.js:3959`](app.js#L3959) — di dalam fungsi `saveParticipantEdit()`
    `renderParticipants();`
  - [`app.js:11166`](app.js#L11166) — di dalam fungsi `clearAllData()`
    `renderParticipants();`
  - [`app.js:11189`](app.js#L11189) — cakupan global / event handler
    `renderParticipants();`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`updateRegistrationDatalists()`](#updateregistrationdatalists), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`toggleInvitedTeam()`](#toggleinvitedteam), [`openEditParticipantModal()`](#openeditparticipantmodal), [`setParticipantStatus()`](#setparticipantstatus), [`deleteParticipant()`](#deleteparticipant), [`viewRosterDetail()`](#viewrosterdetail)

<a id="findteamparticipant"></a>
#### `findTeamParticipant(teamName)`

- **Definisi:** [`app.js:7752`](app.js#L7752)
- **Deskripsi:** Helper mencari data peserta tim dengan normalisasi nama
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:8067`](app.js#L8067) — di dalam fungsi `renderMvpRosterList()`
    `const teamPart = findTeamParticipant(teamName);`
  - [`app.js:8536`](app.js#L8536) — di dalam fungsi `verifyAllMatchPlayers()`
    `const teamPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(teamName) : null;`
  - [`app.js:8559`](app.js#L8559) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamAPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamA) : null;`
  - [`app.js:8560`](app.js#L8560) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamBPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamB) : null;`

<a id="rendermvprosterlist"></a>
#### `renderMvpRosterList(teamName)`

- **Definisi:** [`app.js:8062`](app.js#L8062)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8059`](app.js#L8059) — di dalam fungsi `switchMvpTeamTab()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:8132`](app.js#L8132) — di dalam fungsi `filterMvpRosterList()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:8164`](app.js#L8164) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpRosterList(targetTeam);`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`selectMvpPlayer()`](#selectmvpplayer)

<a id="filtermvprosterlist"></a>
#### `filterMvpRosterList()`

- **Definisi:** [`app.js:8129`](app.js#L8129)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:2019`](index.html#L2019) — Event `oninput`
    `<input type="text" id="mvpPlayerSearchInput" placeholder="🔍 Cari nama pemain atau IGN..." style="wi`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="renderteamrostercolumn"></a>
#### `renderTeamRosterColumn(teamName, roster, count)`

- **Definisi:** [`app.js:8606`](app.js#L8606)
- **Deskripsi:** Helper untuk merender kolom roster tiap tim
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8703`](app.js#L8703) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamA, rosterA, countA)}`
  - [`app.js:8704`](app.js#L8704) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamB, rosterB, countB)}`

---

### ☁️ Sinkronisasi Google Sheets & State Storage

<a id="savestagestatelocal"></a>
#### `saveStageStateLocal()`

- **Definisi:** [`app.js:601`](app.js#L601)
- **Deskripsi:** Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM, data tie-breaker) ke localStorage.
- **Titik Pemanggilan (15 lokasi):**
  - [`app.js:1083`](app.js#L1083) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveStageStateLocal();`
  - [`app.js:1996`](app.js#L1996) — cakupan global / event handler
    `saveStageStateLocal();`
  - [`app.js:2693`](app.js#L2693) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveStageStateLocal();`
  - [`app.js:4338`](app.js#L4338) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveStageStateLocal();`
  - [`app.js:4371`](app.js#L4371) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:4376`](app.js#L4376) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:4391`](app.js#L4391) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:4421`](app.js#L4421) — di dalam fungsi `proceedToMLBBStage2()`
    `saveStageStateLocal();`
  - [`app.js:4522`](app.js#L4522) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveStageStateLocal();`
  - [`app.js:4568`](app.js#L4568) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveStageStateLocal();`
  - [`app.js:4948`](app.js#L4948) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveStageStateLocal();`
  - [`app.js:5278`](app.js#L5278) — di dalam fungsi `resetMLBBToStage1()`
    `saveStageStateLocal();`
  - [`app.js:5318`](app.js#L5318) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveStageStateLocal();`
  - [`app.js:5508`](app.js#L5508) — di dalam fungsi `saveTournamentStateOnly()`
    `saveStageStateLocal();`
  - [`app.js:11344`](app.js#L11344) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `saveStageStateLocal();`

<a id="resetcacheandfollowgsheet"></a>
#### `resetCacheAndFollowGSheet()`

- **Definisi:** [`app.js:1810`](app.js#L1810)
- **Deskripsi:** Reset cache lokal dan ikuti 100% data aktif dari Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1367`](index.html#L1367) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetCacheFollowGSheet" style="padding: 0.45rem 0.9rem; font-`
- **Memanggil Fungsi Internal:** [`fetchParticipantsFromGoogleSheet()`](#fetchparticipantsfromgooglesheet)

<a id="saveallchangestogooglesheet"></a>
#### `saveAllChangesToGoogleSheet()`

- **Definisi:** [`app.js:1843`](app.js#L1843)
- **Deskripsi:** SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1370`](index.html#L1370) — Event `onclick`
    `<button class="btn btn-primary" id="btnSaveAllChanges" style="padding: 0.45rem 0.9rem; font-size: 0.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`showToast()`](#showtoast)

<a id="synctournamentconfigtogsheet"></a>
#### `syncTournamentConfigToGSheet(options = {})`

- **Definisi:** [`app.js:1985`](app.js#L1985)
- **Deskripsi:** SINKRONISASI KONFIGURASI TURNAMEN & BAGAN KE GOOGLE SHEETS
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:4314`](app.js#L4314) — di dalam fungsi `shuffleAndGenerateTournament()`
    `syncTournamentConfigToGSheet({ showSuccessToast: false, context: 'GROUP_SHUFFLE' }).then(res => {`
  - [`app.js:4430`](app.js#L4430) — di dalam fungsi `proceedToMLBBStage2()`
    `syncTournamentConfigToGSheet({ showSuccessToast: true, context: 'STAGE_2_ENTER' }).catch(err => {`
  - [`app.js:4533`](app.js#L4533) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `syncTournamentConfigToGSheet({ showSuccessToast: false, context: 'PLAYOFF_SHUFFLE' }).then(res => {`
  - [`app.js:4574`](app.js#L4574) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `syncTournamentConfigToGSheet({ showSuccessToast: false, context: 'PLAYOFF_LOCK' }).catch(err => {`
  - [`app.js:5532`](app.js#L5532) — di dalam fungsi `saveTournamentStateOnly()`
    `const configResult = await syncTournamentConfigToGSheet({ showSuccessToast: false });`
  - [`app.js:11355`](app.js#L11355) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `syncTournamentConfigToGSheet({ showSuccessToast: !isLocked, context: 'STAGE_2_ENTER' }).catch(err =>`

<a id="synctournamentsheetstogsheet"></a>
#### `syncTournamentSheetsToGSheet()`

- **Definisi:** [`app.js:2037`](app.js#L2037)
- **Deskripsi:** SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="getlastsyncedmatches"></a>
#### `getLastSyncedMatches()`

- **Definisi:** [`app.js:5354`](app.js#L5354)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5374`](app.js#L5374) — di dalam fungsi `getUnsyncedMatches()`
    `const synced = getLastSyncedMatches();`
  - [`app.js:5488`](app.js#L5488) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const synced = getLastSyncedMatches() || {};`

<a id="setlastsyncedmatches"></a>
#### `setLastSyncedMatches(obj)`

- **Definisi:** [`app.js:5365`](app.js#L5365)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1635`](app.js#L1635) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `setLastSyncedMatches(groupMatchResults);`
  - [`app.js:5490`](app.js#L5490) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `setLastSyncedMatches(synced);`

<a id="getunsyncedmatches"></a>
#### `getUnsyncedMatches()`

- **Definisi:** [`app.js:5373`](app.js#L5373)
- **Deskripsi:** Lookup perbedaan antara cache lokal dengan data terakhir yang tersinkronisasi di Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5535`](app.js#L5535) — di dalam fungsi `saveTournamentStateOnly()`
    `const unsynced = typeof getUnsyncedMatches === 'function' ? getUnsyncedMatches() : [];`
- **Memanggil Fungsi Internal:** [`getLastSyncedMatches()`](#getlastsyncedmatches)

<a id="syncsinglematchrowtogsheet"></a>
#### `syncSingleMatchRowToGSheet(canonId)`

- **Definisi:** [`app.js:5410`](app.js#L5410)
- **Deskripsi:** Fungsi utama sinkronisasi 1 pertandingan: mengupdate HANYA 3 baris di Google Sheets (1 baris di sheet MLBB - Bagan & MVP + 2 baris tim di sheet MLBB - Klasemen & Point)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:4821`](app.js#L4821) — di dalam fungsi `setPlayoffMatchScore()`
    `syncSingleMatchRowToGSheet(matchKey).catch(e => console.warn('Sync playoff to GSheet:', e));`
  - [`app.js:4842`](app.js#L4842) — di dalam fungsi `resetPlayoffMatchScore()`
    `syncSingleMatchRowToGSheet(matchKey).catch(e => console.warn('Sync reset to GSheet:', e));`
  - [`app.js:5544`](app.js#L5544) — di dalam fungsi `saveTournamentStateOnly()`
    `await syncSingleMatchRowToGSheet(m.canonId);`
  - [`app.js:8265`](app.js#L8265) — di dalam fungsi `saveSelectedMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || 'PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffM`
  - [`app.js:8270`](app.js#L8270) — di dalam fungsi `saveSelectedMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));`
  - [`app.js:8318`](app.js#L8318) — di dalam fungsi `deleteCurrentMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || 'PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffM`
  - [`app.js:8323`](app.js#L8323) — di dalam fungsi `deleteCurrentMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`isSameTeamName()`](#issameteamname), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`getLastSyncedMatches()`](#getlastsyncedmatches), [`setLastSyncedMatches()`](#setlastsyncedmatches)

<a id="savetournamentstateonly"></a>
#### `saveTournamentStateOnly(isSilent = false)`

- **Definisi:** [`app.js:5500`](app.js#L5500)
- **Deskripsi:** Handler tombol Simpan: Sinkronkan seluruh konfigurasi turnamen, bagan playoff, dan skor ke GSheet
- **Titik Pemanggilan (18 lokasi):**
  - [`index.html:1511`](index.html#L1511) — Event `onclick`
    `<button id="btnSaveBracketGSheet" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`index.html:1616`](index.html#L1616) — Event `onclick`
    `<button id="btnSaveMCGGPointsGSheet" class="btn btn-primary" style="display: none; font-size: 0.85re`
  - [`app.js:258`](app.js#L258) — di dalam fungsi `toggleInvitedTeam()`
    `saveTournamentStateOnly(true);`
  - [`app.js:1091`](app.js#L1091) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2657`](app.js#L2657) — di dalam fungsi `toggleRegistrationStatus()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2700`](app.js#L2700) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4311`](app.js#L4311) — di dalam fungsi `shuffleAndGenerateTournament()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4341`](app.js#L4341) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4395`](app.js#L4395) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4427`](app.js#L4427) — di dalam fungsi `proceedToMLBBStage2()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4528`](app.js#L4528) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4573`](app.js#L4573) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4839`](app.js#L4839) — di dalam fungsi `resetPlayoffMatchScore()`
    `saveTournamentStateOnly(true);`
  - [`app.js:5282`](app.js#L5282) — di dalam fungsi `resetMLBBToStage1()`
    `saveTournamentStateOnly(true);`
  - [`app.js:5320`](app.js#L5320) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveTournamentStateOnly(true);`
  - [`app.js:10317`](app.js#L10317) — di dalam fungsi `toggleLockMatchDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:10376`](app.js#L10376) — di dalam fungsi `resetLobbyDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:11350`](app.js#L11350) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `saveTournamentStateOnly(true);`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`saveStageStateLocal()`](#savestagestatelocal), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet), [`getUnsyncedMatches()`](#getunsyncedmatches), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast)

<a id="runasynctest"></a>
#### `runAsyncTest(testName, fn)`

- **Definisi:** [`functional_tests.js:37`](functional_tests.js#L37)
- **Titik Pemanggilan (4 lokasi):**
  - [`functional_tests.js:364`](functional_tests.js#L364) — di dalam fungsi `runLiveIntegrationTests()`
    `await runAsyncTest('3.1 Live GET: Sinkronisasi data peserta & status online', async () => {`
  - [`functional_tests.js:379`](functional_tests.js#L379) — di dalam fungsi `runLiveIntegrationTests()`
    `await runAsyncTest('3.2 Live POST: Server menolak pendaftaran MLBB tanpa logo', async () => {`
  - [`functional_tests.js:402`](functional_tests.js#L402) — di dalam fungsi `runLiveIntegrationTests()`
    `await runAsyncTest('3.3 Live POST: Server menolak Official merangkap Pemain', async () => {`
  - [`functional_tests.js:428`](functional_tests.js#L428) — di dalam fungsi `runLiveIntegrationTests()`
    `await runAsyncTest('3.4 Live POST: Server menolak solo MCGG tanpa ID card', async () => {`

---

### 🆔 Modal Dialog & Bukti ID Card

<a id="compressimage"></a>
#### `compressImage(file, maxWidth = 1200, maxHeight = 1200, quality = 0.75)`

- **Definisi:** [`app.js:893`](app.js#L893)
- **Deskripsi:** Client-side image compressor: compresses smartphone photos using HTML5 Canvas (<= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:953`](app.js#L953) — di dalam fungsi `compressImageFile()`
    `return compressImage(file, maxWidth, maxWidth, quality);`
  - [`app.js:3870`](app.js#L3870) — di dalam fungsi `handleEditLogoUpload()`
    `const compressed = await compressImage(file, 400, 400, 0.85);`
  - [`app.js:3887`](app.js#L3887) — di dalam fungsi `handleEditRosterIdCardUpload()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`

<a id="compressimagefile"></a>
#### `compressImageFile(file, maxWidth = 1200, quality = 0.75)`

- **Definisi:** [`app.js:952`](app.js#L952)
- **Deskripsi:** Client-side image compression helper (Canvas <= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:2266`](app.js#L2266) — di dalam fungsi `handleLogoPreview()`
    `uploadedLogoBase64 = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:2281`](app.js#L2281) — di dalam fungsi `handleSingleIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:2303`](app.js#L2303) — di dalam fungsi `handlePlayerIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="openglossarymodal"></a>
#### `openGlossaryModal()`

- **Definisi:** [`app.js:992`](app.js#L992)
- **Deskripsi:** Modal Glosarium Istilah Turnamen
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:37`](index.html#L37) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.75rem; bo`

<a id="closeglossarymodal"></a>
#### `closeGlossaryModal()`

- **Definisi:** [`app.js:997`](app.js#L997)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1931`](index.html#L1931) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeGlossaryModal()">✕ Tut`
  - [`index.html:1960`](index.html#L1960) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeGlossaryModal()">Tutup</button>`

<a id="openresetbaganmodal"></a>
#### `openResetBaganModal()`

- **Definisi:** [`app.js:1003`](app.js#L1003)
- **Deskripsi:** Modal Reset Bagan dengan Verifikasi Password/PIN
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5301`](app.js#L5301) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `openResetBaganModal();`

<a id="closeresetbaganmodal"></a>
#### `closeResetBaganModal()`

- **Definisi:** [`app.js:1012`](app.js#L1012)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1975`](index.html#L1975) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeResetBaganModal()">Batal</button>`
  - [`app.js:1068`](app.js#L1068) — di dalam fungsi `confirmResetBaganWithPin()`
    `closeResetBaganModal();`

<a id="getidcardmap"></a>
#### `getIdCardMap()`

- **Definisi:** [`app.js:1304`](app.js#L1304)
- **Deskripsi:** Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1345`](app.js#L1345) — di dalam fungsi `saveIdCardToMap()`
    `let map = getIdCardMap();`
  - [`app.js:1362`](app.js#L1362) — di dalam fungsi `findIdCardByEmpIdOrName()`
    `const map = getIdCardMap();`

<a id="saveidcardtomap"></a>
#### `saveIdCardToMap(empId, name, cardUrl)`

- **Definisi:** [`app.js:1343`](app.js#L1343)
- **Deskripsi:** Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasarkan NIP/Nama.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1426`](app.js#L1426) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(p.empId, p.name, resolvedCard);`
  - [`app.js:1437`](app.js#L1437) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(m.empId, m.name, resolvedCard);`
  - [`app.js:1517`](app.js#L1517) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sheetItem.empId, sheetItem.name, rootIdCard);`
  - [`app.js:1542`](app.js#L1542) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sM.empId, sM.name, mIdCard);`
  - [`app.js:3939`](app.js#L3939) — di dalam fungsi `saveParticipantEdit()`
    `saveIdCardToMap(m.empId, m.name, m.idCard);`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="findidcardbyempidorname"></a>
#### `findIdCardByEmpIdOrName(empId, name)`

- **Definisi:** [`app.js:1361`](app.js#L1361)
- **Deskripsi:** Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama peserta.
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:1423`](app.js#L1423) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name) || (p.roster && p.roster[0`
  - [`app.js:1434`](app.js#L1434) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' `
  - [`app.js:1515`](app.js#L1515) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const rootIdCard = sheetItem.idCard || (localItem ? localItem.idCard : '') || findIdCardByEmpIdOrNam`
  - [`app.js:1537`](app.js#L1537) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `let mIdCard = sM.idCard || (lM ? lM.idCard : '') || findIdCardByEmpIdOrName(sM.empId, sM.name) || (d`
  - [`app.js:3452`](app.js#L3452) — di dalam fungsi `handleRegister()`
    `mcggIdCard = existingParticipant.idCard || (existingParticipant.roster && existingParticipant.roster`
  - [`app.js:3830`](app.js#L3830) — di dalam fungsi `openEditParticipantModal()`
    `editRosterIdCards[idx] = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MC`
  - [`app.js:4041`](app.js#L4041) — di dalam fungsi `viewRosterDetail()`
    `const cardSrc = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (team.category === 'MCGG' ? `
  - [`app.js:4121`](app.js#L4121) — di dalam fungsi `renderParticipants()`
    `const card = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idC`
  - [`app.js:8639`](app.js#L8639) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const cardSrc = m.idCard || (typeof findIdCardByEmpIdOrName === 'function' ? findIdCardByEmpIdOrName`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="getlogomap"></a>
#### `getLogoMap()`

- **Definisi:** [`app.js:1379`](app.js#L1379)
- **Deskripsi:** Pemetaan Logo sesuai Nama Tim (MLBB)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1395`](app.js#L1395) — di dalam fungsi `saveLogoToMap()`
    `let map = getLogoMap();`
  - [`app.js:1404`](app.js#L1404) — di dalam fungsi `findLogoByTeamName()`
    `const map = getLogoMap();`

<a id="savelogotomap"></a>
#### `saveLogoToMap(teamName, logoUrl)`

- **Definisi:** [`app.js:1393`](app.js#L1393)
- **Deskripsi:** Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasarkan nama tim.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1418`](app.js#L1418) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveLogoToMap(p.name, resolvedLogo);`
  - [`app.js:1511`](app.js#L1511) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveLogoToMap(sheetItem.name, teamLogo);`
  - [`app.js:3916`](app.js#L3916) — di dalam fungsi `saveParticipantEdit()`
    `saveLogoToMap(p.name, currentEditLogoBase64);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="findlogobyteamname"></a>
#### `findLogoByTeamName(teamName)`

- **Definisi:** [`app.js:1402`](app.js#L1402)
- **Deskripsi:** Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peserta.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:1415`](app.js#L1415) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedLogo = p.logo || findLogoByTeamName(p.name);`
  - [`app.js:1509`](app.js#L1509) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const teamLogo = sheetItem.logo || (localItem ? localItem.logo : '') || findLogoByTeamName(sheetItem`
  - [`app.js:3178`](app.js#L3178) — di dalam fungsi `handleRegister()`
    `if (existingParticipant && (existingParticipant.logo || findLogoByTeamName(existingParticipant.name)`
  - [`app.js:3179`](app.js#L3179) — di dalam fungsi `handleRegister()`
    `logoData = existingParticipant.logo || findLogoByTeamName(existingParticipant.name);`
  - [`app.js:3814`](app.js#L3814) — di dalam fungsi `openEditParticipantModal()`
    `currentEditLogoBase64 = p.logo || findLogoByTeamName(p.name) || '';`
  - [`app.js:4017`](app.js#L4017) — di dalam fungsi `viewRosterDetail()`
    `const teamLogoSrc = team.logo || findLogoByTeamName(team.name);`
  - [`app.js:4135`](app.js#L4135) — di dalam fungsi `renderParticipants()`
    `const teamLogoSrc = p.logo || findLogoByTeamName(p.name);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="handlelogopreview"></a>
#### `handleLogoPreview(event)`

- **Definisi:** [`app.js:2261`](app.js#L2261)
- **Deskripsi:** Handle Logo Upload and Live Preview
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1157`](index.html#L1157) — Event `onchange`
    `<input type="file" id="teamLogoInput" accept="image/*" onchange="handleLogoPreview(event)" style="pa`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="handlesingleidcardpreview"></a>
#### `handleSingleIdCardPreview(event, target)`

- **Definisi:** [`app.js:2276`](app.js#L2276)
- **Deskripsi:** Handle Individual ID Card Upload for Officials and MCGG
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1203`](index.html#L1203) — Event `onchange`
    `<input type="file" id="off1_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
  - [`index.html:1247`](index.html#L1247) — Event `onchange`
    `<input type="file" id="off2_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
  - [`index.html:1316`](index.html#L1316) — Event `onchange`
    `<input type="file" id="mcgg_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="handleplayeridcardpreview"></a>
#### `handlePlayerIdCardPreview(event, playerIdx)`

- **Definisi:** [`app.js:2298`](app.js#L2298)
- **Deskripsi:** Handle Individual ID Card Upload for Each of the 8 Players
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2359`](app.js#L2359) — di dalam fungsi `renderPlayersFormInputs()`
    `<input type="file" id="p${i}_idcard_file" accept="image/*" onchange="handlePlayerIdCardPreview(event`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="openidcardlightbox"></a>
#### `openIdCardLightbox(imgSrc, title, driveUrl = '')`

- **Definisi:** [`app.js:3005`](app.js#L3005)
- **Deskripsi:** Lightbox for Viewing Full ID Card
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3848`](app.js#L3848) — di dalam fungsi `openEditParticipantModal()`
    `<div class="idcard-thumb-sm" id="edit_m_${idx}_thumb" onclick="if(editRosterIdCards[${idx}]) openIdC`
  - [`app.js:4045`](app.js#L4045) — di dalam fungsi `viewRosterDetail()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--yokke-`
  - [`app.js:8650`](app.js#L8650) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<div style="width:48px; height:48px; flex-shrink:0; cursor:pointer; border-radius:6px; overflow:hidd`
- **Memanggil Fungsi Internal:** [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="closeidcardlightbox"></a>
#### `closeIdCardLightbox()`

- **Definisi:** [`app.js:3046`](app.js#L3046)
- **Deskripsi:** Menutup modal pop-up lightbox preview ID Card pegawai.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1894`](index.html#L1894) — Event `onclick`
    `<div id="idCardLightboxModal" class="modal-overlay" style="z-index: 2500;" onclick="if(event.target `
  - [`index.html:1898`](index.html#L1898) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeIdCardLightbox()">✕ Tu`

<a id="openeditparticipantmodal"></a>
#### `openEditParticipantModal(id)`

- **Definisi:** [`app.js:3763`](app.js#L3763)
- **Deskripsi:** ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4178`](app.js#L4178) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-edit-sm" title="Edit Data & Upload ID Card" onclick="openEditParticipantModal`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox), [`handleEditRosterIdCardUpload()`](#handleeditrosteridcardupload)

<a id="closeeditparticipantmodal"></a>
#### `closeEditParticipantModal()`

- **Definisi:** [`app.js:3861`](app.js#L3861)
- **Deskripsi:** Menutup modal dialog edit peserta.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1781`](index.html#L1781) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeEditParticipantModal(`
  - [`index.html:1853`](index.html#L1853) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeEditParticipantModal()">Batal</button>`
  - [`app.js:4008`](app.js#L4008) — di dalam fungsi `saveParticipantEdit()`
    `closeEditParticipantModal();`

<a id="handleeditlogoupload"></a>
#### `handleEditLogoUpload(event)`

- **Definisi:** [`app.js:3866`](app.js#L3866)
- **Deskripsi:** Handle logo upload in Admin Edit modal
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1813`](index.html#L1813) — Event `onchange`
    `<input type="file" id="editTeamLogoInput" accept="image/*" onchange="handleEditLogoUpload(event)" st`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleeditrosteridcardupload"></a>
#### `handleEditRosterIdCardUpload(event, idx)`

- **Definisi:** [`app.js:3882`](app.js#L3882)
- **Deskripsi:** Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedit pada modal admin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3851`](app.js#L3851) — di dalam fungsi `openEditParticipantModal()`
    `<input type="file" accept="image/*" style="font-size:0.7rem; width:120px;" onchange="handleEditRoste`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="closedetailmodal"></a>
#### `closeDetailModal()`

- **Definisi:** [`app.js:4076`](app.js#L4076)
- **Deskripsi:** Menutup modal dialog rincian roster tim dan galeri ID Card.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1870`](index.html#L1870) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeDetailModal()">✕ Tutu`

<a id="opentestdrawmodal"></a>
#### `openTestDrawModal()`

- **Definisi:** [`app.js:5121`](app.js#L5121)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1509`](index.html#L1509) — Event `onclick`
    `<button id="btnTestPlayoffStandings" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5`
  - [`app.js:4941`](app.js#L4941) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `openTestDrawModal();`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast)

<a id="closetestdrawmodal"></a>
#### `closeTestDrawModal()`

- **Definisi:** [`app.js:5133`](app.js#L5133)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:2200`](index.html#L2200) — Event `onclick`
    `<div id="testDrawModal" class="modal-overlay" onclick="if(event.target === this) closeTestDrawModal(`
  - [`index.html:2215`](index.html#L2215) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`app.js:5089`](app.js#L5089) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;"`

<a id="initandshowmvpmodal"></a>
#### `initAndShowMvpModal()`

- **Definisi:** [`app.js:7889`](app.js#L7889)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7837`](app.js#L7837) — di dalam fungsi `openMLBBGroupMvpModal()`
    `initAndShowMvpModal();`
  - [`app.js:7886`](app.js#L7886) — di dalam fungsi `openMLBBPlayoffMvpModal()`
    `initAndShowMvpModal();`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="openmatchplayerverifymodal"></a>
#### `openMatchPlayerVerifyModal(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:8462`](app.js#L8462)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9116`](app.js#L9116) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 7px; color:var(-`
  - [`app.js:12201`](app.js#L12201) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent)

<a id="closematchplayerverifymodal"></a>
#### `closeMatchPlayerVerifyModal()`

- **Definisi:** [`app.js:8500`](app.js#L8500)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:2080`](index.html#L2080) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:2096`](index.html#L2096) — Event `onclick`
    `<button type="button" class="btn btn-primary" onclick="closeMatchPlayerVerifyModal()">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermatchplayerverifymodalcontent"></a>
#### `renderMatchPlayerVerifyModalContent()`

- **Definisi:** [`app.js:8550`](app.js#L8550)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8495`](app.js#L8495) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:8521`](app.js#L8521) — di dalam fungsi `toggleMatchPlayerVerify()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:8544`](app.js#L8544) — di dalam fungsi `verifyAllMatchPlayers()`
    `renderMatchPlayerVerifyModalContent();`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`verifyAllMatchPlayers()`](#verifyallmatchplayers), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`openIdCardLightbox()`](#openidcardlightbox), [`toggleMatchPlayerVerify()`](#togglematchplayerverify), [`renderTeamRosterColumn()`](#renderteamrostercolumn)

---

### 🔧 Helper & UI Utility

<a id="showtoast"></a>
#### `showToast(msg, type = 'info', duration = 4000)`

- **Definisi:** [`app.js:959`](app.js#L959)
- **Deskripsi:** TOAST NOTIFICATIONS (CYBERPUNK DARK)
- **Titik Pemanggilan (60 lokasi):**
  - [`app.js:1064`](app.js#L1064) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('PIN Panitia salah! Tindakan reset dibatalkan.', 'error');`
  - [`app.js:1092`](app.js#L1092) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('✅ Seluruh pembagian grup, jadwal, skor match, dan bagan playoff MLBB berhasil direset tot`
  - [`app.js:1107`](app.js#L1107) — di dalam fungsi `bypassLoaderWithCache()`
    `showToast('Memuat turnamen menggunakan data lokal / cache offline.', 'info', 4000);`
  - [`app.js:1708`](app.js#L1708) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('Koneksi ke Google Sheets lambat. Menggunakan data cache lokal.', 'info');`
  - [`app.js:1712`](app.js#L1712) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('⚠️ Gagal mengambil data dari Google Sheets.', 'error');`
  - [`app.js:1903`](app.js#L1903) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('Beralih ke sinkronisasi serial bertahap...', 'info', 3000);`
  - [`app.js:1970`](app.js#L1970) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('✅ Seluruh perubahan data peserta, status, bagan, dan klasemen turnamen berhasil disimpan `
  - [`app.js:1973`](app.js#L1973) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('⚠️ Sebagian perubahan berhasil disinkronkan, data lokal Anda tetap aman.', 'warning', 500`
  - [`app.js:1992`](app.js#L1992) — cakupan global / event handler
    `showToast('Menyinkronkan data turnamen ke Google Sheets... ⏳', 'info', 2500);`
  - [`app.js:2021`](app.js#L2021) — cakupan global / event handler
    `showToast('✅ Bagan & data turnamen berhasil disinkronkan ke Google Sheets!', 'success', 4000);`
  - [`app.js:2187`](app.js#L2187) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('✅ Peraturan MLBB & MCGG berhasil diperbarui dari Google Docs!', 'success');`
  - [`app.js:2197`](app.js#L2197) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('⚠️ Gagal terhubung ke Google Docs, menggunakan cache dokumen lokal.', 'warning');`
  - [`app.js:2506`](app.js#L2506) — di dalam fungsi `verifyAdminPin()`
    `showToast('✅ Berhasil login sebagai Panitia Turnamen!', 'success');`
  - [`app.js:2514`](app.js#L2514) — di dalam fungsi `verifyAdminPin()`
    `showToast('❌ PIN Panitia salah! Akses ditolak.', 'error');`
  - [`app.js:2529`](app.js#L2529) — di dalam fungsi `verifyAdminPin()`
    `showToast('Gagal menghubungi server Google Apps Script.', 'error');`
  - [`app.js:2553`](app.js#L2553) — di dalam fungsi `logoutAdmin()`
    `showToast('Telah keluar dari mode Panitia.', 'info');`
  - [`app.js:3589`](app.js#L3589) — di dalam fungsi `handleRegister()`
    `showToast('❌ Pendaftaran ditolak: ${result.message || result.error || 'Validasi server gagal.'}', 'e`
  - [`app.js:3596`](app.js#L3596) — di dalam fungsi `handleRegister()`
    `showToast("⚠️ Gagal terhubung ke Google Sheets. Formulir Anda tetap tersimpan di draft lokal. Silaka`
  - [`app.js:4312`](app.js#L4312) — di dalam fungsi `shuffleAndGenerateTournament()`
    `showToast('🎲 Undian tim dan bagan berhasil diacak dan diperbarui!', 'success');`
  - [`app.js:4316`](app.js#L4316) — di dalam fungsi `shuffleAndGenerateTournament()`
    `showToast('✅ Susunan grup berhasil disinkronkan ke Google Sheets!', 'success', 3000);`
  - [`app.js:4492`](app.js#L4492) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan undian bagan playoff.', 'error');`
  - [`app.js:4496`](app.js#L4496) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');`
  - [`app.js:4500`](app.js#L4500) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('🔒 Bagan playoff sedang dikunci. Buka kunci undian terlebih dahulu untuk mengacak ulang.'`
  - [`app.js:4529`](app.js#L4529) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('🎲 Undian bagan playoff berhasil diacak dan diperbarui!', 'success');`
  - [`app.js:4535`](app.js#L4535) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('✅ Bagan playoff berhasil disinkronkan & diperbarui di Google Sheets!', 'success', 4000);`
  - [`app.js:4538`](app.js#L4538) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('⚠️ Bagan playoff tersimpan di browser. Gagal sinkron ke GSheet: ' + (res?.error || 'Konek`
  - [`app.js:4547`](app.js#L4547) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mengunci undian playoff.', 'error');`
  - [`app.js:4551`](app.js#L4551) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');`
  - [`app.js:4560`](app.js#L4560) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('🔒 Undian Playoff berhasil dikunci! Susunan bagan telah diamankan.', 'success');`
  - [`app.js:4566`](app.js#L4566) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('🔓 Kunci undian Playoff dibuka. Bagan dapat diacak kembali.', 'info');`
  - [`app.js:4588`](app.js#L4588) — di dalam fungsi `openPlayoffScoreModal()`
    `showToast('Data pertandingan playoff tidak ditemukan.', 'error');`
  - [`app.js:4769`](app.js#L4769) — di dalam fungsi `savePlayoffModalScore()`
    `showToast('⚠️ Pertandingan Playoff tidak boleh berakhir imbang! Salah satu tim harus unggul skor.', `
  - [`app.js:4788`](app.js#L4788) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mencatat skor playoff.', 'error');`
  - [`app.js:4793`](app.js#L4793) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Pertandingan playoff tidak ditemukan.', 'error');`
  - [`app.js:4797`](app.js#L4797) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('⚠️ Pertandingan ini belum dapat diinput skor karena kedua tim belum ditentukan dari babak`
  - [`app.js:4804`](app.js#L4804) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Skor tidak valid. Masukkan angka non-negatif.', 'error');`
  - [`app.js:4808`](app.js#L4808) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Pertandingan playoff tidak boleh imbang.', 'warning');`
  - [`app.js:4823`](app.js#L4823) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('✅ Skor berhasil dicatat: ${escapeHtml(match.teamA)} (${scoreA}) vs (${scoreB}) ${escapeHt`
  - [`app.js:4843`](app.js#L4843) — di dalam fungsi `resetPlayoffMatchScore()`
    `showToast('Skor pertandingan ${match.matchLabel || ''} telah direset.', 'info');`
  - [`app.js:4850`](app.js#L4850) — di dalam fungsi `onPlayoffTeamClicked()`
    `showToast('⚠️ Pertandingan ini belum dapat diisi skor karena tim lawan belum siap tanding.', 'warnin`
  - [`app.js:4930`](app.js#L4930) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan simulasi pengundian playoff.', 'error')`
  - [`app.js:4936`](app.js#L4936) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('⚠️ Belum ada data grup MLBB. Pastikan pembagian grup sudah dibuat.', 'warning');`
  - [`app.js:5118`](app.js#L5118) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('🏆 Bagan Playoff berhasil diundi dan ditampilkan!', 'success');`
  - [`app.js:5123`](app.js#L5123) — di dalam fungsi `openTestDrawModal()`
    `showToast('Akses ditolak: Hanya panitia yang dapat membuka pusat uji coba undian.', 'error');`
  - [`app.js:5144`](app.js#L5144) — di dalam fungsi `openTestDrawInNewWindow()`
    `showToast('⚠️ Silakan jalankan simulasi undian terlebih dahulu.', 'warning');`
  - [`app.js:5202`](app.js#L5202) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('⚠️ Belum ada tim MLBB yang terverifikasi.', 'warning');`
  - [`app.js:5270`](app.js#L5270) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('🎲 Simulasi pembagian 8 grup berhasil diacak!', 'info');`
  - [`app.js:5287`](app.js#L5287) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mereset pembagian grup & bagan turnamen MLBB.', '`
  - [`app.js:5291`](app.js#L5291) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('🔒 Pembagian grup MLBB sedang dikunci (Lock TM). Harap buka kunci grup terlebih dahulu.',`
  - [`app.js:5296`](app.js#L5296) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('ℹ️ Pembagian grup dan bagan MLBB saat ini sudah dalam keadaan kosong/belum diundi.', 'inf`
  - [`app.js:5554`](app.js#L5554) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('✅ Seluruh bagan turnamen (Grup & Playoff) berhasil disimpan & diperbarui di Google Sheets`
  - [`app.js:5558`](app.js#L5558) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('⚠️ Gagal menyinkronkan bagan ke Google Sheets: ' + (configResult.error || 'Periksa koneks`
  - [`app.js:5564`](app.js#L5564) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('⚠️ Gagal menyimpan ke Google Sheets: ' + err.message, 'error', 5000);`
  - [`app.js:8266`](app.js#L8266) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Playoff (${ctx.format || 'BO3'}) & disinkro`
  - [`app.js:8271`](app.js#L8271) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Match (${ctx.format || 'BO3'}) & disinkronk`
  - [`app.js:8319`](app.js#L8319) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP Playoff telah dihapus & disinkronkan ke GSheet.', 'info');`
  - [`app.js:8324`](app.js#L8324) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP match telah dihapus & disinkronkan ke GSheet (3 baris).', 'info');`
  - [`app.js:9215`](app.js#L9215) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700; ${i`
  - [`app.js:11352`](app.js#L11352) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `showToast(isLocked ? '🏆 Masuk ke Babak Playoff (Undian Terkunci).' : '🎲 Berhasil masuk ke Babak Pl`
  - [`app.js:11700`](app.js#L11700) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-gold" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-wei`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`app.js:1283`](app.js#L1283)
- **Deskripsi:** Helper to format Google Drive image URLs into viewable thumbnail image URLs
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:3014`](app.js#L3014) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3822`](app.js#L3822) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3849`](app.js#L3849) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:4018`](app.js#L4018) — di dalam fungsi `viewRosterDetail()`
    `const formattedTeamLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:4046`](app.js#L4046) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:4136`](app.js#L4136) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:8640`](app.js#L8640) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(car`
  - [`functional_tests.js:94`](functional_tests.js#L94) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

<a id="switchtab"></a>
#### `switchTab(tabId, updateHistory = true)`

- **Definisi:** [`app.js:2896`](app.js#L2896)
- **Deskripsi:** Navigation Tabs
- **Titik Pemanggilan (18 lokasi):**
  - [`index.html:62`](index.html#L62) — Event `onclick`
    `<button id="navBtnHub" class="nav-btn" onclick="switchTab('hub')">🏛️ Hall of Fame & Hub</button>`
  - [`index.html:63`](index.html#L63) — Event `onclick`
    `<button id="navBtnDaftar" class="nav-btn active" onclick="switchTab('daftar')">📝 Pendaftaran</butto`
  - [`index.html:64`](index.html#L64) — Event `onclick`
    `<button id="navBtnPeserta" class="nav-btn" onclick="switchTab('peserta')">👥 Daftar Peserta & Verifi`
  - [`index.html:65`](index.html#L65) — Event `onclick`
    `<button id="navBtnRules" class="nav-btn" onclick="switchTab('rules')">📜 Peraturan (Rules)</button>`
  - [`index.html:66`](index.html#L66) — Event `onclick`
    `<button id="navBtnBaganMlbb" class="nav-btn" onclick="switchTab('bagan-mlbb')">⚔️ Bagan MLBB</button`
  - [`index.html:67`](index.html#L67) — Event `onclick`
    `<button id="navBtnPointsMcgg" class="nav-btn" onclick="switchTab('points-mcgg')">♟️ Poin & Klasemen `
  - [`index.html:68`](index.html#L68) — Event `onclick`
    `<button id="navBtnCommanders" class="nav-btn" onclick="switchTab('commanders')">🎖️ Galeri 40 Komand`
  - [`index.html:728`](index.html#L728) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="border-color: var(--yokke-gold); color: var(--y`
  - [`index.html:791`](index.html#L791) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; b`
  - [`index.html:794`](index.html#L794) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.78rem; padding: 0.35rem 0.75rem; b`
  - [`index.html:1070`](index.html#L1070) — Event `onclick`
    `<button type="button" class="hub-nav-quicklink-btn" onclick="switchTab('bagan-mlbb')">`
  - [`index.html:1073`](index.html#L1073) — Event `onclick`
    `<button type="button" class="hub-nav-quicklink-btn" onclick="switchTab('points-mcgg')">`
  - [`index.html:1076`](index.html#L1076) — Event `onclick`
    `<button type="button" class="hub-nav-quicklink-btn" onclick="switchTab('peserta')">`
  - [`index.html:1079`](index.html#L1079) — Event `onclick`
    `<button type="button" class="hub-nav-quicklink-btn" onclick="switchTab('rules')">`
  - [`app.js:2603`](app.js#L2603) — di dalam fungsi `renderRegistrationUI()`
    `switchTab('hub');`
  - [`app.js:2984`](app.js#L2984) — di dalam fungsi `handleHashNavigation()`
    `switchTab('hub', false);`
  - [`app.js:2989`](app.js#L2989) — di dalam fungsi `handleHashNavigation()`
    `switchTab(rawHash, false);`
  - [`app.js:2992`](app.js#L2992) — di dalam fungsi `handleHashNavigation()`
    `switchTab('hub', false);`
- **Memanggil Fungsi Internal:** [`setMLBBViewMode()`](#setmlbbviewmode), [`setMCGGViewMode()`](#setmcggviewmode), [`renderRules()`](#renderrules), [`fetchRulesFromGoogleDoc()`](#fetchrulesfromgoogledoc), [`updateHubDynamicStats()`](#updatehubdynamicstats), [`renderMCGGCommanderGalleryUI()`](#rendermcggcommandergalleryui)

<a id="escapehtml"></a>
#### `escapeHtml(str)`

- **Definisi:** [`app.js:3051`](app.js#L3051)
- **Deskripsi:** Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dalam HTML DOM.
- **Titik Pemanggilan (97 lokasi):**
  - [`app.js:978`](app.js#L978) — di dalam fungsi `showToast()`
    `<span class="toast-msg">${escapeHtml(msg).replace(/\n/g, '<br>')}</span>`
  - [`app.js:2106`](app.js#L2106) — di dalam fungsi `formatRuleLine()`
    `return '<h4 style="color:var(--yokke-gold); margin:1.35rem 0 0.6rem; font-size:1.05rem; border-botto`
  - [`app.js:2111`](app.js#L2111) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-green); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bo`
  - [`app.js:2116`](app.js#L2116) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-red); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bold`
  - [`app.js:2122`](app.js#L2122) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 2rem; margin-bottom: 0.35rem; line-height: 1.55; display: flex; gap`
  - [`app.js:2128`](app.js#L2128) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 1rem; margin-bottom: 0.4rem; line-height: 1.6; display: flex; gap: `
  - [`app.js:2133`](app.js#L2133) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65; font-weight:500;">${escapeHtml(trimmed)}</`
  - [`app.js:2138`](app.js#L2138) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-left:1.5rem; margin-bottom:0.35rem; line-height:1.55; color:var(--text-mute`
  - [`app.js:2141`](app.js#L2141) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65;">${escapeHtml(trimmed)}</p>';`
  - [`app.js:3099`](app.js#L3099) — di dalam fungsi `handleTeamNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Nama Tim Sudah Terdaftar:</strong> Tim "<strong>${escapeHtml(existi`
  - [`app.js:3132`](app.js#L3132) — di dalam fungsi `handleMcggNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Peserta Sudah Terdaftar:</strong> Pemain "<strong>${escapeHtml(exis`
  - [`app.js:4626`](app.js#L4626) — di dalam fungsi `openPlayoffScoreModal()`
    `titleEl.innerHTML = '<span>⚔️</span> <span>Input Skor: ${escapeHtml(match.matchLabel || match.phaseN`
  - [`app.js:4674`](app.js#L4674) — di dalam fungsi `openPlayoffScoreModal()`
    `const heroStr = match.mvpHero ? ' (${escapeHtml(match.mvpHero)})' : '';`
  - [`app.js:4675`](app.js#L4675) — di dalam fungsi `openPlayoffScoreModal()`
    `mvpLabel.innerHTML = '⭐ <strong>${escapeHtml(match.mvpPlayer || match.gameMvps[0]?.player)}</strong>`
  - [`app.js:4756`](app.js#L4756) — di dalam fungsi `updatePlayoffModalWinnerPreview()`
    `banner.innerHTML = '🏆 <strong>Pemenang:</strong> ${escapeHtml(tA)} (${scoreA} - ${scoreB}) melaju k`
  - [`app.js:4761`](app.js#L4761) — di dalam fungsi `updatePlayoffModalWinnerPreview()`
    `banner.innerHTML = '🏆 <strong>Pemenang:</strong> ${escapeHtml(tB)} (${scoreB} - ${scoreA}) melaju k`
  - [`app.js:4823`](app.js#L4823) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('✅ Skor berhasil dicatat: ${escapeHtml(match.teamA)} (${scoreA}) vs (${scoreB}) ${escapeHt`
  - [`app.js:4888`](app.js#L4888) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `${escapeHtml(m.teamA || '-')}`
  - [`app.js:4896`](app.js#L4896) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `${escapeHtml(m.teamB || '-')}`
  - [`app.js:4905`](app.js#L4905) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `⭐ MVP: ${escapeHtml(m.mvpPlayer || m.gameMvps[0]?.player)}${m.mvpHero ? ' <span style="font-weight:4`
  - [`app.js:5001`](app.js#L5001) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🏠 ${escapeHtml(mUB.teamA)}</span>`
  - [`app.js:5002`](app.js#L5002) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoA.group || '')} (Juara 1)<`
  - [`app.js:5006`](app.js#L5006) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#cbd5e1;">⚔️ ${escapeHtml(mUB.teamB)}</span>`
  - [`app.js:5007`](app.js#L5007) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-cyan);">${escapeHtml(infoB.group || '')} (Juara 2)<`
  - [`app.js:5027`](app.js#L5027) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🎯 ${escapeHtml(mLB.teamB)}</span>`
  - [`app.js:5028`](app.js#L5028) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoC.group || '')} (Juara 3)<`
  - [`app.js:5035`](app.js#L5035) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `Pemenang Upper ➔ UB QF | Gugur ➔ LB R1 vs ${escapeHtml(mLB.teamB)}`
  - [`app.js:5051`](app.js#L5051) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong>${escapeHtml(m.teamA)}</strong> (${infoA.group}) vs <strong>${escapeHtml(m.teamB)}</strong> `
  - [`app.js:5067`](app.js#L5067) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong style="color:var(--yokke-cyan);">${gName}:</strong> [1] ${escapeHtml(j1)} | [2] ${escapeHtml`
  - [`app.js:5249`](app.js#L5249) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<span style="font-weight:600;">${escapeHtml(tName)}</span>`
  - [`app.js:5251`](app.js#L5251) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `${dept ? '<span style="font-size:0.68rem; color:var(--text-muted); display:block;">🏢 ${escapeHtml(d`
  - [`app.js:6915`](app.js#L6915) — di dalam fungsi `renderGroupStageUI()`
    `<span>🛡️ ${escapeHtml(gName)}</span>`
  - [`app.js:6954`](app.js#L6954) — di dalam fungsi `renderGroupStageUI()`
    `<span>${escapeHtml(t.name)}</span>`
  - [`app.js:6997`](app.js#L6997) — di dalam fungsi `renderGroupStageUI()`
    `⚠️ TIE-BREAKER MATCH DIPERLUKAN (${escapeHtml(tb.group)})`
  - [`app.js:7000`](app.js#L7000) — di dalam fungsi `renderGroupStageUI()`
    `Peringkat 2 & 3 grup <strong>${escapeHtml(tb.group)}</strong> memiliki poin sama (<strong>${escapeHt`
  - [`app.js:7007`](app.js#L7007) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:7008`](app.js#L7008) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:7910`](app.js#L7910) — di dalam fungsi `initAndShowMvpModal()`
    `tabA.innerHTML = '${escapeHtml(ctx.teamA)} ${isWinA ? '🏆' : ''}';`
  - [`app.js:7911`](app.js#L7911) — di dalam fungsi `initAndShowMvpModal()`
    `tabB.innerHTML = '${escapeHtml(ctx.teamB)} ${isWinB ? '🏆' : ''}';`
  - [`app.js:8077`](app.js#L8077) — di dalam fungsi `renderMvpRosterList()`
    `Tidak ada data roster terdaftar untuk tim ${escapeHtml(teamName)}. Anda dapat mengetik manual nama p`
  - [`app.js:8110`](app.js#L8110) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(ign || realName)}`
  - [`app.js:8113`](app.js#L8113) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(realName)}`
  - [`app.js:8116`](app.js#L8116) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(role)}`
  - [`app.js:8123`](app.js#L8123) — di dalam fungsi `renderMvpRosterList()`
    `html = '<div style="grid-column:1/-1; padding:0.75rem; text-align:center; color:var(--text-muted); f`
  - [`app.js:8424`](app.js#L8424) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = g.hero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(g.hero)})</spa`
  - [`app.js:8425`](app.js#L8425) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = g.team ? ' <span style="color:var(--yokke-cyan);font-size:0.65rem;font-weight:600;">`
  - [`app.js:8426`](app.js#L8426) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `return '<span class="badge" style="background:rgba(255,183,3,0.12);color:var(--yokke-gold);border:1p`
  - [`app.js:8432`](app.js#L8432) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = m.mvpHero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(m.mvpHero)}`
  - [`app.js:8433`](app.js#L8433) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = m.mvpTeam ? '<span style="font-size:0.68rem;color:var(--yokke-cyan);margin-left:auto`
  - [`app.js:8436`](app.js#L8436) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `<span>⭐ MVP: <strong style="color:#fff;">${escapeHtml(m.mvpPlayer)}</strong>${heroTag}</span>`
  - [`app.js:8586`](app.js#L8586) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamA)}: <strong>${countA}/${rosterA.length}</strong> Terverifikasi ${countA >= 5 ?`
  - [`app.js:8589`](app.js#L8589) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamB)}: <strong>${countB}/${rosterB.length}</strong> Terverifikasi ${countB >= 5 ?`
  - [`app.js:8594`](app.js#L8594) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8595`](app.js#L8595) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamA)}`
  - [`app.js:8597`](app.js#L8597) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8598`](app.js#L8598) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamB)}`
  - [`app.js:8612`](app.js#L8612) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<span>⚔️</span> <span>${escapeHtml(teamName)}</span>`
  - [`app.js:8662`](app.js#L8662) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.nickname || m.name || '-')}`
  - [`app.js:8674`](app.js#L8674) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.name || '-')} • <code style="font-size:0.7rem;">NIP: ${escapeHtml(nipLabel)}</code>`
  - [`app.js:8677`](app.js#L8677) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `ID Game: <strong style="color:#fff;">${escapeHtml(m.gameId || '-')}</strong>`
  - [`app.js:9036`](app.js#L9036) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>🛡️</span> <span>Jadwal ${escapeHtml(gName)} • ${dayLabel}</span>`
  - [`app.js:9050`](app.js#L9050) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>☕</span> <span><strong>Tim Istirahat Hari ${mlbbActiveDayFilter} (${MLBB_SCHEDULE_DATES[mlbbAc`
  - [`app.js:9057`](app.js#L9057) — di dalam fungsi `renderGroupFixturesUI()`
    `html += '<p style="color:var(--text-muted);font-size:0.85rem;padding:0.4rem 0;">Tidak ada pertanding`
  - [`app.js:9099`](app.js#L9099) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:9106`](app.js#L9106) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamB)}`
  - [`app.js:10119`](app.js#L10119) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; over`
  - [`app.js:10120`](app.js#L10120) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `🎮 ${escapeHtml(item.playerNick)}`
  - [`app.js:10122`](app.js#L10122) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text`
  - [`app.js:10123`](app.js#L10123) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `👤 ${escapeHtml(item.playerName)}`
  - [`app.js:10833`](app.js#L10833) — di dalam fungsi `renderLobbyRowsHtml()`
    `<span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? escapeHtm`
  - [`app.js:10836`](app.js#L10836) — di dalam fungsi `renderLobbyRowsHtml()`
    `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? '<span>👤 ${escapeHtml(p.name)}</spa`
  - [`app.js:10837`](app.js#L10837) — di dalam fungsi `renderLobbyRowsHtml()`
    `${p.gameId && p.gameId !== '-' ? '${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' `
  - [`app.js:11441`](app.js#L11441) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `${escapeHtml(effectiveTeamA)}`
  - [`app.js:11449`](app.js#L11449) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `${escapeHtml(effectiveTeamB)}`
  - [`app.js:11458`](app.js#L11458) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `⭐ MVP: ${escapeHtml(m.mvpPlayer || m.gameMvps[0]?.player)}${m.mvpHero ? ' <span style="font-weight:4`
  - [`app.js:11893`](app.js#L11893) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<span>⚡</span> <span style="font-size:0.78rem;">${escapeHtml(matchTitle)}</span>`
  - [`app.js:12037`](app.js#L12037) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<span>🛡️</span> <span>Klasemen & Pertandingan: ${escapeHtml(gName)}</span>`
  - [`app.js:12055`](app.js#L12055) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0;font-size:0.95rem;color:var(--yokke-gold);">📊 Klasemen ${isGroupAllDone ? 'Akhi`
  - [`app.js:12105`](app.js#L12105) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `) : '<span style="color:var(--text-muted);font-style:italic;font-size:0.75rem;" title="Status kelolo`
  - [`app.js:12110`](app.js#L12110) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<td style="font-weight:700;color:#fff;">${escapeHtml(t.name)}</td>`
  - [`app.js:12131`](app.js#L12131) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3`
  - [`app.js:12170`](app.js#L12170) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:12181`](app.js#L12181) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`app.js:12184`](app.js#L12184) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:12185`](app.js#L12185) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`app.js:12186`](app.js#L12186) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
  - [`app.js:12192`](app.js#L12192) — cakupan global / event handler
    `${isWinnerB ? '🏆 ' : ''}${escapeHtml(f.teamB)}`
  - [`app.js:12201`](app.js#L12201) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
  - [`app.js:12234`](app.js#L12234) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamA)} <span style="color:var(--yokke-gold); font-size:0.78rem;">(Home)</s`
  - [`app.js:12236`](app.js#L12236) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamB)} <span style="color:var(--text-muted); font-size:0.78rem;">(Away)</s`
  - [`app.js:12238`](app.js#L12238) — cakupan global / event handler
    `${actualMatch.winner ? '<div style="font-size:0.8rem; color:var(--yokke-green); font-weight:700; mar`
  - [`app.js:12239`](app.js#L12239) — cakupan global / event handler
    `${actualMatch.mvpPlayer ? '<div style="font-size:0.8rem; color:var(--yokke-gold); font-weight:700; m`
  - [`app.js:12263`](app.js#L12263) — cakupan global / event handler
    `<span>⭐</span> <span>${actualMatch.mvpPlayer ? 'MVP: ${escapeHtml(actualMatch.mvpPlayer)}' : 'Set MV`
  - [`app.js:12352`](app.js#L12352) — cakupan global / event handler
    `<div style="font-size:0.9rem;font-weight:700;color:var(--yokke-cyan);">${escapeHtml((groupPlayoffMat`
  - [`app.js:12356`](app.js#L12356) — cakupan global / event handler
    `<div style="font-size:0.9rem;font-weight:700;color:var(--yokke-gold);">${escapeHtml((groupPlayoffMat`
  - [`app.js:12361`](app.js#L12361) — cakupan global / event handler
    `👑 JUARA 1 YOKKE SQUAD 2026: ${escapeHtml(groupPlayoffMatches[5][0].winner)} (${groupPlayoffMatches[`
  - [`app.js:12366`](app.js#L12366) — cakupan global / event handler
    `⭐ MVP GRAND FINAL: ${escapeHtml(groupPlayoffMatches[5][0].mvpPlayer)}${groupPlayoffMatches[5][0].mvp`

<a id="filterlist"></a>
#### `filterList(cat)`

- **Definisi:** [`app.js:3755`](app.js#L3755)
- **Deskripsi:** Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/MCGG), dan status verifikasi.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1359`](index.html#L1359) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('ALL')">Semua</button>`
  - [`index.html:1360`](index.html#L1360) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('MLBB')">MLBB (<span id="countMLBB">0</span> Tim`
  - [`index.html:1361`](index.html#L1361) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('MCGG')">MCGG (<span id="countMCGG">0</span> Pem`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants)

<a id="changetournamentformat"></a>
#### `changeTournamentFormat()`

- **Definisi:** [`app.js:4251`](app.js#L4251)
- **Deskripsi:** Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP_2, GROUP_4, KNOCKOUT).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1485`](index.html#L1485) — Event `onchange`
    `<select id="bracketFormat" onchange="changeTournamentFormat()" style="padding: 0.5rem 0.8rem; font-s`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermvpgametabs"></a>
#### `renderMvpGameTabs()`

- **Definisi:** [`app.js:7936`](app.js#L7936)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7915`](app.js#L7915) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpGameTabs();`
  - [`app.js:8021`](app.js#L8021) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpGameTabs();`
  - [`app.js:8161`](app.js#L8161) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpGameTabs();`
- **Memanggil Fungsi Internal:** [`switchMvpGameTab()`](#switchmvpgametab)

<a id="switchmvpgametab"></a>
#### `switchMvpGameTab(targetGame)`

- **Definisi:** [`app.js:7968`](app.js#L7968)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7959`](app.js#L7959) — di dalam fungsi `renderMvpGameTabs()`
    `<button type="button" class="${pillClass}" onclick="switchMvpGameTab(${g})">`
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="switchmvpteamtab"></a>
#### `switchMvpTeamTab(teamKey)`

- **Definisi:** [`app.js:8031`](app.js#L8031)
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:2009`](index.html#L2009) — Event `onclick`
    `<button type="button" id="mvpTabTeamA" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`index.html:2012`](index.html#L2012) — Event `onclick`
    `<button type="button" id="mvpTabTeamB" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`app.js:7931`](app.js#L7931) — di dalam fungsi `initAndShowMvpModal()`
    `switchMvpTeamTab(ctx.activeTeam);`
  - [`app.js:8023`](app.js#L8023) — di dalam fungsi `switchMvpGameTab()`
    `switchMvpTeamTab(ctx.activeTeam);`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="formatmatchmvpdisplayhtml"></a>
#### `formatMatchMvpDisplayHtml(m)`

- **Definisi:** [`app.js:8418`](app.js#L8418)
- **Deskripsi:** Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9111`](app.js#L9111) — di dalam fungsi `renderGroupFixturesUI()`
    `${formatMatchMvpDisplayHtml(f)}`
  - [`app.js:12196`](app.js#L12196) — cakupan global / event handler
    `${formatMatchMvpDisplayHtml(f)}`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="setdrawtargetandscroll"></a>
#### `setDrawTargetAndScroll(lobbyKey)`

- **Definisi:** [`app.js:10432`](app.js#L10432)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`changeCommanderDrawTarget()`](#changecommanderdrawtarget), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="sanitizenip"></a>
#### `sanitizeNip(nip)`

- **Definisi:** [`functional_tests.js:85`](functional_tests.js#L85)
- **Titik Pemanggilan (3 lokasi):**
  - [`functional_tests.js:88`](functional_tests.js#L88) — pada skenario pengujian
    `assert.strictEqual(sanitizeNip('EMP-2399140486'), 'emp2399140486');`
  - [`functional_tests.js:89`](functional_tests.js#L89) — pada skenario pengujian
    `assert.strictEqual(sanitizeNip('2399-140486'), '2399140486');`
  - [`functional_tests.js:90`](functional_tests.js#L90) — pada skenario pengujian
    `assert.strictEqual(sanitizeNip(' 2399140486 '), '2399140486');`

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`functional_tests.js:94`](functional_tests.js#L94)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:1283`](app.js#L1283) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`app.js:3014`](app.js#L3014) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3822`](app.js#L3822) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3849`](app.js#L3849) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:4018`](app.js#L4018) — di dalam fungsi `viewRosterDetail()`
    `const formattedTeamLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:4046`](app.js#L4046) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:4136`](app.js#L4136) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:8640`](app.js#L8640) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(car`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

---

### 🛡️ Autentikasi & Hak Akses Panitia

<a id="confirmresetbaganwithpin"></a>
#### `confirmResetBaganWithPin()`

- **Definisi:** [`app.js:1017`](app.js#L1017)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1976`](index.html#L1976) — Event `onclick`
    `<button class="btn btn-danger-sm" style="padding: 0.5rem 1.1rem; font-size: 0.85rem;" onclick="confi`
- **Memanggil Fungsi Internal:** [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`showToast()`](#showtoast), [`closeResetBaganModal()`](#closeresetbaganmodal), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="openloginmodal"></a>
#### `openLoginModal()`

- **Definisi:** [`app.js:2440`](app.js#L2440)
- **Deskripsi:** Auth functions
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:45`](index.html#L45) — Event `onclick`
    `<button id="btnLoginPanitia" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8`

<a id="closeloginmodal"></a>
#### `closeLoginModal()`

- **Definisi:** [`app.js:2452`](app.js#L2452)
- **Deskripsi:** Menutup modal dialog login PIN panitia.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1916`](index.html#L1916) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeLoginModal()">Batal</button>`
  - [`app.js:2500`](app.js#L2500) — di dalam fungsi `verifyAdminPin()`
    `closeLoginModal();`

<a id="verifyadminpin"></a>
#### `verifyAdminPin()`

- **Definisi:** [`app.js:2460`](app.js#L2460)
- **Deskripsi:** Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif penuh.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1913`](index.html#L1913) — Inline Script / Markup
    `<input type="password" id="adminPinInput" placeholder="Masukkan PIN Panitia" onkeydown="if(event.key`
  - [`index.html:1917`](index.html#L1917) — Event `onclick`
    `<button id="btnLoginSubmit" class="btn btn-primary" onclick="verifyAdminPin()">Masuk</button>`
- **Memanggil Fungsi Internal:** [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`closeLoginModal()`](#closeloginmodal), [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`showToast()`](#showtoast)

<a id="logoutadmin"></a>
#### `logoutAdmin()`

- **Definisi:** [`app.js:2540`](app.js#L2540)
- **Deskripsi:** Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (read-only).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:46`](index.html#L46) — Event `onclick`
    `<button id="btnLogoutPanitia" class="btn btn-outline" style="display: none; padding: 0.25rem 0.75rem`
- **Memanggil Fungsi Internal:** [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`showToast()`](#showtoast)

<a id="updateauthui"></a>
#### `updateAuthUI()`

- **Definisi:** [`app.js:2704`](app.js#L2704)
- **Deskripsi:** Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock, dan form interaktif.
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:1088`](app.js#L1088) — di dalam fungsi `confirmResetBaganWithPin()`
    `updateAuthUI();`
  - [`app.js:1679`](app.js#L1679) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateAuthUI();`
  - [`app.js:2085`](app.js#L2085) — di dalam fungsi `saveState()`
    `updateAuthUI();`
  - [`app.js:2501`](app.js#L2501) — di dalam fungsi `verifyAdminPin()`
    `updateAuthUI();`
  - [`app.js:2548`](app.js#L2548) — di dalam fungsi `logoutAdmin()`
    `updateAuthUI();`
  - [`app.js:2654`](app.js#L2654) — di dalam fungsi `toggleRegistrationStatus()`
    `updateAuthUI();`
  - [`app.js:2699`](app.js#L2699) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `updateAuthUI();`
  - [`app.js:4339`](app.js#L4339) — di dalam fungsi `toggleLockMLBBGroup()`
    `updateAuthUI();`
  - [`app.js:4423`](app.js#L4423) — di dalam fungsi `proceedToMLBBStage2()`
    `updateAuthUI();`
  - [`app.js:4524`](app.js#L4524) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `updateAuthUI();`
  - [`app.js:4570`](app.js#L4570) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `updateAuthUI();`
  - [`app.js:4955`](app.js#L4955) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `updateAuthUI();`
  - [`app.js:5280`](app.js#L5280) — di dalam fungsi `resetMLBBToStage1()`
    `updateAuthUI();`
  - [`app.js:5319`](app.js#L5319) — di dalam fungsi `toggleLockMCGGLobbies()`
    `updateAuthUI();`
  - [`app.js:11182`](app.js#L11182) — cakupan global / event handler
    `updateAuthUI();`
  - [`app.js:11346`](app.js#L11346) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `updateAuthUI();`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui)

---

### 📋 Regulasi Turnamen (Rules Editor)

<a id="formatruleline"></a>
#### `formatRuleLine(l)`

- **Definisi:** [`app.js:2099`](app.js#L2099)
- **Deskripsi:** Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="fetchrulesfromgoogledoc"></a>
#### `fetchRulesFromGoogleDoc(silent = false)`

- **Definisi:** [`app.js:2145`](app.js#L2145)
- **Deskripsi:** Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: tab=t.0 & MCGG: tab=t.ji56ljhdhzkr)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1409`](index.html#L1409) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`app.js:2951`](app.js#L2951) — di dalam fungsi `switchTab()`
    `fetchRulesFromGoogleDoc(true);`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`showToast()`](#showtoast)

<a id="renderrules"></a>
#### `renderRules()`

- **Definisi:** [`app.js:2203`](app.js#L2203)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:1617`](app.js#L1617) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRules();`
  - [`app.js:2182`](app.js#L2182) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `renderRules();`
  - [`app.js:2236`](app.js#L2236) — di dalam fungsi `saveCustomRules()`
    `renderRules();`
  - [`app.js:2256`](app.js#L2256) — di dalam fungsi `resetRulesToDefault()`
    `renderRules();`
  - [`app.js:2950`](app.js#L2950) — di dalam fungsi `switchTab()`
    `renderRules();`
  - [`app.js:11181`](app.js#L11181) — cakupan global / event handler
    `renderRules();`

<a id="toggleeditrules"></a>
#### `toggleEditRules()`

- **Definisi:** [`app.js:2217`](app.js#L2217)
- **Deskripsi:** Membuka/menutup form editor peraturan turnamen khusus panitia.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1419`](index.html#L1419) — Event `onclick`
    `<button class="btn btn-gold" id="btnToggleEditRules" style="font-size: 0.8rem; padding: 0.4rem 0.8re`
  - [`index.html:1453`](index.html#L1453) — Event `onclick`
    `<button class="btn btn-outline" onclick="toggleEditRules()">Batal</button>`
  - [`app.js:2237`](app.js#L2237) — di dalam fungsi `saveCustomRules()`
    `toggleEditRules();`

<a id="savecustomrules"></a>
#### `saveCustomRules()`

- **Definisi:** [`app.js:2223`](app.js#L2223)
- **Deskripsi:** Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Google Sheets.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1452`](index.html#L1452) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveCustomRules()">💾 Simpan Peraturan</button>`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`toggleEditRules()`](#toggleeditrules), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="resetrulestodefault"></a>
#### `resetRulesToDefault()`

- **Definisi:** [`app.js:2251`](app.js#L2251)
- **Deskripsi:** Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1420`](index.html#L1420) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetRules" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules)

---

### 🗄️ Google Sheets Schema & Master Data

<a id="gettargetspreadsheet"></a>
#### `getTargetSpreadsheet()`

- **Definisi:** [`google_apps_script.js:38`](google_apps_script.js#L38)
- **Deskripsi:** Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet berdasarkan TARGET_SPREADSHEET_ID untuk testing/lokal, atau fallback ke active spreadsheet jika container-bound. /
- **Titik Pemanggilan (6 lokasi):**
  - [`google_apps_script.js:662`](google_apps_script.js#L662) — di dalam fungsi `getInitialData()`
    `if (!ss) ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1373`](google_apps_script.js#L1373) — di dalam fungsi `doGet()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1428`](google_apps_script.js#L1428) — di dalam fungsi `doPost()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:2761`](google_apps_script.js#L2761) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:2794`](google_apps_script.js#L2794) — di dalam fungsi `countMVP()`
    `var ss = getTargetSpreadsheet();`
  - [`functional_tests.js:459`](functional_tests.js#L459) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getTargetSpreadsheet('), 'Harus memiliki fungsi getTargetSpreadshe`

<a id="ensurerelationalsheetsexist"></a>
#### `ensureRelationalSheetsExist(ss)`

- **Definisi:** [`google_apps_script.js:313`](google_apps_script.js#L313)
- **Deskripsi:** Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Parent Tim) 2. 'MLBB - Peserta' (Child Roster Anggota) 3. 'Pendaftaran MCGG' (Pemain Solo) /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:1429`](google_apps_script.js#L1429) — di dalam fungsi `doPost()`
    `var sheets = ensureRelationalSheetsExist(ss);`
  - [`functional_tests.js:460`](functional_tests.js#L460) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function ensureRelationalSheetsExist('), 'Harus memiliki fungsi ensureRelat`

<a id="getmlbbtimlisting"></a>
#### `getMlbbTimListing(ss)`

- **Definisi:** [`google_apps_script.js:361`](google_apps_script.js#L361)
- **Deskripsi:** Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' Aturan: - Deduplikasi berdasarkan 'Nama Tim' (case-insensitive & trimmed). - Prioritas: utamakan baris yang Status Verifikasi == 'VERIFIED'. Jika status sama, ambil baris paling bawah (terbaru). - Urutkan A-Z berdasarkan Nama Tim. - Simpan rowNumber asli dari Google Sheets untuk referensi update. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:671`](google_apps_script.js#L671) — di dalam fungsi `getInitialData()`
    `var mlbbTimList = getMlbbTimListing(ss);`
  - [`google_apps_script.js:1918`](google_apps_script.js#L1918) — di dalam fungsi `doPost()`
    `var timListing = getMlbbTimListing(ss);`
  - [`functional_tests.js:465`](functional_tests.js#L465) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMlbbTimListing('), 'Harus ada fungsi getMlbbTimListing');`

<a id="getmlbbpesertalisting"></a>
#### `getMlbbPesertaListing(ss)`

- **Definisi:** [`google_apps_script.js:459`](google_apps_script.js#L459)
- **Deskripsi:** Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Peserta' Kolom: Timestamp, Nama Tim, Role, Nama Lengkap, NIP Pegawai, Nickname Game (IGN), Game ID & Server, Status Pegawai, Link ID Card Aturan: - Deduplikasi berdasarkan NIP Pegawai (jika NIP kosong/-, gunakan fallback key Nama Tim + Role). - Nickname Game (IGN) diambil langsung utuh dari cell (jangan pernah di-split dengan koma!). - Simpan rowNumber asli masing-masing peserta. /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:672`](google_apps_script.js#L672) — di dalam fungsi `getInitialData()`
    `var mlbbPesertaList = getMlbbPesertaListing(ss);`
  - [`functional_tests.js:466`](functional_tests.js#L466) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMlbbPesertaListing('), 'Harus ada fungsi getMlbbPesertaListing'`

<a id="getmcgglisting"></a>
#### `getMcggListing(ss)`

- **Definisi:** [`google_apps_script.js:527`](google_apps_script.js#L527)
- **Deskripsi:** Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan: - Deduplikasi berdasarkan NIP Pegawai (prioritaskan VERIFIED, atau baris terbaru jika status sama). - Urutkan A-Z berdasarkan Nama Lengkap Pemain. - Simpan rowNumber asli. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:802`](google_apps_script.js#L802) — di dalam fungsi `getInitialData()`
    `var mcggList = getMcggListing(ss);`
  - [`google_apps_script.js:2101`](google_apps_script.js#L2101) — di dalam fungsi `doPost()`
    `var mcggListing = getMcggListing(ss);`
  - [`functional_tests.js:467`](functional_tests.js#L467) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMcggListing('), 'Harus ada fungsi getMcggListing');`

<a id="getorcreatesheet"></a>
#### `getOrCreateSheet(ss, sheetName)`

- **Definisi:** [`google_apps_script.js:2204`](google_apps_script.js#L2204)
- **Deskripsi:** Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncdedicatedtournamentsheets"></a>
#### `syncDedicatedTournamentSheets(ss, payload)`

- **Definisi:** [`google_apps_script.js:2295`](google_apps_script.js#L2295)
- **Deskripsi:** Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah Dipanggil otomatis saat action === 'SAVE_CONFIG' atau 'CREATE_TOURNAMENT_SHEETS' /
- **Titik Pemanggilan (8 lokasi):**
  - [`google_apps_script.js:1557`](google_apps_script.js#L1557) — di dalam fungsi `doPost()`
    `var syncMetrics = syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1589`](google_apps_script.js#L1589) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1689`](google_apps_script.js#L1689) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:2749`](google_apps_script.js#L2749) — di dalam fungsi `syncListBagan()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData, mcggLobbies: mcggData });`
  - [`google_apps_script.js:2753`](google_apps_script.js#L2753) — di dalam fungsi `syncListPoint()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData });`
  - [`google_apps_script.js:2757`](google_apps_script.js#L2757) — di dalam fungsi `syncListPointAndCommanderMCGG()`
    `return syncDedicatedTournamentSheets(ss, { mcggLobbies: mcggData });`
  - [`google_apps_script.js:2784`](google_apps_script.js#L2784) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `syncDedicatedTournamentSheets(ss, payload);`
  - [`functional_tests.js:783`](functional_tests.js#L783) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function syncDedicatedTournamentSheets('), 'Harus memiliki fungsi syncDedic`
- **Memanggil Fungsi Internal:** [`safeBatchResizeColumns()`](#safebatchresizecolumns), [`syncVersionsToVercel()`](#syncversionstovercel)

<a id="createorupdatealltournamentsheets"></a>
#### `createOrUpdateAllTournamentSheets(groupStageData, mcggLobbies)`

- **Definisi:** [`google_apps_script.js:2760`](google_apps_script.js#L2760)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:117`](functional_tests.js#L117) — pada skenario pengujian
    `assert(gasCode.includes('function createOrUpdateAllTournamentSheets('), 'Harus memiliki fungsi creat`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

---

### ⚙️ Backend Apps Script Utility

<a id="safesetsharing"></a>
#### `safeSetSharing(driveItem)`

- **Definisi:** [`google_apps_script.js:58`](google_apps_script.js#L58)
- **Deskripsi:** Mengatur permission sharing secara aman. Menghindari error 'Access denied: DriveApp' jika domain Google Workspace membatasi sharing publik (ANYONE_WITH_LINK). /
- **Titik Pemanggilan (6 lokasi):**
  - [`google_apps_script.js:94`](google_apps_script.js#L94) — di dalam fungsi `getOrCreateUploadFolder()`
    `safeSetSharing(folder);`
  - [`google_apps_script.js:135`](google_apps_script.js#L135) — di dalam fungsi `testDriveAuth()`
    `safeSetSharing(testFile);`
  - [`google_apps_script.js:160`](google_apps_script.js#L160) — di dalam fungsi `getOrCreateSubFolder()`
    `safeSetSharing(sub);`
  - [`google_apps_script.js:174`](google_apps_script.js#L174) — di dalam fungsi `getOrCreateSubFolder()`
    `safeSetSharing(sub);`
  - [`google_apps_script.js:233`](google_apps_script.js#L233) — di dalam fungsi `relinkExistingFailedIDCards()`
    `safeSetSharing(f);`
  - [`google_apps_script.js:1479`](google_apps_script.js#L1479) — di dalam fungsi `doPost()`
    `safeSetSharing(file);`

<a id="getorcreateuploadfolder"></a>
#### `getOrCreateUploadFolder()`

- **Definisi:** [`google_apps_script.js:76`](google_apps_script.js#L76)
- **Deskripsi:** Mendapatkan atau membuat folder upload utama secara andal. Jika TARGET_FOLDER_ID tidak dapat diakses atau bukan milik akun ini, otomatis beralih membuat folder di My Drive (Root) milik akun panitia. /
- **Titik Pemanggilan (4 lokasi):**
  - [`google_apps_script.js:123`](google_apps_script.js#L123) — di dalam fungsi `testDriveAuth()`
    `var uploadFolder = getOrCreateUploadFolder();`
  - [`google_apps_script.js:151`](google_apps_script.js#L151) — di dalam fungsi `getOrCreateSubFolder()`
    `var target = parentFolder || getOrCreateUploadFolder();`
  - [`google_apps_script.js:197`](google_apps_script.js#L197) — di dalam fungsi `relinkExistingFailedIDCards()`
    `var mainFolder = getOrCreateUploadFolder();`
  - [`google_apps_script.js:1466`](google_apps_script.js#L1466) — di dalam fungsi `doPost()`
    `var mainFolder = getOrCreateUploadFolder();`
- **Memanggil Fungsi Internal:** [`safeSetSharing()`](#safesetsharing)

<a id="testdriveauth"></a>
#### `testDriveAuth()`

- **Definisi:** [`google_apps_script.js:115`](google_apps_script.js#L115)
- **Deskripsi:** FUNGSI UJI OTORISASI GOOGLE DRIVE & SPREADSHEET PENTING: Pilih fungsi 'testDriveAuth' di dropdown toolbar atas Google Apps Script, lalu klik tombol 'Run' (Jalankan). Jika muncul popup 'Authorization Required' (Izin Diperlukan): 1. Klik 'Review Permissions' (Tinjau Izin). 2. Pilih akun Google pemilik spreadsheet. 3. Klik 'Advanced' (Lanjutan) -> 'Go to Yokke Tournament Script (unsafe)'. 4. Klik 'Allow' (Izinkan). /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing)

<a id="getorcreatesubfolder"></a>
#### `getOrCreateSubFolder(parentFolder, subFolderName)`

- **Definisi:** [`google_apps_script.js:150`](google_apps_script.js#L150)
- **Deskripsi:** Mendapatkan atau membuat subfolder tim/kategori secara andal. /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:1907`](google_apps_script.js#L1907) — di dalam fungsi `doPost()`
    `var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);`
  - [`google_apps_script.js:2087`](google_apps_script.js#L2087) — di dalam fungsi `doPost()`
    `var mcggFolder = getOrCreateSubFolder(mainFolder, mcggFolderName);`
- **Memanggil Fungsi Internal:** [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing)

<a id="relinkexistingfailedidcards"></a>
#### `relinkExistingFailedIDCards()`

- **Definisi:** [`google_apps_script.js:194`](google_apps_script.js#L194)
- **Deskripsi:** FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ini jika Anda melihat tulisan 'Link ID Card: Gagal: Exception: Access denied: DriveApp.' di spreadsheet. Fungsi ini akan: 1. Memeriksa Google Drive apakah berkas foto pemain sudah ada. 2. Jika ada, mengganti teks gagal menjadi link Google Drive yang benar. 3. Jika berkas belum ada, membersihkan teks gagal agar rapi. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing)

<a id="getinitialdata"></a>
#### `getInitialData(ss)`

- **Definisi:** [`google_apps_script.js:661`](google_apps_script.js#L661)
- **Deskripsi:** 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE
- **Titik Pemanggilan (1 lokasi):**
  - [`google_apps_script.js:1374`](google_apps_script.js#L1374) — di dalam fungsi `doGet()`
    `var result = getInitialData(ss);`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMlbbPesertaListing()`](#getmlbbpesertalisting), [`getMcggListing()`](#getmcgglisting), [`helperParseRank()`](#helperparserank)

<a id="helperparserank"></a>
#### `helperParseRank(val)`

- **Definisi:** [`google_apps_script.js:901`](google_apps_script.js#L901)
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:956`](google_apps_script.js#L956) — di dalam fungsi `getInitialData()`
    `r1: helperParseRank(mRow[6]),`
  - [`google_apps_script.js:958`](google_apps_script.js#L958) — di dalam fungsi `getInitialData()`
    `r2: helperParseRank(mRow[8]),`
  - [`google_apps_script.js:960`](google_apps_script.js#L960) — di dalam fungsi `getInitialData()`
    `r3: helperParseRank(mRow[10]),`

<a id="getvalidadminpins"></a>
#### `getValidAdminPins(ss)`

- **Definisi:** [`google_apps_script.js:1386`](google_apps_script.js#L1386)
- **Deskripsi:** 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:1435`](google_apps_script.js#L1435) — di dalam fungsi `doPost()`
    `var validPins = getValidAdminPins(ss);`
  - [`google_apps_script.js:1455`](google_apps_script.js#L1455) — di dalam fungsi `doPost()`
    `var validPins = getValidAdminPins(ss);`

<a id="savebase64image"></a>
#### `saveBase64Image(base64Data, fileName, targetFolder)`

- **Definisi:** [`google_apps_script.js:1468`](google_apps_script.js#L1468)
- **Titik Pemanggilan (4 lokasi):**
  - [`google_apps_script.js:1912`](google_apps_script.js#L1912) — di dalam fungsi `doPost()`
    `logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);`
  - [`google_apps_script.js:1959`](google_apps_script.js#L1959) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:2040`](google_apps_script.js#L2040) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:2093`](google_apps_script.js#L2093) — di dalam fungsi `doPost()`
    `mcggIdCardUrl = saveBase64Image(mcggCard, "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", `

<a id="safebatchresizecolumns"></a>
#### `safeBatchResizeColumns(sheet, numCols)`

- **Definisi:** [`google_apps_script.js:2216`](google_apps_script.js#L2216)
- **Deskripsi:** Helper efisien untuk auto-resize banyak kolom dalam 1 panggilan RPC Google Apps Script. Mengurangi waktu eksekusi dari ~45 detik menjadi < 1 detik. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:2421`](google_apps_script.js#L2421) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `safeBatchResizeColumns(sheetMLBBPoint, mlbbPointHeaders.length);`
  - [`google_apps_script.js:2580`](google_apps_script.js#L2580) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `safeBatchResizeColumns(sheetMLBBBagan, mlbbBaganHeaders.length);`
  - [`google_apps_script.js:2640`](google_apps_script.js#L2640) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `safeBatchResizeColumns(sheetMCGG, mcggHeaders.length);`

<a id="onedit"></a>
#### `onEdit(e)`

- **Definisi:** [`google_apps_script.js:2671`](google_apps_script.js#L2671)
- **Deskripsi:** Trigger Otomatis saat sel diedit langsung di Spreadsheet /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`syncVersionsToVercel()`](#syncversionstovercel)

<a id="syncversionstovercel"></a>
#### `syncVersionsToVercel(props)`

- **Definisi:** [`google_apps_script.js:2706`](google_apps_script.js#L2706)
- **Deskripsi:** Helper pengiriman versi ke Vercel Edge Config REST API /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:2660`](google_apps_script.js#L2660) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `syncVersionsToVercel(props);`
  - [`google_apps_script.js:2694`](google_apps_script.js#L2694) — di dalam fungsi `onEdit()`
    `syncVersionsToVercel(props);`

<a id="synclistbagan"></a>
#### `syncListBagan(ss, groupData, mcggData)`

- **Definisi:** [`google_apps_script.js:2748`](google_apps_script.js#L2748)
- **Deskripsi:** Wrapper kompatibilitas untuk pemicu manual / lama /
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:114`](functional_tests.js#L114) — pada skenario pengujian
    `assert(gasCode.includes('function syncListBagan('), 'Harus memiliki fungsi syncListBagan');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpoint"></a>
#### `syncListPoint(ss, groupData)`

- **Definisi:** [`google_apps_script.js:2752`](google_apps_script.js#L2752)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:115`](functional_tests.js#L115) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPoint('), 'Harus memiliki fungsi syncListPoint');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpointandcommandermcgg"></a>
#### `syncListPointAndCommanderMCGG(ss, mcggData)`

- **Definisi:** [`google_apps_script.js:2756`](google_apps_script.js#L2756)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:116`](functional_tests.js#L116) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPointAndCommanderMCGG('), 'Harus memiliki fungsi syncListP`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="countmvp"></a>
#### `countMVP()`

- **Definisi:** [`google_apps_script.js:2793`](google_apps_script.js#L2793)
- **Deskripsi:** Menghitung akumulasi MVP pemain resmi dari Sheet "MLBB - Bagan & MVP" (Kolom I / index 8) Memecah string berdasarkan separator '|' per game dan membersihkan prefix 'G1:', 'G2:' Kebal dari double count kolom Hero MVP (J) maupun percampuran Total MVP Team (Klasemen) /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`countMLBBPlayerMVPs()`](#countmlbbplayermvps)

<a id="countmlbbplayermvps"></a>
#### `countMLBBPlayerMVPs(ss)`

- **Definisi:** [`google_apps_script.js:2798`](google_apps_script.js#L2798)
- **Titik Pemanggilan (1 lokasi):**
  - [`google_apps_script.js:2795`](google_apps_script.js#L2795) — di dalam fungsi `countMVP()`
    `return countMLBBPlayerMVPs(ss);`

---

### 🌐 Web API & Endpoint Webhook

<a id="doget"></a>
#### `doGet(e)`

- **Definisi:** [`google_apps_script.js:1371`](google_apps_script.js#L1371)
- **Deskripsi:** 1. GET HANDLER: FETCH SEMUA PESERTA & KONFIGURASI KE WEBSITE /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`getInitialData()`](#getinitialdata)

<a id="dopost"></a>
#### `doPost(e)`

- **Definisi:** [`google_apps_script.js:1408`](google_apps_script.js#L1408)
- **Deskripsi:** Endpoint HTTP POST Google Apps Script untuk menerima pendaftaran, verifikasi, hapus data, dan simpan konfigurasi.
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:532`](functional_tests.js#L532) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getValidAdminPins()`](#getvalidadminpins), [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`getOrCreateSubFolder()`](#getorcreatesubfolder), [`saveBase64Image()`](#savebase64image), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMcggListing()`](#getmcgglisting)

---

