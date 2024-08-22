//   const tinderUSer = new Object() // Singleton object
//  //   const tinderUSer2 ={} // literal / normal object 

//   tinderUSer.id  ="1245"
//   tinderUSer.name = "VArun"
//   tinderUSer.islogin =false

// // //   console.log(tinderUSer2); //o/p= {}
// // console.log(tinderUSer); // o/p {}


// ===============object under object======
const regularUSer ={
    email: "varun@gmail.com", 
    // declaring value under which further value aaded below example

    fullname: {
        username: {
            // we can go in neasting
            firstName: "varun",
            lastName : "patle"
        }
    }
}
console.log(regularUSer.fullname.username.firstName); // entire fullname object stored under regularUSer
 //obj under arry 
const user =[{}]

 