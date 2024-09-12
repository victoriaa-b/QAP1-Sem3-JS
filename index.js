#!/usr/bin/env node

const process = require("node:process");
const args = process.argv.slice(2);
let length = 8; // Password can only be max 8 chars

let includesNums = false;
let includesSpecial = false;
let includesUpperCase = false;

function passwordGenerate(length) {
  // function to generate a random password
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length); //
    password += chars[randomIndex];
  }

  return password;
}

function printHelpMessage() {
  // Help message for the users if needed
  console.log(`
    Usage:

        --length=8    Set the password length (8 is the default characters)
        --help, -h    Displays the help message `);
}

// need to check for length
args.forEach((args) => {
  if (args.startsWith("--length")) {
    const len = arg.split("=")[1];
    if (!isNaN(len) && parseInt(len, 10) > 0) {
      // double check
      length = parseInt(len, 10);
    } else {
      console.error("Error! Invaild length. Please provide a length of 1-9.");
      process.exit(1);
    }
  }
});

// need to check for help
if (args.includes("--help") || args.includes("-h")) {
  // works
  // gives user options for help
  printHelpMessage();
}

// Display the password
const password = passwordGenerate(length);
console.log(`Generated password: ${password}`);
