const Sequelize = require('sequelize');
const database = require('./db');
 
const createTable = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    tag: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})
 
module.exports = createTable;