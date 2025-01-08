"use client";
import React from "react";
import { Typography } from "@/app/MTailwind";
import Image from "next/image";
import Fungsi1 from '@/assets/img/materi/Fungsi_1.png';
import Fungsi2 from '@/assets/img/materi/Fungsi_2.png';

function Task6() {
    return (
        <div className="w-full my-4 space-y-2">
            <Typography variant="lead" className="text-justify indent-8">
                <span className="font-bold"> Fungsi</span> adalah blok kode terorganisir yang dirancang untuk menjalankan tugas tertentu dan dapat digunakan berulang kali dalam program. Fungsi memudahkan pengelolaan kode, meningkatkan keterbacaan, dan memungkinkan penggunaan kembali kode tanpa harus menuliskan ulang logika yang sama. Fungsi dapat menerima parameter sebagai input tambahan yang memungkinkan fleksibilitas dalam cara fungsi tersebut bekerja. Selain itu, fungsi dapat mengembalikan nilai sebagai hasil eksekusi.
                Contoh program fungsi adalah menghitung luas lingkaran:
            </Typography>
            <div className="flex items-center justify-center gap-0">
                <Image
                    src={Fungsi1}
                    alt="Flowchart example"
                    className="w-96 h-56 rounded-md object-center"
                />
                <Image
                    src={Fungsi2}
                    alt="Flowchart example"
                    className="w-96 h-80 rounded-md object-center"
                />
            </div>
        </div>
    );
}

export default Task6;
