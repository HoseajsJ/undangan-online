# Panduan Deploy ke Vercel

Dokumen ini menjelaskan langkah-langkah untuk mendeploy aplikasi undangan online React Anda ke platform Vercel.

## Prasyarat

1. Pastikan Anda memiliki akun Vercel (gratis): https://vercel.com/signup
2. Pastikan aplikasi Anda berjalan dengan baik secara lokal dengan perintah:
```bash
npm install
npm run dev
```

## Metode 1: Deploy Langsung dari GitHub (Direkomendasikan)

### 1. Koneksikan Repository ke Vercel
1. Login ke akun Vercel Anda
2. Klik tombol "New Project"
3. Pilih "Connect Git Repository"
4. Pilih repository GitHub Anda (atau buat baru jika belum ada)
5. Ikuti instruksi untuk mengizinkan akses

### 2. Konfigurasi Build
1. Di halaman import project, pastikan konfigurasi berikut:
   - **Framework Preset**: Pilih `Vite`
   - **Root Directory**: `/` (atau sesuaikan jika proyek Anda dalam subfolder)
   - **Build Command**: `npm run build` (sudah otomatis terdeteksi)
   - **Output Directory**: `dist` (sudah otomatis terdeteksi dari file `vite.config.js`)
   - **Development Command**: `npm run dev`

2. Klik tombol "Deploy" dan tunggu proses selesai

## Metode 2: Deploy Menggunakan CLI Vercel

### 1. Install CLI Vercel
```bash
npm install -g vercel
```

### 2. Login ke Akun Vercel
```bash
vercel login
```

### 3. Inisialisasi Proyek di Vercel
```bash
cd /path/to/undangan_online
vercel
```

### 4. Ikuti Prompt CLI
- Pilih akun Anda
- Pilih "Create a new project" atau pilih proyek yang sudah ada
- Biarkan CLI mendeteksi framework (akan terdeteksi sebagai Vite)
- Konfirmasi konfigurasi:
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
  - **Development Command**: `npm run dev`
- Jawab "Y" untuk deploy secara langsung

## Konfigurasi Tambahan (Opsional)

### Vercel.json (untuk konfigurasi lanjutan)
Buat file `vercel.json` di root proyek jika Anda ingin konfigurasi tambahan:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

File ini akan memastikan semua route diarahkan ke `index.html`, penting untuk aplikasi React Router.

## Verifikasi Deploy

1. Setelah deployment selesai, Anda akan mendapatkan URL unik untuk proyek Anda
2. Coba akses URL tersebut untuk memastikan aplikasi berjalan dengan baik
3. Uji semua fitur penting termasuk:
   - Pembukaan undangan
   - Audio player
   - Animasi dan efek visual
   - Responsif di berbagai ukuran layar

## Update Deployment

Jika Anda ingin mengupdate deployment:
1. **Jika menggunakan GitHub integration**: Setiap push ke branch `main` akan otomatis memicu deployment baru
2. **Jika menggunakan CLI**: Jalankan `vercel` lagi untuk membuat deployment baru

## Troubleshooting

### Jika Deployment Gagal
1. Periksa kembali konfigurasi build
2. Pastikan tidak ada error saat menjalankan `npm run build` secara lokal
3. Pastikan semua dependensi terdaftar dengan benar di `package.json`

### Jika Halaman Tidak Tampil dengan Benar
1. Pastikan route fallback ke `index.html` berfungsi (akan otomatis dengan Vite)
2. Cek apakah semua aset (CSS, gambar) dimuat dengan baik

### Jika Menggunakan Environment Variables
Tambahkan environment variables di dashboard Vercel di bagian Settings > Environment Variables

## Penyesuaian untuk Proyek Ini

Demi kebutuhan spesifik proyek ini (undangan online):
1. File audio mungkin lebih baik disimpan di CDN eksternal untuk kinerja lebih baik
2. Gambar-gambar galeri sebaiknya dioptimalkan ukurannya
3. Pastikan URL undangan (menggunakan parameter `?to=`) berfungsi dengan baik di lingkungan produksi