function countBs(string) {
    var length = String(string).length;
    var counter = 0;
    var position = length;

    while (position >= 0) {
        var letter = String(string).charAt(position);

        if (letter == "B") {
            counter += 1;
            console.log("Found one B! I've found " + counter + " so far.");
            position -= 1;
        } else {
            position -= 1;
        }
    }

    console.log("I found " + counter + " B's in the string \'" + string + "\'.");
}

countBs("Bitches get stitches Bro");
