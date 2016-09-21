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

function sum(array) {
    //Return the sum of numbers from given array

    for (var length = 0; length < array.length; length++) {
        var position = 0;
        var toAdd = array[position] + array[position + 1];
        
        console.log("I'm at: " + toAdd);
        position += 1;
        length += 1;
    }
    console.log(toAdd)
}

sum(range(1,10));
