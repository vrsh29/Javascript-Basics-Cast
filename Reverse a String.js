// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

//1. Split the string and use reverse function

function reverseString(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('')
// 

/*******************************************************/

//2. Use For Loop as a decrementing String array

// let revString = '';
// for(let i = str.length - 1; i >= 0; i--){
//   revString = revString + str[i];
// }
// return revString;

/*******************************************************/

//3. Use For Loop as a incrementing String array

// let revString = '';
// for(let i = 0; i <= str.length - 1; i++ ){
//   revString = str[i] + revString; 
// }
// return revString;

/******************************************************/

//4. Using different For loop

// let revString = '';
// for(let char of str){
//   revString = char + revString;
// }
// return revString;

/******************************************************/

//5. Using forEach function

// let revString = '';
// str.split('').forEach(char =>
//   revString = char + revString);
//   return revString;

/********************************************************/

//6. Using reduce Higher Order function

return str.split('').reduce((revString, char) => revString = char + revString);

}
// Call Function
const output = reverseString("varsha");

console.log(output);
