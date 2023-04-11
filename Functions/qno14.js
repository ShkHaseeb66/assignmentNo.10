// 14. Write a JavaScript program to find sum of all even or odd numbers in given range using function. 
  
function sumOfEvenOrOddNumbers(start, end, type) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (type === 'even' && i % 2 === 0) {
        sum += i;
      } else if (type === 'odd' && i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  }
  console.log(sumOfEvenOrOddNumbers(1, 10, 'even'));
  console.log(sumOfEvenOrOddNumbers(1, 10, 'odd')); 
  
  
  