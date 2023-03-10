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

const passwordLength = 15;

/**
 * HTML Elements
 */
let pwd1El = document.getElementById("pwd1-el");
let pwd2El = document.getElementById("pwd2-el");

/**
 * Loads random passwords into screen fields
 * Generates a random password of passwordLenght characters
 */
function getPassword() {
  pwd1El.textContent = generatePassword();
  pwd2El.textContent = generatePassword();
}

/**
 * Generates a random password of "passwordLenght" characters
 */
function generatePassword() {
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
