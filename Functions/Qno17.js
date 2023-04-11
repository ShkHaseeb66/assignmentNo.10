//17. Write a JavaScript program to find sum of digits of a given number using function.

function sumofdigits(n){
    let sum=0;
    for (let i = 1; i<= n; i++) {
       
      sum=sum+i
    }
    return sum
}
console.log(sumofdigits(5));