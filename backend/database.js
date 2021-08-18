var mysql = require('mysql2');
var conn = mysql.createConnection({
    host : 'localhost',
    user  : 'root',
    password : 'akash',
    db : 'food_paradise_management_system'
});
conn.connect(function(err){
    if(err) throw err;
    console.log('DB connected successfully');
});

module.exports = conn;