import React, { useContext } from "react";
import playerContext from "../../Context/playerContext";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const Singlesong = ({
  song_name,
  song_url,
  song_artist,
  song_album,
  song_pic,
  idx,
}) => {
  const { setCurrent } = useContext(playerContext);
  const { user } = useAuth0();

  const AddToBucket = async (Song_ID, BucketOwner, BucketOwnerID) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/user",
      {
        Song_ID,
        BucketOwnerID,
        BucketOwner,
      },
      config
    );
    console.log(data);
  };

  return (
    <>
      <h5>{song_name}</h5>
      <br />
      <img className="Thumbnail" src={song_pic} alt={song_name} />
      <h3>{song_artist}</h3>
      <h5>{song_album}</h5>
      <button onClick={() => setCurrent(idx)}>play </button>
      {"  "}
      <button onClick={() => AddToBucket()}>+ </button>
    </>
  );
};

export default Singlesong;
