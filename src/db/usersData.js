const Sequelize = require('sequelize');
const database = require('./dbUsers');
 
const createTable = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tag:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    office:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    picture:{
        type: Sequelize.STRING,
        allowNull: true,
     },
    market_saude:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    market_industria:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    market_publico:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    market_banking:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    market_varejo:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    market_educacao:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    market_finance:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    market_seguros:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    bio:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})
 
module.exports = createTable;