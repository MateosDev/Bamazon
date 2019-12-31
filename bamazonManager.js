//Global Requirements

require("dotenv").config();
var keys = require("./keys.js");
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection(keys);


//Initiate the Database Connection

connection.connect(function(err) {
  if (err) throw err;
  startManager();
});



// Manager Menu

function startManager() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "managerMenu",
        message: "Select a Manager Permission",
        choices: [
          "View Products for Sale",
          "View Low Inventory",
          "Add to Inventory",
          "Add New Product",
          "Exit"
        ]
      }
    ])
    .then(function(answer) {
      switch (answer.managerMenu) {
        case "View Products for Sale":
          viewProd();
          break;

        case "View Low Inventory":
          viewLow();
          break;

        case "Add to Inventory":
          viewInv();
          break;

        case "Add New Product":
          addNew();
          break;

        default:
          connection.end();
          break;
      }
    });
}

function viewProd() {
  connection.query(
    "SELECT id, product_name, department_name, price, stock_quantity FROM products",
    function(err, res) {
      if (err) {
        console.log(err);
      }
      for (let i = 0; i < res.length; i++) {
        res[i].price = res[i].price.toFixed(2);
      }
      console.log("\n");
      console.table(res);
      // console.table(transformed);
    }
  );
}

function viewLow() {
  connection.query("SELECT * FROM products WHERE stock_quantity < 5 ", function(
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
  });
}

function viewInv() {
  viewProd();
  inquirer
    .prompt([
      {
        type: "number",
        name: "id",
        message: "Type the ID of the product you want to restock?"
      },
      {
        type: "number",
        name: "stock_quantity",
        message: "Type the amount you would like to restock?"
      }
    ])
    .then(function(answer) {
      connection.query(
        "UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ? ",
        [answer.stock_quantity, answer.id],
        function(err) {
          if (err) {
            console.log(err);
          } else {
            viewProd();
          }

         
        }
      );
    });
}

function addNew() {
  viewProd();
  inquirer
    
    .prompt([
      {
        name: "product_name",
        message: "Type the name of the product you want to add."
      },
      {
        name: "department_name",
        message:
          "Type the department name of the product you would like to add."
      },
      {
        type: "number",
        name: "price",
        message: "Type the price of the product you want to add."
      },
      {
        type: "number",
        name: "stock_quantity",
        message: "How many of the item would you like to stock?"
      }
    ])
    .then(function(answer) {
      connection.query(
        "Insert INTO products SET ?",
        {
          product_name: answer.product_name,
          department_name: answer.department_name,
          price: answer.price,
          stock_quantity: answer.stock_quantity
        },
        function(err) {
          if (err) {
            console.log(err);
          } else {
            viewProd();
          }
        }
      );
    });
}