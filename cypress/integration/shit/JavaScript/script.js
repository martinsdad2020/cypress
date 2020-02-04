
'use strict';

import { AggregateError } from "bluebird";

//sda
var leftBorderWidth = 1;

const pi = 3.14;
let second = 2;
console.log(second);

// alert('Hello World');
// let answer = confirm('Are you here?');
// console.log(answer);

let answer = prompt('Тебе есть 18?', 'Да');
console.log(typeof(answer));




// let age = 18;
if (age > 20) {
    console.log('Go away!')   
}  else if (30) {
    console.log('NO!!')
}  else {
    console.log('Yes')
};
(age == 18) ? console.log('Yes!') : console.log('NO!!!');
// NO!!
// YES!
// let age = 18;
switch (age){
    case age > 20:
     console.log('Go away!');
     break;
    case 18:
     console.log('Welcome!');
     break;
    case age < 20:
     console.log('Nice!') 
    break;
 default:
    console.log('Wow!')
    break;
}
// Welcome!
// let age = 18;
while (age < 25) {
    console.log(age);
    age++;
} 
//18
// 19
// 20
// 21
// 22
// 23
// 24

// let age = 18;
 do {
     console.log(age);
     age++;
 }
 while (age < 25);
// 18
// 19
// 20
// 21
// 22
// 23
// 24

for (let i = 1; i < 8; i++) {
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5
// 6
// 7

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5
// 7

