// 6. Write a JavaScript function to add specified minutes to a Date object.

function add_minutes(date,minutes) {
    return new Date(date.getTime() + minutes*80000) 
}
console.log(add_minutes(new Date(2014,10,2),30));
