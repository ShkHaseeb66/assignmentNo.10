//4. Write a js program to check whether a number is even or odd using functions.

function checkwhether(number){
    if (number%2==0) {
        return `${number} is even`
    }
    else
    return `${number} is odd`
}
console.log(checkwhether(7));
