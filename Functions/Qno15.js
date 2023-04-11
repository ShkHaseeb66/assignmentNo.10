// 15. Write a JavaScript program to find reverse of any number using function.

function reverseNumber(num) {
    let reversed = 0;
    while (num !== 0) {
      reversed = reversed * 10 + (num % 10);
      num = (num - num % 10) / 10;
    }
    return reversed;
  }
  
  
  console.log(reverseNumber(123)); 
  console.log(reverseNumber(456789)); 
  