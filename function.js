import { functionExpression } from "@babel/types";

const firstCaps = function (word) {
  return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
};

const reverseString = function (word) {
  return word.split("").reverse().join("");
};

const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  divide: function (x, y) {
    return x / y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

const caesarCipher = function (phrase, shift) {
  const alphabet = [
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
  ];
  let arr = phrase.split("");
  let newArr = [];
  arr.forEach(function (char) {
    let newChar = char.toLowerCase();
    let test = alphabet.indexOf(newChar);
    if (newChar == " " || newChar == ".") {
      newArr.push(newChar);
    } else {
      newChar = alphabet[(test += shift)];
      newArr.push(newChar);
    }
  });
  return newArr.join("");
};

const analyzeArray = (arr) => {
  let obj = {
    average: null,
    min: null,
    max: null,
    length: null,
  };
  obj.average = arr.reduce((prev, cur) => (cur += prev), 0) / arr.length;
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;
  return obj;
};

export { firstCaps, reverseString, calculator, caesarCipher, analyzeArray };
