// src/pages/CrudPages.js
import React, { useState } from "react";
import api from "../api/adminApi";   

function CrudPages({ pageTitle }) {
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const renderFields = () => {
    switch (pageTitle) {
      case "Guru":
        return (
          <>
            <select name="type" onChange={handleChange} required>
              <option value="">-- Pilih Jenis Profil --</option>
              <option value="Data Guru">Data Guru</option>
              <option value="Data Staf">Data Staf</option>
            </select>
            <input type="text" name="nama" placeholder="Nama" onChange={handleChange} required />
            <input type="text" name="mapel" placeholder="Mata Pelajaran" onChange={handleChange} required />
            <input type="text" name="jabatan" placeholder="Jabatan" onChange={handleChange} required />
            <input type="number" name="tahun" placeholder="Tahun" onChange={handleChange} required />
            <input type="file" name="foto" onChange={handleFileChange} required />
          </>
        );
      
      case "Profil":
        return (
          <>
            <select name="type" onChange={handleChange} required>
              <option value="">-- Pilih Jenis Profil --</option>
              <option value="visi-misi">Visi & Misi</option>
              <option value="sejarah">Sejarah</option>
              <option value="sambutan">Sambutan</option>
              <option value="struktur">Struktur Organisasi</option>
              <option value="fasilitas">Fasilitas</option>
            </select>
            <input type="text" name="title" placeholder="Judul" onChange={handleChange} required />
            <textarea name="content" placeholder="Isi Konten" onChange={handleChange} required />
            <input type="file" name="image" onChange={handleFileChange} />
          </>
        );
        
      case "Siswa":
        return (
          <>
             <select name="type" onChange={handleChange} required>
              <option value="">-- Pilih Jenis Profil --</option>
              <option value="Data Siswa">Data Siswa</option>
              <option value="Prestasi">Prestasi</option>
            </select>
            <input type="text" name="nama" placeholder="Nama Siswa" onChange={handleChange} />
            <input type="text" name="kelas" placeholder="Kelas" onChange={handleChange} />
            <input type="number" name="tahunMasuk" placeholder="Tahun Masuk" onChange={handleChange} />
            <input type="file" name="foto" onChange={handleFileChange} />
          </>
        );

      case "Alumni":
        return (
          <>
            <select name="type" onChange={handleChange} required>
              <option value="">-- Pilih Jenis Profil --</option>
              <option value="Data Alumni">Data Alumni</option>
              <option value="Testimoni">Testimoni</option>
            </select>
            <input type="text" name="nama" placeholder="Nama Alumni" onChange={handleChange} />
            <input type="number" name="tahun" placeholder="Tahun Lulus" onChange={handleChange} />
            <input type="text" name="pekerjaan" placeholder="Pekerjaan" onChange={handleChange} />
            <input type="file" name="foto" onChange={handleFileChange} />
          </>
        );

      case "PPDB":
  return (
    <>
      <select name="type" onChange={handleChange} required>
        <option value="">-- Pilih Jenis PPDB --</option>
        <option value="Info PPDB">Info PPDB</option>
        <option value="Jadwal Seleksi">Jadwal Seleksi</option>
      </select>

      {/* ================== Info PPDB ================== */}
      {formData.type === "Info PPDB" && (
        <>
          <input
            type="text"
            name="title"
            placeholder="Judul Info PPDB"
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Isi Informasi PPDB"
            onChange={handleChange}
            required
          />
          <input type="file" name="dokumen" onChange={handleFileChange} />
        </>
      )}

      {/* ================== Jadwal Seleksi ================== */}
      {formData.type === "Jadwal Seleksi" && (
        <>
          <input
            type="text"
            name="title"
            placeholder="Judul Jadwal Seleksi"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="tgl_mulai"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="tgl_selesai"
            onChange={handleChange}
            required
          />
          <textarea
            name="keterangan"
            placeholder="Keterangan Seleksi"
            onChange={handleChange}
          />
          <input type="file" name="dokumen" onChange={handleFileChange} />
        </>
      )}

      {/* ================== Formulir PPDB ================== */}
      {formData.type === "Formulir PPDB" && (
        <>
          <input
            type="text"
            name="nama"
            placeholder="Nama Lengkap"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nisn"
            placeholder="NISN"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="tgl_lahir"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="alamat"
            placeholder="Alamat"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nama_orangtua"
            placeholder="Nama Orang Tua"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="hp_orangtua"
            placeholder="No. HP Orang Tua"
            onChange={handleChange}
            required
          />
          <input type="file" name="dokumen" onChange={handleFileChange} />
        </>
      )}
    </>
  );

        case "Galeri":
          return (
          <>
             <select name="tipe" onChange={handleChange} required>
               <option value="">-- Pilih Jenis Galeri --</option>
               <option value="foto">Foto</option>
              <option value="vidio">Vidio</option>
              </select>

            <input
               type="text"
               name="judul"
               placeholder="Judul"
               onChange={handleChange}
              required
            />

            <textarea
               name="konten"
               placeholder="Deskripsi / Konten"
               onChange={handleChange}
            />

            <input
              type="file"
              name="file"
              onChange={handleFileChange}
            />
          </>
  );

      
      default:
        return (
          <>
            <input type="text" name="judul" placeholder="Judul" onChange={handleChange} />
            <textarea name="isi" placeholder="Isi Konten" onChange={handleChange} />
            <input type="date" name="tanggal" onChange={handleChange} />
            <input type="file" name="file" onChange={handleFileChange} />
          </>
        );
    }
  };

  // Mapping endpoint dan nama field file
  const endpointMap = {
    Profil: { url: "profil", fileField: "image" },
    Guru: { url: "guru", fileField: "foto" },
    Siswa: { url: "siswa", fileField: "foto" },
    Alumni: { url: "alumni", fileField: "foto" },
    Berita: { url: "berita", fileField: "cover" },
    Galeri: { url: "galeri", fileField: "file" },
    Pengumuman: { url: "pengumuman" },
    PPDB: { url: "ppdb", fileField: "dokumen" }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mapping = endpointMap[pageTitle];
    if (!mapping) {
      console.error(`❌ Endpoint untuk "${pageTitle}" tidak ditemukan.`);
      return;
    }

    const dataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      dataToSend.append(key, formData[key]);
    });

    if (file && mapping.fileField) {
      dataToSend.append(mapping.fileField, file);
    }

    try {
  const token = localStorage.getItem("adminToken");
  const res = await api.post(
    `/api/admin/${mapping.url}`,   // ✅ ga ada spasi, rapih
    dataToSend,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log("✅ Berhasil:", res.data);
} catch (err) {
  console.error("❌ Gagal:", err.response?.data || err.message);
}
  };

  return (
    <div>
      <h2>{pageTitle}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="crud-form">
        {renderFields()}
        {preview && <img src={preview} alt="Preview" style={{ maxHeight: "100px", marginTop: "10px" }} />}
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default CrudPages;
