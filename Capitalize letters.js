// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

    //1. Using For
        //split array by word (' ')
        //join to turn the substring array into a string as a word(' ')
    // const strArr = str.toLowerCase().split(' ');
    // for(let i = 0; i < strArr.length; i++){
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }
    // return strArr.join(' ');
    
    /*************************************************************/
    
    //2. Using Map
        //Map helps to manipulate and return an array
        //substr() is same as substring()
        // return str
        // .toLowerCase()
        // .split(' ')
        // .map( word => word[0].substr(0, 1).toUpperCase() + word.substr(1))
        // .join(' ');
    
    /**************************************************************/
    
    //3. Using Regular Expression
        //Replace() takes in regular expressions
    
        return str.replace(/\b[a-z]/gi, function(char){
            return char.toUpperCase();
        })
    }
    
    
    // Call Function
    const output = capitalizeLetters("i love javascript");
    
    console.log(output);