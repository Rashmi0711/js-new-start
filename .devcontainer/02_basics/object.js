const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const Jsuser ={
    name: "hitesh",
    age: 18,
    Loction:"jaipur",
    islogin: "false",
    email: "Rash@google.com",
    lastlOgin: ["monday", "saturday"],

    "hi": "error",

    mySym : "value" ,// this not correct delcleration of symbol mySum will treat like string
    [mySym2]: "value2" // correct declartion of symbol
}
    // console.log(Jsuser.email)
    // console.log(Jsuser["email"]);

    // console.log(Jsuser.hi);
    // console.log(Jsuser["hi"]);

    // console.log(Jsuser.mySym);
    // console.log(typeof Jsuser.mySym);
    // console.log(Jsuser [mySym2]);
    // console.log(typeof Jsuser [mySym]);

//---------------freez the changes 
// Jsuser.email ="Varun@bh.com"
// console.log(Jsuser.email);

// Object.freeze(Jsuser)
// Jsuser.email ="shub@bh.com"
// console.log(Jsuser);


// --------------------function in object  

Jsuser.greeting =function(){
    console.log("hello js user")
}

Jsuser.greetingTwo =function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());