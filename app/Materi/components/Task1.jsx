import React from "react";
import { Card, CardBody, CardHeader } from "@/app/MTailwind";

function Task1() {
    return (
        <div className="flex justify-center">
            <Card className="w-96">
                <CardHeader color="blue" className="text-white">
                    Pengantar Algoritma dan Pemrograman
                </CardHeader>
                <CardBody>
                    <p>
                        Algoritma adalah langkah-langkah atau prosedur yang digunakan untuk menyelesaikan masalah. Pemrograman adalah proses menulis kode untuk mengimplementasikan algoritma.
                    </p>
                </CardBody>
            </Card>
        </div>
    );
}

export default Task1;
