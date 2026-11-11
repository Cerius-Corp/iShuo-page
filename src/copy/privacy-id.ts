// The Privacy Policy in Indonesian (the English one, in policies.ts, is
// the original; keep the two in step). Addresses the reader as "Anda".

import type { Policy } from "./policies"

export const privacyId: Policy = {
  title: "Kebijakan Privasi",
  updated: "Terakhir diperbarui 11 November 2026",
  intro: [
    "Di iShuo, kami memahami bahwa setiap percakapan bersifat pribadi. Kebijakan Privasi ini menjelaskan data apa saja yang tetap tersimpan di iPhone Anda, data apa yang kami terima, serta bagaimana kami menggunakannya. Singkatnya: rekaman suara Anda tetap berada di iPhone dan dihapus setelah dianalisis, dan kami tidak pernah meminta alamat email, nomor telepon, maupun kata sandi Anda.",
  ],
  sections: [
    {
      title: "Pendahuluan",
      parts: [
        {
          blocks: [
            "iShuo dikembangkan oleh Cerius (“kami”). Kebijakan Privasi ini berlaku untuk aplikasi iShuo dan server iShuo.",
            "iShuo tidak menggunakan akun. Kami tidak pernah meminta alamat email, nomor telepon, maupun kata sandi Anda. Jika Anda memasukkan nama, nama tersebut tetap tersimpan di iPhone Anda.",
          ],
        },
      ],
    },
    {
      title: "Informasi yang Tetap Lokal",
      parts: [
        {
          heading: "Rekaman Suara",
          blocks: [
            "Audio percakapan Anda diproses di iPhone dan dihapus setelah dianalisis. Audio tersebut tidak pernah diunggah ke server iShuo. Jika iPhone Anda tidak dapat mengenali ucapan secara mandiri, fitur pengenalan ucapan Apple mungkin memproses audio di server Apple (lihat Fitur Apple).",
          ],
        },
        {
          heading: "Percakapan dan Pembelajaran",
          blocks: [
            "Transkrip, terjemahan, masukan, dan riwayat percakapan Anda hanya disimpan di iPhone. Kata-kata yang Anda simpan juga tetap berada di iPhone, kecuali jika Anda mengizinkannya (lihat Bagian 03).",
          ],
        },
        {
          heading: "Profil Suara",
          blocks: [
            "Jika Anda mengatur profil suara, iShuo hanya menyimpan angka yang menggambarkan suara Anda, yaitu tinggi nada (pitch) dan sidik suara (voice fingerprint). Angka ini digunakan untuk membedakan ucapan Anda dari ucapan lawan bicara. Data tersebut tidak pernah meninggalkan iPhone Anda.",
          ],
        },
        {
          heading: "Personalisasi Pembelajaran",
          blocks: [
            "Nama Anda (jika diberikan) tetap tersimpan di iPhone. Alasan Anda belajar dan hal yang sulit bagi Anda juga tetap tersimpan di iPhone, kecuali saat sesi latihan menggunakannya untuk menyesuaikan percakapan dengan Anda (lihat Bagian 03). Informasi tersebut hanya disertakan dalam Data Penggunaan jika Anda mengizinkannya.",
          ],
        },
        {
          heading: "Fitur Apple",
          blocks: [
            "Pengenalan ucapan, terjemahan, suara, dan Apple Intelligence disediakan oleh Apple, dan diproses langsung di iPhone Anda jika memungkinkan. Kebijakan Privasi Apple berlaku untuk layanan Apple.",
          ],
        },
        {
          heading: "Unduhan Qwen3.5-4B",
          blocks: [
            "Jika Anda mengunduh Qwen3.5-4B, iPhone Anda mengunduhnya langsung dari Hugging Face. Seperti situs web lainnya, Hugging Face dapat melihat alamat IP Anda. Kebijakan Privasi Hugging Face berlaku untuk unduhan tersebut.",
          ],
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
              text: "iShuo menggunakan AI di server iShuo untuk membuat masukan pembelajaran dan sesi latihan Anda. Anda juga dapat menggunakan AI di iPhone Anda, dengan mengubah pengaturan kapan saja melalui Pengaturan → Pengaturan AI → Model AI. Jika server tidak dapat dihubungi, AI di iPhone Anda yang akan digunakan.",
            },
            {
              label: "Yang dikirim",
              text: "teks yang dibutuhkan oleh fitur, seperti percakapan Anda, pesan dalam sesi latihan, pertanyaan Anda, dan situasi yang Anda gambarkan, beserta beberapa detail setiap baris, seperti siapa yang mengucapkannya. Sesi latihan juga menyertakan alasan Anda belajar dan hal yang sulit bagi Anda.",
            },
            { label: "Yang tidak pernah dikirim", text: "audio, profil suara Anda, atau nama Anda." },
          ],
        },
        {
          heading: "Data Penggunaan",
          blocks: [
            "Kami mengumpulkan informasi tentang cara iShuo digunakan, tanpa menyertakan nama Anda (“Data Penggunaan”). Contohnya:",
            { list: ["halaman yang dibuka;", "durasi rekaman;", "jumlah balasan dalam sesi latihan."] },
            "Data Penggunaan disertai ID aplikasi acak, versi aplikasi, dan informasi dasar perangkat (model iPhone dan versi iOS).",
            { label: "Data Penggunaan tidak pernah mencakup", text: "" },
            { list: ["nama Anda;", "rekaman suara Anda;", "transkrip Anda;", "apa pun yang Anda ucapkan atau ketik."] },
          ],
        },
        {
          heading: "Preferensi Pembelajaran (Dengan Izin Anda)",
          blocks: [
            "Hanya jika Anda mengizinkannya, Data Penggunaan juga mencakup:",
            { list: ["alasan Anda belajar;", "kesulitan Anda dalam berbicara;", "kata-kata yang Anda buka dan simpan."] },
          ],
        },
      ],
    },
    {
      title: "Bagaimana Kami Menggunakan Data",
      parts: [
        {
          heading: "Tujuan Penggunaan Data",
          blocks: [
            "iShuo menggunakan data di atas untuk:",
            {
              list: [
                "memberikan masukan dan sesi latihan yang dihasilkan oleh AI;",
                "memahami fitur mana yang digunakan, dan di bagian mana pengguna mengalami kesulitan;",
                "meningkatkan iShuo;",
                "menjawab pertanyaan Anda.",
              ],
            },
          ],
        },
        {
          heading: "Dasar Hukum Pemrosesan",
          blocks: [
            "Kami memproses setiap jenis data berdasarkan alasan berikut:",
            {
              list: [
                { label: "Pemrosesan AI", text: "untuk menyediakan fitur yang Anda gunakan." },
                { label: "Data Penggunaan", text: "kepentingan sah kami untuk meningkatkan iShuo." },
                {
                  label: "Preferensi Pembelajaran",
                  text: "persetujuan Anda, untuk meningkatkan konten iShuo. Anda dapat menarik persetujuan ini kapan saja.",
                },
                { label: "Email yang Anda kirimkan kepada kami", text: "untuk menjawab pertanyaan dan permintaan Anda." },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Izin Akses dan Pelacakan",
      parts: [
        {
          heading: "Izin Akses",
          blocks: [
            "iShuo meminta setiap izin saat pertama kali dibutuhkan. Anda dapat mengubahnya kapan saja melalui Pengaturan iOS.",
            {
              list: [
                { label: "Mikrofon", text: "untuk merekam percakapan Anda." },
                { label: "Pengenalan Ucapan", text: "untuk mengubah ucapan menjadi teks." },
              ],
            },
          ],
        },
        {
          heading: "Tanpa Pelacakan",
          blocks: [
            "iShuo tidak menggunakan cookies maupun pengenal iklan (advertising identifier). iShuo tidak melacak Anda di aplikasi atau situs web lain.",
          ],
        },
      ],
    },
    {
      title: "Pembagian Data",
      parts: [
        {
          heading: "Kami Tidak Menjual Data Anda",
          blocks: ["Kami tidak menjual, menyewakan, maupun memperdagangkan data Anda, dan kami tidak menampilkan iklan."],
        },
        {
          heading: "Penyedia Layanan",
          blocks: [
            "Kami menggunakan Mixpanel, Inc. (Amerika Serikat) untuk menganalisis Data Penggunaan, dan penyedia hosting untuk menjalankan server iShuo. Mereka hanya memproses data atas nama kami.",
          ],
        },
        {
          heading: "Transfer Data ke Luar Indonesia",
          blocks: ["Data Penggunaan diproses di Amerika Serikat. Kami mengandalkan mekanisme perlindungan Mixpanel untuk melindunginya."],
        },
        { heading: "Permintaan Berdasarkan Hukum", blocks: ["Kami dapat mengungkapkan data apabila diwajibkan oleh hukum."] },
      ],
    },
    {
      title: "Penyimpanan dan Keamanan Data",
      parts: [
        {
          heading: "Jangka Waktu Penyimpanan",
          blocks: [
            {
              list: [
                { label: "Di iPhone Anda", text: "sampai Anda menghapusnya atau menghapus aplikasi." },
                { label: "Di server kami", text: "tidak ada data yang disimpan." },
                { label: "Data Penggunaan", text: "disimpan paling lama 2 tahun, kemudian dihapus." },
              ],
            },
          ],
        },
        {
          heading: "Keamanan",
          blocks: [
            "Data yang dikirim dari iShuo menggunakan koneksi terenkripsi (HTTPS), dan kami mengumpulkan data seminimal mungkin. Tidak ada metode pengiriman data yang 100% aman, tetapi kami berupaya keras melindungi data Anda.",
          ],
        },
      ],
    },
    {
      title: "Hak Pengguna",
      parts: [
        {
          heading: "Pilihan Anda",
          blocks: [
            {
              list: [
                "Nonaktifkan Preferensi Pembelajaran kapan saja melalui Pengaturan → Tentang iShuo → Privasi. Untuk menghentikan Data Penggunaan, hapus aplikasi.",
                "Hapus percakapan, atau hapus aplikasi, untuk menghapus data Anda dari iPhone.",
              ],
            },
          ],
        },
        {
          heading: "Hak Anda",
          blocks: [
            "Tergantung tempat tinggal Anda, termasuk berdasarkan Undang-Undang Pelindungan Data Pribadi (UU PDP) di Indonesia, Anda mungkin memiliki hak untuk:",
            { list: ["mengakses data Anda;", "memperbaikinya;", "menghapusnya;", "membatasi penggunaannya;", "menarik persetujuan."] },
            "Untuk mengajukan permintaan, kirimkan email kepada kami. Data Penggunaan tidak dikaitkan dengan nama Anda, sehingga kami mungkin tidak dapat mengetahui Data Penggunaan mana yang milik Anda. Kami akan memberi tahu Anda jika hal tersebut terjadi.",
          ],
        },
        {
          heading: "Anak di Bawah Umur",
          blocks: ["iShuo tidak ditujukan untuk anak-anak berusia di bawah 13 tahun. Pengguna berusia di bawah 18 tahun memerlukan persetujuan orang tua atau wali."],
        },
      ],
    },
    {
      title: "Perubahan dan Kontak",
      parts: [
        {
          blocks: [
            "Kami akan memuat perubahan pada kebijakan ini di halaman ini dengan tanggal “Terakhir diperbarui” yang baru. Untuk pertanyaan atau permintaan, hubungi kami di cerius.corp@gmail.com.",
          ],
        },
      ],
    },
  ],
}
