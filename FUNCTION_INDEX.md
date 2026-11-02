# 📖 INDEKS FUNGSI DAN PETA PEMANGGILAN KODE (FUNCTION MAP)
> **Turnamen E-Sports Yokke Squad 2026**  
> *Dokumen ini dibuat otomatis oleh script `scripts/generate_function_index.js`. Pembaruan dilakukan secara otomatis setiap kali ada perubahan pada source code.*

---

## 📊 Ringkasan Eksekutif
- **Total Fungsi Terdaftar:** 306 fungsi (271 di `app.js`, 22 di `google_apps_script.js`)
- **Total Titik Pemanggilan (Call Sites):** 1319 titik pemanggilan teridentifikasi
- **Terakhir Diperbarui:** 2/11/2026, 18.13.07 WIB
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
| 11 | [**`postToGoogleAppsScript()`**](#posttogoogleappsscript) | [app.js:88](app.js#L88) | 📦 Modul Aplikasi Umum | Helper fetch terpusat untuk komunikasi POST dengan Google Apps Script Web A... | 12x |
| 12 | [**`getInitialParticipants()`**](#getinitialparticipants) | [app.js:113](app.js#L113) | 👥 Manajemen Peserta & Roster | Inisialisasi daftar peserta dari localStorage dengan validasi versi data (D... | 1x |
| 13 | [**`getTeamPrefix()`**](#getteamprefix) | [app.js:136](app.js#L136) | 📦 Modul Aplikasi Umum | Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama) | 4x |
| 14 | [**`getDepartmentCluster()`**](#getdepartmentcluster) | [app.js:148](app.js#L148) | 📦 Modul Aplikasi Umum | Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resm... | 7x |
| 15 | [**`getTeamDept()`**](#getteamdept) | [app.js:206](app.js#L206) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 4x |
| 16 | [**`isTeamInvited()`**](#isteaminvited) | [app.js:228](app.js#L228) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 17 | [**`toggleInvitedTeam()`**](#toggleinvitedteam) | [app.js:243](app.js#L243) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleInvitedTeam | 2x |
| 18 | [**`showGlobalLoader()`**](#showgloballoader) | [app.js:278](app.js#L278) | 📦 Modul Aplikasi Umum | Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets) | 1x |
| 19 | [**`hideGlobalLoader()`**](#hidegloballoader) | [app.js:292](app.js#L292) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hideGlobalLoader | 4x |
| 20 | [**`saveStageStateLocal()`**](#savestagestatelocal) | [app.js:462](app.js#L462) | ☁️ Sinkronisasi Google Sheets & State Storage | Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM,... | 15x |
| 21 | [**`getCommanderFormattedName()`**](#getcommanderformattedname) | [app.js:518](app.js#L518) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika t... | 5x |
| 22 | [**`renderCommanderCirclesHtml()`**](#rendercommandercircleshtml) | [app.js:529](app.js#L529) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen | 3x |
| 23 | [**`renderCommanderCardVisualHtml()`**](#rendercommandercardvisualhtml) | [app.js:558](app.js#L558) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian | 1x |
| 24 | [**`compressImage()`**](#compressimage) | [app.js:738](app.js#L738) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compressor: compresses smartphone photos using HTML5 Canv... | 3x |
| 25 | [**`compressImageFile()`**](#compressimagefile) | [app.js:797](app.js#L797) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compression helper (Canvas <= 1200px, quality 0.75) | 3x |
| 26 | [**`showToast()`**](#showtoast) | [app.js:804](app.js#L804) | 🔧 Helper & UI Utility | TOAST NOTIFICATIONS (CYBERPUNK DARK) | 56x |
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
| 51 | [**`syncTournamentConfigToGSheet()`**](#synctournamentconfigtogsheet) | [app.js:1774](app.js#L1774) | ☁️ Sinkronisasi Google Sheets & State Storage | SINKRONISASI KONFIGURASI TURNAMEN & BAGAN KE GOOGLE SHEETS | 6x |
| 52 | [**`syncTournamentSheetsToGSheet()`**](#synctournamentsheetstogsheet) | [app.js:1824](app.js#L1824) | ☁️ Sinkronisasi Google Sheets & State Storage | SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET | 0x |
| 53 | [**`saveState()`**](#savestate) | [app.js:1863](app.js#L1863) | 📦 Modul Aplikasi Umum | Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi ... | 45x |
| 54 | [**`updateCounts()`**](#updatecounts) | [app.js:1875](app.js#L1875) | 📦 Modul Aplikasi Umum | Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status veri... | 7x |
| 55 | [**`formatRuleLine()`**](#formatruleline) | [app.js:1885](app.js#L1885) | 📋 Regulasi Turnamen (Rules Editor) | Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG) | 0x |
| 56 | [**`fetchRulesFromGoogleDoc()`**](#fetchrulesfromgoogledoc) | [app.js:1931](app.js#L1931) | 📋 Regulasi Turnamen (Rules Editor) | Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: t... | 2x |
| 57 | [**`renderRules()`**](#renderrules) | [app.js:1989](app.js#L1989) | 📋 Regulasi Turnamen (Rules Editor) | Fungsi operasional untuk renderRules | 6x |
| 58 | [**`toggleEditRules()`**](#toggleeditrules) | [app.js:2003](app.js#L2003) | 📋 Regulasi Turnamen (Rules Editor) | Membuka/menutup form editor peraturan turnamen khusus panitia. | 3x |
| 59 | [**`saveCustomRules()`**](#savecustomrules) | [app.js:2009](app.js#L2009) | 📋 Regulasi Turnamen (Rules Editor) | Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Goo... | 1x |
| 60 | [**`resetRulesToDefault()`**](#resetrulestodefault) | [app.js:2037](app.js#L2037) | 📋 Regulasi Turnamen (Rules Editor) | Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026... | 1x |
| 61 | [**`handleLogoPreview()`**](#handlelogopreview) | [app.js:2047](app.js#L2047) | 🆔 Modal Dialog & Bukti ID Card | Handle Logo Upload and Live Preview | 1x |
| 62 | [**`handleSingleIdCardPreview()`**](#handlesingleidcardpreview) | [app.js:2062](app.js#L2062) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Officials and MCGG | 3x |
| 63 | [**`handlePlayerIdCardPreview()`**](#handleplayeridcardpreview) | [app.js:2084](app.js#L2084) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Each of the 8 Players | 1x |
| 64 | [**`toggleOfficial2Form()`**](#toggleofficial2form) | [app.js:2100](app.js#L2100) | 📦 Modul Aplikasi Umum | Toggle Official 2 Form | 4x |
| 65 | [**`renderPlayersFormInputs()`**](#renderplayersforminputs) | [app.js:2107](app.js#L2107) | 📦 Modul Aplikasi Umum | Generate the 8 players form fields dynamically (Included In-Game Nickname a... | 2x |
| 66 | [**`toggleCategoryForm()`**](#togglecategoryform) | [app.js:2166](app.js#L2166) | 📦 Modul Aplikasi Umum | Switch form between MLBB and MCGG cleanly | 3x |
| 67 | [**`openLoginModal()`**](#openloginmodal) | [app.js:2226](app.js#L2226) | 🛡️ Autentikasi & Hak Akses Panitia | Auth functions | 1x |
| 68 | [**`closeLoginModal()`**](#closeloginmodal) | [app.js:2233](app.js#L2233) | 🛡️ Autentikasi & Hak Akses Panitia | Menutup modal dialog login PIN panitia. | 2x |
| 69 | [**`verifyAdminPin()`**](#verifyadminpin) | [app.js:2237](app.js#L2237) | 🛡️ Autentikasi & Hak Akses Panitia | Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif p... | 1x |
| 70 | [**`logoutAdmin()`**](#logoutadmin) | [app.js:2253](app.js#L2253) | 🛡️ Autentikasi & Hak Akses Panitia | Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (r... | 1x |
| 71 | [**`renderRegistrationUI()`**](#renderregistrationui) | [app.js:2262](app.js#L2262) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderRegistrationUI | 4x |
| 72 | [**`toggleRegistrationStatus()`**](#toggleregistrationstatus) | [app.js:2328](app.js#L2328) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk toggleRegistrationStatus | 5x |
| 73 | [**`resetMCGGPointsAndDraw()`**](#resetmcggpointsanddraw) | [app.js:2349](app.js#L2349) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetMCGGPointsAndDraw | 2x |
| 74 | [**`updateAuthUI()`**](#updateauthui) | [app.js:2392](app.js#L2392) | 🛡️ Autentikasi & Hak Akses Panitia | Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock,... | 16x |
| 75 | [**`switchTab()`**](#switchtab) | [app.js:2584](app.js#L2584) | 🔧 Helper & UI Utility | Navigation Tabs | 5x |
| 76 | [**`openIdCardLightbox()`**](#openidcardlightbox) | [app.js:2602](app.js#L2602) | 🆔 Modal Dialog & Bukti ID Card | Lightbox for Viewing Full ID Card | 3x |
| 77 | [**`closeIdCardLightbox()`**](#closeidcardlightbox) | [app.js:2643](app.js#L2643) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal pop-up lightbox preview ID Card pegawai. | 2x |
| 78 | [**`escapeHtml()`**](#escapehtml) | [app.js:2648](app.js#L2648) | 🔧 Helper & UI Utility | Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dal... | 89x |
| 79 | [**`updateRegistrationDatalists()`**](#updateregistrationdatalists) | [app.js:2660](app.js#L2660) | 📦 Modul Aplikasi Umum | Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit... | 3x |
| 80 | [**`handleTeamNameInput()`**](#handleteamnameinput) | [app.js:2674](app.js#L2674) | 📦 Modul Aplikasi Umum | Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edi... | 2x |
| 81 | [**`handleMcggNameInput()`**](#handlemcggnameinput) | [app.js:2707](app.js#L2707) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fu... | 2x |
| 82 | [**`handleRegister()`**](#handleregister) | [app.js:2740](app.js#L2740) | 👥 Manajemen Peserta & Roster | Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Ca... | 1x |
| 83 | [**`setParticipantStatus()`**](#setparticipantstatus) | [app.js:3272](app.js#L3272) | 👥 Manajemen Peserta & Roster | Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets | 2x |
| 84 | [**`deleteParticipant()`**](#deleteparticipant) | [app.js:3309](app.js#L3309) | 👥 Manajemen Peserta & Roster | Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat k... | 1x |
| 85 | [**`filterList()`**](#filterlist) | [app.js:3352](app.js#L3352) | 🔧 Helper & UI Utility | Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/... | 3x |
| 86 | [**`openEditParticipantModal()`**](#openeditparticipantmodal) | [app.js:3360](app.js#L3360) | 🆔 Modal Dialog & Bukti ID Card | ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION | 1x |
| 87 | [**`closeEditParticipantModal()`**](#closeeditparticipantmodal) | [app.js:3458](app.js#L3458) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog edit peserta. | 3x |
| 88 | [**`handleEditLogoUpload()`**](#handleeditlogoupload) | [app.js:3463](app.js#L3463) | 🆔 Modal Dialog & Bukti ID Card | Handle logo upload in Admin Edit modal | 1x |
| 89 | [**`handleEditRosterIdCardUpload()`**](#handleeditrosteridcardupload) | [app.js:3479](app.js#L3479) | 🆔 Modal Dialog & Bukti ID Card | Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedi... | 1x |
| 90 | [**`saveParticipantEdit()`**](#saveparticipantedit) | [app.js:3490](app.js#L3490) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk saveParticipantEdit | 1x |
| 91 | [**`viewRosterDetail()`**](#viewrosterdetail) | [app.js:3610](app.js#L3610) | 👥 Manajemen Peserta & Roster | Modal Detail Roster Lengkap & ID Card Per-Pemain | 1x |
| 92 | [**`closeDetailModal()`**](#closedetailmodal) | [app.js:3669](app.js#L3669) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog rincian roster tim dan galeri ID Card. | 1x |
| 93 | [**`renderParticipants()`**](#renderparticipants) | [app.js:3674](app.js#L3674) | 👥 Manajemen Peserta & Roster | Render Participant Table (Featuring Nickname, ID Card count per-player, and... | 13x |
| 94 | [**`getVerifiedMLBBTeams()`**](#getverifiedmlbbteams) | [app.js:3817](app.js#L3817) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE | 5x |
| 95 | [**`getActiveMLBBFormat()`**](#getactivemlbbformat) | [app.js:3825](app.js#L3825) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N... | 2x |
| 96 | [**`changeTournamentFormat()`**](#changetournamentformat) | [app.js:3844](app.js#L3844) | 🔧 Helper & UI Utility | Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP... | 1x |
| 97 | [**`renderCurrentMLBBFormat()`**](#rendercurrentmlbbformat) | [app.js:3861](app.js#L3861) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderCurrentMLBBFormat | 20x |
| 98 | [**`shuffleAndGenerateTournament()`**](#shuffleandgeneratetournament) | [app.js:3887](app.js#L3887) | 📦 Modul Aplikasi Umum | Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum di... | 1x |
| 99 | [**`toggleLockMLBBGroup()`**](#togglelockmlbbgroup) | [app.js:3917](app.js#L3917) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE) | 1x |
| 100 | [**`isAllMLBBGroupMatchesFinished()`**](#isallmlbbgroupmatchesfinished) | [app.js:3937](app.js#L3937) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan m... | 2x |
| 101 | [**`evaluateMLBBTieBreaker()`**](#evaluatemlbbtiebreaker) | [app.js:3948](app.js#L3948) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosa... | 2x |
| 102 | [**`resolveMLBBTieBreaker()`**](#resolvemlbbtiebreaker) | [app.js:3973](app.js#L3973) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan... | 3x |
| 103 | [**`proceedToMLBBStage2()`**](#proceedtomlbbstage2) | [app.js:3992](app.js#L3992) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Ba... | 3x |
| 104 | [**`refreshAndScrollToPlayoffBracket()`**](#refreshandscrolltoplayoffbracket) | [app.js:4028](app.js#L4028) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk refreshAndScrollToPlayoffBracket | 3x |
| 105 | [**`refreshAndScrollToGroupOrBracket()`**](#refreshandscrolltogrouporbracket) | [app.js:4057](app.js#L4057) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk refreshAndScrollToGroupOrBracket | 1x |
| 106 | [**`shuffleMLBBPlayoffBracket()`**](#shufflemlbbplayoffbracket) | [app.js:4083](app.js#L4083) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk shuffleMLBBPlayoffBracket | 3x |
| 107 | [**`toggleLockMLBBPlayoff()`**](#togglelockmlbbplayoff) | [app.js:4138](app.js#L4138) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk toggleLockMLBBPlayoff | 3x |
| 108 | [**`openPlayoffScoreModal()`**](#openplayoffscoremodal) | [app.js:4177](app.js#L4177) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openPlayoffScoreModal | 5x |
| 109 | [**`closePlayoffScoreModal()`**](#closeplayoffscoremodal) | [app.js:4267](app.js#L4267) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk closePlayoffScoreModal | 5x |
| 110 | [**`stepPlayoffModalScore()`**](#stepplayoffmodalscore) | [app.js:4273](app.js#L4273) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk stepPlayoffModalScore | 4x |
| 111 | [**`setPlayoffModalQuickScore()`**](#setplayoffmodalquickscore) | [app.js:4288](app.js#L4288) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffModalQuickScore | 1x |
| 112 | [**`onPlayoffScoreInputChanged()`**](#onplayoffscoreinputchanged) | [app.js:4299](app.js#L4299) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk onPlayoffScoreInputChanged | 2x |
| 113 | [**`updatePlayoffModalWinnerPreview()`**](#updateplayoffmodalwinnerpreview) | [app.js:4310](app.js#L4310) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk updatePlayoffModalWinnerPreview | 4x |
| 114 | [**`savePlayoffModalScore()`**](#saveplayoffmodalscore) | [app.js:4340](app.js#L4340) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk savePlayoffModalScore | 1x |
| 115 | [**`resetPlayoffModalScore()`**](#resetplayoffmodalscore) | [app.js:4353](app.js#L4353) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetPlayoffModalScore | 1x |
| 116 | [**`setPlayoffMatchScore()`**](#setplayoffmatchscore) | [app.js:4361](app.js#L4361) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffMatchScore | 1x |
| 117 | [**`resetPlayoffMatchScore()`**](#resetplayoffmatchscore) | [app.js:4402](app.js#L4402) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetPlayoffMatchScore | 1x |
| 118 | [**`onPlayoffTeamClicked()`**](#onplayoffteamclicked) | [app.js:4421](app.js#L4421) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk onPlayoffTeamClicked | 4x |
| 119 | [**`renderPlayoffMatchCardHtml()`**](#renderplayoffmatchcardhtml) | [app.js:4431](app.js#L4431) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderPlayoffMatchCardHtml | 3x |
| 120 | [**`findTeamGroupAndRank()`**](#findteamgroupandrank) | [app.js:4478](app.js#L4478) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findTeamGroupAndRank | 5x |
| 121 | [**`testMLBBPlayoffWithCurrentStandings()`**](#testmlbbplayoffwithcurrentstandings) | [app.js:4490](app.js#L4490) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBPlayoffWithCurrentStandings | 5x |
| 122 | [**`openTestDrawModal()`**](#opentestdrawmodal) | [app.js:4683](app.js#L4683) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openTestDrawModal | 2x |
| 123 | [**`closeTestDrawModal()`**](#closetestdrawmodal) | [app.js:4695](app.js#L4695) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeTestDrawModal | 3x |
| 124 | [**`openTestDrawInNewWindow()`**](#opentestdrawinnewwindow) | [app.js:4703](app.js#L4703) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk openTestDrawInNewWindow | 3x |
| 125 | [**`testMLBBGroupAllocationDraw()`**](#testmlbbgroupallocationdraw) | [app.js:4760](app.js#L4760) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBGroupAllocationDraw | 2x |
| 126 | [**`resetMLBBToStage1()`**](#resetmlbbtostage1) | [app.js:4835](app.js#L4835) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor ji... | 2x |
| 127 | [**`resetTotalMLBBGroupAndBracket()`**](#resettotalmlbbgroupandbracket) | [app.js:4847](app.js#L4847) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetTotalMLBBGroupAndBracket | 1x |
| 128 | [**`toggleLockMCGGLobbies()`**](#togglelockmcgglobbies) | [app.js:4866](app.js#L4866) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM... | 1x |
| 129 | [**`validateMCGGDuplicateCommander()`**](#validatemcggduplicatecommander) | [app.js:4888](app.js#L4888) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2) | 3x |
| 130 | [**`getLastSyncedMatches()`**](#getlastsyncedmatches) | [app.js:4916](app.js#L4916) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk getLastSyncedMatches | 2x |
| 131 | [**`setLastSyncedMatches()`**](#setlastsyncedmatches) | [app.js:4927](app.js#L4927) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk setLastSyncedMatches | 2x |
| 132 | [**`getUnsyncedMatches()`**](#getunsyncedmatches) | [app.js:4935](app.js#L4935) | ☁️ Sinkronisasi Google Sheets & State Storage | Lookup perbedaan antara cache lokal dengan data terakhir yang tersinkronisa... | 1x |
| 133 | [**`syncSingleMatchRowToGSheet()`**](#syncsinglematchrowtogsheet) | [app.js:4972](app.js#L4972) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi utama sinkronisasi 1 pertandingan: mengupdate HANYA 3 baris di Googl... | 7x |
| 134 | [**`saveTournamentStateOnly()`**](#savetournamentstateonly) | [app.js:5062](app.js#L5062) | ☁️ Sinkronisasi Google Sheets & State Storage | Handler tombol Simpan: Sinkronkan seluruh konfigurasi turnamen, bagan playo... | 18x |
| 135 | [**`generateBracket()`**](#generatebracket) | [app.js:5142](app.js#L5142) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- KNOCKOUT BRACKET --- | 3x |
| 136 | [**`pickWinner()`**](#pickwinner) | [app.js:5195](app.js#L5195) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk pickWinner | 2x |
| 137 | [**`renderBracket()`**](#renderbracket) | [app.js:5215](app.js#L5215) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderBracket | 5x |
| 138 | [**`allocateMLBBGroups()`**](#allocatemlbbgroups) | [app.js:5290](app.js#L5290) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi)... | 3x |
| 139 | [**`getPrefix()`**](#getprefix) | [app.js:5302](app.js#L5302) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getPrefix | 9x |
| 140 | [**`getDept()`**](#getdept) | [app.js:5310](app.js#L5310) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getDept | 6x |
| 141 | [**`isInvited()`**](#isinvited) | [app.js:5321](app.js#L5321) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInvited | 5x |
| 142 | [**`getOverBaseCount()`**](#getoverbasecount) | [app.js:5389](app.js#L5389) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getOverBaseCount | 1x |
| 143 | [**`canAccept()`**](#canaccept) | [app.js:5391](app.js#L5391) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk canAccept | 0x |
| 144 | [**`hasPrefixConflict()`**](#hasprefixconflict) | [app.js:5425](app.js#L5425) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasPrefixConflict | 2x |
| 145 | [**`hasDeptConflict()`**](#hasdeptconflict) | [app.js:5426](app.js#L5426) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasDeptConflict | 1x |
| 146 | [**`generateGroupStage()`**](#generategroupstage) | [app.js:5480](app.js#L5480) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk generateGroupStage | 3x |
| 147 | [**`updateGroupRecord()`**](#updategrouprecord) | [app.js:5519](app.js#L5519) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk updateGroupRecord | 4x |
| 148 | [**`getMLBBHeadToHeadWinner()`**](#getmlbbheadtoheadwinner) | [app.js:5533](app.js#L5533) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fa... | 1x |
| 149 | [**`compareMLBBTeams()`**](#comparemlbbteams) | [app.js:5600](app.js#L5600) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke ... | 1x |
| 150 | [**`getSortedGroupTeams()`**](#getsortedgroupteams) | [app.js:5634](app.js#L5634) | 📦 Modul Aplikasi Umum | Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkula... | 13x |
| 151 | [**`shuffleArray()`**](#shufflearray) | [app.js:5662](app.js#L5662) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk shuffleArray | 9x |
| 152 | [**`findValidBracketPermutation()`**](#findvalidbracketpermutation) | [app.js:5671](app.js#L5671) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk findValidBracketPermutation | 4x |
| 153 | [**`backtrack()`**](#backtrack) | [app.js:5673](app.js#L5673) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk backtrack | 5x |
| 154 | [**`isTeamAtmo()`**](#isteamatmo) | [app.js:5695](app.js#L5695) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAtmo | 2x |
| 155 | [**`isTeamAlpha()`**](#isteamalpha) | [app.js:5700](app.js#L5700) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAlpha | 2x |
| 156 | [**`isTeamAppa()`**](#isteamappa) | [app.js:5706](app.js#L5706) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamAppa | 1x |
| 157 | [**`isPlayoffInvitedTeam()`**](#isplayoffinvitedteam) | [app.js:5711](app.js#L5711) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk isPlayoffInvitedTeam | 2x |
| 158 | [**`solveRemainingBracketSlots()`**](#solveremainingbracketslots) | [app.js:5723](app.js#L5723) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk solveRemainingBracketSlots | 3x |
| 159 | [**`backtrack()`**](#backtrack) | [app.js:5725](app.js#L5725) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk backtrack | 5x |
| 160 | [**`drawMLBBPlayoffUpperBracket()`**](#drawmlbbplayoffupperbracket) | [app.js:5751](app.js#L5751) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Algoritma Pengundian Cerdas Playoff Upper Bracket 16 Besar (MLBB): 1. Undi ... | 1x |
| 161 | [**`isInv()`**](#isinv) | [app.js:5752](app.js#L5752) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInv | 7x |
| 162 | [**`drawMLBBPlayoffLowerBracket()`**](#drawmlbbplayofflowerbracket) | [app.js:5871](app.js#L5871) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk drawMLBBPlayoffLowerBracket | 1x |
| 163 | [**`isInv()`**](#isinv) | [app.js:5872](app.js#L5872) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInv | 7x |
| 164 | [**`initGroupPlayoff()`**](#initgroupplayoff) | [app.js:5908](app.js#L5908) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seed... | 11x |
| 165 | [**`isPlayoffPlaceholderTeam()`**](#isplayoffplaceholderteam) | [app.js:6151](app.js#L6151) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk isPlayoffPlaceholderTeam | 5x |
| 166 | [**`pickGroupPlayoffWinner()`**](#pickgroupplayoffwinner) | [app.js:6161](app.js#L6161) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya k... | 1x |
| 167 | [**`promptPlayoffMVP()`**](#promptplayoffmvp) | [app.js:6329](app.js#L6329) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk promptPlayoffMVP | 1x |
| 168 | [**`renderGroupStageUI()`**](#rendergroupstageui) | [app.js:6336](app.js#L6336) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupStageUI | 16x |
| 169 | [**`resolveTeamNameInGroup()`**](#resolveteamnameingroup) | [app.js:6691](app.js#L6691) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisa... | 2x |
| 170 | [**`isSameTeamName()`**](#issameteamname) | [app.js:6707](app.js#L6707) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, ... | 38x |
| 171 | [**`findGroupNameForTeam()`**](#findgroupnameforteam) | [app.js:6723](app.js#L6723) | 📦 Modul Aplikasi Umum | Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData | 4x |
| 172 | [**`setMLBBActiveWeek()`**](#setmlbbactiveweek) | [app.js:6775](app.js#L6775) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveWeek | 3x |
| 173 | [**`setMLBBActiveDayFilter()`**](#setmlbbactivedayfilter) | [app.js:6783](app.js#L6783) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveDayFilter | 6x |
| 174 | [**`setMLBBActiveGroupFilter()`**](#setmlbbactivegroupfilter) | [app.js:6788](app.js#L6788) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveGroupFilter | 1x |
| 175 | [**`getGroupFixtures()`**](#getgroupfixtures) | [app.js:6794](app.js#L6794) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) --- | 6x |
| 176 | [**`getCanonicalGroupMatchId()`**](#getcanonicalgroupmatchid) | [app.js:6988](app.js#L6988) | 📦 Modul Aplikasi Umum | Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tid... | 7x |
| 177 | [**`isGroupMatchesCompleted()`**](#isgroupmatchescompleted) | [app.js:6997](app.js#L6997) | 📦 Modul Aplikasi Umum | Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah s... | 3x |
| 178 | [**`deduplicateGroupMatchResults()`**](#deduplicategroupmatchresults) | [app.js:7015](app.js#L7015) | 📦 Modul Aplikasi Umum | Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri t... | 3x |
| 179 | [**`getGroupRestingTeams()`**](#getgrouprestingteams) | [app.js:7107](app.js#L7107) | 📦 Modul Aplikasi Umum | Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di... | 1x |
| 180 | [**`setGroupMatchScore()`**](#setgroupmatchscore) | [app.js:7118](app.js#L7118) | 📦 Modul Aplikasi Umum | Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara ... | 7x |
| 181 | [**`promptGroupMatchWO()`**](#promptgroupmatchwo) | [app.js:7228](app.js#L7228) | 📦 Modul Aplikasi Umum | Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupu... | 1x |
| 182 | [**`setGroupMatchSpecialResult()`**](#setgroupmatchspecialresult) | [app.js:7253](app.js#L7253) | 📦 Modul Aplikasi Umum | Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imba... | 4x |
| 183 | [**`saveGroupFixtureScore()`**](#savegroupfixturescore) | [app.js:7262](app.js#L7262) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk saveGroupFixtureScore | 1x |
| 184 | [**`findTeamParticipant()`**](#findteamparticipant) | [app.js:7301](app.js#L7301) | 👥 Manajemen Peserta & Roster | Helper mencari data peserta tim dengan normalisasi nama | 4x |
| 185 | [**`openMLBBGroupMvpModal()`**](#openmlbbgroupmvpmodal) | [app.js:7315](app.js#L7315) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBGroupMvpModal | 3x |
| 186 | [**`openMLBBPlayoffMvpModal()`**](#openmlbbplayoffmvpmodal) | [app.js:7389](app.js#L7389) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBPlayoffMvpModal | 1x |
| 187 | [**`initAndShowMvpModal()`**](#initandshowmvpmodal) | [app.js:7438](app.js#L7438) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk initAndShowMvpModal | 2x |
| 188 | [**`renderMvpGameTabs()`**](#rendermvpgametabs) | [app.js:7485](app.js#L7485) | 🔧 Helper & UI Utility | Fungsi operasional untuk renderMvpGameTabs | 3x |
| 189 | [**`switchMvpGameTab()`**](#switchmvpgametab) | [app.js:7517](app.js#L7517) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpGameTab | 1x |
| 190 | [**`closeMLBBGroupMvpModal()`**](#closemlbbgroupmvpmodal) | [app.js:7575](app.js#L7575) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk closeMLBBGroupMvpModal | 5x |
| 191 | [**`switchMvpTeamTab()`**](#switchmvpteamtab) | [app.js:7580](app.js#L7580) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpTeamTab | 4x |
| 192 | [**`renderMvpRosterList()`**](#rendermvprosterlist) | [app.js:7611](app.js#L7611) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk renderMvpRosterList | 3x |
| 193 | [**`filterMvpRosterList()`**](#filtermvprosterlist) | [app.js:7678](app.js#L7678) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk filterMvpRosterList | 1x |
| 194 | [**`selectMvpPlayer()`**](#selectmvpplayer) | [app.js:7684](app.js#L7684) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpPlayer | 1x |
| 195 | [**`renderMvpQuickHeroChips()`**](#rendermvpquickherochips) | [app.js:7716](app.js#L7716) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderMvpQuickHeroChips | 3x |
| 196 | [**`selectMvpQuickHero()`**](#selectmvpquickhero) | [app.js:7736](app.js#L7736) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpQuickHero | 1x |
| 197 | [**`saveSelectedMvp()`**](#saveselectedmvp) | [app.js:7753](app.js#L7753) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk saveSelectedMvp | 2x |
| 198 | [**`deleteCurrentMvp()`**](#deletecurrentmvp) | [app.js:7825](app.js#L7825) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk deleteCurrentMvp | 1x |
| 199 | [**`setGroupMatchMVP()`**](#setgroupmatchmvp) | [app.js:7877](app.js#L7877) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk setGroupMatchMVP | 3x |
| 200 | [**`formatMatchMvpDisplayHtml()`**](#formatmatchmvpdisplayhtml) | [app.js:7965](app.js#L7965) | 🔧 Helper & UI Utility | Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5) | 2x |
| 201 | [**`promptGroupMatchMVP()`**](#promptgroupmatchmvp) | [app.js:7992](app.js#L7992) | 📦 Modul Aplikasi Umum | Delegasi fungsi promptGroupMatchMVP ke modal interaktif | 1x |
| 202 | [**`openMatchPlayerVerifyModal()`**](#openmatchplayerverifymodal) | [app.js:8009](app.js#L8009) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openMatchPlayerVerifyModal | 2x |
| 203 | [**`closeMatchPlayerVerifyModal()`**](#closematchplayerverifymodal) | [app.js:8047](app.js#L8047) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeMatchPlayerVerifyModal | 2x |
| 204 | [**`toggleMatchPlayerVerify()`**](#togglematchplayerverify) | [app.js:8056](app.js#L8056) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleMatchPlayerVerify | 1x |
| 205 | [**`verifyAllMatchPlayers()`**](#verifyallmatchplayers) | [app.js:8074](app.js#L8074) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk verifyAllMatchPlayers | 2x |
| 206 | [**`renderMatchPlayerVerifyModalContent()`**](#rendermatchplayerverifymodalcontent) | [app.js:8097](app.js#L8097) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk renderMatchPlayerVerifyModalContent | 3x |
| 207 | [**`renderTeamRosterColumn()`**](#renderteamrostercolumn) | [app.js:8153](app.js#L8153) | 👥 Manajemen Peserta & Roster | Helper untuk merender kolom roster tiap tim | 2x |
| 208 | [**`resetGroupMatchScore()`**](#resetgroupmatchscore) | [app.js:8256](app.js#L8256) | 📦 Modul Aplikasi Umum | Mereset skor pertandingan grup MLBB ke status belum bertanding. | 0x |
| 209 | [**`recalculateGroupStandingsFromFixtures()`**](#recalculategroupstandingsfromfixtures) | [app.js:8271](app.js#L8271) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan selu... | 4x |
| 210 | [**`renderGroupFixturesUI()`**](#rendergroupfixturesui) | [app.js:8411](app.js#L8411) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupFixturesUI | 11x |
| 211 | [**`renderGroupPlayoffTree()`**](#rendergroupplayofftree) | [app.js:8692](app.js#L8692) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau statu... | 14x |
| 212 | [**`changeMCGGLobby()`**](#changemcgglobby) | [app.js:8816](app.js#L8816) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MCGG MULTI-LOBBY STANDINGS | 0x |
| 213 | [**`getCommanderById()`**](#getcommanderbyid) | [app.js:8822](app.js#L8822) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mencari objek data commander dari master list berdasarkan ID, nama hero, at... | 1x |
| 214 | [**`updateCommanderPoolFromSetup()`**](#updatecommanderpoolfromsetup) | [app.js:8835](app.js#L8835) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk updateCommanderPoolFromSetup | 1x |
| 215 | [**`getVerifiedMCGGPlayers()`**](#getverifiedmcggplayers) | [app.js:8894](app.js#L8894) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getVerifiedMCGGPlayers | 2x |
| 216 | [**`syncMCGGPlayers()`**](#syncmcggplayers) | [app.js:8902](app.js#L8902) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGPlayers | 8x |
| 217 | [**`findPrevious()`**](#findprevious) | [app.js:8914](app.js#L8914) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 218 | [**`mapPlayerObj()`**](#mapplayerobj) | [app.js:8926](app.js#L8926) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |
| 219 | [**`allocateLobbiesByCluster()`**](#allocatelobbiesbycluster) | [app.js:8945](app.js#L8945) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase ... | 3x |
| 220 | [**`shuffleMCGGPlayers()`**](#shufflemcggplayers) | [app.js:9120](app.js#L9120) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGGPlayers | 2x |
| 221 | [**`isMCGGLobbyPointsFull()`**](#ismcgglobbypointsfull) | [app.js:9137](app.js#L9137) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGLobbyPointsFull | 4x |
| 222 | [**`isMCGGQualificationFull()`**](#ismcggqualificationfull) | [app.js:9143](app.js#L9143) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3... | 11x |
| 223 | [**`isMCGGSemiFinalFull()`**](#ismcggsemifinalfull) | [app.js:9149](app.js#L9149) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGSemiFinalFull | 1x |
| 224 | [**`compareMCGGPlayers()`**](#comparemcggplayers) | [app.js:9161](app.js#L9161) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir ... | 0x |
| 225 | [**`syncMCGGSemiFinal()`**](#syncmcggsemifinal) | [app.js:9192](app.js#L9192) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGSemiFinal | 2x |
| 226 | [**`findPrevSemi()`**](#findprevsemi) | [app.js:9229](app.js#L9229) | 📦 Modul Aplikasi Umum | Preserve poin semifinal jika sudah ada | 1x |
| 227 | [**`mapSemiPlayer()`**](#mapsemiplayer) | [app.js:9237](app.js#L9237) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapSemiPlayer | 0x |
| 228 | [**`syncMCGGGrandFinal()`**](#syncmcgggrandfinal) | [app.js:9259](app.js#L9259) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final se... | 7x |
| 229 | [**`findPrevInArr()`**](#findprevinarr) | [app.js:9266](app.js#L9266) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevInArr | 1x |
| 230 | [**`mapGFPlayer()`**](#mapgfplayer) | [app.js:9275](app.js#L9275) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapGFPlayer | 4x |
| 231 | [**`updateMCGGRank()`**](#updatemcggrank) | [app.js:9343](app.js#L9343) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin... | 1x |
| 232 | [**`updateMCGGCommander()`**](#updatemcggcommander) | [app.js:9381](app.js#L9381) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui pilihan commander pemain dan memicu validasi duplikasi commande... | 1x |
| 233 | [**`updateMCGGPenalty()`**](#updatemcggpenalty) | [app.js:9416](app.js#L9416) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumul... | 1x |
| 234 | [**`renderLobbyCommanderDrawPanelHtml()`**](#renderlobbycommanderdrawpanelhtml) | [app.js:9455](app.js#L9455) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI) | 5x |
| 235 | [**`drawMatchPool()`**](#drawmatchpool) | [app.js:9705](app.js#L9705) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 1: Acak 8 Pool ... | 2x |
| 236 | [**`assignMatchPoolToPlayers()`**](#assignmatchpooltoplayers) | [app.js:9780](app.js#L9780) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 2: Pasangkan 8 ... | 2x |
| 237 | [**`toggleLockMatchDraw()`**](#togglelockmatchdraw) | [app.js:9831](app.js#L9831) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 3: Kunci Match ... | 1x |
| 238 | [**`nextMatchDraw()`**](#nextmatchdraw) | [app.js:9858](app.js#L9858) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 4: Lanjut ke Ma... | 1x |
| 239 | [**`drawMatchCommanders()`**](#drawmatchcommanders) | [app.js:9875](app.js#L9875) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Backward compatibility helper | 3x |
| 240 | [**`switchLobbyDrawView()`**](#switchlobbydrawview) | [app.js:9881](app.js#L9881) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk switchLobbyDrawView | 5x |
| 241 | [**`resetLobbyDraw()`**](#resetlobbydraw) | [app.js:9887](app.js#L9887) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetLobbyDraw | 2x |
| 242 | [**`copyCommanderDrawText()`**](#copycommanderdrawtext) | [app.js:9908](app.js#L9908) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk... | 2x |
| 243 | [**`showMatch3DraftInfo()`**](#showmatch3draftinfo) | [app.js:9943](app.js#L9943) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk showMatch3DraftInfo | 1x |
| 244 | [**`changeCommanderDrawTarget()`**](#changecommanderdrawtarget) | [app.js:9954](app.js#L9954) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk changeCommanderDrawTarget | 1x |
| 245 | [**`setDrawTargetAndScroll()`**](#setdrawtargetandscroll) | [app.js:9961](app.js#L9961) | 🔧 Helper & UI Utility | Fungsi operasional untuk setDrawTargetAndScroll | 0x |
| 246 | [**`scrollToMCGGLobby()`**](#scrolltomcgglobby) | [app.js:9966](app.js#L9966) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk scrollToMCGGLobby | 3x |
| 247 | [**`renderMCGGLobbyAnchorBar()`**](#rendermcgglobbyanchorbar) | [app.js:9973](app.js#L9973) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbyAnchorBar | 2x |
| 248 | [**`renderMCGGLobbySelectOptions()`**](#rendermcgglobbyselectoptions) | [app.js:10009](app.js#L10009) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbySelectOptions | 3x |
| 249 | [**`renderMCGGTable()`**](#rendermcggtable) | [app.js:10052](app.js#L10052) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang... | 29x |
| 250 | [**`getLobbyShortLabel()`**](#getlobbyshortlabel) | [app.js:10109](app.js#L10109) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getLobbyShortLabel | 0x |
| 251 | [**`renderLobbyRowsHtml()`**](#renderlobbyrowshtml) | [app.js:10279](app.js#L10279) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderLobbyRowsHtml | 5x |
| 252 | [**`buildRoundCell()`**](#buildroundcell) | [app.js:10381](app.js#L10381) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk buildRoundCell | 3x |
| 253 | [**`buildPenaltySelect()`**](#buildpenaltyselect) | [app.js:10458](app.js#L10458) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk buildPenaltySelect | 1x |
| 254 | [**`loadSampleData()`**](#loadsampledata) | [app.js:10482](app.js#L10482) | 📦 Modul Aplikasi Umum | Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation... | 1x |
| 255 | [**`clearAllData()`**](#clearalldata) | [app.js:10686](app.js#L10686) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearAllData | 1x |
| 256 | [**`setMLBBViewMode()`**](#setmlbbviewmode) | [app.js:10765](app.js#L10765) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- TAMPILAN VIEW SWITCHER MLBB --- | 6x |
| 257 | [**`setMCGGViewMode()`**](#setmcggviewmode) | [app.js:10815](app.js#L10815) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | --- TAMPILAN VIEW SWITCHER MCGG --- | 4x |
| 258 | [**`togglePlayoffBracketCollapse()`**](#toggleplayoffbracketcollapse) | [app.js:10851](app.js#L10851) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk togglePlayoffBracketCollapse | 1x |
| 259 | [**`goToNextMLBBPlayoffPhase()`**](#gotonextmlbbplayoffphase) | [app.js:10863](app.js#L10863) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk goToNextMLBBPlayoffPhase | 2x |
| 260 | [**`setPlayoffBracketFilter()`**](#setplayoffbracketfilter) | [app.js:10890](app.js#L10890) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setPlayoffBracketFilter | 2x |
| 261 | [**`togglePlayoffFullscreen()`**](#toggleplayofffullscreen) | [app.js:10897](app.js#L10897) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk togglePlayoffFullscreen | 1x |
| 262 | [**`renderSingleMatchNodeHtml()`**](#rendersinglematchnodehtml) | [app.js:10910](app.js#L10910) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderSingleMatchNodeHtml | 13x |
| 263 | [**`renderSvgConnectorColumn()`**](#rendersvgconnectorcolumn) | [app.js:10970](app.js#L10970) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderSvgConnectorColumn | 9x |
| 264 | [**`renderFullPlayoffBracketHtml()`**](#renderfullplayoffbrackethtml) | [app.js:11002](app.js#L11002) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderFullPlayoffBracketHtml | 2x |
| 265 | [**`selectMLBBStageNode()`**](#selectmlbbstagenode) | [app.js:11220](app.js#L11220) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk selectMLBBStageNode | 17x |
| 266 | [**`renderMLBBInteractiveHubUI()`**](#rendermlbbinteractivehubui) | [app.js:11231](app.js#L11231) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBInteractiveHubUI | 24x |
| 267 | [**`renderMLBBDetailPanelContent()`**](#rendermlbbdetailpanelcontent) | [app.js:11453](app.js#L11453) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBDetailPanelContent | 1x |
| 268 | [**`selectMCGGFlowNode()`**](#selectmcggflownode) | [app.js:11851](app.js#L11851) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | ---------------------------------------------------------------------------... | 7x |
| 269 | [**`renderMCGGInteractiveHubUI()`**](#rendermcgginteractivehubui) | [app.js:11856](app.js#L11856) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGInteractiveHubUI | 5x |
| 270 | [**`renderMCGGDetailPanelContent()`**](#rendermcggdetailpanelcontent) | [app.js:11984](app.js#L11984) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGDetailPanelContent | 1x |
| 271 | [**`shuffleMCGG32Besar()`**](#shufflemcgg32besar) | [app.js:12193](app.js#L12193) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGG32Besar | 1x |
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
| 282 | [**`doGet()`**](#doget) | [google_apps_script.js:661](google_apps_script.js#L661) | 🌐 Web API & Endpoint Webhook | 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE | 0x |
| 283 | [**`helperParseRank()`**](#helperparserank) | [google_apps_script.js:875](google_apps_script.js#L875) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk helperParseRank | 3x |
| 284 | [**`doPost()`**](#dopost) | [google_apps_script.js:1105](google_apps_script.js#L1105) | 🌐 Web API & Endpoint Webhook | 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE | 1x |
| 285 | [**`saveBase64Image()`**](#savebase64image) | [google_apps_script.js:1157](google_apps_script.js#L1157) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk saveBase64Image | 4x |
| 286 | [**`getOrCreateSheet()`**](#getorcreatesheet) | [google_apps_script.js:1875](google_apps_script.js#L1875) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. / | 0x |
| 287 | [**`safeBatchResizeColumns()`**](#safebatchresizecolumns) | [google_apps_script.js:1887](google_apps_script.js#L1887) | ⚙️ Backend Apps Script Utility | Helper efisien untuk auto-resize banyak kolom dalam 1 panggilan RPC Google ... | 3x |
| 288 | [**`syncDedicatedTournamentSheets()`**](#syncdedicatedtournamentsheets) | [google_apps_script.js:1906](google_apps_script.js#L1906) | 🗄️ Google Sheets Schema & Master Data | Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah ... | 8x |
| 289 | [**`fmtRank()`**](#fmtrank) | [google_apps_script.js:2226](google_apps_script.js#L2226) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk fmtRank | 3x |
| 290 | [**`syncListBagan()`**](#synclistbagan) | [google_apps_script.js:2293](google_apps_script.js#L2293) | ⚙️ Backend Apps Script Utility | Wrapper kompatibilitas untuk pemicu manual / lama / | 1x |
| 291 | [**`syncListPoint()`**](#synclistpoint) | [google_apps_script.js:2297](google_apps_script.js#L2297) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPoint | 1x |
| 292 | [**`syncListPointAndCommanderMCGG()`**](#synclistpointandcommandermcgg) | [google_apps_script.js:2301](google_apps_script.js#L2301) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPointAndCommanderMCGG | 1x |
| 293 | [**`createOrUpdateAllTournamentSheets()`**](#createorupdatealltournamentsheets) | [google_apps_script.js:2305](google_apps_script.js#L2305) | 🗄️ Google Sheets Schema & Master Data | Fungsi operasional untuk createOrUpdateAllTournamentSheets | 1x |
| 294 | [**`runTest()`**](#runtest) | [functional_tests.js:26](functional_tests.js#L26) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runTest | 75x |
| 295 | [**`runAsyncTest()`**](#runasynctest) | [functional_tests.js:37](functional_tests.js#L37) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk runAsyncTest | 4x |
| 296 | [**`sanitizeNip()`**](#sanitizenip) | [functional_tests.js:85](functional_tests.js#L85) | 🔧 Helper & UI Utility | Fungsi operasional untuk sanitizeNip | 3x |
| 297 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [functional_tests.js:94](functional_tests.js#L94) | 🔧 Helper & UI Utility | Fungsi operasional untuk formatDriveImageUrl | 9x |
| 298 | [**`validateRegistration()`**](#validateregistration) | [functional_tests.js:181](functional_tests.js#L181) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk validateRegistration | 7x |
| 299 | [**`runLiveIntegrationTests()`**](#runliveintegrationtests) | [functional_tests.js:363](functional_tests.js#L363) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runLiveIntegrationTests | 1x |
| 300 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:890](functional_tests.js#L890) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 301 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:896](functional_tests.js#L896) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 302 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:900](functional_tests.js#L900) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 4x |
| 303 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:946](functional_tests.js#L946) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 304 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:952](functional_tests.js#L952) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 6x |
| 305 | [**`findPrevious()`**](#findprevious) | [functional_tests.js:1085](functional_tests.js#L1085) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 306 | [**`mapPlayerObj()`**](#mapplayerobj) | [functional_tests.js:1087](functional_tests.js#L1087) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |

---

## 🔍 Rincian Lengkap Fungsi dan Lokasi Pemanggilan

### ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti)

<a id="setmcggstagefilter"></a>
#### `setMCGGStageFilter(stage)`

- **Definisi:** [`app.js:2`](app.js#L2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10128`](app.js#L10128) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_1_QUAL' ? 'active' : ''}`
  - [`app.js:10131`](app.js#L10131) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_2_SEMI' ? 'active' : ''}`
  - [`app.js:10134`](app.js#L10134) — di dalam fungsi `renderMCGGTable()`
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
  - [`app.js:10146`](app.js#L10146) — di dalam fungsi `renderMCGGTable()`
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
  - [`app.js:10149`](app.js#L10149) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:867`](functional_tests.js#L867) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMCGGGroupPage()'), 'Harus ada fungsi nextMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="gotomcgggrouppage"></a>
#### `goToMCGGGroupPage(pg)`

- **Definisi:** [`app.js:68`](app.js#L68)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10118`](app.js#L10118) — di dalam fungsi `renderMCGGTable()`
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
  - [`app.js:9928`](app.js#L9928) — di dalam fungsi `copyCommanderDrawText()`
    `const cmdName = getCommanderFormattedName(item.commander);`
  - [`app.js:10391`](app.js#L10391) — di dalam fungsi `buildRoundCell()`
    `const formattedName = getCommanderFormattedName(selectedCmd);`
  - [`app.js:10417`](app.js#L10417) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`app.js:10426`](app.js#L10426) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`functional_tests.js:706`](functional_tests.js#L706) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getCommanderFormattedName('), 'Harus ada fungsi getCommanderFormat`

<a id="rendercommandercircleshtml"></a>
#### `renderCommanderCirclesHtml(cmd, size)`

- **Definisi:** [`app.js:529`](app.js#L529)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10392`](app.js#L10392) — di dalam fungsi `buildRoundCell()`
    `const circlesHtml = renderCommanderCirclesHtml(selectedCmd, 24);`
  - [`app.js:10440`](app.js#L10440) — di dalam fungsi `buildRoundCell()`
    `? renderCommanderCirclesHtml(selectedCmd, 22)`
  - [`functional_tests.js:707`](functional_tests.js#L707) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderCommanderCirclesHtml('), 'Harus ada fungsi renderCommanderCi`

<a id="rendercommandercardvisualhtml"></a>
#### `renderCommanderCardVisualHtml(cmd)`

- **Definisi:** [`app.js:558`](app.js#L558)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9646`](app.js#L9646) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `${renderCommanderCardVisualHtml(item.commander)}`

<a id="resetmcggpointsanddraw"></a>
#### `resetMCGGPointsAndDraw()`

- **Definisi:** [`app.js:2349`](app.js#L2349)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:595`](index.html#L595) — Event `onclick`
    `<button id="btnResetMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; border-c`
  - [`functional_tests.js:837`](functional_tests.js#L837) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMCGGPointsAndDraw()'), 'Harus memiliki resetMCGGPointsAndDraw`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handlemcggnameinput"></a>
#### `handleMcggNameInput(val)`

- **Definisi:** [`app.js:2707`](app.js#L2707)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:266`](index.html#L266) — Event `oninput`
    `<input type="text" id="mcgg_name" oninput="handleMcggNameInput(this.value)" placeholder="Masukkan na`
  - [`functional_tests.js:173`](functional_tests.js#L173) — pada skenario pengujian
    `assert(appCode.includes('function handleMcggNameInput('), 'Harus ada handler handleMcggNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="togglelockmcgglobbies"></a>
#### `toggleLockMCGGLobbies()`

- **Definisi:** [`app.js:4866`](app.js#L4866)
- **Deskripsi:** Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:594`](index.html#L594) — Event `onclick`
    `<button id="btnLockMCGGLobbies" class="btn btn-outline" style="display: none; font-size: 0.85rem;" o`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="validatemcggduplicatecommander"></a>
#### `validateMCGGDuplicateCommander(lobbyKey, playerIdx)`

- **Definisi:** [`app.js:4888`](app.js#L4888)
- **Deskripsi:** 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9409`](app.js#L9409) — di dalam fungsi `updateMCGGCommander()`
    `validateMCGGDuplicateCommander(targetLobby, idx);`
  - [`app.js:9816`](app.js#L9816) — di dalam fungsi `assignMatchPoolToPlayers()`
    `validateMCGGDuplicateCommander(lobbyKey, i);`
  - [`functional_tests.js:765`](functional_tests.js#L765) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function validateMCGGDuplicateCommander('), 'Harus ada fungsi validateMCGGD`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="changemcgglobby"></a>
#### `changeMCGGLobby()`

- **Definisi:** [`app.js:8816`](app.js#L8816)
- **Deskripsi:** MCGG MULTI-LOBBY STANDINGS
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderbyid"></a>
#### `getCommanderById(id)`

- **Definisi:** [`app.js:8822`](app.js#L8822)
- **Deskripsi:** Mencari objek data commander dari master list berdasarkan ID, nama hero, atau alter name.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10386`](app.js#L10386) — di dalam fungsi `buildRoundCell()`
    `const selectedCmd = getCommanderById(selectedCmdId);`

<a id="updatecommanderpoolfromsetup"></a>
#### `updateCommanderPoolFromSetup(setupList)`

- **Definisi:** [`app.js:8835`](app.js#L8835)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1474`](app.js#L1474) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCommanderPoolFromSetup(data.mcggCommanderSetup);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getverifiedmcggplayers"></a>
#### `getVerifiedMCGGPlayers()`

- **Definisi:** [`app.js:8894`](app.js#L8894)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8903`](app.js#L8903) — di dalam fungsi `syncMCGGPlayers()`
    `let verified = getVerifiedMCGGPlayers();`
  - [`functional_tests.js:611`](functional_tests.js#L611) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMCGGPlayers()'), 'Harus ada getVerifiedMCGGPlayers()');`

<a id="syncmcggplayers"></a>
#### `syncMCGGPlayers(doShuffle = false)`

- **Definisi:** [`app.js:8902`](app.js#L8902)
- **Titik Pemanggilan (8 lokasi):**
  - [`index.html:592`](index.html#L592) — Event `onclick`
    `<button id="adminSyncMCGG" class="btn btn-primary" style="display: none; font-size: 0.85rem;" onclic`
  - [`app.js:1483`](app.js#L1483) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `syncMCGGPlayers();`
  - [`app.js:3280`](app.js#L3280) — di dalam fungsi `setParticipantStatus()`
    `syncMCGGPlayers();`
  - [`app.js:3333`](app.js#L3333) — di dalam fungsi `deleteParticipant()`
    `syncMCGGPlayers();`
  - [`app.js:3558`](app.js#L3558) — di dalam fungsi `saveParticipantEdit()`
    `syncMCGGPlayers();`
  - [`app.js:9133`](app.js#L9133) — di dalam fungsi `shuffleMCGGPlayers()`
    `syncMCGGPlayers(true);`
  - [`app.js:10683`](app.js#L10683) — di dalam fungsi `loadSampleData()`
    `syncMCGGPlayers();`
  - [`app.js:10698`](app.js#L10698) — di dalam fungsi `clearAllData()`
    `syncMCGGPlayers();`
- **Memanggil Fungsi Internal:** [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`findPrevious()`](#findprevious), [`getDepartmentCluster()`](#getdepartmentcluster), [`mapPlayerObj()`](#mapplayerobj), [`syncMCGGSemiFinal()`](#syncmcggsemifinal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`renderMCGGTable()`](#rendermcggtable), [`allocateLobbiesByCluster()`](#allocatelobbiesbycluster)

<a id="allocatelobbiesbycluster"></a>
#### `allocateLobbiesByCluster(playerList, lobbyKeys, targetCaps)`

- **Definisi:** [`app.js:8945`](app.js#L8945)
- **Deskripsi:** Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase Awal)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9087`](app.js#L9087) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, ['LOBBY_A', 'LOBBY_B'], [countA, countB]);`
  - [`app.js:9104`](app.js#L9104) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`
  - [`functional_tests.js:1094`](functional_tests.js#L1094) — pada skenario pengujian
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`

<a id="shufflemcggplayers"></a>
#### `shuffleMCGGPlayers()`

- **Definisi:** [`app.js:9120`](app.js#L9120)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:593`](index.html#L593) — Event `onclick`
    `<button id="adminShuffleMCGG" class="btn btn-gold" style="display: none; font-size: 0.85rem;" onclic`
  - [`functional_tests.js:651`](functional_tests.js#L651) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function shuffleMCGGPlayers()'), 'Harus ada fungsi shuffleMCGGPlayers()');`
- **Memanggil Fungsi Internal:** [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="ismcgglobbypointsfull"></a>
#### `isMCGGLobbyPointsFull(lobbyKey)`

- **Definisi:** [`app.js:9137`](app.js#L9137)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:9146`](app.js#L9146) — di dalam fungsi `isMCGGQualificationFull()`
    `return qualKeys.every(k => isMCGGLobbyPointsFull(k));`
  - [`app.js:9151`](app.js#L9151) — di dalam fungsi `isMCGGSemiFinalFull()`
    `return isMCGGLobbyPointsFull('SEMI_A') && isMCGGLobbyPointsFull('SEMI_B');`
  - [`app.js:10334`](app.js#L10334) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isLobbyFull = isMCGGLobbyPointsFull('LOBBY_A');`
  - [`app.js:10347`](app.js#L10347) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isThisLobbyFull = isMCGGLobbyPointsFull(lobbyKey);`

<a id="ismcggqualificationfull"></a>
#### `isMCGGQualificationFull()`

- **Definisi:** [`app.js:9143`](app.js#L9143)
- **Deskripsi:** Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3 ronde).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:9196`](app.js#L9196) — di dalam fungsi `syncMCGGSemiFinal()`
    `const isQualDone = isMCGGQualificationFull();`
  - [`app.js:9320`](app.js#L9320) — di dalam fungsi `syncMCGGGrandFinal()`
    `const isFull = isMCGGQualificationFull();`
  - [`app.js:9359`](app.js#L9359) — di dalam fungsi `updateMCGGRank()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9397`](app.js#L9397) — di dalam fungsi `updateMCGGCommander()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9430`](app.js#L9430) — di dalam fungsi `updateMCGGPenalty()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9716`](app.js#L9716) — di dalam fungsi `drawMatchPool()`
    `if (lobbyKey === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:9978`](app.js#L9978) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10010`](app.js#L10010) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10076`](app.js#L10076) — di dalam fungsi `renderMCGGTable()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:10281`](app.js#L10281) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`functional_tests.js:625`](functional_tests.js#L625) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isMCGGQualificationFull()'), 'app.js harus memeriksa apakah poin kualifikas`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="ismcggsemifinalfull"></a>
#### `isMCGGSemiFinalFull()`

- **Definisi:** [`app.js:9149`](app.js#L9149)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9290`](app.js#L9290) — di dalam fungsi `syncMCGGGrandFinal()`
    `const semiDone = isMCGGSemiFinalFull();`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="comparemcggplayers"></a>
#### `compareMCGGPlayers(a, b)`

- **Definisi:** [`app.js:9161`](app.js#L9161)
- **Deskripsi:** Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir (besar ke kecil) 2. Juara 1 / MVP Ronde (banyaknya finish posisi 1, besar ke kecil) 3. Top 4 Finish (banyaknya finish posisi 1-4, besar ke kecil) 4. Pengurangan Poin / Penalti (makin sering kena pengurangan makin bawah jika poin dkk sama: deductA - deductB) 5. Breakdown Posisi Finish Ronde 1 s/d 8 6. Nama Pemain (A-Z)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncmcggsemifinal"></a>
#### `syncMCGGSemiFinal()`

- **Definisi:** [`app.js:9192`](app.js#L9192)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9054`](app.js#L9054) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
  - [`app.js:9111`](app.js#L9111) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`findPrevSemi()`](#findprevsemi)

<a id="syncmcgggrandfinal"></a>
#### `syncMCGGGrandFinal()`

- **Definisi:** [`app.js:9259`](app.js#L9259)
- **Deskripsi:** Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final setelah ronde kualifikasi penuh.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:2383`](app.js#L2383) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `syncMCGGGrandFinal();`
  - [`app.js:9055`](app.js#L9055) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9088`](app.js#L9088) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9112`](app.js#L9112) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:9374`](app.js#L9374) — di dalam fungsi `updateMCGGRank()`
    `syncMCGGGrandFinal();`
  - [`app.js:9445`](app.js#L9445) — di dalam fungsi `updateMCGGPenalty()`
    `syncMCGGGrandFinal();`
  - [`app.js:10183`](app.js#L10183) — di dalam fungsi `renderMCGGTable()`
    `syncMCGGGrandFinal();`
- **Memanggil Fungsi Internal:** [`findPrevInArr()`](#findprevinarr), [`isMCGGSemiFinalFull()`](#ismcggsemifinalfull), [`mapGFPlayer()`](#mapgfplayer), [`isMCGGQualificationFull()`](#ismcggqualificationfull)

<a id="updatemcggrank"></a>
#### `updateMCGGRank(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:9343`](app.js#L9343)
- **Deskripsi:** Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin otomatis (+4 s/d -4).
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10451`](app.js#L10451) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGRank('${lobbyKey}', ${originalIdx}, '${roundKey}', this.value)" style="p`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggcommander"></a>
#### `updateMCGGCommander(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:9381`](app.js#L9381)
- **Deskripsi:** Memperbarui pilihan commander pemain dan memicu validasi duplikasi commander ronde 2.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10447`](app.js#L10447) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGCommander('${lobbyKey}', ${originalIdx}, '${cmdKey}', this.value)" style`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggpenalty"></a>
#### `updateMCGGPenalty(arg1, arg2, arg3)`

- **Definisi:** [`app.js:9416`](app.js#L9416)
- **Deskripsi:** Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumulasi poin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10471`](app.js#L10471) — di dalam fungsi `buildPenaltySelect()`
    `<select onchange="updateMCGGPenalty('${lobbyKey}', ${originalIdx}, this.value)" style="padding: 0.25`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="renderlobbycommanderdrawpanelhtml"></a>
#### `renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)`

- **Definisi:** [`app.js:9455`](app.js#L9455)
- **Deskripsi:** MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10251`](app.js#L10251) — di dalam fungsi `renderMCGGTable()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}`
  - [`app.js:12013`](app.js#L12013) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`app.js:12118`](app.js#L12118) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`functional_tests.js:798`](functional_tests.js#L798) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderLobbyCommanderDrawPanelHtml('), 'Harus memiliki generator pa`
  - [`functional_tests.js:802`](functional_tests.js#L802) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}'), 'Panel `
- **Memanggil Fungsi Internal:** [`switchLobbyDrawView()`](#switchlobbydrawview), [`copyCommanderDrawText()`](#copycommanderdrawtext), [`resetLobbyDraw()`](#resetlobbydraw), [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers), [`toggleLockMatchDraw()`](#togglelockmatchdraw), [`nextMatchDraw()`](#nextmatchdraw), [`showMatch3DraftInfo()`](#showmatch3draftinfo), [`renderCommanderCardVisualHtml()`](#rendercommandercardvisualhtml), [`escapeHtml()`](#escapehtml)

<a id="drawmatchcommanders"></a>
#### `drawMatchCommanders(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9875`](app.js#L9875)
- **Deskripsi:** Backward compatibility helper
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10245`](app.js#L10245) — di dalam fungsi `renderMCGGTable()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.3rem 0.65rem; ${(!isRegistration`
  - [`functional_tests.js:741`](functional_tests.js#L741) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function drawMatchCommanders('), 'drawMatchCommanders harus tersedia');`
  - [`functional_tests.js:799`](functional_tests.js#L799) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('drawMatchCommanders(matchNum, targetLobbyKey)'), 'drawMatchCommanders harus`
- **Memanggil Fungsi Internal:** [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers)

<a id="switchlobbydrawview"></a>
#### `switchLobbyDrawView(lobbyKey, matchNum)`

- **Definisi:** [`app.js:9881`](app.js#L9881)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:9503`](app.js#L9503) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 1 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:9506`](app.js#L9506) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 2 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:9558`](app.js#L9558) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:9561`](app.js#L9561) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`functional_tests.js:800`](functional_tests.js#L800) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function switchLobbyDrawView('), 'Harus memiliki fungsi switch view match 1`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="resetlobbydraw"></a>
#### `resetLobbyDraw(lobbyKey)`

- **Definisi:** [`app.js:9887`](app.js#L9887)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9512`](app.js#L9512) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem; font-size:0.75rem; color:var(--yokke`
  - [`functional_tests.js:801`](functional_tests.js#L801) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetLobbyDraw('), 'Harus memiliki fungsi reset undian per-lobi re`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="copycommanderdrawtext"></a>
#### `copyCommanderDrawText(lobbyKey)`

- **Definisi:** [`app.js:9908`](app.js#L9908)
- **Deskripsi:** Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk dibagikan ke WhatsApp grup.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9509`](app.js#L9509) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem; margin-left:auto;`
  - [`app.js:9564`](app.js#L9564) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCom`
- **Memanggil Fungsi Internal:** [`getCommanderFormattedName()`](#getcommanderformattedname)

<a id="changecommanderdrawtarget"></a>
#### `changeCommanderDrawTarget(val)`

- **Definisi:** [`app.js:9954`](app.js#L9954)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9962`](app.js#L9962) — di dalam fungsi `setDrawTargetAndScroll()`
    `changeCommanderDrawTarget(lobbyKey);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="scrolltomcgglobby"></a>
#### `scrollToMCGGLobby(lobbyKey)`

- **Definisi:** [`app.js:9966`](app.js#L9966)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9963`](app.js#L9963) — di dalam fungsi `setDrawTargetAndScroll()`
    `scrollToMCGGLobby(lobbyKey);`
  - [`app.js:10003`](app.js#L10003) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`functional_tests.js:699`](functional_tests.js#L699) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function scrollToMCGGLobby('), 'app.js harus menyediakan fungsi scrollToMCG`

<a id="rendermcgglobbyanchorbar"></a>
#### `renderMCGGLobbyAnchorBar()`

- **Definisi:** [`app.js:9973`](app.js#L9973)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:10049`](app.js#L10049) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `renderMCGGLobbyAnchorBar();`
  - [`functional_tests.js:697`](functional_tests.js#L697) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderMCGGLobbyAnchorBar('), 'app.js harus memiliki generator rend`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="rendermcgglobbyselectoptions"></a>
#### `renderMCGGLobbySelectOptions()`

- **Definisi:** [`app.js:10009`](app.js#L10009)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9057`](app.js#L9057) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:9116`](app.js#L9116) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:10073`](app.js#L10073) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGLobbySelectOptions();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar)

<a id="rendermcggtable"></a>
#### `renderMCGGTable()`

- **Definisi:** [`app.js:10052`](app.js#L10052)
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
  - [`app.js:2247`](app.js#L2247) — di dalam fungsi `verifyAdminPin()`
    `renderMCGGTable();`
  - [`app.js:2259`](app.js#L2259) — di dalam fungsi `logoutAdmin()`
    `renderMCGGTable();`
  - [`app.js:2344`](app.js#L2344) — di dalam fungsi `toggleRegistrationStatus()`
    `renderMCGGTable();`
  - [`app.js:2386`](app.js#L2386) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `renderMCGGTable();`
  - [`app.js:4904`](app.js#L4904) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `renderMCGGTable();`
  - [`app.js:8819`](app.js#L8819) — di dalam fungsi `changeMCGGLobby()`
    `renderMCGGTable();`
  - [`app.js:8890`](app.js#L8890) — di dalam fungsi `updateCommanderPoolFromSetup()`
    `renderMCGGTable();`
  - [`app.js:9058`](app.js#L9058) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:9117`](app.js#L9117) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:9378`](app.js#L9378) — di dalam fungsi `updateMCGGRank()`
    `renderMCGGTable();`
  - [`app.js:9413`](app.js#L9413) — di dalam fungsi `updateMCGGCommander()`
    `renderMCGGTable();`
  - [`app.js:9449`](app.js#L9449) — di dalam fungsi `updateMCGGPenalty()`
    `renderMCGGTable();`
  - [`app.js:9774`](app.js#L9774) — di dalam fungsi `drawMatchPool()`
    `renderMCGGTable();`
  - [`app.js:9825`](app.js#L9825) — di dalam fungsi `assignMatchPoolToPlayers()`
    `renderMCGGTable();`
  - [`app.js:9845`](app.js#L9845) — di dalam fungsi `toggleLockMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:9871`](app.js#L9871) — di dalam fungsi `nextMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:9884`](app.js#L9884) — di dalam fungsi `switchLobbyDrawView()`
    `renderMCGGTable();`
  - [`app.js:9904`](app.js#L9904) — di dalam fungsi `resetLobbyDraw()`
    `renderMCGGTable();`
  - [`app.js:9958`](app.js#L9958) — di dalam fungsi `changeCommanderDrawTarget()`
    `renderMCGGTable();`
  - [`app.js:10697`](app.js#L10697) — di dalam fungsi `clearAllData()`
    `renderMCGGTable();`
  - [`app.js:10720`](app.js#L10720) — cakupan global / event handler
    `renderMCGGTable();`
  - [`app.js:10841`](app.js#L10841) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGTable();`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`goToMCGGGroupPage()`](#gotomcgggrouppage), [`setMCGGStageFilter()`](#setmcggstagefilter), [`prevMCGGGroupPage()`](#prevmcgggrouppage), [`nextMCGGGroupPage()`](#nextmcgggrouppage), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`drawMatchCommanders()`](#drawmatchcommanders), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml)

<a id="getlobbyshortlabel"></a>
#### `getLobbyShortLabel(k)`

- **Definisi:** [`app.js:10109`](app.js#L10109)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="renderlobbyrowshtml"></a>
#### `renderLobbyRowsHtml(list, lobbyKey, isSingleLobby)`

- **Definisi:** [`app.js:10279`](app.js#L10279)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10170`](app.js#L10170) — di dalam fungsi `renderMCGGTable()`
    `legacyTbody.innerHTML = renderLobbyRowsHtml(singleList, currentMCGGLobby, isSingleLobby);`
  - [`app.js:10231`](app.js#L10231) — di dalam fungsi `renderMCGGTable()`
    `const rowsHtml = renderLobbyRowsHtml(currentList, lobbyKey, isSingleLobby);`
  - [`app.js:12034`](app.js#L12034) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:12136`](app.js#L12136) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:12183`](app.js#L12183) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, 'GRAND_FINAL', false)}`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull), [`escapeHtml()`](#escapehtml), [`buildRoundCell()`](#buildroundcell), [`buildPenaltySelect()`](#buildpenaltyselect)

<a id="buildpenaltyselect"></a>
#### `buildPenaltySelect(player, targetLobby)`

- **Definisi:** [`app.js:10458`](app.js#L10458)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10373`](app.js#L10373) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td style="text-align: center;">${buildPenaltySelect(p, lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`updateMCGGPenalty()`](#updatemcggpenalty)

<a id="setmcggviewmode"></a>
#### `setMCGGViewMode(mode)`

- **Definisi:** [`app.js:10815`](app.js#L10815)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MCGG ---
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:617`](index.html#L617) — Event `onclick`
    `<button type="button" id="btnViewMcggHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:620`](index.html#L620) — Event `onclick`
    `<button type="button" id="btnViewMcggLobbies" class="btn btn-outline" style="font-size: 0.8rem; padd`
  - [`app.js:2594`](app.js#L2594) — di dalam fungsi `switchTab()`
    `setMCGGViewMode('HUB');`
  - [`functional_tests.js:1171`](functional_tests.js#L1171) — pada skenario pengujian
    `assert(appCode.includes('function setMCGGViewMode('), 'app.js harus memiliki fungsi setMCGGViewMode'`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGTable()`](#rendermcggtable)

<a id="selectmcggflownode"></a>
#### `selectMCGGFlowNode(nodeKey)`

- **Definisi:** [`app.js:11851`](app.js#L11851)
- **Deskripsi:** ---------------------------------------------------------------------------- 2. MASTER-DETAIL INTERACTIVE HUB MCGG ----------------------------------------------------------------------------
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:11887`](app.js#L11887) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:11910`](app.js#L11910) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE2_WILDCARD' ? 'active' : ''}" oncl`
  - [`app.js:11920`](app.js#L11920) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:11941`](app.js#L11941) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_A' ? 'active' : ''}" onclic`
  - [`app.js:11945`](app.js#L11945) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_B' ? 'active' : ''}" onclic`
  - [`app.js:11965`](app.js#L11965) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'STAGE4_GRAND_FINAL' ? 'active'`
  - [`functional_tests.js:1173`](functional_tests.js#L1173) — pada skenario pengujian
    `assert(appCode.includes('function selectMCGGFlowNode('), 'app.js harus memiliki selectMCGGFlowNode')`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

<a id="rendermcgginteractivehubui"></a>
#### `renderMCGGInteractiveHubUI()`

- **Definisi:** [`app.js:11856`](app.js#L11856)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:10066`](app.js#L10066) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:10834`](app.js#L10834) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:11853`](app.js#L11853) — di dalam fungsi `selectMCGGFlowNode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:12198`](app.js#L12198) — di dalam fungsi `shuffleMCGG32Besar()`
    `renderMCGGInteractiveHubUI();`
  - [`functional_tests.js:1172`](functional_tests.js#L1172) — pada skenario pengujian
    `assert(appCode.includes('function renderMCGGInteractiveHubUI()'), 'app.js harus memiliki renderMCGGI`
- **Memanggil Fungsi Internal:** [`selectMCGGFlowNode()`](#selectmcggflownode), [`renderMCGGDetailPanelContent()`](#rendermcggdetailpanelcontent)

<a id="rendermcggdetailpanelcontent"></a>
#### `renderMCGGDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:11984`](app.js#L11984)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11978`](app.js#L11978) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `rightHtml += renderMCGGDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`shuffleMCGG32Besar()`](#shufflemcgg32besar)

<a id="shufflemcgg32besar"></a>
#### `shuffleMCGG32Besar()`

- **Definisi:** [`app.js:12193`](app.js#L12193)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:12078`](app.js#L12078) — di dalam fungsi `renderMCGGDetailPanelContent()`
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
  - [`app.js:6388`](app.js#L6388) — di dalam fungsi `renderGroupStageUI()`
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
  - [`app.js:6391`](app.js#L6391) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:848`](functional_tests.js#L848) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMLBBGroupPage()'), 'Harus ada fungsi nextMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="gotomlbbgrouppage"></a>
#### `goToMLBBGroupPage(pg)`

- **Definisi:** [`app.js:27`](app.js#L27)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6379`](app.js#L6379) — di dalam fungsi `renderGroupStageUI()`
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

- **Definisi:** [`app.js:3817`](app.js#L3817)
- **Deskripsi:** TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3833`](app.js#L3833) — di dalam fungsi `getActiveMLBBFormat()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:4762`](app.js#L4762) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:5152`](app.js#L5152) — di dalam fungsi `generateBracket()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:5481`](app.js#L5481) — di dalam fungsi `generateGroupStage()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`functional_tests.js:576`](functional_tests.js#L576) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMLBBTeams()'), 'Harus ada fungsi getVerifiedMLBBTeams()`

<a id="getactivemlbbformat"></a>
#### `getActiveMLBBFormat()`

- **Definisi:** [`app.js:3825`](app.js#L3825)
- **Deskripsi:** Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N >= 12 tim).
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5488`](app.js#L5488) — di dalam fungsi `generateGroupStage()`
    `const activeFormat = getActiveMLBBFormat();`
  - [`functional_tests.js:577`](functional_tests.js#L577) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getActiveMLBBFormat()'), 'Harus ada fungsi getActiveMLBBFormat()')`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="rendercurrentmlbbformat"></a>
#### `renderCurrentMLBBFormat()`

- **Definisi:** [`app.js:3861`](app.js#L3861)
- **Titik Pemanggilan (20 lokasi):**
  - [`app.js:895`](app.js#L895) — di dalam fungsi `confirmResetBaganWithPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:911`](app.js#L911) — di dalam fungsi `bypassLoaderWithCache()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1482`](app.js#L1482) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2246`](app.js#L2246) — di dalam fungsi `verifyAdminPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2258`](app.js#L2258) — di dalam fungsi `logoutAdmin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2343`](app.js#L2343) — di dalam fungsi `toggleRegistrationStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3279`](app.js#L3279) — di dalam fungsi `setParticipantStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3332`](app.js#L3332) — di dalam fungsi `deleteParticipant()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3557`](app.js#L3557) — di dalam fungsi `saveParticipantEdit()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3857`](app.js#L3857) — di dalam fungsi `changeTournamentFormat()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3933`](app.js#L3933) — di dalam fungsi `toggleLockMLBBGroup()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4017`](app.js#L4017) — di dalam fungsi `proceedToMLBBStage2()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4062`](app.js#L4062) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderCurrentMLBBFormat === 'function') renderCurrentMLBBFormat();`
  - [`app.js:4118`](app.js#L4118) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4518`](app.js#L4518) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4843`](app.js#L4843) — di dalam fungsi `resetMLBBToStage1()`
    `renderCurrentMLBBFormat();`
  - [`app.js:10682`](app.js#L10682) — di dalam fungsi `loadSampleData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:10696`](app.js#L10696) — di dalam fungsi `clearAllData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:10719`](app.js#L10719) — cakupan global / event handler
    `renderCurrentMLBBFormat();`
  - [`app.js:10874`](app.js#L10874) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `renderCurrentMLBBFormat();`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="togglelockmlbbgroup"></a>
#### `toggleLockMLBBGroup()`

- **Definisi:** [`app.js:3917`](app.js#L3917)
- **Deskripsi:** 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:484`](index.html#L484) — Event `onclick`
    `<button id="btnLockMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="isallmlbbgroupmatchesfinished"></a>
#### `isAllMLBBGroupMatchesFinished()`

- **Definisi:** [`app.js:3937`](app.js#L3937)
- **Deskripsi:** Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan memiliki pemenang.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3998`](app.js#L3998) — di dalam fungsi `proceedToMLBBStage2()`
    `if (!isAllMLBBGroupMatchesFinished()) {`
  - [`functional_tests.js:752`](functional_tests.js#L752) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function isAllMLBBGroupMatchesFinished()'), 'Harus ada fungsi isAllMLBBGrou`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="evaluatemlbbtiebreaker"></a>
#### `evaluateMLBBTieBreaker()`

- **Definisi:** [`app.js:3948`](app.js#L3948)
- **Deskripsi:** Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosan babak Playoff.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4002`](app.js#L4002) — di dalam fungsi `proceedToMLBBStage2()`
    `if (evaluateMLBBTieBreaker()) {`
  - [`functional_tests.js:759`](functional_tests.js#L759) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function evaluateMLBBTieBreaker()'), 'Harus ada fungsi evaluateMLBBTieBreak`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`saveStageStateLocal()`](#savestagestatelocal)

<a id="resolvemlbbtiebreaker"></a>
#### `resolveMLBBTieBreaker(winnerTeam)`

- **Definisi:** [`app.js:3973`](app.js#L3973)
- **Deskripsi:** Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan +1 poin penentu ke klasemen.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6556`](app.js#L6556) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:6557`](app.js#L6557) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`functional_tests.js:760`](functional_tests.js#L760) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resolveMLBBTieBreaker('), 'Harus ada fungsi resolveMLBBTieBreaker'`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="proceedtomlbbstage2"></a>
#### `proceedToMLBBStage2()`

- **Definisi:** [`app.js:3992`](app.js#L3992)
- **Deskripsi:** Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Bagan Playoff).
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:485`](index.html#L485) — Event `onclick`
    `<button id="btnProceedMLBBStage2" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`app.js:8709`](app.js#L8709) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: var(--`
  - [`functional_tests.js:753`](functional_tests.js#L753) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function proceedToMLBBStage2()'), 'Harus ada fungsi proceedToMLBBStage2');`
- **Memanggil Fungsi Internal:** [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`renderGroupStageUI()`](#rendergroupstageui), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="refreshandscrolltoplayoffbracket"></a>
#### `refreshAndScrollToPlayoffBracket()`

- **Definisi:** [`app.js:4028`](app.js#L4028)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4022`](app.js#L4022) — di dalam fungsi `proceedToMLBBStage2()`
    `refreshAndScrollToPlayoffBracket();`
  - [`app.js:4123`](app.js#L4123) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `refreshAndScrollToPlayoffBracket();`
  - [`app.js:10881`](app.js#L10881) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `refreshAndScrollToPlayoffBracket();`
- **Memanggil Fungsi Internal:** [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="refreshandscrolltogrouporbracket"></a>
#### `refreshAndScrollToGroupOrBracket()`

- **Definisi:** [`app.js:4057`](app.js#L4057)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3906`](app.js#L3906) — di dalam fungsi `shuffleAndGenerateTournament()`
    `refreshAndScrollToGroupOrBracket();`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderBracket()`](#renderbracket), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat)

<a id="shufflemlbbplayoffbracket"></a>
#### `shuffleMLBBPlayoffBracket()`

- **Definisi:** [`app.js:4083`](app.js#L4083)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:487`](index.html#L487) — Event `onclick`
    `<button id="btnShuffleMLBBPlayoff" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`app.js:8762`](app.js#L8762) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700; ${i`
  - [`app.js:11179`](app.js#L11179) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-gold" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-wei`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="togglelockmlbbplayoff"></a>
#### `toggleLockMLBBPlayoff()`

- **Definisi:** [`app.js:4138`](app.js#L4138)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:488`](index.html#L488) — Event `onclick`
    `<button id="btnLockMLBBPlayoff" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`app.js:8759`](app.js#L8759) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn ${isPlayoffLocked ? 'btn-gold' : 'btn-outline'}" style="font-size:0.75rem; paddin`
  - [`app.js:11176`](app.js#L11176) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${isPlayoffLocked ? 'btn-gold' : 'btn-outline'}" style="font-size:0`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="openplayoffscoremodal"></a>
#### `openPlayoffScoreModal(rIdx, mIdx, preselectWinner = null)`

- **Definisi:** [`app.js:4177`](app.js#L4177)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4428`](app.js#L4428) — di dalam fungsi `onPlayoffTeamClicked()`
    `openPlayoffScoreModal(rIdx, mIdx, teamName);`
  - [`app.js:4452`](app.js#L4452) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<button type="button" class="btn-playoff-score" onclick="event.stopPropagation(); openPlayoffScoreMo`
  - [`app.js:10944`](app.js#L10944) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<button type="button" class="btn-playoff-score" onclick="event.stopPropagation(); openPlayoffScoreMo`
  - [`app.js:11732`](app.js#L11732) — cakupan global / event handler
    `<button type="button" class="btn btn-primary" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-`
  - [`app.js:11836`](app.js#L11836) — cakupan global / event handler
    `<button type="button" class="btn btn-gold" style="font-size:0.85rem; padding:0.45rem 1rem; font-weig`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`isSameTeamName()`](#issameteamname), [`escapeHtml()`](#escapehtml), [`setPlayoffModalQuickScore()`](#setplayoffmodalquickscore), [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="closeplayoffscoremodal"></a>
#### `closePlayoffScoreModal()`

- **Definisi:** [`app.js:4267`](app.js#L4267)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:978`](index.html#L978) — Event `onclick`
    `<div id="playoffScoreModal" class="modal-overlay" onclick="if(event.target === this) closePlayoffSco`
  - [`index.html:989`](index.html#L989) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.85rem;" on`
  - [`index.html:1051`](index.html#L1051) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.75rem;" on`
  - [`app.js:4349`](app.js#L4349) — di dalam fungsi `savePlayoffModalScore()`
    `closePlayoffScoreModal();`
  - [`app.js:4358`](app.js#L4358) — di dalam fungsi `resetPlayoffModalScore()`
    `closePlayoffScoreModal();`

<a id="stepplayoffmodalscore"></a>
#### `stepPlayoffModalScore(team, delta)`

- **Definisi:** [`app.js:4273`](app.js#L4273)
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

- **Definisi:** [`app.js:4288`](app.js#L4288)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4257`](app.js#L4257) — di dalam fungsi `openPlayoffScoreModal()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem; font`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="onplayoffscoreinputchanged"></a>
#### `onPlayoffScoreInputChanged()`

- **Definisi:** [`app.js:4299`](app.js#L4299)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1008`](index.html#L1008) — Event `oninput`
    `<input type="number" id="playoffModalScoreA" min="0" max="5" value="0" style="width: 52px; font-size`
  - [`index.html:1025`](index.html#L1025) — Event `oninput`
    `<input type="number" id="playoffModalScoreB" min="0" max="5" value="0" style="width: 52px; font-size`
- **Memanggil Fungsi Internal:** [`updatePlayoffModalWinnerPreview()`](#updateplayoffmodalwinnerpreview)

<a id="updateplayoffmodalwinnerpreview"></a>
#### `updatePlayoffModalWinnerPreview()`

- **Definisi:** [`app.js:4310`](app.js#L4310)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4263`](app.js#L4263) — di dalam fungsi `openPlayoffScoreModal()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4285`](app.js#L4285) — di dalam fungsi `stepPlayoffModalScore()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4296`](app.js#L4296) — di dalam fungsi `setPlayoffModalQuickScore()`
    `updatePlayoffModalWinnerPreview();`
  - [`app.js:4307`](app.js#L4307) — di dalam fungsi `onPlayoffScoreInputChanged()`
    `updatePlayoffModalWinnerPreview();`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="saveplayoffmodalscore"></a>
#### `savePlayoffModalScore()`

- **Definisi:** [`app.js:4340`](app.js#L4340)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1054`](index.html#L1054) — Event `onclick`
    `<button type="button" id="btnSavePlayoffScore" class="btn btn-primary" style="font-size: 0.8rem; pad`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`setPlayoffMatchScore()`](#setplayoffmatchscore), [`closePlayoffScoreModal()`](#closeplayoffscoremodal)

<a id="resetplayoffmodalscore"></a>
#### `resetPlayoffModalScore()`

- **Definisi:** [`app.js:4353`](app.js#L4353)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:1047`](index.html#L1047) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.75rem; bor`
- **Memanggil Fungsi Internal:** [`resetPlayoffMatchScore()`](#resetplayoffmatchscore), [`closePlayoffScoreModal()`](#closeplayoffscoremodal)

<a id="setplayoffmatchscore"></a>
#### `setPlayoffMatchScore(rIdx, mIdx, scoreA, scoreB)`

- **Definisi:** [`app.js:4361`](app.js#L4361)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4347`](app.js#L4347) — di dalam fungsi `savePlayoffModalScore()`
    `const ok = setPlayoffMatchScore(rIdx, mIdx, scoreA, scoreB);`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`pickGroupPlayoffWinner()`](#pickgroupplayoffwinner), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`escapeHtml()`](#escapehtml)

<a id="resetplayoffmatchscore"></a>
#### `resetPlayoffMatchScore(rIdx, mIdx)`

- **Definisi:** [`app.js:4402`](app.js#L4402)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4357`](app.js#L4357) — di dalam fungsi `resetPlayoffModalScore()`
    `resetPlayoffMatchScore(rIdx, mIdx);`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast)

<a id="onplayoffteamclicked"></a>
#### `onPlayoffTeamClicked(rIdx, mIdx, teamName)`

- **Definisi:** [`app.js:4421`](app.js#L4421)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4458`](app.js#L4458) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamA ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:4466`](app.js#L4466) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamB ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:10950`](app.js#L10950) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamA ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
  - [`app.js:10958`](app.js#L10958) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `<div class="bracket-node-team ${m.winner === m.teamB ? 'is-winner' : ''} ${isAdmin && isReady ? 'adm`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`showToast()`](#showtoast), [`openPlayoffScoreModal()`](#openplayoffscoremodal)

<a id="renderplayoffmatchcardhtml"></a>
#### `renderPlayoffMatchCardHtml(m, rIdx, mIdx, activeNodeKey = '', isIncoming = false, isLower = false)`

- **Definisi:** [`app.js:4431`](app.js#L4431)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8794`](app.js#L8794) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m1, rIdx, i, '', isIncoming, isLower)}`
  - [`app.js:8795`](app.js#L8795) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m2, rIdx, i + 1, '', isIncoming, isLower)}`
  - [`app.js:8803`](app.js#L8803) — di dalam fungsi `renderGroupPlayoffTree()`
    `${renderPlayoffMatchCardHtml(m1, rIdx, i, '', isIncoming, isLower)}`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`openPlayoffScoreModal()`](#openplayoffscoremodal), [`onPlayoffTeamClicked()`](#onplayoffteamclicked), [`escapeHtml()`](#escapehtml)

<a id="testmlbbplayoffwithcurrentstandings"></a>
#### `testMLBBPlayoffWithCurrentStandings()`

- **Definisi:** [`app.js:4490`](app.js#L4490)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:1114`](index.html#L1114) — Event `onclick`
    `<button class="btn btn-gold" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; font-`
  - [`app.js:4645`](app.js#L4645) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;" on`
  - [`app.js:8712`](app.js#L8712) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="padding: 0.45rem 1rem; font-size: 0.85rem; border-color: var(`
  - [`app.js:8765`](app.js#L8765) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(`
  - [`app.js:11182`](app.js#L11182) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.8rem; padding:0.4rem 0.85rem; borde`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openTestDrawModal()`](#opentestdrawmodal), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`setMLBBViewMode()`](#setmlbbviewmode), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`findTeamGroupAndRank()`](#findteamgroupandrank), [`escapeHtml()`](#escapehtml), [`getSortedGroupTeams()`](#getsortedgroupteams), [`openTestDrawInNewWindow()`](#opentestdrawinnewwindow), [`closeTestDrawModal()`](#closetestdrawmodal)

<a id="testmlbbgroupallocationdraw"></a>
#### `testMLBBGroupAllocationDraw()`

- **Definisi:** [`app.js:4760`](app.js#L4760)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1098`](index.html#L1098) — Event `onclick`
    `<button class="btn btn-outline" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; bo`
  - [`app.js:4782`](app.js#L4782) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.6rem; font-weight:700;" onc`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`showToast()`](#showtoast), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`openTestDrawInNewWindow()`](#opentestdrawinnewwindow), [`getTeamDept()`](#getteamdept), [`isTeamInvited()`](#isteaminvited), [`escapeHtml()`](#escapehtml)

<a id="resetmlbbtostage1"></a>
#### `resetMLBBToStage1()`

- **Definisi:** [`app.js:4835`](app.js#L4835)
- **Deskripsi:** Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor jika diperlukan.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:486`](index.html#L486) — Event `onclick`
    `<button id="btnResetMLBBStage1" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`functional_tests.js:754`](functional_tests.js#L754) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMLBBToStage1()'), 'Harus ada fungsi resetMLBBToStage1');`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resettotalmlbbgroupandbracket"></a>
#### `resetTotalMLBBGroupAndBracket()`

- **Definisi:** [`app.js:4847`](app.js#L4847)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:490`](index.html#L490) — Event `onclick`
    `<button id="btnResetTotalMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5r`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openResetBaganModal()`](#openresetbaganmodal)

<a id="generatebracket"></a>
#### `generateBracket(doShuffle = false)`

- **Definisi:** [`app.js:5142`](app.js#L5142)
- **Deskripsi:** --- KNOCKOUT BRACKET ---
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:475`](index.html#L475) — Event `onchange`
    `<select id="bracketSize" onchange="generateBracket()" style="padding: 0.5rem 0.8rem; font-size: 0.85`
  - [`app.js:3850`](app.js#L3850) — di dalam fungsi `changeTournamentFormat()`
    `generateBracket(false);`
  - [`app.js:3900`](app.js#L3900) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateBracket(true);`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="renderbracket"></a>
#### `renderBracket()`

- **Definisi:** [`app.js:5215`](app.js#L5215)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3878`](app.js#L3878) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderBracket();`
  - [`app.js:4060`](app.js#L4060) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderBracket === 'function') renderBracket();`
  - [`app.js:5148`](app.js#L5148) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:5192`](app.js#L5192) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:5212`](app.js#L5212) — di dalam fungsi `pickWinner()`
    `renderBracket();`
- **Memanggil Fungsi Internal:** [`pickWinner()`](#pickwinner)

<a id="allocatemlbbgroups"></a>
#### `allocateMLBBGroups(teamsList, groupNames, doShuffle = false)`

- **Definisi:** [`app.js:5290`](app.js#L5290)
- **Deskripsi:** Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi): 1. Acak tim invited ke masing-masing group (tidak boleh ada di group yang sama). 2. Acak urutan tim sisanya (tim reguler). 3. Masukkan tim sesuai urutan acak ke masing-masing group: - Penempatan tim selalu memprioritaskan grup dengan jumlah peserta/tim terkecil terlebih dahulu. - Siklus 1: Cek nama depan sama (satelit) ATAU divisi sama -> jika bentrok, ke next group. - Siklus 2: Jika dalam 1 cycle tetap tidak dapat group -> masukkan ke group berikutnya jika tidak ada nama depan sama (aturan divisi dilanggar terlebih dahulu). - Siklus 3: Jika dalam 1 cycle berikutnya masih tidak dapat -> masukkan ke group berikutnya (aturan satelit dilanggar demi menjaga keseimbangan kapasitas). Invarian Mutlak: Keseimbangan kapasitas grup dijaga ketat (misal 41 tim ke 8 grup = tepat 7 grup isi 5 tim dan 1 grup isi 6 tim). /
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4769`](app.js#L4769) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, true);`
  - [`app.js:5500`](app.js#L5500) — di dalam fungsi `generateGroupStage()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, doShuffle);`
  - [`functional_tests.js:885`](functional_tests.js#L885) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('allocateMLBBGroups('), 'app.js harus memiliki fungsi alokasi grup cerdas');`
- **Memanggil Fungsi Internal:** [`getTeamPrefix()`](#getteamprefix), [`getTeamDept()`](#getteamdept), [`getDepartmentCluster()`](#getdepartmentcluster), [`isTeamInvited()`](#isteaminvited), [`isInvited()`](#isinvited), [`getPrefix()`](#getprefix), [`getDept()`](#getdept), [`getOverBaseCount()`](#getoverbasecount), [`hasPrefixConflict()`](#hasprefixconflict), [`hasDeptConflict()`](#hasdeptconflict)

<a id="generategroupstage"></a>
#### `generateGroupStage(doShuffle = false)`

- **Definisi:** [`app.js:5480`](app.js#L5480)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:251`](app.js#L251) — di dalam fungsi `toggleInvitedTeam()`
    `generateGroupStage(false);`
  - [`app.js:3854`](app.js#L3854) — di dalam fungsi `changeTournamentFormat()`
    `generateGroupStage(false);`
  - [`app.js:3902`](app.js#L3902) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateGroupStage(true);`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="getmlbbheadtoheadwinner"></a>
#### `getMLBBHeadToHeadWinner(teamA, teamB, gName)`

- **Definisi:** [`app.js:5533`](app.js#L5533)
- **Deskripsi:** Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fase grup MLBB
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5614`](app.js#L5614) — di dalam fungsi `compareMLBBTeams()`
    `const h2h = getMLBBHeadToHeadWinner(a.name, b.name, gName);`
- **Memanggil Fungsi Internal:** [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="comparemlbbteams"></a>
#### `compareMLBBTeams(a, b)`

- **Definisi:** [`app.js:5600`](app.js#L5600)
- **Deskripsi:** Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke Squad: 1. Point (Total Poin, besar ke kecil) 2. Agregat Skor Game / Game Difference (Diff = Game Menang - Game Kalah, besar ke kecil) 3. Head-to-Head / H2H (Jika Poin & Agregat sama, pemenang pertemuan langsung di grup lebih atas) 4. Menang (Match Won / W, besar ke kecil) 5. Kalah (Match Lost / L, kecil ke besar: makin sedikit kalah makin di atas) 6. Total MVP Tim (besar ke kecil) 7. Nama Tim (A-Z)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5659`](app.js#L5659) — di dalam fungsi `getSortedGroupTeams()`
    `return [...teams].sort((a, b) => compareMLBBTeams(a, b, gName));`
- **Memanggil Fungsi Internal:** [`getMLBBHeadToHeadWinner()`](#getmlbbheadtoheadwinner)

<a id="findvalidbracketpermutation"></a>
#### `findValidBracketPermutation(candidates, forbiddenGroupsPerSlot)`

- **Definisi:** [`app.js:5671`](app.js#L5671)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5953`](app.js#L5953) — di dalam fungsi `initGroupPlayoff()`
    `branchJ2 = findValidBracketPermutation(j2List, forbiddenForJ2);`
  - [`app.js:5965`](app.js#L5965) — di dalam fungsi `initGroupPlayoff()`
    `branchJ3 = findValidBracketPermutation(j3List, forbiddenForJ3);`
  - [`app.js:6084`](app.js#L6084) — di dalam fungsi `initGroupPlayoff()`
    `const candJ2 = findValidBracketPermutation(j2List, forbidden);`
  - [`app.js:6102`](app.js#L6102) — di dalam fungsi `initGroupPlayoff()`
    `bJ2 = findValidBracketPermutation(j2List, forbidden) || bJ1.map(j => j2List[(j1List.findIndex(x => x`
- **Memanggil Fungsi Internal:** [`backtrack()`](#backtrack), [`shuffleArray()`](#shufflearray)

<a id="isplayoffinvitedteam"></a>
#### `isPlayoffInvitedTeam(teamName)`

- **Definisi:** [`app.js:5711`](app.js#L5711)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5752`](app.js#L5752) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const isInv = (t) => isPlayoffInvitedTeam(t);`
  - [`app.js:5872`](app.js#L5872) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const isInv = (t) => isPlayoffInvitedTeam(t);`
- **Memanggil Fungsi Internal:** [`isTeamInvited()`](#isteaminvited)

<a id="solveremainingbracketslots"></a>
#### `solveRemainingBracketSlots(remainingItems, emptySlots, currentArray, validatorFn)`

- **Definisi:** [`app.js:5723`](app.js#L5723)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5852`](app.js#L5852) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const solvedBranchJ1 = solveRemainingBracketSlots(j1Regular, emptyJ1Slots, branchJ1, (slot, item) =>`
  - [`app.js:5859`](app.js#L5859) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const solvedBranchJ2 = solveRemainingBracketSlots(j2Regular, emptyJ2Slots, branchJ2, (slot, item) =>`
  - [`app.js:5899`](app.js#L5899) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const solved = solveRemainingBracketSlots(j3Regular, emptySlots, branchJ3, (slot, item) => {`
- **Memanggil Fungsi Internal:** [`shuffleArray()`](#shufflearray), [`backtrack()`](#backtrack)

<a id="drawmlbbplayoffupperbracket"></a>
#### `drawMLBBPlayoffUpperBracket(j1List, j2List)`

- **Definisi:** [`app.js:5751`](app.js#L5751)
- **Deskripsi:** Algoritma Pengundian Cerdas Playoff Upper Bracket 16 Besar (MLBB): 1. Undi tim invited terlebih dahulu. 2. Bagi acak tim invited ke 2 wings (Pool Atas [0..3] vs Pool Bawah [4..7]). - Jika ada ATMO dan ALPHA (Aang Alpha), pisahkan mereka di wings/pool yang berbeda! 3. Pisahkan mereka pada match yang berbeda di Tahap 1 (tidak saling berhadapan di 16 Besar, beda sayap QF). 4. Setelah menempatkan tim invited, undi tim reguler lain untuk menempati bagan yang kosong. 5. Pastikan syarat anti-rematch grup (Juara 2 beda grup dari Juara 1 di slot yang sama) tetap 100% terpenuhi. /
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5946`](app.js#L5946) — di dalam fungsi `initGroupPlayoff()`
    `const drawnUpper = drawMLBBPlayoffUpperBracket(j1List, j2List);`
- **Memanggil Fungsi Internal:** [`isPlayoffInvitedTeam()`](#isplayoffinvitedteam), [`isInv()`](#isinv), [`isTeamAtmo()`](#isteamatmo), [`isTeamAlpha()`](#isteamalpha), [`isTeamAppa()`](#isteamappa), [`shuffleArray()`](#shufflearray), [`solveRemainingBracketSlots()`](#solveremainingbracketslots)

<a id="drawmlbbplayofflowerbracket"></a>
#### `drawMLBBPlayoffLowerBracket(j3List, branchJ1, branchJ2)`

- **Definisi:** [`app.js:5871`](app.js#L5871)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5960`](app.js#L5960) — di dalam fungsi `initGroupPlayoff()`
    `const drawnLower = drawMLBBPlayoffLowerBracket(j3List, branchJ1, branchJ2);`
- **Memanggil Fungsi Internal:** [`isPlayoffInvitedTeam()`](#isplayoffinvitedteam), [`isInv()`](#isinv), [`shuffleArray()`](#shufflearray), [`solveRemainingBracketSlots()`](#solveremainingbracketslots)

<a id="initgroupplayoff"></a>
#### `initGroupPlayoff(doShuffle = false)`

- **Definisi:** [`app.js:5908`](app.js#L5908)
- **Deskripsi:** Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seeding Juara vs Runner-up).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:1542`](app.js#L1542) — di dalam fungsi `cleanOrphanedTournamentData()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff();`
  - [`app.js:3986`](app.js#L3986) — di dalam fungsi `resolveMLBBTieBreaker()`
    `initGroupPlayoff();`
  - [`app.js:4013`](app.js#L4013) — di dalam fungsi `proceedToMLBBStage2()`
    `initGroupPlayoff(true);`
  - [`app.js:4114`](app.js#L4114) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `initGroupPlayoff(true);`
  - [`app.js:4509`](app.js#L4509) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `initGroupPlayoff(true);`
  - [`app.js:5513`](app.js#L5513) — di dalam fungsi `generateGroupStage()`
    `initGroupPlayoff(doShuffle);`
  - [`app.js:5528`](app.js#L5528) — di dalam fungsi `updateGroupRecord()`
    `initGroupPlayoff();`
  - [`app.js:7223`](app.js#L7223) — di dalam fungsi `setGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:8267`](app.js#L8267) — di dalam fungsi `resetGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:10869`](app.js#L10869) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `initGroupPlayoff(!isLocked);`
  - [`app.js:11004`](app.js#L11004) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff(false);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`drawMLBBPlayoffUpperBracket()`](#drawmlbbplayoffupperbracket), [`shuffleArray()`](#shufflearray), [`findValidBracketPermutation()`](#findvalidbracketpermutation), [`drawMLBBPlayoffLowerBracket()`](#drawmlbbplayofflowerbracket), [`isTeamAtmo()`](#isteamatmo), [`isTeamAlpha()`](#isteamalpha)

<a id="isplayoffplaceholderteam"></a>
#### `isPlayoffPlaceholderTeam(teamName)`

- **Definisi:** [`app.js:6151`](app.js#L6151)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4371`](app.js#L4371) — di dalam fungsi `setPlayoffMatchScore()`
    `if (isPlayoffPlaceholderTeam(match.teamA) || isPlayoffPlaceholderTeam(match.teamB)) {`
  - [`app.js:4424`](app.js#L4424) — di dalam fungsi `onPlayoffTeamClicked()`
    `if (!m || isPlayoffPlaceholderTeam(m.teamA) || isPlayoffPlaceholderTeam(m.teamB)) {`
  - [`app.js:4443`](app.js#L4443) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `const isReady = !isPlayoffPlaceholderTeam(m.teamA) && !isPlayoffPlaceholderTeam(m.teamB);`
  - [`app.js:6164`](app.js#L6164) — di dalam fungsi `pickGroupPlayoffWinner()`
    `if (!match || !winnerTeam || isPlayoffPlaceholderTeam(winnerTeam)) return;`
  - [`app.js:10933`](app.js#L10933) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `const isReady = !isPlayoffPlaceholderTeam(m.teamA) && !isPlayoffPlaceholderTeam(m.teamB);`

<a id="pickgroupplayoffwinner"></a>
#### `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:6161`](app.js#L6161)
- **Deskripsi:** Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya ke ronde berikutnya.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4392`](app.js#L4392) — di dalam fungsi `setPlayoffMatchScore()`
    `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam);`
- **Memanggil Fungsi Internal:** [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="promptplayoffmvp"></a>
#### `promptPlayoffMVP(rIdx, mIdx)`

- **Definisi:** [`app.js:6329`](app.js#L6329)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:792`](functional_tests.js#L792) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptPlayoffMVP('), 'Harus memiliki promptPlayoffMVP');`
- **Memanggil Fungsi Internal:** [`openMLBBPlayoffMvpModal()`](#openmlbbplayoffmvpmodal)

<a id="rendergroupstageui"></a>
#### `renderGroupStageUI()`

- **Definisi:** [`app.js:6336`](app.js#L6336)
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:17`](app.js#L17) — di dalam fungsi `prevMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:24`](app.js#L24) — di dalam fungsi `nextMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:29`](app.js#L29) — di dalam fungsi `goToMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:3883`](app.js#L3883) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderGroupStageUI();`
  - [`app.js:3987`](app.js#L3987) — di dalam fungsi `resolveMLBBTieBreaker()`
    `renderGroupStageUI();`
  - [`app.js:4005`](app.js#L4005) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupStageUI();`
  - [`app.js:4058`](app.js#L4058) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:5514`](app.js#L5514) — di dalam fungsi `generateGroupStage()`
    `renderGroupStageUI();`
  - [`app.js:5529`](app.js#L5529) — di dalam fungsi `updateGroupRecord()`
    `renderGroupStageUI();`
  - [`app.js:7224`](app.js#L7224) — di dalam fungsi `setGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:7959`](app.js#L7959) — di dalam fungsi `setGroupMatchMVP()`
    `renderGroupStageUI();`
  - [`app.js:8051`](app.js#L8051) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8069`](app.js#L8069) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8092`](app.js#L8092) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:8268`](app.js#L8268) — di dalam fungsi `resetGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:10799`](app.js#L10799) — di dalam fungsi `setMLBBViewMode()`
    `renderGroupStageUI();`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`goToMLBBGroupPage()`](#gotomlbbgrouppage), [`prevMLBBGroupPage()`](#prevmlbbgrouppage), [`nextMLBBGroupPage()`](#nextmlbbgrouppage), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`getSortedGroupTeams()`](#getsortedgroupteams), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker)

<a id="setmlbbactiveweek"></a>
#### `setMLBBActiveWeek(weekKey)`

- **Definisi:** [`app.js:6775`](app.js#L6775)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8423`](app.js#L8423) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_1' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:8428`](app.js#L8428) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_2' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:8433`](app.js#L8433) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_3' ? 'active' : ''}" onclick="setMLBBActive`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivedayfilter"></a>
#### `setMLBBActiveDayFilter(day)`

- **Definisi:** [`app.js:6783`](app.js#L6783)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:8540`](app.js#L8540) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 'ALL' ? 'active' : ''}" onc`
  - [`app.js:8543`](app.js#L8543) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 1 ? 'active' : ''}" onclick`
  - [`app.js:8546`](app.js#L8546) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 2 ? 'active' : ''}" onclick`
  - [`app.js:8549`](app.js#L8549) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 3 ? 'active' : ''}" onclick`
  - [`app.js:8552`](app.js#L8552) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 4 ? 'active' : ''}" onclick`
  - [`app.js:8555`](app.js#L8555) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 5 ? 'active' : ''}" onclick`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivegroupfilter"></a>
#### `setMLBBActiveGroupFilter(gName)`

- **Definisi:** [`app.js:6788`](app.js#L6788)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8561`](app.js#L8561) — di dalam fungsi `renderGroupFixturesUI()`
    `<select onchange="setMLBBActiveGroupFilter(this.value)" style="background:#0f172a; border:1px solid `
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="getgroupfixtures"></a>
#### `getGroupFixtures(gName, dayFilter = null)`

- **Definisi:** [`app.js:6794`](app.js#L6794)
- **Deskripsi:** --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) ---
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:3941`](app.js#L3941) — di dalam fungsi `isAllMLBBGroupMatchesFinished()`
    `const fixtures = getGroupFixtures(gName);`
  - [`app.js:6998`](app.js#L6998) — di dalam fungsi `isGroupMatchesCompleted()`
    `const fixtures = (typeof getGroupFixtures === 'function') ? getGroupFixtures(gName) : [];`
  - [`app.js:7109`](app.js#L7109) — di dalam fungsi `getGroupRestingTeams()`
    `const dayFixtures = getGroupFixtures(gName, day);`
  - [`app.js:8574`](app.js#L8574) — di dalam fungsi `renderGroupFixturesUI()`
    `const fixtures = getGroupFixtures(gName, mlbbActiveDayFilter);`
  - [`app.js:11504`](app.js#L11504) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const fixtures = getGroupFixtures(gName);`
  - [`functional_tests.js:675`](functional_tests.js#L675) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getGroupFixtures('), 'app.js harus memiliki generator jadwal getGr`
- **Memanggil Fungsi Internal:** [`resolveTeamNameInGroup()`](#resolveteamnameingroup), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="savegroupfixturescore"></a>
#### `saveGroupFixtureScore(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:7262`](app.js#L7262)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8673`](app.js#L8673) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-primary" style="font-size:0.68rem; padding:2px 8px;" onclick="s`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="openmlbbgroupmvpmodal"></a>
#### `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, scoreA, scoreB)`

- **Definisi:** [`app.js:7315`](app.js#L7315)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7997`](app.js#L7997) — di dalam fungsi `promptGroupMatchMVP()`
    `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, null, null);`
  - [`app.js:8677`](app.js#L8677) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 8px; color:var(-`
  - [`app.js:11660`](app.js#L11660) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname), [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="openmlbbplayoffmvpmodal"></a>
#### `openMLBBPlayoffMvpModal(rIdx, mIdx)`

- **Definisi:** [`app.js:7389`](app.js#L7389)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6333`](app.js#L6333) — di dalam fungsi `promptPlayoffMVP()`
    `openMLBBPlayoffMvpModal(rIdx, mIdx);`
- **Memanggil Fungsi Internal:** [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="closemlbbgroupmvpmodal"></a>
#### `closeMLBBGroupMvpModal()`

- **Definisi:** [`app.js:7575`](app.js#L7575)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:865`](index.html#L865) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:933`](index.html#L933) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;" on`
  - [`app.js:7822`](app.js#L7822) — di dalam fungsi `saveSelectedMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:7832`](app.js#L7832) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:7874`](app.js#L7874) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`

<a id="recalculategroupstandingsfromfixtures"></a>
#### `recalculateGroupStandingsFromFixtures()`

- **Definisi:** [`app.js:8271`](app.js#L8271)
- **Deskripsi:** Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan seluruh hasil pertandingan BO3.
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1434`](app.js#L1434) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
  - [`app.js:7221`](app.js#L7221) — di dalam fungsi `setGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:8265`](app.js#L8265) — di dalam fungsi `resetGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:10732`](app.js#L10732) — cakupan global / event handler
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
- **Memanggil Fungsi Internal:** [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="rendergroupfixturesui"></a>
#### `renderGroupFixturesUI()`

- **Definisi:** [`app.js:8411`](app.js#L8411)
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:34`](app.js#L34) — di dalam fungsi `toggleAllMLBBFixtures()`
    `renderGroupFixturesUI();`
  - [`app.js:6425`](app.js#L6425) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:6572`](app.js#L6572) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:6780`](app.js#L6780) — di dalam fungsi `setMLBBActiveWeek()`
    `renderGroupFixturesUI();`
  - [`app.js:6785`](app.js#L6785) — di dalam fungsi `setMLBBActiveDayFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:6790`](app.js#L6790) — di dalam fungsi `setMLBBActiveGroupFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:7960`](app.js#L7960) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8052`](app.js#L8052) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8070`](app.js#L8070) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:8093`](app.js#L8093) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`functional_tests.js:677`](functional_tests.js#L677) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderGroupFixturesUI('), 'app.js harus memiliki renderer bagan re`
- **Memanggil Fungsi Internal:** [`setMLBBActiveWeek()`](#setmlbbactiveweek), [`setMLBBActiveDayFilter()`](#setmlbbactivedayfilter), [`setMLBBActiveGroupFilter()`](#setmlbbactivegroupfilter), [`getGroupFixtures()`](#getgroupfixtures), [`escapeHtml()`](#escapehtml), [`getGroupRestingTeams()`](#getgrouprestingteams), [`isSameTeamName()`](#issameteamname), [`formatMatchMvpDisplayHtml()`](#formatmatchmvpdisplayhtml), [`openMatchPlayerVerifyModal()`](#openmatchplayerverifymodal), [`saveGroupFixtureScore()`](#savegroupfixturescore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="rendergroupplayofftree"></a>
#### `renderGroupPlayoffTree()`

- **Definisi:** [`app.js:8692`](app.js#L8692)
- **Deskripsi:** Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau status terkunci jika grup belum selesai.
- **Titik Pemanggilan (14 lokasi):**
  - [`app.js:4018`](app.js#L4018) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupPlayoffTree();`
  - [`app.js:4035`](app.js#L4035) — di dalam fungsi `refreshAndScrollToPlayoffBracket()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:4059`](app.js#L4059) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:4119`](app.js#L4119) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `renderGroupPlayoffTree();`
  - [`app.js:4164`](app.js#L4164) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `renderGroupPlayoffTree();`
  - [`app.js:4412`](app.js#L4412) — di dalam fungsi `resetPlayoffMatchScore()`
    `renderGroupPlayoffTree();`
  - [`app.js:4519`](app.js#L4519) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderGroupPlayoffTree();`
  - [`app.js:5515`](app.js#L5515) — di dalam fungsi `generateGroupStage()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
  - [`app.js:6325`](app.js#L6325) — di dalam fungsi `pickGroupPlayoffWinner()`
    `renderGroupPlayoffTree();`
  - [`app.js:6426`](app.js#L6426) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:6573`](app.js#L6573) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:7812`](app.js#L7812) — di dalam fungsi `saveSelectedMvp()`
    `renderGroupPlayoffTree();`
  - [`app.js:7864`](app.js#L7864) — di dalam fungsi `deleteCurrentMvp()`
    `renderGroupPlayoffTree();`
  - [`app.js:10875`](app.js#L10875) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `if (typeof renderGroupPlayoffTree === 'function') renderGroupPlayoffTree();`
- **Memanggil Fungsi Internal:** [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`testMLBBPlayoffWithCurrentStandings()`](#testmlbbplayoffwithcurrentstandings), [`toggleLockMLBBPlayoff()`](#togglelockmlbbplayoff), [`showToast()`](#showtoast), [`shuffleMLBBPlayoffBracket()`](#shufflemlbbplayoffbracket), [`renderPlayoffMatchCardHtml()`](#renderplayoffmatchcardhtml)

<a id="setmlbbviewmode"></a>
#### `setMLBBViewMode(mode)`

- **Definisi:** [`app.js:10765`](app.js#L10765)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MLBB ---
- **Titik Pemanggilan (6 lokasi):**
  - [`index.html:514`](index.html#L514) — Event `onclick`
    `<button type="button" id="btnViewMlbbHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:517`](index.html#L517) — Event `onclick`
    `<button type="button" id="btnViewMlbbGroups" class="btn btn-outline" style="font-size: 0.8rem; paddi`
  - [`index.html:520`](index.html#L520) — Event `onclick`
    `<button type="button" id="btnViewMlbbFixtures" class="btn btn-outline" style="font-size: 0.8rem; pad`
  - [`app.js:2592`](app.js#L2592) — di dalam fungsi `switchTab()`
    `setMLBBViewMode('HUB');`
  - [`app.js:4515`](app.js#L4515) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `setMLBBViewMode('GROUPS');`
  - [`functional_tests.js:1164`](functional_tests.js#L1164) — pada skenario pengujian
    `assert(appCode.includes('function setMLBBViewMode('), 'app.js harus memiliki fungsi setMLBBViewMode'`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="toggleplayoffbracketcollapse"></a>
#### `togglePlayoffBracketCollapse()`

- **Definisi:** [`app.js:10851`](app.js#L10851)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11193`](app.js#L11193) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.38rem 0.7rem; bord`

<a id="gotonextmlbbplayoffphase"></a>
#### `goToNextMLBBPlayoffPhase()`

- **Definisi:** [`app.js:10863`](app.js#L10863)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11324`](app.js#L11324) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="btn btn-primary" style="width:100%; font-size:0.82rem; padding:0.6rem 0`
  - [`app.js:11530`](app.js#L11530) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; fon`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`refreshAndScrollToPlayoffBracket()`](#refreshandscrolltoplayoffbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="setplayoffbracketfilter"></a>
#### `setPlayoffBracketFilter(filter)`

- **Definisi:** [`app.js:10890`](app.js#L10890)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11202`](app.js#L11202) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${currentPlayoffBracketFilter === 'UPPER' ? 'btn-primary' : 'btn-ou`
  - [`app.js:11205`](app.js#L11205) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn ${currentPlayoffBracketFilter === 'LOWER' ? 'btn-gold' : 'btn-outli`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="toggleplayofffullscreen"></a>
#### `togglePlayoffFullscreen()`

- **Definisi:** [`app.js:10897`](app.js#L10897)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11190`](app.js#L11190) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-outline" style="font-size:0.75rem; padding:0.38rem 0.7rem; bord`

<a id="renderfullplayoffbrackethtml"></a>
#### `renderFullPlayoffBracketHtml(activeNodeKey = '')`

- **Definisi:** [`app.js:11002`](app.js#L11002)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:11458`](app.js#L11458) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `content += renderFullPlayoffBracketHtml(nodeKey);`
  - [`app.js:11494`](app.js#L11494) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `content += renderFullPlayoffBracketHtml(nodeKey);`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff), [`renderSingleMatchNodeHtml()`](#rendersinglematchnodehtml), [`renderSvgConnectorColumn()`](#rendersvgconnectorcolumn), [`toggleLockMLBBPlayoff()`](#togglelockmlbbplayoff), [`showToast()`](#showtoast), [`shuffleMLBBPlayoffBracket()`](#shufflemlbbplayoffbracket), [`testMLBBPlayoffWithCurrentStandings()`](#testmlbbplayoffwithcurrentstandings), [`togglePlayoffFullscreen()`](#toggleplayofffullscreen), [`togglePlayoffBracketCollapse()`](#toggleplayoffbracketcollapse), [`setPlayoffBracketFilter()`](#setplayoffbracketfilter)

<a id="selectmlbbstagenode"></a>
#### `selectMLBBStageNode(nodeKey)`

- **Definisi:** [`app.js:11220`](app.js#L11220)
- **Titik Pemanggilan (17 lokasi):**
  - [`app.js:10930`](app.js#L10930) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `? 'onclick="if(event.target.closest('.bracket-node-team') || event.target.closest('button')) return;`
  - [`app.js:11245`](app.js#L11245) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<select id="mobileStageSelect" class="mobile-stage-select" onchange="selectMLBBStageNode(this.value)`
  - [`app.js:11312`](app.js#L11312) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:11339`](app.js#L11339) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.2rem 0.55rem; colo`
  - [`app.js:11365`](app.js#L11365) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:11388`](app.js#L11388) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_UPPER_QF' ? 'active' : ''}" onclic`
  - [`app.js:11392`](app.js#L11392) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_LOWER_R1' ? 'active' : ''}" onclic`
  - [`app.js:11410`](app.js#L11410) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_UPPER' ? 'active' : ''}" onclick="`
  - [`app.js:11414`](app.js#L11414) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_LOWER' ? 'active' : ''}" onclick="`
  - [`app.js:11434`](app.js#L11434) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'GRAND_FINAL_OFFLINE' ? 'active`
  - [`app.js:11468`](app.js#L11468) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11471`](app.js#L11471) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11474`](app.js#L11474) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11477`](app.js#L11477) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11480`](app.js#L11480) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`app.js:11483`](app.js#L11483) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button type="button" class="btn btn-outline" style="text-align:left; padding:0.5rem 0.75rem; font-s`
  - [`functional_tests.js:1166`](functional_tests.js#L1166) — pada skenario pengujian
    `assert(appCode.includes('function selectMLBBStageNode('), 'app.js harus memiliki selectMLBBStageNode`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermlbbinteractivehubui"></a>
#### `renderMLBBInteractiveHubUI()`

- **Definisi:** [`app.js:11231`](app.js#L11231)
- **Titik Pemanggilan (24 lokasi):**
  - [`app.js:3858`](app.js#L3858) — di dalam fungsi `changeTournamentFormat()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:4019`](app.js#L4019) — di dalam fungsi `proceedToMLBBStage2()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4036`](app.js#L4036) — di dalam fungsi `refreshAndScrollToPlayoffBracket()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4061`](app.js#L4061) — di dalam fungsi `refreshAndScrollToGroupOrBracket()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4120`](app.js#L4120) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:4165`](app.js#L4165) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:4413`](app.js#L4413) — di dalam fungsi `resetPlayoffMatchScore()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:5516`](app.js#L5516) — di dalam fungsi `generateGroupStage()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:6326`](app.js#L6326) — di dalam fungsi `pickGroupPlayoffWinner()`
    `if (typeof renderMLBBInteractiveHubUI === "function") renderMLBBInteractiveHubUI();`
  - [`app.js:6352`](app.js#L6352) — di dalam fungsi `renderGroupStageUI()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:7961`](app.js#L7961) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8053`](app.js#L8053) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8071`](app.js#L8071) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:8094`](app.js#L8094) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:10790`](app.js#L10790) — di dalam fungsi `setMLBBViewMode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:10876`](app.js#L10876) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:10893`](app.js#L10893) — di dalam fungsi `setPlayoffBracketFilter()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11222`](app.js#L11222) — di dalam fungsi `selectMLBBStageNode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11561`](app.js#L11561) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:11564`](app.js#L11564) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
  - [`app.js:11656`](app.js#L11656) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:11658`](app.js#L11658) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:11659`](app.js#L11659) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`functional_tests.js:1165`](functional_tests.js#L1165) — pada skenario pengujian
    `assert(appCode.includes('function renderMLBBInteractiveHubUI()'), 'app.js harus memiliki renderMLBBI`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`goToNextMLBBPlayoffPhase()`](#gotonextmlbbplayoffphase), [`renderMLBBDetailPanelContent()`](#rendermlbbdetailpanelcontent)

<a id="rendermlbbdetailpanelcontent"></a>
#### `renderMLBBDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:11453`](app.js#L11453)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:11447`](app.js#L11447) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `rightHtml += renderMLBBDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderFullPlayoffBracketHtml()`](#renderfullplayoffbrackethtml), [`selectMLBBStageNode()`](#selectmlbbstagenode), [`getSortedGroupTeams()`](#getsortedgroupteams), [`getGroupFixtures()`](#getgroupfixtures), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`escapeHtml()`](#escapehtml), [`goToNextMLBBPlayoffPhase()`](#gotonextmlbbplayoffphase), [`updateGroupRecord()`](#updategrouprecord), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`isSameTeamName()`](#issameteamname), [`setGroupMatchScore()`](#setgroupmatchscore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

---

### 📦 Modul Aplikasi Umum

<a id="posttogoogleappsscript"></a>
#### `postToGoogleAppsScript(payload, timeoutMs = 45000)`

- **Definisi:** [`app.js:88`](app.js#L88)
- **Deskripsi:** Helper fetch terpusat untuk komunikasi POST dengan Google Apps Script Web App. - Menggunakan Content-Type text/plain;charset=utf-8 (mencegah CORS preflight OPTIONS yang tidak didukung GAS). - Mengaktifkan mode: 'cors' dan redirect: 'follow' untuk menangani 302 redirect ke script.googleusercontent.com secara andal. - Dilengkapi AbortController timeout agar antarmuka tidak hang saat koneksi lambat. /
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:1675`](app.js#L1675) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `const batchRes = await postToGoogleAppsScript({`
  - [`app.js:1714`](app.js#L1714) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `return postToGoogleAppsScript({`
  - [`app.js:1743`](app.js#L1743) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `await postToGoogleAppsScript({`
  - [`app.js:1804`](app.js#L1804) — cakupan global / event handler
    `const res = await postToGoogleAppsScript(payload, 35000);`
  - [`app.js:1834`](app.js#L1834) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `const res = await postToGoogleAppsScript({`
  - [`app.js:2027`](app.js#L2027) — di dalam fungsi `saveCustomRules()`
    `postToGoogleAppsScript({`
  - [`app.js:3165`](app.js#L3165) — di dalam fungsi `handleRegister()`
    `let res = await postToGoogleAppsScript(payload, 45000);`
  - [`app.js:3176`](app.js#L3176) — di dalam fungsi `handleRegister()`
    `res = await postToGoogleAppsScript(payload, 45000);`
  - [`app.js:3285`](app.js#L3285) — di dalam fungsi `setParticipantStatus()`
    `postToGoogleAppsScript({`
  - [`app.js:3338`](app.js#L3338) — di dalam fungsi `deleteParticipant()`
    `postToGoogleAppsScript({`
  - [`app.js:3571`](app.js#L3571) — di dalam fungsi `saveParticipantEdit()`
    `const response = await postToGoogleAppsScript({`
  - [`app.js:5047`](app.js#L5047) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const res = await postToGoogleAppsScript(payload, 35000);`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`app.js:136`](app.js#L136)
- **Deskripsi:** Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5303`](app.js#L5303) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:5314`](app.js#L5314) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getDepartmentCluster === 'function') return getDepartmentCluster(d, team).toLowerCase();`
  - [`app.js:8949`](app.js#L8949) — di dalam fungsi `syncMCGGPlayers()`
    `const cluster = getDepartmentCluster(ply.dept, ply.name);`
  - [`app.js:8979`](app.js#L8979) — di dalam fungsi `syncMCGGPlayers()`
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
  - [`app.js:4807`](app.js#L4807) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:5312`](app.js#L5312) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:4808`](app.js#L4808) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5322`](app.js#L5322) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:5714`](app.js#L5714) — di dalam fungsi `isPlayoffInvitedTeam()`
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
  - [`app.js:3762`](app.js#L3762) — di dalam fungsi `renderParticipants()`
    `<button class="btn ${p.isInvited ? 'btn-gold' : 'btn-outline'}" style="padding: 0.35rem 0.55rem; fon`
  - [`functional_tests.js:877`](functional_tests.js#L877) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleInvitedTeam('), 'app.js harus memiliki toggleInvitedTeam');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="showgloballoader"></a>
#### `showGlobalLoader(msg = "Menyinkronkan data turnamen dari Google Sheets...")`

- **Definisi:** [`app.js:278`](app.js#L278)
- **Deskripsi:** Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10705`](app.js#L10705) — cakupan global / event handler
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
  - [`app.js:10737`](app.js#L10737) — cakupan global / event handler
    `hideGlobalLoader();`
  - [`app.js:10748`](app.js#L10748) — cakupan global / event handler
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
  - [`app.js:10714`](app.js#L10714) — cakupan global / event handler
    `restoreFormDraft('MLBB');`
  - [`app.js:10715`](app.js#L10715) — cakupan global / event handler
    `restoreFormDraft('MCGG');`
- **Memanggil Fungsi Internal:** [`toggleOfficial2Form()`](#toggleofficial2form)

<a id="clearformdraft"></a>
#### `clearFormDraft(formType)`

- **Definisi:** [`app.js:1075`](app.js#L1075)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3257`](app.js#L3257) — di dalam fungsi `handleRegister()`
    `clearFormDraft(category);`

<a id="handleformdraftchange"></a>
#### `handleFormDraftChange()`

- **Definisi:** [`app.js:1082`](app.js#L1082)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:2053`](app.js#L2053) — di dalam fungsi `handleLogoPreview()`
    `handleFormDraftChange();`
  - [`app.js:2071`](app.js#L2071) — di dalam fungsi `handleSingleIdCardPreview()`
    `handleFormDraftChange();`
  - [`app.js:2091`](app.js#L2091) — di dalam fungsi `handlePlayerIdCardPreview()`
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
  - [`app.js:3329`](app.js#L3329) — di dalam fungsi `deleteParticipant()`
    `cleanOrphanedTournamentData();`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff)

<a id="savestate"></a>
#### `saveState()`

- **Definisi:** [`app.js:1863`](app.js#L1863)
- **Deskripsi:** Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi MCGG) ke localStorage.
- **Titik Pemanggilan (45 lokasi):**
  - [`app.js:248`](app.js#L248) — di dalam fungsi `toggleInvitedTeam()`
    `saveState();`
  - [`app.js:892`](app.js#L892) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveState();`
  - [`app.js:1480`](app.js#L1480) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveState();`
  - [`app.js:1639`](app.js#L1639) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `saveState();`
  - [`app.js:1784`](app.js#L1784) — cakupan global / event handler
    `saveState();`
  - [`app.js:1825`](app.js#L1825) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `saveState();`
  - [`app.js:2385`](app.js#L2385) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveState();`
  - [`app.js:3234`](app.js#L3234) — di dalam fungsi `handleRegister()`
    `saveState();`
  - [`app.js:3277`](app.js#L3277) — di dalam fungsi `setParticipantStatus()`
    `saveState();`
  - [`app.js:3330`](app.js#L3330) — di dalam fungsi `deleteParticipant()`
    `saveState();`
  - [`app.js:3555`](app.js#L3555) — di dalam fungsi `saveParticipantEdit()`
    `saveState();`
  - [`app.js:3985`](app.js#L3985) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveState();`
  - [`app.js:4015`](app.js#L4015) — di dalam fungsi `proceedToMLBBStage2()`
    `saveState();`
  - [`app.js:4116`](app.js#L4116) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveState();`
  - [`app.js:4162`](app.js#L4162) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveState();`
  - [`app.js:4411`](app.js#L4411) — di dalam fungsi `resetPlayoffMatchScore()`
    `saveState();`
  - [`app.js:4511`](app.js#L4511) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveState();`
  - [`app.js:4841`](app.js#L4841) — di dalam fungsi `resetMLBBToStage1()`
    `saveState();`
  - [`app.js:4903`](app.js#L4903) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `saveState();`
  - [`app.js:5069`](app.js#L5069) — di dalam fungsi `saveTournamentStateOnly()`
    `saveState();`
  - [`app.js:5512`](app.js#L5512) — di dalam fungsi `generateGroupStage()`
    `saveState();`
  - [`app.js:5527`](app.js#L5527) — di dalam fungsi `updateGroupRecord()`
    `saveState();`
  - [`app.js:6324`](app.js#L6324) — di dalam fungsi `pickGroupPlayoffWinner()`
    `saveState();`
  - [`app.js:7222`](app.js#L7222) — di dalam fungsi `setGroupMatchScore()`
    `saveState();`
  - [`app.js:7811`](app.js#L7811) — di dalam fungsi `saveSelectedMvp()`
    `saveState();`
  - [`app.js:7863`](app.js#L7863) — di dalam fungsi `deleteCurrentMvp()`
    `saveState();`
  - [`app.js:7958`](app.js#L7958) — di dalam fungsi `setGroupMatchMVP()`
    `saveState();`
  - [`app.js:8050`](app.js#L8050) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `saveState();`
  - [`app.js:8067`](app.js#L8067) — di dalam fungsi `toggleMatchPlayerVerify()`
    `saveState();`
  - [`app.js:8090`](app.js#L8090) — di dalam fungsi `verifyAllMatchPlayers()`
    `saveState();`
  - [`app.js:8266`](app.js#L8266) — di dalam fungsi `resetGroupMatchScore()`
    `saveState();`
  - [`app.js:9056`](app.js#L9056) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:9115`](app.js#L9115) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:9377`](app.js#L9377) — di dalam fungsi `updateMCGGRank()`
    `saveState();`
  - [`app.js:9412`](app.js#L9412) — di dalam fungsi `updateMCGGCommander()`
    `saveState();`
  - [`app.js:9448`](app.js#L9448) — di dalam fungsi `updateMCGGPenalty()`
    `saveState();`
  - [`app.js:9773`](app.js#L9773) — di dalam fungsi `drawMatchPool()`
    `saveState();`
  - [`app.js:9824`](app.js#L9824) — di dalam fungsi `assignMatchPoolToPlayers()`
    `saveState();`
  - [`app.js:9844`](app.js#L9844) — di dalam fungsi `toggleLockMatchDraw()`
    `saveState();`
  - [`app.js:9870`](app.js#L9870) — di dalam fungsi `nextMatchDraw()`
    `saveState();`
  - [`app.js:9903`](app.js#L9903) — di dalam fungsi `resetLobbyDraw()`
    `saveState();`
  - [`app.js:10681`](app.js#L10681) — di dalam fungsi `loadSampleData()`
    `saveState();`
  - [`app.js:10694`](app.js#L10694) — di dalam fungsi `clearAllData()`
    `saveState();`
  - [`app.js:10872`](app.js#L10872) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `saveState();`
  - [`app.js:12197`](app.js#L12197) — di dalam fungsi `shuffleMCGG32Besar()`
    `saveState();`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`updateAuthUI()`](#updateauthui), [`updateCounts()`](#updatecounts)

<a id="updatecounts"></a>
#### `updateCounts()`

- **Definisi:** [`app.js:1875`](app.js#L1875)
- **Deskripsi:** Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status verifikasi di header UI.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:913`](app.js#L913) — di dalam fungsi `bypassLoaderWithCache()`
    `updateCounts();`
  - [`app.js:1484`](app.js#L1484) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCounts();`
  - [`app.js:1872`](app.js#L1872) — di dalam fungsi `saveState()`
    `updateCounts();`
  - [`app.js:3281`](app.js#L3281) — di dalam fungsi `setParticipantStatus()`
    `updateCounts();`
  - [`app.js:3334`](app.js#L3334) — di dalam fungsi `deleteParticipant()`
    `updateCounts();`
  - [`app.js:10699`](app.js#L10699) — di dalam fungsi `clearAllData()`
    `updateCounts();`
  - [`app.js:10721`](app.js#L10721) — cakupan global / event handler
    `updateCounts();`

<a id="toggleofficial2form"></a>
#### `toggleOfficial2Form()`

- **Definisi:** [`app.js:2100`](app.js#L2100)
- **Deskripsi:** Toggle Official 2 Form
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:199`](index.html#L199) — Event `onchange`
    `<input type="checkbox" id="has_official_2" onchange="toggleOfficial2Form()">`
  - [`app.js:1018`](app.js#L1018) — di dalam fungsi `restoreFormDraft()`
    `toggleOfficial2Form();`
  - [`app.js:3260`](app.js#L3260) — di dalam fungsi `handleRegister()`
    `toggleOfficial2Form();`
  - [`app.js:10709`](app.js#L10709) — cakupan global / event handler
    `toggleOfficial2Form();`

<a id="renderplayersforminputs"></a>
#### `renderPlayersFormInputs()`

- **Definisi:** [`app.js:2107`](app.js#L2107)
- **Deskripsi:** Generate the 8 players form fields dynamically (Included In-Game Nickname and Per-Player ID Card Uploader)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3258`](app.js#L3258) — di dalam fungsi `handleRegister()`
    `renderPlayersFormInputs();`
  - [`app.js:10707`](app.js#L10707) — cakupan global / event handler
    `renderPlayersFormInputs();`
- **Memanggil Fungsi Internal:** [`handlePlayerIdCardPreview()`](#handleplayeridcardpreview)

<a id="togglecategoryform"></a>
#### `toggleCategoryForm()`

- **Definisi:** [`app.js:2166`](app.js#L2166)
- **Deskripsi:** Switch form between MLBB and MCGG cleanly
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:91`](index.html#L91) — Event `onchange`
    `<select id="gameCategory" required onchange="toggleCategoryForm()" style="font-size: 1rem; font-weig`
  - [`app.js:3259`](app.js#L3259) — di dalam fungsi `handleRegister()`
    `toggleCategoryForm();`
  - [`app.js:10708`](app.js#L10708) — cakupan global / event handler
    `toggleCategoryForm();`

<a id="renderregistrationui"></a>
#### `renderRegistrationUI()`

- **Definisi:** [`app.js:2262`](app.js#L2262)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1467`](app.js#L1467) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRegistrationUI();`
  - [`app.js:2341`](app.js#L2341) — di dalam fungsi `toggleRegistrationStatus()`
    `renderRegistrationUI();`
  - [`app.js:2580`](app.js#L2580) — di dalam fungsi `updateAuthUI()`
    `renderRegistrationUI();`
  - [`functional_tests.js:826`](functional_tests.js#L826) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderRegistrationUI()'), 'Harus memiliki renderRegistrationUI()')`

<a id="updateregistrationdatalists"></a>
#### `updateRegistrationDatalists()`

- **Definisi:** [`app.js:2660`](app.js#L2660)
- **Deskripsi:** Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit form dimatikan)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3261`](app.js#L3261) — di dalam fungsi `handleRegister()`
    `updateRegistrationDatalists();`
  - [`app.js:3676`](app.js#L3676) — di dalam fungsi `renderParticipants()`
    `updateRegistrationDatalists();`
  - [`functional_tests.js:171`](functional_tests.js#L171) — pada skenario pengujian
    `assert(appCode.includes('function updateRegistrationDatalists('), 'Harus ada fungsi updateRegistrati`

<a id="handleteamnameinput"></a>
#### `handleTeamNameInput(val)`

- **Definisi:** [`app.js:2674`](app.js#L2674)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:106`](index.html#L106) — Event `oninput`
    `<input type="text" id="teamName" oninput="handleTeamNameInput(this.value)" placeholder="Masukkan nam`
  - [`functional_tests.js:172`](functional_tests.js#L172) — pada skenario pengujian
    `assert(appCode.includes('function handleTeamNameInput('), 'Harus ada handler handleTeamNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="shuffleandgeneratetournament"></a>
#### `shuffleAndGenerateTournament()`

- **Definisi:** [`app.js:3887`](app.js#L3887)
- **Deskripsi:** Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum dikunci.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:483`](index.html#L483) — Event `onclick`
    `<button id="btnShuffleMLBB" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0.85rem;`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`refreshAndScrollToGroupOrBracket()`](#refreshandscrolltogrouporbracket), [`syncTournamentConfigToGSheet()`](#synctournamentconfigtogsheet)

<a id="findteamgroupandrank"></a>
#### `findTeamGroupAndRank(teamName)`

- **Definisi:** [`app.js:4478`](app.js#L4478)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4538`](app.js#L4538) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(mUB.teamA);`
  - [`app.js:4539`](app.js#L4539) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(mUB.teamB);`
  - [`app.js:4540`](app.js#L4540) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoC = findTeamGroupAndRank(mLB.teamB);`
  - [`app.js:4605`](app.js#L4605) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(m.teamA);`
  - [`app.js:4606`](app.js#L4606) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(m.teamB);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`isSameTeamName()`](#issameteamname)

<a id="opentestdrawinnewwindow"></a>
#### `openTestDrawInNewWindow()`

- **Definisi:** [`app.js:4703`](app.js#L4703)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1075`](index.html#L1075) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.25rem 0.6rem; font-size: 0.75rem; co`
  - [`app.js:4648`](app.js#L4648) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(`
  - [`app.js:4785`](app.js#L4785) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.6rem; border-color:var(-`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast)

<a id="pickwinner"></a>
#### `pickWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:5195`](app.js#L5195)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5261`](app.js#L5261) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:5265`](app.js#L5265) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket)

<a id="getprefix"></a>
#### `getPrefix(team)`

- **Definisi:** [`app.js:5302`](app.js#L5302)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:5340`](app.js#L5340) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:5348`](app.js#L5348) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:5357`](app.js#L5357) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:5373`](app.js#L5373) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountA = teamPrefix ? groups[a].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:5374`](app.js#L5374) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountB = teamPrefix ? groups[b].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:5407`](app.js#L5407) — di dalam fungsi `allocateMLBBGroups()`
    `const p = getPrefix(t);`
  - [`app.js:5414`](app.js#L5414) — di dalam fungsi `allocateMLBBGroups()`
    `const pA = getPrefix(a), pB = getPrefix(b);`
  - [`app.js:5422`](app.js#L5422) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:5425`](app.js#L5425) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPrefixConflict = (g) => teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`

<a id="getdept"></a>
#### `getDept(team)`

- **Definisi:** [`app.js:5310`](app.js#L5310)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:5341`](app.js#L5341) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:5349`](app.js#L5349) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDep = teamDept && groups[g].some(t => getDept(t) === teamDept);`
  - [`app.js:5408`](app.js#L5408) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getDept(t);`
  - [`app.js:5415`](app.js#L5415) — di dalam fungsi `allocateMLBBGroups()`
    `const dA = getDept(a), dB = getDept(b);`
  - [`app.js:5423`](app.js#L5423) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:5426`](app.js#L5426) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDeptConflict = (g) => teamDept && groups[g].some(t => getDept(t) === teamDept);`

<a id="isinvited"></a>
#### `isInvited(team)`

- **Definisi:** [`app.js:5321`](app.js#L5321)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5326`](app.js#L5326) — di dalam fungsi `allocateMLBBGroups()`
    `let invited = teamsList.filter(t => isInvited(t));`
  - [`app.js:5327`](app.js#L5327) — di dalam fungsi `allocateMLBBGroups()`
    `let regular = teamsList.filter(t => !isInvited(t));`
  - [`app.js:5347`](app.js#L5347) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:5356`](app.js#L5356) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:5365`](app.js#L5365) — di dalam fungsi `allocateMLBBGroups()`
    `if (!groups[g].some(t => isInvited(t))) { targetGroup = g; break; }`

<a id="getoverbasecount"></a>
#### `getOverBaseCount()`

- **Definisi:** [`app.js:5389`](app.js#L5389)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5395`](app.js#L5395) — di dalam fungsi `allocateMLBBGroups()`
    `return getOverBaseCount() < remainder;`

<a id="canaccept"></a>
#### `canAccept(g)`

- **Definisi:** [`app.js:5391`](app.js#L5391)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="hasprefixconflict"></a>
#### `hasPrefixConflict(g)`

- **Definisi:** [`app.js:5425`](app.js#L5425)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5444`](app.js#L5444) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`
  - [`app.js:5453`](app.js#L5453) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g)) {`

<a id="hasdeptconflict"></a>
#### `hasDeptConflict(g)`

- **Definisi:** [`app.js:5426`](app.js#L5426)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5444`](app.js#L5444) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`

<a id="updategrouprecord"></a>
#### `updateGroupRecord(gName, idx, field, val)`

- **Definisi:** [`app.js:5519`](app.js#L5519)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:6487`](app.js#L6487) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" o`
  - [`app.js:6491`](app.js#L6491) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" `
  - [`app.js:11561`](app.js#L11561) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:11564`](app.js#L11564) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="getsortedgroupteams"></a>
#### `getSortedGroupTeams(gName)`

- **Definisi:** [`app.js:5634`](app.js#L5634)
- **Deskripsi:** Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkulasi MVP terkini
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:3950`](app.js#L3950) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4481`](app.js#L4481) — di dalam fungsi `findTeamGroupAndRank()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4623`](app.js#L4623) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4990`](app.js#L4990) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const sorted = typeof getSortedGroupTeams === 'function' ? getSortedGroupTeams(gName) : groupTeams;`
  - [`app.js:5924`](app.js#L5924) — di dalam fungsi `initGroupPlayoff()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:6050`](app.js#L6050) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:6051`](app.js#L6051) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:6052`](app.js#L6052) — di dalam fungsi `initGroupPlayoff()`
    `const grpC = getSortedGroupTeams('Grup C');`
  - [`app.js:6053`](app.js#L6053) — di dalam fungsi `initGroupPlayoff()`
    `const grpD = getSortedGroupTeams('Grup D');`
  - [`app.js:6129`](app.js#L6129) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:6130`](app.js#L6130) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:6458`](app.js#L6458) — di dalam fungsi `renderGroupStageUI()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:11503`](app.js#L11503) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const sorted = getSortedGroupTeams(gName);`
- **Memanggil Fungsi Internal:** [`compareMLBBTeams()`](#comparemlbbteams)

<a id="shufflearray"></a>
#### `shuffleArray(arr)`

- **Definisi:** [`app.js:5662`](app.js#L5662)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:5675`](app.js#L5675) — di dalam fungsi `findValidBracketPermutation()`
    `const shuffledRemaining = shuffleArray(remainingItems);`
  - [`app.js:5724`](app.js#L5724) — di dalam fungsi `solveRemainingBracketSlots()`
    `const shuffledItems = shuffleArray(remainingItems);`
  - [`app.js:5768`](app.js#L5768) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const otherInvited = shuffleArray(allInvited.filter(x => x !== atmoItem && x !== alphaItem && x !== `
  - [`app.js:5820`](app.js#L5820) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const wingSlots = shuffleArray([w * 2, w * 2 + 1]);`
  - [`app.js:5881`](app.js#L5881) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const shuffledInv = shuffleArray(j3Invited);`
  - [`app.js:5882`](app.js#L5882) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const targetWings = shuffleArray([0, 1, 2, 3]);`
  - [`app.js:5951`](app.js#L5951) — di dalam fungsi `initGroupPlayoff()`
    `branchJ1 = shuffleArray([...j1List]);`
  - [`app.js:6082`](app.js#L6082) — di dalam fungsi `initGroupPlayoff()`
    `const candJ1 = shuffleArray([...j1List]);`
  - [`app.js:6100`](app.js#L6100) — di dalam fungsi `initGroupPlayoff()`
    `bJ1 = shuffleArray([...j1List]);`

<a id="backtrack"></a>
#### `backtrack(slotIdx, remainingItems, currentArr)`

- **Definisi:** [`app.js:5673`](app.js#L5673)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5681`](app.js#L5681) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);`
  - [`app.js:5688`](app.js#L5688) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(0, candidates, []);`
  - [`app.js:5725`](app.js#L5725) — di dalam fungsi `solveRemainingBracketSlots()`
    `function backtrack(idx, arr) {`
  - [`app.js:5734`](app.js#L5734) — di dalam fungsi `solveRemainingBracketSlots()`
    `const res = backtrack(idx + 1, nextArr);`
  - [`app.js:5739`](app.js#L5739) — di dalam fungsi `solveRemainingBracketSlots()`
    `return backtrack(0, [...currentArray]);`

<a id="isteamatmo"></a>
#### `isTeamAtmo(teamName)`

- **Definisi:** [`app.js:5695`](app.js#L5695)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5765`](app.js#L5765) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const atmoItem = allInvited.find(x => isTeamAtmo(x.team));`
  - [`app.js:6086`](app.js#L6086) — di dalam fungsi `initGroupPlayoff()`
    `const atmoIdx = candJ1.findIndex(x => isTeamAtmo(x.team)) !== -1 ? candJ1.findIndex(x => isTeamAtmo(`

<a id="isteamalpha"></a>
#### `isTeamAlpha(teamName)`

- **Definisi:** [`app.js:5700`](app.js#L5700)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5766`](app.js#L5766) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const alphaItem = allInvited.find(x => isTeamAlpha(x.team) && x !== atmoItem);`
  - [`app.js:6087`](app.js#L6087) — di dalam fungsi `initGroupPlayoff()`
    `const alphaIdx = candJ1.findIndex(x => isTeamAlpha(x.team)) !== -1 ? candJ1.findIndex(x => isTeamAlp`

<a id="isteamappa"></a>
#### `isTeamAppa(teamName)`

- **Definisi:** [`app.js:5706`](app.js#L5706)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5767`](app.js#L5767) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const appaItem = allInvited.find(x => isTeamAppa(x.team) && x !== atmoItem && x !== alphaItem);`

<a id="backtrack"></a>
#### `backtrack(idx, arr)`

- **Definisi:** [`app.js:5725`](app.js#L5725)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5673`](app.js#L5673) — di dalam fungsi `findValidBracketPermutation()`
    `function backtrack(slotIdx, remainingItems, currentArr) {`
  - [`app.js:5681`](app.js#L5681) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);`
  - [`app.js:5688`](app.js#L5688) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(0, candidates, []);`
  - [`app.js:5734`](app.js#L5734) — di dalam fungsi `solveRemainingBracketSlots()`
    `const res = backtrack(idx + 1, nextArr);`
  - [`app.js:5739`](app.js#L5739) — di dalam fungsi `solveRemainingBracketSlots()`
    `return backtrack(0, [...currentArray]);`

<a id="isinv"></a>
#### `isInv(t)`

- **Definisi:** [`app.js:5752`](app.js#L5752)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5754`](app.js#L5754) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Invited = j1List.filter(item => isInv(item.team));`
  - [`app.js:5755`](app.js#L5755) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Regular = j1List.filter(item => !isInv(item.team));`
  - [`app.js:5756`](app.js#L5756) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Invited = j2List.filter(item => isInv(item.team));`
  - [`app.js:5757`](app.js#L5757) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Regular = j2List.filter(item => !isInv(item.team));`
  - [`app.js:5832`](app.js#L5832) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `(!branchJ1[s] || (!isInv(branchJ1[s].team) && branchJ1[s].group !== item.group))`
  - [`app.js:5873`](app.js#L5873) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Invited = j3List.filter(item => isInv(item.team));`
  - [`app.js:5874`](app.js#L5874) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Regular = j3List.filter(item => !isInv(item.team));`

<a id="isinv"></a>
#### `isInv(t)`

- **Definisi:** [`app.js:5872`](app.js#L5872)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5754`](app.js#L5754) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Invited = j1List.filter(item => isInv(item.team));`
  - [`app.js:5755`](app.js#L5755) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j1Regular = j1List.filter(item => !isInv(item.team));`
  - [`app.js:5756`](app.js#L5756) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Invited = j2List.filter(item => isInv(item.team));`
  - [`app.js:5757`](app.js#L5757) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `const j2Regular = j2List.filter(item => !isInv(item.team));`
  - [`app.js:5832`](app.js#L5832) — di dalam fungsi `drawMLBBPlayoffUpperBracket()`
    `(!branchJ1[s] || (!isInv(branchJ1[s].team) && branchJ1[s].group !== item.group))`
  - [`app.js:5873`](app.js#L5873) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Invited = j3List.filter(item => isInv(item.team));`
  - [`app.js:5874`](app.js#L5874) — di dalam fungsi `drawMLBBPlayoffLowerBracket()`
    `const j3Regular = j3List.filter(item => !isInv(item.team));`

<a id="resolveteamnameingroup"></a>
#### `resolveTeamNameInGroup(rawName, groupTeams)`

- **Definisi:** [`app.js:6691`](app.js#L6691)
- **Deskripsi:** Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisan alias/tanda kurung di poster)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6805`](app.js#L6805) — di dalam fungsi `getGroupFixtures()`
    `const realTeamA = resolveTeamNameInGroup(item.teamA, teams);`
  - [`app.js:6806`](app.js#L6806) — di dalam fungsi `getGroupFixtures()`
    `const realTeamB = resolveTeamNameInGroup(item.teamB, teams);`

<a id="issameteamname"></a>
#### `isSameTeamName(name1, name2)`

- **Definisi:** [`app.js:6707`](app.js#L6707)
- **Deskripsi:** Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, spasi, tanda kurung, dan alias
- **Titik Pemanggilan (38 lokasi):**
  - [`app.js:4194`](app.js#L4194) — di dalam fungsi `openPlayoffScoreModal()`
    `if (isSameTeamName(preselectWinner, match.teamA)) {`
  - [`app.js:4197`](app.js#L4197) — di dalam fungsi `openPlayoffScoreModal()`
    `} else if (isSameTeamName(preselectWinner, match.teamB)) {`
  - [`app.js:4482`](app.js#L4482) — di dalam fungsi `findTeamGroupAndRank()`
    `const idx = sorted.findIndex(t => isSameTeamName(t.name, teamName));`
  - [`app.js:4996`](app.js#L4996) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const teamObj = groupTeams.find(t => isSameTeamName(t.name, tName)) || { name: tName };`
  - [`app.js:4997`](app.js#L4997) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const rankIdx = sorted.findIndex(t => isSameTeamName(t.name, tName));`
  - [`app.js:5545`](app.js#L5545) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if ((isSameTeamName(m.teamA, teamA) && isSameTeamName(m.teamB, teamB)) ||`
  - [`app.js:5546`](app.js#L5546) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `(isSameTeamName(m.teamA, teamB) && isSameTeamName(m.teamB, teamA))) {`
  - [`app.js:5572`](app.js#L5572) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamA) || isSameTeamName(cleanWinner, teamA)) {`
  - [`app.js:5575`](app.js#L5575) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamB) || isSameTeamName(cleanWinner, teamB)) {`
  - [`app.js:5582`](app.js#L5582) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const isAFirst = isSameTeamName(match.teamA, teamA);`
  - [`app.js:6727`](app.js#L6727) — di dalam fungsi `findGroupNameForTeam()`
    `if (Array.isArray(gsd[g]) && gsd[g].some(t => isSameTeamName(t.name, teamName))) {`
  - [`app.js:6904`](app.js#L6904) — di dalam fungsi `getGroupFixtures()`
    `if ((isSameTeamName(item.teamA, p.teamA) && isSameTeamName(item.teamB, p.teamB)) ||`
  - [`app.js:6905`](app.js#L6905) — di dalam fungsi `getGroupFixtures()`
    `(isSameTeamName(item.teamA, p.teamB) && isSameTeamName(item.teamB, p.teamA))) {`
  - [`app.js:6923`](app.js#L6923) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.teamA, p.teamA)) {`
  - [`app.js:6926`](app.js#L6926) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.teamA, p.teamB)) {`
  - [`app.js:6939`](app.js#L6939) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.winner, p.teamA) && Number(scoreA) < Number(scoreB)) {`
  - [`app.js:6942`](app.js#L6942) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.teamA, p.teamA)) {`
  - [`app.js:6948`](app.js#L6948) — di dalam fungsi `getGroupFixtures()`
    `} else if (isSameTeamName(saved.winner, p.teamB) && Number(scoreB) < Number(scoreA)) {`
  - [`app.js:6951`](app.js#L6951) — di dalam fungsi `getGroupFixtures()`
    `if (isSameTeamName(saved.teamA, p.teamB)) {`
  - [`app.js:7035`](app.js#L7035) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(m.teamA, canonTeamB) && isSameTeamName(m.teamB, canonTeamA)) {`
  - [`app.js:7047`](app.js#L7047) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(normWinner, canonTeamA) && sA < sB) {`
  - [`app.js:7049`](app.js#L7049) — di dalam fungsi `deduplicateGroupMatchResults()`
    `} else if (isSameTeamName(normWinner, canonTeamB) && sB < sA) {`
  - [`app.js:7081`](app.js#L7081) — di dalam fungsi `deduplicateGroupMatchResults()`
    `if (isSameTeamName(mergedWinner, canonTeamA) && sA < sB) {`
  - [`app.js:7083`](app.js#L7083) — di dalam fungsi `deduplicateGroupMatchResults()`
    `} else if (isSameTeamName(mergedWinner, canonTeamB) && sB < sA) {`
  - [`app.js:7171`](app.js#L7171) — di dalam fungsi `setGroupMatchScore()`
    `if (isSameTeamName(winner, teamA) && Number(scoreA) < Number(scoreB)) {`
  - [`app.js:7173`](app.js#L7173) — di dalam fungsi `setGroupMatchScore()`
    `} else if (isSameTeamName(winner, teamB) && Number(scoreB) < Number(scoreA)) {`
  - [`app.js:7189`](app.js#L7189) — di dalam fungsi `setGroupMatchScore()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:7190`](app.js#L7190) — di dalam fungsi `setGroupMatchScore()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:7331`](app.js#L7331) — di dalam fungsi `openMLBBGroupMvpModal()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:7332`](app.js#L7332) — di dalam fungsi `openMLBBGroupMvpModal()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:8306`](app.js#L8306) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamA = isSameTeamName(m.teamA, t.name);`
  - [`app.js:8307`](app.js#L8307) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamB = isSameTeamName(m.teamB, t.name);`
  - [`app.js:8334`](app.js#L8334) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(m.winner, t.name) ||`
  - [`app.js:8335`](app.js#L8335) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(cleanWinner, t.name)`
  - [`app.js:8629`](app.js#L8629) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:8630`](app.js#L8630) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`
  - [`app.js:11629`](app.js#L11629) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:11630`](app.js#L11630) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`

<a id="findgroupnameforteam"></a>
#### `findGroupNameForTeam(teamName)`

- **Definisi:** [`app.js:6723`](app.js#L6723)
- **Deskripsi:** Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:7319`](app.js#L7319) — di dalam fungsi `openMLBBGroupMvpModal()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:7902`](app.js#L7902) — di dalam fungsi `setGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:7995`](app.js#L7995) — di dalam fungsi `promptGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:8011`](app.js#L8011) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `gName = (typeof findGroupNameForTeam === 'function' && (findGroupNameForTeam(teamA) || findGroupName`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname)

<a id="getcanonicalgroupmatchid"></a>
#### `getCanonicalGroupMatchId(gName, teamA, teamB)`

- **Definisi:** [`app.js:6988`](app.js#L6988)
- **Deskripsi:** Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tidak terpengaruh urutan teamA vs teamB)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:5537`](app.js#L5537) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const canonId = getCanonicalGroupMatchId(gName || '', teamA, teamB);`
  - [`app.js:6894`](app.js#L6894) — di dalam fungsi `getGroupFixtures()`
    `const canonId = getCanonicalGroupMatchId(gName, p.teamA, p.teamB);`
  - [`app.js:7180`](app.js#L7180) — di dalam fungsi `setGroupMatchScore()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:7321`](app.js#L7321) — di dalam fungsi `openMLBBGroupMvpModal()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:7905`](app.js#L7905) — di dalam fungsi `setGroupMatchMVP()`
    `const canonId = (teamA && teamB) ? getCanonicalGroupMatchId(gName, teamA, teamB) : matchId;`
  - [`app.js:8013`](app.js#L8013) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `const canonId = typeof getCanonicalGroupMatchId === 'function' ? getCanonicalGroupMatchId(gName, tea`
  - [`app.js:8290`](app.js#L8290) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const pairKey = getCanonicalGroupMatchId(gName, m.teamA, m.teamB);`

<a id="isgroupmatchescompleted"></a>
#### `isGroupMatchesCompleted(gName)`

- **Definisi:** [`app.js:6997`](app.js#L6997)
- **Deskripsi:** Helper untuk memeriksa apakah seluruh pertandingan dalam suatu grup telah selesai diinput
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4991`](app.js#L4991) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const isGroupAllDone = typeof isGroupMatchesCompleted === 'function' ? isGroupMatchesCompleted(gName`
  - [`app.js:6459`](app.js#L6459) — di dalam fungsi `renderGroupStageUI()`
    `const isGroupAllDone = isGroupMatchesCompleted(gName);`
  - [`app.js:11505`](app.js#L11505) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isGroupAllDone = isGroupMatchesCompleted(gName);`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="deduplicategroupmatchresults"></a>
#### `deduplicateGroupMatchResults()`

- **Definisi:** [`app.js:7015`](app.js#L7015)
- **Deskripsi:** Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri terbalik / ganda
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1433`](app.js#L1433) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
  - [`app.js:8272`](app.js#L8272) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `deduplicateGroupMatchResults();`
  - [`app.js:10731`](app.js#L10731) — cakupan global / event handler
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname)

<a id="getgrouprestingteams"></a>
#### `getGroupRestingTeams(gName, day)`

- **Definisi:** [`app.js:7107`](app.js#L7107)
- **Deskripsi:** Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di grup tertentu
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8593`](app.js#L8593) — di dalam fungsi `renderGroupFixturesUI()`
    `const resting = getGroupRestingTeams(gName, parseInt(mlbbActiveDayFilter, 10));`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="setgroupmatchscore"></a>
#### `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB, explicitWinner = null)`

- **Definisi:** [`app.js:7118`](app.js#L7118)
- **Deskripsi:** Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara otomatis.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:7242`](app.js#L7242) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 2, '${teamB} (Menang WO)');`
  - [`app.js:7244`](app.js#L7244) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 2, 0, '${teamA} (Menang WO)');`
  - [`app.js:7246`](app.js#L7246) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Keduanya WO (0-0)');`
  - [`app.js:7258`](app.js#L7258) — di dalam fungsi `setGroupMatchSpecialResult()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Imbang (0-0)');`
  - [`app.js:7269`](app.js#L7269) — di dalam fungsi `saveGroupFixtureScore()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB);`
  - [`app.js:11655`](app.js#L11655) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`functional_tests.js:676`](functional_tests.js#L676) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchScore('), 'app.js harus memiliki setter skor setGroup`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="promptgroupmatchwo"></a>
#### `promptGroupMatchWO(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:7228`](app.js#L7228)
- **Deskripsi:** Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupun kedua tim
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7256`](app.js#L7256) — di dalam fungsi `setGroupMatchSpecialResult()`
    `promptGroupMatchWO(matchId, gName, teamA, teamB);`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="setgroupmatchspecialresult"></a>
#### `setGroupMatchSpecialResult(matchId, gName, teamA, teamB, resultType)`

- **Definisi:** [`app.js:7253`](app.js#L7253)
- **Deskripsi:** Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imbang)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:8674`](app.js#L8674) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#f871`
  - [`app.js:8675`](app.js#L8675) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#fbbf`
  - [`app.js:11658`](app.js#L11658) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:11659`](app.js#L11659) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
- **Memanggil Fungsi Internal:** [`promptGroupMatchWO()`](#promptgroupmatchwo), [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="selectmvpplayer"></a>
#### `selectMvpPlayer(nickname, realName, teamName)`

- **Definisi:** [`app.js:7684`](app.js#L7684)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7657`](app.js#L7657) — di dalam fungsi `renderMvpRosterList()`
    `<div class="mvp-roster-chip ${isSelected ? 'selected' : ''}" onclick="selectMvpPlayer('${safeIgn}', `
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="rendermvpquickherochips"></a>
#### `renderMvpQuickHeroChips(activeHero)`

- **Definisi:** [`app.js:7716`](app.js#L7716)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7477`](app.js#L7477) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:7571`](app.js#L7571) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:7750`](app.js#L7750) — di dalam fungsi `selectMvpQuickHero()`
    `renderMvpQuickHeroChips(heroName);`
- **Memanggil Fungsi Internal:** [`selectMvpQuickHero()`](#selectmvpquickhero)

<a id="selectmvpquickhero"></a>
#### `selectMvpQuickHero(heroName)`

- **Definisi:** [`app.js:7736`](app.js#L7736)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7727`](app.js#L7727) — di dalam fungsi `renderMvpQuickHeroChips()`
    `<span class="mvp-hero-pill ${isActive ? 'active' : ''}" onclick="selectMvpQuickHero('${safeHero}')">`
- **Memanggil Fungsi Internal:** [`renderMvpQuickHeroChips()`](#rendermvpquickherochips)

<a id="saveselectedmvp"></a>
#### `saveSelectedMvp()`

- **Definisi:** [`app.js:7753`](app.js#L7753)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:936`](index.html#L936) — Event `onclick`
    `<button type="button" class="btn btn-primary" style="background: var(--yokke-gold); color: #0b1120; `
  - [`app.js:7849`](app.js#L7849) — di dalam fungsi `deleteCurrentMvp()`
    `saveSelectedMvp();`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp), [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal)

<a id="deletecurrentmvp"></a>
#### `deleteCurrentMvp()`

- **Definisi:** [`app.js:7825`](app.js#L7825)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:929`](index.html#L929) — Event `onclick`
    `<button type="button" id="btnDeleteMvp" class="btn btn-outline" style="color: var(--yokke-red); bord`
- **Memanggil Fungsi Internal:** [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal), [`saveSelectedMvp()`](#saveselectedmvp), [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`syncSingleMatchRowToGSheet()`](#syncsinglematchrowtogsheet), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp)

<a id="setgroupmatchmvp"></a>
#### `setGroupMatchMVP(matchId, mvpPlayer, mvpHero, mvpTeam, gameMvps = null)`

- **Definisi:** [`app.js:7877`](app.js#L7877)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7817`](app.js#L7817) — di dalam fungsi `saveSelectedMvp()`
    `setGroupMatchMVP(ctx.canonId, summaryPlayer, summaryHero, summaryTeam, validGames);`
  - [`app.js:7869`](app.js#L7869) — di dalam fungsi `deleteCurrentMvp()`
    `setGroupMatchMVP(ctx.canonId, null, null, null, []);`
  - [`functional_tests.js:790`](functional_tests.js#L790) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchMVP('), 'Harus memiliki setGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="promptgroupmatchmvp"></a>
#### `promptGroupMatchMVP(matchId, teamA, teamB, gName = '')`

- **Definisi:** [`app.js:7992`](app.js#L7992)
- **Deskripsi:** Delegasi fungsi promptGroupMatchMVP ke modal interaktif
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:791`](functional_tests.js#L791) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptGroupMatchMVP('), 'Harus memiliki promptGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="togglematchplayerverify"></a>
#### `toggleMatchPlayerVerify(playerKey)`

- **Definisi:** [`app.js:8056`](app.js#L8056)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8230`](app.js#L8230) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn ${isVerified ? 'btn-primary' : 'btn-outline'}" style="font-size:0.7`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="verifyallmatchplayers"></a>
#### `verifyAllMatchPlayers(teamName, shouldVerify = true)`

- **Definisi:** [`app.js:8074`](app.js#L8074)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8141`](app.js#L8141) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8144`](app.js#L8144) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="resetgroupmatchscore"></a>
#### `resetGroupMatchScore(matchId)`

- **Definisi:** [`app.js:8256`](app.js#L8256)
- **Deskripsi:** Mereset skor pertandingan grup MLBB ke status belum bertanding.
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="findprevious"></a>
#### `findPrevious(ply)`

- **Definisi:** [`app.js:8914`](app.js#L8914)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8927`](app.js#L8927) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`app.js:8926`](app.js#L8926)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8997`](app.js#L8997) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:9049`](app.js#L9049) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

<a id="findprevsemi"></a>
#### `findPrevSemi(ply)`

- **Definisi:** [`app.js:9229`](app.js#L9229)
- **Deskripsi:** Preserve poin semifinal jika sudah ada
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9238`](app.js#L9238) — di dalam fungsi `syncMCGGSemiFinal()`
    `const prev = findPrevSemi(p) || {};`

<a id="mapsemiplayer"></a>
#### `mapSemiPlayer(p)`

- **Definisi:** [`app.js:9237`](app.js#L9237)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevinarr"></a>
#### `findPrevInArr(p, arr)`

- **Definisi:** [`app.js:9266`](app.js#L9266)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9276`](app.js#L9276) — di dalam fungsi `syncMCGGGrandFinal()`
    `const prev = findPrevInArr(p, existingGF);`

<a id="mapgfplayer"></a>
#### `mapGFPlayer(p)`

- **Definisi:** [`app.js:9275`](app.js#L9275)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:9308`](app.js#L9308) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9309`](app.js#L9309) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9338`](app.js#L9338) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:9339`](app.js#L9339) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`

<a id="drawmatchpool"></a>
#### `drawMatchPool(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9705`](app.js#L9705)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 1: Acak 8 Pool Commander untuk Group/Lobby Ini ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9520`](app.js#L9520) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaft`
  - [`app.js:9876`](app.js#L9876) — di dalam fungsi `drawMatchCommanders()`
    `drawMatchPool(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="assignmatchpooltoplayers"></a>
#### `assignMatchPoolToPlayers(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9780`](app.js#L9780)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 2: Pasangkan 8 Pool Commander ke Masing-Masing Pemain ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9527`](app.js#L9527) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasPool ? "alert('⚠️ Silakan acak 8 Pool Commander terlebih dahulu.')" : (isMatchLocked `
  - [`app.js:9877`](app.js#L9877) — di dalam fungsi `drawMatchCommanders()`
    `assignMatchPoolToPlayers(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="togglelockmatchdraw"></a>
#### `toggleLockMatchDraw(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:9831`](app.js#L9831)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 3: Kunci Match (Lock) / Buka Kunci ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9534`](app.js#L9534) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasAssigned ? "alert('⚠️ Pasangkan commander ke pemain terlebih dahulu sebelum mengunci.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="nextmatchdraw"></a>
#### `nextMatchDraw(targetLobbyKey, nextMatchNum)`

- **Definisi:** [`app.js:9858`](app.js#L9858)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 4: Lanjut ke Match Berikutnya (Match 2) ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9542`](app.js#L9542) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="nextMatchDraw('${lobbyKey}', 2)">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="showmatch3draftinfo"></a>
#### `showMatch3DraftInfo()`

- **Definisi:** [`app.js:9943`](app.js#L9943)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9547`](app.js#L9547) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="showMatch3DraftInfo()">`

<a id="buildroundcell"></a>
#### `buildRoundCell(player, roundKey, cmdKey, targetLobby)`

- **Definisi:** [`app.js:10381`](app.js#L10381)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:10369`](app.js#L10369) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r1', 'c1', lobbyKey)}</td>`
  - [`app.js:10370`](app.js#L10370) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r2', 'c2', lobbyKey)}</td>`
  - [`app.js:10371`](app.js#L10371) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r3', 'c3', lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`updateMCGGCommander()`](#updatemcggcommander), [`updateMCGGRank()`](#updatemcggrank)

<a id="loadsampledata"></a>
#### `loadSampleData()`

- **Definisi:** [`app.js:10482`](app.js#L10482)
- **Deskripsi:** Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation - No Sensitive Info)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:331`](index.html#L331) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="loadSamp`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="clearalldata"></a>
#### `clearAllData()`

- **Definisi:** [`app.js:10686`](app.js#L10686)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:332`](index.html#L332) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="clearAll`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="rendersinglematchnodehtml"></a>
#### `renderSingleMatchNodeHtml(m, rIdx, mIdx, topPx, activeNodeKey, isLower = false)`

- **Definisi:** [`app.js:10910`](app.js#L10910)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:11024`](app.js#L11024) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col0 += renderSingleMatchNodeHtml(groupPlayoffMatches[1][4 + i], 1, 4 + i, c8[i] - 38, activeNodeKey`
  - [`app.js:11040`](app.js#L11040) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col1 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][2 + i], 2, 2 + i, c4[i] - 38, activeNodeKey`
  - [`app.js:11056`](app.js#L11056) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][6 + i], 2, 6 + i, c4[i] - 38, activeNodeKey`
  - [`app.js:11069`](app.js#L11069) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[3][0], 3, 0, c2[0] - 38, activeNodeKey, true);`
  - [`app.js:11070`](app.js#L11070) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[3][1], 3, 1, c2[1] - 38, activeNodeKey, true);`
  - [`app.js:11079`](app.js#L11079) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col4 += renderSingleMatchNodeHtml(groupPlayoffMatches[4][4], 4, 4, c1[0] - 38, activeNodeKey, true);`
  - [`app.js:11088`](app.js#L11088) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col5 += renderSingleMatchNodeHtml(groupPlayoffMatches[5][0], 5, 0, c1[0] - 38, activeNodeKey, false)`
  - [`app.js:11100`](app.js#L11100) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col0 += renderSingleMatchNodeHtml(groupPlayoffMatches[0][i], 0, i, c8[i] - 38, activeNodeKey, false)`
  - [`app.js:11116`](app.js#L11116) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col1 += renderSingleMatchNodeHtml(groupPlayoffMatches[1][i], 1, i, c4[i] - 38, activeNodeKey, false)`
  - [`app.js:11129`](app.js#L11129) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][0], 2, 0, c2[0] - 38, activeNodeKey, false)`
  - [`app.js:11130`](app.js#L11130) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col2 += renderSingleMatchNodeHtml(groupPlayoffMatches[2][1], 2, 1, c2[1] - 38, activeNodeKey, false)`
  - [`app.js:11139`](app.js#L11139) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col3 += renderSingleMatchNodeHtml(groupPlayoffMatches[4][0], 4, 0, c1[0] - 38, activeNodeKey, false)`
  - [`app.js:11148`](app.js#L11148) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `col4 += renderSingleMatchNodeHtml(groupPlayoffMatches[5][0], 5, 0, c1[0] - 38, activeNodeKey, false)`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`isPlayoffPlaceholderTeam()`](#isplayoffplaceholderteam), [`openPlayoffScoreModal()`](#openplayoffscoremodal), [`onPlayoffTeamClicked()`](#onplayoffteamclicked), [`escapeHtml()`](#escapehtml)

<a id="rendersvgconnectorcolumn"></a>
#### `renderSvgConnectorColumn(pairs, strokeColor = '#00d2ff', width = 50, height = 750)`

- **Definisi:** [`app.js:10970`](app.js#L10970)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:11035`](app.js#L11035) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg0 = renderSvgConnectorColumn(pairs0, '#ffb703');`
  - [`app.js:11051`](app.js#L11051) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg1 = renderSvgConnectorColumn(pairs1, '#ffb703');`
  - [`app.js:11065`](app.js#L11065) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg2 = renderSvgConnectorColumn(pairs2, '#ffb703');`
  - [`app.js:11075`](app.js#L11075) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg3 = renderSvgConnectorColumn(pairs3, '#ffb703');`
  - [`app.js:11084`](app.js#L11084) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg4 = renderSvgConnectorColumn(pairs4, '#ffb703');`
  - [`app.js:11111`](app.js#L11111) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg0 = renderSvgConnectorColumn(pairs0, '#00d2ff');`
  - [`app.js:11125`](app.js#L11125) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg1 = renderSvgConnectorColumn(pairs1, '#00d2ff');`
  - [`app.js:11135`](app.js#L11135) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `const svg2 = renderSvgConnectorColumn(pairs2, '#00d2ff');`
  - [`app.js:11144`](app.js#L11144) — di dalam fungsi `renderFullPlayoffBracketHtml()`
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
  - [`app.js:5303`](app.js#L5303) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:4808`](app.js#L4808) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5322`](app.js#L5322) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:5714`](app.js#L5714) — di dalam fungsi `isPlayoffInvitedTeam()`
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
  - [`app.js:4807`](app.js#L4807) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:5312`](app.js#L5312) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:946`](functional_tests.js#L946)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:136`](app.js#L136) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:5303`](app.js#L5303) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:4808`](app.js#L4808) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:5322`](app.js#L5322) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`app.js:5714`](app.js#L5714) — di dalam fungsi `isPlayoffInvitedTeam()`
    `if (typeof isTeamInvited === 'function' && isTeamInvited(teamName)) return true;`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`

<a id="findprevious"></a>
#### `findPrevious()`

- **Definisi:** [`functional_tests.js:1085`](functional_tests.js#L1085)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8927`](app.js#L8927) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`functional_tests.js:1087`](functional_tests.js#L1087)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8997`](app.js#L8997) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:9049`](app.js#L9049) — di dalam fungsi `syncMCGGPlayers()`
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
  - [`app.js:3554`](app.js#L3554) — di dalam fungsi `saveParticipantEdit()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3675`](app.js#L3675) — di dalam fungsi `renderParticipants()`
    `autoLinkParticipantsAssets();`
  - [`app.js:10680`](app.js#L10680) — di dalam fungsi `loadSampleData()`
    `autoLinkParticipantsAssets();`
  - [`app.js:10706`](app.js#L10706) — cakupan global / event handler
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
  - [`app.js:10738`](app.js#L10738) — cakupan global / event handler
    `fetchParticipantsFromGoogleSheet(true, true).catch(err => {`
  - [`app.js:10744`](app.js#L10744) — cakupan global / event handler
    `await fetchParticipantsFromGoogleSheet(true, true);`
- **Memanggil Fungsi Internal:** [`getItemKey()`](#getitemkey), [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap), [`renderRules()`](#renderrules), [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`setLastSyncedMatches()`](#setlastsyncedmatches), [`renderMCGGTable()`](#rendermcggtable), [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`updateCommanderPoolFromSetup()`](#updatecommanderpoolfromsetup), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`showToast()`](#showtoast)

<a id="toggleregistrationstatus"></a>
#### `toggleRegistrationStatus()`

- **Definisi:** [`app.js:2328`](app.js#L2328)
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

- **Definisi:** [`app.js:2740`](app.js#L2740)
- **Deskripsi:** Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Card, and Automatic Update Threat
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:87`](index.html#L87) — Event `onsubmit`
    `<form id="regForm" onsubmit="handleRegister(event)">`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`showToast()`](#showtoast), [`saveState()`](#savestate), [`clearFormDraft()`](#clearformdraft), [`renderPlayersFormInputs()`](#renderplayersforminputs), [`toggleCategoryForm()`](#togglecategoryform), [`toggleOfficial2Form()`](#toggleofficial2form), [`updateRegistrationDatalists()`](#updateregistrationdatalists)

<a id="setparticipantstatus"></a>
#### `setParticipantStatus(id, newStatus)`

- **Definisi:** [`app.js:3272`](app.js#L3272)
- **Deskripsi:** Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3772`](app.js#L3772) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-success-sm" title="Verifikasi / Setujui" onclick="setParticipantStatus(${p.id`
  - [`app.js:3773`](app.js#L3773) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-danger-sm" title="Tolak / Gagal" onclick="setParticipantStatus(${p.id}, 'REJE`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="deleteparticipant"></a>
#### `deleteParticipant(id)`

- **Definisi:** [`app.js:3309`](app.js#L3309)
- **Deskripsi:** Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat ke blacklist agar tidak ter-sync ulang.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3774`](app.js#L3774) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" onclick="delet`
- **Memanggil Fungsi Internal:** [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="saveparticipantedit"></a>
#### `saveParticipantEdit()`

- **Definisi:** [`app.js:3490`](app.js#L3490)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:728`](index.html#L728) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveParticipantEdit()">💾 Simpan Perubahan Data</button>`
- **Memanggil Fungsi Internal:** [`saveLogoToMap()`](#savelogotomap), [`saveIdCardToMap()`](#saveidcardtomap), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`closeEditParticipantModal()`](#closeeditparticipantmodal)

<a id="viewrosterdetail"></a>
#### `viewRosterDetail(id)`

- **Definisi:** [`app.js:3610`](app.js#L3610)
- **Deskripsi:** Modal Detail Roster Lengkap & ID Card Per-Pemain
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3804`](app.js#L3804) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;" onclick="viewRos`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox)

<a id="renderparticipants"></a>
#### `renderParticipants()`

- **Definisi:** [`app.js:3674`](app.js#L3674)
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
  - [`app.js:1870`](app.js#L1870) — di dalam fungsi `saveState()`
    `renderParticipants();`
  - [`app.js:2245`](app.js#L2245) — di dalam fungsi `verifyAdminPin()`
    `renderParticipants();`
  - [`app.js:2257`](app.js#L2257) — di dalam fungsi `logoutAdmin()`
    `renderParticipants();`
  - [`app.js:3278`](app.js#L3278) — di dalam fungsi `setParticipantStatus()`
    `renderParticipants();`
  - [`app.js:3331`](app.js#L3331) — di dalam fungsi `deleteParticipant()`
    `renderParticipants();`
  - [`app.js:3354`](app.js#L3354) — di dalam fungsi `filterList()`
    `renderParticipants();`
  - [`app.js:3556`](app.js#L3556) — di dalam fungsi `saveParticipantEdit()`
    `renderParticipants();`
  - [`app.js:10695`](app.js#L10695) — di dalam fungsi `clearAllData()`
    `renderParticipants();`
  - [`app.js:10718`](app.js#L10718) — cakupan global / event handler
    `renderParticipants();`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`updateRegistrationDatalists()`](#updateregistrationdatalists), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`toggleInvitedTeam()`](#toggleinvitedteam), [`openEditParticipantModal()`](#openeditparticipantmodal), [`setParticipantStatus()`](#setparticipantstatus), [`deleteParticipant()`](#deleteparticipant), [`viewRosterDetail()`](#viewrosterdetail)

<a id="findteamparticipant"></a>
#### `findTeamParticipant(teamName)`

- **Definisi:** [`app.js:7301`](app.js#L7301)
- **Deskripsi:** Helper mencari data peserta tim dengan normalisasi nama
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:7616`](app.js#L7616) — di dalam fungsi `renderMvpRosterList()`
    `const teamPart = findTeamParticipant(teamName);`
  - [`app.js:8083`](app.js#L8083) — di dalam fungsi `verifyAllMatchPlayers()`
    `const teamPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(teamName) : null;`
  - [`app.js:8106`](app.js#L8106) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamAPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamA) : null;`
  - [`app.js:8107`](app.js#L8107) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamBPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamB) : null;`

<a id="rendermvprosterlist"></a>
#### `renderMvpRosterList(teamName)`

- **Definisi:** [`app.js:7611`](app.js#L7611)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7608`](app.js#L7608) — di dalam fungsi `switchMvpTeamTab()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:7681`](app.js#L7681) — di dalam fungsi `filterMvpRosterList()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:7713`](app.js#L7713) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpRosterList(targetTeam);`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`selectMvpPlayer()`](#selectmvpplayer)

<a id="filtermvprosterlist"></a>
#### `filterMvpRosterList()`

- **Definisi:** [`app.js:7678`](app.js#L7678)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:893`](index.html#L893) — Event `oninput`
    `<input type="text" id="mvpPlayerSearchInput" placeholder="🔍 Cari nama pemain atau IGN..." style="wi`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="renderteamrostercolumn"></a>
#### `renderTeamRosterColumn(teamName, roster, count)`

- **Definisi:** [`app.js:8153`](app.js#L8153)
- **Deskripsi:** Helper untuk merender kolom roster tiap tim
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8250`](app.js#L8250) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamA, rosterA, countA)}`
  - [`app.js:8251`](app.js#L8251) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamB, rosterB, countB)}`

---

### ☁️ Sinkronisasi Google Sheets & State Storage

<a id="savestagestatelocal"></a>
#### `saveStageStateLocal()`

- **Definisi:** [`app.js:462`](app.js#L462)
- **Deskripsi:** Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM, data tie-breaker) ke localStorage.
- **Titik Pemanggilan (15 lokasi):**
  - [`app.js:891`](app.js#L891) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveStageStateLocal();`
  - [`app.js:1785`](app.js#L1785) — cakupan global / event handler
    `saveStageStateLocal();`
  - [`app.js:2381`](app.js#L2381) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveStageStateLocal();`
  - [`app.js:3931`](app.js#L3931) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveStageStateLocal();`
  - [`app.js:3964`](app.js#L3964) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3969`](app.js#L3969) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3984`](app.js#L3984) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:4014`](app.js#L4014) — di dalam fungsi `proceedToMLBBStage2()`
    `saveStageStateLocal();`
  - [`app.js:4115`](app.js#L4115) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveStageStateLocal();`
  - [`app.js:4161`](app.js#L4161) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveStageStateLocal();`
  - [`app.js:4510`](app.js#L4510) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveStageStateLocal();`
  - [`app.js:4840`](app.js#L4840) — di dalam fungsi `resetMLBBToStage1()`
    `saveStageStateLocal();`
  - [`app.js:4880`](app.js#L4880) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveStageStateLocal();`
  - [`app.js:5070`](app.js#L5070) — di dalam fungsi `saveTournamentStateOnly()`
    `saveStageStateLocal();`
  - [`app.js:10871`](app.js#L10871) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
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

<a id="synctournamentconfigtogsheet"></a>
#### `syncTournamentConfigToGSheet(options = {})`

- **Definisi:** [`app.js:1774`](app.js#L1774)
- **Deskripsi:** SINKRONISASI KONFIGURASI TURNAMEN & BAGAN KE GOOGLE SHEETS
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:3907`](app.js#L3907) — di dalam fungsi `shuffleAndGenerateTournament()`
    `syncTournamentConfigToGSheet({ showSuccessToast: false, context: 'GROUP_SHUFFLE' }).then(res => {`
  - [`app.js:4023`](app.js#L4023) — di dalam fungsi `proceedToMLBBStage2()`
    `syncTournamentConfigToGSheet({ showSuccessToast: true, context: 'STAGE_2_ENTER' }).catch(err => {`
  - [`app.js:4126`](app.js#L4126) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `syncTournamentConfigToGSheet({ showSuccessToast: false, context: 'PLAYOFF_SHUFFLE' }).then(res => {`
  - [`app.js:4167`](app.js#L4167) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `syncTournamentConfigToGSheet({ showSuccessToast: false, context: 'PLAYOFF_LOCK' }).catch(err => {`
  - [`app.js:5094`](app.js#L5094) — di dalam fungsi `saveTournamentStateOnly()`
    `const configResult = await syncTournamentConfigToGSheet({ showSuccessToast: false });`
  - [`app.js:10882`](app.js#L10882) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `syncTournamentConfigToGSheet({ showSuccessToast: !isLocked, context: 'STAGE_2_ENTER' }).catch(err =>`

<a id="synctournamentsheetstogsheet"></a>
#### `syncTournamentSheetsToGSheet()`

- **Definisi:** [`app.js:1824`](app.js#L1824)
- **Deskripsi:** SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="getlastsyncedmatches"></a>
#### `getLastSyncedMatches()`

- **Definisi:** [`app.js:4916`](app.js#L4916)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4936`](app.js#L4936) — di dalam fungsi `getUnsyncedMatches()`
    `const synced = getLastSyncedMatches();`
  - [`app.js:5050`](app.js#L5050) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `const synced = getLastSyncedMatches() || {};`

<a id="setlastsyncedmatches"></a>
#### `setLastSyncedMatches(obj)`

- **Definisi:** [`app.js:4927`](app.js#L4927)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1437`](app.js#L1437) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `setLastSyncedMatches(groupMatchResults);`
  - [`app.js:5052`](app.js#L5052) — di dalam fungsi `syncSingleMatchRowToGSheet()`
    `setLastSyncedMatches(synced);`

<a id="getunsyncedmatches"></a>
#### `getUnsyncedMatches()`

- **Definisi:** [`app.js:4935`](app.js#L4935)
- **Deskripsi:** Lookup perbedaan antara cache lokal dengan data terakhir yang tersinkronisasi di Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5097`](app.js#L5097) — di dalam fungsi `saveTournamentStateOnly()`
    `const unsynced = typeof getUnsyncedMatches === 'function' ? getUnsyncedMatches() : [];`
- **Memanggil Fungsi Internal:** [`getLastSyncedMatches()`](#getlastsyncedmatches)

<a id="syncsinglematchrowtogsheet"></a>
#### `syncSingleMatchRowToGSheet(canonId)`

- **Definisi:** [`app.js:4972`](app.js#L4972)
- **Deskripsi:** Fungsi utama sinkronisasi 1 pertandingan: mengupdate HANYA 3 baris di Google Sheets (1 baris di sheet MLBB - Bagan & MVP + 2 baris tim di sheet MLBB - Klasemen & Point)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:4396`](app.js#L4396) — di dalam fungsi `setPlayoffMatchScore()`
    `syncSingleMatchRowToGSheet(matchKey).catch(e => console.warn('Sync playoff to GSheet:', e));`
  - [`app.js:4417`](app.js#L4417) — di dalam fungsi `resetPlayoffMatchScore()`
    `syncSingleMatchRowToGSheet(matchKey).catch(e => console.warn('Sync reset to GSheet:', e));`
  - [`app.js:5106`](app.js#L5106) — di dalam fungsi `saveTournamentStateOnly()`
    `await syncSingleMatchRowToGSheet(m.canonId);`
  - [`app.js:7813`](app.js#L7813) — di dalam fungsi `saveSelectedMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || 'PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffM`
  - [`app.js:7818`](app.js#L7818) — di dalam fungsi `saveSelectedMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));`
  - [`app.js:7865`](app.js#L7865) — di dalam fungsi `deleteCurrentMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId || m.matchLabel || 'PLAYOFF_${ctx.playoffRIdx}_${ctx.playoffM`
  - [`app.js:7870`](app.js#L7870) — di dalam fungsi `deleteCurrentMvp()`
    `syncSingleMatchRowToGSheet(ctx.canonId).catch(e => console.warn(e));`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`isGroupMatchesCompleted()`](#isgroupmatchescompleted), [`isSameTeamName()`](#issameteamname), [`postToGoogleAppsScript()`](#posttogoogleappsscript), [`getLastSyncedMatches()`](#getlastsyncedmatches), [`setLastSyncedMatches()`](#setlastsyncedmatches)

<a id="savetournamentstateonly"></a>
#### `saveTournamentStateOnly(isSilent = false)`

- **Definisi:** [`app.js:5062`](app.js#L5062)
- **Deskripsi:** Handler tombol Simpan: Sinkronkan seluruh konfigurasi turnamen, bagan playoff, dan skor ke GSheet
- **Titik Pemanggilan (18 lokasi):**
  - [`index.html:491`](index.html#L491) — Event `onclick`
    `<button id="btnSaveBracketGSheet" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`index.html:596`](index.html#L596) — Event `onclick`
    `<button id="btnSaveMCGGPointsGSheet" class="btn btn-primary" style="display: none; font-size: 0.85re`
  - [`app.js:253`](app.js#L253) — di dalam fungsi `toggleInvitedTeam()`
    `saveTournamentStateOnly(true);`
  - [`app.js:899`](app.js#L899) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2345`](app.js#L2345) — di dalam fungsi `toggleRegistrationStatus()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2388`](app.js#L2388) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3904`](app.js#L3904) — di dalam fungsi `shuffleAndGenerateTournament()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3934`](app.js#L3934) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3988`](app.js#L3988) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4020`](app.js#L4020) — di dalam fungsi `proceedToMLBBStage2()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4121`](app.js#L4121) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4166`](app.js#L4166) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4414`](app.js#L4414) — di dalam fungsi `resetPlayoffMatchScore()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4844`](app.js#L4844) — di dalam fungsi `resetMLBBToStage1()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4882`](app.js#L4882) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveTournamentStateOnly(true);`
  - [`app.js:9846`](app.js#L9846) — di dalam fungsi `toggleLockMatchDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:9905`](app.js#L9905) — di dalam fungsi `resetLobbyDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:10877`](app.js#L10877) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
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

- **Definisi:** [`app.js:738`](app.js#L738)
- **Deskripsi:** Client-side image compressor: compresses smartphone photos using HTML5 Canvas (<= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:798`](app.js#L798) — di dalam fungsi `compressImageFile()`
    `return compressImage(file, maxWidth, maxWidth, quality);`
  - [`app.js:3467`](app.js#L3467) — di dalam fungsi `handleEditLogoUpload()`
    `const compressed = await compressImage(file, 400, 400, 0.85);`
  - [`app.js:3484`](app.js#L3484) — di dalam fungsi `handleEditRosterIdCardUpload()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`

<a id="compressimagefile"></a>
#### `compressImageFile(file, maxWidth = 1200, quality = 0.75)`

- **Definisi:** [`app.js:797`](app.js#L797)
- **Deskripsi:** Client-side image compression helper (Canvas <= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:2052`](app.js#L2052) — di dalam fungsi `handleLogoPreview()`
    `uploadedLogoBase64 = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:2067`](app.js#L2067) — di dalam fungsi `handleSingleIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:2089`](app.js#L2089) — di dalam fungsi `handlePlayerIdCardPreview()`
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
  - [`app.js:4863`](app.js#L4863) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
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
  - [`app.js:3536`](app.js#L3536) — di dalam fungsi `saveParticipantEdit()`
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
  - [`app.js:3049`](app.js#L3049) — di dalam fungsi `handleRegister()`
    `mcggIdCard = existingParticipant.idCard || (existingParticipant.roster && existingParticipant.roster`
  - [`app.js:3427`](app.js#L3427) — di dalam fungsi `openEditParticipantModal()`
    `editRosterIdCards[idx] = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MC`
  - [`app.js:3634`](app.js#L3634) — di dalam fungsi `viewRosterDetail()`
    `const cardSrc = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (team.category === 'MCGG' ? `
  - [`app.js:3714`](app.js#L3714) — di dalam fungsi `renderParticipants()`
    `const card = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idC`
  - [`app.js:8186`](app.js#L8186) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
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
  - [`app.js:3513`](app.js#L3513) — di dalam fungsi `saveParticipantEdit()`
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
  - [`app.js:2775`](app.js#L2775) — di dalam fungsi `handleRegister()`
    `if (existingParticipant && (existingParticipant.logo || findLogoByTeamName(existingParticipant.name)`
  - [`app.js:2776`](app.js#L2776) — di dalam fungsi `handleRegister()`
    `logoData = existingParticipant.logo || findLogoByTeamName(existingParticipant.name);`
  - [`app.js:3411`](app.js#L3411) — di dalam fungsi `openEditParticipantModal()`
    `currentEditLogoBase64 = p.logo || findLogoByTeamName(p.name) || '';`
  - [`app.js:3614`](app.js#L3614) — di dalam fungsi `viewRosterDetail()`
    `const teamLogoSrc = team.logo || findLogoByTeamName(team.name);`
  - [`app.js:3728`](app.js#L3728) — di dalam fungsi `renderParticipants()`
    `const teamLogoSrc = p.logo || findLogoByTeamName(p.name);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="handlelogopreview"></a>
#### `handleLogoPreview(event)`

- **Definisi:** [`app.js:2047`](app.js#L2047)
- **Deskripsi:** Handle Logo Upload and Live Preview
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:137`](index.html#L137) — Event `onchange`
    `<input type="file" id="teamLogoInput" accept="image/*" onchange="handleLogoPreview(event)" style="pa`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="handlesingleidcardpreview"></a>
#### `handleSingleIdCardPreview(event, target)`

- **Definisi:** [`app.js:2062`](app.js#L2062)
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

- **Definisi:** [`app.js:2084`](app.js#L2084)
- **Deskripsi:** Handle Individual ID Card Upload for Each of the 8 Players
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2145`](app.js#L2145) — di dalam fungsi `renderPlayersFormInputs()`
    `<input type="file" id="p${i}_idcard_file" accept="image/*" onchange="handlePlayerIdCardPreview(event`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="openidcardlightbox"></a>
#### `openIdCardLightbox(imgSrc, title, driveUrl = '')`

- **Definisi:** [`app.js:2602`](app.js#L2602)
- **Deskripsi:** Lightbox for Viewing Full ID Card
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3445`](app.js#L3445) — di dalam fungsi `openEditParticipantModal()`
    `<div class="idcard-thumb-sm" id="edit_m_${idx}_thumb" onclick="if(editRosterIdCards[${idx}]) openIdC`
  - [`app.js:3638`](app.js#L3638) — di dalam fungsi `viewRosterDetail()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--yokke-`
  - [`app.js:8197`](app.js#L8197) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<div style="width:48px; height:48px; flex-shrink:0; cursor:pointer; border-radius:6px; overflow:hidd`
- **Memanggil Fungsi Internal:** [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="closeidcardlightbox"></a>
#### `closeIdCardLightbox()`

- **Definisi:** [`app.js:2643`](app.js#L2643)
- **Deskripsi:** Menutup modal pop-up lightbox preview ID Card pegawai.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:768`](index.html#L768) — Event `onclick`
    `<div id="idCardLightboxModal" class="modal-overlay" style="z-index: 2500;" onclick="if(event.target `
  - [`index.html:772`](index.html#L772) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeIdCardLightbox()">✕ Tu`

<a id="openeditparticipantmodal"></a>
#### `openEditParticipantModal(id)`

- **Definisi:** [`app.js:3360`](app.js#L3360)
- **Deskripsi:** ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3771`](app.js#L3771) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-edit-sm" title="Edit Data & Upload ID Card" onclick="openEditParticipantModal`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox), [`handleEditRosterIdCardUpload()`](#handleeditrosteridcardupload)

<a id="closeeditparticipantmodal"></a>
#### `closeEditParticipantModal()`

- **Definisi:** [`app.js:3458`](app.js#L3458)
- **Deskripsi:** Menutup modal dialog edit peserta.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:655`](index.html#L655) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeEditParticipantModal(`
  - [`index.html:727`](index.html#L727) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeEditParticipantModal()">Batal</button>`
  - [`app.js:3605`](app.js#L3605) — di dalam fungsi `saveParticipantEdit()`
    `closeEditParticipantModal();`

<a id="handleeditlogoupload"></a>
#### `handleEditLogoUpload(event)`

- **Definisi:** [`app.js:3463`](app.js#L3463)
- **Deskripsi:** Handle logo upload in Admin Edit modal
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:687`](index.html#L687) — Event `onchange`
    `<input type="file" id="editTeamLogoInput" accept="image/*" onchange="handleEditLogoUpload(event)" st`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleeditrosteridcardupload"></a>
#### `handleEditRosterIdCardUpload(event, idx)`

- **Definisi:** [`app.js:3479`](app.js#L3479)
- **Deskripsi:** Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedit pada modal admin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3448`](app.js#L3448) — di dalam fungsi `openEditParticipantModal()`
    `<input type="file" accept="image/*" style="font-size:0.7rem; width:120px;" onchange="handleEditRoste`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="closedetailmodal"></a>
#### `closeDetailModal()`

- **Definisi:** [`app.js:3669`](app.js#L3669)
- **Deskripsi:** Menutup modal dialog rincian roster tim dan galeri ID Card.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:744`](index.html#L744) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeDetailModal()">✕ Tutu`

<a id="opentestdrawmodal"></a>
#### `openTestDrawModal()`

- **Definisi:** [`app.js:4683`](app.js#L4683)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:489`](index.html#L489) — Event `onclick`
    `<button id="btnTestPlayoffStandings" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5`
  - [`app.js:4503`](app.js#L4503) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `openTestDrawModal();`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast)

<a id="closetestdrawmodal"></a>
#### `closeTestDrawModal()`

- **Definisi:** [`app.js:4695`](app.js#L4695)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:1063`](index.html#L1063) — Event `onclick`
    `<div id="testDrawModal" class="modal-overlay" onclick="if(event.target === this) closeTestDrawModal(`
  - [`index.html:1078`](index.html#L1078) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`app.js:4651`](app.js#L4651) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;"`

<a id="initandshowmvpmodal"></a>
#### `initAndShowMvpModal()`

- **Definisi:** [`app.js:7438`](app.js#L7438)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7386`](app.js#L7386) — di dalam fungsi `openMLBBGroupMvpModal()`
    `initAndShowMvpModal();`
  - [`app.js:7435`](app.js#L7435) — di dalam fungsi `openMLBBPlayoffMvpModal()`
    `initAndShowMvpModal();`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="openmatchplayerverifymodal"></a>
#### `openMatchPlayerVerifyModal(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:8009`](app.js#L8009)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8663`](app.js#L8663) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 7px; color:var(-`
  - [`app.js:11675`](app.js#L11675) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent)

<a id="closematchplayerverifymodal"></a>
#### `closeMatchPlayerVerifyModal()`

- **Definisi:** [`app.js:8047`](app.js#L8047)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:954`](index.html#L954) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:970`](index.html#L970) — Event `onclick`
    `<button type="button" class="btn btn-primary" onclick="closeMatchPlayerVerifyModal()">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermatchplayerverifymodalcontent"></a>
#### `renderMatchPlayerVerifyModalContent()`

- **Definisi:** [`app.js:8097`](app.js#L8097)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8042`](app.js#L8042) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:8068`](app.js#L8068) — di dalam fungsi `toggleMatchPlayerVerify()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:8091`](app.js#L8091) — di dalam fungsi `verifyAllMatchPlayers()`
    `renderMatchPlayerVerifyModalContent();`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`verifyAllMatchPlayers()`](#verifyallmatchplayers), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`openIdCardLightbox()`](#openidcardlightbox), [`toggleMatchPlayerVerify()`](#togglematchplayerverify), [`renderTeamRosterColumn()`](#renderteamrostercolumn)

---

### 🔧 Helper & UI Utility

<a id="showtoast"></a>
#### `showToast(msg, type = 'info', duration = 4000)`

- **Definisi:** [`app.js:804`](app.js#L804)
- **Deskripsi:** TOAST NOTIFICATIONS (CYBERPUNK DARK)
- **Titik Pemanggilan (56 lokasi):**
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
  - [`app.js:1781`](app.js#L1781) — cakupan global / event handler
    `showToast('Menyinkronkan data turnamen ke Google Sheets... ⏳', 'info', 2500);`
  - [`app.js:1808`](app.js#L1808) — cakupan global / event handler
    `showToast('✅ Bagan & data turnamen berhasil disinkronkan ke Google Sheets!', 'success', 4000);`
  - [`app.js:1973`](app.js#L1973) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('✅ Peraturan MLBB & MCGG berhasil diperbarui dari Google Docs!', 'success');`
  - [`app.js:1983`](app.js#L1983) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('⚠️ Gagal terhubung ke Google Docs, menggunakan cache dokumen lokal.', 'warning');`
  - [`app.js:3186`](app.js#L3186) — di dalam fungsi `handleRegister()`
    `showToast('❌ Pendaftaran ditolak: ${result.message || result.error || 'Validasi server gagal.'}', 'e`
  - [`app.js:3193`](app.js#L3193) — di dalam fungsi `handleRegister()`
    `showToast("⚠️ Gagal terhubung ke Google Sheets. Formulir Anda tetap tersimpan di draft lokal. Silaka`
  - [`app.js:3905`](app.js#L3905) — di dalam fungsi `shuffleAndGenerateTournament()`
    `showToast('🎲 Undian tim dan bagan berhasil diacak dan diperbarui!', 'success');`
  - [`app.js:3909`](app.js#L3909) — di dalam fungsi `shuffleAndGenerateTournament()`
    `showToast('✅ Susunan grup berhasil disinkronkan ke Google Sheets!', 'success', 3000);`
  - [`app.js:4085`](app.js#L4085) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan undian bagan playoff.', 'error');`
  - [`app.js:4089`](app.js#L4089) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');`
  - [`app.js:4093`](app.js#L4093) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('🔒 Bagan playoff sedang dikunci. Buka kunci undian terlebih dahulu untuk mengacak ulang.'`
  - [`app.js:4122`](app.js#L4122) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('🎲 Undian bagan playoff berhasil diacak dan diperbarui!', 'success');`
  - [`app.js:4128`](app.js#L4128) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('✅ Bagan playoff berhasil disinkronkan & diperbarui di Google Sheets!', 'success', 4000);`
  - [`app.js:4131`](app.js#L4131) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('⚠️ Bagan playoff tersimpan di browser. Gagal sinkron ke GSheet: ' + (res?.error || 'Konek`
  - [`app.js:4140`](app.js#L4140) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mengunci undian playoff.', 'error');`
  - [`app.js:4144`](app.js#L4144) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');`
  - [`app.js:4153`](app.js#L4153) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('🔒 Undian Playoff berhasil dikunci! Susunan bagan telah diamankan.', 'success');`
  - [`app.js:4159`](app.js#L4159) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `showToast('🔓 Kunci undian Playoff dibuka. Bagan dapat diacak kembali.', 'info');`
  - [`app.js:4181`](app.js#L4181) — di dalam fungsi `openPlayoffScoreModal()`
    `showToast('Data pertandingan playoff tidak ditemukan.', 'error');`
  - [`app.js:4344`](app.js#L4344) — di dalam fungsi `savePlayoffModalScore()`
    `showToast('⚠️ Pertandingan Playoff tidak boleh berakhir imbang! Salah satu tim harus unggul skor.', `
  - [`app.js:4363`](app.js#L4363) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mencatat skor playoff.', 'error');`
  - [`app.js:4368`](app.js#L4368) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Pertandingan playoff tidak ditemukan.', 'error');`
  - [`app.js:4372`](app.js#L4372) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('⚠️ Pertandingan ini belum dapat diinput skor karena kedua tim belum ditentukan dari babak`
  - [`app.js:4379`](app.js#L4379) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Skor tidak valid. Masukkan angka non-negatif.', 'error');`
  - [`app.js:4383`](app.js#L4383) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('Pertandingan playoff tidak boleh imbang.', 'warning');`
  - [`app.js:4398`](app.js#L4398) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('✅ Skor berhasil dicatat: ${escapeHtml(match.teamA)} (${scoreA}) vs (${scoreB}) ${escapeHt`
  - [`app.js:4418`](app.js#L4418) — di dalam fungsi `resetPlayoffMatchScore()`
    `showToast('Skor pertandingan ${match.matchLabel || ''} telah direset.', 'info');`
  - [`app.js:4425`](app.js#L4425) — di dalam fungsi `onPlayoffTeamClicked()`
    `showToast('⚠️ Pertandingan ini belum dapat diisi skor karena tim lawan belum siap tanding.', 'warnin`
  - [`app.js:4492`](app.js#L4492) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan simulasi pengundian playoff.', 'error')`
  - [`app.js:4498`](app.js#L4498) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('⚠️ Belum ada data grup MLBB. Pastikan pembagian grup sudah dibuat.', 'warning');`
  - [`app.js:4680`](app.js#L4680) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('🏆 Bagan Playoff berhasil diundi dan ditampilkan!', 'success');`
  - [`app.js:4685`](app.js#L4685) — di dalam fungsi `openTestDrawModal()`
    `showToast('Akses ditolak: Hanya panitia yang dapat membuka pusat uji coba undian.', 'error');`
  - [`app.js:4706`](app.js#L4706) — di dalam fungsi `openTestDrawInNewWindow()`
    `showToast('⚠️ Silakan jalankan simulasi undian terlebih dahulu.', 'warning');`
  - [`app.js:4764`](app.js#L4764) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('⚠️ Belum ada tim MLBB yang terverifikasi.', 'warning');`
  - [`app.js:4832`](app.js#L4832) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('🎲 Simulasi pembagian 8 grup berhasil diacak!', 'info');`
  - [`app.js:4849`](app.js#L4849) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mereset pembagian grup & bagan turnamen MLBB.', '`
  - [`app.js:4853`](app.js#L4853) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('🔒 Pembagian grup MLBB sedang dikunci (Lock TM). Harap buka kunci grup terlebih dahulu.',`
  - [`app.js:4858`](app.js#L4858) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('ℹ️ Pembagian grup dan bagan MLBB saat ini sudah dalam keadaan kosong/belum diundi.', 'inf`
  - [`app.js:5116`](app.js#L5116) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('✅ Seluruh bagan turnamen (Grup & Playoff) berhasil disimpan & diperbarui di Google Sheets`
  - [`app.js:5120`](app.js#L5120) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('⚠️ Gagal menyinkronkan bagan ke Google Sheets: ' + (configResult.error || 'Periksa koneks`
  - [`app.js:5126`](app.js#L5126) — di dalam fungsi `saveTournamentStateOnly()`
    `showToast('⚠️ Gagal menyimpan ke Google Sheets: ' + err.message, 'error', 5000);`
  - [`app.js:7814`](app.js#L7814) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Playoff (${ctx.format || 'BO3'}) & disinkro`
  - [`app.js:7819`](app.js#L7819) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Match (${ctx.format || 'BO3'}) & disinkronk`
  - [`app.js:7866`](app.js#L7866) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP Playoff telah dihapus & disinkronkan ke GSheet.', 'info');`
  - [`app.js:7871`](app.js#L7871) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP match telah dihapus & disinkronkan ke GSheet (3 baris).', 'info');`
  - [`app.js:8762`](app.js#L8762) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700; ${i`
  - [`app.js:10879`](app.js#L10879) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `showToast(isLocked ? '🏆 Masuk ke Babak Playoff (Undian Terkunci).' : '🎲 Berhasil masuk ke Babak Pl`
  - [`app.js:11179`](app.js#L11179) — di dalam fungsi `renderFullPlayoffBracketHtml()`
    `<button type="button" class="btn btn-gold" style="font-size:0.8rem; padding:0.4rem 0.85rem; font-wei`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`app.js:1091`](app.js#L1091)
- **Deskripsi:** Helper to format Google Drive image URLs into viewable thumbnail image URLs
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:2611`](app.js#L2611) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3419`](app.js#L3419) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3446`](app.js#L3446) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3617`](app.js#L3617) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3639`](app.js#L3639) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3729`](app.js#L3729) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:8187`](app.js#L8187) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(car`
  - [`functional_tests.js:94`](functional_tests.js#L94) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

<a id="switchtab"></a>
#### `switchTab(tabId)`

- **Definisi:** [`app.js:2584`](app.js#L2584)
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

- **Definisi:** [`app.js:2648`](app.js#L2648)
- **Deskripsi:** Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dalam HTML DOM.
- **Titik Pemanggilan (89 lokasi):**
  - [`app.js:823`](app.js#L823) — di dalam fungsi `showToast()`
    `<span class="toast-msg">${escapeHtml(msg).replace(/\n/g, '<br>')}</span>`
  - [`app.js:1892`](app.js#L1892) — di dalam fungsi `formatRuleLine()`
    `return '<h4 style="color:var(--yokke-gold); margin:1.35rem 0 0.6rem; font-size:1.05rem; border-botto`
  - [`app.js:1897`](app.js#L1897) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-green); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bo`
  - [`app.js:1902`](app.js#L1902) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-red); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bold`
  - [`app.js:1908`](app.js#L1908) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 2rem; margin-bottom: 0.35rem; line-height: 1.55; display: flex; gap`
  - [`app.js:1914`](app.js#L1914) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 1rem; margin-bottom: 0.4rem; line-height: 1.6; display: flex; gap: `
  - [`app.js:1919`](app.js#L1919) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65; font-weight:500;">${escapeHtml(trimmed)}</`
  - [`app.js:1924`](app.js#L1924) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-left:1.5rem; margin-bottom:0.35rem; line-height:1.55; color:var(--text-mute`
  - [`app.js:1927`](app.js#L1927) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65;">${escapeHtml(trimmed)}</p>';`
  - [`app.js:2696`](app.js#L2696) — di dalam fungsi `handleTeamNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Nama Tim Sudah Terdaftar:</strong> Tim "<strong>${escapeHtml(existi`
  - [`app.js:2729`](app.js#L2729) — di dalam fungsi `handleMcggNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Peserta Sudah Terdaftar:</strong> Pemain "<strong>${escapeHtml(exis`
  - [`app.js:4219`](app.js#L4219) — di dalam fungsi `openPlayoffScoreModal()`
    `titleEl.innerHTML = '<span>⚔️</span> <span>Input Skor: ${escapeHtml(match.matchLabel || match.phaseN`
  - [`app.js:4331`](app.js#L4331) — di dalam fungsi `updatePlayoffModalWinnerPreview()`
    `banner.innerHTML = '🏆 <strong>Pemenang:</strong> ${escapeHtml(tA)} (${scoreA} - ${scoreB}) melaju k`
  - [`app.js:4336`](app.js#L4336) — di dalam fungsi `updatePlayoffModalWinnerPreview()`
    `banner.innerHTML = '🏆 <strong>Pemenang:</strong> ${escapeHtml(tB)} (${scoreB} - ${scoreA}) melaju k`
  - [`app.js:4398`](app.js#L4398) — di dalam fungsi `setPlayoffMatchScore()`
    `showToast('✅ Skor berhasil dicatat: ${escapeHtml(match.teamA)} (${scoreA}) vs (${scoreB}) ${escapeHt`
  - [`app.js:4460`](app.js#L4460) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `${escapeHtml(m.teamA || '-')}`
  - [`app.js:4468`](app.js#L4468) — di dalam fungsi `renderPlayoffMatchCardHtml()`
    `${escapeHtml(m.teamB || '-')}`
  - [`app.js:4563`](app.js#L4563) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🏠 ${escapeHtml(mUB.teamA)}</span>`
  - [`app.js:4564`](app.js#L4564) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoA.group || '')} (Juara 1)<`
  - [`app.js:4568`](app.js#L4568) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#cbd5e1;">⚔️ ${escapeHtml(mUB.teamB)}</span>`
  - [`app.js:4569`](app.js#L4569) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-cyan);">${escapeHtml(infoB.group || '')} (Juara 2)<`
  - [`app.js:4589`](app.js#L4589) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🎯 ${escapeHtml(mLB.teamB)}</span>`
  - [`app.js:4590`](app.js#L4590) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoC.group || '')} (Juara 3)<`
  - [`app.js:4597`](app.js#L4597) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `Pemenang Upper ➔ UB QF | Gugur ➔ LB R1 vs ${escapeHtml(mLB.teamB)}`
  - [`app.js:4613`](app.js#L4613) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong>${escapeHtml(m.teamA)}</strong> (${infoA.group}) vs <strong>${escapeHtml(m.teamB)}</strong> `
  - [`app.js:4629`](app.js#L4629) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong style="color:var(--yokke-cyan);">${gName}:</strong> [1] ${escapeHtml(j1)} | [2] ${escapeHtml`
  - [`app.js:4811`](app.js#L4811) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<span style="font-weight:600;">${escapeHtml(tName)}</span>`
  - [`app.js:4813`](app.js#L4813) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `${dept ? '<span style="font-size:0.68rem; color:var(--text-muted); display:block;">🏢 ${escapeHtml(d`
  - [`app.js:6464`](app.js#L6464) — di dalam fungsi `renderGroupStageUI()`
    `<span>🛡️ ${escapeHtml(gName)}</span>`
  - [`app.js:6503`](app.js#L6503) — di dalam fungsi `renderGroupStageUI()`
    `<span>${escapeHtml(t.name)}</span>`
  - [`app.js:6546`](app.js#L6546) — di dalam fungsi `renderGroupStageUI()`
    `⚠️ TIE-BREAKER MATCH DIPERLUKAN (${escapeHtml(tb.group)})`
  - [`app.js:6549`](app.js#L6549) — di dalam fungsi `renderGroupStageUI()`
    `Peringkat 2 & 3 grup <strong>${escapeHtml(tb.group)}</strong> memiliki poin sama (<strong>${escapeHt`
  - [`app.js:6556`](app.js#L6556) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:6557`](app.js#L6557) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:7459`](app.js#L7459) — di dalam fungsi `initAndShowMvpModal()`
    `tabA.innerHTML = '${escapeHtml(ctx.teamA)} ${isWinA ? '🏆' : ''}';`
  - [`app.js:7460`](app.js#L7460) — di dalam fungsi `initAndShowMvpModal()`
    `tabB.innerHTML = '${escapeHtml(ctx.teamB)} ${isWinB ? '🏆' : ''}';`
  - [`app.js:7626`](app.js#L7626) — di dalam fungsi `renderMvpRosterList()`
    `Tidak ada data roster terdaftar untuk tim ${escapeHtml(teamName)}. Anda dapat mengetik manual nama p`
  - [`app.js:7659`](app.js#L7659) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(ign || realName)}`
  - [`app.js:7662`](app.js#L7662) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(realName)}`
  - [`app.js:7665`](app.js#L7665) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(role)}`
  - [`app.js:7672`](app.js#L7672) — di dalam fungsi `renderMvpRosterList()`
    `html = '<div style="grid-column:1/-1; padding:0.75rem; text-align:center; color:var(--text-muted); f`
  - [`app.js:7971`](app.js#L7971) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = g.hero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(g.hero)})</spa`
  - [`app.js:7972`](app.js#L7972) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = g.team ? ' <span style="color:var(--yokke-cyan);font-size:0.65rem;font-weight:600;">`
  - [`app.js:7973`](app.js#L7973) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `return '<span class="badge" style="background:rgba(255,183,3,0.12);color:var(--yokke-gold);border:1p`
  - [`app.js:7979`](app.js#L7979) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = m.mvpHero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(m.mvpHero)}`
  - [`app.js:7980`](app.js#L7980) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = m.mvpTeam ? '<span style="font-size:0.68rem;color:var(--yokke-cyan);margin-left:auto`
  - [`app.js:7983`](app.js#L7983) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `<span>⭐ MVP: <strong style="color:#fff;">${escapeHtml(m.mvpPlayer)}</strong>${heroTag}</span>`
  - [`app.js:8133`](app.js#L8133) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamA)}: <strong>${countA}/${rosterA.length}</strong> Terverifikasi ${countA >= 5 ?`
  - [`app.js:8136`](app.js#L8136) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamB)}: <strong>${countB}/${rosterB.length}</strong> Terverifikasi ${countB >= 5 ?`
  - [`app.js:8141`](app.js#L8141) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8142`](app.js#L8142) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamA)}`
  - [`app.js:8144`](app.js#L8144) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:8145`](app.js#L8145) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamB)}`
  - [`app.js:8159`](app.js#L8159) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<span>⚔️</span> <span>${escapeHtml(teamName)}</span>`
  - [`app.js:8209`](app.js#L8209) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.nickname || m.name || '-')}`
  - [`app.js:8221`](app.js#L8221) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.name || '-')} • <code style="font-size:0.7rem;">NIP: ${escapeHtml(nipLabel)}</code>`
  - [`app.js:8224`](app.js#L8224) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `ID Game: <strong style="color:#fff;">${escapeHtml(m.gameId || '-')}</strong>`
  - [`app.js:8583`](app.js#L8583) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>🛡️</span> <span>Jadwal ${escapeHtml(gName)} • ${dayLabel}</span>`
  - [`app.js:8597`](app.js#L8597) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>☕</span> <span><strong>Tim Istirahat Hari ${mlbbActiveDayFilter} (${MLBB_SCHEDULE_DATES[mlbbAc`
  - [`app.js:8604`](app.js#L8604) — di dalam fungsi `renderGroupFixturesUI()`
    `html += '<p style="color:var(--text-muted);font-size:0.85rem;padding:0.4rem 0;">Tidak ada pertanding`
  - [`app.js:8646`](app.js#L8646) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:8653`](app.js#L8653) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamB)}`
  - [`app.js:9648`](app.js#L9648) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; over`
  - [`app.js:9649`](app.js#L9649) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `🎮 ${escapeHtml(item.playerNick)}`
  - [`app.js:9651`](app.js#L9651) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text`
  - [`app.js:9652`](app.js#L9652) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `👤 ${escapeHtml(item.playerName)}`
  - [`app.js:10362`](app.js#L10362) — di dalam fungsi `renderLobbyRowsHtml()`
    `<span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? escapeHtm`
  - [`app.js:10365`](app.js#L10365) — di dalam fungsi `renderLobbyRowsHtml()`
    `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? '<span>👤 ${escapeHtml(p.name)}</spa`
  - [`app.js:10366`](app.js#L10366) — di dalam fungsi `renderLobbyRowsHtml()`
    `${p.gameId && p.gameId !== '-' ? '${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' `
  - [`app.js:10952`](app.js#L10952) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `${escapeHtml(m.teamA || '-')}`
  - [`app.js:10960`](app.js#L10960) — di dalam fungsi `renderSingleMatchNodeHtml()`
    `${escapeHtml(m.teamB || '-')}`
  - [`app.js:11511`](app.js#L11511) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<span>🛡️</span> <span>Klasemen & Pertandingan: ${escapeHtml(gName)}</span>`
  - [`app.js:11529`](app.js#L11529) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0;font-size:0.95rem;color:var(--yokke-gold);">📊 Klasemen ${isGroupAllDone ? 'Akhi`
  - [`app.js:11579`](app.js#L11579) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `) : '<span style="color:var(--text-muted);font-style:italic;font-size:0.75rem;" title="Status kelolo`
  - [`app.js:11584`](app.js#L11584) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<td style="font-weight:700;color:#fff;">${escapeHtml(t.name)}</td>`
  - [`app.js:11605`](app.js#L11605) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3`
  - [`app.js:11644`](app.js#L11644) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:11655`](app.js#L11655) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`app.js:11658`](app.js#L11658) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:11659`](app.js#L11659) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`app.js:11660`](app.js#L11660) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
  - [`app.js:11666`](app.js#L11666) — cakupan global / event handler
    `${isWinnerB ? '🏆 ' : ''}${escapeHtml(f.teamB)}`
  - [`app.js:11675`](app.js#L11675) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
  - [`app.js:11708`](app.js#L11708) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamA)} <span style="color:var(--yokke-gold); font-size:0.78rem;">(Home)</s`
  - [`app.js:11710`](app.js#L11710) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamB)} <span style="color:var(--text-muted); font-size:0.78rem;">(Away)</s`
  - [`app.js:11712`](app.js#L11712) — cakupan global / event handler
    `${actualMatch.winner ? '<div style="font-size:0.8rem; color:var(--yokke-green); font-weight:700; mar`
  - [`app.js:11822`](app.js#L11822) — cakupan global / event handler
    `<div style="font-size:0.9rem;font-weight:700;color:var(--yokke-cyan);">${escapeHtml((groupPlayoffMat`
  - [`app.js:11826`](app.js#L11826) — cakupan global / event handler
    `<div style="font-size:0.9rem;font-weight:700;color:var(--yokke-gold);">${escapeHtml((groupPlayoffMat`
  - [`app.js:11831`](app.js#L11831) — cakupan global / event handler
    `👑 JUARA 1 YOKKE SQUAD 2026: ${escapeHtml(groupPlayoffMatches[5][0].winner)} (${groupPlayoffMatches[`

<a id="filterlist"></a>
#### `filterList(cat)`

- **Definisi:** [`app.js:3352`](app.js#L3352)
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

- **Definisi:** [`app.js:3844`](app.js#L3844)
- **Deskripsi:** Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP_2, GROUP_4, KNOCKOUT).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:465`](index.html#L465) — Event `onchange`
    `<select id="bracketFormat" onchange="changeTournamentFormat()" style="padding: 0.5rem 0.8rem; font-s`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermvpgametabs"></a>
#### `renderMvpGameTabs()`

- **Definisi:** [`app.js:7485`](app.js#L7485)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7464`](app.js#L7464) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpGameTabs();`
  - [`app.js:7570`](app.js#L7570) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpGameTabs();`
  - [`app.js:7710`](app.js#L7710) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpGameTabs();`
- **Memanggil Fungsi Internal:** [`switchMvpGameTab()`](#switchmvpgametab)

<a id="switchmvpgametab"></a>
#### `switchMvpGameTab(targetGame)`

- **Definisi:** [`app.js:7517`](app.js#L7517)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7508`](app.js#L7508) — di dalam fungsi `renderMvpGameTabs()`
    `<button type="button" class="${pillClass}" onclick="switchMvpGameTab(${g})">`
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="switchmvpteamtab"></a>
#### `switchMvpTeamTab(teamKey)`

- **Definisi:** [`app.js:7580`](app.js#L7580)
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:883`](index.html#L883) — Event `onclick`
    `<button type="button" id="mvpTabTeamA" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`index.html:886`](index.html#L886) — Event `onclick`
    `<button type="button" id="mvpTabTeamB" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`app.js:7480`](app.js#L7480) — di dalam fungsi `initAndShowMvpModal()`
    `switchMvpTeamTab(ctx.activeTeam);`
  - [`app.js:7572`](app.js#L7572) — di dalam fungsi `switchMvpGameTab()`
    `switchMvpTeamTab(ctx.activeTeam);`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="formatmatchmvpdisplayhtml"></a>
#### `formatMatchMvpDisplayHtml(m)`

- **Definisi:** [`app.js:7965`](app.js#L7965)
- **Deskripsi:** Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8658`](app.js#L8658) — di dalam fungsi `renderGroupFixturesUI()`
    `${formatMatchMvpDisplayHtml(f)}`
  - [`app.js:11670`](app.js#L11670) — cakupan global / event handler
    `${formatMatchMvpDisplayHtml(f)}`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="setdrawtargetandscroll"></a>
#### `setDrawTargetAndScroll(lobbyKey)`

- **Definisi:** [`app.js:9961`](app.js#L9961)
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
  - [`app.js:2611`](app.js#L2611) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3419`](app.js#L3419) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3446`](app.js#L3446) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3617`](app.js#L3617) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3639`](app.js#L3639) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3729`](app.js#L3729) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:8187`](app.js#L8187) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
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

- **Definisi:** [`app.js:2226`](app.js#L2226)
- **Deskripsi:** Auth functions
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:44`](index.html#L44) — Event `onclick`
    `<button id="btnLoginPanitia" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8`

<a id="closeloginmodal"></a>
#### `closeLoginModal()`

- **Definisi:** [`app.js:2233`](app.js#L2233)
- **Deskripsi:** Menutup modal dialog login PIN panitia.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:790`](index.html#L790) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeLoginModal()">Batal</button>`
  - [`app.js:2243`](app.js#L2243) — di dalam fungsi `verifyAdminPin()`
    `closeLoginModal();`

<a id="verifyadminpin"></a>
#### `verifyAdminPin()`

- **Definisi:** [`app.js:2237`](app.js#L2237)
- **Deskripsi:** Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif penuh.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:791`](index.html#L791) — Event `onclick`
    `<button class="btn btn-primary" onclick="verifyAdminPin()">Masuk</button>`
- **Memanggil Fungsi Internal:** [`closeLoginModal()`](#closeloginmodal), [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="logoutadmin"></a>
#### `logoutAdmin()`

- **Definisi:** [`app.js:2253`](app.js#L2253)
- **Deskripsi:** Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (read-only).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:45`](index.html#L45) — Event `onclick`
    `<button id="btnLogoutPanitia" class="btn btn-outline" style="display: none; padding: 0.25rem 0.75rem`
- **Memanggil Fungsi Internal:** [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="updateauthui"></a>
#### `updateAuthUI()`

- **Definisi:** [`app.js:2392`](app.js#L2392)
- **Deskripsi:** Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock, dan form interaktif.
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:896`](app.js#L896) — di dalam fungsi `confirmResetBaganWithPin()`
    `updateAuthUI();`
  - [`app.js:1468`](app.js#L1468) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateAuthUI();`
  - [`app.js:1871`](app.js#L1871) — di dalam fungsi `saveState()`
    `updateAuthUI();`
  - [`app.js:2244`](app.js#L2244) — di dalam fungsi `verifyAdminPin()`
    `updateAuthUI();`
  - [`app.js:2256`](app.js#L2256) — di dalam fungsi `logoutAdmin()`
    `updateAuthUI();`
  - [`app.js:2342`](app.js#L2342) — di dalam fungsi `toggleRegistrationStatus()`
    `updateAuthUI();`
  - [`app.js:2387`](app.js#L2387) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `updateAuthUI();`
  - [`app.js:3932`](app.js#L3932) — di dalam fungsi `toggleLockMLBBGroup()`
    `updateAuthUI();`
  - [`app.js:4016`](app.js#L4016) — di dalam fungsi `proceedToMLBBStage2()`
    `updateAuthUI();`
  - [`app.js:4117`](app.js#L4117) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `updateAuthUI();`
  - [`app.js:4163`](app.js#L4163) — di dalam fungsi `toggleLockMLBBPlayoff()`
    `updateAuthUI();`
  - [`app.js:4517`](app.js#L4517) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `updateAuthUI();`
  - [`app.js:4842`](app.js#L4842) — di dalam fungsi `resetMLBBToStage1()`
    `updateAuthUI();`
  - [`app.js:4881`](app.js#L4881) — di dalam fungsi `toggleLockMCGGLobbies()`
    `updateAuthUI();`
  - [`app.js:10711`](app.js#L10711) — cakupan global / event handler
    `updateAuthUI();`
  - [`app.js:10873`](app.js#L10873) — di dalam fungsi `goToNextMLBBPlayoffPhase()`
    `updateAuthUI();`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui)

---

### 📋 Regulasi Turnamen (Rules Editor)

<a id="formatruleline"></a>
#### `formatRuleLine(l)`

- **Definisi:** [`app.js:1885`](app.js#L1885)
- **Deskripsi:** Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="fetchrulesfromgoogledoc"></a>
#### `fetchRulesFromGoogleDoc(silent = false)`

- **Definisi:** [`app.js:1931`](app.js#L1931)
- **Deskripsi:** Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: tab=t.0 & MCGG: tab=t.ji56ljhdhzkr)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:389`](index.html#L389) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`app.js:2597`](app.js#L2597) — di dalam fungsi `switchTab()`
    `fetchRulesFromGoogleDoc(true);`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`showToast()`](#showtoast)

<a id="renderrules"></a>
#### `renderRules()`

- **Definisi:** [`app.js:1989`](app.js#L1989)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:1419`](app.js#L1419) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRules();`
  - [`app.js:1968`](app.js#L1968) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `renderRules();`
  - [`app.js:2022`](app.js#L2022) — di dalam fungsi `saveCustomRules()`
    `renderRules();`
  - [`app.js:2042`](app.js#L2042) — di dalam fungsi `resetRulesToDefault()`
    `renderRules();`
  - [`app.js:2596`](app.js#L2596) — di dalam fungsi `switchTab()`
    `renderRules();`
  - [`app.js:10710`](app.js#L10710) — cakupan global / event handler
    `renderRules();`

<a id="toggleeditrules"></a>
#### `toggleEditRules()`

- **Definisi:** [`app.js:2003`](app.js#L2003)
- **Deskripsi:** Membuka/menutup form editor peraturan turnamen khusus panitia.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:399`](index.html#L399) — Event `onclick`
    `<button class="btn btn-gold" id="btnToggleEditRules" style="font-size: 0.8rem; padding: 0.4rem 0.8re`
  - [`index.html:433`](index.html#L433) — Event `onclick`
    `<button class="btn btn-outline" onclick="toggleEditRules()">Batal</button>`
  - [`app.js:2023`](app.js#L2023) — di dalam fungsi `saveCustomRules()`
    `toggleEditRules();`

<a id="savecustomrules"></a>
#### `saveCustomRules()`

- **Definisi:** [`app.js:2009`](app.js#L2009)
- **Deskripsi:** Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Google Sheets.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:432`](index.html#L432) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveCustomRules()">💾 Simpan Peraturan</button>`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`toggleEditRules()`](#toggleeditrules), [`postToGoogleAppsScript()`](#posttogoogleappsscript)

<a id="resetrulestodefault"></a>
#### `resetRulesToDefault()`

- **Definisi:** [`app.js:2037`](app.js#L2037)
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

