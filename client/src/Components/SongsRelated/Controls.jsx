import React, { useRef, useState, useEffect, useContext } from "react";
import playerContext from "../../Context/playerContext";

const Controls = () => {
  const {
    currentSong,
    songlist,
    repeat,
    random,
    playing,
    setCurrent,
    nextSong,
    prevSong,
    togglePlaying,
    songsSet,
    handleEnd,
    toggleRepeate,
    toggleRandom,
  } = useContext(playerContext);

  console.log(songlist);

  const [stateVolume, setStateVolume] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currTime, setCurrTime] = useState(0);

  let audio = useRef("audio_tag");
  const handleVolume = (q) => {
    setStateVolume(q);
    audio.current.volume = q;
  };
  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause();

  useEffect(() => {
    audio.current.volume = stateVolume;
    if (playing) {
      toggleAudio();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong]);
  return (
    <div>
      <audio
        ref={audio}
        type="audio/mpeg"
        preload="true"
        src={songlist[currentSong].song_url}
      />
      <h2>{songlist[currentSong].song_name}</h2>

      <button
        className="play"
        onClick={() => {
          togglePlaying();
          toggleAudio();
        }}
      >
        {playing ? "pause" : "play"}
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Controls;
