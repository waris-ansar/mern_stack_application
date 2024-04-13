import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

// get posts with  pagination
export const getPosts = async (req, res) => {
  const { limit, page, searchQuery, tags } = req.query;

  if (!page) {
    return res.status(400).json({ message: "Page number is required" });
  }
  if (limit > 20) {
    return res
      .status(400)
      .json({ message: "Limit must be less then equal to 20" });
  }

  if (searchQuery && tags) {
    return res.status(400).json("Searching with query and tags at time");
  }

  let query = {}; // Empty query by default

  if (searchQuery && searchQuery.trim().length > 0) {
    query.title = new RegExp(searchQuery, "i");
  }
  if (tags && tags.trim().length > 0) {
    const lowercaseTags = tags.split(",");
    query.tags = { $in: lowercaseTags.map((tag) => new RegExp(tag, "i")) };
  }

  try {
    const Limit = Number(limit) || 8;
    const Page = Number(page);
    const startIndex = (Page - 1) * Limit;
    const totalCount = await PostMessage.countDocuments({});
    let hasNextPage = false;
    let hasPreviousPage = false;

    if (startIndex + Limit < totalCount) {
      hasNextPage = true;
    }
    if (startIndex > 0) {
      hasPreviousPage = true;
    }

    const posts = await PostMessage.find(query)
      .sort({ _id: -1 })
      .limit(Limit)
      .skip(startIndex)
      .populate("creator", "-password");

    // get all posts
    // const postMessages = await PostMessage.find();
    return res
      .status(200)
      .json({ totalCount, data: posts, hasNextPage, hasPreviousPage });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// get post with search
export const getPostBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;
  try {
    const titleRegex = new RegExp(searchQuery, "i");
    let query = {
      $or: [{ title: titleRegex }, { tags: { $in: tags.split(",") } }],
    };

    const posts = await PostMessage.find(query);

    return res.status(200).json({ data: posts });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// creat post
export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    updatedAt: new Date().toISOString(),
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// update post
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No news with that id");
  }

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, updatedAt: new Date().toISOString() },
      {
        new: true,
      }
    );

    if (!updatedPost) {
      return res.status(404).send("No news found with that id");
    }

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// delet post
export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No news with that id");
  }

  try {
    await PostMessage.findByIdAndRemove(_id);

    res.json({ message: "news deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// like post
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post exist with this id");
  }

  try {
    const post = await PostMessage.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      // { likeCount: post.likeCount + 1 },
      post,
      { new: true }
    );

    res.json({
      status: "200",
      post: { updatedPost },
      message: "News liked successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({ message: "commet is required" });
  }
  if (!req.userId) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No news exist with this id");
  }

  try {
    const post = await PostMessage.findById(id);
    post.comments.push({
      message: comment,
      author: req.id,
    });

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
      new: true,
    });

    res.json({
      status: "200",
      post: { updatedPost },
      message: "Comment added!",
    });
  } catch (error) {
    console.log("err", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getPostById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid news id" });
  }

  try {
    // const post = await PostMessage.findById(id);
    const post = await PostMessage.findById(id).populate(
      "creator",
      "-password"
    );
    console.log(post, "this is the post");
    if (!post) {
      return res.status(400).json({ message: "No news with this id" });
    }

    return res.status(200).json({ data: post });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
