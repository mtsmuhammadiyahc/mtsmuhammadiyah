// src/pages/profil/StrukturOrganisasi.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./StrukturOrganisasi.css";

const StrukturOrganisasi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/strukturorganisasi")
      .then((res) => {
        setData(res.data);
        console.log("✅ Data Struktur Organisasi:", res.data);
      })
      .catch((err) => console.error("❌ Gagal ambil data struktur:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

   return (
    <div className="struktur-container" data-aos="fade-up">
      <h1 className="struktur-title">Struktur Organisasi</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className="struktur-item"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h2 className="struktur-nama">{item.nama}</h2>
            <p className="struktur-jabatan">{item.jabatan}</p>
            {item.image && (
              <img
                src={`https://be-production-d9fe.up.railway.app/uploads/${item.image}`}
                alt={item.nama}
                style={{
                  width: "150px",         // lebar pas foto
                  height: "200px",        // tinggi pas foto
                  objectFit: "cover",     // supaya rapi, tidak gepeng
                  borderRadius: "8px",    // sudut melengkung
                  marginTop: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)" // biar ada efek
                )}
              />  
          </div>
        ))
      ) : (
        <p>Belum ada data struktur organisasi.</p>
      )}
    </div>
  );
};

export default StrukturOrganisasi;
