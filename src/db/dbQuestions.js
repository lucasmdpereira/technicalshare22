const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/db/dbQuestions.sqlite'
  })
 
module.exports = sequelize;