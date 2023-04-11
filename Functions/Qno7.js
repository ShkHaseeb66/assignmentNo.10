// 7. Write a JavaScript program to print all strong numbers between given interval using functions.


function printPositiveNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      if (i > 0) {
        console.log(i);
      }
    }
  }
  

  console.log(printPositiveNumbers(-5, 5)); 
  console.log(printPositiveNumbers(0, 10)); 
  