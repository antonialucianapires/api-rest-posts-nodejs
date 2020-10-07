const express = require('express');
const PostController = require('../controller/PostController');
const router = express.Router();

const postController = require("../controller/PostController");

router.get("/posts", postController.getAll);
router.get("/posts/:id", postController.getById);
router.post("/posts", postController.newPost);

module.exports = router