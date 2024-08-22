const user ={
    username :"hitesh",
    price: 999,

    welcomeMSG: function(){
        console.log(`${this.username}, welcome to channal`);
        console.log(this);
    }
}// context of username is hitesh with this keyword

user.welcomeMSG()
user.username="sam"
user.welcomeMSG()

// console.log(this);

//************************** */
// function chai(){
//     let username="RAshmi"
//     console.log(this.username);
    
// }chai()

const chai = function (){
  let username="RAshmi"
    console.log(this.username);
        }
        chai() //O/P undefined


//****************** */

const chaiI = () =>{
       let username="RAshmi"
   console.log(this);
        }
        chaiI()   //O/P {}

        ////////////********* Arrow Function********* */

   const addTwo = (num1, num2)=> {
    return num1 + num2
   }     

   console.log(addTwo(3,2));
    // Implicite return we can use 

    const addtwo =(num1, num2)=> num1 + num2
    console.log(addTwo(3,2));

    const addtwo2 =(num1, num2)=> (num1 + num2)
    console.log(addTwo(3,2));