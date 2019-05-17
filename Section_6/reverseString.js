// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

// my attempt...
function reverse(str) {
  const strSplit = str.split('').reverse().join('');
  console.log(strSplit);
}

reverse('Hi My name is Andrei');

// his answer...
function reverse2(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good';
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join('');
}

reverse2('Hi My name is Andrei');

// his 2nd answer...
function reverse3(str) {
  return str.split('').reverse().join('');
}

reverse3('Hi My name is Andrei');

// ES6 syntax
const reverse4 = str => str.split('').reverse().join('');

reverse4('Hi My name is Andrei');