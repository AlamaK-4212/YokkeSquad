# 📖 INDEKS FUNGSI DAN PETA PEMANGGILAN KODE (FUNCTION MAP)
> **Turnamen E-Sports Yokke Squad 2026**  
> *Dokumen ini dibuat otomatis oleh script `scripts/generate_function_index.js`. Pembaruan dilakukan secara otomatis setiap kali ada perubahan pada source code.*

---

## 📊 Ringkasan Eksekutif
- **Total Fungsi Terdaftar:** 309 fungsi (271 di `app.js`, 25 di `google_apps_script.js`)
- **Total Titik Pemanggilan (Call Sites):** 1328 titik pemanggilan teridentifikasi
- **Terakhir Diperbarui:** 5/11/2026, 03.17.49 WIB
- **Cara Memperbarui Otomatis:**
  - Sekali jalan: `node scripts/generate_function_index.js`
  - Mode Pantau (Realtime Auto-Update saat simpan kode): `node scripts/generate_function_index.js --watch`
  - Bersamaan saat test: `node tests/functional_tests.js`

---

## 📑 Daftar Isi Modul
1. [♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) (47 fungsi)](#turnamen-mcgg-klasemen-undian-commander-penalti)
2. [⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) (68 fungsi)](#turnamen-mlbb-bagan-grup-playoff-engine)
3. [📦 Modul Aplikasi Umum (90 fungsi)](#modul-aplikasi-umum)
4. [👥 Manajemen Peserta & Roster (15 fungsi)](#manajemen-peserta-roster)
5. [☁️ Sinkronisasi Google Sheets & State Storage (11 fungsi)](#sinkronisasi-google-sheets-state-storage)
6. [🆔 Modal Dialog & Bukti ID Card (28 fungsi)](#modal-dialog-bukti-id-card)
7. [🔧 Helper & UI Utility (13 fungsi)](#helper-ui-utility)
8. [🛡️ Autentikasi & Hak Akses Panitia (6 fungsi)](#autentikasi-hak-akses-panitia)
9. [📋 Regulasi Turnamen (Rules Editor) (6 fungsi)](#regulasi-turnamen-rules-editor)
10. [🗄️ Google Sheets Schema & Master Data (8 fungsi)](#google-sheets-schema-master-data)
11. [⚙️ Backend Apps Script Utility (15 fungsi)](#backend-apps-script-utility)
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
| 20 | [**`saveStageStateLocal()`**](#savestagestatelocal) | [app.js:467](app.js#L467) | ☁️ Sinkronisasi Google Sheets & State Storage | Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM,... | 15x |
| 21 | [**`getCommanderFormattedName()`**](#getcommanderformattedname) | [app.js:523](app.js#L523) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika t... | 5x |
| 22 | [**`renderCommanderCirclesHtml()`**](#rendercommandercircleshtml) | [app.js:534](app.js#L534) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen | 3x |
| 23 | [**`renderCommanderCardVisualHtml()`**](#rendercommandercardvisualhtml) | [app.js:563](app.js#L563) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian | 1x |
| 24 | [**`compressImage()`**](#compressimage) | [app.js:743](app.js#L743) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compressor: compresses smartphone photos using HTML5 Canv... | 3x |
| 25 | [**`compressImageFile()`**](#compressimagefile) | [app.js:802](app.js#L802) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compression helper (Canvas <= 1200px, quality 0.75) | 3x |
| 26 | [**`showToast()`**](#showtoast) | [app.js:809](app.js#L809) | 🔧 Helper & UI Utility | TOAST NOTIFICATIONS (CYBERPUNK DARK) | 60x |
| 27 | [**`openGlossaryModal()`**](#openglossarymodal) | [app.js:842](app.js#L842) | 🆔 Modal Dialog & Bukti ID Card | Modal Glosarium Istilah Turnamen | 1x |
| 28 | [**`closeGlossaryModal()`**](#closeglossarymodal) | [app.js:847](app.js#L847) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeGlossaryModal | 2x |
| 29 | [**`openResetBaganModal()`**](#openresetbaganmodal) | [app.js:853](app.js#L853) | 🆔 Modal Dialog & Bukti ID Card | Modal Reset Bagan dengan Verifikasi Password/PIN | 1x |
| 30 | [**`closeResetBaganModal()`**](#closeresetbaganmodal) | [app.js:862](app.js#L862) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeResetBaganModal | 2x |
| 31 | [**`confirmResetBaganWithPin()`**](#confirmresetbaganwithpin) | [app.js:867](app.js#L867) | 🛡️ Autentikasi & Hak Akses Panitia | Fungsi operasional untuk confirmResetBaganWithPin | 1x |
| 32 | [**`bypassLoaderWithCache()`**](#bypassloaderwithcache) | [app.js:948](app.js#L948) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk bypassLoaderWithCache | 1x |
| 33 | [**`handleParticipantSearch()`**](#handleparticipantsearch) | [app.js:963](app.js#L963) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk handleParticipantSearch | 1x |
| 34 | [**`saveFormDraft()`**](#saveformdraft) | [app.js:971](app.js#L971) | 📦 Modul Aplikasi Umum | AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE) | 1x |
| 35 | [**`restoreFormDraft()`**](#restoreformdraft) | [app.js:1027](app.js#L1027) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk restoreFormDraft | 2x |
| 36 | [**`clearFormDraft()`**](#clearformdraft) | [app.js:1117](app.js#L1117) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearFormDraft | 1x |
| 37 | [**`handleFormDraftChange()`**](#handleformdraftchange) | [app.js:1124](app.js#L1124) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk handleFormDraftChange | 3x |
| 38 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [app.js:1133](app.js#L1133) | 🔧 Helper & UI Utility | Helper to format Google Drive image URLs into viewable thumbnail image URLs | 9x |
| 39 | [**`getIdCardMap()`**](#getidcardmap) | [app.js:1148](app.js#L1148) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama | 2x |
| 40 | [**`saveIdCardToMap()`**](#saveidcardtomap) | [app.js:1187](app.js#L1187) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasar... | 5x |
| 41 | [**`findIdCardByEmpIdOrName()`**](#findidcardbyempidorname) | [app.js:1205](app.js#L1205) | 🆔 Modal Dialog & Bukti ID Card | Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama p... | 9x |
| 42 | [**`getLogoMap()`**](#getlogomap) | [app.js:1223](app.js#L1223) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan Logo sesuai Nama Tim (MLBB) | 2x |
| 43 | [**`saveLogoToMap()`**](#savelogotomap) | [app.js:1237](app.js#L1237) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasa... | 3x |
| 44 | [**`findLogoByTeamName()`**](#findlogobyteamname) | [app.js:1246](app.js#L1246) | 🆔 Modal Dialog & Bukti ID Card | Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peser... | 7x |
| 45 | [**`autoLinkParticipantsAssets()`**](#autolinkparticipantsassets) | [app.js:1254](app.js#L1254) | 👥 Manajemen Peserta & Roster | Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada | 5x |
| 46 | [**`fetchParticipantsFromGoogleSheet()`**](#fetchparticipantsfromgooglesheet) | [app.js:1289](app.js#L1289) | 👥 Manajemen Peserta & Roster | Fetch registered participants from Google Sheets via doGet Webhook Google S... | 4x |
| 47 | [**`getItemKey()`**](#getitemkey) | [app.js:1315](app.js#L1315) | 📦 Modul Aplikasi Umum | Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name | 2x |
| 48 | [**`cleanOrphanedTournamentData()`**](#cleanorphanedtournamentdata) | [app.js:1565](app.js#L1565) | 📦 Modul Aplikasi Umum | Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup... | 2x |
| 49 | [**`resetCacheAndFollowGSheet()`**](#resetcacheandfollowgsheet) | [app.js:1651](app.js#L1651) | ☁️ Sinkronisasi Google Sheets & State Storage | Reset cache lokal dan ikuti 100% data aktif dari Google Sheets | 1x |
| 50 | [**`saveAllChangesToGoogleSheet()`**](#saveallchangestogooglesheet) | [app.js:1684](app.js#L1684) | ☁️ Sinkronisasi Google Sheets & State Storage | SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS | 1x |
| 51 | [**`syncTournamentConfigToGSheet()`**](#synctournamentconfigtogsheet) | [app.js:1826](app.js#L1826) | ☁️ Sinkronisasi Google Sheets & State Storage | SINKRONISASI KONFIGURASI TURNAMEN & BAGAN KE GOOGLE SHEETS | 6x |
| 52 | [**`syncTournamentSheetsToGSheet()`**](#synctournamentsheetstogsheet) | [app.js:1878](app.js#L1878) | ☁️ Sinkronisasi Google Sheets & State Storage | SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET | 0x |
| 53 | [**`saveState()`**](#savestate) | [app.js:1917](app.js#L1917) | 📦 Modul Aplikasi Umum | Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi ... | 45x |
| 54 | [**`updateCounts()`**](#updatecounts) | [app.js:1929](app.js#L1929) | 📦 Modul Aplikasi Umum | Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status veri... | 7x |
| 55 | [**`formatRuleLine()`**](#formatruleline) | [app.js:1939](app.js#L1939) | 📋 Regulasi Turnamen (Rules Editor) | Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG) | 0x |
| 56 | [**`fetchRulesFromGoogleDoc()`**](#fetchrulesfromgoogledoc) | [app.js:1985](app.js#L1985) | 📋 Regulasi Turnamen (Rules Editor) | Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: t... | 2x |
| 57 | [**`renderRules()`**](#renderrules) | [app.js:2043](app.js#L2043) | 📋 Regulasi Turnamen (Rules Editor) | Fungsi operasional untuk renderRules | 6x |
| 58 | [**`toggleEditRules()`**](#toggleeditrules) | [app.js:2057](app.js#L2057) | 📋 Regulasi Turnamen (Rules Editor) | Membuka/menutup form editor peraturan turnamen khusus panitia. | 3x |
| 59 | [**`saveCustomRules()`**](#savecustomrules) | [app.js:2063](app.js#L2063) | 📋 Regulasi Turnamen (Rules Editor) | Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Goo... | 1x |
| 60 | [**`resetRulesToDefault()`**](#resetrulestodefault) | [app.js:2091](app.js#L2091) | 📋 Regulasi Turnamen (Rules Editor) | Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026... | 1x |
| 61 | [**`handleLogoPreview()`**](#handlelogopreview) | [app.js:2101](app.js#L2101) | 🆔 Modal Dialog & Bukti ID Card | Handle Logo Upload and Live Preview | 1x |
| 62 | [**`handleSingleIdCardPreview()`**](#handlesingleidcardpreview) | [app.js:2116](app.js#L2116) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Officials and MCGG | 3x |
| 63 | [**`handlePlayerIdCardPreview()`**](#handleplayeridcardpreview) | [app.js:2138](app.js#L2138) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Each of the 8 Players | 1x |
| 64 | [**`toggleOfficial2Form()`**](#toggleofficial2form) | [app.js:2154](app.js#L2154) | 📦 Modul Aplikasi Umum | Toggle Official 2 Form | 4x |
| 65 | [**`renderPlayersFormInputs()`**](#renderplayersforminputs) | [app.js:2161](app.js#L2161) | 📦 Modul Aplikasi Umum | Generate the 8 players form fields dynamically (Included In-Game Nickname a... | 2x |
| 66 | [**`toggleCategoryForm()`**](#togglecategoryform) | [app.js:2220](app.js#L2220) | 📦 Modul Aplikasi Umum | Switch form between MLBB and MCGG cleanly | 3x |
| 67 | [**`openLoginModal()`**](#openloginmodal) | [app.js:2280](app.js#L2280) | 🛡️ Autentikasi & Hak Akses Panitia | Auth functions | 1x |
| 68 | [**`closeLoginModal()`**](#closeloginmodal) | [app.js:2292](app.js#L2292) | 🛡️ Autentikasi & Hak Akses Panitia | Menutup modal dialog login PIN panitia. | 2x |
| 69 | [**`verifyAdminPin()`**](#verifyadminpin) | [app.js:2300](app.js#L2300) | 🛡️ Autentikasi & Hak Akses Panitia | Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif p... | 2x |
| 70 | [**`logoutAdmin()`**](#logoutadmin) | [app.js:2380](app.js#L2380) | 🛡️ Autentikasi & Hak Akses Panitia | Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (r... | 1x |
| 71 | [**`renderRegistrationUI()`**](#renderregistrationui) | [app.js:2397](app.js#L2397) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderRegistrationUI | 4x |
| 72 | [**`toggleRegistrationStatus()`**](#toggleregistrationstatus) | [app.js:2463](app.js#L2463) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk toggleRegistrationStatus | 5x |
| 73 | [**`resetMCGGPointsAndDraw()`**](#resetmcggpointsanddraw) | [app.js:2484](app.js#L2484) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetMCGGPointsAndDraw | 2x |
| 74 | [**`updateAuthUI()`**](#updateauthui) | [app.js:2527](app.js#L2527) | 🛡️ Autentikasi & Hak Akses Panitia | Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock,... | 16x |
| 75 | [**`switchTab()`**](#switchtab) | [app.js:2719](app.js#L2719) | 🔧 Helper & UI Utility | Navigation Tabs | 5x |
| 76 | [**`openIdCardLightbox()`**](#openidcardlightbox) | [app.js:2737](app.js#L2737) | 🆔 Modal Dialog & Bukti ID Card | Lightbox for Viewing Full ID Card | 3x |
| 77 | [**`closeIdCardLightbox()`**](#closeidcardlightbox) | [app.js:2778](app.js#L2778) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal pop-up lightbox preview ID Card pegawai. | 2x |
| 78 | [**`escapeHtml()`**](#escapehtml) | [app.js:2783](app.js#L2783) | 🔧 Helper & UI Utility | Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dal... | 89x |
| 79 | [**`updateRegistrationDatalists()`**](#updateregistrationdatalists) | [app.js:2795](app.js#L2795) | 📦 Modul Aplikasi Umum | Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit... | 3x |
| 80 | [**`handleTeamNameInput()`**](#handleteamnameinput) | [app.js:2809](app.js#L2809) | 📦 Modul Aplikasi Umum | Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edi... | 2x |
| 81 | [**`handleMcggNameInput()`**](#handlemcggnameinput) | [app.js:2842](app.js#L2842) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fu... | 2x |
| 82 | [**`handleRegister()`**](#handleregister) | [app.js:2875](app.js#L2875) | 👥 Manajemen Peserta & Roster | Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Ca... | 1x |
| 83 | [**`setParticipantStatus()`**](#setparticipantstatus) | [app.js:3407](app.js#L3407) | 👥 Manajemen Peserta & Roster | Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets | 2x |
| 84 | [**`deleteParticipant()`**](#deleteparticipant) | [app.js:3444](app.js#L3444) | 👥 Manajemen Peserta & Roster | Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat k... | 1x |
| 85 | [**`filterList()`**](#filterlist) | [app.js:3487](app.js#L3487) | 🔧 Helper & UI Utility | Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/... | 3x |
| 86 | [**`openEditParticipantModal()`**](#openeditparticipantmodal) | [app.js:3495](app.js#L3495) | 🆔 Modal Dialog & Bukti ID Card | ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION | 1x |
| 87 | [**`closeEditParticipantModal()`**](#closeeditparticipantmodal) | [app.js:3593](app.js#L3593) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog edit peserta. | 3x |
| 88 | [**`handleEditLogoUpload()`**](#handleeditlogoupload) | [app.js:3598](app.js#L3598) | 🆔 Modal Dialog & Bukti ID Card | Handle logo upload in Admin Edit modal | 1x |
| 89 | [**`handleEditRosterIdCardUpload()`**](#handleeditrosteridcardupload) | [app.js:3614](app.js#L3614) | 🆔 Modal Dialog & Bukti ID Card | Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedi... | 1x |
| 90 | [**`saveParticipantEdit()`**](#saveparticipantedit) | [app.js:3625](app.js#L3625) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk saveParticipantEdit | 1x |
| 91 | [**`viewRosterDetail()`**](#viewrosterdetail) | [app.js:3745](app.js#L3745) | 👥 Manajemen Peserta & Roster | Modal Detail Roster Lengkap & ID Card Per-Pemain | 1x |
| 92 | [**`closeDetailModal()`**](#closedetailmodal) | [app.js:3804](app.js#L3804) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog rincian roster tim dan galeri ID Card. | 1x |
| 93 | [**`renderParticipants()`**](#renderparticipants) | [app.js:3809](app.js#L3809) | 👥 Manajemen Peserta & Roster | Render Participant Table (Featuring Nickname, ID Card count per-player, and... | 13x |
| 94 | [**`getVerifiedMLBBTeams()`**](#getverifiedmlbbteams) | [app.js:3952](app.js#L3952) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE | 5x |
| 95 | [**`getActiveMLBBFormat()`**](#getactivemlbbformat) | [app.js:3960](app.js#L3960) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N... | 2x |
| 96 | [**`changeTournamentFormat()`**](#changetournamentformat) | [app.js:3979](app.js#L3979) | 🔧 Helper & UI Utility | Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP... | 1x |
| 97 | [**`renderCurrentMLBBFormat()`**](#rendercurrentmlbbformat) | [app.js:3996](app.js#L3996) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderCurrentMLBBFormat | 20x |
| 98 | [**`shuffleAndGenerateTournament()`**](#shuffleandgeneratetournament) | [app.js:4022](app.js#L4022) | 📦 Modul Aplikasi Umum | Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum di... | 1x |
| 99 | [**`toggleLockMLBBGroup()`**](#togglelockmlbbgroup) | [app.js:4052](app.js#L4052) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE) | 1x |
| 100 | [**`isAllMLBBGroupMatchesFinished()`**](#isallmlbbgroupmatchesfinished) | [app.js:4072](app.js#L4072) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan m... | 2x |
| 101 | [**`evaluateMLBBTieBreaker()`**](#evaluatemlbbtiebreaker) | [app.js:4083](app.js#L4083) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosa... | 2x |
| 102 | [**`resolveMLBBTieBreaker()`**](#resolvemlbbtiebreaker) | [app.js:4108](app.js#L4108) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan... | 3x |
| 103 | [**`proceedToMLBBStage2()`**](#proceedtomlbbstage2) | [app.js:4127](app.js#L4127) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Ba... | 3x |
| 104 | [**`refreshAndScrollToPlayoffBracket()`**](#refreshandscrolltoplayoffbracket) | [app.js:4163](app.js#L4163) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk refreshAndScrollToPlayoffBracket | 3x |
| 105 | [**`refreshAndScrollToGroupOrBracket()`**](#refreshandscrolltogrouporbracket) | [app.js:4192](app.js#L4192) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk refreshAndScrollToGroupOrBracket | 1x |
| 106 | [**`shuffleMLBBPlayoffBracket()`**](#shufflemlbbplayoffbracket) | [app.js:4218](app.js#L4218) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk shuffleMLBBPlayoffBracket | 3x |
| 107 | [**`toggleLockMLBBPlayoff()`**](#togglelockmlbbplayoff) | [app.js:4273](app.js#L4273) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk toggleLockMLBBPlayoff | 3x |
| 108 | [**`openPlayoffScoreModal()`**](#openplayoffscoremodal) | [app.js:4312](app.js#L4312) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openPlayoffScoreModal | 5x |
| 109 | [**`closePlayoffScoreModal()`**](#closeplayoffscoremodal) | [app.js:4402](app.js#L4402) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk closePlayoffScoreModal | 5x |
| 110 | [**`stepPlayoffModalScore()`**](#stepplayoffmodalscore) | [app.js:4408](app.js#L4408) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk stepPlayoffModalScore | 4x |
| 111 | [**`setPlayoffModalQuickScore()`**](#setplayoffmodalquickscore) | [app.js:4423](app.js#L4423) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffModalQuickScore | 1x |
| 112 | [**`onPlayoffScoreInputChanged()`**](#onplayoffscoreinputchanged) | [app.js:4434](app.js#L4434) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk onPlayoffScoreInputChanged | 2x |
| 113 | [**`updatePlayoffModalWinnerPreview()`**](#updateplayoffmodalwinnerpreview) | [app.js:4445](app.js#L4445) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk updatePlayoffModalWinnerPreview | 4x |
| 114 | [**`savePlayoffModalScore()`**](#saveplayoffmodalscore) | [app.js:4475](app.js#L4475) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk savePlayoffModalScore | 1x |
| 115 | [**`resetPlayoffModalScore()`**](#resetplayoffmodalscore) | [app.js:4488](app.js#L4488) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetPlayoffModalScore | 1x |
| 116 | [**`setPlayoffMatchScore()`**](#setplayoffmatchscore) | [app.js:4496](app.js#L4496) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffMatchScore | 1x |
| 117 | [**`resetPlayoffMatchScore()`**](#resetplayoffmatchscore) | [app.js:4537](app.js#L4537) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetPlayoffMatchScore | 1x |
| 118 | [**`onPlayoffTeamClicked()`**](#onplayoffteamclicked) | [app.js:4556](app.js#L4556) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk onPlayoffTeamClicked | 4x |
| 119 | [**`renderPlayoffMatchCardHtml()`**](#renderplayoffmatchcardhtml) | [app.js:4566](app.js#L4566) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderPlayoffMatchCardHtml | 3x |
| 120 | [**`findTeamGroupAndRank()`**](#findteamgroupandrank) | [app.js:4613](app.js#L4613) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findTeamGroupAndRank | 5x |
| 121 | [**`testMLBBPlayoffWithCurrentStandings()`**](#testmlbbplayoffwithcurrentstandings) | [app.js:4625](app.js#L4625) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBPlayoffWithCurrentStandings | 5x |
| 122 | [**`openTestDrawModal()`**](#opentestdrawmodal) | [app.js:4818](app.js#L4818) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openTestDrawModal | 2x |
| 123 | [**`closeTestDrawModal()`**](#closetestdrawmodal) | [app.js:4830](app.js#L4830) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeTestDrawModal | 3x |
| 124 | [**`openTestDrawInNewWindow()`**](#opentestdrawinnewwindow) | [app.js:4838](app.js#L4838) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk openTestDrawInNewWindow | 3x |
| 125 | [**`testMLBBGroupAllocationDraw()`**](#testmlbbgroupallocationdraw) | [app.js:4895](app.js#L4895) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBGroupAllocationDraw | 2x |
| 126 | [**`resetMLBBToStage1()`**](#resetmlbbtostage1) | [app.js:4970](app.js#L4970) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor ji... | 2x |
| 127 | [**`resetTotalMLBBGroupAndBracket()`**](#resettotalmlbbgroupandbracket) | [app.js:4982](app.js#L4982) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetTotalMLBBGroupAndBracket | 1x |
| 128 | [**`toggleLockMCGGLobbies()`**](#togglelockmcgglobbies) | [app.js:5001](app.js#L5001) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM... | 1x |
| 129 | [**`validateMCGGDuplicateCommander()`**](#validatemcggduplicatecommander) | [app.js:5023](app.js#L5023) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2) | 3x |
| 130 | [**`getLastSyncedMatches()`**](#getlastsyncedmatches) | [app.js:5051](app.js#L5051) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk getLastSyncedMatches | 2x |
| 131 | [**`setLastSyncedMatches()`**](#setlastsyncedmatches) | [app.js:5062](app.js#L5062) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk setLastSyncedMatches | 2x |
| 132 | [**`getUnsyncedMatches()`**](#getunsyncedmatches) | [app.js:5070](app.js#L5070) | ☁️ Sinkronisasi Google Sheets & State Storage | Lookup perbedaan antara cache lokal dengan data terakhir yang tersinkronisa... | 1x |
| 133 | [**`syncSingleMatchRowToGSheet()`**](#syncsinglematchrowtogsheet) | [app.js:5107](app.js#L5107) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi utama sinkronisasi 1 pertandingan: mengupdate HANYA 3 baris di Googl... | 7x |
| 134 | [**`saveTournamentStateOnly()`**](#savetournamentstateonly) | [app.js:5197](app.js#L5197) | ☁️ Sinkronisasi Google Sheets & State Storage | Handler tombol Simpan: Sinkronkan seluruh konfigurasi turnamen, bagan playo... | 18x |
| 135 | [**`generateBracket()`**](#generatebracket) | [app.js:5277](app.js#L5277) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- KNOCKOUT BRACKET --- | 3x |
| 136 | [**`pickWinner()`**](#pickwinner) | [app.js:5330](app.js#L5330) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk pickWinner | 2x |
| 137 | [**`renderBracket()`**](#renderbracket) | [app.js:5350](app.js#L5350) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderBracket | 5x |
| 138 | [**`allocateMLBBGroups()`**](#allocatemlbbgroups) | [app.js:5425](app.js#L5425) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi)... | 3x |
| 139 | [**`getPrefix()`**](#getprefix) | [app.js:5437](app.js#L5437) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getPrefix | 9x |
| 140 | [**`getDept()`**](#getdept) | [app.js:5445](app.js#L5445) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getDept | 6x |
| 141 | [**`isInvited()`**](#isinvited) | [app.js:5456](app.js#L5456) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInvited | 5x |
| 142 | [**`getOverBaseCount()`**](#getoverbasecount) | [app.js:5524](app.js#L5524) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getOverBaseCount | 1x |
| 143 | [**`canAccept()`**](#canaccept) | [app.js:5526](app.js#L5526) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk canAccept | 0x |
| 144 | [**`hasPrefixConflict()`**](#hasprefixconflict) | [app.js:5560](app.js#L5560) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasPrefixConflict | 2x |
| 145 | [**`hasDeptConflict()`**](#hasdeptconflict) | [app.js:5561](app.js#L5561) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasDeptConflict | 1x |
| 146 | [**`generateGroupStage()`**](#generategroupstage) | [app.js:5615](app.js#L5615) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk generateGroupStage | 3x |
| 147 | [**`updateGroupRecord()`**](#updategrouprecord) | [app.js:5654](app.js#L5654) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk updateGroupRecord | 4x |
| 148 | [**`getMLBBHeadToHeadWinner()`**](#getmlbbheadtoheadwinner) | [app.js:5668](app.js#L5668) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fa... | 1x |
| 149 | [**`compareMLBBTeams()`**](#comparemlbbteams) | [app.js:5735](app.js#L5735) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke ... | 1x |
| 150 | [**`getSortedGroupTeams()`**](#getsortedgroupteams) | [app.js:5769](app.js#L5769) | 📦 Modul Aplikasi Umum | Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkula... | 13x |
| 151 | [**`shuffleArray()`**](#shufflearray) | [app.js:5797](app.js#L5797) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk shuffleArray | 9x |
| 152 | [**`findValidBracketPermutation()`**](#findvalidbracketpermutation) | [app.js:5806](app.js#L5806) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk findValidBracketPermutation | 4x |
| 153 | [**`backtrack()`**](#backtrack) | [app.js:5808](app.js#L5808) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk backtrack | 5x |
| 154 | [**`isTeamAtmo()`**](#isteamatmo) | [app.js:5830](app.js#L5830) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAtmo | 2x |
| 155 | [**`isTeamAlpha()`**](#isteamalpha) | [app.js:5835](app.js#L5835) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAlpha | 2x |
| 156 | [**`isTeamAppa()`**](#isteamappa) | [app.js:5841](app.js#L5841) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAppa | 1x |
| 157 | [**`isPlayoffInvitedTeam()`**](#isplayoffinvitedteam) | [app.js:5846](app.js#L5846) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk isPlayoffInvitedTeam | 2x |
| 158 | [**`solveRemainingBracketSlots()`**](#solveremainingbracketslots) | [app.js:5858](app.js#L5858) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk solveRemainingBracketSlots | 3x |
| 159 | [**`backtrack()`**](#backtrack) | [app.js:5860](app.js#L5860) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk backtrack | 5x |
| 160 | [**`drawMLBBPlayoffUpperBracket()`**](#drawmlbbplayoffupperbracket) | [app.js:5886](app.js#L5886) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Algoritma Pengundian Cerdas Playoff Upper Bracket 16 Besar (MLBB): 1. Undi ... | 1x |
| 161 | [**`isInv()`**](#isinv) | [app.js:5887](app.js#L5887) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInv | 7x |
| 162 | [**`drawMLBBPlayoffLowerBracket()`**](#drawmlbbplayofflowerbracket) | [app.js:6006](app.js#L6006) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk drawMLBBPlayoffLowerBracket | 1x |
| 163 | [**`isInv()`**](#isinv) | [app.js:6007](app.js#L6007) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInv | 7x |
| 164 | [**`initGroupPlayoff()`**](#initgroupplayoff) | [app.js:6043](app.js#L6043) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seed... | 11x |
| 165 | [**`isPlayoffPlaceholderTeam()`**](#isplayoffplaceholderteam) | [app.js:6286](app.js#L6286) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk isPlayoffPlaceholderTeam | 5x |
| 166 | [**`pickGroupPlayoffWinner()`**](#pickgroupplayoffwinner) | [app.js:6296](app.js#L6296) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya k... | 1x |
| 167 | [**`promptPlayoffMVP()`**](#promptplayoffmvp) | [app.js:6464](app.js#L6464) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk promptPlayoffMVP | 1x |
| 168 | [**`renderGroupStageUI()`**](#rendergroupstageui) | [app.js:6471](app.js#L6471) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupStageUI | 16x |
| 169 | [**`resolveTeamNameInGroup()`**](#resolveteamnameingroup) | [app.js:6826](app.js#L6826) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisa... | 2x |
| 170 | [**`isSameTeamName()`**](#issameteamname) | [app.js:6842](app.js#L6842) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, ... | 38x |
| 171 | [**`findGroupNameForTeam()`**](#findgroupnameforteam) | [app.js:6858](app.js#L6858) | 📦 Modul Aplikasi Umum | Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData | 4x |
| 172 | [**`setMLBBActiveWeek()`**](#setmlbbactiveweek) | [app.js:6910](app.js#L6910) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveWeek | 3x |
| 173 | [**`setMLBBActiveDayFilter()`**](#setmlbbactivedayfilter) | [app.js:6918](app.js#L6918) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveDayFilter | 6x |
| 174 | [**`setMLBBActiveGroupFilter()`**](#setmlbbactivegroupfilter) | [app.js:6923](app.js#L6923) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveGroupFilter | 1x |
| 175 | [**`getGroupFixtures()`**](#getgroupfixtures) | [app.js:6929](app.js#L6929) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) --- | 6x |
| 176 | [**`getCanonicalGroupMatchId()`**](#getcanonicalgroupmatchid) | [app.js:7123](app.js#L7123) | 📦 Modul Aplikasi Umum | Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tid... | 7x |
| 177 | [**`isGroupMatchesCompleted()`**](#isgroupmatchescompleted) | [app.js:7132](app.js#L7132) | 📦 Modul Aplikasi Umum | Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah s... | 3x |
| 178 | [**`deduplicateGroupMatchResults()`**](#deduplicategroupmatchresults) | [app.js:7150](app.js#L7150) | 📦 Modul Aplikasi Umum | Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri t... | 3x |
| 179 | [**`getGroupRestingTeams()`**](#getgrouprestingteams) | [app.js:7242](app.js#L7242) | 📦 Modul Aplikasi Umum | Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di... | 1x |
| 180 | [**`setGroupMatchScore()`**](#setgroupmatchscore) | [app.js:7253](app.js#L7253) | 📦 Modul Aplikasi Umum | Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara ... | 7x |
| 181 | [**`promptGroupMatchWO()`**](#promptgroupmatchwo) | [app.js:7363](app.js#L7363) | 📦 Modul Aplikasi Umum | Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupu... | 1x |
| 182 | [**`setGroupMatchSpecialResult()`**](#setgroupmatchspecialresult) | [app.js:7388](app.js#L7388) | 📦 Modul Aplikasi Umum | Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imba... | 4x |
| 183 | [**`saveGroupFixtureScore()`**](#savegroupfixturescore) | [app.js:7397](app.js#L7397) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk saveGroupFixtureScore | 1x |
| 184 | [**`findTeamParticipant()`**](#findteamparticipant) | [app.js:7436](app.js#L7436) | 👥 Manajemen Peserta & Roster | Helper mencari data peserta tim dengan normalisasi nama | 4x |
| 185 | [**`openMLBBGroupMvpModal()`**](#openmlbbgroupmvpmodal) | [app.js:7450](app.js#L7450) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBGroupMvpModal | 3x |
| 186 | [**`openMLBBPlayoffMvpModal()`**](#openmlbbplayoffmvpmodal) | [app.js:7524](app.js#L7524) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBPlayoffMvpModal | 1x |
| 187 | [**`initAndShowMvpModal()`**](#initandshowmvpmodal) | [app.js:7573](app.js#L7573) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk initAndShowMvpModal | 2x |
| 188 | [**`renderMvpGameTabs()`**](#rendermvpgametabs) | [app.js:7620](app.js#L7620) | 🔧 Helper & UI Utility | Fungsi operasional untuk renderMvpGameTabs | 3x |
| 189 | [**`switchMvpGameTab()`**](#switchmvpgametab) | [app.js:7652](app.js#L7652) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpGameTab | 1x |
| 190 | [**`closeMLBBGroupMvpModal()`**](#closemlbbgroupmvpmodal) | [app.js:7710](app.js#L7710) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk closeMLBBGroupMvpModal | 5x |
| 191 | [**`switchMvpTeamTab()`**](#switchmvpteamtab) | [app.js:7715](app.js#L7715) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpTeamTab | 4x |
| 192 | [**`renderMvpRosterList()`**](#rendermvprosterlist) | [app.js:7746](app.js#L7746) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk renderMvpRosterList | 3x |
| 193 | [**`filterMvpRosterList()`**](#filtermvprosterlist) | [app.js:7813](app.js#L7813) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk filterMvpRosterList | 1x |
| 194 | [**`selectMvpPlayer()`**](#selectmvpplayer) | [app.js:7819](app.js#L7819) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpPlayer | 1x |
| 195 | [**`renderMvpQuickHeroChips()`**](#rendermvpquickherochips) | [app.js:7851](app.js#L7851) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderMvpQuickHeroChips | 3x |
| 196 | [**`selectMvpQuickHero()`**](#selectmvpquickhero) | [app.js:7871](app.js#L7871) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpQuickHero | 1x |
| 197 | [**`saveSelectedMvp()`**](#saveselectedmvp) | [app.js:7888](app.js#L7888) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk saveSelectedMvp | 2x |
| 198 | [**`deleteCurrentMvp()`**](#deletecurrentmvp) | [app.js:7960](app.js#L7960) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk deleteCurrentMvp | 1x |
| 199 | [**`setGroupMatchMVP()`**](#setgroupmatchmvp) | [app.js:8012](app.js#L8012) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk setGroupMatchMVP | 3x |
| 200 | [**`formatMatchMvpDisplayHtml()`**](#formatmatchmvpdisplayhtml) | [app.js:8100](app.js#L8100) | 🔧 Helper & UI Utility | Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5) | 2x |
| 201 | [**`promptGroupMatchMVP()`**](#promptgroupmatchmvp) | [app.js:8127](app.js#L8127) | 📦 Modul Aplikasi Umum | Delegasi fungsi promptGroupMatchMVP ke modal interaktif | 1x |
| 202 | [**`openMatchPlayerVerifyModal()`**](#openmatchplayerverifymodal) | [app.js:8144](app.js#L8144) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openMatchPlayerVerifyModal | 2x |
| 203 | [**`closeMatchPlayerVerifyModal()`**](#closematchplayerverifymodal) | [app.js:8182](app.js#L8182) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeMatchPlayerVerifyModal | 2x |
| 204 | [**`toggleMatchPlayerVerify()`**](#togglematchplayerverify) | [app.js:8191](app.js#L8191) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleMatchPlayerVerify | 1x |
| 205 | [**`verifyAllMatchPlayers()`**](#verifyallmatchplayers) | [app.js:8209](app.js#L8209) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk verifyAllMatchPlayers | 2x |
| 206 | [**`renderMatchPlayerVerifyModalContent()`**](#rendermatchplayerverifymodalcontent) | [app.js:8232](app.js#L8232) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk renderMatchPlayerVerifyModalContent | 3x |
| 207 | [**`renderTeamRosterColumn()`**](#renderteamrostercolumn) | [app.js:8288](app.js#L8288) | 👥 Manajemen Peserta & Roster | Helper untuk merender kolom roster tiap tim | 2x |
| 208 | [**`resetGroupMatchScore()`**](#resetgroupmatchscore) | [app.js:8391](app.js#L8391) | 📦 Modul Aplikasi Umum | Mereset skor pertandingan grup MLBB ke status belum bertanding. | 0x |
| 209 | [**`recalculateGroupStandingsFromFixtures()`**](#recalculategroupstandingsfromfixtures) | [app.js:8406](app.js#L8406) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan selu... | 4x |
| 210 | [**`renderGroupFixturesUI()`**](#rendergroupfixturesui) | [app.js:8546](app.js#L8546) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupFixturesUI | 11x |
| 211 | [**`renderGroupPlayoffTree()`**](#rendergroupplayofftree) | [app.js:8827](app.js#L8827) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau statu... | 14x |
| 212 | [**`changeMCGGLobby()`**](#changemcgglobby) | [app.js:8951](app.js#L8951) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MCGG MULTI-LOBBY STANDINGS | 0x |
| 213 | [**`getCommanderById()`**](#getcommanderbyid) | [app.js:8957](app.js#L8957) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mencari objek data commander dari master list berdasarkan ID, nama hero, at... | 1x |
| 214 | [**`updateCommanderPoolFromSetup()`**](#updatecommanderpoolfromsetup) | [app.js:8970](app.js#L8970) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk updateCommanderPoolFromSetup | 1x |
| 215 | [**`getVerifiedMCGGPlayers()`**](#getverifiedmcggplayers) | [app.js:9029](app.js#L9029) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getVerifiedMCGGPlayers | 2x |
| 216 | [**`syncMCGGPlayers()`**](#syncmcggplayers) | [app.js:9037](app.js#L9037) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGPlayers | 8x |
| 217 | [**`findPrevious()`**](#findprevious) | [app.js:9049](app.js#L9049) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 218 | [**`mapPlayerObj()`**](#mapplayerobj) | [app.js:9061](app.js#L9061) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |
| 219 | [**`allocateLobbiesByCluster()`**](#allocatelobbiesbycluster) | [app.js:9080](app.js#L9080) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase ... | 3x |
| 220 | [**`shuffleMCGGPlayers()`**](#shufflemcggplayers) | [app.js:9255](app.js#L9255) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGGPlayers | 2x |
| 221 | [**`isMCGGLobbyPointsFull()`**](#ismcgglobbypointsfull) | [app.js:9272](app.js#L9272) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGLobbyPointsFull | 4x |
| 222 | [**`isMCGGQualificationFull()`**](#ismcggqualificationfull) | [app.js:9278](app.js#L9278) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3... | 11x |
| 223 | [**`isMCGGSemiFinalFull()`**](#ismcggsemifinalfull) | [app.js:9284](app.js#L9284) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGSemiFinalFull | 1x |
| 224 | [**`compareMCGGPlayers()`**](#comparemcggplayers) | [app.js:9296](app.js#L9296) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir ... | 0x |
| 225 | [**`syncMCGGSemiFinal()`**](#syncmcggsemifinal) | [app.js:9327](app.js#L9327) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGSemiFinal | 2x |
| 226 | [**`findPrevSemi()`**](#findprevsemi) | [app.js:9364](app.js#L9364) | 📦 Modul Aplikasi Umum | Preserve poin semifinal jika sudah ada | 1x |
| 227 | [**`mapSemiPlayer()`**](#mapsemiplayer) | [app.js:9372](app.js#L9372) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapSemiPlayer | 0x |
| 228 | [**`syncMCGGGrandFinal()`**](#syncmcgggrandfinal) | [app.js:9394](app.js#L9394) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final se... | 7x |
| 229 | [**`findPrevInArr()`**](#findprevinarr) | [app.js:9401](app.js#L9401) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevInArr | 1x |
| 230 | [**`mapGFPlayer()`**](#mapgfplayer) | [app.js:9410](app.js#L9410) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapGFPlayer | 4x |
| 231 | [**`updateMCGGRank()`**](#updatemcggrank) | [app.js:9478](app.js#L9478) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin... | 1x |
| 232 | [**`updateMCGGCommander()`**](#updatemcggcommander) | [app.js:9516](app.js#L9516) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui pilihan commander pemain dan memicu validasi duplikasi commande... | 1x |
| 233 | [**`updateMCGGPenalty()`**](#updatemcggpenalty) | [app.js:9551](app.js#L9551) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumul... | 1x |
| 234 | [**`renderLobbyCommanderDrawPanelHtml()`**](#renderlobbycommanderdrawpanelhtml) | [app.js:9590](app.js#L9590) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI) | 5x |
| 235 | [**`drawMatchPool()`**](#drawmatchpool) | [app.js:9840](app.js#L9840) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 1: Acak 8 Pool ... | 2x |
| 236 | [**`assignMatchPoolToPlayers()`**](#assignmatchpooltoplayers) | [app.js:9915](app.js#L9915) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 2: Pasangkan 8 ... | 2x |
| 237 | [**`toggleLockMatchDraw()`**](#togglelockmatchdraw) | [app.js:9966](app.js#L9966) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 3: Kunci Match ... | 1x |
| 238 | [**`nextMatchDraw()`**](#nextmatchdraw) | [app.js:9993](app.js#L9993) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 4: Lanjut ke Ma... | 1x |
| 239 | [**`drawMatchCommanders()`**](#drawmatchcommanders) | [app.js:10010](app.js#L10010) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Backward compatibility helper | 3x |
| 240 | [**`switchLobbyDrawView()`**](#switchlobbydrawview) | [app.js:10016](app.js#L10016) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk switchLobbyDrawView | 5x |
| 241 | [**`resetLobbyDraw()`**](#resetlobbydraw) | [app.js:10022](app.js#L10022) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetLobbyDraw | 2x |
| 242 | [**`copyCommanderDrawText()`**](#copycommanderdrawtext) | [app.js:10043](app.js#L10043) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk... | 2x |
| 243 | [**`showMatch3DraftInfo()`**](#showmatch3draftinfo) | [app.js:10078](app.js#L10078) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk showMatch3DraftInfo | 1x |
| 244 | [**`changeCommanderDrawTarget()`**](#changecommanderdrawtarget) | [app.js:10089](app.js#L10089) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk changeCommanderDrawTarget | 1x |
| 245 | [**`setDrawTargetAndScroll()`**](#setdrawtargetandscroll) | [app.js:10096](app.js#L10096) | 🔧 Helper & UI Utility | Fungsi operasional untuk setDrawTargetAndScroll | 0x |
| 246 | [**`scrollToMCGGLobby()`**](#scrolltomcgglobby) | [app.js:10101](app.js#L10101) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk scrollToMCGGLobby | 3x |
| 247 | [**`renderMCGGLobbyAnchorBar()`**](#rendermcgglobbyanchorbar) | [app.js:10108](app.js#L10108) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbyAnchorBar | 2x |
| 248 | [**`renderMCGGLobbySelectOptions()`**](#rendermcgglobbyselectoptions) | [app.js:10144](app.js#L10144) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbySelectOptions | 3x |
| 249 | [**`renderMCGGTable()`**](#rendermcggtable) | [app.js:10187](app.js#L10187) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang... | 29x |
| 250 | [**`getLobbyShortLabel()`**](#getlobbyshortlabel) | [app.js:10244](app.js#L10244) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getLobbyShortLabel | 0x |
| 251 | [**`renderLobbyRowsHtml()`**](#renderlobbyrowshtml) | [app.js:10414](app.js#L10414) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderLobbyRowsHtml | 5x |
| 252 | [**`buildRoundCell()`**](#buildroundcell) | [app.js:10516](app.js#L10516) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk buildRoundCell | 3x |
| 253 | [**`buildPenaltySelect()`**](#buildpenaltyselect) | [app.js:10593](app.js#L10593) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk buildPenaltySelect | 1x |
| 254 | [**`loadSampleData()`**](#loadsampledata) | [app.js:10617](app.js#L10617) | 📦 Modul Aplikasi Umum | Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation... | 1x |
| 255 | [**`clearAllData()`**](#clearalldata) | [app.js:10821](app.js#L10821) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearAllData | 1x |
| 256 | [**`setMLBBViewMode()`**](#setmlbbviewmode) | [app.js:10900](app.js#L10900) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- TAMPILAN VIEW SWITCHER MLBB --- | 6x |
| 257 | [**`setMCGGViewMode()`**](#setmcggviewmode) | [app.js:10950](app.js#L10950) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | --- TAMPILAN VIEW SWITCHER MCGG --- | 4x |
| 258 | [**`togglePlayoffBracketCollapse()`**](#toggleplayoffbracketcollapse) | [app.js:10986](app.js#L10986) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk togglePlayoffBracketCollapse | 1x |
| 259 | [**`goToNextMLBBPlayoffPhase()`**](#gotonextmlbbplayoffphase) | [app.js:10998](app.js#L10998) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk goToNextMLBBPlayoffPhase | 2x |
| 260 | [**`setPlayoffBracketFilter()`**](#setplayoffbracketfilter) | [app.js:11025](app.js#L11025) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffBracketFilter | 2x |
| 261 | [**`togglePlayoffFullscreen()`**](#toggleplayofffullscreen) | [app.js:11032](app.js#L11032) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk togglePlayoffFullscreen | 1x |
| 262 | [**`renderSingleMatchNodeHtml()`**](#rendersinglematchnodehtml) | [app.js:11045](app.js#L11045) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderSingleMatchNodeHtml | 13x |
| 263 | [**`renderSvgConnectorColumn()`**](#rendersvgconnectorcolumn) | [app.js:11105](app.js#L11105) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderSvgConnectorColumn | 9x |
| 264 | [**`renderFullPlayoffBracketHtml()`**](#renderfullplayoffbrackethtml) | [app.js:11137](app.js#L11137) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderFullPlayoffBracketHtml | 2x |
| 265 | [**`selectMLBBStageNode()`**](#selectmlbbstagenode) | [app.js:11355](app.js#L11355) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk selectMLBBStageNode | 17x |
| 266 | [**`renderMLBBInteractiveHubUI()`**](#rendermlbbinteractivehubui) | [app.js:11366](app.js#L11366) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBInteractiveHubUI | 24x |
| 267 | [**`renderMLBBDetailPanelContent()`**](#rendermlbbdetailpanelcontent) | [app.js:11588](app.js#L11588) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBDetailPanelContent | 1x |
| 268 | [**`selectMCGGFlowNode()`**](#selectmcggflownode) | [app.js:11986](app.js#L11986) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | ---------------------------------------------------------------------------... | 7x |
| 269 | [**`renderMCGGInteractiveHubUI()`**](#rendermcgginteractivehubui) | [app.js:11991](app.js#L11991) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGInteractiveHubUI | 5x |
| 270 | [**`renderMCGGDetailPanelContent()`**](#rendermcggdetailpanelcontent) | [app.js:12119](app.js#L12119) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGDetailPanelContent | 1x |
| 271 | [**`shuffleMCGG32Besar()`**](#shufflemcgg32besar) | [app.js:12328](app.js#L12328) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGG32Besar | 1x |
| 272 | [**`getTargetSpreadsheet()`**](#gettargetspreadsheet) | [google_apps_script.js:38](google_apps_script.js#L38) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet b... | 5x |
| 273 | [**`safeSetSharing()`**](#safesetsharing) | [google_apps_script.js:58](google_apps_script.js#L58) | ⚙️ Backend Apps Script Utility | Mengatur permission sharing secara aman. Menghindari error 'Access denied: ... | 6x |
| 274 | [**`getOrCreateUploadFolder()`**](#getorcreateuploadfolder) | [google_apps_script.js:76](google_apps_script.js#L76) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat folder upload utama secara andal. Jika TARGET_FOLD... | 4x |
| 275 | [**`testDriveAuth()`**](#testdriveauth) | [google_apps_script.js:115](google_apps_script.js#L115) | ⚙️ Backend Apps Script Utility | FUNGSI UJI OTORISASI GOOGLE DRIVE & SPREADSHEET PENTING: Pilih fungsi 'test... | 0x |
| 276 | [**`getOrCreateSubFolder()`**](#getorcreatesubfolder) | [google_apps_script.js:150](google_apps_script.js#L150) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat subfolder tim/kategori secara andal. / | 2x |
| 277 | [**`relinkExistingFailedIDCards()`**](#relinkexistingfailedidcards) | [google_apps_script.js:194](google_apps_script.js#L194) | ⚙️ Backend Apps Script Utility | FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ... | 0x |
| 278 | [**`ensureRelationalSheetsExist()`**](#ensurerelationalsheetsexist) | [google_apps_script.js:313](google_apps_script.js#L313) | 🗄️ Google Sheets Schema & Master Data | Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Paren... | 2x |
| 279 | [**`getMlbbTimListing()`**](#getmlbbtimlisting) | [google_apps_script.js:361](google_apps_script.js#L361) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' A... | 3x |
| 280 | [**`getMlbbPesertaListing()`**](#getmlbbpesertalisting) | [google_apps_script.js:459](google_apps_script.js#L459) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Pes... | 2x |
| 281 | [**`getMcggListing()`**](#getmcgglisting) | [google_apps_script.js:527](google_apps_script.js#L527) | 🗄️ Google Sheets Schema & Master Data | Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan... | 3x |
| 282 | [**`getInitialData()`**](#getinitialdata) | [google_apps_script.js:661](google_apps_script.js#L661) | ⚙️ Backend Apps Script Utility | 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE | 1x |
| 283 | [**`helperParseRank()`**](#helperparserank) | [google_apps_script.js:898](google_apps_script.js#L898) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk helperParseRank | 3x |
| 284 | [**`doGet()`**](#doget) | [google_apps_script.js:1252](google_apps_script.js#L1252) | 🌐 Web API & Endpoint Webhook | 1. GET HANDLER: FETCH SEMUA PESERTA & KONFIGURASI KE WEBSITE / | 0x |
| 285 | [**`getValidAdminPins()`**](#getvalidadminpins) | [google_apps_script.js:1267](google_apps_script.js#L1267) | ⚙️ Backend Apps Script Utility | 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE | 2x |
| 286 | [**`doPost()`**](#dopost) | [google_apps_script.js:1289](google_apps_script.js#L1289) | 🌐 Web API & Endpoint Webhook | Endpoint HTTP POST Google Apps Script untuk menerima pendaftaran, verifikas... | 1x |
| 287 | [**`saveBase64Image()`**](#savebase64image) | [google_apps_script.js:1349](google_apps_script.js#L1349) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk saveBase64Image | 4x |
| 288 | [**`getOrCreateSheet()`**](#getorcreatesheet) | [google_apps_script.js:2085](google_apps_script.js#L2085) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. / | 0x |
| 289 | [**`safeBatchResizeColumns()`**](#safebatchresizecolumns) | [google_apps_script.js:2097](google_apps_script.js#L2097) | ⚙️ Backend Apps Script Utility | Helper efisien untuk auto-resize banyak kolom dalam 1 panggilan RPC Google ... | 3x |
| 290 | [**`syncDedicatedTournamentSheets()`**](#syncdedicatedtournamentsheets) | [google_apps_script.js:2116](google_apps_script.js#L2116) | 🗄️ Google Sheets Schema & Master Data | Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah ... | 8x |
| 291 | [**`onEdit()`**](#onedit) | [google_apps_script.js:2490](google_apps_script.js#L2490) | ⚙️ Backend Apps Script Utility | Trigger Otomatis saat sel diedit langsung di Spreadsheet / | 0x |
| 292 | [**`syncVersionsToVercel()`**](#syncversionstovercel) | [google_apps_script.js:2525](google_apps_script.js#L2525) | ⚙️ Backend Apps Script Utility | Helper pengiriman versi ke Vercel Edge Config REST API / | 2x |
| 293 | [**`syncListBagan()`**](#synclistbagan) | [google_apps_script.js:2567](google_apps_script.js#L2567) | ⚙️ Backend Apps Script Utility | Wrapper kompatibilitas untuk pemicu manual / lama / | 1x |
| 294 | [**`syncListPoint()`**](#synclistpoint) | [google_apps_script.js:2571](google_apps_script.js#L2571) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPoint | 1x |
| 295 | [**`syncListPointAndCommanderMCGG()`**](#synclistpointandcommandermcgg) | [google_apps_script.js:2575](google_apps_script.js#L2575) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPointAndCommanderMCGG | 1x |
| 296 | [**`createOrUpdateAllTournamentSheets()`**](#createorupdatealltournamentsheets) | [google_apps_script.js:2579](google_apps_script.js#L2579) | 🗄️ Google Sheets Schema & Master Data | Fungsi operasional untuk createOrUpdateAllTournamentSheets | 1x |
| 297 | [**`runTest()`**](#runtest) | [functional_tests.js:26](functional_tests.js#L26) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runTest | 75x |
| 298 | [**`runAsyncTest()`**](#runasynctest) | [functional_tests.js:37](functional_tests.js#L37) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk runAsyncTest | 4x |
| 299 | [**`sanitizeNip()`**](#sanitizenip) | [functional_tests.js:85](functional_tests.js#L85) | 🔧 Helper & UI Utility | Fungsi operasional untuk sanitizeNip | 3x |
| 300 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [functional_tests.js:94](functional_tests.js#L94) | 🔧 Helper & UI Utility | Fungsi operasional untuk formatDriveImageUrl | 9x |
| 301 | [**`validateRegistration()`**](#validateregistration) | [functional_tests.js:181](functional_tests.js#L181) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk validateRegistration | 7x |
| 302 | [**`runLiveIntegrationTests()`**](#runliveintegrationtests) | [functional_tests.js:363](functional_tests.js#L363) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runLiveIntegrationTests | 1x |
| 303 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:890](functional_tests.js#L890) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 304 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:896](functional_tests.js#L896) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 305 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:900](functional_tests.js#L900) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 4x |
| 306 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:946](functional_tests.js#L946) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 307 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:952](functional_tests.js#L952) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 308 | [**`findPrevious()`**](#findprevious) | [functional_tests.js:1085](functional_tests.js#L1085) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 309 | [**`mapPlayerObj()`**](#mapplayerobj) | [functional_tests.js:1087](functional_tests.js#L1087) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |

---

## 🔍 Rincian Lengkap Fungsi dan Lokasi Pemanggilan

### ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti)

<a id="setmcggstagefilter"></a>
#### `setMCGGStageFilter(stage)`

- **Definisi:** [`app.js:2`](app.js#L2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10263`](app.js#L10263) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_1_QUAL' ? 'active' : ''}`
  - [`app.js:10266`](app.js#L10266) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_2_SEMI' ? 'active' : ''}`
  - [`app.js:10269`](app.js#L10269) — di dalam fungsi `renderMCGGTable()`
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
  - [`index.html:634`](index.html#L634) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMCGGGroupPage()" i`
  - [`app.js:10281`](app.js#L10281) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:866`](functional_tests.js#L866) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMCGGGroupPage()'), 'Harus ada fungsi prevMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="nextmcgggrouppage"></a>
#### `nextMCGGGroupPage()`

- **Definisi:** [`app.js:61`](app.js#L61)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:640`](index.html#L640) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMCGGGroupPage()" `
  - [`app.js:10284`](app.js#L10284) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:867`](functional_tests.js#L867) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMCGGGroupPage()'), 'Harus ada fungsi nextMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="gotomcgggrouppage"></a>
#### `goToMCGGGroupPage(pg)`

- **Definisi:** [`app.js:68`](app.js#L68)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10253`](app.js#L10253) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${p === mcggGroupPageIndex ? 'active' : ''}" onclick=`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="togglemcgglayoutmode"></a>
#### `toggleMCGGLayoutMode()`

- **Definisi:** [`app.js:73`](app.js#L73)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderformattedname"></a>
#### `getCommanderFormattedName(cmd)`

- **Definisi:** [`app.js:523`](app.js#L523)
- **Deskripsi:** Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika tidak ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10063`](app.js#L10063) — di dalam fungsi `copyCommanderDrawText()`
    `const cmdName = getCommanderFormattedName(item.commander);`
  - [`app.js:10526`](app.js#L10526) — di dalam fungsi `buildRoundCell()`
    `const formattedName = getCommanderFormattedName(selectedCmd);`
  - [`app.js:10552`](app.js#L10552) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`app.js:10561`](app.js#L10561) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`functional_tests.js:706`](functional_tests.js#L706) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getCommanderFormattedName('), 'Harus ada fungsi getCommanderFormat`

<a id="rendercommandercircleshtml"></a>
#### `renderCommanderCirclesHtml(cmd, size)`

- **Definisi:** [`app.js:534`](app.js#L534)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10527`](app.js#L10527) — di dalam fungsi `buildRoundCell()`
    `const circlesHtml = renderCommanderCirclesHtml(selectedCmd, 24);`
  - [`app.js:10575`](app.js#L10575) — di dalam fungsi `buildRoundCell()`
    `? renderCommanderCirclesHtml(selectedCmd, 22)`
  - [`functional_tests.js:707`](functional_tests.js#L707) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderCommanderCirclesHtml('), 'Harus ada fungsi renderCommanderCi`

<a id="rendercommandercardvisualhtml"></a>
#### `renderCommanderCardVisualHtml(cmd)`

- **Definisi:** [`app.js:563`](app.js#L563)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9781`](app.js#L9781) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `${renderCommanderCardVisualHtml(item.commander)}`

<a id="resetmcggpointsanddraw"></a>
#### `resetMCGGPointsAndDraw()`

- **Definisi:** [`app.js:2484`](app.js#L2484)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:595`](index.html#L595) — Event `onclick`
    `<button id="btnResetMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; border-c`
  - [`functional_tests.js:837`](functional_tests.js#L837) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMCGGPointsAndDraw()'), 'Harus memiliki resetMCGGPointsAndDraw`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handlemcggnameinput"></a>
#### `handleMcggNameInput(val)`

- **Definisi:** [`app.js:2842`](app.js#L2842)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:266`](index.html#L266) — Event `oninput`
    `<input type="text" id="mcgg_name" oninput="handleMcggNameInput(this.value)" placeholder="Masukkan na`
  - [`functional_tests.js:173`](functional_tests.js#L173) — pada skenario pengujian
    `assert(appCode.includes('function handleMcggNameInput('), 'Harus ada handler handleMcggNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="togglelockmcgglobbies"></a>
#### `toggleLockMCGGLobbies()`

- **Definisi:** [`app.js:5001`](app.js#L5001)
- **Deskripsi:** Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:594`](index.html#L594) — Event `onclick`
    `<button id="btnLockMCGGLobbies" class="btn btn-outline" style="display: none; font-size: 0.85rem;" o`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="validatemcggduplicatecommander"></a>
#### `validateMCGGDuplicateCommander(lobbyKey, playerIdx)`

- **Definisi:** [`app.js:5023`](app.js#L5023)
- **Deskripsi:** 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9544`](app.js#L9544) — di dalam fungsi `updateMCGGCommander()`
    `validateMCGGDuplicateCommander(targetLobby, idx);`
  - [`app.js:9951`](app.js#L9951) — di dalam fungsi `assignMatchPoolToPlayers()`
    `validateMCGGDuplicateCommander(lobbyKey, i);`
  - [`functional_tests.js:765`](functional_tests.js#L765) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function validateMCGGDuplicateCommander('), 'Harus ada fungsi validateMCGGD`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="changemcgglobby"></a>
#### `changeMCGGLobby()`

- **Definisi:** [`app.js:8951`](app.js#L8951)
- **Deskripsi:** MCGG MULTI-LOBBY STANDINGS
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderbyid"></a>
#### `getCommanderById(id)`

- **Definisi:** [`app.js:8957`](app.js#L8957)
- **Deskripsi:** Mencari objek data commander dari master list berdasarkan ID, nama hero, atau alter name.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10521`](app.js#L10521) — di dalam fungsi `buildRoundCell()`
    `const selectedCmd = getCommanderById(selectedCmdId);`

<a id="updatecommanderpoolfromsetup"></a>
#### `updateCommanderPoolFromSetup(setupList)`

- **Definisi:** [`app.js:8970`](app.js#L8970)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1526`](app.js#L1526) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCommanderPoolFromSetup(data.mcggCommanderSetup);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getverifiedmcggplayers"></a>
#### `getVerifiedMCGGPlayers()`

- **Definisi:** [`app.js:9029`](app.js#L9029)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9038`](app.js#L9038) — di dalam fungsi `syncMCGGPlayers()`
    `let verified = getVerifiedMCGGPlayers();`
  - [`functional_tests.js:611`](functional_tests.js#L611) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMCGGPlayers()'), 'Harus ada getVerifiedMCGGPlayers()');`

<a id="syncmcggplayers"></a>
#### `syncMCGGPlayers(doShuffle = false)`

- **Definisi:** [`app.js:9037`](app.js#L9037)
- **Titik Pemanggilan (8 lokasi):**
  - [`index.html:592`](index.html#L592) — Event `onclick`
    `<button id="adminSyncMCGG" class="btn btn-primary" style="display: none; font-size: 0.85rem;" onclic`
  - [`app.js:1535`](app.js#L1535) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `syncMCGGPlayers();`
  - [`app.js:3415`](app.js#L3415) — di dalam fungsi `setParticipantStatus()`
    `syncMCGGPlayers();`
  - [`app.js:3468`](app.js#L3468) — di dalam fungsi `deleteParticipant()`
    `syncMCGGPlayers();`
  - [`app.js:3693`](app.js#L3693) — di dalam fungsi `saveParticipantEdit()`
    `syncMCGGPlayers();`
  - [`app.js:9268`](app.js#L9268) — di dalam fungsi `shuffleMCGGPlayers()`
    `syncMCGGPlayers(true);`
  - [`app.js:10818`](app.js#L10818) — di dalam fungsi `loadSampleData()`
    `syncMCGGPlayers();`
  - [`app.js:10833`](app.js#L10833) — di dalam fungsi `clearAllData()`
    `syncMCGGPlayers();`
- **Memanggil Fungsi Internal:** [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`findPrevious()`](#findprevious), [`getDepartmentCluster()`](#getdepartmentcluster), [`mapPlayerObj()`](#mapplayerobj), [`syncMCGGSemiFinal()`](#syncmcggsemifinal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`renderMCGGTable()`](#rendermcggtable), [`allocateLobbiesByCluster()`](#allocatelobbiesbycluster)

<a id="allocatelobbiesbycluster"></a>
#### `allocateLobbiesByCluster(playerList, lobbyKeys, targetCaps)`

- **Definisi:** [`app.js:9080`](app.js#L9080)
- **Deskripsi:** Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase Awal)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9222`](app.js#L9222) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, ['LOBBY_A', 'LOBBY_B'], [countA, countB]);`
  - [`app.js:9239`](app.js#L9239) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`
  - [`functional_tests.js:1094`](functional_tests.js#L1094) — pada skenario pengujian
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`

<a id="shufflemcggplayers"></a>
#### `shuffleMCGGPlayers()`

- **Definisi:** [`app.js:9255`](app.js#L9255)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:593`](index.html#L593) — Event `onclick`
    `<button id="adminShuffleMCGG" class="btn btn-gold" style="display: none; font-size: 0.85rem;" onclic`
  - [`functional_tests.js:651`](functional_tests.js#L651) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function shuffleMCGGPlayers()'), 'Harus ada fungsi shuffleMCGGPlayers()');`
- **Memanggil Fungsi Internal:** [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="ismcgglobbypointsfull"></a>
#### `isMCGGLobbyPointsFull(lobbyKey)`

- **Definisi:** [`app.js:9272`](app.js#L9272)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:9281`](app.js#L9281) — di dalam fungsi `isMCGGQualificationFull()`
    `return qualKeys.every(k => isMCGGLobbyPointsFull(k));`
  - [`app.js:9286`](app.js#L9286) — di dalam fungsi `isMCGGSemiFinalFull()`
    `return isMCGGLobbyPointsFull('SEMI_A') && isMCGGLobbyPointsFull('SEMI_B');`
  - [`app.js:10469`](app.js#L10469) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isLobbyFull = isMCGGLobbyPointsFull('LOBBY_A');`
  - [`app.js:10482`](app.js#L10482) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isThisLobbyFull = isMCGGLobbyPointsFull(lobbyKey);`

<a id="ismcggqualificationfull"></a>
#### `isMCGGQualificationFull()`

- **Definisi:** [`app.js:9278`](app.js#L9278)
- **Deskripsi:** Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3 ronde).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:9331`](app.js#L9331) — di dalam fungsi `syncMCGGSemiFinal()`
    `const isQualDone = isMCGGQualificationFull();`
  - [`app.js:9455`](app.js#L9455) — di dalam fungsi `syncMCGGGrandFinal()`
    `const isFull = isMCGGQualificationFull();`
  - [`app.js:9494`](app.js#L9494) — di dalam fungsi `updateMCGGRank()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9532`](app.js#L9532) — di dalam fungsi `updateMCGGCommander()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9565`](app.js#L9565) — di dalam fungsi `updateMCGGPenalty()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9851`](app.js#L9851) — di dalam fungsi `drawMatchPool()`
    `if (lobbyKey === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:10113`](app.js#L10113) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10145`](app.js#L10145) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10211`](app.js#L10211) — di dalam fungsi `renderMCGGTable()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10416`](app.js#L10416) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`functional_tests.js:625`](functional_tests.js#L625) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isMCGGQualificationFull()'), 'app.js harus memeriksa apakah poin kualifikas`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="ismcggsemifinalfull"></a>
#### `isMCGGSemiFinalFull()`

- **Definisi:** [`app.js:9284`](app.js#L9284)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9425`](app.js#L9425) — di dalam fungsi `syncMCGGGrandFinal()`
    `const semiDone = isMCGGSemiFinalFull();`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="comparemcggplayers"></a>
#### `compareMCGGPlayers(a, b)`

- **Definisi:** [`app.js:9296`](app.js#L9296)
- **Deskripsi:** Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir (besar ke kecil) 2. Juara 1 / MVP Ronde (banyaknya finish posisi 1, besar ke kecil) 3. Top 4 Finish (banyaknya finish posisi 1-4, besar ke kecil) 4. Pengurangan Poin / Penalti (makin sering kena pengurangan makin bawah jika poin dkk sama: deductA - deductB) 5. Breakdown Posisi Finish Ronde 1 s/d 8 6. Nama Pemain (A-Z)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncmcggsemifinal"></a>
#### `syncMCGGSemiFinal()`

- **Definisi:** [`app.js:9327`](app.js#L9327)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9189`](app.js#L9189) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
  - [`app.js:9246`](app.js#L9246) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`findPrevSemi()`](#findprevsemi)

<a id="syncmcgggrandfinal"></a>
#### `syncMCGGGrandFinal()`

- **Definisi:** [`app.js:9394`](app.js#L9394)
- **Deskripsi:** Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final setelah ronde kualifikasi penuh.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:2518`](app.js#L2518) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `syncMCGGGrandFinal();`
  - [`app.js:9190`](app.js#L9190) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9223`](app.js#L9223) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9247`](app.js#L9247) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9509`](app.js#L9509) — di dalam fungsi `updateMCGGRank()`
    `syncMCGGGrandFinal();`
  - [`app.js:9580`](app.js#L9580) — di dalam fungsi `updateMCGGPenalty()`
    `syncMCGGGrandFinal();`
  - [`app.js:10318`](app.js#L10318) — di dalam fungsi `renderMCGGTable()`
    `syncMCGGGrandFinal();`
- **Memanggil Fungsi Internal:** [`findPrevInArr()`](#findprevinarr), [`isMCGGSemiFinalFull()`](#ismcggsemifinalfull), [`mapGFPlayer()`](#mapgfplayer), [`isMCGGQualificationFull()`](#ismcggqualificationfull)

<a id="updatemcggrank"></a>
#### `updateMCGGRank(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:9478`](app.js#L9478)
- **Deskripsi:** Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin otomatis (+4 s/d -4).
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10586`](app.js#L10586) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGRank('${lobbyKey}', ${originalIdx}, '${roundKey}', this.value)" style="p`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggcommander"></a>
#### `updateMCGGCommander(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:9516`](app.js#L9516)
- **Deskripsi:** Memperbarui pilihan commander pemain dan memicu validasi duplikasi commander ronde 2.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10582`](app.js#L10582) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGCommander('${lobbyKey}', ${originalIdx}, '${cmdKey}', this.value)" style`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggpenalty"></a>
#### `updateMCGGPenalty(arg1, arg2, arg3)`

- **Definisi:** [`app.js:9551`](app.js#L9551)
- **Deskripsi:** Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumulasi poin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10606`](app.js#L10606) — di dalam fungsi `buildPenaltySelect()`
    `<select onchange="updateMCGGPenalty('${lobbyKey}', ${originalIdx}, this.value)" style="padding: 0.25`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="renderlobbycommanderdrawpanelhtml"></a>
#### `renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)`

- **Definisi:** [`app.js:9590`](app.js#L9590)
- **Deskripsi:** MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10386`](app.js#L10386) — di dalam fungsi `renderMCGGTable()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}`
  - [`app.js:12148`](app.js#L12148) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`app.js:12253`](app.js#L12253) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`functional_tests.js:798`](functional_tests.js#L798) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderLobbyCommanderDrawPanelHtml('), 'Harus memiliki generator pa`
  - [`functional_tests.js:802`](functional_tests.js#L802) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}'), 'Panel `
- **Memanggil Fungsi Internal:** [`switchLobbyDrawView()`](#switchlobbydrawview), [`copyCommanderDrawText()`](#copycommanderdrawtext), [`resetLobbyDraw()`](#resetlobbydraw), [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers), [`toggleLockMatchDraw()`](#togglelockmatchdraw), [`nextMatchDraw()`](#nextmatchdraw), [`showMatch3DraftInfo()`](#showmatch3draftinfo), [`renderCommanderCardVisualHtml()`](#rendercommandercardvisualhtml), [`escapeHtml()`](#escapehtml)

<a id="drawmatchcommanders"></a>
#### `drawMatchCommanders(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:10010`](app.js#L10010)
- **Deskripsi:** Backward compatibility helper
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10380`](app.js#L10380) — di dalam fungsi `renderMCGGTable()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.3rem 0.65rem; ${(!isRegistration`
  - [`functional_tests.js:741`](functional_tests.js#L741) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function drawMatchCommanders('), 'drawMatchCommanders harus tersedia');`
  - [`functional_tests.js:799`](functional_tests.js#L799) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('drawMatchCommanders(matchNum, targetLobbyKey)'), 'drawMatchCommanders harus`
- **Memanggil Fungsi Internal:** [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers)

<a id="switchlobbydrawview"></a>
#### `switchLobbyDrawView(lobbyKey, matchNum)`

- **Definisi:** [`app.js:10016`](app.js#L10016)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:9638`](app.js#L9638) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 1 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:9641`](app.js#L9641) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 2 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:9693`](app.js#L9693) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:9696`](app.js#L9696) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`functional_tests.js:800`](functional_tests.js#L800) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function switchLobbyDrawView('), 'Harus memiliki fungsi switch view match 1`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="resetlobbydraw"></a>
#### `resetLobbyDraw(lobbyKey)`

- **Definisi:** [`app.js:10022`](app.js#L10022)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9647`](app.js#L9647) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem; font-size:0.75rem; color:var(--yokke`
  - [`functional_tests.js:801`](functional_tests.js#L801) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetLobbyDraw('), 'Harus memiliki fungsi reset undian per-lobi re`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="copycommanderdrawtext"></a>
#### `copyCommanderDrawText(lobbyKey)`

- **Definisi:** [`app.js:10043`](app.js#L10043)
- **Deskripsi:** Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk dibagikan ke WhatsApp grup.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9644`](app.js#L9644) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem; margin-left:auto;`
  - [`app.js:9699`](app.js#L9699) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCom`
- **Memanggil Fungsi Internal:** [`getCommanderFormattedName()`](#getcommanderformattedname)

<a id="changecommanderdrawtarget"></a>
#### `changeCommanderDrawTarget(val)`

- **Definisi:** [`app.js:10089`](app.js#L10089)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10097`](app.js#L10097) — di dalam fungsi `setDrawTargetAndScroll()`
    `changeCommanderDrawTarget(lobbyKey);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="scrolltomcgglobby"></a>
#### `scrollToMCGGLobby(lobbyKey)`

- **Definisi:** [`app.js:10101`](app.js#L10101)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10098`](app.js#L10098) — di dalam fungsi `setDrawTargetAndScroll()`
    `scrollToMCGGLobby(lobbyKey);`
  - [`app.js:10138`](app.js#L10138) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`functional_tests.js:699`](functional_tests.js#L699) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function scrollToMCGGLobby('), 'app.js harus menyediakan fungsi scrollToMCG`

<a id="rendermcgglobbyanchorbar"></a>
#### `renderMCGGLobbyAnchorBar()`

- **Definisi:** [`app.js:10108`](app.js#L10108)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:10184`](app.js#L10184) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `renderMCGGLobbyAnchorBar();`
  - [`functional_tests.js:697`](functional_tests.js#L697) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderMCGGLobbyAnchorBar('), 'app.js harus memiliki generator rend`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="rendermcgglobbyselectoptions"></a>
#### `renderMCGGLobbySelectOptions()`

- **Definisi:** [`app.js:10144`](app.js#L10144)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9192`](app.js#L9192) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:9251`](app.js#L9251) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:10208`](app.js#L10208) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGLobbySelectOptions();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar)

<a id="rendermcggtable"></a>
#### `renderMCGGTable()`

- **Definisi:** [`app.js:10187`](app.js#L10187)
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
  - [`app.js:954`](app.js#L954) — di dalam fungsi `bypassLoaderWithCache()`
    `renderMCGGTable();`
  - [`app.js:1514`](app.js#L1514) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderMCGGTable();`
  - [`app.js:2344`](app.js#L2344) — di dalam fungsi `verifyAdminPin()`
    `renderMCGGTable();`
  - [`app.js:2391`](app.js#L2391) — di dalam fungsi `logoutAdmin()`
    `renderMCGGTable();`
  - [`app.js:2479`](app.js#L2479) — di dalam fungsi `toggleRegistrationStatus()`
    `renderMCGGTable();`
  - [`app.js:2521`](app.js#L2521) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `renderMCGGTable();`
  - [`app.js:5039`](app.js#L5039) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `renderMCGGTable();`
  - [`app.js:8954`](app.js#L8954) — di dalam fungsi `changeMCGGLobby()`
    `renderMCGGTable();`
  - [`app.js:9025`](app.js#L9025) — di dalam fungsi `updateCommanderPoolFromSetup()`
    `renderMCGGTable();`
  - [`app.js:9193`](app.js#L9193) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:9252`](app.js#L9252) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:9513`](app.js#L9513) — di dalam fungsi `updateMCGGRank()`
    `renderMCGGTable();`
  - [`app.js:9548`](app.js#L9548) — di dalam fungsi `updateMCGGCommander()`
    `renderMCGGTable();`
  - [`app.js:9584`](app.js#L9584) — di dalam fungsi `updateMCGGPenalty()`
    `renderMCGGTable();`
  - [`app.js:9909`](app.js#L9909) — di dalam fungsi `drawMatchPool()`
    `renderMCGGTable();`
  - [`app.js:9960`](app.js#L9960) — di dalam fungsi `assignMatchPoolToPlayers()`
    `renderMCGGTable();`
  - [`app.js:9980`](app.js#L9980) — di dalam fungsi `toggleLockMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:10006`](app.js#L10006) — di dalam fungsi `nextMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:10019`](app.js#L10019) — di dalam fungsi `switchLobbyDrawView()`
    `renderMCGGTable();`
  - [`app.js:10039`](app.js#L10039) — di dalam fungsi `resetLobbyDraw()`
    `renderMCGGTable();`
  - [`app.js:10093`](app.js#L10093) — di dalam fungsi `changeCommanderDrawTarget()`
    `renderMCGGTable();`
  - [`app.js:10832`](app.js#L10832) — di dalam fungsi `clearAllData()`
    `renderMCGGTable();`
  - [`app.js:10855`](app.js#L10855) — cakupan global / event handler
    `renderMCGGTable();`
  - [`app.js:10976`](app.js#L10976) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGTable();`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`goToMCGGGroupPage()`](#gotomcgggrouppage), [`setMCGGStageFilter()`](#setmcggstagefilter), [`prevMCGGGroupPage()`](#prevmcgggrouppage), [`nextMCGGGroupPage()`](#nextmcgggrouppage), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`drawMatchCommanders()`](#drawmatchcommanders), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml)

<a id="getlobbyshortlabel"></a>
#### `getLobbyShortLabel(k)`

- **Definisi:** [`app.js:10244`](app.js#L10244)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="renderlobbyrowshtml"></a>
#### `renderLobbyRowsHtml(list, lobbyKey, isSingleLobby)`

- **Definisi:** [`app.js:10414`](app.js#L10414)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10305`](app.js#L10305) — di dalam fungsi `renderMCGGTable()`
    `legacyTbody.innerHTML = renderLobbyRowsHtml(singleList, currentMCGGLobby, isSingleLobby);`
  - [`app.js:10366`](app.js#L10366) — di dalam fungsi `renderMCGGTable()`
    `const rowsHtml = renderLobbyRowsHtml(currentList, lobbyKey, isSingleLobby);`
  - [`app.js:12169`](app.js#L12169) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:12271`](app.js#L12271) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:12318`](app.js#L12318) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, 'GRAND_FINAL', false)}`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull), [`escapeHtml()`](#escapehtml), [`buildRoundCell()`](#buildroundcell), [`buildPenaltySelect()`](#buildpenaltyselect)

<a id="buildpenaltyselect"></a>
#### `buildPenaltySelect(player, targetLobby)`

- **Definisi:** [`app.js:10593`](app.js#L10593)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10508`](app.js#L10508) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td style="text-align: center;">${buildPenaltySelect(p, lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`updateMCGGPenalty()`](#updatemcggpenalty)

<a id="setmcggviewmode"></a>
#### `setMCGGViewMode(mode)`

- **Definisi:** [`app.js:10950`](app.js#L10950)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MCGG ---
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:617`](index.html#L617) — Event `onclick`
    `<button type="button" id="btnViewMcggHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:620`](index.html#L620) — Event `onclick`
    `<button type="button" id="btnViewMcggLobbies" class="btn btn-outline" style="font-size: 0.8rem; padd`
  - [`app.js:2729`](app.js#L2729) — di dalam fungsi `switchTab()`
    `setMCGGViewMode('HUB');`
  - [`functional_tests.js:1171`](functional_tests.js#L1171) — pada skenario pengujian
    `assert(appCode.includes('function setMCGGViewMode('), 'app.js harus memiliki fungsi setMCGGViewMode'`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGTable()`](#rendermcggtable)

<a id="selectmcggflownode"></a>
#### `selectMCGGFlowNode(nodeKey)`

- **Definisi:** [`app.js:11986`](app.js#L11986)
- **Deskripsi:** ---------------------------------------------------------------------------- 2. MASTER-DETAIL INTERACTIVE HUB MCGG ----------------------------------------------------------------------------
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:12022`](app.js#L12022) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:12045`](app.js#L12045) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE2_WILDCARD' ? 'active' : ''}" oncl`
  - [`app.js:12055`](app.js#L12055) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:12076`](app.js#L12076) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_A' ? 'active' : ''}" onclic`
  - [`app.js:12080`](app.js#L12080) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_B' ? 'active' : ''}" onclic`
  - [`app.js:12100`](app.js#L12100) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'STAGE4_GRAND_FINAL' ? 'active'`
  - [`functional_tests.js:1173`](functional_tests.js#L1173) — pada skenario pengujian
    `assert(appCode.includes('function selectMCGGFlowNode('), 'app.js harus memiliki selectMCGGFlowNode')`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

<a id="rendermcgginteractivehubui"></a>
#### `renderMCGGInteractiveHubUI()`

- **Definisi:** [`app.js:11991`](app.js#L11991)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10201`](app.js#L10201) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:10969`](app.js#L10969) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:11988`](app.js#L11988) — di dalam fungsi `selectMCGGFlowNode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:12333`](app.js#L12333) — di dalam fungsi `shuffleMCGG32Besar()`
    `renderMCGGInteractiveHubUI();`
  - [`functional_tests.js:1172`](functional_tests.js#L1172) — pada skenario pengujian
    `assert(appCode.includes('function renderMCGGInteractiveHubUI()'), 'app.js harus memiliki renderMCGGI`
- **Memanggil Fungsi Internal:** [`selectMCGGFlowNode()`](#selectmcggflownode), [`renderMCGGDetailPanelContent()`](#rendermcggdetailpanelcontent)

<a id="rendermcggdetailpanelcontent"></a>
#### `renderMCGGDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:12119`](app.js#L12119)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:12113`](app.js#L12113) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `rightHtml += renderMCGGDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`shuffleMCGG32Besar()`](#shufflemcgg32besar)

<a id="shufflemcgg32besar"></a>
#### `shuffleMCGG32Besar()`

- **Definisi:** [`app.js:12328`](app.js#L12328)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:12213`](app.js#L12213) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `<button class="btn btn-gold" style="padding:0.3rem 0.75rem;font-size:0.78rem;" onclick="shuffleMCGG3`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

---

### ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine)

<a id="prevmlbbgrouppage"></a>
#### `prevMLBBGroupPage()`

- **Definisi:** [`app.js:13`](app.js#L13)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:537`](index.html#L537) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMLBBGroupPage()" i`
  - [`app.js:6523`](app.js#L6523) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:847`](functional_tests.js#L847) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMLBBGroupPage()'), 'Harus ada fungsi prevMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="nextmlbbgrouppage"></a>
#### `nextMLBBGroupPage()`

- **Definisi:** [`app.js:20`](app.js#L20)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:543`](index.html#L543) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMLBBGroupPage()" `
  - [`app.js:6526`](app.js#L6526) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:848`](functional_tests.js#L848) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMLBBGroupPage()'), 'Harus ada fungsi nextMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="gotomlbbgrouppage"></a>
#### `goToMLBBGroupPage(pg)`

- **Definisi:** [`app.js:27`](app.js#L27)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6514`](app.js#L6514) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="group-nav-tab-btn ${p === mlbbGroupPageIndex ? 'active' : ''}" onclick=`
  - [`functional_tests.js:849`](functional_tests.js#L849) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function goToMLBBGroupPage('), 'Harus ada fungsi goToMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="toggleallmlbbfixtures"></a>
#### `toggleAllMLBBFixtures()`

- **Definisi:** [`app.js:32`](app.js#L32)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="getverifiedmlbbteams"></a>
#### `getVerifiedMLBBTeams()`

- **Definisi:** [`app.js:3952`](app.js#L3952)
- **Deskripsi:** TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3968`](app.js#L3968) — di dalam fungsi `getActiveMLBBFormat()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:4897`](app.js#L4897) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:5287`](app.js#L5287) — di dalam fungsi `generateBracket()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:5616`](app.js#L5616) — di dalam fungsi `generateGroupStage()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`functional_tests.js:576`](functional_tests.js#L576) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMLBBTeams()'), 'Harus ada fungsi getVerifiedMLBBTeams()`

<a id="getactivemlbbformat"></a>
#### `getActiveMLBBFormat()`

- **Definisi:** [`app.js:3960`](app.js#L3960)
- **Deskripsi:** Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N >= 12 tim).
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5623`](app.js#L5623) — di dalam fungsi `generateGroupStage()`
    `const activeFormat = getActiveMLBBFormat();`
  - [`functional_tests.js:577`](functional_tests.js#L577) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getActiveMLBBFormat()'), 'Harus ada fungsi getActiveMLBBFormat()')`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="rendercurrentmlbbformat"></a>
#### `renderCurrentMLBBFormat()`

- **Definisi:** [`app.js:3996`](app.js#L3996)
- **Titik Pemanggilan (20 lokasi):**
  - [`app.js:937`](app.js#L937) — di dalam fungsi `confirmResetBaganWithPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:953`](app.js#L953) — di dalam fungsi `bypassLoaderWithCache()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1534`](app.js#L1534) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2343`](app.js#L2343) — di dalam fungsi `verifyAdminPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2390`](app.js#L2390) — di dalam fungsi `logoutAdmin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2478`](app.js#L2478) — di dalam fungsi `toggleRegistrationStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3414`](app.js#L3414) — di dalam fungsi `setParticipantStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3467`](app.js#L3467) — di dalam fungsi `deleteParticipant()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3692`](app.js#L3692) — di dalam fungsi `saveParticipantEdit()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3992`](app.js#L3992) — di dalam fungsi `changeTournamentFormat()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4068`](app.js#L4068) — di dalam fungsi `toggleLockMLBBGroup()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4152`](app.js#L4152) — di dalam fungsi `proceedToMLBBStage2()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4197`](app.js#L4197) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderCurrentMLBBFormat === 'function') renderCurrentMLBBFormat();`
  - [`app.js:4253`](app.js#L4253) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4653`](app.js#L4653) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4978`](app.js#L4978) — di dalam fungsi `resetMLBBToStage1()`
    `renderCurrentMLBBFormat();`
  - [`app.js:10817`](app.js#L10817) — di dalam fungsi `loadSampleData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:10831`](app.js#L10831) — di dalam fungsi `clearAllData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:10854`](app.js#L10854) — cakupan global / event handler
    `renderCurrentMLBBFormat();`
  - [`app.js:11009`](app.js#L11009) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `renderCurrentMLBBFormat();`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="togglelockmlbbgroup"></a>
#### `toggleLockMLBBGroup()`

- **Definisi:** [`app.js:4052`](app.js#L4052)
- **Deskripsi:** 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:484`](index.html#L484) — Event `onclick`
    `<button id="btnLockMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="isallmlbbgroupmatchesfinished"></a>
#### `isAllMLBBGroupMatchesFinished()`

- **Definisi:** [`app.js:4072`](app.js#L4072)
- **Deskripsi:** Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan memiliki pemenang.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4133`](app.js#L4133) — di dalam fungsi `proceedToMLBBStage2()`
    `if (!isAllMLBBGroupMatchesFinished()) {`
  - [`functional_tests.js:752`](functional_tests.js#L752) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function isAllMLBBGroupMatchesFinished()'), 'Harus ada fungsi isAllMLBBGrou`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="evaluatemlbbtiebreaker"></a>
#### `evaluateMLBBTieBreaker()`

- **Definisi:** [`app.js:4083`](app.js#L4083)
- **Deskripsi:** Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosan babak Playoff.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4137`](app.js#L4137) — di dalam fungsi `proceedToMLBBStage2()`
    `if (evaluateMLBBTieBreaker()) {`
  - [`functional_tests.js:759`](functional_tests.js#L759) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function evaluateMLBBTieBreaker()'), 'Harus ada fungsi evaluateMLBBTieBreak`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`saveStageStateLocal()`](#savestagestatelocal)

<a id="resolvemlbbtiebreaker"></a>
#### `resolveMLBBTieBreaker(winnerTeam)`

- **Definisi:** [`app.js:4108`](app.js#L4108)
- **Deskripsi:** Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan +1 poin penentu ke klasemen.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6691`](app.js#L6691) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:6692`](app.js#L6692) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`functional_tests.js:760`](functional_tests.js#L760) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resolveMLBBTieBreaker('), 'Harus ada fungsi resolveMLBBTieBreaker'`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="proceedtomlbbstage2"></a>
#### `proceedToMLBBStage2()`

- **Definisi:** [`app.js:4127`](app.js#L4127)
- **Deskripsi:** Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Bagan Playoff).
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:485`](index.html#L485) — Event `onclick`
    `<button id="btnProceedMLBBStage2" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`app.js:8844`](app.js#L8844) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: var(--`
  - [`functional_tests.js:753`](functional_tests.js#L753) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function proceedToMLBBStage2()'), 'Harus ada fungsi proceedToMLBBStage2');`
- **Memanggil Fungsi Internal:** [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`renderGroupStageUI()`](#rendergroupstageui), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="refreshandscrolltoplayoffbracket"></a>
#### `refreshAndScrollToPlayoffBracket()`

- **Definisi:** [`app.js:4163`](app.js#L4163)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4157`](app.js#L4157) — di dalam fungsi `proceedToMLBBStage2()`
    `refreshAndScrollToPlayoffBracket();`
  - [`app.js:4258`](app.js#L4258) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `refreshAndScrollToPlayoffBracket();`
  - [`app.js:11016`](app.js#L11016) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `refreshAndScrollToPlayoffBracket();`
- **Memanggil Fungsi Internal:** [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="refreshandscrolltogrouporbracket"></a>
#### `refreshAndScrollToGroupOrBracket()`

- **Definisi:** [`app.js:4192`](app.js#L4192)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4041`](app.js#L4041) — di dalam fungsi `shuffleAndGenerateTournament()`
    `refreshAndScrollToGroupOrBracket();`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderBracket()`](#renderbracket), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat)

<a id="shufflemlbbplayoffbracket"></a>
#### `shuffleMLBBPlayoffBracket()`

- **Definisi:** [`app.js:4218`](app.js#L4218)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:487`](index.html#L487) — Event `onclick`
    `<button id="btnShuffleMLBBPlayoff" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`app.js:8897`](app.js#L8897) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700; ${i`
  - [`app.js:11314`](app.js#L11314) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-gold" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-wei`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="togglelockmlbbplayoff"></a>
#### `toggleLockMLBBPlayoff()`

- **Definisi:** [`app.js:4273`](app.js#L4273)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:488`](index.html#L488) — Event `onclick`
    `<button id="btnLockMLBBPlayoff" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`app.js:8894`](app.js#L8894) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn ${isPlayoffLocked ? 'btn-gold' : 'btn-outline'}" style="font-size:0.75rem; paddin`
  - [`app.js:11311`](app.js#L11311) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${isPlayoffLocked ? 'btn-gold' : 'btn-outline'}" style="font-size:0`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="openplayoffscoremodal"></a>
#### `openPlayoffScoreModal(rIdx, mIdx, preselectWinner = null)`

- **Definisi:** [`app.js:4312`](app.js#L4312)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4563`](app.js#L4563) — di dalam fungsi `onPlayoffTeamClicked()`
    `openPlayoffScoreModal(rIdx, mIdx, teamName);`
  - [`app.js:4587`](app.js#L4587) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<button type="button" class="btn-playoff-score" onclick="event.stopPropagation(); openPlayoffScoreMo`
  - [`app.js:11079`](app.js#L11079) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<button type="button" class="btn-playoff-score" onclick="event.stopPropagation(); openPlayoffScoreMo`
  - [`app.js:11867`](app.js#L11867) — cakupan global / event handler
    `<button type="button" class="btn btn-primary" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-`
  - [`app.js:11971`](app.js#L11971) — cakupan global / event handler
    `<button type="button" class="btn btn-gold" style="font-size:0.85rem; padding:0.45rem 1rem; font-weig`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`isSameTeamName()`](#issameteamname), [`escapeHtml()`](#escapehtml), [`setPlayoffModalQuickScore()`](#setplayoffmodalquickscore), [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="closeplayoffscoremodal"></a>
#### `closePlayoffScoreModal()`

- **Definisi:** [`app.js:4402`](app.js#L4402)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:978`](index.html#L978) — Event `onclick`
    `<div id="playoffScoreModal" class="modal-overlay" onclick="if(event.target === this) closePlayoffSco`
  - [`index.html:989`](index.html#L989) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.85rem;" on`
  - [`index.html:1051`](index.html#L1051) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.75rem;" on`
  - [`app.js:4484`](app.js#L4484) — di dalam fungsi `savePlayoffModalScore()`
    `closePlayoffScoreModal();`
  - [`app.js:4493`](app.js#L4493) — di dalam fungsi `resetPlayoffModalScore()`
    `closePlayoffScoreModal();`

<a id="stepplayoffmodalscore"></a>
#### `stepPlayoffModalScore(team, delta)`

- **Definisi:** [`app.js:4408`](app.js#L4408)
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:1007`](index.html#L1007) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 1rem; font-w`
  - [`index.html:1009`](index.html#L1009) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 1rem; font-w`
  - [`index.html:1024`](index.html#L1024) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 1rem; font-w`
  - [`index.html:1026`](index.html#L1026) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 1rem; font-w`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="setplayoffmodalquickscore"></a>
#### `setPlayoffModalQuickScore(sA, sB)`

- **Definisi:** [`app.js:4423`](app.js#L4423)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4392`](app.js#L4392) — di dalam fungsi `openPlayoffScoreModal()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem; font`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="onplayoffscoreinputchanged"></a>
#### `onPlayoffScoreInputChanged()`

- **Definisi:** [`app.js:4434`](app.js#L4434)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1008`](index.html#L1008) — Event `oninput`
    `<input type="number" id="playoffModalScoreA" min="0" max="5" value="0" style="width: 52px; font-size`
  - [`index.html:1025`](index.html#L1025) — Event `oninput`
    `<input type="number" id="playoffModalScoreB" min="0" max="5" value="0" style="width: 52px; font-size`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="updateplayoffmodalwinnerpreview"></a>
#### `updatePlayoffModalWinnerPreview()`

- **Definisi:** [`app.js:4445`](app.js#L4445)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4398`](app.js#L4398) — di dalam fungsi `openPlayoffScoreModal()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4420`](app.js#L4420) — di dalam fungsi `stepPlayoffModalScore()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4431`](app.js#L4431) — di dalam fungsi `setPlayoffModalQuickScore()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4442`](app.js#L4442) — di dalam fungsi `onPlayoffScoreInputChanged()`
    `updatePlayoffModalWinnerPreview();`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="saveplayoffmodalscore"></a>
#### `savePlayoffModalScore()`

- **Definisi:** [`app.js:4475`](app.js#L4475)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1054`](index.html#L1054) — Event `onclick`
    `<button type="button" id="btnSavePlayoffScore" class="btn btn-primary" style="font-size: 0.8rem; pad`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`setPlayoffMatchScore()`](#setplayoffmatchscore), [`closePlayoffScoreModal()`](#closeplayoffscoremodal)

<a id="resetplayoffmodalscore"></a>
#### `resetPlayoffModalScore()`

- **Definisi:** [`app.js:4488`](app.js#L4488)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1047`](index.html#L1047) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.75rem; bor`
- **Memanggil Fungsi Internal:** [`resetPlayoffMatchScore()`](#resetplayoffmatchscore), [`closePlayoffScoreModal()`](#closeplayoffscoremodal)

<a id="setplayoffmatchscore"></a>
#### `setPlayoffMatchScore(rIdx, mIdx, scoreA, scoreB)`

- **Definisi:** [`app.js:4496`](app.js#L4496)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4482`](app.js#L4482) — di dalam fungsi `savePlayoffModalScore()`
    `const ok = setPlayoffMatchScore(rIdx, mIdx, scoreA, scoreB);`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`pickGroupPlayoffWinner()`](#pickgroupplayoffwinner), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`escapeHtml()`](#escapehtml)

<a id="resetplayoffmatchscore"></a>
#### `resetPlayoffMatchScore(rIdx, mIdx)`

- **Definisi:** [`app.js:4537`](app.js#L4537)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4492`](app.js#L4492) — di dalam fungsi `resetPlayoffModalScore()`
    `resetPlayoffMatchScore(rIdx, mIdx);`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast)

<a id="onplayoffteamclicked"></a>
#### `onPlayoffTeamClicked(rIdx, mIdx, teamName)`

- **Definisi:** [`app.js:4556`](app.js#L4556)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4593`](app.js#L4593) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamA ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:4601`](app.js#L4601) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamB ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:11085`](app.js#L11085) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamA ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:11093`](app.js#L11093) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamB ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`showToast()`](#showtoast), [`openPlayoffScoreModal()`](#openplayoffscoremodal)

<a id="renderplayoffmatchcardhtml"></a>
#### `renderPlayoffMatchCardHtml(m, rIdx, mIdx, activeNodeKey = '', isIncoming = false, isLower = false)`

- **Definisi:** [`app.js:4566`](app.js#L4566)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8929`](app.js#L8929) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m1, rIdx, i, '', isIncoming, isLower)}`
  - [`app.js:8930`](app.js#L8930) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m2, rIdx, i + 1, '', isIncoming, isLower)}`
  - [`app.js:8938`](app.js#L8938) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m1, rIdx, i, '', isIncoming, isLower)}`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`openPlayoffScoreModal()`](#openplayoffscoremodal), [`onPlayoffTeamClicked()`](#onplayoffteamclicked), [`escapeHtml()`](#escapehtml)

<a id="testmlbbplayoffwithcurrentstandings"></a>
#### `testMLBBPlayoffWithCurrentStandings()`

- **Definisi:** [`app.js:4625`](app.js#L4625)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:1114`](index.html#L1114) — Event `onclick`
    `<button class="btn btn-gold" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; font-`
  - [`app.js:4780`](app.js#L4780) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;" on`
  - [`app.js:8847`](app.js#L8847) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="padding: 0.45rem 1rem; font-size: 0.85rem; border-color: var(`
  - [`app.js:8900`](app.js#L8900) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(`
  - [`app.js:11317`](app.js#L11317) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.8rem; padding:0.4rem 0.85rem; borde`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openTestDrawModal()`](#opentestdrawmodal), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`setMLBBViewMode()`](#setmlbbviewmode), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`findTeamGroupAndRank()`](#findteamgroupandrank), [`escapeHtml()`](#escapehtml), [`getSortedGroupTeams()`](#getsortedgroupteams), [`openTestDrawInNewWindow()`](#opentestdrawinnewwindow), [`closeTestDrawModal()`](#closetestdrawmodal)

<a id="testmlbbgroupallocationdraw"></a>
#### `testMLBBGroupAllocationDraw()`

- **Definisi:** [`app.js:4895`](app.js#L4895)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1098`](index.html#L1098) — Event `onclick`
    `<button class="btn btn-outline" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; bo`
  - [`app.js:4917`](app.js#L4917) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.6rem; font-weight:700;" onc`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`showToast()`](#showtoast), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`openTestDrawInNewWindow()`](#opentestdrawinnewwindow), [`getTeamDept()`](#getteamdept), [`isTeamInvited()`](#isteaminvited), [`escapeHtml()`](#escapehtml)

<a id="resetmlbbtostage1"></a>
#### `resetMLBBToStage1()`

- **Definisi:** [`app.js:4970`](app.js#L4970)
- **Deskripsi:** Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor jika diperlukan.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:486`](index.html#L486) — Event `onclick`
    `<button id="btnResetMLBBStage1" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`functional_tests.js:754`](functional_tests.js#L754) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMLBBToStage1()'), 'Harus ada fungsi resetMLBBToStage1');`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resettotalmlbbgroupandbracket"></a>
#### `resetTotalMLBBGroupAndBracket()`

- **Definisi:** [`app.js:4982`](app.js#L4982)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:490`](index.html#L490) — Event `onclick`
    `<button id="btnResetTotalMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5r`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openResetBaganModal()`](#openresetbaganmodal)

<a id="generatebracket"></a>
#### `generateBracket(doShuffle = false)`

- **Definisi:** [`app.js:5277`](app.js#L5277)
- **Deskripsi:** --- KNOCKOUT BRACKET ---
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:475`](index.html#L475) — Event `onchange`
    `<select id="bracketSize" onchange="generateBracket()" style="padding: 0.5rem 0.8rem; font-size: 0.85`
  - [`app.js:3985`](app.js#L3985) — di dalam fungsi `changeTournamentFormat()`
    `generateBracket(false);`
  - [`app.js:4035`](app.js#L4035) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateBracket(true);`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="renderbracket"></a>
#### `renderBracket()`

- **Definisi:** [`app.js:5350`](app.js#L5350)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4013`](app.js#L4013) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderBracket();`
  - [`app.js:4195`](app.js#L4195) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderBracket === 'function') renderBracket();`
  - [`app.js:5283`](app.js#L5283) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:5327`](app.js#L5327) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:5347`](app.js#L5347) — di dalam fungsi `pickWinner()`
    `renderBracket();`
- **Memanggil Fungsi Internal:** [`pickWinner()`](#pickwinner)

<a id="allocatemlbbgroups"></a>
#### `allocateMLBBGroups(teamsList, groupNames, doShuffle = false)`

- **Definisi:** [`app.js:5425`](app.js#L5425)
- **Deskripsi:** Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi): 1. Acak tim invited ke masing-masing group (tidak boleh ada di group yang sama). 2. Acak urutan tim sisanya (tim reguler). 3. Masukkan tim sesuai urutan acak ke masing-masing group: - Penempatan tim selalu memprioritaskan grup dengan jumlah peserta/tim terkecil terlebih dahulu. - Siklus 1: Cek nama depan sama (satelit) ATAU divisi sama -> jika bentrok, ke next group. - Siklus 2: Jika dalam 1 cycle tetap tidak dapat group -> masukkan ke group berikutnya jika tidak ada nama depan sama (aturan divisi dilanggar terlebih dahulu). - Siklus 3: Jika dalam 1 cycle berikutnya masih tidak dapat -> masukkan ke group berikutnya (aturan satelit dilanggar demi menjaga keseimbangan kapasitas). Invarian Mutlak: Keseimbangan kapasitas grup dijaga ketat (misal 41 tim ke 8 grup = tepat 7 grup isi 5 tim dan 1 grup isi 6 tim). /
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4904`](app.js#L4904) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, true);`
  - [`app.js:5635`](app.js#L5635) — di dalam fungsi `generateGroupStage()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, doShuffle);`
  - [`functional_tests.js:885`](functional_tests.js#L885) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('allocateMLBBGroups('), 'app.js harus memiliki fungsi alokasi grup cerdas');`
- **Memanggil Fungsi Internal:** [`getTeamPrefix()`](#getteamprefix), [`getTeamDept()`](#getteamdept), [`getDepartmentCluster()`](#getdepartmentcluster), [`isTeamInvited()`](#isteaminvited), [`isInvited()`](#isinvited), [`getPrefix()`](#getprefix), [`getDept()`](#getdept), [`getOverBaseCount()`](#getoverbasecount), [`hasPrefixConflict()`](#hasprefixconflict), [`hasDeptConflict()`](#hasdeptconflict)

<a id="generategroupstage"></a>
#### `generateGroupStage(doShuffle = false)`

- **Definisi:** [`app.js:5615`](app.js#L5615)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:256`](app.js#L256) — di dalam fungsi `toggleInvitedTeam()`
    `generateGroupStage(false);`
  - [`app.js:3989`](app.js#L3989) — di dalam fungsi `changeTournamentFormat()`
    `generateGroupStage(false);`
  - [`app.js:4037`](app.js#L4037) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateGroupStage(true);`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="getmlbbheadtoheadwinner"></a>
#### `getMLBBHeadToHeadWinner(teamA, teamB, gName)`

- **Definisi:** [`app.js:5668`](app.js#L5668)
- **Deskripsi:** Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fase grup MLBB
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5749`](app.js#L5749) — di dalam fungsi `compareMLBBTeams()`
    `const h2h = getMLBBHeadToHeadWinner(a.name, b.name, gName);`
- **Memanggil Fungsi Internal:** [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="comparemlbbteams"></a>
#### `compareMLBBTeams(a, b)`

- **Definisi:** [`app.js:5735`](app.js#L5735)
- **Deskripsi:** Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke Squad: 1. Point (Total Poin, besar ke kecil) 2. Agregat Skor Game / Game Difference (Diff = Game Menang - Game Kalah, besar ke kecil) 3. Head-to-Head / H2H (Jika Poin & Agregat sama, pemenang pertemuan langsung di grup lebih atas) 4. Menang (Match Won / W, besar ke kecil) 5. Kalah (Match Lost / L, kecil ke besar: makin sedikit kalah makin di atas) 6. Total MVP Tim (besar ke kecil) 7. Nama Tim (A-Z)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5794`](app.js#L5794) — di dalam fungsi `getSortedGroupTeams()`
    `return [...teams].sort((a, b) => compareMLBBTeams(a, b, gName));`
- **Memanggil Fungsi Internal:** [`getMLBBHeadToHeadWinner()`](#getmlbbheadtoheadwinner)

<a id="findvalidbracketpermutation"></a>
#### `findValidBracketPermutation(candidates, forbiddenGroupsPerSlot)`

- **Definisi:** [`app.js:5806`](app.js#L5806)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:6088`](app.js#L6088) — di dalam fungsi `initGroupPlayoff()`
    `branchJ2 = findValidBracketPermutation(j2List, forbiddenForJ2);`
  - [`app.js:6100`](app.js#L6100) — di dalam fungsi `initGroupPlayoff()`
    `branchJ3 = findValidBracketPermutation(j3List, forbiddenForJ3);`
  - [`app.js:6219`](app.js#L6219) — di dalam fungsi `initGroupPlayoff()`
    `const candJ2 = findValidBracketPermutation(j2List, forbidden);`
  - [`app.js:6237`](app.js#L6237) — di dalam fungsi `initGroupPlayoff()`
    `bJ2 = findValidBracketPermutation(j2List, forbidden) || bJ1.map(j => j2List[(j1List.findIndex(x => x`
- **Memanggil Fungsi Internal:** [`backtrack()`](#backtrack), [`shuffleArray()`](#shufflearray)

<a id="isplayoffinvitedteam"></a>
#### `isPlayoffInvitedTeam(teamName)`

- **Definisi:** [`app.js:5846`](app.js#L5846)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5887`](app.js#L5887) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const isInv = (t) => isPlayoffInvitedTeam(t);`
  - [`app.js:6007`](app.js#L6007) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const isInv = (t) => isPlayoffInvitedTeam(t);`
- **Memanggil Fungsi Internal:** [`isTeamInvited()`](#isteaminvited)

<a id="solveremainingbracketslots"></a>
#### `solveRemainingBracketSlots(remainingItems, emptySlots, currentArray, validatorFn)`

- **Definisi:** [`app.js:5858`](app.js#L5858)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5987`](app.js#L5987) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const solvedBranchJ1 = solveRemainingBracketSlots(j1Regular, emptyJ1Slots, branchJ1, (slot, item) =>`
  - [`app.js:5994`](app.js#L5994) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const solvedBranchJ2 = solveRemainingBracketSlots(j2Regular, emptyJ2Slots, branchJ2, (slot, item) =>`
  - [`app.js:6034`](app.js#L6034) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const solved = solveRemainingBracketSlots(j3Regular, emptySlots, branchJ3, (slot, item) => {`
- **Memanggil Fungsi Internal:** [`shuffleArray()`](#shufflearray), [`backtrack()`](#backtrack)

<a id="drawmlbbplayoffupperbracket"></a>
#### `drawMLBBPlayoffUpperBracket(j1List, j2List)`

- **Definisi:** [`app.js:5886`](app.js#L5886)
- **Deskripsi:** Algoritma Pengundian Cerdas Playoff Upper Bracket 16 Besar (MLBB): 1. Undi tim invited terlebih dahulu. 2. Bagi acak tim invited ke 2 wings (Pool Atas [0..3] vs Pool Bawah [4..7]). - Jika ada ATMO dan ALPHA (Aang Alpha), pisahkan mereka di wings/pool yang berbeda! 3. Pisahkan mereka pada match yang berbeda di Tahap 1 (tidak saling berhadapan di 16 Besar, beda sayap QF). 4. Setelah menempatkan tim invited, undi tim reguler lain untuk menempati bagan yang kosong. 5. Pastikan syarat anti-rematch grup (Juara 2 beda grup dari Juara 1 di slot yang sama) tetap 100% terpenuhi. /
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6081`](app.js#L6081) — di dalam fungsi `initGroupPlayoff()`
    `const drawnUpper = drawMLBBPlayoffUpperBracket(j1List, j2List);`
- **Memanggil Fungsi Internal:** [`isPlayoffInvitedTeam()`](#isplayoffinvitedteam), [`isInv()`](#isinv), [`isTeamAtmo()`](#isteamatmo), [`isTeamAlpha()`](#isteamalpha), [`isTeamAppa()`](#isteamappa), [`shuffleArray()`](#shufflearray), [`solveRemainingBracketSlots()`](#solveremainingbracketslots)

<a id="drawmlbbplayofflowerbracket"></a>
#### `drawMLBBPlayoffLowerBracket(j3List, branchJ1, branchJ2)`

- **Definisi:** [`app.js:6006`](app.js#L6006)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6095`](app.js#L6095) — di dalam fungsi `initGroupPlayoff()`
    `const drawnLower = drawMLBBPlayoffLowerBracket(j3List, branchJ1, branchJ2);`
- **Memanggil Fungsi Internal:** [`isPlayoffInvitedTeam()`](#isplayoffinvitedteam), [`isInv()`](#isinv), [`shuffleArray()`](#shufflearray), [`solveRemainingBracketSlots()`](#solveremainingbracketslots)

<a id="initgroupplayoff"></a>
#### `initGroupPlayoff(doShuffle = false)`

- **Definisi:** [`app.js:6043`](app.js#L6043)
- **Deskripsi:** Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seeding Juara vs Runner-up).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:1594`](app.js#L1594) — di dalam fungsi `cleanOrphanedTournamentData()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff();`
  - [`app.js:4121`](app.js#L4121) — di dalam fungsi `resolveMLBBTieBreaker()`
    `initGroupPlayoff();`
  - [`app.js:4148`](app.js#L4148) — di dalam fungsi `proceedToMLBBStage2()`
    `initGroupPlayoff(true);`
  - [`app.js:4249`](app.js#L4249) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `initGroupPlayoff(true);`
  - [`app.js:4644`](app.js#L4644) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `initGroupPlayoff(true);`
  - [`app.js:5648`](app.js#L5648) — di dalam fungsi `generateGroupStage()`
    `initGroupPlayoff(doShuffle);`
  - [`app.js:5663`](app.js#L5663) — di dalam fungsi `updateGroupRecord()`
    `initGroupPlayoff();`
  - [`app.js:7358`](app.js#L7358) — di dalam fungsi `setGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:8402`](app.js#L8402) — di dalam fungsi `resetGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:11004`](app.js#L11004) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `initGroupPlayoff(!isLocked);`
  - [`app.js:11139`](app.js#L11139) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff(false);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`drawMLBBPlayoffUpperBracket()`](#drawmlbbplayoffupperbracket), [`shuffleArray()`](#shufflearray), [`findValidBracketPermutation()`](#findvalidbracketpermutation), [`drawMLBBPlayoffLowerBracket()`](#drawmlbbplayofflowerbracket), [`isTeamAtmo()`](#isteamatmo), [`isTeamAlpha()`](#isteamalpha)

<a id="isplayoffplaceholderteam"></a>
#### `isPlayoffPlaceholderTeam(teamName)`

- **Definisi:** [`app.js:6286`](app.js#L6286)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4506`](app.js#L4506) — di dalam fungsi `setPlayoffMatchScore()`
    `if (isPlayoffPlaceholderTeam(match.teamA) || isPlayoffPlaceholderTeam(match.teamB)) {`
  - [`app.js:4559`](app.js#L4559) — di dalam fungsi `onPlayoffTeamClicked()`
    `if (!m || isPlayoffPlaceholderTeam(m.teamA) || isPlayoffPlaceholderTeam(m.teamB)) {`
  - [`app.js:4578`](app.js#L4578) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `const isReady = !isPlayoffPlaceholderTeam(m.teamA) && !isPlayoffPlaceholderTeam(m.teamB);`
  - [`app.js:6299`](app.js#L6299) — di dalam fungsi `pickGroupPlayoffWinner()`
    `if (!match || !winnerTeam || isPlayoffPlaceholderTeam(winnerTeam)) return;`
  - [`app.js:11068`](app.js#L11068) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `const isReady = !isPlayoffPlaceholderTeam(m.teamA) && !isPlayoffPlaceholderTeam(m.teamB);`

<a id="pickgroupplayoffwinner"></a>
#### `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:6296`](app.js#L6296)
- **Deskripsi:** Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya ke ronde berikutnya.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4527`](app.js#L4527) — di dalam fungsi `setPlayoffMatchScore()`
    `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam);`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="promptplayoffmvp"></a>
#### `promptPlayoffMVP(rIdx, mIdx)`

- **Definisi:** [`app.js:6464`](app.js#L6464)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:792`](functional_tests.js#L792) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptPlayoffMVP('), 'Harus memiliki promptPlayoffMVP');`
- **Memanggil Fungsi Internal:** [`openMLBBPlayoffMvpModal()`](#openmlbbplayoffmvpmodal)

<a id="rendergroupstageui"></a>
#### `renderGroupStageUI()`

- **Definisi:** [`app.js:6471`](app.js#L6471)
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:17`](app.js#L17) — di dalam fungsi `prevMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:24`](app.js#L24) — di dalam fungsi `nextMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:29`](app.js#L29) — di dalam fungsi `goToMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:4018`](app.js#L4018) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderGroupStageUI();`
  - [`app.js:4122`](app.js#L4122) — di dalam fungsi `resolveMLBBTieBreaker()`
    `renderGroupStageUI();`
  - [`app.js:4140`](app.js#L4140) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupStageUI();`
  - [`app.js:4193`](app.js#L4193) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:5649`](app.js#L5649) — di dalam fungsi `generateGroupStage()`
    `renderGroupStageUI();`
  - [`app.js:5664`](app.js#L5664) — di dalam fungsi `updateGroupRecord()`
    `renderGroupStageUI();`
  - [`app.js:7359`](app.js#L7359) — di dalam fungsi `setGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:8094`](app.js#L8094) — di dalam fungsi `setGroupMatchMVP()`
    `renderGroupStageUI();`
  - [`app.js:8186`](app.js#L8186) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8204`](app.js#L8204) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8227`](app.js#L8227) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8403`](app.js#L8403) — di dalam fungsi `resetGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:10934`](app.js#L10934) — di dalam fungsi `setMLBBViewMode()`
    `renderGroupStageUI();`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`goToMLBBGroupPage()`](#gotomlbbgrouppage), [`prevMLBBGroupPage()`](#prevmlbbgrouppage), [`nextMLBBGroupPage()`](#nextmlbbgrouppage), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`getSortedGroupTeams()`](#getsortedgroupteams), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker)

<a id="setmlbbactiveweek"></a>
#### `setMLBBActiveWeek(weekKey)`

- **Definisi:** [`app.js:6910`](app.js#L6910)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8558`](app.js#L8558) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_1' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:8563`](app.js#L8563) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_2' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:8568`](app.js#L8568) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_3' ? 'active' : ''}" onclick="setMLBBActive`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivedayfilter"></a>
#### `setMLBBActiveDayFilter(day)`

- **Definisi:** [`app.js:6918`](app.js#L6918)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:8675`](app.js#L8675) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 'ALL' ? 'active' : ''}" onc`
  - [`app.js:8678`](app.js#L8678) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 1 ? 'active' : ''}" onclick`
  - [`app.js:8681`](app.js#L8681) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 2 ? 'active' : ''}" onclick`
  - [`app.js:8684`](app.js#L8684) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 3 ? 'active' : ''}" onclick`
  - [`app.js:8687`](app.js#L8687) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 4 ? 'active' : ''}" onclick`
  - [`app.js:8690`](app.js#L8690) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 5 ? 'active' : ''}" onclick`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivegroupfilter"></a>
#### `setMLBBActiveGroupFilter(gName)`

- **Definisi:** [`app.js:6923`](app.js#L6923)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8696`](app.js#L8696) — di dalam fungsi `renderGroupFixturesUI()`
    `<select onchange="setMLBBActiveGroupFilter(this.value)" style="background:#0f172a; border:1px solid `
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="getgroupfixtures"></a>
#### `getGroupFixtures(gName, dayFilter = null)`

- **Definisi:** [`app.js:6929`](app.js#L6929)
- **Deskripsi:** --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) ---
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:4076`](app.js#L4076) — di dalam fungsi `isAllMLBBGroupMatchesFinished()`
    `const fixtures = getGroupFixtures(gName);`
  - [`app.js:7133`](app.js#L7133) — di dalam fungsi `isGroupMatchesCompleted()`
    `const fixtures = (typeof getGroupFixtures === 'function') ? getGroupFixtures(gName) : [];`
  - [`app.js:7244`](app.js#L7244) — di dalam fungsi `getGroupRestingTeams()`
    `const dayFixtures = getGroupFixtures(gName, day);`
  - [`app.js:8709`](app.js#L8709) — di dalam fungsi `renderGroupFixturesUI()`
    `const fixtures = getGroupFixtures(gName, mlbbActiveDayFilter);`
  - [`app.js:11639`](app.js#L11639) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const fixtures = getGroupFixtures(gName);`
  - [`functional_tests.js:675`](functional_tests.js#L675) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getGroupFixtures('), 'app.js harus memiliki generator jadwal getGr`
- **Memanggil Fungsi Internal:** [`resolveTeamNameInGroup()`](#resolveteamnameingroup), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="savegroupfixturescore"></a>
#### `saveGroupFixtureScore(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:7397`](app.js#L7397)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8808`](app.js#L8808) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-primary" style="font-size:0.68rem; padding:2px 8px;" onclick="s`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="openmlbbgroupmvpmodal"></a>
#### `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, scoreA, scoreB)`

- **Definisi:** [`app.js:7450`](app.js#L7450)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8132`](app.js#L8132) — di dalam fungsi `promptGroupMatchMVP()`
    `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, null, null);`
  - [`app.js:8812`](app.js#L8812) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 8px; color:var(-`
  - [`app.js:11795`](app.js#L11795) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname), [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="openmlbbplayoffmvpmodal"></a>
#### `openMLBBPlayoffMvpModal(rIdx, mIdx)`

- **Definisi:** [`app.js:7524`](app.js#L7524)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6468`](app.js#L6468) — di dalam fungsi `promptPlayoffMVP()`
    `openMLBBPlayoffMvpModal(rIdx, mIdx);`
- **Memanggil Fungsi Internal:** [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="closemlbbgroupmvpmodal"></a>
#### `closeMLBBGroupMvpModal()`

- **Definisi:** [`app.js:7710`](app.js#L7710)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:865`](index.html#L865) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:933`](index.html#L933) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;" on`
  - [`app.js:7957`](app.js#L7957) — di dalam fungsi `saveSelectedMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:7967`](app.js#L7967) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:8009`](app.js#L8009) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`

<a id="recalculategroupstandingsfromfixtures"></a>
#### `recalculateGroupStandingsFromFixtures()`

- **Definisi:** [`app.js:8406`](app.js#L8406)
- **Deskripsi:** Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan seluruh hasil pertandingan BO3.
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1476`](app.js#L1476) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
  - [`app.js:7356`](app.js#L7356) — di dalam fungsi `setGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:8400`](app.js#L8400) — di dalam fungsi `resetGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:10867`](app.js#L10867) — cakupan global / event handler
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
- **Memanggil Fungsi Internal:** [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="rendergroupfixturesui"></a>
#### `renderGroupFixturesUI()`

- **Definisi:** [`app.js:8546`](app.js#L8546)
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:34`](app.js#L34) — di dalam fungsi `toggleAllMLBBFixtures()`
    `renderGroupFixturesUI();`
  - [`app.js:6560`](app.js#L6560) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:6707`](app.js#L6707) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:6915`](app.js#L6915) — di dalam fungsi `setMLBBActiveWeek()`
    `renderGroupFixturesUI();`
  - [`app.js:6920`](app.js#L6920) — di dalam fungsi `setMLBBActiveDayFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:6925`](app.js#L6925) — di dalam fungsi `setMLBBActiveGroupFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:8095`](app.js#L8095) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8187`](app.js#L8187) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8205`](app.js#L8205) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8228`](app.js#L8228) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`functional_tests.js:677`](functional_tests.js#L677) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderGroupFixturesUI('), 'app.js harus memiliki renderer bagan re`
- **Memanggil Fungsi Internal:** [`setMLBBActiveWeek()`](#setmlbbactiveweek), [`setMLBBActiveDayFilter()`](#setmlbbactivedayfilter), [`setMLBBActiveGroupFilter()`](#setmlbbactivegroupfilter), [`getGroupFixtures()`](#getgroupfixtures), [`escapeHtml()`](#escapehtml), [`getGroupRestingTeams()`](#getgrouprestingteams), [`isSameTeamName()`](#issameteamname), [`formatMatchMvpDisplayHtml()`](#formatmatchmvpdisplayhtml), [`openMatchPlayerVerifyModal()`](#openmatchplayerverifymodal), [`saveGroupFixtureScore()`](#savegroupfixturescore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="rendergroupplayofftree"></a>
#### `renderGroupPlayoffTree()`

- **Definisi:** [`app.js:8827`](app.js#L8827)
- **Deskripsi:** Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau status terkunci jika grup belum selesai.
- **Titik Pemanggilan (14 lokasi):**
  - [`app.js:4153`](app.js#L4153) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupPlayoffTree();`
  - [`app.js:4170`](app.js#L4170) — di dalam fungsi `refreshAndScrollToPlayoffBracket()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:4194`](app.js#L4194) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:4254`](app.js#L4254) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `renderGroupPlayoffTree();`
  - [`app.js:4299`](app.js#L4299) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `renderGroupPlayoffTree();`
  - [`app.js:4547`](app.js#L4547) — di dalam fungsi `resetPlayoffMatchScore()`
    `renderGroupPlayoffTree();`
  - [`app.js:4654`](app.js#L4654) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderGroupPlayoffTree();`
  - [`app.js:5650`](app.js#L5650) — di dalam fungsi `generateGroupStage()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:6460`](app.js#L6460) — di dalam fungsi `pickGroupPlayoffWinner()`
    `renderGroupPlayoffTree();`
  - [`app.js:6561`](app.js#L6561) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:6708`](app.js#L6708) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:7947`](app.js#L7947) — di dalam fungsi `saveSelectedMvp()`
    `renderGroupPlayoffTree();`
  - [`app.js:7999`](app.js#L7999) — di dalam fungsi `deleteCurrentMvp()`
    `renderGroupPlayoffTree();`
  - [`app.js:11010`](app.js#L11010) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
- **Memanggil Fungsi Internal:** [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`testMLBBPlayoffWithCurrentStandings()`](#testmlbbplayoffwithcurrentstandings), [`toggleLockMLBBPlayoff()`](#togglelockmlbbplayoff), [`showToast()`](#showtoast), [`shuffleMLBBPlayoffBracket()`](#shufflemlbbplayoffbracket), [`renderPlayoffMatchCardHtml()`](#renderplayoffmatchcardhtml)

<a id="setmlbbviewmode"></a>
#### `setMLBBViewMode(mode)`

- **Definisi:** [`app.js:10900`](app.js#L10900)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MLBB ---
- **Titik Pemanggilan (6 lokasi):**
  - [`index.html:514`](index.html#L514) — Event `onclick`
    `<button type="button" id="btnViewMlbbHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:517`](index.html#L517) — Event `onclick`
    `<button type="button" id="btnViewMlbbGroups" class="btn btn-outline" style="font-size: 0.8rem; paddi`
  - [`index.html:520`](index.html#L520) — Event `onclick`
    `<button type="button" id="btnViewMlbbFixtures" class="btn btn-outline" style="font-size: 0.8rem; pad`
  - [`app.js:2727`](app.js#L2727) — di dalam fungsi `switchTab()`
    `setMLBBViewMode('HUB');`
  - [`app.js:4650`](app.js#L4650) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `setMLBBViewMode('GROUPS');`
  - [`functional_tests.js:1164`](functional_tests.js#L1164) — pada skenario pengujian
    `assert(appCode.includes('function setMLBBViewMode('), 'app.js harus memiliki fungsi setMLBBViewMode'`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="toggleplayoffbracketcollapse"></a>
#### `togglePlayoffBracketCollapse()`

- **Definisi:** [`app.js:10986`](app.js#L10986)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11328`](app.js#L11328) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.38rem 0.7rem; bord`

<a id="gotonextmlbbplayoffphase"></a>
#### `goToNextMLBBPlayoffPhase()`

- **Definisi:** [`app.js:10998`](app.js#L10998)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11459`](app.js#L11459) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="btn btn-primary" style="width:100%; font-size:0.82rem; padding:0.6rem 0`
  - [`app.js:11665`](app.js#L11665) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; fon`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="setplayoffbracketfilter"></a>
#### `setPlayoffBracketFilter(filter)`

- **Definisi:** [`app.js:11025`](app.js#L11025)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11337`](app.js#L11337) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${currentPlayoffBracketFilter === 'UPPER' ? 'btn-primary' : 'btn-ou`
  - [`app.js:11340`](app.js#L11340) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${currentPlayoffBracketFilter === 'LOWER' ? 'btn-gold' : 'btn-outli`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="toggleplayofffullscreen"></a>
#### `togglePlayoffFullscreen()`

- **Definisi:** [`app.js:11032`](app.js#L11032)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11325`](app.js#L11325) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.38rem 0.7rem; bord`

<a id="renderfullplayoffbrackethtml"></a>
#### `renderFullPlayoffBracketHtml(activeNodeKey = '')`

- **Definisi:** [`app.js:11137`](app.js#L11137)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11593`](app.js#L11593) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `content += renderFullPlayoffBracketHtml(nodeKey);`
  - [`app.js:11629`](app.js#L11629) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `content += renderFullPlayoffBracketHtml(nodeKey);`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff), [`renderSingleMatchNodeHtml()`](#rendersinglematchnodehtml), [`renderSvgConnectorColumn()`](#rendersvgconnectorcolumn), [`toggleLockMLBBPlayoff()`](#togglelockmlbbplayoff), [`showToast()`](#showtoast), [`shuffleMLBBPlayoffBracket()`](#shufflemlbbplayoffbracket), [`testMLBBPlayoffWithCurrentStandings()`](#testmlbbplayoffwithcurrentstandings), [`togglePlayoffFullscreen()`](#toggleplayofffullscreen), [`togglePlayoffBracketCollapse()`](#toggleplayoffbracketcollapse), [`setPlayoffBracketFilter()`](#setplayoffbracketfilter)

<a id="selectmlbbstagenode"></a>
#### `selectMLBBStageNode(nodeKey)`

- **Definisi:** [`app.js:11355`](app.js#L11355)
- **Titik Pemanggilan (17 lokasi):**
  - [`app.js:11065`](app.js#L11065) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `? 'onclick="if(event.target.closest('.bracket-node-team') || event.target.closest('button')) return;`
  - [`app.js:11380`](app.js#L11380) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<select id="mobileStageSelect" class="mobile-stage-select" onchange="selectMLBBStageNode(this.value)`
  - [`app.js:11447`](app.js#L11447) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:11474`](app.js#L11474) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.2rem 0.55rem; colo`
  - [`app.js:11500`](app.js#L11500) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:11523`](app.js#L11523) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_UPPER_QF' ? 'active' : ''}" onclic`
  - [`app.js:11527`](app.js#L11527) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_LOWER_R1' ? 'active' : ''}" onclic`
  - [`app.js:11545`](app.js#L11545) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_UPPER' ? 'active' : ''}" onclick="`
  - [`app.js:11549`](app.js#L11549) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_LOWER' ? 'active' : ''}" onclick="`
  - [`app.js:11569`](app.js#L11569) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'GRAND_FINAL_OFFLINE' ? 'active`
  - [`app.js:11603`](app.js#L11603) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11606`](app.js#L11606) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11609`](app.js#L11609) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11612`](app.js#L11612) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11615`](app.js#L11615) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11618`](app.js#L11618) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`functional_tests.js:1166`](functional_tests.js#L1166) — pada skenario pengujian
    `assert(appCode.includes('function selectMLBBStageNode('), 'app.js harus memiliki selectMLBBStageNode`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermlbbinteractivehubui"></a>
#### `renderMLBBInteractiveHubUI()`

- **Definisi:** [`app.js:11366`](app.js#L11366)
- **Titik Pemanggilan (24 lokasi):**
  - [`app.js:3993`](app.js#L3993) — di dalam fungsi `changeTournamentFormat()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:4154`](app.js#L4154) — di dalam fungsi `proceedToMLBBStage2()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4171`](app.js#L4171) — di dalam fungsi `refreshAndScrollToPlayoffBracket()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4196`](app.js#L4196) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4255`](app.js#L4255) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:4300`](app.js#L4300) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4548`](app.js#L4548) — di dalam fungsi `resetPlayoffMatchScore()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:5651`](app.js#L5651) — di dalam fungsi `generateGroupStage()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:6461`](app.js#L6461) — di dalam fungsi `pickGroupPlayoffWinner()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:6487`](app.js#L6487) — di dalam fungsi `renderGroupStageUI()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:8096`](app.js#L8096) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8188`](app.js#L8188) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8206`](app.js#L8206) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8229`](app.js#L8229) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:10925`](app.js#L10925) — di dalam fungsi `setMLBBViewMode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11011`](app.js#L11011) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:11028`](app.js#L11028) — di dalam fungsi `setPlayoffBracketFilter()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11357`](app.js#L11357) — di dalam fungsi `selectMLBBStageNode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11696`](app.js#L11696) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:11699`](app.js#L11699) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
  - [`app.js:11791`](app.js#L11791) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11793`](app.js#L11793) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:11794`](app.js#L11794) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`functional_tests.js:1165`](functional_tests.js#L1165) — pada skenario pengujian
    `assert(appCode.includes('function renderMLBBInteractiveHubUI()'), 'app.js harus memiliki renderMLBBI`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`goToNextMLBBPlayoffPhase()`](#gotonextmlbbplayoffphase), [`renderMLBBDetailPanelContent()`](#rendermlbbdetailpanelcontent)

<a id="rendermlbbdetailpanelcontent"></a>
#### `renderMLBBDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:11588`](app.js#L11588)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11582`](app.js#L11582) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `rightHtml += renderMLBBDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderFullPlayoffBracketHtml()`](#renderfullplayoffbrackethtml), [`selectMLBBStageNode()`](#selectmlbbstagenode), [`getSortedGroupTeams()`](#getsortedgroupteams), [`getGroupFixtures()`](#getgroupfixtures), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`escapeHtml()`](#escapehtml), [`goToNextMLBBPlayoffPhase()`](#gotonextmlbbplayoffphase), [`updateGroupRecord()`](#updategrouprecord), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`isSameTeamName()`](#issameteamname), [`setGroupMatchScore()`](#setgroupmatchscore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

---

### 📦 Modul Aplikasi Umum

<a id="posttogoogleappsscript"></a>
#### `postToGoogleAppsScript(payload, timeoutMs = 45000)`

- **Definisi:** [`app.js:93`](app.js#L93)
- **Deskripsi:** Helper fetch terpusat untuk komunikasi POST dengan Google Apps Script Web App. - Menggunakan Content-Type text/plain;charset=utf-8 (mencegah CORS preflight OPTIONS yang tidak didukung GAS). - Mengaktifkan mode: 'cors' dan redirect: 'follow' untuk menangani 302 redirect ke script.googleusercontent.com secara andal. - Dilengkapi AbortController timeout agar antarmuka tidak hang saat koneksi lambat. /
- **Titik Pemanggilan (14 lokasi):**
  - [`app.js:889`](app.js#L889) — di dalam fungsi `confirmResetBaganWithPin()`
    `const res = await postToGoogleAppsScript({`
  - [`app.js:1727`](app.js#L1727) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `const batchRes = await postToGoogleAppsScript({`
  - [`app.js:1766`](app.js#L1766) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `return postToGoogleAppsScript({`
  - [`app.js:1795`](app.js#L1795) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `await postToGoogleAppsScript({`
  - [`app.js:1858`](app.js#L1858) — cakupan global / event handler
    `const res = await postToGoogleAppsScript(payload, 35000);`
  - [`app.js:1888`](app.js#L1888) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `const res = await postToGoogleAppsScript({`
  - [`app.js:2081`](app.js#L2081) — di dalam fungsi `saveCustomRules()`
    `postToGoogleAppsScript({`
  - [`app.js:2325`](app.js#L2325) — di dalam fungsi `verifyAdminPin()`
    `const res = await postToGoogleAppsScript({`
  - [`app.js:3300`](app.js#L3300) — di dalam fungsi `handleRegister()`
    `let res = await postToGoogleAppsScript(payload, 45000);`
  - [`app.js:3311`](app.js#L3311) — di dalam fungsi `handleRegister()`
    `res = await postToGoogleAppsScript(payload, 45000);`
  - [`app.js:3420`](app.js#L3420) — di dalam fungsi `setParticipantStatus()`
    `postToGoogleAppsScript({`
  - [`app.js:3473`](app.js#L3473) — di dalam fungsi `deleteParticipant()`
    `postToGoogleAppsScript({`
  - [`app.js:3706`](app.js#L3706) — di dalam fungsi `saveParticipantEdit()`
    `const response = await postToGoogleAppsScript({`
  - [`app.js:5182`](app.js#L5182) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const res = await postToGoogleAppsScript(payload, 35000);`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`app.js:141`](app.js#L141)
- **Deskripsi:** Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5438`](app.js#L5438) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:5449`](app.js#L5449) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getDepartmentCluster === 'function') return getDepartmentCluster(d, team).toLowerCase();`
  - [`app.js:9084`](app.js#L9084) — di dalam fungsi `syncMCGGPlayers()`
    `const cluster = getDepartmentCluster(ply.dept, ply.name);`
  - [`app.js:9114`](app.js#L9114) — di dalam fungsi `syncMCGGPlayers()`
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
  - [`app.js:4942`](app.js#L4942) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:5447`](app.js#L5447) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:4943`](app.js#L4943) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5457`](app.js#L5457) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:5849`](app.js#L5849) — di dalam fungsi `isPlayoffInvitedTeam()`
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
  - [`app.js:3897`](app.js#L3897) — di dalam fungsi `renderParticipants()`
    `<button class="btn ${p.isInvited ? 'btn-gold' : 'btn-outline'}" style="padding: 0.35rem 0.55rem; fon`
  - [`functional_tests.js:877`](functional_tests.js#L877) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleInvitedTeam('), 'app.js harus memiliki toggleInvitedTeam');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="showgloballoader"></a>
#### `showGlobalLoader(msg = "Menyinkronkan data turnamen dari Google Sheets...")`

- **Definisi:** [`app.js:283`](app.js#L283)
- **Deskripsi:** Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10840`](app.js#L10840) — cakupan global / event handler
    `showGlobalLoader('Menyinkronkan data terkini dari Google Sheets...');`
- **Memanggil Fungsi Internal:** [`hideGlobalLoader()`](#hidegloballoader)

<a id="hidegloballoader"></a>
#### `hideGlobalLoader()`

- **Definisi:** [`app.js:297`](app.js#L297)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:293`](app.js#L293) — di dalam fungsi `showGlobalLoader()`
    `hideGlobalLoader();`
  - [`app.js:956`](app.js#L956) — di dalam fungsi `bypassLoaderWithCache()`
    `hideGlobalLoader();`
  - [`app.js:10872`](app.js#L10872) — cakupan global / event handler
    `hideGlobalLoader();`
  - [`app.js:10883`](app.js#L10883) — cakupan global / event handler
    `hideGlobalLoader();`

<a id="bypassloaderwithcache"></a>
#### `bypassLoaderWithCache()`

- **Definisi:** [`app.js:948`](app.js#L948)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:23`](index.html#L23) — Event `onclick`
    `<button id="btnBypassLoader" type="button" class="btn btn-outline" style="margin-top: 1.25rem; font-`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`updateCounts()`](#updatecounts), [`hideGlobalLoader()`](#hidegloballoader), [`showToast()`](#showtoast)

<a id="saveformdraft"></a>
#### `saveFormDraft(formType)`

- **Definisi:** [`app.js:971`](app.js#L971)
- **Deskripsi:** AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1127`](app.js#L1127) — di dalam fungsi `handleFormDraftChange()`
    `saveFormDraft();`

<a id="restoreformdraft"></a>
#### `restoreFormDraft(formType)`

- **Definisi:** [`app.js:1027`](app.js#L1027)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:10849`](app.js#L10849) — cakupan global / event handler
    `restoreFormDraft('MLBB');`
  - [`app.js:10850`](app.js#L10850) — cakupan global / event handler
    `restoreFormDraft('MCGG');`
- **Memanggil Fungsi Internal:** [`toggleOfficial2Form()`](#toggleofficial2form)

<a id="clearformdraft"></a>
#### `clearFormDraft(formType)`

- **Definisi:** [`app.js:1117`](app.js#L1117)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3392`](app.js#L3392) — di dalam fungsi `handleRegister()`
    `clearFormDraft(category);`

<a id="handleformdraftchange"></a>
#### `handleFormDraftChange()`

- **Definisi:** [`app.js:1124`](app.js#L1124)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:2107`](app.js#L2107) — di dalam fungsi `handleLogoPreview()`
    `handleFormDraftChange();`
  - [`app.js:2125`](app.js#L2125) — di dalam fungsi `handleSingleIdCardPreview()`
    `handleFormDraftChange();`
  - [`app.js:2145`](app.js#L2145) — di dalam fungsi `handlePlayerIdCardPreview()`
    `handleFormDraftChange();`
- **Memanggil Fungsi Internal:** [`saveFormDraft()`](#saveformdraft)

<a id="getitemkey"></a>
#### `getItemKey(item)`

- **Definisi:** [`app.js:1315`](app.js#L1315)
- **Deskripsi:** Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1329`](app.js#L1329) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `localMap[getItemKey(localItem)] = localItem;`
  - [`app.js:1336`](app.js#L1336) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const itemKey = getItemKey(sheetItem);`

<a id="cleanorphanedtournamentdata"></a>
#### `cleanOrphanedTournamentData()`

- **Definisi:** [`app.js:1565`](app.js#L1565)
- **Deskripsi:** Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup, dan lobi MCGG
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1531`](app.js#L1531) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `cleanOrphanedTournamentData();`
  - [`app.js:3464`](app.js#L3464) — di dalam fungsi `deleteParticipant()`
    `cleanOrphanedTournamentData();`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff)

<a id="savestate"></a>
#### `saveState()`

- **Definisi:** [`app.js:1917`](app.js#L1917)
- **Deskripsi:** Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi MCGG) ke localStorage.
- **Titik Pemanggilan (45 lokasi):**
  - [`app.js:253`](app.js#L253) — di dalam fungsi `toggleInvitedTeam()`
    `saveState();`
  - [`app.js:934`](app.js#L934) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveState();`
  - [`app.js:1532`](app.js#L1532) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveState();`
  - [`app.js:1691`](app.js#L1691) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `saveState();`
  - [`app.js:1836`](app.js#L1836) — cakupan global / event handler
    `saveState();`
  - [`app.js:1879`](app.js#L1879) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `saveState();`
  - [`app.js:2520`](app.js#L2520) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveState();`
  - [`app.js:3369`](app.js#L3369) — di dalam fungsi `handleRegister()`
    `saveState();`
  - [`app.js:3412`](app.js#L3412) — di dalam fungsi `setParticipantStatus()`
    `saveState();`
  - [`app.js:3465`](app.js#L3465) — di dalam fungsi `deleteParticipant()`
    `saveState();`
  - [`app.js:3690`](app.js#L3690) — di dalam fungsi `saveParticipantEdit()`
    `saveState();`
  - [`app.js:4120`](app.js#L4120) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveState();`
  - [`app.js:4150`](app.js#L4150) — di dalam fungsi `proceedToMLBBStage2()`
    `saveState();`
  - [`app.js:4251`](app.js#L4251) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveState();`
  - [`app.js:4297`](app.js#L4297) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveState();`
  - [`app.js:4546`](app.js#L4546) — di dalam fungsi `resetPlayoffMatchScore()`
    `saveState();`
  - [`app.js:4646`](app.js#L4646) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveState();`
  - [`app.js:4976`](app.js#L4976) — di dalam fungsi `resetMLBBToStage1()`
    `saveState();`
  - [`app.js:5038`](app.js#L5038) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `saveState();`
  - [`app.js:5204`](app.js#L5204) — di dalam fungsi `saveTournamentStateOnly()`
    `saveState();`
  - [`app.js:5647`](app.js#L5647) — di dalam fungsi `generateGroupStage()`
    `saveState();`
  - [`app.js:5662`](app.js#L5662) — di dalam fungsi `updateGroupRecord()`
    `saveState();`
  - [`app.js:6459`](app.js#L6459) — di dalam fungsi `pickGroupPlayoffWinner()`
    `saveState();`
  - [`app.js:7357`](app.js#L7357) — di dalam fungsi `setGroupMatchScore()`
    `saveState();`
  - [`app.js:7946`](app.js#L7946) — di dalam fungsi `saveSelectedMvp()`
    `saveState();`
  - [`app.js:7998`](app.js#L7998) — di dalam fungsi `deleteCurrentMvp()`
    `saveState();`
  - [`app.js:8093`](app.js#L8093) — di dalam fungsi `setGroupMatchMVP()`
    `saveState();`
  - [`app.js:8185`](app.js#L8185) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `saveState();`
  - [`app.js:8202`](app.js#L8202) — di dalam fungsi `toggleMatchPlayerVerify()`
    `saveState();`
  - [`app.js:8225`](app.js#L8225) — di dalam fungsi `verifyAllMatchPlayers()`
    `saveState();`
  - [`app.js:8401`](app.js#L8401) — di dalam fungsi `resetGroupMatchScore()`
    `saveState();`
  - [`app.js:9191`](app.js#L9191) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:9250`](app.js#L9250) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:9512`](app.js#L9512) — di dalam fungsi `updateMCGGRank()`
    `saveState();`
  - [`app.js:9547`](app.js#L9547) — di dalam fungsi `updateMCGGCommander()`
    `saveState();`
  - [`app.js:9583`](app.js#L9583) — di dalam fungsi `updateMCGGPenalty()`
    `saveState();`
  - [`app.js:9908`](app.js#L9908) — di dalam fungsi `drawMatchPool()`
    `saveState();`
  - [`app.js:9959`](app.js#L9959) — di dalam fungsi `assignMatchPoolToPlayers()`
    `saveState();`
  - [`app.js:9979`](app.js#L9979) — di dalam fungsi `toggleLockMatchDraw()`
    `saveState();`
  - [`app.js:10005`](app.js#L10005) — di dalam fungsi `nextMatchDraw()`
    `saveState();`
  - [`app.js:10038`](app.js#L10038) — di dalam fungsi `resetLobbyDraw()`
    `saveState();`
  - [`app.js:10816`](app.js#L10816) — di dalam fungsi `loadSampleData()`
    `saveState();`
  - [`app.js:10829`](app.js#L10829) — di dalam fungsi `clearAllData()`
    `saveState();`
  - [`app.js:11007`](app.js#L11007) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `saveState();`
  - [`app.js:12332`](app.js#L12332) — di dalam fungsi `shuffleMCGG32Besar()`
    `saveState();`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`updateAuthUI()`](#updateauthui), [`updateCounts()`](#updatecounts)

<a id="updatecounts"></a>
#### `updateCounts()`

- **Definisi:** [`app.js:1929`](app.js#L1929)
- **Deskripsi:** Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status verifikasi di header UI.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:955`](app.js#L955) — di dalam fungsi `bypassLoaderWithCache()`
    `updateCounts();`
  - [`app.js:1536`](app.js#L1536) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCounts();`
  - [`app.js:1926`](app.js#L1926) — di dalam fungsi `saveState()`
    `updateCounts();`
  - [`app.js:3416`](app.js#L3416) — di dalam fungsi `setParticipantStatus()`
    `updateCounts();`
  - [`app.js:3469`](app.js#L3469) — di dalam fungsi `deleteParticipant()`
    `updateCounts();`
  - [`app.js:10834`](app.js#L10834) — di dalam fungsi `clearAllData()`
    `updateCounts();`
  - [`app.js:10856`](app.js#L10856) — cakupan global / event handler
    `updateCounts();`

<a id="toggleofficial2form"></a>
#### `toggleOfficial2Form()`

- **Definisi:** [`app.js:2154`](app.js#L2154)
- **Deskripsi:** Toggle Official 2 Form
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:199`](index.html#L199) — Event `onchange`
    `<input type="checkbox" id="has_official_2" onchange="toggleOfficial2Form()">`
  - [`app.js:1060`](app.js#L1060) — di dalam fungsi `restoreFormDraft()`
    `toggleOfficial2Form();`
  - [`app.js:3395`](app.js#L3395) — di dalam fungsi `handleRegister()`
    `toggleOfficial2Form();`
  - [`app.js:10844`](app.js#L10844) — cakupan global / event handler
    `toggleOfficial2Form();`

<a id="renderplayersforminputs"></a>
#### `renderPlayersFormInputs()`

- **Definisi:** [`app.js:2161`](app.js#L2161)
- **Deskripsi:** Generate the 8 players form fields dynamically (Included In-Game Nickname and Per-Player ID Card Uploader)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3393`](app.js#L3393) — di dalam fungsi `handleRegister()`
    `renderPlayersFormInputs();`
  - [`app.js:10842`](app.js#L10842) — cakupan global / event handler
    `renderPlayersFormInputs();`
- **Memanggil Fungsi Internal:** [`handlePlayerIdCardPreview()`](#handleplayeridcardpreview)

<a id="togglecategoryform"></a>
#### `toggleCategoryForm()`

- **Definisi:** [`app.js:2220`](app.js#L2220)
- **Deskripsi:** Switch form between MLBB and MCGG cleanly
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:91`](index.html#L91) — Event `onchange`
    `<select id="gameCategory" required onchange="toggleCategoryForm()" style="font-size: 1rem; font-weig`
  - [`app.js:3394`](app.js#L3394) — di dalam fungsi `handleRegister()`
    `toggleCategoryForm();`
  - [`app.js:10843`](app.js#L10843) — cakupan global / event handler
    `toggleCategoryForm();`

<a id="renderregistrationui"></a>
#### `renderRegistrationUI()`

- **Definisi:** [`app.js:2397`](app.js#L2397)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1519`](app.js#L1519) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRegistrationUI();`
  - [`app.js:2476`](app.js#L2476) — di dalam fungsi `toggleRegistrationStatus()`
    `renderRegistrationUI();`
  - [`app.js:2715`](app.js#L2715) — di dalam fungsi `updateAuthUI()`
    `renderRegistrationUI();`
  - [`functional_tests.js:826`](functional_tests.js#L826) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderRegistrationUI()'), 'Harus memiliki renderRegistrationUI()')`

<a id="updateregistrationdatalists"></a>
#### `updateRegistrationDatalists()`

- **Definisi:** [`app.js:2795`](app.js#L2795)
- **Deskripsi:** Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit form dimatikan)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3396`](app.js#L3396) — di dalam fungsi `handleRegister()`
    `updateRegistrationDatalists();`
  - [`app.js:3811`](app.js#L3811) — di dalam fungsi `renderParticipants()`
    `updateRegistrationDatalists();`
  - [`functional_tests.js:171`](functional_tests.js#L171) — pada skenario pengujian
    `assert(appCode.includes('function updateRegistrationDatalists('), 'Harus ada fungsi updateRegistrati`

<a id="handleteamnameinput"></a>
#### `handleTeamNameInput(val)`

- **Definisi:** [`app.js:2809`](app.js#L2809)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:106`](index.html#L106) — Event `oninput`
    `<input type="text" id="teamName" oninput="handleTeamNameInput(this.value)" placeholder="Masukkan nam`
  - [`functional_tests.js:172`](functional_tests.js#L172) — pada skenario pengujian
    `assert(appCode.includes('function handleTeamNameInput('), 'Harus ada handler handleTeamNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="shuffleandgeneratetournament"></a>
#### `shuffleAndGenerateTournament()`

- **Definisi:** [`app.js:4022`](app.js#L4022)
- **Deskripsi:** Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum dikunci.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:483`](index.html#L483) — Event `onclick`
    `<button id="btnShuffleMLBB" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0.85rem;`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`refreshAndScrollToGroupOrBracket()`](#refreshandscrolltogrouporbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="findteamgroupandrank"></a>
#### `findTeamGroupAndRank(teamName)`

- **Definisi:** [`app.js:4613`](app.js#L4613)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4673`](app.js#L4673) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(mUB.teamA);`
  - [`app.js:4674`](app.js#L4674) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(mUB.teamB);`
  - [`app.js:4675`](app.js#L4675) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoC = findTeamGroupAndRank(mLB.teamB);`
  - [`app.js:4740`](app.js#L4740) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(m.teamA);`
  - [`app.js:4741`](app.js#L4741) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(m.teamB);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`isSameTeamName()`](#issameteamname)

<a id="opentestdrawinnewwindow"></a>
#### `openTestDrawInNewWindow()`

- **Definisi:** [`app.js:4838`](app.js#L4838)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1075`](index.html#L1075) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; co`
  - [`app.js:4783`](app.js#L4783) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(`
  - [`app.js:4920`](app.js#L4920) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem; border-color:var(-`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast)

<a id="pickwinner"></a>
#### `pickWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:5330`](app.js#L5330)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5396`](app.js#L5396) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:5400`](app.js#L5400) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket)

<a id="getprefix"></a>
#### `getPrefix(team)`

- **Definisi:** [`app.js:5437`](app.js#L5437)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:5475`](app.js#L5475) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:5483`](app.js#L5483) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:5492`](app.js#L5492) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:5508`](app.js#L5508) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountA = teamPrefix ? groups[a].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:5509`](app.js#L5509) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountB = teamPrefix ? groups[b].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:5542`](app.js#L5542) — di dalam fungsi `allocateMLBBGroups()`
    `const p = getPrefix(t);`
  - [`app.js:5549`](app.js#L5549) — di dalam fungsi `allocateMLBBGroups()`
    `const pA = getPrefix(a), pB = getPrefix(b);`
  - [`app.js:5557`](app.js#L5557) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:5560`](app.js#L5560) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPrefixConflict = (g) => teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`

<a id="getdept"></a>
#### `getDept(team)`

- **Definisi:** [`app.js:5445`](app.js#L5445)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:5476`](app.js#L5476) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:5484`](app.js#L5484) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDep = teamDept && groups[g].some(t => getDept(t) === teamDept);`
  - [`app.js:5543`](app.js#L5543) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getDept(t);`
  - [`app.js:5550`](app.js#L5550) — di dalam fungsi `allocateMLBBGroups()`
    `const dA = getDept(a), dB = getDept(b);`
  - [`app.js:5558`](app.js#L5558) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:5561`](app.js#L5561) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDeptConflict = (g) => teamDept && groups[g].some(t => getDept(t) === teamDept);`

<a id="isinvited"></a>
#### `isInvited(team)`

- **Definisi:** [`app.js:5456`](app.js#L5456)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5461`](app.js#L5461) — di dalam fungsi `allocateMLBBGroups()`
    `let invited = teamsList.filter(t => isInvited(t));`
  - [`app.js:5462`](app.js#L5462) — di dalam fungsi `allocateMLBBGroups()`
    `let regular = teamsList.filter(t => !isInvited(t));`
  - [`app.js:5482`](app.js#L5482) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:5491`](app.js#L5491) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:5500`](app.js#L5500) — di dalam fungsi `allocateMLBBGroups()`
    `if (!groups[g].some(t => isInvited(t))) { targetGroup = g; break; }`

<a id="getoverbasecount"></a>
#### `getOverBaseCount()`

- **Definisi:** [`app.js:5524`](app.js#L5524)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5530`](app.js#L5530) — di dalam fungsi `allocateMLBBGroups()`
    `return getOverBaseCount() < remainder;`

<a id="canaccept"></a>
#### `canAccept(g)`

- **Definisi:** [`app.js:5526`](app.js#L5526)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="hasprefixconflict"></a>
#### `hasPrefixConflict(g)`

- **Definisi:** [`app.js:5560`](app.js#L5560)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5579`](app.js#L5579) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`
  - [`app.js:5588`](app.js#L5588) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g)) {`

<a id="hasdeptconflict"></a>
#### `hasDeptConflict(g)`

- **Definisi:** [`app.js:5561`](app.js#L5561)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5579`](app.js#L5579) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`

<a id="updategrouprecord"></a>
#### `updateGroupRecord(gName, idx, field, val)`

- **Definisi:** [`app.js:5654`](app.js#L5654)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:6622`](app.js#L6622) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" o`
  - [`app.js:6626`](app.js#L6626) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" `
  - [`app.js:11696`](app.js#L11696) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:11699`](app.js#L11699) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="getsortedgroupteams"></a>
#### `getSortedGroupTeams(gName)`

- **Definisi:** [`app.js:5769`](app.js#L5769)
- **Deskripsi:** Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkulasi MVP terkini
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:4085`](app.js#L4085) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4616`](app.js#L4616) — di dalam fungsi `findTeamGroupAndRank()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4758`](app.js#L4758) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:5125`](app.js#L5125) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const sorted = typeof getSortedGroupTeams === 'function' ? getSortedGroupTeams(gName) : groupTeams;`
  - [`app.js:6059`](app.js#L6059) — di dalam fungsi `initGroupPlayoff()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:6185`](app.js#L6185) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:6186`](app.js#L6186) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:6187`](app.js#L6187) — di dalam fungsi `initGroupPlayoff()`
    `const grpC = getSortedGroupTeams('Grup C');`
  - [`app.js:6188`](app.js#L6188) — di dalam fungsi `initGroupPlayoff()`
    `const grpD = getSortedGroupTeams('Grup D');`
  - [`app.js:6264`](app.js#L6264) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:6265`](app.js#L6265) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:6593`](app.js#L6593) — di dalam fungsi `renderGroupStageUI()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:11638`](app.js#L11638) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const sorted = getSortedGroupTeams(gName);`
- **Memanggil Fungsi Internal:** [`compareMLBBTeams()`](#comparemlbbteams)

<a id="shufflearray"></a>
#### `shuffleArray(arr)`

- **Definisi:** [`app.js:5797`](app.js#L5797)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:5810`](app.js#L5810) — di dalam fungsi `findValidBracketPermutation()`
    `const shuffledRemaining = shuffleArray(remainingItems);`
  - [`app.js:5859`](app.js#L5859) — di dalam fungsi `solveRemainingBracketSlots()`
    `const shuffledItems = shuffleArray(remainingItems);`
  - [`app.js:5903`](app.js#L5903) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const otherInvited = shuffleArray(allInvited.filter(x => x !== atmoItem && x !== alphaItem && x !== `
  - [`app.js:5955`](app.js#L5955) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const wingSlots = shuffleArray([w * 2, w * 2 + 1]);`
  - [`app.js:6016`](app.js#L6016) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const shuffledInv = shuffleArray(j3Invited);`
  - [`app.js:6017`](app.js#L6017) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const targetWings = shuffleArray([0, 1, 2, 3]);`
  - [`app.js:6086`](app.js#L6086) — di dalam fungsi `initGroupPlayoff()`
    `branchJ1 = shuffleArray([...j1List]);`
  - [`app.js:6217`](app.js#L6217) — di dalam fungsi `initGroupPlayoff()`
    `const candJ1 = shuffleArray([...j1List]);`
  - [`app.js:6235`](app.js#L6235) — di dalam fungsi `initGroupPlayoff()`
    `bJ1 = shuffleArray([...j1List]);`

<a id="backtrack"></a>
#### `backtrack(slotIdx, remainingItems, currentArr)`

- **Definisi:** [`app.js:5808`](app.js#L5808)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5816`](app.js#L5816) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);`
  - [`app.js:5823`](app.js#L5823) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(0, candidates, []);`
  - [`app.js:5860`](app.js#L5860) — di dalam fungsi `solveRemainingBracketSlots()`
    `function backtrack(idx, arr) {`
  - [`app.js:5869`](app.js#L5869) — di dalam fungsi `solveRemainingBracketSlots()`
    `const res = backtrack(idx + 1, nextArr);`
  - [`app.js:5874`](app.js#L5874) — di dalam fungsi `solveRemainingBracketSlots()`
    `return backtrack(0, [...currentArray]);`

<a id="isteamatmo"></a>
#### `isTeamAtmo(teamName)`

- **Definisi:** [`app.js:5830`](app.js#L5830)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5900`](app.js#L5900) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const atmoItem = allInvited.find(x => isTeamAtmo(x.team));`
  - [`app.js:6221`](app.js#L6221) — di dalam fungsi `initGroupPlayoff()`
    `const atmoIdx = candJ1.findIndex(x => isTeamAtmo(x.team)) !== -1 ? candJ1.findIndex(x => isTeamAtmo(`

<a id="isteamalpha"></a>
#### `isTeamAlpha(teamName)`

- **Definisi:** [`app.js:5835`](app.js#L5835)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5901`](app.js#L5901) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const alphaItem = allInvited.find(x => isTeamAlpha(x.team) && x !== atmoItem);`
  - [`app.js:6222`](app.js#L6222) — di dalam fungsi `initGroupPlayoff()`
    `const alphaIdx = candJ1.findIndex(x => isTeamAlpha(x.team)) !== -1 ? candJ1.findIndex(x => isTeamAlp`

<a id="isteamappa"></a>
#### `isTeamAppa(teamName)`

- **Definisi:** [`app.js:5841`](app.js#L5841)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5902`](app.js#L5902) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const appaItem = allInvited.find(x => isTeamAppa(x.team) && x !== atmoItem && x !== alphaItem);`

<a id="backtrack"></a>
#### `backtrack(idx, arr)`

- **Definisi:** [`app.js:5860`](app.js#L5860)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5808`](app.js#L5808) — di dalam fungsi `findValidBracketPermutation()`
    `function backtrack(slotIdx, remainingItems, currentArr) {`
  - [`app.js:5816`](app.js#L5816) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);`
  - [`app.js:5823`](app.js#L5823) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(0, candidates, []);`
  - [`app.js:5869`](app.js#L5869) — di dalam fungsi `solveRemainingBracketSlots()`
    `const res = backtrack(idx + 1, nextArr);`
  - [`app.js:5874`](app.js#L5874) — di dalam fungsi `solveRemainingBracketSlots()`
    `return backtrack(0, [...currentArray]);`

<a id="isinv"></a>
#### `isInv(t)`

- **Definisi:** [`app.js:5887`](app.js#L5887)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5889`](app.js#L5889) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Invited = j1List.filter(item => isInv(item.team));`
  - [`app.js:5890`](app.js#L5890) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Regular = j1List.filter(item => !isInv(item.team));`
  - [`app.js:5891`](app.js#L5891) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Invited = j2List.filter(item => isInv(item.team));`
  - [`app.js:5892`](app.js#L5892) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Regular = j2List.filter(item => !isInv(item.team));`
  - [`app.js:5967`](app.js#L5967) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `(!branchJ1[s] || (!isInv(branchJ1[s].team) && branchJ1[s].group !== item.group))`
  - [`app.js:6008`](app.js#L6008) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Invited = j3List.filter(item => isInv(item.team));`
  - [`app.js:6009`](app.js#L6009) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Regular = j3List.filter(item => !isInv(item.team));`

<a id="isinv"></a>
#### `isInv(t)`

- **Definisi:** [`app.js:6007`](app.js#L6007)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5889`](app.js#L5889) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Invited = j1List.filter(item => isInv(item.team));`
  - [`app.js:5890`](app.js#L5890) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Regular = j1List.filter(item => !isInv(item.team));`
  - [`app.js:5891`](app.js#L5891) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Invited = j2List.filter(item => isInv(item.team));`
  - [`app.js:5892`](app.js#L5892) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Regular = j2List.filter(item => !isInv(item.team));`
  - [`app.js:5967`](app.js#L5967) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `(!branchJ1[s] || (!isInv(branchJ1[s].team) && branchJ1[s].group !== item.group))`
  - [`app.js:6008`](app.js#L6008) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Invited = j3List.filter(item => isInv(item.team));`
  - [`app.js:6009`](app.js#L6009) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Regular = j3List.filter(item => !isInv(item.team));`

<a id="resolveteamnameingroup"></a>
#### `resolveTeamNameInGroup(rawName, groupTeams)`

- **Definisi:** [`app.js:6826`](app.js#L6826)
- **Deskripsi:** Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisan alias/tanda kurung di poster)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6940`](app.js#L6940) — di dalam fungsi `getGroupFixtures()`
    `const realTeamA = resolveTeamNameInGroup(item.teamA, teams);`
  - [`app.js:6941`](app.js#L6941) — di dalam fungsi `getGroupFixtures()`
    `const realTeamB = resolveTeamNameInGroup(item.teamB, teams);`

<a id="issameteamname"></a>
#### `isSameTeamName(name1, name2)`

- **Definisi:** [`app.js:6842`](app.js#L6842)
- **Deskripsi:** Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, spasi, tanda kurung, dan alias
- **Titik Pemanggilan (38 lokasi):**
  - [`app.js:4329`](app.js#L4329) — di dalam fungsi `openPlayoffScoreModal()`
    `if (isSameTeamName(preselectWinner, match.teamA)) {`
  - [`app.js:4332`](app.js#L4332) — di dalam fungsi `openPlayoffScoreModal()`
    `} else if (isSameTeamName(preselectWinner, match.teamB)) {`
  - [`app.js:4617`](app.js#L4617) — di dalam fungsi `findTeamGroupAndRank()`
    `const idx = sorted.findIndex(t => isSameTeamName(t.name, teamName));`
  - [`app.js:5131`](app.js#L5131) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const teamObj = groupTeams.find(t => isSameTeamName(t.name, tName)) || { name: tName };`
  - [`app.js:5132`](app.js#L5132) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const rankIdx = sorted.findIndex(t => isSameTeamName(t.name, tName));`
  - [`app.js:5680`](app.js#L5680) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if ((isSameTeamName(m.teamA, teamA) && isSameTeamName(m.teamB, teamB)) ||`
  - [`app.js:5681`](app.js#L5681) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `(isSameTeamName(m.teamA, teamB) && isSameTeamName(m.teamB, teamA))) {`
  - [`app.js:5707`](app.js#L5707) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamA) || isSameTeamName(cleanWinner, teamA)) {`
  - [`app.js:5710`](app.js#L5710) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamB) || isSameTeamName(cleanWinner, teamB)) {`
  - [`app.js:5717`](app.js#L5717) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const isAFirst = isSameTeamName(match.teamA, teamA);`
  - [`app.js:6862`](app.js#L6862) — di dalam fungsi `findGroupNameForTeam()`
    `if (Array.isArray(gsd[g]) && gsd[g].some(t => isSameTeamName(t.name, teamName))) {`
  - [`app.js:7039`](app.js#L7039) — di dalam fungsi `getGroupFixtures()`
    `if ((isSameTeamName(item.teamA, p.teamA) && isSameTeamName(item.teamB, p.teamB)) ||`
  - [`app.js:7040`](app.js#L7040) — di dalam fungsi `getGroupFixtures()`
    `(isSameTeamName(item.teamA, p.teamB) && isSameTeamName(item.teamB, p.teamA))) {`
  - [`app.js:7058`](app.js#L7058) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.teamA, p.teamA)) {`
  - [`app.js:7061`](app.js#L7061) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.teamA, p.teamB)) {`
  - [`app.js:7074`](app.js#L7074) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.winner, p.teamA) && Number(scoreA) < Number(scoreB)) {`
  - [`app.js:7077`](app.js#L7077) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.teamA, p.teamA)) {`
  - [`app.js:7083`](app.js#L7083) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.winner, p.teamB) && Number(scoreB) < Number(scoreA)) {`
  - [`app.js:7086`](app.js#L7086) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.teamA, p.teamB)) {`
  - [`app.js:7170`](app.js#L7170) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(m.teamA, canonTeamB) && isSameTeamName(m.teamB, canonTeamA)) {`
  - [`app.js:7182`](app.js#L7182) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(normWinner, canonTeamA) && sA < sB) {`
  - [`app.js:7184`](app.js#L7184) — di dalam fungsi `deduplicateGroupMatchResults()`
    `} else if (isSameTeamName(normWinner, canonTeamB) && sB < sA) {`
  - [`app.js:7216`](app.js#L7216) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(mergedWinner, canonTeamA) && sA < sB) {`
  - [`app.js:7218`](app.js#L7218) — di dalam fungsi `deduplicateGroupMatchResults()`
    `} else if (isSameTeamName(mergedWinner, canonTeamB) && sB < sA) {`
  - [`app.js:7306`](app.js#L7306) — di dalam fungsi `setGroupMatchScore()`
    `if (isSameTeamName(winner, teamA) && Number(scoreA) < Number(scoreB)) {`
  - [`app.js:7308`](app.js#L7308) — di dalam fungsi `setGroupMatchScore()`
    `} else if (isSameTeamName(winner, teamB) && Number(scoreB) < Number(scoreA)) {`
  - [`app.js:7324`](app.js#L7324) — di dalam fungsi `setGroupMatchScore()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:7325`](app.js#L7325) — di dalam fungsi `setGroupMatchScore()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:7466`](app.js#L7466) — di dalam fungsi `openMLBBGroupMvpModal()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:7467`](app.js#L7467) — di dalam fungsi `openMLBBGroupMvpModal()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:8441`](app.js#L8441) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamA = isSameTeamName(m.teamA, t.name);`
  - [`app.js:8442`](app.js#L8442) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamB = isSameTeamName(m.teamB, t.name);`
  - [`app.js:8469`](app.js#L8469) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(m.winner, t.name) ||`
  - [`app.js:8470`](app.js#L8470) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(cleanWinner, t.name)`
  - [`app.js:8764`](app.js#L8764) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:8765`](app.js#L8765) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`
  - [`app.js:11764`](app.js#L11764) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:11765`](app.js#L11765) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`

<a id="findgroupnameforteam"></a>
#### `findGroupNameForTeam(teamName)`

- **Definisi:** [`app.js:6858`](app.js#L6858)
- **Deskripsi:** Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:7454`](app.js#L7454) — di dalam fungsi `openMLBBGroupMvpModal()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:8037`](app.js#L8037) — di dalam fungsi `setGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:8130`](app.js#L8130) — di dalam fungsi `promptGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:8146`](app.js#L8146) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `gName = (typeof findGroupNameForTeam === 'function' && (findGroupNameForTeam(teamA) || findGroupName`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname)

<a id="getcanonicalgroupmatchid"></a>
#### `getCanonicalGroupMatchId(gName, teamA, teamB)`

- **Definisi:** [`app.js:7123`](app.js#L7123)
- **Deskripsi:** Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tidak terpengaruh urutan teamA vs teamB)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5672`](app.js#L5672) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const canonId = getCanonicalGroupMatchId(gName || '', teamA, teamB);`
  - [`app.js:7029`](app.js#L7029) — di dalam fungsi `getGroupFixtures()`
    `const canonId = getCanonicalGroupMatchId(gName, p.teamA, p.teamB);`
  - [`app.js:7315`](app.js#L7315) — di dalam fungsi `setGroupMatchScore()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:7456`](app.js#L7456) — di dalam fungsi `openMLBBGroupMvpModal()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:8040`](app.js#L8040) — di dalam fungsi `setGroupMatchMVP()`
    `const canonId = (teamA && teamB) ? getCanonicalGroupMatchId(gName, teamA, teamB) : matchId;`
  - [`app.js:8148`](app.js#L8148) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `const canonId = typeof getCanonicalGroupMatchId === 'function' ? getCanonicalGroupMatchId(gName, tea`
  - [`app.js:8425`](app.js#L8425) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const pairKey = getCanonicalGroupMatchId(gName, m.teamA, m.teamB);`

<a id="isgroupmatchescompleted"></a>
#### `isGroupMatchesCompleted(gName)`

- **Definisi:** [`app.js:7132`](app.js#L7132)
- **Deskripsi:** Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah selesai diinput
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5126`](app.js#L5126) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const isGroupAllDone = typeof isGroupMatchesCompleted === 'function' ? isGroupMatchesCompleted(gName`
  - [`app.js:6594`](app.js#L6594) — di dalam fungsi `renderGroupStageUI()`
    `const isGroupAllDone = isGroupMatchesCompleted(gName);`
  - [`app.js:11640`](app.js#L11640) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isGroupAllDone = isGroupMatchesCompleted(gName);`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="deduplicategroupmatchresults"></a>
#### `deduplicateGroupMatchResults()`

- **Definisi:** [`app.js:7150`](app.js#L7150)
- **Deskripsi:** Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri terbalik / ganda
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1475`](app.js#L1475) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
  - [`app.js:8407`](app.js#L8407) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `deduplicateGroupMatchResults();`
  - [`app.js:10866`](app.js#L10866) — cakupan global / event handler
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname)

<a id="getgrouprestingteams"></a>
#### `getGroupRestingTeams(gName, day)`

- **Definisi:** [`app.js:7242`](app.js#L7242)
- **Deskripsi:** Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di grup tertentu
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8728`](app.js#L8728) — di dalam fungsi `renderGroupFixturesUI()`
    `const resting = getGroupRestingTeams(gName, parseInt(mlbbActiveDayFilter, 10));`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="setgroupmatchscore"></a>
#### `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB, explicitWinner = null)`

- **Definisi:** [`app.js:7253`](app.js#L7253)
- **Deskripsi:** Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara otomatis.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:7377`](app.js#L7377) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 2, '${teamB} (Menang WO)');`
  - [`app.js:7379`](app.js#L7379) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 2, 0, '${teamA} (Menang WO)');`
  - [`app.js:7381`](app.js#L7381) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Keduanya WO (0-0)');`
  - [`app.js:7393`](app.js#L7393) — di dalam fungsi `setGroupMatchSpecialResult()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Imbang (0-0)');`
  - [`app.js:7404`](app.js#L7404) — di dalam fungsi `saveGroupFixtureScore()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB);`
  - [`app.js:11790`](app.js#L11790) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`functional_tests.js:676`](functional_tests.js#L676) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchScore('), 'app.js harus memiliki setter skor setGroup`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="promptgroupmatchwo"></a>
#### `promptGroupMatchWO(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:7363`](app.js#L7363)
- **Deskripsi:** Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupun kedua tim
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7391`](app.js#L7391) — di dalam fungsi `setGroupMatchSpecialResult()`
    `promptGroupMatchWO(matchId, gName, teamA, teamB);`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="setgroupmatchspecialresult"></a>
#### `setGroupMatchSpecialResult(matchId, gName, teamA, teamB, resultType)`

- **Definisi:** [`app.js:7388`](app.js#L7388)
- **Deskripsi:** Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imbang)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:8809`](app.js#L8809) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#f871`
  - [`app.js:8810`](app.js#L8810) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#fbbf`
  - [`app.js:11793`](app.js#L11793) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:11794`](app.js#L11794) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
- **Memanggil Fungsi Internal:** [`promptGroupMatchWO()`](#promptgroupmatchwo), [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="selectmvpplayer"></a>
#### `selectMvpPlayer(nickname, realName, teamName)`

- **Definisi:** [`app.js:7819`](app.js#L7819)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7792`](app.js#L7792) — di dalam fungsi `renderMvpRosterList()`
    `<div class="mvp-roster-chip ${isSelected ? 'selected' : ''}" onclick="selectMvpPlayer('${safeIgn}', `
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="rendermvpquickherochips"></a>
#### `renderMvpQuickHeroChips(activeHero)`

- **Definisi:** [`app.js:7851`](app.js#L7851)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7612`](app.js#L7612) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:7706`](app.js#L7706) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:7885`](app.js#L7885) — di dalam fungsi `selectMvpQuickHero()`
    `renderMvpQuickHeroChips(heroName);`
- **Memanggil Fungsi Internal:** [`selectMvpQuickHero()`](#selectmvpquickhero)

<a id="selectmvpquickhero"></a>
#### `selectMvpQuickHero(heroName)`

- **Definisi:** [`app.js:7871`](app.js#L7871)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7862`](app.js#L7862) — di dalam fungsi `renderMvpQuickHeroChips()`
    `<span class="mvp-hero-pill ${isActive ? 'active' : ''}" onclick="selectMvpQuickHero('${safeHero}')">`
- **Memanggil Fungsi Internal:** [`renderMvpQuickHeroChips()`](#rendermvpquickherochips)

<a id="saveselectedmvp"></a>
#### `saveSelectedMvp()`

- **Definisi:** [`app.js:7888`](app.js#L7888)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:936`](index.html#L936) — Event `onclick`
    `<button type="button" class="btn btn-primary" style="background: var(--yokke-gold); color: #0b1120; `
  - [`app.js:7984`](app.js#L7984) — di dalam fungsi `deleteCurrentMvp()`
    `saveSelectedMvp();`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp), [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal)

<a id="deletecurrentmvp"></a>
#### `deleteCurrentMvp()`

- **Definisi:** [`app.js:7960`](app.js#L7960)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:929`](index.html#L929) — Event `onclick`
    `<button type="button" id="btnDeleteMvp" class="btn btn-outline" style="color: var(--yokke-red); bord`
- **Memanggil Fungsi Internal:** [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal), [`saveSelectedMvp()`](#saveselectedmvp), [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp)

<a id="setgroupmatchmvp"></a>
#### `setGroupMatchMVP(matchId, mvpPlayer, mvpHero, mvpTeam, gameMvps = null)`

- **Definisi:** [`app.js:8012`](app.js#L8012)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7952`](app.js#L7952) — di dalam fungsi `saveSelectedMvp()`
    `setGroupMatchMVP(ctx.canonId, summaryPlayer, summaryHero, summaryTeam, validGames);`
  - [`app.js:8004`](app.js#L8004) — di dalam fungsi `deleteCurrentMvp()`
    `setGroupMatchMVP(ctx.canonId, null, null, null, []);`
  - [`functional_tests.js:790`](functional_tests.js#L790) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchMVP('), 'Harus memiliki setGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="promptgroupmatchmvp"></a>
#### `promptGroupMatchMVP(matchId, teamA, teamB, gName = '')`

- **Definisi:** [`app.js:8127`](app.js#L8127)
- **Deskripsi:** Delegasi fungsi promptGroupMatchMVP ke modal interaktif
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:791`](functional_tests.js#L791) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptGroupMatchMVP('), 'Harus memiliki promptGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="togglematchplayerverify"></a>
#### `toggleMatchPlayerVerify(playerKey)`

- **Definisi:** [`app.js:8191`](app.js#L8191)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8365`](app.js#L8365) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn ${isVerified ? 'btn-primary' : 'btn-outline'}" style="font-size:0.7`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="verifyallmatchplayers"></a>
#### `verifyAllMatchPlayers(teamName, shouldVerify = true)`

- **Definisi:** [`app.js:8209`](app.js#L8209)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8276`](app.js#L8276) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8279`](app.js#L8279) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="resetgroupmatchscore"></a>
#### `resetGroupMatchScore(matchId)`

- **Definisi:** [`app.js:8391`](app.js#L8391)
- **Deskripsi:** Mereset skor pertandingan grup MLBB ke status belum bertanding.
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="findprevious"></a>
#### `findPrevious(ply)`

- **Definisi:** [`app.js:9049`](app.js#L9049)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9062`](app.js#L9062) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`app.js:9061`](app.js#L9061)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9132`](app.js#L9132) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:9184`](app.js#L9184) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

<a id="findprevsemi"></a>
#### `findPrevSemi(ply)`

- **Definisi:** [`app.js:9364`](app.js#L9364)
- **Deskripsi:** Preserve poin semifinal jika sudah ada
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9373`](app.js#L9373) — di dalam fungsi `syncMCGGSemiFinal()`
    `const prev = findPrevSemi(p) || {};`

<a id="mapsemiplayer"></a>
#### `mapSemiPlayer(p)`

- **Definisi:** [`app.js:9372`](app.js#L9372)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevinarr"></a>
#### `findPrevInArr(p, arr)`

- **Definisi:** [`app.js:9401`](app.js#L9401)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9411`](app.js#L9411) — di dalam fungsi `syncMCGGGrandFinal()`
    `const prev = findPrevInArr(p, existingGF);`

<a id="mapgfplayer"></a>
#### `mapGFPlayer(p)`

- **Definisi:** [`app.js:9410`](app.js#L9410)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:9443`](app.js#L9443) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9444`](app.js#L9444) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9473`](app.js#L9473) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9474`](app.js#L9474) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`

<a id="drawmatchpool"></a>
#### `drawMatchPool(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9840`](app.js#L9840)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 1: Acak 8 Pool Commander untuk Group/Lobby Ini ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9655`](app.js#L9655) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaft`
  - [`app.js:10011`](app.js#L10011) — di dalam fungsi `drawMatchCommanders()`
    `drawMatchPool(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="assignmatchpooltoplayers"></a>
#### `assignMatchPoolToPlayers(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9915`](app.js#L9915)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 2: Pasangkan 8 Pool Commander ke Masing-Masing Pemain ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9662`](app.js#L9662) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasPool ? "alert('⚠️ Silakan acak 8 Pool Commander terlebih dahulu.')" : (isMatchLocked `
  - [`app.js:10012`](app.js#L10012) — di dalam fungsi `drawMatchCommanders()`
    `assignMatchPoolToPlayers(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="togglelockmatchdraw"></a>
#### `toggleLockMatchDraw(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9966`](app.js#L9966)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 3: Kunci Match (Lock) / Buka Kunci ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9669`](app.js#L9669) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasAssigned ? "alert('⚠️ Pasangkan commander ke pemain terlebih dahulu sebelum mengunci.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="nextmatchdraw"></a>
#### `nextMatchDraw(targetLobbyKey, nextMatchNum)`

- **Definisi:** [`app.js:9993`](app.js#L9993)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 4: Lanjut ke Match Berikutnya (Match 2) ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9677`](app.js#L9677) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="nextMatchDraw('${lobbyKey}', 2)">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="showmatch3draftinfo"></a>
#### `showMatch3DraftInfo()`

- **Definisi:** [`app.js:10078`](app.js#L10078)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9682`](app.js#L9682) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="showMatch3DraftInfo()">`

<a id="buildroundcell"></a>
#### `buildRoundCell(player, roundKey, cmdKey, targetLobby)`

- **Definisi:** [`app.js:10516`](app.js#L10516)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10504`](app.js#L10504) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r1', 'c1', lobbyKey)}</td>`
  - [`app.js:10505`](app.js#L10505) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r2', 'c2', lobbyKey)}</td>`
  - [`app.js:10506`](app.js#L10506) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r3', 'c3', lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`updateMCGGCommander()`](#updatemcggcommander), [`updateMCGGRank()`](#updatemcggrank)

<a id="loadsampledata"></a>
#### `loadSampleData()`

- **Definisi:** [`app.js:10617`](app.js#L10617)
- **Deskripsi:** Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation - No Sensitive Info)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:331`](index.html#L331) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="loadSamp`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="clearalldata"></a>
#### `clearAllData()`

- **Definisi:** [`app.js:10821`](app.js#L10821)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:332`](index.html#L332) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="clearAll`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="rendersinglematchnodehtml"></a>
#### `renderSingleMatchNodeHtml(m, rIdx, mIdx, topPx, activeNodeKey, isLower = false)`

- **Definisi:** [`app.js:11045`](app.js#L11045)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:11159`](app.js#L11159) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col0 += renderSingleMatchNodeHtml(groupPlayoffMatches[1][4 + i], 1, 4 + i, c8[i] - 38, activeNodeKey`
  - [`app.js:11175`](app.js#L11175) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col1 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][2 + i], 2, 2 + i, c4[i] - 38, activeNodeKey`
  - [`app.js:11191`](app.js#L11191) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][6 + i], 2, 6 + i, c4[i] - 38, activeNodeKey`
  - [`app.js:11204`](app.js#L11204) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[3][0], 3, 0, c2[0] - 38, activeNodeKey, true);`
  - [`app.js:11205`](app.js#L11205) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[3][1], 3, 1, c2[1] - 38, activeNodeKey, true);`
  - [`app.js:11214`](app.js#L11214) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col4 += renderSingleMatchNodeHtml(groupPlayoffMatches[4][4], 4, 4, c1[0] - 38, activeNodeKey, true);`
  - [`app.js:11223`](app.js#L11223) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col5 += renderSingleMatchNodeHtml(groupPlayoffMatches[5][0], 5, 0, c1[0] - 38, activeNodeKey, false)`
  - [`app.js:11235`](app.js#L11235) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col0 += renderSingleMatchNodeHtml(groupPlayoffMatches[0][i], 0, i, c8[i] - 38, activeNodeKey, false)`
  - [`app.js:11251`](app.js#L11251) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col1 += renderSingleMatchNodeHtml(groupPlayoffMatches[1][i], 1, i, c4[i] - 38, activeNodeKey, false)`
  - [`app.js:11264`](app.js#L11264) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][0], 2, 0, c2[0] - 38, activeNodeKey, false)`
  - [`app.js:11265`](app.js#L11265) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][1], 2, 1, c2[1] - 38, activeNodeKey, false)`
  - [`app.js:11274`](app.js#L11274) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[4][0], 4, 0, c1[0] - 38, activeNodeKey, false)`
  - [`app.js:11283`](app.js#L11283) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col4 += renderSingleMatchNodeHtml(groupPlayoffMatches[5][0], 5, 0, c1[0] - 38, activeNodeKey, false)`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`openPlayoffScoreModal()`](#openplayoffscoremodal), [`onPlayoffTeamClicked()`](#onplayoffteamclicked), [`escapeHtml()`](#escapehtml)

<a id="rendersvgconnectorcolumn"></a>
#### `renderSvgConnectorColumn(pairs, strokeColor = '#00d2ff', width = 50, height = 750)`

- **Definisi:** [`app.js:11105`](app.js#L11105)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:11170`](app.js#L11170) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg0 = renderSvgConnectorColumn(pairs0, '#ffb703');`
  - [`app.js:11186`](app.js#L11186) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg1 = renderSvgConnectorColumn(pairs1, '#ffb703');`
  - [`app.js:11200`](app.js#L11200) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg2 = renderSvgConnectorColumn(pairs2, '#ffb703');`
  - [`app.js:11210`](app.js#L11210) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg3 = renderSvgConnectorColumn(pairs3, '#ffb703');`
  - [`app.js:11219`](app.js#L11219) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg4 = renderSvgConnectorColumn(pairs4, '#ffb703');`
  - [`app.js:11246`](app.js#L11246) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg0 = renderSvgConnectorColumn(pairs0, '#00d2ff');`
  - [`app.js:11260`](app.js#L11260) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg1 = renderSvgConnectorColumn(pairs1, '#00d2ff');`
  - [`app.js:11270`](app.js#L11270) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg2 = renderSvgConnectorColumn(pairs2, '#00d2ff');`
  - [`app.js:11279`](app.js#L11279) — di dalam fungsi `renderFullPlayoffBracketHtml()`
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
  - [`app.js:5438`](app.js#L5438) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:4943`](app.js#L4943) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5457`](app.js#L5457) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:5849`](app.js#L5849) — di dalam fungsi `isPlayoffInvitedTeam()`
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
  - [`app.js:4942`](app.js#L4942) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:5447`](app.js#L5447) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:946`](functional_tests.js#L946)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:141`](app.js#L141) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:5438`](app.js#L5438) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:4943`](app.js#L4943) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5457`](app.js#L5457) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:5849`](app.js#L5849) — di dalam fungsi `isPlayoffInvitedTeam()`
    `if (typeof isTeamInvited === 'function' && isTeamInvited(teamName)) return true;`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`

<a id="findprevious"></a>
#### `findPrevious()`

- **Definisi:** [`functional_tests.js:1085`](functional_tests.js#L1085)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9062`](app.js#L9062) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`functional_tests.js:1087`](functional_tests.js#L1087)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9132`](app.js#L9132) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:9184`](app.js#L9184) — di dalam fungsi `syncMCGGPlayers()`
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

- **Definisi:** [`app.js:963`](app.js#L963)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:358`](index.html#L358) — Event `oninput`
    `<input type="text" id="participantSearchInput" placeholder="🔍 Cari Tim / IGN / Divisi..." oninput="`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants)

<a id="autolinkparticipantsassets"></a>
#### `autoLinkParticipantsAssets()`

- **Definisi:** [`app.js:1254`](app.js#L1254)
- **Deskripsi:** Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1530`](app.js#L1530) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3689`](app.js#L3689) — di dalam fungsi `saveParticipantEdit()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3810`](app.js#L3810) — di dalam fungsi `renderParticipants()`
    `autoLinkParticipantsAssets();`
  - [`app.js:10815`](app.js#L10815) — di dalam fungsi `loadSampleData()`
    `autoLinkParticipantsAssets();`
  - [`app.js:10841`](app.js#L10841) — cakupan global / event handler
    `autoLinkParticipantsAssets();`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap)

<a id="fetchparticipantsfromgooglesheet"></a>
#### `fetchParticipantsFromGoogleSheet(isSilent = false, isPure = false)`

- **Definisi:** [`app.js:1289`](app.js#L1289)
- **Deskripsi:** Fetch registered participants from Google Sheets via doGet Webhook Google Sheets menjadi Single Source of Truth: data yang dihapus di sheet tidak akan dimunculkan kembali.
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:344`](index.html#L344) — Event `onclick`
    `<button class="btn btn-primary" id="btnSyncGSheet" style="padding: 0.45rem 0.9rem; font-size: 0.82re`
  - [`app.js:1669`](app.js#L1669) — di dalam fungsi `resetCacheAndFollowGSheet()`
    `await fetchParticipantsFromGoogleSheet(false, true);`
  - [`app.js:10873`](app.js#L10873) — cakupan global / event handler
    `fetchParticipantsFromGoogleSheet(true, true).catch(err => {`
  - [`app.js:10879`](app.js#L10879) — cakupan global / event handler
    `await fetchParticipantsFromGoogleSheet(true, true);`
- **Memanggil Fungsi Internal:** [`getItemKey()`](#getitemkey), [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap), [`renderRules()`](#renderrules), [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`setLastSyncedMatches()`](#setlastsyncedmatches), [`renderMCGGTable()`](#rendermcggtable), [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`updateCommanderPoolFromSetup()`](#updatecommanderpoolfromsetup), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`showToast()`](#showtoast)

<a id="toggleregistrationstatus"></a>
#### `toggleRegistrationStatus()`

- **Definisi:** [`app.js:2463`](app.js#L2463)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:41`](index.html#L41) — Event `onclick`
    `<button id="btnToggleReg" class="btn btn-outline" style="display: none; padding: 0.25rem 0.65rem; fo`
  - [`index.html:330`](index.html#L330) — Event `onclick`
    `<button id="btnToggleRegPeserta" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0`
  - [`index.html:482`](index.html#L482) — Event `onclick`
    `<button id="btnToggleRegMLBB" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
  - [`index.html:591`](index.html#L591) — Event `onclick`
    `<button id="btnToggleRegMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; padd`
  - [`functional_tests.js:825`](functional_tests.js#L825) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleRegistrationStatus()'), 'Harus memiliki toggleRegistrationSt`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handleregister"></a>
#### `handleRegister(e)`

- **Definisi:** [`app.js:2875`](app.js#L2875)
- **Deskripsi:** Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Card, and Automatic Update Threat
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:87`](index.html#L87) — Event `onsubmit`
    `<form id="regForm" onsubmit="handleRegister(event)">`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`showToast()`](#showtoast), [`saveState()`](#savestate), [`clearFormDraft()`](#clearformdraft), [`renderPlayersFormInputs()`](#renderplayersforminputs), [`toggleCategoryForm()`](#togglecategoryform), [`toggleOfficial2Form()`](#toggleofficial2form), [`updateRegistrationDatalists()`](#updateregistrationdatalists)

<a id="setparticipantstatus"></a>
#### `setParticipantStatus(id, newStatus)`

- **Definisi:** [`app.js:3407`](app.js#L3407)
- **Deskripsi:** Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3907`](app.js#L3907) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-success-sm" title="Verifikasi / Setujui" onclick="setParticipantStatus(${p.id`
  - [`app.js:3908`](app.js#L3908) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-danger-sm" title="Tolak / Gagal" onclick="setParticipantStatus(${p.id}, 'REJE`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="deleteparticipant"></a>
#### `deleteParticipant(id)`

- **Definisi:** [`app.js:3444`](app.js#L3444)
- **Deskripsi:** Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat ke blacklist agar tidak ter-sync ulang.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3909`](app.js#L3909) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" onclick="delet`
- **Memanggil Fungsi Internal:** [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="saveparticipantedit"></a>
#### `saveParticipantEdit()`

- **Definisi:** [`app.js:3625`](app.js#L3625)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:728`](index.html#L728) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveParticipantEdit()">💾 Simpan Perubahan Data</button>`
- **Memanggil Fungsi Internal:** [`saveLogoToMap()`](#savelogotomap), [`saveIdCardToMap()`](#saveidcardtomap), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`closeEditParticipantModal()`](#closeeditparticipantmodal)

<a id="viewrosterdetail"></a>
#### `viewRosterDetail(id)`

- **Definisi:** [`app.js:3745`](app.js#L3745)
- **Deskripsi:** Modal Detail Roster Lengkap & ID Card Per-Pemain
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3939`](app.js#L3939) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;" onclick="viewRos`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox)

<a id="renderparticipants"></a>
#### `renderParticipants()`

- **Definisi:** [`app.js:3809`](app.js#L3809)
- **Deskripsi:** Render Participant Table (Featuring Nickname, ID Card count per-player, and Admin Edit Action)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:254`](app.js#L254) — di dalam fungsi `toggleInvitedTeam()`
    `renderParticipants();`
  - [`app.js:952`](app.js#L952) — di dalam fungsi `bypassLoaderWithCache()`
    `renderParticipants();`
  - [`app.js:965`](app.js#L965) — di dalam fungsi `handleParticipantSearch()`
    `renderParticipants();`
  - [`app.js:1533`](app.js#L1533) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderParticipants();`
  - [`app.js:1924`](app.js#L1924) — di dalam fungsi `saveState()`
    `renderParticipants();`
  - [`app.js:2342`](app.js#L2342) — di dalam fungsi `verifyAdminPin()`
    `renderParticipants();`
  - [`app.js:2389`](app.js#L2389) — di dalam fungsi `logoutAdmin()`
    `renderParticipants();`
  - [`app.js:3413`](app.js#L3413) — di dalam fungsi `setParticipantStatus()`
    `renderParticipants();`
  - [`app.js:3466`](app.js#L3466) — di dalam fungsi `deleteParticipant()`
    `renderParticipants();`
  - [`app.js:3489`](app.js#L3489) — di dalam fungsi `filterList()`
    `renderParticipants();`
  - [`app.js:3691`](app.js#L3691) — di dalam fungsi `saveParticipantEdit()`
    `renderParticipants();`
  - [`app.js:10830`](app.js#L10830) — di dalam fungsi `clearAllData()`
    `renderParticipants();`
  - [`app.js:10853`](app.js#L10853) — cakupan global / event handler
    `renderParticipants();`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`updateRegistrationDatalists()`](#updateregistrationdatalists), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`toggleInvitedTeam()`](#toggleinvitedteam), [`openEditParticipantModal()`](#openeditparticipantmodal), [`setParticipantStatus()`](#setparticipantstatus), [`deleteParticipant()`](#deleteparticipant), [`viewRosterDetail()`](#viewrosterdetail)

<a id="findteamparticipant"></a>
#### `findTeamParticipant(teamName)`

- **Definisi:** [`app.js:7436`](app.js#L7436)
- **Deskripsi:** Helper mencari data peserta tim dengan normalisasi nama
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:7751`](app.js#L7751) — di dalam fungsi `renderMvpRosterList()`
    `const teamPart = findTeamParticipant(teamName);`
  - [`app.js:8218`](app.js#L8218) — di dalam fungsi `verifyAllMatchPlayers()`
    `const teamPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(teamName) : null;`
  - [`app.js:8241`](app.js#L8241) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamAPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamA) : null;`
  - [`app.js:8242`](app.js#L8242) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamBPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamB) : null;`

<a id="rendermvprosterlist"></a>
#### `renderMvpRosterList(teamName)`

- **Definisi:** [`app.js:7746`](app.js#L7746)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7743`](app.js#L7743) — di dalam fungsi `switchMvpTeamTab()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:7816`](app.js#L7816) — di dalam fungsi `filterMvpRosterList()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:7848`](app.js#L7848) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpRosterList(targetTeam);`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`selectMvpPlayer()`](#selectmvpplayer)

<a id="filtermvprosterlist"></a>
#### `filterMvpRosterList()`

- **Definisi:** [`app.js:7813`](app.js#L7813)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:893`](index.html#L893) — Event `oninput`
    `<input type="text" id="mvpPlayerSearchInput" placeholder="🔍 Cari nama pemain atau IGN..." style="wi`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="renderteamrostercolumn"></a>
#### `renderTeamRosterColumn(teamName, roster, count)`

- **Definisi:** [`app.js:8288`](app.js#L8288)
- **Deskripsi:** Helper untuk merender kolom roster tiap tim
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8385`](app.js#L8385) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamA, rosterA, countA)}`
  - [`app.js:8386`](app.js#L8386) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamB, rosterB, countB)}`

---

### ☁️ Sinkronisasi Google Sheets & State Storage

<a id="savestagestatelocal"></a>
#### `saveStageStateLocal()`

- **Definisi:** [`app.js:467`](app.js#L467)
- **Deskripsi:** Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM, data tie-breaker) ke localStorage.
- **Titik Pemanggilan (15 lokasi):**
  - [`app.js:933`](app.js#L933) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveStageStateLocal();`
  - [`app.js:1837`](app.js#L1837) — cakupan global / event handler
    `saveStageStateLocal();`
  - [`app.js:2516`](app.js#L2516) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveStageStateLocal();`
  - [`app.js:4066`](app.js#L4066) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveStageStateLocal();`
  - [`app.js:4099`](app.js#L4099) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:4104`](app.js#L4104) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:4119`](app.js#L4119) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:4149`](app.js#L4149) — di dalam fungsi `proceedToMLBBStage2()`
    `saveStageStateLocal();`
  - [`app.js:4250`](app.js#L4250) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveStageStateLocal();`
  - [`app.js:4296`](app.js#L4296) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveStageStateLocal();`
  - [`app.js:4645`](app.js#L4645) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveStageStateLocal();`
  - [`app.js:4975`](app.js#L4975) — di dalam fungsi `resetMLBBToStage1()`
    `saveStageStateLocal();`
  - [`app.js:5015`](app.js#L5015) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveStageStateLocal();`
  - [`app.js:5205`](app.js#L5205) — di dalam fungsi `saveTournamentStateOnly()`
    `saveStageStateLocal();`
  - [`app.js:11006`](app.js#L11006) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `saveStageStateLocal();`

<a id="resetcacheandfollowgsheet"></a>
#### `resetCacheAndFollowGSheet()`

- **Definisi:** [`app.js:1651`](app.js#L1651)
- **Deskripsi:** Reset cache lokal dan ikuti 100% data aktif dari Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:347`](index.html#L347) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetCacheFollowGSheet" style="padding: 0.45rem 0.9rem; font-`
- **Memanggil Fungsi Internal:** [`fetchParticipantsFromGoogleSheet()`](#fetchparticipantsfromgooglesheet)

<a id="saveallchangestogooglesheet"></a>
#### `saveAllChangesToGoogleSheet()`

- **Definisi:** [`app.js:1684`](app.js#L1684)
- **Deskripsi:** SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:350`](index.html#L350) — Event `onclick`
    `<button class="btn btn-primary" id="btnSaveAllChanges" style="padding: 0.45rem 0.9rem; font-size: 0.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`showToast()`](#showtoast)

<a id="synctournamentconfigtogsheet"></a>
#### `syncTournamentConfigToGSheet(options = {})`

- **Definisi:** [`app.js:1826`](app.js#L1826)
- **Deskripsi:** SINKRONISASI KONFIGURASI TURNAMEN & BAGAN KE GOOGLE SHEETS
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:4042`](app.js#L4042) — di dalam fungsi `shuffleAndGenerateTournament()`
    `syncTournamentConfigToGSheet({ showSuccessToast: false, context: 'GROUP_SHUFFLE' }).then(res => {`
  - [`app.js:4158`](app.js#L4158) — di dalam fungsi `proceedToMLBBStage2()`
    `syncTournamentConfigToGSheet({ showSuccessToast: true, context: 'STAGE_2_ENTER' }).catch(err => {`
  - [`app.js:4261`](app.js#L4261) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `syncTournamentConfigToGSheet({ showSuccessToast: false, context: 'PLAYOFF_SHUFFLE' }).then(res => {`
  - [`app.js:4302`](app.js#L4302) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `syncTournamentConfigToGSheet({ showSuccessToast: false, context: 'PLAYOFF_LOCK' }).catch(err => {`
  - [`app.js:5229`](app.js#L5229) — di dalam fungsi `saveTournamentStateOnly()`
    `const configResult = await syncTournamentConfigToGSheet({ showSuccessToast: false });`
  - [`app.js:11017`](app.js#L11017) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `syncTournamentConfigToGSheet({ showSuccessToast: !isLocked, context: 'STAGE_2_ENTER' }).catch(err =>`

<a id="synctournamentsheetstogsheet"></a>
#### `syncTournamentSheetsToGSheet()`

- **Definisi:** [`app.js:1878`](app.js#L1878)
- **Deskripsi:** SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="getlastsyncedmatches"></a>
#### `getLastSyncedMatches()`

- **Definisi:** [`app.js:5051`](app.js#L5051)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5071`](app.js#L5071) — di dalam fungsi `getUnsyncedMatches()`
    `const synced = getLastSyncedMatches();`
  - [`app.js:5185`](app.js#L5185) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const synced = getLastSyncedMatches() || {};`

<a id="setlastsyncedmatches"></a>
#### `setLastSyncedMatches(obj)`

- **Definisi:** [`app.js:5062`](app.js#L5062)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1479`](app.js#L1479) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `setLastSyncedMatches(groupMatchResults);`
  - [`app.js:5187`](app.js#L5187) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `setLastSyncedMatches(synced);`

<a id="getunsyncedmatches"></a>
#### `getUnsyncedMatches()`

- **Definisi:** [`app.js:5070`](app.js#L5070)
- **Deskripsi:** Lookup perbedaan antara cache lokal dengan data terakhir yang tersinkronisasi di Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5232`](app.js#L5232) — di dalam fungsi `saveTournamentStateOnly()`
    `const unsynced = typeof getUnsyncedMatches === 'function' ? getUnsyncedMatches() : [];`
- **Memanggil Fungsi Internal:** [`getLastSyncedMatches()`](#getlastsyncedmatches)

<a id="syncsinglematchrowtogsheet"></a>
#### `syncSingleMatchRowToGSheet(canonId)`

- **Definisi:** [`app.js:5107`](app.js#L5107)
- **Deskripsi:** Fungsi utama sinkronisasi 1 pertandingan: mengupdate HANYA 3 baris di Google Sheets (1 baris di sheet MLBB - Bagan & MVP + 2 baris tim di sheet MLBB - Klasemen & Point)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:4531`](app.js#L4531) — di dalam fungsi `setPlayoffMatchScore()`
    `syncSingleMatchRowToGSheet(matchKey).catch(e => console.warn('Sync playoff to GSheet:', e));`
  - [`app.js:4552`](app.js#L4552) — di dalam fungsi `resetPlayoffMatchScore()`
    `syncSingleMatchRowToGSheet(matchKey).catch(e => console.warn('Sync reset to GSheet:', e));`
  - [`app.js:5241`](app.js#L5241) — di dalam fungsi `saveTournamentStateOnly()`
    `await syncSingleMatchRowToGSheet(m.canonId);`
  - [`app.js:7948`](app.js#L7948) — di dalam fungsi `saveSelectedMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || 'PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffM`
  - [`app.js:7953`](app.js#L7953) — di dalam fungsi `saveSelectedMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));`
  - [`app.js:8000`](app.js#L8000) — di dalam fungsi `deleteCurrentMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || 'PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffM`
  - [`app.js:8005`](app.js#L8005) — di dalam fungsi `deleteCurrentMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`isSameTeamName()`](#issameteamname), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`getLastSyncedMatches()`](#getlastsyncedmatches), [`setLastSyncedMatches()`](#setlastsyncedmatches)

<a id="savetournamentstateonly"></a>
#### `saveTournamentStateOnly(isSilent = false)`

- **Definisi:** [`app.js:5197`](app.js#L5197)
- **Deskripsi:** Handler tombol Simpan: Sinkronkan seluruh konfigurasi turnamen, bagan playoff, dan skor ke GSheet
- **Titik Pemanggilan (18 lokasi):**
  - [`index.html:491`](index.html#L491) — Event `onclick`
    `<button id="btnSaveBracketGSheet" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`index.html:596`](index.html#L596) — Event `onclick`
    `<button id="btnSaveMCGGPointsGSheet" class="btn btn-primary" style="display: none; font-size: 0.85re`
  - [`app.js:258`](app.js#L258) — di dalam fungsi `toggleInvitedTeam()`
    `saveTournamentStateOnly(true);`
  - [`app.js:941`](app.js#L941) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2480`](app.js#L2480) — di dalam fungsi `toggleRegistrationStatus()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2523`](app.js#L2523) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4039`](app.js#L4039) — di dalam fungsi `shuffleAndGenerateTournament()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4069`](app.js#L4069) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4123`](app.js#L4123) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4155`](app.js#L4155) — di dalam fungsi `proceedToMLBBStage2()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4256`](app.js#L4256) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4301`](app.js#L4301) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4549`](app.js#L4549) — di dalam fungsi `resetPlayoffMatchScore()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4979`](app.js#L4979) — di dalam fungsi `resetMLBBToStage1()`
    `saveTournamentStateOnly(true);`
  - [`app.js:5017`](app.js#L5017) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveTournamentStateOnly(true);`
  - [`app.js:9981`](app.js#L9981) — di dalam fungsi `toggleLockMatchDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:10040`](app.js#L10040) — di dalam fungsi `resetLobbyDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:11012`](app.js#L11012) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
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

- **Definisi:** [`app.js:743`](app.js#L743)
- **Deskripsi:** Client-side image compressor: compresses smartphone photos using HTML5 Canvas (<= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:803`](app.js#L803) — di dalam fungsi `compressImageFile()`
    `return compressImage(file, maxWidth, maxWidth, quality);`
  - [`app.js:3602`](app.js#L3602) — di dalam fungsi `handleEditLogoUpload()`
    `const compressed = await compressImage(file, 400, 400, 0.85);`
  - [`app.js:3619`](app.js#L3619) — di dalam fungsi `handleEditRosterIdCardUpload()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`

<a id="compressimagefile"></a>
#### `compressImageFile(file, maxWidth = 1200, quality = 0.75)`

- **Definisi:** [`app.js:802`](app.js#L802)
- **Deskripsi:** Client-side image compression helper (Canvas <= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:2106`](app.js#L2106) — di dalam fungsi `handleLogoPreview()`
    `uploadedLogoBase64 = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:2121`](app.js#L2121) — di dalam fungsi `handleSingleIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:2143`](app.js#L2143) — di dalam fungsi `handlePlayerIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="openglossarymodal"></a>
#### `openGlossaryModal()`

- **Definisi:** [`app.js:842`](app.js#L842)
- **Deskripsi:** Modal Glosarium Istilah Turnamen
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:36`](index.html#L36) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.75rem; bo`

<a id="closeglossarymodal"></a>
#### `closeGlossaryModal()`

- **Definisi:** [`app.js:847`](app.js#L847)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:805`](index.html#L805) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeGlossaryModal()">✕ Tut`
  - [`index.html:834`](index.html#L834) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeGlossaryModal()">Tutup</button>`

<a id="openresetbaganmodal"></a>
#### `openResetBaganModal()`

- **Definisi:** [`app.js:853`](app.js#L853)
- **Deskripsi:** Modal Reset Bagan dengan Verifikasi Password/PIN
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4998`](app.js#L4998) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `openResetBaganModal();`

<a id="closeresetbaganmodal"></a>
#### `closeResetBaganModal()`

- **Definisi:** [`app.js:862`](app.js#L862)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:849`](index.html#L849) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeResetBaganModal()">Batal</button>`
  - [`app.js:918`](app.js#L918) — di dalam fungsi `confirmResetBaganWithPin()`
    `closeResetBaganModal();`

<a id="getidcardmap"></a>
#### `getIdCardMap()`

- **Definisi:** [`app.js:1148`](app.js#L1148)
- **Deskripsi:** Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1189`](app.js#L1189) — di dalam fungsi `saveIdCardToMap()`
    `let map = getIdCardMap();`
  - [`app.js:1206`](app.js#L1206) — di dalam fungsi `findIdCardByEmpIdOrName()`
    `const map = getIdCardMap();`

<a id="saveidcardtomap"></a>
#### `saveIdCardToMap(empId, name, cardUrl)`

- **Definisi:** [`app.js:1187`](app.js#L1187)
- **Deskripsi:** Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasarkan NIP/Nama.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1270`](app.js#L1270) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(p.empId, p.name, resolvedCard);`
  - [`app.js:1281`](app.js#L1281) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(m.empId, m.name, resolvedCard);`
  - [`app.js:1361`](app.js#L1361) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sheetItem.empId, sheetItem.name, rootIdCard);`
  - [`app.js:1386`](app.js#L1386) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sM.empId, sM.name, mIdCard);`
  - [`app.js:3671`](app.js#L3671) — di dalam fungsi `saveParticipantEdit()`
    `saveIdCardToMap(m.empId, m.name, m.idCard);`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="findidcardbyempidorname"></a>
#### `findIdCardByEmpIdOrName(empId, name)`

- **Definisi:** [`app.js:1205`](app.js#L1205)
- **Deskripsi:** Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama peserta.
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:1267`](app.js#L1267) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name) || (p.roster && p.roster[0`
  - [`app.js:1278`](app.js#L1278) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' `
  - [`app.js:1359`](app.js#L1359) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const rootIdCard = sheetItem.idCard || (localItem ? localItem.idCard : '') || findIdCardByEmpIdOrNam`
  - [`app.js:1381`](app.js#L1381) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `let mIdCard = sM.idCard || (lM ? lM.idCard : '') || findIdCardByEmpIdOrName(sM.empId, sM.name) || (d`
  - [`app.js:3184`](app.js#L3184) — di dalam fungsi `handleRegister()`
    `mcggIdCard = existingParticipant.idCard || (existingParticipant.roster && existingParticipant.roster`
  - [`app.js:3562`](app.js#L3562) — di dalam fungsi `openEditParticipantModal()`
    `editRosterIdCards[idx] = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MC`
  - [`app.js:3769`](app.js#L3769) — di dalam fungsi `viewRosterDetail()`
    `const cardSrc = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (team.category === 'MCGG' ? `
  - [`app.js:3849`](app.js#L3849) — di dalam fungsi `renderParticipants()`
    `const card = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idC`
  - [`app.js:8321`](app.js#L8321) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const cardSrc = m.idCard || (typeof findIdCardByEmpIdOrName === 'function' ? findIdCardByEmpIdOrName`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="getlogomap"></a>
#### `getLogoMap()`

- **Definisi:** [`app.js:1223`](app.js#L1223)
- **Deskripsi:** Pemetaan Logo sesuai Nama Tim (MLBB)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1239`](app.js#L1239) — di dalam fungsi `saveLogoToMap()`
    `let map = getLogoMap();`
  - [`app.js:1248`](app.js#L1248) — di dalam fungsi `findLogoByTeamName()`
    `const map = getLogoMap();`

<a id="savelogotomap"></a>
#### `saveLogoToMap(teamName, logoUrl)`

- **Definisi:** [`app.js:1237`](app.js#L1237)
- **Deskripsi:** Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasarkan nama tim.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1262`](app.js#L1262) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveLogoToMap(p.name, resolvedLogo);`
  - [`app.js:1355`](app.js#L1355) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveLogoToMap(sheetItem.name, teamLogo);`
  - [`app.js:3648`](app.js#L3648) — di dalam fungsi `saveParticipantEdit()`
    `saveLogoToMap(p.name, currentEditLogoBase64);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="findlogobyteamname"></a>
#### `findLogoByTeamName(teamName)`

- **Definisi:** [`app.js:1246`](app.js#L1246)
- **Deskripsi:** Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peserta.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:1259`](app.js#L1259) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedLogo = p.logo || findLogoByTeamName(p.name);`
  - [`app.js:1353`](app.js#L1353) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const teamLogo = sheetItem.logo || (localItem ? localItem.logo : '') || findLogoByTeamName(sheetItem`
  - [`app.js:2910`](app.js#L2910) — di dalam fungsi `handleRegister()`
    `if (existingParticipant && (existingParticipant.logo || findLogoByTeamName(existingParticipant.name)`
  - [`app.js:2911`](app.js#L2911) — di dalam fungsi `handleRegister()`
    `logoData = existingParticipant.logo || findLogoByTeamName(existingParticipant.name);`
  - [`app.js:3546`](app.js#L3546) — di dalam fungsi `openEditParticipantModal()`
    `currentEditLogoBase64 = p.logo || findLogoByTeamName(p.name) || '';`
  - [`app.js:3749`](app.js#L3749) — di dalam fungsi `viewRosterDetail()`
    `const teamLogoSrc = team.logo || findLogoByTeamName(team.name);`
  - [`app.js:3863`](app.js#L3863) — di dalam fungsi `renderParticipants()`
    `const teamLogoSrc = p.logo || findLogoByTeamName(p.name);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="handlelogopreview"></a>
#### `handleLogoPreview(event)`

- **Definisi:** [`app.js:2101`](app.js#L2101)
- **Deskripsi:** Handle Logo Upload and Live Preview
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:137`](index.html#L137) — Event `onchange`
    `<input type="file" id="teamLogoInput" accept="image/*" onchange="handleLogoPreview(event)" style="pa`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="handlesingleidcardpreview"></a>
#### `handleSingleIdCardPreview(event, target)`

- **Definisi:** [`app.js:2116`](app.js#L2116)
- **Deskripsi:** Handle Individual ID Card Upload for Officials and MCGG
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:183`](index.html#L183) — Event `onchange`
    `<input type="file" id="off1_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
  - [`index.html:227`](index.html#L227) — Event `onchange`
    `<input type="file" id="off2_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
  - [`index.html:296`](index.html#L296) — Event `onchange`
    `<input type="file" id="mcgg_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="handleplayeridcardpreview"></a>
#### `handlePlayerIdCardPreview(event, playerIdx)`

- **Definisi:** [`app.js:2138`](app.js#L2138)
- **Deskripsi:** Handle Individual ID Card Upload for Each of the 8 Players
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2199`](app.js#L2199) — di dalam fungsi `renderPlayersFormInputs()`
    `<input type="file" id="p${i}_idcard_file" accept="image/*" onchange="handlePlayerIdCardPreview(event`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="openidcardlightbox"></a>
#### `openIdCardLightbox(imgSrc, title, driveUrl = '')`

- **Definisi:** [`app.js:2737`](app.js#L2737)
- **Deskripsi:** Lightbox for Viewing Full ID Card
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3580`](app.js#L3580) — di dalam fungsi `openEditParticipantModal()`
    `<div class="idcard-thumb-sm" id="edit_m_${idx}_thumb" onclick="if(editRosterIdCards[${idx}]) openIdC`
  - [`app.js:3773`](app.js#L3773) — di dalam fungsi `viewRosterDetail()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--yokke-`
  - [`app.js:8332`](app.js#L8332) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<div style="width:48px; height:48px; flex-shrink:0; cursor:pointer; border-radius:6px; overflow:hidd`
- **Memanggil Fungsi Internal:** [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="closeidcardlightbox"></a>
#### `closeIdCardLightbox()`

- **Definisi:** [`app.js:2778`](app.js#L2778)
- **Deskripsi:** Menutup modal pop-up lightbox preview ID Card pegawai.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:768`](index.html#L768) — Event `onclick`
    `<div id="idCardLightboxModal" class="modal-overlay" style="z-index: 2500;" onclick="if(event.target `
  - [`index.html:772`](index.html#L772) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeIdCardLightbox()">✕ Tu`

<a id="openeditparticipantmodal"></a>
#### `openEditParticipantModal(id)`

- **Definisi:** [`app.js:3495`](app.js#L3495)
- **Deskripsi:** ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3906`](app.js#L3906) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-edit-sm" title="Edit Data & Upload ID Card" onclick="openEditParticipantModal`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox), [`handleEditRosterIdCardUpload()`](#handleeditrosteridcardupload)

<a id="closeeditparticipantmodal"></a>
#### `closeEditParticipantModal()`

- **Definisi:** [`app.js:3593`](app.js#L3593)
- **Deskripsi:** Menutup modal dialog edit peserta.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:655`](index.html#L655) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeEditParticipantModal(`
  - [`index.html:727`](index.html#L727) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeEditParticipantModal()">Batal</button>`
  - [`app.js:3740`](app.js#L3740) — di dalam fungsi `saveParticipantEdit()`
    `closeEditParticipantModal();`

<a id="handleeditlogoupload"></a>
#### `handleEditLogoUpload(event)`

- **Definisi:** [`app.js:3598`](app.js#L3598)
- **Deskripsi:** Handle logo upload in Admin Edit modal
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:687`](index.html#L687) — Event `onchange`
    `<input type="file" id="editTeamLogoInput" accept="image/*" onchange="handleEditLogoUpload(event)" st`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleeditrosteridcardupload"></a>
#### `handleEditRosterIdCardUpload(event, idx)`

- **Definisi:** [`app.js:3614`](app.js#L3614)
- **Deskripsi:** Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedit pada modal admin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3583`](app.js#L3583) — di dalam fungsi `openEditParticipantModal()`
    `<input type="file" accept="image/*" style="font-size:0.7rem; width:120px;" onchange="handleEditRoste`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="closedetailmodal"></a>
#### `closeDetailModal()`

- **Definisi:** [`app.js:3804`](app.js#L3804)
- **Deskripsi:** Menutup modal dialog rincian roster tim dan galeri ID Card.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:744`](index.html#L744) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeDetailModal()">✕ Tutu`

<a id="opentestdrawmodal"></a>
#### `openTestDrawModal()`

- **Definisi:** [`app.js:4818`](app.js#L4818)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:489`](index.html#L489) — Event `onclick`
    `<button id="btnTestPlayoffStandings" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5`
  - [`app.js:4638`](app.js#L4638) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `openTestDrawModal();`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast)

<a id="closetestdrawmodal"></a>
#### `closeTestDrawModal()`

- **Definisi:** [`app.js:4830`](app.js#L4830)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1063`](index.html#L1063) — Event `onclick`
    `<div id="testDrawModal" class="modal-overlay" onclick="if(event.target === this) closeTestDrawModal(`
  - [`index.html:1078`](index.html#L1078) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`app.js:4786`](app.js#L4786) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;"`

<a id="initandshowmvpmodal"></a>
#### `initAndShowMvpModal()`

- **Definisi:** [`app.js:7573`](app.js#L7573)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7521`](app.js#L7521) — di dalam fungsi `openMLBBGroupMvpModal()`
    `initAndShowMvpModal();`
  - [`app.js:7570`](app.js#L7570) — di dalam fungsi `openMLBBPlayoffMvpModal()`
    `initAndShowMvpModal();`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="openmatchplayerverifymodal"></a>
#### `openMatchPlayerVerifyModal(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:8144`](app.js#L8144)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8798`](app.js#L8798) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 7px; color:var(-`
  - [`app.js:11810`](app.js#L11810) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent)

<a id="closematchplayerverifymodal"></a>
#### `closeMatchPlayerVerifyModal()`

- **Definisi:** [`app.js:8182`](app.js#L8182)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:954`](index.html#L954) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:970`](index.html#L970) — Event `onclick`
    `<button type="button" class="btn btn-primary" onclick="closeMatchPlayerVerifyModal()">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermatchplayerverifymodalcontent"></a>
#### `renderMatchPlayerVerifyModalContent()`

- **Definisi:** [`app.js:8232`](app.js#L8232)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8177`](app.js#L8177) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:8203`](app.js#L8203) — di dalam fungsi `toggleMatchPlayerVerify()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:8226`](app.js#L8226) — di dalam fungsi `verifyAllMatchPlayers()`
    `renderMatchPlayerVerifyModalContent();`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`verifyAllMatchPlayers()`](#verifyallmatchplayers), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`openIdCardLightbox()`](#openidcardlightbox), [`toggleMatchPlayerVerify()`](#togglematchplayerverify), [`renderTeamRosterColumn()`](#renderteamrostercolumn)

---

### 🔧 Helper & UI Utility

<a id="showtoast"></a>
#### `showToast(msg, type = 'info', duration = 4000)`

- **Definisi:** [`app.js:809`](app.js#L809)
- **Deskripsi:** TOAST NOTIFICATIONS (CYBERPUNK DARK)
- **Titik Pemanggilan (60 lokasi):**
  - [`app.js:914`](app.js#L914) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('PIN Panitia salah! Tindakan reset dibatalkan.', 'error');`
  - [`app.js:942`](app.js#L942) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('✅ Seluruh pembagian grup, jadwal, skor match, dan bagan playoff MLBB berhasil direset tot`
  - [`app.js:957`](app.js#L957) — di dalam fungsi `bypassLoaderWithCache()`
    `showToast('Memuat turnamen menggunakan data lokal / cache offline.', 'info', 4000);`
  - [`app.js:1549`](app.js#L1549) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('Koneksi ke Google Sheets lambat. Menggunakan data cache lokal.', 'info');`
  - [`app.js:1553`](app.js#L1553) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('⚠️ Gagal mengambil data dari Google Sheets.', 'error');`
  - [`app.js:1744`](app.js#L1744) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('Beralih ke sinkronisasi serial bertahap...', 'info', 3000);`
  - [`app.js:1811`](app.js#L1811) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('✅ Seluruh perubahan data peserta, status, bagan, dan klasemen turnamen berhasil disimpan `
  - [`app.js:1814`](app.js#L1814) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('⚠️ Sebagian perubahan berhasil disinkronkan, data lokal Anda tetap aman.', 'warning', 500`
  - [`app.js:1833`](app.js#L1833) — cakupan global / event handler
    `showToast('Menyinkronkan data turnamen ke Google Sheets... ⏳', 'info', 2500);`
  - [`app.js:1862`](app.js#L1862) — cakupan global / event handler
    `showToast('✅ Bagan & data turnamen berhasil disinkronkan ke Google Sheets!', 'success', 4000);`
  - [`app.js:2027`](app.js#L2027) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('✅ Peraturan MLBB & MCGG berhasil diperbarui dari Google Docs!', 'success');`
  - [`app.js:2037`](app.js#L2037) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('⚠️ Gagal terhubung ke Google Docs, menggunakan cache dokumen lokal.', 'warning');`
  - [`app.js:2346`](app.js#L2346) — di dalam fungsi `verifyAdminPin()`
    `showToast('✅ Berhasil login sebagai Panitia Turnamen!', 'success');`
  - [`app.js:2354`](app.js#L2354) — di dalam fungsi `verifyAdminPin()`
    `showToast('❌ PIN Panitia salah! Akses ditolak.', 'error');`
  - [`app.js:2369`](app.js#L2369) — di dalam fungsi `verifyAdminPin()`
    `showToast('Gagal menghubungi server Google Apps Script.', 'error');`
  - [`app.js:2393`](app.js#L2393) — di dalam fungsi `logoutAdmin()`
    `showToast('Telah keluar dari mode Panitia.', 'info');`
  - [`app.js:3321`](app.js#L3321) — di dalam fungsi `handleRegister()`
    `showToast('❌ Pendaftaran ditolak: ${result.message || result.error || 'Validasi server gagal.'}', 'e`
  - [`app.js:3328`](app.js#L3328) — di dalam fungsi `handleRegister()`
    `showToast("⚠️ Gagal terhubung ke Google Sheets. Formulir Anda tetap tersimpan di draft lokal. Silaka`
  - [`app.js:4040`](app.js#L4040) — di dalam fungsi `shuffleAndGenerateTournament()`
    `showToast('🎲 Undian tim dan bagan berhasil diacak dan diperbarui!', 'success');`
  - [`app.js:4044`](app.js#L4044) — di dalam fungsi `shuffleAndGenerateTournament()`
    `showToast('✅ Susunan grup berhasil disinkronkan ke Google Sheets!', 'success', 3000);`
  - [`app.js:4220`](app.js#L4220) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan undian bagan playoff.', 'error');`
  - [`app.js:4224`](app.js#L4224) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');`
  - [`app.js:4228`](app.js#L4228) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('🔒 Bagan playoff sedang dikunci. Buka kunci undian terlebih dahulu untuk mengacak ulang.'`
  - [`app.js:4257`](app.js#L4257) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('🎲 Undian bagan playoff berhasil diacak dan diperbarui!', 'success');`
  - [`app.js:4263`](app.js#L4263) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('✅ Bagan playoff berhasil disinkronkan & diperbarui di Google Sheets!', 'success', 4000);`
  - [`app.js:4266`](app.js#L4266) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('⚠️ Bagan playoff tersimpan di browser. Gagal sinkron ke GSheet: ' + (res?.error || 'Konek`
  - [`app.js:4275`](app.js#L4275) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mengunci undian playoff.', 'error');`
  - [`app.js:4279`](app.js#L4279) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');`
  - [`app.js:4288`](app.js#L4288) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('🔒 Undian Playoff berhasil dikunci! Susunan bagan telah diamankan.', 'success');`
  - [`app.js:4294`](app.js#L4294) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('🔓 Kunci undian Playoff dibuka. Bagan dapat diacak kembali.', 'info');`
  - [`app.js:4316`](app.js#L4316) — di dalam fungsi `openPlayoffScoreModal()`
    `showToast('Data pertandingan playoff tidak ditemukan.', 'error');`
  - [`app.js:4479`](app.js#L4479) — di dalam fungsi `savePlayoffModalScore()`
    `showToast('⚠️ Pertandingan Playoff tidak boleh berakhir imbang! Salah satu tim harus unggul skor.', `
  - [`app.js:4498`](app.js#L4498) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mencatat skor playoff.', 'error');`
  - [`app.js:4503`](app.js#L4503) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Pertandingan playoff tidak ditemukan.', 'error');`
  - [`app.js:4507`](app.js#L4507) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('⚠️ Pertandingan ini belum dapat diinput skor karena kedua tim belum ditentukan dari babak`
  - [`app.js:4514`](app.js#L4514) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Skor tidak valid. Masukkan angka non-negatif.', 'error');`
  - [`app.js:4518`](app.js#L4518) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Pertandingan playoff tidak boleh imbang.', 'warning');`
  - [`app.js:4533`](app.js#L4533) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('✅ Skor berhasil dicatat: ${escapeHtml(match.teamA)} (${scoreA}) vs (${scoreB}) ${escapeHt`
  - [`app.js:4553`](app.js#L4553) — di dalam fungsi `resetPlayoffMatchScore()`
    `showToast('Skor pertandingan ${match.matchLabel || ''} telah direset.', 'info');`
  - [`app.js:4560`](app.js#L4560) — di dalam fungsi `onPlayoffTeamClicked()`
    `showToast('⚠️ Pertandingan ini belum dapat diisi skor karena tim lawan belum siap tanding.', 'warnin`
  - [`app.js:4627`](app.js#L4627) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan simulasi pengundian playoff.', 'error')`
  - [`app.js:4633`](app.js#L4633) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('⚠️ Belum ada data grup MLBB. Pastikan pembagian grup sudah dibuat.', 'warning');`
  - [`app.js:4815`](app.js#L4815) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('🏆 Bagan Playoff berhasil diundi dan ditampilkan!', 'success');`
  - [`app.js:4820`](app.js#L4820) — di dalam fungsi `openTestDrawModal()`
    `showToast('Akses ditolak: Hanya panitia yang dapat membuka pusat uji coba undian.', 'error');`
  - [`app.js:4841`](app.js#L4841) — di dalam fungsi `openTestDrawInNewWindow()`
    `showToast('⚠️ Silakan jalankan simulasi undian terlebih dahulu.', 'warning');`
  - [`app.js:4899`](app.js#L4899) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('⚠️ Belum ada tim MLBB yang terverifikasi.', 'warning');`
  - [`app.js:4967`](app.js#L4967) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('🎲 Simulasi pembagian 8 grup berhasil diacak!', 'info');`
  - [`app.js:4984`](app.js#L4984) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mereset pembagian grup & bagan turnamen MLBB.', '`
  - [`app.js:4988`](app.js#L4988) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('🔒 Pembagian grup MLBB sedang dikunci (Lock TM). Harap buka kunci grup terlebih dahulu.',`
  - [`app.js:4993`](app.js#L4993) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('ℹ️ Pembagian grup dan bagan MLBB saat ini sudah dalam keadaan kosong/belum diundi.', 'inf`
  - [`app.js:5251`](app.js#L5251) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('✅ Seluruh bagan turnamen (Grup & Playoff) berhasil disimpan & diperbarui di Google Sheets`
  - [`app.js:5255`](app.js#L5255) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('⚠️ Gagal menyinkronkan bagan ke Google Sheets: ' + (configResult.error || 'Periksa koneks`
  - [`app.js:5261`](app.js#L5261) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('⚠️ Gagal menyimpan ke Google Sheets: ' + err.message, 'error', 5000);`
  - [`app.js:7949`](app.js#L7949) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Playoff (${ctx.format || 'BO3'}) & disinkro`
  - [`app.js:7954`](app.js#L7954) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Match (${ctx.format || 'BO3'}) & disinkronk`
  - [`app.js:8001`](app.js#L8001) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP Playoff telah dihapus & disinkronkan ke GSheet.', 'info');`
  - [`app.js:8006`](app.js#L8006) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP match telah dihapus & disinkronkan ke GSheet (3 baris).', 'info');`
  - [`app.js:8897`](app.js#L8897) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700; ${i`
  - [`app.js:11014`](app.js#L11014) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `showToast(isLocked ? '🏆 Masuk ke Babak Playoff (Undian Terkunci).' : '🎲 Berhasil masuk ke Babak Pl`
  - [`app.js:11314`](app.js#L11314) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-gold" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-wei`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`app.js:1133`](app.js#L1133)
- **Deskripsi:** Helper to format Google Drive image URLs into viewable thumbnail image URLs
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:2746`](app.js#L2746) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3554`](app.js#L3554) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3581`](app.js#L3581) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3752`](app.js#L3752) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3774`](app.js#L3774) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3864`](app.js#L3864) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:8322`](app.js#L8322) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(car`
  - [`functional_tests.js:94`](functional_tests.js#L94) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

<a id="switchtab"></a>
#### `switchTab(tabId)`

- **Definisi:** [`app.js:2719`](app.js#L2719)
- **Deskripsi:** Navigation Tabs
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:61`](index.html#L61) — Event `onclick`
    `<button class="nav-btn active" onclick="switchTab('daftar')">📝 Pendaftaran</button>`
  - [`index.html:62`](index.html#L62) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('peserta')">👥 Daftar Peserta & Verifikasi</button>`
  - [`index.html:63`](index.html#L63) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('rules')">📜 Peraturan (Rules)</button>`
  - [`index.html:64`](index.html#L64) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('bagan-mlbb')">⚔️ Bagan MLBB</button>`
  - [`index.html:65`](index.html#L65) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('points-mcgg')">♟️ Poin & Klasemen MCGG</button>`
- **Memanggil Fungsi Internal:** [`setMLBBViewMode()`](#setmlbbviewmode), [`setMCGGViewMode()`](#setmcggviewmode), [`renderRules()`](#renderrules), [`fetchRulesFromGoogleDoc()`](#fetchrulesfromgoogledoc)

<a id="escapehtml"></a>
#### `escapeHtml(str)`

- **Definisi:** [`app.js:2783`](app.js#L2783)
- **Deskripsi:** Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dalam HTML DOM.
- **Titik Pemanggilan (89 lokasi):**
  - [`app.js:828`](app.js#L828) — di dalam fungsi `showToast()`
    `<span class="toast-msg">${escapeHtml(msg).replace(/\n/g, '<br>')}</span>`
  - [`app.js:1946`](app.js#L1946) — di dalam fungsi `formatRuleLine()`
    `return '<h4 style="color:var(--yokke-gold); margin:1.35rem 0 0.6rem; font-size:1.05rem; border-botto`
  - [`app.js:1951`](app.js#L1951) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-green); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bo`
  - [`app.js:1956`](app.js#L1956) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-red); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bold`
  - [`app.js:1962`](app.js#L1962) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 2rem; margin-bottom: 0.35rem; line-height: 1.55; display: flex; gap`
  - [`app.js:1968`](app.js#L1968) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 1rem; margin-bottom: 0.4rem; line-height: 1.6; display: flex; gap: `
  - [`app.js:1973`](app.js#L1973) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65; font-weight:500;">${escapeHtml(trimmed)}</`
  - [`app.js:1978`](app.js#L1978) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-left:1.5rem; margin-bottom:0.35rem; line-height:1.55; color:var(--text-mute`
  - [`app.js:1981`](app.js#L1981) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65;">${escapeHtml(trimmed)}</p>';`
  - [`app.js:2831`](app.js#L2831) — di dalam fungsi `handleTeamNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Nama Tim Sudah Terdaftar:</strong> Tim "<strong>${escapeHtml(existi`
  - [`app.js:2864`](app.js#L2864) — di dalam fungsi `handleMcggNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Peserta Sudah Terdaftar:</strong> Pemain "<strong>${escapeHtml(exis`
  - [`app.js:4354`](app.js#L4354) — di dalam fungsi `openPlayoffScoreModal()`
    `titleEl.innerHTML = '<span>⚔️</span> <span>Input Skor: ${escapeHtml(match.matchLabel || match.phaseN`
  - [`app.js:4466`](app.js#L4466) — di dalam fungsi `updatePlayoffModalWinnerPreview()`
    `banner.innerHTML = '🏆 <strong>Pemenang:</strong> ${escapeHtml(tA)} (${scoreA} - ${scoreB}) melaju k`
  - [`app.js:4471`](app.js#L4471) — di dalam fungsi `updatePlayoffModalWinnerPreview()`
    `banner.innerHTML = '🏆 <strong>Pemenang:</strong> ${escapeHtml(tB)} (${scoreB} - ${scoreA}) melaju k`
  - [`app.js:4533`](app.js#L4533) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('✅ Skor berhasil dicatat: ${escapeHtml(match.teamA)} (${scoreA}) vs (${scoreB}) ${escapeHt`
  - [`app.js:4595`](app.js#L4595) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `${escapeHtml(m.teamA || '-')}`
  - [`app.js:4603`](app.js#L4603) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `${escapeHtml(m.teamB || '-')}`
  - [`app.js:4698`](app.js#L4698) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🏠 ${escapeHtml(mUB.teamA)}</span>`
  - [`app.js:4699`](app.js#L4699) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoA.group || '')} (Juara 1)<`
  - [`app.js:4703`](app.js#L4703) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#cbd5e1;">⚔️ ${escapeHtml(mUB.teamB)}</span>`
  - [`app.js:4704`](app.js#L4704) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-cyan);">${escapeHtml(infoB.group || '')} (Juara 2)<`
  - [`app.js:4724`](app.js#L4724) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🎯 ${escapeHtml(mLB.teamB)}</span>`
  - [`app.js:4725`](app.js#L4725) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoC.group || '')} (Juara 3)<`
  - [`app.js:4732`](app.js#L4732) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `Pemenang Upper ➔ UB QF | Gugur ➔ LB R1 vs ${escapeHtml(mLB.teamB)}`
  - [`app.js:4748`](app.js#L4748) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong>${escapeHtml(m.teamA)}</strong> (${infoA.group}) vs <strong>${escapeHtml(m.teamB)}</strong> `
  - [`app.js:4764`](app.js#L4764) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong style="color:var(--yokke-cyan);">${gName}:</strong> [1] ${escapeHtml(j1)} | [2] ${escapeHtml`
  - [`app.js:4946`](app.js#L4946) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<span style="font-weight:600;">${escapeHtml(tName)}</span>`
  - [`app.js:4948`](app.js#L4948) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `${dept ? '<span style="font-size:0.68rem; color:var(--text-muted); display:block;">🏢 ${escapeHtml(d`
  - [`app.js:6599`](app.js#L6599) — di dalam fungsi `renderGroupStageUI()`
    `<span>🛡️ ${escapeHtml(gName)}</span>`
  - [`app.js:6638`](app.js#L6638) — di dalam fungsi `renderGroupStageUI()`
    `<span>${escapeHtml(t.name)}</span>`
  - [`app.js:6681`](app.js#L6681) — di dalam fungsi `renderGroupStageUI()`
    `⚠️ TIE-BREAKER MATCH DIPERLUKAN (${escapeHtml(tb.group)})`
  - [`app.js:6684`](app.js#L6684) — di dalam fungsi `renderGroupStageUI()`
    `Peringkat 2 & 3 grup <strong>${escapeHtml(tb.group)}</strong> memiliki poin sama (<strong>${escapeHt`
  - [`app.js:6691`](app.js#L6691) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:6692`](app.js#L6692) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:7594`](app.js#L7594) — di dalam fungsi `initAndShowMvpModal()`
    `tabA.innerHTML = '${escapeHtml(ctx.teamA)} ${isWinA ? '🏆' : ''}';`
  - [`app.js:7595`](app.js#L7595) — di dalam fungsi `initAndShowMvpModal()`
    `tabB.innerHTML = '${escapeHtml(ctx.teamB)} ${isWinB ? '🏆' : ''}';`
  - [`app.js:7761`](app.js#L7761) — di dalam fungsi `renderMvpRosterList()`
    `Tidak ada data roster terdaftar untuk tim ${escapeHtml(teamName)}. Anda dapat mengetik manual nama p`
  - [`app.js:7794`](app.js#L7794) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(ign || realName)}`
  - [`app.js:7797`](app.js#L7797) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(realName)}`
  - [`app.js:7800`](app.js#L7800) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(role)}`
  - [`app.js:7807`](app.js#L7807) — di dalam fungsi `renderMvpRosterList()`
    `html = '<div style="grid-column:1/-1; padding:0.75rem; text-align:center; color:var(--text-muted); f`
  - [`app.js:8106`](app.js#L8106) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = g.hero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(g.hero)})</spa`
  - [`app.js:8107`](app.js#L8107) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = g.team ? ' <span style="color:var(--yokke-cyan);font-size:0.65rem;font-weight:600;">`
  - [`app.js:8108`](app.js#L8108) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `return '<span class="badge" style="background:rgba(255,183,3,0.12);color:var(--yokke-gold);border:1p`
  - [`app.js:8114`](app.js#L8114) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = m.mvpHero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(m.mvpHero)}`
  - [`app.js:8115`](app.js#L8115) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = m.mvpTeam ? '<span style="font-size:0.68rem;color:var(--yokke-cyan);margin-left:auto`
  - [`app.js:8118`](app.js#L8118) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `<span>⭐ MVP: <strong style="color:#fff;">${escapeHtml(m.mvpPlayer)}</strong>${heroTag}</span>`
  - [`app.js:8268`](app.js#L8268) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamA)}: <strong>${countA}/${rosterA.length}</strong> Terverifikasi ${countA >= 5 ?`
  - [`app.js:8271`](app.js#L8271) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamB)}: <strong>${countB}/${rosterB.length}</strong> Terverifikasi ${countB >= 5 ?`
  - [`app.js:8276`](app.js#L8276) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8277`](app.js#L8277) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamA)}`
  - [`app.js:8279`](app.js#L8279) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8280`](app.js#L8280) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamB)}`
  - [`app.js:8294`](app.js#L8294) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<span>⚔️</span> <span>${escapeHtml(teamName)}</span>`
  - [`app.js:8344`](app.js#L8344) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.nickname || m.name || '-')}`
  - [`app.js:8356`](app.js#L8356) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.name || '-')} • <code style="font-size:0.7rem;">NIP: ${escapeHtml(nipLabel)}</code>`
  - [`app.js:8359`](app.js#L8359) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `ID Game: <strong style="color:#fff;">${escapeHtml(m.gameId || '-')}</strong>`
  - [`app.js:8718`](app.js#L8718) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>🛡️</span> <span>Jadwal ${escapeHtml(gName)} • ${dayLabel}</span>`
  - [`app.js:8732`](app.js#L8732) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>☕</span> <span><strong>Tim Istirahat Hari ${mlbbActiveDayFilter} (${MLBB_SCHEDULE_DATES[mlbbAc`
  - [`app.js:8739`](app.js#L8739) — di dalam fungsi `renderGroupFixturesUI()`
    `html += '<p style="color:var(--text-muted);font-size:0.85rem;padding:0.4rem 0;">Tidak ada pertanding`
  - [`app.js:8781`](app.js#L8781) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:8788`](app.js#L8788) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamB)}`
  - [`app.js:9783`](app.js#L9783) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; over`
  - [`app.js:9784`](app.js#L9784) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `🎮 ${escapeHtml(item.playerNick)}`
  - [`app.js:9786`](app.js#L9786) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text`
  - [`app.js:9787`](app.js#L9787) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `👤 ${escapeHtml(item.playerName)}`
  - [`app.js:10497`](app.js#L10497) — di dalam fungsi `renderLobbyRowsHtml()`
    `<span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? escapeHtm`
  - [`app.js:10500`](app.js#L10500) — di dalam fungsi `renderLobbyRowsHtml()`
    `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? '<span>👤 ${escapeHtml(p.name)}</spa`
  - [`app.js:10501`](app.js#L10501) — di dalam fungsi `renderLobbyRowsHtml()`
    `${p.gameId && p.gameId !== '-' ? '${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' `
  - [`app.js:11087`](app.js#L11087) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `${escapeHtml(m.teamA || '-')}`
  - [`app.js:11095`](app.js#L11095) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `${escapeHtml(m.teamB || '-')}`
  - [`app.js:11646`](app.js#L11646) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<span>🛡️</span> <span>Klasemen & Pertandingan: ${escapeHtml(gName)}</span>`
  - [`app.js:11664`](app.js#L11664) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0;font-size:0.95rem;color:var(--yokke-gold);">📊 Klasemen ${isGroupAllDone ? 'Akhi`
  - [`app.js:11714`](app.js#L11714) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `) : '<span style="color:var(--text-muted);font-style:italic;font-size:0.75rem;" title="Status kelolo`
  - [`app.js:11719`](app.js#L11719) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<td style="font-weight:700;color:#fff;">${escapeHtml(t.name)}</td>`
  - [`app.js:11740`](app.js#L11740) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3`
  - [`app.js:11779`](app.js#L11779) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:11790`](app.js#L11790) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`app.js:11793`](app.js#L11793) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:11794`](app.js#L11794) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`app.js:11795`](app.js#L11795) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
  - [`app.js:11801`](app.js#L11801) — cakupan global / event handler
    `${isWinnerB ? '🏆 ' : ''}${escapeHtml(f.teamB)}`
  - [`app.js:11810`](app.js#L11810) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
  - [`app.js:11843`](app.js#L11843) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamA)} <span style="color:var(--yokke-gold); font-size:0.78rem;">(Home)</s`
  - [`app.js:11845`](app.js#L11845) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamB)} <span style="color:var(--text-muted); font-size:0.78rem;">(Away)</s`
  - [`app.js:11847`](app.js#L11847) — cakupan global / event handler
    `${actualMatch.winner ? '<div style="font-size:0.8rem; color:var(--yokke-green); font-weight:700; mar`
  - [`app.js:11957`](app.js#L11957) — cakupan global / event handler
    `<div style="font-size:0.9rem;font-weight:700;color:var(--yokke-cyan);">${escapeHtml((groupPlayoffMat`
  - [`app.js:11961`](app.js#L11961) — cakupan global / event handler
    `<div style="font-size:0.9rem;font-weight:700;color:var(--yokke-gold);">${escapeHtml((groupPlayoffMat`
  - [`app.js:11966`](app.js#L11966) — cakupan global / event handler
    `👑 JUARA 1 YOKKE SQUAD 2026: ${escapeHtml(groupPlayoffMatches[5][0].winner)} (${groupPlayoffMatches[`

<a id="filterlist"></a>
#### `filterList(cat)`

- **Definisi:** [`app.js:3487`](app.js#L3487)
- **Deskripsi:** Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/MCGG), dan status verifikasi.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:339`](index.html#L339) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('ALL')">Semua</button>`
  - [`index.html:340`](index.html#L340) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('MLBB')">MLBB (<span id="countMLBB">0</span> Tim`
  - [`index.html:341`](index.html#L341) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('MCGG')">MCGG (<span id="countMCGG">0</span> Pem`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants)

<a id="changetournamentformat"></a>
#### `changeTournamentFormat()`

- **Definisi:** [`app.js:3979`](app.js#L3979)
- **Deskripsi:** Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP_2, GROUP_4, KNOCKOUT).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:465`](index.html#L465) — Event `onchange`
    `<select id="bracketFormat" onchange="changeTournamentFormat()" style="padding: 0.5rem 0.8rem; font-s`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermvpgametabs"></a>
#### `renderMvpGameTabs()`

- **Definisi:** [`app.js:7620`](app.js#L7620)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7599`](app.js#L7599) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpGameTabs();`
  - [`app.js:7705`](app.js#L7705) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpGameTabs();`
  - [`app.js:7845`](app.js#L7845) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpGameTabs();`
- **Memanggil Fungsi Internal:** [`switchMvpGameTab()`](#switchmvpgametab)

<a id="switchmvpgametab"></a>
#### `switchMvpGameTab(targetGame)`

- **Definisi:** [`app.js:7652`](app.js#L7652)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7643`](app.js#L7643) — di dalam fungsi `renderMvpGameTabs()`
    `<button type="button" class="${pillClass}" onclick="switchMvpGameTab(${g})">`
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="switchmvpteamtab"></a>
#### `switchMvpTeamTab(teamKey)`

- **Definisi:** [`app.js:7715`](app.js#L7715)
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:883`](index.html#L883) — Event `onclick`
    `<button type="button" id="mvpTabTeamA" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`index.html:886`](index.html#L886) — Event `onclick`
    `<button type="button" id="mvpTabTeamB" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`app.js:7615`](app.js#L7615) — di dalam fungsi `initAndShowMvpModal()`
    `switchMvpTeamTab(ctx.activeTeam);`
  - [`app.js:7707`](app.js#L7707) — di dalam fungsi `switchMvpGameTab()`
    `switchMvpTeamTab(ctx.activeTeam);`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="formatmatchmvpdisplayhtml"></a>
#### `formatMatchMvpDisplayHtml(m)`

- **Definisi:** [`app.js:8100`](app.js#L8100)
- **Deskripsi:** Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8793`](app.js#L8793) — di dalam fungsi `renderGroupFixturesUI()`
    `${formatMatchMvpDisplayHtml(f)}`
  - [`app.js:11805`](app.js#L11805) — cakupan global / event handler
    `${formatMatchMvpDisplayHtml(f)}`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="setdrawtargetandscroll"></a>
#### `setDrawTargetAndScroll(lobbyKey)`

- **Definisi:** [`app.js:10096`](app.js#L10096)
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
  - [`app.js:1133`](app.js#L1133) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`app.js:2746`](app.js#L2746) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3554`](app.js#L3554) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3581`](app.js#L3581) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3752`](app.js#L3752) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3774`](app.js#L3774) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3864`](app.js#L3864) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:8322`](app.js#L8322) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(car`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

---

### 🛡️ Autentikasi & Hak Akses Panitia

<a id="confirmresetbaganwithpin"></a>
#### `confirmResetBaganWithPin()`

- **Definisi:** [`app.js:867`](app.js#L867)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:850`](index.html#L850) — Event `onclick`
    `<button class="btn btn-danger-sm" style="padding: 0.5rem 1.1rem; font-size: 0.85rem;" onclick="confi`
- **Memanggil Fungsi Internal:** [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`showToast()`](#showtoast), [`closeResetBaganModal()`](#closeresetbaganmodal), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="openloginmodal"></a>
#### `openLoginModal()`

- **Definisi:** [`app.js:2280`](app.js#L2280)
- **Deskripsi:** Auth functions
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:44`](index.html#L44) — Event `onclick`
    `<button id="btnLoginPanitia" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8`

<a id="closeloginmodal"></a>
#### `closeLoginModal()`

- **Definisi:** [`app.js:2292`](app.js#L2292)
- **Deskripsi:** Menutup modal dialog login PIN panitia.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:790`](index.html#L790) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeLoginModal()">Batal</button>`
  - [`app.js:2340`](app.js#L2340) — di dalam fungsi `verifyAdminPin()`
    `closeLoginModal();`

<a id="verifyadminpin"></a>
#### `verifyAdminPin()`

- **Definisi:** [`app.js:2300`](app.js#L2300)
- **Deskripsi:** Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif penuh.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:787`](index.html#L787) — Inline Script / Markup
    `<input type="password" id="adminPinInput" placeholder="Masukkan PIN Panitia" onkeydown="if(event.key`
  - [`index.html:791`](index.html#L791) — Event `onclick`
    `<button id="btnLoginSubmit" class="btn btn-primary" onclick="verifyAdminPin()">Masuk</button>`
- **Memanggil Fungsi Internal:** [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`closeLoginModal()`](#closeloginmodal), [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`showToast()`](#showtoast)

<a id="logoutadmin"></a>
#### `logoutAdmin()`

- **Definisi:** [`app.js:2380`](app.js#L2380)
- **Deskripsi:** Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (read-only).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:45`](index.html#L45) — Event `onclick`
    `<button id="btnLogoutPanitia" class="btn btn-outline" style="display: none; padding: 0.25rem 0.75rem`
- **Memanggil Fungsi Internal:** [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`showToast()`](#showtoast)

<a id="updateauthui"></a>
#### `updateAuthUI()`

- **Definisi:** [`app.js:2527`](app.js#L2527)
- **Deskripsi:** Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock, dan form interaktif.
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:938`](app.js#L938) — di dalam fungsi `confirmResetBaganWithPin()`
    `updateAuthUI();`
  - [`app.js:1520`](app.js#L1520) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateAuthUI();`
  - [`app.js:1925`](app.js#L1925) — di dalam fungsi `saveState()`
    `updateAuthUI();`
  - [`app.js:2341`](app.js#L2341) — di dalam fungsi `verifyAdminPin()`
    `updateAuthUI();`
  - [`app.js:2388`](app.js#L2388) — di dalam fungsi `logoutAdmin()`
    `updateAuthUI();`
  - [`app.js:2477`](app.js#L2477) — di dalam fungsi `toggleRegistrationStatus()`
    `updateAuthUI();`
  - [`app.js:2522`](app.js#L2522) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `updateAuthUI();`
  - [`app.js:4067`](app.js#L4067) — di dalam fungsi `toggleLockMLBBGroup()`
    `updateAuthUI();`
  - [`app.js:4151`](app.js#L4151) — di dalam fungsi `proceedToMLBBStage2()`
    `updateAuthUI();`
  - [`app.js:4252`](app.js#L4252) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `updateAuthUI();`
  - [`app.js:4298`](app.js#L4298) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `updateAuthUI();`
  - [`app.js:4652`](app.js#L4652) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `updateAuthUI();`
  - [`app.js:4977`](app.js#L4977) — di dalam fungsi `resetMLBBToStage1()`
    `updateAuthUI();`
  - [`app.js:5016`](app.js#L5016) — di dalam fungsi `toggleLockMCGGLobbies()`
    `updateAuthUI();`
  - [`app.js:10846`](app.js#L10846) — cakupan global / event handler
    `updateAuthUI();`
  - [`app.js:11008`](app.js#L11008) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `updateAuthUI();`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui)

---

### 📋 Regulasi Turnamen (Rules Editor)

<a id="formatruleline"></a>
#### `formatRuleLine(l)`

- **Definisi:** [`app.js:1939`](app.js#L1939)
- **Deskripsi:** Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="fetchrulesfromgoogledoc"></a>
#### `fetchRulesFromGoogleDoc(silent = false)`

- **Definisi:** [`app.js:1985`](app.js#L1985)
- **Deskripsi:** Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: tab=t.0 & MCGG: tab=t.ji56ljhdhzkr)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:389`](index.html#L389) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`app.js:2732`](app.js#L2732) — di dalam fungsi `switchTab()`
    `fetchRulesFromGoogleDoc(true);`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`showToast()`](#showtoast)

<a id="renderrules"></a>
#### `renderRules()`

- **Definisi:** [`app.js:2043`](app.js#L2043)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:1461`](app.js#L1461) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRules();`
  - [`app.js:2022`](app.js#L2022) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `renderRules();`
  - [`app.js:2076`](app.js#L2076) — di dalam fungsi `saveCustomRules()`
    `renderRules();`
  - [`app.js:2096`](app.js#L2096) — di dalam fungsi `resetRulesToDefault()`
    `renderRules();`
  - [`app.js:2731`](app.js#L2731) — di dalam fungsi `switchTab()`
    `renderRules();`
  - [`app.js:10845`](app.js#L10845) — cakupan global / event handler
    `renderRules();`

<a id="toggleeditrules"></a>
#### `toggleEditRules()`

- **Definisi:** [`app.js:2057`](app.js#L2057)
- **Deskripsi:** Membuka/menutup form editor peraturan turnamen khusus panitia.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:399`](index.html#L399) — Event `onclick`
    `<button class="btn btn-gold" id="btnToggleEditRules" style="font-size: 0.8rem; padding: 0.4rem 0.8re`
  - [`index.html:433`](index.html#L433) — Event `onclick`
    `<button class="btn btn-outline" onclick="toggleEditRules()">Batal</button>`
  - [`app.js:2077`](app.js#L2077) — di dalam fungsi `saveCustomRules()`
    `toggleEditRules();`

<a id="savecustomrules"></a>
#### `saveCustomRules()`

- **Definisi:** [`app.js:2063`](app.js#L2063)
- **Deskripsi:** Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Google Sheets.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:432`](index.html#L432) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveCustomRules()">💾 Simpan Peraturan</button>`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`toggleEditRules()`](#toggleeditrules), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="resetrulestodefault"></a>
#### `resetRulesToDefault()`

- **Definisi:** [`app.js:2091`](app.js#L2091)
- **Deskripsi:** Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:400`](index.html#L400) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetRules" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules)

---

### 🗄️ Google Sheets Schema & Master Data

<a id="gettargetspreadsheet"></a>
#### `getTargetSpreadsheet()`

- **Definisi:** [`google_apps_script.js:38`](google_apps_script.js#L38)
- **Deskripsi:** Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet berdasarkan TARGET_SPREADSHEET_ID untuk testing/lokal, atau fallback ke active spreadsheet jika container-bound. /
- **Titik Pemanggilan (5 lokasi):**
  - [`google_apps_script.js:662`](google_apps_script.js#L662) — di dalam fungsi `getInitialData()`
    `if (!ss) ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1254`](google_apps_script.js#L1254) — di dalam fungsi `doGet()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1309`](google_apps_script.js#L1309) — di dalam fungsi `doPost()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:2580`](google_apps_script.js#L2580) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `var ss = getTargetSpreadsheet();`
  - [`functional_tests.js:459`](functional_tests.js#L459) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getTargetSpreadsheet('), 'Harus memiliki fungsi getTargetSpreadshe`

<a id="ensurerelationalsheetsexist"></a>
#### `ensureRelationalSheetsExist(ss)`

- **Definisi:** [`google_apps_script.js:313`](google_apps_script.js#L313)
- **Deskripsi:** Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Parent Tim) 2. 'MLBB - Peserta' (Child Roster Anggota) 3. 'Pendaftaran MCGG' (Pemain Solo) /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:1310`](google_apps_script.js#L1310) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1799`](google_apps_script.js#L1799) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:799`](google_apps_script.js#L799) — di dalam fungsi `getInitialData()`
    `var mcggList = getMcggListing(ss);`
  - [`google_apps_script.js:1982`](google_apps_script.js#L1982) — di dalam fungsi `doPost()`
    `var mcggListing = getMcggListing(ss);`
  - [`functional_tests.js:467`](functional_tests.js#L467) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMcggListing('), 'Harus ada fungsi getMcggListing');`

<a id="getorcreatesheet"></a>
#### `getOrCreateSheet(ss, sheetName)`

- **Definisi:** [`google_apps_script.js:2085`](google_apps_script.js#L2085)
- **Deskripsi:** Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncdedicatedtournamentsheets"></a>
#### `syncDedicatedTournamentSheets(ss, payload)`

- **Definisi:** [`google_apps_script.js:2116`](google_apps_script.js#L2116)
- **Deskripsi:** Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah Dipanggil otomatis saat action === 'SAVE_CONFIG' atau 'CREATE_TOURNAMENT_SHEETS' /
- **Titik Pemanggilan (8 lokasi):**
  - [`google_apps_script.js:1438`](google_apps_script.js#L1438) — di dalam fungsi `doPost()`
    `var syncMetrics = syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1470`](google_apps_script.js#L1470) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1570`](google_apps_script.js#L1570) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:2568`](google_apps_script.js#L2568) — di dalam fungsi `syncListBagan()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData, mcggLobbies: mcggData });`
  - [`google_apps_script.js:2572`](google_apps_script.js#L2572) — di dalam fungsi `syncListPoint()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData });`
  - [`google_apps_script.js:2576`](google_apps_script.js#L2576) — di dalam fungsi `syncListPointAndCommanderMCGG()`
    `return syncDedicatedTournamentSheets(ss, { mcggLobbies: mcggData });`
  - [`google_apps_script.js:2603`](google_apps_script.js#L2603) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `syncDedicatedTournamentSheets(ss, payload);`
  - [`functional_tests.js:783`](functional_tests.js#L783) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function syncDedicatedTournamentSheets('), 'Harus memiliki fungsi syncDedic`
- **Memanggil Fungsi Internal:** [`safeBatchResizeColumns()`](#safebatchresizecolumns), [`syncVersionsToVercel()`](#syncversionstovercel)

<a id="createorupdatealltournamentsheets"></a>
#### `createOrUpdateAllTournamentSheets(groupStageData, mcggLobbies)`

- **Definisi:** [`google_apps_script.js:2579`](google_apps_script.js#L2579)
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
  - [`google_apps_script.js:1360`](google_apps_script.js#L1360) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1347`](google_apps_script.js#L1347) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1788`](google_apps_script.js#L1788) — di dalam fungsi `doPost()`
    `var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);`
  - [`google_apps_script.js:1968`](google_apps_script.js#L1968) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1255`](google_apps_script.js#L1255) — di dalam fungsi `doGet()`
    `var result = getInitialData(ss);`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMlbbPesertaListing()`](#getmlbbpesertalisting), [`getMcggListing()`](#getmcgglisting), [`helperParseRank()`](#helperparserank)

<a id="helperparserank"></a>
#### `helperParseRank(val)`

- **Definisi:** [`google_apps_script.js:898`](google_apps_script.js#L898)
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:953`](google_apps_script.js#L953) — di dalam fungsi `getInitialData()`
    `r1: helperParseRank(mRow[6]),`
  - [`google_apps_script.js:955`](google_apps_script.js#L955) — di dalam fungsi `getInitialData()`
    `r2: helperParseRank(mRow[8]),`
  - [`google_apps_script.js:957`](google_apps_script.js#L957) — di dalam fungsi `getInitialData()`
    `r3: helperParseRank(mRow[10]),`

<a id="getvalidadminpins"></a>
#### `getValidAdminPins(ss)`

- **Definisi:** [`google_apps_script.js:1267`](google_apps_script.js#L1267)
- **Deskripsi:** 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:1316`](google_apps_script.js#L1316) — di dalam fungsi `doPost()`
    `var validPins = getValidAdminPins(ss);`
  - [`google_apps_script.js:1336`](google_apps_script.js#L1336) — di dalam fungsi `doPost()`
    `var validPins = getValidAdminPins(ss);`

<a id="savebase64image"></a>
#### `saveBase64Image(base64Data, fileName, targetFolder)`

- **Definisi:** [`google_apps_script.js:1349`](google_apps_script.js#L1349)
- **Titik Pemanggilan (4 lokasi):**
  - [`google_apps_script.js:1793`](google_apps_script.js#L1793) — di dalam fungsi `doPost()`
    `logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);`
  - [`google_apps_script.js:1840`](google_apps_script.js#L1840) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1921`](google_apps_script.js#L1921) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1974`](google_apps_script.js#L1974) — di dalam fungsi `doPost()`
    `mcggIdCardUrl = saveBase64Image(mcggCard, "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", `

<a id="safebatchresizecolumns"></a>
#### `safeBatchResizeColumns(sheet, numCols)`

- **Definisi:** [`google_apps_script.js:2097`](google_apps_script.js#L2097)
- **Deskripsi:** Helper efisien untuk auto-resize banyak kolom dalam 1 panggilan RPC Google Apps Script. Mengurangi waktu eksekusi dari ~45 detik menjadi < 1 detik. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:2242`](google_apps_script.js#L2242) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `safeBatchResizeColumns(sheetMLBBPoint, mlbbPointHeaders.length);`
  - [`google_apps_script.js:2399`](google_apps_script.js#L2399) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `safeBatchResizeColumns(sheetMLBBBagan, mlbbBaganHeaders.length);`
  - [`google_apps_script.js:2459`](google_apps_script.js#L2459) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `safeBatchResizeColumns(sheetMCGG, mcggHeaders.length);`

<a id="onedit"></a>
#### `onEdit(e)`

- **Definisi:** [`google_apps_script.js:2490`](google_apps_script.js#L2490)
- **Deskripsi:** Trigger Otomatis saat sel diedit langsung di Spreadsheet /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`syncVersionsToVercel()`](#syncversionstovercel)

<a id="syncversionstovercel"></a>
#### `syncVersionsToVercel(props)`

- **Definisi:** [`google_apps_script.js:2525`](google_apps_script.js#L2525)
- **Deskripsi:** Helper pengiriman versi ke Vercel Edge Config REST API /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:2479`](google_apps_script.js#L2479) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `syncVersionsToVercel(props);`
  - [`google_apps_script.js:2513`](google_apps_script.js#L2513) — di dalam fungsi `onEdit()`
    `syncVersionsToVercel(props);`

<a id="synclistbagan"></a>
#### `syncListBagan(ss, groupData, mcggData)`

- **Definisi:** [`google_apps_script.js:2567`](google_apps_script.js#L2567)
- **Deskripsi:** Wrapper kompatibilitas untuk pemicu manual / lama /
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:114`](functional_tests.js#L114) — pada skenario pengujian
    `assert(gasCode.includes('function syncListBagan('), 'Harus memiliki fungsi syncListBagan');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpoint"></a>
#### `syncListPoint(ss, groupData)`

- **Definisi:** [`google_apps_script.js:2571`](google_apps_script.js#L2571)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:115`](functional_tests.js#L115) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPoint('), 'Harus memiliki fungsi syncListPoint');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpointandcommandermcgg"></a>
#### `syncListPointAndCommanderMCGG(ss, mcggData)`

- **Definisi:** [`google_apps_script.js:2575`](google_apps_script.js#L2575)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:116`](functional_tests.js#L116) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPointAndCommanderMCGG('), 'Harus memiliki fungsi syncListP`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

---

### 🌐 Web API & Endpoint Webhook

<a id="doget"></a>
#### `doGet(e)`

- **Definisi:** [`google_apps_script.js:1252`](google_apps_script.js#L1252)
- **Deskripsi:** 1. GET HANDLER: FETCH SEMUA PESERTA & KONFIGURASI KE WEBSITE /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`getInitialData()`](#getinitialdata)

<a id="dopost"></a>
#### `doPost(e)`

- **Definisi:** [`google_apps_script.js:1289`](google_apps_script.js#L1289)
- **Deskripsi:** Endpoint HTTP POST Google Apps Script untuk menerima pendaftaran, verifikasi, hapus data, dan simpan konfigurasi.
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:532`](functional_tests.js#L532) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getValidAdminPins()`](#getvalidadminpins), [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`getOrCreateSubFolder()`](#getorcreatesubfolder), [`saveBase64Image()`](#savebase64image), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMcggListing()`](#getmcgglisting)

---

