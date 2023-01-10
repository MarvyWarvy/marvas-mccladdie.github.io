// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work? built in method to determine if something is an array
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value) === true) {
        return true
      } else {
        return false
      }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * need to see if value is an "instance" of the date object
 * 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof value === 'object' && !Array.isArray(value) && value !== null && (!(value instanceof Date))) {
        return true;
      } else {
        return false;          
      }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value)) {
      return true;
    } else if (typeof value === 'object' && !Array.isArray(value) && value !== null && !(value instanceof Date)) {
      return true;
    } else {
      return false;          
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string" //CHECK
 *    - "array"
 *    - "object"
 *    - "undefined" CHECK
 *    - "number" CHECK
 *    - "boolean" CHECK
 *    - "null"
 *    - "function" CHECK
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    var type = typeof value
    if (Array.isArray(value)) {
      type = "array"
      //console.log(type + "-" + typeof type);
      //console.log(typeof type)
      return type;
    } else if (type === "object" && value === null) {
      type = "null"
      //console.log(type + "-" + typeof type);
      return type;
    } else if (type === "object" && (value instanceof Date)) {
      type = "date"
      //console.log(type + "-" + typeof type);
      return type;
    } else {
      type = type.toString();
      //console.log(type + "-" + typeof type);
      return type;
    } 
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
