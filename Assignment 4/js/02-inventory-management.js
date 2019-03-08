/*eslint-env browser*/
// jshint esversion: 6


// GLOBAL VARIABLES
var mySku;
var myQuantity;

var inventory = [];
inventory[0] = [1000, "Hat", 14.99, 12];
inventory[1] = [2000, "Jacket", 49.99, 5];
inventory[2] = [3000, "Shirt", 15.99, 10];
inventory[3] = [4000, "Jeans", 39.99, 22];
inventory[4] = [5000, "Socks", 9.99, 36];


// DISPLAY THE MENU
function displayMenu() {
  "use strict";
  window.console.log("Welcome to the Inventory Management System");
  window.console.log("");
  window.console.log("COMMAND MENU");
  window.console.log("view - View all products.");
  window.console.log("update - Update inventory stock");
  window.console.log("exit - Exit the program");
  window.console.log("");
}


// DISPLAY THE INVENTORY
function view() {
  "use strict";
  window.console.log("Here is a list of all inventory items: sku, name, cost, and number in stock: ");
  window.console.log(inventory[0][0] + " " + inventory[0][1] + " " + "$" + inventory[0][2] + " " + "(" + inventory[0][3] + ")");
  window.console.log(inventory[1][0] + " " + inventory[1][1] + " " + "$" + inventory[1][2] + " " + "(" + inventory[1][3] + ")");
  window.console.log(inventory[2][0] + " " + inventory[2][1] + " " + "$" + inventory[2][2] + " " + "(" + inventory[2][3] + ")");
  window.console.log(inventory[3][0] + " " + inventory[3][1] + " " + "$" + inventory[3][2] + " " + "(" + inventory[3][3] + ")");
  window.console.log(inventory[4][0] + " " + inventory[4][1] + " " + "$" + inventory[4][2] + " " + "(" + inventory[4][3] + ")");
} 


// UPDATE THE SKU (DOES NOT WORK)
function update() {
  "use strict";
  
  function checkSKU() {
    mySku = prompt("Enter the correct SKU:\n Enter 1000 for hats\n Enter 2000 for jackets\n Enter 3000 for shirts\n Enter 4000 for jeans\n Enter 5000 for socks");

    window.console.log(mySku);

    // ATTEMPT TO CHECK FOR SKU ACCURACY (DOES NOT WORK)
    // for (var i = 0; i < inventory.length; i++) {
    // if (inventory[i] === mySku) {
    //   checkQuantity();
    // }
    // else {
    //   alert("That is not a valid SKU");
    //   checkSKU();
    // }
  }

  function checkQuantity() {
    myQuantity = prompt("Enter the updated quantity.");

    if (myQuantity < 0 || myQuantity === null) {
      alert("That is not a valid number. Enter a valid number.");
      checkQuantity();
    }
    else {
      addQuantity();
    }
  }
  
  function addQuantity() {
    if (mySku === 1000) {
      inventory[0][3] = myQuantity;
      window.console.log(inventory[0][0] + " " + inventory[0][1] + " " + "$" + inventory[0][2] + " " + "(" + inventory[0][3] + ")");
    }
    else if 
        (mySku === 2000) {
        inventory[0][3] = myQuantity;
        window.console.log(inventory[0][0] + " " + inventory[0][1] + " " + "$" + inventory[0][2] + " " + "(" + inventory[1][3] + ")");
      }
   }
  
checkSKU();
checkQuantity();
addQuantity();
} 


function main() {


  var inventory, command;

  displayMenu();

while (true) {
  command = window.prompt("Enter command");
  if (command !== null) {
    if (command === "view") {
      view(inventory);
    }
    else if (command === "update") {
      update(inventory);
    }
    else if (command === "exit") {
      break;
    }
    else {
      window.alert("This is not a valid command.\nSelect 'view', 'update', or 'exit'");
    }
  }
  else {
    break;
  }
  }
}   

window.console.log("Program terminated.");

main();



// MY ATTEMPT TO PUT THE PROMPT INFO INTO LOCAL STORAGE (DOES NOT WORK)
// localStorage.sku = prompt("Enter the SKU of the item to be updated.");
// window.console.log(localStorage.sku); // test to see if prompt goes to localStorage

// localStorage.quantity = prompt("Enter the new stock quantity.");
// window.console.log(localStorage.quantity); // test to see if prompt goes to localStorage

// function checkIndex(myIndex) {
//   if (myIndex === 1000) {
//     return myIndex;
//   }
// }

// function myCheck() {
//   window.console.log(inventory.findIndex(checkIndex));
// } 






