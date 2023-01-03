// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //

    //function that return length of input string
    return string.length

   

    // YOUR CODE ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    //function that returns input in lowercase
    return string.toLowerCase()


    // YOUR CODE ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    //function that returns input in uppercase
    return string.toUpperCase()


    // YOUR CODE ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //function that returns string to dash case
    var newString = (string.replace(" ", "-").toLowerCase())
    return newString

    // YOUR CODE ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
// if input string and character match, return true
// else false

function beginsWith(string, char) {
    if (string[0] === char[0]) {
        return true
    }else{
        return false
    }
  }

    // YOUR CODE ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 * 
 * if the last character of the string is === to the single character, return true
 * 
 * 
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    var finalChar = string[string.length - 1]
    if (finalChar === char) {
        console.log("true")
        return true
    }else {
        console.log("false")
        return false
    }

    // YOUR CODE ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 * 
 * concatenate the two strings into one
 * 
 * 
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var concatted = string1.concat(string2)
    return concatted


    // YOUR CODE ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    joinedStrings = args.join("")
    return joinedStrings

    // YOUR CODE ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 * 
 * determine which lenghth is longer with length
 * print the longer one
 * 
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length) {
        return stringOne
    } else {
        return stringTwo
      }
     


    // YOUR CODE ABOVE HERE //
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 * 
 * make list of a - z
 * use length to get 0 - 25 for each letter
 * take stringone[0]
 * if stringOne[0] 
 * 
 * 
 */


function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var letter1 = stringOne[0];
    var letter1Position = alphabet.indexOf(letter1)+1;
    var letter2 = stringTwo[0];
    var letter2Position = alphabet.indexOf(letter2)+1;
  
    if (letter1Position < letter2Position) {
        return 1
    } else if (letter1Position > letter2Position) {
        return -1
    } else if (letter1Position === letter2Position) {
        return 0
    }
//console.log(letter1Position)
//console.log(letter2Position)


    // YOUR CODE ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var letter1 = stringOne[0];
    var letter1Position = alphabet.indexOf(letter1)+1;
    var letter2 = stringTwo[0];
    var letter2Position = alphabet.indexOf(letter2)+1;
  
    
    if (letter1Position > letter2Position) {
      return 1
    } else if (letter1Position < letter2Position) {
      return -1
    } else if (letter1Position === letter2Position) {
      return 0
    }   


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
