// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./marvas-mccladdie.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) { // return the numbe of male customers

    let males = _.filter(array, function(customer) {
        return customer.gender === "male"
    }); // [male, male, male]

   return males.length

};

var femaleCount = function(array) { //return number of the female customers

    let females = _.reduce(array, function(accumulator, current){

        //determine if current customer is female
        if (current.gender === "female") {
            accumulator += 1
        }

        return accumulator;

    }, 0);

    return females;

};

/**
 * invoke reduce
 *      result = 0
 *      for loop
 *          0
 *              result = func(0, {...}, 0)
 * 
 * 
 *      return result
 */

var oldestCustomer = function(array) {

    let oldest = array.reduce((person, age) => person.age > age.age ? person : age )
    for (let key in array) {
        if (oldest.age === array[key].age) {
            console.log(array[key].name)
            return array[key].name
        }
    }




    // let oldHagAge = _.reduce(array, function(accumulator, current){
    //     if (current.age > accumulator){
    //         accumulator += current.age
    //     }

    //     return accumulator;

    // });

    // for (let key in array) {
    //         if (oldHagAge === array[key].age) {
    //             return array[key].name
    //         }
    //     }

    // let oldest = _.reduce(array, function(accumulator, current){
    //     accumulator.age > current.age ? accumulator : current
    // })

    // for (let key in array) {
    //     if (oldest.age === array[key]) {
    //         return array[key].name
    //     }
    // }


    // let oldHagAge = _.reduce(array, function(accumulator, current){
    //     if (current.age > accumulator){
    //         accumulator += current.age
    //     }

    //     return accumulator;

    

    // });
    // let oldHagName = ""
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i].age === oldHagAge) {
    //         oldHagName = array[i].name
    //     }
    // }
    // return oldHagName


} //reduce // use the reduce method with NO seed

var youngestCustomer = function(array) {
    let youngest = array.reduce((person, age) => person.age < age.age ? person : age )
    for (let key in array) {
        if (youngest.age === array[key].age) {
            console.log(array[key].name)
            return array[key].name
        }
    }
}; //reduce // use the reduce method with NO seed

var averageBalance = function(array) {
    let avgBal = 0;
    let length = array.length;
    array.forEach(({balance}) => avgBal += balance)
    let avg = avgBal/length
    return avg

};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
