import { Post_song_Details } from "../Controllers/Song_Details_Post.js";
import express from "express";
const SongRouter = express.Router();
SongRouter.route("/PostSongDetails").post(Post_song_Details);

export default SongRouter;