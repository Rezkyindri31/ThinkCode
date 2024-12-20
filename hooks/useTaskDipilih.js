import { useState } from "react";
import Task1 from "@/app/Materi/components/Task1";

const useTaskSelection = () => {
  const [selectedTask, setSelectedTask] = useState("PRAK. IPL-DSE-C");

  // Daftar tugas yang akan ditampilkan di sidebar
  const tasks = [
    "Data Warehouse and Data Mining",
    "PRAK. IPL-DSE-C",
    "Prak. Manpro DSE-C",
    "Manajemen Proyek",
    "Praktikum Sistem Operasi (E)",
  ];

  // Konten yang terkait dengan setiap tugas
  const taskContent = {
    "Data Warehouse and Data Mining": <Task1 />,
    "PRAK. IPL-DSE-C":
      "Siddiq Ahmad Anshori memposting tugas baru: Laporan Akhir Praktikum Modul 6",
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
