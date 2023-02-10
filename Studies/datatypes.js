/**
 * 
 * Data Types
 * 0. Javascript values are always of a certain Data Type, of which there are eight of.
 *  
 * 1. The eight Data Types in JavaScript are as follows:
 *      - String - The String type represents textual dta and is encoded as a sequence of 16-bit
 *                 unsigned interger values. Each element in the string occupies a position in the string
 * 
 *      - Number - The Number type is as it sounds. A number. JavaScript is capable of storing numbers
 *                 up to (253 – 1)and down to -(253 - 1)
 * 
 *      - BigInt - The BigInt Data Type is a numeric primitive capable of representing integers with
 *                 an arbitrary magnitude
 * 
 *      - Boolean - Booleans represent a logical entity and is inhabited by two values: true and false
 * 
 *      - Undefined - The undefined type consists of only one value: undefined.
 *                    This datatype indicates the absence of a value
 * 
 *      - Null - This data type, again, houses only one value: null
 *                Whereas undefined represents the absence of a value, null represents the absence of an object
 * 
 *      - Symbol - Symbols are unique Data Types. They are immutable and primitive and may be used as the key
 *                 of an object property
 * 
 *      - Object - an Object is a value in memory which is possible referenced by an identifier. In JS, the only
 *                 mutable values are objects
 *                      --> The object Data Type can contain: An object, an array, a date
 * 
 *      - Array - The array object enable storing a collection of multiple items under a single variable name,
 * 
 *      - Function - Functions are one of the fundamental building blocks in JavaScript. They are blocks of code designed to perform a particular task.
 * 
 *      - NaN - The global NaN property is a value representing Not-A-Number.
 * 
 *      - Infinity and -Infinity  - Infinity and Negative Infinity are properties in JavaScript that represent positive infinity and negative infinity.
 * 
 *         
 *                
 * 
 * 2. Examples
 *          //Numbers ---> let length = 16;
 *                         let weight = 7.5;
 * 
 *          //Strings ---> let color = "Yelllow";
 *                         let lastName = "Johnson";
 * 
 *          //Booleans --> let x = true;
 *                         let y = false;
 * 
 *          //Objects ---> let person = {firstName: "John", lastName: "Doe"};
 *              - //Array Object ---> let cars = ["Challenger", "N74", "Viper"]
 *              - //Date Object ----> let date = new Date("2022-02-01")
 * 
 *          //BigInts ---> let whale = BigInt(Number.MAX_SAFE_INTEGER)
 * 
 *          //Undefined -> let x
 *                         console.log(x) //Will log undefined
 * 
 *          //Arrays ----> let favNums = [13, 17, 5, 10 4]
 * 
 *          //Function --> let numFromFavNums = function(favNums, index) {
 *                                                  console.log(favNums[index])
 *                                              }                                   --> prints a property from input array using the input index
 *      
 *          //NaN -------> console.log(isNaN("W")) ---> prints true
 *                         console.log(isNaN(5)) -----> prints false
 * 
 *          //Infinity/-Infinity --> console.log(10 ** 1000) ---> prints Infinity
 *                                   console.log(Math.log(0)) --> prints -Infinity
 * 
 * 3. Important things to note
 *      - In Javascript, Data Types are dynamic
 *          - Example
 *              let x; //x is undefined
 *              x = 5; //now x is a number
 *              x = "John" //now x is a string
 * 
 *      -What is the difference between primitive and complex data types?
 *          - Primitve values are passed to a function by copy, complex values are by reference
 * 
 * 
 * 
 * 
 * array
 * fuction
 * nan
 * infinity and -infinity
 * difference between simple and complex data types
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */