import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.topic || mongoose.model("topic", topicSchema);

export default Topic;
