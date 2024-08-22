  const myArray = [0,1,2,3,4,5,6]
  const myHeros =["shaktiman", "Bhim"]

//   const myArr2= new Array[1,2,3,4]

// console.log(myArr2[1]);

//arrya method
// myArray.push(7) 
// myArray.push(8)// add value in array
// myArray.pop(8)

// myArray.unshift(7)
// myArray.shift()

// --------------------------------------------


// console.log(myArray.includes(7));//false
// console.log(myArray.indexOf(7));// -1 output bcz 7 not exists in array
// console.log(myArray.indexOf(3)); //3 o/p

// // join add array and also added into string as below
// const newArr3= myArray.join()
// console.log(typeof newArr3); //String
// console.log(myArray);
// console.log(newArr3);//0,1,2,3,4,5,6
 
//+++++++++++ Slice and splice

 const myn1= myArray.slice(1, 5)// index 1 value it is taking & index 5 ki value nhi leta previous index tak leta hai
 //o/p [ 1, 2, 3, 4 ]

console.log(myn1);
console.log("B ", myArray);

const myn2 =myArray.splice(1,5)// MAjor change is Main arry will change it take those index which is not mentioned in splice C[0,6] and 2nd it is taking last index value  [ 1, 2, 3, 4, 5 ]

console.log("c ", myArray);
console.log(myn2);

