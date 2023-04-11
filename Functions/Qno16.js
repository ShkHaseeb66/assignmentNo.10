// 16.Write a JavaScript program to check whether a number is palindrome or not using function.
function isPalindrome(number) {
    
    const strNumber = number.toString();
   
    const len = strNumber.length;
    
    for (let i = 0; i < len / 2; i++) {
      if (strNumber[i] !== strNumber[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  
  console.log(isPalindrome(121)); 

  