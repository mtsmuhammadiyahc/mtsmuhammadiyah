// src/pages/FasilitasDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
//import "./FasilitasDetail.css";

const FasilitasDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL =
    process.env.REACT_APP_API_URL || "https://be-production-d9fe.up.railway.app";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/admin/fasilitas/${id}`)
      .then((res) => {
        setDetail(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Gagal ambil detail fasilitas:", err);
        setLoading(false);
      });
  }, [API_URL, id]);

  if (loading) return <p>Loading...</p>;
  if (!detail) return <p>Data fasilitas tidak ditemukan.</p>;

  // Fungsi untuk parsing deskripsi
  const renderDeskripsi = (text) => {
    const lines = text.split("\n").map((l) => l.trim()).filter((l) => l);

    let elements = [];
    let currentList = null;

    lines.forEach((line, i) => {
      if (
        line.toLowerCase().includes("fasilitas yang tersedia") ||
        line.toLowerCase().includes("fungsi utama")
      ) {
        // Tutup list sebelumnya kalau ada
        if (currentList) {
          elements.push(<ul key={`list-${i}`}>{currentList}</ul>);
          currentList = null;
        }
        // Tambahkan judul
        elements.push(
          <h3 key={`title-${i}`} style={{ marginTop: "20px" }}>
            {line}
          </h3>
        );
      } else if (line.startsWith("-") || line.startsWith("•")) {
        // Ini item list
        if (!currentList) currentList = [];
        currentList.push(
          <li key={`item-${i}`}>{line.replace(/^[-•]\s*/, "")}</li>
        );
      } else {
        // Kalau sebelumnya ada list, tutup dulu
        if (currentList) {
          elements.push(<ul key={`list-${i}`}>{currentList}</ul>);
          currentList = null;
        }
        // Paragraf biasa
        elements.push(
          <p key={`p-${i}`} style={{ textAlign: "justify" }}>
            {line}
          </p>
        );
      }
    });

    // Tutup list terakhir kalau masih terbuka
    if (currentList) {
      elements.push(<ul key="last-list">{currentList}</ul>);
    }

    return elements;
  };

  return (
    <div className="profil-container" data-aos="fade-up">
      <h1 className="profil-title">{detail.nama}</h1>

      {detail.foto && (
        <img
          src={`${API_URL}/uploads/${detail.foto}`}
          alt={detail.nama}
          className="profil-image"
          style={{
            maxWidth: "100%",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />
      )}

      {/* Deskripsi otomatis diparse */}
      <div className="profil-description">{renderDeskripsi(detail.deskripsi)}</div>

      <Link to="/profil/fasilitas" className="back-link">
        ← Kembali ke daftar fasilitas
      </Link>
    </div>
  );
};

export default FasilitasDetail;
