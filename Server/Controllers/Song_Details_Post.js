import asyncHandler from "express-async-handler";
import SongBucket from "../models/SongBucket.js";
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
  const { Song_ID, BucketOwner, BucketOwnerID } = req.body;
  if (!Song_ID || !BucketOwner || !BucketOwnerID) {
    res.status(400);
    throw new Error("Please fill All Fields");
  }
  const BucketOwner_exists = await SongBucket.find({
    BucketOwnerID: req.body.BucketOwnerID,
  });

  if (BucketOwner_exists.length === 0) {
    const Bucket = await SongBucket.create({
      BucketOwnerID: req.body.BucketOwnerID,
      BucketOwner: req.body.BucketOwner,
    });
  }
  const addSOng = await SongBucket.updateOne(
    { BucketOwner: req.body.BucketOwner },
    {
      $push: { Songs: Song_ID },
    },
    {
      new: true,
    }
  );

  if (!addSOng) {
    res.status(404);
    throw new Error("not added");
  } else {
    res.json(addSOng);
  }
});

export const DeleteSongsfromBucket = asyncHandler(async (req, res) => {
  const { Song_ID, BucketOwner, BucketOwnerID } = req.body;
  if (!Song_ID || !BucketOwner || !BucketOwnerID) {
    res.status(400);
    throw new Error("Please fill All Fields");
  }
  const BucketOwner_exists = await SongBucket.find({
    BucketOwnerID: req.body.BucketOwnerID,
  });

  if (BucketOwner_exists.length === 0) {
    res.status(400);
    throw new Error("Bucket Owner doesn't exist");
  }

  const rem = await SongBucket.updateOne(
    { BucketOwnerID: req.body.BucketOwnerID },
    {
      $pull: { Songs: Song_ID },
    },
    {
      new: true,
    }
  );

  if (!rem) {
    res.status(404);
    throw new Error("Chat Not Found");
  } else {
    res.json(rem);
  }
});

export const getAllSong = asyncHandler(async (req, res) => {
  const songs = await Songs.find();
  if (songs) {
    res.status(200).json(songs);
  } else {
    res.status(400);
    throw new Error("failed to get all songs ");
  }
});
