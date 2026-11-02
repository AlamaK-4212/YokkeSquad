# 📖 INDEKS FUNGSI DAN PETA PEMANGGILAN KODE (FUNCTION MAP)
> **Turnamen E-Sports Yokke Squad 2026**  
> *Dokumen ini dibuat otomatis oleh script `scripts/generate_function_index.js`. Pembaruan dilakukan secara otomatis setiap kali ada perubahan pada source code.*

---

## 📊 Ringkasan Eksekutif
- **Total Fungsi Terdaftar:** 305 fungsi (270 di `app.js`, 22 di `google_apps_script.js`)
- **Total Titik Pemanggilan (Call Sites):** 1304 titik pemanggilan teridentifikasi
- **Terakhir Diperbarui:** 2/11/2026, 14.54.54 WIB
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
5. [☁️ Sinkronisasi Google Sheets & State Storage (10 fungsi)](#sinkronisasi-google-sheets-state-storage)
6. [🆔 Modal Dialog & Bukti ID Card (28 fungsi)](#modal-dialog-bukti-id-card)
7. [🔧 Helper & UI Utility (13 fungsi)](#helper-ui-utility)
8. [🛡️ Autentikasi & Hak Akses Panitia (6 fungsi)](#autentikasi-hak-akses-panitia)
9. [📋 Regulasi Turnamen (Rules Editor) (6 fungsi)](#regulasi-turnamen-rules-editor)
10. [🗄️ Google Sheets Schema & Master Data (8 fungsi)](#google-sheets-schema-master-data)
11. [⚙️ Backend Apps Script Utility (12 fungsi)](#backend-apps-script-utility)
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
| 11 | [**`postToGoogleAppsScript()`**](#posttogoogleappsscript) | [app.js:88](app.js#L88) | 📦 Modul Aplikasi Umum | Helper fetch terpusat untuk komunikasi POST dengan Google Apps Script Web A... | 11x |
| 12 | [**`getInitialParticipants()`**](#getinitialparticipants) | [app.js:113](app.js#L113) | 👥 Manajemen Peserta & Roster | Inisialisasi daftar peserta dari localStorage dengan validasi versi data (D... | 1x |
| 13 | [**`getTeamPrefix()`**](#getteamprefix) | [app.js:136](app.js#L136) | 📦 Modul Aplikasi Umum | Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama) | 4x |
| 14 | [**`getDepartmentCluster()`**](#getdepartmentcluster) | [app.js:148](app.js#L148) | 📦 Modul Aplikasi Umum | Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resm... | 7x |
| 15 | [**`getTeamDept()`**](#getteamdept) | [app.js:206](app.js#L206) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 4x |
| 16 | [**`isTeamInvited()`**](#isteaminvited) | [app.js:228](app.js#L228) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 17 | [**`toggleInvitedTeam()`**](#toggleinvitedteam) | [app.js:243](app.js#L243) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleInvitedTeam | 2x |
| 18 | [**`showGlobalLoader()`**](#showgloballoader) | [app.js:278](app.js#L278) | 📦 Modul Aplikasi Umum | Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets) | 1x |
| 19 | [**`hideGlobalLoader()`**](#hidegloballoader) | [app.js:292](app.js#L292) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hideGlobalLoader | 4x |
| 20 | [**`saveStageStateLocal()`**](#savestagestatelocal) | [app.js:462](app.js#L462) | ☁️ Sinkronisasi Google Sheets & State Storage | Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM,... | 14x |
| 21 | [**`getCommanderFormattedName()`**](#getcommanderformattedname) | [app.js:518](app.js#L518) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika t... | 5x |
| 22 | [**`renderCommanderCirclesHtml()`**](#rendercommandercircleshtml) | [app.js:529](app.js#L529) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen | 3x |
| 23 | [**`renderCommanderCardVisualHtml()`**](#rendercommandercardvisualhtml) | [app.js:558](app.js#L558) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian | 1x |
| 24 | [**`compressImage()`**](#compressimage) | [app.js:738](app.js#L738) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compressor: compresses smartphone photos using HTML5 Canv... | 3x |
| 25 | [**`compressImageFile()`**](#compressimagefile) | [app.js:797](app.js#L797) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compression helper (Canvas <= 1200px, quality 0.75) | 3x |
| 26 | [**`showToast()`**](#showtoast) | [app.js:804](app.js#L804) | 🔧 Helper & UI Utility | TOAST NOTIFICATIONS (CYBERPUNK DARK) | 50x |
| 27 | [**`openGlossaryModal()`**](#openglossarymodal) | [app.js:837](app.js#L837) | 🆔 Modal Dialog & Bukti ID Card | Modal Glosarium Istilah Turnamen | 1x |
| 28 | [**`closeGlossaryModal()`**](#closeglossarymodal) | [app.js:842](app.js#L842) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeGlossaryModal | 2x |
| 29 | [**`openResetBaganModal()`**](#openresetbaganmodal) | [app.js:848](app.js#L848) | 🆔 Modal Dialog & Bukti ID Card | Modal Reset Bagan dengan Verifikasi Password/PIN | 1x |
| 30 | [**`closeResetBaganModal()`**](#closeresetbaganmodal) | [app.js:857](app.js#L857) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeResetBaganModal | 2x |
| 31 | [**`confirmResetBaganWithPin()`**](#confirmresetbaganwithpin) | [app.js:862](app.js#L862) | 🛡️ Autentikasi & Hak Akses Panitia | Fungsi operasional untuk confirmResetBaganWithPin | 1x |
| 32 | [**`bypassLoaderWithCache()`**](#bypassloaderwithcache) | [app.js:906](app.js#L906) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk bypassLoaderWithCache | 1x |
| 33 | [**`handleParticipantSearch()`**](#handleparticipantsearch) | [app.js:921](app.js#L921) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk handleParticipantSearch | 1x |
| 34 | [**`saveFormDraft()`**](#saveformdraft) | [app.js:929](app.js#L929) | 📦 Modul Aplikasi Umum | AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE) | 1x |
| 35 | [**`restoreFormDraft()`**](#restoreformdraft) | [app.js:985](app.js#L985) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk restoreFormDraft | 2x |
| 36 | [**`clearFormDraft()`**](#clearformdraft) | [app.js:1075](app.js#L1075) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearFormDraft | 1x |
| 37 | [**`handleFormDraftChange()`**](#handleformdraftchange) | [app.js:1082](app.js#L1082) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk handleFormDraftChange | 3x |
| 38 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [app.js:1091](app.js#L1091) | 🔧 Helper & UI Utility | Helper to format Google Drive image URLs into viewable thumbnail image URLs | 9x |
| 39 | [**`getIdCardMap()`**](#getidcardmap) | [app.js:1106](app.js#L1106) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama | 2x |
| 40 | [**`saveIdCardToMap()`**](#saveidcardtomap) | [app.js:1145](app.js#L1145) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasar... | 5x |
| 41 | [**`findIdCardByEmpIdOrName()`**](#findidcardbyempidorname) | [app.js:1163](app.js#L1163) | 🆔 Modal Dialog & Bukti ID Card | Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama p... | 9x |
| 42 | [**`getLogoMap()`**](#getlogomap) | [app.js:1181](app.js#L1181) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan Logo sesuai Nama Tim (MLBB) | 2x |
| 43 | [**`saveLogoToMap()`**](#savelogotomap) | [app.js:1195](app.js#L1195) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasa... | 3x |
| 44 | [**`findLogoByTeamName()`**](#findlogobyteamname) | [app.js:1204](app.js#L1204) | 🆔 Modal Dialog & Bukti ID Card | Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peser... | 7x |
| 45 | [**`autoLinkParticipantsAssets()`**](#autolinkparticipantsassets) | [app.js:1212](app.js#L1212) | 👥 Manajemen Peserta & Roster | Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada | 5x |
| 46 | [**`fetchParticipantsFromGoogleSheet()`**](#fetchparticipantsfromgooglesheet) | [app.js:1247](app.js#L1247) | 👥 Manajemen Peserta & Roster | Fetch registered participants from Google Sheets via doGet Webhook Google S... | 4x |
| 47 | [**`getItemKey()`**](#getitemkey) | [app.js:1273](app.js#L1273) | 📦 Modul Aplikasi Umum | Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name | 2x |
| 48 | [**`cleanOrphanedTournamentData()`**](#cleanorphanedtournamentdata) | [app.js:1513](app.js#L1513) | 📦 Modul Aplikasi Umum | Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup... | 2x |
| 49 | [**`resetCacheAndFollowGSheet()`**](#resetcacheandfollowgsheet) | [app.js:1599](app.js#L1599) | ☁️ Sinkronisasi Google Sheets & State Storage | Reset cache lokal dan ikuti 100% data aktif dari Google Sheets | 1x |
| 50 | [**`saveAllChangesToGoogleSheet()`**](#saveallchangestogooglesheet) | [app.js:1632](app.js#L1632) | ☁️ Sinkronisasi Google Sheets & State Storage | SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS | 1x |
| 51 | [**`syncTournamentSheetsToGSheet()`**](#synctournamentsheetstogsheet) | [app.js:1774](app.js#L1774) | ☁️ Sinkronisasi Google Sheets & State Storage | SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET | 0x |
| 52 | [**`saveState()`**](#savestate) | [app.js:1809](app.js#L1809) | 📦 Modul Aplikasi Umum | Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi ... | 44x |
| 53 | [**`updateCounts()`**](#updatecounts) | [app.js:1821](app.js#L1821) | 📦 Modul Aplikasi Umum | Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status veri... | 7x |
| 54 | [**`formatRuleLine()`**](#formatruleline) | [app.js:1831](app.js#L1831) | 📋 Regulasi Turnamen (Rules Editor) | Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG) | 0x |
| 55 | [**`fetchRulesFromGoogleDoc()`**](#fetchrulesfromgoogledoc) | [app.js:1877](app.js#L1877) | 📋 Regulasi Turnamen (Rules Editor) | Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: t... | 2x |
| 56 | [**`renderRules()`**](#renderrules) | [app.js:1935](app.js#L1935) | 📋 Regulasi Turnamen (Rules Editor) | Fungsi operasional untuk renderRules | 6x |
| 57 | [**`toggleEditRules()`**](#toggleeditrules) | [app.js:1949](app.js#L1949) | 📋 Regulasi Turnamen (Rules Editor) | Membuka/menutup form editor peraturan turnamen khusus panitia. | 3x |
| 58 | [**`saveCustomRules()`**](#savecustomrules) | [app.js:1955](app.js#L1955) | 📋 Regulasi Turnamen (Rules Editor) | Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Goo... | 1x |
| 59 | [**`resetRulesToDefault()`**](#resetrulestodefault) | [app.js:1983](app.js#L1983) | 📋 Regulasi Turnamen (Rules Editor) | Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026... | 1x |
| 60 | [**`handleLogoPreview()`**](#handlelogopreview) | [app.js:1993](app.js#L1993) | 🆔 Modal Dialog & Bukti ID Card | Handle Logo Upload and Live Preview | 1x |
| 61 | [**`handleSingleIdCardPreview()`**](#handlesingleidcardpreview) | [app.js:2008](app.js#L2008) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Officials and MCGG | 3x |
| 62 | [**`handlePlayerIdCardPreview()`**](#handleplayeridcardpreview) | [app.js:2030](app.js#L2030) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Each of the 8 Players | 1x |
| 63 | [**`toggleOfficial2Form()`**](#toggleofficial2form) | [app.js:2046](app.js#L2046) | 📦 Modul Aplikasi Umum | Toggle Official 2 Form | 4x |
| 64 | [**`renderPlayersFormInputs()`**](#renderplayersforminputs) | [app.js:2053](app.js#L2053) | 📦 Modul Aplikasi Umum | Generate the 8 players form fields dynamically (Included In-Game Nickname a... | 2x |
| 65 | [**`toggleCategoryForm()`**](#togglecategoryform) | [app.js:2112](app.js#L2112) | 📦 Modul Aplikasi Umum | Switch form between MLBB and MCGG cleanly | 3x |
| 66 | [**`openLoginModal()`**](#openloginmodal) | [app.js:2172](app.js#L2172) | 🛡️ Autentikasi & Hak Akses Panitia | Auth functions | 1x |
| 67 | [**`closeLoginModal()`**](#closeloginmodal) | [app.js:2179](app.js#L2179) | 🛡️ Autentikasi & Hak Akses Panitia | Menutup modal dialog login PIN panitia. | 2x |
| 68 | [**`verifyAdminPin()`**](#verifyadminpin) | [app.js:2183](app.js#L2183) | 🛡️ Autentikasi & Hak Akses Panitia | Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif p... | 1x |
| 69 | [**`logoutAdmin()`**](#logoutadmin) | [app.js:2199](app.js#L2199) | 🛡️ Autentikasi & Hak Akses Panitia | Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (r... | 1x |
| 70 | [**`renderRegistrationUI()`**](#renderregistrationui) | [app.js:2208](app.js#L2208) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderRegistrationUI | 4x |
| 71 | [**`toggleRegistrationStatus()`**](#toggleregistrationstatus) | [app.js:2274](app.js#L2274) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk toggleRegistrationStatus | 5x |
| 72 | [**`resetMCGGPointsAndDraw()`**](#resetmcggpointsanddraw) | [app.js:2295](app.js#L2295) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetMCGGPointsAndDraw | 2x |
| 73 | [**`updateAuthUI()`**](#updateauthui) | [app.js:2338](app.js#L2338) | 🛡️ Autentikasi & Hak Akses Panitia | Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock,... | 16x |
| 74 | [**`switchTab()`**](#switchtab) | [app.js:2530](app.js#L2530) | 🔧 Helper & UI Utility | Navigation Tabs | 5x |
| 75 | [**`openIdCardLightbox()`**](#openidcardlightbox) | [app.js:2548](app.js#L2548) | 🆔 Modal Dialog & Bukti ID Card | Lightbox for Viewing Full ID Card | 3x |
| 76 | [**`closeIdCardLightbox()`**](#closeidcardlightbox) | [app.js:2589](app.js#L2589) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal pop-up lightbox preview ID Card pegawai. | 2x |
| 77 | [**`escapeHtml()`**](#escapehtml) | [app.js:2594](app.js#L2594) | 🔧 Helper & UI Utility | Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dal... | 89x |
| 78 | [**`updateRegistrationDatalists()`**](#updateregistrationdatalists) | [app.js:2606](app.js#L2606) | 📦 Modul Aplikasi Umum | Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit... | 3x |
| 79 | [**`handleTeamNameInput()`**](#handleteamnameinput) | [app.js:2620](app.js#L2620) | 📦 Modul Aplikasi Umum | Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edi... | 2x |
| 80 | [**`handleMcggNameInput()`**](#handlemcggnameinput) | [app.js:2653](app.js#L2653) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fu... | 2x |
| 81 | [**`handleRegister()`**](#handleregister) | [app.js:2686](app.js#L2686) | 👥 Manajemen Peserta & Roster | Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Ca... | 1x |
| 82 | [**`setParticipantStatus()`**](#setparticipantstatus) | [app.js:3218](app.js#L3218) | 👥 Manajemen Peserta & Roster | Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets | 2x |
| 83 | [**`deleteParticipant()`**](#deleteparticipant) | [app.js:3255](app.js#L3255) | 👥 Manajemen Peserta & Roster | Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat k... | 1x |
| 84 | [**`filterList()`**](#filterlist) | [app.js:3298](app.js#L3298) | 🔧 Helper & UI Utility | Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/... | 3x |
| 85 | [**`openEditParticipantModal()`**](#openeditparticipantmodal) | [app.js:3306](app.js#L3306) | 🆔 Modal Dialog & Bukti ID Card | ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION | 1x |
| 86 | [**`closeEditParticipantModal()`**](#closeeditparticipantmodal) | [app.js:3404](app.js#L3404) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog edit peserta. | 3x |
| 87 | [**`handleEditLogoUpload()`**](#handleeditlogoupload) | [app.js:3409](app.js#L3409) | 🆔 Modal Dialog & Bukti ID Card | Handle logo upload in Admin Edit modal | 1x |
| 88 | [**`handleEditRosterIdCardUpload()`**](#handleeditrosteridcardupload) | [app.js:3425](app.js#L3425) | 🆔 Modal Dialog & Bukti ID Card | Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedi... | 1x |
| 89 | [**`saveParticipantEdit()`**](#saveparticipantedit) | [app.js:3436](app.js#L3436) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk saveParticipantEdit | 1x |
| 90 | [**`viewRosterDetail()`**](#viewrosterdetail) | [app.js:3556](app.js#L3556) | 👥 Manajemen Peserta & Roster | Modal Detail Roster Lengkap & ID Card Per-Pemain | 1x |
| 91 | [**`closeDetailModal()`**](#closedetailmodal) | [app.js:3615](app.js#L3615) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog rincian roster tim dan galeri ID Card. | 1x |
| 92 | [**`renderParticipants()`**](#renderparticipants) | [app.js:3620](app.js#L3620) | 👥 Manajemen Peserta & Roster | Render Participant Table (Featuring Nickname, ID Card count per-player, and... | 13x |
| 93 | [**`getVerifiedMLBBTeams()`**](#getverifiedmlbbteams) | [app.js:3763](app.js#L3763) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE | 5x |
| 94 | [**`getActiveMLBBFormat()`**](#getactivemlbbformat) | [app.js:3771](app.js#L3771) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N... | 2x |
| 95 | [**`changeTournamentFormat()`**](#changetournamentformat) | [app.js:3790](app.js#L3790) | 🔧 Helper & UI Utility | Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP... | 1x |
| 96 | [**`renderCurrentMLBBFormat()`**](#rendercurrentmlbbformat) | [app.js:3807](app.js#L3807) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderCurrentMLBBFormat | 20x |
| 97 | [**`shuffleAndGenerateTournament()`**](#shuffleandgeneratetournament) | [app.js:3833](app.js#L3833) | 📦 Modul Aplikasi Umum | Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum di... | 1x |
| 98 | [**`toggleLockMLBBGroup()`**](#togglelockmlbbgroup) | [app.js:3858](app.js#L3858) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE) | 1x |
| 99 | [**`isAllMLBBGroupMatchesFinished()`**](#isallmlbbgroupmatchesfinished) | [app.js:3878](app.js#L3878) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan m... | 2x |
| 100 | [**`evaluateMLBBTieBreaker()`**](#evaluatemlbbtiebreaker) | [app.js:3889](app.js#L3889) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosa... | 2x |
| 101 | [**`resolveMLBBTieBreaker()`**](#resolvemlbbtiebreaker) | [app.js:3914](app.js#L3914) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan... | 3x |
| 102 | [**`proceedToMLBBStage2()`**](#proceedtomlbbstage2) | [app.js:3933](app.js#L3933) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Ba... | 3x |
| 103 | [**`refreshAndScrollToPlayoffBracket()`**](#refreshandscrolltoplayoffbracket) | [app.js:3966](app.js#L3966) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk refreshAndScrollToPlayoffBracket | 3x |
| 104 | [**`refreshAndScrollToGroupOrBracket()`**](#refreshandscrolltogrouporbracket) | [app.js:3995](app.js#L3995) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk refreshAndScrollToGroupOrBracket | 1x |
| 105 | [**`shuffleMLBBPlayoffBracket()`**](#shufflemlbbplayoffbracket) | [app.js:4021](app.js#L4021) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk shuffleMLBBPlayoffBracket | 3x |
| 106 | [**`toggleLockMLBBPlayoff()`**](#togglelockmlbbplayoff) | [app.js:4064](app.js#L4064) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk toggleLockMLBBPlayoff | 3x |
| 107 | [**`openPlayoffScoreModal()`**](#openplayoffscoremodal) | [app.js:4100](app.js#L4100) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openPlayoffScoreModal | 5x |
| 108 | [**`closePlayoffScoreModal()`**](#closeplayoffscoremodal) | [app.js:4190](app.js#L4190) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk closePlayoffScoreModal | 5x |
| 109 | [**`stepPlayoffModalScore()`**](#stepplayoffmodalscore) | [app.js:4196](app.js#L4196) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk stepPlayoffModalScore | 4x |
| 110 | [**`setPlayoffModalQuickScore()`**](#setplayoffmodalquickscore) | [app.js:4211](app.js#L4211) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffModalQuickScore | 1x |
| 111 | [**`onPlayoffScoreInputChanged()`**](#onplayoffscoreinputchanged) | [app.js:4222](app.js#L4222) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk onPlayoffScoreInputChanged | 2x |
| 112 | [**`updatePlayoffModalWinnerPreview()`**](#updateplayoffmodalwinnerpreview) | [app.js:4233](app.js#L4233) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk updatePlayoffModalWinnerPreview | 4x |
| 113 | [**`savePlayoffModalScore()`**](#saveplayoffmodalscore) | [app.js:4263](app.js#L4263) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk savePlayoffModalScore | 1x |
| 114 | [**`resetPlayoffModalScore()`**](#resetplayoffmodalscore) | [app.js:4276](app.js#L4276) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetPlayoffModalScore | 1x |
| 115 | [**`setPlayoffMatchScore()`**](#setplayoffmatchscore) | [app.js:4284](app.js#L4284) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffMatchScore | 1x |
| 116 | [**`resetPlayoffMatchScore()`**](#resetplayoffmatchscore) | [app.js:4325](app.js#L4325) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetPlayoffMatchScore | 1x |
| 117 | [**`onPlayoffTeamClicked()`**](#onplayoffteamclicked) | [app.js:4344](app.js#L4344) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk onPlayoffTeamClicked | 4x |
| 118 | [**`renderPlayoffMatchCardHtml()`**](#renderplayoffmatchcardhtml) | [app.js:4354](app.js#L4354) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderPlayoffMatchCardHtml | 3x |
| 119 | [**`findTeamGroupAndRank()`**](#findteamgroupandrank) | [app.js:4401](app.js#L4401) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findTeamGroupAndRank | 5x |
| 120 | [**`testMLBBPlayoffWithCurrentStandings()`**](#testmlbbplayoffwithcurrentstandings) | [app.js:4413](app.js#L4413) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBPlayoffWithCurrentStandings | 5x |
| 121 | [**`openTestDrawModal()`**](#opentestdrawmodal) | [app.js:4606](app.js#L4606) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openTestDrawModal | 2x |
| 122 | [**`closeTestDrawModal()`**](#closetestdrawmodal) | [app.js:4618](app.js#L4618) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeTestDrawModal | 3x |
| 123 | [**`openTestDrawInNewWindow()`**](#opentestdrawinnewwindow) | [app.js:4626](app.js#L4626) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk openTestDrawInNewWindow | 3x |
| 124 | [**`testMLBBGroupAllocationDraw()`**](#testmlbbgroupallocationdraw) | [app.js:4683](app.js#L4683) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBGroupAllocationDraw | 2x |
| 125 | [**`resetMLBBToStage1()`**](#resetmlbbtostage1) | [app.js:4758](app.js#L4758) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor ji... | 2x |
| 126 | [**`resetTotalMLBBGroupAndBracket()`**](#resettotalmlbbgroupandbracket) | [app.js:4770](app.js#L4770) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetTotalMLBBGroupAndBracket | 1x |
| 127 | [**`toggleLockMCGGLobbies()`**](#togglelockmcgglobbies) | [app.js:4789](app.js#L4789) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM... | 1x |
| 128 | [**`validateMCGGDuplicateCommander()`**](#validatemcggduplicatecommander) | [app.js:4811](app.js#L4811) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2) | 3x |
| 129 | [**`getLastSyncedMatches()`**](#getlastsyncedmatches) | [app.js:4839](app.js#L4839) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk getLastSyncedMatches | 2x |
| 130 | [**`setLastSyncedMatches()`**](#setlastsyncedmatches) | [app.js:4850](app.js#L4850) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk setLastSyncedMatches | 2x |
| 131 | [**`getUnsyncedMatches()`**](#getunsyncedmatches) | [app.js:4858](app.js#L4858) | ☁️ Sinkronisasi Google Sheets & State Storage | Lookup perbedaan antara cache lokal dengan data terakhir yang tersinkronisa... | 1x |
| 132 | [**`syncSingleMatchRowToGSheet()`**](#syncsinglematchrowtogsheet) | [app.js:4895](app.js#L4895) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi utama sinkronisasi 1 pertandingan: mengupdate HANYA 3 baris di Googl... | 7x |
| 133 | [**`saveTournamentStateOnly()`**](#savetournamentstateonly) | [app.js:4986](app.js#L4986) | ☁️ Sinkronisasi Google Sheets & State Storage | Handler tombol Simpan: HANYA update ke GSheet saat tombol simpan diklik / s... | 18x |
| 134 | [**`generateBracket()`**](#generatebracket) | [app.js:5058](app.js#L5058) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- KNOCKOUT BRACKET --- | 3x |
| 135 | [**`pickWinner()`**](#pickwinner) | [app.js:5111](app.js#L5111) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk pickWinner | 2x |
| 136 | [**`renderBracket()`**](#renderbracket) | [app.js:5131](app.js#L5131) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderBracket | 5x |
| 137 | [**`allocateMLBBGroups()`**](#allocatemlbbgroups) | [app.js:5206](app.js#L5206) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi)... | 3x |
| 138 | [**`getPrefix()`**](#getprefix) | [app.js:5218](app.js#L5218) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getPrefix | 9x |
| 139 | [**`getDept()`**](#getdept) | [app.js:5226](app.js#L5226) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getDept | 6x |
| 140 | [**`isInvited()`**](#isinvited) | [app.js:5237](app.js#L5237) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInvited | 5x |
| 141 | [**`getOverBaseCount()`**](#getoverbasecount) | [app.js:5305](app.js#L5305) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getOverBaseCount | 1x |
| 142 | [**`canAccept()`**](#canaccept) | [app.js:5307](app.js#L5307) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk canAccept | 0x |
| 143 | [**`hasPrefixConflict()`**](#hasprefixconflict) | [app.js:5341](app.js#L5341) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasPrefixConflict | 2x |
| 144 | [**`hasDeptConflict()`**](#hasdeptconflict) | [app.js:5342](app.js#L5342) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasDeptConflict | 1x |
| 145 | [**`generateGroupStage()`**](#generategroupstage) | [app.js:5396](app.js#L5396) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk generateGroupStage | 3x |
| 146 | [**`updateGroupRecord()`**](#updategrouprecord) | [app.js:5435](app.js#L5435) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk updateGroupRecord | 4x |
| 147 | [**`getMLBBHeadToHeadWinner()`**](#getmlbbheadtoheadwinner) | [app.js:5449](app.js#L5449) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fa... | 1x |
| 148 | [**`compareMLBBTeams()`**](#comparemlbbteams) | [app.js:5516](app.js#L5516) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke ... | 1x |
| 149 | [**`getSortedGroupTeams()`**](#getsortedgroupteams) | [app.js:5550](app.js#L5550) | 📦 Modul Aplikasi Umum | Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkula... | 13x |
| 150 | [**`shuffleArray()`**](#shufflearray) | [app.js:5578](app.js#L5578) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk shuffleArray | 9x |
| 151 | [**`findValidBracketPermutation()`**](#findvalidbracketpermutation) | [app.js:5587](app.js#L5587) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk findValidBracketPermutation | 4x |
| 152 | [**`backtrack()`**](#backtrack) | [app.js:5589](app.js#L5589) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk backtrack | 5x |
| 153 | [**`isTeamAtmo()`**](#isteamatmo) | [app.js:5611](app.js#L5611) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAtmo | 2x |
| 154 | [**`isTeamAlpha()`**](#isteamalpha) | [app.js:5616](app.js#L5616) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAlpha | 2x |
| 155 | [**`isTeamAppa()`**](#isteamappa) | [app.js:5622](app.js#L5622) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAppa | 1x |
| 156 | [**`isPlayoffInvitedTeam()`**](#isplayoffinvitedteam) | [app.js:5627](app.js#L5627) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk isPlayoffInvitedTeam | 2x |
| 157 | [**`solveRemainingBracketSlots()`**](#solveremainingbracketslots) | [app.js:5639](app.js#L5639) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk solveRemainingBracketSlots | 3x |
| 158 | [**`backtrack()`**](#backtrack) | [app.js:5641](app.js#L5641) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk backtrack | 5x |
| 159 | [**`drawMLBBPlayoffUpperBracket()`**](#drawmlbbplayoffupperbracket) | [app.js:5667](app.js#L5667) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Algoritma Pengundian Cerdas Playoff Upper Bracket 16 Besar (MLBB): 1. Undi ... | 1x |
| 160 | [**`isInv()`**](#isinv) | [app.js:5668](app.js#L5668) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInv | 7x |
| 161 | [**`drawMLBBPlayoffLowerBracket()`**](#drawmlbbplayofflowerbracket) | [app.js:5787](app.js#L5787) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk drawMLBBPlayoffLowerBracket | 1x |
| 162 | [**`isInv()`**](#isinv) | [app.js:5788](app.js#L5788) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInv | 7x |
| 163 | [**`initGroupPlayoff()`**](#initgroupplayoff) | [app.js:5824](app.js#L5824) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seed... | 11x |
| 164 | [**`isPlayoffPlaceholderTeam()`**](#isplayoffplaceholderteam) | [app.js:6067](app.js#L6067) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk isPlayoffPlaceholderTeam | 5x |
| 165 | [**`pickGroupPlayoffWinner()`**](#pickgroupplayoffwinner) | [app.js:6077](app.js#L6077) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya k... | 1x |
| 166 | [**`promptPlayoffMVP()`**](#promptplayoffmvp) | [app.js:6245](app.js#L6245) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk promptPlayoffMVP | 1x |
| 167 | [**`renderGroupStageUI()`**](#rendergroupstageui) | [app.js:6252](app.js#L6252) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupStageUI | 16x |
| 168 | [**`resolveTeamNameInGroup()`**](#resolveteamnameingroup) | [app.js:6607](app.js#L6607) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisa... | 2x |
| 169 | [**`isSameTeamName()`**](#issameteamname) | [app.js:6623](app.js#L6623) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, ... | 38x |
| 170 | [**`findGroupNameForTeam()`**](#findgroupnameforteam) | [app.js:6639](app.js#L6639) | 📦 Modul Aplikasi Umum | Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData | 4x |
| 171 | [**`setMLBBActiveWeek()`**](#setmlbbactiveweek) | [app.js:6691](app.js#L6691) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveWeek | 3x |
| 172 | [**`setMLBBActiveDayFilter()`**](#setmlbbactivedayfilter) | [app.js:6699](app.js#L6699) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveDayFilter | 6x |
| 173 | [**`setMLBBActiveGroupFilter()`**](#setmlbbactivegroupfilter) | [app.js:6704](app.js#L6704) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveGroupFilter | 1x |
| 174 | [**`getGroupFixtures()`**](#getgroupfixtures) | [app.js:6710](app.js#L6710) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) --- | 6x |
| 175 | [**`getCanonicalGroupMatchId()`**](#getcanonicalgroupmatchid) | [app.js:6904](app.js#L6904) | 📦 Modul Aplikasi Umum | Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tid... | 7x |
| 176 | [**`isGroupMatchesCompleted()`**](#isgroupmatchescompleted) | [app.js:6913](app.js#L6913) | 📦 Modul Aplikasi Umum | Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah s... | 3x |
| 177 | [**`deduplicateGroupMatchResults()`**](#deduplicategroupmatchresults) | [app.js:6931](app.js#L6931) | 📦 Modul Aplikasi Umum | Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri t... | 3x |
| 178 | [**`getGroupRestingTeams()`**](#getgrouprestingteams) | [app.js:7023](app.js#L7023) | 📦 Modul Aplikasi Umum | Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di... | 1x |
| 179 | [**`setGroupMatchScore()`**](#setgroupmatchscore) | [app.js:7034](app.js#L7034) | 📦 Modul Aplikasi Umum | Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara ... | 7x |
| 180 | [**`promptGroupMatchWO()`**](#promptgroupmatchwo) | [app.js:7144](app.js#L7144) | 📦 Modul Aplikasi Umum | Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupu... | 1x |
| 181 | [**`setGroupMatchSpecialResult()`**](#setgroupmatchspecialresult) | [app.js:7169](app.js#L7169) | 📦 Modul Aplikasi Umum | Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imba... | 4x |
| 182 | [**`saveGroupFixtureScore()`**](#savegroupfixturescore) | [app.js:7178](app.js#L7178) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk saveGroupFixtureScore | 1x |
| 183 | [**`findTeamParticipant()`**](#findteamparticipant) | [app.js:7217](app.js#L7217) | 👥 Manajemen Peserta & Roster | Helper mencari data peserta tim dengan normalisasi nama | 4x |
| 184 | [**`openMLBBGroupMvpModal()`**](#openmlbbgroupmvpmodal) | [app.js:7231](app.js#L7231) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBGroupMvpModal | 3x |
| 185 | [**`openMLBBPlayoffMvpModal()`**](#openmlbbplayoffmvpmodal) | [app.js:7305](app.js#L7305) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBPlayoffMvpModal | 1x |
| 186 | [**`initAndShowMvpModal()`**](#initandshowmvpmodal) | [app.js:7354](app.js#L7354) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk initAndShowMvpModal | 2x |
| 187 | [**`renderMvpGameTabs()`**](#rendermvpgametabs) | [app.js:7401](app.js#L7401) | 🔧 Helper & UI Utility | Fungsi operasional untuk renderMvpGameTabs | 3x |
| 188 | [**`switchMvpGameTab()`**](#switchmvpgametab) | [app.js:7433](app.js#L7433) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpGameTab | 1x |
| 189 | [**`closeMLBBGroupMvpModal()`**](#closemlbbgroupmvpmodal) | [app.js:7491](app.js#L7491) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk closeMLBBGroupMvpModal | 5x |
| 190 | [**`switchMvpTeamTab()`**](#switchmvpteamtab) | [app.js:7496](app.js#L7496) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpTeamTab | 4x |
| 191 | [**`renderMvpRosterList()`**](#rendermvprosterlist) | [app.js:7527](app.js#L7527) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk renderMvpRosterList | 3x |
| 192 | [**`filterMvpRosterList()`**](#filtermvprosterlist) | [app.js:7594](app.js#L7594) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk filterMvpRosterList | 1x |
| 193 | [**`selectMvpPlayer()`**](#selectmvpplayer) | [app.js:7600](app.js#L7600) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpPlayer | 1x |
| 194 | [**`renderMvpQuickHeroChips()`**](#rendermvpquickherochips) | [app.js:7632](app.js#L7632) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderMvpQuickHeroChips | 3x |
| 195 | [**`selectMvpQuickHero()`**](#selectmvpquickhero) | [app.js:7652](app.js#L7652) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpQuickHero | 1x |
| 196 | [**`saveSelectedMvp()`**](#saveselectedmvp) | [app.js:7669](app.js#L7669) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk saveSelectedMvp | 2x |
| 197 | [**`deleteCurrentMvp()`**](#deletecurrentmvp) | [app.js:7741](app.js#L7741) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk deleteCurrentMvp | 1x |
| 198 | [**`setGroupMatchMVP()`**](#setgroupmatchmvp) | [app.js:7793](app.js#L7793) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk setGroupMatchMVP | 3x |
| 199 | [**`formatMatchMvpDisplayHtml()`**](#formatmatchmvpdisplayhtml) | [app.js:7881](app.js#L7881) | 🔧 Helper & UI Utility | Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5) | 2x |
| 200 | [**`promptGroupMatchMVP()`**](#promptgroupmatchmvp) | [app.js:7908](app.js#L7908) | 📦 Modul Aplikasi Umum | Delegasi fungsi promptGroupMatchMVP ke modal interaktif | 1x |
| 201 | [**`openMatchPlayerVerifyModal()`**](#openmatchplayerverifymodal) | [app.js:7925](app.js#L7925) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openMatchPlayerVerifyModal | 2x |
| 202 | [**`closeMatchPlayerVerifyModal()`**](#closematchplayerverifymodal) | [app.js:7963](app.js#L7963) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeMatchPlayerVerifyModal | 2x |
| 203 | [**`toggleMatchPlayerVerify()`**](#togglematchplayerverify) | [app.js:7972](app.js#L7972) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleMatchPlayerVerify | 1x |
| 204 | [**`verifyAllMatchPlayers()`**](#verifyallmatchplayers) | [app.js:7990](app.js#L7990) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk verifyAllMatchPlayers | 2x |
| 205 | [**`renderMatchPlayerVerifyModalContent()`**](#rendermatchplayerverifymodalcontent) | [app.js:8013](app.js#L8013) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk renderMatchPlayerVerifyModalContent | 3x |
| 206 | [**`renderTeamRosterColumn()`**](#renderteamrostercolumn) | [app.js:8069](app.js#L8069) | 👥 Manajemen Peserta & Roster | Helper untuk merender kolom roster tiap tim | 2x |
| 207 | [**`resetGroupMatchScore()`**](#resetgroupmatchscore) | [app.js:8172](app.js#L8172) | 📦 Modul Aplikasi Umum | Mereset skor pertandingan grup MLBB ke status belum bertanding. | 0x |
| 208 | [**`recalculateGroupStandingsFromFixtures()`**](#recalculategroupstandingsfromfixtures) | [app.js:8187](app.js#L8187) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan selu... | 4x |
| 209 | [**`renderGroupFixturesUI()`**](#rendergroupfixturesui) | [app.js:8327](app.js#L8327) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupFixturesUI | 11x |
| 210 | [**`renderGroupPlayoffTree()`**](#rendergroupplayofftree) | [app.js:8608](app.js#L8608) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau statu... | 14x |
| 211 | [**`changeMCGGLobby()`**](#changemcgglobby) | [app.js:8732](app.js#L8732) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MCGG MULTI-LOBBY STANDINGS | 0x |
| 212 | [**`getCommanderById()`**](#getcommanderbyid) | [app.js:8738](app.js#L8738) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mencari objek data commander dari master list berdasarkan ID, nama hero, at... | 1x |
| 213 | [**`updateCommanderPoolFromSetup()`**](#updatecommanderpoolfromsetup) | [app.js:8751](app.js#L8751) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk updateCommanderPoolFromSetup | 1x |
| 214 | [**`getVerifiedMCGGPlayers()`**](#getverifiedmcggplayers) | [app.js:8810](app.js#L8810) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getVerifiedMCGGPlayers | 2x |
| 215 | [**`syncMCGGPlayers()`**](#syncmcggplayers) | [app.js:8818](app.js#L8818) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGPlayers | 8x |
| 216 | [**`findPrevious()`**](#findprevious) | [app.js:8830](app.js#L8830) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 217 | [**`mapPlayerObj()`**](#mapplayerobj) | [app.js:8842](app.js#L8842) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |
| 218 | [**`allocateLobbiesByCluster()`**](#allocatelobbiesbycluster) | [app.js:8861](app.js#L8861) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase ... | 3x |
| 219 | [**`shuffleMCGGPlayers()`**](#shufflemcggplayers) | [app.js:9036](app.js#L9036) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGGPlayers | 2x |
| 220 | [**`isMCGGLobbyPointsFull()`**](#ismcgglobbypointsfull) | [app.js:9053](app.js#L9053) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGLobbyPointsFull | 4x |
| 221 | [**`isMCGGQualificationFull()`**](#ismcggqualificationfull) | [app.js:9059](app.js#L9059) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3... | 11x |
| 222 | [**`isMCGGSemiFinalFull()`**](#ismcggsemifinalfull) | [app.js:9065](app.js#L9065) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGSemiFinalFull | 1x |
| 223 | [**`compareMCGGPlayers()`**](#comparemcggplayers) | [app.js:9077](app.js#L9077) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir ... | 0x |
| 224 | [**`syncMCGGSemiFinal()`**](#syncmcggsemifinal) | [app.js:9108](app.js#L9108) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGSemiFinal | 2x |
| 225 | [**`findPrevSemi()`**](#findprevsemi) | [app.js:9145](app.js#L9145) | 📦 Modul Aplikasi Umum | Preserve poin semifinal jika sudah ada | 1x |
| 226 | [**`mapSemiPlayer()`**](#mapsemiplayer) | [app.js:9153](app.js#L9153) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapSemiPlayer | 0x |
| 227 | [**`syncMCGGGrandFinal()`**](#syncmcgggrandfinal) | [app.js:9175](app.js#L9175) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final se... | 7x |
| 228 | [**`findPrevInArr()`**](#findprevinarr) | [app.js:9182](app.js#L9182) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevInArr | 1x |
| 229 | [**`mapGFPlayer()`**](#mapgfplayer) | [app.js:9191](app.js#L9191) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapGFPlayer | 4x |
| 230 | [**`updateMCGGRank()`**](#updatemcggrank) | [app.js:9259](app.js#L9259) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin... | 1x |
| 231 | [**`updateMCGGCommander()`**](#updatemcggcommander) | [app.js:9297](app.js#L9297) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui pilihan commander pemain dan memicu validasi duplikasi commande... | 1x |
| 232 | [**`updateMCGGPenalty()`**](#updatemcggpenalty) | [app.js:9332](app.js#L9332) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumul... | 1x |
| 233 | [**`renderLobbyCommanderDrawPanelHtml()`**](#renderlobbycommanderdrawpanelhtml) | [app.js:9371](app.js#L9371) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI) | 5x |
| 234 | [**`drawMatchPool()`**](#drawmatchpool) | [app.js:9621](app.js#L9621) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 1: Acak 8 Pool ... | 2x |
| 235 | [**`assignMatchPoolToPlayers()`**](#assignmatchpooltoplayers) | [app.js:9696](app.js#L9696) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 2: Pasangkan 8 ... | 2x |
| 236 | [**`toggleLockMatchDraw()`**](#togglelockmatchdraw) | [app.js:9747](app.js#L9747) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 3: Kunci Match ... | 1x |
| 237 | [**`nextMatchDraw()`**](#nextmatchdraw) | [app.js:9774](app.js#L9774) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 4: Lanjut ke Ma... | 1x |
| 238 | [**`drawMatchCommanders()`**](#drawmatchcommanders) | [app.js:9791](app.js#L9791) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Backward compatibility helper | 3x |
| 239 | [**`switchLobbyDrawView()`**](#switchlobbydrawview) | [app.js:9797](app.js#L9797) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk switchLobbyDrawView | 5x |
| 240 | [**`resetLobbyDraw()`**](#resetlobbydraw) | [app.js:9803](app.js#L9803) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetLobbyDraw | 2x |
| 241 | [**`copyCommanderDrawText()`**](#copycommanderdrawtext) | [app.js:9824](app.js#L9824) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk... | 2x |
| 242 | [**`showMatch3DraftInfo()`**](#showmatch3draftinfo) | [app.js:9859](app.js#L9859) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk showMatch3DraftInfo | 1x |
| 243 | [**`changeCommanderDrawTarget()`**](#changecommanderdrawtarget) | [app.js:9870](app.js#L9870) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk changeCommanderDrawTarget | 1x |
| 244 | [**`setDrawTargetAndScroll()`**](#setdrawtargetandscroll) | [app.js:9877](app.js#L9877) | 🔧 Helper & UI Utility | Fungsi operasional untuk setDrawTargetAndScroll | 0x |
| 245 | [**`scrollToMCGGLobby()`**](#scrolltomcgglobby) | [app.js:9882](app.js#L9882) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk scrollToMCGGLobby | 3x |
| 246 | [**`renderMCGGLobbyAnchorBar()`**](#rendermcgglobbyanchorbar) | [app.js:9889](app.js#L9889) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbyAnchorBar | 2x |
| 247 | [**`renderMCGGLobbySelectOptions()`**](#rendermcgglobbyselectoptions) | [app.js:9925](app.js#L9925) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbySelectOptions | 3x |
| 248 | [**`renderMCGGTable()`**](#rendermcggtable) | [app.js:9968](app.js#L9968) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang... | 29x |
| 249 | [**`getLobbyShortLabel()`**](#getlobbyshortlabel) | [app.js:10025](app.js#L10025) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getLobbyShortLabel | 0x |
| 250 | [**`renderLobbyRowsHtml()`**](#renderlobbyrowshtml) | [app.js:10195](app.js#L10195) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderLobbyRowsHtml | 5x |
| 251 | [**`buildRoundCell()`**](#buildroundcell) | [app.js:10297](app.js#L10297) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk buildRoundCell | 3x |
| 252 | [**`buildPenaltySelect()`**](#buildpenaltyselect) | [app.js:10374](app.js#L10374) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk buildPenaltySelect | 1x |
| 253 | [**`loadSampleData()`**](#loadsampledata) | [app.js:10398](app.js#L10398) | 📦 Modul Aplikasi Umum | Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation... | 1x |
| 254 | [**`clearAllData()`**](#clearalldata) | [app.js:10602](app.js#L10602) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearAllData | 1x |
| 255 | [**`setMLBBViewMode()`**](#setmlbbviewmode) | [app.js:10681](app.js#L10681) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- TAMPILAN VIEW SWITCHER MLBB --- | 6x |
| 256 | [**`setMCGGViewMode()`**](#setmcggviewmode) | [app.js:10731](app.js#L10731) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | --- TAMPILAN VIEW SWITCHER MCGG --- | 4x |
| 257 | [**`togglePlayoffBracketCollapse()`**](#toggleplayoffbracketcollapse) | [app.js:10767](app.js#L10767) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk togglePlayoffBracketCollapse | 1x |
| 258 | [**`goToNextMLBBPlayoffPhase()`**](#gotonextmlbbplayoffphase) | [app.js:10779](app.js#L10779) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk goToNextMLBBPlayoffPhase | 2x |
| 259 | [**`setPlayoffBracketFilter()`**](#setplayoffbracketfilter) | [app.js:10803](app.js#L10803) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffBracketFilter | 2x |
| 260 | [**`togglePlayoffFullscreen()`**](#toggleplayofffullscreen) | [app.js:10810](app.js#L10810) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk togglePlayoffFullscreen | 1x |
| 261 | [**`renderSingleMatchNodeHtml()`**](#rendersinglematchnodehtml) | [app.js:10823](app.js#L10823) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderSingleMatchNodeHtml | 13x |
| 262 | [**`renderSvgConnectorColumn()`**](#rendersvgconnectorcolumn) | [app.js:10883](app.js#L10883) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderSvgConnectorColumn | 9x |
| 263 | [**`renderFullPlayoffBracketHtml()`**](#renderfullplayoffbrackethtml) | [app.js:10915](app.js#L10915) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderFullPlayoffBracketHtml | 2x |
| 264 | [**`selectMLBBStageNode()`**](#selectmlbbstagenode) | [app.js:11133](app.js#L11133) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk selectMLBBStageNode | 17x |
| 265 | [**`renderMLBBInteractiveHubUI()`**](#rendermlbbinteractivehubui) | [app.js:11144](app.js#L11144) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBInteractiveHubUI | 24x |
| 266 | [**`renderMLBBDetailPanelContent()`**](#rendermlbbdetailpanelcontent) | [app.js:11366](app.js#L11366) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBDetailPanelContent | 1x |
| 267 | [**`selectMCGGFlowNode()`**](#selectmcggflownode) | [app.js:11764](app.js#L11764) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | ---------------------------------------------------------------------------... | 7x |
| 268 | [**`renderMCGGInteractiveHubUI()`**](#rendermcgginteractivehubui) | [app.js:11769](app.js#L11769) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGInteractiveHubUI | 5x |
| 269 | [**`renderMCGGDetailPanelContent()`**](#rendermcggdetailpanelcontent) | [app.js:11897](app.js#L11897) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGDetailPanelContent | 1x |
| 270 | [**`shuffleMCGG32Besar()`**](#shufflemcgg32besar) | [app.js:12106](app.js#L12106) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGG32Besar | 1x |
| 271 | [**`getTargetSpreadsheet()`**](#gettargetspreadsheet) | [google_apps_script.js:38](google_apps_script.js#L38) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet b... | 5x |
| 272 | [**`safeSetSharing()`**](#safesetsharing) | [google_apps_script.js:58](google_apps_script.js#L58) | ⚙️ Backend Apps Script Utility | Mengatur permission sharing secara aman. Menghindari error 'Access denied: ... | 6x |
| 273 | [**`getOrCreateUploadFolder()`**](#getorcreateuploadfolder) | [google_apps_script.js:76](google_apps_script.js#L76) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat folder upload utama secara andal. Jika TARGET_FOLD... | 4x |
| 274 | [**`testDriveAuth()`**](#testdriveauth) | [google_apps_script.js:115](google_apps_script.js#L115) | ⚙️ Backend Apps Script Utility | FUNGSI UJI OTORISASI GOOGLE DRIVE & SPREADSHEET PENTING: Pilih fungsi 'test... | 0x |
| 275 | [**`getOrCreateSubFolder()`**](#getorcreatesubfolder) | [google_apps_script.js:150](google_apps_script.js#L150) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat subfolder tim/kategori secara andal. / | 2x |
| 276 | [**`relinkExistingFailedIDCards()`**](#relinkexistingfailedidcards) | [google_apps_script.js:194](google_apps_script.js#L194) | ⚙️ Backend Apps Script Utility | FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ... | 0x |
| 277 | [**`ensureRelationalSheetsExist()`**](#ensurerelationalsheetsexist) | [google_apps_script.js:313](google_apps_script.js#L313) | 🗄️ Google Sheets Schema & Master Data | Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Paren... | 2x |
| 278 | [**`getMlbbTimListing()`**](#getmlbbtimlisting) | [google_apps_script.js:361](google_apps_script.js#L361) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' A... | 3x |
| 279 | [**`getMlbbPesertaListing()`**](#getmlbbpesertalisting) | [google_apps_script.js:459](google_apps_script.js#L459) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Pes... | 2x |
| 280 | [**`getMcggListing()`**](#getmcgglisting) | [google_apps_script.js:527](google_apps_script.js#L527) | 🗄️ Google Sheets Schema & Master Data | Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan... | 3x |
| 281 | [**`doGet()`**](#doget) | [google_apps_script.js:661](google_apps_script.js#L661) | 🌐 Web API & Endpoint Webhook | 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE | 0x |
| 282 | [**`helperParseRank()`**](#helperparserank) | [google_apps_script.js:875](google_apps_script.js#L875) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk helperParseRank | 3x |
| 283 | [**`doPost()`**](#dopost) | [google_apps_script.js:1105](google_apps_script.js#L1105) | 🌐 Web API & Endpoint Webhook | 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE | 1x |
| 284 | [**`saveBase64Image()`**](#savebase64image) | [google_apps_script.js:1157](google_apps_script.js#L1157) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk saveBase64Image | 4x |
| 285 | [**`getOrCreateSheet()`**](#getorcreatesheet) | [google_apps_script.js:1875](google_apps_script.js#L1875) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. / | 0x |
| 286 | [**`safeBatchResizeColumns()`**](#safebatchresizecolumns) | [google_apps_script.js:1887](google_apps_script.js#L1887) | ⚙️ Backend Apps Script Utility | Helper efisien untuk auto-resize banyak kolom dalam 1 panggilan RPC Google ... | 3x |
| 287 | [**`syncDedicatedTournamentSheets()`**](#syncdedicatedtournamentsheets) | [google_apps_script.js:1906](google_apps_script.js#L1906) | 🗄️ Google Sheets Schema & Master Data | Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah ... | 8x |
| 288 | [**`fmtRank()`**](#fmtrank) | [google_apps_script.js:2226](google_apps_script.js#L2226) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk fmtRank | 3x |
| 289 | [**`syncListBagan()`**](#synclistbagan) | [google_apps_script.js:2293](google_apps_script.js#L2293) | ⚙️ Backend Apps Script Utility | Wrapper kompatibilitas untuk pemicu manual / lama / | 1x |
| 290 | [**`syncListPoint()`**](#synclistpoint) | [google_apps_script.js:2297](google_apps_script.js#L2297) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPoint | 1x |
| 291 | [**`syncListPointAndCommanderMCGG()`**](#synclistpointandcommandermcgg) | [google_apps_script.js:2301](google_apps_script.js#L2301) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPointAndCommanderMCGG | 1x |
| 292 | [**`createOrUpdateAllTournamentSheets()`**](#createorupdatealltournamentsheets) | [google_apps_script.js:2305](google_apps_script.js#L2305) | 🗄️ Google Sheets Schema & Master Data | Fungsi operasional untuk createOrUpdateAllTournamentSheets | 1x |
| 293 | [**`runTest()`**](#runtest) | [functional_tests.js:26](functional_tests.js#L26) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runTest | 75x |
| 294 | [**`runAsyncTest()`**](#runasynctest) | [functional_tests.js:37](functional_tests.js#L37) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk runAsyncTest | 4x |
| 295 | [**`sanitizeNip()`**](#sanitizenip) | [functional_tests.js:85](functional_tests.js#L85) | 🔧 Helper & UI Utility | Fungsi operasional untuk sanitizeNip | 3x |
| 296 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [functional_tests.js:94](functional_tests.js#L94) | 🔧 Helper & UI Utility | Fungsi operasional untuk formatDriveImageUrl | 9x |
| 297 | [**`validateRegistration()`**](#validateregistration) | [functional_tests.js:181](functional_tests.js#L181) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk validateRegistration | 7x |
| 298 | [**`runLiveIntegrationTests()`**](#runliveintegrationtests) | [functional_tests.js:363](functional_tests.js#L363) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runLiveIntegrationTests | 1x |
| 299 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:890](functional_tests.js#L890) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 300 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:896](functional_tests.js#L896) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 301 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:900](functional_tests.js#L900) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 4x |
| 302 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:946](functional_tests.js#L946) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 303 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:952](functional_tests.js#L952) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 304 | [**`findPrevious()`**](#findprevious) | [functional_tests.js:1085](functional_tests.js#L1085) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 305 | [**`mapPlayerObj()`**](#mapplayerobj) | [functional_tests.js:1087](functional_tests.js#L1087) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |

---

## 🔍 Rincian Lengkap Fungsi dan Lokasi Pemanggilan

### ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti)

<a id="setmcggstagefilter"></a>
#### `setMCGGStageFilter(stage)`

- **Definisi:** [`app.js:2`](app.js#L2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10044`](app.js#L10044) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_1_QUAL' ? 'active' : ''}`
  - [`app.js:10047`](app.js#L10047) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_2_SEMI' ? 'active' : ''}`
  - [`app.js:10050`](app.js#L10050) — di dalam fungsi `renderMCGGTable()`
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
  - [`app.js:10062`](app.js#L10062) — di dalam fungsi `renderMCGGTable()`
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
  - [`app.js:10065`](app.js#L10065) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:867`](functional_tests.js#L867) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMCGGGroupPage()'), 'Harus ada fungsi nextMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="gotomcgggrouppage"></a>
#### `goToMCGGGroupPage(pg)`

- **Definisi:** [`app.js:68`](app.js#L68)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10034`](app.js#L10034) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${p === mcggGroupPageIndex ? 'active' : ''}" onclick=`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="togglemcgglayoutmode"></a>
#### `toggleMCGGLayoutMode()`

- **Definisi:** [`app.js:73`](app.js#L73)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderformattedname"></a>
#### `getCommanderFormattedName(cmd)`

- **Definisi:** [`app.js:518`](app.js#L518)
- **Deskripsi:** Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika tidak ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:9844`](app.js#L9844) — di dalam fungsi `copyCommanderDrawText()`
    `const cmdName = getCommanderFormattedName(item.commander);`
  - [`app.js:10307`](app.js#L10307) — di dalam fungsi `buildRoundCell()`
    `const formattedName = getCommanderFormattedName(selectedCmd);`
  - [`app.js:10333`](app.js#L10333) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`app.js:10342`](app.js#L10342) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`functional_tests.js:706`](functional_tests.js#L706) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getCommanderFormattedName('), 'Harus ada fungsi getCommanderFormat`

<a id="rendercommandercircleshtml"></a>
#### `renderCommanderCirclesHtml(cmd, size)`

- **Definisi:** [`app.js:529`](app.js#L529)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10308`](app.js#L10308) — di dalam fungsi `buildRoundCell()`
    `const circlesHtml = renderCommanderCirclesHtml(selectedCmd, 24);`
  - [`app.js:10356`](app.js#L10356) — di dalam fungsi `buildRoundCell()`
    `? renderCommanderCirclesHtml(selectedCmd, 22)`
  - [`functional_tests.js:707`](functional_tests.js#L707) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderCommanderCirclesHtml('), 'Harus ada fungsi renderCommanderCi`

<a id="rendercommandercardvisualhtml"></a>
#### `renderCommanderCardVisualHtml(cmd)`

- **Definisi:** [`app.js:558`](app.js#L558)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9562`](app.js#L9562) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `${renderCommanderCardVisualHtml(item.commander)}`

<a id="resetmcggpointsanddraw"></a>
#### `resetMCGGPointsAndDraw()`

- **Definisi:** [`app.js:2295`](app.js#L2295)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:595`](index.html#L595) — Event `onclick`
    `<button id="btnResetMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; border-c`
  - [`functional_tests.js:837`](functional_tests.js#L837) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMCGGPointsAndDraw()'), 'Harus memiliki resetMCGGPointsAndDraw`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handlemcggnameinput"></a>
#### `handleMcggNameInput(val)`

- **Definisi:** [`app.js:2653`](app.js#L2653)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:266`](index.html#L266) — Event `oninput`
    `<input type="text" id="mcgg_name" oninput="handleMcggNameInput(this.value)" placeholder="Masukkan na`
  - [`functional_tests.js:173`](functional_tests.js#L173) — pada skenario pengujian
    `assert(appCode.includes('function handleMcggNameInput('), 'Harus ada handler handleMcggNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="togglelockmcgglobbies"></a>
#### `toggleLockMCGGLobbies()`

- **Definisi:** [`app.js:4789`](app.js#L4789)
- **Deskripsi:** Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:594`](index.html#L594) — Event `onclick`
    `<button id="btnLockMCGGLobbies" class="btn btn-outline" style="display: none; font-size: 0.85rem;" o`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="validatemcggduplicatecommander"></a>
#### `validateMCGGDuplicateCommander(lobbyKey, playerIdx)`

- **Definisi:** [`app.js:4811`](app.js#L4811)
- **Deskripsi:** 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9325`](app.js#L9325) — di dalam fungsi `updateMCGGCommander()`
    `validateMCGGDuplicateCommander(targetLobby, idx);`
  - [`app.js:9732`](app.js#L9732) — di dalam fungsi `assignMatchPoolToPlayers()`
    `validateMCGGDuplicateCommander(lobbyKey, i);`
  - [`functional_tests.js:765`](functional_tests.js#L765) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function validateMCGGDuplicateCommander('), 'Harus ada fungsi validateMCGGD`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="changemcgglobby"></a>
#### `changeMCGGLobby()`

- **Definisi:** [`app.js:8732`](app.js#L8732)
- **Deskripsi:** MCGG MULTI-LOBBY STANDINGS
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderbyid"></a>
#### `getCommanderById(id)`

- **Definisi:** [`app.js:8738`](app.js#L8738)
- **Deskripsi:** Mencari objek data commander dari master list berdasarkan ID, nama hero, atau alter name.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10302`](app.js#L10302) — di dalam fungsi `buildRoundCell()`
    `const selectedCmd = getCommanderById(selectedCmdId);`

<a id="updatecommanderpoolfromsetup"></a>
#### `updateCommanderPoolFromSetup(setupList)`

- **Definisi:** [`app.js:8751`](app.js#L8751)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1474`](app.js#L1474) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCommanderPoolFromSetup(data.mcggCommanderSetup);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getverifiedmcggplayers"></a>
#### `getVerifiedMCGGPlayers()`

- **Definisi:** [`app.js:8810`](app.js#L8810)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8819`](app.js#L8819) — di dalam fungsi `syncMCGGPlayers()`
    `let verified = getVerifiedMCGGPlayers();`
  - [`functional_tests.js:611`](functional_tests.js#L611) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMCGGPlayers()'), 'Harus ada getVerifiedMCGGPlayers()');`

<a id="syncmcggplayers"></a>
#### `syncMCGGPlayers(doShuffle = false)`

- **Definisi:** [`app.js:8818`](app.js#L8818)
- **Titik Pemanggilan (8 lokasi):**
  - [`index.html:592`](index.html#L592) — Event `onclick`
    `<button id="adminSyncMCGG" class="btn btn-primary" style="display: none; font-size: 0.85rem;" onclic`
  - [`app.js:1483`](app.js#L1483) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `syncMCGGPlayers();`
  - [`app.js:3226`](app.js#L3226) — di dalam fungsi `setParticipantStatus()`
    `syncMCGGPlayers();`
  - [`app.js:3279`](app.js#L3279) — di dalam fungsi `deleteParticipant()`
    `syncMCGGPlayers();`
  - [`app.js:3504`](app.js#L3504) — di dalam fungsi `saveParticipantEdit()`
    `syncMCGGPlayers();`
  - [`app.js:9049`](app.js#L9049) — di dalam fungsi `shuffleMCGGPlayers()`
    `syncMCGGPlayers(true);`
  - [`app.js:10599`](app.js#L10599) — di dalam fungsi `loadSampleData()`
    `syncMCGGPlayers();`
  - [`app.js:10614`](app.js#L10614) — di dalam fungsi `clearAllData()`
    `syncMCGGPlayers();`
- **Memanggil Fungsi Internal:** [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`findPrevious()`](#findprevious), [`getDepartmentCluster()`](#getdepartmentcluster), [`mapPlayerObj()`](#mapplayerobj), [`syncMCGGSemiFinal()`](#syncmcggsemifinal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`renderMCGGTable()`](#rendermcggtable), [`allocateLobbiesByCluster()`](#allocatelobbiesbycluster)

<a id="allocatelobbiesbycluster"></a>
#### `allocateLobbiesByCluster(playerList, lobbyKeys, targetCaps)`

- **Definisi:** [`app.js:8861`](app.js#L8861)
- **Deskripsi:** Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase Awal)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9003`](app.js#L9003) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, ['LOBBY_A', 'LOBBY_B'], [countA, countB]);`
  - [`app.js:9020`](app.js#L9020) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`
  - [`functional_tests.js:1094`](functional_tests.js#L1094) — pada skenario pengujian
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`

<a id="shufflemcggplayers"></a>
#### `shuffleMCGGPlayers()`

- **Definisi:** [`app.js:9036`](app.js#L9036)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:593`](index.html#L593) — Event `onclick`
    `<button id="adminShuffleMCGG" class="btn btn-gold" style="display: none; font-size: 0.85rem;" onclic`
  - [`functional_tests.js:651`](functional_tests.js#L651) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function shuffleMCGGPlayers()'), 'Harus ada fungsi shuffleMCGGPlayers()');`
- **Memanggil Fungsi Internal:** [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="ismcgglobbypointsfull"></a>
#### `isMCGGLobbyPointsFull(lobbyKey)`

- **Definisi:** [`app.js:9053`](app.js#L9053)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:9062`](app.js#L9062) — di dalam fungsi `isMCGGQualificationFull()`
    `return qualKeys.every(k => isMCGGLobbyPointsFull(k));`
  - [`app.js:9067`](app.js#L9067) — di dalam fungsi `isMCGGSemiFinalFull()`
    `return isMCGGLobbyPointsFull('SEMI_A') && isMCGGLobbyPointsFull('SEMI_B');`
  - [`app.js:10250`](app.js#L10250) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isLobbyFull = isMCGGLobbyPointsFull('LOBBY_A');`
  - [`app.js:10263`](app.js#L10263) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isThisLobbyFull = isMCGGLobbyPointsFull(lobbyKey);`

<a id="ismcggqualificationfull"></a>
#### `isMCGGQualificationFull()`

- **Definisi:** [`app.js:9059`](app.js#L9059)
- **Deskripsi:** Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3 ronde).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:9112`](app.js#L9112) — di dalam fungsi `syncMCGGSemiFinal()`
    `const isQualDone = isMCGGQualificationFull();`
  - [`app.js:9236`](app.js#L9236) — di dalam fungsi `syncMCGGGrandFinal()`
    `const isFull = isMCGGQualificationFull();`
  - [`app.js:9275`](app.js#L9275) — di dalam fungsi `updateMCGGRank()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9313`](app.js#L9313) — di dalam fungsi `updateMCGGCommander()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9346`](app.js#L9346) — di dalam fungsi `updateMCGGPenalty()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9632`](app.js#L9632) — di dalam fungsi `drawMatchPool()`
    `if (lobbyKey === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9894`](app.js#L9894) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:9926`](app.js#L9926) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:9992`](app.js#L9992) — di dalam fungsi `renderMCGGTable()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10197`](app.js#L10197) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`functional_tests.js:625`](functional_tests.js#L625) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isMCGGQualificationFull()'), 'app.js harus memeriksa apakah poin kualifikas`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="ismcggsemifinalfull"></a>
#### `isMCGGSemiFinalFull()`

- **Definisi:** [`app.js:9065`](app.js#L9065)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9206`](app.js#L9206) — di dalam fungsi `syncMCGGGrandFinal()`
    `const semiDone = isMCGGSemiFinalFull();`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="comparemcggplayers"></a>
#### `compareMCGGPlayers(a, b)`

- **Definisi:** [`app.js:9077`](app.js#L9077)
- **Deskripsi:** Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir (besar ke kecil) 2. Juara 1 / MVP Ronde (banyaknya finish posisi 1, besar ke kecil) 3. Top 4 Finish (banyaknya finish posisi 1-4, besar ke kecil) 4. Pengurangan Poin / Penalti (makin sering kena pengurangan makin bawah jika poin dkk sama: deductA - deductB) 5. Breakdown Posisi Finish Ronde 1 s/d 8 6. Nama Pemain (A-Z)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncmcggsemifinal"></a>
#### `syncMCGGSemiFinal()`

- **Definisi:** [`app.js:9108`](app.js#L9108)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8970`](app.js#L8970) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
  - [`app.js:9027`](app.js#L9027) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`findPrevSemi()`](#findprevsemi)

<a id="syncmcgggrandfinal"></a>
#### `syncMCGGGrandFinal()`

- **Definisi:** [`app.js:9175`](app.js#L9175)
- **Deskripsi:** Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final setelah ronde kualifikasi penuh.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:2329`](app.js#L2329) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `syncMCGGGrandFinal();`
  - [`app.js:8971`](app.js#L8971) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9004`](app.js#L9004) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9028`](app.js#L9028) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9290`](app.js#L9290) — di dalam fungsi `updateMCGGRank()`
    `syncMCGGGrandFinal();`
  - [`app.js:9361`](app.js#L9361) — di dalam fungsi `updateMCGGPenalty()`
    `syncMCGGGrandFinal();`
  - [`app.js:10099`](app.js#L10099) — di dalam fungsi `renderMCGGTable()`
    `syncMCGGGrandFinal();`
- **Memanggil Fungsi Internal:** [`findPrevInArr()`](#findprevinarr), [`isMCGGSemiFinalFull()`](#ismcggsemifinalfull), [`mapGFPlayer()`](#mapgfplayer), [`isMCGGQualificationFull()`](#ismcggqualificationfull)

<a id="updatemcggrank"></a>
#### `updateMCGGRank(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:9259`](app.js#L9259)
- **Deskripsi:** Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin otomatis (+4 s/d -4).
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10367`](app.js#L10367) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGRank('${lobbyKey}', ${originalIdx}, '${roundKey}', this.value)" style="p`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggcommander"></a>
#### `updateMCGGCommander(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:9297`](app.js#L9297)
- **Deskripsi:** Memperbarui pilihan commander pemain dan memicu validasi duplikasi commander ronde 2.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10363`](app.js#L10363) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGCommander('${lobbyKey}', ${originalIdx}, '${cmdKey}', this.value)" style`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggpenalty"></a>
#### `updateMCGGPenalty(arg1, arg2, arg3)`

- **Definisi:** [`app.js:9332`](app.js#L9332)
- **Deskripsi:** Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumulasi poin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10387`](app.js#L10387) — di dalam fungsi `buildPenaltySelect()`
    `<select onchange="updateMCGGPenalty('${lobbyKey}', ${originalIdx}, this.value)" style="padding: 0.25`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="renderlobbycommanderdrawpanelhtml"></a>
#### `renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)`

- **Definisi:** [`app.js:9371`](app.js#L9371)
- **Deskripsi:** MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10167`](app.js#L10167) — di dalam fungsi `renderMCGGTable()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}`
  - [`app.js:11926`](app.js#L11926) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`app.js:12031`](app.js#L12031) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`functional_tests.js:798`](functional_tests.js#L798) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderLobbyCommanderDrawPanelHtml('), 'Harus memiliki generator pa`
  - [`functional_tests.js:802`](functional_tests.js#L802) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}'), 'Panel `
- **Memanggil Fungsi Internal:** [`switchLobbyDrawView()`](#switchlobbydrawview), [`copyCommanderDrawText()`](#copycommanderdrawtext), [`resetLobbyDraw()`](#resetlobbydraw), [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers), [`toggleLockMatchDraw()`](#togglelockmatchdraw), [`nextMatchDraw()`](#nextmatchdraw), [`showMatch3DraftInfo()`](#showmatch3draftinfo), [`renderCommanderCardVisualHtml()`](#rendercommandercardvisualhtml), [`escapeHtml()`](#escapehtml)

<a id="drawmatchcommanders"></a>
#### `drawMatchCommanders(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9791`](app.js#L9791)
- **Deskripsi:** Backward compatibility helper
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10161`](app.js#L10161) — di dalam fungsi `renderMCGGTable()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.3rem 0.65rem; ${(!isRegistration`
  - [`functional_tests.js:741`](functional_tests.js#L741) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function drawMatchCommanders('), 'drawMatchCommanders harus tersedia');`
  - [`functional_tests.js:799`](functional_tests.js#L799) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('drawMatchCommanders(matchNum, targetLobbyKey)'), 'drawMatchCommanders harus`
- **Memanggil Fungsi Internal:** [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers)

<a id="switchlobbydrawview"></a>
#### `switchLobbyDrawView(lobbyKey, matchNum)`

- **Definisi:** [`app.js:9797`](app.js#L9797)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:9419`](app.js#L9419) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 1 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:9422`](app.js#L9422) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 2 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:9474`](app.js#L9474) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:9477`](app.js#L9477) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`functional_tests.js:800`](functional_tests.js#L800) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function switchLobbyDrawView('), 'Harus memiliki fungsi switch view match 1`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="resetlobbydraw"></a>
#### `resetLobbyDraw(lobbyKey)`

- **Definisi:** [`app.js:9803`](app.js#L9803)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9428`](app.js#L9428) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem; font-size:0.75rem; color:var(--yokke`
  - [`functional_tests.js:801`](functional_tests.js#L801) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetLobbyDraw('), 'Harus memiliki fungsi reset undian per-lobi re`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="copycommanderdrawtext"></a>
#### `copyCommanderDrawText(lobbyKey)`

- **Definisi:** [`app.js:9824`](app.js#L9824)
- **Deskripsi:** Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk dibagikan ke WhatsApp grup.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9425`](app.js#L9425) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem; margin-left:auto;`
  - [`app.js:9480`](app.js#L9480) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCom`
- **Memanggil Fungsi Internal:** [`getCommanderFormattedName()`](#getcommanderformattedname)

<a id="changecommanderdrawtarget"></a>
#### `changeCommanderDrawTarget(val)`

- **Definisi:** [`app.js:9870`](app.js#L9870)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9878`](app.js#L9878) — di dalam fungsi `setDrawTargetAndScroll()`
    `changeCommanderDrawTarget(lobbyKey);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="scrolltomcgglobby"></a>
#### `scrollToMCGGLobby(lobbyKey)`

- **Definisi:** [`app.js:9882`](app.js#L9882)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9879`](app.js#L9879) — di dalam fungsi `setDrawTargetAndScroll()`
    `scrollToMCGGLobby(lobbyKey);`
  - [`app.js:9919`](app.js#L9919) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`functional_tests.js:699`](functional_tests.js#L699) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function scrollToMCGGLobby('), 'app.js harus menyediakan fungsi scrollToMCG`

<a id="rendermcgglobbyanchorbar"></a>
#### `renderMCGGLobbyAnchorBar()`

- **Definisi:** [`app.js:9889`](app.js#L9889)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9965`](app.js#L9965) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `renderMCGGLobbyAnchorBar();`
  - [`functional_tests.js:697`](functional_tests.js#L697) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderMCGGLobbyAnchorBar('), 'app.js harus memiliki generator rend`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="rendermcgglobbyselectoptions"></a>
#### `renderMCGGLobbySelectOptions()`

- **Definisi:** [`app.js:9925`](app.js#L9925)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8973`](app.js#L8973) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:9032`](app.js#L9032) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:9989`](app.js#L9989) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGLobbySelectOptions();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar)

<a id="rendermcggtable"></a>
#### `renderMCGGTable()`

- **Definisi:** [`app.js:9968`](app.js#L9968)
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
  - [`app.js:912`](app.js#L912) — di dalam fungsi `bypassLoaderWithCache()`
    `renderMCGGTable();`
  - [`app.js:1462`](app.js#L1462) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderMCGGTable();`
  - [`app.js:2193`](app.js#L2193) — di dalam fungsi `verifyAdminPin()`
    `renderMCGGTable();`
  - [`app.js:2205`](app.js#L2205) — di dalam fungsi `logoutAdmin()`
    `renderMCGGTable();`
  - [`app.js:2290`](app.js#L2290) — di dalam fungsi `toggleRegistrationStatus()`
    `renderMCGGTable();`
  - [`app.js:2332`](app.js#L2332) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `renderMCGGTable();`
  - [`app.js:4827`](app.js#L4827) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `renderMCGGTable();`
  - [`app.js:8735`](app.js#L8735) — di dalam fungsi `changeMCGGLobby()`
    `renderMCGGTable();`
  - [`app.js:8806`](app.js#L8806) — di dalam fungsi `updateCommanderPoolFromSetup()`
    `renderMCGGTable();`
  - [`app.js:8974`](app.js#L8974) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:9033`](app.js#L9033) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:9294`](app.js#L9294) — di dalam fungsi `updateMCGGRank()`
    `renderMCGGTable();`
  - [`app.js:9329`](app.js#L9329) — di dalam fungsi `updateMCGGCommander()`
    `renderMCGGTable();`
  - [`app.js:9365`](app.js#L9365) — di dalam fungsi `updateMCGGPenalty()`
    `renderMCGGTable();`
  - [`app.js:9690`](app.js#L9690) — di dalam fungsi `drawMatchPool()`
    `renderMCGGTable();`
  - [`app.js:9741`](app.js#L9741) — di dalam fungsi `assignMatchPoolToPlayers()`
    `renderMCGGTable();`
  - [`app.js:9761`](app.js#L9761) — di dalam fungsi `toggleLockMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:9787`](app.js#L9787) — di dalam fungsi `nextMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:9800`](app.js#L9800) — di dalam fungsi `switchLobbyDrawView()`
    `renderMCGGTable();`
  - [`app.js:9820`](app.js#L9820) — di dalam fungsi `resetLobbyDraw()`
    `renderMCGGTable();`
  - [`app.js:9874`](app.js#L9874) — di dalam fungsi `changeCommanderDrawTarget()`
    `renderMCGGTable();`
  - [`app.js:10613`](app.js#L10613) — di dalam fungsi `clearAllData()`
    `renderMCGGTable();`
  - [`app.js:10636`](app.js#L10636) — cakupan global / event handler
    `renderMCGGTable();`
  - [`app.js:10757`](app.js#L10757) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGTable();`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`goToMCGGGroupPage()`](#gotomcgggrouppage), [`setMCGGStageFilter()`](#setmcggstagefilter), [`prevMCGGGroupPage()`](#prevmcgggrouppage), [`nextMCGGGroupPage()`](#nextmcgggrouppage), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`drawMatchCommanders()`](#drawmatchcommanders), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml)

<a id="getlobbyshortlabel"></a>
#### `getLobbyShortLabel(k)`

- **Definisi:** [`app.js:10025`](app.js#L10025)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="renderlobbyrowshtml"></a>
#### `renderLobbyRowsHtml(list, lobbyKey, isSingleLobby)`

- **Definisi:** [`app.js:10195`](app.js#L10195)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10086`](app.js#L10086) — di dalam fungsi `renderMCGGTable()`
    `legacyTbody.innerHTML = renderLobbyRowsHtml(singleList, currentMCGGLobby, isSingleLobby);`
  - [`app.js:10147`](app.js#L10147) — di dalam fungsi `renderMCGGTable()`
    `const rowsHtml = renderLobbyRowsHtml(currentList, lobbyKey, isSingleLobby);`
  - [`app.js:11947`](app.js#L11947) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:12049`](app.js#L12049) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:12096`](app.js#L12096) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, 'GRAND_FINAL', false)}`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull), [`escapeHtml()`](#escapehtml), [`buildRoundCell()`](#buildroundcell), [`buildPenaltySelect()`](#buildpenaltyselect)

<a id="buildpenaltyselect"></a>
#### `buildPenaltySelect(player, targetLobby)`

- **Definisi:** [`app.js:10374`](app.js#L10374)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10289`](app.js#L10289) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td style="text-align: center;">${buildPenaltySelect(p, lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`updateMCGGPenalty()`](#updatemcggpenalty)

<a id="setmcggviewmode"></a>
#### `setMCGGViewMode(mode)`

- **Definisi:** [`app.js:10731`](app.js#L10731)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MCGG ---
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:617`](index.html#L617) — Event `onclick`
    `<button type="button" id="btnViewMcggHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:620`](index.html#L620) — Event `onclick`
    `<button type="button" id="btnViewMcggLobbies" class="btn btn-outline" style="font-size: 0.8rem; padd`
  - [`app.js:2540`](app.js#L2540) — di dalam fungsi `switchTab()`
    `setMCGGViewMode('HUB');`
  - [`functional_tests.js:1171`](functional_tests.js#L1171) — pada skenario pengujian
    `assert(appCode.includes('function setMCGGViewMode('), 'app.js harus memiliki fungsi setMCGGViewMode'`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGTable()`](#rendermcggtable)

<a id="selectmcggflownode"></a>
#### `selectMCGGFlowNode(nodeKey)`

- **Definisi:** [`app.js:11764`](app.js#L11764)
- **Deskripsi:** ---------------------------------------------------------------------------- 2. MASTER-DETAIL INTERACTIVE HUB MCGG ----------------------------------------------------------------------------
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:11800`](app.js#L11800) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:11823`](app.js#L11823) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE2_WILDCARD' ? 'active' : ''}" oncl`
  - [`app.js:11833`](app.js#L11833) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:11854`](app.js#L11854) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_A' ? 'active' : ''}" onclic`
  - [`app.js:11858`](app.js#L11858) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_B' ? 'active' : ''}" onclic`
  - [`app.js:11878`](app.js#L11878) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'STAGE4_GRAND_FINAL' ? 'active'`
  - [`functional_tests.js:1173`](functional_tests.js#L1173) — pada skenario pengujian
    `assert(appCode.includes('function selectMCGGFlowNode('), 'app.js harus memiliki selectMCGGFlowNode')`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

<a id="rendermcgginteractivehubui"></a>
#### `renderMCGGInteractiveHubUI()`

- **Definisi:** [`app.js:11769`](app.js#L11769)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:9982`](app.js#L9982) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:10750`](app.js#L10750) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:11766`](app.js#L11766) — di dalam fungsi `selectMCGGFlowNode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:12111`](app.js#L12111) — di dalam fungsi `shuffleMCGG32Besar()`
    `renderMCGGInteractiveHubUI();`
  - [`functional_tests.js:1172`](functional_tests.js#L1172) — pada skenario pengujian
    `assert(appCode.includes('function renderMCGGInteractiveHubUI()'), 'app.js harus memiliki renderMCGGI`
- **Memanggil Fungsi Internal:** [`selectMCGGFlowNode()`](#selectmcggflownode), [`renderMCGGDetailPanelContent()`](#rendermcggdetailpanelcontent)

<a id="rendermcggdetailpanelcontent"></a>
#### `renderMCGGDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:11897`](app.js#L11897)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11891`](app.js#L11891) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `rightHtml += renderMCGGDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`shuffleMCGG32Besar()`](#shufflemcgg32besar)

<a id="shufflemcgg32besar"></a>
#### `shuffleMCGG32Besar()`

- **Definisi:** [`app.js:12106`](app.js#L12106)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11991`](app.js#L11991) — di dalam fungsi `renderMCGGDetailPanelContent()`
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
  - [`app.js:6304`](app.js#L6304) — di dalam fungsi `renderGroupStageUI()`
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
  - [`app.js:6307`](app.js#L6307) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:848`](functional_tests.js#L848) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMLBBGroupPage()'), 'Harus ada fungsi nextMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="gotomlbbgrouppage"></a>
#### `goToMLBBGroupPage(pg)`

- **Definisi:** [`app.js:27`](app.js#L27)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6295`](app.js#L6295) — di dalam fungsi `renderGroupStageUI()`
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

- **Definisi:** [`app.js:3763`](app.js#L3763)
- **Deskripsi:** TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3779`](app.js#L3779) — di dalam fungsi `getActiveMLBBFormat()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:4685`](app.js#L4685) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:5068`](app.js#L5068) — di dalam fungsi `generateBracket()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:5397`](app.js#L5397) — di dalam fungsi `generateGroupStage()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`functional_tests.js:576`](functional_tests.js#L576) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMLBBTeams()'), 'Harus ada fungsi getVerifiedMLBBTeams()`

<a id="getactivemlbbformat"></a>
#### `getActiveMLBBFormat()`

- **Definisi:** [`app.js:3771`](app.js#L3771)
- **Deskripsi:** Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N >= 12 tim).
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5404`](app.js#L5404) — di dalam fungsi `generateGroupStage()`
    `const activeFormat = getActiveMLBBFormat();`
  - [`functional_tests.js:577`](functional_tests.js#L577) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getActiveMLBBFormat()'), 'Harus ada fungsi getActiveMLBBFormat()')`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="rendercurrentmlbbformat"></a>
#### `renderCurrentMLBBFormat()`

- **Definisi:** [`app.js:3807`](app.js#L3807)
- **Titik Pemanggilan (20 lokasi):**
  - [`app.js:895`](app.js#L895) — di dalam fungsi `confirmResetBaganWithPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:911`](app.js#L911) — di dalam fungsi `bypassLoaderWithCache()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1482`](app.js#L1482) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2192`](app.js#L2192) — di dalam fungsi `verifyAdminPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2204`](app.js#L2204) — di dalam fungsi `logoutAdmin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2289`](app.js#L2289) — di dalam fungsi `toggleRegistrationStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3225`](app.js#L3225) — di dalam fungsi `setParticipantStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3278`](app.js#L3278) — di dalam fungsi `deleteParticipant()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3503`](app.js#L3503) — di dalam fungsi `saveParticipantEdit()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3803`](app.js#L3803) — di dalam fungsi `changeTournamentFormat()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3874`](app.js#L3874) — di dalam fungsi `toggleLockMLBBGroup()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3958`](app.js#L3958) — di dalam fungsi `proceedToMLBBStage2()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4000`](app.js#L4000) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderCurrentMLBBFormat === 'function') renderCurrentMLBBFormat();`
  - [`app.js:4056`](app.js#L4056) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4441`](app.js#L4441) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4766`](app.js#L4766) — di dalam fungsi `resetMLBBToStage1()`
    `renderCurrentMLBBFormat();`
  - [`app.js:10598`](app.js#L10598) — di dalam fungsi `loadSampleData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:10612`](app.js#L10612) — di dalam fungsi `clearAllData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:10635`](app.js#L10635) — cakupan global / event handler
    `renderCurrentMLBBFormat();`
  - [`app.js:10790`](app.js#L10790) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `renderCurrentMLBBFormat();`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="togglelockmlbbgroup"></a>
#### `toggleLockMLBBGroup()`

- **Definisi:** [`app.js:3858`](app.js#L3858)
- **Deskripsi:** 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:484`](index.html#L484) — Event `onclick`
    `<button id="btnLockMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="isallmlbbgroupmatchesfinished"></a>
#### `isAllMLBBGroupMatchesFinished()`

- **Definisi:** [`app.js:3878`](app.js#L3878)
- **Deskripsi:** Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan memiliki pemenang.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3939`](app.js#L3939) — di dalam fungsi `proceedToMLBBStage2()`
    `if (!isAllMLBBGroupMatchesFinished()) {`
  - [`functional_tests.js:752`](functional_tests.js#L752) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function isAllMLBBGroupMatchesFinished()'), 'Harus ada fungsi isAllMLBBGrou`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="evaluatemlbbtiebreaker"></a>
#### `evaluateMLBBTieBreaker()`

- **Definisi:** [`app.js:3889`](app.js#L3889)
- **Deskripsi:** Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosan babak Playoff.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3943`](app.js#L3943) — di dalam fungsi `proceedToMLBBStage2()`
    `if (evaluateMLBBTieBreaker()) {`
  - [`functional_tests.js:759`](functional_tests.js#L759) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function evaluateMLBBTieBreaker()'), 'Harus ada fungsi evaluateMLBBTieBreak`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`saveStageStateLocal()`](#savestagestatelocal)

<a id="resolvemlbbtiebreaker"></a>
#### `resolveMLBBTieBreaker(winnerTeam)`

- **Definisi:** [`app.js:3914`](app.js#L3914)
- **Deskripsi:** Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan +1 poin penentu ke klasemen.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6472`](app.js#L6472) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:6473`](app.js#L6473) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`functional_tests.js:760`](functional_tests.js#L760) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resolveMLBBTieBreaker('), 'Harus ada fungsi resolveMLBBTieBreaker'`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="proceedtomlbbstage2"></a>
#### `proceedToMLBBStage2()`

- **Definisi:** [`app.js:3933`](app.js#L3933)
- **Deskripsi:** Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Bagan Playoff).
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:485`](index.html#L485) — Event `onclick`
    `<button id="btnProceedMLBBStage2" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`app.js:8625`](app.js#L8625) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: var(--`
  - [`functional_tests.js:753`](functional_tests.js#L753) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function proceedToMLBBStage2()'), 'Harus ada fungsi proceedToMLBBStage2');`
- **Memanggil Fungsi Internal:** [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`renderGroupStageUI()`](#rendergroupstageui), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket)

<a id="refreshandscrolltoplayoffbracket"></a>
#### `refreshAndScrollToPlayoffBracket()`

- **Definisi:** [`app.js:3966`](app.js#L3966)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3963`](app.js#L3963) — di dalam fungsi `proceedToMLBBStage2()`
    `refreshAndScrollToPlayoffBracket();`
  - [`app.js:4061`](app.js#L4061) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `refreshAndScrollToPlayoffBracket();`
  - [`app.js:10797`](app.js#L10797) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `refreshAndScrollToPlayoffBracket();`
- **Memanggil Fungsi Internal:** [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="refreshandscrolltogrouporbracket"></a>
#### `refreshAndScrollToGroupOrBracket()`

- **Definisi:** [`app.js:3995`](app.js#L3995)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3852`](app.js#L3852) — di dalam fungsi `shuffleAndGenerateTournament()`
    `refreshAndScrollToGroupOrBracket();`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderBracket()`](#renderbracket), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat)

<a id="shufflemlbbplayoffbracket"></a>
#### `shuffleMLBBPlayoffBracket()`

- **Definisi:** [`app.js:4021`](app.js#L4021)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:487`](index.html#L487) — Event `onclick`
    `<button id="btnShuffleMLBBPlayoff" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`app.js:8678`](app.js#L8678) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700; ${i`
  - [`app.js:11092`](app.js#L11092) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-gold" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-wei`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket)

<a id="togglelockmlbbplayoff"></a>
#### `toggleLockMLBBPlayoff()`

- **Definisi:** [`app.js:4064`](app.js#L4064)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:488`](index.html#L488) — Event `onclick`
    `<button id="btnLockMLBBPlayoff" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`app.js:8675`](app.js#L8675) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn ${isPlayoffLocked ? 'btn-gold' : 'btn-outline'}" style="font-size:0.75rem; paddin`
  - [`app.js:11089`](app.js#L11089) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${isPlayoffLocked ? 'btn-gold' : 'btn-outline'}" style="font-size:0`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="openplayoffscoremodal"></a>
#### `openPlayoffScoreModal(rIdx, mIdx, preselectWinner = null)`

- **Definisi:** [`app.js:4100`](app.js#L4100)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4351`](app.js#L4351) — di dalam fungsi `onPlayoffTeamClicked()`
    `openPlayoffScoreModal(rIdx, mIdx, teamName);`
  - [`app.js:4375`](app.js#L4375) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<button type="button" class="btn-playoff-score" onclick="event.stopPropagation(); openPlayoffScoreMo`
  - [`app.js:10857`](app.js#L10857) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<button type="button" class="btn-playoff-score" onclick="event.stopPropagation(); openPlayoffScoreMo`
  - [`app.js:11645`](app.js#L11645) — cakupan global / event handler
    `<button type="button" class="btn btn-primary" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-`
  - [`app.js:11749`](app.js#L11749) — cakupan global / event handler
    `<button type="button" class="btn btn-gold" style="font-size:0.85rem; padding:0.45rem 1rem; font-weig`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`isSameTeamName()`](#issameteamname), [`escapeHtml()`](#escapehtml), [`setPlayoffModalQuickScore()`](#setplayoffmodalquickscore), [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="closeplayoffscoremodal"></a>
#### `closePlayoffScoreModal()`

- **Definisi:** [`app.js:4190`](app.js#L4190)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:978`](index.html#L978) — Event `onclick`
    `<div id="playoffScoreModal" class="modal-overlay" onclick="if(event.target === this) closePlayoffSco`
  - [`index.html:989`](index.html#L989) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.85rem;" on`
  - [`index.html:1051`](index.html#L1051) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.75rem;" on`
  - [`app.js:4272`](app.js#L4272) — di dalam fungsi `savePlayoffModalScore()`
    `closePlayoffScoreModal();`
  - [`app.js:4281`](app.js#L4281) — di dalam fungsi `resetPlayoffModalScore()`
    `closePlayoffScoreModal();`

<a id="stepplayoffmodalscore"></a>
#### `stepPlayoffModalScore(team, delta)`

- **Definisi:** [`app.js:4196`](app.js#L4196)
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

- **Definisi:** [`app.js:4211`](app.js#L4211)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4180`](app.js#L4180) — di dalam fungsi `openPlayoffScoreModal()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem; font`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="onplayoffscoreinputchanged"></a>
#### `onPlayoffScoreInputChanged()`

- **Definisi:** [`app.js:4222`](app.js#L4222)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1008`](index.html#L1008) — Event `oninput`
    `<input type="number" id="playoffModalScoreA" min="0" max="5" value="0" style="width: 52px; font-size`
  - [`index.html:1025`](index.html#L1025) — Event `oninput`
    `<input type="number" id="playoffModalScoreB" min="0" max="5" value="0" style="width: 52px; font-size`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="updateplayoffmodalwinnerpreview"></a>
#### `updatePlayoffModalWinnerPreview()`

- **Definisi:** [`app.js:4233`](app.js#L4233)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4186`](app.js#L4186) — di dalam fungsi `openPlayoffScoreModal()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4208`](app.js#L4208) — di dalam fungsi `stepPlayoffModalScore()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4219`](app.js#L4219) — di dalam fungsi `setPlayoffModalQuickScore()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4230`](app.js#L4230) — di dalam fungsi `onPlayoffScoreInputChanged()`
    `updatePlayoffModalWinnerPreview();`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="saveplayoffmodalscore"></a>
#### `savePlayoffModalScore()`

- **Definisi:** [`app.js:4263`](app.js#L4263)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1054`](index.html#L1054) — Event `onclick`
    `<button type="button" id="btnSavePlayoffScore" class="btn btn-primary" style="font-size: 0.8rem; pad`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`setPlayoffMatchScore()`](#setplayoffmatchscore), [`closePlayoffScoreModal()`](#closeplayoffscoremodal)

<a id="resetplayoffmodalscore"></a>
#### `resetPlayoffModalScore()`

- **Definisi:** [`app.js:4276`](app.js#L4276)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1047`](index.html#L1047) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.75rem; bor`
- **Memanggil Fungsi Internal:** [`resetPlayoffMatchScore()`](#resetplayoffmatchscore), [`closePlayoffScoreModal()`](#closeplayoffscoremodal)

<a id="setplayoffmatchscore"></a>
#### `setPlayoffMatchScore(rIdx, mIdx, scoreA, scoreB)`

- **Definisi:** [`app.js:4284`](app.js#L4284)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4270`](app.js#L4270) — di dalam fungsi `savePlayoffModalScore()`
    `const ok = setPlayoffMatchScore(rIdx, mIdx, scoreA, scoreB);`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`pickGroupPlayoffWinner()`](#pickgroupplayoffwinner), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`escapeHtml()`](#escapehtml)

<a id="resetplayoffmatchscore"></a>
#### `resetPlayoffMatchScore(rIdx, mIdx)`

- **Definisi:** [`app.js:4325`](app.js#L4325)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4280`](app.js#L4280) — di dalam fungsi `resetPlayoffModalScore()`
    `resetPlayoffMatchScore(rIdx, mIdx);`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast)

<a id="onplayoffteamclicked"></a>
#### `onPlayoffTeamClicked(rIdx, mIdx, teamName)`

- **Definisi:** [`app.js:4344`](app.js#L4344)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4381`](app.js#L4381) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamA ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:4389`](app.js#L4389) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamB ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:10863`](app.js#L10863) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamA ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:10871`](app.js#L10871) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamB ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`showToast()`](#showtoast), [`openPlayoffScoreModal()`](#openplayoffscoremodal)

<a id="renderplayoffmatchcardhtml"></a>
#### `renderPlayoffMatchCardHtml(m, rIdx, mIdx, activeNodeKey = '', isIncoming = false, isLower = false)`

- **Definisi:** [`app.js:4354`](app.js#L4354)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8710`](app.js#L8710) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m1, rIdx, i, '', isIncoming, isLower)}`
  - [`app.js:8711`](app.js#L8711) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m2, rIdx, i + 1, '', isIncoming, isLower)}`
  - [`app.js:8719`](app.js#L8719) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m1, rIdx, i, '', isIncoming, isLower)}`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`openPlayoffScoreModal()`](#openplayoffscoremodal), [`onPlayoffTeamClicked()`](#onplayoffteamclicked), [`escapeHtml()`](#escapehtml)

<a id="testmlbbplayoffwithcurrentstandings"></a>
#### `testMLBBPlayoffWithCurrentStandings()`

- **Definisi:** [`app.js:4413`](app.js#L4413)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:1114`](index.html#L1114) — Event `onclick`
    `<button class="btn btn-gold" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; font-`
  - [`app.js:4568`](app.js#L4568) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;" on`
  - [`app.js:8628`](app.js#L8628) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="padding: 0.45rem 1rem; font-size: 0.85rem; border-color: var(`
  - [`app.js:8681`](app.js#L8681) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(`
  - [`app.js:11095`](app.js#L11095) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.8rem; padding:0.4rem 0.85rem; borde`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openTestDrawModal()`](#opentestdrawmodal), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`setMLBBViewMode()`](#setmlbbviewmode), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`findTeamGroupAndRank()`](#findteamgroupandrank), [`escapeHtml()`](#escapehtml), [`getSortedGroupTeams()`](#getsortedgroupteams), [`openTestDrawInNewWindow()`](#opentestdrawinnewwindow), [`closeTestDrawModal()`](#closetestdrawmodal)

<a id="testmlbbgroupallocationdraw"></a>
#### `testMLBBGroupAllocationDraw()`

- **Definisi:** [`app.js:4683`](app.js#L4683)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1098`](index.html#L1098) — Event `onclick`
    `<button class="btn btn-outline" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; bo`
  - [`app.js:4705`](app.js#L4705) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.6rem; font-weight:700;" onc`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`showToast()`](#showtoast), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`openTestDrawInNewWindow()`](#opentestdrawinnewwindow), [`getTeamDept()`](#getteamdept), [`isTeamInvited()`](#isteaminvited), [`escapeHtml()`](#escapehtml)

<a id="resetmlbbtostage1"></a>
#### `resetMLBBToStage1()`

- **Definisi:** [`app.js:4758`](app.js#L4758)
- **Deskripsi:** Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor jika diperlukan.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:486`](index.html#L486) — Event `onclick`
    `<button id="btnResetMLBBStage1" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`functional_tests.js:754`](functional_tests.js#L754) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMLBBToStage1()'), 'Harus ada fungsi resetMLBBToStage1');`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resettotalmlbbgroupandbracket"></a>
#### `resetTotalMLBBGroupAndBracket()`

- **Definisi:** [`app.js:4770`](app.js#L4770)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:490`](index.html#L490) — Event `onclick`
    `<button id="btnResetTotalMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5r`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openResetBaganModal()`](#openresetbaganmodal)

<a id="generatebracket"></a>
#### `generateBracket(doShuffle = false)`

- **Definisi:** [`app.js:5058`](app.js#L5058)
- **Deskripsi:** --- KNOCKOUT BRACKET ---
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:475`](index.html#L475) — Event `onchange`
    `<select id="bracketSize" onchange="generateBracket()" style="padding: 0.5rem 0.8rem; font-size: 0.85`
  - [`app.js:3796`](app.js#L3796) — di dalam fungsi `changeTournamentFormat()`
    `generateBracket(false);`
  - [`app.js:3846`](app.js#L3846) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateBracket(true);`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="renderbracket"></a>
#### `renderBracket()`

- **Definisi:** [`app.js:5131`](app.js#L5131)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3824`](app.js#L3824) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderBracket();`
  - [`app.js:3998`](app.js#L3998) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderBracket === 'function') renderBracket();`
  - [`app.js:5064`](app.js#L5064) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:5108`](app.js#L5108) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:5128`](app.js#L5128) — di dalam fungsi `pickWinner()`
    `renderBracket();`
- **Memanggil Fungsi Internal:** [`pickWinner()`](#pickwinner)

<a id="allocatemlbbgroups"></a>
#### `allocateMLBBGroups(teamsList, groupNames, doShuffle = false)`

- **Definisi:** [`app.js:5206`](app.js#L5206)
- **Deskripsi:** Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi): 1. Acak tim invited ke masing-masing group (tidak boleh ada di group yang sama). 2. Acak urutan tim sisanya (tim reguler). 3. Masukkan tim sesuai urutan acak ke masing-masing group: - Penempatan tim selalu memprioritaskan grup dengan jumlah peserta/tim terkecil terlebih dahulu. - Siklus 1: Cek nama depan sama (satelit) ATAU divisi sama -> jika bentrok, ke next group. - Siklus 2: Jika dalam 1 cycle tetap tidak dapat group -> masukkan ke group berikutnya jika tidak ada nama depan sama (aturan divisi dilanggar terlebih dahulu). - Siklus 3: Jika dalam 1 cycle berikutnya masih tidak dapat -> masukkan ke group berikutnya (aturan satelit dilanggar demi menjaga keseimbangan kapasitas). Invarian Mutlak: Keseimbangan kapasitas grup dijaga ketat (misal 41 tim ke 8 grup = tepat 7 grup isi 5 tim dan 1 grup isi 6 tim). /
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4692`](app.js#L4692) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, true);`
  - [`app.js:5416`](app.js#L5416) — di dalam fungsi `generateGroupStage()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, doShuffle);`
  - [`functional_tests.js:885`](functional_tests.js#L885) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('allocateMLBBGroups('), 'app.js harus memiliki fungsi alokasi grup cerdas');`
- **Memanggil Fungsi Internal:** [`getTeamPrefix()`](#getteamprefix), [`getTeamDept()`](#getteamdept), [`getDepartmentCluster()`](#getdepartmentcluster), [`isTeamInvited()`](#isteaminvited), [`isInvited()`](#isinvited), [`getPrefix()`](#getprefix), [`getDept()`](#getdept), [`getOverBaseCount()`](#getoverbasecount), [`hasPrefixConflict()`](#hasprefixconflict), [`hasDeptConflict()`](#hasdeptconflict)

<a id="generategroupstage"></a>
#### `generateGroupStage(doShuffle = false)`

- **Definisi:** [`app.js:5396`](app.js#L5396)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:251`](app.js#L251) — di dalam fungsi `toggleInvitedTeam()`
    `generateGroupStage(false);`
  - [`app.js:3800`](app.js#L3800) — di dalam fungsi `changeTournamentFormat()`
    `generateGroupStage(false);`
  - [`app.js:3848`](app.js#L3848) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateGroupStage(true);`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="getmlbbheadtoheadwinner"></a>
#### `getMLBBHeadToHeadWinner(teamA, teamB, gName)`

- **Definisi:** [`app.js:5449`](app.js#L5449)
- **Deskripsi:** Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fase grup MLBB
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5530`](app.js#L5530) — di dalam fungsi `compareMLBBTeams()`
    `const h2h = getMLBBHeadToHeadWinner(a.name, b.name, gName);`
- **Memanggil Fungsi Internal:** [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="comparemlbbteams"></a>
#### `compareMLBBTeams(a, b)`

- **Definisi:** [`app.js:5516`](app.js#L5516)
- **Deskripsi:** Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke Squad: 1. Point (Total Poin, besar ke kecil) 2. Agregat Skor Game / Game Difference (Diff = Game Menang - Game Kalah, besar ke kecil) 3. Head-to-Head / H2H (Jika Poin & Agregat sama, pemenang pertemuan langsung di grup lebih atas) 4. Menang (Match Won / W, besar ke kecil) 5. Kalah (Match Lost / L, kecil ke besar: makin sedikit kalah makin di atas) 6. Total MVP Tim (besar ke kecil) 7. Nama Tim (A-Z)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5575`](app.js#L5575) — di dalam fungsi `getSortedGroupTeams()`
    `return [...teams].sort((a, b) => compareMLBBTeams(a, b, gName));`
- **Memanggil Fungsi Internal:** [`getMLBBHeadToHeadWinner()`](#getmlbbheadtoheadwinner)

<a id="findvalidbracketpermutation"></a>
#### `findValidBracketPermutation(candidates, forbiddenGroupsPerSlot)`

- **Definisi:** [`app.js:5587`](app.js#L5587)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5869`](app.js#L5869) — di dalam fungsi `initGroupPlayoff()`
    `branchJ2 = findValidBracketPermutation(j2List, forbiddenForJ2);`
  - [`app.js:5881`](app.js#L5881) — di dalam fungsi `initGroupPlayoff()`
    `branchJ3 = findValidBracketPermutation(j3List, forbiddenForJ3);`
  - [`app.js:6000`](app.js#L6000) — di dalam fungsi `initGroupPlayoff()`
    `const candJ2 = findValidBracketPermutation(j2List, forbidden);`
  - [`app.js:6018`](app.js#L6018) — di dalam fungsi `initGroupPlayoff()`
    `bJ2 = findValidBracketPermutation(j2List, forbidden) || bJ1.map(j => j2List[(j1List.findIndex(x => x`
- **Memanggil Fungsi Internal:** [`backtrack()`](#backtrack), [`shuffleArray()`](#shufflearray)

<a id="isplayoffinvitedteam"></a>
#### `isPlayoffInvitedTeam(teamName)`

- **Definisi:** [`app.js:5627`](app.js#L5627)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5668`](app.js#L5668) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const isInv = (t) => isPlayoffInvitedTeam(t);`
  - [`app.js:5788`](app.js#L5788) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const isInv = (t) => isPlayoffInvitedTeam(t);`
- **Memanggil Fungsi Internal:** [`isTeamInvited()`](#isteaminvited)

<a id="solveremainingbracketslots"></a>
#### `solveRemainingBracketSlots(remainingItems, emptySlots, currentArray, validatorFn)`

- **Definisi:** [`app.js:5639`](app.js#L5639)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5768`](app.js#L5768) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const solvedBranchJ1 = solveRemainingBracketSlots(j1Regular, emptyJ1Slots, branchJ1, (slot, item) =>`
  - [`app.js:5775`](app.js#L5775) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const solvedBranchJ2 = solveRemainingBracketSlots(j2Regular, emptyJ2Slots, branchJ2, (slot, item) =>`
  - [`app.js:5815`](app.js#L5815) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const solved = solveRemainingBracketSlots(j3Regular, emptySlots, branchJ3, (slot, item) => {`
- **Memanggil Fungsi Internal:** [`shuffleArray()`](#shufflearray), [`backtrack()`](#backtrack)

<a id="drawmlbbplayoffupperbracket"></a>
#### `drawMLBBPlayoffUpperBracket(j1List, j2List)`

- **Definisi:** [`app.js:5667`](app.js#L5667)
- **Deskripsi:** Algoritma Pengundian Cerdas Playoff Upper Bracket 16 Besar (MLBB): 1. Undi tim invited terlebih dahulu. 2. Bagi acak tim invited ke 2 wings (Pool Atas [0..3] vs Pool Bawah [4..7]). - Jika ada ATMO dan ALPHA (Aang Alpha), pisahkan mereka di wings/pool yang berbeda! 3. Pisahkan mereka pada match yang berbeda di Tahap 1 (tidak saling berhadapan di 16 Besar, beda sayap QF). 4. Setelah menempatkan tim invited, undi tim reguler lain untuk menempati bagan yang kosong. 5. Pastikan syarat anti-rematch grup (Juara 2 beda grup dari Juara 1 di slot yang sama) tetap 100% terpenuhi. /
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5862`](app.js#L5862) — di dalam fungsi `initGroupPlayoff()`
    `const drawnUpper = drawMLBBPlayoffUpperBracket(j1List, j2List);`
- **Memanggil Fungsi Internal:** [`isPlayoffInvitedTeam()`](#isplayoffinvitedteam), [`isInv()`](#isinv), [`isTeamAtmo()`](#isteamatmo), [`isTeamAlpha()`](#isteamalpha), [`isTeamAppa()`](#isteamappa), [`shuffleArray()`](#shufflearray), [`solveRemainingBracketSlots()`](#solveremainingbracketslots)

<a id="drawmlbbplayofflowerbracket"></a>
#### `drawMLBBPlayoffLowerBracket(j3List, branchJ1, branchJ2)`

- **Definisi:** [`app.js:5787`](app.js#L5787)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5876`](app.js#L5876) — di dalam fungsi `initGroupPlayoff()`
    `const drawnLower = drawMLBBPlayoffLowerBracket(j3List, branchJ1, branchJ2);`
- **Memanggil Fungsi Internal:** [`isPlayoffInvitedTeam()`](#isplayoffinvitedteam), [`isInv()`](#isinv), [`shuffleArray()`](#shufflearray), [`solveRemainingBracketSlots()`](#solveremainingbracketslots)

<a id="initgroupplayoff"></a>
#### `initGroupPlayoff(doShuffle = false)`

- **Definisi:** [`app.js:5824`](app.js#L5824)
- **Deskripsi:** Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seeding Juara vs Runner-up).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:1542`](app.js#L1542) — di dalam fungsi `cleanOrphanedTournamentData()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff();`
  - [`app.js:3927`](app.js#L3927) — di dalam fungsi `resolveMLBBTieBreaker()`
    `initGroupPlayoff();`
  - [`app.js:3954`](app.js#L3954) — di dalam fungsi `proceedToMLBBStage2()`
    `initGroupPlayoff(true);`
  - [`app.js:4052`](app.js#L4052) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `initGroupPlayoff(true);`
  - [`app.js:4432`](app.js#L4432) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `initGroupPlayoff(true);`
  - [`app.js:5429`](app.js#L5429) — di dalam fungsi `generateGroupStage()`
    `initGroupPlayoff(doShuffle);`
  - [`app.js:5444`](app.js#L5444) — di dalam fungsi `updateGroupRecord()`
    `initGroupPlayoff();`
  - [`app.js:7139`](app.js#L7139) — di dalam fungsi `setGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:8183`](app.js#L8183) — di dalam fungsi `resetGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:10785`](app.js#L10785) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `initGroupPlayoff(!isLocked);`
  - [`app.js:10917`](app.js#L10917) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff(false);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`drawMLBBPlayoffUpperBracket()`](#drawmlbbplayoffupperbracket), [`shuffleArray()`](#shufflearray), [`findValidBracketPermutation()`](#findvalidbracketpermutation), [`drawMLBBPlayoffLowerBracket()`](#drawmlbbplayofflowerbracket), [`isTeamAtmo()`](#isteamatmo), [`isTeamAlpha()`](#isteamalpha)

<a id="isplayoffplaceholderteam"></a>
#### `isPlayoffPlaceholderTeam(teamName)`

- **Definisi:** [`app.js:6067`](app.js#L6067)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4294`](app.js#L4294) — di dalam fungsi `setPlayoffMatchScore()`
    `if (isPlayoffPlaceholderTeam(match.teamA) || isPlayoffPlaceholderTeam(match.teamB)) {`
  - [`app.js:4347`](app.js#L4347) — di dalam fungsi `onPlayoffTeamClicked()`
    `if (!m || isPlayoffPlaceholderTeam(m.teamA) || isPlayoffPlaceholderTeam(m.teamB)) {`
  - [`app.js:4366`](app.js#L4366) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `const isReady = !isPlayoffPlaceholderTeam(m.teamA) && !isPlayoffPlaceholderTeam(m.teamB);`
  - [`app.js:6080`](app.js#L6080) — di dalam fungsi `pickGroupPlayoffWinner()`
    `if (!match || !winnerTeam || isPlayoffPlaceholderTeam(winnerTeam)) return;`
  - [`app.js:10846`](app.js#L10846) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `const isReady = !isPlayoffPlaceholderTeam(m.teamA) && !isPlayoffPlaceholderTeam(m.teamB);`

<a id="pickgroupplayoffwinner"></a>
#### `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:6077`](app.js#L6077)
- **Deskripsi:** Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya ke ronde berikutnya.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4315`](app.js#L4315) — di dalam fungsi `setPlayoffMatchScore()`
    `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam);`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="promptplayoffmvp"></a>
#### `promptPlayoffMVP(rIdx, mIdx)`

- **Definisi:** [`app.js:6245`](app.js#L6245)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:792`](functional_tests.js#L792) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptPlayoffMVP('), 'Harus memiliki promptPlayoffMVP');`
- **Memanggil Fungsi Internal:** [`openMLBBPlayoffMvpModal()`](#openmlbbplayoffmvpmodal)

<a id="rendergroupstageui"></a>
#### `renderGroupStageUI()`

- **Definisi:** [`app.js:6252`](app.js#L6252)
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:17`](app.js#L17) — di dalam fungsi `prevMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:24`](app.js#L24) — di dalam fungsi `nextMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:29`](app.js#L29) — di dalam fungsi `goToMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:3829`](app.js#L3829) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderGroupStageUI();`
  - [`app.js:3928`](app.js#L3928) — di dalam fungsi `resolveMLBBTieBreaker()`
    `renderGroupStageUI();`
  - [`app.js:3946`](app.js#L3946) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupStageUI();`
  - [`app.js:3996`](app.js#L3996) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:5430`](app.js#L5430) — di dalam fungsi `generateGroupStage()`
    `renderGroupStageUI();`
  - [`app.js:5445`](app.js#L5445) — di dalam fungsi `updateGroupRecord()`
    `renderGroupStageUI();`
  - [`app.js:7140`](app.js#L7140) — di dalam fungsi `setGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:7875`](app.js#L7875) — di dalam fungsi `setGroupMatchMVP()`
    `renderGroupStageUI();`
  - [`app.js:7967`](app.js#L7967) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:7985`](app.js#L7985) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8008`](app.js#L8008) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8184`](app.js#L8184) — di dalam fungsi `resetGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:10715`](app.js#L10715) — di dalam fungsi `setMLBBViewMode()`
    `renderGroupStageUI();`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`goToMLBBGroupPage()`](#gotomlbbgrouppage), [`prevMLBBGroupPage()`](#prevmlbbgrouppage), [`nextMLBBGroupPage()`](#nextmlbbgrouppage), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`getSortedGroupTeams()`](#getsortedgroupteams), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker)

<a id="setmlbbactiveweek"></a>
#### `setMLBBActiveWeek(weekKey)`

- **Definisi:** [`app.js:6691`](app.js#L6691)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8339`](app.js#L8339) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_1' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:8344`](app.js#L8344) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_2' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:8349`](app.js#L8349) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_3' ? 'active' : ''}" onclick="setMLBBActive`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivedayfilter"></a>
#### `setMLBBActiveDayFilter(day)`

- **Definisi:** [`app.js:6699`](app.js#L6699)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:8456`](app.js#L8456) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 'ALL' ? 'active' : ''}" onc`
  - [`app.js:8459`](app.js#L8459) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 1 ? 'active' : ''}" onclick`
  - [`app.js:8462`](app.js#L8462) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 2 ? 'active' : ''}" onclick`
  - [`app.js:8465`](app.js#L8465) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 3 ? 'active' : ''}" onclick`
  - [`app.js:8468`](app.js#L8468) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 4 ? 'active' : ''}" onclick`
  - [`app.js:8471`](app.js#L8471) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 5 ? 'active' : ''}" onclick`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivegroupfilter"></a>
#### `setMLBBActiveGroupFilter(gName)`

- **Definisi:** [`app.js:6704`](app.js#L6704)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8477`](app.js#L8477) — di dalam fungsi `renderGroupFixturesUI()`
    `<select onchange="setMLBBActiveGroupFilter(this.value)" style="background:#0f172a; border:1px solid `
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="getgroupfixtures"></a>
#### `getGroupFixtures(gName, dayFilter = null)`

- **Definisi:** [`app.js:6710`](app.js#L6710)
- **Deskripsi:** --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) ---
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:3882`](app.js#L3882) — di dalam fungsi `isAllMLBBGroupMatchesFinished()`
    `const fixtures = getGroupFixtures(gName);`
  - [`app.js:6914`](app.js#L6914) — di dalam fungsi `isGroupMatchesCompleted()`
    `const fixtures = (typeof getGroupFixtures === 'function') ? getGroupFixtures(gName) : [];`
  - [`app.js:7025`](app.js#L7025) — di dalam fungsi `getGroupRestingTeams()`
    `const dayFixtures = getGroupFixtures(gName, day);`
  - [`app.js:8490`](app.js#L8490) — di dalam fungsi `renderGroupFixturesUI()`
    `const fixtures = getGroupFixtures(gName, mlbbActiveDayFilter);`
  - [`app.js:11417`](app.js#L11417) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const fixtures = getGroupFixtures(gName);`
  - [`functional_tests.js:675`](functional_tests.js#L675) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getGroupFixtures('), 'app.js harus memiliki generator jadwal getGr`
- **Memanggil Fungsi Internal:** [`resolveTeamNameInGroup()`](#resolveteamnameingroup), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="savegroupfixturescore"></a>
#### `saveGroupFixtureScore(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:7178`](app.js#L7178)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8589`](app.js#L8589) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-primary" style="font-size:0.68rem; padding:2px 8px;" onclick="s`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="openmlbbgroupmvpmodal"></a>
#### `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, scoreA, scoreB)`

- **Definisi:** [`app.js:7231`](app.js#L7231)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7913`](app.js#L7913) — di dalam fungsi `promptGroupMatchMVP()`
    `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, null, null);`
  - [`app.js:8593`](app.js#L8593) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 8px; color:var(-`
  - [`app.js:11573`](app.js#L11573) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname), [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="openmlbbplayoffmvpmodal"></a>
#### `openMLBBPlayoffMvpModal(rIdx, mIdx)`

- **Definisi:** [`app.js:7305`](app.js#L7305)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6249`](app.js#L6249) — di dalam fungsi `promptPlayoffMVP()`
    `openMLBBPlayoffMvpModal(rIdx, mIdx);`
- **Memanggil Fungsi Internal:** [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="closemlbbgroupmvpmodal"></a>
#### `closeMLBBGroupMvpModal()`

- **Definisi:** [`app.js:7491`](app.js#L7491)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:865`](index.html#L865) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:933`](index.html#L933) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;" on`
  - [`app.js:7738`](app.js#L7738) — di dalam fungsi `saveSelectedMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:7748`](app.js#L7748) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:7790`](app.js#L7790) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`

<a id="recalculategroupstandingsfromfixtures"></a>
#### `recalculateGroupStandingsFromFixtures()`

- **Definisi:** [`app.js:8187`](app.js#L8187)
- **Deskripsi:** Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan seluruh hasil pertandingan BO3.
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1434`](app.js#L1434) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
  - [`app.js:7137`](app.js#L7137) — di dalam fungsi `setGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:8181`](app.js#L8181) — di dalam fungsi `resetGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:10648`](app.js#L10648) — cakupan global / event handler
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
- **Memanggil Fungsi Internal:** [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="rendergroupfixturesui"></a>
#### `renderGroupFixturesUI()`

- **Definisi:** [`app.js:8327`](app.js#L8327)
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:34`](app.js#L34) — di dalam fungsi `toggleAllMLBBFixtures()`
    `renderGroupFixturesUI();`
  - [`app.js:6341`](app.js#L6341) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:6488`](app.js#L6488) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:6696`](app.js#L6696) — di dalam fungsi `setMLBBActiveWeek()`
    `renderGroupFixturesUI();`
  - [`app.js:6701`](app.js#L6701) — di dalam fungsi `setMLBBActiveDayFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:6706`](app.js#L6706) — di dalam fungsi `setMLBBActiveGroupFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:7876`](app.js#L7876) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:7968`](app.js#L7968) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:7986`](app.js#L7986) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8009`](app.js#L8009) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`functional_tests.js:677`](functional_tests.js#L677) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderGroupFixturesUI('), 'app.js harus memiliki renderer bagan re`
- **Memanggil Fungsi Internal:** [`setMLBBActiveWeek()`](#setmlbbactiveweek), [`setMLBBActiveDayFilter()`](#setmlbbactivedayfilter), [`setMLBBActiveGroupFilter()`](#setmlbbactivegroupfilter), [`getGroupFixtures()`](#getgroupfixtures), [`escapeHtml()`](#escapehtml), [`getGroupRestingTeams()`](#getgrouprestingteams), [`isSameTeamName()`](#issameteamname), [`formatMatchMvpDisplayHtml()`](#formatmatchmvpdisplayhtml), [`openMatchPlayerVerifyModal()`](#openmatchplayerverifymodal), [`saveGroupFixtureScore()`](#savegroupfixturescore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="rendergroupplayofftree"></a>
#### `renderGroupPlayoffTree()`

- **Definisi:** [`app.js:8608`](app.js#L8608)
- **Deskripsi:** Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau status terkunci jika grup belum selesai.
- **Titik Pemanggilan (14 lokasi):**
  - [`app.js:3959`](app.js#L3959) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupPlayoffTree();`
  - [`app.js:3973`](app.js#L3973) — di dalam fungsi `refreshAndScrollToPlayoffBracket()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:3997`](app.js#L3997) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:4057`](app.js#L4057) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `renderGroupPlayoffTree();`
  - [`app.js:4090`](app.js#L4090) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `renderGroupPlayoffTree();`
  - [`app.js:4335`](app.js#L4335) — di dalam fungsi `resetPlayoffMatchScore()`
    `renderGroupPlayoffTree();`
  - [`app.js:4442`](app.js#L4442) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderGroupPlayoffTree();`
  - [`app.js:5431`](app.js#L5431) — di dalam fungsi `generateGroupStage()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:6241`](app.js#L6241) — di dalam fungsi `pickGroupPlayoffWinner()`
    `renderGroupPlayoffTree();`
  - [`app.js:6342`](app.js#L6342) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:6489`](app.js#L6489) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:7728`](app.js#L7728) — di dalam fungsi `saveSelectedMvp()`
    `renderGroupPlayoffTree();`
  - [`app.js:7780`](app.js#L7780) — di dalam fungsi `deleteCurrentMvp()`
    `renderGroupPlayoffTree();`
  - [`app.js:10791`](app.js#L10791) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
- **Memanggil Fungsi Internal:** [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`testMLBBPlayoffWithCurrentStandings()`](#testmlbbplayoffwithcurrentstandings), [`toggleLockMLBBPlayoff()`](#togglelockmlbbplayoff), [`showToast()`](#showtoast), [`shuffleMLBBPlayoffBracket()`](#shufflemlbbplayoffbracket), [`renderPlayoffMatchCardHtml()`](#renderplayoffmatchcardhtml)

<a id="setmlbbviewmode"></a>
#### `setMLBBViewMode(mode)`

- **Definisi:** [`app.js:10681`](app.js#L10681)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MLBB ---
- **Titik Pemanggilan (6 lokasi):**
  - [`index.html:514`](index.html#L514) — Event `onclick`
    `<button type="button" id="btnViewMlbbHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:517`](index.html#L517) — Event `onclick`
    `<button type="button" id="btnViewMlbbGroups" class="btn btn-outline" style="font-size: 0.8rem; paddi`
  - [`index.html:520`](index.html#L520) — Event `onclick`
    `<button type="button" id="btnViewMlbbFixtures" class="btn btn-outline" style="font-size: 0.8rem; pad`
  - [`app.js:2538`](app.js#L2538) — di dalam fungsi `switchTab()`
    `setMLBBViewMode('HUB');`
  - [`app.js:4438`](app.js#L4438) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `setMLBBViewMode('GROUPS');`
  - [`functional_tests.js:1164`](functional_tests.js#L1164) — pada skenario pengujian
    `assert(appCode.includes('function setMLBBViewMode('), 'app.js harus memiliki fungsi setMLBBViewMode'`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="toggleplayoffbracketcollapse"></a>
#### `togglePlayoffBracketCollapse()`

- **Definisi:** [`app.js:10767`](app.js#L10767)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11106`](app.js#L11106) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.38rem 0.7rem; bord`

<a id="gotonextmlbbplayoffphase"></a>
#### `goToNextMLBBPlayoffPhase()`

- **Definisi:** [`app.js:10779`](app.js#L10779)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11237`](app.js#L11237) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="btn btn-primary" style="width:100%; font-size:0.82rem; padding:0.6rem 0`
  - [`app.js:11443`](app.js#L11443) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; fon`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket)

<a id="setplayoffbracketfilter"></a>
#### `setPlayoffBracketFilter(filter)`

- **Definisi:** [`app.js:10803`](app.js#L10803)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11115`](app.js#L11115) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${currentPlayoffBracketFilter === 'UPPER' ? 'btn-primary' : 'btn-ou`
  - [`app.js:11118`](app.js#L11118) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${currentPlayoffBracketFilter === 'LOWER' ? 'btn-gold' : 'btn-outli`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="toggleplayofffullscreen"></a>
#### `togglePlayoffFullscreen()`

- **Definisi:** [`app.js:10810`](app.js#L10810)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11103`](app.js#L11103) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.38rem 0.7rem; bord`

<a id="renderfullplayoffbrackethtml"></a>
#### `renderFullPlayoffBracketHtml(activeNodeKey = '')`

- **Definisi:** [`app.js:10915`](app.js#L10915)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11371`](app.js#L11371) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `content += renderFullPlayoffBracketHtml(nodeKey);`
  - [`app.js:11407`](app.js#L11407) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `content += renderFullPlayoffBracketHtml(nodeKey);`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff), [`renderSingleMatchNodeHtml()`](#rendersinglematchnodehtml), [`renderSvgConnectorColumn()`](#rendersvgconnectorcolumn), [`toggleLockMLBBPlayoff()`](#togglelockmlbbplayoff), [`showToast()`](#showtoast), [`shuffleMLBBPlayoffBracket()`](#shufflemlbbplayoffbracket), [`testMLBBPlayoffWithCurrentStandings()`](#testmlbbplayoffwithcurrentstandings), [`togglePlayoffFullscreen()`](#toggleplayofffullscreen), [`togglePlayoffBracketCollapse()`](#toggleplayoffbracketcollapse), [`setPlayoffBracketFilter()`](#setplayoffbracketfilter)

<a id="selectmlbbstagenode"></a>
#### `selectMLBBStageNode(nodeKey)`

- **Definisi:** [`app.js:11133`](app.js#L11133)
- **Titik Pemanggilan (17 lokasi):**
  - [`app.js:10843`](app.js#L10843) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `? 'onclick="if(event.target.closest('.bracket-node-team') || event.target.closest('button')) return;`
  - [`app.js:11158`](app.js#L11158) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<select id="mobileStageSelect" class="mobile-stage-select" onchange="selectMLBBStageNode(this.value)`
  - [`app.js:11225`](app.js#L11225) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:11252`](app.js#L11252) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.2rem 0.55rem; colo`
  - [`app.js:11278`](app.js#L11278) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:11301`](app.js#L11301) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_UPPER_QF' ? 'active' : ''}" onclic`
  - [`app.js:11305`](app.js#L11305) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_LOWER_R1' ? 'active' : ''}" onclic`
  - [`app.js:11323`](app.js#L11323) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_UPPER' ? 'active' : ''}" onclick="`
  - [`app.js:11327`](app.js#L11327) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_LOWER' ? 'active' : ''}" onclick="`
  - [`app.js:11347`](app.js#L11347) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'GRAND_FINAL_OFFLINE' ? 'active`
  - [`app.js:11381`](app.js#L11381) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11384`](app.js#L11384) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11387`](app.js#L11387) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11390`](app.js#L11390) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11393`](app.js#L11393) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11396`](app.js#L11396) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`functional_tests.js:1166`](functional_tests.js#L1166) — pada skenario pengujian
    `assert(appCode.includes('function selectMLBBStageNode('), 'app.js harus memiliki selectMLBBStageNode`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermlbbinteractivehubui"></a>
#### `renderMLBBInteractiveHubUI()`

- **Definisi:** [`app.js:11144`](app.js#L11144)
- **Titik Pemanggilan (24 lokasi):**
  - [`app.js:3804`](app.js#L3804) — di dalam fungsi `changeTournamentFormat()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:3960`](app.js#L3960) — di dalam fungsi `proceedToMLBBStage2()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:3974`](app.js#L3974) — di dalam fungsi `refreshAndScrollToPlayoffBracket()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:3999`](app.js#L3999) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4058`](app.js#L4058) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:4091`](app.js#L4091) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4336`](app.js#L4336) — di dalam fungsi `resetPlayoffMatchScore()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:5432`](app.js#L5432) — di dalam fungsi `generateGroupStage()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:6242`](app.js#L6242) — di dalam fungsi `pickGroupPlayoffWinner()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:6268`](app.js#L6268) — di dalam fungsi `renderGroupStageUI()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:7877`](app.js#L7877) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:7969`](app.js#L7969) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:7987`](app.js#L7987) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8010`](app.js#L8010) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:10706`](app.js#L10706) — di dalam fungsi `setMLBBViewMode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:10792`](app.js#L10792) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:10806`](app.js#L10806) — di dalam fungsi `setPlayoffBracketFilter()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11135`](app.js#L11135) — di dalam fungsi `selectMLBBStageNode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11474`](app.js#L11474) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:11477`](app.js#L11477) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
  - [`app.js:11569`](app.js#L11569) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11571`](app.js#L11571) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:11572`](app.js#L11572) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`functional_tests.js:1165`](functional_tests.js#L1165) — pada skenario pengujian
    `assert(appCode.includes('function renderMLBBInteractiveHubUI()'), 'app.js harus memiliki renderMLBBI`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`goToNextMLBBPlayoffPhase()`](#gotonextmlbbplayoffphase), [`renderMLBBDetailPanelContent()`](#rendermlbbdetailpanelcontent)

<a id="rendermlbbdetailpanelcontent"></a>
#### `renderMLBBDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:11366`](app.js#L11366)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11360`](app.js#L11360) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `rightHtml += renderMLBBDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderFullPlayoffBracketHtml()`](#renderfullplayoffbrackethtml), [`selectMLBBStageNode()`](#selectmlbbstagenode), [`getSortedGroupTeams()`](#getsortedgroupteams), [`getGroupFixtures()`](#getgroupfixtures), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`escapeHtml()`](#escapehtml), [`goToNextMLBBPlayoffPhase()`](#gotonextmlbbplayoffphase), [`updateGroupRecord()`](#updategrouprecord), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`isSameTeamName()`](#issameteamname), [`setGroupMatchScore()`](#setgroupmatchscore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

---

### 📦 Modul Aplikasi Umum

<a id="posttogoogleappsscript"></a>
#### `postToGoogleAppsScript(payload, timeoutMs = 45000)`

- **Definisi:** [`app.js:88`](app.js#L88)
- **Deskripsi:** Helper fetch terpusat untuk komunikasi POST dengan Google Apps Script Web App. - Menggunakan Content-Type text/plain;charset=utf-8 (mencegah CORS preflight OPTIONS yang tidak didukung GAS). - Mengaktifkan mode: 'cors' dan redirect: 'follow' untuk menangani 302 redirect ke script.googleusercontent.com secara andal. - Dilengkapi AbortController timeout agar antarmuka tidak hang saat koneksi lambat. /
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:1675`](app.js#L1675) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `const batchRes = await postToGoogleAppsScript({`
  - [`app.js:1714`](app.js#L1714) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `return postToGoogleAppsScript({`
  - [`app.js:1743`](app.js#L1743) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `await postToGoogleAppsScript({`
  - [`app.js:1784`](app.js#L1784) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `const res = await postToGoogleAppsScript({`
  - [`app.js:1973`](app.js#L1973) — di dalam fungsi `saveCustomRules()`
    `postToGoogleAppsScript({`
  - [`app.js:3111`](app.js#L3111) — di dalam fungsi `handleRegister()`
    `let res = await postToGoogleAppsScript(payload, 45000);`
  - [`app.js:3122`](app.js#L3122) — di dalam fungsi `handleRegister()`
    `res = await postToGoogleAppsScript(payload, 45000);`
  - [`app.js:3231`](app.js#L3231) — di dalam fungsi `setParticipantStatus()`
    `postToGoogleAppsScript({`
  - [`app.js:3284`](app.js#L3284) — di dalam fungsi `deleteParticipant()`
    `postToGoogleAppsScript({`
  - [`app.js:3517`](app.js#L3517) — di dalam fungsi `saveParticipantEdit()`
    `const response = await postToGoogleAppsScript({`
  - [`app.js:4970`](app.js#L4970) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const res = await postToGoogleAppsScript(payload, 35000);`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`app.js:136`](app.js#L136)
- **Deskripsi:** Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5219`](app.js#L5219) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="getdepartmentcluster"></a>
#### `getDepartmentCluster(rawDept, teamOrPlayerName = '')`

- **Definisi:** [`app.js:148`](app.js#L148)
- **Deskripsi:** Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resmi) Memetakan variasi teks bebas pendaftar (e.g. 'IT/QA', 'Quality Assurance', 'ERM/PRM', 'ADO Bandung') ke klaster divisi resmi untuk pencegahan bentrok fase awal turnamen. /
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:212`](app.js#L212) — di dalam fungsi `getTeamDept()`
    `return getDepartmentCluster(raw, teamName).toLowerCase();`
  - [`app.js:5230`](app.js#L5230) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getDepartmentCluster === 'function') return getDepartmentCluster(d, team).toLowerCase();`
  - [`app.js:8865`](app.js#L8865) — di dalam fungsi `syncMCGGPlayers()`
    `const cluster = getDepartmentCluster(ply.dept, ply.name);`
  - [`app.js:8895`](app.js#L8895) — di dalam fungsi `syncMCGGPlayers()`
    `return getDepartmentCluster(d, p.name) === clusterName;`
  - [`functional_tests.js:932`](functional_tests.js#L932) — pada skenario pengujian
    `assert(appCode.includes('function getDepartmentCluster('), 'app.js harus memiliki helper getDepartme`
  - [`functional_tests.js:985`](functional_tests.js#L985) — pada skenario pengujian
    `assert(appCode.includes('function getDepartmentCluster('), 'app.js harus memiliki helper getDepartme`
  - [`functional_tests.js:988`](functional_tests.js#L988) — pada skenario pengujian
    `return getDepartmentCluster(rawDept, name);`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`app.js:206`](app.js#L206)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4730`](app.js#L4730) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:5228`](app.js#L5228) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:900`](functional_tests.js#L900) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`
- **Memanggil Fungsi Internal:** [`getDepartmentCluster()`](#getdepartmentcluster)

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`app.js:228`](app.js#L228)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:4731`](app.js#L4731) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5238`](app.js#L5238) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:5630`](app.js#L5630) — di dalam fungsi `isPlayoffInvitedTeam()`
    `if (typeof isTeamInvited === 'function' && isTeamInvited(teamName)) return true;`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`

<a id="toggleinvitedteam"></a>
#### `toggleInvitedTeam(id)`

- **Definisi:** [`app.js:243`](app.js#L243)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3708`](app.js#L3708) — di dalam fungsi `renderParticipants()`
    `<button class="btn ${p.isInvited ? 'btn-gold' : 'btn-outline'}" style="padding: 0.35rem 0.55rem; fon`
  - [`functional_tests.js:877`](functional_tests.js#L877) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleInvitedTeam('), 'app.js harus memiliki toggleInvitedTeam');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="showgloballoader"></a>
#### `showGlobalLoader(msg = "Menyinkronkan data turnamen dari Google Sheets...")`

- **Definisi:** [`app.js:278`](app.js#L278)
- **Deskripsi:** Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10621`](app.js#L10621) — cakupan global / event handler
    `showGlobalLoader('Menyinkronkan data terkini dari Google Sheets...');`
- **Memanggil Fungsi Internal:** [`hideGlobalLoader()`](#hidegloballoader)

<a id="hidegloballoader"></a>
#### `hideGlobalLoader()`

- **Definisi:** [`app.js:292`](app.js#L292)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:288`](app.js#L288) — di dalam fungsi `showGlobalLoader()`
    `hideGlobalLoader();`
  - [`app.js:914`](app.js#L914) — di dalam fungsi `bypassLoaderWithCache()`
    `hideGlobalLoader();`
  - [`app.js:10653`](app.js#L10653) — cakupan global / event handler
    `hideGlobalLoader();`
  - [`app.js:10664`](app.js#L10664) — cakupan global / event handler
    `hideGlobalLoader();`

<a id="bypassloaderwithcache"></a>
#### `bypassLoaderWithCache()`

- **Definisi:** [`app.js:906`](app.js#L906)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:23`](index.html#L23) — Event `onclick`
    `<button id="btnBypassLoader" type="button" class="btn btn-outline" style="margin-top: 1.25rem; font-`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`updateCounts()`](#updatecounts), [`hideGlobalLoader()`](#hidegloballoader), [`showToast()`](#showtoast)

<a id="saveformdraft"></a>
#### `saveFormDraft(formType)`

- **Definisi:** [`app.js:929`](app.js#L929)
- **Deskripsi:** AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1085`](app.js#L1085) — di dalam fungsi `handleFormDraftChange()`
    `saveFormDraft();`

<a id="restoreformdraft"></a>
#### `restoreFormDraft(formType)`

- **Definisi:** [`app.js:985`](app.js#L985)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:10630`](app.js#L10630) — cakupan global / event handler
    `restoreFormDraft('MLBB');`
  - [`app.js:10631`](app.js#L10631) — cakupan global / event handler
    `restoreFormDraft('MCGG');`
- **Memanggil Fungsi Internal:** [`toggleOfficial2Form()`](#toggleofficial2form)

<a id="clearformdraft"></a>
#### `clearFormDraft(formType)`

- **Definisi:** [`app.js:1075`](app.js#L1075)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3203`](app.js#L3203) — di dalam fungsi `handleRegister()`
    `clearFormDraft(category);`

<a id="handleformdraftchange"></a>
#### `handleFormDraftChange()`

- **Definisi:** [`app.js:1082`](app.js#L1082)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1999`](app.js#L1999) — di dalam fungsi `handleLogoPreview()`
    `handleFormDraftChange();`
  - [`app.js:2017`](app.js#L2017) — di dalam fungsi `handleSingleIdCardPreview()`
    `handleFormDraftChange();`
  - [`app.js:2037`](app.js#L2037) — di dalam fungsi `handlePlayerIdCardPreview()`
    `handleFormDraftChange();`
- **Memanggil Fungsi Internal:** [`saveFormDraft()`](#saveformdraft)

<a id="getitemkey"></a>
#### `getItemKey(item)`

- **Definisi:** [`app.js:1273`](app.js#L1273)
- **Deskripsi:** Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1287`](app.js#L1287) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `localMap[getItemKey(localItem)] = localItem;`
  - [`app.js:1294`](app.js#L1294) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const itemKey = getItemKey(sheetItem);`

<a id="cleanorphanedtournamentdata"></a>
#### `cleanOrphanedTournamentData()`

- **Definisi:** [`app.js:1513`](app.js#L1513)
- **Deskripsi:** Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup, dan lobi MCGG
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1479`](app.js#L1479) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `cleanOrphanedTournamentData();`
  - [`app.js:3275`](app.js#L3275) — di dalam fungsi `deleteParticipant()`
    `cleanOrphanedTournamentData();`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff)

<a id="savestate"></a>
#### `saveState()`

- **Definisi:** [`app.js:1809`](app.js#L1809)
- **Deskripsi:** Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi MCGG) ke localStorage.
- **Titik Pemanggilan (44 lokasi):**
  - [`app.js:248`](app.js#L248) — di dalam fungsi `toggleInvitedTeam()`
    `saveState();`
  - [`app.js:892`](app.js#L892) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveState();`
  - [`app.js:1480`](app.js#L1480) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveState();`
  - [`app.js:1639`](app.js#L1639) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `saveState();`
  - [`app.js:1775`](app.js#L1775) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `saveState();`
  - [`app.js:2331`](app.js#L2331) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveState();`
  - [`app.js:3180`](app.js#L3180) — di dalam fungsi `handleRegister()`
    `saveState();`
  - [`app.js:3223`](app.js#L3223) — di dalam fungsi `setParticipantStatus()`
    `saveState();`
  - [`app.js:3276`](app.js#L3276) — di dalam fungsi `deleteParticipant()`
    `saveState();`
  - [`app.js:3501`](app.js#L3501) — di dalam fungsi `saveParticipantEdit()`
    `saveState();`
  - [`app.js:3926`](app.js#L3926) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveState();`
  - [`app.js:3956`](app.js#L3956) — di dalam fungsi `proceedToMLBBStage2()`
    `saveState();`
  - [`app.js:4054`](app.js#L4054) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveState();`
  - [`app.js:4088`](app.js#L4088) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveState();`
  - [`app.js:4334`](app.js#L4334) — di dalam fungsi `resetPlayoffMatchScore()`
    `saveState();`
  - [`app.js:4434`](app.js#L4434) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveState();`
  - [`app.js:4764`](app.js#L4764) — di dalam fungsi `resetMLBBToStage1()`
    `saveState();`
  - [`app.js:4826`](app.js#L4826) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `saveState();`
  - [`app.js:4993`](app.js#L4993) — di dalam fungsi `saveTournamentStateOnly()`
    `saveState();`
  - [`app.js:5428`](app.js#L5428) — di dalam fungsi `generateGroupStage()`
    `saveState();`
  - [`app.js:5443`](app.js#L5443) — di dalam fungsi `updateGroupRecord()`
    `saveState();`
  - [`app.js:6240`](app.js#L6240) — di dalam fungsi `pickGroupPlayoffWinner()`
    `saveState();`
  - [`app.js:7138`](app.js#L7138) — di dalam fungsi `setGroupMatchScore()`
    `saveState();`
  - [`app.js:7727`](app.js#L7727) — di dalam fungsi `saveSelectedMvp()`
    `saveState();`
  - [`app.js:7779`](app.js#L7779) — di dalam fungsi `deleteCurrentMvp()`
    `saveState();`
  - [`app.js:7874`](app.js#L7874) — di dalam fungsi `setGroupMatchMVP()`
    `saveState();`
  - [`app.js:7966`](app.js#L7966) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `saveState();`
  - [`app.js:7983`](app.js#L7983) — di dalam fungsi `toggleMatchPlayerVerify()`
    `saveState();`
  - [`app.js:8006`](app.js#L8006) — di dalam fungsi `verifyAllMatchPlayers()`
    `saveState();`
  - [`app.js:8182`](app.js#L8182) — di dalam fungsi `resetGroupMatchScore()`
    `saveState();`
  - [`app.js:8972`](app.js#L8972) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:9031`](app.js#L9031) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:9293`](app.js#L9293) — di dalam fungsi `updateMCGGRank()`
    `saveState();`
  - [`app.js:9328`](app.js#L9328) — di dalam fungsi `updateMCGGCommander()`
    `saveState();`
  - [`app.js:9364`](app.js#L9364) — di dalam fungsi `updateMCGGPenalty()`
    `saveState();`
  - [`app.js:9689`](app.js#L9689) — di dalam fungsi `drawMatchPool()`
    `saveState();`
  - [`app.js:9740`](app.js#L9740) — di dalam fungsi `assignMatchPoolToPlayers()`
    `saveState();`
  - [`app.js:9760`](app.js#L9760) — di dalam fungsi `toggleLockMatchDraw()`
    `saveState();`
  - [`app.js:9786`](app.js#L9786) — di dalam fungsi `nextMatchDraw()`
    `saveState();`
  - [`app.js:9819`](app.js#L9819) — di dalam fungsi `resetLobbyDraw()`
    `saveState();`
  - [`app.js:10597`](app.js#L10597) — di dalam fungsi `loadSampleData()`
    `saveState();`
  - [`app.js:10610`](app.js#L10610) — di dalam fungsi `clearAllData()`
    `saveState();`
  - [`app.js:10788`](app.js#L10788) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `saveState();`
  - [`app.js:12110`](app.js#L12110) — di dalam fungsi `shuffleMCGG32Besar()`
    `saveState();`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`updateAuthUI()`](#updateauthui), [`updateCounts()`](#updatecounts)

<a id="updatecounts"></a>
#### `updateCounts()`

- **Definisi:** [`app.js:1821`](app.js#L1821)
- **Deskripsi:** Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status verifikasi di header UI.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:913`](app.js#L913) — di dalam fungsi `bypassLoaderWithCache()`
    `updateCounts();`
  - [`app.js:1484`](app.js#L1484) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCounts();`
  - [`app.js:1818`](app.js#L1818) — di dalam fungsi `saveState()`
    `updateCounts();`
  - [`app.js:3227`](app.js#L3227) — di dalam fungsi `setParticipantStatus()`
    `updateCounts();`
  - [`app.js:3280`](app.js#L3280) — di dalam fungsi `deleteParticipant()`
    `updateCounts();`
  - [`app.js:10615`](app.js#L10615) — di dalam fungsi `clearAllData()`
    `updateCounts();`
  - [`app.js:10637`](app.js#L10637) — cakupan global / event handler
    `updateCounts();`

<a id="toggleofficial2form"></a>
#### `toggleOfficial2Form()`

- **Definisi:** [`app.js:2046`](app.js#L2046)
- **Deskripsi:** Toggle Official 2 Form
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:199`](index.html#L199) — Event `onchange`
    `<input type="checkbox" id="has_official_2" onchange="toggleOfficial2Form()">`
  - [`app.js:1018`](app.js#L1018) — di dalam fungsi `restoreFormDraft()`
    `toggleOfficial2Form();`
  - [`app.js:3206`](app.js#L3206) — di dalam fungsi `handleRegister()`
    `toggleOfficial2Form();`
  - [`app.js:10625`](app.js#L10625) — cakupan global / event handler
    `toggleOfficial2Form();`

<a id="renderplayersforminputs"></a>
#### `renderPlayersFormInputs()`

- **Definisi:** [`app.js:2053`](app.js#L2053)
- **Deskripsi:** Generate the 8 players form fields dynamically (Included In-Game Nickname and Per-Player ID Card Uploader)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3204`](app.js#L3204) — di dalam fungsi `handleRegister()`
    `renderPlayersFormInputs();`
  - [`app.js:10623`](app.js#L10623) — cakupan global / event handler
    `renderPlayersFormInputs();`
- **Memanggil Fungsi Internal:** [`handlePlayerIdCardPreview()`](#handleplayeridcardpreview)

<a id="togglecategoryform"></a>
#### `toggleCategoryForm()`

- **Definisi:** [`app.js:2112`](app.js#L2112)
- **Deskripsi:** Switch form between MLBB and MCGG cleanly
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:91`](index.html#L91) — Event `onchange`
    `<select id="gameCategory" required onchange="toggleCategoryForm()" style="font-size: 1rem; font-weig`
  - [`app.js:3205`](app.js#L3205) — di dalam fungsi `handleRegister()`
    `toggleCategoryForm();`
  - [`app.js:10624`](app.js#L10624) — cakupan global / event handler
    `toggleCategoryForm();`

<a id="renderregistrationui"></a>
#### `renderRegistrationUI()`

- **Definisi:** [`app.js:2208`](app.js#L2208)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1467`](app.js#L1467) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRegistrationUI();`
  - [`app.js:2287`](app.js#L2287) — di dalam fungsi `toggleRegistrationStatus()`
    `renderRegistrationUI();`
  - [`app.js:2526`](app.js#L2526) — di dalam fungsi `updateAuthUI()`
    `renderRegistrationUI();`
  - [`functional_tests.js:826`](functional_tests.js#L826) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderRegistrationUI()'), 'Harus memiliki renderRegistrationUI()')`

<a id="updateregistrationdatalists"></a>
#### `updateRegistrationDatalists()`

- **Definisi:** [`app.js:2606`](app.js#L2606)
- **Deskripsi:** Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit form dimatikan)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3207`](app.js#L3207) — di dalam fungsi `handleRegister()`
    `updateRegistrationDatalists();`
  - [`app.js:3622`](app.js#L3622) — di dalam fungsi `renderParticipants()`
    `updateRegistrationDatalists();`
  - [`functional_tests.js:171`](functional_tests.js#L171) — pada skenario pengujian
    `assert(appCode.includes('function updateRegistrationDatalists('), 'Harus ada fungsi updateRegistrati`

<a id="handleteamnameinput"></a>
#### `handleTeamNameInput(val)`

- **Definisi:** [`app.js:2620`](app.js#L2620)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:106`](index.html#L106) — Event `oninput`
    `<input type="text" id="teamName" oninput="handleTeamNameInput(this.value)" placeholder="Masukkan nam`
  - [`functional_tests.js:172`](functional_tests.js#L172) — pada skenario pengujian
    `assert(appCode.includes('function handleTeamNameInput('), 'Harus ada handler handleTeamNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="shuffleandgeneratetournament"></a>
#### `shuffleAndGenerateTournament()`

- **Definisi:** [`app.js:3833`](app.js#L3833)
- **Deskripsi:** Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum dikunci.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:483`](index.html#L483) — Event `onclick`
    `<button id="btnShuffleMLBB" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0.85rem;`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`refreshAndScrollToGroupOrBracket()`](#refreshandscrolltogrouporbracket)

<a id="findteamgroupandrank"></a>
#### `findTeamGroupAndRank(teamName)`

- **Definisi:** [`app.js:4401`](app.js#L4401)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4461`](app.js#L4461) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(mUB.teamA);`
  - [`app.js:4462`](app.js#L4462) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(mUB.teamB);`
  - [`app.js:4463`](app.js#L4463) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoC = findTeamGroupAndRank(mLB.teamB);`
  - [`app.js:4528`](app.js#L4528) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(m.teamA);`
  - [`app.js:4529`](app.js#L4529) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(m.teamB);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`isSameTeamName()`](#issameteamname)

<a id="opentestdrawinnewwindow"></a>
#### `openTestDrawInNewWindow()`

- **Definisi:** [`app.js:4626`](app.js#L4626)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1075`](index.html#L1075) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; co`
  - [`app.js:4571`](app.js#L4571) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(`
  - [`app.js:4708`](app.js#L4708) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem; border-color:var(-`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast)

<a id="pickwinner"></a>
#### `pickWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:5111`](app.js#L5111)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5177`](app.js#L5177) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:5181`](app.js#L5181) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket)

<a id="getprefix"></a>
#### `getPrefix(team)`

- **Definisi:** [`app.js:5218`](app.js#L5218)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:5256`](app.js#L5256) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:5264`](app.js#L5264) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:5273`](app.js#L5273) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:5289`](app.js#L5289) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountA = teamPrefix ? groups[a].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:5290`](app.js#L5290) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountB = teamPrefix ? groups[b].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:5323`](app.js#L5323) — di dalam fungsi `allocateMLBBGroups()`
    `const p = getPrefix(t);`
  - [`app.js:5330`](app.js#L5330) — di dalam fungsi `allocateMLBBGroups()`
    `const pA = getPrefix(a), pB = getPrefix(b);`
  - [`app.js:5338`](app.js#L5338) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:5341`](app.js#L5341) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPrefixConflict = (g) => teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`

<a id="getdept"></a>
#### `getDept(team)`

- **Definisi:** [`app.js:5226`](app.js#L5226)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:5257`](app.js#L5257) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:5265`](app.js#L5265) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDep = teamDept && groups[g].some(t => getDept(t) === teamDept);`
  - [`app.js:5324`](app.js#L5324) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getDept(t);`
  - [`app.js:5331`](app.js#L5331) — di dalam fungsi `allocateMLBBGroups()`
    `const dA = getDept(a), dB = getDept(b);`
  - [`app.js:5339`](app.js#L5339) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:5342`](app.js#L5342) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDeptConflict = (g) => teamDept && groups[g].some(t => getDept(t) === teamDept);`

<a id="isinvited"></a>
#### `isInvited(team)`

- **Definisi:** [`app.js:5237`](app.js#L5237)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5242`](app.js#L5242) — di dalam fungsi `allocateMLBBGroups()`
    `let invited = teamsList.filter(t => isInvited(t));`
  - [`app.js:5243`](app.js#L5243) — di dalam fungsi `allocateMLBBGroups()`
    `let regular = teamsList.filter(t => !isInvited(t));`
  - [`app.js:5263`](app.js#L5263) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:5272`](app.js#L5272) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:5281`](app.js#L5281) — di dalam fungsi `allocateMLBBGroups()`
    `if (!groups[g].some(t => isInvited(t))) { targetGroup = g; break; }`

<a id="getoverbasecount"></a>
#### `getOverBaseCount()`

- **Definisi:** [`app.js:5305`](app.js#L5305)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5311`](app.js#L5311) — di dalam fungsi `allocateMLBBGroups()`
    `return getOverBaseCount() < remainder;`

<a id="canaccept"></a>
#### `canAccept(g)`

- **Definisi:** [`app.js:5307`](app.js#L5307)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="hasprefixconflict"></a>
#### `hasPrefixConflict(g)`

- **Definisi:** [`app.js:5341`](app.js#L5341)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5360`](app.js#L5360) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`
  - [`app.js:5369`](app.js#L5369) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g)) {`

<a id="hasdeptconflict"></a>
#### `hasDeptConflict(g)`

- **Definisi:** [`app.js:5342`](app.js#L5342)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5360`](app.js#L5360) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`

<a id="updategrouprecord"></a>
#### `updateGroupRecord(gName, idx, field, val)`

- **Definisi:** [`app.js:5435`](app.js#L5435)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:6403`](app.js#L6403) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" o`
  - [`app.js:6407`](app.js#L6407) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" `
  - [`app.js:11474`](app.js#L11474) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:11477`](app.js#L11477) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="getsortedgroupteams"></a>
#### `getSortedGroupTeams(gName)`

- **Definisi:** [`app.js:5550`](app.js#L5550)
- **Deskripsi:** Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkulasi MVP terkini
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:3891`](app.js#L3891) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4404`](app.js#L4404) — di dalam fungsi `findTeamGroupAndRank()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4546`](app.js#L4546) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4913`](app.js#L4913) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const sorted = typeof getSortedGroupTeams === 'function' ? getSortedGroupTeams(gName) : groupTeams;`
  - [`app.js:5840`](app.js#L5840) — di dalam fungsi `initGroupPlayoff()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:5966`](app.js#L5966) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:5967`](app.js#L5967) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:5968`](app.js#L5968) — di dalam fungsi `initGroupPlayoff()`
    `const grpC = getSortedGroupTeams('Grup C');`
  - [`app.js:5969`](app.js#L5969) — di dalam fungsi `initGroupPlayoff()`
    `const grpD = getSortedGroupTeams('Grup D');`
  - [`app.js:6045`](app.js#L6045) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:6046`](app.js#L6046) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:6374`](app.js#L6374) — di dalam fungsi `renderGroupStageUI()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:11416`](app.js#L11416) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const sorted = getSortedGroupTeams(gName);`
- **Memanggil Fungsi Internal:** [`compareMLBBTeams()`](#comparemlbbteams)

<a id="shufflearray"></a>
#### `shuffleArray(arr)`

- **Definisi:** [`app.js:5578`](app.js#L5578)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:5591`](app.js#L5591) — di dalam fungsi `findValidBracketPermutation()`
    `const shuffledRemaining = shuffleArray(remainingItems);`
  - [`app.js:5640`](app.js#L5640) — di dalam fungsi `solveRemainingBracketSlots()`
    `const shuffledItems = shuffleArray(remainingItems);`
  - [`app.js:5684`](app.js#L5684) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const otherInvited = shuffleArray(allInvited.filter(x => x !== atmoItem && x !== alphaItem && x !== `
  - [`app.js:5736`](app.js#L5736) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const wingSlots = shuffleArray([w * 2, w * 2 + 1]);`
  - [`app.js:5797`](app.js#L5797) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const shuffledInv = shuffleArray(j3Invited);`
  - [`app.js:5798`](app.js#L5798) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const targetWings = shuffleArray([0, 1, 2, 3]);`
  - [`app.js:5867`](app.js#L5867) — di dalam fungsi `initGroupPlayoff()`
    `branchJ1 = shuffleArray([...j1List]);`
  - [`app.js:5998`](app.js#L5998) — di dalam fungsi `initGroupPlayoff()`
    `const candJ1 = shuffleArray([...j1List]);`
  - [`app.js:6016`](app.js#L6016) — di dalam fungsi `initGroupPlayoff()`
    `bJ1 = shuffleArray([...j1List]);`

<a id="backtrack"></a>
#### `backtrack(slotIdx, remainingItems, currentArr)`

- **Definisi:** [`app.js:5589`](app.js#L5589)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5597`](app.js#L5597) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);`
  - [`app.js:5604`](app.js#L5604) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(0, candidates, []);`
  - [`app.js:5641`](app.js#L5641) — di dalam fungsi `solveRemainingBracketSlots()`
    `function backtrack(idx, arr) {`
  - [`app.js:5650`](app.js#L5650) — di dalam fungsi `solveRemainingBracketSlots()`
    `const res = backtrack(idx + 1, nextArr);`
  - [`app.js:5655`](app.js#L5655) — di dalam fungsi `solveRemainingBracketSlots()`
    `return backtrack(0, [...currentArray]);`

<a id="isteamatmo"></a>
#### `isTeamAtmo(teamName)`

- **Definisi:** [`app.js:5611`](app.js#L5611)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5681`](app.js#L5681) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const atmoItem = allInvited.find(x => isTeamAtmo(x.team));`
  - [`app.js:6002`](app.js#L6002) — di dalam fungsi `initGroupPlayoff()`
    `const atmoIdx = candJ1.findIndex(x => isTeamAtmo(x.team)) !== -1 ? candJ1.findIndex(x => isTeamAtmo(`

<a id="isteamalpha"></a>
#### `isTeamAlpha(teamName)`

- **Definisi:** [`app.js:5616`](app.js#L5616)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5682`](app.js#L5682) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const alphaItem = allInvited.find(x => isTeamAlpha(x.team) && x !== atmoItem);`
  - [`app.js:6003`](app.js#L6003) — di dalam fungsi `initGroupPlayoff()`
    `const alphaIdx = candJ1.findIndex(x => isTeamAlpha(x.team)) !== -1 ? candJ1.findIndex(x => isTeamAlp`

<a id="isteamappa"></a>
#### `isTeamAppa(teamName)`

- **Definisi:** [`app.js:5622`](app.js#L5622)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5683`](app.js#L5683) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const appaItem = allInvited.find(x => isTeamAppa(x.team) && x !== atmoItem && x !== alphaItem);`

<a id="backtrack"></a>
#### `backtrack(idx, arr)`

- **Definisi:** [`app.js:5641`](app.js#L5641)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5589`](app.js#L5589) — di dalam fungsi `findValidBracketPermutation()`
    `function backtrack(slotIdx, remainingItems, currentArr) {`
  - [`app.js:5597`](app.js#L5597) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);`
  - [`app.js:5604`](app.js#L5604) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(0, candidates, []);`
  - [`app.js:5650`](app.js#L5650) — di dalam fungsi `solveRemainingBracketSlots()`
    `const res = backtrack(idx + 1, nextArr);`
  - [`app.js:5655`](app.js#L5655) — di dalam fungsi `solveRemainingBracketSlots()`
    `return backtrack(0, [...currentArray]);`

<a id="isinv"></a>
#### `isInv(t)`

- **Definisi:** [`app.js:5668`](app.js#L5668)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5670`](app.js#L5670) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Invited = j1List.filter(item => isInv(item.team));`
  - [`app.js:5671`](app.js#L5671) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Regular = j1List.filter(item => !isInv(item.team));`
  - [`app.js:5672`](app.js#L5672) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Invited = j2List.filter(item => isInv(item.team));`
  - [`app.js:5673`](app.js#L5673) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Regular = j2List.filter(item => !isInv(item.team));`
  - [`app.js:5748`](app.js#L5748) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `(!branchJ1[s] || (!isInv(branchJ1[s].team) && branchJ1[s].group !== item.group))`
  - [`app.js:5789`](app.js#L5789) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Invited = j3List.filter(item => isInv(item.team));`
  - [`app.js:5790`](app.js#L5790) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Regular = j3List.filter(item => !isInv(item.team));`

<a id="isinv"></a>
#### `isInv(t)`

- **Definisi:** [`app.js:5788`](app.js#L5788)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5670`](app.js#L5670) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Invited = j1List.filter(item => isInv(item.team));`
  - [`app.js:5671`](app.js#L5671) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Regular = j1List.filter(item => !isInv(item.team));`
  - [`app.js:5672`](app.js#L5672) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Invited = j2List.filter(item => isInv(item.team));`
  - [`app.js:5673`](app.js#L5673) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Regular = j2List.filter(item => !isInv(item.team));`
  - [`app.js:5748`](app.js#L5748) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `(!branchJ1[s] || (!isInv(branchJ1[s].team) && branchJ1[s].group !== item.group))`
  - [`app.js:5789`](app.js#L5789) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Invited = j3List.filter(item => isInv(item.team));`
  - [`app.js:5790`](app.js#L5790) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Regular = j3List.filter(item => !isInv(item.team));`

<a id="resolveteamnameingroup"></a>
#### `resolveTeamNameInGroup(rawName, groupTeams)`

- **Definisi:** [`app.js:6607`](app.js#L6607)
- **Deskripsi:** Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisan alias/tanda kurung di poster)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6721`](app.js#L6721) — di dalam fungsi `getGroupFixtures()`
    `const realTeamA = resolveTeamNameInGroup(item.teamA, teams);`
  - [`app.js:6722`](app.js#L6722) — di dalam fungsi `getGroupFixtures()`
    `const realTeamB = resolveTeamNameInGroup(item.teamB, teams);`

<a id="issameteamname"></a>
#### `isSameTeamName(name1, name2)`

- **Definisi:** [`app.js:6623`](app.js#L6623)
- **Deskripsi:** Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, spasi, tanda kurung, dan alias
- **Titik Pemanggilan (38 lokasi):**
  - [`app.js:4117`](app.js#L4117) — di dalam fungsi `openPlayoffScoreModal()`
    `if (isSameTeamName(preselectWinner, match.teamA)) {`
  - [`app.js:4120`](app.js#L4120) — di dalam fungsi `openPlayoffScoreModal()`
    `} else if (isSameTeamName(preselectWinner, match.teamB)) {`
  - [`app.js:4405`](app.js#L4405) — di dalam fungsi `findTeamGroupAndRank()`
    `const idx = sorted.findIndex(t => isSameTeamName(t.name, teamName));`
  - [`app.js:4919`](app.js#L4919) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const teamObj = groupTeams.find(t => isSameTeamName(t.name, tName)) || { name: tName };`
  - [`app.js:4920`](app.js#L4920) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const rankIdx = sorted.findIndex(t => isSameTeamName(t.name, tName));`
  - [`app.js:5461`](app.js#L5461) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if ((isSameTeamName(m.teamA, teamA) && isSameTeamName(m.teamB, teamB)) ||`
  - [`app.js:5462`](app.js#L5462) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `(isSameTeamName(m.teamA, teamB) && isSameTeamName(m.teamB, teamA))) {`
  - [`app.js:5488`](app.js#L5488) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamA) || isSameTeamName(cleanWinner, teamA)) {`
  - [`app.js:5491`](app.js#L5491) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamB) || isSameTeamName(cleanWinner, teamB)) {`
  - [`app.js:5498`](app.js#L5498) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const isAFirst = isSameTeamName(match.teamA, teamA);`
  - [`app.js:6643`](app.js#L6643) — di dalam fungsi `findGroupNameForTeam()`
    `if (Array.isArray(gsd[g]) && gsd[g].some(t => isSameTeamName(t.name, teamName))) {`
  - [`app.js:6820`](app.js#L6820) — di dalam fungsi `getGroupFixtures()`
    `if ((isSameTeamName(item.teamA, p.teamA) && isSameTeamName(item.teamB, p.teamB)) ||`
  - [`app.js:6821`](app.js#L6821) — di dalam fungsi `getGroupFixtures()`
    `(isSameTeamName(item.teamA, p.teamB) && isSameTeamName(item.teamB, p.teamA))) {`
  - [`app.js:6839`](app.js#L6839) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.teamA, p.teamA)) {`
  - [`app.js:6842`](app.js#L6842) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.teamA, p.teamB)) {`
  - [`app.js:6855`](app.js#L6855) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.winner, p.teamA) && Number(scoreA) < Number(scoreB)) {`
  - [`app.js:6858`](app.js#L6858) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.teamA, p.teamA)) {`
  - [`app.js:6864`](app.js#L6864) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.winner, p.teamB) && Number(scoreB) < Number(scoreA)) {`
  - [`app.js:6867`](app.js#L6867) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.teamA, p.teamB)) {`
  - [`app.js:6951`](app.js#L6951) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(m.teamA, canonTeamB) && isSameTeamName(m.teamB, canonTeamA)) {`
  - [`app.js:6963`](app.js#L6963) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(normWinner, canonTeamA) && sA < sB) {`
  - [`app.js:6965`](app.js#L6965) — di dalam fungsi `deduplicateGroupMatchResults()`
    `} else if (isSameTeamName(normWinner, canonTeamB) && sB < sA) {`
  - [`app.js:6997`](app.js#L6997) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(mergedWinner, canonTeamA) && sA < sB) {`
  - [`app.js:6999`](app.js#L6999) — di dalam fungsi `deduplicateGroupMatchResults()`
    `} else if (isSameTeamName(mergedWinner, canonTeamB) && sB < sA) {`
  - [`app.js:7087`](app.js#L7087) — di dalam fungsi `setGroupMatchScore()`
    `if (isSameTeamName(winner, teamA) && Number(scoreA) < Number(scoreB)) {`
  - [`app.js:7089`](app.js#L7089) — di dalam fungsi `setGroupMatchScore()`
    `} else if (isSameTeamName(winner, teamB) && Number(scoreB) < Number(scoreA)) {`
  - [`app.js:7105`](app.js#L7105) — di dalam fungsi `setGroupMatchScore()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:7106`](app.js#L7106) — di dalam fungsi `setGroupMatchScore()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:7247`](app.js#L7247) — di dalam fungsi `openMLBBGroupMvpModal()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:7248`](app.js#L7248) — di dalam fungsi `openMLBBGroupMvpModal()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:8222`](app.js#L8222) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamA = isSameTeamName(m.teamA, t.name);`
  - [`app.js:8223`](app.js#L8223) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamB = isSameTeamName(m.teamB, t.name);`
  - [`app.js:8250`](app.js#L8250) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(m.winner, t.name) ||`
  - [`app.js:8251`](app.js#L8251) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(cleanWinner, t.name)`
  - [`app.js:8545`](app.js#L8545) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:8546`](app.js#L8546) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`
  - [`app.js:11542`](app.js#L11542) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:11543`](app.js#L11543) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`

<a id="findgroupnameforteam"></a>
#### `findGroupNameForTeam(teamName)`

- **Definisi:** [`app.js:6639`](app.js#L6639)
- **Deskripsi:** Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:7235`](app.js#L7235) — di dalam fungsi `openMLBBGroupMvpModal()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:7818`](app.js#L7818) — di dalam fungsi `setGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:7911`](app.js#L7911) — di dalam fungsi `promptGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:7927`](app.js#L7927) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `gName = (typeof findGroupNameForTeam === 'function' && (findGroupNameForTeam(teamA) || findGroupName`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname)

<a id="getcanonicalgroupmatchid"></a>
#### `getCanonicalGroupMatchId(gName, teamA, teamB)`

- **Definisi:** [`app.js:6904`](app.js#L6904)
- **Deskripsi:** Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tidak terpengaruh urutan teamA vs teamB)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5453`](app.js#L5453) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const canonId = getCanonicalGroupMatchId(gName || '', teamA, teamB);`
  - [`app.js:6810`](app.js#L6810) — di dalam fungsi `getGroupFixtures()`
    `const canonId = getCanonicalGroupMatchId(gName, p.teamA, p.teamB);`
  - [`app.js:7096`](app.js#L7096) — di dalam fungsi `setGroupMatchScore()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:7237`](app.js#L7237) — di dalam fungsi `openMLBBGroupMvpModal()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:7821`](app.js#L7821) — di dalam fungsi `setGroupMatchMVP()`
    `const canonId = (teamA && teamB) ? getCanonicalGroupMatchId(gName, teamA, teamB) : matchId;`
  - [`app.js:7929`](app.js#L7929) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `const canonId = typeof getCanonicalGroupMatchId === 'function' ? getCanonicalGroupMatchId(gName, tea`
  - [`app.js:8206`](app.js#L8206) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const pairKey = getCanonicalGroupMatchId(gName, m.teamA, m.teamB);`

<a id="isgroupmatchescompleted"></a>
#### `isGroupMatchesCompleted(gName)`

- **Definisi:** [`app.js:6913`](app.js#L6913)
- **Deskripsi:** Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah selesai diinput
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4914`](app.js#L4914) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const isGroupAllDone = typeof isGroupMatchesCompleted === 'function' ? isGroupMatchesCompleted(gName`
  - [`app.js:6375`](app.js#L6375) — di dalam fungsi `renderGroupStageUI()`
    `const isGroupAllDone = isGroupMatchesCompleted(gName);`
  - [`app.js:11418`](app.js#L11418) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isGroupAllDone = isGroupMatchesCompleted(gName);`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="deduplicategroupmatchresults"></a>
#### `deduplicateGroupMatchResults()`

- **Definisi:** [`app.js:6931`](app.js#L6931)
- **Deskripsi:** Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri terbalik / ganda
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1433`](app.js#L1433) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
  - [`app.js:8188`](app.js#L8188) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `deduplicateGroupMatchResults();`
  - [`app.js:10647`](app.js#L10647) — cakupan global / event handler
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname)

<a id="getgrouprestingteams"></a>
#### `getGroupRestingTeams(gName, day)`

- **Definisi:** [`app.js:7023`](app.js#L7023)
- **Deskripsi:** Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di grup tertentu
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8509`](app.js#L8509) — di dalam fungsi `renderGroupFixturesUI()`
    `const resting = getGroupRestingTeams(gName, parseInt(mlbbActiveDayFilter, 10));`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="setgroupmatchscore"></a>
#### `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB, explicitWinner = null)`

- **Definisi:** [`app.js:7034`](app.js#L7034)
- **Deskripsi:** Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara otomatis.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:7158`](app.js#L7158) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 2, '${teamB} (Menang WO)');`
  - [`app.js:7160`](app.js#L7160) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 2, 0, '${teamA} (Menang WO)');`
  - [`app.js:7162`](app.js#L7162) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Keduanya WO (0-0)');`
  - [`app.js:7174`](app.js#L7174) — di dalam fungsi `setGroupMatchSpecialResult()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Imbang (0-0)');`
  - [`app.js:7185`](app.js#L7185) — di dalam fungsi `saveGroupFixtureScore()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB);`
  - [`app.js:11568`](app.js#L11568) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`functional_tests.js:676`](functional_tests.js#L676) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchScore('), 'app.js harus memiliki setter skor setGroup`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="promptgroupmatchwo"></a>
#### `promptGroupMatchWO(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:7144`](app.js#L7144)
- **Deskripsi:** Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupun kedua tim
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7172`](app.js#L7172) — di dalam fungsi `setGroupMatchSpecialResult()`
    `promptGroupMatchWO(matchId, gName, teamA, teamB);`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="setgroupmatchspecialresult"></a>
#### `setGroupMatchSpecialResult(matchId, gName, teamA, teamB, resultType)`

- **Definisi:** [`app.js:7169`](app.js#L7169)
- **Deskripsi:** Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imbang)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:8590`](app.js#L8590) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#f871`
  - [`app.js:8591`](app.js#L8591) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#fbbf`
  - [`app.js:11571`](app.js#L11571) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:11572`](app.js#L11572) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
- **Memanggil Fungsi Internal:** [`promptGroupMatchWO()`](#promptgroupmatchwo), [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="selectmvpplayer"></a>
#### `selectMvpPlayer(nickname, realName, teamName)`

- **Definisi:** [`app.js:7600`](app.js#L7600)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7573`](app.js#L7573) — di dalam fungsi `renderMvpRosterList()`
    `<div class="mvp-roster-chip ${isSelected ? 'selected' : ''}" onclick="selectMvpPlayer('${safeIgn}', `
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="rendermvpquickherochips"></a>
#### `renderMvpQuickHeroChips(activeHero)`

- **Definisi:** [`app.js:7632`](app.js#L7632)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7393`](app.js#L7393) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:7487`](app.js#L7487) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:7666`](app.js#L7666) — di dalam fungsi `selectMvpQuickHero()`
    `renderMvpQuickHeroChips(heroName);`
- **Memanggil Fungsi Internal:** [`selectMvpQuickHero()`](#selectmvpquickhero)

<a id="selectmvpquickhero"></a>
#### `selectMvpQuickHero(heroName)`

- **Definisi:** [`app.js:7652`](app.js#L7652)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7643`](app.js#L7643) — di dalam fungsi `renderMvpQuickHeroChips()`
    `<span class="mvp-hero-pill ${isActive ? 'active' : ''}" onclick="selectMvpQuickHero('${safeHero}')">`
- **Memanggil Fungsi Internal:** [`renderMvpQuickHeroChips()`](#rendermvpquickherochips)

<a id="saveselectedmvp"></a>
#### `saveSelectedMvp()`

- **Definisi:** [`app.js:7669`](app.js#L7669)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:936`](index.html#L936) — Event `onclick`
    `<button type="button" class="btn btn-primary" style="background: var(--yokke-gold); color: #0b1120; `
  - [`app.js:7765`](app.js#L7765) — di dalam fungsi `deleteCurrentMvp()`
    `saveSelectedMvp();`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp), [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal)

<a id="deletecurrentmvp"></a>
#### `deleteCurrentMvp()`

- **Definisi:** [`app.js:7741`](app.js#L7741)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:929`](index.html#L929) — Event `onclick`
    `<button type="button" id="btnDeleteMvp" class="btn btn-outline" style="color: var(--yokke-red); bord`
- **Memanggil Fungsi Internal:** [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal), [`saveSelectedMvp()`](#saveselectedmvp), [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp)

<a id="setgroupmatchmvp"></a>
#### `setGroupMatchMVP(matchId, mvpPlayer, mvpHero, mvpTeam, gameMvps = null)`

- **Definisi:** [`app.js:7793`](app.js#L7793)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7733`](app.js#L7733) — di dalam fungsi `saveSelectedMvp()`
    `setGroupMatchMVP(ctx.canonId, summaryPlayer, summaryHero, summaryTeam, validGames);`
  - [`app.js:7785`](app.js#L7785) — di dalam fungsi `deleteCurrentMvp()`
    `setGroupMatchMVP(ctx.canonId, null, null, null, []);`
  - [`functional_tests.js:790`](functional_tests.js#L790) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchMVP('), 'Harus memiliki setGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="promptgroupmatchmvp"></a>
#### `promptGroupMatchMVP(matchId, teamA, teamB, gName = '')`

- **Definisi:** [`app.js:7908`](app.js#L7908)
- **Deskripsi:** Delegasi fungsi promptGroupMatchMVP ke modal interaktif
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:791`](functional_tests.js#L791) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptGroupMatchMVP('), 'Harus memiliki promptGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="togglematchplayerverify"></a>
#### `toggleMatchPlayerVerify(playerKey)`

- **Definisi:** [`app.js:7972`](app.js#L7972)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8146`](app.js#L8146) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn ${isVerified ? 'btn-primary' : 'btn-outline'}" style="font-size:0.7`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="verifyallmatchplayers"></a>
#### `verifyAllMatchPlayers(teamName, shouldVerify = true)`

- **Definisi:** [`app.js:7990`](app.js#L7990)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8057`](app.js#L8057) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8060`](app.js#L8060) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="resetgroupmatchscore"></a>
#### `resetGroupMatchScore(matchId)`

- **Definisi:** [`app.js:8172`](app.js#L8172)
- **Deskripsi:** Mereset skor pertandingan grup MLBB ke status belum bertanding.
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="findprevious"></a>
#### `findPrevious(ply)`

- **Definisi:** [`app.js:8830`](app.js#L8830)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8843`](app.js#L8843) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`app.js:8842`](app.js#L8842)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8913`](app.js#L8913) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:8965`](app.js#L8965) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

<a id="findprevsemi"></a>
#### `findPrevSemi(ply)`

- **Definisi:** [`app.js:9145`](app.js#L9145)
- **Deskripsi:** Preserve poin semifinal jika sudah ada
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9154`](app.js#L9154) — di dalam fungsi `syncMCGGSemiFinal()`
    `const prev = findPrevSemi(p) || {};`

<a id="mapsemiplayer"></a>
#### `mapSemiPlayer(p)`

- **Definisi:** [`app.js:9153`](app.js#L9153)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevinarr"></a>
#### `findPrevInArr(p, arr)`

- **Definisi:** [`app.js:9182`](app.js#L9182)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9192`](app.js#L9192) — di dalam fungsi `syncMCGGGrandFinal()`
    `const prev = findPrevInArr(p, existingGF);`

<a id="mapgfplayer"></a>
#### `mapGFPlayer(p)`

- **Definisi:** [`app.js:9191`](app.js#L9191)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:9224`](app.js#L9224) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9225`](app.js#L9225) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9254`](app.js#L9254) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9255`](app.js#L9255) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`

<a id="drawmatchpool"></a>
#### `drawMatchPool(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9621`](app.js#L9621)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 1: Acak 8 Pool Commander untuk Group/Lobby Ini ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9436`](app.js#L9436) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaft`
  - [`app.js:9792`](app.js#L9792) — di dalam fungsi `drawMatchCommanders()`
    `drawMatchPool(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="assignmatchpooltoplayers"></a>
#### `assignMatchPoolToPlayers(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9696`](app.js#L9696)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 2: Pasangkan 8 Pool Commander ke Masing-Masing Pemain ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9443`](app.js#L9443) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasPool ? "alert('⚠️ Silakan acak 8 Pool Commander terlebih dahulu.')" : (isMatchLocked `
  - [`app.js:9793`](app.js#L9793) — di dalam fungsi `drawMatchCommanders()`
    `assignMatchPoolToPlayers(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="togglelockmatchdraw"></a>
#### `toggleLockMatchDraw(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9747`](app.js#L9747)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 3: Kunci Match (Lock) / Buka Kunci ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9450`](app.js#L9450) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasAssigned ? "alert('⚠️ Pasangkan commander ke pemain terlebih dahulu sebelum mengunci.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="nextmatchdraw"></a>
#### `nextMatchDraw(targetLobbyKey, nextMatchNum)`

- **Definisi:** [`app.js:9774`](app.js#L9774)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 4: Lanjut ke Match Berikutnya (Match 2) ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9458`](app.js#L9458) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="nextMatchDraw('${lobbyKey}', 2)">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="showmatch3draftinfo"></a>
#### `showMatch3DraftInfo()`

- **Definisi:** [`app.js:9859`](app.js#L9859)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9463`](app.js#L9463) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="showMatch3DraftInfo()">`

<a id="buildroundcell"></a>
#### `buildRoundCell(player, roundKey, cmdKey, targetLobby)`

- **Definisi:** [`app.js:10297`](app.js#L10297)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10285`](app.js#L10285) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r1', 'c1', lobbyKey)}</td>`
  - [`app.js:10286`](app.js#L10286) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r2', 'c2', lobbyKey)}</td>`
  - [`app.js:10287`](app.js#L10287) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r3', 'c3', lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`updateMCGGCommander()`](#updatemcggcommander), [`updateMCGGRank()`](#updatemcggrank)

<a id="loadsampledata"></a>
#### `loadSampleData()`

- **Definisi:** [`app.js:10398`](app.js#L10398)
- **Deskripsi:** Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation - No Sensitive Info)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:331`](index.html#L331) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="loadSamp`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="clearalldata"></a>
#### `clearAllData()`

- **Definisi:** [`app.js:10602`](app.js#L10602)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:332`](index.html#L332) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="clearAll`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="rendersinglematchnodehtml"></a>
#### `renderSingleMatchNodeHtml(m, rIdx, mIdx, topPx, activeNodeKey, isLower = false)`

- **Definisi:** [`app.js:10823`](app.js#L10823)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:10937`](app.js#L10937) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col0 += renderSingleMatchNodeHtml(groupPlayoffMatches[1][4 + i], 1, 4 + i, c8[i] - 38, activeNodeKey`
  - [`app.js:10953`](app.js#L10953) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col1 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][2 + i], 2, 2 + i, c4[i] - 38, activeNodeKey`
  - [`app.js:10969`](app.js#L10969) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][6 + i], 2, 6 + i, c4[i] - 38, activeNodeKey`
  - [`app.js:10982`](app.js#L10982) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[3][0], 3, 0, c2[0] - 38, activeNodeKey, true);`
  - [`app.js:10983`](app.js#L10983) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[3][1], 3, 1, c2[1] - 38, activeNodeKey, true);`
  - [`app.js:10992`](app.js#L10992) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col4 += renderSingleMatchNodeHtml(groupPlayoffMatches[4][4], 4, 4, c1[0] - 38, activeNodeKey, true);`
  - [`app.js:11001`](app.js#L11001) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col5 += renderSingleMatchNodeHtml(groupPlayoffMatches[5][0], 5, 0, c1[0] - 38, activeNodeKey, false)`
  - [`app.js:11013`](app.js#L11013) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col0 += renderSingleMatchNodeHtml(groupPlayoffMatches[0][i], 0, i, c8[i] - 38, activeNodeKey, false)`
  - [`app.js:11029`](app.js#L11029) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col1 += renderSingleMatchNodeHtml(groupPlayoffMatches[1][i], 1, i, c4[i] - 38, activeNodeKey, false)`
  - [`app.js:11042`](app.js#L11042) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][0], 2, 0, c2[0] - 38, activeNodeKey, false)`
  - [`app.js:11043`](app.js#L11043) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][1], 2, 1, c2[1] - 38, activeNodeKey, false)`
  - [`app.js:11052`](app.js#L11052) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[4][0], 4, 0, c1[0] - 38, activeNodeKey, false)`
  - [`app.js:11061`](app.js#L11061) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col4 += renderSingleMatchNodeHtml(groupPlayoffMatches[5][0], 5, 0, c1[0] - 38, activeNodeKey, false)`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`openPlayoffScoreModal()`](#openplayoffscoremodal), [`onPlayoffTeamClicked()`](#onplayoffteamclicked), [`escapeHtml()`](#escapehtml)

<a id="rendersvgconnectorcolumn"></a>
#### `renderSvgConnectorColumn(pairs, strokeColor = '#00d2ff', width = 50, height = 750)`

- **Definisi:** [`app.js:10883`](app.js#L10883)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:10948`](app.js#L10948) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg0 = renderSvgConnectorColumn(pairs0, '#ffb703');`
  - [`app.js:10964`](app.js#L10964) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg1 = renderSvgConnectorColumn(pairs1, '#ffb703');`
  - [`app.js:10978`](app.js#L10978) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg2 = renderSvgConnectorColumn(pairs2, '#ffb703');`
  - [`app.js:10988`](app.js#L10988) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg3 = renderSvgConnectorColumn(pairs3, '#ffb703');`
  - [`app.js:10997`](app.js#L10997) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg4 = renderSvgConnectorColumn(pairs4, '#ffb703');`
  - [`app.js:11024`](app.js#L11024) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg0 = renderSvgConnectorColumn(pairs0, '#00d2ff');`
  - [`app.js:11038`](app.js#L11038) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg1 = renderSvgConnectorColumn(pairs1, '#00d2ff');`
  - [`app.js:11048`](app.js#L11048) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg2 = renderSvgConnectorColumn(pairs2, '#00d2ff');`
  - [`app.js:11057`](app.js#L11057) — di dalam fungsi `renderFullPlayoffBracketHtml()`
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
  - [`app.js:136`](app.js#L136) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:5219`](app.js#L5219) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:896`](functional_tests.js#L896)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:228`](app.js#L228) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:4731`](app.js#L4731) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5238`](app.js#L5238) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:5630`](app.js#L5630) — di dalam fungsi `isPlayoffInvitedTeam()`
    `if (typeof isTeamInvited === 'function' && isTeamInvited(teamName)) return true;`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`functional_tests.js:900`](functional_tests.js#L900)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:206`](app.js#L206) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`app.js:4730`](app.js#L4730) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:5228`](app.js#L5228) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:946`](functional_tests.js#L946)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:136`](app.js#L136) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:5219`](app.js#L5219) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:952`](functional_tests.js#L952)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:228`](app.js#L228) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:4731`](app.js#L4731) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5238`](app.js#L5238) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:5630`](app.js#L5630) — di dalam fungsi `isPlayoffInvitedTeam()`
    `if (typeof isTeamInvited === 'function' && isTeamInvited(teamName)) return true;`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`

<a id="findprevious"></a>
#### `findPrevious()`

- **Definisi:** [`functional_tests.js:1085`](functional_tests.js#L1085)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8843`](app.js#L8843) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`functional_tests.js:1087`](functional_tests.js#L1087)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8913`](app.js#L8913) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:8965`](app.js#L8965) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

---

### 👥 Manajemen Peserta & Roster

<a id="getinitialparticipants"></a>
#### `getInitialParticipants()`

- **Definisi:** [`app.js:113`](app.js#L113)
- **Deskripsi:** Inisialisasi daftar peserta dari localStorage dengan validasi versi data (DATA_VERSION), fallback ke array default.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:133`](app.js#L133) — cakupan global / event handler
    `let participants = getInitialParticipants();`

<a id="handleparticipantsearch"></a>
#### `handleParticipantSearch(query)`

- **Definisi:** [`app.js:921`](app.js#L921)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:358`](index.html#L358) — Event `oninput`
    `<input type="text" id="participantSearchInput" placeholder="🔍 Cari Tim / IGN / Divisi..." oninput="`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants)

<a id="autolinkparticipantsassets"></a>
#### `autoLinkParticipantsAssets()`

- **Definisi:** [`app.js:1212`](app.js#L1212)
- **Deskripsi:** Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1478`](app.js#L1478) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3500`](app.js#L3500) — di dalam fungsi `saveParticipantEdit()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3621`](app.js#L3621) — di dalam fungsi `renderParticipants()`
    `autoLinkParticipantsAssets();`
  - [`app.js:10596`](app.js#L10596) — di dalam fungsi `loadSampleData()`
    `autoLinkParticipantsAssets();`
  - [`app.js:10622`](app.js#L10622) — cakupan global / event handler
    `autoLinkParticipantsAssets();`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap)

<a id="fetchparticipantsfromgooglesheet"></a>
#### `fetchParticipantsFromGoogleSheet(isSilent = false, isPure = false)`

- **Definisi:** [`app.js:1247`](app.js#L1247)
- **Deskripsi:** Fetch registered participants from Google Sheets via doGet Webhook Google Sheets menjadi Single Source of Truth: data yang dihapus di sheet tidak akan dimunculkan kembali.
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:344`](index.html#L344) — Event `onclick`
    `<button class="btn btn-primary" id="btnSyncGSheet" style="padding: 0.45rem 0.9rem; font-size: 0.82re`
  - [`app.js:1617`](app.js#L1617) — di dalam fungsi `resetCacheAndFollowGSheet()`
    `await fetchParticipantsFromGoogleSheet(false, true);`
  - [`app.js:10654`](app.js#L10654) — cakupan global / event handler
    `fetchParticipantsFromGoogleSheet(true, true).catch(err => {`
  - [`app.js:10660`](app.js#L10660) — cakupan global / event handler
    `await fetchParticipantsFromGoogleSheet(true, true);`
- **Memanggil Fungsi Internal:** [`getItemKey()`](#getitemkey), [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap), [`renderRules()`](#renderrules), [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`setLastSyncedMatches()`](#setlastsyncedmatches), [`renderMCGGTable()`](#rendermcggtable), [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`updateCommanderPoolFromSetup()`](#updatecommanderpoolfromsetup), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`showToast()`](#showtoast)

<a id="toggleregistrationstatus"></a>
#### `toggleRegistrationStatus()`

- **Definisi:** [`app.js:2274`](app.js#L2274)
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

- **Definisi:** [`app.js:2686`](app.js#L2686)
- **Deskripsi:** Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Card, and Automatic Update Threat
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:87`](index.html#L87) — Event `onsubmit`
    `<form id="regForm" onsubmit="handleRegister(event)">`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`showToast()`](#showtoast), [`saveState()`](#savestate), [`clearFormDraft()`](#clearformdraft), [`renderPlayersFormInputs()`](#renderplayersforminputs), [`toggleCategoryForm()`](#togglecategoryform), [`toggleOfficial2Form()`](#toggleofficial2form), [`updateRegistrationDatalists()`](#updateregistrationdatalists)

<a id="setparticipantstatus"></a>
#### `setParticipantStatus(id, newStatus)`

- **Definisi:** [`app.js:3218`](app.js#L3218)
- **Deskripsi:** Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3718`](app.js#L3718) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-success-sm" title="Verifikasi / Setujui" onclick="setParticipantStatus(${p.id`
  - [`app.js:3719`](app.js#L3719) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-danger-sm" title="Tolak / Gagal" onclick="setParticipantStatus(${p.id}, 'REJE`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="deleteparticipant"></a>
#### `deleteParticipant(id)`

- **Definisi:** [`app.js:3255`](app.js#L3255)
- **Deskripsi:** Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat ke blacklist agar tidak ter-sync ulang.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3720`](app.js#L3720) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" onclick="delet`
- **Memanggil Fungsi Internal:** [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="saveparticipantedit"></a>
#### `saveParticipantEdit()`

- **Definisi:** [`app.js:3436`](app.js#L3436)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:728`](index.html#L728) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveParticipantEdit()">💾 Simpan Perubahan Data</button>`
- **Memanggil Fungsi Internal:** [`saveLogoToMap()`](#savelogotomap), [`saveIdCardToMap()`](#saveidcardtomap), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`closeEditParticipantModal()`](#closeeditparticipantmodal)

<a id="viewrosterdetail"></a>
#### `viewRosterDetail(id)`

- **Definisi:** [`app.js:3556`](app.js#L3556)
- **Deskripsi:** Modal Detail Roster Lengkap & ID Card Per-Pemain
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3750`](app.js#L3750) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;" onclick="viewRos`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox)

<a id="renderparticipants"></a>
#### `renderParticipants()`

- **Definisi:** [`app.js:3620`](app.js#L3620)
- **Deskripsi:** Render Participant Table (Featuring Nickname, ID Card count per-player, and Admin Edit Action)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:249`](app.js#L249) — di dalam fungsi `toggleInvitedTeam()`
    `renderParticipants();`
  - [`app.js:910`](app.js#L910) — di dalam fungsi `bypassLoaderWithCache()`
    `renderParticipants();`
  - [`app.js:923`](app.js#L923) — di dalam fungsi `handleParticipantSearch()`
    `renderParticipants();`
  - [`app.js:1481`](app.js#L1481) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderParticipants();`
  - [`app.js:1816`](app.js#L1816) — di dalam fungsi `saveState()`
    `renderParticipants();`
  - [`app.js:2191`](app.js#L2191) — di dalam fungsi `verifyAdminPin()`
    `renderParticipants();`
  - [`app.js:2203`](app.js#L2203) — di dalam fungsi `logoutAdmin()`
    `renderParticipants();`
  - [`app.js:3224`](app.js#L3224) — di dalam fungsi `setParticipantStatus()`
    `renderParticipants();`
  - [`app.js:3277`](app.js#L3277) — di dalam fungsi `deleteParticipant()`
    `renderParticipants();`
  - [`app.js:3300`](app.js#L3300) — di dalam fungsi `filterList()`
    `renderParticipants();`
  - [`app.js:3502`](app.js#L3502) — di dalam fungsi `saveParticipantEdit()`
    `renderParticipants();`
  - [`app.js:10611`](app.js#L10611) — di dalam fungsi `clearAllData()`
    `renderParticipants();`
  - [`app.js:10634`](app.js#L10634) — cakupan global / event handler
    `renderParticipants();`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`updateRegistrationDatalists()`](#updateregistrationdatalists), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`toggleInvitedTeam()`](#toggleinvitedteam), [`openEditParticipantModal()`](#openeditparticipantmodal), [`setParticipantStatus()`](#setparticipantstatus), [`deleteParticipant()`](#deleteparticipant), [`viewRosterDetail()`](#viewrosterdetail)

<a id="findteamparticipant"></a>
#### `findTeamParticipant(teamName)`

- **Definisi:** [`app.js:7217`](app.js#L7217)
- **Deskripsi:** Helper mencari data peserta tim dengan normalisasi nama
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:7532`](app.js#L7532) — di dalam fungsi `renderMvpRosterList()`
    `const teamPart = findTeamParticipant(teamName);`
  - [`app.js:7999`](app.js#L7999) — di dalam fungsi `verifyAllMatchPlayers()`
    `const teamPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(teamName) : null;`
  - [`app.js:8022`](app.js#L8022) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamAPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamA) : null;`
  - [`app.js:8023`](app.js#L8023) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamBPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamB) : null;`

<a id="rendermvprosterlist"></a>
#### `renderMvpRosterList(teamName)`

- **Definisi:** [`app.js:7527`](app.js#L7527)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7524`](app.js#L7524) — di dalam fungsi `switchMvpTeamTab()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:7597`](app.js#L7597) — di dalam fungsi `filterMvpRosterList()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:7629`](app.js#L7629) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpRosterList(targetTeam);`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`selectMvpPlayer()`](#selectmvpplayer)

<a id="filtermvprosterlist"></a>
#### `filterMvpRosterList()`

- **Definisi:** [`app.js:7594`](app.js#L7594)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:893`](index.html#L893) — Event `oninput`
    `<input type="text" id="mvpPlayerSearchInput" placeholder="🔍 Cari nama pemain atau IGN..." style="wi`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="renderteamrostercolumn"></a>
#### `renderTeamRosterColumn(teamName, roster, count)`

- **Definisi:** [`app.js:8069`](app.js#L8069)
- **Deskripsi:** Helper untuk merender kolom roster tiap tim
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8166`](app.js#L8166) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamA, rosterA, countA)}`
  - [`app.js:8167`](app.js#L8167) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamB, rosterB, countB)}`

---

### ☁️ Sinkronisasi Google Sheets & State Storage

<a id="savestagestatelocal"></a>
#### `saveStageStateLocal()`

- **Definisi:** [`app.js:462`](app.js#L462)
- **Deskripsi:** Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM, data tie-breaker) ke localStorage.
- **Titik Pemanggilan (14 lokasi):**
  - [`app.js:891`](app.js#L891) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveStageStateLocal();`
  - [`app.js:2327`](app.js#L2327) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveStageStateLocal();`
  - [`app.js:3872`](app.js#L3872) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveStageStateLocal();`
  - [`app.js:3905`](app.js#L3905) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3910`](app.js#L3910) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3925`](app.js#L3925) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3955`](app.js#L3955) — di dalam fungsi `proceedToMLBBStage2()`
    `saveStageStateLocal();`
  - [`app.js:4053`](app.js#L4053) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveStageStateLocal();`
  - [`app.js:4087`](app.js#L4087) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveStageStateLocal();`
  - [`app.js:4433`](app.js#L4433) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveStageStateLocal();`
  - [`app.js:4763`](app.js#L4763) — di dalam fungsi `resetMLBBToStage1()`
    `saveStageStateLocal();`
  - [`app.js:4803`](app.js#L4803) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveStageStateLocal();`
  - [`app.js:4994`](app.js#L4994) — di dalam fungsi `saveTournamentStateOnly()`
    `saveStageStateLocal();`
  - [`app.js:10787`](app.js#L10787) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `saveStageStateLocal();`

<a id="resetcacheandfollowgsheet"></a>
#### `resetCacheAndFollowGSheet()`

- **Definisi:** [`app.js:1599`](app.js#L1599)
- **Deskripsi:** Reset cache lokal dan ikuti 100% data aktif dari Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:347`](index.html#L347) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetCacheFollowGSheet" style="padding: 0.45rem 0.9rem; font-`
- **Memanggil Fungsi Internal:** [`fetchParticipantsFromGoogleSheet()`](#fetchparticipantsfromgooglesheet)

<a id="saveallchangestogooglesheet"></a>
#### `saveAllChangesToGoogleSheet()`

- **Definisi:** [`app.js:1632`](app.js#L1632)
- **Deskripsi:** SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:350`](index.html#L350) — Event `onclick`
    `<button class="btn btn-primary" id="btnSaveAllChanges" style="padding: 0.45rem 0.9rem; font-size: 0.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`showToast()`](#showtoast)

<a id="synctournamentsheetstogsheet"></a>
#### `syncTournamentSheetsToGSheet()`

- **Definisi:** [`app.js:1774`](app.js#L1774)
- **Deskripsi:** SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="getlastsyncedmatches"></a>
#### `getLastSyncedMatches()`

- **Definisi:** [`app.js:4839`](app.js#L4839)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4859`](app.js#L4859) — di dalam fungsi `getUnsyncedMatches()`
    `const synced = getLastSyncedMatches();`
  - [`app.js:4973`](app.js#L4973) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const synced = getLastSyncedMatches() || {};`

<a id="setlastsyncedmatches"></a>
#### `setLastSyncedMatches(obj)`

- **Definisi:** [`app.js:4850`](app.js#L4850)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1437`](app.js#L1437) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `setLastSyncedMatches(groupMatchResults);`
  - [`app.js:4975`](app.js#L4975) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `setLastSyncedMatches(synced);`

<a id="getunsyncedmatches"></a>
#### `getUnsyncedMatches()`

- **Definisi:** [`app.js:4858`](app.js#L4858)
- **Deskripsi:** Lookup perbedaan antara cache lokal dengan data terakhir yang tersinkronisasi di Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5008`](app.js#L5008) — di dalam fungsi `saveTournamentStateOnly()`
    `const unsynced = getUnsyncedMatches();`
- **Memanggil Fungsi Internal:** [`getLastSyncedMatches()`](#getlastsyncedmatches)

<a id="syncsinglematchrowtogsheet"></a>
#### `syncSingleMatchRowToGSheet(canonId)`

- **Definisi:** [`app.js:4895`](app.js#L4895)
- **Deskripsi:** Fungsi utama sinkronisasi 1 pertandingan: mengupdate HANYA 3 baris di Google Sheets (1 baris di sheet MLBB - Bagan & MVP + 2 baris tim di sheet MLBB - Klasemen & Point)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:4319`](app.js#L4319) — di dalam fungsi `setPlayoffMatchScore()`
    `syncSingleMatchRowToGSheet(matchKey).catch(e => console.warn('Sync playoff to GSheet:', e));`
  - [`app.js:4340`](app.js#L4340) — di dalam fungsi `resetPlayoffMatchScore()`
    `syncSingleMatchRowToGSheet(matchKey).catch(e => console.warn('Sync reset to GSheet:', e));`
  - [`app.js:5036`](app.js#L5036) — di dalam fungsi `saveTournamentStateOnly()`
    `await syncSingleMatchRowToGSheet(m.canonId);`
  - [`app.js:7729`](app.js#L7729) — di dalam fungsi `saveSelectedMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || 'PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffM`
  - [`app.js:7734`](app.js#L7734) — di dalam fungsi `saveSelectedMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));`
  - [`app.js:7781`](app.js#L7781) — di dalam fungsi `deleteCurrentMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || 'PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffM`
  - [`app.js:7786`](app.js#L7786) — di dalam fungsi `deleteCurrentMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`isSameTeamName()`](#issameteamname), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`getLastSyncedMatches()`](#getlastsyncedmatches), [`setLastSyncedMatches()`](#setlastsyncedmatches)

<a id="savetournamentstateonly"></a>
#### `saveTournamentStateOnly(isSilent = false)`

- **Definisi:** [`app.js:4986`](app.js#L4986)
- **Deskripsi:** Handler tombol Simpan: HANYA update ke GSheet saat tombol simpan diklik / set MVP, dan melakukan lookup terlebih dahulu agar jika data sama, tidak perlu kirim request
- **Titik Pemanggilan (18 lokasi):**
  - [`index.html:491`](index.html#L491) — Event `onclick`
    `<button id="btnSaveBracketGSheet" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`index.html:596`](index.html#L596) — Event `onclick`
    `<button id="btnSaveMCGGPointsGSheet" class="btn btn-primary" style="display: none; font-size: 0.85re`
  - [`app.js:253`](app.js#L253) — di dalam fungsi `toggleInvitedTeam()`
    `saveTournamentStateOnly(true);`
  - [`app.js:899`](app.js#L899) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2291`](app.js#L2291) — di dalam fungsi `toggleRegistrationStatus()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2334`](app.js#L2334) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3850`](app.js#L3850) — di dalam fungsi `shuffleAndGenerateTournament()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3875`](app.js#L3875) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3929`](app.js#L3929) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3961`](app.js#L3961) — di dalam fungsi `proceedToMLBBStage2()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4059`](app.js#L4059) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4092`](app.js#L4092) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4337`](app.js#L4337) — di dalam fungsi `resetPlayoffMatchScore()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4767`](app.js#L4767) — di dalam fungsi `resetMLBBToStage1()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4805`](app.js#L4805) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveTournamentStateOnly(true);`
  - [`app.js:9762`](app.js#L9762) — di dalam fungsi `toggleLockMatchDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:9821`](app.js#L9821) — di dalam fungsi `resetLobbyDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:10793`](app.js#L10793) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `saveTournamentStateOnly(true);`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`saveStageStateLocal()`](#savestagestatelocal), [`getUnsyncedMatches()`](#getunsyncedmatches), [`showToast()`](#showtoast), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet)

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

- **Definisi:** [`app.js:738`](app.js#L738)
- **Deskripsi:** Client-side image compressor: compresses smartphone photos using HTML5 Canvas (<= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:798`](app.js#L798) — di dalam fungsi `compressImageFile()`
    `return compressImage(file, maxWidth, maxWidth, quality);`
  - [`app.js:3413`](app.js#L3413) — di dalam fungsi `handleEditLogoUpload()`
    `const compressed = await compressImage(file, 400, 400, 0.85);`
  - [`app.js:3430`](app.js#L3430) — di dalam fungsi `handleEditRosterIdCardUpload()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`

<a id="compressimagefile"></a>
#### `compressImageFile(file, maxWidth = 1200, quality = 0.75)`

- **Definisi:** [`app.js:797`](app.js#L797)
- **Deskripsi:** Client-side image compression helper (Canvas <= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1998`](app.js#L1998) — di dalam fungsi `handleLogoPreview()`
    `uploadedLogoBase64 = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:2013`](app.js#L2013) — di dalam fungsi `handleSingleIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:2035`](app.js#L2035) — di dalam fungsi `handlePlayerIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="openglossarymodal"></a>
#### `openGlossaryModal()`

- **Definisi:** [`app.js:837`](app.js#L837)
- **Deskripsi:** Modal Glosarium Istilah Turnamen
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:36`](index.html#L36) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.75rem; bo`

<a id="closeglossarymodal"></a>
#### `closeGlossaryModal()`

- **Definisi:** [`app.js:842`](app.js#L842)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:805`](index.html#L805) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeGlossaryModal()">✕ Tut`
  - [`index.html:834`](index.html#L834) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeGlossaryModal()">Tutup</button>`

<a id="openresetbaganmodal"></a>
#### `openResetBaganModal()`

- **Definisi:** [`app.js:848`](app.js#L848)
- **Deskripsi:** Modal Reset Bagan dengan Verifikasi Password/PIN
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4786`](app.js#L4786) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `openResetBaganModal();`

<a id="closeresetbaganmodal"></a>
#### `closeResetBaganModal()`

- **Definisi:** [`app.js:857`](app.js#L857)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:849`](index.html#L849) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeResetBaganModal()">Batal</button>`
  - [`app.js:876`](app.js#L876) — di dalam fungsi `confirmResetBaganWithPin()`
    `closeResetBaganModal();`

<a id="getidcardmap"></a>
#### `getIdCardMap()`

- **Definisi:** [`app.js:1106`](app.js#L1106)
- **Deskripsi:** Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1147`](app.js#L1147) — di dalam fungsi `saveIdCardToMap()`
    `let map = getIdCardMap();`
  - [`app.js:1164`](app.js#L1164) — di dalam fungsi `findIdCardByEmpIdOrName()`
    `const map = getIdCardMap();`

<a id="saveidcardtomap"></a>
#### `saveIdCardToMap(empId, name, cardUrl)`

- **Definisi:** [`app.js:1145`](app.js#L1145)
- **Deskripsi:** Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasarkan NIP/Nama.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1228`](app.js#L1228) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(p.empId, p.name, resolvedCard);`
  - [`app.js:1239`](app.js#L1239) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(m.empId, m.name, resolvedCard);`
  - [`app.js:1319`](app.js#L1319) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sheetItem.empId, sheetItem.name, rootIdCard);`
  - [`app.js:1344`](app.js#L1344) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sM.empId, sM.name, mIdCard);`
  - [`app.js:3482`](app.js#L3482) — di dalam fungsi `saveParticipantEdit()`
    `saveIdCardToMap(m.empId, m.name, m.idCard);`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="findidcardbyempidorname"></a>
#### `findIdCardByEmpIdOrName(empId, name)`

- **Definisi:** [`app.js:1163`](app.js#L1163)
- **Deskripsi:** Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama peserta.
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:1225`](app.js#L1225) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name) || (p.roster && p.roster[0`
  - [`app.js:1236`](app.js#L1236) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' `
  - [`app.js:1317`](app.js#L1317) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const rootIdCard = sheetItem.idCard || (localItem ? localItem.idCard : '') || findIdCardByEmpIdOrNam`
  - [`app.js:1339`](app.js#L1339) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `let mIdCard = sM.idCard || (lM ? lM.idCard : '') || findIdCardByEmpIdOrName(sM.empId, sM.name) || (d`
  - [`app.js:2995`](app.js#L2995) — di dalam fungsi `handleRegister()`
    `mcggIdCard = existingParticipant.idCard || (existingParticipant.roster && existingParticipant.roster`
  - [`app.js:3373`](app.js#L3373) — di dalam fungsi `openEditParticipantModal()`
    `editRosterIdCards[idx] = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MC`
  - [`app.js:3580`](app.js#L3580) — di dalam fungsi `viewRosterDetail()`
    `const cardSrc = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (team.category === 'MCGG' ? `
  - [`app.js:3660`](app.js#L3660) — di dalam fungsi `renderParticipants()`
    `const card = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idC`
  - [`app.js:8102`](app.js#L8102) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const cardSrc = m.idCard || (typeof findIdCardByEmpIdOrName === 'function' ? findIdCardByEmpIdOrName`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="getlogomap"></a>
#### `getLogoMap()`

- **Definisi:** [`app.js:1181`](app.js#L1181)
- **Deskripsi:** Pemetaan Logo sesuai Nama Tim (MLBB)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1197`](app.js#L1197) — di dalam fungsi `saveLogoToMap()`
    `let map = getLogoMap();`
  - [`app.js:1206`](app.js#L1206) — di dalam fungsi `findLogoByTeamName()`
    `const map = getLogoMap();`

<a id="savelogotomap"></a>
#### `saveLogoToMap(teamName, logoUrl)`

- **Definisi:** [`app.js:1195`](app.js#L1195)
- **Deskripsi:** Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasarkan nama tim.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1220`](app.js#L1220) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveLogoToMap(p.name, resolvedLogo);`
  - [`app.js:1313`](app.js#L1313) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveLogoToMap(sheetItem.name, teamLogo);`
  - [`app.js:3459`](app.js#L3459) — di dalam fungsi `saveParticipantEdit()`
    `saveLogoToMap(p.name, currentEditLogoBase64);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="findlogobyteamname"></a>
#### `findLogoByTeamName(teamName)`

- **Definisi:** [`app.js:1204`](app.js#L1204)
- **Deskripsi:** Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peserta.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:1217`](app.js#L1217) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedLogo = p.logo || findLogoByTeamName(p.name);`
  - [`app.js:1311`](app.js#L1311) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const teamLogo = sheetItem.logo || (localItem ? localItem.logo : '') || findLogoByTeamName(sheetItem`
  - [`app.js:2721`](app.js#L2721) — di dalam fungsi `handleRegister()`
    `if (existingParticipant && (existingParticipant.logo || findLogoByTeamName(existingParticipant.name)`
  - [`app.js:2722`](app.js#L2722) — di dalam fungsi `handleRegister()`
    `logoData = existingParticipant.logo || findLogoByTeamName(existingParticipant.name);`
  - [`app.js:3357`](app.js#L3357) — di dalam fungsi `openEditParticipantModal()`
    `currentEditLogoBase64 = p.logo || findLogoByTeamName(p.name) || '';`
  - [`app.js:3560`](app.js#L3560) — di dalam fungsi `viewRosterDetail()`
    `const teamLogoSrc = team.logo || findLogoByTeamName(team.name);`
  - [`app.js:3674`](app.js#L3674) — di dalam fungsi `renderParticipants()`
    `const teamLogoSrc = p.logo || findLogoByTeamName(p.name);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="handlelogopreview"></a>
#### `handleLogoPreview(event)`

- **Definisi:** [`app.js:1993`](app.js#L1993)
- **Deskripsi:** Handle Logo Upload and Live Preview
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:137`](index.html#L137) — Event `onchange`
    `<input type="file" id="teamLogoInput" accept="image/*" onchange="handleLogoPreview(event)" style="pa`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="handlesingleidcardpreview"></a>
#### `handleSingleIdCardPreview(event, target)`

- **Definisi:** [`app.js:2008`](app.js#L2008)
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

- **Definisi:** [`app.js:2030`](app.js#L2030)
- **Deskripsi:** Handle Individual ID Card Upload for Each of the 8 Players
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2091`](app.js#L2091) — di dalam fungsi `renderPlayersFormInputs()`
    `<input type="file" id="p${i}_idcard_file" accept="image/*" onchange="handlePlayerIdCardPreview(event`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="openidcardlightbox"></a>
#### `openIdCardLightbox(imgSrc, title, driveUrl = '')`

- **Definisi:** [`app.js:2548`](app.js#L2548)
- **Deskripsi:** Lightbox for Viewing Full ID Card
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3391`](app.js#L3391) — di dalam fungsi `openEditParticipantModal()`
    `<div class="idcard-thumb-sm" id="edit_m_${idx}_thumb" onclick="if(editRosterIdCards[${idx}]) openIdC`
  - [`app.js:3584`](app.js#L3584) — di dalam fungsi `viewRosterDetail()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--yokke-`
  - [`app.js:8113`](app.js#L8113) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<div style="width:48px; height:48px; flex-shrink:0; cursor:pointer; border-radius:6px; overflow:hidd`
- **Memanggil Fungsi Internal:** [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="closeidcardlightbox"></a>
#### `closeIdCardLightbox()`

- **Definisi:** [`app.js:2589`](app.js#L2589)
- **Deskripsi:** Menutup modal pop-up lightbox preview ID Card pegawai.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:768`](index.html#L768) — Event `onclick`
    `<div id="idCardLightboxModal" class="modal-overlay" style="z-index: 2500;" onclick="if(event.target `
  - [`index.html:772`](index.html#L772) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeIdCardLightbox()">✕ Tu`

<a id="openeditparticipantmodal"></a>
#### `openEditParticipantModal(id)`

- **Definisi:** [`app.js:3306`](app.js#L3306)
- **Deskripsi:** ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3717`](app.js#L3717) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-edit-sm" title="Edit Data & Upload ID Card" onclick="openEditParticipantModal`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox), [`handleEditRosterIdCardUpload()`](#handleeditrosteridcardupload)

<a id="closeeditparticipantmodal"></a>
#### `closeEditParticipantModal()`

- **Definisi:** [`app.js:3404`](app.js#L3404)
- **Deskripsi:** Menutup modal dialog edit peserta.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:655`](index.html#L655) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeEditParticipantModal(`
  - [`index.html:727`](index.html#L727) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeEditParticipantModal()">Batal</button>`
  - [`app.js:3551`](app.js#L3551) — di dalam fungsi `saveParticipantEdit()`
    `closeEditParticipantModal();`

<a id="handleeditlogoupload"></a>
#### `handleEditLogoUpload(event)`

- **Definisi:** [`app.js:3409`](app.js#L3409)
- **Deskripsi:** Handle logo upload in Admin Edit modal
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:687`](index.html#L687) — Event `onchange`
    `<input type="file" id="editTeamLogoInput" accept="image/*" onchange="handleEditLogoUpload(event)" st`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleeditrosteridcardupload"></a>
#### `handleEditRosterIdCardUpload(event, idx)`

- **Definisi:** [`app.js:3425`](app.js#L3425)
- **Deskripsi:** Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedit pada modal admin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3394`](app.js#L3394) — di dalam fungsi `openEditParticipantModal()`
    `<input type="file" accept="image/*" style="font-size:0.7rem; width:120px;" onchange="handleEditRoste`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="closedetailmodal"></a>
#### `closeDetailModal()`

- **Definisi:** [`app.js:3615`](app.js#L3615)
- **Deskripsi:** Menutup modal dialog rincian roster tim dan galeri ID Card.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:744`](index.html#L744) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeDetailModal()">✕ Tutu`

<a id="opentestdrawmodal"></a>
#### `openTestDrawModal()`

- **Definisi:** [`app.js:4606`](app.js#L4606)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:489`](index.html#L489) — Event `onclick`
    `<button id="btnTestPlayoffStandings" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5`
  - [`app.js:4426`](app.js#L4426) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `openTestDrawModal();`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast)

<a id="closetestdrawmodal"></a>
#### `closeTestDrawModal()`

- **Definisi:** [`app.js:4618`](app.js#L4618)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1063`](index.html#L1063) — Event `onclick`
    `<div id="testDrawModal" class="modal-overlay" onclick="if(event.target === this) closeTestDrawModal(`
  - [`index.html:1078`](index.html#L1078) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`app.js:4574`](app.js#L4574) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;"`

<a id="initandshowmvpmodal"></a>
#### `initAndShowMvpModal()`

- **Definisi:** [`app.js:7354`](app.js#L7354)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7302`](app.js#L7302) — di dalam fungsi `openMLBBGroupMvpModal()`
    `initAndShowMvpModal();`
  - [`app.js:7351`](app.js#L7351) — di dalam fungsi `openMLBBPlayoffMvpModal()`
    `initAndShowMvpModal();`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="openmatchplayerverifymodal"></a>
#### `openMatchPlayerVerifyModal(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:7925`](app.js#L7925)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8579`](app.js#L8579) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 7px; color:var(-`
  - [`app.js:11588`](app.js#L11588) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent)

<a id="closematchplayerverifymodal"></a>
#### `closeMatchPlayerVerifyModal()`

- **Definisi:** [`app.js:7963`](app.js#L7963)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:954`](index.html#L954) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:970`](index.html#L970) — Event `onclick`
    `<button type="button" class="btn btn-primary" onclick="closeMatchPlayerVerifyModal()">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermatchplayerverifymodalcontent"></a>
#### `renderMatchPlayerVerifyModalContent()`

- **Definisi:** [`app.js:8013`](app.js#L8013)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7958`](app.js#L7958) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:7984`](app.js#L7984) — di dalam fungsi `toggleMatchPlayerVerify()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:8007`](app.js#L8007) — di dalam fungsi `verifyAllMatchPlayers()`
    `renderMatchPlayerVerifyModalContent();`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`verifyAllMatchPlayers()`](#verifyallmatchplayers), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`openIdCardLightbox()`](#openidcardlightbox), [`toggleMatchPlayerVerify()`](#togglematchplayerverify), [`renderTeamRosterColumn()`](#renderteamrostercolumn)

---

### 🔧 Helper & UI Utility

<a id="showtoast"></a>
#### `showToast(msg, type = 'info', duration = 4000)`

- **Definisi:** [`app.js:804`](app.js#L804)
- **Deskripsi:** TOAST NOTIFICATIONS (CYBERPUNK DARK)
- **Titik Pemanggilan (50 lokasi):**
  - [`app.js:872`](app.js#L872) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('PIN Panitia salah! Tindakan reset dibatalkan.', 'error');`
  - [`app.js:900`](app.js#L900) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('✅ Seluruh pembagian grup, jadwal, skor match, dan bagan playoff MLBB berhasil direset tot`
  - [`app.js:915`](app.js#L915) — di dalam fungsi `bypassLoaderWithCache()`
    `showToast('Memuat turnamen menggunakan data lokal / cache offline.', 'info', 4000);`
  - [`app.js:1497`](app.js#L1497) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('Koneksi ke Google Sheets lambat. Menggunakan data cache lokal.', 'info');`
  - [`app.js:1501`](app.js#L1501) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('⚠️ Gagal mengambil data dari Google Sheets.', 'error');`
  - [`app.js:1692`](app.js#L1692) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('Beralih ke sinkronisasi serial bertahap...', 'info', 3000);`
  - [`app.js:1759`](app.js#L1759) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('✅ Seluruh perubahan data peserta, status, bagan, dan klasemen turnamen berhasil disimpan `
  - [`app.js:1762`](app.js#L1762) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('⚠️ Sebagian perubahan berhasil disinkronkan, data lokal Anda tetap aman.', 'warning', 500`
  - [`app.js:1919`](app.js#L1919) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('✅ Peraturan MLBB & MCGG berhasil diperbarui dari Google Docs!', 'success');`
  - [`app.js:1929`](app.js#L1929) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('⚠️ Gagal terhubung ke Google Docs, menggunakan cache dokumen lokal.', 'warning');`
  - [`app.js:3132`](app.js#L3132) — di dalam fungsi `handleRegister()`
    `showToast('❌ Pendaftaran ditolak: ${result.message || result.error || 'Validasi server gagal.'}', 'e`
  - [`app.js:3139`](app.js#L3139) — di dalam fungsi `handleRegister()`
    `showToast("⚠️ Gagal terhubung ke Google Sheets. Formulir Anda tetap tersimpan di draft lokal. Silaka`
  - [`app.js:3851`](app.js#L3851) — di dalam fungsi `shuffleAndGenerateTournament()`
    `showToast('🎲 Undian tim dan bagan berhasil diacak dan diperbarui!', 'success');`
  - [`app.js:4023`](app.js#L4023) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan undian bagan playoff.', 'error');`
  - [`app.js:4027`](app.js#L4027) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');`
  - [`app.js:4031`](app.js#L4031) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('🔒 Bagan playoff sedang dikunci. Buka kunci undian terlebih dahulu untuk mengacak ulang.'`
  - [`app.js:4060`](app.js#L4060) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('🎲 Undian bagan playoff berhasil diacak dan diperbarui!', 'success');`
  - [`app.js:4066`](app.js#L4066) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mengunci undian playoff.', 'error');`
  - [`app.js:4070`](app.js#L4070) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');`
  - [`app.js:4079`](app.js#L4079) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('🔒 Undian Playoff berhasil dikunci! Susunan bagan telah diamankan.', 'success');`
  - [`app.js:4085`](app.js#L4085) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('🔓 Kunci undian Playoff dibuka. Bagan dapat diacak kembali.', 'info');`
  - [`app.js:4104`](app.js#L4104) — di dalam fungsi `openPlayoffScoreModal()`
    `showToast('Data pertandingan playoff tidak ditemukan.', 'error');`
  - [`app.js:4267`](app.js#L4267) — di dalam fungsi `savePlayoffModalScore()`
    `showToast('⚠️ Pertandingan Playoff tidak boleh berakhir imbang! Salah satu tim harus unggul skor.', `
  - [`app.js:4286`](app.js#L4286) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mencatat skor playoff.', 'error');`
  - [`app.js:4291`](app.js#L4291) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Pertandingan playoff tidak ditemukan.', 'error');`
  - [`app.js:4295`](app.js#L4295) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('⚠️ Pertandingan ini belum dapat diinput skor karena kedua tim belum ditentukan dari babak`
  - [`app.js:4302`](app.js#L4302) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Skor tidak valid. Masukkan angka non-negatif.', 'error');`
  - [`app.js:4306`](app.js#L4306) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Pertandingan playoff tidak boleh imbang.', 'warning');`
  - [`app.js:4321`](app.js#L4321) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('✅ Skor berhasil dicatat: ${escapeHtml(match.teamA)} (${scoreA}) vs (${scoreB}) ${escapeHt`
  - [`app.js:4341`](app.js#L4341) — di dalam fungsi `resetPlayoffMatchScore()`
    `showToast('Skor pertandingan ${match.matchLabel || ''} telah direset.', 'info');`
  - [`app.js:4348`](app.js#L4348) — di dalam fungsi `onPlayoffTeamClicked()`
    `showToast('⚠️ Pertandingan ini belum dapat diisi skor karena tim lawan belum siap tanding.', 'warnin`
  - [`app.js:4415`](app.js#L4415) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan simulasi pengundian playoff.', 'error')`
  - [`app.js:4421`](app.js#L4421) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('⚠️ Belum ada data grup MLBB. Pastikan pembagian grup sudah dibuat.', 'warning');`
  - [`app.js:4603`](app.js#L4603) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('🏆 Bagan Playoff berhasil diundi dan ditampilkan!', 'success');`
  - [`app.js:4608`](app.js#L4608) — di dalam fungsi `openTestDrawModal()`
    `showToast('Akses ditolak: Hanya panitia yang dapat membuka pusat uji coba undian.', 'error');`
  - [`app.js:4629`](app.js#L4629) — di dalam fungsi `openTestDrawInNewWindow()`
    `showToast('⚠️ Silakan jalankan simulasi undian terlebih dahulu.', 'warning');`
  - [`app.js:4687`](app.js#L4687) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('⚠️ Belum ada tim MLBB yang terverifikasi.', 'warning');`
  - [`app.js:4755`](app.js#L4755) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('🎲 Simulasi pembagian 8 grup berhasil diacak!', 'info');`
  - [`app.js:4772`](app.js#L4772) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mereset pembagian grup & bagan turnamen MLBB.', '`
  - [`app.js:4776`](app.js#L4776) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('🔒 Pembagian grup MLBB sedang dikunci (Lock TM). Harap buka kunci grup terlebih dahulu.',`
  - [`app.js:4781`](app.js#L4781) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('ℹ️ Pembagian grup dan bagan MLBB saat ini sudah dalam keadaan kosong/belum diundi.', 'inf`
  - [`app.js:5020`](app.js#L5020) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('✅ Seluruh data pertandingan sudah sinkron dengan Google Sheets. Tidak ada perubahan baru.`
  - [`app.js:5054`](app.js#L5054) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('✅ Berhasil menyinkronkan ${successCount} pertandingan (${successCount * 3} baris data) ke`
  - [`app.js:7730`](app.js#L7730) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Playoff (${ctx.format || 'BO3'}) & disinkro`
  - [`app.js:7735`](app.js#L7735) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Match (${ctx.format || 'BO3'}) & disinkronk`
  - [`app.js:7782`](app.js#L7782) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP Playoff telah dihapus & disinkronkan ke GSheet.', 'info');`
  - [`app.js:7787`](app.js#L7787) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP match telah dihapus & disinkronkan ke GSheet (3 baris).', 'info');`
  - [`app.js:8678`](app.js#L8678) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700; ${i`
  - [`app.js:10795`](app.js#L10795) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `showToast(isLocked ? '🏆 Masuk ke Babak Playoff (Undian Terkunci).' : '🎲 Berhasil masuk ke Babak Pl`
  - [`app.js:11092`](app.js#L11092) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-gold" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-wei`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`app.js:1091`](app.js#L1091)
- **Deskripsi:** Helper to format Google Drive image URLs into viewable thumbnail image URLs
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:2557`](app.js#L2557) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3365`](app.js#L3365) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3392`](app.js#L3392) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3563`](app.js#L3563) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3585`](app.js#L3585) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3675`](app.js#L3675) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:8103`](app.js#L8103) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(car`
  - [`functional_tests.js:94`](functional_tests.js#L94) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

<a id="switchtab"></a>
#### `switchTab(tabId)`

- **Definisi:** [`app.js:2530`](app.js#L2530)
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

- **Definisi:** [`app.js:2594`](app.js#L2594)
- **Deskripsi:** Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dalam HTML DOM.
- **Titik Pemanggilan (89 lokasi):**
  - [`app.js:823`](app.js#L823) — di dalam fungsi `showToast()`
    `<span class="toast-msg">${escapeHtml(msg).replace(/\n/g, '<br>')}</span>`
  - [`app.js:1838`](app.js#L1838) — di dalam fungsi `formatRuleLine()`
    `return '<h4 style="color:var(--yokke-gold); margin:1.35rem 0 0.6rem; font-size:1.05rem; border-botto`
  - [`app.js:1843`](app.js#L1843) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-green); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bo`
  - [`app.js:1848`](app.js#L1848) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-red); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bold`
  - [`app.js:1854`](app.js#L1854) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 2rem; margin-bottom: 0.35rem; line-height: 1.55; display: flex; gap`
  - [`app.js:1860`](app.js#L1860) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 1rem; margin-bottom: 0.4rem; line-height: 1.6; display: flex; gap: `
  - [`app.js:1865`](app.js#L1865) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65; font-weight:500;">${escapeHtml(trimmed)}</`
  - [`app.js:1870`](app.js#L1870) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-left:1.5rem; margin-bottom:0.35rem; line-height:1.55; color:var(--text-mute`
  - [`app.js:1873`](app.js#L1873) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65;">${escapeHtml(trimmed)}</p>';`
  - [`app.js:2642`](app.js#L2642) — di dalam fungsi `handleTeamNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Nama Tim Sudah Terdaftar:</strong> Tim "<strong>${escapeHtml(existi`
  - [`app.js:2675`](app.js#L2675) — di dalam fungsi `handleMcggNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Peserta Sudah Terdaftar:</strong> Pemain "<strong>${escapeHtml(exis`
  - [`app.js:4142`](app.js#L4142) — di dalam fungsi `openPlayoffScoreModal()`
    `titleEl.innerHTML = '<span>⚔️</span> <span>Input Skor: ${escapeHtml(match.matchLabel || match.phaseN`
  - [`app.js:4254`](app.js#L4254) — di dalam fungsi `updatePlayoffModalWinnerPreview()`
    `banner.innerHTML = '🏆 <strong>Pemenang:</strong> ${escapeHtml(tA)} (${scoreA} - ${scoreB}) melaju k`
  - [`app.js:4259`](app.js#L4259) — di dalam fungsi `updatePlayoffModalWinnerPreview()`
    `banner.innerHTML = '🏆 <strong>Pemenang:</strong> ${escapeHtml(tB)} (${scoreB} - ${scoreA}) melaju k`
  - [`app.js:4321`](app.js#L4321) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('✅ Skor berhasil dicatat: ${escapeHtml(match.teamA)} (${scoreA}) vs (${scoreB}) ${escapeHt`
  - [`app.js:4383`](app.js#L4383) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `${escapeHtml(m.teamA || '-')}`
  - [`app.js:4391`](app.js#L4391) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `${escapeHtml(m.teamB || '-')}`
  - [`app.js:4486`](app.js#L4486) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🏠 ${escapeHtml(mUB.teamA)}</span>`
  - [`app.js:4487`](app.js#L4487) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoA.group || '')} (Juara 1)<`
  - [`app.js:4491`](app.js#L4491) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#cbd5e1;">⚔️ ${escapeHtml(mUB.teamB)}</span>`
  - [`app.js:4492`](app.js#L4492) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-cyan);">${escapeHtml(infoB.group || '')} (Juara 2)<`
  - [`app.js:4512`](app.js#L4512) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🎯 ${escapeHtml(mLB.teamB)}</span>`
  - [`app.js:4513`](app.js#L4513) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoC.group || '')} (Juara 3)<`
  - [`app.js:4520`](app.js#L4520) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `Pemenang Upper ➔ UB QF | Gugur ➔ LB R1 vs ${escapeHtml(mLB.teamB)}`
  - [`app.js:4536`](app.js#L4536) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong>${escapeHtml(m.teamA)}</strong> (${infoA.group}) vs <strong>${escapeHtml(m.teamB)}</strong> `
  - [`app.js:4552`](app.js#L4552) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong style="color:var(--yokke-cyan);">${gName}:</strong> [1] ${escapeHtml(j1)} | [2] ${escapeHtml`
  - [`app.js:4734`](app.js#L4734) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<span style="font-weight:600;">${escapeHtml(tName)}</span>`
  - [`app.js:4736`](app.js#L4736) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `${dept ? '<span style="font-size:0.68rem; color:var(--text-muted); display:block;">🏢 ${escapeHtml(d`
  - [`app.js:6380`](app.js#L6380) — di dalam fungsi `renderGroupStageUI()`
    `<span>🛡️ ${escapeHtml(gName)}</span>`
  - [`app.js:6419`](app.js#L6419) — di dalam fungsi `renderGroupStageUI()`
    `<span>${escapeHtml(t.name)}</span>`
  - [`app.js:6462`](app.js#L6462) — di dalam fungsi `renderGroupStageUI()`
    `⚠️ TIE-BREAKER MATCH DIPERLUKAN (${escapeHtml(tb.group)})`
  - [`app.js:6465`](app.js#L6465) — di dalam fungsi `renderGroupStageUI()`
    `Peringkat 2 & 3 grup <strong>${escapeHtml(tb.group)}</strong> memiliki poin sama (<strong>${escapeHt`
  - [`app.js:6472`](app.js#L6472) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:6473`](app.js#L6473) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:7375`](app.js#L7375) — di dalam fungsi `initAndShowMvpModal()`
    `tabA.innerHTML = '${escapeHtml(ctx.teamA)} ${isWinA ? '🏆' : ''}';`
  - [`app.js:7376`](app.js#L7376) — di dalam fungsi `initAndShowMvpModal()`
    `tabB.innerHTML = '${escapeHtml(ctx.teamB)} ${isWinB ? '🏆' : ''}';`
  - [`app.js:7542`](app.js#L7542) — di dalam fungsi `renderMvpRosterList()`
    `Tidak ada data roster terdaftar untuk tim ${escapeHtml(teamName)}. Anda dapat mengetik manual nama p`
  - [`app.js:7575`](app.js#L7575) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(ign || realName)}`
  - [`app.js:7578`](app.js#L7578) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(realName)}`
  - [`app.js:7581`](app.js#L7581) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(role)}`
  - [`app.js:7588`](app.js#L7588) — di dalam fungsi `renderMvpRosterList()`
    `html = '<div style="grid-column:1/-1; padding:0.75rem; text-align:center; color:var(--text-muted); f`
  - [`app.js:7887`](app.js#L7887) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = g.hero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(g.hero)})</spa`
  - [`app.js:7888`](app.js#L7888) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = g.team ? ' <span style="color:var(--yokke-cyan);font-size:0.65rem;font-weight:600;">`
  - [`app.js:7889`](app.js#L7889) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `return '<span class="badge" style="background:rgba(255,183,3,0.12);color:var(--yokke-gold);border:1p`
  - [`app.js:7895`](app.js#L7895) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = m.mvpHero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(m.mvpHero)}`
  - [`app.js:7896`](app.js#L7896) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = m.mvpTeam ? '<span style="font-size:0.68rem;color:var(--yokke-cyan);margin-left:auto`
  - [`app.js:7899`](app.js#L7899) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `<span>⭐ MVP: <strong style="color:#fff;">${escapeHtml(m.mvpPlayer)}</strong>${heroTag}</span>`
  - [`app.js:8049`](app.js#L8049) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamA)}: <strong>${countA}/${rosterA.length}</strong> Terverifikasi ${countA >= 5 ?`
  - [`app.js:8052`](app.js#L8052) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamB)}: <strong>${countB}/${rosterB.length}</strong> Terverifikasi ${countB >= 5 ?`
  - [`app.js:8057`](app.js#L8057) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8058`](app.js#L8058) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamA)}`
  - [`app.js:8060`](app.js#L8060) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8061`](app.js#L8061) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamB)}`
  - [`app.js:8075`](app.js#L8075) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<span>⚔️</span> <span>${escapeHtml(teamName)}</span>`
  - [`app.js:8125`](app.js#L8125) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.nickname || m.name || '-')}`
  - [`app.js:8137`](app.js#L8137) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.name || '-')} • <code style="font-size:0.7rem;">NIP: ${escapeHtml(nipLabel)}</code>`
  - [`app.js:8140`](app.js#L8140) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `ID Game: <strong style="color:#fff;">${escapeHtml(m.gameId || '-')}</strong>`
  - [`app.js:8499`](app.js#L8499) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>🛡️</span> <span>Jadwal ${escapeHtml(gName)} • ${dayLabel}</span>`
  - [`app.js:8513`](app.js#L8513) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>☕</span> <span><strong>Tim Istirahat Hari ${mlbbActiveDayFilter} (${MLBB_SCHEDULE_DATES[mlbbAc`
  - [`app.js:8520`](app.js#L8520) — di dalam fungsi `renderGroupFixturesUI()`
    `html += '<p style="color:var(--text-muted);font-size:0.85rem;padding:0.4rem 0;">Tidak ada pertanding`
  - [`app.js:8562`](app.js#L8562) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:8569`](app.js#L8569) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamB)}`
  - [`app.js:9564`](app.js#L9564) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; over`
  - [`app.js:9565`](app.js#L9565) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `🎮 ${escapeHtml(item.playerNick)}`
  - [`app.js:9567`](app.js#L9567) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text`
  - [`app.js:9568`](app.js#L9568) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `👤 ${escapeHtml(item.playerName)}`
  - [`app.js:10278`](app.js#L10278) — di dalam fungsi `renderLobbyRowsHtml()`
    `<span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? escapeHtm`
  - [`app.js:10281`](app.js#L10281) — di dalam fungsi `renderLobbyRowsHtml()`
    `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? '<span>👤 ${escapeHtml(p.name)}</spa`
  - [`app.js:10282`](app.js#L10282) — di dalam fungsi `renderLobbyRowsHtml()`
    `${p.gameId && p.gameId !== '-' ? '${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' `
  - [`app.js:10865`](app.js#L10865) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `${escapeHtml(m.teamA || '-')}`
  - [`app.js:10873`](app.js#L10873) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `${escapeHtml(m.teamB || '-')}`
  - [`app.js:11424`](app.js#L11424) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<span>🛡️</span> <span>Klasemen & Pertandingan: ${escapeHtml(gName)}</span>`
  - [`app.js:11442`](app.js#L11442) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0;font-size:0.95rem;color:var(--yokke-gold);">📊 Klasemen ${isGroupAllDone ? 'Akhi`
  - [`app.js:11492`](app.js#L11492) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `) : '<span style="color:var(--text-muted);font-style:italic;font-size:0.75rem;" title="Status kelolo`
  - [`app.js:11497`](app.js#L11497) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<td style="font-weight:700;color:#fff;">${escapeHtml(t.name)}</td>`
  - [`app.js:11518`](app.js#L11518) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3`
  - [`app.js:11557`](app.js#L11557) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:11568`](app.js#L11568) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`app.js:11571`](app.js#L11571) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:11572`](app.js#L11572) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`app.js:11573`](app.js#L11573) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
  - [`app.js:11579`](app.js#L11579) — cakupan global / event handler
    `${isWinnerB ? '🏆 ' : ''}${escapeHtml(f.teamB)}`
  - [`app.js:11588`](app.js#L11588) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
  - [`app.js:11621`](app.js#L11621) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamA)} <span style="color:var(--yokke-gold); font-size:0.78rem;">(Home)</s`
  - [`app.js:11623`](app.js#L11623) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamB)} <span style="color:var(--text-muted); font-size:0.78rem;">(Away)</s`
  - [`app.js:11625`](app.js#L11625) — cakupan global / event handler
    `${actualMatch.winner ? '<div style="font-size:0.8rem; color:var(--yokke-green); font-weight:700; mar`
  - [`app.js:11735`](app.js#L11735) — cakupan global / event handler
    `<div style="font-size:0.9rem;font-weight:700;color:var(--yokke-cyan);">${escapeHtml((groupPlayoffMat`
  - [`app.js:11739`](app.js#L11739) — cakupan global / event handler
    `<div style="font-size:0.9rem;font-weight:700;color:var(--yokke-gold);">${escapeHtml((groupPlayoffMat`
  - [`app.js:11744`](app.js#L11744) — cakupan global / event handler
    `👑 JUARA 1 YOKKE SQUAD 2026: ${escapeHtml(groupPlayoffMatches[5][0].winner)} (${groupPlayoffMatches[`

<a id="filterlist"></a>
#### `filterList(cat)`

- **Definisi:** [`app.js:3298`](app.js#L3298)
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

- **Definisi:** [`app.js:3790`](app.js#L3790)
- **Deskripsi:** Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP_2, GROUP_4, KNOCKOUT).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:465`](index.html#L465) — Event `onchange`
    `<select id="bracketFormat" onchange="changeTournamentFormat()" style="padding: 0.5rem 0.8rem; font-s`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermvpgametabs"></a>
#### `renderMvpGameTabs()`

- **Definisi:** [`app.js:7401`](app.js#L7401)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7380`](app.js#L7380) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpGameTabs();`
  - [`app.js:7486`](app.js#L7486) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpGameTabs();`
  - [`app.js:7626`](app.js#L7626) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpGameTabs();`
- **Memanggil Fungsi Internal:** [`switchMvpGameTab()`](#switchmvpgametab)

<a id="switchmvpgametab"></a>
#### `switchMvpGameTab(targetGame)`

- **Definisi:** [`app.js:7433`](app.js#L7433)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7424`](app.js#L7424) — di dalam fungsi `renderMvpGameTabs()`
    `<button type="button" class="${pillClass}" onclick="switchMvpGameTab(${g})">`
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="switchmvpteamtab"></a>
#### `switchMvpTeamTab(teamKey)`

- **Definisi:** [`app.js:7496`](app.js#L7496)
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:883`](index.html#L883) — Event `onclick`
    `<button type="button" id="mvpTabTeamA" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`index.html:886`](index.html#L886) — Event `onclick`
    `<button type="button" id="mvpTabTeamB" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`app.js:7396`](app.js#L7396) — di dalam fungsi `initAndShowMvpModal()`
    `switchMvpTeamTab(ctx.activeTeam);`
  - [`app.js:7488`](app.js#L7488) — di dalam fungsi `switchMvpGameTab()`
    `switchMvpTeamTab(ctx.activeTeam);`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="formatmatchmvpdisplayhtml"></a>
#### `formatMatchMvpDisplayHtml(m)`

- **Definisi:** [`app.js:7881`](app.js#L7881)
- **Deskripsi:** Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8574`](app.js#L8574) — di dalam fungsi `renderGroupFixturesUI()`
    `${formatMatchMvpDisplayHtml(f)}`
  - [`app.js:11583`](app.js#L11583) — cakupan global / event handler
    `${formatMatchMvpDisplayHtml(f)}`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="setdrawtargetandscroll"></a>
#### `setDrawTargetAndScroll(lobbyKey)`

- **Definisi:** [`app.js:9877`](app.js#L9877)
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
  - [`app.js:1091`](app.js#L1091) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`app.js:2557`](app.js#L2557) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3365`](app.js#L3365) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3392`](app.js#L3392) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3563`](app.js#L3563) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3585`](app.js#L3585) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3675`](app.js#L3675) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:8103`](app.js#L8103) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(car`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

---

### 🛡️ Autentikasi & Hak Akses Panitia

<a id="confirmresetbaganwithpin"></a>
#### `confirmResetBaganWithPin()`

- **Definisi:** [`app.js:862`](app.js#L862)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:850`](index.html#L850) — Event `onclick`
    `<button class="btn btn-danger-sm" style="padding: 0.5rem 1.1rem; font-size: 0.85rem;" onclick="confi`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`closeResetBaganModal()`](#closeresetbaganmodal), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="openloginmodal"></a>
#### `openLoginModal()`

- **Definisi:** [`app.js:2172`](app.js#L2172)
- **Deskripsi:** Auth functions
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:44`](index.html#L44) — Event `onclick`
    `<button id="btnLoginPanitia" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8`

<a id="closeloginmodal"></a>
#### `closeLoginModal()`

- **Definisi:** [`app.js:2179`](app.js#L2179)
- **Deskripsi:** Menutup modal dialog login PIN panitia.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:790`](index.html#L790) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeLoginModal()">Batal</button>`
  - [`app.js:2189`](app.js#L2189) — di dalam fungsi `verifyAdminPin()`
    `closeLoginModal();`

<a id="verifyadminpin"></a>
#### `verifyAdminPin()`

- **Definisi:** [`app.js:2183`](app.js#L2183)
- **Deskripsi:** Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif penuh.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:791`](index.html#L791) — Event `onclick`
    `<button class="btn btn-primary" onclick="verifyAdminPin()">Masuk</button>`
- **Memanggil Fungsi Internal:** [`closeLoginModal()`](#closeloginmodal), [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="logoutadmin"></a>
#### `logoutAdmin()`

- **Definisi:** [`app.js:2199`](app.js#L2199)
- **Deskripsi:** Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (read-only).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:45`](index.html#L45) — Event `onclick`
    `<button id="btnLogoutPanitia" class="btn btn-outline" style="display: none; padding: 0.25rem 0.75rem`
- **Memanggil Fungsi Internal:** [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="updateauthui"></a>
#### `updateAuthUI()`

- **Definisi:** [`app.js:2338`](app.js#L2338)
- **Deskripsi:** Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock, dan form interaktif.
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:896`](app.js#L896) — di dalam fungsi `confirmResetBaganWithPin()`
    `updateAuthUI();`
  - [`app.js:1468`](app.js#L1468) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateAuthUI();`
  - [`app.js:1817`](app.js#L1817) — di dalam fungsi `saveState()`
    `updateAuthUI();`
  - [`app.js:2190`](app.js#L2190) — di dalam fungsi `verifyAdminPin()`
    `updateAuthUI();`
  - [`app.js:2202`](app.js#L2202) — di dalam fungsi `logoutAdmin()`
    `updateAuthUI();`
  - [`app.js:2288`](app.js#L2288) — di dalam fungsi `toggleRegistrationStatus()`
    `updateAuthUI();`
  - [`app.js:2333`](app.js#L2333) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `updateAuthUI();`
  - [`app.js:3873`](app.js#L3873) — di dalam fungsi `toggleLockMLBBGroup()`
    `updateAuthUI();`
  - [`app.js:3957`](app.js#L3957) — di dalam fungsi `proceedToMLBBStage2()`
    `updateAuthUI();`
  - [`app.js:4055`](app.js#L4055) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `updateAuthUI();`
  - [`app.js:4089`](app.js#L4089) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `updateAuthUI();`
  - [`app.js:4440`](app.js#L4440) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `updateAuthUI();`
  - [`app.js:4765`](app.js#L4765) — di dalam fungsi `resetMLBBToStage1()`
    `updateAuthUI();`
  - [`app.js:4804`](app.js#L4804) — di dalam fungsi `toggleLockMCGGLobbies()`
    `updateAuthUI();`
  - [`app.js:10627`](app.js#L10627) — cakupan global / event handler
    `updateAuthUI();`
  - [`app.js:10789`](app.js#L10789) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `updateAuthUI();`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui)

---

### 📋 Regulasi Turnamen (Rules Editor)

<a id="formatruleline"></a>
#### `formatRuleLine(l)`

- **Definisi:** [`app.js:1831`](app.js#L1831)
- **Deskripsi:** Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="fetchrulesfromgoogledoc"></a>
#### `fetchRulesFromGoogleDoc(silent = false)`

- **Definisi:** [`app.js:1877`](app.js#L1877)
- **Deskripsi:** Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: tab=t.0 & MCGG: tab=t.ji56ljhdhzkr)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:389`](index.html#L389) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`app.js:2543`](app.js#L2543) — di dalam fungsi `switchTab()`
    `fetchRulesFromGoogleDoc(true);`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`showToast()`](#showtoast)

<a id="renderrules"></a>
#### `renderRules()`

- **Definisi:** [`app.js:1935`](app.js#L1935)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:1419`](app.js#L1419) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRules();`
  - [`app.js:1914`](app.js#L1914) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `renderRules();`
  - [`app.js:1968`](app.js#L1968) — di dalam fungsi `saveCustomRules()`
    `renderRules();`
  - [`app.js:1988`](app.js#L1988) — di dalam fungsi `resetRulesToDefault()`
    `renderRules();`
  - [`app.js:2542`](app.js#L2542) — di dalam fungsi `switchTab()`
    `renderRules();`
  - [`app.js:10626`](app.js#L10626) — cakupan global / event handler
    `renderRules();`

<a id="toggleeditrules"></a>
#### `toggleEditRules()`

- **Definisi:** [`app.js:1949`](app.js#L1949)
- **Deskripsi:** Membuka/menutup form editor peraturan turnamen khusus panitia.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:399`](index.html#L399) — Event `onclick`
    `<button class="btn btn-gold" id="btnToggleEditRules" style="font-size: 0.8rem; padding: 0.4rem 0.8re`
  - [`index.html:433`](index.html#L433) — Event `onclick`
    `<button class="btn btn-outline" onclick="toggleEditRules()">Batal</button>`
  - [`app.js:1969`](app.js#L1969) — di dalam fungsi `saveCustomRules()`
    `toggleEditRules();`

<a id="savecustomrules"></a>
#### `saveCustomRules()`

- **Definisi:** [`app.js:1955`](app.js#L1955)
- **Deskripsi:** Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Google Sheets.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:432`](index.html#L432) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveCustomRules()">💾 Simpan Peraturan</button>`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`toggleEditRules()`](#toggleeditrules), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="resetrulestodefault"></a>
#### `resetRulesToDefault()`

- **Definisi:** [`app.js:1983`](app.js#L1983)
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
  - [`google_apps_script.js:663`](google_apps_script.js#L663) — di dalam fungsi `doGet()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1125`](google_apps_script.js#L1125) — di dalam fungsi `doPost()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1907`](google_apps_script.js#L1907) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `if (!ss) ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:2306`](google_apps_script.js#L2306) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `var ss = getTargetSpreadsheet();`
  - [`functional_tests.js:459`](functional_tests.js#L459) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getTargetSpreadsheet('), 'Harus memiliki fungsi getTargetSpreadshe`

<a id="ensurerelationalsheetsexist"></a>
#### `ensureRelationalSheetsExist(ss)`

- **Definisi:** [`google_apps_script.js:313`](google_apps_script.js#L313)
- **Deskripsi:** Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Parent Tim) 2. 'MLBB - Peserta' (Child Roster Anggota) 3. 'Pendaftaran MCGG' (Pemain Solo) /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:1126`](google_apps_script.js#L1126) — di dalam fungsi `doPost()`
    `var sheets = ensureRelationalSheetsExist(ss);`
  - [`functional_tests.js:460`](functional_tests.js#L460) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function ensureRelationalSheetsExist('), 'Harus memiliki fungsi ensureRelat`

<a id="getmlbbtimlisting"></a>
#### `getMlbbTimListing(ss)`

- **Definisi:** [`google_apps_script.js:361`](google_apps_script.js#L361)
- **Deskripsi:** Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' Aturan: - Deduplikasi berdasarkan 'Nama Tim' (case-insensitive & trimmed). - Prioritas: utamakan baris yang Status Verifikasi == 'VERIFIED'. Jika status sama, ambil baris paling bawah (terbaru). - Urutkan A-Z berdasarkan Nama Tim. - Simpan rowNumber asli dari Google Sheets untuk referensi update. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:671`](google_apps_script.js#L671) — di dalam fungsi `doGet()`
    `var mlbbTimList = getMlbbTimListing(ss);`
  - [`google_apps_script.js:1589`](google_apps_script.js#L1589) — di dalam fungsi `doPost()`
    `var timListing = getMlbbTimListing(ss);`
  - [`functional_tests.js:465`](functional_tests.js#L465) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMlbbTimListing('), 'Harus ada fungsi getMlbbTimListing');`

<a id="getmlbbpesertalisting"></a>
#### `getMlbbPesertaListing(ss)`

- **Definisi:** [`google_apps_script.js:459`](google_apps_script.js#L459)
- **Deskripsi:** Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Peserta' Kolom: Timestamp, Nama Tim, Role, Nama Lengkap, NIP Pegawai, Nickname Game (IGN), Game ID & Server, Status Pegawai, Link ID Card Aturan: - Deduplikasi berdasarkan NIP Pegawai (jika NIP kosong/-, gunakan fallback key Nama Tim + Role). - Nickname Game (IGN) diambil langsung utuh dari cell (jangan pernah di-split dengan koma!). - Simpan rowNumber asli masing-masing peserta. /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:672`](google_apps_script.js#L672) — di dalam fungsi `doGet()`
    `var mlbbPesertaList = getMlbbPesertaListing(ss);`
  - [`functional_tests.js:466`](functional_tests.js#L466) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMlbbPesertaListing('), 'Harus ada fungsi getMlbbPesertaListing'`

<a id="getmcgglisting"></a>
#### `getMcggListing(ss)`

- **Definisi:** [`google_apps_script.js:527`](google_apps_script.js#L527)
- **Deskripsi:** Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan: - Deduplikasi berdasarkan NIP Pegawai (prioritaskan VERIFIED, atau baris terbaru jika status sama). - Urutkan A-Z berdasarkan Nama Lengkap Pemain. - Simpan rowNumber asli. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:799`](google_apps_script.js#L799) — di dalam fungsi `doGet()`
    `var mcggList = getMcggListing(ss);`
  - [`google_apps_script.js:1772`](google_apps_script.js#L1772) — di dalam fungsi `doPost()`
    `var mcggListing = getMcggListing(ss);`
  - [`functional_tests.js:467`](functional_tests.js#L467) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMcggListing('), 'Harus ada fungsi getMcggListing');`

<a id="getorcreatesheet"></a>
#### `getOrCreateSheet(ss, sheetName)`

- **Definisi:** [`google_apps_script.js:1875`](google_apps_script.js#L1875)
- **Deskripsi:** Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncdedicatedtournamentsheets"></a>
#### `syncDedicatedTournamentSheets(ss, payload)`

- **Definisi:** [`google_apps_script.js:1906`](google_apps_script.js#L1906)
- **Deskripsi:** Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah Dipanggil otomatis saat action === 'SAVE_CONFIG' atau 'CREATE_TOURNAMENT_SHEETS' /
- **Titik Pemanggilan (8 lokasi):**
  - [`google_apps_script.js:1222`](google_apps_script.js#L1222) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1253`](google_apps_script.js#L1253) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1360`](google_apps_script.js#L1360) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:2294`](google_apps_script.js#L2294) — di dalam fungsi `syncListBagan()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData, mcggLobbies: mcggData });`
  - [`google_apps_script.js:2298`](google_apps_script.js#L2298) — di dalam fungsi `syncListPoint()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData });`
  - [`google_apps_script.js:2302`](google_apps_script.js#L2302) — di dalam fungsi `syncListPointAndCommanderMCGG()`
    `return syncDedicatedTournamentSheets(ss, { mcggLobbies: mcggData });`
  - [`google_apps_script.js:2329`](google_apps_script.js#L2329) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `syncDedicatedTournamentSheets(ss, payload);`
  - [`functional_tests.js:783`](functional_tests.js#L783) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function syncDedicatedTournamentSheets('), 'Harus memiliki fungsi syncDedic`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`safeBatchResizeColumns()`](#safebatchresizecolumns), [`fmtRank()`](#fmtrank)

<a id="createorupdatealltournamentsheets"></a>
#### `createOrUpdateAllTournamentSheets(groupStageData, mcggLobbies)`

- **Definisi:** [`google_apps_script.js:2305`](google_apps_script.js#L2305)
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
  - [`google_apps_script.js:1168`](google_apps_script.js#L1168) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1155`](google_apps_script.js#L1155) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1578`](google_apps_script.js#L1578) — di dalam fungsi `doPost()`
    `var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);`
  - [`google_apps_script.js:1758`](google_apps_script.js#L1758) — di dalam fungsi `doPost()`
    `var mcggFolder = getOrCreateSubFolder(mainFolder, mcggFolderName);`
- **Memanggil Fungsi Internal:** [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing)

<a id="relinkexistingfailedidcards"></a>
#### `relinkExistingFailedIDCards()`

- **Definisi:** [`google_apps_script.js:194`](google_apps_script.js#L194)
- **Deskripsi:** FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ini jika Anda melihat tulisan 'Link ID Card: Gagal: Exception: Access denied: DriveApp.' di spreadsheet. Fungsi ini akan: 1. Memeriksa Google Drive apakah berkas foto pemain sudah ada. 2. Jika ada, mengganti teks gagal menjadi link Google Drive yang benar. 3. Jika berkas belum ada, membersihkan teks gagal agar rapi. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing)

<a id="helperparserank"></a>
#### `helperParseRank(val)`

- **Definisi:** [`google_apps_script.js:875`](google_apps_script.js#L875)
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:930`](google_apps_script.js#L930) — di dalam fungsi `doGet()`
    `r1: helperParseRank(mRow[6]),`
  - [`google_apps_script.js:932`](google_apps_script.js#L932) — di dalam fungsi `doGet()`
    `r2: helperParseRank(mRow[8]),`
  - [`google_apps_script.js:934`](google_apps_script.js#L934) — di dalam fungsi `doGet()`
    `r3: helperParseRank(mRow[10]),`

<a id="savebase64image"></a>
#### `saveBase64Image(base64Data, fileName, targetFolder)`

- **Definisi:** [`google_apps_script.js:1157`](google_apps_script.js#L1157)
- **Titik Pemanggilan (4 lokasi):**
  - [`google_apps_script.js:1583`](google_apps_script.js#L1583) — di dalam fungsi `doPost()`
    `logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);`
  - [`google_apps_script.js:1630`](google_apps_script.js#L1630) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1711`](google_apps_script.js#L1711) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1764`](google_apps_script.js#L1764) — di dalam fungsi `doPost()`
    `mcggIdCardUrl = saveBase64Image(mcggCard, "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", `

<a id="safebatchresizecolumns"></a>
#### `safeBatchResizeColumns(sheet, numCols)`

- **Definisi:** [`google_apps_script.js:1887`](google_apps_script.js#L1887)
- **Deskripsi:** Helper efisien untuk auto-resize banyak kolom dalam 1 panggilan RPC Google Apps Script. Mengurangi waktu eksekusi dari ~45 detik menjadi < 1 detik. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:2045`](google_apps_script.js#L2045) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `safeBatchResizeColumns(sheetMLBBPoint, mlbbPointHeaders.length);`
  - [`google_apps_script.js:2168`](google_apps_script.js#L2168) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `safeBatchResizeColumns(sheetMLBBBagan, mlbbBaganHeaders.length);`
  - [`google_apps_script.js:2286`](google_apps_script.js#L2286) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `safeBatchResizeColumns(sheetMCGG, mcggHeaders.length);`

<a id="fmtrank"></a>
#### `fmtRank(r)`

- **Definisi:** [`google_apps_script.js:2226`](google_apps_script.js#L2226)
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:2267`](google_apps_script.js#L2267) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r1),`
  - [`google_apps_script.js:2269`](google_apps_script.js#L2269) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r2),`
  - [`google_apps_script.js:2271`](google_apps_script.js#L2271) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r3),`

<a id="synclistbagan"></a>
#### `syncListBagan(ss, groupData, mcggData)`

- **Definisi:** [`google_apps_script.js:2293`](google_apps_script.js#L2293)
- **Deskripsi:** Wrapper kompatibilitas untuk pemicu manual / lama /
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:114`](functional_tests.js#L114) — pada skenario pengujian
    `assert(gasCode.includes('function syncListBagan('), 'Harus memiliki fungsi syncListBagan');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpoint"></a>
#### `syncListPoint(ss, groupData)`

- **Definisi:** [`google_apps_script.js:2297`](google_apps_script.js#L2297)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:115`](functional_tests.js#L115) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPoint('), 'Harus memiliki fungsi syncListPoint');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpointandcommandermcgg"></a>
#### `syncListPointAndCommanderMCGG(ss, mcggData)`

- **Definisi:** [`google_apps_script.js:2301`](google_apps_script.js#L2301)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:116`](functional_tests.js#L116) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPointAndCommanderMCGG('), 'Harus memiliki fungsi syncListP`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

---

### 🌐 Web API & Endpoint Webhook

<a id="doget"></a>
#### `doGet(e)`

- **Definisi:** [`google_apps_script.js:661`](google_apps_script.js#L661)
- **Deskripsi:** 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMlbbPesertaListing()`](#getmlbbpesertalisting), [`getMcggListing()`](#getmcgglisting), [`helperParseRank()`](#helperparserank)

<a id="dopost"></a>
#### `doPost(e)`

- **Definisi:** [`google_apps_script.js:1105`](google_apps_script.js#L1105)
- **Deskripsi:** 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:532`](functional_tests.js#L532) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`getOrCreateSubFolder()`](#getorcreatesubfolder), [`saveBase64Image()`](#savebase64image), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMcggListing()`](#getmcgglisting)

---

