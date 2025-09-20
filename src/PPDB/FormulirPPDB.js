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

  const [file, setFile] = useState(null); // untuk ijazah
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      if (file) {
        data.append("ijazah", file);
      }

      await axios.post(
        "https://be-production-d9fe.up.railway.app/api/admin/ppdb/formulir",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setStatus("✅ Pendaftaran berhasil, data Anda sudah tersimpan.");
      setFormData({
        nama: "",
        nisn: "",
        alamat: "",
        asalSekolah: "",
        noHp: "",
      });
      setFile(null);
    } catch (err) {
      setStatus("❌ Gagal mendaftar, coba lagi.");
    }
  };

  return (
    <div className="formulir-ppdb">
      <h2>Formulir Pendaftaran PPDB</h2>
      {status && <p className="status">{status}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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

        {/* Upload Ijazah */}
        <input type="file" name="ijazah" onChange={handleFileChange} accept="image/*,.pdf" />

        <button type="submit">Daftar</button>
      </form>
    </div>
  );
};

export default FormulirPPDB;
