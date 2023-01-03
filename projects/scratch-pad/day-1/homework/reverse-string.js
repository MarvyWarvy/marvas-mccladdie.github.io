// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 * 
 * make a for loop that gets the length of the string starts at the final number
 *  substracts on every loop and prints the next character associated with that number
 * 
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    var reversed = []
    var inputLen = input.length - 1
    while (inputLen > -1) {
      reversed.push(input[inputLen])
      inputLen --
      if (inputLen === -1) {
        var reversedString = reversed.join("")
        return reversedString
      }
    }
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}