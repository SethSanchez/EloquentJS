//Ch4 Ex 2.0
//Write two functions, reverseArray() reverses the given array into a new array; reverseArrayInPlace() modifies the given array in place.
//Cannot use the .reverse() method.

function reverseArray(array) {
    var position = array.length - 1;
    var copyMe = array[position];
    var newArray = [];

    if (Array.isArray(array) == false) {
        console.log("I need a real array bro.");
    } else {
        console.log("You gave me: [" + array + "]");
        for (var length = 1; length <= array.length; length++) {
            newArray.push(array[position]);
            position -= 1;
            console.log(newArray);
        }
    }
}

reverseArray([1,2,3,4,5])
