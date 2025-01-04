export const PerulanganTableLabel = ["No", "Jenis Perulangan", "Penjelasan", "Sintaks", "Contoh"];

export const PerulanganTableIsian = [
    {
        Nomor: "1",
        Jenis: "For Loop",
        Penjelasan: "Mengulang kode dengan jumlah iterasi yang jelas.",
        Sintaks: "for (init; kondisi; increment) { }",
        Contoh: "for (let i = 0; i < 5; i++) { console.log(i); }",
    },
    {
        Nomor: "2",
        Jenis: "While Loop",
        Penjelasan: "Mengulang kode selama kondisi bernilai true.",
        Sintaks: "while (kondisi) { }",
        Contoh: "let i = 0; while (i < 5) { console.log(i); i++; }",
    },
    {
        Nomor: "3",
        Jenis: "Do-While Loop",
        Penjelasan: "Sama seperti while, tetapi menjalankan kode minimal sekali.",
        Sintaks: "do { } while (kondisi);",
        Contoh: "let i = 0; do { console.log(i); i++; } while (i < 5);",
    },
];
