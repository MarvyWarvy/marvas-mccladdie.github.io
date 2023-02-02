
/**
 * 
 * 
 * String Manipulation
 * 
 * 0. Strings are a primitive Data Type used to store data in the form of text, and they operate on 
 *    zero based indices
 * 
 *      - there are a plethera of methods in JavaScript to manipulate a string
 *  
 *          
 *              String.length()                     String.trim()
 *              String.slice()                      String.trimStart()
 *              String.substring()                  String.trimEnd()
 *              String.substr()                     String.padStart()
 *              String.replace()                    String.padEnd()
 *              String.replaceAll()                 String.charAt()
 *              String.toUpperCase()                String.charCodeAt()
 *              String.toLowerCase()                String.split()
 *              String.concat()
 * 
 *      - Some of the more popular ones being "String.length()", "String.slice()", "String.replace()",
 *          "String.toUpperCase()", "String.toLowerCase()", "String.concat()", "String.split()"
 * 
 * 
 *      - Examples
 * 
 *          Length - returns the length of a string starting at 1
 *              let text = "abcdefghijklmnop"
 *              console.log(text.length()) // logs 16
 * 
 *          Slice - extracts a part of a string and returns the extracted part in a new string
 *              let text = "Apple, Banana, Kiwi"
 *              console.log(text.slice(7, 13)) // logs Banana
 * 
 *          Replace - replaces a specified value with another
 *              let text = "Please try hard"
 *              console.log(text.replace("hard", "harder")) // logs Please try harder
 * 
 *          toUpperCase - sends string to upper case
 *              let text = "hello you"
 *              console.log(text.toUpperCase()) // logs HELLO YOU
 *  
 *          toLowerCase - sends string to lower case
 *              let text = "HELLO YOU"
 *              console.log(text.toLowerCase()) // log hello you
 * 
 *          Concat - joins two or more strings
 *              let text1 = "Sub"
 *              let text2 = "way"
 *              console.log(text1.concat(text2)) // logs Subway
 * 
 *          Split - converts a string to an array, and can split it based on different args
 *              let text = "subway"
 *              console.log(text.split("")) // logs ['s','u','b','w','a','y']
 *              console.log(text.split("w")) // logs ['sub', 'ay']
 *      
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */