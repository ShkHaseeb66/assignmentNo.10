//21. Write a JavaScript program to find LCM of two numbers using function.

function findLCM(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    let larger = Math.max(a, b);
    for (let i = larger; ; i += larger) {
      if (i % a === 0 && i % b === 0) {
        return i;
      }
    }
  }
  console.log(findLCM(12, 18));
  console.log(findLCM(30, 50)); 
  console.log(findLCM(0, 8)); 
  