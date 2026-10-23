# 📖 INDEKS FUNGSI DAN PETA PEMANGGILAN KODE (FUNCTION MAP)
> **Turnamen E-Sports Yokke Squad 2026**  
> *Dokumen ini dibuat otomatis oleh script `scripts/generate_function_index.js`. Pembaruan dilakukan secara otomatis setiap kali ada perubahan pada source code.*

---

## 📊 Ringkasan Eksekutif
- **Total Fungsi Terdaftar:** 213 fungsi (170 di `app.js`, 21 di `google_apps_script.js`)
- **Total Titik Pemanggilan (Call Sites):** 867 titik pemanggilan teridentifikasi
- **Terakhir Diperbarui:** 23/10/2026, 23.55.43 WIB
- **Cara Memperbarui Otomatis:**
  - Sekali jalan: `node scripts/generate_function_index.js`
  - Mode Pantau (Realtime Auto-Update saat simpan kode): `node scripts/generate_function_index.js --watch`
  - Bersamaan saat test: `node tests/functional_tests.js`

---

## 📑 Daftar Isi Modul
1. [♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) (46 fungsi)](#turnamen-mcgg-klasemen-undian-commander-penalti)
2. [⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) (30 fungsi)](#turnamen-mlbb-bagan-grup-playoff-engine)
3. [👥 Manajemen Peserta & Roster (10 fungsi)](#manajemen-peserta-roster)
4. [📦 Modul Aplikasi Umum (66 fungsi)](#modul-aplikasi-umum)
5. [☁️ Sinkronisasi Google Sheets & State Storage (6 fungsi)](#sinkronisasi-google-sheets-state-storage)
6. [🆔 Modal Dialog & Bukti ID Card (17 fungsi)](#modal-dialog-bukti-id-card)
7. [🔧 Helper & UI Utility (8 fungsi)](#helper-ui-utility)
8. [📋 Regulasi Turnamen (Rules Editor) (4 fungsi)](#regulasi-turnamen-rules-editor)
9. [🛡️ Autentikasi & Hak Akses Panitia (5 fungsi)](#autentikasi-hak-akses-panitia)
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
| 5 | [**`toggleAllMLBBFixtures()`**](#toggleallmlbbfixtures) | [app.js:32](app.js#L32) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk toggleAllMLBBFixtures | 1x |
| 6 | [**`getActiveMCGGLobbyKeys()`**](#getactivemcgglobbykeys) | [app.js:37](app.js#L37) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getActiveMCGGLobbyKeys | 2x |
| 7 | [**`prevMCGGGroupPage()`**](#prevmcgggrouppage) | [app.js:54](app.js#L54) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk prevMCGGGroupPage | 3x |
| 8 | [**`nextMCGGGroupPage()`**](#nextmcgggrouppage) | [app.js:61](app.js#L61) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk nextMCGGGroupPage | 3x |
| 9 | [**`goToMCGGGroupPage()`**](#gotomcgggrouppage) | [app.js:68](app.js#L68) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk goToMCGGGroupPage | 1x |
| 10 | [**`toggleMCGGLayoutMode()`**](#togglemcgglayoutmode) | [app.js:73](app.js#L73) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk toggleMCGGLayoutMode | 0x |
| 11 | [**`getInitialParticipants()`**](#getinitialparticipants) | [app.js:89](app.js#L89) | 👥 Manajemen Peserta & Roster | Inisialisasi daftar peserta dari localStorage dengan validasi versi data (D... | 1x |
| 12 | [**`getTeamPrefix()`**](#getteamprefix) | [app.js:112](app.js#L112) | 📦 Modul Aplikasi Umum | Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama) | 7x |
| 13 | [**`getDepartmentCluster()`**](#getdepartmentcluster) | [app.js:124](app.js#L124) | 📦 Modul Aplikasi Umum | Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resm... | 7x |
| 14 | [**`getTeamDept()`**](#getteamdept) | [app.js:182](app.js#L182) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 6x |
| 15 | [**`isTeamInvited()`**](#isteaminvited) | [app.js:204](app.js#L204) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 7x |
| 16 | [**`toggleInvitedTeam()`**](#toggleinvitedteam) | [app.js:212](app.js#L212) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleInvitedTeam | 2x |
| 17 | [**`showGlobalLoader()`**](#showgloballoader) | [app.js:247](app.js#L247) | 📦 Modul Aplikasi Umum | Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets) | 1x |
| 18 | [**`hideGlobalLoader()`**](#hidegloballoader) | [app.js:261](app.js#L261) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hideGlobalLoader | 2x |
| 19 | [**`saveStageStateLocal()`**](#savestagestatelocal) | [app.js:358](app.js#L358) | ☁️ Sinkronisasi Google Sheets & State Storage | Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM,... | 10x |
| 20 | [**`getCommanderFormattedName()`**](#getcommanderformattedname) | [app.js:414](app.js#L414) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika t... | 5x |
| 21 | [**`renderCommanderCirclesHtml()`**](#rendercommandercircleshtml) | [app.js:425](app.js#L425) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen | 3x |
| 22 | [**`renderCommanderCardVisualHtml()`**](#rendercommandercardvisualhtml) | [app.js:454](app.js#L454) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian | 1x |
| 23 | [**`compressImage()`**](#compressimage) | [app.js:615](app.js#L615) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compressor: compresses smartphone photos to clean ~80-120... | 5x |
| 24 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [app.js:649](app.js#L649) | 🔧 Helper & UI Utility | Helper to format Google Drive image URLs into viewable thumbnail image URLs | 13x |
| 25 | [**`getIdCardMap()`**](#getidcardmap) | [app.js:664](app.js#L664) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama | 2x |
| 26 | [**`saveIdCardToMap()`**](#saveidcardtomap) | [app.js:703](app.js#L703) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasar... | 5x |
| 27 | [**`findIdCardByEmpIdOrName()`**](#findidcardbyempidorname) | [app.js:721](app.js#L721) | 🆔 Modal Dialog & Bukti ID Card | Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama p... | 12x |
| 28 | [**`getLogoMap()`**](#getlogomap) | [app.js:739](app.js#L739) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan Logo sesuai Nama Tim (MLBB) | 2x |
| 29 | [**`saveLogoToMap()`**](#savelogotomap) | [app.js:753](app.js#L753) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasa... | 3x |
| 30 | [**`findLogoByTeamName()`**](#findlogobyteamname) | [app.js:762](app.js#L762) | 🆔 Modal Dialog & Bukti ID Card | Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peser... | 8x |
| 31 | [**`autoLinkParticipantsAssets()`**](#autolinkparticipantsassets) | [app.js:770](app.js#L770) | 👥 Manajemen Peserta & Roster | Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada | 5x |
| 32 | [**`fetchParticipantsFromGoogleSheet()`**](#fetchparticipantsfromgooglesheet) | [app.js:805](app.js#L805) | 👥 Manajemen Peserta & Roster | Fetch registered participants from Google Sheets via doGet Webhook Google S... | 5x |
| 33 | [**`getItemKey()`**](#getitemkey) | [app.js:829](app.js#L829) | 📦 Modul Aplikasi Umum | Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name | 2x |
| 34 | [**`cleanOrphanedTournamentData()`**](#cleanorphanedtournamentdata) | [app.js:1058](app.js#L1058) | 📦 Modul Aplikasi Umum | Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup... | 2x |
| 35 | [**`resetCacheAndFollowGSheet()`**](#resetcacheandfollowgsheet) | [app.js:1144](app.js#L1144) | ☁️ Sinkronisasi Google Sheets & State Storage | Reset cache lokal dan ikuti 100% data aktif dari Google Sheets | 1x |
| 36 | [**`saveAllChangesToGoogleSheet()`**](#saveallchangestogooglesheet) | [app.js:1177](app.js#L1177) | ☁️ Sinkronisasi Google Sheets & State Storage | SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS | 1x |
| 37 | [**`syncTournamentSheetsToGSheet()`**](#synctournamentsheetstogsheet) | [app.js:1261](app.js#L1261) | ☁️ Sinkronisasi Google Sheets & State Storage | SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET | 0x |
| 38 | [**`saveState()`**](#savestate) | [app.js:1300](app.js#L1300) | 📦 Modul Aplikasi Umum | Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi ... | 35x |
| 39 | [**`updateCounts()`**](#updatecounts) | [app.js:1311](app.js#L1311) | 📦 Modul Aplikasi Umum | Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status veri... | 5x |
| 40 | [**`renderRules()`**](#renderrules) | [app.js:1321](app.js#L1321) | 📋 Regulasi Turnamen (Rules Editor) | Rules System | 5x |
| 41 | [**`toggleEditRules()`**](#toggleeditrules) | [app.js:1333](app.js#L1333) | 📋 Regulasi Turnamen (Rules Editor) | Membuka/menutup form editor peraturan turnamen khusus panitia. | 3x |
| 42 | [**`saveCustomRules()`**](#savecustomrules) | [app.js:1339](app.js#L1339) | 📋 Regulasi Turnamen (Rules Editor) | Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Goo... | 1x |
| 43 | [**`resetRulesToDefault()`**](#resetrulestodefault) | [app.js:1370](app.js#L1370) | 📋 Regulasi Turnamen (Rules Editor) | Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026... | 1x |
| 44 | [**`handleLogoPreview()`**](#handlelogopreview) | [app.js:1380](app.js#L1380) | 🆔 Modal Dialog & Bukti ID Card | Handle Logo Upload and Live Preview | 1x |
| 45 | [**`handleSingleIdCardPreview()`**](#handlesingleidcardpreview) | [app.js:1394](app.js#L1394) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Officials and MCGG | 3x |
| 46 | [**`handlePlayerIdCardPreview()`**](#handleplayeridcardpreview) | [app.js:1415](app.js#L1415) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Each of the 8 Players | 1x |
| 47 | [**`toggleOfficial2Form()`**](#toggleofficial2form) | [app.js:1430](app.js#L1430) | 📦 Modul Aplikasi Umum | Toggle Official 2 Form | 5x |
| 48 | [**`renderPlayersFormInputs()`**](#renderplayersforminputs) | [app.js:1437](app.js#L1437) | 📦 Modul Aplikasi Umum | Generate the 8 players form fields dynamically (Included In-Game Nickname a... | 2x |
| 49 | [**`toggleCategoryForm()`**](#togglecategoryform) | [app.js:1496](app.js#L1496) | 📦 Modul Aplikasi Umum | Switch form between MLBB and MCGG cleanly | 3x |
| 50 | [**`openLoginModal()`**](#openloginmodal) | [app.js:1556](app.js#L1556) | 🛡️ Autentikasi & Hak Akses Panitia | Auth functions | 1x |
| 51 | [**`closeLoginModal()`**](#closeloginmodal) | [app.js:1563](app.js#L1563) | 🛡️ Autentikasi & Hak Akses Panitia | Menutup modal dialog login PIN panitia. | 2x |
| 52 | [**`verifyAdminPin()`**](#verifyadminpin) | [app.js:1567](app.js#L1567) | 🛡️ Autentikasi & Hak Akses Panitia | Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif p... | 1x |
| 53 | [**`logoutAdmin()`**](#logoutadmin) | [app.js:1583](app.js#L1583) | 🛡️ Autentikasi & Hak Akses Panitia | Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (r... | 1x |
| 54 | [**`renderRegistrationUI()`**](#renderregistrationui) | [app.js:1592](app.js#L1592) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderRegistrationUI | 4x |
| 55 | [**`toggleRegistrationStatus()`**](#toggleregistrationstatus) | [app.js:1658](app.js#L1658) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk toggleRegistrationStatus | 5x |
| 56 | [**`resetMCGGPointsAndDraw()`**](#resetmcggpointsanddraw) | [app.js:1679](app.js#L1679) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetMCGGPointsAndDraw | 2x |
| 57 | [**`updateAuthUI()`**](#updateauthui) | [app.js:1722](app.js#L1722) | 🛡️ Autentikasi & Hak Akses Panitia | Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock,... | 12x |
| 58 | [**`switchTab()`**](#switchtab) | [app.js:1890](app.js#L1890) | 🔧 Helper & UI Utility | Navigation Tabs | 5x |
| 59 | [**`openIdCardLightbox()`**](#openidcardlightbox) | [app.js:1907](app.js#L1907) | 🆔 Modal Dialog & Bukti ID Card | Lightbox for Viewing Full ID Card | 2x |
| 60 | [**`closeIdCardLightbox()`**](#closeidcardlightbox) | [app.js:1946](app.js#L1946) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal pop-up lightbox preview ID Card pegawai. | 1x |
| 61 | [**`escapeHtml()`**](#escapehtml) | [app.js:1951](app.js#L1951) | 🔧 Helper & UI Utility | Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dal... | 33x |
| 62 | [**`updateRegistrationDatalists()`**](#updateregistrationdatalists) | [app.js:1963](app.js#L1963) | 📦 Modul Aplikasi Umum | Sinkronkan Datalist Nama Tim / Pemain untuk Fitur Update Cepat di Formulir ... | 3x |
| 63 | [**`handleTeamNameInput()`**](#handleteamnameinput) | [app.js:1985](app.js#L1985) | 📦 Modul Aplikasi Umum | Handler saat Peserta Mengetik / Memilih Nama Tim MLBB di Form Pendaftaran | 2x |
| 64 | [**`handleMcggNameInput()`**](#handlemcggnameinput) | [app.js:2131](app.js#L2131) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Handler saat Peserta Mengetik / Memilih Nama Pemain Solo MCGG di Form Penda... | 2x |
| 65 | [**`handleRegister()`**](#handleregister) | [app.js:2189](app.js#L2189) | 👥 Manajemen Peserta & Roster | Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Ca... | 1x |
| 66 | [**`setParticipantStatus()`**](#setparticipantstatus) | [app.js:2717](app.js#L2717) | 👥 Manajemen Peserta & Roster | Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets | 2x |
| 67 | [**`deleteParticipant()`**](#deleteparticipant) | [app.js:2758](app.js#L2758) | 👥 Manajemen Peserta & Roster | Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat k... | 1x |
| 68 | [**`filterList()`**](#filterlist) | [app.js:2805](app.js#L2805) | 🔧 Helper & UI Utility | Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/... | 3x |
| 69 | [**`openEditParticipantModal()`**](#openeditparticipantmodal) | [app.js:2813](app.js#L2813) | 🆔 Modal Dialog & Bukti ID Card | ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION | 1x |
| 70 | [**`closeEditParticipantModal()`**](#closeeditparticipantmodal) | [app.js:2911](app.js#L2911) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog edit peserta. | 3x |
| 71 | [**`handleEditLogoUpload()`**](#handleeditlogoupload) | [app.js:2916](app.js#L2916) | 🆔 Modal Dialog & Bukti ID Card | Handle logo upload in Admin Edit modal | 1x |
| 72 | [**`handleEditRosterIdCardUpload()`**](#handleeditrosteridcardupload) | [app.js:2932](app.js#L2932) | 🆔 Modal Dialog & Bukti ID Card | Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedi... | 1x |
| 73 | [**`saveParticipantEdit()`**](#saveparticipantedit) | [app.js:2943](app.js#L2943) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk saveParticipantEdit | 1x |
| 74 | [**`viewRosterDetail()`**](#viewrosterdetail) | [app.js:3067](app.js#L3067) | 👥 Manajemen Peserta & Roster | Modal Detail Roster Lengkap & ID Card Per-Pemain | 1x |
| 75 | [**`closeDetailModal()`**](#closedetailmodal) | [app.js:3126](app.js#L3126) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog rincian roster tim dan galeri ID Card. | 1x |
| 76 | [**`renderParticipants()`**](#renderparticipants) | [app.js:3131](app.js#L3131) | 👥 Manajemen Peserta & Roster | Render Participant Table (Featuring Nickname, ID Card count per-player, and... | 10x |
| 77 | [**`getVerifiedMLBBTeams()`**](#getverifiedmlbbteams) | [app.js:3257](app.js#L3257) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE | 4x |
| 78 | [**`getActiveMLBBFormat()`**](#getactivemlbbformat) | [app.js:3265](app.js#L3265) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N... | 2x |
| 79 | [**`changeTournamentFormat()`**](#changetournamentformat) | [app.js:3284](app.js#L3284) | 🔧 Helper & UI Utility | Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP... | 1x |
| 80 | [**`renderCurrentMLBBFormat()`**](#rendercurrentmlbbformat) | [app.js:3300](app.js#L3300) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderCurrentMLBBFormat | 14x |
| 81 | [**`shuffleAndGenerateTournament()`**](#shuffleandgeneratetournament) | [app.js:3326](app.js#L3326) | 📦 Modul Aplikasi Umum | Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum di... | 1x |
| 82 | [**`toggleLockMLBBGroup()`**](#togglelockmlbbgroup) | [app.js:3345](app.js#L3345) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE) | 1x |
| 83 | [**`isAllMLBBGroupMatchesFinished()`**](#isallmlbbgroupmatchesfinished) | [app.js:3365](app.js#L3365) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan m... | 2x |
| 84 | [**`evaluateMLBBTieBreaker()`**](#evaluatemlbbtiebreaker) | [app.js:3376](app.js#L3376) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosa... | 2x |
| 85 | [**`resolveMLBBTieBreaker()`**](#resolvemlbbtiebreaker) | [app.js:3401](app.js#L3401) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan... | 3x |
| 86 | [**`proceedToMLBBStage2()`**](#proceedtomlbbstage2) | [app.js:3420](app.js#L3420) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Ba... | 3x |
| 87 | [**`resetMLBBToStage1()`**](#resetmlbbtostage1) | [app.js:3447](app.js#L3447) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor ji... | 2x |
| 88 | [**`resetTotalMLBBGroupAndBracket()`**](#resettotalmlbbgroupandbracket) | [app.js:3459](app.js#L3459) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetTotalMLBBGroupAndBracket | 1x |
| 89 | [**`toggleLockMCGGLobbies()`**](#togglelockmcgglobbies) | [app.js:3504](app.js#L3504) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM... | 1x |
| 90 | [**`validateMCGGDuplicateCommander()`**](#validatemcggduplicatecommander) | [app.js:3526](app.js#L3526) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2) | 3x |
| 91 | [**`saveTournamentStateOnly()`**](#savetournamentstateonly) | [app.js:3549](app.js#L3549) | ☁️ Sinkronisasi Google Sheets & State Storage | 4. SIMPAN CEPAT KHUSUS STATE BAGAN & POIN (1 REQUEST RINGAN) | 13x |
| 92 | [**`generateBracket()`**](#generatebracket) | [app.js:3601](app.js#L3601) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- KNOCKOUT BRACKET --- | 3x |
| 93 | [**`pickWinner()`**](#pickwinner) | [app.js:3654](app.js#L3654) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk pickWinner | 2x |
| 94 | [**`renderBracket()`**](#renderbracket) | [app.js:3674](app.js#L3674) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderBracket | 4x |
| 95 | [**`allocateMLBBGroups()`**](#allocatemlbbgroups) | [app.js:3749](app.js#L3749) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi)... | 3x |
| 96 | [**`getPrefix()`**](#getprefix) | [app.js:3761](app.js#L3761) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getPrefix | 9x |
| 97 | [**`getDept()`**](#getdept) | [app.js:3769](app.js#L3769) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getDept | 6x |
| 98 | [**`isInvited()`**](#isinvited) | [app.js:3780](app.js#L3780) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInvited | 5x |
| 99 | [**`getOverBaseCount()`**](#getoverbasecount) | [app.js:3848](app.js#L3848) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getOverBaseCount | 1x |
| 100 | [**`canAccept()`**](#canaccept) | [app.js:3850](app.js#L3850) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk canAccept | 0x |
| 101 | [**`hasPrefixConflict()`**](#hasprefixconflict) | [app.js:3884](app.js#L3884) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasPrefixConflict | 2x |
| 102 | [**`hasDeptConflict()`**](#hasdeptconflict) | [app.js:3885](app.js#L3885) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasDeptConflict | 1x |
| 103 | [**`generateGroupStage()`**](#generategroupstage) | [app.js:3939](app.js#L3939) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk generateGroupStage | 3x |
| 104 | [**`updateGroupRecord()`**](#updategrouprecord) | [app.js:3976](app.js#L3976) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk updateGroupRecord | 4x |
| 105 | [**`initGroupPlayoff()`**](#initgroupplayoff) | [app.js:3989](app.js#L3989) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seed... | 7x |
| 106 | [**`pickGroupPlayoffWinner()`**](#pickgroupplayoffwinner) | [app.js:4155](app.js#L4155) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya k... | 2x |
| 107 | [**`promptPlayoffMVP()`**](#promptplayoffmvp) | [app.js:4322](app.js#L4322) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk promptPlayoffMVP | 2x |
| 108 | [**`renderGroupStageUI()`**](#rendergroupstageui) | [app.js:4361](app.js#L4361) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupStageUI | 12x |
| 109 | [**`getGroupFixtures()`**](#getgroupfixtures) | [app.js:4583](app.js#L4583) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- BAGAN PERTANDINGAN FASE GRUP (ROUND-ROBIN BO3) --- | 4x |
| 110 | [**`setGroupMatchScore()`**](#setgroupmatchscore) | [app.js:4609](app.js#L4609) | 📦 Modul Aplikasi Umum | Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara ... | 6x |
| 111 | [**`setGroupMatchMVP()`**](#setgroupmatchmvp) | [app.js:4637](app.js#L4637) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk setGroupMatchMVP | 2x |
| 112 | [**`promptGroupMatchMVP()`**](#promptgroupmatchmvp) | [app.js:4651](app.js#L4651) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk promptGroupMatchMVP | 3x |
| 113 | [**`resetGroupMatchScore()`**](#resetgroupmatchscore) | [app.js:4683](app.js#L4683) | 📦 Modul Aplikasi Umum | Mereset skor pertandingan grup MLBB ke status belum bertanding. | 1x |
| 114 | [**`recalculateGroupStandingsFromFixtures()`**](#recalculategroupstandingsfromfixtures) | [app.js:4694](app.js#L4694) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan selu... | 2x |
| 115 | [**`renderGroupFixturesUI()`**](#rendergroupfixturesui) | [app.js:4720](app.js#L4720) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupFixturesUI | 4x |
| 116 | [**`renderGroupPlayoffTree()`**](#rendergroupplayofftree) | [app.js:4840](app.js#L4840) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau statu... | 4x |
| 117 | [**`changeMCGGLobby()`**](#changemcgglobby) | [app.js:4962](app.js#L4962) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MCGG MULTI-LOBBY STANDINGS | 0x |
| 118 | [**`getCommanderById()`**](#getcommanderbyid) | [app.js:4968](app.js#L4968) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mencari objek data commander dari master list berdasarkan ID, nama hero, at... | 1x |
| 119 | [**`updateCommanderPoolFromSetup()`**](#updatecommanderpoolfromsetup) | [app.js:4981](app.js#L4981) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk updateCommanderPoolFromSetup | 1x |
| 120 | [**`getVerifiedMCGGPlayers()`**](#getverifiedmcggplayers) | [app.js:5040](app.js#L5040) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getVerifiedMCGGPlayers | 2x |
| 121 | [**`syncMCGGPlayers()`**](#syncmcggplayers) | [app.js:5048](app.js#L5048) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGPlayers | 8x |
| 122 | [**`findPrevious()`**](#findprevious) | [app.js:5060](app.js#L5060) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 123 | [**`mapPlayerObj()`**](#mapplayerobj) | [app.js:5072](app.js#L5072) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |
| 124 | [**`allocateLobbiesByCluster()`**](#allocatelobbiesbycluster) | [app.js:5091](app.js#L5091) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase ... | 3x |
| 125 | [**`shuffleMCGGPlayers()`**](#shufflemcggplayers) | [app.js:5266](app.js#L5266) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGGPlayers | 2x |
| 126 | [**`isMCGGLobbyPointsFull()`**](#ismcgglobbypointsfull) | [app.js:5283](app.js#L5283) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGLobbyPointsFull | 4x |
| 127 | [**`isMCGGQualificationFull()`**](#ismcggqualificationfull) | [app.js:5289](app.js#L5289) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3... | 11x |
| 128 | [**`isMCGGSemiFinalFull()`**](#ismcggsemifinalfull) | [app.js:5295](app.js#L5295) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGSemiFinalFull | 1x |
| 129 | [**`syncMCGGSemiFinal()`**](#syncmcggsemifinal) | [app.js:5300](app.js#L5300) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGSemiFinal | 2x |
| 130 | [**`sortFn()`**](#sortfn) | [app.js:5305](app.js#L5305) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk sortFn | 0x |
| 131 | [**`findPrevSemi()`**](#findprevsemi) | [app.js:5343](app.js#L5343) | 📦 Modul Aplikasi Umum | Preserve poin semifinal jika sudah ada | 1x |
| 132 | [**`mapSemiPlayer()`**](#mapsemiplayer) | [app.js:5351](app.js#L5351) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapSemiPlayer | 0x |
| 133 | [**`syncMCGGGrandFinal()`**](#syncmcgggrandfinal) | [app.js:5373](app.js#L5373) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final se... | 7x |
| 134 | [**`sortFn()`**](#sortfn) | [app.js:5374](app.js#L5374) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk sortFn | 0x |
| 135 | [**`findPrevInArr()`**](#findprevinarr) | [app.js:5394](app.js#L5394) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevInArr | 1x |
| 136 | [**`mapGFPlayer()`**](#mapgfplayer) | [app.js:5403](app.js#L5403) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapGFPlayer | 4x |
| 137 | [**`updateMCGGRank()`**](#updatemcggrank) | [app.js:5471](app.js#L5471) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin... | 1x |
| 138 | [**`updateMCGGCommander()`**](#updatemcggcommander) | [app.js:5509](app.js#L5509) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui pilihan commander pemain dan memicu validasi duplikasi commande... | 1x |
| 139 | [**`updateMCGGPenalty()`**](#updatemcggpenalty) | [app.js:5544](app.js#L5544) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumul... | 1x |
| 140 | [**`renderLobbyCommanderDrawPanelHtml()`**](#renderlobbycommanderdrawpanelhtml) | [app.js:5583](app.js#L5583) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI) | 5x |
| 141 | [**`drawMatchPool()`**](#drawmatchpool) | [app.js:5825](app.js#L5825) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 1: Acak 8 Pool ... | 2x |
| 142 | [**`assignMatchPoolToPlayers()`**](#assignmatchpooltoplayers) | [app.js:5900](app.js#L5900) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 2: Pasangkan 8 ... | 2x |
| 143 | [**`toggleLockMatchDraw()`**](#togglelockmatchdraw) | [app.js:5951](app.js#L5951) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 3: Kunci Match ... | 1x |
| 144 | [**`nextMatchDraw()`**](#nextmatchdraw) | [app.js:5978](app.js#L5978) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 4: Lanjut ke Ma... | 1x |
| 145 | [**`drawMatchCommanders()`**](#drawmatchcommanders) | [app.js:5995](app.js#L5995) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Backward compatibility helper | 3x |
| 146 | [**`switchLobbyDrawView()`**](#switchlobbydrawview) | [app.js:6001](app.js#L6001) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk switchLobbyDrawView | 5x |
| 147 | [**`resetLobbyDraw()`**](#resetlobbydraw) | [app.js:6007](app.js#L6007) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetLobbyDraw | 2x |
| 148 | [**`copyCommanderDrawText()`**](#copycommanderdrawtext) | [app.js:6028](app.js#L6028) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk... | 2x |
| 149 | [**`showMatch3DraftInfo()`**](#showmatch3draftinfo) | [app.js:6063](app.js#L6063) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk showMatch3DraftInfo | 1x |
| 150 | [**`changeCommanderDrawTarget()`**](#changecommanderdrawtarget) | [app.js:6074](app.js#L6074) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk changeCommanderDrawTarget | 1x |
| 151 | [**`setDrawTargetAndScroll()`**](#setdrawtargetandscroll) | [app.js:6081](app.js#L6081) | 🔧 Helper & UI Utility | Fungsi operasional untuk setDrawTargetAndScroll | 0x |
| 152 | [**`scrollToMCGGLobby()`**](#scrolltomcgglobby) | [app.js:6086](app.js#L6086) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk scrollToMCGGLobby | 3x |
| 153 | [**`renderMCGGLobbyAnchorBar()`**](#rendermcgglobbyanchorbar) | [app.js:6093](app.js#L6093) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbyAnchorBar | 2x |
| 154 | [**`renderMCGGLobbySelectOptions()`**](#rendermcgglobbyselectoptions) | [app.js:6129](app.js#L6129) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbySelectOptions | 3x |
| 155 | [**`renderMCGGTable()`**](#rendermcggtable) | [app.js:6172](app.js#L6172) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang... | 27x |
| 156 | [**`getLobbyShortLabel()`**](#getlobbyshortlabel) | [app.js:6229](app.js#L6229) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getLobbyShortLabel | 0x |
| 157 | [**`renderLobbyRowsHtml()`**](#renderlobbyrowshtml) | [app.js:6399](app.js#L6399) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderLobbyRowsHtml | 5x |
| 158 | [**`buildRoundCell()`**](#buildroundcell) | [app.js:6515](app.js#L6515) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk buildRoundCell | 3x |
| 159 | [**`buildPenaltySelect()`**](#buildpenaltyselect) | [app.js:6592](app.js#L6592) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk buildPenaltySelect | 1x |
| 160 | [**`loadSampleData()`**](#loadsampledata) | [app.js:6616](app.js#L6616) | 📦 Modul Aplikasi Umum | Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation... | 1x |
| 161 | [**`clearAllData()`**](#clearalldata) | [app.js:6820](app.js#L6820) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearAllData | 1x |
| 162 | [**`setMLBBViewMode()`**](#setmlbbviewmode) | [app.js:6869](app.js#L6869) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- TAMPILAN VIEW SWITCHER MLBB --- | 5x |
| 163 | [**`setMCGGViewMode()`**](#setmcggviewmode) | [app.js:6919](app.js#L6919) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | --- TAMPILAN VIEW SWITCHER MCGG --- | 4x |
| 164 | [**`selectMLBBStageNode()`**](#selectmlbbstagenode) | [app.js:6952](app.js#L6952) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | ---------------------------------------------------------------------------... | 8x |
| 165 | [**`renderMLBBInteractiveHubUI()`**](#rendermlbbinteractivehubui) | [app.js:6957](app.js#L6957) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBInteractiveHubUI | 7x |
| 166 | [**`renderMLBBDetailPanelContent()`**](#rendermlbbdetailpanelcontent) | [app.js:7122](app.js#L7122) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBDetailPanelContent | 1x |
| 167 | [**`selectMCGGFlowNode()`**](#selectmcggflownode) | [app.js:7395](app.js#L7395) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | ---------------------------------------------------------------------------... | 7x |
| 168 | [**`renderMCGGInteractiveHubUI()`**](#rendermcgginteractivehubui) | [app.js:7400](app.js#L7400) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGInteractiveHubUI | 5x |
| 169 | [**`renderMCGGDetailPanelContent()`**](#rendermcggdetailpanelcontent) | [app.js:7528](app.js#L7528) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGDetailPanelContent | 1x |
| 170 | [**`shuffleMCGG32Besar()`**](#shufflemcgg32besar) | [app.js:7737](app.js#L7737) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGG32Besar | 1x |
| 171 | [**`getTargetSpreadsheet()`**](#gettargetspreadsheet) | [google_apps_script.js:38](google_apps_script.js#L38) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet b... | 5x |
| 172 | [**`safeSetSharing()`**](#safesetsharing) | [google_apps_script.js:58](google_apps_script.js#L58) | ⚙️ Backend Apps Script Utility | Mengatur permission sharing secara aman. Menghindari error 'Access denied: ... | 6x |
| 173 | [**`getOrCreateUploadFolder()`**](#getorcreateuploadfolder) | [google_apps_script.js:76](google_apps_script.js#L76) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat folder upload utama secara andal. Jika TARGET_FOLD... | 5x |
| 174 | [**`testDriveAuth()`**](#testdriveauth) | [google_apps_script.js:115](google_apps_script.js#L115) | ⚙️ Backend Apps Script Utility | FUNGSI UJI OTORISASI GOOGLE DRIVE & SPREADSHEET PENTING: Pilih fungsi 'test... | 0x |
| 175 | [**`getOrCreateSubFolder()`**](#getorcreatesubfolder) | [google_apps_script.js:150](google_apps_script.js#L150) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat subfolder tim/kategori secara andal. / | 2x |
| 176 | [**`relinkExistingFailedIDCards()`**](#relinkexistingfailedidcards) | [google_apps_script.js:194](google_apps_script.js#L194) | ⚙️ Backend Apps Script Utility | FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ... | 0x |
| 177 | [**`ensureRelationalSheetsExist()`**](#ensurerelationalsheetsexist) | [google_apps_script.js:313](google_apps_script.js#L313) | 🗄️ Google Sheets Schema & Master Data | Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Paren... | 3x |
| 178 | [**`getMlbbTimListing()`**](#getmlbbtimlisting) | [google_apps_script.js:361](google_apps_script.js#L361) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' A... | 3x |
| 179 | [**`getMlbbPesertaListing()`**](#getmlbbpesertalisting) | [google_apps_script.js:459](google_apps_script.js#L459) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Pes... | 2x |
| 180 | [**`getMcggListing()`**](#getmcgglisting) | [google_apps_script.js:527](google_apps_script.js#L527) | 🗄️ Google Sheets Schema & Master Data | Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan... | 3x |
| 181 | [**`doGet()`**](#doget) | [google_apps_script.js:661](google_apps_script.js#L661) | 🌐 Web API & Endpoint Webhook | 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE | 0x |
| 182 | [**`helperParseRank()`**](#helperparserank) | [google_apps_script.js:911](google_apps_script.js#L911) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk helperParseRank | 3x |
| 183 | [**`doPost()`**](#dopost) | [google_apps_script.js:1117](google_apps_script.js#L1117) | 🌐 Web API & Endpoint Webhook | 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE | 1x |
| 184 | [**`saveBase64Image()`**](#savebase64image) | [google_apps_script.js:1169](google_apps_script.js#L1169) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk saveBase64Image | 4x |
| 185 | [**`getOrCreateSheet()`**](#getorcreatesheet) | [google_apps_script.js:1702](google_apps_script.js#L1702) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. / | 0x |
| 186 | [**`syncDedicatedTournamentSheets()`**](#syncdedicatedtournamentsheets) | [google_apps_script.js:1714](google_apps_script.js#L1714) | 🗄️ Google Sheets Schema & Master Data | Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah ... | 7x |
| 187 | [**`fmtRank()`**](#fmtrank) | [google_apps_script.js:1893](google_apps_script.js#L1893) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk fmtRank | 3x |
| 188 | [**`syncListBagan()`**](#synclistbagan) | [google_apps_script.js:1962](google_apps_script.js#L1962) | ⚙️ Backend Apps Script Utility | Wrapper kompatibilitas untuk pemicu manual / lama / | 1x |
| 189 | [**`syncListPoint()`**](#synclistpoint) | [google_apps_script.js:1966](google_apps_script.js#L1966) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPoint | 1x |
| 190 | [**`syncListPointAndCommanderMCGG()`**](#synclistpointandcommandermcgg) | [google_apps_script.js:1970](google_apps_script.js#L1970) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPointAndCommanderMCGG | 1x |
| 191 | [**`createOrUpdateAllTournamentSheets()`**](#createorupdatealltournamentsheets) | [google_apps_script.js:1974](google_apps_script.js#L1974) | 🗄️ Google Sheets Schema & Master Data | Fungsi operasional untuk createOrUpdateAllTournamentSheets | 1x |
| 192 | [**`runTest()`**](#runtest) | [functional_tests.js:26](functional_tests.js#L26) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runTest | 76x |
| 193 | [**`runAsyncTest()`**](#runasynctest) | [functional_tests.js:37](functional_tests.js#L37) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk runAsyncTest | 4x |
| 194 | [**`sanitizeNip()`**](#sanitizenip) | [functional_tests.js:85](functional_tests.js#L85) | 🔧 Helper & UI Utility | Fungsi operasional untuk sanitizeNip | 3x |
| 195 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [functional_tests.js:94](functional_tests.js#L94) | 🔧 Helper & UI Utility | Fungsi operasional untuk formatDriveImageUrl | 13x |
| 196 | [**`validateRegistration()`**](#validateregistration) | [functional_tests.js:181](functional_tests.js#L181) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk validateRegistration | 7x |
| 197 | [**`runLiveIntegrationTests()`**](#runliveintegrationtests) | [functional_tests.js:363](functional_tests.js#L363) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runLiveIntegrationTests | 1x |
| 198 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:890](functional_tests.js#L890) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 7x |
| 199 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:896](functional_tests.js#L896) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 7x |
| 200 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:900](functional_tests.js#L900) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 6x |
| 201 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:946](functional_tests.js#L946) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 7x |
| 202 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:952](functional_tests.js#L952) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 7x |
| 203 | [**`findPrevious()`**](#findprevious) | [functional_tests.js:1085](functional_tests.js#L1085) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 204 | [**`mapPlayerObj()`**](#mapplayerobj) | [functional_tests.js:1087](functional_tests.js#L1087) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |
| 205 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:1148](functional_tests.js#L1148) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 7x |
| 206 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:1154](functional_tests.js#L1154) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 7x |
| 207 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:1155](functional_tests.js#L1155) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 6x |
| 208 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:1175](functional_tests.js#L1175) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 7x |
| 209 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:1181](functional_tests.js#L1181) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 7x |
| 210 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:1182](functional_tests.js#L1182) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 6x |
| 211 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:1227](functional_tests.js#L1227) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 7x |
| 212 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:1233](functional_tests.js#L1233) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 7x |
| 213 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:1234](functional_tests.js#L1234) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 6x |

---

## 🔍 Rincian Lengkap Fungsi dan Lokasi Pemanggilan

### ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti)

<a id="setmcggstagefilter"></a>
#### `setMCGGStageFilter(stage)`

- **Definisi:** [`app.js:2`](app.js#L2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6248`](app.js#L6248) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_1_QUAL' ? 'active' : ''}`
  - [`app.js:6251`](app.js#L6251) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_2_SEMI' ? 'active' : ''}`
  - [`app.js:6254`](app.js#L6254) — di dalam fungsi `renderMCGGTable()`
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
  - [`index.html:594`](index.html#L594) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMCGGGroupPage()" i`
  - [`app.js:6266`](app.js#L6266) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:866`](functional_tests.js#L866) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMCGGGroupPage()'), 'Harus ada fungsi prevMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="nextmcgggrouppage"></a>
#### `nextMCGGGroupPage()`

- **Definisi:** [`app.js:61`](app.js#L61)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:600`](index.html#L600) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMCGGGroupPage()" `
  - [`app.js:6269`](app.js#L6269) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:867`](functional_tests.js#L867) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMCGGGroupPage()'), 'Harus ada fungsi nextMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="gotomcgggrouppage"></a>
#### `goToMCGGGroupPage(pg)`

- **Definisi:** [`app.js:68`](app.js#L68)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6238`](app.js#L6238) — di dalam fungsi `renderMCGGTable()`
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
  - [`app.js:6048`](app.js#L6048) — di dalam fungsi `copyCommanderDrawText()`
    `const cmdName = getCommanderFormattedName(item.commander);`
  - [`app.js:6525`](app.js#L6525) — di dalam fungsi `buildRoundCell()`
    `const formattedName = getCommanderFormattedName(selectedCmd);`
  - [`app.js:6551`](app.js#L6551) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`app.js:6560`](app.js#L6560) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`functional_tests.js:706`](functional_tests.js#L706) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getCommanderFormattedName('), 'Harus ada fungsi getCommanderFormat`

<a id="rendercommandercircleshtml"></a>
#### `renderCommanderCirclesHtml(cmd, size)`

- **Definisi:** [`app.js:425`](app.js#L425)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6526`](app.js#L6526) — di dalam fungsi `buildRoundCell()`
    `const circlesHtml = renderCommanderCirclesHtml(selectedCmd, 24);`
  - [`app.js:6574`](app.js#L6574) — di dalam fungsi `buildRoundCell()`
    `? renderCommanderCirclesHtml(selectedCmd, 22)`
  - [`functional_tests.js:707`](functional_tests.js#L707) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderCommanderCirclesHtml('), 'Harus ada fungsi renderCommanderCi`

<a id="rendercommandercardvisualhtml"></a>
#### `renderCommanderCardVisualHtml(cmd)`

- **Definisi:** [`app.js:454`](app.js#L454)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5774`](app.js#L5774) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `${renderCommanderCardVisualHtml(item.commander)}`

<a id="resetmcggpointsanddraw"></a>
#### `resetMCGGPointsAndDraw()`

- **Definisi:** [`app.js:1679`](app.js#L1679)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:555`](index.html#L555) — Event `onclick`
    `<button id="btnResetMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; border-c`
  - [`functional_tests.js:837`](functional_tests.js#L837) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMCGGPointsAndDraw()'), 'Harus memiliki resetMCGGPointsAndDraw`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handlemcggnameinput"></a>
#### `handleMcggNameInput(val)`

- **Definisi:** [`app.js:2131`](app.js#L2131)
- **Deskripsi:** Handler saat Peserta Mengetik / Memilih Nama Pemain Solo MCGG di Form Pendaftaran
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:260`](index.html#L260) — Event `oninput`
    `<input type="text" id="mcgg_name" list="registeredMcggDatalist" oninput="handleMcggNameInput(this.va`
  - [`functional_tests.js:173`](functional_tests.js#L173) — pada skenario pengujian
    `assert(appCode.includes('function handleMcggNameInput('), 'Harus ada handler handleMcggNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="togglelockmcgglobbies"></a>
#### `toggleLockMCGGLobbies()`

- **Definisi:** [`app.js:3504`](app.js#L3504)
- **Deskripsi:** Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:554`](index.html#L554) — Event `onclick`
    `<button id="btnLockMCGGLobbies" class="btn btn-outline" style="display: none; font-size: 0.85rem;" o`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="validatemcggduplicatecommander"></a>
#### `validateMCGGDuplicateCommander(lobbyKey, playerIdx)`

- **Definisi:** [`app.js:3526`](app.js#L3526)
- **Deskripsi:** 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5537`](app.js#L5537) — di dalam fungsi `updateMCGGCommander()`
    `validateMCGGDuplicateCommander(targetLobby, idx);`
  - [`app.js:5936`](app.js#L5936) — di dalam fungsi `assignMatchPoolToPlayers()`
    `validateMCGGDuplicateCommander(lobbyKey, i);`
  - [`functional_tests.js:765`](functional_tests.js#L765) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function validateMCGGDuplicateCommander('), 'Harus ada fungsi validateMCGGD`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="changemcgglobby"></a>
#### `changeMCGGLobby()`

- **Definisi:** [`app.js:4962`](app.js#L4962)
- **Deskripsi:** MCGG MULTI-LOBBY STANDINGS
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderbyid"></a>
#### `getCommanderById(id)`

- **Definisi:** [`app.js:4968`](app.js#L4968)
- **Deskripsi:** Mencari objek data commander dari master list berdasarkan ID, nama hero, atau alter name.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6520`](app.js#L6520) — di dalam fungsi `buildRoundCell()`
    `const selectedCmd = getCommanderById(selectedCmdId);`

<a id="updatecommanderpoolfromsetup"></a>
#### `updateCommanderPoolFromSetup(setupList)`

- **Definisi:** [`app.js:4981`](app.js#L4981)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1025`](app.js#L1025) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCommanderPoolFromSetup(data.mcggCommanderSetup);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getverifiedmcggplayers"></a>
#### `getVerifiedMCGGPlayers()`

- **Definisi:** [`app.js:5040`](app.js#L5040)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5049`](app.js#L5049) — di dalam fungsi `syncMCGGPlayers()`
    `let verified = getVerifiedMCGGPlayers();`
  - [`functional_tests.js:611`](functional_tests.js#L611) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMCGGPlayers()'), 'Harus ada getVerifiedMCGGPlayers()');`

<a id="syncmcggplayers"></a>
#### `syncMCGGPlayers(doShuffle = false)`

- **Definisi:** [`app.js:5048`](app.js#L5048)
- **Titik Pemanggilan (8 lokasi):**
  - [`index.html:552`](index.html#L552) — Event `onclick`
    `<button id="adminSyncMCGG" class="btn btn-primary" style="display: none; font-size: 0.85rem;" onclic`
  - [`app.js:1034`](app.js#L1034) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `syncMCGGPlayers();`
  - [`app.js:2725`](app.js#L2725) — di dalam fungsi `setParticipantStatus()`
    `syncMCGGPlayers();`
  - [`app.js:2782`](app.js#L2782) — di dalam fungsi `deleteParticipant()`
    `syncMCGGPlayers();`
  - [`app.js:3011`](app.js#L3011) — di dalam fungsi `saveParticipantEdit()`
    `syncMCGGPlayers();`
  - [`app.js:5279`](app.js#L5279) — di dalam fungsi `shuffleMCGGPlayers()`
    `syncMCGGPlayers(true);`
  - [`app.js:6817`](app.js#L6817) — di dalam fungsi `loadSampleData()`
    `syncMCGGPlayers();`
  - [`app.js:6832`](app.js#L6832) — di dalam fungsi `clearAllData()`
    `syncMCGGPlayers();`
- **Memanggil Fungsi Internal:** [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`findPrevious()`](#findprevious), [`getDepartmentCluster()`](#getdepartmentcluster), [`mapPlayerObj()`](#mapplayerobj), [`syncMCGGSemiFinal()`](#syncmcggsemifinal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`renderMCGGTable()`](#rendermcggtable), [`allocateLobbiesByCluster()`](#allocatelobbiesbycluster)

<a id="allocatelobbiesbycluster"></a>
#### `allocateLobbiesByCluster(playerList, lobbyKeys, targetCaps)`

- **Definisi:** [`app.js:5091`](app.js#L5091)
- **Deskripsi:** Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase Awal)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5233`](app.js#L5233) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, ['LOBBY_A', 'LOBBY_B'], [countA, countB]);`
  - [`app.js:5250`](app.js#L5250) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`
  - [`functional_tests.js:1094`](functional_tests.js#L1094) — pada skenario pengujian
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`

<a id="shufflemcggplayers"></a>
#### `shuffleMCGGPlayers()`

- **Definisi:** [`app.js:5266`](app.js#L5266)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:553`](index.html#L553) — Event `onclick`
    `<button id="adminShuffleMCGG" class="btn btn-gold" style="display: none; font-size: 0.85rem;" onclic`
  - [`functional_tests.js:651`](functional_tests.js#L651) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function shuffleMCGGPlayers()'), 'Harus ada fungsi shuffleMCGGPlayers()');`
- **Memanggil Fungsi Internal:** [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="ismcgglobbypointsfull"></a>
#### `isMCGGLobbyPointsFull(lobbyKey)`

- **Definisi:** [`app.js:5283`](app.js#L5283)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5292`](app.js#L5292) — di dalam fungsi `isMCGGQualificationFull()`
    `return qualKeys.every(k => isMCGGLobbyPointsFull(k));`
  - [`app.js:5297`](app.js#L5297) — di dalam fungsi `isMCGGSemiFinalFull()`
    `return isMCGGLobbyPointsFull('SEMI_A') && isMCGGLobbyPointsFull('SEMI_B');`
  - [`app.js:6468`](app.js#L6468) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isLobbyFull = isMCGGLobbyPointsFull('LOBBY_A');`
  - [`app.js:6481`](app.js#L6481) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isThisLobbyFull = isMCGGLobbyPointsFull(lobbyKey);`

<a id="ismcggqualificationfull"></a>
#### `isMCGGQualificationFull()`

- **Definisi:** [`app.js:5289`](app.js#L5289)
- **Deskripsi:** Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3 ronde).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:5304`](app.js#L5304) — di dalam fungsi `syncMCGGSemiFinal()`
    `const isQualDone = isMCGGQualificationFull();`
  - [`app.js:5448`](app.js#L5448) — di dalam fungsi `syncMCGGGrandFinal()`
    `const isFull = isMCGGQualificationFull();`
  - [`app.js:5487`](app.js#L5487) — di dalam fungsi `updateMCGGRank()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:5525`](app.js#L5525) — di dalam fungsi `updateMCGGCommander()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:5558`](app.js#L5558) — di dalam fungsi `updateMCGGPenalty()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:5836`](app.js#L5836) — di dalam fungsi `drawMatchPool()`
    `if (lobbyKey === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:6098`](app.js#L6098) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:6130`](app.js#L6130) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:6196`](app.js#L6196) — di dalam fungsi `renderMCGGTable()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:6401`](app.js#L6401) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`functional_tests.js:625`](functional_tests.js#L625) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isMCGGQualificationFull()'), 'app.js harus memeriksa apakah poin kualifikas`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="ismcggsemifinalfull"></a>
#### `isMCGGSemiFinalFull()`

- **Definisi:** [`app.js:5295`](app.js#L5295)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5418`](app.js#L5418) — di dalam fungsi `syncMCGGGrandFinal()`
    `const semiDone = isMCGGSemiFinalFull();`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="syncmcggsemifinal"></a>
#### `syncMCGGSemiFinal()`

- **Definisi:** [`app.js:5300`](app.js#L5300)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5200`](app.js#L5200) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
  - [`app.js:5257`](app.js#L5257) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`findPrevSemi()`](#findprevsemi)

<a id="syncmcgggrandfinal"></a>
#### `syncMCGGGrandFinal()`

- **Definisi:** [`app.js:5373`](app.js#L5373)
- **Deskripsi:** Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final setelah ronde kualifikasi penuh.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:1713`](app.js#L1713) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `syncMCGGGrandFinal();`
  - [`app.js:5201`](app.js#L5201) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:5234`](app.js#L5234) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:5258`](app.js#L5258) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:5502`](app.js#L5502) — di dalam fungsi `updateMCGGRank()`
    `syncMCGGGrandFinal();`
  - [`app.js:5573`](app.js#L5573) — di dalam fungsi `updateMCGGPenalty()`
    `syncMCGGGrandFinal();`
  - [`app.js:6303`](app.js#L6303) — di dalam fungsi `renderMCGGTable()`
    `syncMCGGGrandFinal();`
- **Memanggil Fungsi Internal:** [`findPrevInArr()`](#findprevinarr), [`isMCGGSemiFinalFull()`](#ismcggsemifinalfull), [`mapGFPlayer()`](#mapgfplayer), [`isMCGGQualificationFull()`](#ismcggqualificationfull)

<a id="updatemcggrank"></a>
#### `updateMCGGRank(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:5471`](app.js#L5471)
- **Deskripsi:** Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin otomatis (+4 s/d -4).
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6585`](app.js#L6585) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGRank('${lobbyKey}', ${originalIdx}, '${roundKey}', this.value)" style="p`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggcommander"></a>
#### `updateMCGGCommander(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:5509`](app.js#L5509)
- **Deskripsi:** Memperbarui pilihan commander pemain dan memicu validasi duplikasi commander ronde 2.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6581`](app.js#L6581) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGCommander('${lobbyKey}', ${originalIdx}, '${cmdKey}', this.value)" style`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggpenalty"></a>
#### `updateMCGGPenalty(arg1, arg2, arg3)`

- **Definisi:** [`app.js:5544`](app.js#L5544)
- **Deskripsi:** Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumulasi poin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6605`](app.js#L6605) — di dalam fungsi `buildPenaltySelect()`
    `<select onchange="updateMCGGPenalty('${lobbyKey}', ${originalIdx}, this.value)" style="padding: 0.25`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="renderlobbycommanderdrawpanelhtml"></a>
#### `renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)`

- **Definisi:** [`app.js:5583`](app.js#L5583)
- **Deskripsi:** MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:6371`](app.js#L6371) — di dalam fungsi `renderMCGGTable()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}`
  - [`app.js:7557`](app.js#L7557) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`app.js:7662`](app.js#L7662) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`functional_tests.js:798`](functional_tests.js#L798) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderLobbyCommanderDrawPanelHtml('), 'Harus memiliki generator pa`
  - [`functional_tests.js:802`](functional_tests.js#L802) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}'), 'Panel `
- **Memanggil Fungsi Internal:** [`switchLobbyDrawView()`](#switchlobbydrawview), [`copyCommanderDrawText()`](#copycommanderdrawtext), [`resetLobbyDraw()`](#resetlobbydraw), [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers), [`toggleLockMatchDraw()`](#togglelockmatchdraw), [`nextMatchDraw()`](#nextmatchdraw), [`showMatch3DraftInfo()`](#showmatch3draftinfo), [`renderCommanderCardVisualHtml()`](#rendercommandercardvisualhtml), [`escapeHtml()`](#escapehtml)

<a id="drawmatchcommanders"></a>
#### `drawMatchCommanders(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:5995`](app.js#L5995)
- **Deskripsi:** Backward compatibility helper
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6365`](app.js#L6365) — di dalam fungsi `renderMCGGTable()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.3rem 0.65rem; ${(!isRegistration`
  - [`functional_tests.js:741`](functional_tests.js#L741) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function drawMatchCommanders('), 'drawMatchCommanders harus tersedia');`
  - [`functional_tests.js:799`](functional_tests.js#L799) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('drawMatchCommanders(matchNum, targetLobbyKey)'), 'drawMatchCommanders harus`
- **Memanggil Fungsi Internal:** [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers)

<a id="switchlobbydrawview"></a>
#### `switchLobbyDrawView(lobbyKey, matchNum)`

- **Definisi:** [`app.js:6001`](app.js#L6001)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:5631`](app.js#L5631) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 1 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:5634`](app.js#L5634) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 2 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:5686`](app.js#L5686) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:5689`](app.js#L5689) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`functional_tests.js:800`](functional_tests.js#L800) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function switchLobbyDrawView('), 'Harus memiliki fungsi switch view match 1`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="resetlobbydraw"></a>
#### `resetLobbyDraw(lobbyKey)`

- **Definisi:** [`app.js:6007`](app.js#L6007)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5640`](app.js#L5640) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem; font-size:0.75rem; color:var(--yokke`
  - [`functional_tests.js:801`](functional_tests.js#L801) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetLobbyDraw('), 'Harus memiliki fungsi reset undian per-lobi re`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="copycommanderdrawtext"></a>
#### `copyCommanderDrawText(lobbyKey)`

- **Definisi:** [`app.js:6028`](app.js#L6028)
- **Deskripsi:** Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk dibagikan ke WhatsApp grup.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5637`](app.js#L5637) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem; margin-left:auto;`
  - [`app.js:5692`](app.js#L5692) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCom`
- **Memanggil Fungsi Internal:** [`getCommanderFormattedName()`](#getcommanderformattedname)

<a id="changecommanderdrawtarget"></a>
#### `changeCommanderDrawTarget(val)`

- **Definisi:** [`app.js:6074`](app.js#L6074)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6082`](app.js#L6082) — di dalam fungsi `setDrawTargetAndScroll()`
    `changeCommanderDrawTarget(lobbyKey);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="scrolltomcgglobby"></a>
#### `scrollToMCGGLobby(lobbyKey)`

- **Definisi:** [`app.js:6086`](app.js#L6086)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6083`](app.js#L6083) — di dalam fungsi `setDrawTargetAndScroll()`
    `scrollToMCGGLobby(lobbyKey);`
  - [`app.js:6123`](app.js#L6123) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`functional_tests.js:699`](functional_tests.js#L699) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function scrollToMCGGLobby('), 'app.js harus menyediakan fungsi scrollToMCG`

<a id="rendermcgglobbyanchorbar"></a>
#### `renderMCGGLobbyAnchorBar()`

- **Definisi:** [`app.js:6093`](app.js#L6093)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6169`](app.js#L6169) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `renderMCGGLobbyAnchorBar();`
  - [`functional_tests.js:697`](functional_tests.js#L697) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderMCGGLobbyAnchorBar('), 'app.js harus memiliki generator rend`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="rendermcgglobbyselectoptions"></a>
#### `renderMCGGLobbySelectOptions()`

- **Definisi:** [`app.js:6129`](app.js#L6129)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5203`](app.js#L5203) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:5262`](app.js#L5262) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:6193`](app.js#L6193) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGLobbySelectOptions();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar)

<a id="rendermcggtable"></a>
#### `renderMCGGTable()`

- **Definisi:** [`app.js:6172`](app.js#L6172)
- **Deskripsi:** Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang sedang aktif.
- **Titik Pemanggilan (27 lokasi):**
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
  - [`app.js:1013`](app.js#L1013) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderMCGGTable();`
  - [`app.js:1577`](app.js#L1577) — di dalam fungsi `verifyAdminPin()`
    `renderMCGGTable();`
  - [`app.js:1589`](app.js#L1589) — di dalam fungsi `logoutAdmin()`
    `renderMCGGTable();`
  - [`app.js:1674`](app.js#L1674) — di dalam fungsi `toggleRegistrationStatus()`
    `renderMCGGTable();`
  - [`app.js:1716`](app.js#L1716) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `renderMCGGTable();`
  - [`app.js:3542`](app.js#L3542) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `renderMCGGTable();`
  - [`app.js:4965`](app.js#L4965) — di dalam fungsi `changeMCGGLobby()`
    `renderMCGGTable();`
  - [`app.js:5036`](app.js#L5036) — di dalam fungsi `updateCommanderPoolFromSetup()`
    `renderMCGGTable();`
  - [`app.js:5204`](app.js#L5204) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:5263`](app.js#L5263) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:5506`](app.js#L5506) — di dalam fungsi `updateMCGGRank()`
    `renderMCGGTable();`
  - [`app.js:5541`](app.js#L5541) — di dalam fungsi `updateMCGGCommander()`
    `renderMCGGTable();`
  - [`app.js:5577`](app.js#L5577) — di dalam fungsi `updateMCGGPenalty()`
    `renderMCGGTable();`
  - [`app.js:5894`](app.js#L5894) — di dalam fungsi `drawMatchPool()`
    `renderMCGGTable();`
  - [`app.js:5945`](app.js#L5945) — di dalam fungsi `assignMatchPoolToPlayers()`
    `renderMCGGTable();`
  - [`app.js:5965`](app.js#L5965) — di dalam fungsi `toggleLockMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:5991`](app.js#L5991) — di dalam fungsi `nextMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:6004`](app.js#L6004) — di dalam fungsi `switchLobbyDrawView()`
    `renderMCGGTable();`
  - [`app.js:6024`](app.js#L6024) — di dalam fungsi `resetLobbyDraw()`
    `renderMCGGTable();`
  - [`app.js:6078`](app.js#L6078) — di dalam fungsi `changeCommanderDrawTarget()`
    `renderMCGGTable();`
  - [`app.js:6831`](app.js#L6831) — di dalam fungsi `clearAllData()`
    `renderMCGGTable();`
  - [`app.js:6945`](app.js#L6945) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGTable();`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`goToMCGGGroupPage()`](#gotomcgggrouppage), [`setMCGGStageFilter()`](#setmcggstagefilter), [`prevMCGGGroupPage()`](#prevmcgggrouppage), [`nextMCGGGroupPage()`](#nextmcgggrouppage), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`drawMatchCommanders()`](#drawmatchcommanders), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml)

<a id="getlobbyshortlabel"></a>
#### `getLobbyShortLabel(k)`

- **Definisi:** [`app.js:6229`](app.js#L6229)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="renderlobbyrowshtml"></a>
#### `renderLobbyRowsHtml(list, lobbyKey, isSingleLobby)`

- **Definisi:** [`app.js:6399`](app.js#L6399)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:6290`](app.js#L6290) — di dalam fungsi `renderMCGGTable()`
    `legacyTbody.innerHTML = renderLobbyRowsHtml(singleList, currentMCGGLobby, isSingleLobby);`
  - [`app.js:6351`](app.js#L6351) — di dalam fungsi `renderMCGGTable()`
    `const rowsHtml = renderLobbyRowsHtml(currentList, lobbyKey, isSingleLobby);`
  - [`app.js:7578`](app.js#L7578) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:7680`](app.js#L7680) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:7727`](app.js#L7727) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, 'GRAND_FINAL', false)}`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull), [`escapeHtml()`](#escapehtml), [`buildRoundCell()`](#buildroundcell), [`buildPenaltySelect()`](#buildpenaltyselect)

<a id="buildpenaltyselect"></a>
#### `buildPenaltySelect(player, targetLobby)`

- **Definisi:** [`app.js:6592`](app.js#L6592)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6507`](app.js#L6507) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td style="text-align: center;">${buildPenaltySelect(p, lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`updateMCGGPenalty()`](#updatemcggpenalty)

<a id="setmcggviewmode"></a>
#### `setMCGGViewMode(mode)`

- **Definisi:** [`app.js:6919`](app.js#L6919)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MCGG ---
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:577`](index.html#L577) — Event `onclick`
    `<button type="button" id="btnViewMcggHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:580`](index.html#L580) — Event `onclick`
    `<button type="button" id="btnViewMcggLobbies" class="btn btn-outline" style="font-size: 0.8rem; padd`
  - [`app.js:1900`](app.js#L1900) — di dalam fungsi `switchTab()`
    `setMCGGViewMode('HUB');`
  - [`functional_tests.js:1309`](functional_tests.js#L1309) — pada skenario pengujian
    `assert(appCode.includes('function setMCGGViewMode('), 'app.js harus memiliki fungsi setMCGGViewMode'`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGTable()`](#rendermcggtable)

<a id="selectmcggflownode"></a>
#### `selectMCGGFlowNode(nodeKey)`

- **Definisi:** [`app.js:7395`](app.js#L7395)
- **Deskripsi:** ---------------------------------------------------------------------------- 2. MASTER-DETAIL INTERACTIVE HUB MCGG ----------------------------------------------------------------------------
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:7431`](app.js#L7431) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:7454`](app.js#L7454) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE2_WILDCARD' ? 'active' : ''}" oncl`
  - [`app.js:7464`](app.js#L7464) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:7485`](app.js#L7485) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_A' ? 'active' : ''}" onclic`
  - [`app.js:7489`](app.js#L7489) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_B' ? 'active' : ''}" onclic`
  - [`app.js:7509`](app.js#L7509) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'STAGE4_GRAND_FINAL' ? 'active'`
  - [`functional_tests.js:1311`](functional_tests.js#L1311) — pada skenario pengujian
    `assert(appCode.includes('function selectMCGGFlowNode('), 'app.js harus memiliki selectMCGGFlowNode')`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

<a id="rendermcgginteractivehubui"></a>
#### `renderMCGGInteractiveHubUI()`

- **Definisi:** [`app.js:7400`](app.js#L7400)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:6186`](app.js#L6186) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:6938`](app.js#L6938) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:7397`](app.js#L7397) — di dalam fungsi `selectMCGGFlowNode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:7742`](app.js#L7742) — di dalam fungsi `shuffleMCGG32Besar()`
    `renderMCGGInteractiveHubUI();`
  - [`functional_tests.js:1310`](functional_tests.js#L1310) — pada skenario pengujian
    `assert(appCode.includes('function renderMCGGInteractiveHubUI()'), 'app.js harus memiliki renderMCGGI`
- **Memanggil Fungsi Internal:** [`selectMCGGFlowNode()`](#selectmcggflownode), [`renderMCGGDetailPanelContent()`](#rendermcggdetailpanelcontent)

<a id="rendermcggdetailpanelcontent"></a>
#### `renderMCGGDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:7528`](app.js#L7528)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7522`](app.js#L7522) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `rightHtml += renderMCGGDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`shuffleMCGG32Besar()`](#shufflemcgg32besar)

<a id="shufflemcgg32besar"></a>
#### `shuffleMCGG32Besar()`

- **Definisi:** [`app.js:7737`](app.js#L7737)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7622`](app.js#L7622) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `<button class="btn btn-gold" style="padding:0.3rem 0.75rem;font-size:0.78rem;" onclick="shuffleMCGG3`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

---

### ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine)

<a id="prevmlbbgrouppage"></a>
#### `prevMLBBGroupPage()`

- **Definisi:** [`app.js:13`](app.js#L13)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:497`](index.html#L497) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMLBBGroupPage()" i`
  - [`app.js:4413`](app.js#L4413) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:847`](functional_tests.js#L847) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMLBBGroupPage()'), 'Harus ada fungsi prevMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="nextmlbbgrouppage"></a>
#### `nextMLBBGroupPage()`

- **Definisi:** [`app.js:20`](app.js#L20)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:503`](index.html#L503) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMLBBGroupPage()" `
  - [`app.js:4416`](app.js#L4416) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:848`](functional_tests.js#L848) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMLBBGroupPage()'), 'Harus ada fungsi nextMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="gotomlbbgrouppage"></a>
#### `goToMLBBGroupPage(pg)`

- **Definisi:** [`app.js:27`](app.js#L27)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4404`](app.js#L4404) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="group-nav-tab-btn ${p === mlbbGroupPageIndex ? 'active' : ''}" onclick=`
  - [`functional_tests.js:849`](functional_tests.js#L849) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function goToMLBBGroupPage('), 'Harus ada fungsi goToMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="toggleallmlbbfixtures"></a>
#### `toggleAllMLBBFixtures()`

- **Definisi:** [`app.js:32`](app.js#L32)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4774`](app.js#L4774) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.7rem; padding:0.2rem 0.55rem; color`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="getverifiedmlbbteams"></a>
#### `getVerifiedMLBBTeams()`

- **Definisi:** [`app.js:3257`](app.js#L3257)
- **Deskripsi:** TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:3273`](app.js#L3273) — di dalam fungsi `getActiveMLBBFormat()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:3611`](app.js#L3611) — di dalam fungsi `generateBracket()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:3940`](app.js#L3940) — di dalam fungsi `generateGroupStage()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`functional_tests.js:576`](functional_tests.js#L576) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMLBBTeams()'), 'Harus ada fungsi getVerifiedMLBBTeams()`

<a id="getactivemlbbformat"></a>
#### `getActiveMLBBFormat()`

- **Definisi:** [`app.js:3265`](app.js#L3265)
- **Deskripsi:** Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N >= 12 tim).
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3947`](app.js#L3947) — di dalam fungsi `generateGroupStage()`
    `const activeFormat = getActiveMLBBFormat();`
  - [`functional_tests.js:577`](functional_tests.js#L577) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getActiveMLBBFormat()'), 'Harus ada fungsi getActiveMLBBFormat()')`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="rendercurrentmlbbformat"></a>
#### `renderCurrentMLBBFormat()`

- **Definisi:** [`app.js:3300`](app.js#L3300)
- **Titik Pemanggilan (14 lokasi):**
  - [`app.js:1033`](app.js#L1033) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1576`](app.js#L1576) — di dalam fungsi `verifyAdminPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1588`](app.js#L1588) — di dalam fungsi `logoutAdmin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1673`](app.js#L1673) — di dalam fungsi `toggleRegistrationStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2724`](app.js#L2724) — di dalam fungsi `setParticipantStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2781`](app.js#L2781) — di dalam fungsi `deleteParticipant()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3010`](app.js#L3010) — di dalam fungsi `saveParticipantEdit()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3297`](app.js#L3297) — di dalam fungsi `changeTournamentFormat()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3361`](app.js#L3361) — di dalam fungsi `toggleLockMLBBGroup()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3442`](app.js#L3442) — di dalam fungsi `proceedToMLBBStage2()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3455`](app.js#L3455) — di dalam fungsi `resetMLBBToStage1()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3496`](app.js#L3496) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `renderCurrentMLBBFormat();`
  - [`app.js:6816`](app.js#L6816) — di dalam fungsi `loadSampleData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:6830`](app.js#L6830) — di dalam fungsi `clearAllData()`
    `renderCurrentMLBBFormat();`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="togglelockmlbbgroup"></a>
#### `toggleLockMLBBGroup()`

- **Definisi:** [`app.js:3345`](app.js#L3345)
- **Deskripsi:** 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:447`](index.html#L447) — Event `onclick`
    `<button id="btnLockMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="isallmlbbgroupmatchesfinished"></a>
#### `isAllMLBBGroupMatchesFinished()`

- **Definisi:** [`app.js:3365`](app.js#L3365)
- **Deskripsi:** Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan memiliki pemenang.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3426`](app.js#L3426) — di dalam fungsi `proceedToMLBBStage2()`
    `if (!isAllMLBBGroupMatchesFinished()) {`
  - [`functional_tests.js:752`](functional_tests.js#L752) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function isAllMLBBGroupMatchesFinished()'), 'Harus ada fungsi isAllMLBBGrou`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="evaluatemlbbtiebreaker"></a>
#### `evaluateMLBBTieBreaker()`

- **Definisi:** [`app.js:3376`](app.js#L3376)
- **Deskripsi:** Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosan babak Playoff.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3430`](app.js#L3430) — di dalam fungsi `proceedToMLBBStage2()`
    `if (evaluateMLBBTieBreaker()) {`
  - [`functional_tests.js:759`](functional_tests.js#L759) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function evaluateMLBBTieBreaker()'), 'Harus ada fungsi evaluateMLBBTieBreak`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal)

<a id="resolvemlbbtiebreaker"></a>
#### `resolveMLBBTieBreaker(winnerTeam)`

- **Definisi:** [`app.js:3401`](app.js#L3401)
- **Deskripsi:** Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan +1 poin penentu ke klasemen.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4562`](app.js#L4562) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:4563`](app.js#L4563) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`functional_tests.js:760`](functional_tests.js#L760) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resolveMLBBTieBreaker('), 'Harus ada fungsi resolveMLBBTieBreaker'`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="proceedtomlbbstage2"></a>
#### `proceedToMLBBStage2()`

- **Definisi:** [`app.js:3420`](app.js#L3420)
- **Deskripsi:** Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Bagan Playoff).
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:448`](index.html#L448) — Event `onclick`
    `<button id="btnProceedMLBBStage2" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`app.js:4857`](app.js#L4857) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: var(--`
  - [`functional_tests.js:753`](functional_tests.js#L753) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function proceedToMLBBStage2()'), 'Harus ada fungsi proceedToMLBBStage2');`
- **Memanggil Fungsi Internal:** [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`renderGroupStageUI()`](#rendergroupstageui), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resetmlbbtostage1"></a>
#### `resetMLBBToStage1()`

- **Definisi:** [`app.js:3447`](app.js#L3447)
- **Deskripsi:** Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor jika diperlukan.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:449`](index.html#L449) — Event `onclick`
    `<button id="btnResetMLBBStage1" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`functional_tests.js:754`](functional_tests.js#L754) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMLBBToStage1()'), 'Harus ada fungsi resetMLBBToStage1');`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resettotalmlbbgroupandbracket"></a>
#### `resetTotalMLBBGroupAndBracket()`

- **Definisi:** [`app.js:3459`](app.js#L3459)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:450`](index.html#L450) — Event `onclick`
    `<button id="btnResetTotalMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5r`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="generatebracket"></a>
#### `generateBracket(doShuffle = false)`

- **Definisi:** [`app.js:3601`](app.js#L3601)
- **Deskripsi:** --- KNOCKOUT BRACKET ---
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:438`](index.html#L438) — Event `onchange`
    `<select id="bracketSize" onchange="generateBracket()" style="padding: 0.5rem 0.8rem; font-size: 0.85`
  - [`app.js:3290`](app.js#L3290) — di dalam fungsi `changeTournamentFormat()`
    `generateBracket(false);`
  - [`app.js:3336`](app.js#L3336) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateBracket(true);`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="renderbracket"></a>
#### `renderBracket()`

- **Definisi:** [`app.js:3674`](app.js#L3674)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:3317`](app.js#L3317) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderBracket();`
  - [`app.js:3607`](app.js#L3607) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:3651`](app.js#L3651) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:3671`](app.js#L3671) — di dalam fungsi `pickWinner()`
    `renderBracket();`
- **Memanggil Fungsi Internal:** [`pickWinner()`](#pickwinner)

<a id="allocatemlbbgroups"></a>
#### `allocateMLBBGroups(teamsList, groupNames, doShuffle = false)`

- **Definisi:** [`app.js:3749`](app.js#L3749)
- **Deskripsi:** Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi): 1. Acak tim invited ke masing-masing group (tidak boleh ada di group yang sama). 2. Acak urutan tim sisanya (tim reguler). 3. Masukkan tim sesuai urutan acak ke masing-masing group: - Penempatan tim selalu memprioritaskan grup dengan jumlah peserta/tim terkecil terlebih dahulu. - Siklus 1: Cek nama depan sama (satelit) ATAU divisi sama -> jika bentrok, ke next group. - Siklus 2: Jika dalam 1 cycle tetap tidak dapat group -> masukkan ke group berikutnya jika tidak ada nama depan sama (aturan divisi dilanggar terlebih dahulu). - Siklus 3: Jika dalam 1 cycle berikutnya masih tidak dapat -> masukkan ke group berikutnya (aturan satelit dilanggar demi menjaga keseimbangan kapasitas). Invarian Mutlak: Keseimbangan kapasitas grup dijaga ketat (misal 41 tim ke 8 grup = tepat 7 grup isi 5 tim dan 1 grup isi 6 tim). /
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3959`](app.js#L3959) — di dalam fungsi `generateGroupStage()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, doShuffle);`
  - [`functional_tests.js:885`](functional_tests.js#L885) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('allocateMLBBGroups('), 'app.js harus memiliki fungsi alokasi grup cerdas');`
  - [`functional_tests.js:1145`](functional_tests.js#L1145) — pada skenario pengujian
    `assert(appCode.includes('allocateMLBBGroups('), 'app.js harus memiliki fungsi alokasi grup cerdas');`
- **Memanggil Fungsi Internal:** [`getTeamPrefix()`](#getteamprefix), [`getTeamDept()`](#getteamdept), [`getDepartmentCluster()`](#getdepartmentcluster), [`isTeamInvited()`](#isteaminvited), [`isInvited()`](#isinvited), [`getPrefix()`](#getprefix), [`getDept()`](#getdept), [`getOverBaseCount()`](#getoverbasecount), [`hasPrefixConflict()`](#hasprefixconflict), [`hasDeptConflict()`](#hasdeptconflict)

<a id="generategroupstage"></a>
#### `generateGroupStage(doShuffle = false)`

- **Definisi:** [`app.js:3939`](app.js#L3939)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:220`](app.js#L220) — di dalam fungsi `toggleInvitedTeam()`
    `generateGroupStage(false);`
  - [`app.js:3294`](app.js#L3294) — di dalam fungsi `changeTournamentFormat()`
    `generateGroupStage(false);`
  - [`app.js:3338`](app.js#L3338) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateGroupStage(true);`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="initgroupplayoff"></a>
#### `initGroupPlayoff()`

- **Definisi:** [`app.js:3989`](app.js#L3989)
- **Deskripsi:** Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seeding Juara vs Runner-up).
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:1087`](app.js#L1087) — di dalam fungsi `cleanOrphanedTournamentData()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff();`
  - [`app.js:3414`](app.js#L3414) — di dalam fungsi `resolveMLBBTieBreaker()`
    `initGroupPlayoff();`
  - [`app.js:3438`](app.js#L3438) — di dalam fungsi `proceedToMLBBStage2()`
    `initGroupPlayoff();`
  - [`app.js:3972`](app.js#L3972) — di dalam fungsi `generateGroupStage()`
    `initGroupPlayoff();`
  - [`app.js:3985`](app.js#L3985) — di dalam fungsi `updateGroupRecord()`
    `initGroupPlayoff();`
  - [`app.js:4633`](app.js#L4633) — di dalam fungsi `setGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:4690`](app.js#L4690) — di dalam fungsi `resetGroupMatchScore()`
    `initGroupPlayoff();`

<a id="pickgroupplayoffwinner"></a>
#### `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:4155`](app.js#L4155)
- **Deskripsi:** Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya ke ronde berikutnya.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4932`](app.js#L4932) — di dalam fungsi `renderGroupPlayoffTree()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:4936`](app.js#L4936) — di dalam fungsi `renderGroupPlayoffTree()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree)

<a id="promptplayoffmvp"></a>
#### `promptPlayoffMVP(rIdx, mIdx)`

- **Definisi:** [`app.js:4322`](app.js#L4322)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4947`](app.js#L4947) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="font-size:0.68rem; padding:0.15rem 0.5rem;" onclick="promptPl`
  - [`functional_tests.js:792`](functional_tests.js#L792) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptPlayoffMVP('), 'Harus memiliki promptPlayoffMVP');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree)

<a id="rendergroupstageui"></a>
#### `renderGroupStageUI()`

- **Definisi:** [`app.js:4361`](app.js#L4361)
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:17`](app.js#L17) — di dalam fungsi `prevMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:24`](app.js#L24) — di dalam fungsi `nextMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:29`](app.js#L29) — di dalam fungsi `goToMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:3322`](app.js#L3322) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderGroupStageUI();`
  - [`app.js:3415`](app.js#L3415) — di dalam fungsi `resolveMLBBTieBreaker()`
    `renderGroupStageUI();`
  - [`app.js:3433`](app.js#L3433) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupStageUI();`
  - [`app.js:3973`](app.js#L3973) — di dalam fungsi `generateGroupStage()`
    `renderGroupStageUI();`
  - [`app.js:3986`](app.js#L3986) — di dalam fungsi `updateGroupRecord()`
    `renderGroupStageUI();`
  - [`app.js:4634`](app.js#L4634) — di dalam fungsi `setGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:4648`](app.js#L4648) — di dalam fungsi `setGroupMatchMVP()`
    `renderGroupStageUI();`
  - [`app.js:4691`](app.js#L4691) — di dalam fungsi `resetGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:6903`](app.js#L6903) — di dalam fungsi `setMLBBViewMode()`
    `renderGroupStageUI();`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`goToMLBBGroupPage()`](#gotomlbbgrouppage), [`prevMLBBGroupPage()`](#prevmlbbgrouppage), [`nextMLBBGroupPage()`](#nextmlbbgrouppage), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker)

<a id="getgroupfixtures"></a>
#### `getGroupFixtures(gName)`

- **Definisi:** [`app.js:4583`](app.js#L4583)
- **Deskripsi:** --- BAGAN PERTANDINGAN FASE GRUP (ROUND-ROBIN BO3) ---
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:3369`](app.js#L3369) — di dalam fungsi `isAllMLBBGroupMatchesFinished()`
    `const fixtures = getGroupFixtures(gName);`
  - [`app.js:4753`](app.js#L4753) — di dalam fungsi `renderGroupFixturesUI()`
    `const fixtures = getGroupFixtures(gName);`
  - [`app.js:7213`](app.js#L7213) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const fixtures = getGroupFixtures(gName);`
  - [`functional_tests.js:675`](functional_tests.js#L675) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getGroupFixtures('), 'app.js harus memiliki generator jadwal getGr`

<a id="recalculategroupstandingsfromfixtures"></a>
#### `recalculateGroupStandingsFromFixtures()`

- **Definisi:** [`app.js:4694`](app.js#L4694)
- **Deskripsi:** Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan seluruh hasil pertandingan BO3.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4631`](app.js#L4631) — di dalam fungsi `setGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:4688`](app.js#L4688) — di dalam fungsi `resetGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`

<a id="rendergroupfixturesui"></a>
#### `renderGroupFixturesUI()`

- **Definisi:** [`app.js:4720`](app.js#L4720)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:34`](app.js#L34) — di dalam fungsi `toggleAllMLBBFixtures()`
    `renderGroupFixturesUI();`
  - [`app.js:4450`](app.js#L4450) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:4578`](app.js#L4578) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`functional_tests.js:677`](functional_tests.js#L677) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderGroupFixturesUI('), 'app.js harus memiliki renderer bagan re`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures), [`escapeHtml()`](#escapehtml), [`toggleAllMLBBFixtures()`](#toggleallmlbbfixtures), [`setGroupMatchScore()`](#setgroupmatchscore), [`resetGroupMatchScore()`](#resetgroupmatchscore), [`promptGroupMatchMVP()`](#promptgroupmatchmvp)

<a id="rendergroupplayofftree"></a>
#### `renderGroupPlayoffTree()`

- **Definisi:** [`app.js:4840`](app.js#L4840)
- **Deskripsi:** Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau status terkunci jika grup belum selesai.
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4319`](app.js#L4319) — di dalam fungsi `pickGroupPlayoffWinner()`
    `renderGroupPlayoffTree();`
  - [`app.js:4358`](app.js#L4358) — di dalam fungsi `promptPlayoffMVP()`
    `renderGroupPlayoffTree();`
  - [`app.js:4451`](app.js#L4451) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:4579`](app.js#L4579) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
- **Memanggil Fungsi Internal:** [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`pickGroupPlayoffWinner()`](#pickgroupplayoffwinner), [`escapeHtml()`](#escapehtml), [`promptPlayoffMVP()`](#promptplayoffmvp)

<a id="setmlbbviewmode"></a>
#### `setMLBBViewMode(mode)`

- **Definisi:** [`app.js:6869`](app.js#L6869)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MLBB ---
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:474`](index.html#L474) — Event `onclick`
    `<button type="button" id="btnViewMlbbHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:477`](index.html#L477) — Event `onclick`
    `<button type="button" id="btnViewMlbbGroups" class="btn btn-outline" style="font-size: 0.8rem; paddi`
  - [`index.html:480`](index.html#L480) — Event `onclick`
    `<button type="button" id="btnViewMlbbFixtures" class="btn btn-outline" style="font-size: 0.8rem; pad`
  - [`app.js:1898`](app.js#L1898) — di dalam fungsi `switchTab()`
    `setMLBBViewMode('HUB');`
  - [`functional_tests.js:1302`](functional_tests.js#L1302) — pada skenario pengujian
    `assert(appCode.includes('function setMLBBViewMode('), 'app.js harus memiliki fungsi setMLBBViewMode'`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="selectmlbbstagenode"></a>
#### `selectMLBBStageNode(nodeKey)`

- **Definisi:** [`app.js:6952`](app.js#L6952)
- **Deskripsi:** ---------------------------------------------------------------------------- 1. MASTER-DETAIL INTERACTIVE HUB MLBB ----------------------------------------------------------------------------
- **Titik Pemanggilan (8 lokasi):**
  - [`app.js:6992`](app.js#L6992) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:7034`](app.js#L7034) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:7057`](app.js#L7057) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_UPPER_QF' ? 'active' : ''}" onclic`
  - [`app.js:7061`](app.js#L7061) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_LOWER_R1' ? 'active' : ''}" onclic`
  - [`app.js:7079`](app.js#L7079) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_UPPER' ? 'active' : ''}" onclick="`
  - [`app.js:7083`](app.js#L7083) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_LOWER' ? 'active' : ''}" onclick="`
  - [`app.js:7103`](app.js#L7103) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'GRAND_FINAL_OFFLINE' ? 'active`
  - [`functional_tests.js:1304`](functional_tests.js#L1304) — pada skenario pengujian
    `assert(appCode.includes('function selectMLBBStageNode('), 'app.js harus memiliki selectMLBBStageNode`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermlbbinteractivehubui"></a>
#### `renderMLBBInteractiveHubUI()`

- **Definisi:** [`app.js:6957`](app.js#L6957)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:4377`](app.js#L4377) — di dalam fungsi `renderGroupStageUI()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:6894`](app.js#L6894) — di dalam fungsi `setMLBBViewMode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:6954`](app.js#L6954) — di dalam fungsi `selectMLBBStageNode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:7182`](app.js#L7182) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:7185`](app.js#L7185) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
  - [`app.js:7241`](app.js#L7241) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `renderMLBBInteractiveHubUI();`
  - [`functional_tests.js:1303`](functional_tests.js#L1303) — pada skenario pengujian
    `assert(appCode.includes('function renderMLBBInteractiveHubUI()'), 'app.js harus memiliki renderMLBBI`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`renderMLBBDetailPanelContent()`](#rendermlbbdetailpanelcontent)

<a id="rendermlbbdetailpanelcontent"></a>
#### `renderMLBBDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:7122`](app.js#L7122)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7116`](app.js#L7116) — di dalam fungsi `renderMLBBInteractiveHubUI()`
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

<a id="autolinkparticipantsassets"></a>
#### `autoLinkParticipantsAssets()`

- **Definisi:** [`app.js:770`](app.js#L770)
- **Deskripsi:** Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1029`](app.js#L1029) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3007`](app.js#L3007) — di dalam fungsi `saveParticipantEdit()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3132`](app.js#L3132) — di dalam fungsi `renderParticipants()`
    `autoLinkParticipantsAssets();`
  - [`app.js:6814`](app.js#L6814) — di dalam fungsi `loadSampleData()`
    `autoLinkParticipantsAssets();`
  - [`app.js:6840`](app.js#L6840) — cakupan global / event handler
    `autoLinkParticipantsAssets();`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap)

<a id="fetchparticipantsfromgooglesheet"></a>
#### `fetchParticipantsFromGoogleSheet(isSilent = false, isPure = false)`

- **Definisi:** [`app.js:805`](app.js#L805)
- **Deskripsi:** Fetch registered participants from Google Sheets via doGet Webhook Google Sheets menjadi Single Source of Truth: data yang dihapus di sheet tidak akan dimunculkan kembali.
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:338`](index.html#L338) — Event `onclick`
    `<button class="btn btn-primary" id="btnSyncGSheet" style="padding: 0.45rem 0.9rem; font-size: 0.82re`
  - [`app.js:1162`](app.js#L1162) — di dalam fungsi `resetCacheAndFollowGSheet()`
    `await fetchParticipantsFromGoogleSheet(false, true);`
  - [`app.js:6849`](app.js#L6849) — cakupan global / event handler
    `await fetchParticipantsFromGoogleSheet(true, true);`
  - [`functional_tests.js:1343`](functional_tests.js#L1343) — pada skenario pengujian
    `assert(appCode.includes('fetchParticipantsFromGoogleSheet(true, true)'), 'app.js harus memanggil fet`
  - [`functional_tests.js:1354`](functional_tests.js#L1354) — pada skenario pengujian
    `assert(appCode.includes('await fetchParticipantsFromGoogleSheet(true, true)'), 'DOMContentLoaded har`
- **Memanggil Fungsi Internal:** [`getItemKey()`](#getitemkey), [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap), [`renderRules()`](#renderrules), [`renderMCGGTable()`](#rendermcggtable), [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`updateCommanderPoolFromSetup()`](#updatecommanderpoolfromsetup), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="toggleregistrationstatus"></a>
#### `toggleRegistrationStatus()`

- **Definisi:** [`app.js:1658`](app.js#L1658)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:35`](index.html#L35) — Event `onclick`
    `<button id="btnToggleReg" class="btn btn-outline" style="display: none; padding: 0.25rem 0.65rem; fo`
  - [`index.html:324`](index.html#L324) — Event `onclick`
    `<button id="btnToggleRegPeserta" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0`
  - [`index.html:445`](index.html#L445) — Event `onclick`
    `<button id="btnToggleRegMLBB" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
  - [`index.html:551`](index.html#L551) — Event `onclick`
    `<button id="btnToggleRegMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; padd`
  - [`functional_tests.js:825`](functional_tests.js#L825) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleRegistrationStatus()'), 'Harus memiliki toggleRegistrationSt`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handleregister"></a>
#### `handleRegister(e)`

- **Definisi:** [`app.js:2189`](app.js#L2189)
- **Deskripsi:** Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Card, and Automatic Update Threat
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:81`](index.html#L81) — Event `onsubmit`
    `<form id="regForm" onsubmit="handleRegister(event)">`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveState()`](#savestate), [`renderPlayersFormInputs()`](#renderplayersforminputs), [`toggleCategoryForm()`](#togglecategoryform), [`toggleOfficial2Form()`](#toggleofficial2form), [`updateRegistrationDatalists()`](#updateregistrationdatalists)

<a id="setparticipantstatus"></a>
#### `setParticipantStatus(id, newStatus)`

- **Definisi:** [`app.js:2717`](app.js#L2717)
- **Deskripsi:** Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3212`](app.js#L3212) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-success-sm" title="Verifikasi / Setujui" onclick="setParticipantStatus(${p.id`
  - [`app.js:3213`](app.js#L3213) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-danger-sm" title="Tolak / Gagal" onclick="setParticipantStatus(${p.id}, 'REJE`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="deleteparticipant"></a>
#### `deleteParticipant(id)`

- **Definisi:** [`app.js:2758`](app.js#L2758)
- **Deskripsi:** Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat ke blacklist agar tidak ter-sync ulang.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3214`](app.js#L3214) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" onclick="delet`
- **Memanggil Fungsi Internal:** [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="saveparticipantedit"></a>
#### `saveParticipantEdit()`

- **Definisi:** [`app.js:2943`](app.js#L2943)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:688`](index.html#L688) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveParticipantEdit()">💾 Simpan Perubahan Data</button>`
- **Memanggil Fungsi Internal:** [`saveLogoToMap()`](#savelogotomap), [`saveIdCardToMap()`](#saveidcardtomap), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`closeEditParticipantModal()`](#closeeditparticipantmodal)

<a id="viewrosterdetail"></a>
#### `viewRosterDetail(id)`

- **Definisi:** [`app.js:3067`](app.js#L3067)
- **Deskripsi:** Modal Detail Roster Lengkap & ID Card Per-Pemain
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3244`](app.js#L3244) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;" onclick="viewRos`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox)

<a id="renderparticipants"></a>
#### `renderParticipants()`

- **Definisi:** [`app.js:3131`](app.js#L3131)
- **Deskripsi:** Render Participant Table (Featuring Nickname, ID Card count per-player, and Admin Edit Action)
- **Titik Pemanggilan (10 lokasi):**
  - [`app.js:218`](app.js#L218) — di dalam fungsi `toggleInvitedTeam()`
    `renderParticipants();`
  - [`app.js:1032`](app.js#L1032) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderParticipants();`
  - [`app.js:1306`](app.js#L1306) — di dalam fungsi `saveState()`
    `renderParticipants();`
  - [`app.js:1575`](app.js#L1575) — di dalam fungsi `verifyAdminPin()`
    `renderParticipants();`
  - [`app.js:1587`](app.js#L1587) — di dalam fungsi `logoutAdmin()`
    `renderParticipants();`
  - [`app.js:2723`](app.js#L2723) — di dalam fungsi `setParticipantStatus()`
    `renderParticipants();`
  - [`app.js:2780`](app.js#L2780) — di dalam fungsi `deleteParticipant()`
    `renderParticipants();`
  - [`app.js:2807`](app.js#L2807) — di dalam fungsi `filterList()`
    `renderParticipants();`
  - [`app.js:3009`](app.js#L3009) — di dalam fungsi `saveParticipantEdit()`
    `renderParticipants();`
  - [`app.js:6829`](app.js#L6829) — di dalam fungsi `clearAllData()`
    `renderParticipants();`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`updateRegistrationDatalists()`](#updateregistrationdatalists), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`toggleInvitedTeam()`](#toggleinvitedteam), [`openEditParticipantModal()`](#openeditparticipantmodal), [`setParticipantStatus()`](#setparticipantstatus), [`deleteParticipant()`](#deleteparticipant), [`viewRosterDetail()`](#viewrosterdetail)

---

### 📦 Modul Aplikasi Umum

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`app.js:112`](app.js#L112)
- **Deskripsi:** Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:3762`](app.js#L3762) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1148`](functional_tests.js#L1148) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1175`](functional_tests.js#L1175) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1227`](functional_tests.js#L1227) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="getdepartmentcluster"></a>
#### `getDepartmentCluster(rawDept, teamOrPlayerName = '')`

- **Definisi:** [`app.js:124`](app.js#L124)
- **Deskripsi:** Normalisasi dan Pengelompokan Klaster Divisi Yokke (11 Klaster Standar Resmi) Memetakan variasi teks bebas pendaftar (e.g. 'IT/QA', 'Quality Assurance', 'ERM/PRM', 'ADO Bandung') ke klaster divisi resmi untuk pencegahan bentrok fase awal turnamen. /
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:188`](app.js#L188) — di dalam fungsi `getTeamDept()`
    `return getDepartmentCluster(raw, teamName).toLowerCase();`
  - [`app.js:3773`](app.js#L3773) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getDepartmentCluster === 'function') return getDepartmentCluster(d, team).toLowerCase();`
  - [`app.js:5095`](app.js#L5095) — di dalam fungsi `syncMCGGPlayers()`
    `const cluster = getDepartmentCluster(ply.dept, ply.name);`
  - [`app.js:5125`](app.js#L5125) — di dalam fungsi `syncMCGGPlayers()`
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
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:3771`](app.js#L3771) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:900`](functional_tests.js#L900) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`
  - [`functional_tests.js:1155`](functional_tests.js#L1155) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) { return ''; }`
  - [`functional_tests.js:1182`](functional_tests.js#L1182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:1234`](functional_tests.js#L1234) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) { return ''; }`
- **Memanggil Fungsi Internal:** [`getDepartmentCluster()`](#getdepartmentcluster)

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`app.js:204`](app.js#L204)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:3781`](app.js#L3781) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1154`](functional_tests.js#L1154) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1181`](functional_tests.js#L1181) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`
  - [`functional_tests.js:1233`](functional_tests.js#L1233) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`

<a id="toggleinvitedteam"></a>
#### `toggleInvitedTeam(id)`

- **Definisi:** [`app.js:212`](app.js#L212)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3202`](app.js#L3202) — di dalam fungsi `renderParticipants()`
    `<button class="btn ${p.isInvited ? 'btn-gold' : 'btn-outline'}" style="padding: 0.35rem 0.55rem; fon`
  - [`functional_tests.js:877`](functional_tests.js#L877) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleInvitedTeam('), 'app.js harus memiliki toggleInvitedTeam');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="showgloballoader"></a>
#### `showGlobalLoader(msg = "Menyinkronkan data turnamen dari Google Sheets...")`

- **Definisi:** [`app.js:247`](app.js#L247)
- **Deskripsi:** Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6839`](app.js#L6839) — cakupan global / event handler
    `showGlobalLoader('Menyinkronkan data terkini dari Google Sheets...');`
- **Memanggil Fungsi Internal:** [`hideGlobalLoader()`](#hidegloballoader)

<a id="hidegloballoader"></a>
#### `hideGlobalLoader()`

- **Definisi:** [`app.js:261`](app.js#L261)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:257`](app.js#L257) — di dalam fungsi `showGlobalLoader()`
    `hideGlobalLoader();`
  - [`app.js:6853`](app.js#L6853) — cakupan global / event handler
    `hideGlobalLoader();`

<a id="getitemkey"></a>
#### `getItemKey(item)`

- **Definisi:** [`app.js:829`](app.js#L829)
- **Deskripsi:** Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:843`](app.js#L843) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `localMap[getItemKey(localItem)] = localItem;`
  - [`app.js:850`](app.js#L850) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const itemKey = getItemKey(sheetItem);`

<a id="cleanorphanedtournamentdata"></a>
#### `cleanOrphanedTournamentData()`

- **Definisi:** [`app.js:1058`](app.js#L1058)
- **Deskripsi:** Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup, dan lobi MCGG
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1030`](app.js#L1030) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `cleanOrphanedTournamentData();`
  - [`app.js:2778`](app.js#L2778) — di dalam fungsi `deleteParticipant()`
    `cleanOrphanedTournamentData();`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff)

<a id="savestate"></a>
#### `saveState()`

- **Definisi:** [`app.js:1300`](app.js#L1300)
- **Deskripsi:** Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi MCGG) ke localStorage.
- **Titik Pemanggilan (35 lokasi):**
  - [`app.js:217`](app.js#L217) — di dalam fungsi `toggleInvitedTeam()`
    `saveState();`
  - [`app.js:1031`](app.js#L1031) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveState();`
  - [`app.js:1184`](app.js#L1184) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `saveState();`
  - [`app.js:1262`](app.js#L1262) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `saveState();`
  - [`app.js:1715`](app.js#L1715) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveState();`
  - [`app.js:2680`](app.js#L2680) — di dalam fungsi `handleRegister()`
    `saveState();`
  - [`app.js:2722`](app.js#L2722) — di dalam fungsi `setParticipantStatus()`
    `saveState();`
  - [`app.js:2779`](app.js#L2779) — di dalam fungsi `deleteParticipant()`
    `saveState();`
  - [`app.js:3008`](app.js#L3008) — di dalam fungsi `saveParticipantEdit()`
    `saveState();`
  - [`app.js:3413`](app.js#L3413) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveState();`
  - [`app.js:3440`](app.js#L3440) — di dalam fungsi `proceedToMLBBStage2()`
    `saveState();`
  - [`app.js:3453`](app.js#L3453) — di dalam fungsi `resetMLBBToStage1()`
    `saveState();`
  - [`app.js:3493`](app.js#L3493) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `saveState();`
  - [`app.js:3541`](app.js#L3541) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `saveState();`
  - [`app.js:3550`](app.js#L3550) — di dalam fungsi `saveTournamentStateOnly()`
    `saveState();`
  - [`app.js:3971`](app.js#L3971) — di dalam fungsi `generateGroupStage()`
    `saveState();`
  - [`app.js:3984`](app.js#L3984) — di dalam fungsi `updateGroupRecord()`
    `saveState();`
  - [`app.js:4318`](app.js#L4318) — di dalam fungsi `pickGroupPlayoffWinner()`
    `saveState();`
  - [`app.js:4357`](app.js#L4357) — di dalam fungsi `promptPlayoffMVP()`
    `saveState();`
  - [`app.js:4632`](app.js#L4632) — di dalam fungsi `setGroupMatchScore()`
    `saveState();`
  - [`app.js:4647`](app.js#L4647) — di dalam fungsi `setGroupMatchMVP()`
    `saveState();`
  - [`app.js:4689`](app.js#L4689) — di dalam fungsi `resetGroupMatchScore()`
    `saveState();`
  - [`app.js:5202`](app.js#L5202) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:5261`](app.js#L5261) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:5505`](app.js#L5505) — di dalam fungsi `updateMCGGRank()`
    `saveState();`
  - [`app.js:5540`](app.js#L5540) — di dalam fungsi `updateMCGGCommander()`
    `saveState();`
  - [`app.js:5576`](app.js#L5576) — di dalam fungsi `updateMCGGPenalty()`
    `saveState();`
  - [`app.js:5893`](app.js#L5893) — di dalam fungsi `drawMatchPool()`
    `saveState();`
  - [`app.js:5944`](app.js#L5944) — di dalam fungsi `assignMatchPoolToPlayers()`
    `saveState();`
  - [`app.js:5964`](app.js#L5964) — di dalam fungsi `toggleLockMatchDraw()`
    `saveState();`
  - [`app.js:5990`](app.js#L5990) — di dalam fungsi `nextMatchDraw()`
    `saveState();`
  - [`app.js:6023`](app.js#L6023) — di dalam fungsi `resetLobbyDraw()`
    `saveState();`
  - [`app.js:6815`](app.js#L6815) — di dalam fungsi `loadSampleData()`
    `saveState();`
  - [`app.js:6828`](app.js#L6828) — di dalam fungsi `clearAllData()`
    `saveState();`
  - [`app.js:7741`](app.js#L7741) — di dalam fungsi `shuffleMCGG32Besar()`
    `saveState();`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`updateAuthUI()`](#updateauthui), [`updateCounts()`](#updatecounts)

<a id="updatecounts"></a>
#### `updateCounts()`

- **Definisi:** [`app.js:1311`](app.js#L1311)
- **Deskripsi:** Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status verifikasi di header UI.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1035`](app.js#L1035) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCounts();`
  - [`app.js:1308`](app.js#L1308) — di dalam fungsi `saveState()`
    `updateCounts();`
  - [`app.js:2726`](app.js#L2726) — di dalam fungsi `setParticipantStatus()`
    `updateCounts();`
  - [`app.js:2783`](app.js#L2783) — di dalam fungsi `deleteParticipant()`
    `updateCounts();`
  - [`app.js:6833`](app.js#L6833) — di dalam fungsi `clearAllData()`
    `updateCounts();`

<a id="toggleofficial2form"></a>
#### `toggleOfficial2Form()`

- **Definisi:** [`app.js:1430`](app.js#L1430)
- **Deskripsi:** Toggle Official 2 Form
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:193`](index.html#L193) — Event `onchange`
    `<input type="checkbox" id="has_official_2" onchange="toggleOfficial2Form()">`
  - [`app.js:2057`](app.js#L2057) — di dalam fungsi `handleTeamNameInput()`
    `toggleOfficial2Form();`
  - [`app.js:2081`](app.js#L2081) — di dalam fungsi `handleTeamNameInput()`
    `toggleOfficial2Form();`
  - [`app.js:2705`](app.js#L2705) — di dalam fungsi `handleRegister()`
    `toggleOfficial2Form();`
  - [`app.js:6843`](app.js#L6843) — cakupan global / event handler
    `toggleOfficial2Form();`

<a id="renderplayersforminputs"></a>
#### `renderPlayersFormInputs()`

- **Definisi:** [`app.js:1437`](app.js#L1437)
- **Deskripsi:** Generate the 8 players form fields dynamically (Included In-Game Nickname and Per-Player ID Card Uploader)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:2703`](app.js#L2703) — di dalam fungsi `handleRegister()`
    `renderPlayersFormInputs();`
  - [`app.js:6841`](app.js#L6841) — cakupan global / event handler
    `renderPlayersFormInputs();`
- **Memanggil Fungsi Internal:** [`handlePlayerIdCardPreview()`](#handleplayeridcardpreview)

<a id="togglecategoryform"></a>
#### `toggleCategoryForm()`

- **Definisi:** [`app.js:1496`](app.js#L1496)
- **Deskripsi:** Switch form between MLBB and MCGG cleanly
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:85`](index.html#L85) — Event `onchange`
    `<select id="gameCategory" required onchange="toggleCategoryForm()" style="font-size: 1rem; font-weig`
  - [`app.js:2704`](app.js#L2704) — di dalam fungsi `handleRegister()`
    `toggleCategoryForm();`
  - [`app.js:6842`](app.js#L6842) — cakupan global / event handler
    `toggleCategoryForm();`

<a id="renderregistrationui"></a>
#### `renderRegistrationUI()`

- **Definisi:** [`app.js:1592`](app.js#L1592)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1018`](app.js#L1018) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRegistrationUI();`
  - [`app.js:1671`](app.js#L1671) — di dalam fungsi `toggleRegistrationStatus()`
    `renderRegistrationUI();`
  - [`app.js:1886`](app.js#L1886) — di dalam fungsi `updateAuthUI()`
    `renderRegistrationUI();`
  - [`functional_tests.js:826`](functional_tests.js#L826) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderRegistrationUI()'), 'Harus memiliki renderRegistrationUI()')`

<a id="updateregistrationdatalists"></a>
#### `updateRegistrationDatalists()`

- **Definisi:** [`app.js:1963`](app.js#L1963)
- **Deskripsi:** Sinkronkan Datalist Nama Tim / Pemain untuk Fitur Update Cepat di Formulir Pendaftaran
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:2706`](app.js#L2706) — di dalam fungsi `handleRegister()`
    `updateRegistrationDatalists();`
  - [`app.js:3133`](app.js#L3133) — di dalam fungsi `renderParticipants()`
    `updateRegistrationDatalists();`
  - [`functional_tests.js:171`](functional_tests.js#L171) — pada skenario pengujian
    `assert(appCode.includes('function updateRegistrationDatalists('), 'Harus ada fungsi updateRegistrati`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="handleteamnameinput"></a>
#### `handleTeamNameInput(val)`

- **Definisi:** [`app.js:1985`](app.js#L1985)
- **Deskripsi:** Handler saat Peserta Mengetik / Memilih Nama Tim MLBB di Form Pendaftaran
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:100`](index.html#L100) — Event `oninput`
    `<input type="text" id="teamName" list="registeredTeamsDatalist" oninput="handleTeamNameInput(this.va`
  - [`functional_tests.js:172`](functional_tests.js#L172) — pada skenario pengujian
    `assert(appCode.includes('function handleTeamNameInput('), 'Harus ada handler handleTeamNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`toggleOfficial2Form()`](#toggleofficial2form)

<a id="shuffleandgeneratetournament"></a>
#### `shuffleAndGenerateTournament()`

- **Definisi:** [`app.js:3326`](app.js#L3326)
- **Deskripsi:** Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum dikunci.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:446`](index.html#L446) — Event `onclick`
    `<button id="btnShuffleMLBB" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0.85rem;`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage)

<a id="pickwinner"></a>
#### `pickWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:3654`](app.js#L3654)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3720`](app.js#L3720) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:3724`](app.js#L3724) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket)

<a id="getprefix"></a>
#### `getPrefix(team)`

- **Definisi:** [`app.js:3761`](app.js#L3761)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:3799`](app.js#L3799) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:3807`](app.js#L3807) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:3816`](app.js#L3816) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:3832`](app.js#L3832) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountA = teamPrefix ? groups[a].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:3833`](app.js#L3833) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountB = teamPrefix ? groups[b].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:3866`](app.js#L3866) — di dalam fungsi `allocateMLBBGroups()`
    `const p = getPrefix(t);`
  - [`app.js:3873`](app.js#L3873) — di dalam fungsi `allocateMLBBGroups()`
    `const pA = getPrefix(a), pB = getPrefix(b);`
  - [`app.js:3881`](app.js#L3881) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:3884`](app.js#L3884) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPrefixConflict = (g) => teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`

<a id="getdept"></a>
#### `getDept(team)`

- **Definisi:** [`app.js:3769`](app.js#L3769)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:3800`](app.js#L3800) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:3808`](app.js#L3808) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDep = teamDept && groups[g].some(t => getDept(t) === teamDept);`
  - [`app.js:3867`](app.js#L3867) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getDept(t);`
  - [`app.js:3874`](app.js#L3874) — di dalam fungsi `allocateMLBBGroups()`
    `const dA = getDept(a), dB = getDept(b);`
  - [`app.js:3882`](app.js#L3882) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:3885`](app.js#L3885) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDeptConflict = (g) => teamDept && groups[g].some(t => getDept(t) === teamDept);`

<a id="isinvited"></a>
#### `isInvited(team)`

- **Definisi:** [`app.js:3780`](app.js#L3780)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3785`](app.js#L3785) — di dalam fungsi `allocateMLBBGroups()`
    `let invited = teamsList.filter(t => isInvited(t));`
  - [`app.js:3786`](app.js#L3786) — di dalam fungsi `allocateMLBBGroups()`
    `let regular = teamsList.filter(t => !isInvited(t));`
  - [`app.js:3806`](app.js#L3806) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:3815`](app.js#L3815) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:3824`](app.js#L3824) — di dalam fungsi `allocateMLBBGroups()`
    `if (!groups[g].some(t => isInvited(t))) { targetGroup = g; break; }`

<a id="getoverbasecount"></a>
#### `getOverBaseCount()`

- **Definisi:** [`app.js:3848`](app.js#L3848)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3854`](app.js#L3854) — di dalam fungsi `allocateMLBBGroups()`
    `return getOverBaseCount() < remainder;`

<a id="canaccept"></a>
#### `canAccept(g)`

- **Definisi:** [`app.js:3850`](app.js#L3850)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="hasprefixconflict"></a>
#### `hasPrefixConflict(g)`

- **Definisi:** [`app.js:3884`](app.js#L3884)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3903`](app.js#L3903) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`
  - [`app.js:3912`](app.js#L3912) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g)) {`

<a id="hasdeptconflict"></a>
#### `hasDeptConflict(g)`

- **Definisi:** [`app.js:3885`](app.js#L3885)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3903`](app.js#L3903) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`

<a id="updategrouprecord"></a>
#### `updateGroupRecord(gName, idx, field, val)`

- **Definisi:** [`app.js:3976`](app.js#L3976)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4503`](app.js#L4503) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" o`
  - [`app.js:4507`](app.js#L4507) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" `
  - [`app.js:7182`](app.js#L7182) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:7185`](app.js#L7185) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="setgroupmatchscore"></a>
#### `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB)`

- **Definisi:** [`app.js:4609`](app.js#L4609)
- **Deskripsi:** Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara otomatis.
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:4818`](app.js#L4818) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini ${f.scoreA===2 && f.scoreB===0 ? 'active' : ''}" onclick="setGroupMatc`
  - [`app.js:4819`](app.js#L4819) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini ${f.scoreA===2 && f.scoreB===1 ? 'active' : ''}" onclick="setGroupMatc`
  - [`app.js:4820`](app.js#L4820) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini ${f.scoreA===1 && f.scoreB===2 ? 'active' : ''}" onclick="setGroupMatc`
  - [`app.js:4821`](app.js#L4821) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini ${f.scoreA===0 && f.scoreB===2 ? 'active' : ''}" onclick="setGroupMatc`
  - [`app.js:7240`](app.js#L7240) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`functional_tests.js:676`](functional_tests.js#L676) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchScore('), 'app.js harus memiliki setter skor setGroup`
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="setgroupmatchmvp"></a>
#### `setGroupMatchMVP(matchId, mvpPlayer, mvpHero, mvpTeam)`

- **Definisi:** [`app.js:4637`](app.js#L4637)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4680`](app.js#L4680) — di dalam fungsi `promptGroupMatchMVP()`
    `setGroupMatchMVP(matchId, newMvp, newHero, mvpTeam);`
  - [`functional_tests.js:790`](functional_tests.js#L790) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchMVP('), 'Harus memiliki setGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="promptgroupmatchmvp"></a>
#### `promptGroupMatchMVP(matchId, teamA, teamB)`

- **Definisi:** [`app.js:4651`](app.js#L4651)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4823`](app.js#L4823) — di dalam fungsi `renderGroupFixturesUI()`
    `${isDone ? '<button class="btn-score-mini" style="color:var(--yokke-gold); border-color:rgba(255,215`
  - [`app.js:7243`](app.js#L7243) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="promptGr`
  - [`functional_tests.js:791`](functional_tests.js#L791) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptGroupMatchMVP('), 'Harus memiliki promptGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`setGroupMatchMVP()`](#setgroupmatchmvp)

<a id="resetgroupmatchscore"></a>
#### `resetGroupMatchScore(matchId)`

- **Definisi:** [`app.js:4683`](app.js#L4683)
- **Deskripsi:** Mereset skor pertandingan grup MLBB ke status belum bertanding.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4822`](app.js#L4822) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini" style="color:var(--yokke-red);" onclick="resetGroupMatchScore('${safe`
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="findprevious"></a>
#### `findPrevious(ply)`

- **Definisi:** [`app.js:5060`](app.js#L5060)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5073`](app.js#L5073) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`app.js:5072`](app.js#L5072)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5143`](app.js#L5143) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:5195`](app.js#L5195) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

<a id="sortfn"></a>
#### `sortFn(a, b)`

- **Definisi:** [`app.js:5305`](app.js#L5305)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevsemi"></a>
#### `findPrevSemi(ply)`

- **Definisi:** [`app.js:5343`](app.js#L5343)
- **Deskripsi:** Preserve poin semifinal jika sudah ada
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5352`](app.js#L5352) — di dalam fungsi `syncMCGGSemiFinal()`
    `const prev = findPrevSemi(p) || {};`

<a id="mapsemiplayer"></a>
#### `mapSemiPlayer(p)`

- **Definisi:** [`app.js:5351`](app.js#L5351)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="sortfn"></a>
#### `sortFn(a, b)`

- **Definisi:** [`app.js:5374`](app.js#L5374)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevinarr"></a>
#### `findPrevInArr(p, arr)`

- **Definisi:** [`app.js:5394`](app.js#L5394)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5404`](app.js#L5404) — di dalam fungsi `syncMCGGGrandFinal()`
    `const prev = findPrevInArr(p, existingGF);`

<a id="mapgfplayer"></a>
#### `mapGFPlayer(p)`

- **Definisi:** [`app.js:5403`](app.js#L5403)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5436`](app.js#L5436) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:5437`](app.js#L5437) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:5466`](app.js#L5466) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:5467`](app.js#L5467) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`

<a id="drawmatchpool"></a>
#### `drawMatchPool(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:5825`](app.js#L5825)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 1: Acak 8 Pool Commander untuk Group/Lobby Ini ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5648`](app.js#L5648) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaft`
  - [`app.js:5996`](app.js#L5996) — di dalam fungsi `drawMatchCommanders()`
    `drawMatchPool(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="assignmatchpooltoplayers"></a>
#### `assignMatchPoolToPlayers(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:5900`](app.js#L5900)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 2: Pasangkan 8 Pool Commander ke Masing-Masing Pemain ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5655`](app.js#L5655) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasPool ? "alert('⚠️ Silakan acak 8 Pool Commander terlebih dahulu.')" : (isMatchLocked `
  - [`app.js:5997`](app.js#L5997) — di dalam fungsi `drawMatchCommanders()`
    `assignMatchPoolToPlayers(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="togglelockmatchdraw"></a>
#### `toggleLockMatchDraw(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:5951`](app.js#L5951)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 3: Kunci Match (Lock) / Buka Kunci ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5662`](app.js#L5662) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasAssigned ? "alert('⚠️ Pasangkan commander ke pemain terlebih dahulu sebelum mengunci.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="nextmatchdraw"></a>
#### `nextMatchDraw(targetLobbyKey, nextMatchNum)`

- **Definisi:** [`app.js:5978`](app.js#L5978)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 4: Lanjut ke Match Berikutnya (Match 2) ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5670`](app.js#L5670) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="nextMatchDraw('${lobbyKey}', 2)">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="showmatch3draftinfo"></a>
#### `showMatch3DraftInfo()`

- **Definisi:** [`app.js:6063`](app.js#L6063)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5675`](app.js#L5675) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="showMatch3DraftInfo()">`

<a id="buildroundcell"></a>
#### `buildRoundCell(player, roundKey, cmdKey, targetLobby)`

- **Definisi:** [`app.js:6515`](app.js#L6515)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6503`](app.js#L6503) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r1', 'c1', lobbyKey)}</td>`
  - [`app.js:6504`](app.js#L6504) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r2', 'c2', lobbyKey)}</td>`
  - [`app.js:6505`](app.js#L6505) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r3', 'c3', lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`updateMCGGCommander()`](#updatemcggcommander), [`updateMCGGRank()`](#updatemcggrank)

<a id="loadsampledata"></a>
#### `loadSampleData()`

- **Definisi:** [`app.js:6616`](app.js#L6616)
- **Deskripsi:** Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation - No Sensitive Info)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:325`](index.html#L325) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="loadSamp`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="clearalldata"></a>
#### `clearAllData()`

- **Definisi:** [`app.js:6820`](app.js#L6820)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:326`](index.html#L326) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="clearAll`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="runtest"></a>
#### `runTest(testName, fn)`

- **Definisi:** [`functional_tests.js:26`](functional_tests.js#L26)
- **Titik Pemanggilan (76 lokasi):**
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
  - [`functional_tests.js:1144`](functional_tests.js#L1144) — pada skenario pengujian
    `runTest('10.12 Keseimbangan Kapasitas Grup MLBB (Strict Group Balance N=41 ke 8 Grup: 7 Grup 5 Tim &`
  - [`functional_tests.js:1173`](functional_tests.js#L1173) — pada skenario pengujian
    `runTest('10.13 Hierarki Prioritas Aturan Undian (1. Invited, 2. Satelit, 3. Divisi) & Relaksasi Bert`
  - [`functional_tests.js:1225`](functional_tests.js#L1225) — pada skenario pengujian
    `runTest('10.14 Keseimbangan Matematis Kapasitas Multigrup & Pemisahan Satelit Lintas Invited/Regular`
  - [`functional_tests.js:1284`](functional_tests.js#L1284) — pada skenario pengujian
    `runTest('11.1 Container & Markup Hub Interaktif di index.html', () => {`
  - [`functional_tests.js:1292`](functional_tests.js#L1292) — pada skenario pengujian
    `runTest('11.2 Styling Split-Pane & Responsivitas di style.css', () => {`
  - [`functional_tests.js:1300`](functional_tests.js#L1300) — pada skenario pengujian
    `runTest('11.3 State & Fungsi Kontrol Master-Detail MLBB di app.js', () => {`
  - [`functional_tests.js:1307`](functional_tests.js#L1307) — pada skenario pengujian
    `runTest('11.4 State & Fungsi Kontrol Master-Detail MCGG di app.js', () => {`
  - [`functional_tests.js:1314`](functional_tests.js#L1314) — pada skenario pengujian
    `runTest('11.5 Verifikasi Penghapusan Badge Invite Publik', () => {`
  - [`functional_tests.js:1318`](functional_tests.js#L1318) — pada skenario pengujian
    `runTest('11.6 Ground Truth Sinkronisasi MCGG dari Sheet Dedicated & Preservasi Lobi di app.js', () =`
  - [`functional_tests.js:1335`](functional_tests.js#L1335) — pada skenario pengujian
    `runTest('11.7 Ground Truth Sinkronisasi MLBB dari Sheet Dedicated & Eliminasi Cache Pada Load Page',`
  - [`functional_tests.js:1347`](functional_tests.js#L1347) — pada skenario pengujian
    `runTest('11.8 Fullscreen Initial Live Sync Loader di index.html, style.css & Lifecycle DOMContentLoa`

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
  - [`functional_tests.js:1366`](functional_tests.js#L1366) — pada skenario pengujian
    `runLiveIntegrationTests();`
- **Memanggil Fungsi Internal:** [`runAsyncTest()`](#runasynctest), [`runTest()`](#runtest), [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMlbbPesertaListing()`](#getmlbbpesertalisting), [`getMcggListing()`](#getmcgglisting), [`doPost()`](#dopost), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`shuffleMCGGPlayers()`](#shufflemcggplayers), [`getGroupFixtures()`](#getgroupfixtures), [`setGroupMatchScore()`](#setgroupmatchscore), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar), [`scrollToMCGGLobby()`](#scrolltomcgglobby), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`drawMatchCommanders()`](#drawmatchcommanders), [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`resetMLBBToStage1()`](#resetmlbbtostage1), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`setGroupMatchMVP()`](#setgroupmatchmvp), [`promptGroupMatchMVP()`](#promptgroupmatchmvp), [`promptPlayoffMVP()`](#promptplayoffmvp), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`switchLobbyDrawView()`](#switchlobbydrawview), [`resetLobbyDraw()`](#resetlobbydraw), [`toggleRegistrationStatus()`](#toggleregistrationstatus), [`renderRegistrationUI()`](#renderregistrationui), [`resetMCGGPointsAndDraw()`](#resetmcggpointsanddraw), [`prevMLBBGroupPage()`](#prevmlbbgrouppage), [`nextMLBBGroupPage()`](#nextmlbbgrouppage), [`goToMLBBGroupPage()`](#gotomlbbgrouppage), [`prevMCGGGroupPage()`](#prevmcgggrouppage), [`nextMCGGGroupPage()`](#nextmcgggrouppage), [`toggleInvitedTeam()`](#toggleinvitedteam), [`isTeamInvited()`](#isteaminvited), [`getTeamPrefix()`](#getteamprefix), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`getTeamDept()`](#getteamdept)

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:890`](functional_tests.js#L890)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:112`](app.js#L112) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:3762`](app.js#L3762) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1148`](functional_tests.js#L1148) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1175`](functional_tests.js#L1175) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1227`](functional_tests.js#L1227) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:896`](functional_tests.js#L896)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:204`](app.js#L204) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:3781`](app.js#L3781) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1154`](functional_tests.js#L1154) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1181`](functional_tests.js#L1181) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`
  - [`functional_tests.js:1233`](functional_tests.js#L1233) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`functional_tests.js:900`](functional_tests.js#L900)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:182`](app.js#L182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`app.js:3771`](app.js#L3771) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`
  - [`functional_tests.js:1155`](functional_tests.js#L1155) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) { return ''; }`
  - [`functional_tests.js:1182`](functional_tests.js#L1182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:1234`](functional_tests.js#L1234) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) { return ''; }`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:946`](functional_tests.js#L946)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:112`](app.js#L112) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:3762`](app.js#L3762) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1148`](functional_tests.js#L1148) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1175`](functional_tests.js#L1175) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1227`](functional_tests.js#L1227) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:952`](functional_tests.js#L952)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:204`](app.js#L204) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:3781`](app.js#L3781) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`
  - [`functional_tests.js:1154`](functional_tests.js#L1154) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1181`](functional_tests.js#L1181) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`
  - [`functional_tests.js:1233`](functional_tests.js#L1233) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`

<a id="findprevious"></a>
#### `findPrevious()`

- **Definisi:** [`functional_tests.js:1085`](functional_tests.js#L1085)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5073`](app.js#L5073) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`functional_tests.js:1087`](functional_tests.js#L1087)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5143`](app.js#L5143) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:5195`](app.js#L5195) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:1148`](functional_tests.js#L1148)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:112`](app.js#L112) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:3762`](app.js#L3762) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1175`](functional_tests.js#L1175) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1227`](functional_tests.js#L1227) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:1154`](functional_tests.js#L1154)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:204`](app.js#L204) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:3781`](app.js#L3781) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1181`](functional_tests.js#L1181) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`
  - [`functional_tests.js:1233`](functional_tests.js#L1233) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`functional_tests.js:1155`](functional_tests.js#L1155)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:182`](app.js#L182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`app.js:3771`](app.js#L3771) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:900`](functional_tests.js#L900) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`
  - [`functional_tests.js:1182`](functional_tests.js#L1182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:1234`](functional_tests.js#L1234) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) { return ''; }`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:1175`](functional_tests.js#L1175)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:112`](app.js#L112) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:3762`](app.js#L3762) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1148`](functional_tests.js#L1148) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1227`](functional_tests.js#L1227) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:1181`](functional_tests.js#L1181)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:204`](app.js#L204) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:3781`](app.js#L3781) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1154`](functional_tests.js#L1154) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1233`](functional_tests.js#L1233) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`functional_tests.js:1182`](functional_tests.js#L1182)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:182`](app.js#L182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`app.js:3771`](app.js#L3771) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:900`](functional_tests.js#L900) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`
  - [`functional_tests.js:1155`](functional_tests.js#L1155) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) { return ''; }`
  - [`functional_tests.js:1234`](functional_tests.js#L1234) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) { return ''; }`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:1227`](functional_tests.js#L1227)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:112`](app.js#L112) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:3762`](app.js#L3762) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1148`](functional_tests.js#L1148) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`functional_tests.js:1175`](functional_tests.js#L1175) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:1233`](functional_tests.js#L1233)
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:204`](app.js#L204) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:3781`](app.js#L3781) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1154`](functional_tests.js#L1154) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`
  - [`functional_tests.js:1181`](functional_tests.js#L1181) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return teamName.includes('[INVITED]'); }`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`functional_tests.js:1234`](functional_tests.js#L1234)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:182`](app.js#L182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`app.js:3771`](app.js#L3771) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:900`](functional_tests.js#L900) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`
  - [`functional_tests.js:1155`](functional_tests.js#L1155) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) { return ''; }`
  - [`functional_tests.js:1182`](functional_tests.js#L1182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`

---

### ☁️ Sinkronisasi Google Sheets & State Storage

<a id="savestagestatelocal"></a>
#### `saveStageStateLocal()`

- **Definisi:** [`app.js:358`](app.js#L358)
- **Deskripsi:** Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM, data tie-breaker) ke localStorage.
- **Titik Pemanggilan (10 lokasi):**
  - [`app.js:1711`](app.js#L1711) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveStageStateLocal();`
  - [`app.js:3359`](app.js#L3359) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveStageStateLocal();`
  - [`app.js:3392`](app.js#L3392) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3397`](app.js#L3397) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3412`](app.js#L3412) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3439`](app.js#L3439) — di dalam fungsi `proceedToMLBBStage2()`
    `saveStageStateLocal();`
  - [`app.js:3452`](app.js#L3452) — di dalam fungsi `resetMLBBToStage1()`
    `saveStageStateLocal();`
  - [`app.js:3492`](app.js#L3492) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `saveStageStateLocal();`
  - [`app.js:3518`](app.js#L3518) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveStageStateLocal();`
  - [`app.js:3551`](app.js#L3551) — di dalam fungsi `saveTournamentStateOnly()`
    `saveStageStateLocal();`

<a id="resetcacheandfollowgsheet"></a>
#### `resetCacheAndFollowGSheet()`

- **Definisi:** [`app.js:1144`](app.js#L1144)
- **Deskripsi:** Reset cache lokal dan ikuti 100% data aktif dari Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:341`](index.html#L341) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetCacheFollowGSheet" style="padding: 0.45rem 0.9rem; font-`
- **Memanggil Fungsi Internal:** [`fetchParticipantsFromGoogleSheet()`](#fetchparticipantsfromgooglesheet)

<a id="saveallchangestogooglesheet"></a>
#### `saveAllChangesToGoogleSheet()`

- **Definisi:** [`app.js:1177`](app.js#L1177)
- **Deskripsi:** SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:344`](index.html#L344) — Event `onclick`
    `<button class="btn btn-primary" id="btnSaveAllChanges" style="padding: 0.45rem 0.9rem; font-size: 0.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate)

<a id="synctournamentsheetstogsheet"></a>
#### `syncTournamentSheetsToGSheet()`

- **Definisi:** [`app.js:1261`](app.js#L1261)
- **Deskripsi:** SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate)

<a id="savetournamentstateonly"></a>
#### `saveTournamentStateOnly(isSilent = false)`

- **Definisi:** [`app.js:3549`](app.js#L3549)
- **Deskripsi:** 4. SIMPAN CEPAT KHUSUS STATE BAGAN & POIN (1 REQUEST RINGAN)
- **Titik Pemanggilan (13 lokasi):**
  - [`index.html:451`](index.html#L451) — Event `onclick`
    `<button id="btnSaveBracketGSheet" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`index.html:556`](index.html#L556) — Event `onclick`
    `<button id="btnSaveMCGGPointsGSheet" class="btn btn-primary" style="display: none; font-size: 0.85re`
  - [`app.js:222`](app.js#L222) — di dalam fungsi `toggleInvitedTeam()`
    `saveTournamentStateOnly(true);`
  - [`app.js:1675`](app.js#L1675) — di dalam fungsi `toggleRegistrationStatus()`
    `saveTournamentStateOnly(true);`
  - [`app.js:1718`](app.js#L1718) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3362`](app.js#L3362) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3416`](app.js#L3416) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3443`](app.js#L3443) — di dalam fungsi `proceedToMLBBStage2()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3456`](app.js#L3456) — di dalam fungsi `resetMLBBToStage1()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3500`](app.js#L3500) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3520`](app.js#L3520) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveTournamentStateOnly(true);`
  - [`app.js:5966`](app.js#L5966) — di dalam fungsi `toggleLockMatchDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:6025`](app.js#L6025) — di dalam fungsi `resetLobbyDraw()`
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
#### `compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.8)`

- **Definisi:** [`app.js:615`](app.js#L615)
- **Deskripsi:** Client-side image compressor: compresses smartphone photos to clean ~80-120KB JPEG
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1385`](app.js#L1385) — di dalam fungsi `handleLogoPreview()`
    `uploadedLogoBase64 = await compressImage(file, 250, 250, 0.85);`
  - [`app.js:1399`](app.js#L1399) — di dalam fungsi `handleSingleIdCardPreview()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`
  - [`app.js:1420`](app.js#L1420) — di dalam fungsi `handlePlayerIdCardPreview()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`
  - [`app.js:2920`](app.js#L2920) — di dalam fungsi `handleEditLogoUpload()`
    `const compressed = await compressImage(file, 400, 400, 0.85);`
  - [`app.js:2937`](app.js#L2937) — di dalam fungsi `handleEditRosterIdCardUpload()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`

<a id="getidcardmap"></a>
#### `getIdCardMap()`

- **Definisi:** [`app.js:664`](app.js#L664)
- **Deskripsi:** Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:705`](app.js#L705) — di dalam fungsi `saveIdCardToMap()`
    `let map = getIdCardMap();`
  - [`app.js:722`](app.js#L722) — di dalam fungsi `findIdCardByEmpIdOrName()`
    `const map = getIdCardMap();`

<a id="saveidcardtomap"></a>
#### `saveIdCardToMap(empId, name, cardUrl)`

- **Definisi:** [`app.js:703`](app.js#L703)
- **Deskripsi:** Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasarkan NIP/Nama.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:786`](app.js#L786) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(p.empId, p.name, resolvedCard);`
  - [`app.js:797`](app.js#L797) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(m.empId, m.name, resolvedCard);`
  - [`app.js:875`](app.js#L875) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sheetItem.empId, sheetItem.name, rootIdCard);`
  - [`app.js:900`](app.js#L900) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sM.empId, sM.name, mIdCard);`
  - [`app.js:2989`](app.js#L2989) — di dalam fungsi `saveParticipantEdit()`
    `saveIdCardToMap(m.empId, m.name, m.idCard);`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="findidcardbyempidorname"></a>
#### `findIdCardByEmpIdOrName(empId, name)`

- **Definisi:** [`app.js:721`](app.js#L721)
- **Deskripsi:** Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama peserta.
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:783`](app.js#L783) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name) || (p.roster && p.roster[0`
  - [`app.js:794`](app.js#L794) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' `
  - [`app.js:873`](app.js#L873) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const rootIdCard = sheetItem.idCard || (localItem ? localItem.idCard : '') || findIdCardByEmpIdOrNam`
  - [`app.js:895`](app.js#L895) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `let mIdCard = sM.idCard || (lM ? lM.idCard : '') || findIdCardByEmpIdOrName(sM.empId, sM.name) || (d`
  - [`app.js:2042`](app.js#L2042) — di dalam fungsi `handleTeamNameInput()`
    `const off1Card = off1.idCard || findIdCardByEmpIdOrName(off1.empId, off1.name);`
  - [`app.js:2071`](app.js#L2071) — di dalam fungsi `handleTeamNameInput()`
    `const off2Card = off2.idCard || findIdCardByEmpIdOrName(off2.empId, off2.name);`
  - [`app.js:2107`](app.js#L2107) — di dalam fungsi `handleTeamNameInput()`
    `const pCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name);`
  - [`app.js:2172`](app.js#L2172) — di dalam fungsi `handleMcggNameInput()`
    `const idCard = existing.idCard || firstRoster.idCard || findIdCardByEmpIdOrName(existing.empId, exis`
  - [`app.js:2498`](app.js#L2498) — di dalam fungsi `handleRegister()`
    `mcggIdCard = existingParticipant.idCard || (existingParticipant.roster && existingParticipant.roster`
  - [`app.js:2880`](app.js#L2880) — di dalam fungsi `openEditParticipantModal()`
    `editRosterIdCards[idx] = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MC`
  - [`app.js:3091`](app.js#L3091) — di dalam fungsi `viewRosterDetail()`
    `const cardSrc = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (team.category === 'MCGG' ? `
  - [`app.js:3154`](app.js#L3154) — di dalam fungsi `renderParticipants()`
    `const card = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idC`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="getlogomap"></a>
#### `getLogoMap()`

- **Definisi:** [`app.js:739`](app.js#L739)
- **Deskripsi:** Pemetaan Logo sesuai Nama Tim (MLBB)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:755`](app.js#L755) — di dalam fungsi `saveLogoToMap()`
    `let map = getLogoMap();`
  - [`app.js:764`](app.js#L764) — di dalam fungsi `findLogoByTeamName()`
    `const map = getLogoMap();`

<a id="savelogotomap"></a>
#### `saveLogoToMap(teamName, logoUrl)`

- **Definisi:** [`app.js:753`](app.js#L753)
- **Deskripsi:** Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasarkan nama tim.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:778`](app.js#L778) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveLogoToMap(p.name, resolvedLogo);`
  - [`app.js:869`](app.js#L869) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveLogoToMap(sheetItem.name, teamLogo);`
  - [`app.js:2966`](app.js#L2966) — di dalam fungsi `saveParticipantEdit()`
    `saveLogoToMap(p.name, currentEditLogoBase64);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="findlogobyteamname"></a>
#### `findLogoByTeamName(teamName)`

- **Definisi:** [`app.js:762`](app.js#L762)
- **Deskripsi:** Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peserta.
- **Titik Pemanggilan (8 lokasi):**
  - [`app.js:775`](app.js#L775) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedLogo = p.logo || findLogoByTeamName(p.name);`
  - [`app.js:867`](app.js#L867) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const teamLogo = sheetItem.logo || (localItem ? localItem.logo : '') || findLogoByTeamName(sheetItem`
  - [`app.js:2015`](app.js#L2015) — di dalam fungsi `handleTeamNameInput()`
    `const teamLogo = existing.logo || findLogoByTeamName(existing.name);`
  - [`app.js:2224`](app.js#L2224) — di dalam fungsi `handleRegister()`
    `if (existingParticipant && (existingParticipant.logo || findLogoByTeamName(existingParticipant.name)`
  - [`app.js:2225`](app.js#L2225) — di dalam fungsi `handleRegister()`
    `logoData = existingParticipant.logo || findLogoByTeamName(existingParticipant.name);`
  - [`app.js:2864`](app.js#L2864) — di dalam fungsi `openEditParticipantModal()`
    `currentEditLogoBase64 = p.logo || findLogoByTeamName(p.name) || '';`
  - [`app.js:3071`](app.js#L3071) — di dalam fungsi `viewRosterDetail()`
    `const teamLogoSrc = team.logo || findLogoByTeamName(team.name);`
  - [`app.js:3168`](app.js#L3168) — di dalam fungsi `renderParticipants()`
    `const teamLogoSrc = p.logo || findLogoByTeamName(p.name);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="handlelogopreview"></a>
#### `handleLogoPreview(event)`

- **Definisi:** [`app.js:1380`](app.js#L1380)
- **Deskripsi:** Handle Logo Upload and Live Preview
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:131`](index.html#L131) — Event `onchange`
    `<input type="file" id="teamLogoInput" accept="image/*" onchange="handleLogoPreview(event)" style="pa`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handlesingleidcardpreview"></a>
#### `handleSingleIdCardPreview(event, target)`

- **Definisi:** [`app.js:1394`](app.js#L1394)
- **Deskripsi:** Handle Individual ID Card Upload for Officials and MCGG
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:177`](index.html#L177) — Event `onchange`
    `<input type="file" id="off1_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
  - [`index.html:221`](index.html#L221) — Event `onchange`
    `<input type="file" id="off2_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
  - [`index.html:290`](index.html#L290) — Event `onchange`
    `<input type="file" id="mcgg_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleplayeridcardpreview"></a>
#### `handlePlayerIdCardPreview(event, playerIdx)`

- **Definisi:** [`app.js:1415`](app.js#L1415)
- **Deskripsi:** Handle Individual ID Card Upload for Each of the 8 Players
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1475`](app.js#L1475) — di dalam fungsi `renderPlayersFormInputs()`
    `<input type="file" id="p${i}_idcard_file" accept="image/*" onchange="handlePlayerIdCardPreview(event`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="openidcardlightbox"></a>
#### `openIdCardLightbox(imgSrc, title, driveUrl = '')`

- **Definisi:** [`app.js:1907`](app.js#L1907)
- **Deskripsi:** Lightbox for Viewing Full ID Card
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:2898`](app.js#L2898) — di dalam fungsi `openEditParticipantModal()`
    `<div class="idcard-thumb-sm" id="edit_m_${idx}_thumb" onclick="if(editRosterIdCards[${idx}]) openIdC`
  - [`app.js:3095`](app.js#L3095) — di dalam fungsi `viewRosterDetail()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--yokke-`
- **Memanggil Fungsi Internal:** [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="closeidcardlightbox"></a>
#### `closeIdCardLightbox()`

- **Definisi:** [`app.js:1946`](app.js#L1946)
- **Deskripsi:** Menutup modal pop-up lightbox preview ID Card pegawai.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:732`](index.html#L732) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeIdCardLightbox()">✕ Tu`

<a id="openeditparticipantmodal"></a>
#### `openEditParticipantModal(id)`

- **Definisi:** [`app.js:2813`](app.js#L2813)
- **Deskripsi:** ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3211`](app.js#L3211) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-edit-sm" title="Edit Data & Upload ID Card" onclick="openEditParticipantModal`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox), [`handleEditRosterIdCardUpload()`](#handleeditrosteridcardupload)

<a id="closeeditparticipantmodal"></a>
#### `closeEditParticipantModal()`

- **Definisi:** [`app.js:2911`](app.js#L2911)
- **Deskripsi:** Menutup modal dialog edit peserta.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:615`](index.html#L615) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeEditParticipantModal(`
  - [`index.html:687`](index.html#L687) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeEditParticipantModal()">Batal</button>`
  - [`app.js:3062`](app.js#L3062) — di dalam fungsi `saveParticipantEdit()`
    `closeEditParticipantModal();`

<a id="handleeditlogoupload"></a>
#### `handleEditLogoUpload(event)`

- **Definisi:** [`app.js:2916`](app.js#L2916)
- **Deskripsi:** Handle logo upload in Admin Edit modal
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:647`](index.html#L647) — Event `onchange`
    `<input type="file" id="editTeamLogoInput" accept="image/*" onchange="handleEditLogoUpload(event)" st`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleeditrosteridcardupload"></a>
#### `handleEditRosterIdCardUpload(event, idx)`

- **Definisi:** [`app.js:2932`](app.js#L2932)
- **Deskripsi:** Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedit pada modal admin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2901`](app.js#L2901) — di dalam fungsi `openEditParticipantModal()`
    `<input type="file" accept="image/*" style="font-size:0.7rem; width:120px;" onchange="handleEditRoste`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="closedetailmodal"></a>
#### `closeDetailModal()`

- **Definisi:** [`app.js:3126`](app.js#L3126)
- **Deskripsi:** Menutup modal dialog rincian roster tim dan galeri ID Card.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:704`](index.html#L704) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeDetailModal()">✕ Tutu`

---

### 🔧 Helper & UI Utility

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`app.js:649`](app.js#L649)
- **Deskripsi:** Helper to format Google Drive image URLs into viewable thumbnail image URLs
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:1914`](app.js#L1914) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:2020`](app.js#L2020) — di dalam fungsi `handleTeamNameInput()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogo)}" alt="Logo ${escapeHtml(existing.nam`
  - [`app.js:2047`](app.js#L2047) — di dalam fungsi `handleTeamNameInput()`
    `off1Prev.innerHTML = '<img src="${formatDriveImageUrl(off1Card)}" style="width:100%;height:100%;obje`
  - [`app.js:2076`](app.js#L2076) — di dalam fungsi `handleTeamNameInput()`
    `off2Prev.innerHTML = '<img src="${formatDriveImageUrl(off2Card)}" style="width:100%;height:100%;obje`
  - [`app.js:2110`](app.js#L2110) — di dalam fungsi `handleTeamNameInput()`
    `if (pPrev) pPrev.innerHTML = '<img src="${formatDriveImageUrl(pCard)}" style="width:100%;height:100%`
  - [`app.js:2177`](app.js#L2177) — di dalam fungsi `handleMcggNameInput()`
    `prevBox.innerHTML = '<img src="${formatDriveImageUrl(idCard)}" alt="ID Card" style="width:100%;heigh`
  - [`app.js:2872`](app.js#L2872) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:2899`](app.js#L2899) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3074`](app.js#L3074) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3096`](app.js#L3096) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3169`](app.js#L3169) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`functional_tests.js:94`](functional_tests.js#L94) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

<a id="switchtab"></a>
#### `switchTab(tabId)`

- **Definisi:** [`app.js:1890`](app.js#L1890)
- **Deskripsi:** Navigation Tabs
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:55`](index.html#L55) — Event `onclick`
    `<button class="nav-btn active" onclick="switchTab('daftar')">📝 Pendaftaran</button>`
  - [`index.html:56`](index.html#L56) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('peserta')">👥 Daftar Peserta & Verifikasi</button>`
  - [`index.html:57`](index.html#L57) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('rules')">📜 Peraturan (Rules)</button>`
  - [`index.html:58`](index.html#L58) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('bagan-mlbb')">⚔️ Bagan MLBB</button>`
  - [`index.html:59`](index.html#L59) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('points-mcgg')">♟️ Poin & Klasemen MCGG</button>`
- **Memanggil Fungsi Internal:** [`setMLBBViewMode()`](#setmlbbviewmode), [`setMCGGViewMode()`](#setmcggviewmode), [`renderRules()`](#renderrules)

<a id="escapehtml"></a>
#### `escapeHtml(str)`

- **Definisi:** [`app.js:1951`](app.js#L1951)
- **Deskripsi:** Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dalam HTML DOM.
- **Titik Pemanggilan (33 lokasi):**
  - [`app.js:1972`](app.js#L1972) — di dalam fungsi `updateRegistrationDatalists()`
    `mlbbDatalist.innerHTML = uniqueTeams.map(name => '<option value="${escapeHtml(name)}">').join('');`
  - [`app.js:1980`](app.js#L1980) — di dalam fungsi `updateRegistrationDatalists()`
    `mcggDatalist.innerHTML = uniquePlayers.map(name => '<option value="${escapeHtml(name)}">').join('');`
  - [`app.js:2004`](app.js#L2004) — di dalam fungsi `handleTeamNameInput()`
    `noticeEl.innerHTML = '🔄 <strong>Mode Pembaruan Data:</strong> Tim "<strong>${escapeHtml(existing.na`
  - [`app.js:2020`](app.js#L2020) — di dalam fungsi `handleTeamNameInput()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogo)}" alt="Logo ${escapeHtml(existing.nam`
  - [`app.js:2150`](app.js#L2150) — di dalam fungsi `handleMcggNameInput()`
    `noticeEl.innerHTML = '🔄 <strong>Mode Pembaruan Data:</strong> Pemain "<strong>${escapeHtml(existing`
  - [`app.js:4482`](app.js#L4482) — di dalam fungsi `renderGroupStageUI()`
    `<span>🛡️ ${escapeHtml(gName)}</span>`
  - [`app.js:4514`](app.js#L4514) — di dalam fungsi `renderGroupStageUI()`
    `<span>${escapeHtml(t.name)}</span>`
  - [`app.js:4552`](app.js#L4552) — di dalam fungsi `renderGroupStageUI()`
    `⚠️ TIE-BREAKER MATCH DIPERLUKAN (${escapeHtml(tb.group)})`
  - [`app.js:4555`](app.js#L4555) — di dalam fungsi `renderGroupStageUI()`
    `Peringkat 2 & 3 grup <strong>${escapeHtml(tb.group)}</strong> memiliki poin sama (<strong>${escapeHt`
  - [`app.js:4562`](app.js#L4562) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:4563`](app.js#L4563) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:4771`](app.js#L4771) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>🛡️</span> <span>Jadwal & Hasil Pertandingan: ${escapeHtml(gName)}</span>`
  - [`app.js:4802`](app.js#L4802) — di dalam fungsi `renderGroupFixturesUI()`
    `<span style="font-weight:600;">${escapeHtml(f.teamA)} ${f.winner === f.teamA ? '🏆' : ''}</span>`
  - [`app.js:4806`](app.js#L4806) — di dalam fungsi `renderGroupFixturesUI()`
    `<span style="font-weight:600;">${escapeHtml(f.teamB)} ${f.winner === f.teamB ? '🏆' : ''}</span>`
  - [`app.js:4811`](app.js#L4811) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>⭐ MVP: <strong style="color:#fff;">${escapeHtml(f.mvpPlayer)}</strong> ${f.mvpHero ? '<span st`
  - [`app.js:4812`](app.js#L4812) — di dalam fungsi `renderGroupFixturesUI()`
    `${f.mvpTeam ? '<span style="font-size:0.68rem; color:var(--yokke-cyan);">${escapeHtml(f.mvpTeam)}</s`
  - [`app.js:4942`](app.js#L4942) — di dalam fungsi `renderGroupPlayoffTree()`
    `⭐ MVP: ${escapeHtml(m.mvpPlayer)}${m.mvpHero ? ' (${escapeHtml(m.mvpHero)})' : ''}`
  - [`app.js:5776`](app.js#L5776) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; over`
  - [`app.js:5777`](app.js#L5777) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `🎮 ${escapeHtml(item.playerNick)}`
  - [`app.js:5779`](app.js#L5779) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text`
  - [`app.js:5780`](app.js#L5780) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `👤 ${escapeHtml(item.playerName)}`
  - [`app.js:6496`](app.js#L6496) — di dalam fungsi `renderLobbyRowsHtml()`
    `<span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? escapeHtm`
  - [`app.js:6499`](app.js#L6499) — di dalam fungsi `renderLobbyRowsHtml()`
    `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? '<span>👤 ${escapeHtml(p.name)}</spa`
  - [`app.js:6500`](app.js#L6500) — di dalam fungsi `renderLobbyRowsHtml()`
    `${p.gameId && p.gameId !== '-' ? '${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' `
  - [`app.js:7148`](app.js#L7148) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<span>🛡️</span> <span>Klasemen & Pertandingan: ${escapeHtml(gName)}</span>`
  - [`app.js:7164`](app.js#L7164) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">📊 Klasemen Sementara ${esc`
  - [`app.js:7191`](app.js#L7191) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<td style="font-weight:700;color:#fff;">${escapeHtml(t.name)}</td>`
  - [`app.js:7210`](app.js#L7210) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3`
  - [`app.js:7230`](app.js#L7230) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `${escapeHtml(f.teamA)} ${winner === f.teamA ? '🏆' : ''}`
  - [`app.js:7240`](app.js#L7240) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`app.js:7243`](app.js#L7243) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="promptGr`
  - [`app.js:7249`](app.js#L7249) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `${winner === f.teamB ? '🏆 ' : ''}${escapeHtml(f.teamB)}`
  - [`app.js:7254`](app.js#L7254) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<span>⭐ <strong>MVP Match:</strong> ${escapeHtml(f.mvpPlayer)} ${f.mvpHero ? '(${escapeHtml(f.mvpHer`

<a id="filterlist"></a>
#### `filterList(cat)`

- **Definisi:** [`app.js:2805`](app.js#L2805)
- **Deskripsi:** Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/MCGG), dan status verifikasi.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:333`](index.html#L333) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('ALL')">Semua</button>`
  - [`index.html:334`](index.html#L334) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('MLBB')">MLBB (<span id="countMLBB">0</span> Tim`
  - [`index.html:335`](index.html#L335) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('MCGG')">MCGG (<span id="countMCGG">0</span> Pem`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants)

<a id="changetournamentformat"></a>
#### `changeTournamentFormat()`

- **Definisi:** [`app.js:3284`](app.js#L3284)
- **Deskripsi:** Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP_2, GROUP_4, KNOCKOUT).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:428`](index.html#L428) — Event `onchange`
    `<select id="bracketFormat" onchange="changeTournamentFormat()" style="padding: 0.5rem 0.8rem; font-s`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat)

<a id="setdrawtargetandscroll"></a>
#### `setDrawTargetAndScroll(lobbyKey)`

- **Definisi:** [`app.js:6081`](app.js#L6081)
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
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:649`](app.js#L649) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`app.js:1914`](app.js#L1914) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:2020`](app.js#L2020) — di dalam fungsi `handleTeamNameInput()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogo)}" alt="Logo ${escapeHtml(existing.nam`
  - [`app.js:2047`](app.js#L2047) — di dalam fungsi `handleTeamNameInput()`
    `off1Prev.innerHTML = '<img src="${formatDriveImageUrl(off1Card)}" style="width:100%;height:100%;obje`
  - [`app.js:2076`](app.js#L2076) — di dalam fungsi `handleTeamNameInput()`
    `off2Prev.innerHTML = '<img src="${formatDriveImageUrl(off2Card)}" style="width:100%;height:100%;obje`
  - [`app.js:2110`](app.js#L2110) — di dalam fungsi `handleTeamNameInput()`
    `if (pPrev) pPrev.innerHTML = '<img src="${formatDriveImageUrl(pCard)}" style="width:100%;height:100%`
  - [`app.js:2177`](app.js#L2177) — di dalam fungsi `handleMcggNameInput()`
    `prevBox.innerHTML = '<img src="${formatDriveImageUrl(idCard)}" alt="ID Card" style="width:100%;heigh`
  - [`app.js:2872`](app.js#L2872) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:2899`](app.js#L2899) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3074`](app.js#L3074) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3096`](app.js#L3096) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3169`](app.js#L3169) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

---

### 📋 Regulasi Turnamen (Rules Editor)

<a id="renderrules"></a>
#### `renderRules()`

- **Definisi:** [`app.js:1321`](app.js#L1321)
- **Deskripsi:** Rules System
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:975`](app.js#L975) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRules();`
  - [`app.js:1352`](app.js#L1352) — di dalam fungsi `saveCustomRules()`
    `renderRules();`
  - [`app.js:1375`](app.js#L1375) — di dalam fungsi `resetRulesToDefault()`
    `renderRules();`
  - [`app.js:1902`](app.js#L1902) — di dalam fungsi `switchTab()`
    `renderRules();`
  - [`app.js:6844`](app.js#L6844) — cakupan global / event handler
    `renderRules();`

<a id="toggleeditrules"></a>
#### `toggleEditRules()`

- **Definisi:** [`app.js:1333`](app.js#L1333)
- **Deskripsi:** Membuka/menutup form editor peraturan turnamen khusus panitia.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:378`](index.html#L378) — Event `onclick`
    `<button class="btn btn-gold" id="btnToggleEditRules" style="font-size: 0.8rem; padding: 0.4rem 0.8re`
  - [`index.html:396`](index.html#L396) — Event `onclick`
    `<button class="btn btn-outline" onclick="toggleEditRules()">Batal</button>`
  - [`app.js:1353`](app.js#L1353) — di dalam fungsi `saveCustomRules()`
    `toggleEditRules();`

<a id="savecustomrules"></a>
#### `saveCustomRules()`

- **Definisi:** [`app.js:1339`](app.js#L1339)
- **Deskripsi:** Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Google Sheets.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:395`](index.html#L395) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveCustomRules()">💾 Simpan Peraturan</button>`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`toggleEditRules()`](#toggleeditrules)

<a id="resetrulestodefault"></a>
#### `resetRulesToDefault()`

- **Definisi:** [`app.js:1370`](app.js#L1370)
- **Deskripsi:** Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:379`](index.html#L379) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetRules" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules)

---

### 🛡️ Autentikasi & Hak Akses Panitia

<a id="openloginmodal"></a>
#### `openLoginModal()`

- **Definisi:** [`app.js:1556`](app.js#L1556)
- **Deskripsi:** Auth functions
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:38`](index.html#L38) — Event `onclick`
    `<button id="btnLoginPanitia" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8`

<a id="closeloginmodal"></a>
#### `closeLoginModal()`

- **Definisi:** [`app.js:1563`](app.js#L1563)
- **Deskripsi:** Menutup modal dialog login PIN panitia.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:750`](index.html#L750) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeLoginModal()">Batal</button>`
  - [`app.js:1573`](app.js#L1573) — di dalam fungsi `verifyAdminPin()`
    `closeLoginModal();`

<a id="verifyadminpin"></a>
#### `verifyAdminPin()`

- **Definisi:** [`app.js:1567`](app.js#L1567)
- **Deskripsi:** Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif penuh.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:751`](index.html#L751) — Event `onclick`
    `<button class="btn btn-primary" onclick="verifyAdminPin()">Masuk</button>`
- **Memanggil Fungsi Internal:** [`closeLoginModal()`](#closeloginmodal), [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="logoutadmin"></a>
#### `logoutAdmin()`

- **Definisi:** [`app.js:1583`](app.js#L1583)
- **Deskripsi:** Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (read-only).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:39`](index.html#L39) — Event `onclick`
    `<button id="btnLogoutPanitia" class="btn btn-outline" style="display: none; padding: 0.25rem 0.75rem`
- **Memanggil Fungsi Internal:** [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="updateauthui"></a>
#### `updateAuthUI()`

- **Definisi:** [`app.js:1722`](app.js#L1722)
- **Deskripsi:** Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock, dan form interaktif.
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:1019`](app.js#L1019) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateAuthUI();`
  - [`app.js:1307`](app.js#L1307) — di dalam fungsi `saveState()`
    `updateAuthUI();`
  - [`app.js:1574`](app.js#L1574) — di dalam fungsi `verifyAdminPin()`
    `updateAuthUI();`
  - [`app.js:1586`](app.js#L1586) — di dalam fungsi `logoutAdmin()`
    `updateAuthUI();`
  - [`app.js:1672`](app.js#L1672) — di dalam fungsi `toggleRegistrationStatus()`
    `updateAuthUI();`
  - [`app.js:1717`](app.js#L1717) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `updateAuthUI();`
  - [`app.js:3360`](app.js#L3360) — di dalam fungsi `toggleLockMLBBGroup()`
    `updateAuthUI();`
  - [`app.js:3441`](app.js#L3441) — di dalam fungsi `proceedToMLBBStage2()`
    `updateAuthUI();`
  - [`app.js:3454`](app.js#L3454) — di dalam fungsi `resetMLBBToStage1()`
    `updateAuthUI();`
  - [`app.js:3497`](app.js#L3497) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `updateAuthUI();`
  - [`app.js:3519`](app.js#L3519) — di dalam fungsi `toggleLockMCGGLobbies()`
    `updateAuthUI();`
  - [`app.js:6845`](app.js#L6845) — cakupan global / event handler
    `updateAuthUI();`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui)

---

### 🗄️ Google Sheets Schema & Master Data

<a id="gettargetspreadsheet"></a>
#### `getTargetSpreadsheet()`

- **Definisi:** [`google_apps_script.js:38`](google_apps_script.js#L38)
- **Deskripsi:** Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet berdasarkan TARGET_SPREADSHEET_ID untuk testing/lokal, atau fallback ke active spreadsheet jika container-bound. /
- **Titik Pemanggilan (5 lokasi):**
  - [`google_apps_script.js:663`](google_apps_script.js#L663) — di dalam fungsi `doGet()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1137`](google_apps_script.js#L1137) — di dalam fungsi `doPost()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1715`](google_apps_script.js#L1715) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `if (!ss) ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1975`](google_apps_script.js#L1975) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `var ss = getTargetSpreadsheet();`
  - [`functional_tests.js:459`](functional_tests.js#L459) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getTargetSpreadsheet('), 'Harus memiliki fungsi getTargetSpreadshe`

<a id="ensurerelationalsheetsexist"></a>
#### `ensureRelationalSheetsExist(ss)`

- **Definisi:** [`google_apps_script.js:313`](google_apps_script.js#L313)
- **Deskripsi:** Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Parent Tim) 2. 'MLBB - Peserta' (Child Roster Anggota) 3. 'Pendaftaran MCGG' (Pemain Solo) /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:664`](google_apps_script.js#L664) — di dalam fungsi `doGet()`
    `ensureRelationalSheetsExist(ss);`
  - [`google_apps_script.js:1138`](google_apps_script.js#L1138) — di dalam fungsi `doPost()`
    `var sheets = ensureRelationalSheetsExist(ss);`
  - [`functional_tests.js:460`](functional_tests.js#L460) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function ensureRelationalSheetsExist('), 'Harus memiliki fungsi ensureRelat`

<a id="getmlbbtimlisting"></a>
#### `getMlbbTimListing(ss)`

- **Definisi:** [`google_apps_script.js:361`](google_apps_script.js#L361)
- **Deskripsi:** Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' Aturan: - Deduplikasi berdasarkan 'Nama Tim' (case-insensitive & trimmed). - Prioritas: utamakan baris yang Status Verifikasi == 'VERIFIED'. Jika status sama, ambil baris paling bawah (terbaru). - Urutkan A-Z berdasarkan Nama Tim. - Simpan rowNumber asli dari Google Sheets untuk referensi update. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:674`](google_apps_script.js#L674) — di dalam fungsi `doGet()`
    `var mlbbTimList = getMlbbTimListing(ss);`
  - [`google_apps_script.js:1416`](google_apps_script.js#L1416) — di dalam fungsi `doPost()`
    `var timListing = getMlbbTimListing(ss);`
  - [`functional_tests.js:465`](functional_tests.js#L465) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMlbbTimListing('), 'Harus ada fungsi getMlbbTimListing');`

<a id="getmlbbpesertalisting"></a>
#### `getMlbbPesertaListing(ss)`

- **Definisi:** [`google_apps_script.js:459`](google_apps_script.js#L459)
- **Deskripsi:** Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Peserta' Kolom: Timestamp, Nama Tim, Role, Nama Lengkap, NIP Pegawai, Nickname Game (IGN), Game ID & Server, Status Pegawai, Link ID Card Aturan: - Deduplikasi berdasarkan NIP Pegawai (jika NIP kosong/-, gunakan fallback key Nama Tim + Role). - Nickname Game (IGN) diambil langsung utuh dari cell (jangan pernah di-split dengan koma!). - Simpan rowNumber asli masing-masing peserta. /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:675`](google_apps_script.js#L675) — di dalam fungsi `doGet()`
    `var mlbbPesertaList = getMlbbPesertaListing(ss);`
  - [`functional_tests.js:466`](functional_tests.js#L466) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMlbbPesertaListing('), 'Harus ada fungsi getMlbbPesertaListing'`

<a id="getmcgglisting"></a>
#### `getMcggListing(ss)`

- **Definisi:** [`google_apps_script.js:527`](google_apps_script.js#L527)
- **Deskripsi:** Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan: - Deduplikasi berdasarkan NIP Pegawai (prioritaskan VERIFIED, atau baris terbaru jika status sama). - Urutkan A-Z berdasarkan Nama Lengkap Pemain. - Simpan rowNumber asli. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:835`](google_apps_script.js#L835) — di dalam fungsi `doGet()`
    `var mcggList = getMcggListing(ss);`
  - [`google_apps_script.js:1599`](google_apps_script.js#L1599) — di dalam fungsi `doPost()`
    `var mcggListing = getMcggListing(ss);`
  - [`functional_tests.js:467`](functional_tests.js#L467) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMcggListing('), 'Harus ada fungsi getMcggListing');`

<a id="getorcreatesheet"></a>
#### `getOrCreateSheet(ss, sheetName)`

- **Definisi:** [`google_apps_script.js:1702`](google_apps_script.js#L1702)
- **Deskripsi:** Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncdedicatedtournamentsheets"></a>
#### `syncDedicatedTournamentSheets(ss, payload)`

- **Definisi:** [`google_apps_script.js:1714`](google_apps_script.js#L1714)
- **Deskripsi:** Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah Dipanggil otomatis saat action === 'SAVE_CONFIG' atau 'CREATE_TOURNAMENT_SHEETS' /
- **Titik Pemanggilan (7 lokasi):**
  - [`google_apps_script.js:1229`](google_apps_script.js#L1229) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1242`](google_apps_script.js#L1242) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1963`](google_apps_script.js#L1963) — di dalam fungsi `syncListBagan()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData, mcggLobbies: mcggData });`
  - [`google_apps_script.js:1967`](google_apps_script.js#L1967) — di dalam fungsi `syncListPoint()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData });`
  - [`google_apps_script.js:1971`](google_apps_script.js#L1971) — di dalam fungsi `syncListPointAndCommanderMCGG()`
    `return syncDedicatedTournamentSheets(ss, { mcggLobbies: mcggData });`
  - [`google_apps_script.js:1998`](google_apps_script.js#L1998) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `syncDedicatedTournamentSheets(ss, payload);`
  - [`functional_tests.js:783`](functional_tests.js#L783) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function syncDedicatedTournamentSheets('), 'Harus memiliki fungsi syncDedic`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`fmtRank()`](#fmtrank)

<a id="createorupdatealltournamentsheets"></a>
#### `createOrUpdateAllTournamentSheets(groupStageData, mcggLobbies)`

- **Definisi:** [`google_apps_script.js:1974`](google_apps_script.js#L1974)
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
  - [`google_apps_script.js:1180`](google_apps_script.js#L1180) — di dalam fungsi `doPost()`
    `safeSetSharing(file);`

<a id="getorcreateuploadfolder"></a>
#### `getOrCreateUploadFolder()`

- **Definisi:** [`google_apps_script.js:76`](google_apps_script.js#L76)
- **Deskripsi:** Mendapatkan atau membuat folder upload utama secara andal. Jika TARGET_FOLDER_ID tidak dapat diakses atau bukan milik akun ini, otomatis beralih membuat folder di My Drive (Root) milik akun panitia. /
- **Titik Pemanggilan (5 lokasi):**
  - [`google_apps_script.js:123`](google_apps_script.js#L123) — di dalam fungsi `testDriveAuth()`
    `var uploadFolder = getOrCreateUploadFolder();`
  - [`google_apps_script.js:151`](google_apps_script.js#L151) — di dalam fungsi `getOrCreateSubFolder()`
    `var target = parentFolder || getOrCreateUploadFolder();`
  - [`google_apps_script.js:197`](google_apps_script.js#L197) — di dalam fungsi `relinkExistingFailedIDCards()`
    `var mainFolder = getOrCreateUploadFolder();`
  - [`google_apps_script.js:671`](google_apps_script.js#L671) — di dalam fungsi `doGet()`
    `var mainFolder = getOrCreateUploadFolder();`
  - [`google_apps_script.js:1167`](google_apps_script.js#L1167) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1405`](google_apps_script.js#L1405) — di dalam fungsi `doPost()`
    `var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);`
  - [`google_apps_script.js:1585`](google_apps_script.js#L1585) — di dalam fungsi `doPost()`
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

- **Definisi:** [`google_apps_script.js:911`](google_apps_script.js#L911)
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:966`](google_apps_script.js#L966) — di dalam fungsi `doGet()`
    `r1: helperParseRank(mRow[6]),`
  - [`google_apps_script.js:968`](google_apps_script.js#L968) — di dalam fungsi `doGet()`
    `r2: helperParseRank(mRow[8]),`
  - [`google_apps_script.js:970`](google_apps_script.js#L970) — di dalam fungsi `doGet()`
    `r3: helperParseRank(mRow[10]),`

<a id="savebase64image"></a>
#### `saveBase64Image(base64Data, fileName, targetFolder)`

- **Definisi:** [`google_apps_script.js:1169`](google_apps_script.js#L1169)
- **Titik Pemanggilan (4 lokasi):**
  - [`google_apps_script.js:1410`](google_apps_script.js#L1410) — di dalam fungsi `doPost()`
    `logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);`
  - [`google_apps_script.js:1457`](google_apps_script.js#L1457) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1538`](google_apps_script.js#L1538) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1591`](google_apps_script.js#L1591) — di dalam fungsi `doPost()`
    `mcggIdCardUrl = saveBase64Image(mcggCard, "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", `

<a id="fmtrank"></a>
#### `fmtRank(r)`

- **Definisi:** [`google_apps_script.js:1893`](google_apps_script.js#L1893)
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:1934`](google_apps_script.js#L1934) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r1),`
  - [`google_apps_script.js:1936`](google_apps_script.js#L1936) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r2),`
  - [`google_apps_script.js:1938`](google_apps_script.js#L1938) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r3),`

<a id="synclistbagan"></a>
#### `syncListBagan(ss, groupData, mcggData)`

- **Definisi:** [`google_apps_script.js:1962`](google_apps_script.js#L1962)
- **Deskripsi:** Wrapper kompatibilitas untuk pemicu manual / lama /
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:114`](functional_tests.js#L114) — pada skenario pengujian
    `assert(gasCode.includes('function syncListBagan('), 'Harus memiliki fungsi syncListBagan');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpoint"></a>
#### `syncListPoint(ss, groupData)`

- **Definisi:** [`google_apps_script.js:1966`](google_apps_script.js#L1966)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:115`](functional_tests.js#L115) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPoint('), 'Harus memiliki fungsi syncListPoint');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpointandcommandermcgg"></a>
#### `syncListPointAndCommanderMCGG(ss, mcggData)`

- **Definisi:** [`google_apps_script.js:1970`](google_apps_script.js#L1970)
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
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMlbbPesertaListing()`](#getmlbbpesertalisting), [`getMcggListing()`](#getmcgglisting), [`helperParseRank()`](#helperparserank)

<a id="dopost"></a>
#### `doPost(e)`

- **Definisi:** [`google_apps_script.js:1117`](google_apps_script.js#L1117)
- **Deskripsi:** 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:532`](functional_tests.js#L532) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`getOrCreateSubFolder()`](#getorcreatesubfolder), [`saveBase64Image()`](#savebase64image), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMcggListing()`](#getmcgglisting)

---

