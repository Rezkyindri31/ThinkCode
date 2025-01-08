"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
    Card,
    CardBody,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@/app/MTailwind";
import Logo from "@/assets/img/Logo.png";
import { FaBook } from "react-icons/fa6";
import useTaskDipilih from "@/hooks/useTaskDipilih";

const ClassroomDashboard = () => {
    const { selectedTask, tasks, taskContent, handleTaskClick } = useTaskDipilih();
    return (
        <>
            <div className="relative flex h-screen bg-gray-100">
                <div className="w-64 bg-white shadow-lg p-4">
                    <div className="flex items-center mb-4">
                        <Image src={Logo} alt="Logo" className="w-12 h-12 mr-2 rounded-md" />
                        <Typography variant="h5" className="text-[#007BFF] font-bold">
                            Think Code
                        </Typography>
                    </div>
                    <List>
                        <Typography className="text-gray-500 text-sm py-2">Daftar Materi</Typography>
                        {tasks.map((task) => (
                            <ListItem
                                key={task}
                                onClick={() => handleTaskClick(task)}
                                className={`cursor-pointer py-2 rounded-md mb-2 text-md transition-all duration-200 ${selectedTask === task ? "bg-blue-500 text-white" : "bg-transparent"
                                    }`}
                            >
                                <ListItemPrefix><FaBook /></ListItemPrefix>
                                {task}
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className="relative flex-1 p-6 overflow-y-scroll">
                    <div className="bg-[#007BFF] text-white p-6 rounded-lg shadow-2xl flex items-center justify-between">
                        <Typography variant="h4">{selectedTask}</Typography>
                    </div>
                    <div className="mt-6">
                        <Card className="mb-4 shadow-sm bg-[#eefcff]">
                            <CardBody>
                                {taskContent[selectedTask]}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ClassroomDashboard;



