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
import Logo from "@/assets/img/Logo.jpg";
import useTaskDipilih from "@/hooks/useTaskDipilih";

const ClassroomDashboard = () => {
    const { selectedTask, tasks, taskContent, handleTaskClick } = useTaskDipilih();
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-64 bg-white shadow-lg p-4">
                <div className="flex items-center mb-4">
                    <Image src={Logo} alt="Logo" className="w-8 h-8 mr-2 rounded-md" />
                    <Typography variant="h5" className="text-[#007BFF] font-bold">
                        Think Code
                    </Typography>
                </div>
                <List>
                    <Typography className="text-gray-500 text-sm py-2">Daftar tugas</Typography>
                    {tasks.map((task) => (
                        <ListItem
                            key={task}
                            onClick={() => handleTaskClick(task)}
                            className={`cursor-pointer py-2 px-4 rounded-md mb-2 transition-all duration-200 ${selectedTask === task ? "bg-blue-500 text-white" : "bg-transparent"
                                }`}
                        >
                            <ListItemPrefix>📂</ListItemPrefix>
                            {task}
                        </ListItem>
                    ))}
                </List>
            </div>
            <div className="flex-1 p-6">
                <div className="bg-[#007BFF] text-white p-6 rounded-lg shadow-md flex items-center justify-between">
                    <Typography variant="h4">{selectedTask}</Typography>
                </div>
                <div className="mt-6">
                    <Card className="mb-4 shadow-sm">
                        <CardBody>
                            <Typography className="text-gray-800">
                                {taskContent[selectedTask]}
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ClassroomDashboard;



