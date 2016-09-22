//Ch4 Ex 2.0
//Write two functions, reverseArray() reverses the given array into a new array; reverseArrayInPlace() modifies the given array in place.
//Cannot use the .reverse() method.

function reverseArray(array) {
    var position = array.length - 1;
    //var copyMe = array[position];
    var newArray = [];

    if (Array.isArray(array) == false) {
        console.log("I need a real array bro.");
    } else {
        console.log("You gave me: [" + array + "]");
        for (var length = 1; length <= array.length; length++) {
            newArray.push(array[position]);
            position -= 1;
        }
    }
    console.log("Your reversed array is: [" + newArray + "]")
    return newArray;
}

//Pretty sure I missed the point on this one, but it does what it asks for.
function reverseArrayInPlace(array) {
    var origArray = [];
    var position = array.length -1;

    if (Array.isArray(array) == false) {
        console.log("I need a real array bro.");
    } else {
        console.log("I'm reversing: [" + array + "]");
        for (var length = 1; length <= array.length; length++) {
            origArray.push(array[position]);
           position -= 1;
        }
    }
    array = origArray;
    return array;
}

reverseArray(reverseArrayInPlace([1,1,3,4,2,0,6]))
