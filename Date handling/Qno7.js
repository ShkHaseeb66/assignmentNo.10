// 7. Write a JavaScript function to test whether a date is a weekend.


function is_weekend(date_string) {
    const date = new Date(date_string);
    const day = date.getDay();
    return day === 0 || day === 6 ? "weekend" : undefined;
  }
  
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
// Output :
// "weekend" "weekend" undefined