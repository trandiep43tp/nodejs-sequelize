'use strict';

//muốn lấy được thông tin này vào pgAdmin -> biểu tượng pgSql 10 -> property ->connection

module.exports ={
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "thucpham",  //là pass khi mình cài pgsql
    database: process.env.DB_NAME || "DemoDb",
    port: 5432,
    dialect:  "postgres"
};



 