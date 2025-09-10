// src/pages/admin/FormInput.js
import React, { useState } from "react";
import api from "../../api/adminApi";  
import "./FormInput.css"; // opsional kalau mau styling terpisah

export default function FormInput() {
  const [kategori, setKategori] = useState("");
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const kategoriList = [
    "Profil",
    "Guru",
    "Siswa",
    "Alumni",
    "Berita",
    "Staf",
    "PPDB",
    "Galeri",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!kategori || !judul || !deskripsi || !file) {
      setStatus("❌ Semua field harus diisi!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("kategori", kategori);
      formData.append("judul", judul);
      formData.append("deskripsi", deskripsi);
      formData.append("file", file);

      const res = await axios.post("http://localhost:5001/api/admin/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatus(`✅ Berhasil upload: ${res.data.message || "Konten berhasil ditambahkan"}`);
      setKategori("");
      setJudul("");
      setDeskripsi("");
      setFile(null);
    } catch (err) {
      console.error(err);
      setStatus("❌ Gagal upload. Periksa server backend.");
    }
  };

  return (
    <div className="forminput-container">
      <h2>Upload Konten Website Sekolah</h2>
      <form onSubmit={handleSubmit} className="forminput-form">
        
        {/* Dropdown Kategori */}
        <label>Kategori:</label>
        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="">-- Pilih Kategori --</option>
          {kategoriList.map((kat, index) => (
            <option key={index} value={kat}>
              {kat}
            </option>
          ))}
        </select>

        {/* Judul */}
        <label>Judul:</label>
        <input
          type="text"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          placeholder="Masukkan judul konten"
        />

        {/* Deskripsi */}
        <label>Deskripsi:</label>
        <textarea
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          placeholder="Masukkan deskripsi konten"
          rows="4"
        />

        {/* Upload File */}
        <label>File / Gambar:</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        {/* Tombol Submit */}
        <button type="submit">Upload</button>
      </form>

      {/* Status Upload */}
      {status && <p className="forminput-status">{status}</p>}
    </div>
  );
}
