import React, { useEffect, useState } from "react";
import axios from "axios";

const DataSiswa = () => {
  const [siswa, setSiswa] = useState([]);

  useEffect(() => {
    axios
      .get("https://mtsmuhcil-backend.onrender.comapi/admin/siswa")
      .then((res) => {
        const onlySiswa = res.data.filter(
          (item) => item.type === "Data Siswa"
        );
        setSiswa(onlySiswa); // ✅ huruf besar benar
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Data Siswa</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {siswa.map((g, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              borderRadius: "8px",
            }}
          >
            {g.foto && (
              <img
                src={`http://localhost:5001/uploads/${g.foto}`}
                alt={g.nama}
                style={{ width: "100%", height: "auto", borderRadius: "6px" }}
              />
            )}
            <h3>{g.nama}</h3>
            <p>Kelas: {g.kelas}</p>
            <p>Tahun Masuk: {g.tahunMasuk}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSiswa;
