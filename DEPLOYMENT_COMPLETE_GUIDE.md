# Panduan Lengkap: GitHub dan Deploy Vercel untuk Proyek Undangan Online

Dokumen ini menyediakan panduan lengkap untuk:
1. Membuat repository GitHub
2. Menghubungkan proyek lokal ke repository GitHub
3. Mendeploy aplikasi ke Vercel

## Bagian 1: Persiapan Lokal

Proyek Anda sudah siap untuk Git dan Vercel karena:
- Sudah memiliki file `package.json` dengan konfigurasi Vite
- Sudah memiliki file `.gitignore` yang baik
- Menggunakan React dan Vite (teknologi yang didukung Vercel)

## Bagian 2: Membuat Repository Baru di GitHub

1. Buka browser dan kunjungi https://github.com
2. Login ke akun GitHub Anda (hoseajsj)
3. Klik tombol `+` di pojok kanan atas, lalu pilih "New repository"
4. Isi form pembuatan repository:
   - Repository name: `undangan_online` (atau nama lain sesuai keinginan)
   - Description: Undangan Online menggunakan React dan Vite
   - Visibility: Pilih Public (jika ingin bisa dilihat semua orang) atau Private
   - Jangan centang "Initialize this repository with a README" karena kita akan menghubungkan repository yang sudah ada
   - Jangan tambahkan .gitignore atau license sekarang karena sudah ada di proyek kita
5. Klik tombol "Create repository"

## Bagian 3: Inisialisasi Git dan Upload ke GitHub

Buka terminal dan jalankan perintah berikut di direktori proyek Anda:

```bash
cd /home/js/undangan_online

# Inisialisasi repository Git
git init

# Tambahkan semua file ke staging
git add .

# Buat commit awal
git commit -m "Initial commit: undangan online project dengan React dan Vite"
```

Hubungkan ke repository GitHub Anda:

```bash
# Ganti URL dengan URL repository GitHub Anda yang sebenarnya
git remote add origin https://github.com/hoseajsj/undangan_online.git

# Ganti nama branch default ke main dan push
git branch -M main
git push -u origin main
```

## Bagian 4: Deploy ke Vercel

### Metode 1: Deploy Langsung dari GitHub (Direkomendasikan)

1. Login ke akun Vercel Anda di https://vercel.com
2. Klik tombol "New Project"
3. Pilih "Import Git Repository"
4. Pilih repository GitHub Anda (hoseajsj/undangan_online)
5. Vercel akan otomatis mendeteksi:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Klik "Deploy" dan tunggu proses selesai

### Metode 2: Deploy Menggunakan Vercel CLI

Install dan gunakan CLI:

```bash
# Install CLI secara global
npm install -g vercel

# Login ke akun Vercel
vercel login

# Deploy dari direktori proyek
cd /home/js/undangan_online
vercel
```

Ikuti prompt untuk memilih proyek dan konfigurasi.

## Bagian 5: Konfigurasi dan Fitur Spesifik untuk Proyek Ini

### URL Params untuk Nama Tamu
Proyek Anda mendukung parameter URL untuk nama tamu (misalnya `?to=John`). Pastikan ini tetap berfungsi setelah deployment dengan menambahkan file `vercel.json` di root proyek:

```json
{
  "rewrites": [
    {
      "source": "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(css|js|png|jpg|jpeg|gif|svg|ico|webp)).*)",
      "destination": "/index.html"
    }
  ]
}
```

### File Audio dan Gambar
Proyek Anda menggunakan file audio eksternal. Untuk kinerja lebih baik, pertimbangkan untuk:
- Menyimpan file audio di CDN sendiri
- Mengoptimalkan ukuran file gambar galeri

### Responsif dan Animasi
Pastikan semua animasi dan tampilan responsif bekerja dengan baik setelah deployment ke Vercel.

## Bagian 6: Integrasi Lanjutan

### CI/CD dan Branch Deployments
- Setiap push ke branch main akan otomatis memicu deployment baru ke production
- Anda bisa mengatur preview deployment untuk pull request

### Environment Variables
Jika Anda perlu menambahkan environment variables (misalnya API keys), tambahkan di dashboard Vercel:
1. Buka dashboard Vercel
2. Pilih proyek Anda
3. Masuk ke Settings > Environment Variables

## Bagian 7: Troubleshooting Umum

### Jika Deployment Gagal
- Pastikan `npm run build` berhasil di lokal
- Periksa konfigurasi dependencies di `package.json`
- Pastikan tidak ada module yang hilang

### Jika Halaman Tidak Tampil dengan Benar
- Cek apakah semua aset (CSS, JS) dimuat
- Pastikan URL routing bekerja dengan baik
- Periksa browser console untuk error

### Jika Audio Tidak Berfungsi
- Ini biasa terjadi karena autoplay policy di production
- Pastikan fungsi toggle audio berjalan dengan baik

## Kesimpulan

Setelah mengikuti langkah-langkah di atas:
1. Kode Anda akan tersimpan di GitHub repository (hoseajsj/undangan_online)
2. Aplikasi Anda akan dideploy di Vercel dan dapat diakses secara online
3. Setiap update ke repository akan otomatis dideploy ke Vercel

Anda sekarang siap untuk membagikan undangan online Anda kepada teman dan keluarga!