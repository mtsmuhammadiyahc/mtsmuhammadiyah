// src/pages/FasilitasDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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

  return (
    <div className="profil-container" data-aos="fade-up">
      <h1 className="profil-title">{detail.nama}</h1>

      {(detail.image || detail.foto) && (
        <img
          src={
            detail.image
              ? detail.image // ✅ URL dari Cloudinary
              : `${API_URL}/uploads/${detail.foto}` // ✅ fallback Railway
          }
          alt={detail.nama}
          className="profil-image"
          style={{
            maxWidth: "100%",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />
      )}

      <p className="profil-description">{detail.deskripsi}</p>

      <Link to="/profil/fasilitas" className="back-link">
        ← Kembali ke daftar fasilitas
      </Link>
    </div>
  );
};

export default FasilitasDetail;
