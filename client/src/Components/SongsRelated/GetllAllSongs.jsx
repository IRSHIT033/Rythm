import { useEffect, useState, useContext } from "react";

import Singlesong from "./Singlesong";
import playerContext from "../../Context/playerContext";

const GetllAllSongs = () => {
  const { songlist } = useContext(playerContext);

  /*const [Allsongs, setAllsongs] = useState([]);
  const getSongs = async () => {
    const { data } = await axios.get(`/api/songs/getAllSongs`);
    setAllsongs(data);
  };
  /*const get_Curr_Song = (song) => {
    const audio = new Audio(song);
  };
  useEffect(() => {
    getSongs();
  });*/
  return (
    <>
      {songlist?.map((song, i) => {
        return (
          <Singlesong
            key={song._id}
            idx={i}
            song_name={song.song_name}
            song_pic={song.song_pic}
            song_artist={song.song_artist}
            song_url={song.song_url}
          />
        );
      })}
    </>
  );
};

export default GetllAllSongs;
