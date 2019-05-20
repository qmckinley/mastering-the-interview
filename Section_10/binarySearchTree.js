// Level 0: 2^0 = 1;
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;

// # of nodes = 2^h -1;
// log nodes = height;

// log 100 = 2;
// 10^2 = 100;

// lookup O(log N)
// insert O(log N)
// delete O(log N)

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

//     9
//  4     20
// 1  6 15  170

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    // Is there a Root Node?
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) { // return node or null/false
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if(value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {

      } else if (currentNode.value === value) {
        // We have a match, get to work!

        // Option 1: No right child:
        if (currentNode.right === null) {
        // Option 2: Right child which doesn't have a left child

        } else if (currentNode.right.left === null) {
        // Option 3: Right child that has a left child  
        } else {

        }
      return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(20);

JSON.stringify(traverse(tree.root))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// my lookup answer..
// lookup(value) { // return node or null/false
//   let currentNode = this.root;
//   if (!this.root) {
//     return ('Node does not exist.');
//   } else {
//     while (true) {
//       if (value < currentNode.value) {
//         if (!currentNode.left || value !== currentNode.left.value) {
//           return null;
//         } else if (currentNode.left.value === value) {
//           return currentNode.left;
//         }
//         currentNode = currentNode.left;
//       } else {
//         if (value > currentNode.value) {
//           if (!currentNode.right || value !== currentNode.right.value) {
//             return null;
//           } else if (currentNode.right.value === value) {
//             return currentNode.right;
//           }
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }
// }