// The Privacy Policy in Indonesian (the English one, in policies.ts, is
// the original; keep the two in step).

import type { Policy } from "./policies"

export const privacyId: Policy = {
  title: "Kebijakan Privasi",
  updated: "Terakhir diperbarui 10 November 2026",
  intro: [
    "Di iShuo, kami tahu obrolanmu bersifat pribadi. Kebijakan Privasi ini menjelaskan apa yang tetap di iPhone-mu, apa yang kami terima, dan bagaimana kami menggunakannya. Singkatnya: rekamanmu tetap di iPhone-mu dan dihapus setelah dianalisis, dan kami tidak pernah meminta email, nomor telepon, atau kata sandimu.",
  ],
  sections: [
    {
      title: "Pendahuluan",
      parts: [
        {
          blocks: [
            "iShuo dibuat oleh Cerius (“kami”). Kebijakan ini berlaku untuk aplikasi iShuo dan server iShuo. iShuo tidak memakai akun. Kami tidak pernah meminta email, nomor telepon, atau kata sandimu. Jika kamu memberikan namamu, nama itu tetap di iPhone-mu.",
          ],
        },
      ],
    },
    {
      title: "Informasi yang Tetap Lokal",
      parts: [
        {
          heading: "Rekaman",
          blocks: ["Audio obrolanmu diproses di iPhone-mu dan dihapus setelah dianalisis. Audio itu tidak pernah diunggah ke server iShuo. Jika iPhone-mu tidak bisa mengenali ucapan sendiri, pengenalan ucapan Apple mungkin memproses audio itu di server Apple (lihat Fitur Apple)."],
        },
        {
          heading: "Obrolan dan Belajar",
          blocks: ["Transkrip, terjemahan, masukan, dan riwayat obrolanmu hanya disimpan di iPhone-mu. Kata yang kamu simpan juga tetap di iPhone-mu, kecuali kamu mengizinkan (lihat bagian 03)."],
        },
        {
          heading: "Profil Suara",
          blocks: [
            "Jika kamu mengatur suaramu, iShuo hanya menyimpan angka yang menggambarkannya (tinggi nada dan sidik suara). Angka ini dipakai untuk membedakan kalimatmu dari kalimat lawan bicaramu, dan tidak pernah keluar dari iPhone-mu.",
          ],
        },
        {
          heading: "Personalisasi Belajar",
          blocks: ["Namamu (jika kamu memberikannya) tetap di iPhone-mu. Alasanmu belajar dan hal yang sulit bagimu juga tetap di iPhone-mu, kecuali latihan obrolan memakainya untuk menyesuaikan obrolan denganmu (lihat bagian 03). Semua itu hanya disertakan dalam Data Penggunaan jika kamu mengizinkan."],
        },
        {
          heading: "Fitur Apple",
          blocks: ["Pengenalan ucapan, terjemahan, suara, dan Apple Intelligence disediakan oleh Apple, di iPhone-mu jika memungkinkan. Kebijakan privasi Apple berlaku untuk layanan Apple."],
        },
      ],
    },
    {
      title: "Informasi yang Kami Terima",
      parts: [
        {
          heading: "Pemrosesan AI",
          blocks: [
            {
              label: "Dikirim ke server secara bawaan",
              text: "iShuo memakai AI di server iShuo untuk membuat masukan belajar dan latihanmu. Kamu juga bisa memakai AI di iPhone-mu, dengan mengubahnya kapan saja di Pengaturan → Pengaturan AI → Model AI. Jika server tidak bisa dihubungi, AI di iPhone-mu yang dipakai.",
            },
            {
              label: "Yang dikirim",
              text: "teks yang dibutuhkan fitur, seperti obrolanmu, pesan latihan obrolanmu, pertanyaanmu, dan situasi yang kamu gambarkan, beserta beberapa detail tentang setiap baris, seperti siapa yang mengucapkannya. Latihan obrolan juga menyertakan alasanmu belajar dan hal yang sulit bagimu. Tidak pernah audio, profil suaramu, atau namamu.",
            },
          ],
        },
        {
          heading: "Data Penggunaan",
          blocks: [
            "Kami mengumpulkan informasi tentang cara iShuo dipakai, tanpa namamu. Misalnya: halaman mana yang dibuka, berapa lama sebuah rekaman, atau berapa banyak balasan dalam latihan obrolan (“Data Penggunaan”). Data Penggunaan disertai ID aplikasi acak, versi aplikasi, dan informasi dasar perangkat (model iPhone dan versi iOS).",
            { label: "Data ini tidak pernah mencakup", text: "" },
            { list: ["namamu;", "rekamanmu;", "transkripmu;", "apa pun yang kamu ucapkan atau ketik."] },
          ],
        },
        {
          heading: "Pilihan Belajar (dengan izinmu)",
          blocks: [
            "Hanya jika kamu mengizinkan, Data Penggunaan juga mencakup:",
            { list: ["alasanmu belajar;", "kesulitanmu saat berbicara;", "kata yang kamu buka dan simpan."] },
          ],
        },
      ],
    },
    {
      title: "Cara Kami Menggunakan Data",
      parts: [
        {
          blocks: [
            "iShuo memakai data di atas untuk:",
            {
              list: [
                "memberimu masukan buatan AI dan latihan;",
                "memahami fitur mana yang dipakai, dan di bagian mana pengguna kesulitan;",
                "meningkatkan iShuo;",
                "membalas pertanyaanmu.",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Izin dan Pelacakan",
      parts: [
        {
          heading: "Izin",
          blocks: [
            "iShuo meminta setiap izin saat pertama kali dibutuhkan. Kamu bisa mengubahnya kapan saja di Pengaturan iOS.",
            {
              list: [
                { label: "Mikrofon", text: "untuk merekam." },
                { label: "Pengenalan ucapan", text: "untuk mengubah ucapan menjadi teks." },
              ],
            },
          ],
        },
        {
          heading: "Tanpa Pelacakan",
          blocks: ["iShuo tidak memakai cookie maupun pengenal iklan. iShuo tidak melacakmu di aplikasi atau situs web lain."],
        },
      ],
    },
    {
      title: "Berbagi Data",
      parts: [
        {
          heading: "Kami Tidak Menjual Datamu",
          blocks: ["Kami tidak menjual, menyewakan, atau memperdagangkan datamu, dan kami tidak menampilkan iklan."],
        },
        {
          heading: "Penyedia Layanan",
          blocks: [
            "Kami memakai Mixpanel, Inc. (Amerika Serikat) untuk menganalisis Data Penggunaan, dan penyedia hosting untuk menjalankan server iShuo. Mereka memproses data hanya atas nama kami.",
          ],
        },
        { heading: "Permintaan Hukum", blocks: ["Kami dapat mengungkapkan data jika diwajibkan oleh hukum."] },
      ],
    },
    {
      title: "Penyimpanan dan Keamanan Data",
      parts: [
        {
          heading: "Berapa Lama Kami Menyimpan Data",
          blocks: [
            {
              list: [
                { label: "Di iPhone-mu", text: "sampai kamu menghapusnya atau menghapus aplikasinya." },
                { label: "Di server kami", text: "tidak ada yang disimpan." },
                { label: "Data Penggunaan", text: "disimpan hanya selama kami membutuhkannya untuk meningkatkan iShuo. Kami meninjaunya setidaknya setahun sekali." },
              ],
            },
          ],
        },
        {
          heading: "Keamanan",
          blocks: [
            "Data yang dikirim dari iShuo memakai koneksi terenkripsi (HTTPS), dan kami mengumpulkan data sesedikit mungkin. Tidak ada metode pengiriman yang 100% aman, tetapi kami berusaha keras melindungi datamu.",
          ],
        },
      ],
    },
    {
      title: "Hak Pengguna",
      parts: [
        {
          heading: "Pilihanmu",
          blocks: [
            {
              list: [
                "Matikan pilihan belajar kapan saja di Pengaturan → Tentang iShuo → Privasi. Untuk menghentikan Data Penggunaan, hapus aplikasinya.",
                "Hapus obrolan, atau aplikasinya, untuk menghapus datamu dari iPhone-mu.",
              ],
            },
          ],
        },
        {
          heading: "Hakmu",
          blocks: [
            "Tergantung tempat tinggalmu, termasuk berdasarkan Undang-Undang Pelindungan Data Pribadi (UU PDP) Indonesia, kamu mungkin berhak untuk:",
            { list: ["mengakses datamu;", "memperbaikinya;", "menghapusnya;", "membatasi penggunaannya;", "menarik persetujuan."] },
            "Untuk mengajukan permintaan, kirim email kepada kami. Data Penggunaan tidak terhubung dengan namamu, jadi kami mungkin tidak bisa mengetahui Data Penggunaan mana yang milikmu. Kami akan memberitahumu jika tidak bisa.",
          ],
        },
        {
          heading: "Anak-Anak",
          blocks: ["iShuo tidak ditujukan untuk anak di bawah 13 tahun. Pengguna di bawah 18 tahun memerlukan persetujuan orang tua atau wali."],
        },
      ],
    },
    {
      title: "Perubahan dan Kontak",
      parts: [
        {
          blocks: [
            "Kami akan memuat perubahan pada kebijakan ini di sini dengan tanggal “Terakhir diperbarui” yang baru. Untuk pertanyaan atau permintaan, hubungi kami di cerius.corp@gmail.com.",
          ],
        },
      ],
    },
  ],
}
