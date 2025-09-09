import React, { useState } from "react";
import axios from "axios";
import "./FormulirPPDB.css"; // optional styling

const FormulirPPDB = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nisn: "",
    alamat: "",
    asalSekolah: "",
    noHp: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mtsmuhcil-backend.onrender.com/api/admin/ppdb/formulir", formData);
      setStatus("✅ Pendaftaran berhasil, data Anda sudah tersimpan.");
      setFormData({ nama: "", nisn: "", alamat: "", asalSekolah: "", noHp: "" });
    } catch (err) {
      setStatus("❌ Gagal mendaftar, coba lagi.");
    }
  };

  return (
    <div className="formulir-ppdb">
      <h2>Formulir Pendaftaran PPDB</h2>
      {status && <p className="status">{status}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          placeholder="Nama Lengkap"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nisn"
          placeholder="NISN"
          value={formData.nisn}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="alamat"
          placeholder="Alamat Lengkap"
          value={formData.alamat}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="asalSekolah"
          placeholder="Asal Sekolah"
          value={formData.asalSekolah}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="noHp"
          placeholder="Nomor HP"
          value={formData.noHp}
          onChange={handleChange}
          required
        />

        <button type="submit">Daftar</button>
      </form>
    </div>
  );
};

export default FormulirPPDB;
