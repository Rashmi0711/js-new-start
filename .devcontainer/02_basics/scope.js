var c="varunRashmi"

if (true){
    const a="rashmi"
    var b="varun"
    let c="both"
}
console.log(b);//(a); error
//(b); Varun bcz variable
//////////////////////////////////////////////////


let a =100
if (true){
    let a =10
    const b=20
    
console.log("inner:", a);
}
console.log(a);

///// *****Sope level and mini hoisting***********
// one is bda Two is chota 
// chota bade se icecream le skta h 
// but chota nhi

function one(){

    const username ="Histesh"

    function two(){
        const website ="youTube"
        console.log(username);
        
    }

   // console.log(website); error bcz website ka scope two() function ke under khatam ho gya h
    two()
}

one()


