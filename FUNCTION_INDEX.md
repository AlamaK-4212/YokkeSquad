# 📖 INDEKS FUNGSI DAN PETA PEMANGGILAN KODE (FUNCTION MAP)
> **Turnamen E-Sports Yokke Squad 2026**  
> *Dokumen ini dibuat otomatis oleh script `scripts/generate_function_index.js`. Pembaruan dilakukan secara otomatis setiap kali ada perubahan pada source code.*

---

## 📊 Ringkasan Eksekutif
- **Total Fungsi Terdaftar:** 152 fungsi (124 di `app.js`, 20 di `google_apps_script.js`)
- **Total Titik Pemanggilan (Call Sites):** 588 titik pemanggilan teridentifikasi
- **Terakhir Diperbarui:** 14/10/2026, 20.57.03 WIB
- **Cara Memperbarui Otomatis:**
  - Sekali jalan: `node scripts/generate_function_index.js`
  - Mode Pantau (Realtime Auto-Update saat simpan kode): `node scripts/generate_function_index.js --watch`
  - Bersamaan saat test: `node tests/functional_tests.js`

---

## 📑 Daftar Isi Modul
1. [👥 Manajemen Peserta & Roster (10 fungsi)](#manajemen-peserta-roster)
2. [☁️ Sinkronisasi Google Sheets & State Storage (6 fungsi)](#sinkronisasi-google-sheets-state-storage)
3. [♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) (32 fungsi)](#turnamen-mcgg-klasemen-undian-commander-penalti)
4. [🆔 Modal Dialog & Bukti ID Card (17 fungsi)](#modal-dialog-bukti-id-card)
5. [🔧 Helper & UI Utility (8 fungsi)](#helper-ui-utility)
6. [📦 Modul Aplikasi Umum (28 fungsi)](#modul-aplikasi-umum)
7. [📋 Regulasi Turnamen (Rules Editor) (4 fungsi)](#regulasi-turnamen-rules-editor)
8. [🛡️ Autentikasi & Hak Akses Panitia (5 fungsi)](#autentikasi-hak-akses-panitia)
9. [⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) (22 fungsi)](#turnamen-mlbb-bagan-grup-playoff-engine)
10. [🗄️ Google Sheets Schema & Master Data (8 fungsi)](#google-sheets-schema-master-data)
11. [⚙️ Backend Apps Script Utility (10 fungsi)](#backend-apps-script-utility)
12. [🌐 Web API & Endpoint Webhook (2 fungsi)](#web-api-endpoint-webhook)

---

## ⚡ Tabel Referensi Cepat (Pencarian Cepat / Ctrl+F)

| No | Nama Fungsi | File & Baris | Kategori | Ringkasan Kegunaan | Jumlah Pemanggilan |
|:--:|:---|:---|:---|:---|:--:|
| 1 | [**`getInitialParticipants()`**](#getinitialparticipants) | [app.js:12](app.js#L12) | 👥 Manajemen Peserta & Roster | Inisialisasi daftar peserta dari localStorage dengan validasi versi data (D... | 1x |
| 2 | [**`saveStageStateLocal()`**](#savestagestatelocal) | [app.js:81](app.js#L81) | ☁️ Sinkronisasi Google Sheets & State Storage | Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM,... | 10x |
| 3 | [**`getCommanderFormattedName()`**](#getcommanderformattedname) | [app.js:137](app.js#L137) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika t... | 5x |
| 4 | [**`renderCommanderCirclesHtml()`**](#rendercommandercircleshtml) | [app.js:148](app.js#L148) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen | 3x |
| 5 | [**`renderCommanderCardVisualHtml()`**](#rendercommandercardvisualhtml) | [app.js:177](app.js#L177) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian | 1x |
| 6 | [**`compressImage()`**](#compressimage) | [app.js:338](app.js#L338) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compressor: compresses smartphone photos to clean ~80-120... | 5x |
| 7 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [app.js:372](app.js#L372) | 🔧 Helper & UI Utility | Helper to format Google Drive image URLs into viewable thumbnail image URLs | 13x |
| 8 | [**`getIdCardMap()`**](#getidcardmap) | [app.js:387](app.js#L387) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama | 2x |
| 9 | [**`saveIdCardToMap()`**](#saveidcardtomap) | [app.js:426](app.js#L426) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasar... | 5x |
| 10 | [**`findIdCardByEmpIdOrName()`**](#findidcardbyempidorname) | [app.js:444](app.js#L444) | 🆔 Modal Dialog & Bukti ID Card | Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama p... | 12x |
| 11 | [**`getLogoMap()`**](#getlogomap) | [app.js:462](app.js#L462) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan Logo sesuai Nama Tim (MLBB) | 2x |
| 12 | [**`saveLogoToMap()`**](#savelogotomap) | [app.js:476](app.js#L476) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasa... | 3x |
| 13 | [**`findLogoByTeamName()`**](#findlogobyteamname) | [app.js:485](app.js#L485) | 🆔 Modal Dialog & Bukti ID Card | Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peser... | 8x |
| 14 | [**`autoLinkParticipantsAssets()`**](#autolinkparticipantsassets) | [app.js:493](app.js#L493) | 👥 Manajemen Peserta & Roster | Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada | 5x |
| 15 | [**`fetchParticipantsFromGoogleSheet()`**](#fetchparticipantsfromgooglesheet) | [app.js:528](app.js#L528) | 👥 Manajemen Peserta & Roster | Fetch registered participants from Google Sheets via doGet Webhook Google S... | 3x |
| 16 | [**`getItemKey()`**](#getitemkey) | [app.js:546](app.js#L546) | 📦 Modul Aplikasi Umum | Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name | 2x |
| 17 | [**`cleanOrphanedTournamentData()`**](#cleanorphanedtournamentdata) | [app.js:770](app.js#L770) | 📦 Modul Aplikasi Umum | Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup... | 2x |
| 18 | [**`resetCacheAndFollowGSheet()`**](#resetcacheandfollowgsheet) | [app.js:856](app.js#L856) | ☁️ Sinkronisasi Google Sheets & State Storage | Reset cache lokal dan ikuti 100% data aktif dari Google Sheets | 1x |
| 19 | [**`saveAllChangesToGoogleSheet()`**](#saveallchangestogooglesheet) | [app.js:889](app.js#L889) | ☁️ Sinkronisasi Google Sheets & State Storage | SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS | 1x |
| 20 | [**`syncTournamentSheetsToGSheet()`**](#synctournamentsheetstogsheet) | [app.js:972](app.js#L972) | ☁️ Sinkronisasi Google Sheets & State Storage | SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET | 0x |
| 21 | [**`saveState()`**](#savestate) | [app.js:1011](app.js#L1011) | 📦 Modul Aplikasi Umum | Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi ... | 29x |
| 22 | [**`updateCounts()`**](#updatecounts) | [app.js:1022](app.js#L1022) | 📦 Modul Aplikasi Umum | Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status veri... | 6x |
| 23 | [**`renderRules()`**](#renderrules) | [app.js:1032](app.js#L1032) | 📋 Regulasi Turnamen (Rules Editor) | Rules System | 5x |
| 24 | [**`toggleEditRules()`**](#toggleeditrules) | [app.js:1044](app.js#L1044) | 📋 Regulasi Turnamen (Rules Editor) | Membuka/menutup form editor peraturan turnamen khusus panitia. | 3x |
| 25 | [**`saveCustomRules()`**](#savecustomrules) | [app.js:1050](app.js#L1050) | 📋 Regulasi Turnamen (Rules Editor) | Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Goo... | 1x |
| 26 | [**`resetRulesToDefault()`**](#resetrulestodefault) | [app.js:1081](app.js#L1081) | 📋 Regulasi Turnamen (Rules Editor) | Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026... | 1x |
| 27 | [**`handleLogoPreview()`**](#handlelogopreview) | [app.js:1091](app.js#L1091) | 🆔 Modal Dialog & Bukti ID Card | Handle Logo Upload and Live Preview | 1x |
| 28 | [**`handleSingleIdCardPreview()`**](#handlesingleidcardpreview) | [app.js:1105](app.js#L1105) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Officials and MCGG | 3x |
| 29 | [**`handlePlayerIdCardPreview()`**](#handleplayeridcardpreview) | [app.js:1126](app.js#L1126) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Each of the 8 Players | 1x |
| 30 | [**`toggleOfficial2Form()`**](#toggleofficial2form) | [app.js:1141](app.js#L1141) | 📦 Modul Aplikasi Umum | Toggle Official 2 Form | 5x |
| 31 | [**`renderPlayersFormInputs()`**](#renderplayersforminputs) | [app.js:1148](app.js#L1148) | 📦 Modul Aplikasi Umum | Generate the 8 players form fields dynamically (Included In-Game Nickname a... | 2x |
| 32 | [**`toggleCategoryForm()`**](#togglecategoryform) | [app.js:1207](app.js#L1207) | 📦 Modul Aplikasi Umum | Switch form between MLBB and MCGG cleanly | 3x |
| 33 | [**`openLoginModal()`**](#openloginmodal) | [app.js:1267](app.js#L1267) | 🛡️ Autentikasi & Hak Akses Panitia | Auth functions | 1x |
| 34 | [**`closeLoginModal()`**](#closeloginmodal) | [app.js:1274](app.js#L1274) | 🛡️ Autentikasi & Hak Akses Panitia | Menutup modal dialog login PIN panitia. | 2x |
| 35 | [**`verifyAdminPin()`**](#verifyadminpin) | [app.js:1278](app.js#L1278) | 🛡️ Autentikasi & Hak Akses Panitia | Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif p... | 1x |
| 36 | [**`logoutAdmin()`**](#logoutadmin) | [app.js:1294](app.js#L1294) | 🛡️ Autentikasi & Hak Akses Panitia | Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (r... | 1x |
| 37 | [**`renderRegistrationUI()`**](#renderregistrationui) | [app.js:1303](app.js#L1303) | 📦 Modul Aplikasi Umum | Merender status badge pendaftaran, banner peringatan pendaftaran ditutup, s... | 4x |
| 38 | [**`toggleRegistrationStatus()`**](#toggleregistrationstatus) | [app.js:1369](app.js#L1369) | 👥 Manajemen Peserta & Roster | Mengubah status pendaftaran turnamen (Buka / Tutup) khusus panitia serta me... | 5x |
| 39 | [**`resetMCGGPointsAndDraw()`**](#resetmcggpointsanddraw) | [app.js:1390](app.js#L1390) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mereset seluruh poin ronde 1-3, sanksi, reset status lock TM lobi, dan meng... | 2x |
| 40 | [**`updateAuthUI()`**](#updateauthui) | [app.js:1433](app.js#L1433) | 🛡️ Autentikasi & Hak Akses Panitia | Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock,... | 12x |
| 41 | [**`switchTab()`**](#switchtab) | [app.js:1601](app.js#L1601) | 🔧 Helper & UI Utility | Navigation Tabs | 5x |
| 42 | [**`openIdCardLightbox()`**](#openidcardlightbox) | [app.js:1618](app.js#L1618) | 🆔 Modal Dialog & Bukti ID Card | Lightbox for Viewing Full ID Card | 2x |
| 43 | [**`closeIdCardLightbox()`**](#closeidcardlightbox) | [app.js:1657](app.js#L1657) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal pop-up lightbox preview ID Card pegawai. | 1x |
| 44 | [**`escapeHtml()`**](#escapehtml) | [app.js:1662](app.js#L1662) | 🔧 Helper & UI Utility | Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dal... | 24x |
| 45 | [**`updateRegistrationDatalists()`**](#updateregistrationdatalists) | [app.js:1674](app.js#L1674) | 📦 Modul Aplikasi Umum | Sinkronkan Datalist Nama Tim / Pemain untuk Fitur Update Cepat di Formulir ... | 3x |
| 46 | [**`handleTeamNameInput()`**](#handleteamnameinput) | [app.js:1696](app.js#L1696) | 📦 Modul Aplikasi Umum | Handler saat Peserta Mengetik / Memilih Nama Tim MLBB di Form Pendaftaran | 2x |
| 47 | [**`handleMcggNameInput()`**](#handlemcggnameinput) | [app.js:1842](app.js#L1842) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Handler saat Peserta Mengetik / Memilih Nama Pemain Solo MCGG di Form Penda... | 2x |
| 48 | [**`handleRegister()`**](#handleregister) | [app.js:1900](app.js#L1900) | 👥 Manajemen Peserta & Roster | Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Ca... | 1x |
| 49 | [**`setParticipantStatus()`**](#setparticipantstatus) | [app.js:2428](app.js#L2428) | 👥 Manajemen Peserta & Roster | Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets | 2x |
| 50 | [**`deleteParticipant()`**](#deleteparticipant) | [app.js:2469](app.js#L2469) | 👥 Manajemen Peserta & Roster | Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat k... | 1x |
| 51 | [**`filterList()`**](#filterlist) | [app.js:2516](app.js#L2516) | 🔧 Helper & UI Utility | Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/... | 3x |
| 52 | [**`openEditParticipantModal()`**](#openeditparticipantmodal) | [app.js:2524](app.js#L2524) | 🆔 Modal Dialog & Bukti ID Card | ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION | 1x |
| 53 | [**`closeEditParticipantModal()`**](#closeeditparticipantmodal) | [app.js:2612](app.js#L2612) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog edit peserta. | 3x |
| 54 | [**`handleEditLogoUpload()`**](#handleeditlogoupload) | [app.js:2617](app.js#L2617) | 🆔 Modal Dialog & Bukti ID Card | Handle logo upload in Admin Edit modal | 1x |
| 55 | [**`handleEditRosterIdCardUpload()`**](#handleeditrosteridcardupload) | [app.js:2633](app.js#L2633) | 🆔 Modal Dialog & Bukti ID Card | Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedi... | 1x |
| 56 | [**`saveParticipantEdit()`**](#saveparticipantedit) | [app.js:2644](app.js#L2644) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk saveParticipantEdit | 1x |
| 57 | [**`viewRosterDetail()`**](#viewrosterdetail) | [app.js:2764](app.js#L2764) | 👥 Manajemen Peserta & Roster | Modal Detail Roster Lengkap & ID Card Per-Pemain | 1x |
| 58 | [**`closeDetailModal()`**](#closedetailmodal) | [app.js:2823](app.js#L2823) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog rincian roster tim dan galeri ID Card. | 1x |
| 59 | [**`renderParticipants()`**](#renderparticipants) | [app.js:2828](app.js#L2828) | 👥 Manajemen Peserta & Roster | Render Participant Table (Featuring Nickname, ID Card count per-player, and... | 10x |
| 60 | [**`getVerifiedMLBBTeams()`**](#getverifiedmlbbteams) | [app.js:2944](app.js#L2944) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE | 4x |
| 61 | [**`getActiveMLBBFormat()`**](#getactivemlbbformat) | [app.js:2952](app.js#L2952) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N... | 2x |
| 62 | [**`changeTournamentFormat()`**](#changetournamentformat) | [app.js:2965](app.js#L2965) | 🔧 Helper & UI Utility | Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP... | 1x |
| 63 | [**`renderCurrentMLBBFormat()`**](#rendercurrentmlbbformat) | [app.js:2981](app.js#L2981) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderCurrentMLBBFormat | 17x |
| 64 | [**`shuffleAndGenerateTournament()`**](#shuffleandgeneratetournament) | [app.js:3007](app.js#L3007) | 📦 Modul Aplikasi Umum | Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum di... | 1x |
| 65 | [**`toggleLockMLBBGroup()`**](#togglelockmlbbgroup) | [app.js:3026](app.js#L3026) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE) | 2x |
| 66 | [**`isAllMLBBGroupMatchesFinished()`**](#isallmlbbgroupmatchesfinished) | [app.js:3046](app.js#L3046) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan m... | 2x |
| 67 | [**`evaluateMLBBTieBreaker()`**](#evaluatemlbbtiebreaker) | [app.js:3057](app.js#L3057) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosa... | 2x |
| 68 | [**`resolveMLBBTieBreaker()`**](#resolvemlbbtiebreaker) | [app.js:3082](app.js#L3082) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan... | 3x |
| 69 | [**`proceedToMLBBStage2()`**](#proceedtomlbbstage2) | [app.js:3101](app.js#L3101) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Ba... | 4x |
| 70 | [**`resetMLBBToStage1()`**](#resetmlbbtostage1) | [app.js:3128](app.js#L3128) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor ji... | 2x |
| 71 | [**`resetTotalMLBBGroupAndBracket()`**](#resettotalmlbbgroupandbracket) | [app.js:3140](app.js#L3140) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mereset total pembagian grup, jadwal, skor match, dan bagan playoff MLBB ke... | 2x |
| 72 | [**`toggleLockMCGGLobbies()`**](#togglelockmcgglobbies) | [app.js:3185](app.js#L3185) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM... | 2x |
| 73 | [**`validateMCGGDuplicateCommander()`**](#validatemcggduplicatecommander) | [app.js:3207](app.js#L3207) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2) | 3x |
| 74 | [**`saveTournamentStateOnly()`**](#savetournamentstateonly) | [app.js:3230](app.js#L3230) | ☁️ Sinkronisasi Google Sheets & State Storage | 4. SIMPAN CEPAT KHUSUS STATE BAGAN & POIN (1 REQUEST RINGAN) | 11x |
| 75 | [**`generateBracket()`**](#generatebracket) | [app.js:3281](app.js#L3281) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- KNOCKOUT BRACKET --- | 3x |
| 76 | [**`pickWinner()`**](#pickwinner) | [app.js:3334](app.js#L3334) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk pickWinner | 2x |
| 77 | [**`renderBracket()`**](#renderbracket) | [app.js:3354](app.js#L3354) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderBracket | 4x |
| 78 | [**`generateGroupStage()`**](#generategroupstage) | [app.js:3417](app.js#L3417) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- DINAMIS GROUP STAGE & PLAYOFF LOGIC --- | 2x |
| 79 | [**`updateGroupRecord()`**](#updategrouprecord) | [app.js:3449](app.js#L3449) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk updateGroupRecord | 2x |
| 80 | [**`initGroupPlayoff()`**](#initgroupplayoff) | [app.js:3462](app.js#L3462) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seed... | 7x |
| 81 | [**`pickGroupPlayoffWinner()`**](#pickgroupplayoffwinner) | [app.js:3524](app.js#L3524) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya k... | 2x |
| 82 | [**`promptPlayoffMVP()`**](#promptplayoffmvp) | [app.js:3545](app.js#L3545) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menampilkan dialog interaktif untuk memilih MVP pertandingan playoff MLBB. | 2x |
| 83 | [**`renderGroupStageUI()`**](#rendergroupstageui) | [app.js:3584](app.js#L3584) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupStageUI | 8x |
| 84 | [**`getGroupFixtures()`**](#getgroupfixtures) | [app.js:3725](app.js#L3725) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- BAGAN PERTANDINGAN FASE GRUP (ROUND-ROBIN BO3) --- | 3x |
| 85 | [**`setGroupMatchScore()`**](#setgroupmatchscore) | [app.js:3751](app.js#L3751) | 📦 Modul Aplikasi Umum | Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara ... | 5x |
| 86 | [**`setGroupMatchMVP()`**](#setgroupmatchmvp) | [app.js:3779](app.js#L3779) | 📦 Modul Aplikasi Umum | Mencatat pemain dan tim MVP pada pertandingan fase grup MLBB. | 2x |
| 87 | [**`promptGroupMatchMVP()`**](#promptgroupmatchmvp) | [app.js:3793](app.js#L3793) | 📦 Modul Aplikasi Umum | Menampilkan dialog interaktif untuk memilih MVP pertandingan grup MLBB. | 2x |
| 88 | [**`resetGroupMatchScore()`**](#resetgroupmatchscore) | [app.js:3825](app.js#L3825) | 📦 Modul Aplikasi Umum | Mereset skor pertandingan grup MLBB ke status belum bertanding. | 1x |
| 89 | [**`recalculateGroupStandingsFromFixtures()`**](#recalculategroupstandingsfromfixtures) | [app.js:3836](app.js#L3836) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan selu... | 2x |
| 90 | [**`renderGroupFixturesUI()`**](#rendergroupfixturesui) | [app.js:3862](app.js#L3862) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupFixturesUI | 3x |
| 91 | [**`renderGroupPlayoffTree()`**](#rendergroupplayofftree) | [app.js:3943](app.js#L3943) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau statu... | 4x |
| 92 | [**`changeMCGGLobby()`**](#changemcgglobby) | [app.js:4034](app.js#L4034) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MCGG MULTI-LOBBY STANDINGS | 0x |
| 93 | [**`getCommanderById()`**](#getcommanderbyid) | [app.js:4040](app.js#L4040) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mencari objek data commander dari master list berdasarkan ID, nama hero, at... | 1x |
| 94 | [**`updateCommanderPoolFromSetup()`**](#updatecommanderpoolfromsetup) | [app.js:4053](app.js#L4053) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk updateCommanderPoolFromSetup | 1x |
| 95 | [**`getVerifiedMCGGPlayers()`**](#getverifiedmcggplayers) | [app.js:4112](app.js#L4112) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getVerifiedMCGGPlayers | 2x |
| 96 | [**`syncMCGGPlayers()`**](#syncmcggplayers) | [app.js:4120](app.js#L4120) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGPlayers | 9x |
| 97 | [**`findPrevious()`**](#findprevious) | [app.js:4132](app.js#L4132) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 98 | [**`mapPlayerObj()`**](#mapplayerobj) | [app.js:4144](app.js#L4144) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 0x |
| 99 | [**`shuffleMCGGPlayers()`**](#shufflemcggplayers) | [app.js:4188](app.js#L4188) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGGPlayers | 2x |
| 100 | [**`isMCGGLobbyPointsFull()`**](#ismcgglobbypointsfull) | [app.js:4205](app.js#L4205) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGLobbyPointsFull | 4x |
| 101 | [**`isMCGGQualificationFull()`**](#ismcggqualificationfull) | [app.js:4211](app.js#L4211) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3... | 10x |
| 102 | [**`syncMCGGGrandFinal()`**](#syncmcgggrandfinal) | [app.js:4221](app.js#L4221) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final se... | 6x |
| 103 | [**`sortFn()`**](#sortfn) | [app.js:4222](app.js#L4222) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk sortFn | 0x |
| 104 | [**`findPrevInArr()`**](#findprevinarr) | [app.js:4290](app.js#L4290) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevInArr | 2x |
| 105 | [**`updateMCGGRank()`**](#updatemcggrank) | [app.js:4327](app.js#L4327) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin... | 1x |
| 106 | [**`updateMCGGCommander()`**](#updatemcggcommander) | [app.js:4365](app.js#L4365) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui pilihan commander pemain dan memicu validasi duplikasi commande... | 1x |
| 107 | [**`updateMCGGPenalty()`**](#updatemcggpenalty) | [app.js:4400](app.js#L4400) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumul... | 1x |
| 108 | [**`renderLobbyCommanderDrawPanelHtml()`**](#renderlobbycommanderdrawpanelhtml) | [app.js:4439](app.js#L4439) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI) | 3x |
| 109 | [**`drawMatchCommanders()`**](#drawmatchcommanders) | [app.js:4586](app.js#L4586) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengacak dan membagikan Little Commander untuk peserta di lobi aktif (khusu... | 6x |
| 110 | [**`switchLobbyDrawView()`**](#switchlobbydrawview) | [app.js:4653](app.js#L4653) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengganti tampilan kartu undian commander pada lobi MCGG antara Match 1 dan... | 5x |
| 111 | [**`resetLobbyDraw()`**](#resetlobbydraw) | [app.js:4659](app.js#L4659) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mereset hasil undian Little Commander pada lobi MCGG tertentu dan menyinkro... | 2x |
| 112 | [**`copyCommanderDrawText()`**](#copycommanderdrawtext) | [app.js:4680](app.js#L4680) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk... | 2x |
| 113 | [**`showMatch3DraftInfo()`**](#showmatch3draftinfo) | [app.js:4714](app.js#L4714) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk showMatch3DraftInfo | 1x |
| 114 | [**`changeCommanderDrawTarget()`**](#changecommanderdrawtarget) | [app.js:4725](app.js#L4725) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk changeCommanderDrawTarget | 1x |
| 115 | [**`setDrawTargetAndScroll()`**](#setdrawtargetandscroll) | [app.js:4732](app.js#L4732) | 🔧 Helper & UI Utility | Fungsi operasional untuk setDrawTargetAndScroll | 0x |
| 116 | [**`scrollToMCGGLobby()`**](#scrolltomcgglobby) | [app.js:4737](app.js#L4737) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk scrollToMCGGLobby | 3x |
| 117 | [**`renderMCGGLobbyAnchorBar()`**](#rendermcgglobbyanchorbar) | [app.js:4744](app.js#L4744) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbyAnchorBar | 2x |
| 118 | [**`renderMCGGLobbySelectOptions()`**](#rendermcgglobbyselectoptions) | [app.js:4770](app.js#L4770) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbySelectOptions | 2x |
| 119 | [**`renderMCGGTable()`**](#rendermcggtable) | [app.js:4803](app.js#L4803) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang... | 19x |
| 120 | [**`renderLobbyRowsHtml()`**](#renderlobbyrowshtml) | [app.js:4910](app.js#L4910) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderLobbyRowsHtml | 2x |
| 121 | [**`buildRoundCell()`**](#buildroundcell) | [app.js:5026](app.js#L5026) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk buildRoundCell | 3x |
| 122 | [**`buildPenaltySelect()`**](#buildpenaltyselect) | [app.js:5103](app.js#L5103) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk buildPenaltySelect | 1x |
| 123 | [**`loadSampleData()`**](#loadsampledata) | [app.js:5127](app.js#L5127) | 📦 Modul Aplikasi Umum | Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation... | 1x |
| 124 | [**`clearAllData()`**](#clearalldata) | [app.js:5331](app.js#L5331) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearAllData | 1x |
| 125 | [**`getTargetSpreadsheet()`**](#gettargetspreadsheet) | [google_apps_script.js:38](google_apps_script.js#L38) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet b... | 5x |
| 126 | [**`safeSetSharing()`**](#safesetsharing) | [google_apps_script.js:58](google_apps_script.js#L58) | ⚙️ Backend Apps Script Utility | Mengatur permission sharing secara aman. Menghindari error 'Access denied: ... | 6x |
| 127 | [**`getOrCreateUploadFolder()`**](#getorcreateuploadfolder) | [google_apps_script.js:76](google_apps_script.js#L76) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat folder upload utama secara andal. Jika TARGET_FOLD... | 5x |
| 128 | [**`testDriveAuth()`**](#testdriveauth) | [google_apps_script.js:115](google_apps_script.js#L115) | ⚙️ Backend Apps Script Utility | FUNGSI UJI OTORISASI GOOGLE DRIVE & SPREADSHEET PENTING: Pilih fungsi 'test... | 0x |
| 129 | [**`getOrCreateSubFolder()`**](#getorcreatesubfolder) | [google_apps_script.js:150](google_apps_script.js#L150) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat subfolder tim/kategori secara andal. / | 2x |
| 130 | [**`relinkExistingFailedIDCards()`**](#relinkexistingfailedidcards) | [google_apps_script.js:194](google_apps_script.js#L194) | ⚙️ Backend Apps Script Utility | FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ... | 0x |
| 131 | [**`ensureRelationalSheetsExist()`**](#ensurerelationalsheetsexist) | [google_apps_script.js:313](google_apps_script.js#L313) | 🗄️ Google Sheets Schema & Master Data | Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Paren... | 3x |
| 132 | [**`getMlbbTimListing()`**](#getmlbbtimlisting) | [google_apps_script.js:361](google_apps_script.js#L361) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' A... | 3x |
| 133 | [**`getMlbbPesertaListing()`**](#getmlbbpesertalisting) | [google_apps_script.js:452](google_apps_script.js#L452) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Pes... | 2x |
| 134 | [**`getMcggListing()`**](#getmcgglisting) | [google_apps_script.js:520](google_apps_script.js#L520) | 🗄️ Google Sheets Schema & Master Data | Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan... | 3x |
| 135 | [**`doGet()`**](#doget) | [google_apps_script.js:653](google_apps_script.js#L653) | 🌐 Web API & Endpoint Webhook | 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE | 0x |
| 136 | [**`doPost()`**](#dopost) | [google_apps_script.js:960](google_apps_script.js#L960) | 🌐 Web API & Endpoint Webhook | 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE | 1x |
| 137 | [**`saveBase64Image()`**](#savebase64image) | [google_apps_script.js:1012](google_apps_script.js#L1012) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk saveBase64Image | 4x |
| 138 | [**`getOrCreateSheet()`**](#getorcreatesheet) | [google_apps_script.js:1545](google_apps_script.js#L1545) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. / | 0x |
| 139 | [**`syncDedicatedTournamentSheets()`**](#syncdedicatedtournamentsheets) | [google_apps_script.js:1557](google_apps_script.js#L1557) | 🗄️ Google Sheets Schema & Master Data | Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah ... | 7x |
| 140 | [**`fmtRank()`**](#fmtrank) | [google_apps_script.js:1720](google_apps_script.js#L1720) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk fmtRank | 3x |
| 141 | [**`syncListBagan()`**](#synclistbagan) | [google_apps_script.js:1780](google_apps_script.js#L1780) | ⚙️ Backend Apps Script Utility | Wrapper kompatibilitas untuk pemicu manual / lama / | 1x |
| 142 | [**`syncListPoint()`**](#synclistpoint) | [google_apps_script.js:1784](google_apps_script.js#L1784) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPoint | 1x |
| 143 | [**`syncListPointAndCommanderMCGG()`**](#synclistpointandcommandermcgg) | [google_apps_script.js:1788](google_apps_script.js#L1788) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPointAndCommanderMCGG | 1x |
| 144 | [**`createOrUpdateAllTournamentSheets()`**](#createorupdatealltournamentsheets) | [google_apps_script.js:1792](google_apps_script.js#L1792) | 🗄️ Google Sheets Schema & Master Data | Fungsi operasional untuk createOrUpdateAllTournamentSheets | 1x |
| 145 | [**`runTest()`**](#runtest) | [functional_tests.js:24](functional_tests.js#L24) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runTest | 64x |
| 146 | [**`runAsyncTest()`**](#runasynctest) | [functional_tests.js:35](functional_tests.js#L35) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk runAsyncTest | 4x |
| 147 | [**`sanitizeNip()`**](#sanitizenip) | [functional_tests.js:83](functional_tests.js#L83) | 🔧 Helper & UI Utility | Fungsi operasional untuk sanitizeNip | 3x |
| 148 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [functional_tests.js:92](functional_tests.js#L92) | 🔧 Helper & UI Utility | Fungsi operasional untuk formatDriveImageUrl | 13x |
| 149 | [**`validateRegistration()`**](#validateregistration) | [functional_tests.js:179](functional_tests.js#L179) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk validateRegistration | 7x |
| 150 | [**`runLiveIntegrationTests()`**](#runliveintegrationtests) | [functional_tests.js:361](functional_tests.js#L361) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runLiveIntegrationTests | 1x |
| 151 | [**`attemptShuffleMLBB()`**](#attemptshufflemlbb) | [functional_tests.js:909](functional_tests.js#L909) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Saat pendaftaran dibuka: tombol acak harus ditolak | 2x |
| 152 | [**`attemptShuffleMCGG()`**](#attemptshufflemcgg) | [functional_tests.js:913](functional_tests.js#L913) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk attemptShuffleMCGG | 2x |

---

## 🔍 Rincian Lengkap Fungsi dan Lokasi Pemanggilan

### 👥 Manajemen Peserta & Roster

<a id="getinitialparticipants"></a>
#### `getInitialParticipants()`

- **Definisi:** [`app.js:12`](app.js#L12)
- **Deskripsi:** Inisialisasi daftar peserta dari localStorage dengan validasi versi data (DATA_VERSION), fallback ke array default.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:32`](app.js#L32) — cakupan global / event handler
    `let participants = getInitialParticipants();`

<a id="autolinkparticipantsassets"></a>
#### `autoLinkParticipantsAssets()`

- **Definisi:** [`app.js:493`](app.js#L493)
- **Deskripsi:** Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:741`](app.js#L741) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `autoLinkParticipantsAssets();`
  - [`app.js:2704`](app.js#L2704) — di dalam fungsi `saveParticipantEdit()`
    `autoLinkParticipantsAssets();`
  - [`app.js:2829`](app.js#L2829) — di dalam fungsi `renderParticipants()`
    `autoLinkParticipantsAssets();`
  - [`app.js:5325`](app.js#L5325) — di dalam fungsi `loadSampleData()`
    `autoLinkParticipantsAssets();`
  - [`app.js:5350`](app.js#L5350) — cakupan global / event handler
    `autoLinkParticipantsAssets();`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap)

<a id="fetchparticipantsfromgooglesheet"></a>
#### `fetchParticipantsFromGoogleSheet(isSilent = false, isPure = false)`

- **Definisi:** [`app.js:528`](app.js#L528)
- **Deskripsi:** Fetch registered participants from Google Sheets via doGet Webhook Google Sheets menjadi Single Source of Truth: data yang dihapus di sheet tidak akan dimunculkan kembali.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:310`](index.html#L310) — Event `onclick`
    `<button class="btn btn-primary" id="btnSyncGSheet" style="padding: 0.45rem 0.9rem; font-size: 0.82re`
  - [`app.js:874`](app.js#L874) — di dalam fungsi `resetCacheAndFollowGSheet()`
    `await fetchParticipantsFromGoogleSheet(false, true);`
  - [`app.js:5352`](app.js#L5352) — cakupan global / event handler
    `fetchParticipantsFromGoogleSheet(true);`
- **Memanggil Fungsi Internal:** [`getItemKey()`](#getitemkey), [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap), [`renderRules()`](#renderrules), [`renderMCGGTable()`](#rendermcggtable), [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`updateCommanderPoolFromSetup()`](#updatecommanderpoolfromsetup), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="toggleregistrationstatus"></a>
#### `toggleRegistrationStatus()`

- **Definisi:** [`app.js:1369`](app.js#L1369)
- **Deskripsi:** Mengubah status pendaftaran turnamen (Buka / Tutup) khusus panitia serta mengaktifkan/menonaktifkan undian tim.
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:20`](index.html#L20) — Event `onclick`
    `<button id="btnToggleReg" class="btn btn-outline" style="display: none; padding: 0.25rem 0.65rem; fo`
  - [`index.html:296`](index.html#L296) — Event `onclick`
    `<button id="btnToggleRegPeserta" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0`
  - [`index.html:416`](index.html#L416) — Event `onclick`
    `<button id="btnToggleRegMLBB" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
  - [`index.html:486`](index.html#L486) — Event `onclick`
    `<button id="btnToggleRegMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; padd`
  - [`functional_tests.js:817`](functional_tests.js#L817) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleRegistrationStatus()'), 'Harus memiliki toggleRegistrationSt`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handleregister"></a>
#### `handleRegister(e)`

- **Definisi:** [`app.js:1900`](app.js#L1900)
- **Deskripsi:** Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Card, and Automatic Update Threat
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:66`](index.html#L66) — Event `onsubmit`
    `<form id="regForm" onsubmit="handleRegister(event)">`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveState()`](#savestate), [`renderPlayersFormInputs()`](#renderplayersforminputs), [`toggleCategoryForm()`](#togglecategoryform), [`toggleOfficial2Form()`](#toggleofficial2form), [`updateRegistrationDatalists()`](#updateregistrationdatalists)

<a id="setparticipantstatus"></a>
#### `setParticipantStatus(id, newStatus)`

- **Definisi:** [`app.js:2428`](app.js#L2428)
- **Deskripsi:** Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:2902`](app.js#L2902) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-success-sm" title="Verifikasi / Setujui" onclick="setParticipantStatus(${p.id`
  - [`app.js:2903`](app.js#L2903) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-danger-sm" title="Tolak / Gagal" onclick="setParticipantStatus(${p.id}, 'REJE`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="deleteparticipant"></a>
#### `deleteParticipant(id)`

- **Definisi:** [`app.js:2469`](app.js#L2469)
- **Deskripsi:** Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat ke blacklist agar tidak ter-sync ulang.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2904`](app.js#L2904) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" onclick="delet`
- **Memanggil Fungsi Internal:** [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="saveparticipantedit"></a>
#### `saveParticipantEdit()`

- **Definisi:** [`app.js:2644`](app.js#L2644)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:584`](index.html#L584) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveParticipantEdit()">💾 Simpan Perubahan Data</button>`
- **Memanggil Fungsi Internal:** [`saveLogoToMap()`](#savelogotomap), [`saveIdCardToMap()`](#saveidcardtomap), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`closeEditParticipantModal()`](#closeeditparticipantmodal)

<a id="viewrosterdetail"></a>
#### `viewRosterDetail(id)`

- **Definisi:** [`app.js:2764`](app.js#L2764)
- **Deskripsi:** Modal Detail Roster Lengkap & ID Card Per-Pemain
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2931`](app.js#L2931) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;" onclick="viewRos`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox)

<a id="renderparticipants"></a>
#### `renderParticipants()`

- **Definisi:** [`app.js:2828`](app.js#L2828)
- **Deskripsi:** Render Participant Table (Featuring Nickname, ID Card count per-player, and Admin Edit Action)
- **Titik Pemanggilan (10 lokasi):**
  - [`app.js:744`](app.js#L744) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderParticipants();`
  - [`app.js:1017`](app.js#L1017) — di dalam fungsi `saveState()`
    `renderParticipants();`
  - [`app.js:1286`](app.js#L1286) — di dalam fungsi `verifyAdminPin()`
    `renderParticipants();`
  - [`app.js:1298`](app.js#L1298) — di dalam fungsi `logoutAdmin()`
    `renderParticipants();`
  - [`app.js:2434`](app.js#L2434) — di dalam fungsi `setParticipantStatus()`
    `renderParticipants();`
  - [`app.js:2491`](app.js#L2491) — di dalam fungsi `deleteParticipant()`
    `renderParticipants();`
  - [`app.js:2518`](app.js#L2518) — di dalam fungsi `filterList()`
    `renderParticipants();`
  - [`app.js:2706`](app.js#L2706) — di dalam fungsi `saveParticipantEdit()`
    `renderParticipants();`
  - [`app.js:5340`](app.js#L5340) — di dalam fungsi `clearAllData()`
    `renderParticipants();`
  - [`app.js:5357`](app.js#L5357) — cakupan global / event handler
    `renderParticipants();`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`updateRegistrationDatalists()`](#updateregistrationdatalists), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`openEditParticipantModal()`](#openeditparticipantmodal), [`setParticipantStatus()`](#setparticipantstatus), [`deleteParticipant()`](#deleteparticipant), [`viewRosterDetail()`](#viewrosterdetail)

---

### ☁️ Sinkronisasi Google Sheets & State Storage

<a id="savestagestatelocal"></a>
#### `saveStageStateLocal()`

- **Definisi:** [`app.js:81`](app.js#L81)
- **Deskripsi:** Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM, data tie-breaker) ke localStorage.
- **Titik Pemanggilan (10 lokasi):**
  - [`app.js:1422`](app.js#L1422) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveStageStateLocal();`
  - [`app.js:3040`](app.js#L3040) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveStageStateLocal();`
  - [`app.js:3073`](app.js#L3073) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3078`](app.js#L3078) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3093`](app.js#L3093) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3120`](app.js#L3120) — di dalam fungsi `proceedToMLBBStage2()`
    `saveStageStateLocal();`
  - [`app.js:3133`](app.js#L3133) — di dalam fungsi `resetMLBBToStage1()`
    `saveStageStateLocal();`
  - [`app.js:3173`](app.js#L3173) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `saveStageStateLocal();`
  - [`app.js:3199`](app.js#L3199) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveStageStateLocal();`
  - [`app.js:3232`](app.js#L3232) — di dalam fungsi `saveTournamentStateOnly()`
    `saveStageStateLocal();`

<a id="resetcacheandfollowgsheet"></a>
#### `resetCacheAndFollowGSheet()`

- **Definisi:** [`app.js:856`](app.js#L856)
- **Deskripsi:** Reset cache lokal dan ikuti 100% data aktif dari Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:313`](index.html#L313) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetCacheFollowGSheet" style="padding: 0.45rem 0.9rem; font-`
- **Memanggil Fungsi Internal:** [`fetchParticipantsFromGoogleSheet()`](#fetchparticipantsfromgooglesheet)

<a id="saveallchangestogooglesheet"></a>
#### `saveAllChangesToGoogleSheet()`

- **Definisi:** [`app.js:889`](app.js#L889)
- **Deskripsi:** SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:316`](index.html#L316) — Event `onclick`
    `<button class="btn btn-primary" id="btnSaveAllChanges" style="padding: 0.45rem 0.9rem; font-size: 0.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate)

<a id="synctournamentsheetstogsheet"></a>
#### `syncTournamentSheetsToGSheet()`

- **Definisi:** [`app.js:972`](app.js#L972)
- **Deskripsi:** SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate)

<a id="savetournamentstateonly"></a>
#### `saveTournamentStateOnly(isSilent = false)`

- **Definisi:** [`app.js:3230`](app.js#L3230)
- **Deskripsi:** 4. SIMPAN CEPAT KHUSUS STATE BAGAN & POIN (1 REQUEST RINGAN)
- **Titik Pemanggilan (11 lokasi):**
  - [`index.html:422`](index.html#L422) — Event `onclick`
    `<button id="btnSaveBracketGSheet" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`index.html:491`](index.html#L491) — Event `onclick`
    `<button id="btnSaveMCGGPointsGSheet" class="btn btn-primary" style="display: none; font-size: 0.85re`
  - [`app.js:1386`](app.js#L1386) — di dalam fungsi `toggleRegistrationStatus()`
    `saveTournamentStateOnly(true);`
  - [`app.js:1429`](app.js#L1429) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3043`](app.js#L3043) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3097`](app.js#L3097) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3124`](app.js#L3124) — di dalam fungsi `proceedToMLBBStage2()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3137`](app.js#L3137) — di dalam fungsi `resetMLBBToStage1()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3181`](app.js#L3181) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3201`](app.js#L3201) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4677`](app.js#L4677) — di dalam fungsi `resetLobbyDraw()`
    `saveTournamentStateOnly(true);`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`saveStageStateLocal()`](#savestagestatelocal)

<a id="runasynctest"></a>
#### `runAsyncTest(testName, fn)`

- **Definisi:** [`functional_tests.js:35`](functional_tests.js#L35)
- **Titik Pemanggilan (4 lokasi):**
  - [`functional_tests.js:362`](functional_tests.js#L362) — di dalam fungsi `runLiveIntegrationTests()`
    `await runAsyncTest('3.1 Live GET: Sinkronisasi data peserta & status online', async () => {`
  - [`functional_tests.js:373`](functional_tests.js#L373) — di dalam fungsi `runLiveIntegrationTests()`
    `await runAsyncTest('3.2 Live POST: Server menolak pendaftaran MLBB tanpa logo', async () => {`
  - [`functional_tests.js:395`](functional_tests.js#L395) — di dalam fungsi `runLiveIntegrationTests()`
    `await runAsyncTest('3.3 Live POST: Server menolak Official merangkap Pemain', async () => {`
  - [`functional_tests.js:420`](functional_tests.js#L420) — di dalam fungsi `runLiveIntegrationTests()`
    `await runAsyncTest('3.4 Live POST: Server menolak solo MCGG tanpa ID card', async () => {`

---

### ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti)

<a id="getcommanderformattedname"></a>
#### `getCommanderFormattedName(cmd)`

- **Definisi:** [`app.js:137`](app.js#L137)
- **Deskripsi:** Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika tidak ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4699`](app.js#L4699) — di dalam fungsi `copyCommanderDrawText()`
    `const cmdName = getCommanderFormattedName(item.commander);`
  - [`app.js:5036`](app.js#L5036) — di dalam fungsi `buildRoundCell()`
    `const formattedName = getCommanderFormattedName(selectedCmd);`
  - [`app.js:5062`](app.js#L5062) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`app.js:5071`](app.js#L5071) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`functional_tests.js:698`](functional_tests.js#L698) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getCommanderFormattedName('), 'Harus ada fungsi getCommanderFormat`

<a id="rendercommandercircleshtml"></a>
#### `renderCommanderCirclesHtml(cmd, size)`

- **Definisi:** [`app.js:148`](app.js#L148)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5037`](app.js#L5037) — di dalam fungsi `buildRoundCell()`
    `const circlesHtml = renderCommanderCirclesHtml(selectedCmd, 24);`
  - [`app.js:5085`](app.js#L5085) — di dalam fungsi `buildRoundCell()`
    `? renderCommanderCirclesHtml(selectedCmd, 22)`
  - [`functional_tests.js:699`](functional_tests.js#L699) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderCommanderCirclesHtml('), 'Harus ada fungsi renderCommanderCi`

<a id="rendercommandercardvisualhtml"></a>
#### `renderCommanderCardVisualHtml(cmd)`

- **Definisi:** [`app.js:177`](app.js#L177)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4546`](app.js#L4546) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `${renderCommanderCardVisualHtml(item.commander)}`

<a id="resetmcggpointsanddraw"></a>
#### `resetMCGGPointsAndDraw()`

- **Definisi:** [`app.js:1390`](app.js#L1390)
- **Deskripsi:** Mereset seluruh poin ronde 1-3, sanksi, reset status lock TM lobi, dan mengosongkan hasil undian commander seluruh lobi MCGG.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:490`](index.html#L490) — Event `onclick`
    `<button id="btnResetMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; border-c`
  - [`functional_tests.js:829`](functional_tests.js#L829) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMCGGPointsAndDraw()'), 'Harus memiliki resetMCGGPointsAndDraw`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handlemcggnameinput"></a>
#### `handleMcggNameInput(val)`

- **Definisi:** [`app.js:1842`](app.js#L1842)
- **Deskripsi:** Handler saat Peserta Mengetik / Memilih Nama Pemain Solo MCGG di Form Pendaftaran
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:232`](index.html#L232) — Event `oninput`
    `<input type="text" id="mcgg_name" list="registeredMcggDatalist" oninput="handleMcggNameInput(this.va`
  - [`functional_tests.js:171`](functional_tests.js#L171) — pada skenario pengujian
    `assert(appCode.includes('function handleMcggNameInput('), 'Harus ada handler handleMcggNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="togglelockmcgglobbies"></a>
#### `toggleLockMCGGLobbies()`

- **Definisi:** [`app.js:3185`](app.js#L3185)
- **Deskripsi:** Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM).
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:489`](index.html#L489) — Event `onclick`
    `<button id="btnLockMCGGLobbies" class="btn btn-outline" style="display: none; font-size: 0.85rem;" o`
  - [`functional_tests.js:949`](functional_tests.js#L949) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('toggleLockMCGGLobbies() {') && appCode.includes('if (!isRegistrationClosed)`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="validatemcggduplicatecommander"></a>
#### `validateMCGGDuplicateCommander(lobbyKey, playerIdx)`

- **Definisi:** [`app.js:3207`](app.js#L3207)
- **Deskripsi:** 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4393`](app.js#L4393) — di dalam fungsi `updateMCGGCommander()`
    `validateMCGGDuplicateCommander(targetLobby, idx);`
  - [`app.js:4641`](app.js#L4641) — di dalam fungsi `drawMatchCommanders()`
    `validateMCGGDuplicateCommander(lobbyKey, i);`
  - [`functional_tests.js:757`](functional_tests.js#L757) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function validateMCGGDuplicateCommander('), 'Harus ada fungsi validateMCGGD`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="changemcgglobby"></a>
#### `changeMCGGLobby()`

- **Definisi:** [`app.js:4034`](app.js#L4034)
- **Deskripsi:** MCGG MULTI-LOBBY STANDINGS
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderbyid"></a>
#### `getCommanderById(id)`

- **Definisi:** [`app.js:4040`](app.js#L4040)
- **Deskripsi:** Mencari objek data commander dari master list berdasarkan ID, nama hero, atau alter name.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5031`](app.js#L5031) — di dalam fungsi `buildRoundCell()`
    `const selectedCmd = getCommanderById(selectedCmdId);`

<a id="updatecommanderpoolfromsetup"></a>
#### `updateCommanderPoolFromSetup(setupList)`

- **Definisi:** [`app.js:4053`](app.js#L4053)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:737`](app.js#L737) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCommanderPoolFromSetup(data.mcggCommanderSetup);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getverifiedmcggplayers"></a>
#### `getVerifiedMCGGPlayers()`

- **Definisi:** [`app.js:4112`](app.js#L4112)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4121`](app.js#L4121) — di dalam fungsi `syncMCGGPlayers()`
    `let verified = getVerifiedMCGGPlayers();`
  - [`functional_tests.js:603`](functional_tests.js#L603) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMCGGPlayers()'), 'Harus ada getVerifiedMCGGPlayers()');`

<a id="syncmcggplayers"></a>
#### `syncMCGGPlayers(doShuffle = false)`

- **Definisi:** [`app.js:4120`](app.js#L4120)
- **Titik Pemanggilan (9 lokasi):**
  - [`index.html:487`](index.html#L487) — Event `onclick`
    `<button id="adminSyncMCGG" class="btn btn-primary" style="display: none; font-size: 0.85rem;" onclic`
  - [`app.js:746`](app.js#L746) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `syncMCGGPlayers();`
  - [`app.js:2436`](app.js#L2436) — di dalam fungsi `setParticipantStatus()`
    `syncMCGGPlayers();`
  - [`app.js:2493`](app.js#L2493) — di dalam fungsi `deleteParticipant()`
    `syncMCGGPlayers();`
  - [`app.js:2708`](app.js#L2708) — di dalam fungsi `saveParticipantEdit()`
    `syncMCGGPlayers();`
  - [`app.js:4201`](app.js#L4201) — di dalam fungsi `shuffleMCGGPlayers()`
    `syncMCGGPlayers(true);`
  - [`app.js:5328`](app.js#L5328) — di dalam fungsi `loadSampleData()`
    `syncMCGGPlayers();`
  - [`app.js:5343`](app.js#L5343) — di dalam fungsi `clearAllData()`
    `syncMCGGPlayers();`
  - [`app.js:5359`](app.js#L5359) — cakupan global / event handler
    `syncMCGGPlayers();`
- **Memanggil Fungsi Internal:** [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`findPrevious()`](#findprevious), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`renderMCGGTable()`](#rendermcggtable)

<a id="shufflemcggplayers"></a>
#### `shuffleMCGGPlayers()`

- **Definisi:** [`app.js:4188`](app.js#L4188)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:488`](index.html#L488) — Event `onclick`
    `<button id="adminShuffleMCGG" class="btn btn-gold" style="display: none; font-size: 0.85rem;" onclic`
  - [`functional_tests.js:643`](functional_tests.js#L643) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function shuffleMCGGPlayers()'), 'Harus ada fungsi shuffleMCGGPlayers()');`
- **Memanggil Fungsi Internal:** [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="ismcgglobbypointsfull"></a>
#### `isMCGGLobbyPointsFull(lobbyKey)`

- **Definisi:** [`app.js:4205`](app.js#L4205)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4216`](app.js#L4216) — di dalam fungsi `isMCGGQualificationFull()`
    `const fullA = isMCGGLobbyPointsFull('LOBBY_A');`
  - [`app.js:4217`](app.js#L4217) — di dalam fungsi `isMCGGQualificationFull()`
    `const fullB = (listB.length === 0) || isMCGGLobbyPointsFull('LOBBY_B');`
  - [`app.js:4979`](app.js#L4979) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isLobbyFull = isMCGGLobbyPointsFull('LOBBY_A');`
  - [`app.js:4992`](app.js#L4992) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isThisLobbyFull = isMCGGLobbyPointsFull(lobbyKey);`

<a id="ismcggqualificationfull"></a>
#### `isMCGGQualificationFull()`

- **Definisi:** [`app.js:4211`](app.js#L4211)
- **Deskripsi:** Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3 ronde).
- **Titik Pemanggilan (10 lokasi):**
  - [`app.js:4250`](app.js#L4250) — di dalam fungsi `syncMCGGGrandFinal()`
    `const isFull = isMCGGQualificationFull();`
  - [`app.js:4343`](app.js#L4343) — di dalam fungsi `updateMCGGRank()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:4381`](app.js#L4381) — di dalam fungsi `updateMCGGCommander()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:4414`](app.js#L4414) — di dalam fungsi `updateMCGGPenalty()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:4598`](app.js#L4598) — di dalam fungsi `drawMatchCommanders()`
    `if (lobbyKey === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:4749`](app.js#L4749) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:4771`](app.js#L4771) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:4810`](app.js#L4810) — di dalam fungsi `renderMCGGTable()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:4912`](app.js#L4912) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`functional_tests.js:617`](functional_tests.js#L617) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isMCGGQualificationFull()'), 'app.js harus memeriksa apakah poin kualifikas`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="syncmcgggrandfinal"></a>
#### `syncMCGGGrandFinal()`

- **Definisi:** [`app.js:4221`](app.js#L4221)
- **Deskripsi:** Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final setelah ronde kualifikasi penuh.
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:1424`](app.js#L1424) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `syncMCGGGrandFinal();`
  - [`app.js:4173`](app.js#L4173) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:4180`](app.js#L4180) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:4358`](app.js#L4358) — di dalam fungsi `updateMCGGRank()`
    `syncMCGGGrandFinal();`
  - [`app.js:4429`](app.js#L4429) — di dalam fungsi `updateMCGGPenalty()`
    `syncMCGGGrandFinal();`
  - [`app.js:4829`](app.js#L4829) — di dalam fungsi `renderMCGGTable()`
    `syncMCGGGrandFinal();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`findPrevInArr()`](#findprevinarr)

<a id="updatemcggrank"></a>
#### `updateMCGGRank(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:4327`](app.js#L4327)
- **Deskripsi:** Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin otomatis (+4 s/d -4).
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5096`](app.js#L5096) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGRank('${lobbyKey}', ${originalIdx}, '${roundKey}', this.value)" style="p`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggcommander"></a>
#### `updateMCGGCommander(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:4365`](app.js#L4365)
- **Deskripsi:** Memperbarui pilihan commander pemain dan memicu validasi duplikasi commander ronde 2.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5092`](app.js#L5092) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGCommander('${lobbyKey}', ${originalIdx}, '${cmdKey}', this.value)" style`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggpenalty"></a>
#### `updateMCGGPenalty(arg1, arg2, arg3)`

- **Definisi:** [`app.js:4400`](app.js#L4400)
- **Deskripsi:** Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumulasi poin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5116`](app.js#L5116) — di dalam fungsi `buildPenaltySelect()`
    `<select onchange="updateMCGGPenalty('${lobbyKey}', ${originalIdx}, this.value)" style="padding: 0.25`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="renderlobbycommanderdrawpanelhtml"></a>
#### `renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)`

- **Definisi:** [`app.js:4439`](app.js#L4439)
- **Deskripsi:** MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4882`](app.js#L4882) — di dalam fungsi `renderMCGGTable()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}`
  - [`functional_tests.js:790`](functional_tests.js#L790) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderLobbyCommanderDrawPanelHtml('), 'Harus memiliki generator pa`
  - [`functional_tests.js:794`](functional_tests.js#L794) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}'), 'Panel `
- **Memanggil Fungsi Internal:** [`drawMatchCommanders()`](#drawmatchcommanders), [`showMatch3DraftInfo()`](#showmatch3draftinfo), [`switchLobbyDrawView()`](#switchlobbydrawview), [`copyCommanderDrawText()`](#copycommanderdrawtext), [`resetLobbyDraw()`](#resetlobbydraw), [`renderCommanderCardVisualHtml()`](#rendercommandercardvisualhtml), [`escapeHtml()`](#escapehtml)

<a id="drawmatchcommanders"></a>
#### `drawMatchCommanders(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:4586`](app.js#L4586)
- **Deskripsi:** Mengacak dan membagikan Little Commander untuk peserta di lobi aktif (khusus panitia).
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:4471`](app.js#L4471) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-primary" style="padding:0.35rem 0.7rem; font-size:0.78rem; ${drawDisStyle}" o`
  - [`app.js:4474`](app.js#L4474) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-gold" style="padding:0.35rem 0.7rem; font-size:0.78rem; ${drawDisStyle}" oncl`
  - [`app.js:4876`](app.js#L4876) — di dalam fungsi `renderMCGGTable()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.3rem 0.65rem; ${(!isRegistration`
  - [`functional_tests.js:733`](functional_tests.js#L733) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function drawMatchCommanders('), 'drawMatchCommanders harus tersedia');`
  - [`functional_tests.js:791`](functional_tests.js#L791) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('drawMatchCommanders(matchNum, targetLobbyKey)'), 'drawMatchCommanders harus`
  - [`functional_tests.js:950`](functional_tests.js#L950) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('drawMatchCommanders(') && appCode.includes('if (!isRegistrationClosed)'), '`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="switchlobbydrawview"></a>
#### `switchLobbyDrawView(lobbyKey, matchNum)`

- **Definisi:** [`app.js:4653`](app.js#L4653)
- **Deskripsi:** Mengganti tampilan kartu undian commander pada lobi MCGG antara Match 1 dan Match 2.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4483`](app.js#L4483) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:4488`](app.js#L4488) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:4508`](app.js#L4508) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:4513`](app.js#L4513) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`functional_tests.js:792`](functional_tests.js#L792) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function switchLobbyDrawView('), 'Harus memiliki fungsi switch view match 1`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="resetlobbydraw"></a>
#### `resetLobbyDraw(lobbyKey)`

- **Definisi:** [`app.js:4659`](app.js#L4659)
- **Deskripsi:** Mereset hasil undian Little Commander pada lobi MCGG tertentu dan menyinkronkannya ke Google Sheets.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4495`](app.js#L4495) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem; font-size:0.75rem; color:var(--yokke`
  - [`functional_tests.js:793`](functional_tests.js#L793) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetLobbyDraw('), 'Harus memiliki fungsi reset undian per-lobi re`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="copycommanderdrawtext"></a>
#### `copyCommanderDrawText(lobbyKey)`

- **Definisi:** [`app.js:4680`](app.js#L4680)
- **Deskripsi:** Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk dibagikan ke WhatsApp grup.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4492`](app.js#L4492) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCom`
  - [`app.js:4517`](app.js#L4517) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCom`
- **Memanggil Fungsi Internal:** [`getCommanderFormattedName()`](#getcommanderformattedname)

<a id="changecommanderdrawtarget"></a>
#### `changeCommanderDrawTarget(val)`

- **Definisi:** [`app.js:4725`](app.js#L4725)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4733`](app.js#L4733) — di dalam fungsi `setDrawTargetAndScroll()`
    `changeCommanderDrawTarget(lobbyKey);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="scrolltomcgglobby"></a>
#### `scrollToMCGGLobby(lobbyKey)`

- **Definisi:** [`app.js:4737`](app.js#L4737)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4734`](app.js#L4734) — di dalam fungsi `setDrawTargetAndScroll()`
    `scrollToMCGGLobby(lobbyKey);`
  - [`app.js:4764`](app.js#L4764) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`functional_tests.js:691`](functional_tests.js#L691) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function scrollToMCGGLobby('), 'app.js harus menyediakan fungsi scrollToMCG`

<a id="rendermcgglobbyanchorbar"></a>
#### `renderMCGGLobbyAnchorBar()`

- **Definisi:** [`app.js:4744`](app.js#L4744)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4800`](app.js#L4800) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `renderMCGGLobbyAnchorBar();`
  - [`functional_tests.js:689`](functional_tests.js#L689) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderMCGGLobbyAnchorBar('), 'app.js harus memiliki generator rend`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="rendermcgglobbyselectoptions"></a>
#### `renderMCGGLobbySelectOptions()`

- **Definisi:** [`app.js:4770`](app.js#L4770)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4184`](app.js#L4184) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:4807`](app.js#L4807) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGLobbySelectOptions();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar)

<a id="rendermcggtable"></a>
#### `renderMCGGTable()`

- **Definisi:** [`app.js:4803`](app.js#L4803)
- **Deskripsi:** Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang sedang aktif.
- **Titik Pemanggilan (19 lokasi):**
  - [`app.js:725`](app.js#L725) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderMCGGTable();`
  - [`app.js:1288`](app.js#L1288) — di dalam fungsi `verifyAdminPin()`
    `renderMCGGTable();`
  - [`app.js:1300`](app.js#L1300) — di dalam fungsi `logoutAdmin()`
    `renderMCGGTable();`
  - [`app.js:1385`](app.js#L1385) — di dalam fungsi `toggleRegistrationStatus()`
    `renderMCGGTable();`
  - [`app.js:1427`](app.js#L1427) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `renderMCGGTable();`
  - [`app.js:1611`](app.js#L1611) — di dalam fungsi `switchTab()`
    `renderMCGGTable();`
  - [`app.js:3223`](app.js#L3223) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `renderMCGGTable();`
  - [`app.js:4037`](app.js#L4037) — di dalam fungsi `changeMCGGLobby()`
    `renderMCGGTable();`
  - [`app.js:4108`](app.js#L4108) — di dalam fungsi `updateCommanderPoolFromSetup()`
    `renderMCGGTable();`
  - [`app.js:4185`](app.js#L4185) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:4362`](app.js#L4362) — di dalam fungsi `updateMCGGRank()`
    `renderMCGGTable();`
  - [`app.js:4397`](app.js#L4397) — di dalam fungsi `updateMCGGCommander()`
    `renderMCGGTable();`
  - [`app.js:4433`](app.js#L4433) — di dalam fungsi `updateMCGGPenalty()`
    `renderMCGGTable();`
  - [`app.js:4650`](app.js#L4650) — di dalam fungsi `drawMatchCommanders()`
    `renderMCGGTable();`
  - [`app.js:4656`](app.js#L4656) — di dalam fungsi `switchLobbyDrawView()`
    `renderMCGGTable();`
  - [`app.js:4676`](app.js#L4676) — di dalam fungsi `resetLobbyDraw()`
    `renderMCGGTable();`
  - [`app.js:4729`](app.js#L4729) — di dalam fungsi `changeCommanderDrawTarget()`
    `renderMCGGTable();`
  - [`app.js:5342`](app.js#L5342) — di dalam fungsi `clearAllData()`
    `renderMCGGTable();`
  - [`functional_tests.js:1013`](functional_tests.js#L1013) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(toggleBody.includes('renderMCGGTable()'), 'toggleRegistrationStatus harus memanggil renderMCG`
- **Memanggil Fungsi Internal:** [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`drawMatchCommanders()`](#drawmatchcommanders), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml)

<a id="renderlobbyrowshtml"></a>
#### `renderLobbyRowsHtml(list, lobbyKey, isSingleLobby)`

- **Definisi:** [`app.js:4910`](app.js#L4910)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4815`](app.js#L4815) — di dalam fungsi `renderMCGGTable()`
    `legacyTbody.innerHTML = renderLobbyRowsHtml(singleList, currentMCGGLobby, isSingleLobby);`
  - [`app.js:4862`](app.js#L4862) — di dalam fungsi `renderMCGGTable()`
    `const rowsHtml = renderLobbyRowsHtml(currentList, lobbyKey, isSingleLobby);`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull), [`escapeHtml()`](#escapehtml), [`buildRoundCell()`](#buildroundcell), [`buildPenaltySelect()`](#buildpenaltyselect)

<a id="buildpenaltyselect"></a>
#### `buildPenaltySelect(player, targetLobby)`

- **Definisi:** [`app.js:5103`](app.js#L5103)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5018`](app.js#L5018) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td style="text-align: center;">${buildPenaltySelect(p, lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`updateMCGGPenalty()`](#updatemcggpenalty)

<a id="attemptshufflemcgg"></a>
#### `attemptShuffleMCGG()`

- **Definisi:** [`functional_tests.js:913`](functional_tests.js#L913)
- **Titik Pemanggilan (2 lokasi):**
  - [`functional_tests.js:919`](functional_tests.js#L919) — di dalam fungsi `runLiveIntegrationTests()`
    `assert.strictEqual(attemptShuffleMCGG(), 'BLOCKED_REG_OPEN', 'Acak MCGG harus diblokir saat pendafta`
  - [`functional_tests.js:924`](functional_tests.js#L924) — di dalam fungsi `runLiveIntegrationTests()`
    `assert.strictEqual(attemptShuffleMCGG(), 'SHUFFLE_SUCCESS', 'Acak MCGG harus aktif setelah pendaftar`

---

### 🆔 Modal Dialog & Bukti ID Card

<a id="compressimage"></a>
#### `compressImage(file, maxWidth = 800, maxHeight = 800, quality = 0.8)`

- **Definisi:** [`app.js:338`](app.js#L338)
- **Deskripsi:** Client-side image compressor: compresses smartphone photos to clean ~80-120KB JPEG
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1096`](app.js#L1096) — di dalam fungsi `handleLogoPreview()`
    `uploadedLogoBase64 = await compressImage(file, 250, 250, 0.85);`
  - [`app.js:1110`](app.js#L1110) — di dalam fungsi `handleSingleIdCardPreview()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`
  - [`app.js:1131`](app.js#L1131) — di dalam fungsi `handlePlayerIdCardPreview()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`
  - [`app.js:2621`](app.js#L2621) — di dalam fungsi `handleEditLogoUpload()`
    `const compressed = await compressImage(file, 400, 400, 0.85);`
  - [`app.js:2638`](app.js#L2638) — di dalam fungsi `handleEditRosterIdCardUpload()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`

<a id="getidcardmap"></a>
#### `getIdCardMap()`

- **Definisi:** [`app.js:387`](app.js#L387)
- **Deskripsi:** Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:428`](app.js#L428) — di dalam fungsi `saveIdCardToMap()`
    `let map = getIdCardMap();`
  - [`app.js:445`](app.js#L445) — di dalam fungsi `findIdCardByEmpIdOrName()`
    `const map = getIdCardMap();`

<a id="saveidcardtomap"></a>
#### `saveIdCardToMap(empId, name, cardUrl)`

- **Definisi:** [`app.js:426`](app.js#L426)
- **Deskripsi:** Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasarkan NIP/Nama.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:509`](app.js#L509) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(p.empId, p.name, resolvedCard);`
  - [`app.js:520`](app.js#L520) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(m.empId, m.name, resolvedCard);`
  - [`app.js:595`](app.js#L595) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sheetItem.empId, sheetItem.name, rootIdCard);`
  - [`app.js:620`](app.js#L620) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sM.empId, sM.name, mIdCard);`
  - [`app.js:2686`](app.js#L2686) — di dalam fungsi `saveParticipantEdit()`
    `saveIdCardToMap(m.empId, m.name, m.idCard);`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="findidcardbyempidorname"></a>
#### `findIdCardByEmpIdOrName(empId, name)`

- **Definisi:** [`app.js:444`](app.js#L444)
- **Deskripsi:** Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama peserta.
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:506`](app.js#L506) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name) || (p.roster && p.roster[0`
  - [`app.js:517`](app.js#L517) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' `
  - [`app.js:593`](app.js#L593) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const rootIdCard = sheetItem.idCard || (localItem ? localItem.idCard : '') || findIdCardByEmpIdOrNam`
  - [`app.js:615`](app.js#L615) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `let mIdCard = sM.idCard || (lM ? lM.idCard : '') || findIdCardByEmpIdOrName(sM.empId, sM.name) || (d`
  - [`app.js:1753`](app.js#L1753) — di dalam fungsi `handleTeamNameInput()`
    `const off1Card = off1.idCard || findIdCardByEmpIdOrName(off1.empId, off1.name);`
  - [`app.js:1782`](app.js#L1782) — di dalam fungsi `handleTeamNameInput()`
    `const off2Card = off2.idCard || findIdCardByEmpIdOrName(off2.empId, off2.name);`
  - [`app.js:1818`](app.js#L1818) — di dalam fungsi `handleTeamNameInput()`
    `const pCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name);`
  - [`app.js:1883`](app.js#L1883) — di dalam fungsi `handleMcggNameInput()`
    `const idCard = existing.idCard || firstRoster.idCard || findIdCardByEmpIdOrName(existing.empId, exis`
  - [`app.js:2209`](app.js#L2209) — di dalam fungsi `handleRegister()`
    `mcggIdCard = existingParticipant.idCard || (existingParticipant.roster && existingParticipant.roster`
  - [`app.js:2581`](app.js#L2581) — di dalam fungsi `openEditParticipantModal()`
    `editRosterIdCards[idx] = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MC`
  - [`app.js:2788`](app.js#L2788) — di dalam fungsi `viewRosterDetail()`
    `const cardSrc = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (team.category === 'MCGG' ? `
  - [`app.js:2851`](app.js#L2851) — di dalam fungsi `renderParticipants()`
    `const card = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idC`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="getlogomap"></a>
#### `getLogoMap()`

- **Definisi:** [`app.js:462`](app.js#L462)
- **Deskripsi:** Pemetaan Logo sesuai Nama Tim (MLBB)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:478`](app.js#L478) — di dalam fungsi `saveLogoToMap()`
    `let map = getLogoMap();`
  - [`app.js:487`](app.js#L487) — di dalam fungsi `findLogoByTeamName()`
    `const map = getLogoMap();`

<a id="savelogotomap"></a>
#### `saveLogoToMap(teamName, logoUrl)`

- **Definisi:** [`app.js:476`](app.js#L476)
- **Deskripsi:** Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasarkan nama tim.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:501`](app.js#L501) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveLogoToMap(p.name, resolvedLogo);`
  - [`app.js:589`](app.js#L589) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveLogoToMap(sheetItem.name, teamLogo);`
  - [`app.js:2663`](app.js#L2663) — di dalam fungsi `saveParticipantEdit()`
    `saveLogoToMap(p.name, currentEditLogoBase64);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="findlogobyteamname"></a>
#### `findLogoByTeamName(teamName)`

- **Definisi:** [`app.js:485`](app.js#L485)
- **Deskripsi:** Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peserta.
- **Titik Pemanggilan (8 lokasi):**
  - [`app.js:498`](app.js#L498) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedLogo = p.logo || findLogoByTeamName(p.name);`
  - [`app.js:587`](app.js#L587) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const teamLogo = sheetItem.logo || (localItem ? localItem.logo : '') || findLogoByTeamName(sheetItem`
  - [`app.js:1726`](app.js#L1726) — di dalam fungsi `handleTeamNameInput()`
    `const teamLogo = existing.logo || findLogoByTeamName(existing.name);`
  - [`app.js:1935`](app.js#L1935) — di dalam fungsi `handleRegister()`
    `if (existingParticipant && (existingParticipant.logo || findLogoByTeamName(existingParticipant.name)`
  - [`app.js:1936`](app.js#L1936) — di dalam fungsi `handleRegister()`
    `logoData = existingParticipant.logo || findLogoByTeamName(existingParticipant.name);`
  - [`app.js:2565`](app.js#L2565) — di dalam fungsi `openEditParticipantModal()`
    `currentEditLogoBase64 = p.logo || findLogoByTeamName(p.name) || '';`
  - [`app.js:2768`](app.js#L2768) — di dalam fungsi `viewRosterDetail()`
    `const teamLogoSrc = team.logo || findLogoByTeamName(team.name);`
  - [`app.js:2865`](app.js#L2865) — di dalam fungsi `renderParticipants()`
    `const teamLogoSrc = p.logo || findLogoByTeamName(p.name);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="handlelogopreview"></a>
#### `handleLogoPreview(event)`

- **Definisi:** [`app.js:1091`](app.js#L1091)
- **Deskripsi:** Handle Logo Upload and Live Preview
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:103`](index.html#L103) — Event `onchange`
    `<input type="file" id="teamLogoInput" accept="image/*" onchange="handleLogoPreview(event)" style="pa`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handlesingleidcardpreview"></a>
#### `handleSingleIdCardPreview(event, target)`

- **Definisi:** [`app.js:1105`](app.js#L1105)
- **Deskripsi:** Handle Individual ID Card Upload for Officials and MCGG
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:149`](index.html#L149) — Event `onchange`
    `<input type="file" id="off1_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
  - [`index.html:193`](index.html#L193) — Event `onchange`
    `<input type="file" id="off2_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
  - [`index.html:262`](index.html#L262) — Event `onchange`
    `<input type="file" id="mcgg_idcard_file" accept="image/*" onchange="handleSingleIdCardPreview(event,`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleplayeridcardpreview"></a>
#### `handlePlayerIdCardPreview(event, playerIdx)`

- **Definisi:** [`app.js:1126`](app.js#L1126)
- **Deskripsi:** Handle Individual ID Card Upload for Each of the 8 Players
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1186`](app.js#L1186) — di dalam fungsi `renderPlayersFormInputs()`
    `<input type="file" id="p${i}_idcard_file" accept="image/*" onchange="handlePlayerIdCardPreview(event`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="openidcardlightbox"></a>
#### `openIdCardLightbox(imgSrc, title, driveUrl = '')`

- **Definisi:** [`app.js:1618`](app.js#L1618)
- **Deskripsi:** Lightbox for Viewing Full ID Card
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:2599`](app.js#L2599) — di dalam fungsi `openEditParticipantModal()`
    `<div class="idcard-thumb-sm" id="edit_m_${idx}_thumb" onclick="if(editRosterIdCards[${idx}]) openIdC`
  - [`app.js:2792`](app.js#L2792) — di dalam fungsi `viewRosterDetail()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--yokke-`
- **Memanggil Fungsi Internal:** [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="closeidcardlightbox"></a>
#### `closeIdCardLightbox()`

- **Definisi:** [`app.js:1657`](app.js#L1657)
- **Deskripsi:** Menutup modal pop-up lightbox preview ID Card pegawai.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:628`](index.html#L628) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeIdCardLightbox()">✕ Tu`

<a id="openeditparticipantmodal"></a>
#### `openEditParticipantModal(id)`

- **Definisi:** [`app.js:2524`](app.js#L2524)
- **Deskripsi:** ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2901`](app.js#L2901) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-edit-sm" title="Edit Data & Upload ID Card" onclick="openEditParticipantModal`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox), [`handleEditRosterIdCardUpload()`](#handleeditrosteridcardupload)

<a id="closeeditparticipantmodal"></a>
#### `closeEditParticipantModal()`

- **Definisi:** [`app.js:2612`](app.js#L2612)
- **Deskripsi:** Menutup modal dialog edit peserta.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:517`](index.html#L517) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeEditParticipantModal(`
  - [`index.html:583`](index.html#L583) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeEditParticipantModal()">Batal</button>`
  - [`app.js:2759`](app.js#L2759) — di dalam fungsi `saveParticipantEdit()`
    `closeEditParticipantModal();`

<a id="handleeditlogoupload"></a>
#### `handleEditLogoUpload(event)`

- **Definisi:** [`app.js:2617`](app.js#L2617)
- **Deskripsi:** Handle logo upload in Admin Edit modal
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:549`](index.html#L549) — Event `onchange`
    `<input type="file" id="editTeamLogoInput" accept="image/*" onchange="handleEditLogoUpload(event)" st`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleeditrosteridcardupload"></a>
#### `handleEditRosterIdCardUpload(event, idx)`

- **Definisi:** [`app.js:2633`](app.js#L2633)
- **Deskripsi:** Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedit pada modal admin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2602`](app.js#L2602) — di dalam fungsi `openEditParticipantModal()`
    `<input type="file" accept="image/*" style="font-size:0.7rem; width:120px;" onchange="handleEditRoste`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="closedetailmodal"></a>
#### `closeDetailModal()`

- **Definisi:** [`app.js:2823`](app.js#L2823)
- **Deskripsi:** Menutup modal dialog rincian roster tim dan galeri ID Card.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:600`](index.html#L600) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeDetailModal()">✕ Tutu`

---

### 🔧 Helper & UI Utility

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`app.js:372`](app.js#L372)
- **Deskripsi:** Helper to format Google Drive image URLs into viewable thumbnail image URLs
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:1625`](app.js#L1625) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:1731`](app.js#L1731) — di dalam fungsi `handleTeamNameInput()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogo)}" alt="Logo ${escapeHtml(existing.nam`
  - [`app.js:1758`](app.js#L1758) — di dalam fungsi `handleTeamNameInput()`
    `off1Prev.innerHTML = '<img src="${formatDriveImageUrl(off1Card)}" style="width:100%;height:100%;obje`
  - [`app.js:1787`](app.js#L1787) — di dalam fungsi `handleTeamNameInput()`
    `off2Prev.innerHTML = '<img src="${formatDriveImageUrl(off2Card)}" style="width:100%;height:100%;obje`
  - [`app.js:1821`](app.js#L1821) — di dalam fungsi `handleTeamNameInput()`
    `if (pPrev) pPrev.innerHTML = '<img src="${formatDriveImageUrl(pCard)}" style="width:100%;height:100%`
  - [`app.js:1888`](app.js#L1888) — di dalam fungsi `handleMcggNameInput()`
    `prevBox.innerHTML = '<img src="${formatDriveImageUrl(idCard)}" alt="ID Card" style="width:100%;heigh`
  - [`app.js:2573`](app.js#L2573) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:2600`](app.js#L2600) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:2771`](app.js#L2771) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:2793`](app.js#L2793) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:2866`](app.js#L2866) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`functional_tests.js:92`](functional_tests.js#L92) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`functional_tests.js:101`](functional_tests.js#L101) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

<a id="switchtab"></a>
#### `switchTab(tabId)`

- **Definisi:** [`app.js:1601`](app.js#L1601)
- **Deskripsi:** Navigation Tabs
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:40`](index.html#L40) — Event `onclick`
    `<button class="nav-btn active" onclick="switchTab('daftar')">📝 Pendaftaran</button>`
  - [`index.html:41`](index.html#L41) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('peserta')">👥 Daftar Peserta & Verifikasi</button>`
  - [`index.html:42`](index.html#L42) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('rules')">📜 Peraturan (Rules)</button>`
  - [`index.html:43`](index.html#L43) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('bagan-mlbb')">⚔️ Bagan MLBB</button>`
  - [`index.html:44`](index.html#L44) — Event `onclick`
    `<button class="nav-btn" onclick="switchTab('points-mcgg')">♟️ Poin & Klasemen MCGG</button>`
- **Memanggil Fungsi Internal:** [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`renderRules()`](#renderrules)

<a id="escapehtml"></a>
#### `escapeHtml(str)`

- **Definisi:** [`app.js:1662`](app.js#L1662)
- **Deskripsi:** Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dalam HTML DOM.
- **Titik Pemanggilan (24 lokasi):**
  - [`app.js:1683`](app.js#L1683) — di dalam fungsi `updateRegistrationDatalists()`
    `mlbbDatalist.innerHTML = uniqueTeams.map(name => '<option value="${escapeHtml(name)}">').join('');`
  - [`app.js:1691`](app.js#L1691) — di dalam fungsi `updateRegistrationDatalists()`
    `mcggDatalist.innerHTML = uniquePlayers.map(name => '<option value="${escapeHtml(name)}">').join('');`
  - [`app.js:1715`](app.js#L1715) — di dalam fungsi `handleTeamNameInput()`
    `noticeEl.innerHTML = '🔄 <strong>Mode Pembaruan Data:</strong> Tim "<strong>${escapeHtml(existing.na`
  - [`app.js:1731`](app.js#L1731) — di dalam fungsi `handleTeamNameInput()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogo)}" alt="Logo ${escapeHtml(existing.nam`
  - [`app.js:1861`](app.js#L1861) — di dalam fungsi `handleMcggNameInput()`
    `noticeEl.innerHTML = '🔄 <strong>Mode Pembaruan Data:</strong> Pemain "<strong>${escapeHtml(existing`
  - [`app.js:3636`](app.js#L3636) — di dalam fungsi `renderGroupStageUI()`
    `<span>🛡️ ${escapeHtml(gName)}</span>`
  - [`app.js:3666`](app.js#L3666) — di dalam fungsi `renderGroupStageUI()`
    `<td>${escapeHtml(t.name)}</td>`
  - [`app.js:3694`](app.js#L3694) — di dalam fungsi `renderGroupStageUI()`
    `⚠️ TIE-BREAKER MATCH DIPERLUKAN (${escapeHtml(tb.group)})`
  - [`app.js:3697`](app.js#L3697) — di dalam fungsi `renderGroupStageUI()`
    `Peringkat 2 & 3 grup <strong>${escapeHtml(tb.group)}</strong> memiliki poin sama (<strong>${escapeHt`
  - [`app.js:3704`](app.js#L3704) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:3705`](app.js#L3705) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:3879`](app.js#L3879) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>🛡️</span> <span>Jadwal & Hasil Pertandingan: ${escapeHtml(gName)}</span>`
  - [`app.js:3905`](app.js#L3905) — di dalam fungsi `renderGroupFixturesUI()`
    `<span style="font-weight:600;">${escapeHtml(f.teamA)} ${f.winner === f.teamA ? '🏆' : ''}</span>`
  - [`app.js:3909`](app.js#L3909) — di dalam fungsi `renderGroupFixturesUI()`
    `<span style="font-weight:600;">${escapeHtml(f.teamB)} ${f.winner === f.teamB ? '🏆' : ''}</span>`
  - [`app.js:3914`](app.js#L3914) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>⭐ MVP: <strong style="color:#fff;">${escapeHtml(f.mvpPlayer)}</strong> ${f.mvpHero ? '<span st`
  - [`app.js:3915`](app.js#L3915) — di dalam fungsi `renderGroupFixturesUI()`
    `${f.mvpTeam ? '<span style="font-size:0.68rem; color:var(--yokke-cyan);">${escapeHtml(f.mvpTeam)}</s`
  - [`app.js:4014`](app.js#L4014) — di dalam fungsi `renderGroupPlayoffTree()`
    `⭐ MVP: ${escapeHtml(m.mvpPlayer)}${m.mvpHero ? ' (${escapeHtml(m.mvpHero)})' : ''}`
  - [`app.js:4548`](app.js#L4548) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; over`
  - [`app.js:4549`](app.js#L4549) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `🎮 ${escapeHtml(item.playerNick)}`
  - [`app.js:4551`](app.js#L4551) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text`
  - [`app.js:4552`](app.js#L4552) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `👤 ${escapeHtml(item.playerName)}`
  - [`app.js:5007`](app.js#L5007) — di dalam fungsi `renderLobbyRowsHtml()`
    `<span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? escapeHtm`
  - [`app.js:5010`](app.js#L5010) — di dalam fungsi `renderLobbyRowsHtml()`
    `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? '<span>👤 ${escapeHtml(p.name)}</spa`
  - [`app.js:5011`](app.js#L5011) — di dalam fungsi `renderLobbyRowsHtml()`
    `${p.gameId && p.gameId !== '-' ? '${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' `

<a id="filterlist"></a>
#### `filterList(cat)`

- **Definisi:** [`app.js:2516`](app.js#L2516)
- **Deskripsi:** Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/MCGG), dan status verifikasi.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:305`](index.html#L305) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('ALL')">Semua</button>`
  - [`index.html:306`](index.html#L306) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('MLBB')">MLBB (<span id="countMLBB">0</span> Tim`
  - [`index.html:307`](index.html#L307) — Event `onclick`
    `<button class="btn btn-outline" onclick="filterList('MCGG')">MCGG (<span id="countMCGG">0</span> Pem`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants)

<a id="changetournamentformat"></a>
#### `changeTournamentFormat()`

- **Definisi:** [`app.js:2965`](app.js#L2965)
- **Deskripsi:** Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP_2, GROUP_4, KNOCKOUT).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:400`](index.html#L400) — Event `onchange`
    `<select id="bracketFormat" onchange="changeTournamentFormat()" style="padding: 0.5rem 0.8rem; font-s`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat)

<a id="setdrawtargetandscroll"></a>
#### `setDrawTargetAndScroll(lobbyKey)`

- **Definisi:** [`app.js:4732`](app.js#L4732)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`changeCommanderDrawTarget()`](#changecommanderdrawtarget), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="sanitizenip"></a>
#### `sanitizeNip(nip)`

- **Definisi:** [`functional_tests.js:83`](functional_tests.js#L83)
- **Titik Pemanggilan (3 lokasi):**
  - [`functional_tests.js:86`](functional_tests.js#L86) — pada skenario pengujian
    `assert.strictEqual(sanitizeNip('EMP-2399140486'), 'emp2399140486');`
  - [`functional_tests.js:87`](functional_tests.js#L87) — pada skenario pengujian
    `assert.strictEqual(sanitizeNip('2399-140486'), '2399140486');`
  - [`functional_tests.js:88`](functional_tests.js#L88) — pada skenario pengujian
    `assert.strictEqual(sanitizeNip(' 2399140486 '), '2399140486');`

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`functional_tests.js:92`](functional_tests.js#L92)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:372`](app.js#L372) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`app.js:1625`](app.js#L1625) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:1731`](app.js#L1731) — di dalam fungsi `handleTeamNameInput()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogo)}" alt="Logo ${escapeHtml(existing.nam`
  - [`app.js:1758`](app.js#L1758) — di dalam fungsi `handleTeamNameInput()`
    `off1Prev.innerHTML = '<img src="${formatDriveImageUrl(off1Card)}" style="width:100%;height:100%;obje`
  - [`app.js:1787`](app.js#L1787) — di dalam fungsi `handleTeamNameInput()`
    `off2Prev.innerHTML = '<img src="${formatDriveImageUrl(off2Card)}" style="width:100%;height:100%;obje`
  - [`app.js:1821`](app.js#L1821) — di dalam fungsi `handleTeamNameInput()`
    `if (pPrev) pPrev.innerHTML = '<img src="${formatDriveImageUrl(pCard)}" style="width:100%;height:100%`
  - [`app.js:1888`](app.js#L1888) — di dalam fungsi `handleMcggNameInput()`
    `prevBox.innerHTML = '<img src="${formatDriveImageUrl(idCard)}" alt="ID Card" style="width:100%;heigh`
  - [`app.js:2573`](app.js#L2573) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:2600`](app.js#L2600) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:2771`](app.js#L2771) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:2793`](app.js#L2793) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:2866`](app.js#L2866) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`functional_tests.js:101`](functional_tests.js#L101) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

---

### 📦 Modul Aplikasi Umum

<a id="getitemkey"></a>
#### `getItemKey(item)`

- **Definisi:** [`app.js:546`](app.js#L546)
- **Deskripsi:** Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:564`](app.js#L564) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `localMap[getItemKey(localItem)] = localItem;`
  - [`app.js:571`](app.js#L571) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const itemKey = getItemKey(sheetItem);`

<a id="cleanorphanedtournamentdata"></a>
#### `cleanOrphanedTournamentData()`

- **Definisi:** [`app.js:770`](app.js#L770)
- **Deskripsi:** Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup, dan lobi MCGG
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:742`](app.js#L742) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `cleanOrphanedTournamentData();`
  - [`app.js:2489`](app.js#L2489) — di dalam fungsi `deleteParticipant()`
    `cleanOrphanedTournamentData();`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff)

<a id="savestate"></a>
#### `saveState()`

- **Definisi:** [`app.js:1011`](app.js#L1011)
- **Deskripsi:** Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi MCGG) ke localStorage.
- **Titik Pemanggilan (29 lokasi):**
  - [`app.js:743`](app.js#L743) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveState();`
  - [`app.js:896`](app.js#L896) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `saveState();`
  - [`app.js:973`](app.js#L973) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `saveState();`
  - [`app.js:1426`](app.js#L1426) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveState();`
  - [`app.js:2391`](app.js#L2391) — di dalam fungsi `handleRegister()`
    `saveState();`
  - [`app.js:2433`](app.js#L2433) — di dalam fungsi `setParticipantStatus()`
    `saveState();`
  - [`app.js:2490`](app.js#L2490) — di dalam fungsi `deleteParticipant()`
    `saveState();`
  - [`app.js:2705`](app.js#L2705) — di dalam fungsi `saveParticipantEdit()`
    `saveState();`
  - [`app.js:3094`](app.js#L3094) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveState();`
  - [`app.js:3121`](app.js#L3121) — di dalam fungsi `proceedToMLBBStage2()`
    `saveState();`
  - [`app.js:3134`](app.js#L3134) — di dalam fungsi `resetMLBBToStage1()`
    `saveState();`
  - [`app.js:3174`](app.js#L3174) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `saveState();`
  - [`app.js:3222`](app.js#L3222) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `saveState();`
  - [`app.js:3231`](app.js#L3231) — di dalam fungsi `saveTournamentStateOnly()`
    `saveState();`
  - [`app.js:3444`](app.js#L3444) — di dalam fungsi `generateGroupStage()`
    `saveState();`
  - [`app.js:3457`](app.js#L3457) — di dalam fungsi `updateGroupRecord()`
    `saveState();`
  - [`app.js:3541`](app.js#L3541) — di dalam fungsi `pickGroupPlayoffWinner()`
    `saveState();`
  - [`app.js:3580`](app.js#L3580) — di dalam fungsi `promptPlayoffMVP()`
    `saveState();`
  - [`app.js:3774`](app.js#L3774) — di dalam fungsi `setGroupMatchScore()`
    `saveState();`
  - [`app.js:3789`](app.js#L3789) — di dalam fungsi `setGroupMatchMVP()`
    `saveState();`
  - [`app.js:3831`](app.js#L3831) — di dalam fungsi `resetGroupMatchScore()`
    `saveState();`
  - [`app.js:4183`](app.js#L4183) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:4361`](app.js#L4361) — di dalam fungsi `updateMCGGRank()`
    `saveState();`
  - [`app.js:4396`](app.js#L4396) — di dalam fungsi `updateMCGGCommander()`
    `saveState();`
  - [`app.js:4432`](app.js#L4432) — di dalam fungsi `updateMCGGPenalty()`
    `saveState();`
  - [`app.js:4648`](app.js#L4648) — di dalam fungsi `drawMatchCommanders()`
    `saveState();`
  - [`app.js:4675`](app.js#L4675) — di dalam fungsi `resetLobbyDraw()`
    `saveState();`
  - [`app.js:5326`](app.js#L5326) — di dalam fungsi `loadSampleData()`
    `saveState();`
  - [`app.js:5339`](app.js#L5339) — di dalam fungsi `clearAllData()`
    `saveState();`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`updateAuthUI()`](#updateauthui), [`updateCounts()`](#updatecounts)

<a id="updatecounts"></a>
#### `updateCounts()`

- **Definisi:** [`app.js:1022`](app.js#L1022)
- **Deskripsi:** Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status verifikasi di header UI.
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:747`](app.js#L747) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCounts();`
  - [`app.js:1019`](app.js#L1019) — di dalam fungsi `saveState()`
    `updateCounts();`
  - [`app.js:2437`](app.js#L2437) — di dalam fungsi `setParticipantStatus()`
    `updateCounts();`
  - [`app.js:2494`](app.js#L2494) — di dalam fungsi `deleteParticipant()`
    `updateCounts();`
  - [`app.js:5344`](app.js#L5344) — di dalam fungsi `clearAllData()`
    `updateCounts();`
  - [`app.js:5360`](app.js#L5360) — cakupan global / event handler
    `updateCounts();`

<a id="toggleofficial2form"></a>
#### `toggleOfficial2Form()`

- **Definisi:** [`app.js:1141`](app.js#L1141)
- **Deskripsi:** Toggle Official 2 Form
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:165`](index.html#L165) — Event `onchange`
    `<input type="checkbox" id="has_official_2" onchange="toggleOfficial2Form()">`
  - [`app.js:1768`](app.js#L1768) — di dalam fungsi `handleTeamNameInput()`
    `toggleOfficial2Form();`
  - [`app.js:1792`](app.js#L1792) — di dalam fungsi `handleTeamNameInput()`
    `toggleOfficial2Form();`
  - [`app.js:2416`](app.js#L2416) — di dalam fungsi `handleRegister()`
    `toggleOfficial2Form();`
  - [`app.js:5354`](app.js#L5354) — cakupan global / event handler
    `toggleOfficial2Form();`

<a id="renderplayersforminputs"></a>
#### `renderPlayersFormInputs()`

- **Definisi:** [`app.js:1148`](app.js#L1148)
- **Deskripsi:** Generate the 8 players form fields dynamically (Included In-Game Nickname and Per-Player ID Card Uploader)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:2414`](app.js#L2414) — di dalam fungsi `handleRegister()`
    `renderPlayersFormInputs();`
  - [`app.js:5351`](app.js#L5351) — cakupan global / event handler
    `renderPlayersFormInputs();`
- **Memanggil Fungsi Internal:** [`handlePlayerIdCardPreview()`](#handleplayeridcardpreview)

<a id="togglecategoryform"></a>
#### `toggleCategoryForm()`

- **Definisi:** [`app.js:1207`](app.js#L1207)
- **Deskripsi:** Switch form between MLBB and MCGG cleanly
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:70`](index.html#L70) — Event `onchange`
    `<select id="gameCategory" required onchange="toggleCategoryForm()" style="font-size: 1rem; font-weig`
  - [`app.js:2415`](app.js#L2415) — di dalam fungsi `handleRegister()`
    `toggleCategoryForm();`
  - [`app.js:5353`](app.js#L5353) — cakupan global / event handler
    `toggleCategoryForm();`

<a id="renderregistrationui"></a>
#### `renderRegistrationUI()`

- **Definisi:** [`app.js:1303`](app.js#L1303)
- **Deskripsi:** Merender status badge pendaftaran, banner peringatan pendaftaran ditutup, serta status tombol submit dan kontrol undian.
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:730`](app.js#L730) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRegistrationUI();`
  - [`app.js:1382`](app.js#L1382) — di dalam fungsi `toggleRegistrationStatus()`
    `renderRegistrationUI();`
  - [`app.js:1597`](app.js#L1597) — di dalam fungsi `updateAuthUI()`
    `renderRegistrationUI();`
  - [`functional_tests.js:818`](functional_tests.js#L818) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderRegistrationUI()'), 'Harus memiliki renderRegistrationUI()')`

<a id="updateregistrationdatalists"></a>
#### `updateRegistrationDatalists()`

- **Definisi:** [`app.js:1674`](app.js#L1674)
- **Deskripsi:** Sinkronkan Datalist Nama Tim / Pemain untuk Fitur Update Cepat di Formulir Pendaftaran
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:2417`](app.js#L2417) — di dalam fungsi `handleRegister()`
    `updateRegistrationDatalists();`
  - [`app.js:2830`](app.js#L2830) — di dalam fungsi `renderParticipants()`
    `updateRegistrationDatalists();`
  - [`functional_tests.js:169`](functional_tests.js#L169) — pada skenario pengujian
    `assert(appCode.includes('function updateRegistrationDatalists('), 'Harus ada fungsi updateRegistrati`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="handleteamnameinput"></a>
#### `handleTeamNameInput(val)`

- **Definisi:** [`app.js:1696`](app.js#L1696)
- **Deskripsi:** Handler saat Peserta Mengetik / Memilih Nama Tim MLBB di Form Pendaftaran
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:85`](index.html#L85) — Event `oninput`
    `<input type="text" id="teamName" list="registeredTeamsDatalist" oninput="handleTeamNameInput(this.va`
  - [`functional_tests.js:170`](functional_tests.js#L170) — pada skenario pengujian
    `assert(appCode.includes('function handleTeamNameInput('), 'Harus ada handler handleTeamNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`toggleOfficial2Form()`](#toggleofficial2form)

<a id="shuffleandgeneratetournament"></a>
#### `shuffleAndGenerateTournament()`

- **Definisi:** [`app.js:3007`](app.js#L3007)
- **Deskripsi:** Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum dikunci.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:417`](index.html#L417) — Event `onclick`
    `<button id="btnShuffleMLBB" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0.85rem;`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage)

<a id="pickwinner"></a>
#### `pickWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:3334`](app.js#L3334)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3400`](app.js#L3400) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:3404`](app.js#L3404) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket)

<a id="updategrouprecord"></a>
#### `updateGroupRecord(gName, idx, field, val)`

- **Definisi:** [`app.js:3449`](app.js#L3449)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3657`](app.js#L3657) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" o`
  - [`app.js:3661`](app.js#L3661) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" `
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="setgroupmatchscore"></a>
#### `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB)`

- **Definisi:** [`app.js:3751`](app.js#L3751)
- **Deskripsi:** Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara otomatis.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3921`](app.js#L3921) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini ${f.scoreA===2 && f.scoreB===0 ? 'active' : ''}" onclick="setGroupMatc`
  - [`app.js:3922`](app.js#L3922) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini ${f.scoreA===2 && f.scoreB===1 ? 'active' : ''}" onclick="setGroupMatc`
  - [`app.js:3923`](app.js#L3923) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini ${f.scoreA===1 && f.scoreB===2 ? 'active' : ''}" onclick="setGroupMatc`
  - [`app.js:3924`](app.js#L3924) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini ${f.scoreA===0 && f.scoreB===2 ? 'active' : ''}" onclick="setGroupMatc`
  - [`functional_tests.js:668`](functional_tests.js#L668) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchScore('), 'app.js harus memiliki setter skor setGroup`
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="setgroupmatchmvp"></a>
#### `setGroupMatchMVP(matchId, mvpPlayer, mvpHero, mvpTeam)`

- **Definisi:** [`app.js:3779`](app.js#L3779)
- **Deskripsi:** Mencatat pemain dan tim MVP pada pertandingan fase grup MLBB.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3822`](app.js#L3822) — di dalam fungsi `promptGroupMatchMVP()`
    `setGroupMatchMVP(matchId, newMvp, newHero, mvpTeam);`
  - [`functional_tests.js:782`](functional_tests.js#L782) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchMVP('), 'Harus memiliki setGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="promptgroupmatchmvp"></a>
#### `promptGroupMatchMVP(matchId, teamA, teamB)`

- **Definisi:** [`app.js:3793`](app.js#L3793)
- **Deskripsi:** Menampilkan dialog interaktif untuk memilih MVP pertandingan grup MLBB.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3926`](app.js#L3926) — di dalam fungsi `renderGroupFixturesUI()`
    `${isDone ? '<button class="btn-score-mini" style="color:var(--yokke-gold); border-color:rgba(255,215`
  - [`functional_tests.js:783`](functional_tests.js#L783) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptGroupMatchMVP('), 'Harus memiliki promptGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`setGroupMatchMVP()`](#setgroupmatchmvp)

<a id="resetgroupmatchscore"></a>
#### `resetGroupMatchScore(matchId)`

- **Definisi:** [`app.js:3825`](app.js#L3825)
- **Deskripsi:** Mereset skor pertandingan grup MLBB ke status belum bertanding.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3925`](app.js#L3925) — di dalam fungsi `renderGroupFixturesUI()`
    `<button class="btn-score-mini" style="color:var(--yokke-red);" onclick="resetGroupMatchScore('${safe`
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="findprevious"></a>
#### `findPrevious(ply)`

- **Definisi:** [`app.js:4132`](app.js#L4132)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4145`](app.js#L4145) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`app.js:4144`](app.js#L4144)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="sortfn"></a>
#### `sortFn(a, b)`

- **Definisi:** [`app.js:4222`](app.js#L4222)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevinarr"></a>
#### `findPrevInArr(p, arr)`

- **Definisi:** [`app.js:4290`](app.js#L4290)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4302`](app.js#L4302) — di dalam fungsi `syncMCGGGrandFinal()`
    `const prev = findPrevInArr(p, existingGF);`
  - [`app.js:4314`](app.js#L4314) — di dalam fungsi `syncMCGGGrandFinal()`
    `const prev = findPrevInArr(p, existingGF);`

<a id="showmatch3draftinfo"></a>
#### `showMatch3DraftInfo()`

- **Definisi:** [`app.js:4714`](app.js#L4714)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4477`](app.js#L4477) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.35rem 0.65rem; font-size:0.78rem;" onclick="showMat`

<a id="buildroundcell"></a>
#### `buildRoundCell(player, roundKey, cmdKey, targetLobby)`

- **Definisi:** [`app.js:5026`](app.js#L5026)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5014`](app.js#L5014) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r1', 'c1', lobbyKey)}</td>`
  - [`app.js:5015`](app.js#L5015) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r2', 'c2', lobbyKey)}</td>`
  - [`app.js:5016`](app.js#L5016) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r3', 'c3', lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`updateMCGGCommander()`](#updatemcggcommander), [`updateMCGGRank()`](#updatemcggrank)

<a id="loadsampledata"></a>
#### `loadSampleData()`

- **Definisi:** [`app.js:5127`](app.js#L5127)
- **Deskripsi:** Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation - No Sensitive Info)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:297`](index.html#L297) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="loadSamp`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="clearalldata"></a>
#### `clearAllData()`

- **Definisi:** [`app.js:5331`](app.js#L5331)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:298`](index.html#L298) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="clearAll`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="runtest"></a>
#### `runTest(testName, fn)`

- **Definisi:** [`functional_tests.js:24`](functional_tests.js#L24)
- **Titik Pemanggilan (64 lokasi):**
  - [`functional_tests.js:57`](functional_tests.js#L57) — pada skenario pengujian
    `runTest('1.1 Tabel Poin MCGG sesuai regulasi resmi (+4 s/d -4)', () => {`
  - [`functional_tests.js:68`](functional_tests.js#L68) — pada skenario pengujian
    `runTest('1.2 Kalkulasi akumulasi poin 3 ronde MCGG (+4, +2, -1 = 5)', () => {`
  - [`functional_tests.js:74`](functional_tests.js#L74) — pada skenario pengujian
    `runTest('1.3 Ketersediaan aset gambar 25 Little Commander MCGG', () => {`
  - [`functional_tests.js:82`](functional_tests.js#L82) — pada skenario pengujian
    `runTest('1.3 Normalisasi NIP Pegawai (menghilangkan tanda baca & karakter khusus)', () => {`
  - [`functional_tests.js:91`](functional_tests.js#L91) — pada skenario pengujian
    `runTest('1.4 Format Tautan Google Drive ke URL gambar langsung', () => {`
  - [`functional_tests.js:105`](functional_tests.js#L105) — pada skenario pengujian
    `runTest('1.5 Konfigurasi Admin PIN terverifikasi', () => {`
  - [`functional_tests.js:110`](functional_tests.js#L110) — pada skenario pengujian
    `runTest('1.6 Verifikasi fungsi generasi 3 Sheet Turnamen di google_apps_script.js', () => {`
  - [`functional_tests.js:119`](functional_tests.js#L119) — pada skenario pengujian
    `runTest('1.7 Logika pemetaan Hero, Alter Name & Tier List dari MCGG Match Set Up', () => {`
  - [`functional_tests.js:149`](functional_tests.js#L149) — pada skenario pengujian
    `runTest('1.8 Verifikasi aturan 1 Tim = 1 Record & 1 Pemain = 1 Record di google_apps_script.js', () `
  - [`functional_tests.js:156`](functional_tests.js#L156) — pada skenario pengujian
    `runTest('1.9 Verifikasi penghapusan tombol sinkronisasi sheet lama di index.html', () => {`
  - [`functional_tests.js:162`](functional_tests.js#L162) — pada skenario pengujian
    `runTest('1.10 Verifikasi datalist dan handler pembaruan otomatis di index.html dan app.js', () => {`
  - [`functional_tests.js:246`](functional_tests.js#L246) — pada skenario pengujian
    `runTest('2.1 Menolak pendaftaran MLBB tanpa logo tim', () => {`
  - [`functional_tests.js:259`](functional_tests.js#L259) — pada skenario pengujian
    `runTest('2.2 Menolak pendaftaran MLBB jika Official 1 tidak ada foto ID card', () => {`
  - [`functional_tests.js:274`](functional_tests.js#L274) — pada skenario pengujian
    `runTest('2.3 Menolak jika Official merangkap sebagai pemain (NIP sama)', () => {`
  - [`functional_tests.js:290`](functional_tests.js#L290) — pada skenario pengujian
    `runTest('2.4 Menolak jika foto ID Card Official sama persis dengan foto ID Card Pemain', () => {`
  - [`functional_tests.js:306`](functional_tests.js#L306) — pada skenario pengujian
    `runTest('2.5 Menolak jika ada dua pemain dengan NIP ganda dalam satu tim', () => {`
  - [`functional_tests.js:323`](functional_tests.js#L323) — pada skenario pengujian
    `runTest('2.6 Menolak pendaftaran solo MCGG tanpa ID Card', () => {`
  - [`functional_tests.js:337`](functional_tests.js#L337) — pada skenario pengujian
    `runTest('2.7 Menerima pendaftaran yang memenuhi seluruh kriteria', () => {`
  - [`functional_tests.js:448`](functional_tests.js#L448) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.1 TARGET_SPREADSHEET_ID dan fungsi getTargetSpreadsheet di google_apps_script.js', () => `
  - [`functional_tests.js:455`](functional_tests.js#L455) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.2 Ketersediaan fungsi listing getMlbbTimListing, getMlbbPesertaListing, getMcggListing', `
  - [`functional_tests.js:465`](functional_tests.js#L465) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.3 Prioritas VERIFIED > baris terbaru pada deduplikasi tim in-memory', () => {`
  - [`functional_tests.js:488`](functional_tests.js#L488) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.4 Sorting alfabetis A-Z dan pelestarian rowNumber asli', () => {`
  - [`functional_tests.js:503`](functional_tests.js#L503) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.5 Pembacaan IGN utuh tanpa pemotongan tanda koma (e.g. 4her,annn.)', () => {`
  - [`functional_tests.js:509`](functional_tests.js#L509) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.6 Struktur 11 Kolom Sheet Pendaftaran MCGG di google_apps_script.js', () => {`
  - [`functional_tests.js:516`](functional_tests.js#L516) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.7 Pembacaan ID Card langsung dari Kolom I (Link ID Card) & NIP sebagai Unique Key di getM`
  - [`functional_tests.js:524`](functional_tests.js#L524) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {`
  - [`functional_tests.js:538`](functional_tests.js#L538) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('5.1 Pre-check duplicate di app.js menggunakan Unique ID yang ditentukan', () => {`
  - [`functional_tests.js:545`](functional_tests.js#L545) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('5.2 Pengaturan isUpdate flag dan pop-up konfirmasi sebelum submit di app.js', () => {`
  - [`functional_tests.js:553`](functional_tests.js#L553) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('5.3 Script lock dan penanganan Kasus 1, 2, 3 di google_apps_script.js', () => {`
  - [`functional_tests.js:566`](functional_tests.js#L566) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.1 Logika Dinamis MLBB: 6 Tim (N=6) terbagi 2 grup seimbang (3 vs 3) & Playoff 4 Besar', (`
  - [`functional_tests.js:582`](functional_tests.js#L582) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.2 Logika Dinamis MLBB: N >= 12 Tim terbagi 4 grup seimbang & Playoff 8 Besar (QF -> SF ->`
  - [`functional_tests.js:601`](functional_tests.js#L601) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.3 Logika Dinamis MCGG: 13 Pemain (P=13) terbagi 2 lobi seimbang (7 dan 6 pemain) tanpa du`
  - [`functional_tests.js:615`](functional_tests.js#L615) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.4 Fase Final MCGG: Tanpa Lower Lobby & Grand Final Berstatus TBD Sebelum Kualifikasi Leng`
  - [`functional_tests.js:641`](functional_tests.js#L641) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.5 Pelestarian Skor & Handler Acak Undian Lobi MCGG', () => {`
  - [`functional_tests.js:647`](functional_tests.js#L647) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.6 UI Kontrol Dinamis di index.html (AUTO, Acak Lobi, Banner Informasi & Satu Halaman MCGG`
  - [`functional_tests.js:657`](functional_tests.js#L657) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.7 Status Kualifikasi MCGG di google_apps_script.js (Top 4 Lolos, Rank 5+ Gugur, Tanpa Low`
  - [`functional_tests.js:663`](functional_tests.js#L663) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.8 Bagan Pertandingan Fase Grup MLBB (Jadwal, Hasil BO3 & Integrasi Klasemen)', () => {`
  - [`functional_tests.js:684`](functional_tests.js#L684) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.9 Tampilan Satu Halaman Seluruh Lobi MCGG & Navigasi Cepat (Anchor Bar)', () => {`
  - [`functional_tests.js:694`](functional_tests.js#L694) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.10 Format Nama Commander Hero [Alter] & Visual Dua Lingkaran (Tanpa Label Tier)', () => {`
  - [`functional_tests.js:719`](functional_tests.js#L719) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('6.11 Pembacaan Image URL dan Penamaan Hero [Alter] dari Tab MCGG Match Set Up', () => {`
  - [`functional_tests.js:732`](functional_tests.js#L732) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.1 Restriksi Pengundian Commander khusus Panitia (Admin Only)', () => {`
  - [`functional_tests.js:737`](functional_tests.js#L737) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.2 MLBB Stage Machine: Lock TM mematikan tombol acak undian tim', () => {`
  - [`functional_tests.js:743`](functional_tests.js#L743) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.3 MLBB Stage Machine: Validasi kelengkapan match sebelum lanjut ke Tahap 2', () => {`
  - [`functional_tests.js:749`](functional_tests.js#L749) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.4 MLBB Stage Machine: Deteksi & Penyelesaian Tie-Breaker (BO1)', () => {`
  - [`functional_tests.js:756`](functional_tests.js#L756) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.5 MCGG Regulasi: Deteksi Sanksi Duplikat Commander Ronde 2 (-2 Poin)', () => {`
  - [`functional_tests.js:762`](functional_tests.js#L762) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('7.6 Otomasi Pembuatan & Pembaruan Indeks Fungsi (FUNCTION_INDEX.md)', () => {`
  - [`functional_tests.js:773`](functional_tests.js#L773) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('8.1 Pemisahan 3 Sheet Turnamen Terpisah di google_apps_script.js', () => {`
  - [`functional_tests.js:781`](functional_tests.js#L781) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('8.2 Fitur Input & Rekap MVP MLBB di app.js', () => {`
  - [`functional_tests.js:789`](functional_tests.js#L789) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('8.3 Undian Commander MCGG Per-Lobi Tepat di Atas Bagan Masing-Masing', () => {`
  - [`functional_tests.js:797`](functional_tests.js#L797) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('8.4 Rekap MVP Ronde MCGG (Berapa Kali Rank 1) di Tabel Lobi', () => {`
  - [`functional_tests.js:804`](functional_tests.js#L804) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.1 Tombol & Elemen Tutup Pendaftaran di index.html', () => {`
  - [`functional_tests.js:815`](functional_tests.js#L815) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.2 State dan Fungsi Tutup/Buka Pendaftaran di app.js', () => {`
  - [`functional_tests.js:822`](functional_tests.js#L822) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.3 Tombol Acak Grup/Lobi Nonaktif saat Pendaftaran Masih Dibuka', () => {`
  - [`functional_tests.js:828`](functional_tests.js#L828) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.4 Fungsi Reset Poin & Undian MCGG di app.js', () => {`
  - [`functional_tests.js:834`](functional_tests.js#L834) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.5 Simulasi Runtime: Reset Poin & Undian MCGG Mengosongkan Ronde 1-3, Sanksi, Lock TM & Dr`
  - [`functional_tests.js:879`](functional_tests.js#L879) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.6 Simulasi Runtime: State Tutup/Buka Pendaftaran & Penolakan Registrasi', () => {`
  - [`functional_tests.js:905`](functional_tests.js#L905) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.7 Simulasi Runtime: Restriksi Tombol Acak Tim MLBB & Lobi MCGG saat Pendaftaran Dibuka', `
  - [`functional_tests.js:927`](functional_tests.js#L927) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.8 Tombol Tutup Pendaftaran di Toolbar Tab Bagan MLBB dan Tab Poin MCGG di index.html', ()`
  - [`functional_tests.js:936`](functional_tests.js#L936) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.9 Fungsi resetTotalMLBBGroupAndBracket di app.js', () => {`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.10 Proteksi Guard Clause & Disabled State MLBB/MCGG saat Pendaftaran Masih Dibuka', () =>`
  - [`functional_tests.js:956`](functional_tests.js#L956) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.11 Simulasi Runtime: Reset Total Pembagian Grup & Bagan MLBB Mengosongkan Seluruh Grup, S`
  - [`functional_tests.js:1007`](functional_tests.js#L1007) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.12 Re-rendering Reaktif MLBB & MCGG saat Status Pendaftaran Berubah', () => {`
  - [`functional_tests.js:1016`](functional_tests.js#L1016) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.13 Preservasi Status Reset & Guard Pendaftaran Terbuka pada Perubahan Format Bagan', () =`
  - [`functional_tests.js:1032`](functional_tests.js#L1032) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('9.14 Deserialisasi Google Sheets & Sync Config Mendukung State Kosong/Reset', () => {`

<a id="validateregistration"></a>
#### `validateRegistration(data)`

- **Definisi:** [`functional_tests.js:179`](functional_tests.js#L179)
- **Titik Pemanggilan (7 lokasi):**
  - [`functional_tests.js:247`](functional_tests.js#L247) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:260`](functional_tests.js#L260) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:275`](functional_tests.js#L275) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:291`](functional_tests.js#L291) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:307`](functional_tests.js#L307) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:324`](functional_tests.js#L324) — pada skenario pengujian
    `const result = validateRegistration({`
  - [`functional_tests.js:338`](functional_tests.js#L338) — pada skenario pengujian
    `const result = validateRegistration({`

<a id="runliveintegrationtests"></a>
#### `runLiveIntegrationTests()`

- **Definisi:** [`functional_tests.js:361`](functional_tests.js#L361)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:1056`](functional_tests.js#L1056) — di dalam fungsi `runLiveIntegrationTests()`
    `runLiveIntegrationTests();`
- **Memanggil Fungsi Internal:** [`runAsyncTest()`](#runasynctest), [`runTest()`](#runtest), [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMlbbPesertaListing()`](#getmlbbpesertalisting), [`getMcggListing()`](#getmcgglisting), [`doPost()`](#dopost), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`shuffleMCGGPlayers()`](#shufflemcggplayers), [`getGroupFixtures()`](#getgroupfixtures), [`setGroupMatchScore()`](#setgroupmatchscore), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar), [`scrollToMCGGLobby()`](#scrolltomcgglobby), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`drawMatchCommanders()`](#drawmatchcommanders), [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`resetMLBBToStage1()`](#resetmlbbtostage1), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`setGroupMatchMVP()`](#setgroupmatchmvp), [`promptGroupMatchMVP()`](#promptgroupmatchmvp), [`promptPlayoffMVP()`](#promptplayoffmvp), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`switchLobbyDrawView()`](#switchlobbydrawview), [`resetLobbyDraw()`](#resetlobbydraw), [`toggleRegistrationStatus()`](#toggleregistrationstatus), [`renderRegistrationUI()`](#renderregistrationui), [`resetMCGGPointsAndDraw()`](#resetmcggpointsanddraw), [`attemptShuffleMLBB()`](#attemptshufflemlbb), [`attemptShuffleMCGG()`](#attemptshufflemcgg), [`resetTotalMLBBGroupAndBracket()`](#resettotalmlbbgroupandbracket), [`toggleLockMLBBGroup()`](#togglelockmlbbgroup), [`toggleLockMCGGLobbies()`](#togglelockmcgglobbies), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

---

### 📋 Regulasi Turnamen (Rules Editor)

<a id="renderrules"></a>
#### `renderRules()`

- **Definisi:** [`app.js:1032`](app.js#L1032)
- **Deskripsi:** Rules System
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:695`](app.js#L695) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRules();`
  - [`app.js:1063`](app.js#L1063) — di dalam fungsi `saveCustomRules()`
    `renderRules();`
  - [`app.js:1086`](app.js#L1086) — di dalam fungsi `resetRulesToDefault()`
    `renderRules();`
  - [`app.js:1613`](app.js#L1613) — di dalam fungsi `switchTab()`
    `renderRules();`
  - [`app.js:5355`](app.js#L5355) — cakupan global / event handler
    `renderRules();`

<a id="toggleeditrules"></a>
#### `toggleEditRules()`

- **Definisi:** [`app.js:1044`](app.js#L1044)
- **Deskripsi:** Membuka/menutup form editor peraturan turnamen khusus panitia.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:350`](index.html#L350) — Event `onclick`
    `<button class="btn btn-gold" id="btnToggleEditRules" style="font-size: 0.8rem; padding: 0.4rem 0.8re`
  - [`index.html:368`](index.html#L368) — Event `onclick`
    `<button class="btn btn-outline" onclick="toggleEditRules()">Batal</button>`
  - [`app.js:1064`](app.js#L1064) — di dalam fungsi `saveCustomRules()`
    `toggleEditRules();`

<a id="savecustomrules"></a>
#### `saveCustomRules()`

- **Definisi:** [`app.js:1050`](app.js#L1050)
- **Deskripsi:** Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Google Sheets.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:367`](index.html#L367) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveCustomRules()">💾 Simpan Peraturan</button>`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`toggleEditRules()`](#toggleeditrules)

<a id="resetrulestodefault"></a>
#### `resetRulesToDefault()`

- **Definisi:** [`app.js:1081`](app.js#L1081)
- **Deskripsi:** Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:351`](index.html#L351) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetRules" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules)

---

### 🛡️ Autentikasi & Hak Akses Panitia

<a id="openloginmodal"></a>
#### `openLoginModal()`

- **Definisi:** [`app.js:1267`](app.js#L1267)
- **Deskripsi:** Auth functions
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:23`](index.html#L23) — Event `onclick`
    `<button id="btnLoginPanitia" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8`

<a id="closeloginmodal"></a>
#### `closeLoginModal()`

- **Definisi:** [`app.js:1274`](app.js#L1274)
- **Deskripsi:** Menutup modal dialog login PIN panitia.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:646`](index.html#L646) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeLoginModal()">Batal</button>`
  - [`app.js:1284`](app.js#L1284) — di dalam fungsi `verifyAdminPin()`
    `closeLoginModal();`

<a id="verifyadminpin"></a>
#### `verifyAdminPin()`

- **Definisi:** [`app.js:1278`](app.js#L1278)
- **Deskripsi:** Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif penuh.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:647`](index.html#L647) — Event `onclick`
    `<button class="btn btn-primary" onclick="verifyAdminPin()">Masuk</button>`
- **Memanggil Fungsi Internal:** [`closeLoginModal()`](#closeloginmodal), [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="logoutadmin"></a>
#### `logoutAdmin()`

- **Definisi:** [`app.js:1294`](app.js#L1294)
- **Deskripsi:** Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (read-only).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:24`](index.html#L24) — Event `onclick`
    `<button id="btnLogoutPanitia" class="btn btn-outline" style="display: none; padding: 0.25rem 0.75rem`
- **Memanggil Fungsi Internal:** [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="updateauthui"></a>
#### `updateAuthUI()`

- **Definisi:** [`app.js:1433`](app.js#L1433)
- **Deskripsi:** Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock, dan form interaktif.
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:731`](app.js#L731) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateAuthUI();`
  - [`app.js:1018`](app.js#L1018) — di dalam fungsi `saveState()`
    `updateAuthUI();`
  - [`app.js:1285`](app.js#L1285) — di dalam fungsi `verifyAdminPin()`
    `updateAuthUI();`
  - [`app.js:1297`](app.js#L1297) — di dalam fungsi `logoutAdmin()`
    `updateAuthUI();`
  - [`app.js:1383`](app.js#L1383) — di dalam fungsi `toggleRegistrationStatus()`
    `updateAuthUI();`
  - [`app.js:1428`](app.js#L1428) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `updateAuthUI();`
  - [`app.js:3041`](app.js#L3041) — di dalam fungsi `toggleLockMLBBGroup()`
    `updateAuthUI();`
  - [`app.js:3122`](app.js#L3122) — di dalam fungsi `proceedToMLBBStage2()`
    `updateAuthUI();`
  - [`app.js:3135`](app.js#L3135) — di dalam fungsi `resetMLBBToStage1()`
    `updateAuthUI();`
  - [`app.js:3178`](app.js#L3178) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `updateAuthUI();`
  - [`app.js:3200`](app.js#L3200) — di dalam fungsi `toggleLockMCGGLobbies()`
    `updateAuthUI();`
  - [`app.js:5356`](app.js#L5356) — cakupan global / event handler
    `updateAuthUI();`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui)

---

### ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine)

<a id="getverifiedmlbbteams"></a>
#### `getVerifiedMLBBTeams()`

- **Definisi:** [`app.js:2944`](app.js#L2944)
- **Deskripsi:** TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:2956`](app.js#L2956) — di dalam fungsi `getActiveMLBBFormat()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:3291`](app.js#L3291) — di dalam fungsi `generateBracket()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:3418`](app.js#L3418) — di dalam fungsi `generateGroupStage()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`functional_tests.js:568`](functional_tests.js#L568) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMLBBTeams()'), 'Harus ada fungsi getVerifiedMLBBTeams()`

<a id="getactivemlbbformat"></a>
#### `getActiveMLBBFormat()`

- **Definisi:** [`app.js:2952`](app.js#L2952)
- **Deskripsi:** Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N >= 12 tim).
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3426`](app.js#L3426) — di dalam fungsi `generateGroupStage()`
    `const activeFormat = getActiveMLBBFormat();`
  - [`functional_tests.js:569`](functional_tests.js#L569) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getActiveMLBBFormat()'), 'Harus ada fungsi getActiveMLBBFormat()')`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="rendercurrentmlbbformat"></a>
#### `renderCurrentMLBBFormat()`

- **Definisi:** [`app.js:2981`](app.js#L2981)
- **Titik Pemanggilan (17 lokasi):**
  - [`app.js:745`](app.js#L745) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1287`](app.js#L1287) — di dalam fungsi `verifyAdminPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1299`](app.js#L1299) — di dalam fungsi `logoutAdmin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1384`](app.js#L1384) — di dalam fungsi `toggleRegistrationStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1609`](app.js#L1609) — di dalam fungsi `switchTab()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2435`](app.js#L2435) — di dalam fungsi `setParticipantStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2492`](app.js#L2492) — di dalam fungsi `deleteParticipant()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2707`](app.js#L2707) — di dalam fungsi `saveParticipantEdit()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2978`](app.js#L2978) — di dalam fungsi `changeTournamentFormat()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3042`](app.js#L3042) — di dalam fungsi `toggleLockMLBBGroup()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3123`](app.js#L3123) — di dalam fungsi `proceedToMLBBStage2()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3136`](app.js#L3136) — di dalam fungsi `resetMLBBToStage1()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3177`](app.js#L3177) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `renderCurrentMLBBFormat();`
  - [`app.js:5327`](app.js#L5327) — di dalam fungsi `loadSampleData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:5341`](app.js#L5341) — di dalam fungsi `clearAllData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:5358`](app.js#L5358) — cakupan global / event handler
    `renderCurrentMLBBFormat();`
  - [`functional_tests.js:1012`](functional_tests.js#L1012) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(toggleBody.includes('renderCurrentMLBBFormat()'), 'toggleRegistrationStatus harus memanggil r`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="togglelockmlbbgroup"></a>
#### `toggleLockMLBBGroup()`

- **Definisi:** [`app.js:3026`](app.js#L3026)
- **Deskripsi:** 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:418`](index.html#L418) — Event `onclick`
    `<button id="btnLockMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
  - [`functional_tests.js:947`](functional_tests.js#L947) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('toggleLockMLBBGroup() {') && appCode.includes('if (!isRegistrationClosed)')`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="isallmlbbgroupmatchesfinished"></a>
#### `isAllMLBBGroupMatchesFinished()`

- **Definisi:** [`app.js:3046`](app.js#L3046)
- **Deskripsi:** Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan memiliki pemenang.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3107`](app.js#L3107) — di dalam fungsi `proceedToMLBBStage2()`
    `if (!isAllMLBBGroupMatchesFinished()) {`
  - [`functional_tests.js:744`](functional_tests.js#L744) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function isAllMLBBGroupMatchesFinished()'), 'Harus ada fungsi isAllMLBBGrou`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="evaluatemlbbtiebreaker"></a>
#### `evaluateMLBBTieBreaker()`

- **Definisi:** [`app.js:3057`](app.js#L3057)
- **Deskripsi:** Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosan babak Playoff.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3111`](app.js#L3111) — di dalam fungsi `proceedToMLBBStage2()`
    `if (evaluateMLBBTieBreaker()) {`
  - [`functional_tests.js:751`](functional_tests.js#L751) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function evaluateMLBBTieBreaker()'), 'Harus ada fungsi evaluateMLBBTieBreak`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal)

<a id="resolvemlbbtiebreaker"></a>
#### `resolveMLBBTieBreaker(winnerTeam)`

- **Definisi:** [`app.js:3082`](app.js#L3082)
- **Deskripsi:** Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan +1 poin penentu ke klasemen.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3704`](app.js#L3704) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:3705`](app.js#L3705) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`functional_tests.js:752`](functional_tests.js#L752) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resolveMLBBTieBreaker('), 'Harus ada fungsi resolveMLBBTieBreaker'`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="proceedtomlbbstage2"></a>
#### `proceedToMLBBStage2()`

- **Definisi:** [`app.js:3101`](app.js#L3101)
- **Deskripsi:** Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Bagan Playoff).
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:419`](index.html#L419) — Event `onclick`
    `<button id="btnProceedMLBBStage2" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`app.js:3960`](app.js#L3960) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: var(--`
  - [`functional_tests.js:745`](functional_tests.js#L745) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function proceedToMLBBStage2()'), 'Harus ada fungsi proceedToMLBBStage2');`
  - [`functional_tests.js:948`](functional_tests.js#L948) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('proceedToMLBBStage2() {') && appCode.includes('if (!isRegistrationClosed)')`
- **Memanggil Fungsi Internal:** [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`renderGroupStageUI()`](#rendergroupstageui), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resetmlbbtostage1"></a>
#### `resetMLBBToStage1()`

- **Definisi:** [`app.js:3128`](app.js#L3128)
- **Deskripsi:** Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor jika diperlukan.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:420`](index.html#L420) — Event `onclick`
    `<button id="btnResetMLBBStage1" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`functional_tests.js:746`](functional_tests.js#L746) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMLBBToStage1()'), 'Harus ada fungsi resetMLBBToStage1');`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resettotalmlbbgroupandbracket"></a>
#### `resetTotalMLBBGroupAndBracket()`

- **Definisi:** [`app.js:3140`](app.js#L3140)
- **Deskripsi:** Mereset total pembagian grup, jadwal, skor match, dan bagan playoff MLBB ke kondisi awal belum diundi.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:421`](index.html#L421) — Event `onclick`
    `<button id="btnResetTotalMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5r`
  - [`functional_tests.js:937`](functional_tests.js#L937) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetTotalMLBBGroupAndBracket()'), 'Harus memiliki fungsi resetTot`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="generatebracket"></a>
#### `generateBracket(doShuffle = false)`

- **Definisi:** [`app.js:3281`](app.js#L3281)
- **Deskripsi:** --- KNOCKOUT BRACKET ---
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:409`](index.html#L409) — Event `onchange`
    `<select id="bracketSize" onchange="generateBracket()" style="padding: 0.5rem 0.8rem; font-size: 0.85`
  - [`app.js:2971`](app.js#L2971) — di dalam fungsi `changeTournamentFormat()`
    `generateBracket(false);`
  - [`app.js:3017`](app.js#L3017) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateBracket(true);`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="renderbracket"></a>
#### `renderBracket()`

- **Definisi:** [`app.js:3354`](app.js#L3354)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:2998`](app.js#L2998) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderBracket();`
  - [`app.js:3287`](app.js#L3287) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:3331`](app.js#L3331) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:3351`](app.js#L3351) — di dalam fungsi `pickWinner()`
    `renderBracket();`
- **Memanggil Fungsi Internal:** [`pickWinner()`](#pickwinner)

<a id="generategroupstage"></a>
#### `generateGroupStage(doShuffle = false)`

- **Definisi:** [`app.js:3417`](app.js#L3417)
- **Deskripsi:** --- DINAMIS GROUP STAGE & PLAYOFF LOGIC ---
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:2975`](app.js#L2975) — di dalam fungsi `changeTournamentFormat()`
    `generateGroupStage(false);`
  - [`app.js:3019`](app.js#L3019) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateGroupStage(true);`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="initgroupplayoff"></a>
#### `initGroupPlayoff()`

- **Definisi:** [`app.js:3462`](app.js#L3462)
- **Deskripsi:** Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seeding Juara vs Runner-up).
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:799`](app.js#L799) — di dalam fungsi `cleanOrphanedTournamentData()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff();`
  - [`app.js:3095`](app.js#L3095) — di dalam fungsi `resolveMLBBTieBreaker()`
    `initGroupPlayoff();`
  - [`app.js:3119`](app.js#L3119) — di dalam fungsi `proceedToMLBBStage2()`
    `initGroupPlayoff();`
  - [`app.js:3445`](app.js#L3445) — di dalam fungsi `generateGroupStage()`
    `initGroupPlayoff();`
  - [`app.js:3458`](app.js#L3458) — di dalam fungsi `updateGroupRecord()`
    `initGroupPlayoff();`
  - [`app.js:3775`](app.js#L3775) — di dalam fungsi `setGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:3832`](app.js#L3832) — di dalam fungsi `resetGroupMatchScore()`
    `initGroupPlayoff();`

<a id="pickgroupplayoffwinner"></a>
#### `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:3524`](app.js#L3524)
- **Deskripsi:** Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya ke ronde berikutnya.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4004`](app.js#L4004) — di dalam fungsi `renderGroupPlayoffTree()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:4008`](app.js#L4008) — di dalam fungsi `renderGroupPlayoffTree()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree)

<a id="promptplayoffmvp"></a>
#### `promptPlayoffMVP(rIdx, mIdx)`

- **Definisi:** [`app.js:3545`](app.js#L3545)
- **Deskripsi:** Menampilkan dialog interaktif untuk memilih MVP pertandingan playoff MLBB.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4019`](app.js#L4019) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="font-size:0.68rem; padding:0.15rem 0.5rem;" onclick="promptPl`
  - [`functional_tests.js:784`](functional_tests.js#L784) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptPlayoffMVP('), 'Harus memiliki promptPlayoffMVP');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree)

<a id="rendergroupstageui"></a>
#### `renderGroupStageUI()`

- **Definisi:** [`app.js:3584`](app.js#L3584)
- **Titik Pemanggilan (8 lokasi):**
  - [`app.js:3003`](app.js#L3003) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderGroupStageUI();`
  - [`app.js:3096`](app.js#L3096) — di dalam fungsi `resolveMLBBTieBreaker()`
    `renderGroupStageUI();`
  - [`app.js:3114`](app.js#L3114) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupStageUI();`
  - [`app.js:3446`](app.js#L3446) — di dalam fungsi `generateGroupStage()`
    `renderGroupStageUI();`
  - [`app.js:3459`](app.js#L3459) — di dalam fungsi `updateGroupRecord()`
    `renderGroupStageUI();`
  - [`app.js:3776`](app.js#L3776) — di dalam fungsi `setGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:3790`](app.js#L3790) — di dalam fungsi `setGroupMatchMVP()`
    `renderGroupStageUI();`
  - [`app.js:3833`](app.js#L3833) — di dalam fungsi `resetGroupMatchScore()`
    `renderGroupStageUI();`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker)

<a id="getgroupfixtures"></a>
#### `getGroupFixtures(gName)`

- **Definisi:** [`app.js:3725`](app.js#L3725)
- **Deskripsi:** --- BAGAN PERTANDINGAN FASE GRUP (ROUND-ROBIN BO3) ---
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3050`](app.js#L3050) — di dalam fungsi `isAllMLBBGroupMatchesFinished()`
    `const fixtures = getGroupFixtures(gName);`
  - [`app.js:3874`](app.js#L3874) — di dalam fungsi `renderGroupFixturesUI()`
    `const fixtures = getGroupFixtures(gName);`
  - [`functional_tests.js:667`](functional_tests.js#L667) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getGroupFixtures('), 'app.js harus memiliki generator jadwal getGr`

<a id="recalculategroupstandingsfromfixtures"></a>
#### `recalculateGroupStandingsFromFixtures()`

- **Definisi:** [`app.js:3836`](app.js#L3836)
- **Deskripsi:** Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan seluruh hasil pertandingan BO3.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3773`](app.js#L3773) — di dalam fungsi `setGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:3830`](app.js#L3830) — di dalam fungsi `resetGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`

<a id="rendergroupfixturesui"></a>
#### `renderGroupFixturesUI()`

- **Definisi:** [`app.js:3862`](app.js#L3862)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3606`](app.js#L3606) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:3720`](app.js#L3720) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`functional_tests.js:669`](functional_tests.js#L669) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderGroupFixturesUI('), 'app.js harus memiliki renderer bagan re`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures), [`escapeHtml()`](#escapehtml), [`setGroupMatchScore()`](#setgroupmatchscore), [`resetGroupMatchScore()`](#resetgroupmatchscore), [`promptGroupMatchMVP()`](#promptgroupmatchmvp)

<a id="rendergroupplayofftree"></a>
#### `renderGroupPlayoffTree()`

- **Definisi:** [`app.js:3943`](app.js#L3943)
- **Deskripsi:** Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau status terkunci jika grup belum selesai.
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:3542`](app.js#L3542) — di dalam fungsi `pickGroupPlayoffWinner()`
    `renderGroupPlayoffTree();`
  - [`app.js:3581`](app.js#L3581) — di dalam fungsi `promptPlayoffMVP()`
    `renderGroupPlayoffTree();`
  - [`app.js:3607`](app.js#L3607) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:3721`](app.js#L3721) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
- **Memanggil Fungsi Internal:** [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`pickGroupPlayoffWinner()`](#pickgroupplayoffwinner), [`escapeHtml()`](#escapehtml), [`promptPlayoffMVP()`](#promptplayoffmvp)

<a id="attemptshufflemlbb"></a>
#### `attemptShuffleMLBB()`

- **Definisi:** [`functional_tests.js:909`](functional_tests.js#L909)
- **Deskripsi:** Saat pendaftaran dibuka: tombol acak harus ditolak
- **Titik Pemanggilan (2 lokasi):**
  - [`functional_tests.js:918`](functional_tests.js#L918) — di dalam fungsi `runLiveIntegrationTests()`
    `assert.strictEqual(attemptShuffleMLBB(), 'BLOCKED_REG_OPEN', 'Acak MLBB harus diblokir saat pendafta`
  - [`functional_tests.js:923`](functional_tests.js#L923) — di dalam fungsi `runLiveIntegrationTests()`
    `assert.strictEqual(attemptShuffleMLBB(), 'SHUFFLE_SUCCESS', 'Acak MLBB harus aktif setelah pendaftar`

---

### 🗄️ Google Sheets Schema & Master Data

<a id="gettargetspreadsheet"></a>
#### `getTargetSpreadsheet()`

- **Definisi:** [`google_apps_script.js:38`](google_apps_script.js#L38)
- **Deskripsi:** Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet berdasarkan TARGET_SPREADSHEET_ID untuk testing/lokal, atau fallback ke active spreadsheet jika container-bound. /
- **Titik Pemanggilan (5 lokasi):**
  - [`google_apps_script.js:655`](google_apps_script.js#L655) — di dalam fungsi `doGet()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:980`](google_apps_script.js#L980) — di dalam fungsi `doPost()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1558`](google_apps_script.js#L1558) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `if (!ss) ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1793`](google_apps_script.js#L1793) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `var ss = getTargetSpreadsheet();`
  - [`functional_tests.js:451`](functional_tests.js#L451) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getTargetSpreadsheet('), 'Harus memiliki fungsi getTargetSpreadshe`

<a id="ensurerelationalsheetsexist"></a>
#### `ensureRelationalSheetsExist(ss)`

- **Definisi:** [`google_apps_script.js:313`](google_apps_script.js#L313)
- **Deskripsi:** Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Parent Tim) 2. 'MLBB - Peserta' (Child Roster Anggota) 3. 'Pendaftaran MCGG' (Pemain Solo) /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:656`](google_apps_script.js#L656) — di dalam fungsi `doGet()`
    `ensureRelationalSheetsExist(ss);`
  - [`google_apps_script.js:981`](google_apps_script.js#L981) — di dalam fungsi `doPost()`
    `var sheets = ensureRelationalSheetsExist(ss);`
  - [`functional_tests.js:452`](functional_tests.js#L452) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function ensureRelationalSheetsExist('), 'Harus memiliki fungsi ensureRelat`

<a id="getmlbbtimlisting"></a>
#### `getMlbbTimListing(ss)`

- **Definisi:** [`google_apps_script.js:361`](google_apps_script.js#L361)
- **Deskripsi:** Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' Aturan: - Deduplikasi berdasarkan 'Nama Tim' (case-insensitive & trimmed). - Prioritas: utamakan baris yang Status Verifikasi == 'VERIFIED'. Jika status sama, ambil baris paling bawah (terbaru). - Urutkan A-Z berdasarkan Nama Tim. - Simpan rowNumber asli dari Google Sheets untuk referensi update. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:666`](google_apps_script.js#L666) — di dalam fungsi `doGet()`
    `var mlbbTimList = getMlbbTimListing(ss);`
  - [`google_apps_script.js:1259`](google_apps_script.js#L1259) — di dalam fungsi `doPost()`
    `var timListing = getMlbbTimListing(ss);`
  - [`functional_tests.js:457`](functional_tests.js#L457) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMlbbTimListing('), 'Harus ada fungsi getMlbbTimListing');`

<a id="getmlbbpesertalisting"></a>
#### `getMlbbPesertaListing(ss)`

- **Definisi:** [`google_apps_script.js:452`](google_apps_script.js#L452)
- **Deskripsi:** Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Peserta' Kolom: Timestamp, Nama Tim, Role, Nama Lengkap, NIP Pegawai, Nickname Game (IGN), Game ID & Server, Status Pegawai, Link ID Card Aturan: - Deduplikasi berdasarkan NIP Pegawai (jika NIP kosong/-, gunakan fallback key Nama Tim + Role). - Nickname Game (IGN) diambil langsung utuh dari cell (jangan pernah di-split dengan koma!). - Simpan rowNumber asli masing-masing peserta. /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:667`](google_apps_script.js#L667) — di dalam fungsi `doGet()`
    `var mlbbPesertaList = getMlbbPesertaListing(ss);`
  - [`functional_tests.js:458`](functional_tests.js#L458) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMlbbPesertaListing('), 'Harus ada fungsi getMlbbPesertaListing'`

<a id="getmcgglisting"></a>
#### `getMcggListing(ss)`

- **Definisi:** [`google_apps_script.js:520`](google_apps_script.js#L520)
- **Deskripsi:** Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan: - Deduplikasi berdasarkan NIP Pegawai (prioritaskan VERIFIED, atau baris terbaru jika status sama). - Urutkan A-Z berdasarkan Nama Lengkap Pemain. - Simpan rowNumber asli. /
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:826`](google_apps_script.js#L826) — di dalam fungsi `doGet()`
    `var mcggList = getMcggListing(ss);`
  - [`google_apps_script.js:1442`](google_apps_script.js#L1442) — di dalam fungsi `doPost()`
    `var mcggListing = getMcggListing(ss);`
  - [`functional_tests.js:459`](functional_tests.js#L459) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMcggListing('), 'Harus ada fungsi getMcggListing');`

<a id="getorcreatesheet"></a>
#### `getOrCreateSheet(ss, sheetName)`

- **Definisi:** [`google_apps_script.js:1545`](google_apps_script.js#L1545)
- **Deskripsi:** Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncdedicatedtournamentsheets"></a>
#### `syncDedicatedTournamentSheets(ss, payload)`

- **Definisi:** [`google_apps_script.js:1557`](google_apps_script.js#L1557)
- **Deskripsi:** Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah Dipanggil otomatis saat action === 'SAVE_CONFIG' atau 'CREATE_TOURNAMENT_SHEETS' /
- **Titik Pemanggilan (7 lokasi):**
  - [`google_apps_script.js:1072`](google_apps_script.js#L1072) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1085`](google_apps_script.js#L1085) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1781`](google_apps_script.js#L1781) — di dalam fungsi `syncListBagan()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData, mcggLobbies: mcggData });`
  - [`google_apps_script.js:1785`](google_apps_script.js#L1785) — di dalam fungsi `syncListPoint()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData });`
  - [`google_apps_script.js:1789`](google_apps_script.js#L1789) — di dalam fungsi `syncListPointAndCommanderMCGG()`
    `return syncDedicatedTournamentSheets(ss, { mcggLobbies: mcggData });`
  - [`google_apps_script.js:1816`](google_apps_script.js#L1816) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `syncDedicatedTournamentSheets(ss, payload);`
  - [`functional_tests.js:775`](functional_tests.js#L775) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function syncDedicatedTournamentSheets('), 'Harus memiliki fungsi syncDedic`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`fmtRank()`](#fmtrank)

<a id="createorupdatealltournamentsheets"></a>
#### `createOrUpdateAllTournamentSheets(groupStageData, mcggLobbies)`

- **Definisi:** [`google_apps_script.js:1792`](google_apps_script.js#L1792)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:115`](functional_tests.js#L115) — pada skenario pengujian
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
  - [`google_apps_script.js:1023`](google_apps_script.js#L1023) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:663`](google_apps_script.js#L663) — di dalam fungsi `doGet()`
    `var mainFolder = getOrCreateUploadFolder();`
  - [`google_apps_script.js:1010`](google_apps_script.js#L1010) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1248`](google_apps_script.js#L1248) — di dalam fungsi `doPost()`
    `var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);`
  - [`google_apps_script.js:1428`](google_apps_script.js#L1428) — di dalam fungsi `doPost()`
    `var mcggFolder = getOrCreateSubFolder(mainFolder, mcggFolderName);`
- **Memanggil Fungsi Internal:** [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing)

<a id="relinkexistingfailedidcards"></a>
#### `relinkExistingFailedIDCards()`

- **Definisi:** [`google_apps_script.js:194`](google_apps_script.js#L194)
- **Deskripsi:** FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ini jika Anda melihat tulisan 'Link ID Card: Gagal: Exception: Access denied: DriveApp.' di spreadsheet. Fungsi ini akan: 1. Memeriksa Google Drive apakah berkas foto pemain sudah ada. 2. Jika ada, mengganti teks gagal menjadi link Google Drive yang benar. 3. Jika berkas belum ada, membersihkan teks gagal agar rapi. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing)

<a id="savebase64image"></a>
#### `saveBase64Image(base64Data, fileName, targetFolder)`

- **Definisi:** [`google_apps_script.js:1012`](google_apps_script.js#L1012)
- **Titik Pemanggilan (4 lokasi):**
  - [`google_apps_script.js:1253`](google_apps_script.js#L1253) — di dalam fungsi `doPost()`
    `logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);`
  - [`google_apps_script.js:1300`](google_apps_script.js#L1300) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1381`](google_apps_script.js#L1381) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1434`](google_apps_script.js#L1434) — di dalam fungsi `doPost()`
    `mcggIdCardUrl = saveBase64Image(mcggCard, "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", `

<a id="fmtrank"></a>
#### `fmtRank(r)`

- **Definisi:** [`google_apps_script.js:1720`](google_apps_script.js#L1720)
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:1752`](google_apps_script.js#L1752) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r1),`
  - [`google_apps_script.js:1754`](google_apps_script.js#L1754) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r2),`
  - [`google_apps_script.js:1756`](google_apps_script.js#L1756) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r3),`

<a id="synclistbagan"></a>
#### `syncListBagan(ss, groupData, mcggData)`

- **Definisi:** [`google_apps_script.js:1780`](google_apps_script.js#L1780)
- **Deskripsi:** Wrapper kompatibilitas untuk pemicu manual / lama /
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:112`](functional_tests.js#L112) — pada skenario pengujian
    `assert(gasCode.includes('function syncListBagan('), 'Harus memiliki fungsi syncListBagan');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpoint"></a>
#### `syncListPoint(ss, groupData)`

- **Definisi:** [`google_apps_script.js:1784`](google_apps_script.js#L1784)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:113`](functional_tests.js#L113) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPoint('), 'Harus memiliki fungsi syncListPoint');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpointandcommandermcgg"></a>
#### `syncListPointAndCommanderMCGG(ss, mcggData)`

- **Definisi:** [`google_apps_script.js:1788`](google_apps_script.js#L1788)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:114`](functional_tests.js#L114) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPointAndCommanderMCGG('), 'Harus memiliki fungsi syncListP`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

---

### 🌐 Web API & Endpoint Webhook

<a id="doget"></a>
#### `doGet(e)`

- **Definisi:** [`google_apps_script.js:653`](google_apps_script.js#L653)
- **Deskripsi:** 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMlbbPesertaListing()`](#getmlbbpesertalisting), [`getMcggListing()`](#getmcgglisting)

<a id="dopost"></a>
#### `doPost(e)`

- **Definisi:** [`google_apps_script.js:960`](google_apps_script.js#L960)
- **Deskripsi:** 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:524`](functional_tests.js#L524) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`getOrCreateSubFolder()`](#getorcreatesubfolder), [`saveBase64Image()`](#savebase64image), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMcggListing()`](#getmcgglisting)

---

