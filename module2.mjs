// // DEFAULT EXPORT
// import name from './module1.mjs';
// console.log(name);

// // NAMED EXPORT
// import {b} from './module1.mjs';
// console.log(b);
// import {c} from './module1.mjs';
// console.log(c);
// BETTER SYNTAX:
import name, {b, c} from './module1.mjs';
console.log(name);
console.log(b);
console.log(c);