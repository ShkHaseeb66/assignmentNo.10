// Write a JavaScript function to get difference between two dates in days.
function date_diff_indays(date1_str, date2_str) {
    var date1 = new Date(date1_str);
    var date2 = new Date(date2_str);
    var diff = Math.abs(date1.getTime() - date2.getTime());
    return Math.floor(diff / (1000 * 3600 * 24));
  }
  
console.log(date_diff_indays('04/02/2014', '11/04/2014'));
console.log(date_diff_indays('12/02/2014', '11/04/2014'))