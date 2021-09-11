const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const db = {};
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/testedb', {dialect: 'postgres'});


 
module.exports = sequelize;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;