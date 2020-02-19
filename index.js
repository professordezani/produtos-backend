const express = require('express');
const server = express();

var produtos = [

{id: 1, nome: 'Computador All In One Samsung', preco: 1200.20},
{id: 2, nome: 'Mouse Razer Ex', preco: 120.50},
{id: 3, nome: 'Processador Intel Core i5 9000F', preco: 1010.60},
{id: 4, nome: 'Placa de Vídeo nVidia Gtx 1660', preco: 1440.80},
{id: 5, nome: 'SSD Kingston 480GB', preco: 450.90},
{id: 6, nome: 'SSD Kingston 120GB', preco: 250.90},

];

//middlewares: (Para considerar o que chegar no servidor como json)
server.use(express.json());

//GET DE TODOS OS PRODUTOS
server.get('/produto', function(request, response){

    return response.json(produtos);

})

//GET DE PRODUTOS POR ID
server.get('/produto/:id', function(request, response){

    const id = request.params.id;
    const produto = produtos.filter(p => p.id == id);
    return response.json(produto);

})

//POST PARA INSERÇÃO DE DADOS JSON
server.post('/produto', function(request, response){

    const produto = request.body;
    produtos.push(produto);
    return response.status(201).send();

})

//DELETE DE DADOS JSON
server.delete('/produto/:id', function(request, response){

    //REESCREVENDO
    const id = request.params.id;
    const produto = produtos.filter(p => p.id != id);
    return response.status(200).send();

    //POR EXCLUSÃO
    // for(var i = 0; i < produtos.length; i++){
    //     produtos.splice(i, 1);
    //     return response.status(200).send();
    // }

})

//UPDATE DE DADOS JSON
server.put('/produto/:id', (req, res) => {

    const id = req.params.id;
    const produto = req.body;

    produtos.forEach(p => {
        if(p.id == id){
            p.nome = produto.nome;
            p.preco = produto.preco;
            return;
        }
        return res.send();
    })

})


server.listen(3000);