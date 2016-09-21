function range(start, end) {
    var begin = start;
    if (typeof start != "number") {
        console.log("I need a number to start with.");
    } else if (typeof end != "number") {
        console.log("I need a number to end with.");
    } else {
        console.log("I'm listing all numbers between " + start + " and " + end + ".");
    }
    while (begin < end) {
       // Return an array of all numbers from start up to end.
       console.log(start + " and " + end);
       begin += 1;
    }
}

range(1,22);
