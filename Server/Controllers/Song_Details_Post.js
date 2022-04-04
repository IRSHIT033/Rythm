import asyncHandler from "express-async-handler";
import Songs from "../models/Songs_model.js";

export const Post_song_Details = asyncHandler(async (req, res) => {
  const { song_name, song_url, song_artist, song_album, song_pic } = req.body;
  if (!song_name || !song_url || !song_artist || !song_album | !song_pic) {
    res.status(400);
    throw new Error("Please fill All Fields");
  }
  const song = await Songs.create({
    song_name,
    song_url,
    song_artist,
    song_album,
    song_pic,
  });

  if (song) {
    res.status(201).json({
      _id: song._id,
      name: song.song_name,
      song_url: song.song_url,
      song_artist: song.song_artist,
      song_album: song.song_album,
      song_pic: song.song_pic,
    });
  } else {
    res.status(400);
    throw new Error("Failed store the song details");
  }
});

export const AddSongsToBucket = asyncHandler(async (req, res) => {
  if (!req.body.songs || !req.body.owner) {
    return res.status(400).send({ message: "Please Fill all the fields" });
  }
});
