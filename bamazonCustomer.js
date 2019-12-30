// Global Requirements
require("dotenv").config();
var keys = require("./keys.js");
var mysql = require("mysql");
var inquirer = require("inquirer");
var stockCheck;
// var keys = key.password;
// console.log(keys.password);
var connection = mysql.createConnection(keys);


//Connection 
connection.connect(function(err) {
    if (err) throw err;
    initConnection();
  });
  
  //Items for Sale Table
  function initConnection() {
    connection.query("SELECT id, product_name, price FROM products", function(
      err,
      res
    ) {
      if (err) {
        console.log(err);
      }
      for (let i = 0; i < res.length; i++) {
        res[i].price = res[i].price.toFixed(2);
      }
  
      console.table(res);
      // console.table(transformed);
      startBuy();
    });
  }
