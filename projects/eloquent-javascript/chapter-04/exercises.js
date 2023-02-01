////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function range(start, end, step) {
  // If no optional step, set step to 1.
  if (step == null) step = 1;
  

  // Initialize the array that will eventually be returned.
  var array = [];

  if (start === end) {
    return array
  }

  // If the range is increasing, continue pushing i to the    
  // array and incrementing i by step until i is greater than 
  // end, then stop.
  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  // If the range is decreasing, continue pushing i to the 
  // array until i is less than end, then stop.
  // Remember i will get smaller because step is negative.
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  // Return the result
  return array;
}



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, summ=0) {

    //Base
  if (array.length === 0) {
    return 0
  }

  if (array.length === 1){
    summ += array[0]
    return summ
  }

  //Recursion
  summ += array[0]
  return sum(array.slice(1), summ)

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var reverseArray = function(array, newArray=[]) {

  //base
  if(array.length === 0) {
    return newArray
  }

  //recursion
  if(array[0] !== " "){
    newArray.unshift(array[0])
  }
  

  return reverseArray(array.slice(1), newArray)
  
};

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {

  //base
  // if (arr.length === 0) {
  //   for (let i = 0; i < holder.length; i++) {
  //     arr[i] = holder[i]
  //   }
  //   //arr = holder
  //   return arr
  // }

  // //recur
  // holder.push(arr[arr.length - 1])

  // return reverseArrayInPlace(arr.slice(0, arr.length-1), holder)

  
    for (var i = 0; i<array.length; i+=2) {
        array.unshift(array[i]);
    }
    array.splice(Math.floor(array.length/2), array.length/2);
    return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;

  for (let i = array.length - 1; i >= 0; i--) {
    rest = { value: array[i], rest: rest };
  }
  return rest
  
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]) {
  //base
  if (list === null) { 
    return output
  }
  
  //recur

  output.push(list.value);
  //return function call
  return listToArray(list.rest, output)
  
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list, newList=[]) {

  //Turn list into Array and unshift our element
  let listToArray = function(list, output=[]) {
  //base
    if (list === null) {
    output.unshift(element)
    return output
    }
  
  //recur

    output.push(list.value);
  //return function call
    return listToArray(list.rest, output)  
  }

  let prependedArray = listToArray(list)


  //Turn our unshifted array back into a list
  let arrayToList = function(array) {
    let rest = null;

    for (let i = array.length - 1; i >= 0; i--) {
      rest = { value: array[i], rest: rest };
    }
    return rest
  
    }

  prependedList = arrayToList(prependedArray)

  return prependedList
  

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth (list, num) {
  let listToArr = function(list, output=[]) {
  //base
    if (list === null) { 
    return output
    }
  
  //recur

    output.push(list.value);
  //return function call
    return listToArr(list.rest, output)
  
  }
  let arr = listToArr(list)

  return arr[num]

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Super fucking hard?
function deepEqual(x, y) {
  if (typeof x !== "object" && typeof y !== "object") {
    return x === y;
  }
  if (typeof x !== "object" || typeof y !== "object") {
    return false;
  }

  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);

  if (xKeys.length !== yKeys.length) {
    return false
  }

  for (let i = 0; i < xKeys.length; i++) {
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])) {
      return false;
    }
  }
  return true;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
