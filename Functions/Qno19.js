//19. Write a JavaScript program to generate nth Fibonacci term using function.
function fibonacciSeries(n) {
    let fibonacciArr = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    }
  
    return fibonacciArr;
  }
  
  console.log(fibonacciSeries(10)); 
  console.log(fibonacciSeries(20)); 
  