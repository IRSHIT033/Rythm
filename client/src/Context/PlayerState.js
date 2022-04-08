import { useReducer, useEffect } from "react";
import { playerReducer } from "./playerReducer";
import playerContext from "./playerContext";
import axios from "axios";

const PlayerState = (props) => {
  useEffect(() => {
    const fetchSongslist = async () => {
      let res = await axios.get("/api/songs/getAllSongs");
      if (res.status === 200) {
        dispatch({ type: "SUCCESS", data: res.data });
        return;
      }
    };
    fetchSongslist();
  });

  const initialState = {
    currentSong: 0,
    songlist: [],
    repeat: false,
    random: false,
    playing: false,
  };
  const [state, dispatch] = useReducer(playerReducer, initialState);

  const setCurrent = (id) => dispatch({ type: "SET_CURRENT_SONG", data: id });

  const songsSet = (songsArr) =>
    dispatch({ type: "SET_SONGS_ARRAY", data: songsArr });

  const togglePlaying = () =>
    dispatch({ type: "TOGGLE_PLAYING", data: state.playing ? false : true });

  const prevSong = () => {
    if (state.currentSong === 0) {
      setCurrent(state.songlist.length - 1);
    } else {
      setCurrent(state.currentSong - 1);
    }
  };

  const nextSong = () => {
    if (state.currentSong === state.songlist.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(state.currentSong + 1);
    }
  };

  const toggleRepeate = (id) =>
    dispatch({ type: "TOGGLE_REPEAT", data: state.repeat ? false : true });

  const toggleRandom = (id) =>
    dispatch({ type: "TOGGLE_RANDOM", data: state.random ? false : true });

  const handleEnd = () => {
    if (state.random) {
      return dispatch({
        type: "SET_CURRENT_SONG",
        data: ~~(Math.random() * state.songlist.length),
      });
    } else {
      if (state.repeat) {
        nextSong();
      } else if (state.currentSong === state.songlist.length - 1) {
        return;
      } else {
        nextSong();
      }
    }
  };
  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songlist: state.songlist,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        audio: state.audio,
        setCurrent,
        nextSong,
        prevSong,
        togglePlaying,
        songsSet,
        handleEnd,
        toggleRepeate,
        toggleRandom,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
};

export default PlayerState;
