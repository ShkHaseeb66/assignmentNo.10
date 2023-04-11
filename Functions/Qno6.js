// 6. Write a JavaScript program to find all prime numbers between given interval using functions.

// function primeNumber(num){
//     if(num<2)
//     return false
//     for (let index = 2; index < num.length; index++) {
//       if (num%2==0) {
//         return false
//       }
//         return true
//     }
// }
// function findprime(a,b){
// let primes=[];
// for (let index = a; index <=b; index++) {
//     if (primeNumber(index)) primes.push(index);
//     return primes;
// }
// }
// console.log(findprime(10,20));
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function findPrimes(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  }
  
  
  console.log(findPrimes(10, 20)); 
  