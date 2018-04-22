// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {

    //1. Using Split, reverse and Join
    // const revString = str.split('').reverse().join('');
    // return revString === str;

/************************************************************************/

//2. Using Recursion

      for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) return false;
      }
      return true;
    }



// Call Function
const output = isPalindrome("RotoR");

console.log(output);