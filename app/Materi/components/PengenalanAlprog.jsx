"use client";
import React from "react";
import { Typography } from "@/app/MTailwind";

function Task1() {
    return (
        <div className="w-full my-4 space-y-2">
            <Typography variant="paragraph" className="text-justify indent-8">
                Algoritma adalah serangkaian langkah-langkah logis dan sistematis yang digunakan untuk menyelesaikan suatu masalah. Algoritma menjadi dasar utama dalam pemrograman karena membantu programmer memahami dan memecahkan masalah sebelum diimplementasikan ke dalam kode.
            </Typography>
            <Typography variant="paragraph" className="text-justify">
                Agar sebuah algoritma dapat dikatakan baik, algoritma tersebut harus memenuhi karakteristik berikut:
            </Typography>
            <ul className="list-decimal pl-12 space-y-2">
                <li><b>Finite (Terbatas):</b> Algoritma harus memiliki jumlah langkah yang terbatas dan berakhir.</li>
                <li><b>Unambiguous (Jelas):</b> Setiap langkah harus jelas, tidak ambigu, dan dapat dimengerti.</li>
                <li><b>Output:</b> Algoritma menghasilkan setidaknya satu output sebagai solusi dari masalah.</li>
                <li><b>Feasibility (Dapat Dilaksanakan):</b> Algoritma harus dapat dijalankan dengan sumber daya yang ada.</li>
                <li><b>Independen:</b> Algoritma tidak terikat pada bahasa pemrograman tertentu.</li>
            </ul>
            <Typography variant="paragraph" className="text-justify">
                Cara Menuliskan Algoritma:
            </Typography>
            <ul className="list-decimal pl-12 space-y-2">
                <li><b>Bahasa Natural (Deskripsi):</b> Langkah-langkah dijelaskan menggunakan bahasa sehari-hari.</li>
                <li><b>Pseudocode:</b> Ditulis menggunakan bahasa formal semi-programming.</li>
                <li><b>Flowchart:</b> Representasi visual menggunakan simbol diagram.</li>
            </ul>
            <Typography variant="paragraph" className="text-justify">
                Contoh Penulisan Pseudocode:
            </Typography>
            <ul className="list-decimal pl-12 space-y-2">
                <li>Input P, L</li>
                <li>Luas = P * L</li>
                <li>Output Luas</li>
            </ul>
        </div>

    );
}

export default Task1;
