"use client";
import React from "react";
import Image from "next/image";
import { Typography, Button } from "@/app/MTailwind";
import useNavbarAktif from "@/hooks/useNavbarAktif";
import Logo from "@/assets/img/Logo.jpg";

const ThinkCodeCover = () => {
    const { handlenavbarAktif } = useNavbarAktif();
    return (
        <div className="bg-gray-50 flex items-center justify-center min-h-screen">
            <div className="text-center p-8 rounded-lg shadow-lg">
                <div className="flex flex-col items-center justify-center text-center gap-4 my-6">
                    <Image src={Logo} alt="Logo" className="w-40 h-40 object-contain" />
                    <Typography variant="h1" className="font-bold text-gray-800">
                        ThinkCode
                    </Typography>
                </div>
                <Typography variant="lead" className="text-gray-600 mb-6">
                    ThinkCode is your trusted source for Algorithm and Programming
                    material. Learn, code, and grow with us!
                </Typography>
                <Button onClick={() => handlenavbarAktif('/Materi')}> Mulai Sekarang</Button>
            </div>
        </div>
    );
};

export default ThinkCodeCover;
