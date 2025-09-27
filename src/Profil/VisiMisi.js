import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VisiMisi.css"; 

const VisiMisi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/visimisi")
      .then((res) => setData(res.data))
      .catch((err) => console.error("❌ Gagal ambil data visimisi:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="visimisi-container" data-aos="fade-up">
      <h1 className="visimisi-title">Visi Misi</h1>

      {data.length > 0 ? (
        data.map((item, idx) => (
          <div key={idx} className="visimisi-box" data-aos="fade-up">
            {/* Kolom Visi */}
            <div className="visi">
              <h2>Visi Kami</h2>
              <p>{item?.visi || "Belum ada visi."}</p>
            </div>

            {/* Kolom Misi */}
            <div className="misi">
              <h2>Misi Kami</h2>
              {item?.misi ? (
                Array.isArray(item.misi) ? (
                  <ol>
                    {item.misi.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ol>
                ) : (
                  <ol>
                    {item.misi
                      .split(/\r?\n/)
                      .filter((m) => m.trim() !== "")
                      .map((m, i) => (
                        <li key={i}>{m.trim()}</li>
                      ))}
                  </ol>
                )
              ) : (
                <p>Belum ada misi.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>Belum ada data Visi & Misi.</p>
      )}
    </div>
  );
};

export default VisiMisi;
