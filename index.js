function hasTargetSum(array, target) {
for (let i=0; i<array.length; i++) {
  let complement = target - array[i]
  for (let j=i+1; j<array.length; j++) {
    if (complement === array[j]) {
      return true
    }
  } 
}
return false
}



/* 
  Write the Big O time complexity of your function here
*/

/* 
  function takes two arguments, an array and a target
  integer which is the goal in which two integers in the array 
  is equal to.

  the function should  if any 2 of the numbers 
  in the array = the target integer, return true
 
  ///at each number in the array, look through the array to see if
  that number + another number = the target.

  forEach (element in the array => add the others individually to the number to see if it equals 
    the target)
    if so, return true.

    element => 



*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([20, 30, 4, 800], 100));
}

module.exports = hasTargetSum;
