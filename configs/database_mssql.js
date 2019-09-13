'use strict';
//dùng cho kết nối sql server 

module.exports ={
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "trandiep",
    password: process.env.DB_PASSWORD || "trandiep",
    database: process.env.DB_NAME || "DemoQLDSinhVien",
    dialect:  "mssql"
};

