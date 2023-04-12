"use strict";

/**
 * Characters that make up the password
 */
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

/**
 * Loads random passwords into screen fields
 * Generates a random password of passwordLenght characters
 */
function getPassword() {
  const allFields = document.querySelectorAll(".field");
  allFields.forEach((field) => (field.textContent = generatePassword()));
}

/**
 * Generates a random password of "passwordLenght" characters
 */
function generatePassword() {
  const passwordLength = 15;
  let pwd = "";
  for (let i = 0; i < passwordLength; i++) {
    pwd += getRandomChar();
  }
  return pwd;
}

/**
 * Returns a random character drawn from the array characters
 */
function getRandomChar() {
  let idx = Math.floor(Math.random() * characters.length);
  return characters[idx];
}
