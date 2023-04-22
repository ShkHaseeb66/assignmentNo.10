// 4. Write a JavaScript function to get the month name from a particular date.

function getMonthName(date) {
    
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                      'August', 'September', 'October', 'November', 'December'];
  
    
    var monthIndex = date.getMonth();
  
    
    var monthName = monthNames[monthIndex];
  
    
    return monthName;
  }
  


console.log(getMonthName(new Date("10/11/2009")));
console.log(getMonthName(new Date("11/13/2014")));