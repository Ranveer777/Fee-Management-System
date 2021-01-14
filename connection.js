const mysql = require("mysql");

//Create connetion with database
const con = mysql.createConnection({
    host: "localhost",
    user: "",           // Username
    password: "",       // Password
    database:""         // Database Name
  });
  
  con.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("Connected to databse");
  });
  

  module.exports=con;