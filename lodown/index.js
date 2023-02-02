'use strict';


// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 
 * identity: Returns input value unchanged.
 * 
 * @param {Any value}: Function takes in any value
 * @return {Any value}: Function return input value unchanged
 * 
 */

function identity(value) {
    //return value unchanged
    return value;
}

module.exports.identity = identity

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * typeOf : return type of input value as string
 * @param {Any value}: Function takes in any value 
 * @param {string}: return type of value as string
 */

function typeOf(value) {
    if (Array.isArray(value)) {
        return "array"
    } else if ( value === null) {
        return "null"
    } else {
        return typeof value
    }

}

module.exports.typeOf = typeOf

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * first: loops over an array and potentially returns the first <number> items of <array>
 * 
 * @param {Array and a Number}: Function takes in an array and a number
 * @return {returns the first <number> items of <array>}: Function returns the first <number> items of <array>
 * 
 */

function first(array, number) {
    let output = []
    if (!(Array.isArray(array))) {
        return []
    } else if (number < 0) {
        return []
    } else if (number > array.length ) {
        return array
    } else if (!number || typeof number !== "number") {
        return array[0]
    } else {
        for (let i = 0; i < number; i++) {
            output.push(array[i])
        }
        return output
    }
};

module.exports.first = first

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * last: loops over an array and returns the last <number> items of <array>
 * 
 * @param {Array and a Number}: Function takes in an array an a number
 * @return {returns the last <number> items of <array>}: Function returns <number> items of <array>
 */

function last(array, number) {
    let output = []
    if (!(Array.isArray(array))) {
        return []
    } else if (number < 0) {
        return []
    } else if (number > array.length ) {
        return array
    } else if (!number || typeof number !== "number") {
        return array[array.length - 1]
    } else {
        for (let i = number - 1; i < array.length; i++) {
            output.push(array[i])
        }
        return output
    }
};

module.exports.last = last

//////////////////////////////////////////////////////////////////////////////////////////////////////////