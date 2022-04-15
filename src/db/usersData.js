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
    bio:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    picture:{
        type: Sequelize.STRING,
        allowNull: false,
     }
})
 
module.exports = createTable;