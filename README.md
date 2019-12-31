# Bamazon

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Bamazon</h3>
    <a href="https://github.com/MateosDev/Bamazon"><strong>Documentation and Repo Link</strong></a>
    <br />
    
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Organization](#Organization)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

This app is meant to simulate a simplified purchasing window and a product management window using node with user inputs being guided by Inquirer prompts.

### Built With

- [Node](https://nodejs.org/en/)
- [Node Package - DotEnv](https://www.npmjs.com/package/dotenv)
- [Node Package - mysql](https://www.npmjs.com/package/mysql)
- [Node Package - Inquirer](https://www.npmjs.com/package/inquirer)
- [othneildrew - Best README Template](https://github.com/othneildrew/Best-README-Template)

<!-- Organization -->

## Organization

Requires are located at the top of the bamazonCustomer.js and bamazonManager.js files along with global variables.

In bamazonCustomer.js there are four primary functions that do the following. Display a console.table of products that displays item id's, names, and price. Users go through a set of inquirer prompts to attempt to purchase items based on their id's and request to buy a specified quantity. At which time the app will check the database to see if there is enough stock available. If a purchase completes the user has the oportunity to keep shopping or leave. If a purchase fails the user also has the option to keep shopping or leave.

In bamazonManager.js functions are called through a switch case wrapped into a function for node logging. Users can do the following --
`View Products for Sale`
`View Low Inventory`
`Add to Inventory`
`Add New Product`

These are managed by starting the program and using the up/down arrow keys to navigate the inquirer prompts and using user input when requested by the prompts.

<!-- GETTING STARTED -->

## Getting Started

Follow the instructions below then navigate to [Usage](#usage) & [Commands](#commands).

### Installation

1. Clone the repo

```sh
https://github.com/MateosDev/Bamazon.git
```

2. Install NPM packages

```sh
npm install
```

3. Create an `.env` to hide your own mysql-database-root-password/mysql-database-config you will need to run this app.

```sh
# MysqlKeys

MYSQLKEYS=YourPassHere
```

<!-- USAGE EXAMPLES -->

## Usage

To use Bamazon Customer with node run `node bamazonCustomer.js` in a node compatible terminal.

To use Bamazon Mangager with node run `node bamazonManager.js` in a node compatible terminal.

### Commands

| App Command  | Short Description                                                                 |
| ------------ | --------------------------------------------------------------------------------- |
| `Keyboard`   | Use keyboard as input for item Id's names and product quantities product amounts. |
| `Arrow Keys` | Use Arrow Keys to navigate inquirer prompts.                                      |
| `CTRL + C`   | Will allow you to close out of a node process. Use if stuck.                      |

#### `BamazonCustomer`

Running BamazonCustomer.js will display a list of items in a table complete with ID, product name, and prices.

The app will use Inquirer to prompt the user to select an item ID of the item they would like to purchase. The user will then select the amount of the item they would like to purchase.

If there is an adequate quantity in stock the purchase will process and deduct the stock number from the mysql Database where the item information is housed. It will then return a Line Item Transaction console log that will display how many of an item was purchased and the total price.






#### `BamazonManager`



Running BamazonManager.js and selecting `View Products for Sale` will display a list of items in a table complete with ID, product name, department name, prices, and stock quantities.



Selecting `View Low Inventory` will display all stocked items that have less than 5 in stock.



Selecting `Add to Inventory` will allow a user to resupply whatever ID number with whatever amount number you type into the prompt.



Selecting `Add New Product` will allow a user to provide a product name, department name, prices, and stock quantity. Then display an updated table with information pulled form the database.



If there is an adequate quantity in stock the purchase will process and deduct the stock number from the mysql Database where the item information is housed. It will then return a Line Item Transaction console log that will display how many of an item was purchased and the total price.

<!-- CONTACT -->

## Contact

Role Lead Developer for Bamazon - Oscar Mateos of MateosDev

Project Link: [https://github.com/MateosDev/Bamazon](https://github.com/MateosDev/Bamazon)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/MateosDev/Bamazon.svg?style=for-the-badge&logo=appveyor
[contributors-url]: https://github.com/MateosDev/Bamazon/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MateosDev/Bamazon.svg?style=for-the-badge&logo=appveyor
[forks-url]: https://github.com/MateosDev/Bamazon/network/members
[stars-shield]: https://img.shields.io/github/stars/MateosDev/Bamazon.svg?style=for-the-badge&logo=appveyor
[stars-url]: https://github.com/MateosDev/Bamazon/stargazers
[issues-shield]: https://img.shields.io/github/issues/MateosDev/Bamazon.svg?style=for-the-badge&logo=appveyor
[issues-url]: https://github.com/MateosDev/Bamazon/issues