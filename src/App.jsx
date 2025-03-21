import React, { useState } from "react";
import musicsData from "./data/musicsData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";
import NewReleases from "./pages/NewReleases";
import Popular from "./pages/Popular.jsx";
import Charts from "./pages/Charts";
import Songs from "./pages/Songs";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import History from "./pages/History";
import "./App.css";

// function AlbumCard({ album, artist, onClick }) {
//   const firstSongCover = album.songs[0]?.cover || "../img/default-cover.jpg";
//   return (
//     <div className="album-card" onClick={onClick}>
//       <img src={firstSongCover} alt={album.name} />
//       <div className="album-info">
//         <div className="album-title">{album.name}</div>
//         <div className="album-artist">{artist}</div>
//       </div>
//     </div>
//   );
// }

// function AlbumDetails({ album, onBack }) {
//   return (
//     <div className="album-details-page">
//       <button className="back-btn" onClick={onBack}>Go Back</button>
//       <img src={album.songs[0].cover} alt="Album Cover" className="album-cover" />
//       <h2>{album.name}</h2>
//       <h3>{album.artist}</h3>
//       <ul className="song-list">
//         {album.songs.map((song, index) => (
//           <li key={index}>
//             {index + 1}. {song.title} - {song.duration}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);

  return (
    <Router>
      <div className="app h-screen">
        <div
          className={`wrapper grid grid-cols-[auto,1fr] ${
            showMiniPlayer ? "grid-rows-[1fr_80px]" : "grid-rows-[1fr]"
          } h-full`}
        >
          {/* Sidebar */}
          <aside className="sidebar-desktop overflow-y-auto overflow-x-hidden bg-[#000000b3]">
            <Sidebar />
          </aside>

          {/* Main content */}
          <main className=".main-content overflow-auto bg-gradient-to-b from-[#621429] to-[#121212]">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/new-releases" element={<NewReleases />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/history" element={<History />} />
              {/* Add dynamic routes like /album/:id or /playlist/:id later */}
            </Routes>
          </main>

          {/* Conditionally render mini player */}
          {showMiniPlayer && (
            <footer className="col-span-2 p-4 bg-[#000000b3] text-white flex items-center justify-between">
              🎶 Mini Player (Now Playing...)
            </footer>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
