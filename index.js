function inOrder(currentNode){
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode){
  let current = rootNode;
  while (true){
    if (current.data > newNode.data){
      if (!current.left){
        current.left = newNode;
        break;
      } else if (current.left) {
        current = current.left;
      }
    } else if (current.data < newNode.data) {
      if (!current.right){
        current.right = newNode;
        break;
      } else if (current.right) {
        current = current.right;
      }
    } else {
      break;
    }
  }
  return true;
}

function max(node){
  let current = node;
  while (current.right){
    current = current.right;
  }
  return current;
}

function min(node){
  let current = node;
  while (current.left){
    current = current.left;
  }
  return current;
}
