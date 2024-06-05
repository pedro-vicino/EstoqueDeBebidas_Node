"use strict";
const Sequelize = require('sequelize');
const sequelize = new Sequelize('estoque_bebidas', 'root', 'cida2011', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate().then(() => {
    console.log("Conectado ao banco de dados");
}).catch((err) => {
    console.log("Houve um erro: " + err);
});
module.exports = { Sequelize: Sequelize, sequelize: sequelize };
