import mongoose from "mongoose";
const Songs_Model = mongoose.Schema({
  song_name: { type: string, required: true },
  song_url: { type: string, required: true },
  song_pic: { type: string, required: true },
  song_artist: { type: string, required: true },
  song_album: { type: string, required: true },
});
const Songs = mongoose.model("Songs", Songs_Model);
export default Songs;
