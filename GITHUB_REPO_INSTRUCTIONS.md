# Langkah-langkah Membuat Repository di GitHub

Sebelum dapat melakukan push ke GitHub, Anda perlu membuat repository `undangan_online` di akun GitHub Anda (hoseajsj). Berikut langkah-langkahnya:

## 1. Buka GitHub
- Kunjungi https://github.com
- Login ke akun Anda (hoseajsj)

## 2. Buat Repository Baru
- Klik tombol `+` di pojok kanan atas
- Pilih "New repository"

## 3. Isi Form Repository
- Repository name: `undangan_online`
- Description: (opsional) Undangan Online menggunakan React dan Vite
- Visibility: Pilih Public atau Private sesuai keinginan
- Penting: Jangan centang "Initialize this repository with a README"
- Jangan tambahkan .gitignore atau license karena sudah ada di proyek Anda
- Klik tombol "Create repository"

## 4. Setelah Repository Dibuat
Setelah repository dibuat, Anda bisa kembali ke terminal dan jalankan kembali perintah:

```bash
cd /home/js/undangan_online
git push -u origin main
```

Perintah ini akan mengupload semua kode proyek Anda ke GitHub repository yang baru saja dibuat.