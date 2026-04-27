// ========================================
// KabarKini - script.js
// ========================================

// Data berita dummy
var berita = [
  // ── Politik ──
  {
    id: 1,
    kategori: 'Politik',
    headline: true,
    trending: true,
    judul: 'DPR Sahkan RUU Pemilu dengan Suara Bulat di Sidang Paripurna',
    ringkasan: 'Seluruh fraksi di DPR RI menyetujui RUU Pemilu yang mencakup sistem proporsional terbuka dan pembatasan dana kampanye setelah pembahasan lebih dari satu tahun.',
    isi: [
      'Dewan Perwakilan Rakyat Republik Indonesia menggelar sidang paripurna untuk mengesahkan Rancangan Undang-Undang Pemilu. Sidang yang berlangsung mulai pukul 09.00 WIB ini dihadiri oleh 480 anggota DPR dari seluruh fraksi.',
      'Ketua DPR dalam sambutannya menyatakan bahwa undang-undang ini merupakan tonggak penting dalam perjalanan demokrasi Indonesia. Regulasi baru ini akan berlaku mulai tahun 2026 dan mengatur seluruh mekanisme pemilihan umum dari tingkat desa hingga nasional.',
      'Proses pengesahan ini diwarnai dengan perdebatan panjang yang telah memakan waktu lebih dari satu tahun di tingkat panitia kerja (Panja). Berbagai kelompok masyarakat sipil sebelumnya sempat menggelar aksi damai di depan Gedung Parlemen untuk mengawal poin-poin krusial dalam RUU ini.',
      'Salah satu poin yang disepakati adalah penerapan sistem proporsional terbuka yang memberikan kesempatan lebih besar kepada kandidat perempuan. Minimal 30 persen calon dalam setiap daftar partai harus berjenis kelamin perempuan, dan penempatannya di surat suara harus berselang-seling atau menggunakan sistem "zipper".',
      'Pembatasan dana kampanye juga diperketat. Calon legislatif kini hanya diperbolehkan menghabiskan maksimal Rp 2 miliar untuk kampanye di tingkat kabupaten/kota, Rp 5 miliar untuk tingkat provinsi, dan Rp 10 miliar untuk tingkat pusat. Angka ini dinilai rasional untuk menekan praktik politik uang.',
      'Badan Pengawas Pemilu (Bawaslu) dan Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK) akan diberikan kewenangan ekstra untuk mengaudit rekening khusus dana kampanye secara real-time. Pelanggaran administratif terkait pelaporan dana ini dapat mengakibatkan diskualifikasi langsung sebelum hari pemungutan suara.',
      'Selain itu, RUU ini juga mengamanatkan penggunaan teknologi rekapitulasi suara digital yang lebih terintegrasi untuk mencegah manipulasi data di tingkat kecamatan. Sistem baru ini akan memangkas waktu penghitungan suara nasional dari yang sebelumnya memakan waktu 35 hari menjadi maksimal 14 hari kerja.',
      'Sejumlah pengamat politik menyambut baik pengesahan ini. "Ini adalah langkah berani dari DPR. Transparansi dana kampanye adalah kunci untuk menghasilkan wakil rakyat yang berintegritas," ujar Dr. Hendra Setiawan, pengamat politik dari Universitas Indonesia.'
    ],
    penulis: 'Budi Santoso',
    waktu: '2 jam lalu',
    views: '45.2K',
    gambar: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
    tags: ['DPR', 'Pemilu', 'Politik']
  },
  {
    id: 2,
    kategori: 'Politik',
    headline: false,
    trending: false,
    judul: 'Presiden Lantik 12 Menteri Baru dalam Reshuffle Kabinet',
    ringkasan: 'Dalam upacara di Istana Negara, Presiden melantik 12 menteri baru hasil evaluasi kinerja semester pertama yang mencakup sejumlah kementerian strategis.',
    isi: [
      'Presiden RI secara resmi melantik 12 menteri baru dalam upacara di Istana Negara. Reshuffle kabinet ini merupakan yang pertama sejak terbentuknya pemerintahan baru 18 bulan lalu.',
      'Perubahan paling signifikan terjadi di kementerian yang menangani sektor ekonomi. Menteri Keuangan yang baru diharapkan dapat membawa stabilitas di tengah volatilitas pasar global dan tekanan inflasi yang mulai dirasakan di kuartal terakhir.',
      'Presiden menjelaskan bahwa pergantian ini didasarkan pada evaluasi kinerja yang komprehensif dan kebutuhan akselerasi program prioritas nasional. "Kita butuh pelari cepat. Tantangan ekonomi global 2026 tidak bisa dihadapi dengan cara-cara biasa," tegas Presiden dalam pidato singkatnya pasca pelantikan.',
      'Kementerian Perdagangan dan Kementerian Perindustrian juga mendapatkan pimpinan baru yang berasal dari kalangan profesional dan teknokrat, bukan dari partai politik. Hal ini menuai pujian dari pelaku pasar yang melihatnya sebagai sinyal positif untuk perbaikan iklim investasi.',
      'Selain sektor ekonomi, perombakan juga menyentuh sektor pendidikan dan kebudayaan. Menteri yang baru dilantik berjanji akan segera menyelesaikan persoalan kesejahteraan guru honorer yang sempat memicu gelombang protes di berbagai daerah pada bulan lalu.',
      'Acara pelantikan yang berlangsung khidmat ini juga dihadiri oleh Wakil Presiden, pimpinan lembaga negara, serta sejumlah ketua umum partai politik koalisi pemerintahan. Kehadiran para elite politik ini seakan menepis rumor adanya keretakan dalam koalisi akibat reshuffle.',
      'Di akhir acara, para menteri baru langsung dijadwalkan mengikuti rapat kabinet paripurna perdana pada sore harinya untuk menerima arahan langsung terkait target 100 hari kerja pertama mereka.',
      'Indeks Harga Saham Gabungan (IHSG) dilaporkan langsung ditutup menguat 1,5 persen pasca pengumuman susunan kabinet baru ini, menunjukkan optimisme pasar terhadap susunan tim ekonomi yang baru.'
    ],
    penulis: 'Siti Rahayu',
    waktu: '4 jam lalu',
    views: '32.1K',
    gambar: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80',
    tags: ['Kabinet', 'Presiden']
  },
  {
    id: 3,
    kategori: 'Politik',
    headline: false,
    trending: false,
    judul: 'KPK Tetapkan Gubernur Aktif sebagai Tersangka Korupsi',
    ringkasan: 'Komisi Pemberantasan Korupsi menetapkan seorang gubernur aktif sebagai tersangka kasus korupsi pengadaan infrastruktur senilai Rp 450 miliar.',
    isi: [
      'KPK mengumumkan penetapan seorang gubernur aktif di wilayah Sumatera sebagai tersangka kasus korupsi. Kasus ini bermula dari laporan masyarakat mengenai proyek infrastruktur yang dinilai tidak wajar dan mangkrak selama dua tahun terakhir.',
      'Berdasarkan penyelidikan intensif selama delapan bulan, KPK menemukan indikasi penyimpangan dalam proses pengadaan proyek senilai Rp 450 miliar untuk pembangunan jalan lintas provinsi dan jembatan penghubung.',
      'Juru Bicara KPK dalam konferensi pers di Gedung Merah Putih memaparkan adanya bukti transfer aliran dana ke sejumlah rekening fiktif yang dikendalikan oleh orang dekat sang gubernur. "Kami menemukan mark-up material hingga 40 persen dari harga pasar," ungkapnya.',
      'Selain menetapkan gubernur tersebut sebagai tersangka, KPK juga menahan tiga orang lainnya yang terdiri dari Kepala Dinas Pekerjaan Umum setempat dan dua direktur perusahaan swasta pemenang tender.',
      'Operasi penggeledahan yang dilakukan tim penyidik di rumah dinas gubernur dan beberapa kantor dinas berhasil mengamankan barang bukti berupa uang tunai senilai Rp 15 miliar dalam pecahan rupiah dan dolar Singapura, serta sejumlah dokumen proyek.',
      'KPK juga telah memblokir lebih dari 20 rekening bank yang terafiliasi dengan para tersangka serta menyita lima kendaraan mewah yang diduga kuat merupakan hasil tindak pidana pencucian uang (TPPU).',
      'Gubernur melalui kuasa hukumnya, yang ditemui wartawan di luar gedung KPK, menyatakan akan kooperatif dan mengikuti seluruh proses hukum yang berlaku. Pihaknya mengklaim bahwa kliennya tidak mengetahui adanya permainan kotor di tingkat bawah.',
      'Menteri Dalam Negeri langsung merespons penahanan ini dengan menunjuk Wakil Gubernur sebagai Pelaksana Tugas (Plt) agar roda pemerintahan dan pelayanan publik di provinsi tersebut tidak terganggu.'
    ],
    penulis: 'Ahmad Fauzi',
    waktu: '6 jam lalu',
    views: '78.5K',
    gambar: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    tags: ['KPK', 'Korupsi', 'Hukum']
  },

  // ── Teknologi ──
  {
    id: 4,
    kategori: 'Teknologi',
    headline: false,
    trending: true,
    judul: 'Startup AI Lokal Raih Pendanaan Seri B Senilai Rp 850 Miliar',
    ringkasan: 'Perusahaan rintisan kecerdasan buatan asal Bandung berhasil menutup putaran pendanaan dengan total investasi yang akan digunakan untuk ekspansi ke 5 negara ASEAN.',
    isi: [
      'Sebuah startup kecerdasan buatan (AI) bernama "TaniTech" asal Bandung berhasil mengamankan pendanaan Seri B senilai Rp 850 miliar. Suntikan dana ini dipimpin oleh konsorsium investor raksasa dari Singapura, Amerika Serikat, dan Jepang.',
      'Perusahaan yang berdiri pada pertengahan 2021 ini fokus mengembangkan solusi AI prediktif untuk industri pertanian berkelanjutan. Platform mereka sejauh ini telah digunakan oleh lebih dari 50.000 petani di seluruh Jawa dan Sumatera.',
      'Teknologi yang ditawarkan TaniTech mengombinasikan sensor tanah (IoT), pencitraan drone, dan algoritma *machine learning* untuk memberikan rekomendasi pemupukan dan irigasi yang sangat presisi kepada petani melalui aplikasi ponsel pintar.',
      'Dana segar ini akan digunakan untuk memperluas tim riset, khususnya merekrut talenta *data scientist* lokal, dan melakukan ekspansi agresif ke lima negara ASEAN—termasuk Vietnam dan Thailand—dalam 18 bulan ke depan.',
      'CEO dan *Co-Founder* TaniTech, Raka Andika, menyatakan, "Model AI kami diklaim mampu memprediksi kondisi cuaca mikro dan potensi serangan hama spesifik dengan akurasi 94 persen. Ini tidak hanya menyelamatkan gagal panen, tetapi juga menekan biaya operasional petani hingga 30 persen."',
      'Salah satu perwakilan investor dari Jepang menyebutkan bahwa mereka sangat tertarik dengan TaniTech karena solusi yang ditawarkan sangat adaptif terhadap kondisi iklim tropis yang seringkali tidak terprediksi, berbeda dengan AI pertanian buatan Barat.',
      'Ke depan, TaniTech berencana untuk mengintegrasikan layanan pembiayaan mikro di dalam aplikasinya, bekerja sama dengan bank BUMN, guna memberikan akses modal langsung kepada petani kecil berdasarkan skor kredit dari data panen yang diolah AI.',
      'Pencapaian TaniTech ini menambah panjang daftar startup *deep-tech* Indonesia yang berhasil membuktikan bahwa inovasi anak bangsa mampu menarik perhatian dan modal di kancah global.'
    ],
    penulis: 'Dewi Lestari',
    waktu: '1 jam lalu',
    views: '28.7K',
    gambar: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    tags: ['Startup', 'AI', 'Investasi']
  },
  {
    id: 5,
    kategori: 'Teknologi',
    headline: false,
    trending: true,
    judul: 'Pemerintah Luncurkan Program 5G Nasional di 50 Kota Besar',
    ringkasan: 'Kementerian Kominfo meluncurkan rollout 5G yang akan menjangkau 50 kota besar di seluruh Indonesia dalam dua tahun ke depan.',
    isi: [
      'Kementerian Komunikasi dan Informatika (Kominfo) resmi meluncurkan program perluasan jaringan 5G Nasional secara masif. Program ambisius ini menargetkan 50 kota mendapatkan akses 5G komersial dengan spektrum penuh dalam dua tahun mendatang.',
      'Pada tahap pertama yang dimulai bulan depan, 15 kota prioritas termasuk Jakarta, Surabaya, Medan, Makassar, dan Denpasar akan mendapatkan peningkatan infrastruktur pemancar. Tiga operator telekomunikasi besar telah menandatangani komitmen investasi dengan total nilai Rp 45 triliun.',
      'Menteri Kominfo dalam peresmiannya menjelaskan bahwa 5G bukan sekadar internet cepat untuk ponsel pintar, melainkan fondasi vital untuk transformasi industri digital. Jaringan ini akan mendukung *Internet of Things* (IoT), *smart city*, dan *telemedicine* dengan latensi sangat rendah.',
      'Infrastruktur 5G ini akan memanfaatkan pita frekuensi menengah di 3.5 GHz dan pita milimeter-wave di 26 GHz yang baru saja dilelang oleh pemerintah. Kecepatan unduh di area padat diproyeksikan bisa mencapai 10 Gbps secara stabil.',
      'Di sektor industri, penerapan 5G ini diharapkan memacu efisiensi. Beberapa perusahaan tambang di Kalimantan dan pelabuhan di Surabaya dikabarkan telah menyiapkan cetak biru untuk menerapkan alat berat otonom (*autonomous vehicles*) yang dikendalikan dari jarak jauh via 5G.',
      'Pemerintah juga menegaskan komitmennya untuk memastikan keamanan siber pada infrastruktur tulang punggung 5G ini. Kominfo bekerja sama dengan Badan Siber dan Sandi Negara (BSSN) telah menetapkan standar keamanan perangkat telekomunikasi yang ketat.',
      'Meskipun fokus awal berada di kota besar dan area industri, Kominfo berjanji skema subsidi silang akan diterapkan agar percepatan infrastruktur ini nantinya dapat merata hingga ke daerah 3T (Tertinggal, Terdepan, dan Terluar).',
      'Peluncuran ini disambut antusias oleh para pelaku *e-sports* dan *content creator* tanah air yang selama ini kerap terhambat oleh masalah stabilitas jaringan saat melakukan *live streaming* resolusi tinggi.'
    ],
    penulis: 'Rizki Pratama',
    waktu: '3 jam lalu',
    views: '41.3K',
    gambar: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    tags: ['5G', 'Teknologi', 'Kominfo']
  },
  {
    id: 6,
    kategori: 'Teknologi',
    headline: false,
    trending: false,
    judul: 'Chip Prosesor Buatan ITB Siap Bersaing di Pasar Global',
    ringkasan: 'Tim riset dari Institut Teknologi Bandung berhasil mengembangkan prosesor RISC-V pertama buatan Indonesia yang diklaim hemat energi dan mampu menjalankan Linux.',
    isi: [
      'Tim peneliti dari Institut Teknologi Bandung (ITB) menorehkan sejarah baru dengan berhasil menyelesaikan pengembangan prosesor silikon berbasis arsitektur *open-source* RISC-V yang sepenuhnya dirancang oleh putra-putri bangsa.',
      'Chip yang diberi nama "Nusantara-1" ini menggunakan proses fabrikasi 7 nanometer, sebuah pencapaian luar biasa untuk fasilitas riset di Indonesia. Chip ini diklaim memiliki efisiensi energi yang setara bahkan sedikit melampaui beberapa varian chip ARM generasi terkini.',
      'Dalam demonstrasi tertutup minggu lalu, prototipe "Nusantara-1" telah berhasil menjalankan sistem operasi distribusi Linux secara mulus, memproses rendering video, dan menjalankan komputasi server dasar tanpa mengalami *overheating*.',
      'Proyek *microchip* ini memakan waktu empat tahun pengerjaan dengan dukungan pendanaan penuh dari Badan Riset dan Inovasi Nasional (BRIN) senilai Rp 120 miliar, serta kolaborasi *transfer knowledge* dengan beberapa perusahaan semikonduktor multinasional.',
      'Ketua Tim Riset ITB, Prof. Dr. Ilham Akbar, menjelaskan bahwa Nusantara-1 dirancang spesifik untuk perangkat *Internet of Things* (IoT) kelas menengah dan sistem otomasi industri. "Kami memprioritaskan keamanan perangkat keras yang bebas dari *backdoor* asing," ujarnya.',
      'Pemerintah melihat inovasi ini sebagai langkah awal kemandirian teknologi nasional di tengah perang cip antara negara-negara adidaya. Chip ini direncanakan akan menjadi standar wajib untuk perangkat komputasi di fasilitas militer dan pemerintahan masa depan.',
      'Komersialisasi chip ini dijadwalkan akan dimulai pertengahan tahun depan. ITB saat ini sedang dalam tahap akhir penjajakan kerja sama dengan *foundry* (pabrik semikonduktor) di Taiwan untuk produksi massal skala industri.',
      'Beberapa vendor perangkat elektronik lokal dilaporkan telah menandatangani MoU untuk mengintegrasikan prosesor Nusantara-1 ke dalam produk *smart home* dan sistem kontrol kendaraan listrik listrik buatan dalam negeri.'
    ],
    penulis: 'Eko Prasetyo',
    waktu: '8 jam lalu',
    views: '19.4K',
    gambar: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    tags: ['Chip', 'ITB', 'Inovasi']
  },

  // ── Olahraga ──
  {
    id: 7,
    kategori: 'Olahraga',
    headline: false,
    trending: true,
    judul: 'Timnas Indonesia Lolos ke Final Piala AFF Usai Kalahkan Thailand',
    ringkasan: 'Skuad Garuda mengukir sejarah dengan mengalahkan Thailand 2-1 di semifinal Piala AFF. Gol kemenangan hadir di menit ke-89 lewat tendangan sang kapten.',
    isi: [
      'Timnas Indonesia berhasil menuntaskan dahaga kemenangan dengan mengalahkan rival abadi mereka, Thailand, dengan skor tipis 2-1 dalam pertandingan semifinal leg kedua Piala AFF yang berlangsung dramatis di Stadion Utama Gelora Bung Karno.',
      'Atmosfer stadion sangat memekakkan telinga dengan kehadiran lebih dari 75.000 suporter yang tak henti-hentinya menyanyikan yel-yel dukungan. Koreografi raksasa bergambar Garuda terbentang di tribun selatan sebelum *kick-off* dimulai.',
      'Pertandingan berjalan alot di babak pertama. Thailand berhasil mencuri keunggulan lebih dulu pada menit ke-32 melalui serangan balik cepat yang diselesaikan dengan sontekan tajam striker andalan mereka, menembus sudut kiri gawang Indonesia.',
      'Memasuki babak kedua, Skuad Garuda meningkatkan intensitas serangan. Hasilnya terlihat pada menit ke-65, Indonesia menyamakan kedudukan melalui tendangan bebas langsung dari luar kotak penalti yang melengkung indah melewati pagar betis pemain Thailand.',
      'Ketegangan memuncak di sisa waktu pertandingan. Ketika laga sepertinya akan dilanjutkan ke babak perpanjangan waktu, gol kemenangan bersejarah itu akhirnya hadir di menit ke-89 dan membuat GBK bergemuruh.',
      'Sang kapten tim, yang masuk dari *blind side*, berhasil menerima umpan terobosan akurat dari lini tengah. Tanpa ragu, ia melepaskan tembakan voli keras menggunakan kaki kanannya yang sama sekali tidak bisa dijangkau oleh kiper Thailand.',
      'Peluit panjang dibunyikan, memicu tangis haru para pemain dan ofisial di pinggir lapangan. Kemenangan agregat 3-2 ini memastikan langkah Indonesia menuju laga puncak yang telah lama diidam-idamkan.',
      'Pelatih kepala dalam konferensi pers pasca laga menyatakan kebanggaannya dengan mata berkaca-kaca: "Mentalitas anak-anak malam ini luar biasa. Kami sempat tertinggal, tapi mereka tidak pernah menyerah. Ini bukan hanya kemenangan tim, ini kemenangan seluruh rakyat Indonesia."'
    ],
    penulis: 'Yoga Permana',
    waktu: '30 menit lalu',
    views: '125.6K',
    gambar: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800&q=80',
    tags: ['Timnas', 'Piala AFF', 'Sepakbola']
  },
  {
    id: 8,
    kategori: 'Olahraga',
    headline: false,
    trending: false,
    judul: 'Kevin/Marcus Raih Emas di Kejuaraan Bulutangkis Dunia 2025',
    ringkasan: 'Pasangan ganda putra Indonesia berhasil meraih medali emas di BWF World Championships setelah mengalahkan pasangan Denmark dalam rubber game yang ketat.',
    isi: [
      'Pasangan legendaris ganda putra Indonesia, Kevin Sanjaya Sukamuljo dan Marcus Fernaldi Gideon, kembali membuktikan tajinya dengan meraih medali emas bergengsi di Kejuaraan Bulutangkis Dunia BWF 2025 yang digelar di Royal Arena, Kopenhagen, Denmark.',
      'Partai final yang mempertemukan mereka dengan pasangan nomor dua dunia asal tuan rumah Denmark ini berlangsung sangat dramatis dan menguras energi. Riuh penonton tuan rumah tidak meruntuhkan mental pasangan yang berjuluk "The Minions" tersebut.',
      'Pertandingan dimenangkan melalui pertarungan *rubber game* dengan skor akhir 21-18, 19-21, dan 21-15. Pada set pertama, Kevin/Marcus tampil mendominasi dengan gaya permainan cepat dan *interception* mematikan di depan net.',
      'Memasuki set kedua, pasangan Denmark mengubah strategi dengan memperlambat tempo dan bermain lob-lob panjang yang merepotkan pertahanan Indonesia. Strategi ini berhasil memaksa pertandingan dilanjutkan ke set penentuan.',
      'Di set ketiga, stamina Marcus sempat terlihat menurun, namun pengalaman bertahun-tahun di level elit terbukti menjadi kunci. Variasi pukulan dan *smash* keras Kevin di poin-poin kritis berhasil meruntuhkan moral lawan.',
      'Tangis haru pecah saat pukulan *shuttlecock* terakhir dari lawan membentur net. Marcus langsung tersungkur di lapangan sementara Kevin berlari memeluk pelatih mereka di pinggir lapangan.',
      'Ini menjadi medali emas keempat bagi Kevin dan Marcus di ajang kejuaraan dunia BWF, sebuah rekor fantastis yang memperkuat posisi mereka sebagai salah satu pasangan ganda putra terbaik sepanjang masa dalam sejarah bulutangkis.',
      '"Kami dedikasikan kemenangan ini untuk keluarga dan masyarakat Indonesia yang selalu mendukung kami di masa sulit. Usia hanyalah angka selama kemauan untuk menang masih ada," ujar Marcus dalam wawancara penganugerahan medali.'
    ],
    penulis: 'Putri Handayani',
    waktu: '5 jam lalu',
    views: '67.2K',
    gambar: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    tags: ['Bulutangkis', 'BWF', 'Emas']
  },
  {
    id: 9,
    kategori: 'Olahraga',
    headline: false,
    trending: false,
    judul: 'Liga BRI Musim Baru Dibuka dengan Rekor 80 Ribu Penonton',
    ringkasan: 'Pertandingan pembuka Liga BRI musim 2025/2026 menarik 80.000 penonton ke stadion, rekor tertinggi dalam sejarah sepakbola domestik Indonesia.',
    isi: [
      'Musim kompetisi baru Liga BRI 2025/2026 resmi bergulir dengan gegap gempita. Pertandingan pembuka yang mempertemukan dua tim raksasa klasik Indonesia berhasil menarik lebih dari 80.000 penonton ke Stadion Utama Gelora Bung Karno Jakarta.',
      'Angka fantastis ini tercatat sebagai rekor jumlah penonton terbanyak dalam satu pertandingan dalam sejarah era profesional sepakbola domestik Indonesia, memecahkan rekor sebelumnya yang bertahan selama satu dekade.',
      'Antusiasme luar biasa ini dinilai oleh para pengamat sebagai bukti nyata dari meningkatnya kualitas kompetisi, transparansi wasit, dan daya tarik Liga BRI yang terus berbenah. Seluruh tiket dilaporkan ludes terjual melalui platform *online* hanya dalam kurun waktu empat jam.',
      'Pihak kepolisian mengerahkan lebih dari 4.500 personel gabungan untuk mengamankan jalannya pertandingan. Sistem pemindaian tiket biometrik wajah di pintu masuk stadion yang baru diterapkan terbukti ampuh mencegah kebocoran tiket dan menekan keberadaan calo.',
      'Musim ini Liga BRI diikuti oleh 18 klub peserta, termasuk dua tim kuda hitam yang baru promosi dari Liga 2 yang siap memberikan kejutan. Kompetisi juga diwarnai dengan kehadiran teknologi VAR (*Video Assistant Referee*) di seluruh stadion penyelenggara.',
      'Geliat transfer musim ini juga menjadi faktor daya tarik tersendiri. Beberapa pemain bintang asing jebolan liga-liga Eropa dan Asia Timur yang memiliki kualitas tinggi telah resmi merumput di Indonesia, secara otomatis mengangkat nilai komersial liga.',
      'Ketua Umum PSSI yang hadir membuka *kick-off* perdana mengapresiasi kedewasaan suporter. "Sepakbola kita sudah naik kelas. Hari ini kita buktikan bahwa stadion adalah tempat yang aman dan nyaman untuk keluarga, dengan atmosfer kelas dunia," tegasnya.',
      'Dampak ekonomi dari laga pembuka ini juga sangat signifikan. Omzet penjualan *merchandise* resmi klub dan pedagang UMKM di sekitar kawasan senayan dilaporkan melonjak hingga 300 persen dibandingkan rata-rata pertandingan musim lalu.'
    ],
    penulis: 'Hendra Wijaya',
    waktu: '7 jam lalu',
    views: '38.9K',
    gambar: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800',
    tags: ['Liga BRI', 'Sepakbola', 'Rekor']
  }
];

// ====================================
// State
// ====================================
var currentCat = 'semua';
var currentSearch = '';

// ====================================
// Dark Mode
// ====================================
function initDarkMode() {
  var saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkIcon').className = 'bi bi-sun-fill';
  }
}

function toggleDark() {
  var body = document.body;
  var icon = document.getElementById('darkIcon');
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    icon.className = 'bi bi-moon-fill';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-mode');
    icon.className = 'bi bi-sun-fill';
    localStorage.setItem('theme', 'dark');
  }
}

// ====================================
// Badge
// ====================================
function getBadge(kategori) {
  var cls = 'badge-' + kategori.toLowerCase();
  return '<span class="badge-pill ' + cls + '">' + kategori + '</span>';
}

// ====================================
// Gambar per kategori
// ====================================
function getGambar(b, idx) {
  if (b.gambar) return b.gambar;
  var imgs = {
    Politik: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
    Teknologi: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    Olahraga: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800&q=80'
  };
  return imgs[b.kategori] || imgs.Teknologi;
}

// ====================================
// Hero Card
// ====================================
function buildHero() {
  var hero = null;
  for (var i = 0; i < berita.length; i++) {
    if (berita[i].headline) { hero = berita[i]; break; }
  }
  if (!hero) return;

  var el = document.getElementById('heroCard');
  el.className = 'hero-card';
  el.innerHTML =
    '<img src="' + hero.gambar + '" alt="' + hero.judul + '" loading="lazy">' +
    '<div class="hero-body">' +
      '<span class="hero-badge">' + hero.kategori + '</span>' +
      '<h2 class="hero-title">' + hero.judul + '</h2>' +
      '<p class="hero-excerpt">' + hero.ringkasan + '</p>' +
      '<div class="hero-meta">' +
        '<span><i class="bi bi-person"></i>' + hero.penulis + '</span>' +
        '<span><i class="bi bi-clock"></i>' + hero.waktu + '</span>' +
        '<span><i class="bi bi-eye"></i>' + hero.views + '</span>' +
      '</div>' +
    '</div>';

  el.onclick = function() { showDetail(hero.id); };
}

// ====================================
// Trending
// ====================================
function buildTrending() {
  var list = [];
  for (var i = 0; i < berita.length; i++) {
    if (berita[i].trending) list.push(berita[i]);
  }

  var html = '';
  for (var j = 0; j < list.length; j++) {
    var n = list[j];
    var num = String(j + 1).padStart(2, '0');
    html +=
      '<div class="trending-item" data-id="' + n.id + '">' +
        '<span class="trend-num">' + num + '</span>' +
        '<div class="trend-info">' +
          '<div class="trend-title">' + n.judul + '</div>' +
          '<div class="trend-meta">' +
            '<i class="bi bi-eye"></i> ' + n.views + ' &nbsp;·&nbsp; ' + n.waktu +
          '</div>' +
        '</div>' +
        '<div class="trend-thumb">' +
          '<img src="' + n.gambar + '" alt="" loading="lazy">' +
        '</div>' +
      '</div>';
  }

  document.getElementById('trendingList').innerHTML = html;

  var items = document.querySelectorAll('.trending-item');
  for (var k = 0; k < items.length; k++) {
    (function(item) {
      item.onclick = function() {
        showDetail(parseInt(item.getAttribute('data-id')));
      };
    })(items[k]);
  }
}

// ====================================
// Filter berita
// ====================================
function getFiltered() {
  var result = [];
  for (var i = 0; i < berita.length; i++) {
    var n = berita[i];
    var catOk = currentCat === 'semua' || n.kategori === currentCat;
    var q = currentSearch.toLowerCase();
    var searchOk = !q ||
      n.judul.toLowerCase().indexOf(q) >= 0 ||
      n.ringkasan.toLowerCase().indexOf(q) >= 0;
    if (catOk && searchOk) result.push(n);
  }
  return result;
}

// ====================================
// Render Grid
// ====================================
function renderGrid() {
  var filtered = getFiltered();
  var grid = document.getElementById('newsGrid');
  var noResult = document.getElementById('noResult');
  var label = document.getElementById('sectionLabel');
  var count = document.getElementById('articleCount');

  // Label
  if (currentSearch) {
    label.textContent = 'Hasil: "' + currentSearch + '"';
  } else if (currentCat !== 'semua') {
    label.textContent = 'Kategori: ' + currentCat;
  } else {
    label.textContent = 'Berita Terbaru';
  }
  count.textContent = filtered.length + ' artikel';

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noResult.style.display = 'block';
    return;
  }
  noResult.style.display = 'none';

  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    var n = filtered[i];
    var img = getGambar(n, i);
    html +=
      '<div class="col-md-6 col-lg-4">' +
        '<div class="news-card" data-id="' + n.id + '">' +
          '<div class="card-img">' +
            '<img src="' + img + '" alt="' + n.judul + '" loading="lazy">' +
            '<div class="card-badge">' + getBadge(n.kategori) + '</div>' +
          '</div>' +
          '<div class="card-content">' +
            '<h3 class="card-title">' + n.judul + '</h3>' +
            '<p class="card-excerpt">' + n.ringkasan + '</p>' +
          '</div>' +
          '<div class="card-footer-row">' +
            '<span><i class="bi bi-clock"></i> ' + n.waktu + '</span>' +
            '<span class="read-link">Baca <i class="bi bi-arrow-right"></i></span>' +
          '</div>' +
        '</div>' +
      '</div>';
  }
  grid.innerHTML = html;

  var cards = grid.querySelectorAll('.news-card');
  for (var j = 0; j < cards.length; j++) {
    (function(card) {
      card.onclick = function() {
        showDetail(parseInt(card.getAttribute('data-id')));
      };
    })(cards[j]);
  }
}

// ====================================
// Detail
// ====================================
function showDetail(id) {
  var article = null;
  for (var i = 0; i < berita.length; i++) {
    if (berita[i].id === id) { article = berita[i]; break; }
  }
  if (!article) return;

  document.getElementById('homeView').style.display = 'none';
  document.getElementById('detailView').style.display = 'block';
  window.scrollTo(0, 0);

  // Related
  var related = [];
  for (var j = 0; j < berita.length; j++) {
    if (berita[j].kategori === article.kategori && berita[j].id !== id) {
      related.push(berita[j]);
      if (related.length >= 3) break;
    }
  }

  var isiHtml = '';
  for (var k = 0; k < article.isi.length; k++) {
    isiHtml += '<p>' + article.isi[k] + '</p>';
  }

  var tagsHtml = '';
  for (var t = 0; t < article.tags.length; t++) {
    tagsHtml += '<span class="tag">#' + article.tags[t] + '</span>';
  }

  var relatedHtml = '';
  if (related.length > 0) {
    var cards = '';
    for (var r = 0; r < related.length; r++) {
      var rn = related[r];
      cards +=
        '<div class="col-md-4">' +
          '<div class="news-card" data-id="' + rn.id + '">' +
            '<div class="card-img">' +
              '<img src="' + rn.gambar + '" alt="' + rn.judul + '" loading="lazy">' +
              '<div class="card-badge">' + getBadge(rn.kategori) + '</div>' +
            '</div>' +
            '<div class="card-content">' +
              '<h3 class="card-title">' + rn.judul + '</h3>' +
            '</div>' +
            '<div class="card-footer-row">' +
              '<span>' + rn.waktu + '</span>' +
              '<span class="read-link">Baca <i class="bi bi-arrow-right"></i></span>' +
            '</div>' +
          '</div>' +
        '</div>';
    }
    relatedHtml =
      '<div class="related-title">Berita Terkait</div>' +
      '<div class="row g-3">' + cards + '</div>';
  }

  document.getElementById('detailContainer').innerHTML =
    '<div class="detail-img"><img src="' + article.gambar + '" alt="' + article.judul + '"></div>' +
    '<div class="detail-badge">' + getBadge(article.kategori) + '</div>' +
    '<h1 class="detail-title">' + article.judul + '</h1>' +
    '<div class="detail-meta">' +
      '<span><i class="bi bi-person-circle"></i>' + article.penulis + '</span>' +
      '<span><i class="bi bi-clock-fill"></i>' + article.waktu + '</span>' +
      '<span><i class="bi bi-eye-fill"></i>' + article.views + ' pembaca</span>' +
    '</div>' +
    '<div class="detail-body">' + isiHtml + '</div>' +
    '<div class="detail-tags">' + tagsHtml + '</div>' +
    relatedHtml;

  // Pasang event pada related cards
  var relCards = document.getElementById('detailContainer').querySelectorAll('.news-card');
  for (var rc = 0; rc < relCards.length; rc++) {
    (function(card) {
      card.onclick = function() {
        showDetail(parseInt(card.getAttribute('data-id')));
      };
    })(relCards[rc]);
  }
}

function showHome() {
  document.getElementById('detailView').style.display = 'none';
  document.getElementById('homeView').style.display = 'block';
  window.scrollTo(0, 0);
}

// ====================================
// Kategori
// ====================================
function initKategori() {
  var btns = document.querySelectorAll('.cat-btn');
  for (var i = 0; i < btns.length; i++) {
    (function(btn) {
      btn.onclick = function() {
        for (var j = 0; j < btns.length; j++) btns[j].classList.remove('active');
        btn.classList.add('active');
        currentCat = btn.getAttribute('data-cat');
        currentSearch = '';
        document.getElementById('searchInput').value = '';
        showHome();
        renderGrid();
      };
    })(btns[i]);
  }
}

// ====================================
// Search
// ====================================
function initSearch() {
  var input = document.getElementById('searchInput');
  input.oninput = function() {
    currentSearch = input.value;
    showHome();
    renderGrid();
  };
}

// ====================================
// INIT
// ====================================
document.addEventListener('DOMContentLoaded', function() {
  initDarkMode();
  buildHero();
  buildTrending();
  renderGrid();
  initKategori();
  initSearch();

  document.getElementById('darkToggle').onclick = toggleDark;
  document.getElementById('backBtn').onclick = showHome;
});
