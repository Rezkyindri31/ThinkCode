import { useState } from "react";
import Task1 from "@/app/Materi/components/Task1";
import Task2 from "@/app/Materi/components/Task2";

const useTaskSelection = () => {
  const [selectedTask, setSelectedTask] = useState(
    "Algoritma: Pengertian, Karakteristik, dan Contoh Sederhana"
  );

  // Daftar tugas yang akan ditampilkan di sidebar
  const tasks = [
    "Algoritma: Pengertian, Karakteristik, dan Contoh Sederhana",
    "Struktur Algoritma",
    "Prak. Manpro DSE-C",
    "Manajemen Proyek",
    "Praktikum Sistem Operasi (E)",
  ];

  // Konten yang terkait dengan setiap tugas
  const taskContent = {
    "Algoritma: Pengertian, Karakteristik, dan Contoh Sederhana": <Task1 />,
    "Struktur Algoritma": <Task2 />,
    "Prak. Manpro DSE-C":
      "Tugas ini berkaitan dengan perancangan dan pengelolaan proyek manajemen perangkat lunak.",
    "Manajemen Proyek":
      "Tugas ini melibatkan analisis dan perencanaan proyek besar, termasuk manajemen risiko.",
    "Praktikum Sistem Operasi (E)":
      "Tugas ini berfokus pada pengelolaan sistem operasi dan pengembangan aplikasi berbasis sistem operasi.",
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
