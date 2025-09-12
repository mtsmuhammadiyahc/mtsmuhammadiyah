import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Profil.css";

const Struktur = () => {
  const [data, setData] = useState([]);

   const parseProfilResponse = (res, tipe) => {
  if (Array.isArray(res.data)) {
    return res.data.filter((item) => item.type === tipe);
  } else if (res.data?.type === tipe) {
    return [res.data]; // bungkus ke array
  }
  return [];
};

  useEffect(() => {
    axios
      .get(`https://be-production-d9fe.up.railway.app/api/profil/strukturorganisasi`)
      .then((res) => {
      const result = parseProfilResponse(res, "struktur organisasi");
      setData(result);
      console.log("✅ Data Struktur Organisasi:", result);
    })
    .catch((err) => console.error("❌ Gagal ambil data visi-misi:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="profil-container" data-aos="fade-up">
      <h1 className="profil-title">Struktur Organisasi</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className="profil-content"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h2 className="profil-subtitle">{item.title}</h2>
            <p>{item.content}</p>
            {item.image && (
              <img
                src={`http://localhost:5001/uploads/${item.image}`}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: "15px",
                  borderRadius: "8px"
                }}
                data-aos="zoom-in"
              />
            )}
          </div>
        ))
      ) : (
        <p>Belum ada data struktur organisasi.</p>
      )}
    </div>
  );
};

export default Struktur;
