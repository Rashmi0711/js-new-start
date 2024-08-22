// const coding =["js", "ruby", "java"]
//1st way
// coding.forEach( function (val){
//     console.log(val);
    
// })
//2nd way
// coding.forEach ( (item) =>{
// console.log(item);

// })
 

//*********** */
// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


//********** */
const coding1 =["js", "ruby", "java"]
const value = coding1.forEach( (item) => {
   //  console.log(item);
    return item
})
console.log(value);

