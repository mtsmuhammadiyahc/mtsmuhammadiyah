// src/pages/admin/FormulirList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const FormulirList = () => {
  const [pendaftar, setPendaftar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ambil data dari backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://be-production-d9fe.up.railway.app/api/admin/formulir");
        setPendaftar(res.data);
      } catch (err) {
        setError(err.response?.data?.error || "Gagal memuat data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // hapus data
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;

    try {
      await axios.delete(`https://be-production-d9fe.up.railway.app/api/admin/formulir/${id}`);
      setPendaftar(pendaftar.filter((item) => item._id !== id));
      alert("✅ Data berhasil dihapus");
    } catch (err) {
      alert("❌ Gagal menghapus data");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Daftar Pendaftar PPDB</h2>
      {pendaftar.length === 0 ? (
        <p>Belum ada pendaftar.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f5f5f5" }}>
              <th>Nama</th>
              <th>NISN</th>
              <th>Alamat</th>
              <th>Asal Sekolah</th>
              <th>No HP</th>
              <th>Ijazah</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pendaftar.map((item) => (
              <tr key={item._id}>
                <td>{item.nama}</td>
                <td>{item.nisn}</td>
                <td>{item.alamat}</td>
                <td>{item.asalSekolah}</td>
                <td>{item.noHp}</td>
                <td>
                  {item.ijazah ? (
                    <a
                      href={`https://be-production-d9fe.up.railway.app/uploads/${item.ijazah}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lihat
                    </a>
                  ) : (
                    "Tidak ada"
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FormulirList;
