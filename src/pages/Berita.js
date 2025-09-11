// src/pages/Berita.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://be-production-d9fe.up.railway.app/api/admin/berita";
const UPLOADS_URL = "https://be-production-d9fe.up.railway.app/uploads/";

function Berita() {
  const [berita, setBerita] = useState([]);
  const [formData, setFormData] = useState({
    judul: "",
    penulis: "",
    isi: "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const token = localStorage.getItem("token"); // token admin dari login

  // ambil data berita
  const fetchBerita = async () => {
    try {
      const res = await axios.get(API_URL);
      setBerita(res.data);
    } catch (err) {
      console.error("Gagal fetch berita:", err.message);
    }
  };

  useEffect(() => {
    fetchBerita();
  }, []);

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  // submit berita
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("judul", formData.judul);
      data.append("penulis", formData.penulis);
      data.append("isi", formData.isi);
      if (file) data.append("cover", file); // 🔹 sinkron ke schema "cover"

      await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setFormData({ judul: "", penulis: "", isi: "" });
      setFile(null);
      setPreview(null);
      fetchBerita();
    } catch (err) {
      console.error("Gagal tambah berita:", err.response?.data || err.message);
    }
  };

  // hapus berita
  const handleDelete = async (id) => {
    if (!window.confirm("Hapus berita ini?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBerita();
    } catch (err) {
      console.error("Gagal hapus berita:", err.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Kelola Berita</h2>

      {/* Form Tambah Berita */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 p-4 border rounded shadow bg-gray-50"
      >
        <input
          type="text"
          name="judul"
          placeholder="Judul"
          value={formData.judul}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="penulis"
          placeholder="Penulis"
          value={formData.penulis}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          name="isi"
          placeholder="Isi Berita"
          value={formData.isi}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        ></textarea>
        <input type="file" accept="image/*" onChange={handleFile} />
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="mt-2 w-40 h-28 object-cover rounded"
          />
        )}
        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Simpan
        </button>
      </form>

      {/* List Berita */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {berita.map((item) => (
          <div key={item._id} className="p-4 border rounded shadow">
            {item.cover && (
              <img
                src={`${UPLOADS_URL}${item.cover}`}
                alt={item.judul}
                className="w-full h-40 object-cover mb-2 rounded"
              />
            )}
            <h3 className="font-bold">{item.judul}</h3>
            <p className="text-sm text-gray-500">
              {item.penulis} | {new Date(item.tanggal).toLocaleDateString()}
            </p>
            <p className="mt-2 text-gray-700">{item.isi}</p>
            <button
              onClick={() => handleDelete(item._id)}
              className="mt-3 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Berita;
