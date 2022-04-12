const Sequelize = require('sequelize');
const database = require('./dbUsers');
 
const createTable = database.define('users', {
    idQuestion: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    IdUserAskedFor: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    IdUserAskingFor: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    // response000:{
    //     type: Sequelize.STRING,
    //     allowNull: true,
    // },
    // IdUserReply000: {
    //     type: Sequelize.INTEGER,
    //     allowNull: true,
    // },
})
 
module.exports = createTable;