import React, { useEffect, useState } from "react";
import axios from "axios";

const DataPPDB = () => {
  const [ppdb, setPPDB] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/admin/ppdb")
      .then((res) => setPPDB(res.data))
      .catch((err) => console.error(err));
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5001/api/admin/ppdb/${id}`, { status });
      setPPDB(ppdb.map((item) => (item._id === id ? { ...item, status } : item)));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteData = async (id) => {
    if (!window.confirm("Yakin mau hapus data ini?")) return;
    try {
      await axios.delete(`http://localhost:5001/api/admin/ppdb/${id}`);
      setPPDB(ppdb.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Data PPDB</h2>
      <table border="1" cellPadding="8" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Nama</th>
            <th>NISN</th>
            <th>Tgl Lahir</th>
            <th>Orang Tua</th>
            <th>WA</th>
            <th>Dokumen</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {ppdb.map((item) => (
            <tr key={item._id}>
              <td>{item.nama}</td>
              <td>{item.nisn}</td>
              <td>{item.tgl_lahir?.substring(0, 10)}</td>
              <td>{item.orangtua}</td>
              <td>{item.hp_orangtua}</td>
              <td>
                {item.dokumen && (
                  <a href={`http://localhost:5001/uploads/${item.dokumen}`} target="_blank" rel="noreferrer">
                    Lihat
                  </a>
                )}
              </td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => updateStatus(item._id, "lulus")}>Lulus</button>
                <button onClick={() => updateStatus(item._id, "tidak_lulus")}>Tidak Lulus</button>
                <button onClick={() => deleteData(item._id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataPPDB;
