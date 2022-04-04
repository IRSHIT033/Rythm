import React from "react";

const Singlesong = ({
  song_name,
  song_url,
  song_artist,
  song_album,
  song_pic,
}) => {
  return (
    <>
      <h5>{song_name}</h5>
      <h3>{song_url}</h3>
      <img className="Thumbnail" src={song_pic} alt={song_name} />
      <h3>{song_artist}</h3>
      <h5>{song_album}</h5>
    </>
  );
};

export default Singlesong;
