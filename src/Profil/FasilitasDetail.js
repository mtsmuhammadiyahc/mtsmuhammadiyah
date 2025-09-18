import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Fasilitas.css";

const FasilitasDetail = () => {
  const { id } = useParams(); // ambil ID dari URL
  const [fasilitas, setFasilitas] = useState(null);
  const API_URL =
    process.env.REACT_APP_API_URL || "https://be-production-d9fe.up.railway.app";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/admin/fasilitas/${id}`)
      .then((res) => setFasilitas(res.data))
      .catch((err) => console.error(err));
  }, [API_URL, id]);

  if (!fasilitas) return <p>Loading...</p>;

  return (
    <div className="fasilitas-detail">
      <h1>{fasilitas.nama}</h1>
      {fasilitas.foto && (
        <img
          src={`${API_URL}/uploads/${fasilitas.foto}`}
          alt={fasilitas.nama}
          className="fasilitas-detail-img"
        />
      )}
      <p>{fasilitas.deskripsi}</p>
    </div>
  );
};

export default FasilitasDetail;
