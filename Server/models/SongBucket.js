import mongoose from "mongoose";
const SongBucket = mongoose.Schema(
  {
    BucketOwnerID: { type: String },
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
