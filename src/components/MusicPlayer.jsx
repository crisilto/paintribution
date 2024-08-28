import '../styles/MusicPlayer.css';

const MusicPlayer = () => {
  return (
    <div className="music-player">
      <iframe 
        style={{ borderRadius: "12px" }} 
        src="https://open.spotify.com/embed/playlist/3QfOoKtiQajtzxD5Tc6YIF?utm_source=generator&theme=0" 
        width="100%" 
        height="80px" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        title="Lofi Hip Hop Playlist"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
