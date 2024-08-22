// let value = 3
// let negValue = -value
// console.log(negValue);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 +2);
// console.log(1 + 2 + "3" );
// console.log( 1 + "1" + 2);
// console.log("1" + "2" + 1);


// console.log( + true);
// console.log( + "");
// prefix postfix 


//STACK ( PRIMITIVE), HEAP (NON-PRIMITIVE)
let myYoutubename ='Rashminoyoutube'

let anothername = myYoutubename

anothername = "varun"

console.log(myYoutubename);  //Rashminoyoutube
console.log(anothername);  //o/p varun


//HEAP (NON-PRIMITIVE)

let userOne ={
    email :" rashmi@Gmail.com",
    upi : "user@ybl"
}
let userTwo= userOne
userTwo.email="varun@gmail.com"


console.log(userTwo.email);

console.log(userOne.email);




