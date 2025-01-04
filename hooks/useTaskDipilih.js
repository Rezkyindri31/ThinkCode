import { useState } from "react";
import Task1 from "@/app/Materi/components/PengenalanAlprog";
import Task2 from "@/app/Materi/components/StrukturAlgoritma";
import Task3 from "@/app/Materi/components/DasarPemrograman";
import Task4 from "@/app/Materi/components/Percabangan";
import Task5 from "@/app/Materi/components/Perulangan";

const useTaskSelection = () => {
  const [selectedTask, setSelectedTask] = useState(
    "Pengenalan Algoritma dan Pemrograman"
  );

  const tasks = [
    "Pengenalan Algoritma dan Pemrograman",
    "Struktur Algoritma",
    "Dasar Pemrograman",
    "Percabangan (Selection)",
    "Perulangan (Iteration)",
    "Fungsi",
  ];

  const taskContent = {
    "Pengenalan Algoritma dan Pemrograman": <Task1 />,
    "Struktur Algoritma": <Task2 />,
    "Dasar Pemrograman": <Task3 />,
    "Percabangan (Selection)": <Task4 />,
    "Perulangan (Iteration)": <Task5 />,
    Fungsi:
      "Tugas ini berkaitan dengan pengembangan aplikasi berbasis web dan pengelolaan sistem operasi.",
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return {
    selectedTask,
    tasks,
    taskContent,
    handleTaskClick,
  };
};

export default useTaskSelection;
