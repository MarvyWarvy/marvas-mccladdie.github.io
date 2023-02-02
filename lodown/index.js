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

/**
 * indexOf: loops through and returns index of <array> that is the first occurance of <value>
 * @param {Array and a Value}: Function accepts an array and a value
 * @return {number}: Function returns a number
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
 * @param {Array and a Value}: Function accepts an array and a value
 * @return {boolean}: Function returns true or false
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
 * @return {Array}: Function returns a new array
 */

function unique(array) {

    return [...new Set(array)]
}

module.exports.unique = unique

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Filter: Loops through an <array> passing the arguments: element, it's index, <array> and will return a new array of elements
 *         for which calling the function returned true
 * @param {Array and a Function}: Function accepts an array and a function
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
 * Partition: calls a function for each element in <array> passing the args: element, key, <array>, and returns an array made of two sub arrays
 * @param {Array and a Function}: Function accepts an array and a function
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
 * Pluck: Returns an array containing the value of <property> for every element in <array>
 * @param {Array of objects and a property}: Function accepts an array of objects and a property
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