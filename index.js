function capitalize(string) {
  if (typeof string != "string") {
    return "Error";
  }
  const array = string.split("");
  array[0] = array[0].toUpperCase();
  string = array.join("");
  return string;
}

function reverseString(string) {
  if (typeof string != "string") {
    return "Error";
  }
  const arr = string.split("");
  arr.reverse();
  string = arr.join("");
  return string;
}

const calculator = {
  add(a, b) {
    if (typeof a != "number" || typeof b != "number") {
      return undefined;
    }
    return a + b;
  },

  subtract(a, b) {
    if (typeof a != "number" || typeof b != "number") {
      return undefined;
    }
    return a - b;
  },

  divide(a, b) {
    if (b == 0) {
      return "Error";
    } else if (typeof a != "number" || typeof b != "number") {
      return undefined;
    }
    return a / b;
  },

  multiply(a, b) {
    if (typeof a != "number" || typeof b != "number") {
      return undefined;
    }
    return a * b;
  },
};

function caesarCipher(string, shift) {
  if (shift < 0 || typeof shift != "number") {
    return "Error";
  } else if (typeof string != "string") {
    return undefined;
  }
  const lowercaseAlphabet = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };

  const uppercaseAlphabet = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
  };

  const lowercase = new RegExp("[a-z]"),
    uppercase = new RegExp("[A-Z]"),
    array = string.split("");
  let letter;
  for (let i = 0; i < array.length; i++) {
    letter = array[i];
    if (lowercase.test(letter)) {
      for (let n of Object.keys(lowercaseAlphabet)) {
        if (lowercaseAlphabet[n] == letter) {
          if (Number(n) + shift > 26) {
            letter = lowercaseAlphabet[Number(n) + shift - 26];
          } else {
            letter = lowercaseAlphabet[Number(n) + shift];
          }
          break;
        }
      }
    } else {
      for (let n of Object.keys(uppercaseAlphabet)) {
        if (uppercaseAlphabet[n] == letter) {
          if (Number(n) + shift > 26) {
            letter = uppercaseAlphabet[Number(n) + shift - 26];
          } else {
            letter = uppercaseAlphabet[Number(n) + shift];
          }
          break;
        }
      }
    }
    array[i] = letter;
  }
  return array.join("");
}

function analyzeArray(arr) {
  let minimum = arr[0],
    maximum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      return "Error";
    }
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  const avg =
    arr.reduce((sum, next) => {
      sum += next;
      return sum;
    }, 0) / arr.length;
  const len = arr.length;

  return { average: avg, min: minimum, max: maximum, length: len };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
