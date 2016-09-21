function minimumValue(num1, num2) {
    var numOne = Number(num1);
    var numTwo = Number(num2);

    if (numOne < numTwo)
        console.log("The smaller number is: " + numOne);
    else 
        console.log("The smaller number is: " + numTwo);
}

minimumValue(13.5, 13.1);
