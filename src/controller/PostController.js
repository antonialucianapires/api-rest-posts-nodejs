const postModel = require("../models/PostModel");
const helper = require("../helpers/helper")

const getAll = (request, response) => {
    response.status(200).json(postModel);
}

const getById = (request, response) => {
    let {id} = request.params;
    let post = postModel.find(post => post.id == id);
    response.json(post);
}

const newPost = (request, response) => {
    let { titulo, descricao, autor, origem} = request.body;

    let newPost = {
        id: helper.obterNovoValor(postModel),
        titulo: titulo,
        descricao: descricao,
        autor: autor,
        origem: origem
    }

    postModel.push(newPost);

    response.status(201).json(newPost);
}

const deletePost = (request, response) => {
    let { id } = request.params;
    postModel.filter(post => post.id != id);

    response.json({message: "Post deletado com sucesso."})
}

module.exports = {
    getAll,
    getById,
    newPost,
    deletePost
}