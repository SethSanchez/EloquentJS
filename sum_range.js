function range(start, end, step) {
    //Ex 1.0 - List all numbers between start and end.
    var begin = start;
    var stepVal = step;
    var list = [];

    if (typeof start != "number") {
        console.log("I need a number to start with.");
    } else if (typeof end != "number") {
        console.log("I need a number to end with.");
    } else if (typeof step != "number") {
        stepVal = 1;
        console.log("I'm setting the step value to 1.");
    } else {
        console.log("I'm listing all numbers from " + start + " and up to " + end + ".");
    }

    //TODO: Rewrite while to accept negative values. [5,4,3,2,1];

    while (begin <= end) {
       list.push(begin);
       //Ex 1.2 - Add a step value to go through the array.
       begin += stepVal;
    }
    console.log("The numbers are: [" + list + "]");
    return list;
}

function sum(array) {
    //Ex 1.1 - Take an array of numbers, and return the sum.
    var position = 1;
    var runningTotal = 0;
    var firstVal = array[0];

    for (var length = 1; length < array.length; length++) {
        firstVal  = firstVal + array[position];
        position += 1;
    }
    console.log("The total sum is: " + firstVal + ".")
}

sum(range(1,10,2));
