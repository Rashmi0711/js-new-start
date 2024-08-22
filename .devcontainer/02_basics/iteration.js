// for loop

// for (let i =0; i<=10; i++){
//     const elemet= i;
//     if (elemet == 5){
//         console.log("5 is best number");
        
//     }
//     console.log(elemet);
    
// }

//******************************** */

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value ${i}`);
    
//  for (let j = 0; j < 10; j++) {
//    console.log(`Inner loop value${j} and inner loop ${i}`);
    
//  }    
// }

//*********************** */
// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value ${i}`);
    
//  for (let j = 0; j < 10; j++) {
// console.log(i + '*' + j + '=' + i*j);
    
//  }    
// }

//***************** */
// let myArrya =["varun", "rashmi", "shubhu", "lux"]
// console.log(myArrya.length);

// for (let index = 0; index < myArrya.length; index++) {
//     const element = myArrya[index];
//     console.log(element);
    
    
// }


// let myarr= ["r","v"]
// console.log(myarr.length);
// for (let index = 0; index <= myarr.length; index++) {
//     const element = myarr[index];
//     console.log(element);
//  //<= // <      
// }
 

//*****break and continue */
for (let index = 1; index < 20; index++) {
    if (index ==5){
        console.log(` 5 id found`);
        break    
    }
    console.log(`value of i is ${index }`);   
}


//*********** */
for (let index = 1; index < 20; index++) {
    if (index ==5){
        console.log(` 5 id found`);
        continue    
    }
    console.log(`value of i is ${index }`);   
}
