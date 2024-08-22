// function addTwoNum (num1, num2){
    
//     console.log(num1+num2);
// }
// addTwoNum(3 , 5)


// function addTwoNum (num1, num2){
    
//     console.log(num1+num2);
// }
// const result = addTwoNum(3 , 5)
// console.log("result: ", result);//result:  undefined


// function addTwoNum (num1, num2){
//     let result =num1 +num2
//     return result
// }
// const result = addTwoNum(3 , 5)
// console.log("result:",result);


// function addTwoNum (num1, num2){
//     let result =num1 +num2
//     // console.log("rashmi"); will  run before return
//     return result
//    // console.log("rashmi"); will not run after return
    
// }
// const result = addTwoNum(3 , 5)
// console.log("result:",result);

function addTwoNum (num1, num2){
    return num1 + num2
}
const result = addTwoNum(3 , 5)
console.log("result:",result);

// 

// function loginuserMsg(username){
//     return `${username} just logged in` 
// }
// console.log(loginuserMsg("rashmi"));
// //if value does not provide
// console.log(loginuserMsg());
//o/p undefined just logged in

//////
// function loginUsreMessage(username){
//     if(username === undefined){
//         console.log("please emter username");
//         return
//     }
//     return `${username} just log in`
// }
// console.log(loginUsreMessage);



function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));//200

//Spread operator
function calculateCartPrice2(...num1){
    return num1
}
console.log(calculateCartPrice2(200,400,500));
//o/p  [ 200, 400, 500 ]

function calculateCartPrice3(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice3(200,400,500,700));
//                              val1,val2,[500,700]


//object
const user ={
    username: "varun",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user) we can also provide object afte function as below

handleObject({
    username: "rashmi",
    price: 200
})

// array aslo we can pass
const myNewArray =[200,400, 500, 600]
function returnscnd(getarray){
    return getarray[3]
}
console.log(returnscnd(myNewArray));
console.log(returnscnd([200,400, 500, 900,700]));






