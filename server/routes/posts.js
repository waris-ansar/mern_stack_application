import express from "express";
import {
  getPosts,
  getPostBySearch,
  createPosts,
  updatePost,
  deletePost,
  likePost,
  commentPost,
  getPostById,
  getRelatedPost,
} from "../controllers/post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/post-by-search", getPostBySearch);
router.get("/:id", getPostById);
router.get("/related-post/:id", getRelatedPost);
router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likepost", auth, likePost);
router.patch("/:id/comment", auth, commentPost);

export default router;
