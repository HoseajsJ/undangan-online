# Instruksi Push ke Repository GitHub

Repository GitHub Anda telah diatur ke: https://github.com/HoseajsJ/undangan-online.git

## Langkah-langkah Push ke GitHub

1. Pastikan Anda sudah membuat repository di GitHub dengan nama `undangan-online` di akun `HoseajsJ`

2. Untuk melakukan push ke repository tersebut, jalankan perintah berikut di terminal:

```bash
cd /home/js/undangan_online
git push -u origin main
```

3. Anda akan diminta memasukkan username dan password/token:
   - Username: `HoseajsJ`
   - Password: Gunakan Personal Access Token (bukan password biasa)

## Setting Personal Access Token (jika belum):

1. Di GitHub, buka: Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Klik "Generate new token"
3. Beri nama token (misal: "undangan-deploy")
4. Pilih scope: `repo` (untuk push/pull repository)
5. Salin token yang dihasilkan dan gunakan sebagai password saat push

## Setelah Push Berhasil:

Setelah kode berhasil diupload ke GitHub, Anda bisa melanjutkan ke deploy ke Vercel dengan mengikuti panduan di DEPLOYMENT_COMPLETE_GUIDE.md

## Verifikasi Repository:

Anda bisa memeriksa apakah remote sudah benar dengan perintah:

```bash
git remote -v
```

Harus menampilkan:
- origin  https://github.com/HoseajsJ/undangan-online.git (fetch)
- origin  https://github.com/HoseajsJ/undangan-online.git (push)