import React from "react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mts Muhammadiyah Cilacap.</p>
        <p className="text-sm">Alamat: Jl. Selamet no 11, Sidanegara, Cilacap Tengah</p>
      </div>
    </footer>
  );
}



export default Footer;
