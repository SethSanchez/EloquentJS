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
    var position = 1;
    var runningTotal = 0;
    var firstVal = array[0];

    for (var length = 1; length < array.length; length++) {
        firstVal  = firstVal + array[position];
        console.log("I'm at: " + firstVal);
        position += 1;
    }
    //console.log(toAdd)
}

sum(range(1,10));
