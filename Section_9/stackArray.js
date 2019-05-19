class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    if (this.array.length === 0) {
      return this.isEmpty();
    }
    return this.array[this.array.length-1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    if (this.array.length === 0) {
      return this.isEmpty();
    }
    this.array.pop();
    return this;
  }
  isEmpty() {
    return ('Your Stack is Empty')
  }
}

const myStack = new Stack();


myStack.push('google.com');
myStack.push('udemy.com');
myStack.push('discord.com');
myStack.pop();
myStack.peek();




