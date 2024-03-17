import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  name: { type: String, required: true },
  creator: { type: String, required: true },
  tags: { type: [String], default: [] },
  comments: {
    type: [{
      message: { type: String, required: true },
      author: { type: String },
      createdAt: { type: Date, default: new Date() }
    }],
    default: function() {
      return []; // Return an empty array as the default value
    }
  },
  selectedFile: { type: String, required: true },
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
