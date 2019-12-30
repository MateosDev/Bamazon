// Global Requirements 

require("dotenv").config();
var keys = require("./keys.js");
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection(keys);