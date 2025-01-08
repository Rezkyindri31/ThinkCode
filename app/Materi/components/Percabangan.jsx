"use client";
import React from "react";
import { Typography, Card } from "@/app/MTailwind";
import Image from "next/image";
import Percabangan1 from '@/assets/img/materi/Percabangan_1.png';
import Percabangan2 from '@/assets/img/materi/Percabangan_2.png';
import Percabangan3 from '@/assets/img/materi/Percabangan_3.png';
import { PercabanganTableLabel, PercabanganTableIsian } from "@/components/dataPercabangan";

function Task4() {
    return (
        <div className="w-full my-4 space-y-4">
            <Typography variant="lead" className="text-justify indent-8">
                <span className="font-bold"> Percabangan</span> adalah proses pengambilan keputusan dalam program. Pernyataan if-else digunakan untuk menjalankan kode tertentu jika suatu kondisi terpenuhi, dan kode lainnya jika tidak. Jika terdapat lebih dari satu kondisi yang harus diperiksa, nested if digunakan.
            </Typography>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {PercabanganTableLabel.map((head) => (
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
                        {PercabanganTableIsian.map(({ Nomor, Jenis, Penjelasan, Sintaks, Contoh }, index) => {
                            const isLast = index === PercabanganTableIsian.length - 1;
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
                    Contoh program percabangan adalah menentukan apakah angka yang dimasukkan pengguna merupakan bilangan genap atau ganjil:
                </Typography>
                <div className="flex items-center justify-center gap-0">
                    <Image
                        src={Percabangan1}
                        alt="Flowchart example"
                        className="w-96 h-80 rounded-md object-center"
                    />
                    <Image
                        src={Percabangan2}
                        alt="Flowchart example"
                        className="w-96 h-80 rounded-md object-center"
                    />
                    <Image
                        src={Percabangan3}
                        alt="Flowchart example"
                        className="w-96 h-80 rounded-md object-center"
                    />
                </div>
            </div>

        </div>
    );
}

export default Task4;
