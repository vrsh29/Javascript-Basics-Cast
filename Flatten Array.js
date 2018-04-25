// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

// Solution 1:
//     return arrays.reduce((a, b) => a.concat(b));
//     console.log(flattenArray);
// }

// Solution 2 : 
  //  return [].concat.apply([], arrays);
// Solution 3 : using spread operation

    return [].concat(...arrays);

}

// Call Function
const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

console.log(output);