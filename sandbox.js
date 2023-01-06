const string = "Hello";

const reverseString = string.split("").reverse().join("");

reverseString;

const caesarCipher = function (shift, phrase) {
  const alphabet = [
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
  ];
  let arr = phrase.split("");
  const cipher = function (char) {
    if (char != " " || char != ".") {
      char = alphabet[(char += shift)];
    }
  };
  arr.forEach(cipher(char));
  return arr.join("");
};

const analyzeArray = (arr) => {
  let obj = {
    average: null,
    min: null,
    max: null,
    length: null,
  };
  obj.average = arr.reduce((prev, cur) => (cur += prev), 0);
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;
  return obj;
};

analyzeArray([1, 2, 3]);
