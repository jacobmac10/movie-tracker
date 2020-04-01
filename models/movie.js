const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./../config/db')
const Model = Sequelize.Model;
class Movie extends Model {};

Movie.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
   sequelize, 
   modelName: 'Movie', 
   //set a csutom table name 
   //freezeTableName: true,
   //tableName: 'movies'
});

//Movie.sync();
module.exports = {Movie};