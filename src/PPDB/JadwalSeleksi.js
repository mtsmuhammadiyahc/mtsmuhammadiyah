// src/pages/ppdb/JadwalSeleksi.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const JadwalSeleksi = () => {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    axios
      .get("https://mtsmuhcil-backend.onrender.com/api/admin/ppdb")
      .then((res) => {
        const onlyJadwal = res.data.filter(
          (item) => item.type === "Jadwal Seleksi"
        );
        setJadwal(onlyJadwal);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Jadwal Seleksi PPDB</h1>
      <ul>
        {jadwal.map((item, index) => (
          <li key={index}>
            <strong>{item.title}</strong> <br />
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JadwalSeleksi;
