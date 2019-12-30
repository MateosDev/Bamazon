// Global Requirements 

require("dotenv").config();
var keys = require("./keys.js");
var mysql = require("mysql");
var inquirer = require("inquirer");
var stockCheck;
// var keys = key.password;
// console.log(keys.password);
var connection = mysql.createConnection(keys);

//Initiate the Database Connection

connection.connect(function(err) {
  if (err) throw err;
  initConnection();
});

//Items For Sale List/Table

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
    purchaseItem();
  });
}

// starting the product purchasing
function purchaseItem() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "id",
        message: "Type the ID of the product you want to purchase."
      },
      {
        type: "number",
        name: "stock_quantity",
        message: "Type the amount you would like to purchase."
      }
    ])
    .then(function(answer) {
      connection.query(
        "SELECT stock_quantity FROM products WHERE id = ? ",
        [answer.id],
        function(err, res) {
          if (err) {
            console.log(err);
          }
          stockCheck = res[0].stock_quantity;
          if (stockCheck < answer.stock_quantity) {
            stockChecking();
          } else {
            connection.query(
              "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ? ",
              [answer.stock_quantity, answer.id],
              function(err) {
                if (err) {
                  console.log(err);
                }
                salePrice(answer.id, answer.stock_quantity);
              }
            );
          }
        }
      );
    });
}

//trying to make a reciept
function salePrice(id, amount) {
  connection.query("SELECT price FROM products WHERE id = ? ", [id], function(
    err,
    res
  ) {
    if (err) {
      console.log(err);
    }
    console.log(
      //reciept for amount of items and price?
      "Thank you for your choosing Bamazon. The total " +
        amount +
        "X item ID:" +
        id +
        " is $" +
        (res[0].price * amount).toFixed(2)
    );
    shopAgain();
  });
}

function stockChecking() {
  inquirer
    .prompt({
      name: "NoStock",
      type: "list",
      message: "Sorry we do not have enough of that item in stock.",
      choices: ["Continue Shopping?", "Leave"]
    })
    .then(function(answer) {
      if (answer.NoStock === "Continue Shopping?") {
        purchaseItem();
      }
      if (answer.NoStock === "Leave") {
        connection.end();
      }
    });
}

function shopAgain() {
  inquirer
    .prompt({
      name: "shopAgain",
      type: "list",
      message: "Would you like to purchase anything else?",
      choices: ["Continue Shopping", "Leave"]
    })
    .then(function(answer) {
      if (answer.shopAgain === "Continue Shopping") {
        purchaseItem();
      }
      if (answer.shopAgain === "Leave") {
        connection.end();
      }
    });
}
