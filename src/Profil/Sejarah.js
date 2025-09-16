// src/Profil/Sejarah.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Sejarah.css";

const Sejarah = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://be-production-d9fe.up.railway.app/api/admin/sejarah`)
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data[0]); // ambil hanya 1 sejarah (karena biasanya cuma 1)
        }
      })
      .catch((err) => console.error("❌ Gagal ambil data sejarah:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!data) {
    return <p>Belum ada sejarah.</p>;
  }

  return (
    <div className="sejarah-container" data-aos="fade-up">
      <h1 className="sejarah-title">{data.title}</h1>
      <div className="sejarah-content">
        {/* Gambar sejarah */}
        {data.image && (
          <img
            src={`${process.env.REACT_APP_API_URL}/uploads/${data.image}`}
            alt={data.title}
            className="sejarah-image"
            data-aos="zoom-in"
          />
        )}

        {/* Isi sejarah */}
        <p data-aos="fade-left">{data.content}</p>
      </div>
    </div>
  );
};

export default Sejarah;
