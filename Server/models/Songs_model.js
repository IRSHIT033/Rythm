import mongoose from "mongoose";
const Songs_Model = mongoose.Schema({
  song_name: { type: String, required: true },
  song_url: { type: String, required: true },
  song_pic: { type: String, required: true },
  song_artist: { type: String, required: true },
  song_album: { type: String, required: true },
});
const Songs = mongoose.model("Songs", Songs_Model);
export default Songs;
