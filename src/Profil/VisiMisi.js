import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";


const VisiMisi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://be-production-d9fe.up.railway.app/api/admin/visimisi`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("❌ Gagal ambil data visimisi:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="visimisi-container" data-aos="fade-up">
      <h1 className="visimisi-title">Visi & Misi</h1>
      {data.length > 0 ? (
        data.map((item, idx) => (
          <div key={idx} className="visimisi-content" data-aos="fade-up">
            {/* Visi */}
            <h3>Visi</h3>
            <p>{item.visi}</p>

            {/* Misi */}
            <h3>Misi</h3>
            <ol>
              {item.misi.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ol>

            {item.foto && (
              <img
                src={`${process.env.REACT_APP_API_URL}/uploads/${item.foto}`}
                alt="Visi Misi"
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            )}
          </div>
        ))
      ) : (
        <p>Belum ada data Visi & Misi.</p>
      )}
    </div>
  );
};

export default VisiMisi;
