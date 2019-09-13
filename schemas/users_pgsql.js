//sử dụng pgSql để lưu dữ liệu

const Sequelize = require("sequelize");
const db = require('../configs/database_pgsql');

const sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
  dialect: db.dialect /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

//test connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
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

//có thể định nghĩa các quan hệ giữa các bảng như sau. ví dụ là 2 bảng Todo và Task
//Todo.hasMany(Task, { foreignKey: 'todoId', sourceKey: 'id'});
//Task.belongTo(Todo, { foreignKey: 'todoId', targetKey: 'id'})


User.sync().then(function() {
    //console.log("create a table success ");
}).error(function(err) {
    console.log(err)
});

module.exports = User;