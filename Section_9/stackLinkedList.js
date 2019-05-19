class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if(this.length === 0) {
      return this.isEmpty();
    }
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top; // incase you wanted to keep in memory
    this.top = this.top.next;
    this.length--;
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
