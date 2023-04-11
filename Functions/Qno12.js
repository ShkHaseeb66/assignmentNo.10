// 12. Write a JavaScript program to print all even or odd numbers in given range using function.

function printEvenOrOddNumbers(start, end, type) {
    for (let i = start; i <= end; i++) {
      if (type === 'even' && i % 2 === 0) {
        console.log(i);
      } else if (type === 'odd' && i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  
   console.log(printEvenOrOddNumbers(1, 10, 'even')) 
   console.log(printEvenOrOddNumbers(1, 10, 'odd'))
  