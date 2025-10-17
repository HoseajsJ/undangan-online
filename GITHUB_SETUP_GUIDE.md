# Panduan Membuat Repository GitHub dan Menghubungkannya dengan Proyek

Dokumen ini menjelaskan langkah-langkah untuk membuat repository di GitHub dan menghubungkan proyek Anda dengan repository tersebut.

## Langkah 1: Membuat Repository Baru di GitHub

1. Buka browser dan kunjungi https://github.com
2. Login ke akun GitHub Anda (hoseajsj)
3. Klik tombol `+` di pojok kanan atas, lalu pilih "New repository"
4. Isi form pembuatan repository:
   - Repository name: `undangan_online` (atau nama lain sesuai keinginan)
   - Description: (opsional) Undangan Online menggunakan React dan Vite
   - Visibility: Pilih Public (jika ingin bisa dilihat semua orang) atau Private
   - Jangan centang "Initialize this repository with a README" karena kita akan menghubungkan repository yang sudah ada
   - Jangan tambahkan .gitignore atau license sekarang karena sudah ada di proyek kita
5. Klik tombol "Create repository"

## Langkah 2: Inisialisasi Git di Proyek Lokal

Buka terminal dan jalankan perintah berikut di direktori proyek Anda:

```bash
cd /home/js/undangan_online

# Inisialisasi repository Git
git init

# Tambahkan semua file ke staging
git add .

# Buat commit awal
git commit -m "Initial commit: undangan online project"
```

## Langkah 3: Hubungkan Proyek Lokal dengan Repository GitHub

1. Di halaman repository GitHub Anda, salin URL repository (formatnya seperti: `https://github.com/hoseajsj/nama-repository.git`)
2. Di terminal, tambahkan remote origin:
```bash
git remote add origin https://github.com/hoseajsj/undangan_online.git
```
(Ganti URL dengan URL repository Anda yang sebenarnya)

3. Push kode ke GitHub:
```bash
git branch -M main
git push -u origin main
```

## Langkah 4: Verifikasi Repository

1. Buka kembali halaman repository GitHub Anda
2. Refresh halaman, maka Anda akan melihat file-file dari proyek Anda sudah terupload
3. Semua kode sumber, termasuk package.json, src/, dll. sekarang sudah ada di GitHub

## Konfigurasi Lanjutan (Opsional)

### Menambahkan README.md
Anda bisa menambahkan file README.md untuk menjelaskan proyek Anda:

```bash
# Buat file README.md
echo "# Undangan Online" >> README.md
git add README.md
git commit -m "Add README"
git push
```

### Menambahkan .gitignore
File .gitignore sudah ada di proyek Anda, ini bagus karena akan mencegah file-file sementara dan dependensi (seperti node_modules) ikut diupload ke GitHub.

### Branch Protection dan Settings
Di GitHub dashboard, Anda bisa mengatur:
- Branch protection rules
- Collaborators
- Issues dan project management
- Integrasi deployment (seperti Vercel)

## Integrasi dengan Vercel

Setelah repository dibuat di GitHub, Anda bisa menggunakannya untuk deploy ke Vercel seperti yang sudah dijelaskan di panduan sebelumnya:

1. Buka dashboard Vercel
2. Pilih "New Project"
3. Pilih repository GitHub Anda
4. Konfigurasi dan deploy