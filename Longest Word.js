// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
    //Match - helps to filter any puncuations using an regular expression ex- , . etc.

    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    //Sort by Length
    const sorted = wordArr.sort((a, b) => b.length - a.length );

    // If multiple words , put them into an array
    const longestWordArr = sorted.filter(word =>
     word.length === sorted[0].length );

    // Check if more than one array value
        
        if(longestWordArr.length === 1){
            //Return the word
            return longestWordArr[0];
        }
        else {
            return longestWordArr;
        }

  // SOLUTION 2 - Return an array and include multiple words if they have the same length

  
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

}


// Call Function
const output = longestWord("Hello there, my name is Brad");

console.log(output);
