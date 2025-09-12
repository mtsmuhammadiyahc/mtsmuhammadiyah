import React, { useEffect, useState } from "react";
import axios from "axios";

const DataAlumni = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/alumni")
      .then((res) => {
        const onlyAlumni = res.data.filter(
          (item) => item.type === "Data Alumni"
        );
        setAlumni(onlyAlumni); // 
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Data Alumni</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {alumni.map((g, index) => (
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
            <p>Pekerjaan: {g.pekerjaan}</p>
            <p>Tahun Lulus: {g.tahun}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataAlumni;
