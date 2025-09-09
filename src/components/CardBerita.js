import React from "react";
import { Link } from "react-router-dom";

export function CardBerita({ id, title, date, excerpt, image }) {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-xs text-slate-500 mb-2">{date}</p>
        <p className="text-sm mb-4">{excerpt}</p>
        <Link
          to={`/berita/${id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          Baca selengkapnya
        </Link>
      </div>
    </div>
  );
}
