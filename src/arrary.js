let mix = new Array(1, 2, 3, 4, 5); // Constructor type array


let arr = [11, "motor", 33, 4.45, "hello"]; // most preferred way to create an array

console.log(arr[2]);
console.log(mix[0]);
console.log(mix[2]);
console.log(arr[4]);


let a = new Array(5); // empty 5 index array assign var a
console.log(a);         // [ <5 empty items> ]
console.log(a.length);  // 5
console.log(a[0]);      // undefined



// let a = new Array[[1,2,3,4],['cat','dog','lion','tiger'] ];
let c = [[1, 2, 3, 4], ['cat', 'dog', 'lion', 'tiger']];


console.log(c[0][2]); // 3
console.log(c[1][3]); // tiger
console.log(c[1][0]); // cat
console.log(c[0][1]); // 2

let d = [1, 2, 3, 4, 5];
d.push(6); // add 6 at the end of array
d.pop(6); // remove last element
d.shift(); // remove first element
d.unshift(6); // add 0 at the beginning of array
console.log(d[0]); // 6