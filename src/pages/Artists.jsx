import React from "react";
import musicsData from "../data/musicsData"; // adjust import path if needed
import { FaPlay } from "react-icons/fa6";

const Artists = () => {
  const uniqueArtists = musicsData.map((item) => ({
    name: item.artist,
    cover: item.cover || "https://via.placeholder.com/150?text=No+Image",
  }));

  return (
    <div className="text-white p-6 h-full">
      <h2 className="text-2xl font-bold mb-4">
        {uniqueArtists.length} liked artists
      </h2>

      <div className="flex flex-wrap gap-8">
        {uniqueArtists.map((artist, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition transform group"
          >
            <div className="relative w-72 h-72">
              <img
                src={artist.cover}
                alt={artist.name}
                className="w-72 h-72 object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-full">
                <FaPlay />
              </div>
            </div>
            <span className="text-sm mt-3">{artist.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
