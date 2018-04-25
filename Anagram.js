// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    //Solution 1: Using replace
    return formatStr(str1) === formatStr(str2);
}
//helper function
    function formatStr(str1){
        return str1
            // replace - ^\w - not a word
            .replace(/[^\w/]/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .join("");
    }

// Call Function
const output = isAnagram("Dormitory", "dirty room##");

console.log(output);
