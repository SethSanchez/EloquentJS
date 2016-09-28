//Ch4 Ex3
//3.0 Write function arrayToList that builds a nested list from a given array.
function arrayToList(array) {
    var origArray = array;
    var position = array.length - 1;
    var newList = {};

    if (Array.isArray(array) == false) {
        console.log("This doesn't seem to be a valid array.");
    } else {
        console.log("You gave me: [" + array + "].");
        for (var length = 0; length < array.length; length++) {
            newList = {value: array[position], rest: newList};
            position -= 1;
            //console.log(newList)
        }
        console.log("Here's the list I made: ");
        console.log(JSON.stringify(newList));
    }
}

//3.1 Write function listToArray that turns an list into an array
//3.2 Write helper function prepend which takes an element and a list and creates a new list that adds the element to the front of the input list
//3.3 White helper function nth (recursively) which take a list and a number, and returns the element at that position in the list, or undefined otherwise.

arrayToList([1,2,3]);
