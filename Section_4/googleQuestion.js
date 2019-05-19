// Given 2 arrays, create a function that let's a user know
// (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','i'];
// --should return false.
// -------------------------
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','x'];
// --should return true.

// 2 parameters - arrays - no size limit
// return true or false

// Brute Force - O(a * b) Time Complexity - O(1) Space Complexity
const array1 = ['a','b','c','x'];
const array2 = ['z','y','i'];
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
containsCommonItem(array1, array2);

// Better - O(a + b) Time Complexity - O(a) Space Complexity
const array1 = ['a','b','c','x'];
const array2 = ['z','y','i'];
function containsCommonItem2(arr1, arr2) {
  /* loop through first array and create object where
  properties = items in the array, with value of true */
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  /* loop through second array and check if item in 
  second array exists on created object */
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
containsCommonItem2(array1, array2);

// Better Still - O(a + b) Time Complexity - O(1) Space Complexity
const array1 = ['a','b','c','x'];
const array2 = ['z','y','i'];
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
containsCommonItem3(array1, array2);

// Given a collection of numbers, find a matching pair that is equal
// to a sum, that is given as well
// For example:
// const arr = [1,2,3,9] Sum = 8
// const arr = [1,2,4,4] Sum = 8

// Can I assume they are in memory? An Array? 
// Are these numbers integers? Negatives, Positives?
// Obviously the simplest(naive) solution is comparing every
// case--nested for-loops--i loop and then j loop being i+1 so I don't
// repeat the same case twice, followed by an if check === to sum.
// Not efficient--O(n^2) Time Complexity (Quadratic)
// Another option would be a binary search, for the compliment to
// equal the sum--also slow--O(n log n).

// Naive
function hasPairWithSum(arr, sum){
  var len = arr.length;
  for(var i =0; i<len-1; i++){
     for(var j = i+1;j<len; j++){
        if (arr[i] + arr[j] === sum)
            return true;
     }
  }
  return false;
}
// Could create a data structure that denotes whether the pair exists
// returning a boolean property and a pair property with a value;
// then return the data structure.

// Better
function hasPairWithSum2(arr, sum){
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++){
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}
hasPairWithSum2([6,4,3,2,1,7], 9)