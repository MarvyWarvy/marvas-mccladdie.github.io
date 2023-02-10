/**
 * 
 * 
 * Functions
 * 0. Functions are one fo the fundamental building blocks in Javascript. They are blocks of code
 *    designed to perform a particular task
 * 
 * 
 * Syntax
 * 0 Functions in Javascript are blocks of code designed to perform a particular task
 *      a.) the two phases to using function are that first we must declare it, then we mus invoke it
 * 
 *      b.) When declaring a function we can choose to create either a named or an anonymous function. The syntax for both differ slightly
 *              Named functions start with the keyword function then whatever the functions name is. Anonymous functions are assigned to a variable
 *              
 * 
 *              Examples - 
 *                              //named function                        //anonymous function
 *                          function doSomething() {                let somethingDone = function() {
 *                              code to be executed                     code to be executed
 *                          }                                       }
 * 
 *                  //To invoke a named function you must use       //To invoke anonymous functions you must use the variable its assigned
 *                  its name followed by parentheses                  to followed by parentheses
 *                      doSomething()                                       somethingDone
 *
 *      c.) Functions can also take optionally take inputs known as parameters
 * 
 *              Example - 
 * 
 *                          function doSomething(input) {
 *                              return input
 *                          }
 * 
 *                          console.log(doSomething("Hello")) ---> will spit out hello
 * 
 *      d.) Functions can access variable created in their parent or global scope but variables created inside of a function will not be able to be accessed outside of the function
 * 
 *              Example -
 *  
 *                      let namee = "Marv"                                      function sayName() {
 *                      function sayHi(name) {                                      let namee = "Marv"
 *                          return "Hi " + name                                     
 *                      }                                                       }
 *              
 *                      console.log(sayHi(namee)) -- >logs Hi Marv              console.log( "hello " + namee) --> Throws an error because we cant use name since it is block scoped to our function
 *     
 * 
 *      e.) Closures - A closure is a function having access to the parent scope, even after the parent function has closed 
 * 
 *              Example - 
 *          
 *                      function madeAdder(x) {
 *                         return function(y) {
 *                              return x + y
 *                          }
 *                      }
 *                      let add5 = makeAdder(5);
 *                      let add10 = makeAdder(10);
 * 
 *                      console.log(add5(2)) --> logs 7
 *                      console.log(add10(2)) --> logs 12
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */