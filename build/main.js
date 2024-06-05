"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const handlebars = require('express-handlebars');
const Bebida = require("./Bebida");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main', runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
    Bebida.findAll().then((bebida) => {
        res.render('lista', { bebida: bebida });
    });
});
app.get('/cadastro', (req, res) => {
    res.render('cadastro');
});
app.post('/adiciona', (req, res) => {
    Bebida.create({
        tipo: req.body.tipo,
        marca: req.body.marca,
        fornecedor: req.body.fornecedor,
        preco_compra: parseFloat(req.body.preco_compra.replace(',', '.')),
        preco_venda: parseFloat(req.body.preco_venda.replace(',', '.')),
        quantidade: req.body.quantidade,
        total_compra: (req.body.preco_compra * req.body.quantidade),
        total_venda: (req.body.preco_venda * req.body.quantidade),
        lucro: ((req.body.preco_venda * req.body.quantidade) - (req.body.preco_compra * req.body.quantidade)),
        data_entrada: req.body.data_entrada,
        data_validade: req.body.data_validade
    }).then(() => {
        res.redirect("/");
    }).catch((err) => {
        res.send("Houve um erro: " + err);
    });
});
app.get('/editar/:id', (req, res) => {
    Bebida.findByPk(req.params.id).then((bebida) => {
        if (bebida) {
            res.render('editar', { bebida: bebida });
        }
        else {
            res.send('Tarefa não encontrada');
        }
    }).catch((err) => {
        res.send("Houve um erro: " + err);
    });
});
app.post('/atualizar/:id', (req, res) => {
    Bebida.update({
        tipo: req.body.tipo,
        marca: req.body.marca,
        fornecedor: req.body.fornecedor,
        preco_compra: parseFloat(req.body.preco_compra.replace(',', '.')),
        preco_venda: parseFloat(req.body.preco_venda.replace(',', '.')),
        quantidade: req.body.quantidade,
        total_compra: (req.body.preco_compra * req.body.quantidade),
        total_venda: (req.body.preco_venda * req.body.quantidade),
        lucro: ((req.body.preco_venda * req.body.quantidade) - (req.body.preco_compra * req.body.quantidade)),
        data_entrada: req.body.data_entrada,
        data_validade: req.body.data_validade
    }, {
        where: { id: req.params.id }
    }).then(() => {
        res.redirect('/');
    }).catch((err) => {
        res.send("Houve um erro: " + err);
    });
});
app.get('/excluir/:id', (req, res) => {
    Bebida.destroy({ where: { 'id': req.params.id } }).then(() => {
        res.redirect('/');
    });
});
app.listen(port, console.log("Rodando"));
