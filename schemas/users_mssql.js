const Sequelize = require('sequelize');
const db = require('../configs/database_mssql');

//Option 1: Passing parameters separately
const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: db.dialect /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});



// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.log('Unable to connect to the database:');
//     console.log(err);
    
//   });

const User = sequelize.define('users', {   
    username: Sequelize.STRING,    
    password: Sequelize.STRING,
    fullname: Sequelize.STRING,
    birthdate: Sequelize.DATE,       
},{
    logging: false,  //không muốn hiện thông báo on console
    //timestamps: false  //k muốn tạo createAt và updatedAt
});

User.sync().then(function() {
   //console.log("tao bang thanh cong")
}).error(function(err) {
    console.log(err)
});

 module.exports = User;