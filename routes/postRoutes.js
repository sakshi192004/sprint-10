const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// POST /posts - create a post
router.post("/", async (req, res) => {
  try {
    const { title, content, authorId } = req.body;

    const post = await Post.create({
      title,
      content,
      authorId
    });

    const populatedPost = await post.populate("authorId", "name email");

    res.status(201).json(populatedPost);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create post",
      error: error.message
    });
  }
});

// GET /posts - get all posts with author details
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("authorId", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch posts",
      error: error.message
    });
  }
});

// GET /posts/top-recent - top 3 most recent posts
router.get("/top-recent", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("authorId", "name email")
      .sort({ createdAt: -1 })
      .limit(3);

    res.json({
      count: posts.length,
      posts
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch recent posts",
      error: error.message
    });
  }
});

// GET /posts/:id - get one post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "authorId",
      "name email"
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    res.status(400).json({
      message: "Invalid post ID",
      error: error.message
    });
  }
});

// DELETE /posts/:id - delete a post
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({
      message: "Post deleted successfully",
      post: deletedPost
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete post",
      error: error.message
    });
  }
});

module.exports = router;