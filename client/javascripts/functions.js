// jshint esversion: 6

// revWords1
// Uses for loop and arrow syntax.
let revWords1 = s => {
  var wordList = s.split(" ");
  var outString = "";
  for (var i = 0; i < wordList.length; i++) {
    console.log("i:" + i + " " + wordList[i]);
    for (var j = wordList[i].length - 1; j >= 0; j--) {
      console.log("j:" + j + " " + wordList[i][j]);
      outString = outString + wordList[i][j];
    }
    if (i != wordList.length - 1) {
      outString = outString + " ";
    }
  }
  console.log(outString);
  return outString;
};

//revWords2
// Uses Array.forEach method.
var finalString = "";
let revWords2 = s => {
  var userWords = s.split(" ");
  userWords.forEach(wordReversifier);
  // Strip out trailing space.
  finalString = finalString.substring(0, finalString.length - 1);
  console.log(finalString);
  return finalString;
};
let wordReversifier = word => {
  var outString = "";
  //console.log("i:" + i + " " + wordList[i]);
  for (var j = word.length - 1; j >= 0; j--) {
    //  console.log("j:" + j + " " + wordList[i][j]);
    outString = outString + word[j];
    if (j == 0) {
      outString += " ";
    }
  }
  finalString += outString;
  return;
};

//revWords3
// Uses for..of loop and arrow syntax.
let revWords3 = s => {
  var wordList = s.split(" ");
  var outString = "";
  var word;
  var letter;
  var i = 0;
  for (word of wordList) {
    console.log("Word: " + word);
    for (var j = word.length - 1; j >= 0; j--) {
      console.log("j:" + j + " " + word[j]);
      outString = outString + word[j];
    }
    if (i != wordList.length - 1) {
      outString = outString + " ";
    }
    i++;
  }
  console.log(outString);
  return outString;
};


// Extra credit
let containsDuplicates = s => {
  let charCount = new Array(26).fill(0);
  console.log(s);
  for (let i in s) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    console.log(code);
    console.log("Letter: " + s[i]);
    charCount[code]++;
  }
  for (let j in charCount) {
    if (charCount[j] > 1) {
      console.log("Location: " + j);
      console.log("True");
      for (var k = 0, len = charCount.length; k < len; k++) {
        console.log("Location: " + k + "  Contents: " + charCount[k]);
      }
      return true;
    }
  }
  console.log("False");
  return false;
};


// This code doesn't work.  Apparently, it won't look at the last element in the string.  Why not?
// Removing a for..in loop and changing it to a for loop seems to have fixed it.  Why?  (Test string "shoes")
/*
let containsDuplicates = s => {
  let charCount = new Array(26).fill(0);
    console.log(s);
  for (let i in s) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    console.log(code);
     console.log("Letter: " + s[i]);
    if (charCount[code] > 0) {
      console.log("Count: " + charCount[code]);
      console.log("True");
      return true;
    } else {
      charCount[i]++;
    }
  }
  console.log("Count: " + charCount[code]);
  console.log("False");
  return false;
};
*/
