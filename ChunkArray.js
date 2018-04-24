function chunkArray(arr, len) 
{
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

  // Solution 1 : Using While Loop

//   //Initialize the chunk
//   const chunkArr = [];
//   //Set index
//   let i = 0;

//   //Loop while index is less than arr length
//   while(i < arr.length){
//       //Slice out from the index to the index + the chunk length
//       //and push on to the chunked array
//       chunkArr.push(arr.slice(i,i + len));
//       //Increment by chunk length
//       i += len;
//   }
//   return chunkArr;
//  });

//Solution 2 : 
    //Initialize Chunk arr     
    const chunkArr = [];

    //Loop through the arr
    arr.forEach(val => {
      // get last element
      const last = chunkArr[chunkArr.length - 1];

      //check if last and if last length is equal to the chunk len
      if(!last || last.length === len) {
        chunkArr.push([val]);
      }
      else {
        last.push(val);
      }
    });  
    return chunkArr;
}
// Call Function
const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

console.log(output);
