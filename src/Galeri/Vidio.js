import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Galeri.css";

const Vidio = () => {
  const [vidios, setVidios] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/galeri")
      .then((res) => setVidios(res.data))
      .catch((err) => console.error(err));
  }, []);

  // function untuk embed YouTube
  const getYoutubeEmbed = (url) => {
    const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className="galeri-container">
      <h2 className="galeri-title">🎬 Galeri Video</h2>
      <div className="galeri-grid">
        {vidios.map((item) => (
          <div key={item._id} className="galeri-card">
            {item.file.includes("youtube") ? (
              <iframe
                src={getYoutubeEmbed(item.file)}
                title={item.judul}
                className="galeri-video"
                allowFullScreen
              />
            ) : (
              <video
                controls
                src={`http://localhost:5001/uploads/${item.file}`}
                className="galeri-video"
              />
            )}
            <p className="galeri-caption">{item.judul}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vidio;
