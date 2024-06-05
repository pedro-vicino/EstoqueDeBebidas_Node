"use strict";
const db = require("./authenticate_db");
const bebida = db.sequelize.define("bebida", {
    tipo: {
        type: db.Sequelize.STRING
    },
    marca: {
        type: db.Sequelize.STRING
    },
    fornecedor: {
        type: db.Sequelize.STRING
    },
    preco_compra: {
        type: db.Sequelize.FLOAT
    },
    preco_venda: {
        type: db.Sequelize.FLOAT
    },
    quantidade: {
        type: db.Sequelize.INTEGER
    },
    total_compra: {
        type: db.Sequelize.FLOAT
    },
    total_venda: {
        type: db.Sequelize.FLOAT
    },
    lucro: {
        type: db.Sequelize.FLOAT
    },
    data_entrada: {
        type: db.Sequelize.DATEONLY
    },
    data_validade: {
        type: db.Sequelize.DATEONLY
    }
});
// bebida.sync({ force: true })
module.exports = bebida;
