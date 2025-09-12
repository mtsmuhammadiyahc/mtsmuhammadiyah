import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Galeri.css";

const Foto = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/galeri")
      .then((res) => {
        // 🔑 filter hanya yang tipe "foto"
        const onlyFoto = res.data.filter((item) => item.tipe === "foto");
        setFotos(onlyFoto);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="galeri-container">
      <h2 className="galeri-title">📷 Galeri Foto</h2>
      <div className="galeri-grid">
        {fotos.length > 0 ? (
          fotos.map((item) => (
            <div key={item._id} className="galeri-card">
              <img
                src={`http://localhost:5001/uploads/${item.file}`}
                alt={item.judul}
                className="galeri-img"
              />
              <p className="galeri-caption">{item.judul}</p>
            </div>
          ))
        ) : (
          <p>Tidak ada foto tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default Foto;
