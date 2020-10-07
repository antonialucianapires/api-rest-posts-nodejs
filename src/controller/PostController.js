const postModel = require("../models/PostModel");

const getAll = (request, response) => {
    response.status(200).json(postModel);
}

const getById = (request, response) => {
    const {id} = request.params;
    const post = postModel.find(post => post.id == id);
    response.json(post);
}

module.exports = {
    getAll,
    getById
}