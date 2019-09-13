var express = require('express');
var router = express.Router();

router.use('/usersmssql', require('./users_mssql'));
router.use('/usersmysql', require('./users_mysql')); 
router.use('/userspgsql', require('./users_pgsql'));


module.exports = router;
 
    