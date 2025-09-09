import React, { useEffect, useState } from "react";
import axios from "axios";

const Prestasi = () => {
  const [prestasi, setPrestasi] = useState([]);

  useEffect(() => {
    axios
      .get("https://mtsmuhcil-backend.onrender.com/api/admin/siswa")
      .then((res) => {
        const onlyPrestasi = res.data.filter(
          (item) => item.type === "Prestasi"
        );
        setPrestasi(onlyPrestasi);
      })
      .catch((err) => console.error("Gagal fetch Prestasi:", err));
  }, []);

  return (
    <div>
      <h1>Prestasi</h1>
      {prestasi.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {prestasi.map((g, index) => (
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
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "6px",
                  }}
                />
              )}
              <h3>{g.nama}</h3>
              <p>Kelas: {g.kelas}</p>
              <p>Tahun Masuk: {g.tahunMasuk}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Belum ada data prestasi.</p>
      )}
    </div>
  );
};

export default Prestasi;
