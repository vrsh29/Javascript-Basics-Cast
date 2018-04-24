// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

    var strArr = str.toLowerCase().split(' ');

    for(let i = 0 ; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }
    
    return strArr.join(' ');

}


// Call Function
const output = capitalizeLetters("i love javascript");

console.log(output);