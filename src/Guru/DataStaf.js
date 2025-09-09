import React, { useEffect, useState } from "react";
import axios from "axios";

const DataStaf = () => {
  const [staf, setStaf] = useState([]);

  useEffect(() => {
    axios
      .get("https://mtsmuhcil-backend.onrender.com:5001/api/admin/guru")
      .then((res) => {
        const onlyStaf = res.data.filter(
          (item) => item.type === "Data Staf" // Sesuaikan field type di database
        );
        setStaf(onlyStaf);
      })
      .catch((err) => console.error(err));
  }, []);

    return (
    <div>
      <h1>Data Staf</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {staf.map((g, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={`http://localhost:5001/uploads/${g.foto}`}
              alt={g.nama}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{g.nama}</h3>
            <p>Jabatan: {g.jabatan}</p>
            <p>Tahun Masuk: {g.tahun}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataStaf;
