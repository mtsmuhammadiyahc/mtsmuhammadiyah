// src/pages/admin/Dashboard.js
import React, { useState } from "react";
import CrudPages from "../CrudPages";
import "./Dashboard.css";

function Dashboard() {
  const [activePage, setActivePage] = useState("Berita");

  const menuItems = [
    "Berita",
    "Guru",
    "Staf",
    "Siswa",
    "PrestasiSiswa",
    "Alumni",
    "Profil",
    "Fasilitas",
    "VisiMisi",
    "Sambutan",
    "Sejarah",
    "StrukturOrganisasi",
    "Galeri",
    "PPDB_Info",
    "PPDB_Formulir",
    "FormulirList",
    "PPDB_Jadwal",
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item}
              className={activePage === item ? "active" : ""}
              onClick={() => setActivePage(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="content">
        <CrudPages pageTitle={activePage} />
      </main>
    </div>
  );
}

export default Dashboard;
