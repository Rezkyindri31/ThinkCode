export const PercabanganTableLabel = ["No", "Jenis Percabangan", "Penjelasan", "Sintaks", "Contoh"];

export const PercabanganTableIsian = [
    {
        Nomor: "1",
        Jenis: "If Statement",
        Penjelasan: "Menjalankan blok kode jika kondisi benar.",
        Sintaks: "if (kondisi) { // kode jika kondisi benar }",
        Contoh: "if (angka > 5) { console.log('Lebih besar dari 5'); }",
    },
    {
        Nomor: "2",
        Jenis: "If-Else Statement",
        Penjelasan: "Menyediakan blok alternatif jika kondisi salah.",
        Sintaks: "if (kondisi) { // kode jika kondisi benar } else { // kode jika kondisi salah }",
        Contoh: "if (angka > 5) { console.log('Lebih besar'); } else { console.log('Kurang atau sama dengan 5'); }",
    },
    {
        Nomor: "3",
        Jenis: "If-Else If-Else",
        Penjelasan: "Menangani banyak kondisi dengan prioritas tertentu.",
        Sintaks: "if (kondisi1) { // kode } else if (kondisi2) { // kode } else { // kode default }",
        Contoh: "if (nilai >= 90) { console.log('A'); } else if (nilai >= 75) { console.log('B'); } else { console.log('C'); }",
    },
    {
        Nomor: "4",
        Jenis: "Switch Case",
        Penjelasan: "Membandingkan ekspresi dengan beberapa nilai tertentu.",
        Sintaks: "switch (ekspresi) { case nilai1: // kode break; default: // kode default }",
        Contoh: "switch (hari) { case 'Senin': console.log('Awal minggu'); break; default: console.log('Hari biasa'); }",
    },
    {
        Nomor: "5",
        Jenis: "Ternary Operator",
        Penjelasan: "Percabangan singkat untuk kondisi sederhana.",
        Sintaks: "kondisi ? ekspresi1 : ekspresi2;",
        Contoh: '"let hasil = angka > 5 ? "Lebih besar dari 5" : "Kurang atau sama dengan 5"; console.log(hasil);"',
    },
    {
        Nomor: "6",
        Jenis: "Nested If",
        Penjelasan: "If bersarang untuk kondisi lebih kompleks.",
        Sintaks: "if (kondisi1) { if (kondisi2) { // kode jika keduanya benar } }",
        Contoh: "if (angka > 5) { if (angka % 2 === 0) { console.log('Lebih besar dari 5 dan genap'); } }",
    },
];
