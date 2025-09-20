// src/PPDB/FormulirPPDB.js
import React, { useState } from "react";
import axios from "axios";
import "./FormulirPPDB.css"; // styling opsional

const FormulirPPDB = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nisn: "",
    alamat: "",
    asalSekolah: "",
    noHp: "",
    ijazah: null, // file upload
  });

  const [status, setStatus] = useState("");

  // handle input text
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle file upload
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      ijazah: e.target.files[0],
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      data.append("nama", formData.nama);
      data.append("nisn", formData.nisn);
      data.append("alamat", formData.alamat);
      data.append("asalSekolah", formData.asalSekolah);
      data.append("noHp", formData.noHp);

      if (formData.ijazah) {
        data.append("ijazah", formData.ijazah); // sesuai upload.single("ijazah")
      }
      
      await axios.post(
        "https://be-production-d9fe.up.railway.app/api/admin/formulir",
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
        ijazah: null,
      });
    } catch (err) {
      console.error(err.response?.data || err.message);
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

        {/* upload ijazah */}
        <input
          type="file"
          name="ijazah"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
          required
        />

        <button type="submit">Daftar</button>
      </form>
    </div>
  );
};

export default FormulirPPDB;
