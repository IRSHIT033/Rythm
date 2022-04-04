import { useEffect, useState } from "react";
import axios from "axios";
import Singlesong from "./Singlesong";

const GetllAllSongs = () => {
  const [Allsongs, setAllsongs] = useState([]);
  const getSongs = async () => {
    const { data } = await axios.get(`/api/songs/getAllSongs`);
    setAllsongs(data);
  };
  useEffect(() => {
    getSongs();
  }, []);
  return (
    <>
      {Allsongs.map((song) => {
        return (
          <Singlesong
            key={song._id}
            song_name={song.song_name}
            song_pic={song.song_pic}
            song_artist={song.song_artist}
          />
        );
      })}
    </>
  );
};

export default GetllAllSongs;
