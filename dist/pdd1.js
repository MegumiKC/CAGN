let x = [1,2,{a:3}]
let y = x
let z = [...x]
let t = {}
Object.assign(t,x[2])
y[0] = 2
y[2].a = 4
z[2].b = 2
console.log("x:",x);    //x: [ 2, 2, { a: 4, b: 2 } ]
console.log("y:",y);    //y: [ 2, 2, { a: 4, b: 2 } ]
console.log("z:",z);    //z: [ 1, 2, { a: 4, b: 2 } ]
console.log("t:",t);