function isEven(num1) {
  var numOne = Number(num1);

  if (typeof numOne === "number") {
    console.log("I'm evaluating " + numOne + ".");
    while (numOne > 1) {
      numOne = numOne - 2;
    }
    if (numOne == 0) {
      console.log("Your number is even.");
      return true;
    } else if (numOne > 0) {
      console.log("Your number is odd.");
      return false;
    } else if (numOne < 0) {
      while (numOne < 0) {
        numOne = numOne + 2;
      }
      console.log("I added numbers to make this a positive number, you jackass.");
      isEven(numOne);
    } else {
      console.log("No idea what " + numOne + " is.");
    }
  } else {
    console.log("I need a valid number to check...");
  }
}

isEven(-24);
