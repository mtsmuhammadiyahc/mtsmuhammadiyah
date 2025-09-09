import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimoni = () => {
  const [testimoni, setTestimoni] = useState([]);

  useEffect(() => {
    axios
      .get("https://mtsmuhcil-backend.onrender.com/api/admin/alumni")
      .then((res) => {
        const onlyTestimoni = res.data.filter((item) => item.type === "Testimoni");
        setTestimoni(onlyTestimoni);
      })
      .catch((err) => console.error("Gagal fetch Testimoni:", err));
  }, []);

  return (
    <div>
      <h1>Testimoni Alumni</h1>
      {testimoni.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {testimoni.map((t, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                width: "300px",
                borderRadius: "8px",
                background: "#f9f9f9",
              }}
            >
              {t.foto && (
                <img
                  src={`http://localhost:5001/uploads/${t.foto}`}
                  alt={t.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "6px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <h3>{t.title}</h3>
              <p>{t.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Belum ada testimoni alumni.</p>
      )}
    </div>
  );
};

export default Testimoni;
