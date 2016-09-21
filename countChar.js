function countChar(string, character) {
    var length = String(string).length;
    var search = String(character).charAt(0);
    var counter = 0;
    var position = length;

    if (String(character).length > 0) {
        console.log("I can only search for a single character, so I'm just looking at the first letter \'" + search + "\'.");
    } else {
        console.log("Looks like I'm searching for a \'" + search + "\'.");
    }

    while (position >= 0) {
        var letter = String(string).charAt(position);

        if (letter == search) {
            counter += 1;
            console.log("Found one \'" + search + "\'! I've found " + counter + " so far.");
            position -= 1;
        } else {
            position -= 1;
        }
    }

    console.log("I found " + counter + " " + search + "\'s in the string \'" + string + "\'.");
}

countChar("whatever man, this is just a test. XXX", "XRated");
