// src/pages/ppdb/InfoPPDB.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const InfoPPDB = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://mtsmuhcil-backend.onrender.com/api/admin/ppdb")
      .then((res) => {
        const onlyInfo = res.data.filter(
          (item) => item.type === "Info PPDB"
        );
        setInfo(onlyInfo);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Informasi PPDB</h1>
      <ul>
        {info.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoPPDB;
