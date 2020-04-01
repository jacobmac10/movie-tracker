const Sequelize = require('sequelize').Sequelize;

let sequelize = new Sequelize('movies', 'root','',{
  host: 'localhost',
  dialect: 'mysql' 
});

//promise
sequelize
.authenticate() 
.then(() => {
  console.log('MSQL connection succesful.');
})
.catch((err) => {
   console.error('MYSQL connection error: ', err);
});

module.exports = {
    //sequelize: sequelize
    sequelize
}

