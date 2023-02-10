/**
 * VARIABLES
 * 
 * 0: (INTRO) Variables are named containers for storing data in JavaScript. There are two type of variables in Javascript, local, and global.
 * We can declare variables with the var, let, or const keywords but there are some big key differeneces. By default variables declared with the var keyword will have global
 * scope, whereas variables declared with let and const will be block scoped. Furthermore, variables declared with const cannot be updated.
 *  - There are two phases of using variables, declaration and initialization/asignment
 * 
 * 
 * 1: Declaration: 
 * To create a variable in JavaScript it must be declared with a declarative keyword
 *      - Var, let, const are different declarative keywords that do different things
 *          a.) Var declarations give a variable global scope and allow reassignment.
 *          b.) Let declarations give a variable block scope and allow reassignment.
 *          c.) Const declaration give a variable block scope and Do Not allow reassignment.
 * 
 *      -Example
 *          var greeting = "Hello"
 *          let food = "Hot Dog"
 *          const favNum = 13
 * 
 * 2: Assignment: 
 * At the declaration phase a variable is undefined because it is not assigned to anything.
 *      
 *          (Example)
 *              var myName;
 *              console.log(myName); --> prints undefined
 * 
 *      - To give a variable assignment it must be set equal to something.
 *          
 *          (Example)
 *              var myName = "Marvas";
 *              console.log(myName); --> prints "Marvas"
 * 
 * 3: Re-assignment
 * Since the declarative words "Var" and "Let" allow re-assignment they can be updated to a new value.
 * 
 *          (Example)
 *              var myName = "Marvas";
 *              myName = "Marv"
 *              console.log(myName); --> Now the variable myName prints "Marv"
 *      
 * 4: Block scoping
 * As i mentioned earlier, variables created using var are globally scoped and variables created using let and const, will be block scoped. here are 
 * some examples of that.
 * 
 *      -Examples
 *          if(1 === 1) {
 *              var friend1 = "Anthony"
 *              let friend2 = "John"
 *              const friend3 = "Justing"
 *          }
 *    
 *          console.log(friend1)
 *          console.log(friend2)
 *          console.log(friend3)
 *                                  ---> Friend1 will print to the console just fine because since it was declared using var, block scoping does not matter to it,
 *                                       however, friend2 and friend 3 throw a reference error because they are block scoped and not able to be acessed like this
 * 
 * 
 * 5: Hoisting
 * In Javascript, hoisting is the default behavior for moving variables to the top of the current scope
 *      - In js variables declared with var can be declared after they've been used, meaning a variable can be used before its been declared
 *          Example - 
 *                      x = 5;
 *                      var x;
 *                      console.log(x) ---> print 5 just fine
 * 
 *      - After you click run variables declared using var will be hoisted to the top of the global scope where as variables declared using let and const will only be
 *        hoisted to the top of their block
 * 
 *      - Using a let variable before it has been declared will throw a reference error
 *          Example - 
 *                      car = "Dodge";
 *                      let car;  
 *                      console.log(car) --->  will run into a reference error
 * 
 * 
 * 
 */

// 