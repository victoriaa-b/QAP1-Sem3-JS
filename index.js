#!/usr/bin/env node

const process = require("node:process");
const args = process.argv.slice(2);
const length = 8; // Password can only be max 8 chars

function passwordGenerate(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

const password = passwordGenerate(length);
console.log(`Generated password: ${password}`);
