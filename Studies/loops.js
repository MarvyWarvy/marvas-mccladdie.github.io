

/**
 * Loops
 * 0.) In computer programming a Loop is a process that repeats a particular block of code for a valid condition. In JavaScript, there are 5 
 * types of loops. "while", "do while", "for", "for in", "for of"
 * 
 * 1.) What each does and how they work
 *          a.) while loops - while loops loop through a code block as long as a specified condition is true
 *          
 *              Syntax:
 *                  while (condition) {
 *                   code to be executed
 *                  }
 * 
 *              Example:
 *                  let i = 0
 *                  while (i < 5) {
 *                      console.log()`The number is ${i}`); ---> Will log "The number is whatever i is" 5 separate times to the console
 *                       i++
 *                  }
 * 
 * 
 *          b.) do while - The do while loop is a variation of the while loop. It will execute a block of code once, before checking if the
 *                          condition is true, then it will repeat as long as the condition remains true   
 * 
 *              Syntax:
 *                  do {
 *                      code to be executed
 *                  }
 *                  while (condition):
 * 
 *              Example:
 *                  let i = 1
 *                  do {
 *                      console.log(`My favorite number is ${i}!`) ---> Will log "My favorite number is i!" to the console, and will stop after it has run five times
 *                      i++
 *                  }
 *                  while (i < 6)
 * 
 * 
 *          c.) for - So far, for loops are the loops I've used the most. Like all other loops they, loop through a code block as long as a specified condition is true
 *                      
 *              Syntax:
 *                  for(expression 1; expression 2; expression 3) {  //Expression 1 is executed (one time) before the execution of the code block.
 *                      code to be executed                         //Expression 2 defines the condition for executing the code block.
 *                  }                                              //Expression 3 is executed (every time) after the code block has been executed
 * 
 *              Example:
 *                  for (let i = 1; i < 6; i++){
 *                      console.log(`My new favorite number is ${i}!!`) ---> Will log (My new favorite number is i!!) to the console, 5 separate times.
 *                  }
 * 
 * 
 *          d.) for in - For in loops are slightly different in that they loop through the properties of an object
 * 
 *              Syntax:
 *                  for (key in object) {
 *                      code to be executed
 *                  }
 * 
 *              Example:
 *                  let person = {first: "Joel", last: "Miller", age:52};
 *                  let text = "";
 *                  for (let x in person) {
 *                      text+= person[x] + " "
 *                  }
 *                  console.log(text) ---> Will log "Joel Miller 52" to the console
 * 
 * 
 *          e.) for of - For of loops are the most recent type of loop, included in update ES6. They are used to loop through the values of an iterable object.
 * 
 *              Syntax: 
 *                  for (variable of iterable) {
 *                      code to be executed
 *                  }
 * 
 *              Example:
 *                  let cars = ["Supra", "911", "RX-Vision"];
 *                  let text = "";
 *                  for (let x of cars) {
 *                      text += x + " "
 *                  }
 *                  console.log(text) ---> Will log "Supra 911 RX-Vision" to the console.
 *                  
 * 2.) Things to keep in mind? In summary?
 */