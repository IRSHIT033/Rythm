import mongoose from "mongoose";
const SongBucketSchema = mongoose.Schema(
  {
    BucketOwnerID: { type: String, required: true },
    BucketOwner: { type: String, trim: true },
    Songs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Songs",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SongBucket = mongoose.model("SongBucket", SongBucketSchema);

export default SongBucket;
