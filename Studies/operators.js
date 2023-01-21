/**
 * 
 * Operators
 * 0. An operator performs some operation on single or multiple operands (data value) and produces a result.
 * Javascript is capable of using arithmetic operators, comparison operators, logical operators, assignment operators, and
 * conditional/Ternary operators.
 * //
 * 1. What they do
 * The aformentioned operators are all denoted by a symbol
 *      a.) Arithmetic Operators (" + ", " - ", "  * ", " / ", " % ", " ++ ", and " -- ")
 *       are used to perform mathematical operations.
 *          
 *              Examples
 *                  let x = 4
 *                  let y = 2
 *                  console.log(x + y) ---> Performs addition and prints 6 to the console
 * 
 *                  console.log(x - y) ---> Performs subtraction and prints 2 to the console
 * 
 *                  console.log(x * y) ---> Performs multiplication and prints 8 to the console
 * 
 *                  console.log(x / y) ---> Performs division and prints 2 to the console
 * 
 *                  console.log(x % y) ---> The modulus operator returns the remainder of two 
 *                                          values and will print 0 to the console
 * 
 *                      x++
 *                  console.log(x); -------> The increment operator " ++ " will increase the value by one and x will now
 *                                          print 5 to the console
 * 
 *                      x--
 *                  console.log(x); -------> The decrement operator " -- " will decrease the value by one (assuming this is a fresh example and we didn't just use the increment operator)
 *                                          and x will now print 3 to the console
 *      
 *      b.) Comparison Operators (" == ", " === ", " != ", " > ", " < ", " >= ", and " <= " ) are used to compare operands
 *          return true or false.
 *              - " == " Loosley compares the equality of two values without considering type.
 *              - " === " Strictly compares the equality of two values, considering type.
 *              - " != " compares the inequality of two values.
 *              - " > " Returns true if the value on the left side is greater than the value on the right side, false otherwise.
 *              - " < " Returns true if the value on the left side is less than the value on the right side, false otherwise.
 *              - " >= " Returns true if the value on the left side is greater than or equal to the value on the right side, false otherwise.
 *              - " <= " Returns true if the value on the left side is less than or equal to the value on the right side, false otherwise.
 * 
 *              Examples
 *                  let x = 2, y = 4, z = "2";
 *                  let q = x;
 *                  console.log(x == z); ---> True is logged to the console.
 *  
 *                  console.log(x === z); --> False is logged to the console.
 * 
 *                  console.log(x == q); ---> True is logged to the console.
 * 
 *                  console.log(x != y); ---> True is logged to the console.
 * 
 *                  console.log(x > y); ----> False is logged to the console.
 * 
 *                  console.log(x < y); ----> True is logged to the console.
 * 
 *                  console.log(x >= y); ----> False is logged to the console.
 *  
 *                  console.log(x <= y); ----> True is logged to the console.
 * 
 * 
 *      c.) Logical Operators (" && ", " || ", and " ! ") are used to combine two or more conditions.
 *              - " && " Is the "AND" operator and it checks whether two operands are not zero, false, undefined, null, or an empty string "".
 *              - " || " Is the "OR" operator and it checks whether any one of the two operands are not zero, false, undefined, null, or an empty string "".
 *              - " ! " Is the "NOT" operator and it reverses the boolean result of the operand.
 * 
 *              Examples 
 *                  let x = 4, y = 10;
 *                  console.log((x != y) && (x < y)); ---> Logs true to the console.
 *                  
 *                  console.log((x > y) || (x == y)); ---> Logs false to the console.
 * 
 *                  console.log((x < y) || (x == y)); ---> Logs true to the console.
 * 
 *                  console.log(!(x < y)); ---> Logs false to the console.
 * 
 *                  console.log(!(x > y)); ---> Logs true to the console.
 * 
 * 
 *      d.) Assignment Operators (" = ", " += ", " -= ", " *= ", " /= ", and " %= ") assign values to variable with fewer key strokes.
 *              - " = " Assigns the right operand to the value of the left operand.
 *              - " += " Takes the sum of the left and right operand values and assigns the result to the left operand value.
 *              - " -= " Subtracts the right operand value from the left and assigns the result to the left operand value.
 *              - " *= " Multiplies the left and right operand values and assigns the result to the left operand value.
 *              - " /= " Takes the division of the left operand value by the right and assigns the result to the left operand value.
 *              - " %= " Gets the modulus of left operand value, divides it by the right operand value, and assigns the resulted modulus to the left operand value.
 * 
 *              Examples
 *                  let x = 6, y = 12, z = 18;
 * 
 *                  console.log(x = y); x now equals the value y is referencing and prints 12 to the console.
 * 
 *                  console.log(x += 1); Prints 7 to the console.
 *                  
 *                  console.log(x -= 1); Prints 5 to the console.
 * 
 *                  console.log(x *= 6); Prints 36 to the console.
 * 
 *                  console.log(x /= 6); Pritns 1 to the console.
 * 
 *                  console.log(x %= 2); Prints 0 to the console.
 * 
 * 
 *      e.) Conditional/Ternary Operator (" :? ") is a special operator that assigns a value to a variable based on some condition.
 *          It is the short form of the if else condition.
 *              - It's syntax is as follows " <condition> ? <value1> : <value2>; "
 * 
 *              Examples
 *                  let x = 10, y = 5;
 *      
 *                  console.log(z = x > y? x : y); ---> Logs the value of c, 10, to the console.
 * 
 *                  console.log(d = x > y? y : x); ---> Logs the value of d, 5 to the console.
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
 * 
 * 
 */