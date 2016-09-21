function range(start, end) {
    var begin = start;
    var list = [];

    if (typeof start != "number") {
        console.log("I need a number to start with.");
    } else if (typeof end != "number") {
        console.log("I need a number to end with.");
    } else {
        console.log("I'm listing all numbers from " + start + " and up to " + end + ".");
    }

    while (begin <= end) {
       // Return an array of all numbers from start up to and including end.
       list.push(begin);
       begin += 1;
    }
    console.log("This is the array: [" + list + "]\n");
    return list;
}

//This is Ex1.1
//Take an array of numbers, and return the sum.

function sum(array) {
    //Return the sum of numbers from given array
    var position = 0;
    var runningTotal = 0;

    for (var length = 0; length < array.length; length++) {
        // I need to save the total of array[0] + array[1], then add that to array[2], then that to array[3], and so on.
        var firstVal = array[position];
        var secondVal = array[position + 1];
        runningTotal = firstVal + secondVal;

        console.log("I'm at: " + runningTotal);
        position += 1;
    }
    //console.log(toAdd)
}

sum(range(1,10));
