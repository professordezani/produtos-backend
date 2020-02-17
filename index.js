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

server.get('/produto', function(request, response){
    return response.json(produtos);
})

server.get('/produto/:id', function(request, response){

    const id = request.params.id;

    const produto = produtos.filter(p => p.id == id);

    return response.json(produto);

})

server.listen(3000);