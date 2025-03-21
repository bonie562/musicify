import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  exploreNavItems,
  libraryNavItems,
  playlistNavItems,
} from "../data/sidebarData";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState(null);
  const [playlists, setPlaylists] = useState([]);

  // inside Sidebar:
  const navigate = useNavigate();

  const handleNavItemClick = (label, path) => {
    setActiveNav(label);
    navigate(path);
    console.log(`Navigating to ${label}`);
  };

  const addPlaylist = () => {
    const newPlaylist = prompt("Enter playlist name");
    if (newPlaylist) {
      setPlaylists([...playlists, { name: newPlaylist }]);
    }
  };

  const renderNavItems = (items) => {
    return items.map((item) => (
      <div
        key={item.label}
        className={`nav-button cursor-pointer text-sm py-2 px-4 flex items-center hover:bg-[#ffffff12] hover:translate-x-1 rounded-full transition duration-200 ${
          activeNav === item.label ? "bg-gray-700" : ""
        }`}
        onClick={() => handleNavItemClick(item.label, item.path)} // Pass both
      >
        <span className="material-symbols-outlined mr-2">{item.icon}</span>
        <span>{item.label}</span>
      </div>
    ));
  };
  

  const renderPlaylists = () => {
    return playlists.map((playlist, index) => (
      <div
        key={index}
        className="nav-button py-2 px-4 flex items-center hover:bg-gray-700 rounded"
      >
        <span className="material-icons-outlined mr-2">playlist_play</span>
        <span>{playlist.name}</span>
      </div>
    ));
  };

  return (
    <div className=" w-64 p-4 text-white h-full ">
      <div className="logo mb-6">
        <h2 className="text-2xl font-bold">🎵 Musicify</h2>
      </div>

      {/* Explore Section */}
      <div className="nav-group mb-6">
        <div className="items-head mb-2">
          <h3 className="text-lg font-semibold text-[#aaa]">Explore</h3>
        </div>
        <div className="nav-button-list" id="explore-buttons">
          {renderNavItems(exploreNavItems)}
        </div>
      </div>

      {/* Library Section */}
      <div className="nav-group mb-6">
        <div className="items-head mb-2">
          <h3 className="text-lg font-semibold text-[#aaa]">Library</h3>
        </div>
        <div className="nav-button-list" id="library-buttons">
          {renderNavItems(libraryNavItems)}
        </div>
      </div>

      {/* Playlists Section */}
      <div className="nav-group">
        <div className="items-head flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-[#aaa]">Playlists</h3>
          <button className="rounded flex items-end" onClick={addPlaylist}>
            <span className="material-symbols-outlined"> playlist_add </span>
          </button>
        </div>
        <div className="nav-button-list" id="playlists-buttons">
          {renderPlaylists()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
