// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi , function(char) {

        if(char === 'z' || char === 'Z'){
            return 'a';
        }
        else {
            //fromCharCode - every letter has char code
            //charCodeAT - give exact char code of the alphabet
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
    return newStr;
    
}

// Call Function
const output = letterChanges("hello There");

console.log(output);
