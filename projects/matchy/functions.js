/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(aniArray, nameToSearch) {
    for( var i = 0; i < aniArray.length; i++) {
        if (aniArray[i].name === nameToSearch) {
            return aniArray[i]
        }
    }
    return null
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(aniArray, nameOfAnimal, replacement) {
    for (var i = 0; i < aniArray.length; i++) {
        if (aniArray[i].name === nameOfAnimal) {
            aniArray[i] = replacement
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(aniArray, aniName) {
    for (var i = 0; i < aniArray.length; i++) {
        if (aniArray[i].name === aniName) {
            aniArray.splice(i)
        }
    }
    
}
    


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(aniArray, newAnimal) {
    //for (var i = 0; i < aniArray.length; i++) {
        if (newAnimal.name.length > 0 && newAnimal.species.length > 0 ) {// && newAnimal.name !== aniArray[i].name) {
            //aniArray.push(newAnimal)
            for (var i = 0; i < aniArray.length; i++) {
                if(newAnimal.name === aniArray[i].name){
                    return
                }
            }
            aniArray.push(newAnimal)
        } 
    }
    



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
