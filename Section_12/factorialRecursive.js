let counter = 0;
function inception() {
  console.log(counter);
  if (counter > 3) {
    return 'done!';
  }
  couter++;
  return inception();
}

inception();

// 1. Identify the base case.
// 2. Identify the recursive case.
// 3. Get closer and closer and return when needed.
//    Usually you have 2 returns.

// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a loop.

// his answer...
function findFactorialRecursive(number) {
  if (number === 2) {
    return number;
  }
  return number * findFactorialRecursive(number-1);
}

findFactorialRecursive(5);

// my answer...
function findFactorialIterative(number) {
  let iteration = number-1;
  var answer = number;
  while (iteration > 0) {
    var answer = answer * iteration;
    iteration--;
  }
  return answer;
}

// his answer...
function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}
