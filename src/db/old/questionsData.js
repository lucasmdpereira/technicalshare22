const Sequelize = require('sequelize');
const database = require('./dbQuestions');
 
const createTable = database.define('questions', {
    idQuestion: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quemFoiPerguntado: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    quemPerguntou: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    historico: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    ativa: {
        type: Sequelize.INTEGER,
        allowNull: true,
    }
})
 
module.exports = createTable;