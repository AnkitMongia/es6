import emojipedia from "./emojipedia";


var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

console.log(emojipedia.map(emoji => emoji.meaning.substring(0,100) ));

console.log(numbers.filter( num => num < 10));

console.log(numbers.reduce((acc, num)=>{
    return acc + num;
}));

console.log(numbers.find(num => num >20 ));

console.log(numbers.findIndex(num => num<10 ));
