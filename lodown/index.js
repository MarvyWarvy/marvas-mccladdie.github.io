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
 * @param {Array}: Function takes in an array
 * @param {Number}: Function takes in a number
 * @return {Any value}: Function returns the first n elements from an array
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
 * @param {Array}: Function accepts  an array =
 * @param {Number}: Fuction accepts a number
 * @return {Any value}: Function returns the first n elements from an array
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

/**
 * indexOf: loops through and returns index of <array> that is the first occurance of <value>
 * @param {Array}: Function accepts an array
 * @param {Value}: Function accepts a value
 * @return {number}: Function returns the index of the value found. If no value is found then function returns -1.
 */

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    } return -1
}

module.exports.indexOf = indexOf

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * contains: loops through an array and true if <array> contains <value>
 * @param {Array}: Function accepts an array
 * @param {Value}: Function accepts a value
 * @return {boolean}: Function returns true if array contains value, false otherwise
 */

function contains(array, value) {
    let output = 0
    for (let i = 0; i < array.length; i++) {
        if (value) {
            (array[i] === value) ? output +=1 : output += 0
        }
    }
    if (output > 0) {
        return true
    } else {
        return false
    }
}

module.exports.contains = contains

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Unique: returns a new array of all elements from <array> with duplicates removed
 * @param {Array}: Function accepts an array
 * @return {Array}: Function returns a new array of all elements from input array with duplicates removed
 */

function unique(array) {
    return [...new Set(array)]
}

module.exports.unique = unique

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Filter: Loops through an <array> passing the arguments: element, it's index, array, to a test function. It will return a new array of elements for which
 *         calling the test function returned true
 * @param {Array}: Function accepts an array
 * @param {Function}: Function accepts a function
 * @return {Array}: Function returns a new array of elements
 */

function filter(array, func) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            newArr.push(array[i])
        }
    }
    return newArr
}

module.exports.filter = filter

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Reject: Accepts an array and a function. It calls the test function for each element in the input array passing the arguments: the element, it's index, array.
 *         It returns a new array of elements for which calling the input test function returned false
 * @param {Array}: Function accepts an array
 * @param {Function}: Function accepts a funcion
 * @return {Array}: Function returns a new array of elements
 */

function reject(array, func) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            newArr.push(array[i])
        }
    }
    return newArr
}

module.exports.reject = reject

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Partition: Loops through an <array> passing the arguments: element, it's index, array, to a test function. and returns an array made of two sub arrays.
 *            Returns an array of two sub arrays. One for which all the values that the test function returned something truthy and 
 *            the other for all the values the test function returned something falsy
 * @param {Array}: Function accepts an array
 * @param {Function}: Function accepts a function
 * @return {Array}: Function returns an array made of two sub arrays
 */

function partition(array, func) {
    let output = [[],[]]
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            output[0].push(array[i])
        } else {
            output[1].push(array[i])
        }
    }
    return output
}

module.exports.partition = partition

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Map: Calls function for each element in collection passing args, saves the return of each <function> call in new array, and returns new array
 * @param {Collection and a Function}: Function accepts a collection and a function
 * @return {Array}: Function returns a new array
 */

function map(collection, func) {
    let retVal = []
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            retVal.push(func(collection[i], i, collection)) 
        }
    }
    if (!Array.isArray(collection)) {
         for (let prop in collection) {
            retVal.push(func(collection[prop], prop, collection))
        }
    }
    return retVal
}

module.exports.map = map

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Pluck: Pluck accepts an array of objects and a property. It returns an array containing the value of the input property for every element in the input array
 * @param {Array}: Function accepts an array of objects and a property
 * @param {Property}: Function accpets a property
 * @return {Array}: Function returns a new array
 */

function pluck(array, prop) {
    let anon = function(){
        if (prop) {
            return array
        }
    }
    let catcher = []
    let output = _.map(array,anon)
        for (let key in array) {
             catcher[0] = output[key][0][prop] 
             catcher[1] = output[key][1][prop] 
             catcher[2] = output[key][2][prop]
        }
    return catcher
}

module.exports.pluck = pluck

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Every: Calls function for every element of collection based on if collection is an array or an object and returns a boolean
 * @param {Collection and a Function}: Function accepts a collection and a function
 * @return {Boolean}: Function returns a boolean
 */

function every(collection, func) {
    if (Array.isArray(collection)) {
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) { 
                    return false;
                } 
            }
        } else { 
            for (let i = 0; i < collection.length; i++) { 
                if (!func(collection[i], i, collection)) {
                    return false;
                }
            }
        }
    } else { 
    }  
    return true
}

module.exports.every = every

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Some: Calls function for every element of collection based on if collection is an array or an object and if the return value for calling
 *       function is true for at least one elements, it returns true
 * @param {Collection and a Function}: Function accepts a collection and a function
 * @return {Boolean}: Function returns either true or false
 */

function some(collection, func) {
    if (Array.isArray(collection)) {
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (collection[i]) { 
                    return true;
                } 
            }
        } else { 
            for (let i = 0; i < collection.length; i++) { 
                if (func(collection[i], i, collection)) {
                    return true
                } 
                
            }
        }
    } else { 
        return true
    }  
    return false
}

module.exports.some = some

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Reduce: Calls function for element in collection passing the args: previous result, element, index, and returns value of final function call
 * @param {Array, a Function, and a Seed}: Function accepts and array, a function, and a seed value. if no seed value, it will use the first value of collection
 *                                         as a seed and contine to the next element
 * @return {Value}: After last iteration function will return the return value of the final function call
 */

function reduce(array, func, seed) {
    let result;
    if (seed === undefined) { 
        result = array[0];  
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i)
        }
    } else {
        result = seed;
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i);
        }
    }
    return result
}

module.exports.reduce = reduce

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Extend: Accepts a baseline of two objects and potentially more objects. It copies the properties from object 2 to object 1. If more objects are passed in,
 *         it will copy their properties to object 1 as well, in the order in which they were passed in. It returns the updated object 1
 * @param {Object}: Function accepts an object
 * @param {Object}: Function accepts an object
 * @param {More Objects?}: Function should be able to accept more objects
 * @return {Object}: Function should return an updated object 1
 */

function extend(obj1, obj2, more) {
    let newObj = Object.assign(obj1, obj2, more)
    return newObj
}

module.exports.extend = extend