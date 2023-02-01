// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
//
'use strict';


var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


_.identity = function(value) {
    //return value unchanged
    return value;
};




/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


_.typeOf = function(val) {
    if (Array.isArray(val)) {
        return "array"
    } else if ( val === null) {
        return "null"
    } else {
        return typeof val
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num) {
    let output = []
    //test to see if array
    if (!(Array.isArray(array))) {
        return []

        //check to see if number is negative
    } else if (num < 0) {
        return []

        //check to see if input number is greater than array length
    } else if (num > array.length ) {
        return array

        //check to see if input number is empty or not a number
    } else if (!num || typeof num !== "number") {
        return array[0]

        //
    } else {
        for (let i = 0; i < num; i++) {
            output.push(array[i])
        }
        return output
    }

    
    
};



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


_.last = function(array, num) {
    let output = []
    //test to see if array
    if (!(Array.isArray(array))) {
        return []

        //check to see if number is negative
    } else if (num < 0) {
        return []

        //check to see if input number is greater than array length
    } else if (num > array.length ) {
        return array

        //check to see if input number is empty or not a number
    } else if (!num || typeof num !== "number") {
        return array[array.length - 1]

        //
    } else {
        for (let i = num - 1; i < array.length; i++) {
            output.push(array[i])
        }
        return output
    }

    
    
};



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


_.indexOf = function(array, value) {
    //For loop to iterate and check if any indeces match value
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i
        }
    } return -1
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    //see if array contains value with for loop
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
    




//_.contains = function(array, value) {
    
//     for (let i = 0; i < array.length; i++) {
//         array[i] === value ?  return true :  false
//     }
// }


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


_.each = function(collection, func) {
    // determine if collection is an array
    if (Array.isArray(collection)) {
        //iterate using a for loop
        for (let i = 0; i < collection.length; i++) {
            //call funcition on each element passinng the element, its index, and the collection itself
            func(collection[i], i, collection)
        }
    } else { //else its an object
        //iterat using a for in loop
        for (let key in collection) {
            //invoke function on current value, key, and collection
            func(collection[key], key, collection);
        }
    }
};




/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/



_.unique = function(array) {

    return [...new Set(array)]

//     let newArr = []
//     let output = []
//     for (let i = 0; i < array.length; i++) {
//          output.push(_.indexOf(array, array[i]))
//          newArr.push(array[output[i]])
//     }
//     return newArr
}




// _.unique = function(array) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == array[i + 1]) {
//             newArr.push(_.indexOf(array, i + 1))
//         }
//     }
//     //newArr.push(_.indexOf(array, 1))
//     return newArr
// }

// _.unique = function(array) {
//     let newArr = [];
//     _.indexOf(array)
// }


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


_.filter = function(array, func) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            newArr.push(array[i])
        }
    }
    return newArr
}



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            newArr.push(array[i])
        }
    }
    return newArr
}



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    let output = [[],[]]
    //for loop for each element in array
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            output[0].push(array[i])
        } else {
            output[1].push(array[i])
        }
    }
    return output
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func) {
    let retVal = []
    // for loop to run each element in collection

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
//retVal.push(func(collection.hasOwnProperty(prop)), collection[prop], collection)
    return retVal
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = function(array, prop) {
    let anon = function(){
        if (prop) {
            
            //why when i add which index (array[0] they all become the same one)
            return array
            // for (let i = 0; i < array.length; i++) {
            //     let string = array[2][prop]
            //     return string
            // }
            
            // for (let key in array) {
            //     return array[key]
            // }
            
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
//     let newArr = []
    
//     //iterate over array
//     //they're giving us an key (prop)
//     let anon = function() {fdfd
//         for (let i = 0; i < array.length; i++) {
//             for (let value in array[i]) {
//                 if (value === prop) {
//                     //newArr.push(array[i][value])
//                     let output = (newArr.push(value) -1)
//                     return output
//                 }
//             }
//         }
//     }
    

     
//     let order = _.map(array, anon)
//     for (let i = 0; i < order.length; i++) {
//         for (let value in array) {}
//         return array.name[0]
//     }
//     //return order
//     // for (let i = 0; i < array.length; i++) {
//     //     return newArr
//     // }
//     //return newArr

    



// }


// let anon = function() {
//     for (let i = 0; i < array.length; i++) {
//         for (let value in array[i]) {
//             // if (Object.keys(array[i]) === prop) {
//             //     return Object.values(array[i])
//             // }

//             if (array[i].hasOwnProperty(prop) === prop) {
//                  newArr.push(array[i](value))
//             }
//         }
//     }
// }



// return _.map(array, anon)




    // for (let i = 0; i < array.length; i++) {
    //     //pass items to _.map somehow
    //     for(let key in array) {
    //         if (array[i].hasOwnProperty(key) === prop) {
    //             newArr.push(prop)
    //         }
    //     }
        
    //     //_.map(array[i], )
    // }
    // return newArr
//}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
    _.every([1,2,3]) -> true
    _.every([null, undefined, 3]) -> false
*/


_.every = function(collection, func) {
    //let collection = [1,2,3]
    //let func //undefined
    //determine if collection is array
    if (Array.isArray(collection)) {
        //determine if no function passed in
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) { // determine if collection[i] is truthy
                    return false;
                } 
            }
        } else { //else function was passed in
            for (let i = 0; i < collection.length; i++) { //determine if result of invoking function is truthy
                if (!func(collection[i], i, collection)) {
                    return false;
                }
            }
        }
    } else { // else its an object
        //determine if no finction pass in

        //else function was passsed in
    }  
    return true
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    //let collection = [1,2,3]
    //let func //undefined
    //determine if collection is array
    let noneTrue = 0
    if (Array.isArray(collection)) {
        //determine if no function passed in
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) { // determine fi collection[i] is truthy
                    return false;
                } 
            }
        } else { //else function was passed in
            for (let i = 0; i < collection.length; i++) { //determine if result of invoking function is truthy
                if (!func(collection[i], i, collection)) {
                    noneTrue++
                    return true;
                } else if (func(collection[i], i, collection)) {
                    return false
                }

                //its somewhere in here that dictates it
                return true
                return false
                
            }
        }
    } else {
        for (let i = 0; i < collection.length; i++) {
            for (let key in collection) {
                func(collection[key], key, collection)
                
            }
        }
        
    }
    if (noneTrue === 0) {
        return true
    }

}


// if (!Array.isArray(collection)) {
//     for (let prop in collection) {
//        retVal.push(func(collection[prop], prop, collection))

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index

*   2) Use the return value of <function> as the "previous result"
*      for the next iteration

*   3) On the very first iteration, use <seed> as the "previous result"

*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element

*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


_.reduce = function(array, func, seed) {

    let result;

    //determine if no see
    if (seed === undefined) { //determines if seed is not truthy
        result = array[0];  
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i)
        }
    } else {//else there is a seed
        result = seed;
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i);
        }
    }

    return result
    
}
    
    
    
    
    
    
    
    
    //just a for loop since theres no stipulation of its an array or object do dis
    
    //invoke reduce
    //seed or no seed? YES!
    //result = 0
    //iterate
        // 0 
            //result = func(result, currentVal, currentIndex, collection)
                             //0.     1.           0            [1,2,3] whatever

            //result = 1
        // 1
            // result = 3

    //return result



    
    
    // let output
    // for (let i = 0; i < array.length; i++) {
    //     //first iteration so we seed as previous result
    //     //also set the return of the function to a var to use
    //     // second
    //     //if i === 0
    //     output = func(seed, array[i], i)

    //     //no see given so we use first element of collection as seed
    //     if(!seed) {
    //         func(array[0], array[i], i)
        

    //     // use the return of the function as previous result
    //     //third ???
    //     } else {
    //         func(output, array[i], i)
    //     }
    //     //first
    //     if (i === array.length - 1) {
    //         return func(output, array[i], i)
    //     }
    // }
//}
//else if(i === array.length - 1) {
    //return func(output, array[array.lenght - 1], i)


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function(obj1, obj2, more) {
    //let newObj = {...obj1, ...obj2, ...more}
    let newObj = Object.assign(obj1, obj2, more)
    return newObj

}




//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
