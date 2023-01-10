// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 * \
 * test = return true or false
 * 
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (x) {
        if (x > base) {
          console.log("true")
          return true
        } else {
          console.log("false")
          return false
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (x) {
        if (x < base) {
          console.log("true")
          return true
        } else {
          console.log("false")
          return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (string) {
        startsWith = startsWith.toLowerCase()
        string = string.toLowerCase()
          if (string.startsWith(startsWith)) {
            return true
          } else {
            return false
          }
      }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (string) {
        endsWith = endsWith.toLowerCase()
        string = string.toLowerCase()
          if (string.endsWith(endsWith)) {
            return true
          } else {
            return false
          }
      }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {// modify = function(){}
    // YOUR CODE BELOW HERE //
    //
    
    var output = [];
    for (var i = 0; i < strings.length; i++) {
      output.push(modify(strings[i]))
      // return strings
  }
  return output
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) { // modify = function(){}
    // YOUR CODE BELOW HERE //
    for (let i = 0; i < contacts.length; i++) {
      if (i !== contacts.length - 1 ) {
        fullNames += contacts[i].nameFirst.concat(" ").concat(contacts[i].nameLast.concat("\n"))
      } else {
        fullNames += contacts[i].nameFirst.concat(" ").concat(contacts[i].nameLast)
      }
    
    



     //pass strings to test then push the result to output
     
     // test if output indexes have been replaced with boolean value
    //  testedVars = test(strings)
    //   if (testedVars === true) {
    //     return true
    //     //testedVars === true
    //   } else {
    //     //testedVars === false
    //     return false
    //   }
 }   
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
