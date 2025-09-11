import React, { useEffect, useState } from "react";
import axios from "axios";

const DataStaf = () => {
  const [staf, setStaf] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/staf`)
      .then((res) => {
        console.log("✅ Respon API Staf:", res.data);
        setStaf(res.data);
      })
      .catch((err) => console.error("❌ Error ambil data staf:", err));
  }, []);

  return (
    <div>
      <h1>Data Staf</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {staf.map((s, index) => (
          <div
            key={index}
            style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}
          >
            {s.foto && (
              <img
                src={`${process.env.REACT_APP_API_URL}/uploads/${s.foto}`}
                alt={s.nama}
                style={{ width: "100%", height: "auto" }}
              />
            )}
            <h3>{s.nama}</h3>
            <p>Jabatan: {s.jabatan}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataStaf;
