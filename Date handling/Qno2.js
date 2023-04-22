//2. Write a JavaScript function to get the current date. 
//Note : Pass a separator as an argument.
// Test Data :


function getCurrentDate(saprator) {
    const currentDate = new Date();
    const day =  currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

return `${day}${saprator}${month}${saprator}${year}${saprator}`
}
console.log(getCurrentDate('/') );
console.log(getCurrentDate('-'));
