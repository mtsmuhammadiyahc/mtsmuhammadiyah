import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Sambutan.css";

const Sambutan = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/sambutan`)
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data[0]); // ambil hanya 1 sambutan (karena biasanya cuma 1)
        }
      })
      .catch((err) => console.error("❌ Gagal ambil data sambutan:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!data) {
    return <p>Belum ada sambutan.</p>;
  }

  return (
    <div className="sambutan-container" data-aos="fade-up">
      <h1 className="sambutan-title">{data.title}</h1>
      <div className="sambutan-content">
        {/* Gambar Sambutan */}
        {data.image && (
          <img
            src={`${process.env.REACT_APP_API_URL}/uploads/${data.image}`}
            alt={data.title}
            className="sambutan-image"
            data-aos="zoom-in"
          />
        )}

        {/* Isi Sambutan */}
        <p data-aos="fade-left">{data.content}</p>
      </div>
    </div>
  );
};

export default Sambutan;
