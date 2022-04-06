import React, { useContext } from "react";
import playerContext from "../../Context/playerContext";
const Singlesong = ({
  song_name,
  song_url,
  song_artist,
  song_album,
  song_pic,
  idx,
}) => {
  const { setCurrent } = useContext(playerContext);

  /* const [audio] = useState(new Audio(song_url));

  const [isPlaying, setIsplaying] = useState(false);
  const playPauseSong = () => {
    setIsplaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);
*/
  return (
    <>
      <h5>{song_name}</h5>
      <br />
      <img className="Thumbnail" src={song_pic} alt={song_name} />
      <h3>{song_artist}</h3>
      <h5>{song_album}</h5>
      <button onClick={() => setCurrent(idx)}>play </button>
    </>
  );
};

export default Singlesong;
