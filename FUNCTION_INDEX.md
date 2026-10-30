# 📖 INDEKS FUNGSI DAN PETA PEMANGGILAN KODE (FUNCTION MAP)
> **Turnamen E-Sports Yokke Squad 2026**  
> *Dokumen ini dibuat otomatis oleh script `scripts/generate_function_index.js`. Pembaruan dilakukan secara otomatis setiap kali ada perubahan pada source code.*

---

## 📊 Ringkasan Eksekutif
- **Total Fungsi Terdaftar:** 264 fungsi (230 di `app.js`, 21 di `google_apps_script.js`)
- **Total Titik Pemanggilan (Call Sites):** 1061 titik pemanggilan teridentifikasi
- **Terakhir Diperbarui:** 30/10/2026, 07.36.37 WIB
- **Cara Memperbarui Otomatis:**
  - Sekali jalan: `node scripts/generate_function_index.js`
  - Mode Pantau (Realtime Auto-Update saat simpan kode): `node scripts/generate_function_index.js --watch`
  - Bersamaan saat test: `node tests/functional_tests.js`

---

## 📑 Daftar Isi Modul
1. [♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) (47 fungsi)](#turnamen-mcgg-klasemen-undian-commander-penalti)
2. [⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) (43 fungsi)](#turnamen-mlbb-bagan-grup-playoff-engine)
3. [👥 Manajemen Peserta & Roster (15 fungsi)](#manajemen-peserta-roster)
4. [📦 Modul Aplikasi Umum (79 fungsi)](#modul-aplikasi-umum)
5. [☁️ Sinkronisasi Google Sheets & State Storage (6 fungsi)](#sinkronisasi-google-sheets-state-storage)
6. [🆔 Modal Dialog & Bukti ID Card (28 fungsi)](#modal-dialog-bukti-id-card)
7. [🔧 Helper & UI Utility (13 fungsi)](#helper-ui-utility)
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
| 14 | [**`getTeamDept()`**](#getteamdept) | [app.js:182](app.js#L182) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 4x |
| 15 | [**`isTeamInvited()`**](#isteaminvited) | [app.js:204](app.js#L204) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 5x |
| 16 | [**`toggleInvitedTeam()`**](#toggleinvitedteam) | [app.js:212](app.js#L212) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleInvitedTeam | 2x |
| 17 | [**`showGlobalLoader()`**](#showgloballoader) | [app.js:247](app.js#L247) | 📦 Modul Aplikasi Umum | Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets) | 1x |
| 18 | [**`hideGlobalLoader()`**](#hidegloballoader) | [app.js:261](app.js#L261) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hideGlobalLoader | 4x |
| 19 | [**`saveStageStateLocal()`**](#savestagestatelocal) | [app.js:426](app.js#L426) | ☁️ Sinkronisasi Google Sheets & State Storage | Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM,... | 12x |
| 20 | [**`getCommanderFormattedName()`**](#getcommanderformattedname) | [app.js:482](app.js#L482) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika t... | 5x |
| 21 | [**`renderCommanderCirclesHtml()`**](#rendercommandercircleshtml) | [app.js:493](app.js#L493) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen | 3x |
| 22 | [**`renderCommanderCardVisualHtml()`**](#rendercommandercardvisualhtml) | [app.js:522](app.js#L522) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian | 1x |
| 23 | [**`compressImage()`**](#compressimage) | [app.js:702](app.js#L702) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compressor: compresses smartphone photos using HTML5 Canv... | 3x |
| 24 | [**`compressImageFile()`**](#compressimagefile) | [app.js:761](app.js#L761) | 🆔 Modal Dialog & Bukti ID Card | Client-side image compression helper (Canvas <= 1200px, quality 0.75) | 3x |
| 25 | [**`showToast()`**](#showtoast) | [app.js:768](app.js#L768) | 🔧 Helper & UI Utility | TOAST NOTIFICATIONS (CYBERPUNK DARK) | 28x |
| 26 | [**`openGlossaryModal()`**](#openglossarymodal) | [app.js:801](app.js#L801) | 🆔 Modal Dialog & Bukti ID Card | Modal Glosarium Istilah Turnamen | 1x |
| 27 | [**`closeGlossaryModal()`**](#closeglossarymodal) | [app.js:806](app.js#L806) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeGlossaryModal | 2x |
| 28 | [**`openResetBaganModal()`**](#openresetbaganmodal) | [app.js:812](app.js#L812) | 🆔 Modal Dialog & Bukti ID Card | Modal Reset Bagan dengan Verifikasi Password/PIN | 1x |
| 29 | [**`closeResetBaganModal()`**](#closeresetbaganmodal) | [app.js:821](app.js#L821) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeResetBaganModal | 2x |
| 30 | [**`confirmResetBaganWithPin()`**](#confirmresetbaganwithpin) | [app.js:826](app.js#L826) | 🛡️ Autentikasi & Hak Akses Panitia | Fungsi operasional untuk confirmResetBaganWithPin | 1x |
| 31 | [**`bypassLoaderWithCache()`**](#bypassloaderwithcache) | [app.js:869](app.js#L869) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk bypassLoaderWithCache | 1x |
| 32 | [**`handleParticipantSearch()`**](#handleparticipantsearch) | [app.js:884](app.js#L884) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk handleParticipantSearch | 1x |
| 33 | [**`saveFormDraft()`**](#saveformdraft) | [app.js:892](app.js#L892) | 📦 Modul Aplikasi Umum | AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE) | 1x |
| 34 | [**`restoreFormDraft()`**](#restoreformdraft) | [app.js:948](app.js#L948) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk restoreFormDraft | 2x |
| 35 | [**`clearFormDraft()`**](#clearformdraft) | [app.js:1038](app.js#L1038) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearFormDraft | 1x |
| 36 | [**`handleFormDraftChange()`**](#handleformdraftchange) | [app.js:1045](app.js#L1045) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk handleFormDraftChange | 3x |
| 37 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [app.js:1054](app.js#L1054) | 🔧 Helper & UI Utility | Helper to format Google Drive image URLs into viewable thumbnail image URLs | 9x |
| 38 | [**`getIdCardMap()`**](#getidcardmap) | [app.js:1069](app.js#L1069) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama | 2x |
| 39 | [**`saveIdCardToMap()`**](#saveidcardtomap) | [app.js:1108](app.js#L1108) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasar... | 5x |
| 40 | [**`findIdCardByEmpIdOrName()`**](#findidcardbyempidorname) | [app.js:1126](app.js#L1126) | 🆔 Modal Dialog & Bukti ID Card | Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama p... | 9x |
| 41 | [**`getLogoMap()`**](#getlogomap) | [app.js:1144](app.js#L1144) | 🆔 Modal Dialog & Bukti ID Card | Pemetaan Logo sesuai Nama Tim (MLBB) | 2x |
| 42 | [**`saveLogoToMap()`**](#savelogotomap) | [app.js:1158](app.js#L1158) | 🆔 Modal Dialog & Bukti ID Card | Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasa... | 3x |
| 43 | [**`findLogoByTeamName()`**](#findlogobyteamname) | [app.js:1167](app.js#L1167) | 🆔 Modal Dialog & Bukti ID Card | Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peser... | 7x |
| 44 | [**`autoLinkParticipantsAssets()`**](#autolinkparticipantsassets) | [app.js:1175](app.js#L1175) | 👥 Manajemen Peserta & Roster | Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada | 5x |
| 45 | [**`fetchParticipantsFromGoogleSheet()`**](#fetchparticipantsfromgooglesheet) | [app.js:1210](app.js#L1210) | 👥 Manajemen Peserta & Roster | Fetch registered participants from Google Sheets via doGet Webhook Google S... | 4x |
| 46 | [**`getItemKey()`**](#getitemkey) | [app.js:1236](app.js#L1236) | 📦 Modul Aplikasi Umum | Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name | 2x |
| 47 | [**`cleanOrphanedTournamentData()`**](#cleanorphanedtournamentdata) | [app.js:1473](app.js#L1473) | 📦 Modul Aplikasi Umum | Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup... | 2x |
| 48 | [**`resetCacheAndFollowGSheet()`**](#resetcacheandfollowgsheet) | [app.js:1559](app.js#L1559) | ☁️ Sinkronisasi Google Sheets & State Storage | Reset cache lokal dan ikuti 100% data aktif dari Google Sheets | 1x |
| 49 | [**`saveAllChangesToGoogleSheet()`**](#saveallchangestogooglesheet) | [app.js:1592](app.js#L1592) | ☁️ Sinkronisasi Google Sheets & State Storage | SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS | 1x |
| 50 | [**`syncTournamentSheetsToGSheet()`**](#synctournamentsheetstogsheet) | [app.js:1746](app.js#L1746) | ☁️ Sinkronisasi Google Sheets & State Storage | SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET | 0x |
| 51 | [**`saveState()`**](#savestate) | [app.js:1785](app.js#L1785) | 📦 Modul Aplikasi Umum | Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi ... | 41x |
| 52 | [**`updateCounts()`**](#updatecounts) | [app.js:1797](app.js#L1797) | 📦 Modul Aplikasi Umum | Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status veri... | 7x |
| 53 | [**`formatRuleLine()`**](#formatruleline) | [app.js:1807](app.js#L1807) | 📋 Regulasi Turnamen (Rules Editor) | Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG) | 0x |
| 54 | [**`fetchRulesFromGoogleDoc()`**](#fetchrulesfromgoogledoc) | [app.js:1853](app.js#L1853) | 📋 Regulasi Turnamen (Rules Editor) | Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: t... | 2x |
| 55 | [**`renderRules()`**](#renderrules) | [app.js:1911](app.js#L1911) | 📋 Regulasi Turnamen (Rules Editor) | Fungsi operasional untuk renderRules | 6x |
| 56 | [**`toggleEditRules()`**](#toggleeditrules) | [app.js:1925](app.js#L1925) | 📋 Regulasi Turnamen (Rules Editor) | Membuka/menutup form editor peraturan turnamen khusus panitia. | 3x |
| 57 | [**`saveCustomRules()`**](#savecustomrules) | [app.js:1931](app.js#L1931) | 📋 Regulasi Turnamen (Rules Editor) | Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Goo... | 1x |
| 58 | [**`resetRulesToDefault()`**](#resetrulestodefault) | [app.js:1962](app.js#L1962) | 📋 Regulasi Turnamen (Rules Editor) | Mengembalikan peraturan turnamen ke regulasi default resmi Yokke Squad 2026... | 1x |
| 59 | [**`handleLogoPreview()`**](#handlelogopreview) | [app.js:1972](app.js#L1972) | 🆔 Modal Dialog & Bukti ID Card | Handle Logo Upload and Live Preview | 1x |
| 60 | [**`handleSingleIdCardPreview()`**](#handlesingleidcardpreview) | [app.js:1987](app.js#L1987) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Officials and MCGG | 3x |
| 61 | [**`handlePlayerIdCardPreview()`**](#handleplayeridcardpreview) | [app.js:2009](app.js#L2009) | 🆔 Modal Dialog & Bukti ID Card | Handle Individual ID Card Upload for Each of the 8 Players | 1x |
| 62 | [**`toggleOfficial2Form()`**](#toggleofficial2form) | [app.js:2025](app.js#L2025) | 📦 Modul Aplikasi Umum | Toggle Official 2 Form | 4x |
| 63 | [**`renderPlayersFormInputs()`**](#renderplayersforminputs) | [app.js:2032](app.js#L2032) | 📦 Modul Aplikasi Umum | Generate the 8 players form fields dynamically (Included In-Game Nickname a... | 2x |
| 64 | [**`toggleCategoryForm()`**](#togglecategoryform) | [app.js:2091](app.js#L2091) | 📦 Modul Aplikasi Umum | Switch form between MLBB and MCGG cleanly | 3x |
| 65 | [**`openLoginModal()`**](#openloginmodal) | [app.js:2151](app.js#L2151) | 🛡️ Autentikasi & Hak Akses Panitia | Auth functions | 1x |
| 66 | [**`closeLoginModal()`**](#closeloginmodal) | [app.js:2158](app.js#L2158) | 🛡️ Autentikasi & Hak Akses Panitia | Menutup modal dialog login PIN panitia. | 2x |
| 67 | [**`verifyAdminPin()`**](#verifyadminpin) | [app.js:2162](app.js#L2162) | 🛡️ Autentikasi & Hak Akses Panitia | Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif p... | 1x |
| 68 | [**`logoutAdmin()`**](#logoutadmin) | [app.js:2178](app.js#L2178) | 🛡️ Autentikasi & Hak Akses Panitia | Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (r... | 1x |
| 69 | [**`renderRegistrationUI()`**](#renderregistrationui) | [app.js:2187](app.js#L2187) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderRegistrationUI | 4x |
| 70 | [**`toggleRegistrationStatus()`**](#toggleregistrationstatus) | [app.js:2253](app.js#L2253) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk toggleRegistrationStatus | 5x |
| 71 | [**`resetMCGGPointsAndDraw()`**](#resetmcggpointsanddraw) | [app.js:2274](app.js#L2274) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetMCGGPointsAndDraw | 2x |
| 72 | [**`updateAuthUI()`**](#updateauthui) | [app.js:2317](app.js#L2317) | 🛡️ Autentikasi & Hak Akses Panitia | Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock,... | 14x |
| 73 | [**`switchTab()`**](#switchtab) | [app.js:2497](app.js#L2497) | 🔧 Helper & UI Utility | Navigation Tabs | 5x |
| 74 | [**`openIdCardLightbox()`**](#openidcardlightbox) | [app.js:2515](app.js#L2515) | 🆔 Modal Dialog & Bukti ID Card | Lightbox for Viewing Full ID Card | 3x |
| 75 | [**`closeIdCardLightbox()`**](#closeidcardlightbox) | [app.js:2556](app.js#L2556) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal pop-up lightbox preview ID Card pegawai. | 2x |
| 76 | [**`escapeHtml()`**](#escapehtml) | [app.js:2561](app.js#L2561) | 🔧 Helper & UI Utility | Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dal... | 77x |
| 77 | [**`updateRegistrationDatalists()`**](#updateregistrationdatalists) | [app.js:2573](app.js#L2573) | 📦 Modul Aplikasi Umum | Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit... | 3x |
| 78 | [**`handleTeamNameInput()`**](#handleteamnameinput) | [app.js:2587](app.js#L2587) | 📦 Modul Aplikasi Umum | Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edi... | 2x |
| 79 | [**`handleMcggNameInput()`**](#handlemcggnameinput) | [app.js:2620](app.js#L2620) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fu... | 2x |
| 80 | [**`handleRegister()`**](#handleregister) | [app.js:2653](app.js#L2653) | 👥 Manajemen Peserta & Roster | Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Ca... | 1x |
| 81 | [**`setParticipantStatus()`**](#setparticipantstatus) | [app.js:3193](app.js#L3193) | 👥 Manajemen Peserta & Roster | Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets | 2x |
| 82 | [**`deleteParticipant()`**](#deleteparticipant) | [app.js:3234](app.js#L3234) | 👥 Manajemen Peserta & Roster | Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat k... | 1x |
| 83 | [**`filterList()`**](#filterlist) | [app.js:3281](app.js#L3281) | 🔧 Helper & UI Utility | Memfilter tabel daftar peserta berdasarkan input pencarian, kategori (MLBB/... | 3x |
| 84 | [**`openEditParticipantModal()`**](#openeditparticipantmodal) | [app.js:3289](app.js#L3289) | 🆔 Modal Dialog & Bukti ID Card | ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION | 1x |
| 85 | [**`closeEditParticipantModal()`**](#closeeditparticipantmodal) | [app.js:3387](app.js#L3387) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog edit peserta. | 3x |
| 86 | [**`handleEditLogoUpload()`**](#handleeditlogoupload) | [app.js:3392](app.js#L3392) | 🆔 Modal Dialog & Bukti ID Card | Handle logo upload in Admin Edit modal | 1x |
| 87 | [**`handleEditRosterIdCardUpload()`**](#handleeditrosteridcardupload) | [app.js:3408](app.js#L3408) | 🆔 Modal Dialog & Bukti ID Card | Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedi... | 1x |
| 88 | [**`saveParticipantEdit()`**](#saveparticipantedit) | [app.js:3419](app.js#L3419) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk saveParticipantEdit | 1x |
| 89 | [**`viewRosterDetail()`**](#viewrosterdetail) | [app.js:3543](app.js#L3543) | 👥 Manajemen Peserta & Roster | Modal Detail Roster Lengkap & ID Card Per-Pemain | 1x |
| 90 | [**`closeDetailModal()`**](#closedetailmodal) | [app.js:3602](app.js#L3602) | 🆔 Modal Dialog & Bukti ID Card | Menutup modal dialog rincian roster tim dan galeri ID Card. | 1x |
| 91 | [**`renderParticipants()`**](#renderparticipants) | [app.js:3607](app.js#L3607) | 👥 Manajemen Peserta & Roster | Render Participant Table (Featuring Nickname, ID Card count per-player, and... | 13x |
| 92 | [**`getVerifiedMLBBTeams()`**](#getverifiedmlbbteams) | [app.js:3750](app.js#L3750) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE | 5x |
| 93 | [**`getActiveMLBBFormat()`**](#getactivemlbbformat) | [app.js:3758](app.js#L3758) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N... | 2x |
| 94 | [**`changeTournamentFormat()`**](#changetournamentformat) | [app.js:3777](app.js#L3777) | 🔧 Helper & UI Utility | Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP... | 1x |
| 95 | [**`renderCurrentMLBBFormat()`**](#rendercurrentmlbbformat) | [app.js:3793](app.js#L3793) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderCurrentMLBBFormat | 17x |
| 96 | [**`shuffleAndGenerateTournament()`**](#shuffleandgeneratetournament) | [app.js:3819](app.js#L3819) | 📦 Modul Aplikasi Umum | Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum di... | 1x |
| 97 | [**`toggleLockMLBBGroup()`**](#togglelockmlbbgroup) | [app.js:3838](app.js#L3838) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE) | 1x |
| 98 | [**`isAllMLBBGroupMatchesFinished()`**](#isallmlbbgroupmatchesfinished) | [app.js:3858](app.js#L3858) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan m... | 2x |
| 99 | [**`evaluateMLBBTieBreaker()`**](#evaluatemlbbtiebreaker) | [app.js:3869](app.js#L3869) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosa... | 2x |
| 100 | [**`resolveMLBBTieBreaker()`**](#resolvemlbbtiebreaker) | [app.js:3894](app.js#L3894) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan... | 3x |
| 101 | [**`proceedToMLBBStage2()`**](#proceedtomlbbstage2) | [app.js:3913](app.js#L3913) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Ba... | 3x |
| 102 | [**`shuffleMLBBPlayoffBracket()`**](#shufflemlbbplayoffbracket) | [app.js:3940](app.js#L3940) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk shuffleMLBBPlayoffBracket | 2x |
| 103 | [**`findTeamGroupAndRank()`**](#findteamgroupandrank) | [app.js:3973](app.js#L3973) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findTeamGroupAndRank | 5x |
| 104 | [**`testMLBBPlayoffWithCurrentStandings()`**](#testmlbbplayoffwithcurrentstandings) | [app.js:3985](app.js#L3985) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBPlayoffWithCurrentStandings | 4x |
| 105 | [**`openTestDrawModal()`**](#opentestdrawmodal) | [app.js:4171](app.js#L4171) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openTestDrawModal | 1x |
| 106 | [**`closeTestDrawModal()`**](#closetestdrawmodal) | [app.js:4184](app.js#L4184) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeTestDrawModal | 3x |
| 107 | [**`testMLBBGroupAllocationDraw()`**](#testmlbbgroupallocationdraw) | [app.js:4189](app.js#L4189) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk testMLBBGroupAllocationDraw | 2x |
| 108 | [**`resetMLBBToStage1()`**](#resetmlbbtostage1) | [app.js:4259](app.js#L4259) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor ji... | 2x |
| 109 | [**`resetTotalMLBBGroupAndBracket()`**](#resettotalmlbbgroupandbracket) | [app.js:4271](app.js#L4271) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk resetTotalMLBBGroupAndBracket | 1x |
| 110 | [**`toggleLockMCGGLobbies()`**](#togglelockmcgglobbies) | [app.js:4290](app.js#L4290) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM... | 1x |
| 111 | [**`validateMCGGDuplicateCommander()`**](#validatemcggduplicatecommander) | [app.js:4312](app.js#L4312) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2) | 3x |
| 112 | [**`saveTournamentStateOnly()`**](#savetournamentstateonly) | [app.js:4335](app.js#L4335) | ☁️ Sinkronisasi Google Sheets & State Storage | 4. SIMPAN CEPAT KHUSUS STATE BAGAN & POIN (1 REQUEST RINGAN) | 18x |
| 113 | [**`generateBracket()`**](#generatebracket) | [app.js:4391](app.js#L4391) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- KNOCKOUT BRACKET --- | 3x |
| 114 | [**`pickWinner()`**](#pickwinner) | [app.js:4444](app.js#L4444) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk pickWinner | 2x |
| 115 | [**`renderBracket()`**](#renderbracket) | [app.js:4464](app.js#L4464) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderBracket | 4x |
| 116 | [**`allocateMLBBGroups()`**](#allocatemlbbgroups) | [app.js:4539](app.js#L4539) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi)... | 3x |
| 117 | [**`getPrefix()`**](#getprefix) | [app.js:4551](app.js#L4551) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getPrefix | 9x |
| 118 | [**`getDept()`**](#getdept) | [app.js:4559](app.js#L4559) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getDept | 6x |
| 119 | [**`isInvited()`**](#isinvited) | [app.js:4570](app.js#L4570) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isInvited | 5x |
| 120 | [**`getOverBaseCount()`**](#getoverbasecount) | [app.js:4638](app.js#L4638) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getOverBaseCount | 1x |
| 121 | [**`canAccept()`**](#canaccept) | [app.js:4640](app.js#L4640) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk canAccept | 0x |
| 122 | [**`hasPrefixConflict()`**](#hasprefixconflict) | [app.js:4674](app.js#L4674) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasPrefixConflict | 2x |
| 123 | [**`hasDeptConflict()`**](#hasdeptconflict) | [app.js:4675](app.js#L4675) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk hasDeptConflict | 1x |
| 124 | [**`generateGroupStage()`**](#generategroupstage) | [app.js:4729](app.js#L4729) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk generateGroupStage | 3x |
| 125 | [**`updateGroupRecord()`**](#updategrouprecord) | [app.js:4766](app.js#L4766) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk updateGroupRecord | 4x |
| 126 | [**`getMLBBHeadToHeadWinner()`**](#getmlbbheadtoheadwinner) | [app.js:4780](app.js#L4780) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fa... | 1x |
| 127 | [**`compareMLBBTeams()`**](#comparemlbbteams) | [app.js:4847](app.js#L4847) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke ... | 1x |
| 128 | [**`getSortedGroupTeams()`**](#getsortedgroupteams) | [app.js:4881](app.js#L4881) | 📦 Modul Aplikasi Umum | Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkula... | 12x |
| 129 | [**`shuffleArray()`**](#shufflearray) | [app.js:4909](app.js#L4909) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk shuffleArray | 3x |
| 130 | [**`findValidBracketPermutation()`**](#findvalidbracketpermutation) | [app.js:4918](app.js#L4918) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk findValidBracketPermutation | 3x |
| 131 | [**`backtrack()`**](#backtrack) | [app.js:4920](app.js#L4920) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk backtrack | 2x |
| 132 | [**`initGroupPlayoff()`**](#initgroupplayoff) | [app.js:4941](app.js#L4941) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seed... | 9x |
| 133 | [**`pickGroupPlayoffWinner()`**](#pickgroupplayoffwinner) | [app.js:5152](app.js#L5152) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya k... | 2x |
| 134 | [**`promptPlayoffMVP()`**](#promptplayoffmvp) | [app.js:5319](app.js#L5319) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk promptPlayoffMVP | 2x |
| 135 | [**`renderGroupStageUI()`**](#rendergroupstageui) | [app.js:5326](app.js#L5326) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupStageUI | 15x |
| 136 | [**`resolveTeamNameInGroup()`**](#resolveteamnameingroup) | [app.js:5680](app.js#L5680) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisa... | 2x |
| 137 | [**`isSameTeamName()`**](#issameteamname) | [app.js:5696](app.js#L5696) | 📦 Modul Aplikasi Umum | Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, ... | 21x |
| 138 | [**`findGroupNameForTeam()`**](#findgroupnameforteam) | [app.js:5712](app.js#L5712) | 📦 Modul Aplikasi Umum | Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData | 4x |
| 139 | [**`setMLBBActiveWeek()`**](#setmlbbactiveweek) | [app.js:5764](app.js#L5764) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveWeek | 3x |
| 140 | [**`setMLBBActiveDayFilter()`**](#setmlbbactivedayfilter) | [app.js:5772](app.js#L5772) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveDayFilter | 6x |
| 141 | [**`setMLBBActiveGroupFilter()`**](#setmlbbactivegroupfilter) | [app.js:5777](app.js#L5777) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk setMLBBActiveGroupFilter | 1x |
| 142 | [**`getGroupFixtures()`**](#getgroupfixtures) | [app.js:5783](app.js#L5783) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) --- | 5x |
| 143 | [**`getCanonicalGroupMatchId()`**](#getcanonicalgroupmatchid) | [app.js:5951](app.js#L5951) | 📦 Modul Aplikasi Umum | Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tid... | 8x |
| 144 | [**`deduplicateGroupMatchResults()`**](#deduplicategroupmatchresults) | [app.js:5960](app.js#L5960) | 📦 Modul Aplikasi Umum | Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri t... | 3x |
| 145 | [**`getGroupRestingTeams()`**](#getgrouprestingteams) | [app.js:5994](app.js#L5994) | 📦 Modul Aplikasi Umum | Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di... | 1x |
| 146 | [**`setGroupMatchScore()`**](#setgroupmatchscore) | [app.js:6005](app.js#L6005) | 📦 Modul Aplikasi Umum | Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara ... | 7x |
| 147 | [**`promptGroupMatchWO()`**](#promptgroupmatchwo) | [app.js:6103](app.js#L6103) | 📦 Modul Aplikasi Umum | Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupu... | 1x |
| 148 | [**`setGroupMatchSpecialResult()`**](#setgroupmatchspecialresult) | [app.js:6128](app.js#L6128) | 📦 Modul Aplikasi Umum | Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imba... | 4x |
| 149 | [**`saveGroupFixtureScore()`**](#savegroupfixturescore) | [app.js:6137](app.js#L6137) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk saveGroupFixtureScore | 1x |
| 150 | [**`findTeamParticipant()`**](#findteamparticipant) | [app.js:6176](app.js#L6176) | 👥 Manajemen Peserta & Roster | Helper mencari data peserta tim dengan normalisasi nama | 4x |
| 151 | [**`openMLBBGroupMvpModal()`**](#openmlbbgroupmvpmodal) | [app.js:6190](app.js#L6190) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBGroupMvpModal | 3x |
| 152 | [**`openMLBBPlayoffMvpModal()`**](#openmlbbplayoffmvpmodal) | [app.js:6264](app.js#L6264) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk openMLBBPlayoffMvpModal | 1x |
| 153 | [**`initAndShowMvpModal()`**](#initandshowmvpmodal) | [app.js:6313](app.js#L6313) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk initAndShowMvpModal | 2x |
| 154 | [**`renderMvpGameTabs()`**](#rendermvpgametabs) | [app.js:6360](app.js#L6360) | 🔧 Helper & UI Utility | Fungsi operasional untuk renderMvpGameTabs | 3x |
| 155 | [**`switchMvpGameTab()`**](#switchmvpgametab) | [app.js:6392](app.js#L6392) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpGameTab | 1x |
| 156 | [**`closeMLBBGroupMvpModal()`**](#closemlbbgroupmvpmodal) | [app.js:6450](app.js#L6450) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk closeMLBBGroupMvpModal | 5x |
| 157 | [**`switchMvpTeamTab()`**](#switchmvpteamtab) | [app.js:6455](app.js#L6455) | 🔧 Helper & UI Utility | Fungsi operasional untuk switchMvpTeamTab | 4x |
| 158 | [**`renderMvpRosterList()`**](#rendermvprosterlist) | [app.js:6486](app.js#L6486) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk renderMvpRosterList | 3x |
| 159 | [**`filterMvpRosterList()`**](#filtermvprosterlist) | [app.js:6553](app.js#L6553) | 👥 Manajemen Peserta & Roster | Fungsi operasional untuk filterMvpRosterList | 1x |
| 160 | [**`selectMvpPlayer()`**](#selectmvpplayer) | [app.js:6559](app.js#L6559) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpPlayer | 1x |
| 161 | [**`renderMvpQuickHeroChips()`**](#rendermvpquickherochips) | [app.js:6591](app.js#L6591) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk renderMvpQuickHeroChips | 3x |
| 162 | [**`selectMvpQuickHero()`**](#selectmvpquickhero) | [app.js:6611](app.js#L6611) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk selectMvpQuickHero | 1x |
| 163 | [**`saveSelectedMvp()`**](#saveselectedmvp) | [app.js:6628](app.js#L6628) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk saveSelectedMvp | 2x |
| 164 | [**`deleteCurrentMvp()`**](#deletecurrentmvp) | [app.js:6700](app.js#L6700) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk deleteCurrentMvp | 1x |
| 165 | [**`setGroupMatchMVP()`**](#setgroupmatchmvp) | [app.js:6752](app.js#L6752) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk setGroupMatchMVP | 3x |
| 166 | [**`formatMatchMvpDisplayHtml()`**](#formatmatchmvpdisplayhtml) | [app.js:6840](app.js#L6840) | 🔧 Helper & UI Utility | Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5) | 3x |
| 167 | [**`promptGroupMatchMVP()`**](#promptgroupmatchmvp) | [app.js:6867](app.js#L6867) | 📦 Modul Aplikasi Umum | Delegasi fungsi promptGroupMatchMVP ke modal interaktif | 1x |
| 168 | [**`openMatchPlayerVerifyModal()`**](#openmatchplayerverifymodal) | [app.js:6884](app.js#L6884) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk openMatchPlayerVerifyModal | 2x |
| 169 | [**`closeMatchPlayerVerifyModal()`**](#closematchplayerverifymodal) | [app.js:6922](app.js#L6922) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk closeMatchPlayerVerifyModal | 2x |
| 170 | [**`toggleMatchPlayerVerify()`**](#togglematchplayerverify) | [app.js:6931](app.js#L6931) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk toggleMatchPlayerVerify | 1x |
| 171 | [**`verifyAllMatchPlayers()`**](#verifyallmatchplayers) | [app.js:6949](app.js#L6949) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk verifyAllMatchPlayers | 2x |
| 172 | [**`renderMatchPlayerVerifyModalContent()`**](#rendermatchplayerverifymodalcontent) | [app.js:6972](app.js#L6972) | 🆔 Modal Dialog & Bukti ID Card | Fungsi operasional untuk renderMatchPlayerVerifyModalContent | 3x |
| 173 | [**`renderTeamRosterColumn()`**](#renderteamrostercolumn) | [app.js:7028](app.js#L7028) | 👥 Manajemen Peserta & Roster | Helper untuk merender kolom roster tiap tim | 2x |
| 174 | [**`resetGroupMatchScore()`**](#resetgroupmatchscore) | [app.js:7131](app.js#L7131) | 📦 Modul Aplikasi Umum | Mereset skor pertandingan grup MLBB ke status belum bertanding. | 0x |
| 175 | [**`recalculateGroupStandingsFromFixtures()`**](#recalculategroupstandingsfromfixtures) | [app.js:7146](app.js#L7146) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan selu... | 4x |
| 176 | [**`renderGroupFixturesUI()`**](#rendergroupfixturesui) | [app.js:7274](app.js#L7274) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderGroupFixturesUI | 11x |
| 177 | [**`renderGroupPlayoffTree()`**](#rendergroupplayofftree) | [app.js:7555](app.js#L7555) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau statu... | 7x |
| 178 | [**`changeMCGGLobby()`**](#changemcgglobby) | [app.js:7686](app.js#L7686) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MCGG MULTI-LOBBY STANDINGS | 0x |
| 179 | [**`getCommanderById()`**](#getcommanderbyid) | [app.js:7692](app.js#L7692) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mencari objek data commander dari master list berdasarkan ID, nama hero, at... | 1x |
| 180 | [**`updateCommanderPoolFromSetup()`**](#updatecommanderpoolfromsetup) | [app.js:7705](app.js#L7705) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk updateCommanderPoolFromSetup | 1x |
| 181 | [**`getVerifiedMCGGPlayers()`**](#getverifiedmcggplayers) | [app.js:7764](app.js#L7764) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getVerifiedMCGGPlayers | 2x |
| 182 | [**`syncMCGGPlayers()`**](#syncmcggplayers) | [app.js:7772](app.js#L7772) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGPlayers | 8x |
| 183 | [**`findPrevious()`**](#findprevious) | [app.js:7784](app.js#L7784) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 184 | [**`mapPlayerObj()`**](#mapplayerobj) | [app.js:7796](app.js#L7796) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |
| 185 | [**`allocateLobbiesByCluster()`**](#allocatelobbiesbycluster) | [app.js:7815](app.js#L7815) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase ... | 3x |
| 186 | [**`shuffleMCGGPlayers()`**](#shufflemcggplayers) | [app.js:7990](app.js#L7990) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGGPlayers | 2x |
| 187 | [**`isMCGGLobbyPointsFull()`**](#ismcgglobbypointsfull) | [app.js:8007](app.js#L8007) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGLobbyPointsFull | 4x |
| 188 | [**`isMCGGQualificationFull()`**](#ismcggqualificationfull) | [app.js:8013](app.js#L8013) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3... | 11x |
| 189 | [**`isMCGGSemiFinalFull()`**](#ismcggsemifinalfull) | [app.js:8019](app.js#L8019) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk isMCGGSemiFinalFull | 1x |
| 190 | [**`compareMCGGPlayers()`**](#comparemcggplayers) | [app.js:8031](app.js#L8031) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir ... | 0x |
| 191 | [**`syncMCGGSemiFinal()`**](#syncmcggsemifinal) | [app.js:8062](app.js#L8062) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk syncMCGGSemiFinal | 2x |
| 192 | [**`findPrevSemi()`**](#findprevsemi) | [app.js:8099](app.js#L8099) | 📦 Modul Aplikasi Umum | Preserve poin semifinal jika sudah ada | 1x |
| 193 | [**`mapSemiPlayer()`**](#mapsemiplayer) | [app.js:8107](app.js#L8107) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapSemiPlayer | 0x |
| 194 | [**`syncMCGGGrandFinal()`**](#syncmcgggrandfinal) | [app.js:8129](app.js#L8129) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final se... | 7x |
| 195 | [**`findPrevInArr()`**](#findprevinarr) | [app.js:8136](app.js#L8136) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevInArr | 1x |
| 196 | [**`mapGFPlayer()`**](#mapgfplayer) | [app.js:8145](app.js#L8145) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapGFPlayer | 4x |
| 197 | [**`updateMCGGRank()`**](#updatemcggrank) | [app.js:8213](app.js#L8213) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin... | 1x |
| 198 | [**`updateMCGGCommander()`**](#updatemcggcommander) | [app.js:8251](app.js#L8251) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Memperbarui pilihan commander pemain dan memicu validasi duplikasi commande... | 1x |
| 199 | [**`updateMCGGPenalty()`**](#updatemcggpenalty) | [app.js:8286](app.js#L8286) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumul... | 1x |
| 200 | [**`renderLobbyCommanderDrawPanelHtml()`**](#renderlobbycommanderdrawpanelhtml) | [app.js:8325](app.js#L8325) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI) | 5x |
| 201 | [**`drawMatchPool()`**](#drawmatchpool) | [app.js:8575](app.js#L8575) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 1: Acak 8 Pool ... | 2x |
| 202 | [**`assignMatchPoolToPlayers()`**](#assignmatchpooltoplayers) | [app.js:8650](app.js#L8650) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 2: Pasangkan 8 ... | 2x |
| 203 | [**`toggleLockMatchDraw()`**](#togglelockmatchdraw) | [app.js:8701](app.js#L8701) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 3: Kunci Match ... | 1x |
| 204 | [**`nextMatchDraw()`**](#nextmatchdraw) | [app.js:8728](app.js#L8728) | 📦 Modul Aplikasi Umum | ---------------------------------------------------- FUNGSI 4: Lanjut ke Ma... | 1x |
| 205 | [**`drawMatchCommanders()`**](#drawmatchcommanders) | [app.js:8745](app.js#L8745) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Backward compatibility helper | 3x |
| 206 | [**`switchLobbyDrawView()`**](#switchlobbydrawview) | [app.js:8751](app.js#L8751) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk switchLobbyDrawView | 5x |
| 207 | [**`resetLobbyDraw()`**](#resetlobbydraw) | [app.js:8757](app.js#L8757) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk resetLobbyDraw | 2x |
| 208 | [**`copyCommanderDrawText()`**](#copycommanderdrawtext) | [app.js:8778](app.js#L8778) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk... | 2x |
| 209 | [**`showMatch3DraftInfo()`**](#showmatch3draftinfo) | [app.js:8813](app.js#L8813) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk showMatch3DraftInfo | 1x |
| 210 | [**`changeCommanderDrawTarget()`**](#changecommanderdrawtarget) | [app.js:8824](app.js#L8824) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk changeCommanderDrawTarget | 1x |
| 211 | [**`setDrawTargetAndScroll()`**](#setdrawtargetandscroll) | [app.js:8831](app.js#L8831) | 🔧 Helper & UI Utility | Fungsi operasional untuk setDrawTargetAndScroll | 0x |
| 212 | [**`scrollToMCGGLobby()`**](#scrolltomcgglobby) | [app.js:8836](app.js#L8836) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk scrollToMCGGLobby | 3x |
| 213 | [**`renderMCGGLobbyAnchorBar()`**](#rendermcgglobbyanchorbar) | [app.js:8843](app.js#L8843) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbyAnchorBar | 2x |
| 214 | [**`renderMCGGLobbySelectOptions()`**](#rendermcgglobbyselectoptions) | [app.js:8879](app.js#L8879) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGLobbySelectOptions | 3x |
| 215 | [**`renderMCGGTable()`**](#rendermcggtable) | [app.js:8922](app.js#L8922) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Merender tabel klasemen dan poin turnamen Magic Chess Go Go untuk lobi yang... | 29x |
| 216 | [**`getLobbyShortLabel()`**](#getlobbyshortlabel) | [app.js:8979](app.js#L8979) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk getLobbyShortLabel | 0x |
| 217 | [**`renderLobbyRowsHtml()`**](#renderlobbyrowshtml) | [app.js:9149](app.js#L9149) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderLobbyRowsHtml | 5x |
| 218 | [**`buildRoundCell()`**](#buildroundcell) | [app.js:9251](app.js#L9251) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk buildRoundCell | 3x |
| 219 | [**`buildPenaltySelect()`**](#buildpenaltyselect) | [app.js:9328](app.js#L9328) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk buildPenaltySelect | 1x |
| 220 | [**`loadSampleData()`**](#loadsampledata) | [app.js:9352](app.js#L9352) | 📦 Modul Aplikasi Umum | Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation... | 1x |
| 221 | [**`clearAllData()`**](#clearalldata) | [app.js:9556](app.js#L9556) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk clearAllData | 1x |
| 222 | [**`setMLBBViewMode()`**](#setmlbbviewmode) | [app.js:9635](app.js#L9635) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | --- TAMPILAN VIEW SWITCHER MLBB --- | 6x |
| 223 | [**`setMCGGViewMode()`**](#setmcggviewmode) | [app.js:9685](app.js#L9685) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | --- TAMPILAN VIEW SWITCHER MCGG --- | 4x |
| 224 | [**`selectMLBBStageNode()`**](#selectmlbbstagenode) | [app.js:9718](app.js#L9718) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | ---------------------------------------------------------------------------... | 9x |
| 225 | [**`renderMLBBInteractiveHubUI()`**](#rendermlbbinteractivehubui) | [app.js:9729](app.js#L9729) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBInteractiveHubUI | 13x |
| 226 | [**`renderMLBBDetailPanelContent()`**](#rendermlbbdetailpanelcontent) | [app.js:9937](app.js#L9937) | ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine) | Fungsi operasional untuk renderMLBBDetailPanelContent | 1x |
| 227 | [**`selectMCGGFlowNode()`**](#selectmcggflownode) | [app.js:10255](app.js#L10255) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | ---------------------------------------------------------------------------... | 7x |
| 228 | [**`renderMCGGInteractiveHubUI()`**](#rendermcgginteractivehubui) | [app.js:10260](app.js#L10260) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGInteractiveHubUI | 5x |
| 229 | [**`renderMCGGDetailPanelContent()`**](#rendermcggdetailpanelcontent) | [app.js:10388](app.js#L10388) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk renderMCGGDetailPanelContent | 1x |
| 230 | [**`shuffleMCGG32Besar()`**](#shufflemcgg32besar) | [app.js:10597](app.js#L10597) | ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti) | Fungsi operasional untuk shuffleMCGG32Besar | 1x |
| 231 | [**`getTargetSpreadsheet()`**](#gettargetspreadsheet) | [google_apps_script.js:38](google_apps_script.js#L38) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan spreadsheet target turnamen secara andal. Membuka spreadsheet b... | 5x |
| 232 | [**`safeSetSharing()`**](#safesetsharing) | [google_apps_script.js:58](google_apps_script.js#L58) | ⚙️ Backend Apps Script Utility | Mengatur permission sharing secara aman. Menghindari error 'Access denied: ... | 6x |
| 233 | [**`getOrCreateUploadFolder()`**](#getorcreateuploadfolder) | [google_apps_script.js:76](google_apps_script.js#L76) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat folder upload utama secara andal. Jika TARGET_FOLD... | 4x |
| 234 | [**`testDriveAuth()`**](#testdriveauth) | [google_apps_script.js:115](google_apps_script.js#L115) | ⚙️ Backend Apps Script Utility | FUNGSI UJI OTORISASI GOOGLE DRIVE & SPREADSHEET PENTING: Pilih fungsi 'test... | 0x |
| 235 | [**`getOrCreateSubFolder()`**](#getorcreatesubfolder) | [google_apps_script.js:150](google_apps_script.js#L150) | ⚙️ Backend Apps Script Utility | Mendapatkan atau membuat subfolder tim/kategori secara andal. / | 2x |
| 236 | [**`relinkExistingFailedIDCards()`**](#relinkexistingfailedidcards) | [google_apps_script.js:194](google_apps_script.js#L194) | ⚙️ Backend Apps Script Utility | FUNGSI PERBAIKAN: RELINK ID CARD YANG GAGAL DI SPREADSHEET Jalankan fungsi ... | 0x |
| 237 | [**`ensureRelationalSheetsExist()`**](#ensurerelationalsheetsexist) | [google_apps_script.js:313](google_apps_script.js#L313) | 🗄️ Google Sheets Schema & Master Data | Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Paren... | 2x |
| 238 | [**`getMlbbTimListing()`**](#getmlbbtimlisting) | [google_apps_script.js:361](google_apps_script.js#L361) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Tim (Distinct & Sorted in Memory) Tabel Parent: 'MLBB - Tim' A... | 3x |
| 239 | [**`getMlbbPesertaListing()`**](#getmlbbpesertalisting) | [google_apps_script.js:459](google_apps_script.js#L459) | 🗄️ Google Sheets Schema & Master Data | Listing MLBB Peserta (Distinct & Sorted in Memory) Tabel Child: 'MLBB - Pes... | 2x |
| 240 | [**`getMcggListing()`**](#getmcgglisting) | [google_apps_script.js:527](google_apps_script.js#L527) | 🗄️ Google Sheets Schema & Master Data | Listing MCGG (Distinct & Sorted in Memory) Tabel: 'Pendaftaran MCGG' Aturan... | 3x |
| 241 | [**`doGet()`**](#doget) | [google_apps_script.js:661](google_apps_script.js#L661) | 🌐 Web API & Endpoint Webhook | 1. GET HANDLER: FETCH SEMUA PESERTA KE WEBSITE | 0x |
| 242 | [**`helperParseRank()`**](#helperparserank) | [google_apps_script.js:875](google_apps_script.js#L875) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk helperParseRank | 3x |
| 243 | [**`doPost()`**](#dopost) | [google_apps_script.js:1091](google_apps_script.js#L1091) | 🌐 Web API & Endpoint Webhook | 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE | 1x |
| 244 | [**`saveBase64Image()`**](#savebase64image) | [google_apps_script.js:1143](google_apps_script.js#L1143) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk saveBase64Image | 4x |
| 245 | [**`getOrCreateSheet()`**](#getorcreatesheet) | [google_apps_script.js:1731](google_apps_script.js#L1731) | 🗄️ Google Sheets Schema & Master Data | Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. / | 0x |
| 246 | [**`syncDedicatedTournamentSheets()`**](#syncdedicatedtournamentsheets) | [google_apps_script.js:1743](google_apps_script.js#L1743) | 🗄️ Google Sheets Schema & Master Data | Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah ... | 7x |
| 247 | [**`fmtRank()`**](#fmtrank) | [google_apps_script.js:2009](google_apps_script.js#L2009) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk fmtRank | 3x |
| 248 | [**`syncListBagan()`**](#synclistbagan) | [google_apps_script.js:2078](google_apps_script.js#L2078) | ⚙️ Backend Apps Script Utility | Wrapper kompatibilitas untuk pemicu manual / lama / | 1x |
| 249 | [**`syncListPoint()`**](#synclistpoint) | [google_apps_script.js:2082](google_apps_script.js#L2082) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPoint | 1x |
| 250 | [**`syncListPointAndCommanderMCGG()`**](#synclistpointandcommandermcgg) | [google_apps_script.js:2086](google_apps_script.js#L2086) | ⚙️ Backend Apps Script Utility | Fungsi operasional untuk syncListPointAndCommanderMCGG | 1x |
| 251 | [**`createOrUpdateAllTournamentSheets()`**](#createorupdatealltournamentsheets) | [google_apps_script.js:2090](google_apps_script.js#L2090) | 🗄️ Google Sheets Schema & Master Data | Fungsi operasional untuk createOrUpdateAllTournamentSheets | 1x |
| 252 | [**`runTest()`**](#runtest) | [functional_tests.js:26](functional_tests.js#L26) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runTest | 75x |
| 253 | [**`runAsyncTest()`**](#runasynctest) | [functional_tests.js:37](functional_tests.js#L37) | ☁️ Sinkronisasi Google Sheets & State Storage | Fungsi operasional untuk runAsyncTest | 4x |
| 254 | [**`sanitizeNip()`**](#sanitizenip) | [functional_tests.js:85](functional_tests.js#L85) | 🔧 Helper & UI Utility | Fungsi operasional untuk sanitizeNip | 3x |
| 255 | [**`formatDriveImageUrl()`**](#formatdriveimageurl) | [functional_tests.js:94](functional_tests.js#L94) | 🔧 Helper & UI Utility | Fungsi operasional untuk formatDriveImageUrl | 9x |
| 256 | [**`validateRegistration()`**](#validateregistration) | [functional_tests.js:181](functional_tests.js#L181) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk validateRegistration | 7x |
| 257 | [**`runLiveIntegrationTests()`**](#runliveintegrationtests) | [functional_tests.js:363](functional_tests.js#L363) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk runLiveIntegrationTests | 1x |
| 258 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:890](functional_tests.js#L890) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 259 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:896](functional_tests.js#L896) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 5x |
| 260 | [**`getTeamDept()`**](#getteamdept) | [functional_tests.js:900](functional_tests.js#L900) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamDept | 4x |
| 261 | [**`getTeamPrefix()`**](#getteamprefix) | [functional_tests.js:946](functional_tests.js#L946) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk getTeamPrefix | 4x |
| 262 | [**`isTeamInvited()`**](#isteaminvited) | [functional_tests.js:952](functional_tests.js#L952) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk isTeamInvited | 5x |
| 263 | [**`findPrevious()`**](#findprevious) | [functional_tests.js:1085](functional_tests.js#L1085) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk findPrevious | 1x |
| 264 | [**`mapPlayerObj()`**](#mapplayerobj) | [functional_tests.js:1087](functional_tests.js#L1087) | 📦 Modul Aplikasi Umum | Fungsi operasional untuk mapPlayerObj | 2x |

---

## 🔍 Rincian Lengkap Fungsi dan Lokasi Pemanggilan

### ♟️ Turnamen MCGG (Klasemen, Undian Commander & Penalti)

<a id="setmcggstagefilter"></a>
#### `setMCGGStageFilter(stage)`

- **Definisi:** [`app.js:2`](app.js#L2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8998`](app.js#L8998) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_1_QUAL' ? 'active' : ''}`
  - [`app.js:9001`](app.js#L9001) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${mcggStageFilter === 'STAGE_2_SEMI' ? 'active' : ''}`
  - [`app.js:9004`](app.js#L9004) — di dalam fungsi `renderMCGGTable()`
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
  - [`index.html:633`](index.html#L633) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMCGGGroupPage()" i`
  - [`app.js:9016`](app.js#L9016) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:866`](functional_tests.js#L866) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMCGGGroupPage()'), 'Harus ada fungsi prevMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="nextmcgggrouppage"></a>
#### `nextMCGGGroupPage()`

- **Definisi:** [`app.js:61`](app.js#L61)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:639`](index.html#L639) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMCGGGroupPage()" `
  - [`app.js:9019`](app.js#L9019) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:867`](functional_tests.js#L867) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMCGGGroupPage()'), 'Harus ada fungsi nextMCGGGroupPage');`
- **Memanggil Fungsi Internal:** [`getActiveMCGGLobbyKeys()`](#getactivemcgglobbykeys), [`renderMCGGTable()`](#rendermcggtable)

<a id="gotomcgggrouppage"></a>
#### `goToMCGGGroupPage(pg)`

- **Definisi:** [`app.js:68`](app.js#L68)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8988`](app.js#L8988) — di dalam fungsi `renderMCGGTable()`
    `<button type="button" class="group-nav-tab-btn ${p === mcggGroupPageIndex ? 'active' : ''}" onclick=`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="togglemcgglayoutmode"></a>
#### `toggleMCGGLayoutMode()`

- **Definisi:** [`app.js:73`](app.js#L73)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderformattedname"></a>
#### `getCommanderFormattedName(cmd)`

- **Definisi:** [`app.js:482`](app.js#L482)
- **Deskripsi:** Helper Format Nama Commander: Hero [Alter] jika alter ada, atau Hero jika tidak ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:8798`](app.js#L8798) — di dalam fungsi `copyCommanderDrawText()`
    `const cmdName = getCommanderFormattedName(item.commander);`
  - [`app.js:9261`](app.js#L9261) — di dalam fungsi `buildRoundCell()`
    `const formattedName = getCommanderFormattedName(selectedCmd);`
  - [`app.js:9287`](app.js#L9287) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`app.js:9296`](app.js#L9296) — di dalam fungsi `buildRoundCell()`
    `const label = getCommanderFormattedName(c);`
  - [`functional_tests.js:706`](functional_tests.js#L706) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getCommanderFormattedName('), 'Harus ada fungsi getCommanderFormat`

<a id="rendercommandercircleshtml"></a>
#### `renderCommanderCirclesHtml(cmd, size)`

- **Definisi:** [`app.js:493`](app.js#L493)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Tabel Klasemen
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9262`](app.js#L9262) — di dalam fungsi `buildRoundCell()`
    `const circlesHtml = renderCommanderCirclesHtml(selectedCmd, 24);`
  - [`app.js:9310`](app.js#L9310) — di dalam fungsi `buildRoundCell()`
    `? renderCommanderCirclesHtml(selectedCmd, 22)`
  - [`functional_tests.js:707`](functional_tests.js#L707) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderCommanderCirclesHtml('), 'Harus ada fungsi renderCommanderCi`

<a id="rendercommandercardvisualhtml"></a>
#### `renderCommanderCardVisualHtml(cmd)`

- **Definisi:** [`app.js:522`](app.js#L522)
- **Deskripsi:** Helper Dua Lingkaran (1 Hero, 1 Alter) untuk Kartu Hasil Undian
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8516`](app.js#L8516) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `${renderCommanderCardVisualHtml(item.commander)}`

<a id="resetmcggpointsanddraw"></a>
#### `resetMCGGPointsAndDraw()`

- **Definisi:** [`app.js:2274`](app.js#L2274)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:594`](index.html#L594) — Event `onclick`
    `<button id="btnResetMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; border-c`
  - [`functional_tests.js:837`](functional_tests.js#L837) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMCGGPointsAndDraw()'), 'Harus memiliki resetMCGGPointsAndDraw`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handlemcggnameinput"></a>
#### `handleMcggNameInput(val)`

- **Definisi:** [`app.js:2620`](app.js#L2620)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Pemain Solo MCGG di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:266`](index.html#L266) — Event `oninput`
    `<input type="text" id="mcgg_name" oninput="handleMcggNameInput(this.value)" placeholder="Masukkan na`
  - [`functional_tests.js:173`](functional_tests.js#L173) — pada skenario pengujian
    `assert(appCode.includes('function handleMcggNameInput('), 'Harus ada handler handleMcggNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="togglelockmcgglobbies"></a>
#### `toggleLockMCGGLobbies()`

- **Definisi:** [`app.js:4290`](app.js#L4290)
- **Deskripsi:** Mengunci/membuka kunci pembagian lobi MCGG hasil Technical Meeting (Lock TM).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:593`](index.html#L593) — Event `onclick`
    `<button id="btnLockMCGGLobbies" class="btn btn-outline" style="display: none; font-size: 0.85rem;" o`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="validatemcggduplicatecommander"></a>
#### `validateMCGGDuplicateCommander(lobbyKey, playerIdx)`

- **Definisi:** [`app.js:4312`](app.js#L4312)
- **Deskripsi:** 3. VALIDASI OTOMATIS COMMANDER DUPLIKAT MCGG (MATCH 2)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8279`](app.js#L8279) — di dalam fungsi `updateMCGGCommander()`
    `validateMCGGDuplicateCommander(targetLobby, idx);`
  - [`app.js:8686`](app.js#L8686) — di dalam fungsi `assignMatchPoolToPlayers()`
    `validateMCGGDuplicateCommander(lobbyKey, i);`
  - [`functional_tests.js:765`](functional_tests.js#L765) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function validateMCGGDuplicateCommander('), 'Harus ada fungsi validateMCGGD`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="changemcgglobby"></a>
#### `changeMCGGLobby()`

- **Definisi:** [`app.js:7686`](app.js#L7686)
- **Deskripsi:** MCGG MULTI-LOBBY STANDINGS
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getcommanderbyid"></a>
#### `getCommanderById(id)`

- **Definisi:** [`app.js:7692`](app.js#L7692)
- **Deskripsi:** Mencari objek data commander dari master list berdasarkan ID, nama hero, atau alter name.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9256`](app.js#L9256) — di dalam fungsi `buildRoundCell()`
    `const selectedCmd = getCommanderById(selectedCmdId);`

<a id="updatecommanderpoolfromsetup"></a>
#### `updateCommanderPoolFromSetup(setupList)`

- **Definisi:** [`app.js:7705`](app.js#L7705)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1434`](app.js#L1434) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCommanderPoolFromSetup(data.mcggCommanderSetup);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="getverifiedmcggplayers"></a>
#### `getVerifiedMCGGPlayers()`

- **Definisi:** [`app.js:7764`](app.js#L7764)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7773`](app.js#L7773) — di dalam fungsi `syncMCGGPlayers()`
    `let verified = getVerifiedMCGGPlayers();`
  - [`functional_tests.js:611`](functional_tests.js#L611) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMCGGPlayers()'), 'Harus ada getVerifiedMCGGPlayers()');`

<a id="syncmcggplayers"></a>
#### `syncMCGGPlayers(doShuffle = false)`

- **Definisi:** [`app.js:7772`](app.js#L7772)
- **Titik Pemanggilan (8 lokasi):**
  - [`index.html:591`](index.html#L591) — Event `onclick`
    `<button id="adminSyncMCGG" class="btn btn-primary" style="display: none; font-size: 0.85rem;" onclic`
  - [`app.js:1443`](app.js#L1443) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `syncMCGGPlayers();`
  - [`app.js:3201`](app.js#L3201) — di dalam fungsi `setParticipantStatus()`
    `syncMCGGPlayers();`
  - [`app.js:3258`](app.js#L3258) — di dalam fungsi `deleteParticipant()`
    `syncMCGGPlayers();`
  - [`app.js:3487`](app.js#L3487) — di dalam fungsi `saveParticipantEdit()`
    `syncMCGGPlayers();`
  - [`app.js:8003`](app.js#L8003) — di dalam fungsi `shuffleMCGGPlayers()`
    `syncMCGGPlayers(true);`
  - [`app.js:9553`](app.js#L9553) — di dalam fungsi `loadSampleData()`
    `syncMCGGPlayers();`
  - [`app.js:9568`](app.js#L9568) — di dalam fungsi `clearAllData()`
    `syncMCGGPlayers();`
- **Memanggil Fungsi Internal:** [`getVerifiedMCGGPlayers()`](#getverifiedmcggplayers), [`findPrevious()`](#findprevious), [`getDepartmentCluster()`](#getdepartmentcluster), [`mapPlayerObj()`](#mapplayerobj), [`syncMCGGSemiFinal()`](#syncmcggsemifinal), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`renderMCGGTable()`](#rendermcggtable), [`allocateLobbiesByCluster()`](#allocatelobbiesbycluster)

<a id="allocatelobbiesbycluster"></a>
#### `allocateLobbiesByCluster(playerList, lobbyKeys, targetCaps)`

- **Definisi:** [`app.js:7815`](app.js#L7815)
- **Deskripsi:** Helper alokasi lobi berbasis Klaster Divisi Resmi Yokke (Anti-Bentrok Fase Awal)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7957`](app.js#L7957) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, ['LOBBY_A', 'LOBBY_B'], [countA, countB]);`
  - [`app.js:7974`](app.js#L7974) — di dalam fungsi `syncMCGGPlayers()`
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`
  - [`functional_tests.js:1094`](functional_tests.js#L1094) — pada skenario pengujian
    `allocateLobbiesByCluster(verified, qualKeys, targetCaps);`

<a id="shufflemcggplayers"></a>
#### `shuffleMCGGPlayers()`

- **Definisi:** [`app.js:7990`](app.js#L7990)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:592`](index.html#L592) — Event `onclick`
    `<button id="adminShuffleMCGG" class="btn btn-gold" style="display: none; font-size: 0.85rem;" onclic`
  - [`functional_tests.js:651`](functional_tests.js#L651) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function shuffleMCGGPlayers()'), 'Harus ada fungsi shuffleMCGGPlayers()');`
- **Memanggil Fungsi Internal:** [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="ismcgglobbypointsfull"></a>
#### `isMCGGLobbyPointsFull(lobbyKey)`

- **Definisi:** [`app.js:8007`](app.js#L8007)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:8016`](app.js#L8016) — di dalam fungsi `isMCGGQualificationFull()`
    `return qualKeys.every(k => isMCGGLobbyPointsFull(k));`
  - [`app.js:8021`](app.js#L8021) — di dalam fungsi `isMCGGSemiFinalFull()`
    `return isMCGGLobbyPointsFull('SEMI_A') && isMCGGLobbyPointsFull('SEMI_B');`
  - [`app.js:9204`](app.js#L9204) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isLobbyFull = isMCGGLobbyPointsFull('LOBBY_A');`
  - [`app.js:9217`](app.js#L9217) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isThisLobbyFull = isMCGGLobbyPointsFull(lobbyKey);`

<a id="ismcggqualificationfull"></a>
#### `isMCGGQualificationFull()`

- **Definisi:** [`app.js:8013`](app.js#L8013)
- **Deskripsi:** Memeriksa apakah ronde kualifikasi Lobi A dan Lobi B telah selesai penuh (3 ronde).
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:8066`](app.js#L8066) — di dalam fungsi `syncMCGGSemiFinal()`
    `const isQualDone = isMCGGQualificationFull();`
  - [`app.js:8190`](app.js#L8190) — di dalam fungsi `syncMCGGGrandFinal()`
    `const isFull = isMCGGQualificationFull();`
  - [`app.js:8229`](app.js#L8229) — di dalam fungsi `updateMCGGRank()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:8267`](app.js#L8267) — di dalam fungsi `updateMCGGCommander()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:8300`](app.js#L8300) — di dalam fungsi `updateMCGGPenalty()`
    `if (targetLobby === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:8586`](app.js#L8586) — di dalam fungsi `drawMatchPool()`
    `if (lobbyKey === 'GRAND_FINAL' && !isMCGGQualificationFull()) {`
  - [`app.js:8848`](app.js#L8848) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:8880`](app.js#L8880) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:8946`](app.js#L8946) — di dalam fungsi `renderMCGGTable()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`app.js:9151`](app.js#L9151) — di dalam fungsi `renderLobbyRowsHtml()`
    `const isQualFull = isMCGGQualificationFull();`
  - [`functional_tests.js:625`](functional_tests.js#L625) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isMCGGQualificationFull()'), 'app.js harus memeriksa apakah poin kualifikas`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="ismcggsemifinalfull"></a>
#### `isMCGGSemiFinalFull()`

- **Definisi:** [`app.js:8019`](app.js#L8019)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8160`](app.js#L8160) — di dalam fungsi `syncMCGGGrandFinal()`
    `const semiDone = isMCGGSemiFinalFull();`
- **Memanggil Fungsi Internal:** [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull)

<a id="comparemcggplayers"></a>
#### `compareMCGGPlayers(a, b)`

- **Definisi:** [`app.js:8031`](app.js#L8031)
- **Deskripsi:** Komparator resmi urutan klasemen MCGG sesuai regulasi: 1. Total Poin Akhir (besar ke kecil) 2. Juara 1 / MVP Ronde (banyaknya finish posisi 1, besar ke kecil) 3. Top 4 Finish (banyaknya finish posisi 1-4, besar ke kecil) 4. Pengurangan Poin / Penalti (makin sering kena pengurangan makin bawah jika poin dkk sama: deductA - deductB) 5. Breakdown Posisi Finish Ronde 1 s/d 8 6. Nama Pemain (A-Z)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncmcggsemifinal"></a>
#### `syncMCGGSemiFinal()`

- **Definisi:** [`app.js:8062`](app.js#L8062)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7924`](app.js#L7924) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
  - [`app.js:7981`](app.js#L7981) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGSemiFinal();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`findPrevSemi()`](#findprevsemi)

<a id="syncmcgggrandfinal"></a>
#### `syncMCGGGrandFinal()`

- **Definisi:** [`app.js:8129`](app.js#L8129)
- **Deskripsi:** Menyaring Top 4 Lobi A dan Top 4 Lobi B untuk ditempatkan ke Grand Final setelah ronde kualifikasi penuh.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:2308`](app.js#L2308) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `syncMCGGGrandFinal();`
  - [`app.js:7925`](app.js#L7925) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:7958`](app.js#L7958) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:7982`](app.js#L7982) — di dalam fungsi `syncMCGGPlayers()`
    `syncMCGGGrandFinal();`
  - [`app.js:8244`](app.js#L8244) — di dalam fungsi `updateMCGGRank()`
    `syncMCGGGrandFinal();`
  - [`app.js:8315`](app.js#L8315) — di dalam fungsi `updateMCGGPenalty()`
    `syncMCGGGrandFinal();`
  - [`app.js:9053`](app.js#L9053) — di dalam fungsi `renderMCGGTable()`
    `syncMCGGGrandFinal();`
- **Memanggil Fungsi Internal:** [`findPrevInArr()`](#findprevinarr), [`isMCGGSemiFinalFull()`](#ismcggsemifinalfull), [`mapGFPlayer()`](#mapgfplayer), [`isMCGGQualificationFull()`](#ismcggqualificationfull)

<a id="updatemcggrank"></a>
#### `updateMCGGRank(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:8213`](app.js#L8213)
- **Deskripsi:** Memperbarui peringkat ronde (R1, R2, R3) pemain MCGG dan mengkalkulasi poin otomatis (+4 s/d -4).
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9321`](app.js#L9321) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGRank('${lobbyKey}', ${originalIdx}, '${roundKey}', this.value)" style="p`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggcommander"></a>
#### `updateMCGGCommander(arg1, arg2, arg3, arg4)`

- **Definisi:** [`app.js:8251`](app.js#L8251)
- **Deskripsi:** Memperbarui pilihan commander pemain dan memicu validasi duplikasi commander ronde 2.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9317`](app.js#L9317) — di dalam fungsi `buildRoundCell()`
    `<select onchange="updateMCGGCommander('${lobbyKey}', ${originalIdx}, '${cmdKey}', this.value)" style`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="updatemcggpenalty"></a>
#### `updateMCGGPenalty(arg1, arg2, arg3)`

- **Definisi:** [`app.js:8286`](app.js#L8286)
- **Deskripsi:** Mengisi nilai penalti kedisiplinan pemain MCGG dan memperbarui total akumulasi poin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9341`](app.js#L9341) — di dalam fungsi `buildPenaltySelect()`
    `<select onchange="updateMCGGPenalty('${lobbyKey}', ${originalIdx}, this.value)" style="padding: 0.25`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="renderlobbycommanderdrawpanelhtml"></a>
#### `renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)`

- **Definisi:** [`app.js:8325`](app.js#L8325)
- **Deskripsi:** MESIN UNDIAN COMMANDER MCGG (SESUAI REGULASI RESMI)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:9121`](app.js#L9121) — di dalam fungsi `renderMCGGTable()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}`
  - [`app.js:10417`](app.js#L10417) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`app.js:10522`](app.js#L10522) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyCommanderDrawPanelHtml(lobbyKey, false, true)}`
  - [`functional_tests.js:798`](functional_tests.js#L798) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderLobbyCommanderDrawPanelHtml('), 'Harus memiliki generator pa`
  - [`functional_tests.js:802`](functional_tests.js#L802) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('${renderLobbyCommanderDrawPanelHtml(lobbyKey, isGF, isQualFull)}'), 'Panel `
- **Memanggil Fungsi Internal:** [`switchLobbyDrawView()`](#switchlobbydrawview), [`copyCommanderDrawText()`](#copycommanderdrawtext), [`resetLobbyDraw()`](#resetlobbydraw), [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers), [`toggleLockMatchDraw()`](#togglelockmatchdraw), [`nextMatchDraw()`](#nextmatchdraw), [`showMatch3DraftInfo()`](#showmatch3draftinfo), [`renderCommanderCardVisualHtml()`](#rendercommandercardvisualhtml), [`escapeHtml()`](#escapehtml)

<a id="drawmatchcommanders"></a>
#### `drawMatchCommanders(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:8745`](app.js#L8745)
- **Deskripsi:** Backward compatibility helper
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9115`](app.js#L9115) — di dalam fungsi `renderMCGGTable()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.3rem 0.65rem; ${(!isRegistration`
  - [`functional_tests.js:741`](functional_tests.js#L741) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function drawMatchCommanders('), 'drawMatchCommanders harus tersedia');`
  - [`functional_tests.js:799`](functional_tests.js#L799) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('drawMatchCommanders(matchNum, targetLobbyKey)'), 'drawMatchCommanders harus`
- **Memanggil Fungsi Internal:** [`drawMatchPool()`](#drawmatchpool), [`assignMatchPoolToPlayers()`](#assignmatchpooltoplayers)

<a id="switchlobbydrawview"></a>
#### `switchLobbyDrawView(lobbyKey, matchNum)`

- **Definisi:** [`app.js:8751`](app.js#L8751)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:8373`](app.js#L8373) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 1 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:8376`](app.js#L8376) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn ${activeMatch === 2 ? 'btn-primary' : 'btn-outline'}" style="padding:0.25rem 0.65`
  - [`app.js:8428`](app.js#L8428) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 1 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`app.js:8431`](app.js#L8431) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn-score-mini ${activeMatch === 2 ? 'active' : ''}" style="font-size:0.75rem; paddin`
  - [`functional_tests.js:800`](functional_tests.js#L800) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function switchLobbyDrawView('), 'Harus memiliki fungsi switch view match 1`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="resetlobbydraw"></a>
#### `resetLobbyDraw(lobbyKey)`

- **Definisi:** [`app.js:8757`](app.js#L8757)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8382`](app.js#L8382) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem; font-size:0.75rem; color:var(--yokke`
  - [`functional_tests.js:801`](functional_tests.js#L801) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetLobbyDraw('), 'Harus memiliki fungsi reset undian per-lobi re`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="copycommanderdrawtext"></a>
#### `copyCommanderDrawText(lobbyKey)`

- **Definisi:** [`app.js:8778`](app.js#L8778)
- **Deskripsi:** Menyalin rekapitulasi teks hasil undian Little Commander ke clipboard untuk dibagikan ke WhatsApp grup.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8379`](app.js#L8379) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem; margin-left:auto;`
  - [`app.js:8434`](app.js#L8434) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.55rem; font-size:0.75rem;" onclick="copyCom`
- **Memanggil Fungsi Internal:** [`getCommanderFormattedName()`](#getcommanderformattedname)

<a id="changecommanderdrawtarget"></a>
#### `changeCommanderDrawTarget(val)`

- **Definisi:** [`app.js:8824`](app.js#L8824)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8832`](app.js#L8832) — di dalam fungsi `setDrawTargetAndScroll()`
    `changeCommanderDrawTarget(lobbyKey);`
- **Memanggil Fungsi Internal:** [`renderMCGGTable()`](#rendermcggtable)

<a id="scrolltomcgglobby"></a>
#### `scrollToMCGGLobby(lobbyKey)`

- **Definisi:** [`app.js:8836`](app.js#L8836)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:8833`](app.js#L8833) — di dalam fungsi `setDrawTargetAndScroll()`
    `scrollToMCGGLobby(lobbyKey);`
  - [`app.js:8873`](app.js#L8873) — di dalam fungsi `renderMCGGLobbyAnchorBar()`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`functional_tests.js:699`](functional_tests.js#L699) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function scrollToMCGGLobby('), 'app.js harus menyediakan fungsi scrollToMCG`

<a id="rendermcgglobbyanchorbar"></a>
#### `renderMCGGLobbyAnchorBar()`

- **Definisi:** [`app.js:8843`](app.js#L8843)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8919`](app.js#L8919) — di dalam fungsi `renderMCGGLobbySelectOptions()`
    `renderMCGGLobbyAnchorBar();`
  - [`functional_tests.js:697`](functional_tests.js#L697) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderMCGGLobbyAnchorBar('), 'app.js harus memiliki generator rend`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`scrollToMCGGLobby()`](#scrolltomcgglobby)

<a id="rendermcgglobbyselectoptions"></a>
#### `renderMCGGLobbySelectOptions()`

- **Definisi:** [`app.js:8879`](app.js#L8879)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7927`](app.js#L7927) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:7986`](app.js#L7986) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGLobbySelectOptions();`
  - [`app.js:8943`](app.js#L8943) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGLobbySelectOptions();`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`renderMCGGLobbyAnchorBar()`](#rendermcgglobbyanchorbar)

<a id="rendermcggtable"></a>
#### `renderMCGGTable()`

- **Definisi:** [`app.js:8922`](app.js#L8922)
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
  - [`app.js:875`](app.js#L875) — di dalam fungsi `bypassLoaderWithCache()`
    `renderMCGGTable();`
  - [`app.js:1422`](app.js#L1422) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderMCGGTable();`
  - [`app.js:2172`](app.js#L2172) — di dalam fungsi `verifyAdminPin()`
    `renderMCGGTable();`
  - [`app.js:2184`](app.js#L2184) — di dalam fungsi `logoutAdmin()`
    `renderMCGGTable();`
  - [`app.js:2269`](app.js#L2269) — di dalam fungsi `toggleRegistrationStatus()`
    `renderMCGGTable();`
  - [`app.js:2311`](app.js#L2311) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `renderMCGGTable();`
  - [`app.js:4328`](app.js#L4328) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `renderMCGGTable();`
  - [`app.js:7689`](app.js#L7689) — di dalam fungsi `changeMCGGLobby()`
    `renderMCGGTable();`
  - [`app.js:7760`](app.js#L7760) — di dalam fungsi `updateCommanderPoolFromSetup()`
    `renderMCGGTable();`
  - [`app.js:7928`](app.js#L7928) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:7987`](app.js#L7987) — di dalam fungsi `syncMCGGPlayers()`
    `renderMCGGTable();`
  - [`app.js:8248`](app.js#L8248) — di dalam fungsi `updateMCGGRank()`
    `renderMCGGTable();`
  - [`app.js:8283`](app.js#L8283) — di dalam fungsi `updateMCGGCommander()`
    `renderMCGGTable();`
  - [`app.js:8319`](app.js#L8319) — di dalam fungsi `updateMCGGPenalty()`
    `renderMCGGTable();`
  - [`app.js:8644`](app.js#L8644) — di dalam fungsi `drawMatchPool()`
    `renderMCGGTable();`
  - [`app.js:8695`](app.js#L8695) — di dalam fungsi `assignMatchPoolToPlayers()`
    `renderMCGGTable();`
  - [`app.js:8715`](app.js#L8715) — di dalam fungsi `toggleLockMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:8741`](app.js#L8741) — di dalam fungsi `nextMatchDraw()`
    `renderMCGGTable();`
  - [`app.js:8754`](app.js#L8754) — di dalam fungsi `switchLobbyDrawView()`
    `renderMCGGTable();`
  - [`app.js:8774`](app.js#L8774) — di dalam fungsi `resetLobbyDraw()`
    `renderMCGGTable();`
  - [`app.js:8828`](app.js#L8828) — di dalam fungsi `changeCommanderDrawTarget()`
    `renderMCGGTable();`
  - [`app.js:9567`](app.js#L9567) — di dalam fungsi `clearAllData()`
    `renderMCGGTable();`
  - [`app.js:9590`](app.js#L9590) — cakupan global / event handler
    `renderMCGGTable();`
  - [`app.js:9711`](app.js#L9711) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGTable();`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGLobbySelectOptions()`](#rendermcgglobbyselectoptions), [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`goToMCGGGroupPage()`](#gotomcgggrouppage), [`setMCGGStageFilter()`](#setmcggstagefilter), [`prevMCGGGroupPage()`](#prevmcgggrouppage), [`nextMCGGGroupPage()`](#nextmcgggrouppage), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`syncMCGGGrandFinal()`](#syncmcgggrandfinal), [`drawMatchCommanders()`](#drawmatchcommanders), [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml)

<a id="getlobbyshortlabel"></a>
#### `getLobbyShortLabel(k)`

- **Definisi:** [`app.js:8979`](app.js#L8979)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="renderlobbyrowshtml"></a>
#### `renderLobbyRowsHtml(list, lobbyKey, isSingleLobby)`

- **Definisi:** [`app.js:9149`](app.js#L9149)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:9040`](app.js#L9040) — di dalam fungsi `renderMCGGTable()`
    `legacyTbody.innerHTML = renderLobbyRowsHtml(singleList, currentMCGGLobby, isSingleLobby);`
  - [`app.js:9101`](app.js#L9101) — di dalam fungsi `renderMCGGTable()`
    `const rowsHtml = renderLobbyRowsHtml(currentList, lobbyKey, isSingleLobby);`
  - [`app.js:10438`](app.js#L10438) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:10540`](app.js#L10540) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, lobbyKey, false)}`
  - [`app.js:10587`](app.js#L10587) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `${renderLobbyRowsHtml(list, 'GRAND_FINAL', false)}`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`isMCGGLobbyPointsFull()`](#ismcgglobbypointsfull), [`escapeHtml()`](#escapehtml), [`buildRoundCell()`](#buildroundcell), [`buildPenaltySelect()`](#buildpenaltyselect)

<a id="buildpenaltyselect"></a>
#### `buildPenaltySelect(player, targetLobby)`

- **Definisi:** [`app.js:9328`](app.js#L9328)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9243`](app.js#L9243) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td style="text-align: center;">${buildPenaltySelect(p, lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`updateMCGGPenalty()`](#updatemcggpenalty)

<a id="setmcggviewmode"></a>
#### `setMCGGViewMode(mode)`

- **Definisi:** [`app.js:9685`](app.js#L9685)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MCGG ---
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:616`](index.html#L616) — Event `onclick`
    `<button type="button" id="btnViewMcggHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:619`](index.html#L619) — Event `onclick`
    `<button type="button" id="btnViewMcggLobbies" class="btn btn-outline" style="font-size: 0.8rem; padd`
  - [`app.js:2507`](app.js#L2507) — di dalam fungsi `switchTab()`
    `setMCGGViewMode('HUB');`
  - [`functional_tests.js:1171`](functional_tests.js#L1171) — pada skenario pengujian
    `assert(appCode.includes('function setMCGGViewMode('), 'app.js harus memiliki fungsi setMCGGViewMode'`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui), [`renderMCGGTable()`](#rendermcggtable)

<a id="selectmcggflownode"></a>
#### `selectMCGGFlowNode(nodeKey)`

- **Definisi:** [`app.js:10255`](app.js#L10255)
- **Deskripsi:** ---------------------------------------------------------------------------- 2. MASTER-DETAIL INTERACTIVE HUB MCGG ----------------------------------------------------------------------------
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:10291`](app.js#L10291) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:10314`](app.js#L10314) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE2_WILDCARD' ? 'active' : ''}" oncl`
  - [`app.js:10324`](app.js#L10324) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMCGGFlowNode(`
  - [`app.js:10345`](app.js#L10345) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_A' ? 'active' : ''}" onclic`
  - [`app.js:10349`](app.js#L10349) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'STAGE3_SEMI_B' ? 'active' : ''}" onclic`
  - [`app.js:10369`](app.js#L10369) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'STAGE4_GRAND_FINAL' ? 'active'`
  - [`functional_tests.js:1173`](functional_tests.js#L1173) — pada skenario pengujian
    `assert(appCode.includes('function selectMCGGFlowNode('), 'app.js harus memiliki selectMCGGFlowNode')`
- **Memanggil Fungsi Internal:** [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

<a id="rendermcgginteractivehubui"></a>
#### `renderMCGGInteractiveHubUI()`

- **Definisi:** [`app.js:10260`](app.js#L10260)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:8936`](app.js#L8936) — di dalam fungsi `renderMCGGTable()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:9704`](app.js#L9704) — di dalam fungsi `setMCGGViewMode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:10257`](app.js#L10257) — di dalam fungsi `selectMCGGFlowNode()`
    `renderMCGGInteractiveHubUI();`
  - [`app.js:10602`](app.js#L10602) — di dalam fungsi `shuffleMCGG32Besar()`
    `renderMCGGInteractiveHubUI();`
  - [`functional_tests.js:1172`](functional_tests.js#L1172) — pada skenario pengujian
    `assert(appCode.includes('function renderMCGGInteractiveHubUI()'), 'app.js harus memiliki renderMCGGI`
- **Memanggil Fungsi Internal:** [`selectMCGGFlowNode()`](#selectmcggflownode), [`renderMCGGDetailPanelContent()`](#rendermcggdetailpanelcontent)

<a id="rendermcggdetailpanelcontent"></a>
#### `renderMCGGDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:10388`](app.js#L10388)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10382`](app.js#L10382) — di dalam fungsi `renderMCGGInteractiveHubUI()`
    `rightHtml += renderMCGGDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`renderLobbyCommanderDrawPanelHtml()`](#renderlobbycommanderdrawpanelhtml), [`renderLobbyRowsHtml()`](#renderlobbyrowshtml), [`shuffleMCGG32Besar()`](#shufflemcgg32besar)

<a id="shufflemcgg32besar"></a>
#### `shuffleMCGG32Besar()`

- **Definisi:** [`app.js:10597`](app.js#L10597)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:10482`](app.js#L10482) — di dalam fungsi `renderMCGGDetailPanelContent()`
    `<button class="btn btn-gold" style="padding:0.3rem 0.75rem;font-size:0.78rem;" onclick="shuffleMCGG3`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGInteractiveHubUI()`](#rendermcgginteractivehubui)

---

### ⚔️ Turnamen MLBB (Bagan, Grup & Playoff Engine)

<a id="prevmlbbgrouppage"></a>
#### `prevMLBBGroupPage()`

- **Definisi:** [`app.js:13`](app.js#L13)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:536`](index.html#L536) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-left" onclick="prevMLBBGroupPage()" i`
  - [`app.js:5378`](app.js#L5378) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-outline" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:847`](functional_tests.js#L847) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function prevMLBBGroupPage()'), 'Harus ada fungsi prevMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="nextmlbbgrouppage"></a>
#### `nextMLBBGroupPage()`

- **Definisi:** [`app.js:20`](app.js#L20)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:542`](index.html#L542) — Event `onclick`
    `<button type="button" class="carousel-arrow-btn carousel-arrow-right" onclick="nextMLBBGroupPage()" `
  - [`app.js:5381`](app.js#L5381) — di dalam fungsi `renderGroupStageUI()`
    `<button type="button" class="btn btn-primary" style="font-weight: 700; padding: 0.42rem 0.95rem; fon`
  - [`functional_tests.js:848`](functional_tests.js#L848) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function nextMLBBGroupPage()'), 'Harus ada fungsi nextMLBBGroupPage');`
- **Memanggil Fungsi Internal:** [`renderGroupStageUI()`](#rendergroupstageui)

<a id="gotomlbbgrouppage"></a>
#### `goToMLBBGroupPage(pg)`

- **Definisi:** [`app.js:27`](app.js#L27)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5369`](app.js#L5369) — di dalam fungsi `renderGroupStageUI()`
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

- **Definisi:** [`app.js:3750`](app.js#L3750)
- **Deskripsi:** TOURNAMENT MECHANISMS: KNOCKOUT vs GROUP STAGE
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3766`](app.js#L3766) — di dalam fungsi `getActiveMLBBFormat()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:4191`](app.js#L4191) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:4401`](app.js#L4401) — di dalam fungsi `generateBracket()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`app.js:4730`](app.js#L4730) — di dalam fungsi `generateGroupStage()`
    `let verifiedTeams = getVerifiedMLBBTeams();`
  - [`functional_tests.js:576`](functional_tests.js#L576) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getVerifiedMLBBTeams()'), 'Harus ada fungsi getVerifiedMLBBTeams()`

<a id="getactivemlbbformat"></a>
#### `getActiveMLBBFormat()`

- **Definisi:** [`app.js:3758`](app.js#L3758)
- **Deskripsi:** Menentukan format bagan MLBB aktif (GROUP_2 jika N < 12 tim, GROUP_4 jika N >= 12 tim).
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4737`](app.js#L4737) — di dalam fungsi `generateGroupStage()`
    `const activeFormat = getActiveMLBBFormat();`
  - [`functional_tests.js:577`](functional_tests.js#L577) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getActiveMLBBFormat()'), 'Harus ada fungsi getActiveMLBBFormat()')`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="rendercurrentmlbbformat"></a>
#### `renderCurrentMLBBFormat()`

- **Definisi:** [`app.js:3793`](app.js#L3793)
- **Titik Pemanggilan (17 lokasi):**
  - [`app.js:858`](app.js#L858) — di dalam fungsi `confirmResetBaganWithPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:874`](app.js#L874) — di dalam fungsi `bypassLoaderWithCache()`
    `renderCurrentMLBBFormat();`
  - [`app.js:1442`](app.js#L1442) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2171`](app.js#L2171) — di dalam fungsi `verifyAdminPin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2183`](app.js#L2183) — di dalam fungsi `logoutAdmin()`
    `renderCurrentMLBBFormat();`
  - [`app.js:2268`](app.js#L2268) — di dalam fungsi `toggleRegistrationStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3200`](app.js#L3200) — di dalam fungsi `setParticipantStatus()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3257`](app.js#L3257) — di dalam fungsi `deleteParticipant()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3486`](app.js#L3486) — di dalam fungsi `saveParticipantEdit()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3790`](app.js#L3790) — di dalam fungsi `changeTournamentFormat()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3854`](app.js#L3854) — di dalam fungsi `toggleLockMLBBGroup()`
    `renderCurrentMLBBFormat();`
  - [`app.js:3935`](app.js#L3935) — di dalam fungsi `proceedToMLBBStage2()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4009`](app.js#L4009) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderCurrentMLBBFormat();`
  - [`app.js:4267`](app.js#L4267) — di dalam fungsi `resetMLBBToStage1()`
    `renderCurrentMLBBFormat();`
  - [`app.js:9552`](app.js#L9552) — di dalam fungsi `loadSampleData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:9566`](app.js#L9566) — di dalam fungsi `clearAllData()`
    `renderCurrentMLBBFormat();`
  - [`app.js:9589`](app.js#L9589) — cakupan global / event handler
    `renderCurrentMLBBFormat();`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="togglelockmlbbgroup"></a>
#### `toggleLockMLBBGroup()`

- **Definisi:** [`app.js:3838`](app.js#L3838)
- **Deskripsi:** 2. KONTROL LOCK & TRANSISI TAHAP MLBB (ALA CHALLONGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:484`](index.html#L484) — Event `onclick`
    `<button id="btnLockMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="isallmlbbgroupmatchesfinished"></a>
#### `isAllMLBBGroupMatchesFinished()`

- **Definisi:** [`app.js:3858`](app.js#L3858)
- **Deskripsi:** Memeriksa apakah seluruh jadwal pertandingan babak grup telah selesai dan memiliki pemenang.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3919`](app.js#L3919) — di dalam fungsi `proceedToMLBBStage2()`
    `if (!isAllMLBBGroupMatchesFinished()) {`
  - [`functional_tests.js:752`](functional_tests.js#L752) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function isAllMLBBGroupMatchesFinished()'), 'Harus ada fungsi isAllMLBBGrou`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="evaluatemlbbtiebreaker"></a>
#### `evaluateMLBBTieBreaker()`

- **Definisi:** [`app.js:3869`](app.js#L3869)
- **Deskripsi:** Mendeteksi apakah peringkat 2 & 3 grup memiliki poin sama di batas kelolosan babak Playoff.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3923`](app.js#L3923) — di dalam fungsi `proceedToMLBBStage2()`
    `if (evaluateMLBBTieBreaker()) {`
  - [`functional_tests.js:759`](functional_tests.js#L759) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function evaluateMLBBTieBreaker()'), 'Harus ada fungsi evaluateMLBBTieBreak`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`saveStageStateLocal()`](#savestagestatelocal)

<a id="resolvemlbbtiebreaker"></a>
#### `resolveMLBBTieBreaker(winnerTeam)`

- **Definisi:** [`app.js:3894`](app.js#L3894)
- **Deskripsi:** Menetapkan pemenang pertandingan penentuan (Tie-Breaker BO1) dan memberikan +1 poin penentu ke klasemen.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:5545`](app.js#L5545) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:5546`](app.js#L5546) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`functional_tests.js:760`](functional_tests.js#L760) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resolveMLBBTieBreaker('), 'Harus ada fungsi resolveMLBBTieBreaker'`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="proceedtomlbbstage2"></a>
#### `proceedToMLBBStage2()`

- **Definisi:** [`app.js:3913`](app.js#L3913)
- **Deskripsi:** Memvalidasi kelengkapan fase grup dan tie-breaker, lalu membuka Tahap 2 (Bagan Playoff).
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:485`](index.html#L485) — Event `onclick`
    `<button id="btnProceedMLBBStage2" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`app.js:7572`](app.js#L7572) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-primary" style="padding: 0.45rem 1rem; font-size: 0.85rem; background: var(--`
  - [`functional_tests.js:753`](functional_tests.js#L753) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function proceedToMLBBStage2()'), 'Harus ada fungsi proceedToMLBBStage2');`
- **Memanggil Fungsi Internal:** [`isAllMLBBGroupMatchesFinished()`](#isallmlbbgroupmatchesfinished), [`evaluateMLBBTieBreaker()`](#evaluatemlbbtiebreaker), [`renderGroupStageUI()`](#rendergroupstageui), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="shufflemlbbplayoffbracket"></a>
#### `shuffleMLBBPlayoffBracket()`

- **Definisi:** [`app.js:3940`](app.js#L3940)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:487`](index.html#L487) — Event `onclick`
    `<button id="btnShuffleMLBBPlayoff" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`app.js:7618`](app.js#L7618) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;" on`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="testmlbbplayoffwithcurrentstandings"></a>
#### `testMLBBPlayoffWithCurrentStandings()`

- **Definisi:** [`app.js:3985`](app.js#L3985)
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:1023`](index.html#L1023) — Event `onclick`
    `<button class="btn btn-gold" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; font-`
  - [`app.js:4136`](app.js#L4136) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;" on`
  - [`app.js:7575`](app.js#L7575) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="padding: 0.45rem 1rem; font-size: 0.85rem; border-color: var(`
  - [`app.js:7621`](app.js#L7621) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="font-size:0.75rem; padding:0.25rem 0.65rem; border-color:var(`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`initGroupPlayoff()`](#initgroupplayoff), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`setMLBBViewMode()`](#setmlbbviewmode), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`findTeamGroupAndRank()`](#findteamgroupandrank), [`escapeHtml()`](#escapehtml), [`getSortedGroupTeams()`](#getsortedgroupteams), [`closeTestDrawModal()`](#closetestdrawmodal)

<a id="testmlbbgroupallocationdraw"></a>
#### `testMLBBGroupAllocationDraw()`

- **Definisi:** [`app.js:4189`](app.js#L4189)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:1007`](index.html#L1007) — Event `onclick`
    `<button class="btn btn-outline" style="width: 100%; font-size: 0.82rem; padding: 0.45rem 0.75rem; bo`
  - [`app.js:4210`](app.js#L4210) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<button class="btn btn-gold" style="font-size:0.75rem; padding:0.25rem 0.6rem; font-weight:700;" onc`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`showToast()`](#showtoast), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`getTeamDept()`](#getteamdept), [`isTeamInvited()`](#isteaminvited), [`escapeHtml()`](#escapehtml)

<a id="resetmlbbtostage1"></a>
#### `resetMLBBToStage1()`

- **Definisi:** [`app.js:4259`](app.js#L4259)
- **Deskripsi:** Mengembalikan status turnamen ke Tahap 1 (Fase Grup) untuk merevisi skor jika diperlukan.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:486`](index.html#L486) — Event `onclick`
    `<button id="btnResetMLBBStage1" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0`
  - [`functional_tests.js:754`](functional_tests.js#L754) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function resetMLBBToStage1()'), 'Harus ada fungsi resetMLBBToStage1');`
- **Memanggil Fungsi Internal:** [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="resettotalmlbbgroupandbracket"></a>
#### `resetTotalMLBBGroupAndBracket()`

- **Definisi:** [`app.js:4271`](app.js#L4271)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:489`](index.html#L489) — Event `onclick`
    `<button id="btnResetTotalMLBBGroup" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5r`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`openResetBaganModal()`](#openresetbaganmodal)

<a id="generatebracket"></a>
#### `generateBracket(doShuffle = false)`

- **Definisi:** [`app.js:4391`](app.js#L4391)
- **Deskripsi:** --- KNOCKOUT BRACKET ---
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:475`](index.html#L475) — Event `onchange`
    `<select id="bracketSize" onchange="generateBracket()" style="padding: 0.5rem 0.8rem; font-size: 0.85`
  - [`app.js:3783`](app.js#L3783) — di dalam fungsi `changeTournamentFormat()`
    `generateBracket(false);`
  - [`app.js:3829`](app.js#L3829) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateBracket(true);`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket), [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams)

<a id="renderbracket"></a>
#### `renderBracket()`

- **Definisi:** [`app.js:4464`](app.js#L4464)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:3810`](app.js#L3810) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderBracket();`
  - [`app.js:4397`](app.js#L4397) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:4441`](app.js#L4441) — di dalam fungsi `generateBracket()`
    `renderBracket();`
  - [`app.js:4461`](app.js#L4461) — di dalam fungsi `pickWinner()`
    `renderBracket();`
- **Memanggil Fungsi Internal:** [`pickWinner()`](#pickwinner)

<a id="allocatemlbbgroups"></a>
#### `allocateMLBBGroups(teamsList, groupNames, doShuffle = false)`

- **Definisi:** [`app.js:4539`](app.js#L4539)
- **Deskripsi:** Alokasi grup MLBB dengan Alur Siklus Round-Robin Bertingkat (Flow Regulasi): 1. Acak tim invited ke masing-masing group (tidak boleh ada di group yang sama). 2. Acak urutan tim sisanya (tim reguler). 3. Masukkan tim sesuai urutan acak ke masing-masing group: - Penempatan tim selalu memprioritaskan grup dengan jumlah peserta/tim terkecil terlebih dahulu. - Siklus 1: Cek nama depan sama (satelit) ATAU divisi sama -> jika bentrok, ke next group. - Siklus 2: Jika dalam 1 cycle tetap tidak dapat group -> masukkan ke group berikutnya jika tidak ada nama depan sama (aturan divisi dilanggar terlebih dahulu). - Siklus 3: Jika dalam 1 cycle berikutnya masih tidak dapat -> masukkan ke group berikutnya (aturan satelit dilanggar demi menjaga keseimbangan kapasitas). Invarian Mutlak: Keseimbangan kapasitas grup dijaga ketat (misal 41 tim ke 8 grup = tepat 7 grup isi 5 tim dan 1 grup isi 6 tim). /
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4198`](app.js#L4198) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, true);`
  - [`app.js:4749`](app.js#L4749) — di dalam fungsi `generateGroupStage()`
    `const allocated = allocateMLBBGroups(verifiedTeams, groupNames, doShuffle);`
  - [`functional_tests.js:885`](functional_tests.js#L885) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('allocateMLBBGroups('), 'app.js harus memiliki fungsi alokasi grup cerdas');`
- **Memanggil Fungsi Internal:** [`getTeamPrefix()`](#getteamprefix), [`getTeamDept()`](#getteamdept), [`getDepartmentCluster()`](#getdepartmentcluster), [`isTeamInvited()`](#isteaminvited), [`isInvited()`](#isinvited), [`getPrefix()`](#getprefix), [`getDept()`](#getdept), [`getOverBaseCount()`](#getoverbasecount), [`hasPrefixConflict()`](#hasprefixconflict), [`hasDeptConflict()`](#hasdeptconflict)

<a id="generategroupstage"></a>
#### `generateGroupStage(doShuffle = false)`

- **Definisi:** [`app.js:4729`](app.js#L4729)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:220`](app.js#L220) — di dalam fungsi `toggleInvitedTeam()`
    `generateGroupStage(false);`
  - [`app.js:3787`](app.js#L3787) — di dalam fungsi `changeTournamentFormat()`
    `generateGroupStage(false);`
  - [`app.js:3831`](app.js#L3831) — di dalam fungsi `shuffleAndGenerateTournament()`
    `generateGroupStage(true);`
- **Memanggil Fungsi Internal:** [`getVerifiedMLBBTeams()`](#getverifiedmlbbteams), [`getActiveMLBBFormat()`](#getactivemlbbformat), [`allocateMLBBGroups()`](#allocatemlbbgroups), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="getmlbbheadtoheadwinner"></a>
#### `getMLBBHeadToHeadWinner(teamA, teamB, gName)`

- **Definisi:** [`app.js:4780`](app.js#L4780)
- **Deskripsi:** Helper mencari pemenang head-to-head (pertemuan langsung) antar 2 tim di fase grup MLBB
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4861`](app.js#L4861) — di dalam fungsi `compareMLBBTeams()`
    `const h2h = getMLBBHeadToHeadWinner(a.name, b.name, gName);`
- **Memanggil Fungsi Internal:** [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="comparemlbbteams"></a>
#### `compareMLBBTeams(a, b)`

- **Definisi:** [`app.js:4847`](app.js#L4847)
- **Deskripsi:** Komparator resmi urutan klasemen MLBB sesuai regulasi resmi Turnamen Yokke Squad: 1. Point (Total Poin, besar ke kecil) 2. Agregat Skor Game / Game Difference (Diff = Game Menang - Game Kalah, besar ke kecil) 3. Head-to-Head / H2H (Jika Poin & Agregat sama, pemenang pertemuan langsung di grup lebih atas) 4. Menang (Match Won / W, besar ke kecil) 5. Kalah (Match Lost / L, kecil ke besar: makin sedikit kalah makin di atas) 6. Total MVP Tim (besar ke kecil) 7. Nama Tim (A-Z)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4906`](app.js#L4906) — di dalam fungsi `getSortedGroupTeams()`
    `return [...teams].sort((a, b) => compareMLBBTeams(a, b, gName));`
- **Memanggil Fungsi Internal:** [`getMLBBHeadToHeadWinner()`](#getmlbbheadtoheadwinner)

<a id="findvalidbracketpermutation"></a>
#### `findValidBracketPermutation(candidates, forbiddenGroupsPerSlot)`

- **Definisi:** [`app.js:4918`](app.js#L4918)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4978`](app.js#L4978) — di dalam fungsi `initGroupPlayoff()`
    `branchJ2 = findValidBracketPermutation(j2List, forbiddenForJ2);`
  - [`app.js:4985`](app.js#L4985) — di dalam fungsi `initGroupPlayoff()`
    `branchJ3 = findValidBracketPermutation(j3List, forbiddenForJ3);`
  - [`app.js:5101`](app.js#L5101) — di dalam fungsi `initGroupPlayoff()`
    `bJ2 = findValidBracketPermutation(j2List, forbidden);`
- **Memanggil Fungsi Internal:** [`shuffleArray()`](#shufflearray), [`backtrack()`](#backtrack)

<a id="initgroupplayoff"></a>
#### `initGroupPlayoff(doShuffle = false)`

- **Definisi:** [`app.js:4941`](app.js#L4941)
- **Deskripsi:** Menghasilkan bagan Playoff MLBB berdasarkan klasemen akhir grup (Cross-Seeding Juara vs Runner-up).
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:1502`](app.js#L1502) — di dalam fungsi `cleanOrphanedTournamentData()`
    `if (typeof initGroupPlayoff === 'function') initGroupPlayoff();`
  - [`app.js:3907`](app.js#L3907) — di dalam fungsi `resolveMLBBTieBreaker()`
    `initGroupPlayoff();`
  - [`app.js:3931`](app.js#L3931) — di dalam fungsi `proceedToMLBBStage2()`
    `initGroupPlayoff(true);`
  - [`app.js:3964`](app.js#L3964) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `initGroupPlayoff(true);`
  - [`app.js:4000`](app.js#L4000) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `initGroupPlayoff(true);`
  - [`app.js:4762`](app.js#L4762) — di dalam fungsi `generateGroupStage()`
    `initGroupPlayoff();`
  - [`app.js:4775`](app.js#L4775) — di dalam fungsi `updateGroupRecord()`
    `initGroupPlayoff();`
  - [`app.js:6098`](app.js#L6098) — di dalam fungsi `setGroupMatchScore()`
    `initGroupPlayoff();`
  - [`app.js:7142`](app.js#L7142) — di dalam fungsi `resetGroupMatchScore()`
    `initGroupPlayoff();`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`shuffleArray()`](#shufflearray), [`findValidBracketPermutation()`](#findvalidbracketpermutation)

<a id="pickgroupplayoffwinner"></a>
#### `pickGroupPlayoffWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:5152`](app.js#L5152)
- **Deskripsi:** Menetapkan tim pemenang pada pertandingan bagan Playoff dan meloloskannya ke ronde berikutnya.
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7660`](app.js#L7660) — di dalam fungsi `renderGroupPlayoffTree()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:7664`](app.js#L7664) — di dalam fungsi `renderGroupPlayoffTree()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree)

<a id="promptplayoffmvp"></a>
#### `promptPlayoffMVP(rIdx, mIdx)`

- **Definisi:** [`app.js:5319`](app.js#L5319)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7671`](app.js#L7671) — di dalam fungsi `renderGroupPlayoffTree()`
    `<button class="btn btn-outline" style="font-size:0.68rem; padding:0.15rem 0.5rem;" onclick="promptPl`
  - [`functional_tests.js:792`](functional_tests.js#L792) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptPlayoffMVP('), 'Harus memiliki promptPlayoffMVP');`
- **Memanggil Fungsi Internal:** [`openMLBBPlayoffMvpModal()`](#openmlbbplayoffmvpmodal)

<a id="rendergroupstageui"></a>
#### `renderGroupStageUI()`

- **Definisi:** [`app.js:5326`](app.js#L5326)
- **Titik Pemanggilan (15 lokasi):**
  - [`app.js:17`](app.js#L17) — di dalam fungsi `prevMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:24`](app.js#L24) — di dalam fungsi `nextMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:29`](app.js#L29) — di dalam fungsi `goToMLBBGroupPage()`
    `renderGroupStageUI();`
  - [`app.js:3815`](app.js#L3815) — di dalam fungsi `renderCurrentMLBBFormat()`
    `renderGroupStageUI();`
  - [`app.js:3908`](app.js#L3908) — di dalam fungsi `resolveMLBBTieBreaker()`
    `renderGroupStageUI();`
  - [`app.js:3926`](app.js#L3926) — di dalam fungsi `proceedToMLBBStage2()`
    `renderGroupStageUI();`
  - [`app.js:4763`](app.js#L4763) — di dalam fungsi `generateGroupStage()`
    `renderGroupStageUI();`
  - [`app.js:4776`](app.js#L4776) — di dalam fungsi `updateGroupRecord()`
    `renderGroupStageUI();`
  - [`app.js:6099`](app.js#L6099) — di dalam fungsi `setGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:6834`](app.js#L6834) — di dalam fungsi `setGroupMatchMVP()`
    `renderGroupStageUI();`
  - [`app.js:6926`](app.js#L6926) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:6944`](app.js#L6944) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:6967`](app.js#L6967) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupStageUI === 'function') renderGroupStageUI();`
  - [`app.js:7143`](app.js#L7143) — di dalam fungsi `resetGroupMatchScore()`
    `renderGroupStageUI();`
  - [`app.js:9669`](app.js#L9669) — di dalam fungsi `setMLBBViewMode()`
    `renderGroupStageUI();`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`goToMLBBGroupPage()`](#gotomlbbgrouppage), [`prevMLBBGroupPage()`](#prevmlbbgrouppage), [`nextMLBBGroupPage()`](#nextmlbbgrouppage), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`getSortedGroupTeams()`](#getsortedgroupteams), [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`resolveMLBBTieBreaker()`](#resolvemlbbtiebreaker)

<a id="setmlbbactiveweek"></a>
#### `setMLBBActiveWeek(weekKey)`

- **Definisi:** [`app.js:5764`](app.js#L5764)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7286`](app.js#L7286) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_1' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:7291`](app.js#L7291) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_2' ? 'active' : ''}" onclick="setMLBBActive`
  - [`app.js:7296`](app.js#L7296) — di dalam fungsi `renderGroupFixturesUI()`
    `<div class="schedule-week-btn ${mlbbActiveWeek === 'WEEK_3' ? 'active' : ''}" onclick="setMLBBActive`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivedayfilter"></a>
#### `setMLBBActiveDayFilter(day)`

- **Definisi:** [`app.js:5772`](app.js#L5772)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:7403`](app.js#L7403) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 'ALL' ? 'active' : ''}" onc`
  - [`app.js:7406`](app.js#L7406) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 1 ? 'active' : ''}" onclick`
  - [`app.js:7409`](app.js#L7409) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 2 ? 'active' : ''}" onclick`
  - [`app.js:7412`](app.js#L7412) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 3 ? 'active' : ''}" onclick`
  - [`app.js:7415`](app.js#L7415) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 4 ? 'active' : ''}" onclick`
  - [`app.js:7418`](app.js#L7418) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="schedule-day-pill ${mlbbActiveDayFilter === 5 ? 'active' : ''}" onclick`
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="setmlbbactivegroupfilter"></a>
#### `setMLBBActiveGroupFilter(gName)`

- **Definisi:** [`app.js:5777`](app.js#L5777)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7424`](app.js#L7424) — di dalam fungsi `renderGroupFixturesUI()`
    `<select onchange="setMLBBActiveGroupFilter(this.value)" style="background:#0f172a; border:1px solid `
- **Memanggil Fungsi Internal:** [`renderGroupFixturesUI()`](#rendergroupfixturesui)

<a id="getgroupfixtures"></a>
#### `getGroupFixtures(gName, dayFilter = null)`

- **Definisi:** [`app.js:5783`](app.js#L5783)
- **Deskripsi:** --- BAGAN PERTANDINGAN FASE GRUP TERDISTRIBUSI 4 HARI (ROUND-ROBIN BO3) ---
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:3862`](app.js#L3862) — di dalam fungsi `isAllMLBBGroupMatchesFinished()`
    `const fixtures = getGroupFixtures(gName);`
  - [`app.js:5996`](app.js#L5996) — di dalam fungsi `getGroupRestingTeams()`
    `const dayFixtures = getGroupFixtures(gName, day);`
  - [`app.js:7437`](app.js#L7437) — di dalam fungsi `renderGroupFixturesUI()`
    `const fixtures = getGroupFixtures(gName, mlbbActiveDayFilter);`
  - [`app.js:10029`](app.js#L10029) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const fixtures = getGroupFixtures(gName);`
  - [`functional_tests.js:675`](functional_tests.js#L675) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getGroupFixtures('), 'app.js harus memiliki generator jadwal getGr`
- **Memanggil Fungsi Internal:** [`resolveTeamNameInGroup()`](#resolveteamnameingroup), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="savegroupfixturescore"></a>
#### `saveGroupFixtureScore(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:6137`](app.js#L6137)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7536`](app.js#L7536) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-primary" style="font-size:0.68rem; padding:2px 8px;" onclick="s`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="openmlbbgroupmvpmodal"></a>
#### `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, scoreA, scoreB)`

- **Definisi:** [`app.js:6190`](app.js#L6190)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6872`](app.js#L6872) — di dalam fungsi `promptGroupMatchMVP()`
    `openMLBBGroupMvpModal(matchId, gName, teamA, teamB, null, null);`
  - [`app.js:7540`](app.js#L7540) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 8px; color:var(-`
  - [`app.js:10083`](app.js#L10083) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname), [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="openmlbbplayoffmvpmodal"></a>
#### `openMLBBPlayoffMvpModal(rIdx, mIdx)`

- **Definisi:** [`app.js:6264`](app.js#L6264)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:5323`](app.js#L5323) — di dalam fungsi `promptPlayoffMVP()`
    `openMLBBPlayoffMvpModal(rIdx, mIdx);`
- **Memanggil Fungsi Internal:** [`initAndShowMvpModal()`](#initandshowmvpmodal)

<a id="closemlbbgroupmvpmodal"></a>
#### `closeMLBBGroupMvpModal()`

- **Definisi:** [`app.js:6450`](app.js#L6450)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:864`](index.html#L864) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:932`](index.html#L932) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;" on`
  - [`app.js:6697`](app.js#L6697) — di dalam fungsi `saveSelectedMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:6707`](app.js#L6707) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`
  - [`app.js:6749`](app.js#L6749) — di dalam fungsi `deleteCurrentMvp()`
    `closeMLBBGroupMvpModal();`

<a id="recalculategroupstandingsfromfixtures"></a>
#### `recalculateGroupStandingsFromFixtures()`

- **Definisi:** [`app.js:7146`](app.js#L7146)
- **Deskripsi:** Menghitung ulang total poin, menang, dan kalah tim di grup berdasarkan seluruh hasil pertandingan BO3.
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1397`](app.js#L1397) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
  - [`app.js:6096`](app.js#L6096) — di dalam fungsi `setGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:7140`](app.js#L7140) — di dalam fungsi `resetGroupMatchScore()`
    `recalculateGroupStandingsFromFixtures();`
  - [`app.js:9602`](app.js#L9602) — cakupan global / event handler
    `if (typeof recalculateGroupStandingsFromFixtures === 'function') recalculateGroupStandingsFromFixtur`
- **Memanggil Fungsi Internal:** [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname)

<a id="rendergroupfixturesui"></a>
#### `renderGroupFixturesUI()`

- **Definisi:** [`app.js:7274`](app.js#L7274)
- **Titik Pemanggilan (11 lokasi):**
  - [`app.js:34`](app.js#L34) — di dalam fungsi `toggleAllMLBBFixtures()`
    `renderGroupFixturesUI();`
  - [`app.js:5415`](app.js#L5415) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:5561`](app.js#L5561) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupFixturesUI();`
  - [`app.js:5769`](app.js#L5769) — di dalam fungsi `setMLBBActiveWeek()`
    `renderGroupFixturesUI();`
  - [`app.js:5774`](app.js#L5774) — di dalam fungsi `setMLBBActiveDayFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:5779`](app.js#L5779) — di dalam fungsi `setMLBBActiveGroupFilter()`
    `renderGroupFixturesUI();`
  - [`app.js:6835`](app.js#L6835) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:6927`](app.js#L6927) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:6945`](app.js#L6945) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`app.js:6968`](app.js#L6968) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderGroupFixturesUI === 'function') renderGroupFixturesUI();`
  - [`functional_tests.js:677`](functional_tests.js#L677) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderGroupFixturesUI('), 'app.js harus memiliki renderer bagan re`
- **Memanggil Fungsi Internal:** [`setMLBBActiveWeek()`](#setmlbbactiveweek), [`setMLBBActiveDayFilter()`](#setmlbbactivedayfilter), [`setMLBBActiveGroupFilter()`](#setmlbbactivegroupfilter), [`getGroupFixtures()`](#getgroupfixtures), [`escapeHtml()`](#escapehtml), [`getGroupRestingTeams()`](#getgrouprestingteams), [`isSameTeamName()`](#issameteamname), [`formatMatchMvpDisplayHtml()`](#formatmatchmvpdisplayhtml), [`openMatchPlayerVerifyModal()`](#openmatchplayerverifymodal), [`saveGroupFixtureScore()`](#savegroupfixturescore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="rendergroupplayofftree"></a>
#### `renderGroupPlayoffTree()`

- **Definisi:** [`app.js:7555`](app.js#L7555)
- **Deskripsi:** Merender bagan pohon eliminasi Playoff (Semifinal & Grand Final) atau status terkunci jika grup belum selesai.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:3968`](app.js#L3968) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `renderGroupPlayoffTree();`
  - [`app.js:4010`](app.js#L4010) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `renderGroupPlayoffTree();`
  - [`app.js:5316`](app.js#L5316) — di dalam fungsi `pickGroupPlayoffWinner()`
    `renderGroupPlayoffTree();`
  - [`app.js:5416`](app.js#L5416) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:5562`](app.js#L5562) — di dalam fungsi `renderGroupStageUI()`
    `renderGroupPlayoffTree();`
  - [`app.js:6687`](app.js#L6687) — di dalam fungsi `saveSelectedMvp()`
    `renderGroupPlayoffTree();`
  - [`app.js:6739`](app.js#L6739) — di dalam fungsi `deleteCurrentMvp()`
    `renderGroupPlayoffTree();`
- **Memanggil Fungsi Internal:** [`proceedToMLBBStage2()`](#proceedtomlbbstage2), [`testMLBBPlayoffWithCurrentStandings()`](#testmlbbplayoffwithcurrentstandings), [`shuffleMLBBPlayoffBracket()`](#shufflemlbbplayoffbracket), [`pickGroupPlayoffWinner()`](#pickgroupplayoffwinner), [`formatMatchMvpDisplayHtml()`](#formatmatchmvpdisplayhtml), [`promptPlayoffMVP()`](#promptplayoffmvp)

<a id="setmlbbviewmode"></a>
#### `setMLBBViewMode(mode)`

- **Definisi:** [`app.js:9635`](app.js#L9635)
- **Deskripsi:** --- TAMPILAN VIEW SWITCHER MLBB ---
- **Titik Pemanggilan (6 lokasi):**
  - [`index.html:513`](index.html#L513) — Event `onclick`
    `<button type="button" id="btnViewMlbbHub" class="btn btn-primary" style="font-size: 0.8rem; padding:`
  - [`index.html:516`](index.html#L516) — Event `onclick`
    `<button type="button" id="btnViewMlbbGroups" class="btn btn-outline" style="font-size: 0.8rem; paddi`
  - [`index.html:519`](index.html#L519) — Event `onclick`
    `<button type="button" id="btnViewMlbbFixtures" class="btn btn-outline" style="font-size: 0.8rem; pad`
  - [`app.js:2505`](app.js#L2505) — di dalam fungsi `switchTab()`
    `setMLBBViewMode('HUB');`
  - [`app.js:4006`](app.js#L4006) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `setMLBBViewMode('GROUPS');`
  - [`functional_tests.js:1164`](functional_tests.js#L1164) — pada skenario pengujian
    `assert(appCode.includes('function setMLBBViewMode('), 'app.js harus memiliki fungsi setMLBBViewMode'`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="selectmlbbstagenode"></a>
#### `selectMLBBStageNode(nodeKey)`

- **Definisi:** [`app.js:9718`](app.js#L9718)
- **Deskripsi:** ---------------------------------------------------------------------------- 1. MASTER-DETAIL INTERACTIVE HUB MLBB ----------------------------------------------------------------------------
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:9743`](app.js#L9743) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<select id="mobileStageSelect" class="mobile-stage-select" onchange="selectMLBBStageNode(this.value)`
  - [`app.js:9807`](app.js#L9807) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:9849`](app.js#L9849) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${isActive ? 'active' : ''}" onclick="selectMLBBStageNode`
  - [`app.js:9872`](app.js#L9872) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_UPPER_QF' ? 'active' : ''}" onclic`
  - [`app.js:9876`](app.js#L9876) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY3_LOWER_R1' ? 'active' : ''}" onclic`
  - [`app.js:9894`](app.js#L9894) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_UPPER' ? 'active' : ''}" onclick="`
  - [`app.js:9898`](app.js#L9898) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn ${activeNode === 'DAY4_LOWER' ? 'active' : ''}" onclick="`
  - [`app.js:9918`](app.js#L9918) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `<button type="button" class="flow-node-btn is-final ${activeNode === 'GRAND_FINAL_OFFLINE' ? 'active`
  - [`functional_tests.js:1166`](functional_tests.js#L1166) — pada skenario pengujian
    `assert(appCode.includes('function selectMLBBStageNode('), 'app.js harus memiliki selectMLBBStageNode`
- **Memanggil Fungsi Internal:** [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermlbbinteractivehubui"></a>
#### `renderMLBBInteractiveHubUI()`

- **Definisi:** [`app.js:9729`](app.js#L9729)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:5342`](app.js#L5342) — di dalam fungsi `renderGroupStageUI()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:6836`](app.js#L6836) — di dalam fungsi `setGroupMatchMVP()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:6928`](app.js#L6928) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:6946`](app.js#L6946) — di dalam fungsi `toggleMatchPlayerVerify()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:6969`](app.js#L6969) — di dalam fungsi `verifyAllMatchPlayers()`
    `if (typeof renderMLBBInteractiveHubUI === 'function') renderMLBBInteractiveHubUI();`
  - [`app.js:9660`](app.js#L9660) — di dalam fungsi `setMLBBViewMode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:9720`](app.js#L9720) — di dalam fungsi `selectMLBBStageNode()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:9988`](app.js#L9988) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:9991`](app.js#L9991) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
  - [`app.js:10079`](app.js#L10079) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `renderMLBBInteractiveHubUI();`
  - [`app.js:10081`](app.js#L10081) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:10082`](app.js#L10082) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`functional_tests.js:1165`](functional_tests.js#L1165) — pada skenario pengujian
    `assert(appCode.includes('function renderMLBBInteractiveHubUI()'), 'app.js harus memiliki renderMLBBI`
- **Memanggil Fungsi Internal:** [`selectMLBBStageNode()`](#selectmlbbstagenode), [`renderMLBBDetailPanelContent()`](#rendermlbbdetailpanelcontent)

<a id="rendermlbbdetailpanelcontent"></a>
#### `renderMLBBDetailPanelContent(nodeKey)`

- **Definisi:** [`app.js:9937`](app.js#L9937)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9931`](app.js#L9931) — di dalam fungsi `renderMLBBInteractiveHubUI()`
    `rightHtml += renderMLBBDetailPanelContent(activeNode);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`escapeHtml()`](#escapehtml), [`updateGroupRecord()`](#updategrouprecord), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui), [`getGroupFixtures()`](#getgroupfixtures), [`isSameTeamName()`](#issameteamname), [`setGroupMatchScore()`](#setgroupmatchscore), [`setGroupMatchSpecialResult()`](#setgroupmatchspecialresult), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

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

- **Definisi:** [`app.js:884`](app.js#L884)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:358`](index.html#L358) — Event `oninput`
    `<input type="text" id="participantSearchInput" placeholder="🔍 Cari Tim / IGN / Divisi..." oninput="`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants)

<a id="autolinkparticipantsassets"></a>
#### `autoLinkParticipantsAssets()`

- **Definisi:** [`app.js:1175`](app.js#L1175)
- **Deskripsi:** Otomatis hubungkan aset ID Card & Logo untuk semua peserta yang ada
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1438`](app.js#L1438) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3483`](app.js#L3483) — di dalam fungsi `saveParticipantEdit()`
    `autoLinkParticipantsAssets();`
  - [`app.js:3608`](app.js#L3608) — di dalam fungsi `renderParticipants()`
    `autoLinkParticipantsAssets();`
  - [`app.js:9550`](app.js#L9550) — di dalam fungsi `loadSampleData()`
    `autoLinkParticipantsAssets();`
  - [`app.js:9576`](app.js#L9576) — cakupan global / event handler
    `autoLinkParticipantsAssets();`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap)

<a id="fetchparticipantsfromgooglesheet"></a>
#### `fetchParticipantsFromGoogleSheet(isSilent = false, isPure = false)`

- **Definisi:** [`app.js:1210`](app.js#L1210)
- **Deskripsi:** Fetch registered participants from Google Sheets via doGet Webhook Google Sheets menjadi Single Source of Truth: data yang dihapus di sheet tidak akan dimunculkan kembali.
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:344`](index.html#L344) — Event `onclick`
    `<button class="btn btn-primary" id="btnSyncGSheet" style="padding: 0.45rem 0.9rem; font-size: 0.82re`
  - [`app.js:1577`](app.js#L1577) — di dalam fungsi `resetCacheAndFollowGSheet()`
    `await fetchParticipantsFromGoogleSheet(false, true);`
  - [`app.js:9608`](app.js#L9608) — cakupan global / event handler
    `fetchParticipantsFromGoogleSheet(true, true).catch(err => {`
  - [`app.js:9614`](app.js#L9614) — cakupan global / event handler
    `await fetchParticipantsFromGoogleSheet(true, true);`
- **Memanggil Fungsi Internal:** [`getItemKey()`](#getitemkey), [`findLogoByTeamName()`](#findlogobyteamname), [`saveLogoToMap()`](#savelogotomap), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`saveIdCardToMap()`](#saveidcardtomap), [`renderRules()`](#renderrules), [`deduplicateGroupMatchResults()`](#deduplicategroupmatchresults), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`renderMCGGTable()`](#rendermcggtable), [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`updateCommanderPoolFromSetup()`](#updatecommanderpoolfromsetup), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts), [`showToast()`](#showtoast)

<a id="toggleregistrationstatus"></a>
#### `toggleRegistrationStatus()`

- **Definisi:** [`app.js:2253`](app.js#L2253)
- **Titik Pemanggilan (5 lokasi):**
  - [`index.html:41`](index.html#L41) — Event `onclick`
    `<button id="btnToggleReg" class="btn btn-outline" style="display: none; padding: 0.25rem 0.65rem; fo`
  - [`index.html:330`](index.html#L330) — Event `onclick`
    `<button id="btnToggleRegPeserta" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0`
  - [`index.html:482`](index.html#L482) — Event `onclick`
    `<button id="btnToggleRegMLBB" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5rem 0.8`
  - [`index.html:590`](index.html#L590) — Event `onclick`
    `<button id="btnToggleRegMCGG" class="btn btn-outline" style="display: none; font-size: 0.85rem; padd`
  - [`functional_tests.js:825`](functional_tests.js#L825) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleRegistrationStatus()'), 'Harus memiliki toggleRegistrationSt`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui), [`updateAuthUI()`](#updateauthui), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="handleregister"></a>
#### `handleRegister(e)`

- **Definisi:** [`app.js:2653`](app.js#L2653)
- **Deskripsi:** Registration Handler with Nickname (IGN), 2 Officials Max, Per-Player ID Card, and Automatic Update Threat
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:87`](index.html#L87) — Event `onsubmit`
    `<form id="regForm" onsubmit="handleRegister(event)">`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`showToast()`](#showtoast), [`saveState()`](#savestate), [`clearFormDraft()`](#clearformdraft), [`renderPlayersFormInputs()`](#renderplayersforminputs), [`toggleCategoryForm()`](#togglecategoryform), [`toggleOfficial2Form()`](#toggleofficial2form), [`updateRegistrationDatalists()`](#updateregistrationdatalists)

<a id="setparticipantstatus"></a>
#### `setParticipantStatus(id, newStatus)`

- **Definisi:** [`app.js:3193`](app.js#L3193)
- **Deskripsi:** Verification actions: Setujui / Tolak langsung tersinkron ke Google Sheets
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3705`](app.js#L3705) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-success-sm" title="Verifikasi / Setujui" onclick="setParticipantStatus(${p.id`
  - [`app.js:3706`](app.js#L3706) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-danger-sm" title="Tolak / Gagal" onclick="setParticipantStatus(${p.id}, 'REJE`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="deleteparticipant"></a>
#### `deleteParticipant(id)`

- **Definisi:** [`app.js:3234`](app.js#L3234)
- **Deskripsi:** Menghapus peserta/tim dari sistem lokal dan Google Sheets, serta mencatat ke blacklist agar tidak ter-sync ulang.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3707`](app.js#L3707) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.35rem 0.55rem; font-size: 0.75rem;" onclick="delet`
- **Memanggil Fungsi Internal:** [`cleanOrphanedTournamentData()`](#cleanorphanedtournamentdata), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`updateCounts()`](#updatecounts)

<a id="saveparticipantedit"></a>
#### `saveParticipantEdit()`

- **Definisi:** [`app.js:3419`](app.js#L3419)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:727`](index.html#L727) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveParticipantEdit()">💾 Simpan Perubahan Data</button>`
- **Memanggil Fungsi Internal:** [`saveLogoToMap()`](#savelogotomap), [`saveIdCardToMap()`](#saveidcardtomap), [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers), [`closeEditParticipantModal()`](#closeeditparticipantmodal)

<a id="viewrosterdetail"></a>
#### `viewRosterDetail(id)`

- **Definisi:** [`app.js:3543`](app.js#L3543)
- **Deskripsi:** Modal Detail Roster Lengkap & ID Card Per-Pemain
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3737`](app.js#L3737) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.78rem;" onclick="viewRos`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox)

<a id="renderparticipants"></a>
#### `renderParticipants()`

- **Definisi:** [`app.js:3607`](app.js#L3607)
- **Deskripsi:** Render Participant Table (Featuring Nickname, ID Card count per-player, and Admin Edit Action)
- **Titik Pemanggilan (13 lokasi):**
  - [`app.js:218`](app.js#L218) — di dalam fungsi `toggleInvitedTeam()`
    `renderParticipants();`
  - [`app.js:873`](app.js#L873) — di dalam fungsi `bypassLoaderWithCache()`
    `renderParticipants();`
  - [`app.js:886`](app.js#L886) — di dalam fungsi `handleParticipantSearch()`
    `renderParticipants();`
  - [`app.js:1441`](app.js#L1441) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderParticipants();`
  - [`app.js:1792`](app.js#L1792) — di dalam fungsi `saveState()`
    `renderParticipants();`
  - [`app.js:2170`](app.js#L2170) — di dalam fungsi `verifyAdminPin()`
    `renderParticipants();`
  - [`app.js:2182`](app.js#L2182) — di dalam fungsi `logoutAdmin()`
    `renderParticipants();`
  - [`app.js:3199`](app.js#L3199) — di dalam fungsi `setParticipantStatus()`
    `renderParticipants();`
  - [`app.js:3256`](app.js#L3256) — di dalam fungsi `deleteParticipant()`
    `renderParticipants();`
  - [`app.js:3283`](app.js#L3283) — di dalam fungsi `filterList()`
    `renderParticipants();`
  - [`app.js:3485`](app.js#L3485) — di dalam fungsi `saveParticipantEdit()`
    `renderParticipants();`
  - [`app.js:9565`](app.js#L9565) — di dalam fungsi `clearAllData()`
    `renderParticipants();`
  - [`app.js:9588`](app.js#L9588) — cakupan global / event handler
    `renderParticipants();`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`updateRegistrationDatalists()`](#updateregistrationdatalists), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`toggleInvitedTeam()`](#toggleinvitedteam), [`openEditParticipantModal()`](#openeditparticipantmodal), [`setParticipantStatus()`](#setparticipantstatus), [`deleteParticipant()`](#deleteparticipant), [`viewRosterDetail()`](#viewrosterdetail)

<a id="findteamparticipant"></a>
#### `findTeamParticipant(teamName)`

- **Definisi:** [`app.js:6176`](app.js#L6176)
- **Deskripsi:** Helper mencari data peserta tim dengan normalisasi nama
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:6491`](app.js#L6491) — di dalam fungsi `renderMvpRosterList()`
    `const teamPart = findTeamParticipant(teamName);`
  - [`app.js:6958`](app.js#L6958) — di dalam fungsi `verifyAllMatchPlayers()`
    `const teamPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(teamName) : null;`
  - [`app.js:6981`](app.js#L6981) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamAPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamA) : null;`
  - [`app.js:6982`](app.js#L6982) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const teamBPart = typeof findTeamParticipant === 'function' ? findTeamParticipant(ctx.teamB) : null;`

<a id="rendermvprosterlist"></a>
#### `renderMvpRosterList(teamName)`

- **Definisi:** [`app.js:6486`](app.js#L6486)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6483`](app.js#L6483) — di dalam fungsi `switchMvpTeamTab()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:6556`](app.js#L6556) — di dalam fungsi `filterMvpRosterList()`
    `renderMvpRosterList(targetTeam);`
  - [`app.js:6588`](app.js#L6588) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpRosterList(targetTeam);`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`selectMvpPlayer()`](#selectmvpplayer)

<a id="filtermvprosterlist"></a>
#### `filterMvpRosterList()`

- **Definisi:** [`app.js:6553`](app.js#L6553)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:892`](index.html#L892) — Event `oninput`
    `<input type="text" id="mvpPlayerSearchInput" placeholder="🔍 Cari nama pemain atau IGN..." style="wi`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="renderteamrostercolumn"></a>
#### `renderTeamRosterColumn(teamName, roster, count)`

- **Definisi:** [`app.js:7028`](app.js#L7028)
- **Deskripsi:** Helper untuk merender kolom roster tiap tim
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7125`](app.js#L7125) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamA, rosterA, countA)}`
  - [`app.js:7126`](app.js#L7126) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${renderTeamRosterColumn(ctx.teamB, rosterB, countB)}`

---

### 📦 Modul Aplikasi Umum

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`app.js:112`](app.js#L112)
- **Deskripsi:** Helper Indikator Tim Invite & Pemisahan Tim Satelit (Nama Depan Sama)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4552`](app.js#L4552) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:4563`](app.js#L4563) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getDepartmentCluster === 'function') return getDepartmentCluster(d, team).toLowerCase();`
  - [`app.js:7819`](app.js#L7819) — di dalam fungsi `syncMCGGPlayers()`
    `const cluster = getDepartmentCluster(ply.dept, ply.name);`
  - [`app.js:7849`](app.js#L7849) — di dalam fungsi `syncMCGGPlayers()`
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
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:4231`](app.js#L4231) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:4561`](app.js#L4561) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:900`](functional_tests.js#L900) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamDept(teamName) {`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`
- **Memanggil Fungsi Internal:** [`getDepartmentCluster()`](#getdepartmentcluster)

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`app.js:204`](app.js#L204)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4232`](app.js#L4232) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:4571`](app.js#L4571) — di dalam fungsi `allocateMLBBGroups()`
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
  - [`app.js:3695`](app.js#L3695) — di dalam fungsi `renderParticipants()`
    `<button class="btn ${p.isInvited ? 'btn-gold' : 'btn-outline'}" style="padding: 0.35rem 0.55rem; fon`
  - [`functional_tests.js:877`](functional_tests.js#L877) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function toggleInvitedTeam('), 'app.js harus memiliki toggleInvitedTeam');`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderParticipants()`](#renderparticipants), [`generateGroupStage()`](#generategroupstage), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="showgloballoader"></a>
#### `showGlobalLoader(msg = "Menyinkronkan data turnamen dari Google Sheets...")`

- **Definisi:** [`app.js:247`](app.js#L247)
- **Deskripsi:** Kontrol Loading Screen Fullscreen (Sinkronisasi Data Murni Google Sheets)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:9575`](app.js#L9575) — cakupan global / event handler
    `showGlobalLoader('Menyinkronkan data terkini dari Google Sheets...');`
- **Memanggil Fungsi Internal:** [`hideGlobalLoader()`](#hidegloballoader)

<a id="hidegloballoader"></a>
#### `hideGlobalLoader()`

- **Definisi:** [`app.js:261`](app.js#L261)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:257`](app.js#L257) — di dalam fungsi `showGlobalLoader()`
    `hideGlobalLoader();`
  - [`app.js:877`](app.js#L877) — di dalam fungsi `bypassLoaderWithCache()`
    `hideGlobalLoader();`
  - [`app.js:9607`](app.js#L9607) — cakupan global / event handler
    `hideGlobalLoader();`
  - [`app.js:9618`](app.js#L9618) — cakupan global / event handler
    `hideGlobalLoader();`

<a id="bypassloaderwithcache"></a>
#### `bypassLoaderWithCache()`

- **Definisi:** [`app.js:869`](app.js#L869)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:23`](index.html#L23) — Event `onclick`
    `<button id="btnBypassLoader" type="button" class="btn btn-outline" style="margin-top: 1.25rem; font-`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable), [`updateCounts()`](#updatecounts), [`hideGlobalLoader()`](#hidegloballoader), [`showToast()`](#showtoast)

<a id="saveformdraft"></a>
#### `saveFormDraft(formType)`

- **Definisi:** [`app.js:892`](app.js#L892)
- **Deskripsi:** AUTOSAVE & RESTORE FORM DRAFT (LOCALSTORAGE)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:1048`](app.js#L1048) — di dalam fungsi `handleFormDraftChange()`
    `saveFormDraft();`

<a id="restoreformdraft"></a>
#### `restoreFormDraft(formType)`

- **Definisi:** [`app.js:948`](app.js#L948)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:9584`](app.js#L9584) — cakupan global / event handler
    `restoreFormDraft('MLBB');`
  - [`app.js:9585`](app.js#L9585) — cakupan global / event handler
    `restoreFormDraft('MCGG');`
- **Memanggil Fungsi Internal:** [`toggleOfficial2Form()`](#toggleofficial2form)

<a id="clearformdraft"></a>
#### `clearFormDraft(formType)`

- **Definisi:** [`app.js:1038`](app.js#L1038)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3178`](app.js#L3178) — di dalam fungsi `handleRegister()`
    `clearFormDraft(category);`

<a id="handleformdraftchange"></a>
#### `handleFormDraftChange()`

- **Definisi:** [`app.js:1045`](app.js#L1045)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1978`](app.js#L1978) — di dalam fungsi `handleLogoPreview()`
    `handleFormDraftChange();`
  - [`app.js:1996`](app.js#L1996) — di dalam fungsi `handleSingleIdCardPreview()`
    `handleFormDraftChange();`
  - [`app.js:2016`](app.js#L2016) — di dalam fungsi `handlePlayerIdCardPreview()`
    `handleFormDraftChange();`
- **Memanggil Fungsi Internal:** [`saveFormDraft()`](#saveformdraft)

<a id="getitemkey"></a>
#### `getItemKey(item)`

- **Definisi:** [`app.js:1236`](app.js#L1236)
- **Deskripsi:** Helper key: utamakan id atau rowIndex jika ada, fallback ke category_name
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1250`](app.js#L1250) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `localMap[getItemKey(localItem)] = localItem;`
  - [`app.js:1257`](app.js#L1257) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const itemKey = getItemKey(sheetItem);`

<a id="cleanorphanedtournamentdata"></a>
#### `cleanOrphanedTournamentData()`

- **Definisi:** [`app.js:1473`](app.js#L1473)
- **Deskripsi:** Bersihkan tim/peserta yang sudah dihapus dari bagan turnamen, klasemen grup, dan lobi MCGG
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1439`](app.js#L1439) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `cleanOrphanedTournamentData();`
  - [`app.js:3254`](app.js#L3254) — di dalam fungsi `deleteParticipant()`
    `cleanOrphanedTournamentData();`
- **Memanggil Fungsi Internal:** [`initGroupPlayoff()`](#initgroupplayoff)

<a id="savestate"></a>
#### `saveState()`

- **Definisi:** [`app.js:1785`](app.js#L1785)
- **Deskripsi:** Menyimpan seluruh data aktif aplikasi (peserta, bagan, klasemen grup, lobi MCGG) ke localStorage.
- **Titik Pemanggilan (41 lokasi):**
  - [`app.js:217`](app.js#L217) — di dalam fungsi `toggleInvitedTeam()`
    `saveState();`
  - [`app.js:855`](app.js#L855) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveState();`
  - [`app.js:1440`](app.js#L1440) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveState();`
  - [`app.js:1599`](app.js#L1599) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `saveState();`
  - [`app.js:1747`](app.js#L1747) — di dalam fungsi `syncTournamentSheetsToGSheet()`
    `saveState();`
  - [`app.js:2310`](app.js#L2310) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveState();`
  - [`app.js:3155`](app.js#L3155) — di dalam fungsi `handleRegister()`
    `saveState();`
  - [`app.js:3198`](app.js#L3198) — di dalam fungsi `setParticipantStatus()`
    `saveState();`
  - [`app.js:3255`](app.js#L3255) — di dalam fungsi `deleteParticipant()`
    `saveState();`
  - [`app.js:3484`](app.js#L3484) — di dalam fungsi `saveParticipantEdit()`
    `saveState();`
  - [`app.js:3906`](app.js#L3906) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveState();`
  - [`app.js:3933`](app.js#L3933) — di dalam fungsi `proceedToMLBBStage2()`
    `saveState();`
  - [`app.js:3966`](app.js#L3966) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveState();`
  - [`app.js:4002`](app.js#L4002) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveState();`
  - [`app.js:4265`](app.js#L4265) — di dalam fungsi `resetMLBBToStage1()`
    `saveState();`
  - [`app.js:4327`](app.js#L4327) — di dalam fungsi `validateMCGGDuplicateCommander()`
    `saveState();`
  - [`app.js:4340`](app.js#L4340) — di dalam fungsi `saveTournamentStateOnly()`
    `saveState();`
  - [`app.js:4761`](app.js#L4761) — di dalam fungsi `generateGroupStage()`
    `saveState();`
  - [`app.js:4774`](app.js#L4774) — di dalam fungsi `updateGroupRecord()`
    `saveState();`
  - [`app.js:5315`](app.js#L5315) — di dalam fungsi `pickGroupPlayoffWinner()`
    `saveState();`
  - [`app.js:6097`](app.js#L6097) — di dalam fungsi `setGroupMatchScore()`
    `saveState();`
  - [`app.js:6686`](app.js#L6686) — di dalam fungsi `saveSelectedMvp()`
    `saveState();`
  - [`app.js:6738`](app.js#L6738) — di dalam fungsi `deleteCurrentMvp()`
    `saveState();`
  - [`app.js:6833`](app.js#L6833) — di dalam fungsi `setGroupMatchMVP()`
    `saveState();`
  - [`app.js:6925`](app.js#L6925) — di dalam fungsi `closeMatchPlayerVerifyModal()`
    `saveState();`
  - [`app.js:6942`](app.js#L6942) — di dalam fungsi `toggleMatchPlayerVerify()`
    `saveState();`
  - [`app.js:6965`](app.js#L6965) — di dalam fungsi `verifyAllMatchPlayers()`
    `saveState();`
  - [`app.js:7141`](app.js#L7141) — di dalam fungsi `resetGroupMatchScore()`
    `saveState();`
  - [`app.js:7926`](app.js#L7926) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:7985`](app.js#L7985) — di dalam fungsi `syncMCGGPlayers()`
    `saveState();`
  - [`app.js:8247`](app.js#L8247) — di dalam fungsi `updateMCGGRank()`
    `saveState();`
  - [`app.js:8282`](app.js#L8282) — di dalam fungsi `updateMCGGCommander()`
    `saveState();`
  - [`app.js:8318`](app.js#L8318) — di dalam fungsi `updateMCGGPenalty()`
    `saveState();`
  - [`app.js:8643`](app.js#L8643) — di dalam fungsi `drawMatchPool()`
    `saveState();`
  - [`app.js:8694`](app.js#L8694) — di dalam fungsi `assignMatchPoolToPlayers()`
    `saveState();`
  - [`app.js:8714`](app.js#L8714) — di dalam fungsi `toggleLockMatchDraw()`
    `saveState();`
  - [`app.js:8740`](app.js#L8740) — di dalam fungsi `nextMatchDraw()`
    `saveState();`
  - [`app.js:8773`](app.js#L8773) — di dalam fungsi `resetLobbyDraw()`
    `saveState();`
  - [`app.js:9551`](app.js#L9551) — di dalam fungsi `loadSampleData()`
    `saveState();`
  - [`app.js:9564`](app.js#L9564) — di dalam fungsi `clearAllData()`
    `saveState();`
  - [`app.js:10601`](app.js#L10601) — di dalam fungsi `shuffleMCGG32Besar()`
    `saveState();`
- **Memanggil Fungsi Internal:** [`renderParticipants()`](#renderparticipants), [`updateAuthUI()`](#updateauthui), [`updateCounts()`](#updatecounts)

<a id="updatecounts"></a>
#### `updateCounts()`

- **Definisi:** [`app.js:1797`](app.js#L1797)
- **Deskripsi:** Memperbarui indikator counter jumlah tim MLBB, pemain MCGG, dan status verifikasi di header UI.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:876`](app.js#L876) — di dalam fungsi `bypassLoaderWithCache()`
    `updateCounts();`
  - [`app.js:1444`](app.js#L1444) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateCounts();`
  - [`app.js:1794`](app.js#L1794) — di dalam fungsi `saveState()`
    `updateCounts();`
  - [`app.js:3202`](app.js#L3202) — di dalam fungsi `setParticipantStatus()`
    `updateCounts();`
  - [`app.js:3259`](app.js#L3259) — di dalam fungsi `deleteParticipant()`
    `updateCounts();`
  - [`app.js:9569`](app.js#L9569) — di dalam fungsi `clearAllData()`
    `updateCounts();`
  - [`app.js:9591`](app.js#L9591) — cakupan global / event handler
    `updateCounts();`

<a id="toggleofficial2form"></a>
#### `toggleOfficial2Form()`

- **Definisi:** [`app.js:2025`](app.js#L2025)
- **Deskripsi:** Toggle Official 2 Form
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:199`](index.html#L199) — Event `onchange`
    `<input type="checkbox" id="has_official_2" onchange="toggleOfficial2Form()">`
  - [`app.js:981`](app.js#L981) — di dalam fungsi `restoreFormDraft()`
    `toggleOfficial2Form();`
  - [`app.js:3181`](app.js#L3181) — di dalam fungsi `handleRegister()`
    `toggleOfficial2Form();`
  - [`app.js:9579`](app.js#L9579) — cakupan global / event handler
    `toggleOfficial2Form();`

<a id="renderplayersforminputs"></a>
#### `renderPlayersFormInputs()`

- **Definisi:** [`app.js:2032`](app.js#L2032)
- **Deskripsi:** Generate the 8 players form fields dynamically (Included In-Game Nickname and Per-Player ID Card Uploader)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:3179`](app.js#L3179) — di dalam fungsi `handleRegister()`
    `renderPlayersFormInputs();`
  - [`app.js:9577`](app.js#L9577) — cakupan global / event handler
    `renderPlayersFormInputs();`
- **Memanggil Fungsi Internal:** [`handlePlayerIdCardPreview()`](#handleplayeridcardpreview)

<a id="togglecategoryform"></a>
#### `toggleCategoryForm()`

- **Definisi:** [`app.js:2091`](app.js#L2091)
- **Deskripsi:** Switch form between MLBB and MCGG cleanly
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:91`](index.html#L91) — Event `onchange`
    `<select id="gameCategory" required onchange="toggleCategoryForm()" style="font-size: 1rem; font-weig`
  - [`app.js:3180`](app.js#L3180) — di dalam fungsi `handleRegister()`
    `toggleCategoryForm();`
  - [`app.js:9578`](app.js#L9578) — cakupan global / event handler
    `toggleCategoryForm();`

<a id="renderregistrationui"></a>
#### `renderRegistrationUI()`

- **Definisi:** [`app.js:2187`](app.js#L2187)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:1427`](app.js#L1427) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRegistrationUI();`
  - [`app.js:2266`](app.js#L2266) — di dalam fungsi `toggleRegistrationStatus()`
    `renderRegistrationUI();`
  - [`app.js:2493`](app.js#L2493) — di dalam fungsi `updateAuthUI()`
    `renderRegistrationUI();`
  - [`functional_tests.js:826`](functional_tests.js#L826) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function renderRegistrationUI()'), 'Harus memiliki renderRegistrationUI()')`

<a id="updateregistrationdatalists"></a>
#### `updateRegistrationDatalists()`

- **Definisi:** [`app.js:2573`](app.js#L2573)
- **Deskripsi:** Dropdown list tim & pemain pada form pendaftaran dinonaktifkan (fungsi edit form dimatikan)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3182`](app.js#L3182) — di dalam fungsi `handleRegister()`
    `updateRegistrationDatalists();`
  - [`app.js:3609`](app.js#L3609) — di dalam fungsi `renderParticipants()`
    `updateRegistrationDatalists();`
  - [`functional_tests.js:171`](functional_tests.js#L171) — pada skenario pengujian
    `assert(appCode.includes('function updateRegistrationDatalists('), 'Harus ada fungsi updateRegistrati`

<a id="handleteamnameinput"></a>
#### `handleTeamNameInput(val)`

- **Definisi:** [`app.js:2587`](app.js#L2587)
- **Deskripsi:** Handler saat Peserta Mengetik Nama Tim MLBB di Form Pendaftaran (Fungsi Edit Dimatikan)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:106`](index.html#L106) — Event `oninput`
    `<input type="text" id="teamName" oninput="handleTeamNameInput(this.value)" placeholder="Masukkan nam`
  - [`functional_tests.js:172`](functional_tests.js#L172) — pada skenario pengujian
    `assert(appCode.includes('function handleTeamNameInput('), 'Harus ada handler handleTeamNameInput');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="shuffleandgeneratetournament"></a>
#### `shuffleAndGenerateTournament()`

- **Definisi:** [`app.js:3819`](app.js#L3819)
- **Deskripsi:** Mengacak undian tim ke dalam grup saat Technical Meeting jika grup belum dikunci.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:483`](index.html#L483) — Event `onclick`
    `<button id="btnShuffleMLBB" class="btn btn-gold" style="font-size: 0.85rem; padding: 0.5rem 0.85rem;`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage)

<a id="findteamgroupandrank"></a>
#### `findTeamGroupAndRank(teamName)`

- **Definisi:** [`app.js:3973`](app.js#L3973)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4029`](app.js#L4029) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(mUB.teamA);`
  - [`app.js:4030`](app.js#L4030) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(mUB.teamB);`
  - [`app.js:4031`](app.js#L4031) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoC = findTeamGroupAndRank(mLB.teamB);`
  - [`app.js:4096`](app.js#L4096) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoA = findTeamGroupAndRank(m.teamA);`
  - [`app.js:4097`](app.js#L4097) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const infoB = findTeamGroupAndRank(m.teamB);`
- **Memanggil Fungsi Internal:** [`getSortedGroupTeams()`](#getsortedgroupteams), [`isSameTeamName()`](#issameteamname)

<a id="pickwinner"></a>
#### `pickWinner(rIdx, mIdx, winnerTeam)`

- **Definisi:** [`app.js:4444`](app.js#L4444)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4510`](app.js#L4510) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamA ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
  - [`app.js:4514`](app.js#L4514) — di dalam fungsi `renderBracket()`
    `<div class="matchup-team ${m.winner === m.teamB ? 'winner' : ''} ${isAdmin ? 'admin-interactive' : '`
- **Memanggil Fungsi Internal:** [`renderBracket()`](#renderbracket)

<a id="getprefix"></a>
#### `getPrefix(team)`

- **Definisi:** [`app.js:4551`](app.js#L4551)
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:4589`](app.js#L4589) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:4597`](app.js#L4597) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:4606`](app.js#L4606) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPre = teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`
  - [`app.js:4622`](app.js#L4622) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountA = teamPrefix ? groups[a].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:4623`](app.js#L4623) — di dalam fungsi `allocateMLBBGroups()`
    `const pCountB = teamPrefix ? groups[b].filter(t => getPrefix(t) === teamPrefix).length : 0;`
  - [`app.js:4656`](app.js#L4656) — di dalam fungsi `allocateMLBBGroups()`
    `const p = getPrefix(t);`
  - [`app.js:4663`](app.js#L4663) — di dalam fungsi `allocateMLBBGroups()`
    `const pA = getPrefix(a), pB = getPrefix(b);`
  - [`app.js:4671`](app.js#L4671) — di dalam fungsi `allocateMLBBGroups()`
    `const teamPrefix = getPrefix(team);`
  - [`app.js:4674`](app.js#L4674) — di dalam fungsi `allocateMLBBGroups()`
    `const hasPrefixConflict = (g) => teamPrefix && groups[g].some(t => getPrefix(t) === teamPrefix);`

<a id="getdept"></a>
#### `getDept(team)`

- **Definisi:** [`app.js:4559`](app.js#L4559)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:4590`](app.js#L4590) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:4598`](app.js#L4598) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDep = teamDept && groups[g].some(t => getDept(t) === teamDept);`
  - [`app.js:4657`](app.js#L4657) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getDept(t);`
  - [`app.js:4664`](app.js#L4664) — di dalam fungsi `allocateMLBBGroups()`
    `const dA = getDept(a), dB = getDept(b);`
  - [`app.js:4672`](app.js#L4672) — di dalam fungsi `allocateMLBBGroups()`
    `const teamDept = getDept(team);`
  - [`app.js:4675`](app.js#L4675) — di dalam fungsi `allocateMLBBGroups()`
    `const hasDeptConflict = (g) => teamDept && groups[g].some(t => getDept(t) === teamDept);`

<a id="isinvited"></a>
#### `isInvited(team)`

- **Definisi:** [`app.js:4570`](app.js#L4570)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:4575`](app.js#L4575) — di dalam fungsi `allocateMLBBGroups()`
    `let invited = teamsList.filter(t => isInvited(t));`
  - [`app.js:4576`](app.js#L4576) — di dalam fungsi `allocateMLBBGroups()`
    `let regular = teamsList.filter(t => !isInvited(t));`
  - [`app.js:4596`](app.js#L4596) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:4605`](app.js#L4605) — di dalam fungsi `allocateMLBBGroups()`
    `const hasInv = groups[g].some(t => isInvited(t));`
  - [`app.js:4614`](app.js#L4614) — di dalam fungsi `allocateMLBBGroups()`
    `if (!groups[g].some(t => isInvited(t))) { targetGroup = g; break; }`

<a id="getoverbasecount"></a>
#### `getOverBaseCount()`

- **Definisi:** [`app.js:4638`](app.js#L4638)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4644`](app.js#L4644) — di dalam fungsi `allocateMLBBGroups()`
    `return getOverBaseCount() < remainder;`

<a id="canaccept"></a>
#### `canAccept(g)`

- **Definisi:** [`app.js:4640`](app.js#L4640)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="hasprefixconflict"></a>
#### `hasPrefixConflict(g)`

- **Definisi:** [`app.js:4674`](app.js#L4674)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4693`](app.js#L4693) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`
  - [`app.js:4702`](app.js#L4702) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g)) {`

<a id="hasdeptconflict"></a>
#### `hasDeptConflict(g)`

- **Definisi:** [`app.js:4675`](app.js#L4675)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4693`](app.js#L4693) — di dalam fungsi `allocateMLBBGroups()`
    `if (!hasPrefixConflict(g) && !hasDeptConflict(g)) {`

<a id="updategrouprecord"></a>
#### `updateGroupRecord(gName, idx, field, val)`

- **Definisi:** [`app.js:4766`](app.js#L4766)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:5476`](app.js#L5476) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.win}" style="width:45px;padding:0.2rem;text-align:center;" o`
  - [`app.js:5480`](app.js#L5480) — di dalam fungsi `renderGroupStageUI()`
    `<input type="number" min="0" value="${t.lose}" style="width:45px;padding:0.2rem;text-align:center;" `
  - [`app.js:9988`](app.js#L9988) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.win}" style="width:42px;padding:0.2rem;text-align:center;" o`
  - [`app.js:9991`](app.js#L9991) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<input type="number" min="0" value="${t.lose}" style="width:42px;padding:0.2rem;text-align:center;" `
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="getsortedgroupteams"></a>
#### `getSortedGroupTeams(gName)`

- **Definisi:** [`app.js:4881`](app.js#L4881)
- **Deskripsi:** Helper untuk mengambil daftar tim terurut di suatu grup MLBB dengan kalkulasi MVP terkini
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:3871`](app.js#L3871) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:3976`](app.js#L3976) — di dalam fungsi `findTeamGroupAndRank()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4114`](app.js#L4114) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:4957`](app.js#L4957) — di dalam fungsi `initGroupPlayoff()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:5069`](app.js#L5069) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:5070`](app.js#L5070) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:5071`](app.js#L5071) — di dalam fungsi `initGroupPlayoff()`
    `const grpC = getSortedGroupTeams('Grup C');`
  - [`app.js:5072`](app.js#L5072) — di dalam fungsi `initGroupPlayoff()`
    `const grpD = getSortedGroupTeams('Grup D');`
  - [`app.js:5130`](app.js#L5130) — di dalam fungsi `initGroupPlayoff()`
    `const grpA = getSortedGroupTeams('Grup A');`
  - [`app.js:5131`](app.js#L5131) — di dalam fungsi `initGroupPlayoff()`
    `const grpB = getSortedGroupTeams('Grup B');`
  - [`app.js:5448`](app.js#L5448) — di dalam fungsi `renderGroupStageUI()`
    `const sorted = getSortedGroupTeams(gName);`
  - [`app.js:9946`](app.js#L9946) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const sorted = getSortedGroupTeams(gName);`
- **Memanggil Fungsi Internal:** [`compareMLBBTeams()`](#comparemlbbteams)

<a id="shufflearray"></a>
#### `shuffleArray(arr)`

- **Definisi:** [`app.js:4909`](app.js#L4909)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:4922`](app.js#L4922) — di dalam fungsi `findValidBracketPermutation()`
    `const shuffledRemaining = shuffleArray(remainingItems);`
  - [`app.js:4974`](app.js#L4974) — di dalam fungsi `initGroupPlayoff()`
    `branchJ1 = shuffleArray([...j1List]);`
  - [`app.js:5099`](app.js#L5099) — di dalam fungsi `initGroupPlayoff()`
    `bJ1 = shuffleArray([...j1List]);`

<a id="backtrack"></a>
#### `backtrack(slotIdx, remainingItems, currentArr)`

- **Definisi:** [`app.js:4920`](app.js#L4920)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:4928`](app.js#L4928) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(slotIdx + 1, nextRemaining, [...currentArr, item]);`
  - [`app.js:4935`](app.js#L4935) — di dalam fungsi `findValidBracketPermutation()`
    `const res = backtrack(0, candidates, []);`

<a id="resolveteamnameingroup"></a>
#### `resolveTeamNameInGroup(rawName, groupTeams)`

- **Definisi:** [`app.js:5680`](app.js#L5680)
- **Deskripsi:** Helper pencocokan nama tim di dalam grup (toleran terhadap variasi penulisan alias/tanda kurung di poster)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:5794`](app.js#L5794) — di dalam fungsi `getGroupFixtures()`
    `const realTeamA = resolveTeamNameInGroup(item.teamA, teams);`
  - [`app.js:5795`](app.js#L5795) — di dalam fungsi `getGroupFixtures()`
    `const realTeamB = resolveTeamNameInGroup(item.teamB, teams);`

<a id="issameteamname"></a>
#### `isSameTeamName(name1, name2)`

- **Definisi:** [`app.js:5696`](app.js#L5696)
- **Deskripsi:** Helper pencocokan nama tim yang toleran terhadap format huruf besar/kecil, spasi, tanda kurung, dan alias
- **Titik Pemanggilan (21 lokasi):**
  - [`app.js:3977`](app.js#L3977) — di dalam fungsi `findTeamGroupAndRank()`
    `const idx = sorted.findIndex(t => isSameTeamName(t.name, teamName));`
  - [`app.js:4792`](app.js#L4792) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if ((isSameTeamName(m.teamA, teamA) && isSameTeamName(m.teamB, teamB)) ||`
  - [`app.js:4793`](app.js#L4793) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `(isSameTeamName(m.teamA, teamB) && isSameTeamName(m.teamB, teamA))) {`
  - [`app.js:4819`](app.js#L4819) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamA) || isSameTeamName(cleanWinner, teamA)) {`
  - [`app.js:4822`](app.js#L4822) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `if (isSameTeamName(winner, teamB) || isSameTeamName(cleanWinner, teamB)) {`
  - [`app.js:4829`](app.js#L4829) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const isAFirst = isSameTeamName(match.teamA, teamA);`
  - [`app.js:5716`](app.js#L5716) — di dalam fungsi `findGroupNameForTeam()`
    `if (Array.isArray(gsd[g]) && gsd[g].some(t => isSameTeamName(t.name, teamName))) {`
  - [`app.js:5893`](app.js#L5893) — di dalam fungsi `getGroupFixtures()`
    `if ((isSameTeamName(item.teamA, p.teamA) && isSameTeamName(item.teamB, p.teamB)) ||`
  - [`app.js:5894`](app.js#L5894) — di dalam fungsi `getGroupFixtures()`
    `(isSameTeamName(item.teamA, p.teamB) && isSameTeamName(item.teamB, p.teamA))) {`
  - [`app.js:6064`](app.js#L6064) — di dalam fungsi `setGroupMatchScore()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:6065`](app.js#L6065) — di dalam fungsi `setGroupMatchScore()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:6206`](app.js#L6206) — di dalam fungsi `openMLBBGroupMvpModal()`
    `if ((isSameTeamName(item.teamA, teamA) && isSameTeamName(item.teamB, teamB)) ||`
  - [`app.js:6207`](app.js#L6207) — di dalam fungsi `openMLBBGroupMvpModal()`
    `(isSameTeamName(item.teamA, teamB) && isSameTeamName(item.teamB, teamA))) {`
  - [`app.js:7181`](app.js#L7181) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamA = isSameTeamName(m.teamA, t.name);`
  - [`app.js:7182`](app.js#L7182) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const isTeamB = isSameTeamName(m.teamB, t.name);`
  - [`app.js:7209`](app.js#L7209) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(m.winner, t.name) ||`
  - [`app.js:7210`](app.js#L7210) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `isSameTeamName(cleanWinner, t.name)`
  - [`app.js:7492`](app.js#L7492) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:7493`](app.js#L7493) — di dalam fungsi `renderGroupFixturesUI()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`
  - [`app.js:10052`](app.js#L10052) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerA = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamA) || isSameTeamName(cle`
  - [`app.js:10053`](app.js#L10053) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `const isWinnerB = !isDoubleWO && !isDraw && (isSameTeamName(f.winner, f.teamB) || isSameTeamName(cle`

<a id="findgroupnameforteam"></a>
#### `findGroupNameForTeam(teamName)`

- **Definisi:** [`app.js:5712`](app.js#L5712)
- **Deskripsi:** Helper untuk mendeteksi nama grup berdasarkan nama tim di groupStageData
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:6194`](app.js#L6194) — di dalam fungsi `openMLBBGroupMvpModal()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:6777`](app.js#L6777) — di dalam fungsi `setGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:6870`](app.js#L6870) — di dalam fungsi `promptGroupMatchMVP()`
    `gName = findGroupNameForTeam(teamA) || findGroupNameForTeam(teamB) || '';`
  - [`app.js:6886`](app.js#L6886) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `gName = (typeof findGroupNameForTeam === 'function' && (findGroupNameForTeam(teamA) || findGroupName`
- **Memanggil Fungsi Internal:** [`isSameTeamName()`](#issameteamname)

<a id="getcanonicalgroupmatchid"></a>
#### `getCanonicalGroupMatchId(gName, teamA, teamB)`

- **Definisi:** [`app.js:5951`](app.js#L5951)
- **Deskripsi:** Helper untuk mendapatkan Canonical Match ID yang unik per pasangan tim (tidak terpengaruh urutan teamA vs teamB)
- **Titik Pemanggilan (8 lokasi):**
  - [`app.js:4784`](app.js#L4784) — di dalam fungsi `getMLBBHeadToHeadWinner()`
    `const canonId = getCanonicalGroupMatchId(gName || '', teamA, teamB);`
  - [`app.js:5883`](app.js#L5883) — di dalam fungsi `getGroupFixtures()`
    `const canonId = getCanonicalGroupMatchId(gName, p.teamA, p.teamB);`
  - [`app.js:5969`](app.js#L5969) — di dalam fungsi `deduplicateGroupMatchResults()`
    `const canonId = getCanonicalGroupMatchId(m.gName, m.teamA, m.teamB);`
  - [`app.js:6055`](app.js#L6055) — di dalam fungsi `setGroupMatchScore()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:6196`](app.js#L6196) — di dalam fungsi `openMLBBGroupMvpModal()`
    `const canonId = getCanonicalGroupMatchId(gName, teamA, teamB);`
  - [`app.js:6780`](app.js#L6780) — di dalam fungsi `setGroupMatchMVP()`
    `const canonId = (teamA && teamB) ? getCanonicalGroupMatchId(gName, teamA, teamB) : matchId;`
  - [`app.js:6888`](app.js#L6888) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `const canonId = typeof getCanonicalGroupMatchId === 'function' ? getCanonicalGroupMatchId(gName, tea`
  - [`app.js:7165`](app.js#L7165) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `const pairKey = getCanonicalGroupMatchId(gName, m.teamA, m.teamB);`

<a id="deduplicategroupmatchresults"></a>
#### `deduplicateGroupMatchResults()`

- **Definisi:** [`app.js:5960`](app.js#L5960)
- **Deskripsi:** Pembersihan & Deduplikasi Otomatis groupMatchResults agar tidak ada entri terbalik / ganda
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1396`](app.js#L1396) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
  - [`app.js:7147`](app.js#L7147) — di dalam fungsi `recalculateGroupStandingsFromFixtures()`
    `deduplicateGroupMatchResults();`
  - [`app.js:9601`](app.js#L9601) — cakupan global / event handler
    `if (typeof deduplicateGroupMatchResults === 'function') deduplicateGroupMatchResults();`
- **Memanggil Fungsi Internal:** [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid)

<a id="getgrouprestingteams"></a>
#### `getGroupRestingTeams(gName, day)`

- **Definisi:** [`app.js:5994`](app.js#L5994)
- **Deskripsi:** Mendapatkan daftar tim yang istirahat (tidak bermain) pada hari tertentu di grup tertentu
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7456`](app.js#L7456) — di dalam fungsi `renderGroupFixturesUI()`
    `const resting = getGroupRestingTeams(gName, parseInt(mlbbActiveDayFilter, 10));`
- **Memanggil Fungsi Internal:** [`getGroupFixtures()`](#getgroupfixtures)

<a id="setgroupmatchscore"></a>
#### `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB, explicitWinner = null)`

- **Definisi:** [`app.js:6005`](app.js#L6005)
- **Deskripsi:** Menyimpan skor pertandingan grup MLBB dan memperbarui klasemen grup secara otomatis.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:6117`](app.js#L6117) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 2, '${teamB} (Menang WO)');`
  - [`app.js:6119`](app.js#L6119) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 2, 0, '${teamA} (Menang WO)');`
  - [`app.js:6121`](app.js#L6121) — di dalam fungsi `promptGroupMatchWO()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Keduanya WO (0-0)');`
  - [`app.js:6133`](app.js#L6133) — di dalam fungsi `setGroupMatchSpecialResult()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, 0, 0, 'Imbang (0-0)');`
  - [`app.js:6144`](app.js#L6144) — di dalam fungsi `saveGroupFixtureScore()`
    `setGroupMatchScore(matchId, gName, teamA, teamB, scoreA, scoreB);`
  - [`app.js:10078`](app.js#L10078) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`functional_tests.js:676`](functional_tests.js#L676) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchScore('), 'app.js harus memiliki setter skor setGroup`
- **Memanggil Fungsi Internal:** [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`isSameTeamName()`](#issameteamname), [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="promptgroupmatchwo"></a>
#### `promptGroupMatchWO(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:6103`](app.js#L6103)
- **Deskripsi:** Dialog wasit untuk menetapkan tim yang Kalah WO (Walkover) baik 1 tim maupun kedua tim
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6131`](app.js#L6131) — di dalam fungsi `setGroupMatchSpecialResult()`
    `promptGroupMatchWO(matchId, gName, teamA, teamB);`
- **Memanggil Fungsi Internal:** [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="setgroupmatchspecialresult"></a>
#### `setGroupMatchSpecialResult(matchId, gName, teamA, teamB, resultType)`

- **Definisi:** [`app.js:6128`](app.js#L6128)
- **Deskripsi:** Helper aksi instan wasit untuk hasil khusus (Keduanya WO, Tim WO, atau Imbang)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:7537`](app.js#L7537) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#f871`
  - [`app.js:7538`](app.js#L7538) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 6px; color:#fbbf`
  - [`app.js:10081`](app.js#L10081) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:10082`](app.js#L10082) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
- **Memanggil Fungsi Internal:** [`promptGroupMatchWO()`](#promptgroupmatchwo), [`setGroupMatchScore()`](#setgroupmatchscore)

<a id="selectmvpplayer"></a>
#### `selectMvpPlayer(nickname, realName, teamName)`

- **Definisi:** [`app.js:6559`](app.js#L6559)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6532`](app.js#L6532) — di dalam fungsi `renderMvpRosterList()`
    `<div class="mvp-roster-chip ${isSelected ? 'selected' : ''}" onclick="selectMvpPlayer('${safeIgn}', `
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="rendermvpquickherochips"></a>
#### `renderMvpQuickHeroChips(activeHero)`

- **Definisi:** [`app.js:6591`](app.js#L6591)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6352`](app.js#L6352) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:6446`](app.js#L6446) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpQuickHeroChips(ctx.selectedHero);`
  - [`app.js:6625`](app.js#L6625) — di dalam fungsi `selectMvpQuickHero()`
    `renderMvpQuickHeroChips(heroName);`
- **Memanggil Fungsi Internal:** [`selectMvpQuickHero()`](#selectmvpquickhero)

<a id="selectmvpquickhero"></a>
#### `selectMvpQuickHero(heroName)`

- **Definisi:** [`app.js:6611`](app.js#L6611)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6602`](app.js#L6602) — di dalam fungsi `renderMvpQuickHeroChips()`
    `<span class="mvp-hero-pill ${isActive ? 'active' : ''}" onclick="selectMvpQuickHero('${safeHero}')">`
- **Memanggil Fungsi Internal:** [`renderMvpQuickHeroChips()`](#rendermvpquickherochips)

<a id="saveselectedmvp"></a>
#### `saveSelectedMvp()`

- **Definisi:** [`app.js:6628`](app.js#L6628)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:935`](index.html#L935) — Event `onclick`
    `<button type="button" class="btn btn-primary" style="background: var(--yokke-gold); color: #0b1120; `
  - [`app.js:6724`](app.js#L6724) — di dalam fungsi `deleteCurrentMvp()`
    `saveSelectedMvp();`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp), [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal)

<a id="deletecurrentmvp"></a>
#### `deleteCurrentMvp()`

- **Definisi:** [`app.js:6700`](app.js#L6700)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:928`](index.html#L928) — Event `onclick`
    `<button type="button" id="btnDeleteMvp" class="btn btn-outline" style="color: var(--yokke-red); bord`
- **Memanggil Fungsi Internal:** [`closeMLBBGroupMvpModal()`](#closemlbbgroupmvpmodal), [`saveSelectedMvp()`](#saveselectedmvp), [`saveState()`](#savestate), [`renderGroupPlayoffTree()`](#rendergroupplayofftree), [`saveTournamentStateOnly()`](#savetournamentstateonly), [`showToast()`](#showtoast), [`setGroupMatchMVP()`](#setgroupmatchmvp)

<a id="setgroupmatchmvp"></a>
#### `setGroupMatchMVP(matchId, mvpPlayer, mvpHero, mvpTeam, gameMvps = null)`

- **Definisi:** [`app.js:6752`](app.js#L6752)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6692`](app.js#L6692) — di dalam fungsi `saveSelectedMvp()`
    `setGroupMatchMVP(ctx.canonId, summaryPlayer, summaryHero, summaryTeam, validGames);`
  - [`app.js:6744`](app.js#L6744) — di dalam fungsi `deleteCurrentMvp()`
    `setGroupMatchMVP(ctx.canonId, null, null, null, []);`
  - [`functional_tests.js:790`](functional_tests.js#L790) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function setGroupMatchMVP('), 'Harus memiliki setGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="promptgroupmatchmvp"></a>
#### `promptGroupMatchMVP(matchId, teamA, teamB, gName = '')`

- **Definisi:** [`app.js:6867`](app.js#L6867)
- **Deskripsi:** Delegasi fungsi promptGroupMatchMVP ke modal interaktif
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:791`](functional_tests.js#L791) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function promptGroupMatchMVP('), 'Harus memiliki promptGroupMatchMVP');`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`openMLBBGroupMvpModal()`](#openmlbbgroupmvpmodal)

<a id="togglematchplayerverify"></a>
#### `toggleMatchPlayerVerify(playerKey)`

- **Definisi:** [`app.js:6931`](app.js#L6931)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7105`](app.js#L7105) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn ${isVerified ? 'btn-primary' : 'btn-outline'}" style="font-size:0.7`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="verifyallmatchplayers"></a>
#### `verifyAllMatchPlayers(teamName, shouldVerify = true)`

- **Definisi:** [`app.js:6949`](app.js#L6949)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7016`](app.js#L7016) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:7019`](app.js#L7019) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`saveState()`](#savestate), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="resetgroupmatchscore"></a>
#### `resetGroupMatchScore(matchId)`

- **Definisi:** [`app.js:7131`](app.js#L7131)
- **Deskripsi:** Mereset skor pertandingan grup MLBB ke status belum bertanding.
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`recalculateGroupStandingsFromFixtures()`](#recalculategroupstandingsfromfixtures), [`saveState()`](#savestate), [`initGroupPlayoff()`](#initgroupplayoff), [`renderGroupStageUI()`](#rendergroupstageui)

<a id="findprevious"></a>
#### `findPrevious(ply)`

- **Definisi:** [`app.js:7784`](app.js#L7784)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7797`](app.js#L7797) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`app.js:7796`](app.js#L7796)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7867`](app.js#L7867) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:7919`](app.js#L7919) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

<a id="findprevsemi"></a>
#### `findPrevSemi(ply)`

- **Definisi:** [`app.js:8099`](app.js#L8099)
- **Deskripsi:** Preserve poin semifinal jika sudah ada
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8108`](app.js#L8108) — di dalam fungsi `syncMCGGSemiFinal()`
    `const prev = findPrevSemi(p) || {};`

<a id="mapsemiplayer"></a>
#### `mapSemiPlayer(p)`

- **Definisi:** [`app.js:8107`](app.js#L8107)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="findprevinarr"></a>
#### `findPrevInArr(p, arr)`

- **Definisi:** [`app.js:8136`](app.js#L8136)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8146`](app.js#L8146) — di dalam fungsi `syncMCGGGrandFinal()`
    `const prev = findPrevInArr(p, existingGF);`

<a id="mapgfplayer"></a>
#### `mapGFPlayer(p)`

- **Definisi:** [`app.js:8145`](app.js#L8145)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:8178`](app.js#L8178) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:8179`](app.js#L8179) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:8208`](app.js#L8208) — di dalam fungsi `syncMCGGGrandFinal()`
    `topA.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`
  - [`app.js:8209`](app.js#L8209) — di dalam fungsi `syncMCGGGrandFinal()`
    `topB.forEach(p => mcggLobbies.GRAND_FINAL.push(mapGFPlayer(p)));`

<a id="drawmatchpool"></a>
#### `drawMatchPool(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:8575`](app.js#L8575)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 1: Acak 8 Pool Commander untuk Group/Lobby Ini ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8390`](app.js#L8390) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!isRegistrationClosed ? "alert('⚠️ Pendaftaran turnamen masih dibuka. Harap tutup pendaft`
  - [`app.js:8746`](app.js#L8746) — di dalam fungsi `drawMatchCommanders()`
    `drawMatchPool(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`isMCGGQualificationFull()`](#ismcggqualificationfull), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="assignmatchpooltoplayers"></a>
#### `assignMatchPoolToPlayers(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:8650`](app.js#L8650)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 2: Pasangkan 8 Pool Commander ke Masing-Masing Pemain ----------------------------------------------------
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:8397`](app.js#L8397) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasPool ? "alert('⚠️ Silakan acak 8 Pool Commander terlebih dahulu.')" : (isMatchLocked `
  - [`app.js:8747`](app.js#L8747) — di dalam fungsi `drawMatchCommanders()`
    `assignMatchPoolToPlayers(matchNum, targetLobbyKey);`
- **Memanggil Fungsi Internal:** [`validateMCGGDuplicateCommander()`](#validatemcggduplicatecommander), [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="togglelockmatchdraw"></a>
#### `toggleLockMatchDraw(matchNum, targetLobbyKey)`

- **Definisi:** [`app.js:8701`](app.js#L8701)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 3: Kunci Match (Lock) / Buka Kunci ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8404`](app.js#L8404) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="${!hasAssigned ? "alert('⚠️ Pasangkan commander ke pemain terlebih dahulu sebelum mengunci.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="nextmatchdraw"></a>
#### `nextMatchDraw(targetLobbyKey, nextMatchNum)`

- **Definisi:** [`app.js:8728`](app.js#L8728)
- **Deskripsi:** ---------------------------------------------------- FUNGSI 4: Lanjut ke Match Berikutnya (Match 2) ----------------------------------------------------
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8412`](app.js#L8412) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="nextMatchDraw('${lobbyKey}', 2)">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderMCGGTable()`](#rendermcggtable)

<a id="showmatch3draftinfo"></a>
#### `showMatch3DraftInfo()`

- **Definisi:** [`app.js:8813`](app.js#L8813)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:8417`](app.js#L8417) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `onclick="showMatch3DraftInfo()">`

<a id="buildroundcell"></a>
#### `buildRoundCell(player, roundKey, cmdKey, targetLobby)`

- **Definisi:** [`app.js:9251`](app.js#L9251)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:9239`](app.js#L9239) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r1', 'c1', lobbyKey)}</td>`
  - [`app.js:9240`](app.js#L9240) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r2', 'c2', lobbyKey)}</td>`
  - [`app.js:9241`](app.js#L9241) — di dalam fungsi `renderLobbyRowsHtml()`
    `<td>${buildRoundCell(p, 'r3', 'c3', lobbyKey)}</td>`
- **Memanggil Fungsi Internal:** [`getCommanderById()`](#getcommanderbyid), [`getCommanderFormattedName()`](#getcommanderformattedname), [`renderCommanderCirclesHtml()`](#rendercommandercircleshtml), [`updateMCGGCommander()`](#updatemcggcommander), [`updateMCGGRank()`](#updatemcggrank)

<a id="loadsampledata"></a>
#### `loadSampleData()`

- **Definisi:** [`app.js:9352`](app.js#L9352)
- **Deskripsi:** Sample Data Roster with Nicknames (Purely Generic Dummy Data for Simulation - No Sensitive Info)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:331`](index.html#L331) — Event `onclick`
    `<button class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="loadSamp`
- **Memanggil Fungsi Internal:** [`autoLinkParticipantsAssets()`](#autolinkparticipantsassets), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`syncMCGGPlayers()`](#syncmcggplayers)

<a id="clearalldata"></a>
#### `clearAllData()`

- **Definisi:** [`app.js:9556`](app.js#L9556)
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
  - [`app.js:4552`](app.js#L4552) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:946`](functional_tests.js#L946) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:896`](functional_tests.js#L896)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:204`](app.js#L204) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:4232`](app.js#L4232) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:4571`](app.js#L4571) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:952`](functional_tests.js#L952) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) { return false; }`

<a id="getteamdept"></a>
#### `getTeamDept(teamName)`

- **Definisi:** [`functional_tests.js:900`](functional_tests.js#L900)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:182`](app.js#L182) — di dalam fungsi `getTeamDept()`
    `function getTeamDept(teamName) {`
  - [`app.js:4231`](app.js#L4231) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const dept = typeof getTeamDept === 'function' ? getTeamDept(tName) : '';`
  - [`app.js:4561`](app.js#L4561) — di dalam fungsi `allocateMLBBGroups()`
    `const d = getTeamDept(team);`
  - [`functional_tests.js:931`](functional_tests.js#L931) — pada skenario pengujian
    `assert(appCode.includes('function getTeamDept('), 'app.js harus memiliki helper getTeamDept');`

<a id="getteamprefix"></a>
#### `getTeamPrefix(teamName)`

- **Definisi:** [`functional_tests.js:946`](functional_tests.js#L946)
- **Titik Pemanggilan (4 lokasi):**
  - [`app.js:112`](app.js#L112) — di dalam fungsi `getTeamPrefix()`
    `function getTeamPrefix(teamName) {`
  - [`app.js:4552`](app.js#L4552) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof getTeamPrefix === 'function') return getTeamPrefix(team);`
  - [`functional_tests.js:884`](functional_tests.js#L884) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('function getTeamPrefix('), 'app.js harus memiliki fungsi getTeamPrefix');`
  - [`functional_tests.js:890`](functional_tests.js#L890) — di dalam fungsi `runLiveIntegrationTests()`
    `function getTeamPrefix(teamName) {`

<a id="isteaminvited"></a>
#### `isTeamInvited(teamName)`

- **Definisi:** [`functional_tests.js:952`](functional_tests.js#L952)
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:204`](app.js#L204) — di dalam fungsi `isTeamInvited()`
    `function isTeamInvited(teamName) {`
  - [`app.js:4232`](app.js#L4232) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `const isInv = typeof isTeamInvited === 'function' && isTeamInvited(tName);`
  - [`app.js:4571`](app.js#L4571) — di dalam fungsi `allocateMLBBGroups()`
    `if (typeof isTeamInvited === 'function') return isTeamInvited(team);`
  - [`functional_tests.js:878`](functional_tests.js#L878) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(appCode.includes('isTeamInvited('), 'app.js harus memiliki helper isTeamInvited');`
  - [`functional_tests.js:896`](functional_tests.js#L896) — di dalam fungsi `runLiveIntegrationTests()`
    `function isTeamInvited(teamName) {`

<a id="findprevious"></a>
#### `findPrevious()`

- **Definisi:** [`functional_tests.js:1085`](functional_tests.js#L1085)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:7797`](app.js#L7797) — di dalam fungsi `syncMCGGPlayers()`
    `const prev = findPrevious(pItem) || {};`

<a id="mapplayerobj"></a>
#### `mapPlayerObj(pItem)`

- **Definisi:** [`functional_tests.js:1087`](functional_tests.js#L1087)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7867`](app.js#L7867) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[bestKey].push(mapPlayerObj(ply));`
  - [`app.js:7919`](app.js#L7919) — di dalam fungsi `syncMCGGPlayers()`
    `mcggLobbies[sortedLobbies[0]].push(mapPlayerObj(uPly));`

---

### ☁️ Sinkronisasi Google Sheets & State Storage

<a id="savestagestatelocal"></a>
#### `saveStageStateLocal()`

- **Definisi:** [`app.js:426`](app.js#L426)
- **Deskripsi:** Menyimpan status stage machine turnamen (fase grup/playoff, status lock TM, data tie-breaker) ke localStorage.
- **Titik Pemanggilan (12 lokasi):**
  - [`app.js:854`](app.js#L854) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveStageStateLocal();`
  - [`app.js:2306`](app.js#L2306) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveStageStateLocal();`
  - [`app.js:3852`](app.js#L3852) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveStageStateLocal();`
  - [`app.js:3885`](app.js#L3885) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3890`](app.js#L3890) — di dalam fungsi `evaluateMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3905`](app.js#L3905) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveStageStateLocal();`
  - [`app.js:3932`](app.js#L3932) — di dalam fungsi `proceedToMLBBStage2()`
    `saveStageStateLocal();`
  - [`app.js:3965`](app.js#L3965) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveStageStateLocal();`
  - [`app.js:4001`](app.js#L4001) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `saveStageStateLocal();`
  - [`app.js:4264`](app.js#L4264) — di dalam fungsi `resetMLBBToStage1()`
    `saveStageStateLocal();`
  - [`app.js:4304`](app.js#L4304) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveStageStateLocal();`
  - [`app.js:4341`](app.js#L4341) — di dalam fungsi `saveTournamentStateOnly()`
    `saveStageStateLocal();`

<a id="resetcacheandfollowgsheet"></a>
#### `resetCacheAndFollowGSheet()`

- **Definisi:** [`app.js:1559`](app.js#L1559)
- **Deskripsi:** Reset cache lokal dan ikuti 100% data aktif dari Google Sheets
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:347`](index.html#L347) — Event `onclick`
    `<button class="btn btn-outline" id="btnResetCacheFollowGSheet" style="padding: 0.45rem 0.9rem; font-`
- **Memanggil Fungsi Internal:** [`fetchParticipantsFromGoogleSheet()`](#fetchparticipantsfromgooglesheet)

<a id="saveallchangestogooglesheet"></a>
#### `saveAllChangesToGoogleSheet()`

- **Definisi:** [`app.js:1592`](app.js#L1592)
- **Deskripsi:** SIMPAN SEMUA PERUBAHAN KE GOOGLE SHEETS
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:350`](index.html#L350) — Event `onclick`
    `<button class="btn btn-primary" id="btnSaveAllChanges" style="padding: 0.45rem 0.9rem; font-size: 0.`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`showToast()`](#showtoast)

<a id="synctournamentsheetstogsheet"></a>
#### `syncTournamentSheetsToGSheet()`

- **Definisi:** [`app.js:1746`](app.js#L1746)
- **Deskripsi:** SYNC KHUSUS BUAT / PERBARUI 3 SHEET TURNAMEN DI GSHEET
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate)

<a id="savetournamentstateonly"></a>
#### `saveTournamentStateOnly(isSilent = false)`

- **Definisi:** [`app.js:4335`](app.js#L4335)
- **Deskripsi:** 4. SIMPAN CEPAT KHUSUS STATE BAGAN & POIN (1 REQUEST RINGAN)
- **Titik Pemanggilan (18 lokasi):**
  - [`index.html:490`](index.html#L490) — Event `onclick`
    `<button id="btnSaveBracketGSheet" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem`
  - [`index.html:595`](index.html#L595) — Event `onclick`
    `<button id="btnSaveMCGGPointsGSheet" class="btn btn-primary" style="display: none; font-size: 0.85re`
  - [`app.js:222`](app.js#L222) — di dalam fungsi `toggleInvitedTeam()`
    `saveTournamentStateOnly(true);`
  - [`app.js:862`](app.js#L862) — di dalam fungsi `confirmResetBaganWithPin()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2270`](app.js#L2270) — di dalam fungsi `toggleRegistrationStatus()`
    `saveTournamentStateOnly(true);`
  - [`app.js:2313`](app.js#L2313) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3855`](app.js#L3855) — di dalam fungsi `toggleLockMLBBGroup()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3909`](app.js#L3909) — di dalam fungsi `resolveMLBBTieBreaker()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3936`](app.js#L3936) — di dalam fungsi `proceedToMLBBStage2()`
    `saveTournamentStateOnly(true);`
  - [`app.js:3969`](app.js#L3969) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4268`](app.js#L4268) — di dalam fungsi `resetMLBBToStage1()`
    `saveTournamentStateOnly(true);`
  - [`app.js:4306`](app.js#L4306) — di dalam fungsi `toggleLockMCGGLobbies()`
    `saveTournamentStateOnly(true);`
  - [`app.js:6688`](app.js#L6688) — di dalam fungsi `saveSelectedMvp()`
    `saveTournamentStateOnly(true);`
  - [`app.js:6693`](app.js#L6693) — di dalam fungsi `saveSelectedMvp()`
    `saveTournamentStateOnly(true);`
  - [`app.js:6740`](app.js#L6740) — di dalam fungsi `deleteCurrentMvp()`
    `saveTournamentStateOnly(true);`
  - [`app.js:6745`](app.js#L6745) — di dalam fungsi `deleteCurrentMvp()`
    `saveTournamentStateOnly(true);`
  - [`app.js:8716`](app.js#L8716) — di dalam fungsi `toggleLockMatchDraw()`
    `saveTournamentStateOnly(true);`
  - [`app.js:8775`](app.js#L8775) — di dalam fungsi `resetLobbyDraw()`
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

- **Definisi:** [`app.js:702`](app.js#L702)
- **Deskripsi:** Client-side image compressor: compresses smartphone photos using HTML5 Canvas (<= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:762`](app.js#L762) — di dalam fungsi `compressImageFile()`
    `return compressImage(file, maxWidth, maxWidth, quality);`
  - [`app.js:3396`](app.js#L3396) — di dalam fungsi `handleEditLogoUpload()`
    `const compressed = await compressImage(file, 400, 400, 0.85);`
  - [`app.js:3413`](app.js#L3413) — di dalam fungsi `handleEditRosterIdCardUpload()`
    `const compressed = await compressImage(file, 900, 900, 0.8);`

<a id="compressimagefile"></a>
#### `compressImageFile(file, maxWidth = 1200, quality = 0.75)`

- **Definisi:** [`app.js:761`](app.js#L761)
- **Deskripsi:** Client-side image compression helper (Canvas <= 1200px, quality 0.75)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1977`](app.js#L1977) — di dalam fungsi `handleLogoPreview()`
    `uploadedLogoBase64 = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:1992`](app.js#L1992) — di dalam fungsi `handleSingleIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
  - [`app.js:2014`](app.js#L2014) — di dalam fungsi `handlePlayerIdCardPreview()`
    `const compressed = await compressImageFile(file, 1200, 0.75);`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="openglossarymodal"></a>
#### `openGlossaryModal()`

- **Definisi:** [`app.js:801`](app.js#L801)
- **Deskripsi:** Modal Glosarium Istilah Turnamen
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:36`](index.html#L36) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.75rem; bo`

<a id="closeglossarymodal"></a>
#### `closeGlossaryModal()`

- **Definisi:** [`app.js:806`](app.js#L806)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:804`](index.html#L804) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeGlossaryModal()">✕ Tut`
  - [`index.html:833`](index.html#L833) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeGlossaryModal()">Tutup</button>`

<a id="openresetbaganmodal"></a>
#### `openResetBaganModal()`

- **Definisi:** [`app.js:812`](app.js#L812)
- **Deskripsi:** Modal Reset Bagan dengan Verifikasi Password/PIN
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:4287`](app.js#L4287) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `openResetBaganModal();`

<a id="closeresetbaganmodal"></a>
#### `closeResetBaganModal()`

- **Definisi:** [`app.js:821`](app.js#L821)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:848`](index.html#L848) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeResetBaganModal()">Batal</button>`
  - [`app.js:840`](app.js#L840) — di dalam fungsi `confirmResetBaganWithPin()`
    `closeResetBaganModal();`

<a id="getidcardmap"></a>
#### `getIdCardMap()`

- **Definisi:** [`app.js:1069`](app.js#L1069)
- **Deskripsi:** Pemetaan ID Card berdasarkan ID Pegawai (NIP / empId) dan Nama
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1110`](app.js#L1110) — di dalam fungsi `saveIdCardToMap()`
    `let map = getIdCardMap();`
  - [`app.js:1127`](app.js#L1127) — di dalam fungsi `findIdCardByEmpIdOrName()`
    `const map = getIdCardMap();`

<a id="saveidcardtomap"></a>
#### `saveIdCardToMap(empId, name, cardUrl)`

- **Definisi:** [`app.js:1108`](app.js#L1108)
- **Deskripsi:** Menyimpan tautan atau file base64 ID Card ke dalam cache map lokal berdasarkan NIP/Nama.
- **Titik Pemanggilan (5 lokasi):**
  - [`app.js:1191`](app.js#L1191) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(p.empId, p.name, resolvedCard);`
  - [`app.js:1202`](app.js#L1202) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveIdCardToMap(m.empId, m.name, resolvedCard);`
  - [`app.js:1282`](app.js#L1282) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sheetItem.empId, sheetItem.name, rootIdCard);`
  - [`app.js:1307`](app.js#L1307) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveIdCardToMap(sM.empId, sM.name, mIdCard);`
  - [`app.js:3465`](app.js#L3465) — di dalam fungsi `saveParticipantEdit()`
    `saveIdCardToMap(m.empId, m.name, m.idCard);`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="findidcardbyempidorname"></a>
#### `findIdCardByEmpIdOrName(empId, name)`

- **Definisi:** [`app.js:1126`](app.js#L1126)
- **Deskripsi:** Mencari tautan atau data base64 ID Card berdasarkan NIP pegawai atau nama peserta.
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:1188`](app.js#L1188) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = p.idCard || findIdCardByEmpIdOrName(p.empId, p.name) || (p.roster && p.roster[0`
  - [`app.js:1199`](app.js#L1199) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedCard = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' `
  - [`app.js:1280`](app.js#L1280) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const rootIdCard = sheetItem.idCard || (localItem ? localItem.idCard : '') || findIdCardByEmpIdOrNam`
  - [`app.js:1302`](app.js#L1302) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `let mIdCard = sM.idCard || (lM ? lM.idCard : '') || findIdCardByEmpIdOrName(sM.empId, sM.name) || (d`
  - [`app.js:2962`](app.js#L2962) — di dalam fungsi `handleRegister()`
    `mcggIdCard = existingParticipant.idCard || (existingParticipant.roster && existingParticipant.roster`
  - [`app.js:3356`](app.js#L3356) — di dalam fungsi `openEditParticipantModal()`
    `editRosterIdCards[idx] = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MC`
  - [`app.js:3567`](app.js#L3567) — di dalam fungsi `viewRosterDetail()`
    `const cardSrc = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (team.category === 'MCGG' ? `
  - [`app.js:3647`](app.js#L3647) — di dalam fungsi `renderParticipants()`
    `const card = m.idCard || findIdCardByEmpIdOrName(m.empId, m.name) || (p.category === 'MCGG' ? (p.idC`
  - [`app.js:7061`](app.js#L7061) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const cardSrc = m.idCard || (typeof findIdCardByEmpIdOrName === 'function' ? findIdCardByEmpIdOrName`
- **Memanggil Fungsi Internal:** [`getIdCardMap()`](#getidcardmap)

<a id="getlogomap"></a>
#### `getLogoMap()`

- **Definisi:** [`app.js:1144`](app.js#L1144)
- **Deskripsi:** Pemetaan Logo sesuai Nama Tim (MLBB)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:1160`](app.js#L1160) — di dalam fungsi `saveLogoToMap()`
    `let map = getLogoMap();`
  - [`app.js:1169`](app.js#L1169) — di dalam fungsi `findLogoByTeamName()`
    `const map = getLogoMap();`

<a id="savelogotomap"></a>
#### `saveLogoToMap(teamName, logoUrl)`

- **Definisi:** [`app.js:1158`](app.js#L1158)
- **Deskripsi:** Menyimpan tautan atau file base64 logo tim ke dalam cache map lokal berdasarkan nama tim.
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:1183`](app.js#L1183) — di dalam fungsi `autoLinkParticipantsAssets()`
    `saveLogoToMap(p.name, resolvedLogo);`
  - [`app.js:1276`](app.js#L1276) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `saveLogoToMap(sheetItem.name, teamLogo);`
  - [`app.js:3442`](app.js#L3442) — di dalam fungsi `saveParticipantEdit()`
    `saveLogoToMap(p.name, currentEditLogoBase64);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="findlogobyteamname"></a>
#### `findLogoByTeamName(teamName)`

- **Definisi:** [`app.js:1167`](app.js#L1167)
- **Deskripsi:** Mencari logo tim MLBB berdasarkan nama tim dari cache map atau daftar peserta.
- **Titik Pemanggilan (7 lokasi):**
  - [`app.js:1180`](app.js#L1180) — di dalam fungsi `autoLinkParticipantsAssets()`
    `const resolvedLogo = p.logo || findLogoByTeamName(p.name);`
  - [`app.js:1274`](app.js#L1274) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `const teamLogo = sheetItem.logo || (localItem ? localItem.logo : '') || findLogoByTeamName(sheetItem`
  - [`app.js:2688`](app.js#L2688) — di dalam fungsi `handleRegister()`
    `if (existingParticipant && (existingParticipant.logo || findLogoByTeamName(existingParticipant.name)`
  - [`app.js:2689`](app.js#L2689) — di dalam fungsi `handleRegister()`
    `logoData = existingParticipant.logo || findLogoByTeamName(existingParticipant.name);`
  - [`app.js:3340`](app.js#L3340) — di dalam fungsi `openEditParticipantModal()`
    `currentEditLogoBase64 = p.logo || findLogoByTeamName(p.name) || '';`
  - [`app.js:3547`](app.js#L3547) — di dalam fungsi `viewRosterDetail()`
    `const teamLogoSrc = team.logo || findLogoByTeamName(team.name);`
  - [`app.js:3661`](app.js#L3661) — di dalam fungsi `renderParticipants()`
    `const teamLogoSrc = p.logo || findLogoByTeamName(p.name);`
- **Memanggil Fungsi Internal:** [`getLogoMap()`](#getlogomap)

<a id="handlelogopreview"></a>
#### `handleLogoPreview(event)`

- **Definisi:** [`app.js:1972`](app.js#L1972)
- **Deskripsi:** Handle Logo Upload and Live Preview
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:137`](index.html#L137) — Event `onchange`
    `<input type="file" id="teamLogoInput" accept="image/*" onchange="handleLogoPreview(event)" style="pa`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="handlesingleidcardpreview"></a>
#### `handleSingleIdCardPreview(event, target)`

- **Definisi:** [`app.js:1987`](app.js#L1987)
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

- **Definisi:** [`app.js:2009`](app.js#L2009)
- **Deskripsi:** Handle Individual ID Card Upload for Each of the 8 Players
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:2070`](app.js#L2070) — di dalam fungsi `renderPlayersFormInputs()`
    `<input type="file" id="p${i}_idcard_file" accept="image/*" onchange="handlePlayerIdCardPreview(event`
- **Memanggil Fungsi Internal:** [`compressImageFile()`](#compressimagefile), [`handleFormDraftChange()`](#handleformdraftchange)

<a id="openidcardlightbox"></a>
#### `openIdCardLightbox(imgSrc, title, driveUrl = '')`

- **Definisi:** [`app.js:2515`](app.js#L2515)
- **Deskripsi:** Lightbox for Viewing Full ID Card
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:3374`](app.js#L3374) — di dalam fungsi `openEditParticipantModal()`
    `<div class="idcard-thumb-sm" id="edit_m_${idx}_thumb" onclick="if(editRosterIdCards[${idx}]) openIdC`
  - [`app.js:3571`](app.js#L3571) — di dalam fungsi `viewRosterDetail()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--yokke-`
  - [`app.js:7072`](app.js#L7072) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<div style="width:48px; height:48px; flex-shrink:0; cursor:pointer; border-radius:6px; overflow:hidd`
- **Memanggil Fungsi Internal:** [`formatDriveImageUrl()`](#formatdriveimageurl)

<a id="closeidcardlightbox"></a>
#### `closeIdCardLightbox()`

- **Definisi:** [`app.js:2556`](app.js#L2556)
- **Deskripsi:** Menutup modal pop-up lightbox preview ID Card pegawai.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:767`](index.html#L767) — Event `onclick`
    `<div id="idCardLightboxModal" class="modal-overlay" style="z-index: 2500;" onclick="if(event.target `
  - [`index.html:771`](index.html#L771) — Event `onclick`
    `<button class="btn btn-outline" style="padding:0.25rem 0.6rem;" onclick="closeIdCardLightbox()">✕ Tu`

<a id="openeditparticipantmodal"></a>
#### `openEditParticipantModal(id)`

- **Definisi:** [`app.js:3289`](app.js#L3289)
- **Deskripsi:** ADMIN PARTICIPANT EDIT & PER-PLAYER ID CARD VERIFICATION
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3704`](app.js#L3704) — di dalam fungsi `renderParticipants()`
    `<button class="btn btn-edit-sm" title="Edit Data & Upload ID Card" onclick="openEditParticipantModal`
- **Memanggil Fungsi Internal:** [`findLogoByTeamName()`](#findlogobyteamname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`openIdCardLightbox()`](#openidcardlightbox), [`handleEditRosterIdCardUpload()`](#handleeditrosteridcardupload)

<a id="closeeditparticipantmodal"></a>
#### `closeEditParticipantModal()`

- **Definisi:** [`app.js:3387`](app.js#L3387)
- **Deskripsi:** Menutup modal dialog edit peserta.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:654`](index.html#L654) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeEditParticipantModal(`
  - [`index.html:726`](index.html#L726) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeEditParticipantModal()">Batal</button>`
  - [`app.js:3538`](app.js#L3538) — di dalam fungsi `saveParticipantEdit()`
    `closeEditParticipantModal();`

<a id="handleeditlogoupload"></a>
#### `handleEditLogoUpload(event)`

- **Definisi:** [`app.js:3392`](app.js#L3392)
- **Deskripsi:** Handle logo upload in Admin Edit modal
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:686`](index.html#L686) — Event `onchange`
    `<input type="file" id="editTeamLogoInput" accept="image/*" onchange="handleEditLogoUpload(event)" st`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="handleeditrosteridcardupload"></a>
#### `handleEditRosterIdCardUpload(event, idx)`

- **Definisi:** [`app.js:3408`](app.js#L3408)
- **Deskripsi:** Menerima dan mengompres upload foto ID Card untuk anggota roster yang diedit pada modal admin.
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:3377`](app.js#L3377) — di dalam fungsi `openEditParticipantModal()`
    `<input type="file" accept="image/*" style="font-size:0.7rem; width:120px;" onchange="handleEditRoste`
- **Memanggil Fungsi Internal:** [`compressImage()`](#compressimage)

<a id="closedetailmodal"></a>
#### `closeDetailModal()`

- **Definisi:** [`app.js:3602`](app.js#L3602)
- **Deskripsi:** Menutup modal dialog rincian roster tim dan galeri ID Card.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:743`](index.html#L743) — Event `onclick`
    `<button class="btn btn-outline" style="padding: 0.25rem 0.6rem;" onclick="closeDetailModal()">✕ Tutu`

<a id="opentestdrawmodal"></a>
#### `openTestDrawModal()`

- **Definisi:** [`app.js:4171`](app.js#L4171)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:488`](index.html#L488) — Event `onclick`
    `<button id="btnTestPlayoffStandings" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.5`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast)

<a id="closetestdrawmodal"></a>
#### `closeTestDrawModal()`

- **Definisi:** [`app.js:4184`](app.js#L4184)
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:977`](index.html#L977) — Event `onclick`
    `<div id="testDrawModal" class="modal-overlay" onclick="if(event.target === this) closeTestDrawModal(`
  - [`index.html:988`](index.html#L988) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`app.js:4139`](app.js#L4139) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<button class="btn btn-primary" style="font-size:0.75rem; padding:0.25rem 0.65rem; font-weight:700;"`

<a id="initandshowmvpmodal"></a>
#### `initAndShowMvpModal()`

- **Definisi:** [`app.js:6313`](app.js#L6313)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:6261`](app.js#L6261) — di dalam fungsi `openMLBBGroupMvpModal()`
    `initAndShowMvpModal();`
  - [`app.js:6310`](app.js#L6310) — di dalam fungsi `openMLBBPlayoffMvpModal()`
    `initAndShowMvpModal();`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml), [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="openmatchplayerverifymodal"></a>
#### `openMatchPlayerVerifyModal(matchId, gName, teamA, teamB)`

- **Definisi:** [`app.js:6884`](app.js#L6884)
- **Titik Pemanggilan (2 lokasi):**
  - [`app.js:7526`](app.js#L7526) — di dalam fungsi `renderGroupFixturesUI()`
    `<button type="button" class="btn btn-outline" style="font-size:0.68rem; padding:2px 7px; color:var(-`
  - [`app.js:10098`](app.js#L10098) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
- **Memanggil Fungsi Internal:** [`findGroupNameForTeam()`](#findgroupnameforteam), [`getCanonicalGroupMatchId()`](#getcanonicalgroupmatchid), [`renderMatchPlayerVerifyModalContent()`](#rendermatchplayerverifymodalcontent)

<a id="closematchplayerverifymodal"></a>
#### `closeMatchPlayerVerifyModal()`

- **Definisi:** [`app.js:6922`](app.js#L6922)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:953`](index.html#L953) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="padding: 0.2rem 0.55rem; font-size: 0.8rem;" on`
  - [`index.html:969`](index.html#L969) — Event `onclick`
    `<button type="button" class="btn btn-primary" onclick="closeMatchPlayerVerifyModal()">`
- **Memanggil Fungsi Internal:** [`saveState()`](#savestate), [`renderGroupStageUI()`](#rendergroupstageui), [`renderGroupFixturesUI()`](#rendergroupfixturesui), [`renderMLBBInteractiveHubUI()`](#rendermlbbinteractivehubui)

<a id="rendermatchplayerverifymodalcontent"></a>
#### `renderMatchPlayerVerifyModalContent()`

- **Definisi:** [`app.js:6972`](app.js#L6972)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6917`](app.js#L6917) — di dalam fungsi `openMatchPlayerVerifyModal()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:6943`](app.js#L6943) — di dalam fungsi `toggleMatchPlayerVerify()`
    `renderMatchPlayerVerifyModalContent();`
  - [`app.js:6966`](app.js#L6966) — di dalam fungsi `verifyAllMatchPlayers()`
    `renderMatchPlayerVerifyModalContent();`
- **Memanggil Fungsi Internal:** [`findTeamParticipant()`](#findteamparticipant), [`escapeHtml()`](#escapehtml), [`verifyAllMatchPlayers()`](#verifyallmatchplayers), [`findIdCardByEmpIdOrName()`](#findidcardbyempidorname), [`formatDriveImageUrl()`](#formatdriveimageurl), [`openIdCardLightbox()`](#openidcardlightbox), [`toggleMatchPlayerVerify()`](#togglematchplayerverify), [`renderTeamRosterColumn()`](#renderteamrostercolumn)

---

### 🔧 Helper & UI Utility

<a id="showtoast"></a>
#### `showToast(msg, type = 'info', duration = 4000)`

- **Definisi:** [`app.js:768`](app.js#L768)
- **Deskripsi:** TOAST NOTIFICATIONS (CYBERPUNK DARK)
- **Titik Pemanggilan (28 lokasi):**
  - [`app.js:836`](app.js#L836) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('PIN Panitia salah! Tindakan reset dibatalkan.', 'error');`
  - [`app.js:863`](app.js#L863) — di dalam fungsi `confirmResetBaganWithPin()`
    `showToast('✅ Seluruh pembagian grup, jadwal, skor match, dan bagan playoff MLBB berhasil direset tot`
  - [`app.js:878`](app.js#L878) — di dalam fungsi `bypassLoaderWithCache()`
    `showToast('Memuat turnamen menggunakan data lokal / cache offline.', 'info', 4000);`
  - [`app.js:1457`](app.js#L1457) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('Koneksi ke Google Sheets lambat. Menggunakan data cache lokal.', 'info');`
  - [`app.js:1461`](app.js#L1461) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `showToast('⚠️ Gagal mengambil data dari Google Sheets.', 'error');`
  - [`app.js:1656`](app.js#L1656) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('Beralih ke sinkronisasi serial bertahap...', 'info', 3000);`
  - [`app.js:1731`](app.js#L1731) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('✅ Seluruh perubahan data peserta, status, bagan, dan klasemen turnamen berhasil disimpan `
  - [`app.js:1734`](app.js#L1734) — di dalam fungsi `saveAllChangesToGoogleSheet()`
    `showToast('⚠️ Sebagian perubahan berhasil disinkronkan, data lokal Anda tetap aman.', 'warning', 500`
  - [`app.js:1895`](app.js#L1895) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('✅ Peraturan MLBB & MCGG berhasil diperbarui dari Google Docs!', 'success');`
  - [`app.js:1905`](app.js#L1905) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `showToast('⚠️ Gagal terhubung ke Google Docs, menggunakan cache dokumen lokal.', 'warning');`
  - [`app.js:3107`](app.js#L3107) — di dalam fungsi `handleRegister()`
    `showToast('❌ Pendaftaran ditolak: ${result.message || result.error || 'Validasi server gagal.'}', 'e`
  - [`app.js:3114`](app.js#L3114) — di dalam fungsi `handleRegister()`
    `showToast("⚠️ Gagal terhubung ke Google Sheets. Formulir Anda tetap tersimpan di draft lokal. Silaka`
  - [`app.js:3942`](app.js#L3942) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan undian bagan playoff.', 'error');`
  - [`app.js:3946`](app.js#L3946) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('⚠️ Bagan Playoff belum dibuka. Buka Tahap 2 Playoff terlebih dahulu.', 'warning');`
  - [`app.js:3970`](app.js#L3970) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `showToast('🎲 Undian bagan playoff berhasil diacak dan disimpan!', 'success');`
  - [`app.js:3987`](app.js#L3987) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('Akses ditolak: Hanya panitia yang dapat melakukan simulasi pengundian playoff.', 'error')`
  - [`app.js:3993`](app.js#L3993) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('⚠️ Belum ada data grup MLBB. Pastikan pembagian grup sudah dibuat.', 'warning');`
  - [`app.js:4168`](app.js#L4168) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `showToast('🏆 Bagan Playoff berhasil diundi dan ditampilkan!', 'success');`
  - [`app.js:4173`](app.js#L4173) — di dalam fungsi `openTestDrawModal()`
    `showToast('Akses ditolak: Hanya panitia yang dapat membuka pusat uji coba undian.', 'error');`
  - [`app.js:4193`](app.js#L4193) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('⚠️ Belum ada tim MLBB yang terverifikasi.', 'warning');`
  - [`app.js:4256`](app.js#L4256) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `showToast('🎲 Simulasi pembagian 8 grup berhasil diacak!', 'info');`
  - [`app.js:4273`](app.js#L4273) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('Akses ditolak: Hanya panitia yang dapat mereset pembagian grup & bagan turnamen MLBB.', '`
  - [`app.js:4277`](app.js#L4277) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('🔒 Pembagian grup MLBB sedang dikunci (Lock TM). Harap buka kunci grup terlebih dahulu.',`
  - [`app.js:4282`](app.js#L4282) — di dalam fungsi `resetTotalMLBBGroupAndBracket()`
    `showToast('ℹ️ Pembagian grup dan bagan MLBB saat ini sudah dalam keadaan kosong/belum diundi.', 'inf`
  - [`app.js:6689`](app.js#L6689) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Playoff (${ctx.format || 'BO3'})', 'success`
  - [`app.js:6694`](app.js#L6694) — di dalam fungsi `saveSelectedMvp()`
    `showToast('⭐ Berhasil menyimpan ${validGames.length} MVP Match (${ctx.format || 'BO3'})', 'success')`
  - [`app.js:6741`](app.js#L6741) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP Playoff telah dihapus.', 'info');`
  - [`app.js:6746`](app.js#L6746) — di dalam fungsi `deleteCurrentMvp()`
    `showToast('Data MVP match telah dihapus.', 'info');`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="formatdriveimageurl"></a>
#### `formatDriveImageUrl(url)`

- **Definisi:** [`app.js:1054`](app.js#L1054)
- **Deskripsi:** Helper to format Google Drive image URLs into viewable thumbnail image URLs
- **Titik Pemanggilan (9 lokasi):**
  - [`app.js:2524`](app.js#L2524) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3348`](app.js#L3348) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3375`](app.js#L3375) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3550`](app.js#L3550) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3572`](app.js#L3572) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3662`](app.js#L3662) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:7062`](app.js#L7062) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(car`
  - [`functional_tests.js:94`](functional_tests.js#L94) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

<a id="switchtab"></a>
#### `switchTab(tabId)`

- **Definisi:** [`app.js:2497`](app.js#L2497)
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

- **Definisi:** [`app.js:2561`](app.js#L2561)
- **Deskripsi:** Mengamankan string teks dari kerentanan injeksi XSS sebelum dirender ke dalam HTML DOM.
- **Titik Pemanggilan (77 lokasi):**
  - [`app.js:787`](app.js#L787) — di dalam fungsi `showToast()`
    `<span class="toast-msg">${escapeHtml(msg).replace(/\n/g, '<br>')}</span>`
  - [`app.js:1814`](app.js#L1814) — di dalam fungsi `formatRuleLine()`
    `return '<h4 style="color:var(--yokke-gold); margin:1.35rem 0 0.6rem; font-size:1.05rem; border-botto`
  - [`app.js:1819`](app.js#L1819) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-green); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bo`
  - [`app.js:1824`](app.js#L1824) — di dalam fungsi `formatRuleLine()`
    `return '<h5 style="color:var(--yokke-red); margin:1rem 0 0.5rem; font-size:0.96rem; font-weight:bold`
  - [`app.js:1830`](app.js#L1830) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 2rem; margin-bottom: 0.35rem; line-height: 1.55; display: flex; gap`
  - [`app.js:1836`](app.js#L1836) — di dalam fungsi `formatRuleLine()`
    `return '<div style="margin-left: 1rem; margin-bottom: 0.4rem; line-height: 1.6; display: flex; gap: `
  - [`app.js:1841`](app.js#L1841) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65; font-weight:500;">${escapeHtml(trimmed)}</`
  - [`app.js:1846`](app.js#L1846) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-left:1.5rem; margin-bottom:0.35rem; line-height:1.55; color:var(--text-mute`
  - [`app.js:1849`](app.js#L1849) — di dalam fungsi `formatRuleLine()`
    `return '<p style="margin-bottom:0.5rem; line-height:1.65;">${escapeHtml(trimmed)}</p>';`
  - [`app.js:2609`](app.js#L2609) — di dalam fungsi `handleTeamNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Nama Tim Sudah Terdaftar:</strong> Tim "<strong>${escapeHtml(existi`
  - [`app.js:2642`](app.js#L2642) — di dalam fungsi `handleMcggNameInput()`
    `noticeEl.innerHTML = '⚠️ <strong>Peserta Sudah Terdaftar:</strong> Pemain "<strong>${escapeHtml(exis`
  - [`app.js:4054`](app.js#L4054) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🏠 ${escapeHtml(mUB.teamA)}</span>`
  - [`app.js:4055`](app.js#L4055) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoA.group || '')} (Juara 1)<`
  - [`app.js:4059`](app.js#L4059) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#cbd5e1;">⚔️ ${escapeHtml(mUB.teamB)}</span>`
  - [`app.js:4060`](app.js#L4060) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-cyan);">${escapeHtml(infoB.group || '')} (Juara 2)<`
  - [`app.js:4080`](app.js#L4080) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-weight:700; color:#fff;">🎯 ${escapeHtml(mLB.teamB)}</span>`
  - [`app.js:4081`](app.js#L4081) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<span style="font-size:0.7rem; color:var(--yokke-gold);">${escapeHtml(infoC.group || '')} (Juara 3)<`
  - [`app.js:4088`](app.js#L4088) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `Pemenang Upper ➔ UB QF | Gugur ➔ LB R1 vs ${escapeHtml(mLB.teamB)}`
  - [`app.js:4104`](app.js#L4104) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong>${escapeHtml(m.teamA)}</strong> (${infoA.group}) vs <strong>${escapeHtml(m.teamB)}</strong> `
  - [`app.js:4120`](app.js#L4120) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `<strong style="color:var(--yokke-cyan);">${gName}:</strong> [1] ${escapeHtml(j1)} | [2] ${escapeHtml`
  - [`app.js:4235`](app.js#L4235) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `<span style="font-weight:600;">${escapeHtml(tName)}</span>`
  - [`app.js:4237`](app.js#L4237) — di dalam fungsi `testMLBBGroupAllocationDraw()`
    `${dept ? '<span style="font-size:0.68rem; color:var(--text-muted); display:block;">🏢 ${escapeHtml(d`
  - [`app.js:5453`](app.js#L5453) — di dalam fungsi `renderGroupStageUI()`
    `<span>🛡️ ${escapeHtml(gName)}</span>`
  - [`app.js:5492`](app.js#L5492) — di dalam fungsi `renderGroupStageUI()`
    `<span>${escapeHtml(t.name)}</span>`
  - [`app.js:5535`](app.js#L5535) — di dalam fungsi `renderGroupStageUI()`
    `⚠️ TIE-BREAKER MATCH DIPERLUKAN (${escapeHtml(tb.group)})`
  - [`app.js:5538`](app.js#L5538) — di dalam fungsi `renderGroupStageUI()`
    `Peringkat 2 & 3 grup <strong>${escapeHtml(tb.group)}</strong> memiliki poin sama (<strong>${escapeHt`
  - [`app.js:5545`](app.js#L5545) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:5546`](app.js#L5546) — di dalam fungsi `renderGroupStageUI()`
    `<button class="btn btn-primary" style="padding:0.4rem 0.8rem;font-size:0.8rem;background:var(--yokke`
  - [`app.js:6334`](app.js#L6334) — di dalam fungsi `initAndShowMvpModal()`
    `tabA.innerHTML = '${escapeHtml(ctx.teamA)} ${isWinA ? '🏆' : ''}';`
  - [`app.js:6335`](app.js#L6335) — di dalam fungsi `initAndShowMvpModal()`
    `tabB.innerHTML = '${escapeHtml(ctx.teamB)} ${isWinB ? '🏆' : ''}';`
  - [`app.js:6501`](app.js#L6501) — di dalam fungsi `renderMvpRosterList()`
    `Tidak ada data roster terdaftar untuk tim ${escapeHtml(teamName)}. Anda dapat mengetik manual nama p`
  - [`app.js:6534`](app.js#L6534) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(ign || realName)}`
  - [`app.js:6537`](app.js#L6537) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(realName)}`
  - [`app.js:6540`](app.js#L6540) — di dalam fungsi `renderMvpRosterList()`
    `${escapeHtml(role)}`
  - [`app.js:6547`](app.js#L6547) — di dalam fungsi `renderMvpRosterList()`
    `html = '<div style="grid-column:1/-1; padding:0.75rem; text-align:center; color:var(--text-muted); f`
  - [`app.js:6846`](app.js#L6846) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = g.hero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(g.hero)})</spa`
  - [`app.js:6847`](app.js#L6847) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = g.team ? ' <span style="color:var(--yokke-cyan);font-size:0.65rem;font-weight:600;">`
  - [`app.js:6848`](app.js#L6848) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `return '<span class="badge" style="background:rgba(255,183,3,0.12);color:var(--yokke-gold);border:1p`
  - [`app.js:6854`](app.js#L6854) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const heroTag = m.mvpHero ? ' <span style="color:#cbd5e1;font-weight:400;">(${escapeHtml(m.mvpHero)}`
  - [`app.js:6855`](app.js#L6855) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `const teamTag = m.mvpTeam ? '<span style="font-size:0.68rem;color:var(--yokke-cyan);margin-left:auto`
  - [`app.js:6858`](app.js#L6858) — di dalam fungsi `formatMatchMvpDisplayHtml()`
    `<span>⭐ MVP: <strong style="color:#fff;">${escapeHtml(m.mvpPlayer)}</strong>${heroTag}</span>`
  - [`app.js:7008`](app.js#L7008) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamA)}: <strong>${countA}/${rosterA.length}</strong> Terverifikasi ${countA >= 5 ?`
  - [`app.js:7011`](app.js#L7011) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(ctx.teamB)}: <strong>${countB}/${rosterB.length}</strong> Terverifikasi ${countB >= 5 ?`
  - [`app.js:7016`](app.js#L7016) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:7017`](app.js#L7017) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamA)}`
  - [`app.js:7019`](app.js#L7019) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; bor`
  - [`app.js:7020`](app.js#L7020) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `✅ Verifikasi Semua ${escapeHtml(ctx.teamB)}`
  - [`app.js:7034`](app.js#L7034) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `<span>⚔️</span> <span>${escapeHtml(teamName)}</span>`
  - [`app.js:7084`](app.js#L7084) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.nickname || m.name || '-')}`
  - [`app.js:7096`](app.js#L7096) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `${escapeHtml(m.name || '-')} • <code style="font-size:0.7rem;">NIP: ${escapeHtml(nipLabel)}</code>`
  - [`app.js:7099`](app.js#L7099) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `ID Game: <strong style="color:#fff;">${escapeHtml(m.gameId || '-')}</strong>`
  - [`app.js:7446`](app.js#L7446) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>🛡️</span> <span>Jadwal ${escapeHtml(gName)} • ${dayLabel}</span>`
  - [`app.js:7460`](app.js#L7460) — di dalam fungsi `renderGroupFixturesUI()`
    `<span>☕</span> <span><strong>Tim Istirahat Hari ${mlbbActiveDayFilter} (${MLBB_SCHEDULE_DATES[mlbbAc`
  - [`app.js:7467`](app.js#L7467) — di dalam fungsi `renderGroupFixturesUI()`
    `html += '<p style="color:var(--text-muted);font-size:0.85rem;padding:0.4rem 0;">Tidak ada pertanding`
  - [`app.js:7509`](app.js#L7509) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:7516`](app.js#L7516) — di dalam fungsi `renderGroupFixturesUI()`
    `${escapeHtml(f.teamB)}`
  - [`app.js:8518`](app.js#L8518) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.8rem; font-weight: 700; color: var(--yokke-cyan); white-space: nowrap; over`
  - [`app.js:8519`](app.js#L8519) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `🎮 ${escapeHtml(item.playerNick)}`
  - [`app.js:8521`](app.js#L8521) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `<div style="font-size: 0.7rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text`
  - [`app.js:8522`](app.js#L8522) — di dalam fungsi `renderLobbyCommanderDrawPanelHtml()`
    `👤 ${escapeHtml(item.playerName)}`
  - [`app.js:9232`](app.js#L9232) — di dalam fungsi `renderLobbyRowsHtml()`
    `<span>🎮</span> <span>${(p.nickname && p.nickname !== '-' && p.nickname !== 'undefined') ? escapeHtm`
  - [`app.js:9235`](app.js#L9235) — di dalam fungsi `renderLobbyRowsHtml()`
    `${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? '<span>👤 ${escapeHtml(p.name)}</spa`
  - [`app.js:9236`](app.js#L9236) — di dalam fungsi `renderLobbyRowsHtml()`
    `${p.gameId && p.gameId !== '-' ? '${(p.nickname && p.nickname !== '-' && p.nickname !== p.name) ? ' `
  - [`app.js:9952`](app.js#L9952) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<span>🛡️</span> <span>Klasemen & Pertandingan: ${escapeHtml(gName)}</span>`
  - [`app.js:9968`](app.js#L9968) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">📊 Klasemen Sementara ${esc`
  - [`app.js:10002`](app.js#L10002) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<td style="font-weight:700;color:#fff;">${escapeHtml(t.name)}</td>`
  - [`app.js:10026`](app.js#L10026) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<h4 style="margin:0 0 0.5rem;font-size:0.92rem;color:var(--yokke-gold);">⚔️ Jadwal & Hasil Match BO3`
  - [`app.js:10067`](app.js#L10067) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `${escapeHtml(f.teamA)}`
  - [`app.js:10078`](app.js#L10078) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `setGroupMatchScore('${f.matchId}', '${gName}', '${escapeHtml(f.teamA).replace(/'/g, "\\'")}', '${esc`
  - [`app.js:10081`](app.js#L10081) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#f87171;borde`
  - [`app.js:10082`](app.js#L10082) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;color:#fbbf24;borde`
  - [`app.js:10083`](app.js#L10083) — di dalam fungsi `renderMLBBDetailPanelContent()`
    `<button class="btn btn-outline" style="padding:0.25rem 0.45rem;font-size:0.75rem;" onclick="openMLBB`
  - [`app.js:10089`](app.js#L10089) — cakupan global / event handler
    `${isWinnerB ? '🏆 ' : ''}${escapeHtml(f.teamB)}`
  - [`app.js:10098`](app.js#L10098) — cakupan global / event handler
    `<button type="button" class="btn btn-outline" style="font-size:0.72rem; padding:0.25rem 0.55rem; col`
  - [`app.js:10131`](app.js#L10131) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamA)} <span style="color:var(--yokke-gold); font-size:0.78rem;">(Home)</s`
  - [`app.js:10133`](app.js#L10133) — cakupan global / event handler
    `${escapeHtml(actualMatch.teamB)} <span style="color:var(--text-muted); font-size:0.78rem;">(Away)</s`
  - [`app.js:10135`](app.js#L10135) — cakupan global / event handler
    `${actualMatch.winner ? '<div style="font-size:0.8rem; color:var(--yokke-green); font-weight:700; mar`

<a id="filterlist"></a>
#### `filterList(cat)`

- **Definisi:** [`app.js:3281`](app.js#L3281)
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

- **Definisi:** [`app.js:3777`](app.js#L3777)
- **Deskripsi:** Mengubah format turnamen MLBB melalui dropdown pilihan panitia (AUTO, GROUP_2, GROUP_4, KNOCKOUT).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:465`](index.html#L465) — Event `onchange`
    `<select id="bracketFormat" onchange="changeTournamentFormat()" style="padding: 0.5rem 0.8rem; font-s`
- **Memanggil Fungsi Internal:** [`generateBracket()`](#generatebracket), [`generateGroupStage()`](#generategroupstage), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat)

<a id="rendermvpgametabs"></a>
#### `renderMvpGameTabs()`

- **Definisi:** [`app.js:6360`](app.js#L6360)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:6339`](app.js#L6339) — di dalam fungsi `initAndShowMvpModal()`
    `renderMvpGameTabs();`
  - [`app.js:6445`](app.js#L6445) — di dalam fungsi `switchMvpGameTab()`
    `renderMvpGameTabs();`
  - [`app.js:6585`](app.js#L6585) — di dalam fungsi `selectMvpPlayer()`
    `renderMvpGameTabs();`
- **Memanggil Fungsi Internal:** [`switchMvpGameTab()`](#switchmvpgametab)

<a id="switchmvpgametab"></a>
#### `switchMvpGameTab(targetGame)`

- **Definisi:** [`app.js:6392`](app.js#L6392)
- **Titik Pemanggilan (1 lokasi):**
  - [`app.js:6383`](app.js#L6383) — di dalam fungsi `renderMvpGameTabs()`
    `<button type="button" class="${pillClass}" onclick="switchMvpGameTab(${g})">`
- **Memanggil Fungsi Internal:** [`renderMvpGameTabs()`](#rendermvpgametabs), [`renderMvpQuickHeroChips()`](#rendermvpquickherochips), [`switchMvpTeamTab()`](#switchmvpteamtab)

<a id="switchmvpteamtab"></a>
#### `switchMvpTeamTab(teamKey)`

- **Definisi:** [`app.js:6455`](app.js#L6455)
- **Titik Pemanggilan (4 lokasi):**
  - [`index.html:882`](index.html#L882) — Event `onclick`
    `<button type="button" id="mvpTabTeamA" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`index.html:885`](index.html#L885) — Event `onclick`
    `<button type="button" id="mvpTabTeamB" class="btn btn-outline" style="flex: 1; font-size: 0.82rem; f`
  - [`app.js:6355`](app.js#L6355) — di dalam fungsi `initAndShowMvpModal()`
    `switchMvpTeamTab(ctx.activeTeam);`
  - [`app.js:6447`](app.js#L6447) — di dalam fungsi `switchMvpGameTab()`
    `switchMvpTeamTab(ctx.activeTeam);`
- **Memanggil Fungsi Internal:** [`renderMvpRosterList()`](#rendermvprosterlist)

<a id="formatmatchmvpdisplayhtml"></a>
#### `formatMatchMvpDisplayHtml(m)`

- **Definisi:** [`app.js:6840`](app.js#L6840)
- **Deskripsi:** Format render display HTML untuk MVP match (Mendukung Multi-Game BO3 / BO5)
- **Titik Pemanggilan (3 lokasi):**
  - [`app.js:7521`](app.js#L7521) — di dalam fungsi `renderGroupFixturesUI()`
    `${formatMatchMvpDisplayHtml(f)}`
  - [`app.js:7668`](app.js#L7668) — di dalam fungsi `renderGroupPlayoffTree()`
    `${formatMatchMvpDisplayHtml(m)}`
  - [`app.js:10093`](app.js#L10093) — cakupan global / event handler
    `${formatMatchMvpDisplayHtml(f)}`
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="setdrawtargetandscroll"></a>
#### `setDrawTargetAndScroll(lobbyKey)`

- **Definisi:** [`app.js:8831`](app.js#L8831)
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
  - [`app.js:1054`](app.js#L1054) — di dalam fungsi `formatDriveImageUrl()`
    `function formatDriveImageUrl(url) {`
  - [`app.js:2524`](app.js#L2524) — di dalam fungsi `openIdCardLightbox()`
    `const formattedSrc = formatDriveImageUrl(imgSrc);`
  - [`app.js:3348`](app.js#L3348) — di dalam fungsi `openEditParticipantModal()`
    `logoPreviewBox.innerHTML = '<img src="${formatDriveImageUrl(currentEditLogoBase64)}" alt="Logo">';`
  - [`app.js:3375`](app.js#L3375) — di dalam fungsi `openEditParticipantModal()`
    `${editRosterIdCards[idx] ? '<img src="${formatDriveImageUrl(editRosterIdCards[idx])}">' : '<span sty`
  - [`app.js:3550`](app.js#L3550) — di dalam fungsi `viewRosterDetail()`
    `logoBox.innerHTML = '<img src="${formatDriveImageUrl(teamLogoSrc)}" alt="Logo" style="width:100%; he`
  - [`app.js:3572`](app.js#L3572) — di dalam fungsi `viewRosterDetail()`
    `<div class="idcard-thumb-sm"><img src="${formatDriveImageUrl(cardSrc)}"></div>`
  - [`app.js:3662`](app.js#L3662) — di dalam fungsi `renderParticipants()`
    `const formattedLogo = formatDriveImageUrl(teamLogoSrc);`
  - [`app.js:7062`](app.js#L7062) — di dalam fungsi `renderMatchPlayerVerifyModalContent()`
    `const formattedCard = cardSrc ? (typeof formatDriveImageUrl === 'function' ? formatDriveImageUrl(car`
  - [`functional_tests.js:103`](functional_tests.js#L103) — pada skenario pengujian
    `const formatted = formatDriveImageUrl(driveUrl);`

---

### 🛡️ Autentikasi & Hak Akses Panitia

<a id="confirmresetbaganwithpin"></a>
#### `confirmResetBaganWithPin()`

- **Definisi:** [`app.js:826`](app.js#L826)
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:849`](index.html#L849) — Event `onclick`
    `<button class="btn btn-danger-sm" style="padding: 0.5rem 1.1rem; font-size: 0.85rem;" onclick="confi`
- **Memanggil Fungsi Internal:** [`showToast()`](#showtoast), [`closeResetBaganModal()`](#closeresetbaganmodal), [`saveStageStateLocal()`](#savestagestatelocal), [`saveState()`](#savestate), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`updateAuthUI()`](#updateauthui), [`saveTournamentStateOnly()`](#savetournamentstateonly)

<a id="openloginmodal"></a>
#### `openLoginModal()`

- **Definisi:** [`app.js:2151`](app.js#L2151)
- **Deskripsi:** Auth functions
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:44`](index.html#L44) — Event `onclick`
    `<button id="btnLoginPanitia" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8`

<a id="closeloginmodal"></a>
#### `closeLoginModal()`

- **Definisi:** [`app.js:2158`](app.js#L2158)
- **Deskripsi:** Menutup modal dialog login PIN panitia.
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:789`](index.html#L789) — Event `onclick`
    `<button class="btn btn-outline" onclick="closeLoginModal()">Batal</button>`
  - [`app.js:2168`](app.js#L2168) — di dalam fungsi `verifyAdminPin()`
    `closeLoginModal();`

<a id="verifyadminpin"></a>
#### `verifyAdminPin()`

- **Definisi:** [`app.js:2162`](app.js#L2162)
- **Deskripsi:** Memvalidasi PIN panitia (ADMIN_PIN) untuk membuka hak akses administratif penuh.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:790`](index.html#L790) — Event `onclick`
    `<button class="btn btn-primary" onclick="verifyAdminPin()">Masuk</button>`
- **Memanggil Fungsi Internal:** [`closeLoginModal()`](#closeloginmodal), [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="logoutadmin"></a>
#### `logoutAdmin()`

- **Definisi:** [`app.js:2178`](app.js#L2178)
- **Deskripsi:** Keluar dari mode panitia dan mengembalikan tampilan ke mode peserta umum (read-only).
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:45`](index.html#L45) — Event `onclick`
    `<button id="btnLogoutPanitia" class="btn btn-outline" style="display: none; padding: 0.25rem 0.75rem`
- **Memanggil Fungsi Internal:** [`updateAuthUI()`](#updateauthui), [`renderParticipants()`](#renderparticipants), [`renderCurrentMLBBFormat()`](#rendercurrentmlbbformat), [`renderMCGGTable()`](#rendermcggtable)

<a id="updateauthui"></a>
#### `updateAuthUI()`

- **Definisi:** [`app.js:2317`](app.js#L2317)
- **Deskripsi:** Memperbarui visibilitas tombol admin, kontrol undian commander, stage lock, dan form interaktif.
- **Titik Pemanggilan (14 lokasi):**
  - [`app.js:859`](app.js#L859) — di dalam fungsi `confirmResetBaganWithPin()`
    `updateAuthUI();`
  - [`app.js:1428`](app.js#L1428) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `updateAuthUI();`
  - [`app.js:1793`](app.js#L1793) — di dalam fungsi `saveState()`
    `updateAuthUI();`
  - [`app.js:2169`](app.js#L2169) — di dalam fungsi `verifyAdminPin()`
    `updateAuthUI();`
  - [`app.js:2181`](app.js#L2181) — di dalam fungsi `logoutAdmin()`
    `updateAuthUI();`
  - [`app.js:2267`](app.js#L2267) — di dalam fungsi `toggleRegistrationStatus()`
    `updateAuthUI();`
  - [`app.js:2312`](app.js#L2312) — di dalam fungsi `resetMCGGPointsAndDraw()`
    `updateAuthUI();`
  - [`app.js:3853`](app.js#L3853) — di dalam fungsi `toggleLockMLBBGroup()`
    `updateAuthUI();`
  - [`app.js:3934`](app.js#L3934) — di dalam fungsi `proceedToMLBBStage2()`
    `updateAuthUI();`
  - [`app.js:3967`](app.js#L3967) — di dalam fungsi `shuffleMLBBPlayoffBracket()`
    `updateAuthUI();`
  - [`app.js:4008`](app.js#L4008) — di dalam fungsi `testMLBBPlayoffWithCurrentStandings()`
    `updateAuthUI();`
  - [`app.js:4266`](app.js#L4266) — di dalam fungsi `resetMLBBToStage1()`
    `updateAuthUI();`
  - [`app.js:4305`](app.js#L4305) — di dalam fungsi `toggleLockMCGGLobbies()`
    `updateAuthUI();`
  - [`app.js:9581`](app.js#L9581) — cakupan global / event handler
    `updateAuthUI();`
- **Memanggil Fungsi Internal:** [`renderRegistrationUI()`](#renderregistrationui)

---

### 📋 Regulasi Turnamen (Rules Editor)

<a id="formatruleline"></a>
#### `formatRuleLine(l)`

- **Definisi:** [`app.js:1807`](app.js#L1807)
- **Deskripsi:** Helper formatting baris peraturan agar rapi & terstruktur (MLBB & MCGG)
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*
- **Memanggil Fungsi Internal:** [`escapeHtml()`](#escapehtml)

<a id="fetchrulesfromgoogledoc"></a>
#### `fetchRulesFromGoogleDoc(silent = false)`

- **Definisi:** [`app.js:1853`](app.js#L1853)
- **Deskripsi:** Rules System: Mengambil dan Menampilkan Peraturan dari Google Docs (MLBB: tab=t.0 & MCGG: tab=t.ji56ljhdhzkr)
- **Titik Pemanggilan (2 lokasi):**
  - [`index.html:389`](index.html#L389) — Event `onclick`
    `<button type="button" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; bo`
  - [`app.js:2510`](app.js#L2510) — di dalam fungsi `switchTab()`
    `fetchRulesFromGoogleDoc(true);`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`showToast()`](#showtoast)

<a id="renderrules"></a>
#### `renderRules()`

- **Definisi:** [`app.js:1911`](app.js#L1911)
- **Titik Pemanggilan (6 lokasi):**
  - [`app.js:1382`](app.js#L1382) — di dalam fungsi `fetchParticipantsFromGoogleSheet()`
    `renderRules();`
  - [`app.js:1890`](app.js#L1890) — di dalam fungsi `fetchRulesFromGoogleDoc()`
    `renderRules();`
  - [`app.js:1944`](app.js#L1944) — di dalam fungsi `saveCustomRules()`
    `renderRules();`
  - [`app.js:1967`](app.js#L1967) — di dalam fungsi `resetRulesToDefault()`
    `renderRules();`
  - [`app.js:2509`](app.js#L2509) — di dalam fungsi `switchTab()`
    `renderRules();`
  - [`app.js:9580`](app.js#L9580) — cakupan global / event handler
    `renderRules();`

<a id="toggleeditrules"></a>
#### `toggleEditRules()`

- **Definisi:** [`app.js:1925`](app.js#L1925)
- **Deskripsi:** Membuka/menutup form editor peraturan turnamen khusus panitia.
- **Titik Pemanggilan (3 lokasi):**
  - [`index.html:399`](index.html#L399) — Event `onclick`
    `<button class="btn btn-gold" id="btnToggleEditRules" style="font-size: 0.8rem; padding: 0.4rem 0.8re`
  - [`index.html:433`](index.html#L433) — Event `onclick`
    `<button class="btn btn-outline" onclick="toggleEditRules()">Batal</button>`
  - [`app.js:1945`](app.js#L1945) — di dalam fungsi `saveCustomRules()`
    `toggleEditRules();`

<a id="savecustomrules"></a>
#### `saveCustomRules()`

- **Definisi:** [`app.js:1931`](app.js#L1931)
- **Deskripsi:** Menyimpan peraturan turnamen yang telah disesuaikan ke localStorage dan Google Sheets.
- **Titik Pemanggilan (1 lokasi):**
  - [`index.html:432`](index.html#L432) — Event `onclick`
    `<button class="btn btn-primary" onclick="saveCustomRules()">💾 Simpan Peraturan</button>`
- **Memanggil Fungsi Internal:** [`renderRules()`](#renderrules), [`toggleEditRules()`](#toggleeditrules)

<a id="resetrulestodefault"></a>
#### `resetRulesToDefault()`

- **Definisi:** [`app.js:1962`](app.js#L1962)
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
  - [`google_apps_script.js:1111`](google_apps_script.js#L1111) — di dalam fungsi `doPost()`
    `var ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:1744`](google_apps_script.js#L1744) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `if (!ss) ss = getTargetSpreadsheet();`
  - [`google_apps_script.js:2091`](google_apps_script.js#L2091) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `var ss = getTargetSpreadsheet();`
  - [`functional_tests.js:459`](functional_tests.js#L459) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getTargetSpreadsheet('), 'Harus memiliki fungsi getTargetSpreadshe`

<a id="ensurerelationalsheetsexist"></a>
#### `ensureRelationalSheetsExist(ss)`

- **Definisi:** [`google_apps_script.js:313`](google_apps_script.js#L313)
- **Deskripsi:** Memastikan tabel relasional tersedia di Spreadsheet: 1. 'MLBB - Tim' (Parent Tim) 2. 'MLBB - Peserta' (Child Roster Anggota) 3. 'Pendaftaran MCGG' (Pemain Solo) /
- **Titik Pemanggilan (2 lokasi):**
  - [`google_apps_script.js:1112`](google_apps_script.js#L1112) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1445`](google_apps_script.js#L1445) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1628`](google_apps_script.js#L1628) — di dalam fungsi `doPost()`
    `var mcggListing = getMcggListing(ss);`
  - [`functional_tests.js:467`](functional_tests.js#L467) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function getMcggListing('), 'Harus ada fungsi getMcggListing');`

<a id="getorcreatesheet"></a>
#### `getOrCreateSheet(ss, sheetName)`

- **Definisi:** [`google_apps_script.js:1731`](google_apps_script.js#L1731)
- **Deskripsi:** Mendapatkan sheet berdasarkan nama, atau membuatnya jika belum ada. /
- **Titik Pemanggilan (Call Sites):** *Tidak ada pemanggilan internal langsung (Event global / Entry point / Dipanggil via konsol browser)*

<a id="syncdedicatedtournamentsheets"></a>
#### `syncDedicatedTournamentSheets(ss, payload)`

- **Definisi:** [`google_apps_script.js:1743`](google_apps_script.js#L1743)
- **Deskripsi:** Merender data bagan, poin, commander, dan MVP langsung ke 3 Sheet Terpisah Dipanggil otomatis saat action === 'SAVE_CONFIG' atau 'CREATE_TOURNAMENT_SHEETS' /
- **Titik Pemanggilan (7 lokasi):**
  - [`google_apps_script.js:1203`](google_apps_script.js#L1203) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:1216`](google_apps_script.js#L1216) — di dalam fungsi `doPost()`
    `syncDedicatedTournamentSheets(ss, payloadForSync);`
  - [`google_apps_script.js:2079`](google_apps_script.js#L2079) — di dalam fungsi `syncListBagan()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData, mcggLobbies: mcggData });`
  - [`google_apps_script.js:2083`](google_apps_script.js#L2083) — di dalam fungsi `syncListPoint()`
    `return syncDedicatedTournamentSheets(ss, { groupStageData: groupData });`
  - [`google_apps_script.js:2087`](google_apps_script.js#L2087) — di dalam fungsi `syncListPointAndCommanderMCGG()`
    `return syncDedicatedTournamentSheets(ss, { mcggLobbies: mcggData });`
  - [`google_apps_script.js:2114`](google_apps_script.js#L2114) — di dalam fungsi `createOrUpdateAllTournamentSheets()`
    `syncDedicatedTournamentSheets(ss, payload);`
  - [`functional_tests.js:783`](functional_tests.js#L783) — di dalam fungsi `runLiveIntegrationTests()`
    `assert(gasCode.includes('function syncDedicatedTournamentSheets('), 'Harus memiliki fungsi syncDedic`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`fmtRank()`](#fmtrank)

<a id="createorupdatealltournamentsheets"></a>
#### `createOrUpdateAllTournamentSheets(groupStageData, mcggLobbies)`

- **Definisi:** [`google_apps_script.js:2090`](google_apps_script.js#L2090)
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
  - [`google_apps_script.js:1154`](google_apps_script.js#L1154) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1141`](google_apps_script.js#L1141) — di dalam fungsi `doPost()`
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
  - [`google_apps_script.js:1434`](google_apps_script.js#L1434) — di dalam fungsi `doPost()`
    `var teamFolder = getOrCreateSubFolder(mainFolder, teamFolderName);`
  - [`google_apps_script.js:1614`](google_apps_script.js#L1614) — di dalam fungsi `doPost()`
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

- **Definisi:** [`google_apps_script.js:1143`](google_apps_script.js#L1143)
- **Titik Pemanggilan (4 lokasi):**
  - [`google_apps_script.js:1439`](google_apps_script.js#L1439) — di dalam fungsi `doPost()`
    `logoUrl = saveBase64Image(data.logo, "Logo_" + teamName + ".jpg", teamFolder);`
  - [`google_apps_script.js:1486`](google_apps_script.js#L1486) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1567`](google_apps_script.js#L1567) — di dalam fungsi `doPost()`
    `cardUrl = saveBase64Image(m.idCard, cardFileName, teamFolder);`
  - [`google_apps_script.js:1620`](google_apps_script.js#L1620) — di dalam fungsi `doPost()`
    `mcggIdCardUrl = saveBase64Image(mcggCard, "IDCard_MCGG_" + safeEmp + "_" + safePlayerName + ".jpg", `

<a id="fmtrank"></a>
#### `fmtRank(r)`

- **Definisi:** [`google_apps_script.js:2009`](google_apps_script.js#L2009)
- **Titik Pemanggilan (3 lokasi):**
  - [`google_apps_script.js:2050`](google_apps_script.js#L2050) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r1),`
  - [`google_apps_script.js:2052`](google_apps_script.js#L2052) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r2),`
  - [`google_apps_script.js:2054`](google_apps_script.js#L2054) — di dalam fungsi `syncDedicatedTournamentSheets()`
    `fmtRank(p.r3),`

<a id="synclistbagan"></a>
#### `syncListBagan(ss, groupData, mcggData)`

- **Definisi:** [`google_apps_script.js:2078`](google_apps_script.js#L2078)
- **Deskripsi:** Wrapper kompatibilitas untuk pemicu manual / lama /
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:114`](functional_tests.js#L114) — pada skenario pengujian
    `assert(gasCode.includes('function syncListBagan('), 'Harus memiliki fungsi syncListBagan');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpoint"></a>
#### `syncListPoint(ss, groupData)`

- **Definisi:** [`google_apps_script.js:2082`](google_apps_script.js#L2082)
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:115`](functional_tests.js#L115) — pada skenario pengujian
    `assert(gasCode.includes('function syncListPoint('), 'Harus memiliki fungsi syncListPoint');`
- **Memanggil Fungsi Internal:** [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets)

<a id="synclistpointandcommandermcgg"></a>
#### `syncListPointAndCommanderMCGG(ss, mcggData)`

- **Definisi:** [`google_apps_script.js:2086`](google_apps_script.js#L2086)
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

- **Definisi:** [`google_apps_script.js:1091`](google_apps_script.js#L1091)
- **Deskripsi:** 2. POST HANDLER: SIMPAN PENDAFTARAN & UPLOAD FOTO KE DRIVE
- **Titik Pemanggilan (1 lokasi):**
  - [`functional_tests.js:532`](functional_tests.js#L532) — di dalam fungsi `runLiveIntegrationTests()`
    `runTest('4.8 Verifikasi penulisan 11 Kolom MCGG di doPost (Selective Update & Append Row)', () => {`
- **Memanggil Fungsi Internal:** [`getTargetSpreadsheet()`](#gettargetspreadsheet), [`ensureRelationalSheetsExist()`](#ensurerelationalsheetsexist), [`getOrCreateUploadFolder()`](#getorcreateuploadfolder), [`safeSetSharing()`](#safesetsharing), [`syncDedicatedTournamentSheets()`](#syncdedicatedtournamentsheets), [`getOrCreateSubFolder()`](#getorcreatesubfolder), [`saveBase64Image()`](#savebase64image), [`getMlbbTimListing()`](#getmlbbtimlisting), [`getMcggListing()`](#getmcgglisting)

---

