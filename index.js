const express = require('express');
const mongoose = require('mongoose');
const Produto = require('./ProdutoSchema');

const server = express();

const MONGO_URL ="mongodb+srv://user:senha@clusterlp3noite-cokoy.mongodb.net/dbproduto?retryWrites=true&w=majority";

const db = mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

var produtos = [];

// middlewares:
server.use(express.json());

server.get('/produto', async function(request, response) {
    const produtos = await Produto.find();
    return response.json(produtos);
})

server.get('/produto/:id', async function(request, response) {    
    const id = request.params.id;
    // const produto = produtos.filter(p => p.id == id);
    const produto = await Produto.findById(id);
    return response.json(produto);
})

server.post('/produto', async function(request, response) {
    const produto = request.body;
    await Produto.create(produto);  //.catch(error => {});
    // produtos.push(produto);
    return response.status(201).send();
})

server.delete('/produto/:id', async function(request, response) {
    const id = request.params.id;
    // produtos = produtos.filter(p => p.id != id);
    await Produto.findByIdAndRemove(id);
    return response.status(200).send();
})

server.put('/produto/:id', async (req, res) => {
    const id = req.params.id;
    const produto = req.body;

    await Produto.findByIdAndUpdate(id, produto);

    return res.send();

    // produtos.forEach(p => {
    //     if(p.id == id) {
    //         p.nome = produto.nome;
    //         p.preco = produto.preco;
    //         return;
    //     }
    // })

    
})



server.listen(3000);