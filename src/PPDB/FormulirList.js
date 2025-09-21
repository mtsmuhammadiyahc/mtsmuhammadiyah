import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FormulirList.css";

const FormulirList = () => {
  const [pendaftar, setPendaftar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://be-production-d9fe.up.railway.app/api/admin/formulir"
        );
        console.log("✅ Data dari API:", res.data);
        setPendaftar(res.data);
      } catch (err) {
        console.error("❌ Error fetch:", err);
        setError("Gagal mengambil data pendaftar");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (pendaftar.length === 0) return <p>Belum ada pendaftar.</p>;

  // ambil semua key unik dari data API
  const allKeys = [
    "No",
    ...new Set(pendaftar.flatMap((item) => Object.keys(item))),
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Daftar Pendaftar PPDB</h2>
      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%", marginTop: "10px" }}
      >
        <thead style={{ background: "#f0f0f0" }}>
          <tr>
            {allKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pendaftar.map((item, index) => (
            <tr key={item._id || index}>
              {allKeys.map((key) => {
                if (key === "No") return <td key={key}>{index + 1}</td>;
                if (key === "ijazah" && item[key]) {
                  return (
                    <td key={key}>
                      <a
                        href={`https://be-production-d9fe.up.railway.app/uploads/${item[key]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lihat File
                      </a>
                    </td>
                  );
                }
                return <td key={key}>{item[key] || "-"}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormulirList;
