'use strict';

module.exports ={
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "ql_nha_hang",
    dialect:  "mysql"
};



 