#!/usr/bin/env node


const process = require("node:process");
const args = process.argv.slice(2);
const length = 8; // default length

// The Function to generate a random password
function passwordGenerate(length, chars) {
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length); //
    password += chars[randomIndex];
  }
  return password;
}

// A function to construct a set of chars 
function charSet() {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  if (includesNums) chars += "0123456789";
  if (includesSpecial) chars += "!@#$%^&*()-=+}{[];:,.?";
  if (includesUpperCase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return chars;
}

  // Help message for the users if needed
function printHelpMessage() {

  console.log(`
    Usage:

        --length=8    Set the password length (8 is the default characters)
        --help, -h    Displays the help message 
        --numbers     Allows numbers in the password
        --special     Allow special characters in the password
        --uppercase   Allow uppercase letters in the password`);
}

// Checking for length and vaild numbers
args.forEach((args) => {
  if (args.startsWith("--length")) {
    const len = arg.split("=")[1];
    if (!isNaN(len) && parseInt(len, 10) >= 8) {
      // at LEAST 8
      // double check
      length = parseInt(len, 10);
    } else {
      console.error("Error! Invaild length. Please provide a length of 1-9.");
      process.exit(1); //exit the program
    }
   // Checking for flags
  } else if (arg === "--numbers") {
    includesNums = true;
  } else if (arg === "--special") {
    includesSpecial = true;
  } else if (arg === "--uppercase") {
    includesUpperCase = true;
  } else if (arg === "--help" || arg === "-h") {
    printHelpMessage();
    process.exit(0);
  } else {
    console.error("Error! Invaild argument: " + arg);
    printHelpMessage();
    process.exit(1); //exits the program after the printHelpMessage is display 
  }
});

// Display the password
const charOptions = charSet();
const password = passwordGenerate(length, charOptions);

console.log(`Generated password: ${password}`);
