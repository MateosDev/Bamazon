console.log("The Keys to Bamazon Have Been Used");

module.exports = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQLKEYS,
  database: "bamazon_db"
};