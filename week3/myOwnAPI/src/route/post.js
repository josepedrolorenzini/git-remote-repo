const express = require("express");
const router = express.Router();
const  {createPost , getAllPosts ,updatePost , deletePost ,getPost}  = require("../controller/post");


// http://localhost:4000/api/posts/ (POST)
router.post("/", createPost);

// http://localhost:4000/api/posts/ (GET)
router.get("/", getAllPosts);

// http://localhost:4000/api/posts/:id (GET)
router.patch("/:id", updatePost);

// http://localhost:4000/api/posts/:id (DELETE)
router.delete("/:id", deletePost);

// http://localhost:4000/api/posts/:id (GET)
router.get("/:id", getPost);

module.exports = router;