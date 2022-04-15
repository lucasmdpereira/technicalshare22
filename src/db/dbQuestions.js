const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/db/db.sqlite'
  })
 
module.exports = sequelize;