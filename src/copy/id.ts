// The page's words in Indonesian. This is the shape every language follows
// (Copy); the Mandarin examples themselves (hanzi, pinyin) live with their
// sections, since they're the same in every language.

export const id = {
  meta: {
    title: "iShuo · Belajar Mandarin dari obrolanmu",
    description: "Rekam obrolan Mandarin-mu, lihat kalimat yang bisa lebih tepat, lalu latih sampai lancar.",
  },
  language: { label: "Bahasa", name: "Bahasa Indonesia" },
  nav: {
    label: "Utama",
    sections: { how: "Cara kerja", features: "Fitur", faq: "FAQ", contact: "Kontak" },
    try: "Coba di TestFlight",
    tryShort: "Coba",
    download: "Download",
  },
  download: { testFlight: "Coba gratis di TestFlight", appStore: "Download di App Store" },
  hero: {
    /** The headline, a line each; from `accentFrom` on they're blue, the last underlined. */
    lines: ["Ngobrol", "Mandarin,", "tanpa takut", "salah."],
    accentFrom: 2,
    lead: "Rekam obrolanmu sehari-hari. iShuo menunjukkan kalimat yang bisa lebih tepat, lalu melatihnya bersamamu.",
    how: "Lihat cara kerjanya",
    recording: "Merekam obrolan",
    /** What 你呢？ on the sticker means. */
    sticker: "Kalau kamu?",
    alts: {
      live: "Ngobrol langsung: tiap kalimat muncul dengan pinyin dan artinya",
      learn: "Halaman Belajar: 22 kalimat dari obrolan menunggu dilatih",
      words: "Kosa kata untuk daftar di kampus, tiap kata di perangko",
    },
  },
  quote: {
    /** The words light up one by one; `join` goes between them. */
    join: " ",
    plain: ["“Tadi", "aku", "bilang", "apa,", "ya?", "Rasanya", "ada", "yang", "salah,"],
    accent: ["tapi", "tidak", "ada", "yang", "mengoreksi.”"],
  },
  story: {
    title: "Dari obrolan ke kalimat yang lancar.",
    steps: [
      { title: "Rekam obrolanmu", text: "Nyalakan Ngobrol langsung. Tiap kalimat muncul dengan pinyin dan artinya." },
      { title: "iShuo memeriksa", text: "Kalimat yang bisa lebih tepat ditandai, lengkap dengan alasannya." },
      { title: "Latih sampai lancar", text: "Ucapkan lagi kalimatnya. Tiap karakter dicek sampai pas." },
    ],
    screen: {
      live: "Ngobrol langsung",
      end: "Akhiri",
      pocket: "Pocket",
      them: "Mereka",
      you: "Kamu",
      results: "Hasil obrolan",
      fixTogether: "Yuk, perbaiki bareng!",
      practice: "Latihan lafal",
      skip: "Lewati",
      sayThis: "Ucapkan kalimat ini",
      allRight: "✓ Semua karakter pas",
      tapToSay: "Ketuk lalu ucapkan",
      nailed: "Pas!",
    },
    /** The meanings of the conversation's lines; empty to leave them out. */
    meanings: ["Kamu dari negara mana?", "Aku orang Indonesia.", "Sudah berapa lama di China?"],
    saidMeaning: "Aku di China dua bulan.",
    betterMeaning: "Aku sudah dua bulan di China.",
    why: "了 di akhir kalimat: sudah berlangsung sampai sekarang.",
  },
  features: {
    marquee: "NGOBROL",
    title: "Siap sebelum ngobrol, lanjut latihan sesudahnya.",
    cards: [
      { title: "Kosa kata per situasi", text: "Mau daftar kampus atau naik taksi? Pelajari katanya dulu.", alt: "Kosa Kata: folder per situasi, dari daftar di kampus sampai perpustakaan" },
      { title: "Latihan dengan AI", text: "Ngobrol kapan saja. Bingung jawab? Ada contoh jawabannya.", alt: "Latihan dengan AI di kafe, dengan contoh jawaban untuk diucapkan" },
      { title: "Progress yang jujur", text: "Lihat apa yang makin jarang perlu diperbaiki. Tanpa streak.", alt: "Progress: jumlah percakapan naik, yang bisa diperbaiki turun" },
    ],
    extras: ["Pocket kata di samping mic", "Bisa campur bahasa Indonesia", "Latih lafal per karakter", "Folder kosa kata per topik"],
  },
  /** The kinds of fix, as Belajar names them. */
  kinds: { choice: "Pemilihan kata", order: "Urutan letak kata", missingOrExtra: "Kata kurang/lebih" },
  demo: {
    title: "Coba sendiri.",
    lead: "Kalimat yang sering diucapkan pelajar. Ketuk salah satu untuk melihat yang lebih tepat.",
    listLabel: "Contoh kalimat",
    switchLabel: "Tampilkan kalimat",
    said: "Kamu bilang",
    better: "✓ Lebih tepat",
    flip: "Bolak-balik antara ucapanmu dan yang lebih tepat",
    hint: "Ketuk kalimatnya untuk melihat yang lebih tepat.",
    why: "Kenapa begitu?",
    /** For each example, in order: its meaning and why it changed. */
    examples: [
      { meaning: "Saya tidak menangkapnya.", why: "没 untuk hasil yang tidak tercapai. 不 untuk kebiasaan atau kemauan." },
      { meaning: "Saya makan di kantin.", why: "Tempat ditaruh sebelum kata kerja, bukan di akhir kalimat." },
      { meaning: "Dia bicara bahasa Mandarin dengan cepat.", why: "Untuk menilai cara melakukan sesuatu, pakai 得: 说得很快." },
    ],
  },
  faq: {
    title: "FAQ",
    more: "Belum terjawab?",
    ask: "Tanya kami",
    items: [
      { q: "Apakah iShuo gratis?", a: "Ya, gratis selama masa beta di TestFlight." },
      { q: "iPhone apa yang bisa memakai iShuo?", a: "iPhone dengan iOS 26 ke atas. Tidak perlu Apple Intelligence." },
      { q: "Untuk level berapa?", a: "Untuk yang sudah punya dasar, sekitar HSK 3 ke atas. Penjelasannya menyesuaikan level yang kamu pilih." },
      { q: "Apakah rekaman obrolanku disimpan?", a: "Tidak. Rekaman suara dihapus setelah obrolan dianalisis, dan teksnya hanya dikirim ke AI iShuo untuk diperiksa. Selalu minta izin dulu ke lawan bicaramu sebelum merekam." },
      { q: "Bagaimana cara ikut beta?", a: "Pasang TestFlight dari App Store, buka link undangan iShuo di iPhone, lalu ketuk Terima dan Instal." },
    ],
  },
  get: {
    /** The title runs straight into its blue end, so mind the space. */
    title: "Mulai ngobrol ",
    titleAccent: "hari ini.",
    beta: "Gratis selama beta. Pasang TestFlight, buka undangannya, dan mulai.",
    store: "Download iShuo, lalu rekam obrolan pertamamu.",
    scan: "atau pindai",
    qr: "QR code untuk membuka iShuo di iPhone",
  },
  footer: {
    title: "Ada pertanyaan?",
    lead: "Tulis saja. Semua masukan kami baca.",
    contacts: { email: "Email", instagram: "Instagram", testflight: "Dari iPhone" },
    feedback: "Send Beta Feedback di TestFlight",
    sectionsLabel: "Bagian halaman",
    /** The credit, either side of a 心 (spaces included). */
    made: ["Dibuat dengan ", " oleh tim Cerius"],
    policies: "Ketentuan & Privasi",
  },
  policies: {
    meta: {
      title: "Kebijakan · iShuo",
      description: "Ketentuan Layanan dan Kebijakan Privasi iShuo.",
    },
    title: "Kebijakan",
    lead: "Aturan pakai iShuo, dan apa saja yang tetap di iPhone-mu.",
    /** Shown when the policies aren't in this language (they're in English). */
    englishOnly: "Kebijakan ini tersedia dalam bahasa Inggris.",
    tabsLabel: "Pilih kebijakan",
    tabs: { terms: "Ketentuan Layanan", privacy: "Kebijakan Privasi" },
    /** The list of sections beside a policy. */
    contents: "Isi halaman",
    jump: "Lompat ke bagian",
  },
}

export type Copy = typeof id
