var num = 1
for (counter = 0; counter <= 99; counter++) {
  if (num % 3 == 0 && num % 5 == 0)
    console.log("FizzBuzz");
  else if (num % 3 == 0)
    console.log("Fizz");
  else if (num % 5 == 0)
    console.log("Buzz");
  else
    console.log(num);
  num += 1;
}
