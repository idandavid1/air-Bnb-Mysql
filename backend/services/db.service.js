var mysql = require('mysql2');

var connection = mysql.createConnection({
      host: "localhost",
      database: 'stayDB',
      user: "root",
      password: "3578"
});
connection.connect((err) => {
      if (err) throw err;
      console.log("Connected!")
});


module.exports = {
      connection
}