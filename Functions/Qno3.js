//3. Write a js program to find maximum and minimum between two numbers using functions.

function Difference(num1,num2){
   
if(num1>num2){
    return `${num1} is maximum `
}

else if (num1<num2) {
    return `${num2} is maximum`
    
}
return `${num1} and ${num2} both are equal`
}
console.log(Difference(0,0));
