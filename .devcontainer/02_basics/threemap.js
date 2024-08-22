const map = new Map()
map.set('IN', "india")
map.set('fr', "France")

console.log(map);

// how loop apply array loop

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

// object over loop
const myObject ={
    'game1': 'NFS',
    'game2': 'spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}// not iterable error

//how to iterate object