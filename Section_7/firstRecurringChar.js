// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// O(n^2) - time complexity using nested for loops
// O(1) - space complexity
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
firstRecurringCharacter([2,5,5,2,3,5,1,2,4]); // returns 2...

// O(n) - time complexity using hash tables
// O(n) - space complexity
function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);