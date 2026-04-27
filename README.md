# 📰 KabarKini — Portal Berita Indonesia

Website portal berita sederhana berbasis HTML, CSS, dan JavaScript murni dengan tampilan modern dan responsif.

---

## 👥 Anggota Tim

| Nama | NRP |
|------|------|
| Mohammad Akmal Fayyazi | 5054241045 |
| Nazhif Berlian Nasrullah | 5054241035 |

---


## 📁 Struktur File

```
kabarkini/
├── index.html      # Struktur halaman utama
├── style.css       # Styling dan tema dark/light
├── script.js       # Data berita dan logika JavaScript
└── README.md       # Dokumentasi project
```

---

## 📋 Deskripsi Project

KabarKini adalah website portal berita statis yang menampilkan berita dari berbagai kategori dengan tampilan yang bersih dan responsif. Project ini dibuat sebagai tugas mata kuliah dengan menggunakan teknologi frontend saja tanpa backend maupun database.

---

## ✨ Fitur

### 1. Landing Page
- **Headline Utama** — Menampilkan satu berita utama berukuran besar di bagian atas dengan gambar latar, judul, ringkasan, nama penulis, waktu, dan jumlah pembaca
- **Trending Hari Ini** — Menampilkan daftar berita populer di sidebar dengan nomor urut, thumbnail, dan jumlah views

### 2. Kategori Berita
- Terdapat 3 kategori utama: **Politik**, **Teknologi**, dan **Olahraga**
- Tombol kategori di navbar untuk filter berita
- Ketika kategori diklik, hanya berita pada kategori tersebut yang ditampilkan
- Filter bekerja secara real-time menggunakan JavaScript tanpa reload halaman

### 3. Detail Berita
- Klik berita manapun untuk membuka halaman detail
- Menampilkan gambar besar, judul lengkap, nama penulis, waktu tayang, dan jumlah pembaca
- Isi berita ditampilkan dalam beberapa paragraf
- Terdapat tag berita di bagian bawah artikel
- Menampilkan **Berita Terkait** dari kategori yang sama
- Tombol **Kembali** untuk kembali ke halaman utama

### 4. Search Berita
- Input pencarian di navbar
- Filter berita secara real-time saat mengetik
- Mencari berdasarkan judul dan ringkasan berita
- Label hasil pencarian otomatis berubah sesuai kata kunci

### 5. Dark Mode
- Toggle dark/light mode di pojok kanan navbar
- Ikon berubah antara matahari dan bulan
- Preferensi dark mode disimpan di **localStorage** sehingga tetap tersimpan saat halaman di-refresh

### 6. Tampilan & UI
- Layout responsif menggunakan **Bootstrap 5 Grid**
- Hover effect pada card berita
- Badge warna per kategori (biru untuk Politik, hijau untuk Teknologi, kuning untuk Olahraga)
- Ikon dari **Bootstrap Icons**
- Footer dengan ikon sosial media (Instagram, X, LinkedIn, Facebook, YouTube, TikTok)
- Halaman detail artikel tampil di tengah layar dengan lebar terbatas agar nyaman dibaca