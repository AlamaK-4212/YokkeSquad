# 📖 INDEKS FUNGSI DAN PETA PEMANGGILAN KODE (FUNCTION MAP)
> **Turnamen E-Sports Yokke Squad 2026**  
> *Dokumen ini dibuat otomatis oleh script `scripts/generate_function_index.js`. Pembaruan dilakukan secara otomatis setiap kali ada perubahan pada source code.*

---

## 📊 Ringkasan Eksekutif
- **Total Fungsi Terdaftar:** 223 fungsi (189 di `app.js`, 21 di `google_apps_script.js`)
- **Total Titik Pemanggilan (Call Sites):** 825 titik pemanggilan teridentifikasi
- **Terakhir Diperbarui:** 26/10/2026, 13.28.54 WIB
- **Cara Memperbarui Otomatis:**
  - Sekali jalan: `node scripts/generate_function_index.js`
  - Mode Pantau (Realtime Auto-Update saat simpan kode): `node scripts/generate_function_index.js --watch`
  - Bersamaan saat test: `node tests/functional_tests.js`

---

## 📑 Daftar Isi Modul
1. [♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) (46 fungsi)](#turnamen-mcgg-klasemen-undian-commander-penalti)
2. [⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) (33 fungsi)](#turnamen-mlbb-bagan-grup-playoff-engine)
3. [👥 Manajemen Peserta & Roster (11 fungsi)](#manajemen-peserta-roster)
4. [📦 Modul Aplikasi Umum (63 fungsi)](#modul-aplikasi-umum)
5. [☁️ Sinkronisasi Google Sheets & State Storage (6 fungsi)](#sinkronisasi-google-sheets-state-storage)
6. [🆔 Modal Dialog & Bukti ID Card (22 fungsi)](#modal-dialog-bukti-id-card)
7. [🔧 Helper & UI Utility (9 fungsi)](#helper-ui-utility)
8. [🛡️ Autentikasi & Hak Akses Panitia (6 fungsi)](#autentikasi-hak-akses-panitia)
9. [📋 Regulasi Turnamen (Rules Editor) (6 fungsi)](#regulasi-turnamen-rules-editor)
10. [🗄️ Google Sheets Schema & Master Data (8 fungsi)](#google-sheets-schema-master-data)
11. [⚙️ Backend Apps Script Utility (11 fungsi)](#backend-apps-script-utility)
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
| 11 | [**`getInitialParticipants()`**](#getinitialparticipants) | [app.js:89](app.js#L89) | 👥 Manajemen Peserta & Roster | Inisialisasi daftar peserta dari localStorage dengan validasi versi data (D... | 1x |
| 12 | [**`getTeamPrefix()`**](#getteamprefix) | [app.js:112](app.js#L112) | 📦 Modul Aplikasi Umum | Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama) | 4x |
| 13 | [**`getDepartmentCluster()`**](#getdepartmentcluster) | [app.js:124](app.js#L124) | 📦 Modul Aplikasi Umum | Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resm... | 7x |
| 14 | [**`getTeamDept()`**](#getteamdept) | [app.js:182](app.js#L182) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 3x |
| 15 | [**`isTeamInvited()`**](#isteaminvited) | [app.js:204](app.js#L204) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 4x |
| 16 | [**`toggleInvitedTeam()`**](#toggleinvitedteam) | [app.js:212](app.js#L212) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleInvitedTeam | 2x |
| 17 | [**`showGlobalLoader()`**](#showgloballoader) | [app.js:247](app.js#L247) | 📦 Modul Aplikasi Umum | Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets) | 1x |
| 18 | [**`hideGlobalLoader()`**](#hidegloballoader) | [app.js:261](app.js#L261) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hideGlobalLoader | 4x |
| 19 | [**`saveStageStateLocal()`**](#savestagestatelocal) | [app.js:358](app.js#L358) | ☁️ Sinkronisasi Google Sheets & State Storage | Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM,... | 10x |
| 20 | [**`getCommanderFormattedName()`**](#getcommanderformattedname) | [app.js:414](app.js#L414) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika t... | 5x |
| 21 | [**`renderCommanderCirclesHtml()`**](#rendercommandercircleshtml) | [app.js:425](app.js#L425) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen | 3x |
| 22 | [**`renderCommanderCardVisualHtml()`**](#rendercommandercardvisualhtml) | [app.js:454](app.js#L454) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian | 1x |
| 23 | [**`compressImage()`**](#compressimage) | [app.js:634](app.js#L634) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compressor: compresses smartphone photos using HTML5 Canv... | 3x |
| 24 | [**`compressImageFile()`**](#compressimagefile) | [app.js:693](app.js#L693) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compression helper (Canvas <= 1200px, quality 0.75) | 3x |
| 25 | [**`showToast()`**](#showtoast) | [app.js:700](app.js#L700) | 🔧 Helper & UI Utility | TOAST NOTIFICATIONS (CYBERPUNK DARK) | 15x |
| 26 | [**`openGlossaryModal()`**](#openglossarymodal) | [app.js:733](app.js#L733) | 🆔 Modal Dialog & Bukti ID Card | Modal Glosarium Istilah Turnamen | 1x |
| 27 | [**`closeGlossaryModal()`**](#closeglossarymodal) | [app.js:738](app.js#L738) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeGlossaryModal | 2x |
| 28 | [**`openResetBaganModal()`**](#openresetbaganmodal) | [app.js:744](app.js#L744) | 🆔 Modal Dialog & Bukti ID Card | Modal Reset Bagan dengan Verifikasi Password/PIN | 1x |
| 29 | [**`closeResetBaganModal()`**](#closeresetbaganmodal) | [app.js:753](app.js#L753) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeResetBaganModal | 2x |
| 30 | [**`confirmResetBaganWithPin()`**](#confirmresetbaganwithpin) | [app.js:758](app.js#L758) | 🛡️ Autentikasi & Hak Akses Panitia | Fungsi operasional untuk confirmResetBaganWithPin | 1x |
| 31 | [**`bypassLoaderWithCache()`**](#bypassloaderwithcache) | [app.js:801](app.js#L801) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk bypassLoaderWithCache | 1x |
| 32 | [**`handleParticipantSearch()`**](#handleparticipantsearch) | [app.js:816](app.js#L816) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk handleParticipantSearch | 1x |
| 33 | [**`saveFormDraft()`**](#saveformdraft) | [app.js:824](app.js#L824) | 📦 Modul Aplikasi Umum | AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE) | 1x |
| 34 | [**`restoreFormDraft()`**](#restoreformdraft) | [app.js:880](app.js#L880) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk restoreFormDraft | 2x |
| 35 | [**`clearFormDraft()`**](#clearformdraft) | [app.js:970](app.js#L970) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearFormDraft | 1x |
| 36 | [**`handleFormDraftChange()`**](#handleformdraftchange) | [app.js:977](app.js#L977) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk handleFormDraftChange | 3x |
| 37 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [app.js:986](app.js#L986) | 🔧 Helper & UI Utility | Helper to format Google Drive image URLs into viewable thumbnail image URLs | 8x |
| 38 | [**`getIdCardMap()`**](#getidcardmap) | [app.js:1001](app.js#L1001) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama | 2x |
| 39 | [**`saveIdCardToMap()`**](#saveidcardtomap) | [app.js:1040](app.js#L1040) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasar... | 5x |
| 40 | [**`findIdCardByEmpIdOrName()`**](#findidcardbyempidorname) | [app.js:1058](app.js#L1058) | 🆔 Modal Dialog & Bukti ID Card | Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama p... | 8x |
| 41 | [**`getLogoMap()`**](#getlogomap) | [app.js:1076](app.js#L1076) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan Logo sesuai Nama Tim (MLBB) | 2x |
| 42 | [**`saveLogoToMap()`**](#savelogotomap) | [app.js:1090](app.js#L1090) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasa... | 3x |
| 43 | [**`findLogoByTeamName()`**](#findlogobyteamname) | [app.js:1099](app.js#L1099) | 🆔 Modal Dialog & Bukti ID Card | Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peser... | 7x |
| 44 | [**`autoLinkParticipantsAssets()`**](#autolinkparticipantsassets) | [app.js:1107](app.js#L1107) | 👥 Manajemen Peserta & Roster | Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada | 5x |
| 45 | [**`fetchParticipantsFromGoogleSheet()`**](#fetchparticipantsfromgooglesheet) | [app.js:1142](app.js#L1142) | 👥 Manajemen Peserta & Roster | Fetch registered participants from Google Sheets via doGet Webhook Google S... | 4x |
| 46 | [**`getItemKey()`**](#getitemkey) | [app.js:1168](app.js#L1168) | 📦 Modul Aplikasi Umum | Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name | 2x |
| 47 | [**`cleanOrphanedTournamentData()`**](#cleanorphanedtournamentdata) | [app.js:1403](app.js#L1403) | 📦 Modul Aplikasi Umum | Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup... | 2x |
| 48 | [**`resetCacheAndFollowGSheet()`**](#resetcacheandfollowgsheet) | [app.js:1489](app.js#L1489) | ☁️ Sinkronisasi Google Sheets & State Storage | Reset cache lokal dan ikuti 100% data aktif dari Google Sheets | 1x |
| 49 | [**`saveAllChangesToGoogleSheet()`**](#saveallchangestogooglesheet) | [app.js:1522](app.js#L1522) | ☁️ Sinkronisasi Google Sheets & State Storage | SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS | 1x |
| 50 | [**`syncTournamentSheetsToGSheet()`**](#synctournamentsheetstogsheet) | [app.js:1676](app.js#L1676) | ☁️ Sinkronisasi Google Sheets & State Storage | SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET | 0x |
| 51 | [**`saveState()`**](#savestate) | [app.js:1715](app.js#L1715) | 📦 Modul Aplikasi Umum | Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi ... | 35x |
| 52 | [**`updateCounts()`**](#updatecounts) | [app.js:1726](app.js#L1726) | 📦 Modul Aplikasi Umum | Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status veri... | 7x |
| 53 | [**`formatRuleLine()`**](#formatruleline) | [app.js:1736](app.js#L1736) | 📋 Regulasi Turnamen (Rules Editor) | Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG) | 0x |
| 54 | [**`fetchRulesFromGoogleDoc()`**](#fetchrulesfromgoogledoc) | [app.js:1782](app.js#L1782) | 📋 Regulasi Turnamen (Rules Editor) | Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: t... | 2x |
| 55 | [**`renderRules()`**](#renderrules) | [app.js:1840](app.js#L1840) | 📋 Regulasi Turnamen (Rules Editor) | Fungsi operasional untuk renderRules | 6x |
| 56 | [**`toggleEditRules()`**](#toggleeditrules) | [app.js:1854](app.js#L1854) | 📋 Regulasi Turnamen (Rules Editor) | Membuka/menutup form editor peraturan turnamen khusus panitia. | 3x |
| 57 | [**`saveCustomRules()`**](#savecustomrules) | [app.js:1860](app.js#L1860) | 📋 Regulasi Turnamen (Rules Editor) | Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Goo... | 1x |
| 58 | [**`resetRulesToDefault()`**](#resetrulestodefault) | [app.js:1891](app.js#L1891) | 📋 Regulasi Turnamen (Rules Editor) | Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026... | 1x |
| 59 | [**`handleLogoPreview()`**](#handlelogopreview) | [app.js:1901](app.js#L1901) | 🆔 Modal Dialog & Bukti ID Card | Handle Logo Upload and Live Preview | 1x |
| 60 | [**`handleSingleIdCardPreview()`**](#handlesingleidcardpreview) | [app.js:1916](app.js#L1916) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Officials and MCGG | 3x |
| 61 | [**`handlePlayerIdCardPreview()`**](#handleplayeridcardpreview) | [app.js:1938](app.js#L1938) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Each of the 8 Players | 1x |
| 62 | [**`toggleOfficial2Form()`**](#toggleofficial2form) | [app.js:1954](app.js#L1954) | 📦 Modul Aplikasi Umum | Toggle Official 2 Form | 4x |
| 63 | [**`renderPlayersFormInputs()`**](#renderplayersforminputs) | [app.js:1961](app.js#L1961) | 📦 Modul Aplikasi Umum | Generate the 8 players form fields dynamically (Included In-Game Nickname a... | 2x |
| 64 | [**`toggleCategoryForm()`**](#togglecategoryform) | [app.js:2020](app.js#L2020) | 📦 Modul Aplikasi Umum | Switch form between MLBB and MCGG cleanly | 3x |
| 65 | [**`openLoginModal()`**](#openloginmodal) | [app.js:2080](app.js#L2080) | 🛡️ Autentikasi & Hak Akses Panitia | Auth functions | 1x |
| 66 | [**`closeLoginModal()`**](#closeloginmodal) | [app.js:2087](app.js#L2087) | 🛡️ Autentikasi & Hak Akses Panitia | Menutup modal dialog login PIN panitia. | 2x |
| 67 | [**`verifyAdminPin()`**](#verifyadminpin) | [app.js:2091](app.js#L2091) | 🛡️ Autentikasi & Hak Akses Panitia | Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif p... | 1x |
| 68 | [**`logoutAdmin()`**](#logoutadmin) | [app.js:2107](app.js#L2107) | 🛡️ Autentikasi & Hak Akses Panitia | Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (r... | 1x |
| 69 | [**`renderRegistrationUI()`**](#renderregistrationui) | [app.js:2116](app.js#L2116) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderRegistrationUI | 4x |
| 70 | [**`toggleRegistrationStatus()`**](#toggleregistrationstatus) | [app.js:2182](app.js#L2182) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk toggleRegistrationStatus | 5x |
| 71 | [**`resetMCGGPointsAndDraw()`**](#resetmcggpointsanddraw) | [app.js:2203](app.js#L2203) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetMCGGPointsAndDraw | 2x |
| 72 | [**`updateAuthUI()`**](#updateauthui) | [app.js:2246](app.js#L2246) | 🛡️ Autentikasi & Hak Akses Panitia | Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock,... | 12x |
| 73 | [**`switchTab()`**](#switchtab) | [app.js:2414](app.js#L2414) | 🔧 Helper & UI Utility | Navigation Tabs | 5x |
| 74 | [**`openIdCardLightbox()`**](#openidcardlightbox) | [app.js:2432](app.js#L2432) | 🆔 Modal Dialog & Bukti ID Card | Lightbox for Viewing Full ID Card | 2x |
| 75 | [**`closeIdCardLightbox()`**](#closeidcardlightbox) | [app.js:2471](app.js#L2471) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal pop-up lightbox preview ID Card pegawai. | 1x |
| 76 | [**`escapeHtml()`**](#escapehtml) | [app.js:2476](app.js#L2476) | 🔧 Helper & UI Utility | Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dal... | 41x |
| 77 | [**`updateRegistrationDatalists()`**](#updateregistrationdatalists) | [app.js:2488](app.js#L2488) | 📦 Modul Aplikasi Umum | Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit... | 3x |
| 78 | [**`handleTeamNameInput()`**](#handleteamnameinput) | [app.js:2502](app.js#L2502) | 📦 Modul Aplikasi Umum | Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edi... | 2x |
| 79 | [**`handleMcggNameInput()`**](#handlemcggnameinput) | [app.js:2535](app.js#L2535) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fu... | 2x |
| 80 | [**`handleRegister()`**](#handleregister) | [app.js:2568](app.js#L2568) | 👥 Manajemen Peserta & Roster | Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Ca... | 1x |
| 81 | [**`setParticipantStatus()`**](#setparticipantstatus) | [app.js:3108](app.js#L3108) | 👥 Manajemen Peserta & Roster | Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets | 2x |
| 82 | [**`deleteParticipant()`**](#deleteparticipant) | [app.js:3149](app.js#L3149) | 👥 Manajemen Peserta & Roster | Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat k... | 1x |
| 83 | [**`filterList()`**](#filterlist) | [app.js:3196](app.js#L3196) | 🔧 Helper & UI Utility | Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/... | 3x |
| 84 | [**`openEditParticipantModal()`**](#openeditparticipantmodal) | [app.js:3204](app.js#L3204) | 🆔 Modal Dialog & Bukti ID Card | ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION | 1x |
| 85 | [**`closeEditParticipantModal()`**](#closeeditparticipantmodal) | [app.js:3302](app.js#L3302) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog edit peserta. | 3x |
| 86 | [**`handleEditLogoUpload()`**](#handleeditlogoupload) | [app.js:3307](app.js#L3307) | 🆔 Modal Dialog & Bukti ID Card | Handle logo upload in Admin Edit modal | 1x |
| 87 | [**`handleEditRosterIdCardUpload()`**](#handleeditrosteridcardupload) | [app.js:3323](app.js#L3323) | 🆔 Modal Dialog & Bukti ID Card | Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedi... | 1x |
| 88 | [**`saveParticipantEdit()`**](#saveparticipantedit) | [app.js:3334](app.js#L3334) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk saveParticipantEdit | 1x |
| 89 | [**`viewRosterDetail()`**](#viewrosterdetail) | [app.js:3458](app.js#L3458) | 👥 Manajemen Peserta & Roster | Modal Detail Roster Lengkap & ID Card Per-Pemain | 1x |
| 90 | [**`closeDetailModal()`**](#closedetailmodal) | [app.js:3517](app.js#L3517) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog rincian roster tim dan galeri ID Card. | 1x |
| 91 | [**`renderParticipants()`**](#renderparticipants) | [app.js:3522](app.js#L3522) | 👥 Manajemen Peserta & Roster | Render Participant Table (Featuring Nickname, ID Card count per-player, and... | 13x |
| 92 | [**`getVerifiedMLBBTeams()`**](#getverifiedmlbbteams) | [app.js:3665](app.js#L3665) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE | 4x |
| 93 | [**`getActiveMLBBFormat()`**](#getactivemlbbformat) | [app.js:3673](app.js#L3673) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N... | 2x |
| 94 | [**`changeTournamentFormat()`**](#changetournamentformat) | [app.js:3692](app.js#L3692) | 🔧 Helper & UI Utility | Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP... | 1x |
| 95 | [**`renderCurrentMLBBFormat()`**](#rendercurrentmlbbformat) | [app.js:3708](app.js#L3708) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderCurrentMLBBFormat | 16x |
| 96 | [**`shuffleAndGenerateTournament()`**](#shuffleandgeneratetournament) | [app.js:3734](app.js#L3734) | 📦 Modul Aplikasi Umum | Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum di... | 1x |
| 97 | [**`toggleLockMLBBGroup()`**](#togglelockmlbbgroup) | [app.js:3753](app.js#L3753) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE) | 1x |
| 98 | [**`isAllMLBBGroupMatchesFinished()`**](#isallmlbbgroupmatchesfinished) | [app.js:3773](app.js#L3773) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan m... | 2x |
| 99 | [**`evaluateMLBBTieBreaker()`**](#evaluatemlbbtiebreaker) | [app.js:3784](app.js#L3784) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosa... | 2x |
| 100 | [**`resolveMLBBTieBreaker()`**](#resolvemlbbtiebreaker) | [app.js:3809](app.js#L3809) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan... | 3x |
| 101 | [**`proceedToMLBBStage2()`**](#proceedtomlbbstage2) | [app.js:3828](app.js#L3828) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Ba... | 3x |
| 102 | [**`resetMLBBToStage1()`**](#resetmlbbtostage1) | [app.js:3855](app.js#L3855) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor ji... | 2x |
| 103 | [**`resetTotalMLBBGroupAndBracket()`**](#resettotalmlbbgroupandbracket) | [app.js:3867](app.js#L3867) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetTotalMLBBGroupAndBracket | 1x |
| 104 | [**`toggleLockMCGGLobbies()`**](#togglelockmcgglobbies) | [app.js:3886](app.js#L3886) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM... | 1x |
| 105 | [**`validateMCGGDuplicateCommander()`**](#validatemcggduplicatecommander) | [app.js:3908](app.js#L3908) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2) | 3x |
| 106 | [**`saveTournamentStateOnly()`**](#savetournamentstateonly) | [app.js:3931](app.js#L3931) | ☁️ Sinkronisasi Google Sheets & State Storage | 4. SIMPAN CEPAT KHUSUS STATE BAGAN & POIN (1 REQUEST RINGAN) | 13x |
| 107 | [**`generateBracket()`**](#generatebracket) | [app.js:3983](app.js#L3983) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- KNOCKOUT BRACKET --- | 3x |
| 108 | [**`pickWinner()`**](#pickwinner) | [app.js:4036](app.js#L4036) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk pickWinner | 2x |
| 109 | [**`renderBracket()`**](#renderbracket) | [app.js:4056](app.js#L4056) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderBracket | 4x |
| 110 | [**`allocateMLBBGroups()`**](#allocatemlbbgroups) | [app.js:4131](app.js#L4131) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi)... | 2x |
| 111 | [**`getPrefix()`**](#getprefix) | [app.js:4143](app.js#L4143) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getPrefix | 9x |
| 112 | [**`getDept()`**](#getdept) | [app.js:4151](app.js#L4151) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getDept | 6x |
| 113 | [**`isInvited()`**](#isinvited) | [app.js:4162](app.js#L4162) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInvited | 5x |
| 114 | [**`getOverBaseCount()`**](#getoverbasecount) | [app.js:4230](app.js#L4230) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getOverBaseCount | 1x |
| 115 | [**`canAccept()`**](#canaccept) | [app.js:4232](app.js#L4232) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk canAccept | 0x |
| 116 | [**`hasPrefixConflict()`**](#hasprefixconflict) | [app.js:4266](app.js#L4266) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasPrefixConflict | 2x |
| 117 | [**`hasDeptConflict()`**](#hasdeptconflict) | [app.js:4267](app.js#L4267) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasDeptConflict | 1x |
| 118 | [**`generateGroupStage()`**](#generategroupstage) | [app.js:4321](app.js#L4321) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk generateGroupStage | 3x |
| 119 | [**`updateGroupRecord()`**](#updategrouprecord) | [app.js:4358](app.js#L4358) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk updateGroupRecord | 4x |
| 120 | [**`initGroupPlayoff()`**](#initgroupplayoff) | [app.js:4371](app.js#L4371) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seed... | 7x |
| 121 | [**`pickGroupPlayoffWinner()`**](#pickgroupplayoffwinner) | [app.js:4537](app.js#L4537) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya k... | 2x |
| 122 | [**`promptPlayoffMVP()`**](#promptplayoffmvp) | [app.js:4704](app.js#L4704) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk promptPlayoffMVP | 2x |
| 123 | [**`renderGroupStageUI()`**](#rendergroupstageui) | [app.js:4743](app.js#L4743) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupStageUI | 12x |
| 124 | [**`setMLBBActiveWeek()`**](#setmlbbactiveweek) | [app.js:5006](app.js#L5006) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveWeek | 3x |
| 125 | [**`setMLBBActiveDayFilter()`**](#setmlbbactivedayfilter) | [app.js:5014](app.js#L5014) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveDayFilter | 6x |
| 126 | [**`setMLBBActiveGroupFilter()`**](#setmlbbactivegroupfilter) | [app.js:5019](app.js#L5019) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveGroupFilter | 1x |
| 127 | [**`getGroupFixtures()`**](#getgroupfixtures) | [app.js:5025](app.js#L5025) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) --- | 5x |
| 128 | [**`getGroupRestingTeams()`**](#getgrouprestingteams) | [app.js:5154](app.js#L5154) | 📦 Modul Aplikasi Umum | Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di... | 1x |
| 129 | [**`setGroupMatchScore()`**](#setgroupmatchscore) | [app.js:5165](app.js#L5165) | 📦 Modul Aplikasi Umum | Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara ... | 2x |
| 130 | [**`setGroupMatchMVP()`**](#setgroupmatchmvp) | [app.js:5193](app.js#L5193) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk setGroupMatchMVP | 2x |
| 131 | [**`promptGroupMatchMVP()`**](#promptgroupmatchmvp) | [app.js:5207](app.js#L5207) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk promptGroupMatchMVP | 2x |
| 132 | [**`resetGroupMatchScore()`**](#resetgroupmatchscore) | [app.js:5239](app.js#L5239) | 📦 Modul Aplikasi Umum | Mereset skor pertandingan grup MLBB ke status belum bertanding. | 0x |
| 133 | [**`recalculateGroupStandingsFromFixtures()`**](#recalculategroupstandingsfromfixtures) | [app.js:5250](app.js#L5250) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan selu... | 2x |
| 134 | [**`renderGroupFixturesUI()`**](#rendergroupfixturesui) | [app.js:5276](app.js#L5276) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupFixturesUI | 7x |
| 135 | [**`renderGroupPlayoffTree()`**](#rendergroupplayofftree) | [app.js:5527](app.js#L5527) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau statu... | 4x |
| 136 | [**`changeMCGGLobby()`**](#changemcgglobby) | [app.js:5649](app.js#L5649) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MCGG MULTI-LOBBY STANDINGS | 0x |
| 137 | [**`getCommanderById()`**](#getcommanderbyid) | [app.js:5655](app.js#L5655) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mencari objek data commander dari master list berdasarkan ID, nama hero, at... | 1x |
| 138 | [**`updateCommanderPoolFromSetup()`**](#updatecommanderpoolfromsetup) | [app.js:5668](app.js#L5668) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk updateCommanderPoolFromSetup | 1x |
| 139 | [**`getVerifiedMCGGPlayers()`**](#getverifiedmcggplayers) | [app.js:5727](app.js#L5727) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getVerifiedMCGGPlayers | 2x |
| 140 | [**`syncMCGGPlayers()`**](#syncmcggplayers) | [app.js:5735](app.js#L5735) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGPlayers | 8x |
| 141 | [**`findPrevious()`**](#findprevious) | [app.js:5747](app.js#L5747) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 142 | [**`mapPlayerObj()`**](#mapplayerobj) | [app.js:5759](app.js#L5759) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |
| 143 | [**`allocateLobbiesByCluster()`**](#allocatelobbiesbycluster) | [app.js:5778](app.js#L5778) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase ... | 3x |
| 144 | [**`shuffleMCGGPlayers()`**](#shufflemcggplayers) | [app.js:5953](app.js#L5953) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGGPlayers | 2x |
| 145 | [**`isMCGGLobbyPointsFull()`**](#ismcgglobbypointsfull) | [app.js:5970](app.js#L5970) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGLobbyPointsFull | 4x |
| 146 | [**`isMCGGQualificationFull()`**](#ismcggqualificationfull) | [app.js:5976](app.js#L5976) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3... | 11x |
| 147 | [**`isMCGGSemiFinalFull()`**](#ismcggsemifinalfull) | [app.js:5982](app.js#L5982) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGSemiFinalFull | 1x |
| 148 | [**`syncMCGGSemiFinal()`**](#syncmcggsemifinal) | [app.js:5987](app.js#L5987) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGSemiFinal | 2x |
| 149 | [**`sortFn()`**](#sortfn) | [app.js:5992](app.js#L5992) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk sortFn | 0x |
| 150 | [**`findPrevSemi()`**](#findprevsemi) | [app.js:6030](app.js#L6030) | 📦 Modul Aplikasi Umum | Preserve poin semifinal jika sudah ada | 1x |
| 151 | [**`mapSemiPlayer()`**](#mapsemiplayer) | [app.js:6038](app.js#L6038) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapSemiPlayer | 0x |
| 152 | [**`syncMCGGGrandFinal()`**](#syncmcgggrandfinal) | [app.js:6060](app.js#L6060) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final se... | 7x |
| 153 | [**`sortFn()`**](#sortfn) | [app.js:6061](app.js#L6061) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk sortFn | 0x |
| 154 | [**`findPrevInArr()`**](#findprevinarr) | [app.js:6081](app.js#L6081) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevInArr | 1x |
| 155 | [**`mapGFPlayer()`**](#mapgfplayer) | [app.js:6090](app.js#L6090) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapGFPlayer | 4x |
| 156 | [**`updateMCGGRank()`**](#updatemcggrank) | [app.js:6158](app.js#L6158) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin... | 1x |
| 157 | [**`updateMCGGCommander()`**](#updatemcggcommander) | [app.js:6196](app.js#L6196) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui pilihan commander pemain dan memicu validasi duplikasi commande... | 1x |
| 158 | [**`updateMCGGPenalty()`**](#updatemcggpenalty) | [app.js:6231](app.js#L6231) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumul... | 1x |
| 159 | [**`renderLobbyCommanderDrawPanelHtml()`**](#renderlobbycommanderdrawpanelhtml) | [app.js:6270](app.js#L6270) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI) | 5x |
| 160 | [**`drawMatchPool()`**](#drawmatchpool) | [app.js:6520](app.js#L6520) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 1: Acak 8 Pool ... | 2x |
| 161 | [**`assignMatchPoolToPlayers()`**](#assignmatchpooltoplayers) | [app.js:6595](app.js#L6595) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 2: Pasangkan 8 ... | 2x |
| 162 | [**`toggleLockMatchDraw()`**](#togglelockmatchdraw) | [app.js:6646](app.js#L6646) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 3: Kunci Match ... | 1x |
| 163 | [**`nextMatchDraw()`**](#nextmatchdraw) | [app.js:6673](app.js#L6673) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 4: Lanjut ke Ma... | 1x |
| 164 | [**`drawMatchCommanders()`**](#drawmatchcommanders) | [app.js:6690](app.js#L6690) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Backward compatibility helper | 3x |
| 165 | [**`switchLobbyDrawView()`**](#switchlobbydrawview) | [app.js:6696](app.js#L6696) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk switchLobbyDrawView | 5x |
| 166 | [**`resetLobbyDraw()`**](#resetlobbydraw) | [app.js:6702](app.js#L6702) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetLobbyDraw | 2x |
| 167 | [**`copyCommanderDrawText()`**](#copycommanderdrawtext) | [app.js:6723](app.js#L6723) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk... | 2x |
| 168 | [**`showMatch3DraftInfo()`**](#showmatch3draftinfo) | [app.js:6758](app.js#L6758) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk showMatch3DraftInfo | 1x |
| 169 | [**`changeCommanderDrawTarget()`**](#changecommanderdrawtarget) | [app.js:6769](app.js#L6769) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk changeCommanderDrawTarget | 1x |
| 170 | [**`setDrawTargetAndScroll()`**](#setdrawtargetandscroll) | [app.js:6776](app.js#L6776) | 🔧 Helper & UI Utility | Fungsi operasional untuk setDrawTargetAndScroll | 0x |
| 171 | [**`scrollToMCGGLobby()`**](#scrolltomcgglobby) | [app.js:6781](app.js#L6781) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk scrollToMCGGLobby | 3x |
| 172 | [**`renderMCGGLobbyAnchorBar()`**](#rendermcgglobbyanchorbar) | [app.js:6788](app.js#L6788) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbyAnchorBar | 2x |
| 173 | [**`renderMCGGLobbySelectOptions()`**](#rendermcgglobbyselectoptions) | [app.js:6824](app.js#L6824) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbySelectOptions | 3x |
| 174 | [**`renderMCGGTable()`**](#rendermcggtable) | [app.js:6867](app.js#L6867) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang... | 29x |
| 175 | [**`getLobbyShortLabel()`**](#getlobbyshortlabel) | [app.js:6924](app.js#L6924) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getLobbyShortLabel | 0x |
| 176 | [**`renderLobbyRowsHtml()`**](#renderlobbyrowshtml) | [app.js:7094](app.js#L7094) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderLobbyRowsHtml | 5x |
| 177 | [**`buildRoundCell()`**](#buildroundcell) | [app.js:7210](app.js#L7210) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk buildRoundCell | 3x |
| 178 | [**`buildPenaltySelect()`**](#buildpenaltyselect) | [app.js:7287](app.js#L7287) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk buildPenaltySelect | 1x |
| 179 | [**`loadSampleData()`**](#loadsampledata) | [app.js:7311](app.js#L7311) | 📦 Modul Aplikasi Umum | Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation... | 1x |
| 180 | [**`clearAllData()`**](#clearalldata) | [app.js:7515](app.js#L7515) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearAllData | 1x |
| 181 | [**`setMLBBViewMode()`**](#setmlbbviewmode) | [app.js:7590](app.js#L7590) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- TAMPILAN VIEW SWITCHER MLBB --- | 5x |
| 182 | [**`setMCGGViewMode()`**](#setmcggviewmode) | [app.js:7640](app.js#L7640) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | --- TAMPILAN VIEW SWITCHER MCGG --- | 4x |
| 183 | [**`selectMLBBStageNode()`**](#selectmlbbstagenode) | [app.js:7673](app.js#L7673) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | ---------------------------------------------------------------------------... | 9x |
| 184 | [**`renderMLBBInteractiveHubUI()`**](#rendermlbbinteractivehubui) | [app.js:7684](app.js#L7684) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBInteractiveHubUI | 7x |
| 185 | [**`renderMLBBDetailPanelContent()`**](#rendermlbbdetailpanelcontent) | [app.js:7892](app.js#L7892) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBDetailPanelContent | 1x |
| 186 | [**`selectMCGGFlowNode()`**](#selectmcggflownode) | [app.js:8165](app.js#L8165) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | ---------------------------------------------------------------------------... | 7x |
| 187 | [**`renderMCGGInteractiveHubUI()`**](#rendermcgginteractivehubui) | [app.js:8170](app.js#L8170) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGInteractiveHubUI | 5x |
| 188 | [**`renderMCGGDetailPanelContent()`**](#rendermcggdetailpanelcontent) | [app.js:8298](app.js#L8298) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGDetailPanelContent | 1x |
| 189 | [**`shuffleMCGG32Besar()`**](#shufflemcgg32besar) | [app.js:8507](app.js#L8507) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGG32Besar | 1x |
| 190 | [**`getTargetSpreadsheet()`**](#gettargetspreadsheet) | [google_apps_script.js:38](google_apps_script.js#L38) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet b... | 5x |
| 191 | [**`safeSetSharing()`**](#safesetsharing) | [google_apps_script.js:58](google_apps_script.js#L58) | ⚙️ Backend Apps Script Utility | Mengatur permission sharing secara aman. Menghindari error 'Access denied: ... | 6x |
| 192 | [**`getOrCreateUploadFolder()`**](#getorcreateuploadfolder) | [google_apps_script.js:76](google_apps_script.js#L76) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat folder upload utama secara andal. Jika TARGET_FOLD... | 4x |
| 193 | [**`testDriveAuth()`**](#testdriveauth) | [google_apps_script.js:115](google_apps_script.js#L115) | ⚙️ Backend Apps Script Utility | FUNGSI UJI OTORISASI GOOGLE DRIVE & SPREADSHEET PENTING: Pilih fungsi 'test... | 0x |
| 194 | [**`getOrCreateSubFolder()`**](#getorcreatesubfolder) | [google_apps_script.js:150](google_apps_script.js#L150) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat subfolder tim/kategori secara andal. / | 2x |
| 195 | [**`relinkExistingFailedIDCards()`**](#relinkexistingfailedidcards) | [google_apps_script.js:194](google_apps_script.js#L194) | ⚙️ Backend Apps Script Utility | FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ... | 0x |
| 196 | [**`ensureRelationalSheetsExist()`**](#ensurerelationalsheetsexist) | [google_apps_script.js:313](google_apps_script.js#L313) | 🗄️ Google Sheets Schema & Master Data | Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Paren... | 2x |
| 197 | [**`getMlbbTimListing()`**](#getmlbbtimlisting) | [google_apps_script.js:361](google_apps_script.js#L361) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' A... | 3x |
| 198 | [**`getMlbbPesertaListing()`**](#getmlbbpesertalisting) | [google_apps_script.js:459](google_apps_script.js#L459) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Pes... | 2x |
| 199 | [**`getMcggListing()`**](#getmcgglisting) | [google_apps_script.js:527](google_apps_script.js#L527) | 🗄️ Google Sheets Schema & Master Data | Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan... | 3x |
| 200 | [**`doGet()`**](#doget) | [google_apps_script.js:661](google_apps_script.js#L661) | 🌐 Web API & Endpoint Webhook | 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE | 0x |
| 201 | [**`helperParseRank()`**](#helperparserank) | [google_apps_script.js:875](google_apps_script.js#L875) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk helperParseRank | 3x |
| 202 | [**`doPost()`**](#dopost) | [google_apps_script.js:1081](google_apps_script.js#L1081) | 🌐 Web API & Endpoint Webhook | 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE | 1x |
| 203 | [**`saveBase64Image()`**](#savebase64image) | [google_apps_script.js:1133](google_apps_script.js#L1133) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk saveBase64Image | 4x |
| 204 | [**`getOrCreateSheet()`**](#getorcreatesheet) | [google_apps_script.js:1721](google_apps_script.js#L1721) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. / | 0x |
| 205 | [**`syncDedicatedTournamentSheets()`**](#syncdedicatedtournamentsheets) | [google_apps_script.js:1733](google_apps_script.js#L1733) | 🗄️ Google Sheets Schema & Master Data | Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah ... | 7x |
| 206 | [**`fmtRank()`**](#fmtrank) | [google_apps_script.js:1912](google_apps_script.js#L1912) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk fmtRank | 3x |
| 207 | [**`syncListBagan()`**](#synclistbagan) | [google_apps_script.js:1981](google_apps_script.js#L1981) | ⚙️ Backend Apps Script Utility | Wrapper kompatibilitas untuk pemicu manual / lama / | 1x |
| 208 | [**`syncListPoint()`**](#synclistpoint) | [google_apps_script.js:1985](google_apps_script.js#L1985) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPoint | 1x |
| 209 | [**`syncListPointAndCommanderMCGG()`**](#synclistpointandcommandermcgg) | [google_apps_script.js:1989](google_apps_script.js#L1989) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPointAndCommanderMCGG | 1x |
| 210 | [**`createOrUpdateAllTournamentSheets()`**](#createorupdatealltournamentsheets) | [google_apps_script.js:1993](google_apps_script.js#L1993) | 🗄️ Google Sheets Schema & Master Data | Fungsi operasional untuk createOrUpdateAllTournamentSheets | 1x |
| 211 | [**`runTest()`**](#runtest) | [functional_tests.js:26](functional_tests.js#L26) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runTest | 75x |
| 212 | [**`runAsyncTest()`**](#runasynctest) | [functional_tests.js:37](functional_tests.js#L37) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk runAsyncTest | 4x |
| 213 | [**`sanitizeNip()`**](#sanitizenip) | [functional_tests.js:85](functional_tests.js#L85) | 🔧 Helper & UI Utility | Fungsi operasional untuk sanitizeNip | 3x |
| 214 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [functional_tests.js:94](functional_tests.js#L94) | 🔧 Helper & UI Utility | Fungsi operasional untuk formatDriveImageUrl | 8x |
| 215 | [**`validateRegistration()`**](#validateregistration) | [functional_tests.js:181](functional_tests.js#L181) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk validateRegistration | 7x |
| 216 | [**`runLiveIntegrationTests()`**](#runliveintegrationtests) | [functional_tests.js:363](functional_tests.js#L363) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runLiveIntegrationTests | 1x |
| 217 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:890](functional_tests.js#L890) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 218 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:896](functional_tests.js#L896) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 4x |
| 219 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:900](functional_tests.js#L900) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 3x |
| 220 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:946](functional_tests.js#L946) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 221 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:952](functional_tests.js#L952) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 4x |
| 222 | [**`findPrevious()`**](#findprevious) | [functional_tests.js:1085](functional_tests.js#L1085) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 223 | [**`mapPlayerObj()`**](#mapplayerobj) | [functional_tests.js:1087](functional_tests.js#L1087) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |

---

## 🔍 Rincian Lengkap Fungsi dan Lokasi Pemanggilan

### ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti)

<a id="setmcggstagefilter"></a>
#### `setMCGGStageFilter(stage)`

- **Definisi:** [`app.js:2`](app.js#L2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6943`](app.js#L6943) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_1_QUAL' ? 'active' : ''}`
  - [`app.js:6946`](app.js#L6946) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_2_SEMI' ? 'active' : ''}`
  - [`app.js:6949`](app.js#L6949) — di dalam fungsi `renderMCGGTable()`
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
  - [`index.html:631`](index.html#L631) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMCGGGroupPage()" i`
  - [`app.js:6961`](app.js#L6961) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:866`](functional_tests.js#L866) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMCGGGroupPage()'), 'Harus ada fungsi prevMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="nextmcgggrouppage"></a>
#### `nextMCGGGroupPage()`

- **Definisi:** [`app.js:61`](app.js#L61)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:637`](index.html#L637) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMCGGGroupPage()" `
  - [`app.js:6964`](app.js#L6964) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:867`](functional_tests.js#L867) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMCGGGroupPage()'), 'Harus ada fungsi nextMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="gotomcgggrouppage"></a>
#### `goToMCGGGroupPage(pg)`

- **Definisi:** [`app.js:68`](app.js#L68)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6933`](app.js#L6933) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${p === mcggGroupPageIndex ? 'active' : ''}" onclick=`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="togglemcgglayoutmode"></a>
#### `toggleMCGGLayoutMode()`

- **Definisi:** [`app.js:73`](app.js#L73)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderformattedname"></a>
#### `getCommanderFormattedName(cmd)`

- **Definisi:** [`app.js:414`](app.js#L414)
- **Deskripsi:** Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika tidak ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:6743`](app.js#L6743) — di dalam fungsi `copyCommanderDrawText()`
    `const cmdName = getCommanderFormattedName(item.commander);`
  - [`app.js:7220`](app.js#L7220) — di dalam fungsi `buildRoundCell()`
    `const formattedName = getCommanderFormattedName(selectedCmd);`
  - [`app.js:7246`](app.js#L7246) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`app.js:7255`](app.js#L7255) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`functional_tests.js:706`](functional_tests.js#L706) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getCommanderFormattedName('), 'Harus ada fungsi getCommanderFormat`

<a id="rendercommandercircleshtml"></a>
#### `renderCommanderCirclesHtml(cmd, size)`

- **Definisi:** [`app.js:425`](app.js#L425)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7221`](app.js#L7221) — di dalam fungsi `buildRoundCell()`
    `const circlesHtml = renderCommanderCirclesHtml(selectedCmd, 24);`
  - [`app.js:7269`](app.js#L7269) — di dalam fungsi `buildRoundCell()`
    `? renderCommanderCirclesHtml(selectedCmd, 22)`
  - [`functional_tests.js:707`](functional_tests.js#L707) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderCommanderCirclesHtml('), 'Harus ada fungsi renderCommanderCi`

<a id="rendercommandercardvisualhtml"></a>
#### `renderCommanderCardVisualHtml(cmd)`

- **Definisi:** [`app.js:454`](app.js#L454)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6461`](app.js#L6461) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `${renderCommanderCardVisualHtml(item.commander)}`

<a id="resetmcggpointsanddraw"></a>
#### `resetMCGGPointsAndDraw()`

- **Definisi:** [`app.js:2203`](app.js#L2203)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:592`](index.html#L592) — Event `onclick`
    `<button id="btnResetMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; border-c`
  - [`functional_tests.js:837`](functional_tests.js#L837) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMCGGPointsAndDraw()'), 'Harus memiliki resetMCGGPointsAndDraw`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handlemcggnameinput"></a>
#### `handleMcggNameInput(val)`

- **Definisi:** [`app.js:2535`](app.js#L2535)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:266`](index.html#L266) — Event `oninput`
    `<input type="text" id="mcgg_name" oninput="handleMcggNameInput(this.value)" placeholder="Masukkan na`
  - [`functional_tests.js:173`](functional_tests.js#L173) — pada skenario pengujian
    `assert(appCode.includes('function handleMcggNameInput('), 'Harus ada handler handleMcggNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="togglelockmcgglobbies"></a>
#### `toggleLockMCGGLobbies()`

- **Definisi:** [`app.js:3886`](app.js#L3886)
- **Deskripsi:** Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:591`](index.html#L591) — Event `onclick`
    `<button id="btnLockMCGGLobbies" class="btn btn-outline" style="display: none; font-size: 0.85rem;" o`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="validatemcggduplicatecommander"></a>
#### `validateMCGGDuplicateCommander(lobbyKey, playerIdx)`

- **Definisi:** [`app.js:3908`](app.js#L3908)
- **Deskripsi:** 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6224`](app.js#L6224) — di dalam fungsi `updateMCGGCommander()`
    `validateMCGGDuplicateCommander(targetLobby, idx);`
  - [`app.js:6631`](app.js#L6631) — di dalam fungsi `assignMatchPoolToPlayers()`
    `validateMCGGDuplicateCommander(lobbyKey, i);`
  - [`functional_tests.js:765`](functional_tests.js#L765) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function validateMCGGDuplicateCommander('), 'Harus ada fungsi validateMCGGD`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="changemcgglobby"></a>
#### `changeMCGGLobby()`

- **Definisi:** [`app.js:5649`](app.js#L5649)
- **Deskripsi:** MCGG MULTI-LOBBY STANDINGS
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderbyid"></a>
#### `getCommanderById(id)`

- **Definisi:** [`app.js:5655`](app.js#L5655)
- **Deskripsi:** Mencari objek data commander dari master list berdasarkan ID, nama hero, atau alter name.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7215`](app.js#L7215) — di dalam fungsi `buildRoundCell()`
    `const selectedCmd = getCommanderById(selectedCmdId);`

<a id="updatecommanderpoolfromsetup"></a>
#### `updateCommanderPoolFromSetup(setupList)`

- **Definisi:** [`app.js:5668`](app.js#L5668)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1364`](app.js#L1364) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCommanderPoolFromSetup(data.mcggCommanderSetup);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getverifiedmcggplayers"></a>
#### `getVerifiedMCGGPlayers()`

- **Definisi:** [`app.js:5727`](app.js#L5727)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5736`](app.js#L5736) — di dalam fungsi `syncMCGGPlayers()`
    `let verified = getVerifiedMCGGPlayers();`
  - [`functional_tests.js:611`](functional_tests.js#L611) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMCGGPlayers()'), 'Harus ada getVerifiedMCGGPlayers()');`

<a id="syncmcggplayers"></a>
#### `syncMCGGPlayers(doShuffle = false)`

- **Definisi:** [`app.js:5735`](app.js#L5735)
- **Titik Pemanggilan (8 lokasi):**
  - [`index.html:589`](index.html#L589) — Event `onclick`
    `<button id="adminSyncMCGG" class="btn btn-primary" style="display: none; font-size: 0.85rem;" onclic`
  - [`app.js:1373`](app.js#L1373) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `syncMCGGPlayers();`
  - [`app.js:3116`](app.js#L3116) — di dalam fungsi `setParticipantStatus()`
    `syncMCGGPlayers();`
  - [`app.js:3173`](app.js#L3173) — di dalam fungsi `deleteParticipant()`
    `syncMCGGPlayers();`
  - [`app.js:3402`](app.js#L3402) — di dalam fungsi `saveParticipantEdit()`
    `syncMCGGPlayers();`
  - [`app.js:5966`](app.js#L5966) — di dalam fungsi `shuffleMCGGPlayers()`
    `syncMCGGPlayers(true);`
  - [`app.js:7512`](app.js#L7512) — di dalam fungsi `loadSampleData()`
    `syncMCGGPlayers();`
  - [`app.js:7527`](app.js#L7527) — di dalam fungsi `clearAllData()`
    `syncMCGGPlayers();`
- **Memanggil Fungsi Internal:** [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`findPrevious()`](#findprevious), [`getDepartmentCluster()`](#getdepartmentcluster), [`mapPlayerObj()`](#mapplayerobj), [`syncMCGGSemiFinal()`](#syncmcggsemifinal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`renderMCGGTable()`](#rendermcggtable), [`allocateLobbiesByCluster()`](#allocatelobbiesbycluster)

<a id="allocatelobbiesbycluster"></a>
#### `allocateLobbiesByCluster(playerList, lobbyKeys, targetCaps)`

- **Definisi:** [`app.js:5778`](app.js#L5778)
- **Deskripsi:** Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase Awal)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5920`](app.js#L5920) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, ['LOBBY_A', 'LOBBY_B'], [countA, countB]);`
  - [`app.js:5937`](app.js#L5937) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`
  - [`functional_tests.js:1094`](functional_tests.js#L1094) — pada skenario pengujian
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`

<a id="shufflemcggplayers"></a>
#### `shuffleMCGGPlayers()`

- **Definisi:** [`app.js:5953`](app.js#L5953)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:590`](index.html#L590) — Event `onclick`
    `<button id="adminShuffleMCGG" class="btn btn-gold" style="display: none; font-size: 0.85rem;" onclic`
  - [`functional_tests.js:651`](functional_tests.js#L651) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function shuffleMCGGPlayers()'), 'Harus ada fungsi shuffleMCGGPlayers()');`
- **Memanggil Fungsi Internal:** [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="ismcgglobbypointsfull"></a>
#### `isMCGGLobbyPointsFull(lobbyKey)`

- **Definisi:** [`app.js:5970`](app.js#L5970)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5979`](app.js#L5979) — di dalam fungsi `isMCGGQualificationFull()`
    `return qualKeys.every(k => isMCGGLobbyPointsFull(k));`
  - [`app.js:5984`](app.js#L5984) — di dalam fungsi `isMCGGSemiFinalFull()`
    `return isMCGGLobbyPointsFull('SEMI_A') && isMCGGLobbyPointsFull('SEMI_B');`
  - [`app.js:7163`](app.js#L7163) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isLobbyFull = isMCGGLobbyPointsFull('LOBBY_A');`
  - [`app.js:7176`](app.js#L7176) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isThisLobbyFull = isMCGGLobbyPointsFull(lobbyKey);`

<a id="ismcggqualificationfull"></a>
#### `isMCGGQualificationFull()`

- **Definisi:** [`app.js:5976`](app.js#L5976)
- **Deskripsi:** Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3 ronde).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:5991`](app.js#L5991) — di dalam fungsi `syncMCGGSemiFinal()`
    `const isQualDone = isMCGGQualificationFull();`
  - [`app.js:6135`](app.js#L6135) — di dalam fungsi `syncMCGGGrandFinal()`
    `const isFull = isMCGGQualificationFull();`
  - [`app.js:6174`](app.js#L6174) — di dalam fungsi `updateMCGGRank()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:6212`](app.js#L6212) — di dalam fungsi `updateMCGGCommander()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:6245`](app.js#L6245) — di dalam fungsi `updateMCGGPenalty()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:6531`](app.js#L6531) — di dalam fungsi `drawMatchPool()`
    `if (lobbyKey === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:6793`](app.js#L6793) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:6825`](app.js#L6825) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:6891`](app.js#L6891) — di dalam fungsi `renderMCGGTable()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:7096`](app.js#L7096) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`functional_tests.js:625`](functional_tests.js#L625) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isMCGGQualificationFull()'), 'app.js harus memeriksa apakah poin kualifikas`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="ismcggsemifinalfull"></a>
#### `isMCGGSemiFinalFull()`

- **Definisi:** [`app.js:5982`](app.js#L5982)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6105`](app.js#L6105) — di dalam fungsi `syncMCGGGrandFinal()`
    `const semiDone = isMCGGSemiFinalFull();`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="syncmcggsemifinal"></a>
#### `syncMCGGSemiFinal()`

- **Definisi:** [`app.js:5987`](app.js#L5987)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5887`](app.js#L5887) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
  - [`app.js:5944`](app.js#L5944) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`findPrevSemi()`](#findprevsemi)

<a id="syncmcgggrandfinal"></a>
#### `syncMCGGGrandFinal()`

- **Definisi:** [`app.js:6060`](app.js#L6060)
- **Deskripsi:** Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final setelah ronde kualifikasi penuh.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:2237`](app.js#L2237) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `syncMCGGGrandFinal();`
  - [`app.js:5888`](app.js#L5888) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:5921`](app.js#L5921) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:5945`](app.js#L5945) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:6189`](app.js#L6189) — di dalam fungsi `updateMCGGRank()`
    `syncMCGGGrandFinal();`
  - [`app.js:6260`](app.js#L6260) — di dalam fungsi `updateMCGGPenalty()`
    `syncMCGGGrandFinal();`
  - [`app.js:6998`](app.js#L6998) — di dalam fungsi `renderMCGGTable()`
    `syncMCGGGrandFinal();`
- **Memanggil Fungsi Internal:** [`findPrevInArr()`](#findprevinarr), [`isMCGGSemiFinalFull()`](#ismcggsemifinalfull), [`mapGFPlayer()`](#mapgfplayer), [`isMCGGQualificationFull()`](#ismcggqualificationfull)

<a id="updatemcggrank"></a>
#### `updateMCGGRank(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:6158`](app.js#L6158)
- **Deskripsi:** Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin otomatis (+4 s/d -4).
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7280`](app.js#L7280) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGRank('${lobbyKey}', ${originalIdx}, '${roundKey}', this.value)" style="p`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggcommander"></a>
#### `updateMCGGCommander(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:6196`](app.js#L6196)
- **Deskripsi:** Memperbarui pilihan commander pemain dan memicu validasi duplikasi commander ronde 2.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7276`](app.js#L7276) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGCommander('${lobbyKey}', ${originalIdx}, '${cmdKey}', this.value)" style`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggpenalty"></a>
#### `updateMCGGPenalty(arg1, arg2, arg3)`

- **Definisi:** [`app.js:6231`](app.js#L6231)
- **Deskripsi:** Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumulasi poin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7300`](app.js#L7300) — di dalam fungsi `buildPenaltySelect()`
    `<select onchange="updateMCGGPenalty('${lobbyKey}', ${originalIdx}, this.value)" style="padding: 0.25`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="renderlobbycommanderdrawpanelhtml"></a>
#### `renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)`

- **Definisi:** [`app.js:6270`](app.js#L6270)
- **Deskripsi:** MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:7066`](app.js#L7066) — di dalam fungsi `renderMCGGTable()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}`
  - [`app.js:8327`](app.js#L8327) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`app.js:8432`](app.js#L8432) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`functional_tests.js:798`](functional_tests.js#L798) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderLobbyCommanderDrawPanelHtml('), 'Harus memiliki generator pa`
  - [`functional_tests.js:802`](functional_tests.js#L802) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}'), 'Panel `
- **Memanggil Fungsi Internal:** [`switchLobbyDrawView()`](#switchlobbydrawview), [`copyCommanderDrawText()`](#copycommanderdrawtext), [`resetLobbyDraw()`](#resetlobbydraw), [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers), [`toggleLockMatchDraw()`](#togglelockmatchdraw), [`nextMatchDraw()`](#nextmatchdraw), [`showMatch3DraftInfo()`](#showmatch3draftinfo), [`renderCommanderCardVisualHtml()`](#rendercommandercardvisualhtml), [`escapeHtml()`](#escapehtml)

<a id="drawmatchcommanders"></a>
#### `drawMatchCommanders(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:6690`](app.js#L6690)
- **Deskripsi:** Backward compatibility helper
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7060`](app.js#L7060) — di dalam fungsi `renderMCGGTable()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.3rem 0.65rem; ${(!isRegistration`
  - [`functional_tests.js:741`](functional_tests.js#L741) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function drawMatchCommanders('), 'drawMatchCommanders harus tersedia');`
  - [`functional_tests.js:799`](functional_tests.js#L799) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('drawMatchCommanders(matchNum, targetLobbyKey)'), 'drawMatchCommanders harus`
- **Memanggil Fungsi Internal:** [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers)

<a id="switchlobbydrawview"></a>
#### `switchLobbyDrawView(lobbyKey, matchNum)`

- **Definisi:** [`app.js:6696`](app.js#L6696)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:6318`](app.js#L6318) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 1 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:6321`](app.js#L6321) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 2 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:6373`](app.js#L6373) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:6376`](app.js#L6376) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`functional_tests.js:800`](functional_tests.js#L800) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function switchLobbyDrawView('), 'Harus memiliki fungsi switch view match 1`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="resetlobbydraw"></a>
#### `resetLobbyDraw(lobbyKey)`

- **Definisi:** [`app.js:6702`](app.js#L6702)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6327`](app.js#L6327) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem; font-size:0.75rem; color:var(--yokke`
  - [`functional_tests.js:801`](functional_tests.js#L801) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetLobbyDraw('), 'Harus memiliki fungsi reset undian per-lobi re`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="copycommanderdrawtext"></a>
#### `copyCommanderDrawText(lobbyKey)`

- **Definisi:** [`app.js:6723`](app.js#L6723)
- **Deskripsi:** Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk dibagikan ke WhatsApp grup.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6324`](app.js#L6324) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem; margin-left:auto;`
  - [`app.js:6379`](app.js#L6379) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCom`
- **Memanggil Fungsi Internal:** [`getCommanderFormattedName()`](#getcommanderformattedname)

<a id="changecommanderdrawtarget"></a>
#### `changeCommanderDrawTarget(val)`

- **Definisi:** [`app.js:6769`](app.js#L6769)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6777`](app.js#L6777) — di dalam fungsi `setDrawTargetAndScroll()`
    `changeCommanderDrawTarget(lobbyKey);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="scrolltomcgglobby"></a>
#### `scrollToMCGGLobby(lobbyKey)`

- **Definisi:** [`app.js:6781`](app.js#L6781)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6778`](app.js#L6778) — di dalam fungsi `setDrawTargetAndScroll()`
    `scrollToMCGGLobby(lobbyKey);`
  - [`app.js:6818`](app.js#L6818) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`functional_tests.js:699`](functional_tests.js#L699) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function scrollToMCGGLobby('), 'app.js harus menyediakan fungsi scrollToMCG`

<a id="rendermcgglobbyanchorbar"></a>
#### `renderMCGGLobbyAnchorBar()`

- **Definisi:** [`app.js:6788`](app.js#L6788)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6864`](app.js#L6864) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `renderMCGGLobbyAnchorBar();`
  - [`functional_tests.js:697`](functional_tests.js#L697) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderMCGGLobbyAnchorBar('), 'app.js harus memiliki generator rend`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="rendermcgglobbyselectoptions"></a>
#### `renderMCGGLobbySelectOptions()`

- **Definisi:** [`app.js:6824`](app.js#L6824)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5890`](app.js#L5890) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:5949`](app.js#L5949) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:6888`](app.js#L6888) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGLobbySelectOptions();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar)

<a id="rendermcggtable"></a>
#### `renderMCGGTable()`

- **Definisi:** [`app.js:6867`](app.js#L6867)
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
  - [`app.js:807`](app.js#L807) — di dalam fungsi `bypassLoaderWithCache()`
    `renderMCGGTable();`
  - [`app.js:1352`](app.js#L1352) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderMCGGTable();`
  - [`app.js:2101`](app.js#L2101) — di dalam fungsi `verifyAdminPin()`
    `renderMCGGTable();`
  - [`app.js:2113`](app.js#L2113) — di dalam fungsi `logoutAdmin()`
    `renderMCGGTable();`
  - [`app.js:2198`](app.js#L2198) — di dalam fungsi `toggleRegistrationStatus()`
    `renderMCGGTable();`
  - [`app.js:2240`](app.js#L2240) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `renderMCGGTable();`
  - [`app.js:3924`](app.js#L3924) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `renderMCGGTable();`
  - [`app.js:5652`](app.js#L5652) — di dalam fungsi `changeMCGGLobby()`
    `renderMCGGTable();`
  - [`app.js:5723`](app.js#L5723) — di dalam fungsi `updateCommanderPoolFromSetup()`
    `renderMCGGTable();`
  - [`app.js:5891`](app.js#L5891) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:5950`](app.js#L5950) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:6193`](app.js#L6193) — di dalam fungsi `updateMCGGRank()`
    `renderMCGGTable();`
  - [`app.js:6228`](app.js#L6228) — di dalam fungsi `updateMCGGCommander()`
    `renderMCGGTable();`
  - [`app.js:6264`](app.js#L6264) — di dalam fungsi `updateMCGGPenalty()`
    `renderMCGGTable();`
  - [`app.js:6589`](app.js#L6589) — di dalam fungsi `drawMatchPool()`
    `renderMCGGTable();`
  - [`app.js:6640`](app.js#L6640) — di dalam fungsi `assignMatchPoolToPlayers()`
    `renderMCGGTable();`
  - [`app.js:6660`](app.js#L6660) — di dalam fungsi `toggleLockMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:6686`](app.js#L6686) — di dalam fungsi `nextMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:6699`](app.js#L6699) — di dalam fungsi `switchLobbyDrawView()`
    `renderMCGGTable();`
  - [`app.js:6719`](app.js#L6719) — di dalam fungsi `resetLobbyDraw()`
    `renderMCGGTable();`
  - [`app.js:6773`](app.js#L6773) — di dalam fungsi `changeCommanderDrawTarget()`
    `renderMCGGTable();`
  - [`app.js:7526`](app.js#L7526) — di dalam fungsi `clearAllData()`
    `renderMCGGTable();`
  - [`app.js:7549`](app.js#L7549) — cakupan global / event handler
    `renderMCGGTable();`
  - [`app.js:7666`](app.js#L7666) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGTable();`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`goToMCGGGroupPage()`](#gotomcgggrouppage), [`setMCGGStageFilter()`](#setmcggstagefilter), [`prevMCGGGroupPage()`](#prevmcgggrouppage), [`nextMCGGGroupPage()`](#nextmcgggrouppage), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`drawMatchCommanders()`](#drawmatchcommanders), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml)

<a id="getlobbyshortlabel"></a>
#### `getLobbyShortLabel(k)`

- **Definisi:** [`app.js:6924`](app.js#L6924)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="renderlobbyrowshtml"></a>
#### `renderLobbyRowsHtml(list, lobbyKey, isSingleLobby)`

- **Definisi:** [`app.js:7094`](app.js#L7094)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:6985`](app.js#L6985) — di dalam fungsi `renderMCGGTable()`
    `legacyTbody.innerHTML = renderLobbyRowsHtml(singleList, currentMCGGLobby, isSingleLobby);`
  - [`app.js:7046`](app.js#L7046) — di dalam fungsi `renderMCGGTable()`
    `const rowsHtml = renderLobbyRowsHtml(currentList, lobbyKey, isSingleLobby);`
  - [`app.js:8348`](app.js#L8348) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:8450`](app.js#L8450) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:8497`](app.js#L8497) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, 'GRAND_FINAL', false)}`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull), [`escapeHtml()`](#escapehtml), [`buildRoundCell()`](#buildroundcell), [`buildPenaltySelect()`](#buildpenaltyselect)

<a id="buildpenaltyselect"></a>
#### `buildPenaltySelect(player, targetLobby)`

- **Definisi:** [`app.js:7287`](app.js#L7287)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7202`](app.js#L7202) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td style="text-align: center;">${buildPenaltySelect(p, lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`updateMCGGPenalty()`](#updatemcggpenalty)

<a id="setmcggviewmode"></a>
#### `setMCGGViewMode(mode)`

- **Definisi:** [`app.js:7640`](app.js#L7640)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MCGG ---
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:614`](index.html#L614) — Event `onclick`
    `<button type="button" id="btnViewMcggHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:617`](index.html#L617) — Event `onclick`
    `<button type="button" id="btnViewMcggLobbies" class="btn btn-outline" style="font-size: 0.8rem; padd`
  - [`app.js:2424`](app.js#L2424) — di dalam fungsi `switchTab()`
    `setMCGGViewMode('HUB');`
  - [`functional_tests.js:1171`](functional_tests.js#L1171) — pada skenario pengujian
    `assert(appCode.includes('function setMCGGViewMode('), 'app.js harus memiliki fungsi setMCGGViewMode'`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGTable()`](#rendermcggtable)

<a id="selectmcggflownode"></a>
#### `selectMCGGFlowNode(nodeKey)`

- **Definisi:** [`app.js:8165`](app.js#L8165)
- **Deskripsi:** ---------------------------------------------------------------------------- 2. MASTER-DETAIL INTERACTIVE HUB MCGG ----------------------------------------------------------------------------
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:8201`](app.js#L8201) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:8224`](app.js#L8224) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE2_WILDCARD' ? 'active' : ''}" oncl`
  - [`app.js:8234`](app.js#L8234) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:8255`](app.js#L8255) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_A' ? 'active' : ''}" onclic`
  - [`app.js:8259`](app.js#L8259) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_B' ? 'active' : ''}" onclic`
  - [`app.js:8279`](app.js#L8279) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'STAGE4_GRAND_FINAL' ? 'active'`
  - [`functional_tests.js:1173`](functional_tests.js#L1173) — pada skenario pengujian
    `assert(appCode.includes('function selectMCGGFlowNode('), 'app.js harus memiliki selectMCGGFlowNode')`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

<a id="rendermcgginteractivehubui"></a>
#### `renderMCGGInteractiveHubUI()`

- **Definisi:** [`app.js:8170`](app.js#L8170)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:6881`](app.js#L6881) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:7659`](app.js#L7659) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:8167`](app.js#L8167) — di dalam fungsi `selectMCGGFlowNode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:8512`](app.js#L8512) — di dalam fungsi `shuffleMCGG32Besar()`
    `renderMCGGInteractiveHubUI();`
  - [`functional_tests.js:1172`](functional_tests.js#L1172) — pada skenario pengujian
    `assert(appCode.includes('function renderMCGGInteractiveHubUI()'), 'app.js harus memiliki renderMCGGI`
- **Memanggil Fungsi Internal:** [`selectMCGGFlowNode()`](#selectmcggflownode), [`renderMCGGDetailPanelContent()`](#rendermcggdetailpanelcontent)

<a id="rendermcggdetailpanelcontent"></a>
#### `renderMCGGDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:8298`](app.js#L8298)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8292`](app.js#L8292) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `rightHtml += renderMCGGDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`shuffleMCGG32Besar()`](#shufflemcgg32besar)

<a id="shufflemcgg32besar"></a>
#### `shuffleMCGG32Besar()`

- **Definisi:** [`app.js:8507`](app.js#L8507)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8392`](app.js#L8392) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `<button class="btn btn-gold" style="padding:0.3rem 0.75rem;font-size:0.78rem;" onclick="shuffleMCGG3`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

---

### ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine)

<a id="prevmlbbgrouppage"></a>
#### `prevMLBBGroupPage()`

- **Definisi:** [`app.js:13`](app.js#L13)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:534`](index.html#L534) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMLBBGroupPage()" i`
  - [`app.js:4795`](app.js#L4795) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:847`](functional_tests.js#L847) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMLBBGroupPage()'), 'Harus ada fungsi prevMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="nextmlbbgrouppage"></a>
#### `nextMLBBGroupPage()`

- **Definisi:** [`app.js:20`](app.js#L20)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:540`](index.html#L540) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMLBBGroupPage()" `
  - [`app.js:4798`](app.js#L4798) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:848`](functional_tests.js#L848) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMLBBGroupPage()'), 'Harus ada fungsi nextMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="gotomlbbgrouppage"></a>
#### `goToMLBBGroupPage(pg)`

- **Definisi:** [`app.js:27`](app.js#L27)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4786`](app.js#L4786) — di dalam fungsi `renderGroupStageUI()`
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

- **Definisi:** [`app.js:3665`](app.js#L3665)
- **Deskripsi:** TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:3681`](app.js#L3681) — di dalam fungsi `getActiveMLBBFormat()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:3993`](app.js#L3993) — di dalam fungsi `generateBracket()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:4322`](app.js#L4322) — di dalam fungsi `generateGroupStage()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`functional_tests.js:576`](functional_tests.js#L576) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMLBBTeams()'), 'Harus ada fungsi getVerifiedMLBBTeams()`

<a id="getactivemlbbformat"></a>
#### `getActiveMLBBFormat()`

- **Definisi:** [`app.js:3673`](app.js#L3673)
- **Deskripsi:** Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N >= 12 tim).
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4329`](app.js#L4329) — di dalam fungsi `generateGroupStage()`
    `const activeFormat = getActiveMLBBFormat();`
  - [`functional_tests.js:577`](functional_tests.js#L577) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getActiveMLBBFormat()'), 'Harus ada fungsi getActiveMLBBFormat()')`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="rendercurrentmlbbformat"></a>
#### `renderCurrentMLBBFormat()`

- **Definisi:** [`app.js:3708`](app.js#L3708)
- **Titik Pemanggilan (16 lokasi):**
  - [`app.js:790`](app.js#L790) — di dalam fungsi `confirmResetBaganWithPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:806`](app.js#L806) — di dalam fungsi `bypassLoaderWithCache()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1372`](app.js#L1372) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2100`](app.js#L2100) — di dalam fungsi `verifyAdminPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2112`](app.js#L2112) — di dalam fungsi `logoutAdmin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2197`](app.js#L2197) — di dalam fungsi `toggleRegistrationStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3115`](app.js#L3115) — di dalam fungsi `setParticipantStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3172`](app.js#L3172) — di dalam fungsi `deleteParticipant()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3401`](app.js#L3401) — di dalam fungsi `saveParticipantEdit()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3705`](app.js#L3705) — di dalam fungsi `changeTournamentFormat()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3769`](app.js#L3769) — di dalam fungsi `toggleLockMLBBGroup()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3850`](app.js#L3850) — di dalam fungsi `proceedToMLBBStage2()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3863`](app.js#L3863) — di dalam fungsi `resetMLBBToStage1()`
    `renderCurrentMLBBFormat();`
  - [`app.js:7511`](app.js#L7511) — di dalam fungsi `loadSampleData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:7525`](app.js#L7525) — di dalam fungsi `clearAllData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:7548`](app.js#L7548) — cakupan global / event handler
    `renderCurrentMLBBFormat();`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="togglelockmlbbgroup"></a>
#### `toggleLockMLBBGroup()`

- **Definisi:** [`app.js:3753`](app.js#L3753)
- **Deskripsi:** 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:484`](index.html#L484) — Event `onclick`
    `<button id="btnLockMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="isallmlbbgroupmatchesfinished"></a>
#### `isAllMLBBGroupMatchesFinished()`

- **Definisi:** [`app.js:3773`](app.js#L3773)
- **Deskripsi:** Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan memiliki pemenang.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3834`](app.js#L3834) — di dalam fungsi `proceedToMLBBStage2()`
    `if (!isAllMLBBGroupMatchesFinished()) {`
  - [`functional_tests.js:752`](functional_tests.js#L752) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function isAllMLBBGroupMatchesFinished()'), 'Harus ada fungsi isAllMLBBGrou`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="evaluatemlbbtiebreaker"></a>
#### `evaluateMLBBTieBreaker()`

- **Definisi:** [`app.js:3784`](app.js#L3784)
- **Deskripsi:** Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosan babak Playoff.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3838`](app.js#L3838) — di dalam fungsi `proceedToMLBBStage2()`
    `if (evaluateMLBBTieBreaker()) {`
  - [`functional_tests.js:759`](functional_tests.js#L759) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function evaluateMLBBTieBreaker()'), 'Harus ada fungsi evaluateMLBBTieBreak`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal)

<a id="resolvemlbbtiebreaker"></a>
#### `resolveMLBBTieBreaker(winnerTeam)`

- **Definisi:** [`app.js:3809`](app.js#L3809)
- **Deskripsi:** Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan +1 poin penentu ke klasemen.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4944`](app.js#L4944) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:4945`](app.js#L4945) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`functional_tests.js:760`](functional_tests.js#L760) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resolveMLBBTieBreaker('), 'Harus ada fungsi resolveMLBBTieBreaker'`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="proceedtomlbbstage2"></a>
#### `proceedToMLBBStage2()`

- **Definisi:** [`app.js:3828`](app.js#L3828)
- **Deskripsi:** Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Bagan Playoff).
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:485`](index.html#L485) — Event `onclick`
    `<button id="btnProceedMLBBStage2" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`app.js:5544`](app.js#L5544) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: var(--`
  - [`functional_tests.js:753`](functional_tests.js#L753) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function proceedToMLBBStage2()'), 'Harus ada fungsi proceedToMLBBStage2');`
- **Memanggil Fungsi Internal:** [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`renderGroupStageUI()`](#rendergroupstageui), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resetmlbbtostage1"></a>
#### `resetMLBBToStage1()`

- **Definisi:** [`app.js:3855`](app.js#L3855)
- **Deskripsi:** Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor jika diperlukan.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:486`](index.html#L486) — Event `onclick`
    `<button id="btnResetMLBBStage1" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`functional_tests.js:754`](functional_tests.js#L754) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMLBBToStage1()'), 'Harus ada fungsi resetMLBBToStage1');`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resettotalmlbbgroupandbracket"></a>
#### `resetTotalMLBBGroupAndBracket()`

- **Definisi:** [`app.js:3867`](app.js#L3867)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:487`](index.html#L487) — Event `onclick`
    `<button id="btnResetTotalMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5r`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openResetBaganModal()`](#openresetbaganmodal)

<a id="generatebracket"></a>
#### `generateBracket(doShuffle = false)`

- **Definisi:** [`app.js:3983`](app.js#L3983)
- **Deskripsi:** --- KNOCKOUT BRACKET ---
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:475`](index.html#L475) — Event `onchange`
    `<select id="bracketSize" onchange="generateBracket()" style="padding: 0.5rem 0.8rem; font-size: 0.85`
  - [`app.js:3698`](app.js#L3698) — di dalam fungsi `changeTournamentFormat()`
    `generateBracket(false);`
  - [`app.js:3744`](app.js#L3744) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateBracket(true);`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="renderbracket"></a>
#### `renderBracket()`

- **Definisi:** [`app.js:4056`](app.js#L4056)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:3725`](app.js#L3725) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderBracket();`
  - [`app.js:3989`](app.js#L3989) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:4033`](app.js#L4033) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:4053`](app.js#L4053) — di dalam fungsi `pickWinner()`
    `renderBracket();`
- **Memanggil Fungsi Internal:** [`pickWinner()`](#pickwinner)

<a id="allocatemlbbgroups"></a>
#### `allocateMLBBGroups(teamsList, groupNames, doShuffle = false)`

- **Definisi:** [`app.js:4131`](app.js#L4131)
- **Deskripsi:** Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi): 1. Acak tim invited ke masing-masing group (tidak boleh ada di group yang sama). 2. Acak urutan tim sisanya (tim reguler). 3. Masukkan tim sesuai urutan acak ke masing-masing group: - Penempatan tim selalu memprioritaskan grup dengan jumlah peserta/tim terkecil terlebih dahulu. - Siklus 1: Cek nama depan sama (satelit) ATAU divisi sama -> jika bentrok, ke next group. - Siklus 2: Jika dalam 1 cycle tetap tidak dapat group -> masukkan ke group berikutnya jika tidak ada nama depan sama (aturan divisi dilanggar terlebih dahulu). - Siklus 3: Jika dalam 1 cycle berikutnya masih tidak dapat -> masukkan ke group berikutnya (aturan satelit dilanggar demi menjaga keseimbangan kapasitas). Invarian Mutlak: Keseimbangan kapasitas grup dijaga ketat (misal 41 tim ke 8 grup = tepat 7 grup isi 5 tim dan 1 grup isi 6 tim). /
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4341`](app.js#L4341) — di dalam fungsi `generateGroupStage()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, doShuffle);`
  - [`functional_tests.js:885`](functional_tests.js#L885) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('allocateMLBBGroups('), 'app.js harus memiliki fungsi alokasi grup cerdas');`
- **Memanggil Fungsi Internal:** [`getTeamPrefix()`](#getteamprefix), [`getTeamDept()`](#getteamdept), [`getDepartmentCluster()`](#getdepartmentcluster), [`isTeamInvited()`](#isteaminvited), [`isInvited()`](#isinvited), [`getPrefix()`](#getprefix), [`getDept()`](#getdept), [`getOverBaseCount()`](#getoverbasecount), [`hasPrefixConflict()`](#hasprefixconflict), [`hasDeptConflict()`](#hasdeptconflict)

<a id="generategroupstage"></a>
#### `generateGroupStage(doShuffle = false)`

- **Definisi:** [`app.js:4321`](app.js#L4321)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:220`](app.js#L220) — di dalam fungsi `toggleInvitedTeam()`
    `generateGroupStage(false);`
  - [`app.js:3702`](app.js#L3702) — di dalam fungsi `changeTournamentFormat()`
    `generateGroupStage(false);`
  - [`app.js:3746`](app.js#L3746) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateGroupStage(true);`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="initgroupplayoff"></a>
#### `initGroupPlayoff()`

- **Definisi:** [`app.js:4371`](app.js#L4371)
- **Deskripsi:** Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seeding Juara vs Runner-up).
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:1432`](app.js#L1432) — di dalam fungsi `cleanOrphanedTournamentData()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff();`
  - [`app.js:3822`](app.js#L3822) — di dalam fungsi `resolveMLBBTieBreaker()`
    `initGroupPlayoff();`
  - [`app.js:3846`](app.js#L3846) — di dalam fungsi `proceedToMLBBStage2()`
    `initGroupPlayoff();`
  - [`app.js:4354`](app.js#L4354) — di dalam fungsi `generateGroupStage()`
    `initGroupPlayoff();`
  - [`app.js:4367`](app.js#L4367) — di dalam fungsi `updateGroupRecord()`
    `initGroupPlayoff();`
  - [`app.js:5189`](app.js#L5189) — di dalam fungsi `setGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:5246`](app.js#L5246) — di dalam fungsi `resetGroupMatchScore()`
    `initGroupPlayoff();`

<a id="pickgroupplayoffwinner"></a>
#### `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:4537`](app.js#L4537)
- **Deskripsi:** Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya ke ronde berikutnya.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5619`](app.js#L5619) — di dalam fungsi `renderGroupPlayoffTree()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:5623`](app.js#L5623) — di dalam fungsi `renderGroupPlayoffTree()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree)

<a id="promptplayoffmvp"></a>
#### `promptPlayoffMVP(rIdx, mIdx)`

- **Definisi:** [`app.js:4704`](app.js#L4704)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5634`](app.js#L5634) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="font-size:0.68rem; padding:0.15rem 0.5rem;" onclick="promptPl`
  - [`functional_tests.js:792`](functional_tests.js#L792) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptPlayoffMVP('), 'Harus memiliki promptPlayoffMVP');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree)

<a id="rendergroupstageui"></a>
#### `renderGroupStageUI()`

- **Definisi:** [`app.js:4743`](app.js#L4743)
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:17`](app.js#L17) — di dalam fungsi `prevMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:24`](app.js#L24) — di dalam fungsi `nextMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:29`](app.js#L29) — di dalam fungsi `goToMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:3730`](app.js#L3730) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderGroupStageUI();`
  - [`app.js:3823`](app.js#L3823) — di dalam fungsi `resolveMLBBTieBreaker()`
    `renderGroupStageUI();`
  - [`app.js:3841`](app.js#L3841) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupStageUI();`
  - [`app.js:4355`](app.js#L4355) — di dalam fungsi `generateGroupStage()`
    `renderGroupStageUI();`
  - [`app.js:4368`](app.js#L4368) — di dalam fungsi `updateGroupRecord()`
    `renderGroupStageUI();`
  - [`app.js:5190`](app.js#L5190) — di dalam fungsi `setGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:5204`](app.js#L5204) — di dalam fungsi `setGroupMatchMVP()`
    `renderGroupStageUI();`
  - [`app.js:5247`](app.js#L5247) — di dalam fungsi `resetGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:7624`](app.js#L7624) — di dalam fungsi `setMLBBViewMode()`
    `renderGroupStageUI();`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`goToMLBBGroupPage()`](#gotomlbbgrouppage), [`prevMLBBGroupPage()`](#prevmlbbgrouppage), [`nextMLBBGroupPage()`](#nextmlbbgrouppage), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker)

<a id="setmlbbactiveweek"></a>
#### `setMLBBActiveWeek(weekKey)`

- **Definisi:** [`app.js:5006`](app.js#L5006)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5288`](app.js#L5288) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_1' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:5293`](app.js#L5293) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_2' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:5298`](app.js#L5298) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_3' ? 'active' : ''}" onclick="setMLBBActive`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivedayfilter"></a>
#### `setMLBBActiveDayFilter(day)`

- **Definisi:** [`app.js:5014`](app.js#L5014)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:5405`](app.js#L5405) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 'ALL' ? 'active' : ''}" onc`
  - [`app.js:5408`](app.js#L5408) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 1 ? 'active' : ''}" onclick`
  - [`app.js:5411`](app.js#L5411) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 2 ? 'active' : ''}" onclick`
  - [`app.js:5414`](app.js#L5414) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 3 ? 'active' : ''}" onclick`
  - [`app.js:5417`](app.js#L5417) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 4 ? 'active' : ''}" onclick`
  - [`app.js:5420`](app.js#L5420) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 5 ? 'active' : ''}" onclick`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivegroupfilter"></a>
#### `setMLBBActiveGroupFilter(gName)`

- **Definisi:** [`app.js:5019`](app.js#L5019)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5426`](app.js#L5426) — di dalam fungsi `renderGroupFixturesUI()`
    `<select onchange="setMLBBActiveGroupFilter(this.value)" style="background:#0f172a; border:1px solid `
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="getgroupfixtures"></a>
#### `getGroupFixtures(gName, dayFilter = null)`

- **Definisi:** [`app.js:5025`](app.js#L5025)
- **Deskripsi:** --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) ---
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3777`](app.js#L3777) — di dalam fungsi `isAllMLBBGroupMatchesFinished()`
    `const fixtures = getGroupFixtures(gName);`
  - [`app.js:5156`](app.js#L5156) — di dalam fungsi `getGroupRestingTeams()`
    `const dayFixtures = getGroupFixtures(gName, day);`
  - [`app.js:5439`](app.js#L5439) — di dalam fungsi `renderGroupFixturesUI()`
    `const fixtures = getGroupFixtures(gName, mlbbActiveDayFilter);`
  - [`app.js:7983`](app.js#L7983) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const fixtures = getGroupFixtures(gName);`
  - [`functional_tests.js:675`](functional_tests.js#L675) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getGroupFixtures('), 'app.js harus memiliki generator jadwal getGr`

<a id="recalculategroupstandingsfromfixtures"></a>
#### `recalculateGroupStandingsFromFixtures()`

- **Definisi:** [`app.js:5250`](app.js#L5250)
- **Deskripsi:** Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan seluruh hasil pertandingan BO3.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5187`](app.js#L5187) — di dalam fungsi `setGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:5244`](app.js#L5244) — di dalam fungsi `resetGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`

<a id="rendergroupfixturesui"></a>
#### `renderGroupFixturesUI()`

- **Definisi:** [`app.js:5276`](app.js#L5276)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:34`](app.js#L34) — di dalam fungsi `toggleAllMLBBFixtures()`
    `renderGroupFixturesUI();`
  - [`app.js:4832`](app.js#L4832) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:4960`](app.js#L4960) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:5011`](app.js#L5011) — di dalam fungsi `setMLBBActiveWeek()`
    `renderGroupFixturesUI();`
  - [`app.js:5016`](app.js#L5016) — di dalam fungsi `setMLBBActiveDayFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:5021`](app.js#L5021) — di dalam fungsi `setMLBBActiveGroupFilter()`
    `renderGroupFixturesUI();`
  - [`functional_tests.js:677`](functional_tests.js#L677) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderGroupFixturesUI('), 'app.js harus memiliki renderer bagan re`
- **Memanggil Fungsi Internal:** [`setMLBBActiveWeek()`](#setmlbbactiveweek), [`setMLBBActiveDayFilter()`](#setmlbbactivedayfilter), [`setMLBBActiveGroupFilter()`](#setmlbbactivegroupfilter), [`getGroupFixtures()`](#getgroupfixtures), [`escapeHtml()`](#escapehtml), [`getGroupRestingTeams()`](#getgrouprestingteams)

<a id="rendergroupplayofftree"></a>
#### `renderGroupPlayoffTree()`

- **Definisi:** [`app.js:5527`](app.js#L5527)
- **Deskripsi:** Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau status terkunci jika grup belum selesai.
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4701`](app.js#L4701) — di dalam fungsi `pickGroupPlayoffWinner()`
    `renderGroupPlayoffTree();`
  - [`app.js:4740`](app.js#L4740) — di dalam fungsi `promptPlayoffMVP()`
    `renderGroupPlayoffTree();`
  - [`app.js:4833`](app.js#L4833) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:4961`](app.js#L4961) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
- **Memanggil Fungsi Internal:** [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`pickGroupPlayoffWinner()`](#pickgroupplayoffwinner), [`escapeHtml()`](#escapehtml), [`promptPlayoffMVP()`](#promptplayoffmvp)

<a id="setmlbbviewmode"></a>
#### `setMLBBViewMode(mode)`

- **Definisi:** [`app.js:7590`](app.js#L7590)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MLBB ---
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:511`](index.html#L511) — Event `onclick`
    `<button type="button" id="btnViewMlbbHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:514`](index.html#L514) — Event `onclick`
    `<button type="button" id="btnViewMlbbGroups" class="btn btn-outline" style="font-size: 0.8rem; paddi`
  - [`index.html:517`](index.html#L517) — Event `onclick`
    `<button type="button" id="btnViewMlbbFixtures" class="btn btn-outline" style="font-size: 0.8rem; pad`
  - [`app.js:2422`](app.js#L2422) — di dalam fungsi `switchTab()`
    `setMLBBViewMode('HUB');`
  - [`functional_tests.js:1164`](functional_tests.js#L1164) — pada skenario pengujian
    `assert(appCode.includes('function setMLBBViewMode('), 'app.js harus memiliki fungsi setMLBBViewMode'`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="selectmlbbstagenode"></a>
#### `selectMLBBStageNode(nodeKey)`

- **Definisi:** [`app.js:7673`](app.js#L7673)
- **Deskripsi:** ---------------------------------------------------------------------------- 1. MASTER-DETAIL INTERACTIVE HUB MLBB ----------------------------------------------------------------------------
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:7698`](app.js#L7698) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<select id="mobileStageSelect" class="mobile-stage-select" onchange="selectMLBBStageNode(this.value)`
  - [`app.js:7762`](app.js#L7762) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:7804`](app.js#L7804) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:7827`](app.js#L7827) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_UPPER_QF' ? 'active' : ''}" onclic`
  - [`app.js:7831`](app.js#L7831) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_LOWER_R1' ? 'active' : ''}" onclic`
  - [`app.js:7849`](app.js#L7849) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_UPPER' ? 'active' : ''}" onclick="`
  - [`app.js:7853`](app.js#L7853) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_LOWER' ? 'active' : ''}" onclick="`
  - [`app.js:7873`](app.js#L7873) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'GRAND_FINAL_OFFLINE' ? 'active`
  - [`functional_tests.js:1166`](functional_tests.js#L1166) — pada skenario pengujian
    `assert(appCode.includes('function selectMLBBStageNode('), 'app.js harus memiliki selectMLBBStageNode`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermlbbinteractivehubui"></a>
#### `renderMLBBInteractiveHubUI()`

- **Definisi:** [`app.js:7684`](app.js#L7684)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:4759`](app.js#L4759) — di dalam fungsi `renderGroupStageUI()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:7615`](app.js#L7615) — di dalam fungsi `setMLBBViewMode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:7675`](app.js#L7675) — di dalam fungsi `selectMLBBStageNode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:7952`](app.js#L7952) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:7955`](app.js#L7955) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
  - [`app.js:8011`](app.js#L8011) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `renderMLBBInteractiveHubUI();`
  - [`functional_tests.js:1165`](functional_tests.js#L1165) — pada skenario pengujian
    `assert(appCode.includes('function renderMLBBInteractiveHubUI()'), 'app.js harus memiliki renderMLBBI`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`renderMLBBDetailPanelContent()`](#rendermlbbdetailpanelcontent)

<a id="rendermlbbdetailpanelcontent"></a>
#### `renderMLBBDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:7892`](app.js#L7892)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7886`](app.js#L7886) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `rightHtml += renderMLBBDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`getGroupFixtures()`](#getgroupfixtures), [`setGroupMatchScore()`](#setgroupmatchscore), [`promptGroupMatchMVP()`](#promptgroupmatchmvp)

---

### 👥 Manajemen Peserta & Roster

<a id="getinitialparticipants"></a>
#### `getInitialParticipants()`

- **Definisi:** [`app.js:89`](app.js#L89)
- **Deskripsi:** Inisialisasi daftar peserta dari localStorage dengan validasi versi data (DATA_VERSION), fallback ke array default.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:109`](app.js#L109) — cakupan global / event handler
    `let participants = getInitialParticipants();`

<a id="handleparticipantsearch"></a>
#### `handleParticipantSearch(query)`

- **Definisi:** [`app.js:816`](app.js#L816)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:358`](index.html#L358) — Event `oninput`
    `<input type="text" id="participantSearchInput" placeholder="🔍 Cari Tim / IGN / Divisi..." oninput="`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants)

<a id="autolinkparticipantsassets"></a>
#### `autoLinkParticipantsAssets()`

- **Definisi:** [`app.js:1107`](app.js#L1107)
- **Deskripsi:** Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1368`](app.js#L1368) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3398`](app.js#L3398) — di dalam fungsi `saveParticipantEdit()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3523`](app.js#L3523) — di dalam fungsi `renderParticipants()`
    `autoLinkParticipantsAssets();`
  - [`app.js:7509`](app.js#L7509) — di dalam fungsi `loadSampleData()`
    `autoLinkParticipantsAssets();`
  - [`app.js:7535`](app.js#L7535) — cakupan global / event handler
    `autoLinkParticipantsAssets();`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap)

<a id="fetchparticipantsfromgooglesheet"></a>
#### `fetchParticipantsFromGoogleSheet(isSilent = false, isPure = false)`

- **Definisi:** [`app.js:1142`](app.js#L1142)
- **Deskripsi:** Fetch registered participants from Google Sheets via doGet Webhook Google Sheets menjadi Single Source of Truth: data yang dihapus di sheet tidak akan dimunculkan kembali.
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:344`](index.html#L344) — Event `onclick`
    `<button class="btn btn-primary" id="btnSyncGSheet" style="padding: 0.45rem 0.9rem; font-size: 0.82re`
  - [`app.js:1507`](app.js#L1507) — di dalam fungsi `resetCacheAndFollowGSheet()`
    `await fetchParticipantsFromGoogleSheet(false, true);`
  - [`app.js:7563`](app.js#L7563) — cakupan global / event handler
    `fetchParticipantsFromGoogleSheet(true, true).catch(err => {`
  - [`app.js:7569`](app.js#L7569) — cakupan global / event handler
    `await fetchParticipantsFromGoogleSheet(true, true);`
- **Memanggil Fungsi Internal:** [`getItemKey()`](#getitemkey), [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap), [`renderRules()`](#renderrules), [`renderMCGGTable()`](#rendermcggtable), [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`updateCommanderPoolFromSetup()`](#updatecommanderpoolfromsetup), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`showToast()`](#showtoast)

<a id="toggleregistrationstatus"></a>
#### `toggleRegistrationStatus()`

- **Definisi:** [`app.js:2182`](app.js#L2182)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:41`](index.html#L41) — Event `onclick`
    `<button id="btnToggleReg" class="btn btn-outline" style="display: none; padding: 0.25rem 0.65rem; fo`
  - [`index.html:330`](index.html#L330) — Event `onclick`
    `<button id="btnToggleRegPeserta" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0`
  - [`index.html:482`](index.html#L482) — Event `onclick`
    `<button id="btnToggleRegMLBB" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
  - [`index.html:588`](index.html#L588) — Event `onclick`
    `<button id="btnToggleRegMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; padd`
  - [`functional_tests.js:825`](functional_tests.js#L825) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleRegistrationStatus()'), 'Harus memiliki toggleRegistrationSt`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handleregister"></a>
#### `handleRegister(e)`

- **Definisi:** [`app.js:2568`](app.js#L2568)
- **Deskripsi:** Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Card, and Automatic Update Threat
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:87`](index.html#L87) — Event `onsubmit`
    `<form id="regForm" onsubmit="handleRegister(event)">`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`showToast()`](#showtoast), [`saveState()`](#savestate), [`clearFormDraft()`](#clearformdraft), [`renderPlayersFormInputs()`](#renderplayersforminputs), [`toggleCategoryForm()`](#togglecategoryform), [`toggleOfficial2Form()`](#toggleofficial2form), [`updateRegistrationDatalists()`](#updateregistrationdatalists)

<a id="setparticipantstatus"></a>
#### `setParticipantStatus(id, newStatus)`

- **Definisi:** [`app.js:3108`](app.js#L3108)
- **Deskripsi:** Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3620`](app.js#L3620) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-success-sm" title="Verifikasi / Setujui" onclick="setParticipantStatus(${p.id`
  - [`app.js:3621`](app.js#L3621) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-danger-sm" title="Tolak / Gagal" onclick="setParticipantStatus(${p.id}, 'REJE`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="deleteparticipant"></a>
#### `deleteParticipant(id)`

- **Definisi:** [`app.js:3149`](app.js#L3149)
- **Deskripsi:** Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat ke blacklist agar tidak ter-sync ulang.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3622`](app.js#L3622) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" onclick="delet`
- **Memanggil Fungsi Internal:** [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="saveparticipantedit"></a>
#### `saveParticipantEdit()`

- **Definisi:** [`app.js:3334`](app.js#L3334)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:725`](index.html#L725) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveParticipantEdit()">💾 Simpan Perubahan Data</button>`
- **Memanggil Fungsi Internal:** [`saveLogoToMap()`](#savelogotomap), [`saveIdCardToMap()`](#saveidcardtomap), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`closeEditParticipantModal()`](#closeeditparticipantmodal)

<a id="viewrosterdetail"></a>
#### `viewRosterDetail(id)`

- **Definisi:** [`app.js:3458`](app.js#L3458)
- **Deskripsi:** Modal Detail Roster Lengkap & ID Card Per-Pemain
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3652`](app.js#L3652) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;" onclick="viewRos`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox)

<a id="renderparticipants"></a>
#### `renderParticipants()`

- **Definisi:** [`app.js:3522`](app.js#L3522)
- **Deskripsi:** Render Participant Table (Featuring Nickname, ID Card count per-player, and Admin Edit Action)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:218`](app.js#L218) — di dalam fungsi `toggleInvitedTeam()`
    `renderParticipants();`
  - [`app.js:805`](app.js#L805) — di dalam fungsi `bypassLoaderWithCache()`
    `renderParticipants();`
  - [`app.js:818`](app.js#L818) — di dalam fungsi `handleParticipantSearch()`
    `renderParticipants();`
  - [`app.js:1371`](app.js#L1371) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderParticipants();`
  - [`app.js:1721`](app.js#L1721) — di dalam fungsi `saveState()`
    `renderParticipants();`
  - [`app.js:2099`](app.js#L2099) — di dalam fungsi `verifyAdminPin()`
    `renderParticipants();`
  - [`app.js:2111`](app.js#L2111) — di dalam fungsi `logoutAdmin()`
    `renderParticipants();`
  - [`app.js:3114`](app.js#L3114) — di dalam fungsi `setParticipantStatus()`
    `renderParticipants();`
  - [`app.js:3171`](app.js#L3171) — di dalam fungsi `deleteParticipant()`
    `renderParticipants();`
  - [`app.js:3198`](app.js#L3198) — di dalam fungsi `filterList()`
    `renderParticipants();`
  - [`app.js:3400`](app.js#L3400) — di dalam fungsi `saveParticipantEdit()`
    `renderParticipants();`
  - [`app.js:7524`](app.js#L7524) — di dalam fungsi `clearAllData()`
    `renderParticipants();`
  - [`app.js:7547`](app.js#L7547) — cakupan global / event handler
    `renderParticipants();`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`updateRegistrationDatalists()`](#updateregistrationdatalists), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`toggleInvitedTeam()`](#toggleinvitedteam), [`openEditParticipantModal()`](#openeditparticipantmodal), [`setParticipantStatus()`](#setparticipantstatus), [`deleteParticipant()`](#deleteparticipant), [`viewRosterDetail()`](#viewrosterdetail)

---

### 📦 Modul Aplikasi Umum

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`app.js:112`](app.js#L112)
- **Deskripsi:** Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4144`](app.js#L4144) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="getdepartmentcluster"></a>
#### `getDepartmentCluster(rawDept, teamOrPlayerName = '')`

- **Definisi:** [`app.js:124`](app.js#L124)
- **Deskripsi:** Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resmi) Memetakan variasi teks bebas pendaftar (e.g. 'IT/QA', 'Quality Assurance', 'ERM/PRM', 'ADO Bandung') ke klaster divisi resmi untuk pencegahan bentrok fase awal turnamen. /
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:188`](app.js#L188) — di dalam fungsi `getTeamDept()`
    `return getDepartmentCluster(raw, teamName).toLowerCase();`
  - [`app.js:4155`](app.js#L4155) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getDepartmentCluster === 'function') return getDepartmentCluster(d, team).toLowerCase();`
  - [`app.js:5782`](app.js#L5782) — di dalam fungsi `syncMCGGPlayers()`
    `const cluster = getDepartmentCluster(ply.dept, ply.name);`
  - [`app.js:5812`](app.js#L5812) — di dalam fungsi `syncMCGGPlayers()`
    `return getDepartmentCluster(d, p.name) === clusterName;`
  - [`functional_tests.js:932`](functional_tests.js#L932) — pada skenario pengujian
    `assert(appCode.includes('function getDepartmentCluster('), 'app.js harus memiliki helper getDepartme`
  - [`functional_tests.js:985`](functional_tests.js#L985) — pada skenario pengujian
    `assert(appCode.includes('function getDepartmentCluster('), 'app.js harus memiliki helper getDepartme`
  - [`functional_tests.js:988`](functional_tests.js#L988) — pada skenario pengujian
    `return getDepartmentCluster(rawDept, name);`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`app.js:182`](app.js#L182)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4153`](app.js#L4153) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:900`](functional_tests.js#L900) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`
- **Memanggil Fungsi Internal:** [`getDepartmentCluster()`](#getdepartmentcluster)

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`app.js:204`](app.js#L204)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4163`](app.js#L4163) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`

<a id="toggleinvitedteam"></a>
#### `toggleInvitedTeam(id)`

- **Definisi:** [`app.js:212`](app.js#L212)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3610`](app.js#L3610) — di dalam fungsi `renderParticipants()`
    `<button class="btn ${p.isInvited ? 'btn-gold' : 'btn-outline'}" style="padding: 0.35rem 0.55rem; fon`
  - [`functional_tests.js:877`](functional_tests.js#L877) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleInvitedTeam('), 'app.js harus memiliki toggleInvitedTeam');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="showgloballoader"></a>
#### `showGlobalLoader(msg = "Menyinkronkan data turnamen dari Google Sheets...")`

- **Definisi:** [`app.js:247`](app.js#L247)
- **Deskripsi:** Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7534`](app.js#L7534) — cakupan global / event handler
    `showGlobalLoader('Menyinkronkan data terkini dari Google Sheets...');`
- **Memanggil Fungsi Internal:** [`hideGlobalLoader()`](#hidegloballoader)

<a id="hidegloballoader"></a>
#### `hideGlobalLoader()`

- **Definisi:** [`app.js:261`](app.js#L261)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:257`](app.js#L257) — di dalam fungsi `showGlobalLoader()`
    `hideGlobalLoader();`
  - [`app.js:809`](app.js#L809) — di dalam fungsi `bypassLoaderWithCache()`
    `hideGlobalLoader();`
  - [`app.js:7562`](app.js#L7562) — cakupan global / event handler
    `hideGlobalLoader();`
  - [`app.js:7573`](app.js#L7573) — cakupan global / event handler
    `hideGlobalLoader();`

<a id="bypassloaderwithcache"></a>
#### `bypassLoaderWithCache()`

- **Definisi:** [`app.js:801`](app.js#L801)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:23`](index.html#L23) — Event `onclick`
    `<button id="btnBypassLoader" type="button" class="btn btn-outline" style="margin-top: 1.25rem; font-`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`updateCounts()`](#updatecounts), [`hideGlobalLoader()`](#hidegloballoader), [`showToast()`](#showtoast)

<a id="saveformdraft"></a>
#### `saveFormDraft(formType)`

- **Definisi:** [`app.js:824`](app.js#L824)
- **Deskripsi:** AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:980`](app.js#L980) — di dalam fungsi `handleFormDraftChange()`
    `saveFormDraft();`

<a id="restoreformdraft"></a>
#### `restoreFormDraft(formType)`

- **Definisi:** [`app.js:880`](app.js#L880)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7543`](app.js#L7543) — cakupan global / event handler
    `restoreFormDraft('MLBB');`
  - [`app.js:7544`](app.js#L7544) — cakupan global / event handler
    `restoreFormDraft('MCGG');`
- **Memanggil Fungsi Internal:** [`toggleOfficial2Form()`](#toggleofficial2form)

<a id="clearformdraft"></a>
#### `clearFormDraft(formType)`

- **Definisi:** [`app.js:970`](app.js#L970)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3093`](app.js#L3093) — di dalam fungsi `handleRegister()`
    `clearFormDraft(category);`

<a id="handleformdraftchange"></a>
#### `handleFormDraftChange()`

- **Definisi:** [`app.js:977`](app.js#L977)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1907`](app.js#L1907) — di dalam fungsi `handleLogoPreview()`
    `handleFormDraftChange();`
  - [`app.js:1925`](app.js#L1925) — di dalam fungsi `handleSingleIdCardPreview()`
    `handleFormDraftChange();`
  - [`app.js:1945`](app.js#L1945) — di dalam fungsi `handlePlayerIdCardPreview()`
    `handleFormDraftChange();`
- **Memanggil Fungsi Internal:** [`saveFormDraft()`](#saveformdraft)

<a id="getitemkey"></a>
#### `getItemKey(item)`

- **Definisi:** [`app.js:1168`](app.js#L1168)
- **Deskripsi:** Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1182`](app.js#L1182) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `localMap[getItemKey(localItem)] = localItem;`
  - [`app.js:1189`](app.js#L1189) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const itemKey = getItemKey(sheetItem);`

<a id="cleanorphanedtournamentdata"></a>
#### `cleanOrphanedTournamentData()`

- **Definisi:** [`app.js:1403`](app.js#L1403)
- **Deskripsi:** Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup, dan lobi MCGG
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1369`](app.js#L1369) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `cleanOrphanedTournamentData();`
  - [`app.js:3169`](app.js#L3169) — di dalam fungsi `deleteParticipant()`
    `cleanOrphanedTournamentData();`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff)

<a id="savestate"></a>
#### `saveState()`

- **Definisi:** [`app.js:1715`](app.js#L1715)
- **Deskripsi:** Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi MCGG) ke localStorage.
- **Titik Pemanggilan (35 lokasi):**
  - [`app.js:217`](app.js#L217) — di dalam fungsi `toggleInvitedTeam()`
    `saveState();`
  - [`app.js:787`](app.js#L787) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveState();`
  - [`app.js:1370`](app.js#L1370) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveState();`
  - [`app.js:1529`](app.js#L1529) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `saveState();`
  - [`app.js:1677`](app.js#L1677) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `saveState();`
  - [`app.js:2239`](app.js#L2239) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveState();`
  - [`app.js:3070`](app.js#L3070) — di dalam fungsi `handleRegister()`
    `saveState();`
  - [`app.js:3113`](app.js#L3113) — di dalam fungsi `setParticipantStatus()`
    `saveState();`
  - [`app.js:3170`](app.js#L3170) — di dalam fungsi `deleteParticipant()`
    `saveState();`
  - [`app.js:3399`](app.js#L3399) — di dalam fungsi `saveParticipantEdit()`
    `saveState();`
  - [`app.js:3821`](app.js#L3821) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveState();`
  - [`app.js:3848`](app.js#L3848) — di dalam fungsi `proceedToMLBBStage2()`
    `saveState();`
  - [`app.js:3861`](app.js#L3861) — di dalam fungsi `resetMLBBToStage1()`
    `saveState();`
  - [`app.js:3923`](app.js#L3923) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `saveState();`
  - [`app.js:3932`](app.js#L3932) — di dalam fungsi `saveTournamentStateOnly()`
    `saveState();`
  - [`app.js:4353`](app.js#L4353) — di dalam fungsi `generateGroupStage()`
    `saveState();`
  - [`app.js:4366`](app.js#L4366) — di dalam fungsi `updateGroupRecord()`
    `saveState();`
  - [`app.js:4700`](app.js#L4700) — di dalam fungsi `pickGroupPlayoffWinner()`
    `saveState();`
  - [`app.js:4739`](app.js#L4739) — di dalam fungsi `promptPlayoffMVP()`
    `saveState();`
  - [`app.js:5188`](app.js#L5188) — di dalam fungsi `setGroupMatchScore()`
    `saveState();`
  - [`app.js:5203`](app.js#L5203) — di dalam fungsi `setGroupMatchMVP()`
    `saveState();`
  - [`app.js:5245`](app.js#L5245) — di dalam fungsi `resetGroupMatchScore()`
    `saveState();`
  - [`app.js:5889`](app.js#L5889) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:5948`](app.js#L5948) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:6192`](app.js#L6192) — di dalam fungsi `updateMCGGRank()`
    `saveState();`
  - [`app.js:6227`](app.js#L6227) — di dalam fungsi `updateMCGGCommander()`
    `saveState();`
  - [`app.js:6263`](app.js#L6263) — di dalam fungsi `updateMCGGPenalty()`
    `saveState();`
  - [`app.js:6588`](app.js#L6588) — di dalam fungsi `drawMatchPool()`
    `saveState();`
  - [`app.js:6639`](app.js#L6639) — di dalam fungsi `assignMatchPoolToPlayers()`
    `saveState();`
  - [`app.js:6659`](app.js#L6659) — di dalam fungsi `toggleLockMatchDraw()`
    `saveState();`
  - [`app.js:6685`](app.js#L6685) — di dalam fungsi `nextMatchDraw()`
    `saveState();`
  - [`app.js:6718`](app.js#L6718) — di dalam fungsi `resetLobbyDraw()`
    `saveState();`
  - [`app.js:7510`](app.js#L7510) — di dalam fungsi `loadSampleData()`
    `saveState();`
  - [`app.js:7523`](app.js#L7523) — di dalam fungsi `clearAllData()`
    `saveState();`
  - [`app.js:8511`](app.js#L8511) — di dalam fungsi `shuffleMCGG32Besar()`
    `saveState();`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`updateAuthUI()`](#updateauthui), [`updateCounts()`](#updatecounts)

<a id="updatecounts"></a>
#### `updateCounts()`

- **Definisi:** [`app.js:1726`](app.js#L1726)
- **Deskripsi:** Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status verifikasi di header UI.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:808`](app.js#L808) — di dalam fungsi `bypassLoaderWithCache()`
    `updateCounts();`
  - [`app.js:1374`](app.js#L1374) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCounts();`
  - [`app.js:1723`](app.js#L1723) — di dalam fungsi `saveState()`
    `updateCounts();`
  - [`app.js:3117`](app.js#L3117) — di dalam fungsi `setParticipantStatus()`
    `updateCounts();`
  - [`app.js:3174`](app.js#L3174) — di dalam fungsi `deleteParticipant()`
    `updateCounts();`
  - [`app.js:7528`](app.js#L7528) — di dalam fungsi `clearAllData()`
    `updateCounts();`
  - [`app.js:7550`](app.js#L7550) — cakupan global / event handler
    `updateCounts();`

<a id="toggleofficial2form"></a>
#### `toggleOfficial2Form()`

- **Definisi:** [`app.js:1954`](app.js#L1954)
- **Deskripsi:** Toggle Official 2 Form
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:199`](index.html#L199) — Event `onchange`
    `<input type="checkbox" id="has_official_2" onchange="toggleOfficial2Form()">`
  - [`app.js:913`](app.js#L913) — di dalam fungsi `restoreFormDraft()`
    `toggleOfficial2Form();`
  - [`app.js:3096`](app.js#L3096) — di dalam fungsi `handleRegister()`
    `toggleOfficial2Form();`
  - [`app.js:7538`](app.js#L7538) — cakupan global / event handler
    `toggleOfficial2Form();`

<a id="renderplayersforminputs"></a>
#### `renderPlayersFormInputs()`

- **Definisi:** [`app.js:1961`](app.js#L1961)
- **Deskripsi:** Generate the 8 players form fields dynamically (Included In-Game Nickname and Per-Player ID Card Uploader)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3094`](app.js#L3094) — di dalam fungsi `handleRegister()`
    `renderPlayersFormInputs();`
  - [`app.js:7536`](app.js#L7536) — cakupan global / event handler
    `renderPlayersFormInputs();`
- **Memanggil Fungsi Internal:** [`handlePlayerIdCardPreview()`](#handleplayeridcardpreview)

<a id="togglecategoryform"></a>
#### `toggleCategoryForm()`

- **Definisi:** [`app.js:2020`](app.js#L2020)
- **Deskripsi:** Switch form between MLBB and MCGG cleanly
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:91`](index.html#L91) — Event `onchange`
    `<select id="gameCategory" required onchange="toggleCategoryForm()" style="font-size: 1rem; font-weig`
  - [`app.js:3095`](app.js#L3095) — di dalam fungsi `handleRegister()`
    `toggleCategoryForm();`
  - [`app.js:7537`](app.js#L7537) — cakupan global / event handler
    `toggleCategoryForm();`

<a id="renderregistrationui"></a>
#### `renderRegistrationUI()`

- **Definisi:** [`app.js:2116`](app.js#L2116)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1357`](app.js#L1357) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRegistrationUI();`
  - [`app.js:2195`](app.js#L2195) — di dalam fungsi `toggleRegistrationStatus()`
    `renderRegistrationUI();`
  - [`app.js:2410`](app.js#L2410) — di dalam fungsi `updateAuthUI()`
    `renderRegistrationUI();`
  - [`functional_tests.js:826`](functional_tests.js#L826) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderRegistrationUI()'), 'Harus memiliki renderRegistrationUI()')`

<a id="updateregistrationdatalists"></a>
#### `updateRegistrationDatalists()`

- **Definisi:** [`app.js:2488`](app.js#L2488)
- **Deskripsi:** Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit form dimatikan)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3097`](app.js#L3097) — di dalam fungsi `handleRegister()`
    `updateRegistrationDatalists();`
  - [`app.js:3524`](app.js#L3524) — di dalam fungsi `renderParticipants()`
    `updateRegistrationDatalists();`
  - [`functional_tests.js:171`](functional_tests.js#L171) — pada skenario pengujian
    `assert(appCode.includes('function updateRegistrationDatalists('), 'Harus ada fungsi updateRegistrati`

<a id="handleteamnameinput"></a>
#### `handleTeamNameInput(val)`

- **Definisi:** [`app.js:2502`](app.js#L2502)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:106`](index.html#L106) — Event `oninput`
    `<input type="text" id="teamName" oninput="handleTeamNameInput(this.value)" placeholder="Masukkan nam`
  - [`functional_tests.js:172`](functional_tests.js#L172) — pada skenario pengujian
    `assert(appCode.includes('function handleTeamNameInput('), 'Harus ada handler handleTeamNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="shuffleandgeneratetournament"></a>
#### `shuffleAndGenerateTournament()`

- **Definisi:** [`app.js:3734`](app.js#L3734)
- **Deskripsi:** Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum dikunci.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:483`](index.html#L483) — Event `onclick`
    `<button id="btnShuffleMLBB" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0.85rem;`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage)

<a id="pickwinner"></a>
#### `pickWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:4036`](app.js#L4036)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4102`](app.js#L4102) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:4106`](app.js#L4106) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket)

<a id="getprefix"></a>
#### `getPrefix(team)`

- **Definisi:** [`app.js:4143`](app.js#L4143)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:4181`](app.js#L4181) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:4189`](app.js#L4189) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:4198`](app.js#L4198) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:4214`](app.js#L4214) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountA = teamPrefix ? groups[a].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:4215`](app.js#L4215) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountB = teamPrefix ? groups[b].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:4248`](app.js#L4248) — di dalam fungsi `allocateMLBBGroups()`
    `const p = getPrefix(t);`
  - [`app.js:4255`](app.js#L4255) — di dalam fungsi `allocateMLBBGroups()`
    `const pA = getPrefix(a), pB = getPrefix(b);`
  - [`app.js:4263`](app.js#L4263) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:4266`](app.js#L4266) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPrefixConflict = (g) => teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`

<a id="getdept"></a>
#### `getDept(team)`

- **Definisi:** [`app.js:4151`](app.js#L4151)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:4182`](app.js#L4182) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:4190`](app.js#L4190) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDep = teamDept && groups[g].some(t => getDept(t) === teamDept);`
  - [`app.js:4249`](app.js#L4249) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getDept(t);`
  - [`app.js:4256`](app.js#L4256) — di dalam fungsi `allocateMLBBGroups()`
    `const dA = getDept(a), dB = getDept(b);`
  - [`app.js:4264`](app.js#L4264) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:4267`](app.js#L4267) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDeptConflict = (g) => teamDept && groups[g].some(t => getDept(t) === teamDept);`

<a id="isinvited"></a>
#### `isInvited(team)`

- **Definisi:** [`app.js:4162`](app.js#L4162)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4167`](app.js#L4167) — di dalam fungsi `allocateMLBBGroups()`
    `let invited = teamsList.filter(t => isInvited(t));`
  - [`app.js:4168`](app.js#L4168) — di dalam fungsi `allocateMLBBGroups()`
    `let regular = teamsList.filter(t => !isInvited(t));`
  - [`app.js:4188`](app.js#L4188) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:4197`](app.js#L4197) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:4206`](app.js#L4206) — di dalam fungsi `allocateMLBBGroups()`
    `if (!groups[g].some(t => isInvited(t))) { targetGroup = g; break; }`

<a id="getoverbasecount"></a>
#### `getOverBaseCount()`

- **Definisi:** [`app.js:4230`](app.js#L4230)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4236`](app.js#L4236) — di dalam fungsi `allocateMLBBGroups()`
    `return getOverBaseCount() < remainder;`

<a id="canaccept"></a>
#### `canAccept(g)`

- **Definisi:** [`app.js:4232`](app.js#L4232)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="hasprefixconflict"></a>
#### `hasPrefixConflict(g)`

- **Definisi:** [`app.js:4266`](app.js#L4266)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4285`](app.js#L4285) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`
  - [`app.js:4294`](app.js#L4294) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g)) {`

<a id="hasdeptconflict"></a>
#### `hasDeptConflict(g)`

- **Definisi:** [`app.js:4267`](app.js#L4267)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4285`](app.js#L4285) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`

<a id="updategrouprecord"></a>
#### `updateGroupRecord(gName, idx, field, val)`

- **Definisi:** [`app.js:4358`](app.js#L4358)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4885`](app.js#L4885) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" o`
  - [`app.js:4889`](app.js#L4889) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" `
  - [`app.js:7952`](app.js#L7952) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:7955`](app.js#L7955) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="getgrouprestingteams"></a>
#### `getGroupRestingTeams(gName, day)`

- **Definisi:** [`app.js:5154`](app.js#L5154)
- **Deskripsi:** Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di grup tertentu
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5458`](app.js#L5458) — di dalam fungsi `renderGroupFixturesUI()`
    `const resting = getGroupRestingTeams(gName, parseInt(mlbbActiveDayFilter, 10));`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="setgroupmatchscore"></a>
#### `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB)`

- **Definisi:** [`app.js:5165`](app.js#L5165)
- **Deskripsi:** Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara otomatis.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8010`](app.js#L8010) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`functional_tests.js:676`](functional_tests.js#L676) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchScore('), 'app.js harus memiliki setter skor setGroup`
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="setgroupmatchmvp"></a>
#### `setGroupMatchMVP(matchId, mvpPlayer, mvpHero, mvpTeam)`

- **Definisi:** [`app.js:5193`](app.js#L5193)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5236`](app.js#L5236) — di dalam fungsi `promptGroupMatchMVP()`
    `setGroupMatchMVP(matchId, newMvp, newHero, mvpTeam);`
  - [`functional_tests.js:790`](functional_tests.js#L790) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchMVP('), 'Harus memiliki setGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="promptgroupmatchmvp"></a>
#### `promptGroupMatchMVP(matchId, teamA, teamB)`

- **Definisi:** [`app.js:5207`](app.js#L5207)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8013`](app.js#L8013) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="promptGr`
  - [`functional_tests.js:791`](functional_tests.js#L791) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptGroupMatchMVP('), 'Harus memiliki promptGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`setGroupMatchMVP()`](#setgroupmatchmvp)

<a id="resetgroupmatchscore"></a>
#### `resetGroupMatchScore(matchId)`

- **Definisi:** [`app.js:5239`](app.js#L5239)
- **Deskripsi:** Mereset skor pertandingan grup MLBB ke status belum bertanding.
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="findprevious"></a>
#### `findPrevious(ply)`

- **Definisi:** [`app.js:5747`](app.js#L5747)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5760`](app.js#L5760) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`app.js:5759`](app.js#L5759)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5830`](app.js#L5830) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:5882`](app.js#L5882) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

<a id="sortfn"></a>
#### `sortFn(a, b)`

- **Definisi:** [`app.js:5992`](app.js#L5992)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevsemi"></a>
#### `findPrevSemi(ply)`

- **Definisi:** [`app.js:6030`](app.js#L6030)
- **Deskripsi:** Preserve poin semifinal jika sudah ada
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6039`](app.js#L6039) — di dalam fungsi `syncMCGGSemiFinal()`
    `const prev = findPrevSemi(p) || {};`

<a id="mapsemiplayer"></a>
#### `mapSemiPlayer(p)`

- **Definisi:** [`app.js:6038`](app.js#L6038)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="sortfn"></a>
#### `sortFn(a, b)`

- **Definisi:** [`app.js:6061`](app.js#L6061)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevinarr"></a>
#### `findPrevInArr(p, arr)`

- **Definisi:** [`app.js:6081`](app.js#L6081)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6091`](app.js#L6091) — di dalam fungsi `syncMCGGGrandFinal()`
    `const prev = findPrevInArr(p, existingGF);`

<a id="mapgfplayer"></a>
#### `mapGFPlayer(p)`

- **Definisi:** [`app.js:6090`](app.js#L6090)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:6123`](app.js#L6123) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:6124`](app.js#L6124) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:6153`](app.js#L6153) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:6154`](app.js#L6154) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`

<a id="drawmatchpool"></a>
#### `drawMatchPool(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:6520`](app.js#L6520)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 1: Acak 8 Pool Commander untuk Group/Lobby Ini ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6335`](app.js#L6335) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaft`
  - [`app.js:6691`](app.js#L6691) — di dalam fungsi `drawMatchCommanders()`
    `drawMatchPool(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="assignmatchpooltoplayers"></a>
#### `assignMatchPoolToPlayers(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:6595`](app.js#L6595)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 2: Pasangkan 8 Pool Commander ke Masing-Masing Pemain ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6342`](app.js#L6342) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasPool ? "alert('⚠️ Silakan acak 8 Pool Commander terlebih dahulu.')" : (isMatchLocked `
  - [`app.js:6692`](app.js#L6692) — di dalam fungsi `drawMatchCommanders()`
    `assignMatchPoolToPlayers(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="togglelockmatchdraw"></a>
#### `toggleLockMatchDraw(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:6646`](app.js#L6646)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 3: Kunci Match (Lock) / Buka Kunci ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6349`](app.js#L6349) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasAssigned ? "alert('⚠️ Pasangkan commander ke pemain terlebih dahulu sebelum mengunci.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="nextmatchdraw"></a>
#### `nextMatchDraw(targetLobbyKey, nextMatchNum)`

- **Definisi:** [`app.js:6673`](app.js#L6673)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 4: Lanjut ke Match Berikutnya (Match 2) ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6357`](app.js#L6357) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="nextMatchDraw('${lobbyKey}', 2)">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="showmatch3draftinfo"></a>
#### `showMatch3DraftInfo()`

- **Definisi:** [`app.js:6758`](app.js#L6758)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6362`](app.js#L6362) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="showMatch3DraftInfo()">`

<a id="buildroundcell"></a>
#### `buildRoundCell(player, roundKey, cmdKey, targetLobby)`

- **Definisi:** [`app.js:7210`](app.js#L7210)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7198`](app.js#L7198) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r1', 'c1', lobbyKey)}</td>`
  - [`app.js:7199`](app.js#L7199) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r2', 'c2', lobbyKey)}</td>`
  - [`app.js:7200`](app.js#L7200) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r3', 'c3', lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`updateMCGGCommander()`](#updatemcggcommander), [`updateMCGGRank()`](#updatemcggrank)

<a id="loadsampledata"></a>
#### `loadSampleData()`

- **Definisi:** [`app.js:7311`](app.js#L7311)
- **Deskripsi:** Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation - No Sensitive Info)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:331`](index.html#L331) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="loadSamp`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="clearalldata"></a>
#### `clearAllData()`

- **Definisi:** [`app.js:7515`](app.js#L7515)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:332`](index.html#L332) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="clearAll`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

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
  - [`app.js:112`](app.js#L112) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:4144`](app.js#L4144) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:896`](functional_tests.js#L896)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:204`](app.js#L204) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:4163`](app.js#L4163) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`functional_tests.js:900`](functional_tests.js#L900)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:182`](app.js#L182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`app.js:4153`](app.js#L4153) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:946`](functional_tests.js#L946)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:112`](app.js#L112) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:4144`](app.js#L4144) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:952`](functional_tests.js#L952)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:204`](app.js#L204) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:4163`](app.js#L4163) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`

<a id="findprevious"></a>
#### `findPrevious()`

- **Definisi:** [`functional_tests.js:1085`](functional_tests.js#L1085)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5760`](app.js#L5760) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`functional_tests.js:1087`](functional_tests.js#L1087)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5830`](app.js#L5830) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:5882`](app.js#L5882) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

---

### ☁️ Sinkronisasi Google Sheets & State Storage

<a id="savestagestatelocal"></a>
#### `saveStageStateLocal()`

- **Definisi:** [`app.js:358`](app.js#L358)
- **Deskripsi:** Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM, data tie-breaker) ke localStorage.
- **Titik Pemanggilan (10 lokasi):**
  - [`app.js:786`](app.js#L786) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveStageStateLocal();`
  - [`app.js:2235`](app.js#L2235) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveStageStateLocal();`
  - [`app.js:3767`](app.js#L3767) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveStageStateLocal();`
  - [`app.js:3800`](app.js#L3800) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3805`](app.js#L3805) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3820`](app.js#L3820) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3847`](app.js#L3847) — di dalam fungsi `proceedToMLBBStage2()`
    `saveStageStateLocal();`
  - [`app.js:3860`](app.js#L3860) — di dalam fungsi `resetMLBBToStage1()`
    `saveStageStateLocal();`
  - [`app.js:3900`](app.js#L3900) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveStageStateLocal();`
  - [`app.js:3933`](app.js#L3933) — di dalam fungsi `saveTournamentStateOnly()`
    `saveStageStateLocal();`

<a id="resetcacheandfollowgsheet"></a>
#### `resetCacheAndFollowGSheet()`

- **Definisi:** [`app.js:1489`](app.js#L1489)
- **Deskripsi:** Reset cache lokal dan ikuti 100% data aktif dari Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:347`](index.html#L347) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetCacheFollowGSheet" style="padding: 0.45rem 0.9rem; font-`
- **Memanggil Fungsi Internal:** [`fetchParticipantsFromGoogleSheet()`](#fetchparticipantsfromgooglesheet)

<a id="saveallchangestogooglesheet"></a>
#### `saveAllChangesToGoogleSheet()`

- **Definisi:** [`app.js:1522`](app.js#L1522)
- **Deskripsi:** SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:350`](index.html#L350) — Event `onclick`
    `<button class="btn btn-primary" id="btnSaveAllChanges" style="padding: 0.45rem 0.9rem; font-size: 0.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`showToast()`](#showtoast)

<a id="synctournamentsheetstogsheet"></a>
#### `syncTournamentSheetsToGSheet()`

- **Definisi:** [`app.js:1676`](app.js#L1676)
- **Deskripsi:** SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate)

<a id="savetournamentstateonly"></a>
#### `saveTournamentStateOnly(isSilent = false)`

- **Definisi:** [`app.js:3931`](app.js#L3931)
- **Deskripsi:** 4. SIMPAN CEPAT KHUSUS STATE BAGAN & POIN (1 REQUEST RINGAN)
- **Titik Pemanggilan (13 lokasi):**
  - [`index.html:488`](index.html#L488) — Event `onclick`
    `<button id="btnSaveBracketGSheet" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`index.html:593`](index.html#L593) — Event `onclick`
    `<button id="btnSaveMCGGPointsGSheet" class="btn btn-primary" style="display: none; font-size: 0.85re`
  - [`app.js:222`](app.js#L222) — di dalam fungsi `toggleInvitedTeam()`
    `saveTournamentStateOnly(true);`
  - [`app.js:794`](app.js#L794) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2199`](app.js#L2199) — di dalam fungsi `toggleRegistrationStatus()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2242`](app.js#L2242) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3770`](app.js#L3770) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3824`](app.js#L3824) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3851`](app.js#L3851) — di dalam fungsi `proceedToMLBBStage2()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3864`](app.js#L3864) — di dalam fungsi `resetMLBBToStage1()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3902`](app.js#L3902) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveTournamentStateOnly(true);`
  - [`app.js:6661`](app.js#L6661) — di dalam fungsi `toggleLockMatchDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:6720`](app.js#L6720) — di dalam fungsi `resetLobbyDraw()`
    `saveTournamentStateOnly(true);`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`saveStageStateLocal()`](#savestagestatelocal)

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

- **Definisi:** [`app.js:634`](app.js#L634)
- **Deskripsi:** Client-side image compressor: compresses smartphone photos using HTML5 Canvas (<= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:694`](app.js#L694) — di dalam fungsi `compressImageFile()`
    `return compressImage(file, maxWidth, maxWidth, quality);`
  - [`app.js:3311`](app.js#L3311) — di dalam fungsi `handleEditLogoUpload()`
    `const compressed = await compressImage(file, 400, 400, 0.85);`
  - [`app.js:3328`](app.js#L3328) — di dalam fungsi `handleEditRosterIdCardUpload()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`

<a id="compressimagefile"></a>
#### `compressImageFile(file, maxWidth = 1200, quality = 0.75)`

- **Definisi:** [`app.js:693`](app.js#L693)
- **Deskripsi:** Client-side image compression helper (Canvas <= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1906`](app.js#L1906) — di dalam fungsi `handleLogoPreview()`
    `uploadedLogoBase64 = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:1921`](app.js#L1921) — di dalam fungsi `handleSingleIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:1943`](app.js#L1943) — di dalam fungsi `handlePlayerIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="openglossarymodal"></a>
#### `openGlossaryModal()`

- **Definisi:** [`app.js:733`](app.js#L733)
- **Deskripsi:** Modal Glosarium Istilah Turnamen
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:36`](index.html#L36) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.75rem; bo`

<a id="closeglossarymodal"></a>
#### `closeGlossaryModal()`

- **Definisi:** [`app.js:738`](app.js#L738)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:802`](index.html#L802) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeGlossaryModal()">✕ Tut`
  - [`index.html:831`](index.html#L831) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeGlossaryModal()">Tutup</button>`

<a id="openresetbaganmodal"></a>
#### `openResetBaganModal()`

- **Definisi:** [`app.js:744`](app.js#L744)
- **Deskripsi:** Modal Reset Bagan dengan Verifikasi Password/PIN
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3883`](app.js#L3883) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `openResetBaganModal();`

<a id="closeresetbaganmodal"></a>
#### `closeResetBaganModal()`

- **Definisi:** [`app.js:753`](app.js#L753)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:846`](index.html#L846) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeResetBaganModal()">Batal</button>`
  - [`app.js:772`](app.js#L772) — di dalam fungsi `confirmResetBaganWithPin()`
    `closeResetBaganModal();`

<a id="getidcardmap"></a>
#### `getIdCardMap()`

- **Definisi:** [`app.js:1001`](app.js#L1001)
- **Deskripsi:** Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1042`](app.js#L1042) — di dalam fungsi `saveIdCardToMap()`
    `let map = getIdCardMap();`
  - [`app.js:1059`](app.js#L1059) — di dalam fungsi `findIdCardByEmpIdOrName()`
    `const map = getIdCardMap();`

<a id="saveidcardtomap"></a>
#### `saveIdCardToMap(empId, name, cardUrl)`

- **Definisi:** [`app.js:1040`](app.js#L1040)
- **Deskripsi:** Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasarkan NIP/Nama.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1123`](app.js#L1123) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(p.empId, p.name, resolvedCard);`
  - [`app.js:1134`](app.js#L1134) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(m.empId, m.name, resolvedCard);`
  - [`app.js:1214`](app.js#L1214) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sheetItem.empId, sheetItem.name, rootIdCard);`
  - [`app.js:1239`](app.js#L1239) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sM.empId, sM.name, mIdCard);`
  - [`app.js:3380`](app.js#L3380) — di dalam fungsi `saveParticipantEdit()`
    `saveIdCardToMap(m.empId, m.name, m.idCard);`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="findidcardbyempidorname"></a>
#### `findIdCardByEmpIdOrName(empId, name)`

- **Definisi:** [`app.js:1058`](app.js#L1058)
- **Deskripsi:** Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama peserta.
- **Titik Pemanggilan (8 lokasi):**
  - [`app.js:1120`](app.js#L1120) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name) || (p.roster && p.roster[0`
  - [`app.js:1131`](app.js#L1131) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' `
  - [`app.js:1212`](app.js#L1212) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const rootIdCard = sheetItem.idCard || (localItem ? localItem.idCard : '') || findIdCardByEmpIdOrNam`
  - [`app.js:1234`](app.js#L1234) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `let mIdCard = sM.idCard || (lM ? lM.idCard : '') || findIdCardByEmpIdOrName(sM.empId, sM.name) || (d`
  - [`app.js:2877`](app.js#L2877) — di dalam fungsi `handleRegister()`
    `mcggIdCard = existingParticipant.idCard || (existingParticipant.roster && existingParticipant.roster`
  - [`app.js:3271`](app.js#L3271) — di dalam fungsi `openEditParticipantModal()`
    `editRosterIdCards[idx] = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MC`
  - [`app.js:3482`](app.js#L3482) — di dalam fungsi `viewRosterDetail()`
    `const cardSrc = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (team.category === 'MCGG' ? `
  - [`app.js:3562`](app.js#L3562) — di dalam fungsi `renderParticipants()`
    `const card = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idC`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="getlogomap"></a>
#### `getLogoMap()`

- **Definisi:** [`app.js:1076`](app.js#L1076)
- **Deskripsi:** Pemetaan Logo sesuai Nama Tim (MLBB)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1092`](app.js#L1092) — di dalam fungsi `saveLogoToMap()`
    `let map = getLogoMap();`
  - [`app.js:1101`](app.js#L1101) — di dalam fungsi `findLogoByTeamName()`
    `const map = getLogoMap();`

<a id="savelogotomap"></a>
#### `saveLogoToMap(teamName, logoUrl)`

- **Definisi:** [`app.js:1090`](app.js#L1090)
- **Deskripsi:** Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasarkan nama tim.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1115`](app.js#L1115) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveLogoToMap(p.name, resolvedLogo);`
  - [`app.js:1208`](app.js#L1208) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveLogoToMap(sheetItem.name, teamLogo);`
  - [`app.js:3357`](app.js#L3357) — di dalam fungsi `saveParticipantEdit()`
    `saveLogoToMap(p.name, currentEditLogoBase64);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="findlogobyteamname"></a>
#### `findLogoByTeamName(teamName)`

- **Definisi:** [`app.js:1099`](app.js#L1099)
- **Deskripsi:** Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peserta.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:1112`](app.js#L1112) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedLogo = p.logo || findLogoByTeamName(p.name);`
  - [`app.js:1206`](app.js#L1206) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const teamLogo = sheetItem.logo || (localItem ? localItem.logo : '') || findLogoByTeamName(sheetItem`
  - [`app.js:2603`](app.js#L2603) — di dalam fungsi `handleRegister()`
    `if (existingParticipant && (existingParticipant.logo || findLogoByTeamName(existingParticipant.name)`
  - [`app.js:2604`](app.js#L2604) — di dalam fungsi `handleRegister()`
    `logoData = existingParticipant.logo || findLogoByTeamName(existingParticipant.name);`
  - [`app.js:3255`](app.js#L3255) — di dalam fungsi `openEditParticipantModal()`
    `currentEditLogoBase64 = p.logo || findLogoByTeamName(p.name) || '';`
  - [`app.js:3462`](app.js#L3462) — di dalam fungsi `viewRosterDetail()`
    `const teamLogoSrc = team.logo || findLogoByTeamName(team.name);`
  - [`app.js:3576`](app.js#L3576) — di dalam fungsi `renderParticipants()`
    `const teamLogoSrc = p.logo || findLogoByTeamName(p.name);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="handlelogopreview"></a>
#### `handleLogoPreview(event)`

- **Definisi:** [`app.js:1901`](app.js#L1901)
- **Deskripsi:** Handle Logo Upload and Live Preview
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:137`](index.html#L137) — Event `onchange`
    `<input type="file" id="teamLogoInput" accept="image/*" onchange="handleLogoPreview(event)" style="pa`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="handlesingleidcardpreview"></a>
#### `handleSingleIdCardPreview(event, target)`

- **Definisi:** [`app.js:1916`](app.js#L1916)
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

- **Definisi:** [`app.js:1938`](app.js#L1938)
- **Deskripsi:** Handle Individual ID Card Upload for Each of the 8 Players
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1999`](app.js#L1999) — di dalam fungsi `renderPlayersFormInputs()`
    `<input type="file" id="p${i}_idcard_file" accept="image/*" onchange="handlePlayerIdCardPreview(event`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="openidcardlightbox"></a>
#### `openIdCardLightbox(imgSrc, title, driveUrl = '')`

- **Definisi:** [`app.js:2432`](app.js#L2432)
- **Deskripsi:** Lightbox for Viewing Full ID Card
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3289`](app.js#L3289) — di dalam fungsi `openEditParticipantModal()`
    `<div class="idcard-thumb-sm" id="edit_m_${idx}_thumb" onclick="if(editRosterIdCards[${idx}]) openIdC`
  - [`app.js:3486`](app.js#L3486) — di dalam fungsi `viewRosterDetail()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--yokke-`
- **Memanggil Fungsi Internal:** [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="closeidcardlightbox"></a>
#### `closeIdCardLightbox()`

- **Definisi:** [`app.js:2471`](app.js#L2471)
- **Deskripsi:** Menutup modal pop-up lightbox preview ID Card pegawai.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:769`](index.html#L769) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeIdCardLightbox()">✕ Tu`

<a id="openeditparticipantmodal"></a>
#### `openEditParticipantModal(id)`

- **Definisi:** [`app.js:3204`](app.js#L3204)
- **Deskripsi:** ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3619`](app.js#L3619) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-edit-sm" title="Edit Data & Upload ID Card" onclick="openEditParticipantModal`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox), [`handleEditRosterIdCardUpload()`](#handleeditrosteridcardupload)

<a id="closeeditparticipantmodal"></a>
#### `closeEditParticipantModal()`

- **Definisi:** [`app.js:3302`](app.js#L3302)
- **Deskripsi:** Menutup modal dialog edit peserta.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:652`](index.html#L652) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeEditParticipantModal(`
  - [`index.html:724`](index.html#L724) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeEditParticipantModal()">Batal</button>`
  - [`app.js:3453`](app.js#L3453) — di dalam fungsi `saveParticipantEdit()`
    `closeEditParticipantModal();`

<a id="handleeditlogoupload"></a>
#### `handleEditLogoUpload(event)`

- **Definisi:** [`app.js:3307`](app.js#L3307)
- **Deskripsi:** Handle logo upload in Admin Edit modal
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:684`](index.html#L684) — Event `onchange`
    `<input type="file" id="editTeamLogoInput" accept="image/*" onchange="handleEditLogoUpload(event)" st`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleeditrosteridcardupload"></a>
#### `handleEditRosterIdCardUpload(event, idx)`

- **Definisi:** [`app.js:3323`](app.js#L3323)
- **Deskripsi:** Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedit pada modal admin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3292`](app.js#L3292) — di dalam fungsi `openEditParticipantModal()`
    `<input type="file" accept="image/*" style="font-size:0.7rem; width:120px;" onchange="handleEditRoste`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="closedetailmodal"></a>
#### `closeDetailModal()`

- **Definisi:** [`app.js:3517`](app.js#L3517)
- **Deskripsi:** Menutup modal dialog rincian roster tim dan galeri ID Card.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:741`](index.html#L741) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeDetailModal()">✕ Tutu`

---

### 🔧 Helper & UI Utility

<a id="showtoast"></a>
#### `showToast(msg, type = 'info', duration = 4000)`

- **Definisi:** [`app.js:700`](app.js#L700)
- **Deskripsi:** TOAST NOTIFICATIONS (CYBERPUNK DARK)
- **Titik Pemanggilan (15 lokasi):**
  - [`app.js:768`](app.js#L768) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('PIN Panitia salah! Tindakan reset dibatalkan.', 'error');`
  - [`app.js:795`](app.js#L795) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('✅ Seluruh pembagian grup, jadwal, skor match, dan bagan playoff MLBB berhasil direset tot`
  - [`app.js:810`](app.js#L810) — di dalam fungsi `bypassLoaderWithCache()`
    `showToast('Memuat turnamen menggunakan data lokal / cache offline.', 'info', 4000);`
  - [`app.js:1387`](app.js#L1387) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('Koneksi ke Google Sheets lambat. Menggunakan data cache lokal.', 'info');`
  - [`app.js:1391`](app.js#L1391) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('⚠️ Gagal mengambil data dari Google Sheets.', 'error');`
  - [`app.js:1586`](app.js#L1586) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('Beralih ke sinkronisasi serial bertahap...', 'info', 3000);`
  - [`app.js:1661`](app.js#L1661) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('✅ Seluruh perubahan data peserta, status, bagan, dan klasemen turnamen berhasil disimpan `
  - [`app.js:1664`](app.js#L1664) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('⚠️ Sebagian perubahan berhasil disinkronkan, data lokal Anda tetap aman.', 'warning', 500`
  - [`app.js:1824`](app.js#L1824) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('✅ Peraturan MLBB & MCGG berhasil diperbarui dari Google Docs!', 'success');`
  - [`app.js:1834`](app.js#L1834) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('⚠️ Gagal terhubung ke Google Docs, menggunakan cache dokumen lokal.', 'warning');`
  - [`app.js:3022`](app.js#L3022) — di dalam fungsi `handleRegister()`
    `showToast('❌ Pendaftaran ditolak: ${result.message || result.error || 'Validasi server gagal.'}', 'e`
  - [`app.js:3029`](app.js#L3029) — di dalam fungsi `handleRegister()`
    `showToast("⚠️ Gagal terhubung ke Google Sheets. Formulir Anda tetap tersimpan di draft lokal. Silaka`
  - [`app.js:3869`](app.js#L3869) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mereset pembagian grup & bagan turnamen MLBB.', '`
  - [`app.js:3873`](app.js#L3873) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('🔒 Pembagian grup MLBB sedang dikunci (Lock TM). Harap buka kunci grup terlebih dahulu.',`
  - [`app.js:3878`](app.js#L3878) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('ℹ️ Pembagian grup dan bagan MLBB saat ini sudah dalam keadaan kosong/belum diundi.', 'inf`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`app.js:986`](app.js#L986)
- **Deskripsi:** Helper to format Google Drive image URLs into viewable thumbnail image URLs
- **Titik Pemanggilan (8 lokasi):**
  - [`app.js:2439`](app.js#L2439) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3263`](app.js#L3263) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3290`](app.js#L3290) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3465`](app.js#L3465) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3487`](app.js#L3487) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3577`](app.js#L3577) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`functional_tests.js:94`](functional_tests.js#L94) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

<a id="switchtab"></a>
#### `switchTab(tabId)`

- **Definisi:** [`app.js:2414`](app.js#L2414)
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

- **Definisi:** [`app.js:2476`](app.js#L2476)
- **Deskripsi:** Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dalam HTML DOM.
- **Titik Pemanggilan (41 lokasi):**
  - [`app.js:719`](app.js#L719) — di dalam fungsi `showToast()`
    `<span class="toast-msg">${escapeHtml(msg).replace(/\n/g, '<br>')}</span>`
  - [`app.js:1743`](app.js#L1743) — di dalam fungsi `formatRuleLine()`
    `return '<h4 style="color:var(--yokke-gold); margin:1.35rem 0 0.6rem; font-size:1.05rem; border-botto`
  - [`app.js:1748`](app.js#L1748) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-green); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bo`
  - [`app.js:1753`](app.js#L1753) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-red); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bold`
  - [`app.js:1759`](app.js#L1759) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 2rem; margin-bottom: 0.35rem; line-height: 1.55; display: flex; gap`
  - [`app.js:1765`](app.js#L1765) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 1rem; margin-bottom: 0.4rem; line-height: 1.6; display: flex; gap: `
  - [`app.js:1770`](app.js#L1770) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65; font-weight:500;">${escapeHtml(trimmed)}</`
  - [`app.js:1775`](app.js#L1775) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-left:1.5rem; margin-bottom:0.35rem; line-height:1.55; color:var(--text-mute`
  - [`app.js:1778`](app.js#L1778) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65;">${escapeHtml(trimmed)}</p>';`
  - [`app.js:2524`](app.js#L2524) — di dalam fungsi `handleTeamNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Nama Tim Sudah Terdaftar:</strong> Tim "<strong>${escapeHtml(existi`
  - [`app.js:2557`](app.js#L2557) — di dalam fungsi `handleMcggNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Peserta Sudah Terdaftar:</strong> Pemain "<strong>${escapeHtml(exis`
  - [`app.js:4864`](app.js#L4864) — di dalam fungsi `renderGroupStageUI()`
    `<span>🛡️ ${escapeHtml(gName)}</span>`
  - [`app.js:4896`](app.js#L4896) — di dalam fungsi `renderGroupStageUI()`
    `<span>${escapeHtml(t.name)}</span>`
  - [`app.js:4934`](app.js#L4934) — di dalam fungsi `renderGroupStageUI()`
    `⚠️ TIE-BREAKER MATCH DIPERLUKAN (${escapeHtml(tb.group)})`
  - [`app.js:4937`](app.js#L4937) — di dalam fungsi `renderGroupStageUI()`
    `Peringkat 2 & 3 grup <strong>${escapeHtml(tb.group)}</strong> memiliki poin sama (<strong>${escapeHt`
  - [`app.js:4944`](app.js#L4944) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:4945`](app.js#L4945) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:5448`](app.js#L5448) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>🛡️</span> <span>Jadwal ${escapeHtml(gName)} • ${dayLabel}</span>`
  - [`app.js:5462`](app.js#L5462) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>☕</span> <span><strong>Tim Istirahat Hari ${mlbbActiveDayFilter}:</strong> ${resting.map(t => `
  - [`app.js:5469`](app.js#L5469) — di dalam fungsi `renderGroupFixturesUI()`
    `html += '<p style="color:var(--text-muted);font-size:0.85rem;padding:0.4rem 0;">Tidak ada pertanding`
  - [`app.js:5491`](app.js#L5491) — di dalam fungsi `renderGroupFixturesUI()`
    `<span style="font-weight:600;">${escapeHtml(f.teamA)} ${f.winner === f.teamA ? '🏆' : ''}</span>`
  - [`app.js:5495`](app.js#L5495) — di dalam fungsi `renderGroupFixturesUI()`
    `<span style="font-weight:600;">${escapeHtml(f.teamB)} ${f.winner === f.teamB ? '🏆' : ''}</span>`
  - [`app.js:5500`](app.js#L5500) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>⭐ MVP: <strong style="color:#fff;">${escapeHtml(f.mvpPlayer)}</strong> ${f.mvpHero ? '<span st`
  - [`app.js:5501`](app.js#L5501) — di dalam fungsi `renderGroupFixturesUI()`
    `${f.mvpTeam ? '<span style="font-size:0.68rem; color:var(--yokke-cyan);">${escapeHtml(f.mvpTeam)}</s`
  - [`app.js:5629`](app.js#L5629) — di dalam fungsi `renderGroupPlayoffTree()`
    `⭐ MVP: ${escapeHtml(m.mvpPlayer)}${m.mvpHero ? ' (${escapeHtml(m.mvpHero)})' : ''}`
  - [`app.js:6463`](app.js#L6463) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; over`
  - [`app.js:6464`](app.js#L6464) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `🎮 ${escapeHtml(item.playerNick)}`
  - [`app.js:6466`](app.js#L6466) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text`
  - [`app.js:6467`](app.js#L6467) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `👤 ${escapeHtml(item.playerName)}`
  - [`app.js:7191`](app.js#L7191) — di dalam fungsi `renderLobbyRowsHtml()`
    `<span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? escapeHtm`
  - [`app.js:7194`](app.js#L7194) — di dalam fungsi `renderLobbyRowsHtml()`
    `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? '<span>👤 ${escapeHtml(p.name)}</spa`
  - [`app.js:7195`](app.js#L7195) — di dalam fungsi `renderLobbyRowsHtml()`
    `${p.gameId && p.gameId !== '-' ? '${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' `
  - [`app.js:7918`](app.js#L7918) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<span>🛡️</span> <span>Klasemen & Pertandingan: ${escapeHtml(gName)}</span>`
  - [`app.js:7934`](app.js#L7934) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">📊 Klasemen Sementara ${esc`
  - [`app.js:7961`](app.js#L7961) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<td style="font-weight:700;color:#fff;">${escapeHtml(t.name)}</td>`
  - [`app.js:7980`](app.js#L7980) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3`
  - [`app.js:8000`](app.js#L8000) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `${escapeHtml(f.teamA)} ${winner === f.teamA ? '🏆' : ''}`
  - [`app.js:8010`](app.js#L8010) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`app.js:8013`](app.js#L8013) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="promptGr`
  - [`app.js:8019`](app.js#L8019) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `${winner === f.teamB ? '🏆 ' : ''}${escapeHtml(f.teamB)}`
  - [`app.js:8024`](app.js#L8024) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<span>⭐ <strong>MVP Match:</strong> ${escapeHtml(f.mvpPlayer)} ${f.mvpHero ? '(${escapeHtml(f.mvpHer`

<a id="filterlist"></a>
#### `filterList(cat)`

- **Definisi:** [`app.js:3196`](app.js#L3196)
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

- **Definisi:** [`app.js:3692`](app.js#L3692)
- **Deskripsi:** Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP_2, GROUP_4, KNOCKOUT).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:465`](index.html#L465) — Event `onchange`
    `<select id="bracketFormat" onchange="changeTournamentFormat()" style="padding: 0.5rem 0.8rem; font-s`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat)

<a id="setdrawtargetandscroll"></a>
#### `setDrawTargetAndScroll(lobbyKey)`

- **Definisi:** [`app.js:6776`](app.js#L6776)
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
- **Titik Pemanggilan (8 lokasi):**
  - [`app.js:986`](app.js#L986) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`app.js:2439`](app.js#L2439) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3263`](app.js#L3263) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3290`](app.js#L3290) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3465`](app.js#L3465) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3487`](app.js#L3487) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3577`](app.js#L3577) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

---

### 🛡️ Autentikasi & Hak Akses Panitia

<a id="confirmresetbaganwithpin"></a>
#### `confirmResetBaganWithPin()`

- **Definisi:** [`app.js:758`](app.js#L758)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:847`](index.html#L847) — Event `onclick`
    `<button class="btn btn-danger-sm" style="padding: 0.5rem 1.1rem; font-size: 0.85rem;" onclick="confi`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`closeResetBaganModal()`](#closeresetbaganmodal), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="openloginmodal"></a>
#### `openLoginModal()`

- **Definisi:** [`app.js:2080`](app.js#L2080)
- **Deskripsi:** Auth functions
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:44`](index.html#L44) — Event `onclick`
    `<button id="btnLoginPanitia" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8`

<a id="closeloginmodal"></a>
#### `closeLoginModal()`

- **Definisi:** [`app.js:2087`](app.js#L2087)
- **Deskripsi:** Menutup modal dialog login PIN panitia.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:787`](index.html#L787) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeLoginModal()">Batal</button>`
  - [`app.js:2097`](app.js#L2097) — di dalam fungsi `verifyAdminPin()`
    `closeLoginModal();`

<a id="verifyadminpin"></a>
#### `verifyAdminPin()`

- **Definisi:** [`app.js:2091`](app.js#L2091)
- **Deskripsi:** Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif penuh.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:788`](index.html#L788) — Event `onclick`
    `<button class="btn btn-primary" onclick="verifyAdminPin()">Masuk</button>`
- **Memanggil Fungsi Internal:** [`closeLoginModal()`](#closeloginmodal), [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="logoutadmin"></a>
#### `logoutAdmin()`

- **Definisi:** [`app.js:2107`](app.js#L2107)
- **Deskripsi:** Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (read-only).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:45`](index.html#L45) — Event `onclick`
    `<button id="btnLogoutPanitia" class="btn btn-outline" style="display: none; padding: 0.25rem 0.75rem`
- **Memanggil Fungsi Internal:** [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="updateauthui"></a>
#### `updateAuthUI()`

- **Definisi:** [`app.js:2246`](app.js#L2246)
- **Deskripsi:** Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock, dan form interaktif.
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:791`](app.js#L791) — di dalam fungsi `confirmResetBaganWithPin()`
    `updateAuthUI();`
  - [`app.js:1358`](app.js#L1358) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateAuthUI();`
  - [`app.js:1722`](app.js#L1722) — di dalam fungsi `saveState()`
    `updateAuthUI();`
  - [`app.js:2098`](app.js#L2098) — di dalam fungsi `verifyAdminPin()`
    `updateAuthUI();`
  - [`app.js:2110`](app.js#L2110) — di dalam fungsi `logoutAdmin()`
    `updateAuthUI();`
  - [`app.js:2196`](app.js#L2196) — di dalam fungsi `toggleRegistrationStatus()`
    `updateAuthUI();`
  - [`app.js:2241`](app.js#L2241) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `updateAuthUI();`
  - [`app.js:3768`](app.js#L3768) — di dalam fungsi `toggleLockMLBBGroup()`
    `updateAuthUI();`
  - [`app.js:3849`](app.js#L3849) — di dalam fungsi `proceedToMLBBStage2()`
    `updateAuthUI();`
  - [`app.js:3862`](app.js#L3862) — di dalam fungsi `resetMLBBToStage1()`
    `updateAuthUI();`
  - [`app.js:3901`](app.js#L3901) — di dalam fungsi `toggleLockMCGGLobbies()`
    `updateAuthUI();`
  - [`app.js:7540`](app.js#L7540) — cakupan global / event handler
    `updateAuthUI();`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui)

---

### 📋 Regulasi Turnamen (Rules Editor)

<a id="formatruleline"></a>
#### `formatRuleLine(l)`

- **Definisi:** [`app.js:1736`](app.js#L1736)
- **Deskripsi:** Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="fetchrulesfromgoogledoc"></a>
#### `fetchRulesFromGoogleDoc(silent = false)`

- **Definisi:** [`app.js:1782`](app.js#L1782)
- **Deskripsi:** Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: tab=t.0 & MCGG: tab=t.ji56ljhdhzkr)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:389`](index.html#L389) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`app.js:2427`](app.js#L2427) — di dalam fungsi `switchTab()`
    `fetchRulesFromGoogleDoc(true);`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`showToast()`](#showtoast)

<a id="renderrules"></a>
#### `renderRules()`

- **Definisi:** [`app.js:1840`](app.js#L1840)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:1314`](app.js#L1314) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRules();`
  - [`app.js:1819`](app.js#L1819) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `renderRules();`
  - [`app.js:1873`](app.js#L1873) — di dalam fungsi `saveCustomRules()`
    `renderRules();`
  - [`app.js:1896`](app.js#L1896) — di dalam fungsi `resetRulesToDefault()`
    `renderRules();`
  - [`app.js:2426`](app.js#L2426) — di dalam fungsi `switchTab()`
    `renderRules();`
  - [`app.js:7539`](app.js#L7539) — cakupan global / event handler
    `renderRules();`

<a id="toggleeditrules"></a>
#### `toggleEditRules()`

- **Definisi:** [`app.js:1854`](app.js#L1854)
- **Deskripsi:** Membuka/menutup form editor peraturan turnamen khusus panitia.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:399`](index.html#L399) — Event `onclick`
    `<button class="btn btn-gold" id="btnToggleEditRules" style="font-size: 0.8rem; padding: 0.4rem 0.8re`
  - [`index.html:433`](index.html#L433) — Event `onclick`
    `<button class="btn btn-outline" onclick="toggleEditRules()">Batal</button>`
  - [`app.js:1874`](app.js#L1874) — di dalam fungsi `saveCustomRules()`
    `toggleEditRules();`

<a id="savecustomrules"></a>
#### `saveCustomRules()`

- **Definisi:** [`app.js:1860`](app.js#L1860)
- **Deskripsi:** Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Google Sheets.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:432`](index.html#L432) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveCustomRules()">💾 Simpan Peraturan</button>`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`toggleEditRules()`](#toggleeditrules)

<a id="resetrulestodefault"></a>
#### `resetRulesToDefault()`

- **Definisi:** [`app.js:1891`](app.js#L1891)
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
  - [`google_apps_script.js:1101`](google_apps_script.js#L1101) — di dalam fungsi `doPost()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1734`](google_apps_script.js#L1734) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `if (!ss) ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1994`](google_apps_script.js#L1994) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `var ss = getTargetSpreadsheet();`
  - [`functional_tests.js:459`](functional_tests.js#L459) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getTargetSpreadsheet('), 'Harus memiliki fungsi getTargetSpreadshe`

<a id="ensurerelationalsheetsexist"></a>
#### `ensureRelationalSheetsExist(ss)`

- **Definisi:** [`google_apps_script.js:313`](google_apps_script.js#L313)
- **Deskripsi:** Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Parent Tim) 2. 'MLBB - Peserta' (Child Roster Anggota) 3. 'Pendaftaran MCGG' (Pemain Solo) /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:1102`](google_apps_script.js#L1102) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1435`](google_apps_script.js#L1435) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1618`](google_apps_script.js#L1618) — di dalam fungsi `doPost()`
    `var mcggListing = getMcggListing(ss);`
  - [`functional_tests.js:467`](functional_tests.js#L467) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMcggListing('), 'Harus ada fungsi getMcggListing');`

<a id="getorcreatesheet"></a>
#### `getOrCreateSheet(ss, sheetName)`

- **Definisi:** [`google_apps_script.js:1721`](google_apps_script.js#L1721)
- **Deskripsi:** Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncdedicatedtournamentsheets"></a>
#### `syncDedicatedTournamentSheets(ss, payload)`

- **Definisi:** [`google_apps_script.js:1733`](google_apps_script.js#L1733)
- **Deskripsi:** Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah Dipanggil otomatis saat action === 'SAVE_CONFIG' atau 'CREATE_TOURNAMENT_SHEETS' /
- **Titik Pemanggilan (7 lokasi):**
  - [`google_apps_script.js:1193`](google_apps_script.js#L1193) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1206`](google_apps_script.js#L1206) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1982`](google_apps_script.js#L1982) — di dalam fungsi `syncListBagan()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData, mcggLobbies: mcggData });`
  - [`google_apps_script.js:1986`](google_apps_script.js#L1986) — di dalam fungsi `syncListPoint()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData });`
  - [`google_apps_script.js:1990`](google_apps_script.js#L1990) — di dalam fungsi `syncListPointAndCommanderMCGG()`
    `return syncDedicatedTournamentSheets(ss, { mcggLobbies: mcggData });`
  - [`google_apps_script.js:2017`](google_apps_script.js#L2017) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `syncDedicatedTournamentSheets(ss, payload);`
  - [`functional_tests.js:783`](functional_tests.js#L783) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function syncDedicatedTournamentSheets('), 'Harus memiliki fungsi syncDedic`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`fmtRank()`](#fmtrank)

<a id="createorupdatealltournamentsheets"></a>
#### `createOrUpdateAllTournamentSheets(groupStageData, mcggLobbies)`

- **Definisi:** [`google_apps_script.js:1993`](google_apps_script.js#L1993)
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
  - [`google_apps_script.js:1144`](google_apps_script.js#L1144) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1131`](google_apps_script.js#L1131) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1424`](google_apps_script.js#L1424) — di dalam fungsi `doPost()`
    `var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);`
  - [`google_apps_script.js:1604`](google_apps_script.js#L1604) — di dalam fungsi `doPost()`
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

- **Definisi:** [`google_apps_script.js:1133`](google_apps_script.js#L1133)
- **Titik Pemanggilan (4 lokasi):**
  - [`google_apps_script.js:1429`](google_apps_script.js#L1429) — di dalam fungsi `doPost()`
    `logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);`
  - [`google_apps_script.js:1476`](google_apps_script.js#L1476) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1557`](google_apps_script.js#L1557) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1610`](google_apps_script.js#L1610) — di dalam fungsi `doPost()`
    `mcggIdCardUrl = saveBase64Image(mcggCard, "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", `

<a id="fmtrank"></a>
#### `fmtRank(r)`

- **Definisi:** [`google_apps_script.js:1912`](google_apps_script.js#L1912)
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:1953`](google_apps_script.js#L1953) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r1),`
  - [`google_apps_script.js:1955`](google_apps_script.js#L1955) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r2),`
  - [`google_apps_script.js:1957`](google_apps_script.js#L1957) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r3),`

<a id="synclistbagan"></a>
#### `syncListBagan(ss, groupData, mcggData)`

- **Definisi:** [`google_apps_script.js:1981`](google_apps_script.js#L1981)
- **Deskripsi:** Wrapper kompatibilitas untuk pemicu manual / lama /
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:114`](functional_tests.js#L114) — pada skenario pengujian
    `assert(gasCode.includes('function syncListBagan('), 'Harus memiliki fungsi syncListBagan');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpoint"></a>
#### `syncListPoint(ss, groupData)`

- **Definisi:** [`google_apps_script.js:1985`](google_apps_script.js#L1985)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:115`](functional_tests.js#L115) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPoint('), 'Harus memiliki fungsi syncListPoint');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpointandcommandermcgg"></a>
#### `syncListPointAndCommanderMCGG(ss, mcggData)`

- **Definisi:** [`google_apps_script.js:1989`](google_apps_script.js#L1989)
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

- **Definisi:** [`google_apps_script.js:1081`](google_apps_script.js#L1081)
- **Deskripsi:** 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:532`](functional_tests.js#L532) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`getOrCreateSubFolder()`](#getorcreatesubfolder), [`saveBase64Image()`](#savebase64image), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMcggListing()`](#getmcgglisting)

---

