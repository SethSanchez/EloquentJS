function range(start, end) {
    var begin = start;
    var list = [];

    if (typeof start != "number") {
        console.log("I need a number to start with.");
    } else if (typeof end != "number") {
        console.log("I need a number to end with.");
    } else {
        console.log("I'm listing all numbers between " + start + " and " + end + ".");
    }

    while (begin <= end) {
       // Return an array of all numbers from start up to and including end.
       list.push(begin);
       begin += 1;
    }
    console.log(list);
}

range(1,22);
