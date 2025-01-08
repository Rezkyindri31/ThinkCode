"use client";
import React from "react";
import Image from "next/image";
import { Typography, Button } from "@/app/MTailwind";
import useNavbarAktif from "@/hooks/useNavbarAktif";
import Logo from "@/assets/img/Logo.png";

const ThinkCodeCover = () => {
    const { handlenavbarAktif } = useNavbarAktif();
    return (
        <div className="bg-gradient-to-br from-[#007BFF] via-[#2b85ff] to-[#e6f4f1] flex items-center justify-center min-h-screen">
            <div className="text-center p-16 rounded-[100px] bg-white border-2 border-[#e6f4f1] shadow-[0_10px_20px_rgba(0,0,0,0.1),0_6px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2),0_10px_10px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <Image src={Logo} alt="Logo" className="w-40 h-40 object-contain" />
                    <Typography variant="h1" className="font-bold text-gray-800">
                        ThinkCode
                    </Typography>
                </div>
                <Typography variant="lead" className="text-gray-600 mb-10">
                    ThinkCode is your trusted source for Algorithm and Programming
                    material. Learn, code, and grow with us!
                </Typography>
                <Button
                    className="bg-[#00A3FF] text-2xl text-white px-8 py-4 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() => handlenavbarAktif('/Materi')}
                >
                    Mulai Sekarang
                </Button>
            </div>
        </div>
    );
};

export default ThinkCodeCover;
