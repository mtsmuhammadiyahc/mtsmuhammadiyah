import React, { useEffect, useState } from "react";
import axios from "axios";

const FormulirList = () => {
  const [pendaftar, setPendaftar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ganti dengan URL backend kamu
        const res = await axios.get(
          "https://be-production-d9fe.up.railway.app/api/admin/formulir"
        );
        setPendaftar(res.data);
      } catch (err) {
        setError("Gagal mengambil data pendaftar");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Daftar Pendaftar PPDB</h2>
      {pendaftar.length === 0 ? (
        <p>Belum ada pendaftar.</p>
      ) : (
        <table
          border="1"
          cellPadding="8"
          style={{ borderCollapse: "collapse", width: "100%", marginTop: "10px" }}
        >
          <thead style={{ background: "#f0f0f0" }}>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>NISN</th>
              <th>Alamat</th>
              <th>Asal Sekolah</th>
              <th>No HP</th>
              <th>Ijazah</th>
            </tr>
          </thead>
          <tbody>
            {pendaftar.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
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
                      rel="noopener noreferrer"
                    >
                      Lihat File
                    </a>
                  ) : (
                    "-"
                  )}
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
