// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
//Solution 1. Using CharMAP 
    //charMap - this helps us to map the number of elements in the array
    //for In Loop- for(let _ in _) - used to loop through an object rather than an array
    //NodeJS debugger - use node inspect index.js 
    // c - continue , repl - read eval print loop 
    
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(char => {
        if(charMap[char]){
            charMap[char]++;
        } else {
          charMap[char] = 1;
        }
    });
     
    for(let char in str){
        //debugger;
        if(charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char;
        }

    }
      return maxChar;
}


// Call Function
const output = maxCharacter("hello");

console.log(output);
