import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Profil.css";

const Sejarah = () => {
  const [data, setData] = useState([]);

  // 🔹 Helper buat parse response
  const parseProfilResponse = (res) => {
    if (Array.isArray(res.data?.data)) {
      return res.data.data.filter((item) => item.type === "sejarah");
    } else if (Array.isArray(res.data)) {
      return res.data.filter((item) => item.type === "sejarah");
    } else if (res.data?.type === "sejarah") {
      return [res.data];
    }
    return [];
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ADMIN}/profil`)
  .then((res) => {
    let result = [];

    if (Array.isArray(res.data?.data)) {
      result = res.data.data.filter((item) => item.type === "sejarah");
    } else if (Array.isArray(res.data)) {
      result = res.data.filter((item) => item.type === "sejarah");
    } else if (res.data && res.data.type === "sejarah") {
      result = [res.data];
    }

    setData(result);
    console.log("✅ Data Sejarah berhasil diambil:", result); // sekarang yang tampil array
  })
  .catch((err) => console.error("❌ Gagal ambil data sejarah:", err));
    }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="profil-container" data-aos="fade-up">
      <h1 className="profil-title">Sejarah</h1>
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
                src={`${process.env.REACT_APP_BACKEND_STATIC}uploads/${item.image}`}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: "15px",
                  borderRadius: "8px",
                }}
                data-aos="zoom-in"
              />
            )}
          </div>
        ))
      ) : (
        <p>Belum ada data sejarah.</p>
      )}
    </div>
  );
};

export default Sejarah;
