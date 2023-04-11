//20. Write a JavaScript program to find GCD (HCF) of two numbers using function

function findGCD(a, b) {
    
    a = Math.abs(a);
    b = Math.abs(b);
    if (b === 0) {
      return a;
    }
    
    
    return findGCD(b, a % b);
  }
  console.log(findGCD(12, 18)); 
  
  