//24. Write a JavaScript program to find maximum and minimum elements in array using function.
function maxmin(array){
    let max=array[0]
    let min=array[0]
    for(let i=1;i<array.length;i++){
        if(array[i]>max){
        max=array[i]
    }
    if(array[i]<min){
        min=array[i]
    
    }

}
return `${min} is maximum ${max} is maximum`
}
array =[1,3,5,79]
console.log(maxmin(array));