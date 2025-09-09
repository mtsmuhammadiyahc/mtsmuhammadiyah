import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Kontak.css";

export default function Kontak() {
  return (
    <div className="kontak-container">
      <h1>Kontak Kami</h1>
      <div className="kontak-info">
        <p><FaMapMarkerAlt /> Alamat: Jl. Selamet no 11, Sidanegara, Cilacap Tengah</p>
        <p><FaPhoneAlt /> 0852-2727-8857</p>
        <p><FaEnvelope /> info@mtsmuhammadiyahc@gmail.com</p>
        <p>
          <FaInstagram />{" "}
          <a href="https://www.instagram.com/mts_muhammadiyah_cilacap/" target="_blank" rel="noopener noreferrer">
            @mts_muhammadiyah_cilacap
          </a>
        </p>
      </div>

      <form className="kontak-form">
        <h2>Kirim Pesan</h2>
        <input type="text" name="nama" placeholder="Nama" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="pesan" placeholder="Pesan Anda" required></textarea>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}
