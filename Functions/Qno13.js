// 13. Write a JavaScript program to find sum of all natural numbers between 1 to n using function
function naturalNumbers(n){
    let sum=0;
    for (let i = 1; i<= n; i++) {
       
      sum=sum+i
    }
    return sum
}
console.log(naturalNumbers(10));