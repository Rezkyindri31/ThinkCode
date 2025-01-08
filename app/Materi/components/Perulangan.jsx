"use client";
import React from "react";
import { Typography, Card } from "@/app/MTailwind";
import Image from "next/image";
import Perulangan1 from '@/assets/img/materi/Perulangan_1.png';
import Perulangan2 from '@/assets/img/materi/Perulangan_2.png';
import { PerulanganTableLabel, PerulanganTableIsian } from "@/components/dataPerulangan";

function Task5() {
    return (
        <div className="w-full my-4 space-y-4">
            <Typography variant="lead" className="text-justify indent-8">
                <span className="font-bold"> Perulangan</span> adalah proses menjalankan blok kode secara berulang sampai kondisi tertentu tercapai. For loop digunakan ketika jumlah perulangan sudah diketahui, sedangkan while loop digunakan jika perulangan berlangsung selama kondisi tertentu terpenuhi. Nested loop adalah perulangan di dalam perulangan lain.
            </Typography>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {PerulanganTableLabel.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {PerulanganTableIsian.map(({ Nomor, Jenis, Penjelasan, Sintaks, Contoh }, index) => {
                            const isLast = index === PerulanganTableIsian.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={Nomor}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {Nomor}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {Jenis}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {Penjelasan}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {Sintaks}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {Contoh}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
            <div className="w-full my-4">
                <Typography variant="lead" className="text-justify indent-8">
                    Contoh program perulangan adalah mencetak angka 1 hingga 10 menggunakan for loop:
                </Typography>
                <div className="flex items-center justify-center gap-0">
                    <Image
                        src={Perulangan1}
                        alt="Flowchart example"
                        className="w-96 h-80 rounded-md object-center"
                    />
                    <Image
                        src={Perulangan2}
                        alt="Flowchart example"
                        className="w-96 h-80 rounded-md object-center"
                    />
                </div>
            </div>

        </div>
    );
}

export default Task5;
