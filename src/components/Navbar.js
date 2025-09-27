import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 
  const navRef = useRef(null);

  const menus = [
    { label: "Beranda", path: "/" },
    {
      label: "Profil",
      key: "profil",
      sub: [
        { label: "Sejarah", path: "/profil/sejarah" },
        { label: "Visi & Misi", path: "/profil/visi-misi" },
        { label: "Struktur Organisasi", path: "/profil/struktur-organisasi" },
        { label: "Fasilitas", path: "/profil/fasilitas" },
        { label: "Sambutan", path: "/profil/sambutan" },
      ],
    },
    {
      label: "Guru",
      key: "guru",
      sub: [
        { label: "Data Guru", path: "/guru/data-guru" },
        { label: "Data Staf", path: "/guru/data-staf" },
      ],
    },
    {
      label: "Galeri",
      key: "galeri",
      sub: [
        { label: "Foto", path: "/galeri/foto" },
        { label: "Vidio", path: "/galeri/vidio" },
      ],
    },
    {
      label: "Siswa",
      key: "siswa",
      sub: [
        { label: "siswa", path: "/siswa/siswa" },
        { label: "Prestasi", path: "/siswa/prestasi" },
      ],
    },
    {
      label: "PPDB",
      key: "ppdb",
      sub: [
        { label: "Formulir PPDB", path: "/ppdb/formulir" },
        { label: "Info PPDB", path: "/ppdb/info" },
        { label: "Jadwal Seleksi", path: "/ppdb/jadwal-seleksi" },
      ],

    },
    { label: "Berita", path: "/berita" },
    { label: "Kontak", path: "/kontak" },
    { label: "Login", path: "/login" }
  ];

  // close menus when click outside
  useEffect(() => {
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    }
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, []);

  // close mobile menu when resizing to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdown((cur) => (cur === key ? null : key));
  };

  const onLinkClick = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Running text */}
      <div className="mts-running">
        <div className="mts-running-inner">
          <span>
            📢 Pengumuman: PPDB 2026-2027 dibuka — Daftar online sekarang! • Info hari ini:
            Kegiatan ekstrakurikuler & lomba antar sekolah.
          </span>
        </div>
      </div>

      {/* Navbar */}
      <header className="mts-navbar" ref={navRef} role="navigation" aria-label="Main navigation">
        <div className="mts-navbar-inner">
          <Link to="/" className="mts-logo" onClick={onLinkClick}>
            <img 
                src="/image/logo-mts.png" 
                alt="Logo MTs Muhammadiyah" 
                className="logo-png"
              />
          </Link>

          {/* Slogan */}
          <div className="mts-slogan">
            <h2>MATSAMU Cilacap</h2>
            <p>"Membentuk Generasi Islami, Cerdas, dan Mandiri"</p>
          </div>

          {/* mobile toggle */}
          <button
            className="mts-toggle"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setMenuOpen((s) => !s)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* menu */}
          <ul className={`mts-menu ${menuOpen ? "open" : ""}`}>
            {menus.map((m) =>
              m.sub ? (
                <li
                  key={m.key}
                  className={`mts-item mts-has-sub ${openDropdown === m.key ? "open" : ""}`}
                  // hover opens on desktop:
                  onMouseEnter={() => window.innerWidth >= 768 && setOpenDropdown(m.key)}
                  onMouseLeave={() => window.innerWidth >= 768 && setOpenDropdown(null)}
                >
                  <button
                    className="mts-link mts-sub-toggle"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(m.key);
                    }}
                    aria-expanded={openDropdown === m.key}
                  >
                    {m.label} <FaChevronDown className="mts-chevron" />
                  </button>

                  <div className="mts-dropdown">
                    {m.sub.map((s) => (
                      <Link key={s.path} to={s.path} className="mts-dropdown-link" onClick={onLinkClick}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={m.path} className="mts-item">
                  <Link to={m.path} className="mts-link" onClick={onLinkClick}>
                    {m.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </header>
    </>
  );
}

// export both default and named so imports won't break
export default Navbar;
export { Navbar };
