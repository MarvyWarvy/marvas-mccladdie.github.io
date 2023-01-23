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
    let add = (accumulator, value) => accumulator + value
    let total = 0
    let avgBal 
    for (let i = 0; i < array.length; i++) {
        total += Number([array[i].balance.replace(/,/g, '').slice(1)].reduce(add))
        avgBal = total / array.length
      
    }
    console.log(avgBal)
    return avgBal
}

var firstLetterCount = function(array, letter) {
    let count = array.filter(
        (array) => array.name[0] === letter.toUpperCase()
    )
return count.length
};

var friendFirstLetterCount = function(array, customer, letter) {


    let friendCount = [];
        for (let k = 0; k < array.length; k++) {
            if (array[k].name === customer) {
                for (let i = 0; i < array[k].friends.length; i++) {
                    array[k].friends[i].name[0] === letter.toUpperCase() ? friendCount.push(array[k].name) : friendCount = friendCount
                }
            }
        }
        return friendCount.length
            
    


//     let count = array.filter(
//         (array) => array.name === customer && array.friends.name[0] === letter.toUpperCase()
//     )
// return count.length
  
//     let count = array.filter( array => {
//         let counter = 0
//         if (array.name === customer) {
//             for (let i = 0; i < array.friends.length; i++) {
//                 //(array) => array.friends[i].name[0] === letter.toUpperCase()
//                 if (array.friends[i].name[0] === letter.toUpperCase()) {
//                     counter++
//                 }
//             }
//         }
//         return counter
//     });
// return count.length

};

var friendsCount = function(array, name) {
    
        let friendCount = [];
        for (let k = 0; k < array.length; k++) {
            for (let i = 0; i < array[k].friends.length; i++) {
                array[k].friends[i].name === name ? friendCount.push(array[k].name) : friendCount = friendCount
            }
        }
        return friendCount
    



};

var topThreeTags = function(array) {

    let obj = {};
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        array[i].tags.forEach(tag => {
        if (!obj[tag]) {
        obj[tag] = 1;
        } else {
        obj[tag] += 1
        }
    });
    }
    let highestValue = 0;
    let highestValueKey
    for (let key in obj) {
        let value = obj[key];
        if (value > highestValue) {
        highestValue = value
        highestValueKey = key
        }
        }
    for (let key2 in obj) {
        let value2 = obj[key2];
        if (highestValue === value2){
            arr.push(key2)
    }
    }
    
return arr




};

var genderCount = function(array) {
    let obj = {
        male: 0,
        female: 0,
        "non-binary": 0
      };
      let gCount = array.reduce((acc, cur) => acc + cur.gender + " ", 0);
      gCount = gCount.split(" ")
      for (let i = 0; i < array.length; i++) {
        if (gCount[i] === "non-binary") {
          obj["non-binary"] += 1
        } else if (gCount[i] === "male") {
          obj.male += 1
        } else {
          obj.female += 1
        }
        //console.log(gCount[i])
      }
      return obj
      //console.log(gCount)


};

//.   npm start --prefix ./marvas-mccladdie.github.io/projects/let-s-get-functional
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
