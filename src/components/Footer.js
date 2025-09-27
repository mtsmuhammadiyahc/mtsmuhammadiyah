// src/components/Footer.js
import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mts-footer">
      <div className="mts-footer-inner">
        {/* Kiri: Logo + Nama + Alamat */}
        <div className="mts-footer-left">
          <img
            src="/image/logo-mts.png"
            alt="Logo MTs Muhammadiyah Cilacap"
            className="footer-logo"
          />
          <div className="footer-info">
            <h3>MTs Muhammadiyah Cilacap</h3>
            <p>Jl. Selamet No 11, Sidanegara, Cilacap Tengah</p>
          </div>
        </div>

        {/* Tengah: Kontak */}
        <div className="mts-footer-center">
          <p>
            <strong>Telepon/WA :</strong> 0858 5777 7758
          </p>
          <p>
            <strong>Fax :</strong> 0282 546600
          </p>
          <p>
            <strong>Email :</strong> info@mtsmuhcil.ac.id
          </p>
          <p>
            <strong>Website :</strong> mtsmuhcil.ac.id
          </p>
        </div>

        {/* Kanan: Sosmed */}
        <div className="mts-footer-right">
          <p><strong>Ikuti Kami</strong></p>
          <div className="footer-sosmed">
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/mtsmuhammadiyah_cilacap/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bawah: copyright */}
      <div className="mts-footer-bottom">
        <p>© {new Date().getFullYear()} MTs Muhammadiyah Cilacap. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
