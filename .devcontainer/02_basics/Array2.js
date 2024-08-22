// const marval_heros=["thor","ironman","spiderman"]
// const dc_heros=["superman","flash","batman"]

// //push()
// marval_heros.push(dc_heros)
// console.log(marval_heros );

// //concat
// const all_heros= marval_heros.concat(dc_heros)
// console.log(all_heros);

// //Spread operator
// const all_new_heros= [...marval_heros,...dc_heros]
// console.log(all_new_heros);

// const another_arry= [1,2,3,4,5[6,7,8,9],7[6,7,[4,5]]]
// const real_another_array = another_arry.flat(Infinity)
// console.log(real_another_array);


// conversion into  array
console.log(Array.isArray("Rashmi"))
console.log(Array.from("Rashmi"))
console.log(Array.from({name: "Rashmi"}));

let score= 300;
let score2= 500;
console.log(Array.of(score,score2));