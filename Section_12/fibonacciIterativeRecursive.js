/* Given a number N, return the index value of the Fibonacci
   sequence, where the sequence is: */

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
/* the pattern of the sequence is that each value is the sum of
   the two previous values; that means that for N=5 -> 2+3 */

// my failed attempt...
function fibonacciIterative(n) {
  let iteration = 0;
  let iterationPlusPrev = 1;
  let index = 0;
  if (n === 0) {
    return index;
  } 
  for (let i = 0; i < n-1; i++) {
    iteration = iteration + iterationPlusPrev;
    iterationPlusPrev = iteration + iterationPlusPrev;
    index++;
  }
  return index;
}
fibonacciIterative(8);
// should return 21

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
fibonacciRecursive(8);
// should return 21