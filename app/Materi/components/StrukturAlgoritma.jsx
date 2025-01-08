"use client";
import React from "react";
import Image from "next/image";
import Flowchart from '@/assets/img/materi/flwchart.png';
import { Typography } from "@/app/MTailwind";

function Task2() {
    return (
        <div className="w-full my-4 space-y-4">
            <Typography variant="lead" className="text-justify indent-8">
                Struktur dasar dalam algoritma terdiri dari tiga bagian, yaitu urutan (sequence), percabangan (selection), dan perulangan (iteration).
                <span className="font-bold"> Sequence</span> adalah serangkaian instruksi yang dijalankan secara berurutan, misalnya memasak nasi: cuci beras, masukkan ke dalam rice cooker, dan tekan tombol start.
                <span className="font-bold"> Selection</span> digunakan untuk membuat keputusan, misalnya jika suhu air lebih dari 100 derajat maka matikan kompor.
                <span className="font-bold"> Iteration</span> memungkinkan perulangan instruksi, misalnya menghitung mundur dari 10 hingga 1.
            </Typography>
            <Typography variant="lead" className="text-justify indent-8">
                Pseudocode digunakan untuk menuliskan algoritma dalam bentuk narasi mirip kode program, sedangkan flowchart adalah representasi visual menggunakan simbol-simbol seperti oval untuk start dan end, persegi panjang untuk proses, belah ketupat untuk keputusan, dan panah untuk alur kerja.
            </Typography>
            <Image
                src={Flowchart}
                alt="Flowchart example"
                className="w-1/2 h-screen mx-auto rounded-md object-center"
            />
        </div>
    );
}

export default Task2;
