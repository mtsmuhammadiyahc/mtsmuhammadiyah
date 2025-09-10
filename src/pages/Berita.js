// src/pages/Berita.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function Berita() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/berita")
      .then((res) => setBerita(res.data))
      .catch((err) => console.error("Gagal ambil berita:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Berita</h1>
      {berita.length > 0 ? (
        berita.map((item) => (
          <div
            key={item._id}
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <h2>{item.judul}</h2>
            <p>{new Date(item.tanggal).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>Belum ada berita.</p>
      )}
    </div>
  );
}

export default Berita;
