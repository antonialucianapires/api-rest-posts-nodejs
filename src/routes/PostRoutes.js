const express = require('express');
const router = express.Router();

const postController = require("../controller/PostController");

router.get("/posts", postController.getAll);
router.get("/posts/:id", postController.getById);

module.exports = router