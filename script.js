/* ════════════════════════════════════════════════════
   KabarKini — script.js
   Data, rendering, filtering, dark mode, search, detail
════════════════════════════════════════════════════ */

'use strict';

/* ─── Unsplash deterministic images per category ─── */
const IMGS = {
  Politik:   [
    'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80',
    'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
  ],
  Teknologi: [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  ],
  Olahraga:  [
    'https://images.unsplash.com/photo-1570498839593-e565b39455fc?w=800&q=80',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
  ],
  Ekonomi:   [
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80',
    'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
  ],
  Hiburan:   [
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
  ],
};

const BADGE_ICONS = {
  Politik:   'bi-building-fill',
  Teknologi: 'bi-cpu-fill',
  Olahraga:  'bi-trophy-fill',
  Ekonomi:   'bi-graph-up-arrow',
  Hiburan:   'bi-stars',
};

/* ─── Dummy News Data ─── */
const NEWS = [
  /* ── Politik ── */
  {
    id: 1, kategori: 'Politik', trending: true, headline: true,
    judul: 'Sidang Paripurna DPR Sahkan RUU Pemilu dengan Suara Bulat',
    ringkasan: 'Seluruh fraksi di DPR RI akhirnya menyetujui Rancangan Undang-Undang Pemilu yang telah dibahas selama lebih dari setahun. Regulasi baru ini mencakup penerapan sistem proporsional terbuka dan pembatasan dana kampanye.',
    isi: [
      'Dewan Perwakilan Rakyat Republik Indonesia menggelar sidang paripurna untuk mengesahkan Rancangan Undang-Undang Pemilu. Sidang yang berlangsung mulai pukul 09.00 WIB ini dihadiri oleh 480 anggota DPR dari seluruh fraksi.',
      'Ketua DPR dalam sambutannya menyatakan bahwa undang-undang ini merupakan tonggak penting dalam perjalanan demokrasi Indonesia. Regulasi baru ini akan berlaku mulai tahun 2026 dan mengatur seluruh mekanisme pemilihan umum dari tingkat desa hingga nasional.',
      'Salah satu poin paling kontroversial yang akhirnya disepakati adalah penerapan sistem proporsional terbuka yang memberikan kesempatan lebih besar kepada kandidat perempuan. Minimal 30 persen calon dalam setiap daftar partai harus berjenis kelamin perempuan.',
      'Pembatasan dana kampanye juga diperketat secara signifikan. Calon legislatif kini hanya diperbolehkan menghabiskan maksimal Rp 2 miliar untuk kampanye di tingkat kabupaten/kota. Pelanggaran terhadap ketentuan ini dapat mengakibatkan diskualifikasi.',
      'Para pengamat politik menyambut positif pengesahan UU ini, meskipun beberapa pihak masih mempertanyakan efektivitas pengawasan oleh Bawaslu dalam menghadapi era digital yang semakin kompleks.',
    ],
    penulis: 'Budi Santoso', waktu: '2 jam lalu', views: '45.2K',
    tags: ['DPR', 'Pemilu', 'Politik', 'Demokrasi'],
  },
  {
    id: 2, kategori: 'Politik', trending: false, headline: false,
    judul: 'Presiden Lantik Kabinet Baru, 12 Menteri Wajah Segar',
    ringkasan: 'Dalam upacara di Istana Negara, Presiden melantik 12 menteri baru hasil evaluasi kinerja semester pertama. Perubahan ini mencakup sejumlah kementerian strategis termasuk keuangan dan industri.',
    isi: [
      'Presiden RI secara resmi melantik 12 menteri baru dalam upacara yang berlangsung khidmat di Istana Negara. Reshuffle kabinet ini merupakan yang pertama sejak terbentuknya pemerintahan baru 18 bulan lalu.',
      'Perubahan paling signifikan terjadi di kementerian yang menangani sektor ekonomi. Menteri Keuangan yang baru, seorang ekonom senior berusia 52 tahun, diharapkan dapat membawa stabilitas di tengah volatilitas pasar global.',
      'Presiden menjelaskan bahwa pergantian ini didasarkan pada evaluasi kinerja yang komprehensif dan kebutuhan akselerasi program prioritas nasional. Menteri-menteri yang diganti tetap mendapat penghargaan atas kontribusi mereka.',
    ],
    penulis: 'Siti Rahayu', waktu: '4 jam lalu', views: '32.1K',
    tags: ['Kabinet', 'Presiden', 'Pemerintahan'],
  },
  {
    id: 3, kategori: 'Politik', trending: false, headline: false,
    judul: 'KPK Tetapkan Gubernur X sebagai Tersangka Korupsi Dana Infrastruktur',
    ringkasan: 'Komisi Pemberantasan Korupsi menetapkan seorang gubernur aktif sebagai tersangka dalam kasus korupsi pengadaan infrastruktur senilai Rp 450 miliar. Pemeriksaan dijadwalkan pada pekan depan.',
    isi: [
      'Komisi Pemberantasan Korupsi (KPK) secara mengejutkan mengumumkan penetapan seorang gubernur aktif sebagai tersangka kasus korupsi. Kasus ini bermula dari laporan masyarakat mengenai proyek infrastruktur yang dinilai tidak wajar.',
      'Berdasarkan hasil penyelidikan selama delapan bulan, KPK menemukan indikasi kuat adanya penyimpangan dalam proses pengadaan proyek senilai Rp 450 miliar. Dana tersebut seharusnya digunakan untuk pembangunan jalan dan jembatan di wilayah terpencil.',
      'Gubernur yang bersangkutan melalui kuasa hukumnya menyatakan akan kooperatif dan mengikuti seluruh proses hukum yang berlaku. Tim penasihat hukumnya berjanji akan membuktikan bahwa klien mereka tidak bersalah.',
    ],
    penulis: 'Ahmad Fauzi', waktu: '6 jam lalu', views: '78.5K',
    tags: ['KPK', 'Korupsi', 'Hukum', 'Daerah'],
  },

  /* ── Teknologi ── */
  {
    id: 4, kategori: 'Teknologi', trending: true, headline: false,
    judul: 'Startup AI Lokal Raih Pendanaan Seri B Senilai Rp 850 Miliar',
    ringkasan: 'Perusahaan rintisan kecerdasan buatan asal Bandung berhasil menutup putaran pendanaan Seri B dengan total investasi yang mengesankan. Dana ini akan digunakan untuk ekspansi ke 5 negara ASEAN.',
    isi: [
      'Sebuah startup kecerdasan buatan (AI) asal Bandung berhasil mengamankan pendanaan Seri B senilai Rp 850 miliar dari konsorsium investor yang terdiri dari beberapa venture capital ternama dari Singapura, Amerika Serikat, dan Jepang.',
      'Perusahaan yang berdiri pada 2021 ini mengembangkan solusi AI khusus untuk industri pertanian dan ketahanan pangan. Platform mereka telah digunakan oleh lebih dari 50.000 petani di Pulau Jawa dan Sumatera untuk meningkatkan hasil panen.',
      'CEO dan co-founder perusahaan menyatakan bahwa pendanaan ini akan digunakan untuk memperluas tim riset dan pengembangan, serta melakukan ekspansi ke lima negara ASEAN dalam 18 bulan ke depan. Filipina dan Vietnam menjadi target prioritas pertama.',
      'Model AI mereka diklaim mampu memprediksi kondisi cuaca mikro, serangan hama, dan waktu optimal panen dengan akurasi hingga 94 persen. Teknologi ini telah membantu meningkatkan pendapatan petani rata-rata sebesar 35 persen.',
    ],
    penulis: 'Dewi Lestari', waktu: '1 jam lalu', views: '28.7K',
    tags: ['Startup', 'AI', 'Investasi', 'Pertanian'],
  },
  {
    id: 5, kategori: 'Teknologi', trending: true, headline: false,
    judul: 'Pemerintah Resmi Luncurkan Program 5G Nasional di 50 Kota',
    ringkasan: 'Kementerian Komunikasi dan Informatika meluncurkan rollout 5G secara masif yang akan menjangkau 50 kota besar di seluruh Indonesia dalam dua tahun ke depan, membawa revolusi konektivitas digital.',
    isi: [
      'Kementerian Komunikasi dan Informatika secara resmi meluncurkan program perluasan jaringan 5G Nasional yang ambisius. Program ini menargetkan 50 kota di Indonesia mendapatkan akses 5G komersial dalam dua tahun mendatang.',
      'Dalam tahap pertama yang dimulai bulan ini, sebanyak 15 kota prioritas termasuk Jakarta, Surabaya, Medan, Makassar, dan Bali akan mendapatkan peningkatan infrastruktur jaringan. Tiga operator telekomunikasi besar telah menandatangani komitmen investasi senilai total Rp 45 triliun.',
      'Menteri Kominfo menjelaskan bahwa 5G bukan sekadar internet lebih cepat, melainkan fondasi untuk transformasi industri melalui IoT, smart city, telemedicine, dan kendaraan otonom. Kecepatan unduh yang ditawarkan bisa mencapai 10 Gbps.',
    ],
    penulis: 'Rizki Pratama', waktu: '3 jam lalu', views: '41.3K',
    tags: ['5G', 'Teknologi', 'Digital', 'Kominfo'],
  },
  {
    id: 6, kategori: 'Teknologi', trending: false, headline: false,
    judul: 'Chip Buatan Anak Bangsa Siap Bersaing di Pasar Global',
    ringkasan: 'Tim riset dari Institut Teknologi Bandung berhasil mengembangkan prosesor RISC-V pertama buatan Indonesia yang diklaim mampu menyaingi efisiensi energi chip ARM generasi terbaru.',
    isi: [
      'Sebuah terobosan besar hadir dari dunia riset Indonesia. Tim peneliti dari Institut Teknologi Bandung (ITB) berhasil menyelesaikan pengembangan prosesor berbasis arsitektur RISC-V yang sepenuhnya dirancang oleh putra-putri bangsa.',
      'Chip bernama "Nusantara-1" ini dirancang menggunakan proses fabrikasi 7nm dan diklaim memiliki efisiensi energi yang setara dengan chip ARM generasi terkini. Prototipe telah berhasil menjalankan sistem operasi Linux secara stabil.',
      'Proyek yang memakan waktu empat tahun ini mendapat dukungan penuh dari Badan Riset dan Inovasi Nasional (BRIN) serta beberapa perusahaan teknologi swasta. Tahap komersialisasi direncanakan dimulai pada pertengahan tahun depan.',
    ],
    penulis: 'Eko Prasetyo', waktu: '8 jam lalu', views: '19.4K',
    tags: ['Chip', 'RISC-V', 'ITB', 'Inovasi'],
  },

  /* ── Olahraga ── */
  {
    id: 7, kategori: 'Olahraga', trending: true, headline: false,
    judul: 'Timnas Indonesia Lolos ke Final Piala AFF Setelah Kalahkan Thailand',
    ringkasan: 'Skuad Garuda mengukir sejarah dengan mengalahkan Thailand 2-1 di semifinal Piala AFF. Gol kemenangan yang dramatis hadir di menit ke-89 melalui tendangan keras sang kapten tim.',
    isi: [
      'Timnas Indonesia mencatatkan momen bersejarah dalam perjalanan di Piala AFF. Skuad Garuda berhasil mengalahkan rival abadi Thailand dengan skor tipis 2-1 dalam pertandingan semifinal yang menegangkan di Stadion Gelora Bung Karno.',
      'Pertandingan berjalan keras sejak menit pertama. Thailand unggul lebih dulu melalui serangan balik cepat di babak pertama. Namun Indonesia tidak menyerah dan berhasil menyamakan kedudukan melalui tendangan bebas langsung yang akurat.',
      'Gol kemenangan yang akan dikenang sepanjang masa itu datang di menit ke-89. Kapten tim menerima umpan terobosan, mengontrol dengan sempurna, dan melepaskan tembakan keras yang gagal dijangkau kiper Thailand. Stadion pun meledak dalam euforia luar biasa.',
      'Pelatih kepala menyatakan kebanggaannya kepada seluruh pemain yang telah berjuang habis-habisan. "Ini bukan hanya kemenangan tim, ini kemenangan seluruh rakyat Indonesia," ujarnya dalam konferensi pers pasca pertandingan.',
    ],
    penulis: 'Yoga Permana', waktu: '30 menit lalu', views: '125.6K',
    tags: ['Timnas', 'Piala AFF', 'Sepakbola', 'Garuda'],
  },
  {
    id: 8, kategori: 'Olahraga', trending: false, headline: false,
    judul: 'Kevin/Marcus Sumbang Emas Kejuaraan Bulutangkis Dunia 2025',
    ringkasan: 'Pasangan ganda putra kebanggan Indonesia berhasil meraih medali emas di BWF World Championships setelah mengalahkan pasangan Denmark dalam rubber game yang menegangkan.',
    isi: [
      'Kevin Sanjaya Sukamuljo dan Marcus Fernaldi Gideon kembali mengharumkan nama Indonesia di panggung bulutangkis dunia. Keduanya berhasil meraih medali emas di Kejuaraan Bulutangkis Dunia BWF yang digelar di Kopenhagen, Denmark.',
      'Final yang berlangsung ketat tersebut akhirnya dimenangkan pasangan Indonesia dengan skor 21-18, 19-21, 21-15. Pasangan Denmark memberikan perlawanan sengit, tetapi pengalaman dan variasi pukulan Kevin/Marcus terbukti menjadi kunci kemenangan.',
      'Medali emas ini menjadi yang keempat kalinya bagi Kevin dan Marcus di kejuaraan dunia, memperkuat posisi mereka sebagai salah satu pasangan ganda putra terbaik dalam sejarah bulutangkis dunia.',
    ],
    penulis: 'Putri Handayani', waktu: '5 jam lalu', views: '67.2K',
    tags: ['Bulutangkis', 'BWF', 'Kevin Marcus', 'Emas'],
  },
  {
    id: 9, kategori: 'Olahraga', trending: false, headline: false,
    judul: 'Liga BRI Musim Baru Dimulai dengan Rekor Penonton Tertinggi',
    ringkasan: 'Pertandingan pembuka Liga BRI musim 2025/2026 berhasil menarik 80.000 penonton ke stadion, rekor tertinggi dalam sejarah sepakbola domestik Indonesia yang mencerminkan antusiasme masyarakat.',
    isi: [
      'Musim baru Liga BRI 2025/2026 resmi bergulir dengan perayaan yang meriah. Pertandingan pembuka yang mempertemukan dua klub besar Jakarta ini berhasil menarik lebih dari 80.000 penonton ke Stadion Utama Gelora Bung Karno, mencetak rekor penonton terbanyak dalam sejarah sepakbola domestik.',
      'Antusiasme masyarakat yang luar biasa ini dinilai sebagai bukti meningkatnya kualitas dan daya tarik Liga BRI dalam beberapa musim terakhir. Operator liga mengumumkan bahwa seluruh tiket terjual habis hanya dalam waktu empat jam sejak dibuka secara online.',
      'Musim ini diikuti oleh 18 klub dengan penambahan dua tim promosi dari Liga 2. Beberapa pemain bintang asing berkualitas tinggi juga telah bergabung, meningkatkan daya saing liga secara keseluruhan.',
    ],
    penulis: 'Hendra Wijaya', waktu: '7 jam lalu', views: '38.9K',
    tags: ['Liga BRI', 'Sepakbola', 'Domestik', 'Rekor'],
  },

  /* ── Ekonomi ── */
  {
    id: 10, kategori: 'Ekonomi', trending: false, headline: false,
    judul: 'BI Tahan Suku Bunga Acuan di 5,75%, Rupiah Menguat Tipis',
    ringkasan: 'Bank Indonesia memutuskan untuk mempertahankan suku bunga acuan BI Rate di level 5,75% dalam Rapat Dewan Gubernur bulan ini. Keputusan ini disambut positif pasar dengan penguatan rupiah.',
    isi: [
      'Bank Indonesia (BI) memutuskan untuk mempertahankan suku bunga acuan BI Rate di level 5,75% dalam Rapat Dewan Gubernur yang berlangsung dua hari. Keputusan ini sesuai dengan ekspektasi mayoritas pelaku pasar.',
      'Gubernur BI menjelaskan bahwa keputusan ini diambil dengan mempertimbangkan kondisi ekonomi global yang masih penuh ketidakpastian dan perlunya menjaga stabilitas nilai tukar rupiah. Inflasi yang terkendali di kisaran target memberikan ruang untuk kebijakan yang lebih akomodatif ke depan.',
      'Merespons keputusan BI, nilai tukar rupiah menguat tipis ke level Rp 15.650 per dolar AS dari sebelumnya Rp 15.720. Indeks Harga Saham Gabungan (IHSG) juga bergerak positif menguat 0,4% di akhir sesi perdagangan.',
    ],
    penulis: 'Mira Agustina', waktu: '4 jam lalu', views: '22.1K',
    tags: ['Bank Indonesia', 'Suku Bunga', 'Rupiah', 'Ekonomi'],
  },
  {
    id: 11, kategori: 'Ekonomi', trending: false, headline: false,
    judul: 'Ekspor Kelapa Sawit Indonesia Naik 18% di Kuartal Pertama 2025',
    ringkasan: 'Data terbaru dari Badan Pusat Statistik menunjukkan kenaikan signifikan nilai ekspor kelapa sawit Indonesia pada Q1 2025, didorong oleh meningkatnya permintaan dari India dan Pakistan.',
    isi: [
      'Nilai ekspor kelapa sawit Indonesia mencatat pertumbuhan yang menggembirakan sebesar 18 persen pada kuartal pertama 2025 dibandingkan periode yang sama tahun lalu. Data ini dirilis oleh Badan Pusat Statistik (BPS) dalam laporan bulanan terbaru.',
      'Peningkatan ini terutama didorong oleh lonjakan permintaan dari India dan Pakistan yang masing-masing tumbuh 32 dan 28 persen. Harga minyak sawit mentah (CPO) di pasar internasional juga berada pada level yang menguntungkan di kisaran USD 1.050 per ton.',
      'Gabungan Pengusaha Kelapa Sawit Indonesia (GAPKI) menyambut positif data ini dan berharap tren positif dapat berlanjut sepanjang tahun, meskipun tetap mewaspadai potensi hambatan tarif dari beberapa negara importir.',
    ],
    penulis: 'Toni Kusuma', waktu: '9 jam lalu', views: '15.8K',
    tags: ['Ekspor', 'Sawit', 'Ekonomi', 'BPS'],
  },

  /* ── Hiburan ── */
  {
    id: 12, kategori: 'Hiburan', trending: true, headline: false,
    judul: 'Film "Nusantara" Pecahkan Rekor 5 Juta Penonton dalam 7 Hari',
    ringkasan: 'Film kolosal produksi Indonesia "Nusantara" mencatatkan pencapaian luar biasa dengan menembus angka 5 juta penonton hanya dalam tujuh hari penayangan, menjadikannya film tercepal yang mencapai milestone tersebut.',
    isi: [
      'Film epik bertema sejarah nusantara berjudul "Nusantara" mencetak rekor yang mengejutkan industri perfilman Indonesia. Dalam waktu hanya tujuh hari sejak penayangan perdana, film ini berhasil meraih 5 juta penonton, rekor tercepat dalam sejarah sinema Indonesia.',
      'Film yang diproduksi dengan anggaran Rp 200 miliar dan menghabiskan tiga tahun dalam produksi ini mengisahkan perjalanan epik pendiri kerajaan Majapahit. Visual effects yang dikerjakan oleh tim gabungan Indonesia dan Korea Selatan mendapat pujian luas dari kritikus.',
      'Sutradara film tersebut mengungkapkan kebahagiaannya dalam sebuah konferensi pers di Jakarta. Ia berterima kasih kepada seluruh tim produksi yang telah bekerja keras, serta kepada penonton Indonesia yang sangat antusias menyambut karya anak bangsa.',
      'Film ini kini tengah dalam negosiasi untuk distribusi di beberapa negara Asia Tenggara, Australia, dan Eropa. Sebuah platform streaming internasional juga dikabarkan sedang dalam pembicaraan untuk hak tayang eksklusif di platform mereka.',
    ],
    penulis: 'Nadia Kusuma', waktu: '2 jam lalu', views: '93.4K',
    tags: ['Film', 'Bioskop', 'Rekor', 'Hiburan'],
  },
  {
    id: 13, kategori: 'Hiburan', trending: false, headline: false,
    judul: 'Musisi Indonesia Raih Nominasi Grammy Awards untuk Pertama Kalinya',
    ringkasan: 'Seorang penyanyi-penulis lagu Indonesia yang telah mendunia berhasil mendapatkan nominasi di Grammy Awards 2026 untuk kategori Best New Artist, mengukir sejarah bagi musik Indonesia di kancah global.',
    isi: [
      'Dunia musik Indonesia merayakan pencapaian bersejarah. Seorang musisi muda Indonesia berhasil masuk nominasi Grammy Awards 2026 dalam kategori Best New Artist, menjadikannya artis Indonesia pertama yang meraih nominasi di ajang penghargaan musik paling bergengsi di dunia.',
      'Album debutnya yang dirilis secara internasional berhasil meraih lebih dari 500 juta streaming di berbagai platform musik digital global. Karyanya yang memadukan elemen musik tradisional Indonesia dengan pop modern mendapat respons luar biasa dari pendengar di seluruh dunia.',
      'Industri musik Indonesia menyambut kabar ini dengan penuh kebanggaan. Berbagai asosiasi musik dan seniman tanah air mengucapkan selamat dan berharap nominasi ini dapat menjadi pintu bagi lebih banyak musisi Indonesia untuk dikenal secara global.',
    ],
    penulis: 'Anisa Rahman', waktu: '11 jam lalu', views: '55.7K',
    tags: ['Grammy', 'Musik', 'Internasional', 'Hiburan'],
  },
];

/* ═════════════════════════════════════════════════
   UTILITY
═════════════════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function getCatBadge(kat) {
  const key = kat.toLowerCase();
  const icon = BADGE_ICONS[kat] || 'bi-tag-fill';
  return `<span class="badge-pill badge-${key}"><i class="bi ${icon}"></i> ${kat}</span>`;
}

function getImg(kat, idx = 0) {
  const list = IMGS[kat] || IMGS.Teknologi;
  return list[idx % list.length];
}

function showToast(msg, icon = 'bi-check-circle-fill') {
  const wrap = $('#toastWrap');
  const el = document.createElement('div');
  el.className = 'toast-msg';
  el.innerHTML = `<i class="bi ${icon}"></i> ${msg}`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.animation = 'toastOut .3s ease forwards';
    setTimeout(() => el.remove(), 300);
  }, 2500);
}

/* ═════════════════════════════════════════════════
   STATE
═════════════════════════════════════════════════ */
let currentCat = 'semua';
let currentSearch = '';

/* ═════════════════════════════════════════════════
   DARK MODE
═════════════════════════════════════════════════ */
function initDarkMode() {
  const saved = localStorage.getItem('kk-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleDark() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('kk-theme', next);
  showToast(next === 'dark' ? 'Dark mode aktif 🌙' : 'Light mode aktif ☀️');
}

/* ═════════════════════════════════════════════════
   TICKER
═════════════════════════════════════════════════ */
function buildTicker() {
  const el = $('#tickerItems');
  const headlines = NEWS.filter(n => n.trending || n.headline).map(n => n.judul);
  // duplicate for seamless loop
  const items = [...headlines, ...headlines].map(t => `<span>${t}</span>`).join('');
  el.innerHTML = items;
}

/* ═════════════════════════════════════════════════
   HERO CARD
═════════════════════════════════════════════════ */
function buildHero() {
  const article = NEWS.find(n => n.headline);
  if (!article) return;
  const el = $('#heroCard');
  el.innerHTML = `
    <img src="${getImg(article.kategori, 0)}" alt="${article.judul}" loading="lazy" />
    <div class="hero-card-body">
      <div class="hero-badge headline-badge"><i class="bi bi-star-fill"></i> HEADLINE UTAMA</div>
      <div class="hero-badge" style="background:transparent;padding:0;margin-bottom:8px;">${getCatBadge(article.kategori)}</div>
      <h1 class="hero-title">${article.judul}</h1>
      <p class="hero-excerpt">${article.ringkasan}</p>
      <div class="hero-meta">
        <span><i class="bi bi-person-fill"></i>${article.penulis}</span>
        <span><i class="bi bi-clock-fill"></i>${article.waktu}</span>
        <span><i class="bi bi-eye-fill"></i>${article.views}</span>
      </div>
    </div>
  `;
  el.addEventListener('click', () => showDetail(article.id));
}

/* ═════════════════════════════════════════════════
   TRENDING LIST
═════════════════════════════════════════════════ */
function buildTrending() {
  const el = $('#trendingList');
  const trendNews = NEWS.filter(n => n.trending).slice(0, 5);
  el.innerHTML = trendNews.map((n, i) => `
    <div class="trending-item" data-id="${n.id}">
      <span class="trend-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="trend-info">
        <div class="trend-title">${n.judul}</div>
        <div class="trend-meta">
          <i class="bi bi-eye-fill"></i> ${n.views} &nbsp;·&nbsp; ${n.waktu}
        </div>
      </div>
      <div class="trend-thumb">
        <img src="${getImg(n.kategori, i)}" alt="" loading="lazy" />
      </div>
    </div>
  `).join('');

  $$('.trending-item').forEach(item => {
    item.addEventListener('click', () => showDetail(+item.dataset.id));
  });
}

/* ═════════════════════════════════════════════════
   NEWS GRID
═════════════════════════════════════════════════ */
function getFilteredNews() {
  return NEWS.filter(n => {
    const catMatch = currentCat === 'semua' || n.kategori === currentCat;
    const q = currentSearch.toLowerCase().trim();
    const searchMatch = !q || n.judul.toLowerCase().includes(q) || n.ringkasan.toLowerCase().includes(q) || n.kategori.toLowerCase().includes(q);
    return catMatch && searchMatch;
  });
}

function renderGrid() {
  const grid = $('#newsGrid');
  const noResult = $('#noResult');
  const countEl = $('#articleCount');
  const labelEl = $('#sectionLabel');
  const filtered = getFilteredNews();

  // Update label
  if (currentSearch) {
    labelEl.textContent = `Hasil Pencarian: "${currentSearch}"`;
  } else if (currentCat !== 'semua') {
    labelEl.textContent = `Kategori: ${currentCat}`;
  } else {
    labelEl.textContent = 'Berita Terbaru';
  }
  countEl.textContent = `${filtered.length} artikel`;

  if (!filtered.length) {
    grid.innerHTML = '';
    noResult.style.display = 'block';
    return;
  }
  noResult.style.display = 'none';

  grid.innerHTML = filtered.map((n, idx) => {
    const imgSrc = getImg(n.kategori, idx % 3);
    return `
    <div class="news-card" data-id="${n.id}" style="animation-delay:${idx * .06}s">
      <div class="card-img-wrap">
        <img src="${imgSrc}" alt="${n.judul}" loading="lazy" />
        <div class="card-img-overlay"></div>
        <div class="card-badge">${getCatBadge(n.kategori)}</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${n.judul}</h3>
        <p class="card-excerpt">${n.ringkasan}</p>
      </div>
      <div class="card-footer">
        <span><i class="bi bi-clock"></i> ${n.waktu}</span>
        <span class="card-read-btn">Baca <i class="bi bi-arrow-right"></i></span>
      </div>
    </div>`;
  }).join('');

  $$('.news-card').forEach(card => {
    card.addEventListener('click', () => showDetail(+card.dataset.id));
  });
}

/* ═════════════════════════════════════════════════
   DETAIL VIEW
═════════════════════════════════════════════════ */
function showDetail(id) {
  const article = NEWS.find(n => n.id === id);
  if (!article) return;

  // Switch views
  $('#homeView').style.display = 'none';
  $('#detailView').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });

  const container = $('#detailContainer');
  const related = NEWS.filter(n => n.kategori === article.kategori && n.id !== article.id).slice(0, 3);

  container.innerHTML = `
    <div class="detail-hero-img">
      <img src="${getImg(article.kategori, 0)}" alt="${article.judul}" />
    </div>
    <div class="detail-badge">${getCatBadge(article.kategori)}</div>
    <h1 class="detail-title">${article.judul}</h1>
    <div class="detail-meta">
      <span><i class="bi bi-person-circle"></i>${article.penulis}</span>
      <span><i class="bi bi-clock-fill"></i>${article.waktu}</span>
      <span><i class="bi bi-eye-fill"></i>${article.views} pembaca</span>
    </div>
    <div class="detail-body">
      ${article.isi.map(p => `<p>${p}</p>`).join('')}
    </div>
    <div class="detail-tags">
      ${article.tags.map(t => `<span class="tag-pill">#${t}</span>`).join('')}
    </div>
    ${related.length ? `
    <div class="related-section">
      <div class="section-divider" style="margin-top:0;">
        <span class="divider-label">Berita Terkait</span>
        <div class="divider-line"></div>
      </div>
      <div class="related-grid">
        ${related.map((rn, ri) => `
          <div class="news-card" data-id="${rn.id}" style="animation-delay:${ri * .08}s">
            <div class="card-img-wrap">
              <img src="${getImg(rn.kategori, ri + 1)}" alt="${rn.judul}" loading="lazy" />
              <div class="card-img-overlay"></div>
              <div class="card-badge">${getCatBadge(rn.kategori)}</div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${rn.judul}</h3>
            </div>
            <div class="card-footer">
              <span><i class="bi bi-clock"></i> ${rn.waktu}</span>
              <span class="card-read-btn">Baca <i class="bi bi-arrow-right"></i></span>
            </div>
          </div>`).join('')}
      </div>
    </div>` : ''}
  `;

  // Related clicks
  $$('.news-card', container).forEach(card => {
    card.addEventListener('click', () => showDetail(+card.dataset.id));
  });
}

function showHome() {
  $('#detailView').style.display = 'none';
  $('#homeView').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═════════════════════════════════════════════════
   CATEGORY FILTER
═════════════════════════════════════════════════ */
function initCategories() {
  $$('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      currentSearch = '';
      $('#searchInput').value = '';
      $('#searchClear').style.display = 'none';
      renderGrid();
      showHome();
    });
  });
}

/* ═════════════════════════════════════════════════
   SEARCH
═════════════════════════════════════════════════ */
function initSearch() {
  const input = $('#searchInput');
  const clearBtn = $('#searchClear');

  let debounce;
  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      currentSearch = input.value;
      clearBtn.style.display = currentSearch ? 'flex' : 'none';
      showHome();
      renderGrid();
    }, 220);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    currentSearch = '';
    clearBtn.style.display = 'none';
    renderGrid();
  });

  // Mobile search toggle
  const mobileBtn = $('#mobileSearchBtn');
  const searchWrap = $('#searchWrapper');
  mobileBtn.addEventListener('click', () => {
    searchWrap.classList.toggle('mobile-show');
    if (searchWrap.classList.contains('mobile-show')) input.focus();
  });
}

/* ═════════════════════════════════════════════════
   NAVBAR SCROLL SHADOW
═════════════════════════════════════════════════ */
function initNavScroll() {
  const nav = $('#mainNav');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(0,0,0,.12)'
      : 'none';
  }, { passive: true });
}

/* ═════════════════════════════════════════════════
   INIT
═════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  buildTicker();
  buildHero();
  buildTrending();
  renderGrid();
  initCategories();
  initSearch();
  initNavScroll();

  // Dark toggle
  $('#darkToggle').addEventListener('click', toggleDark);

  // Back button
  $('#backBtn').addEventListener('click', showHome);
});
