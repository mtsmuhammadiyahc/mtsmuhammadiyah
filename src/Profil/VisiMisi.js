import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VisiMisi.css"; 

const VisiMisi = ({ preview = false }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/visimisi")
      .then((res) => {
        console.log("VisiMisi API response:", res.data);
        if (res.data && res.data.length > 0) {
          // 🔥 ambil data terakhir (atau bisa [0] kalau mau yang pertama)
          setData(res.data[res.data.length - 1]);
        }
      })
      .catch((err) => console.error("❌ Gagal ambil data visimisi:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!data) return <p>Loading Visi & Misi...</p>;

  return (
    <div className="visimisi-container" data-aos="fade-up">
      {!preview && <h1 className="visimisi-title">Visi Misi</h1>}

      {/* Kolom Visi */}
      <div className="visi">
        <h2>Visi Kami</h2>
        <p>{data?.visi || "Belum ada visi."}</p>
      </div>

      {/* Kolom Misi */}
      <div className="misi">
        <h2>Misi Kami</h2>
        {data?.misi ? (
          Array.isArray(data.misi) ? (
            <ol>
              {data.misi.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ol>
          ) : (
            <ol>
              {data.misi
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
  );
};

export default VisiMisi;
