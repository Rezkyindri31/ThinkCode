"use client";
import React from "react";
import { Typography } from "@/app/MTailwind";

function Task2() {
    return (
        <div className="w-full my-4 space-y-2">
            <Typography variant="lead" className="text-justify indent-8 font-semibold">
                Sequence (Urutan)
            </Typography>
            <Typography variant="paragraph" className="text-justify indent-8">
                Langkah-langkah algoritma dieksekusi secara berurutan, dari atas ke bawah.
            </Typography>
            <Typography variant="paragraph" className="text-justify">
                Agar sebuah algoritma dapat dikatakan baik, algoritma tersebut harus memenuhi karakteristik berikut:
            </Typography>
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

export default Task2;
