import {
  getAllSong,
  Post_song_Details,
  AddSongsToBucket,
  DeleteSongsfromBucket,
} from "../Controllers/Song_Details_Post.js";
import express from "express";
const SongRouter = express.Router();
SongRouter.route("/PostSongDetails").post(Post_song_Details);
SongRouter.route("/AddToBucket").post(AddSongsToBucket);
SongRouter.route("/DeleteSongsfromBucket").put(DeleteSongsfromBucket);
SongRouter.route("/getAllSongs").get(getAllSong);

export default SongRouter;
