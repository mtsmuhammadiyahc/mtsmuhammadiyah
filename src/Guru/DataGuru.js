import React, { useEffect, useState } from "react";
import axios from "axios";

const DataGuru = () => {
  const [guru, setGuru] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/guru`)
      .then((res) => {
        console.log("✅ Respon API Guru:", res.data);
        setGuru(res.data); // langsung array
      })
      .catch((err) => console.error("❌ Error ambil data guru:", err));
  }, []);

  return (
    <div>
      <h1>Data Guru</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {guru.map((g, index) => (
          <div
            key={index}
            style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}
          >
            {g.foto && (
              <img
                src={`${process.env.REACT_APP_API_URL}/uploads/${g.foto}`}
                alt={g.nama}
                style={{ width: "100%", height: "auto" }}
              />
            )}
            <h3>{g.nama}</h3>
            <p>Jabatan: {g.jabatan}</p>
            <p>Mapel: {g.mapel}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataGuru;
