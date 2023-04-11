//18. Write a JavaScript program to find factorial of any number using function

function factorial(number) {
    if (number < 0) {
      return -1;
    } else if (number === 0) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  console.log(factorial(5)); 
  console.log(factorial(7)); 
  console.log(factorial(0)); 
  