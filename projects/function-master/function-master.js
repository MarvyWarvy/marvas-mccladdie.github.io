//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for(var keys in object) { 
        arr.push(object[keys])
    }
    return arr


} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var string = ""
    var arr = []
    for(var keys in object) {
        arr.push(keys)
 
    }
    for(var i = 0; i < arr.length -1; i++) {
        string += arr[i] + " "
    }
    return string += arr[arr.length -1]
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var string = ""
    var arr = []
    for(var keys in object) {
        if(typeof object[keys] === "string") { 
            arr.push(object[keys])
        }
 
    }
    for(var i = 0; i < arr.length -1; i++) {
        string += arr[i] + " "
    }
    return string += arr[arr.length -1]
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //var array = []
    if (typeof collection === "object" && !Array.isArray(collection) && collection !== null && (!(collection instanceof Date))) {
        return "object";
    } else if(Array.isArray(collection) === true) {
        return "array";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let result = [];
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    };
    return result.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + object.name[0].toUpperCase(1) + object.name.slice(1) + "!"
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return object.name[0].toUpperCase(1) + object.name.slice(1) + " is a " +  object.species[0].toUpperCase(1) + object.species.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.hasOwnProperty("noises") && object.noises.length > 0) {
            return object.noises.join(" ")
    } else {
        return "there are no noises"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//correct
function hasWord(string, word) {
    if (string.includes(word)) {
        return true
    } else {
        return false
    }
// split string to array
// iterate over array
// test if each word is same as word
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//correct
function addFriend (name, object) {
    object.friends.push(name)
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//wrong
function isFriend(name, object) {
    if (object.friends === undefined) {
        return false
    }
    for (let i = 0; i < object.friends.length; i++) {
        if (name === object.friends[i]) {
            return true
        }
    }
    return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//wrong
function nonFriends(name, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].friends !== includes(name)) {
            let notFriends = []
            notFriends.push(array[i].friends)
            return notFriends
        }
        
    }
    


}



    // let notFriends = []
    // let friends = []
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i].friends !== name) {
    //         notFriends.push(array[i].friends)
    //         return notFriends
    //     } else {
    //         friends.push(array[i].friends)
    //     }
    // }

    // let storage = [];
    // for (let i = 0; i < array.length; i++) {
    //     storage.push(array[i].name);
    // }
    // for (let i = 0; i)


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value
    return object
    
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (let i = 0; i < array.length; i++) {
        for (let key in object) {
            if (key === array[i]) {
                delete object[key]
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
return [... new Set(array)]
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}