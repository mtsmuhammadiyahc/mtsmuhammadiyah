import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Siswa.css";

const Siswa = () => {
  const [siswa, setSiswa] = useState([]);

  useEffect(() => {
  axios
    .get("https://be-production-d9fe.up.railway.app/api/admin/siswa")
    .then((res) => {
      setSiswa(res.data); // langsung isi data siswa
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
              width: "220px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            {g.foto && (
              <img
                src={`https://be-production-d9fe.up.railway.app/uploads/siswa/${g.foto}`}
                alt={g.nama}
                style={{ width: "100%", height: "auto", borderRadius: "6px" }}
              />
            )}
            <h3>{g.nama}</h3>
            <p><strong>NIS:</strong> {g.nis}</p>
            <p><strong>Kelas:</strong> {g.kelas}</p>
            <p><strong>Jenis Kelamin:</strong> {g.jenisKelamin}</p>
            <p><strong>Alamat:</strong> {g.alamat || "-"}</p>
            <p>
              <strong>Tanggal Lahir:</strong>{" "}
              {g.tanggalLahir
                ? new Date(g.tanggalLahir).toLocaleDateString()
                : "-"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Siswa;
