
//sử dụng mysql để lưu dữ liệu

const Sequelize = require("sequelize");
const db = require('../configs/database_mysql');

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
  dialect: db.dialect /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const User = sequelize.define('users', {  
    // id: { //nó sẽ tự động thêm 
    //     type: Sequelize.UUID,
    //     primaryKey: true,
    //     unique: true
    // },  
    username: Sequelize.STRING,    
    password: Sequelize.STRING,
    fullname: Sequelize.STRING,
    birthdate: Sequelize.DATE,
    gender: Sequelize.INTEGER,
    address: Sequelize.STRING,
    email: Sequelize.STRING,
    identitycard: Sequelize.STRING,
    mobiphone: Sequelize.STRING,
    role: Sequelize.STRING   
},{
    logging: false,  //không muốn hiện thông báo on console
    timestamps: false  //k muốn tạo createAt và updatedAt
});

User.sync().then(function() {
   
}).error(function(err) {
    console.log(err)
});

module.exports = User;