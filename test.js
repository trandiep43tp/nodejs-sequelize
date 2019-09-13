var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

// Create connection to database
var config = {
  server: 'USER-PC\\SQLEXPRESS',
  authentication: {
      type: 'default',
      options: {
            userName: 'sa', // update me
            password: 'sa', // update me
            Integrated: true
        }   
  },
  options: {
      database: 'DemoQLDSinhVien'
  }
}    
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});

//chuoi_ket_noi = "Database=HocSQL;Server=USER-PC\\SQLEXPRESS;Integrated Security = true";