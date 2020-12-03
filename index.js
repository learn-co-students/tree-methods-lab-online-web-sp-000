function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }
  console.log(currentNode.data);
  if (currentNode.right) {
    inOrder(currentNode.right);
  }
}

function findOrAdd(rootNode, newNode) {
  let currentNode = rootNode;
  let found = false;
  if (newNode.data < rootNode.data) {
    currentNode = rootNode.left;
    if (currentNode) {
      found = findOrAdd(currentNode, newNode);
    } else {
      rootNode.left = newNode;
    }
  } else if (newNode.data > rootNode.data) {
    currentNode = rootNode.right;
    if (currentNode) {
      found = findOrAdd(currentNode, newNode);
    } else {
      rootNode.right = newNode;
    }
  } else {
    found = true;
  }
  return found;
}
function max(currentNode) {
  if (currentNode.right) {
    currentNode = currentNode.right;
    return max(currentNode);
  } else {
    console.log(currentNode);
    return currentNode;
  }
}
function min(currentNode) {
  if (currentNode.left) {
    currentNode = currentNode.left;
    return min(currentNode);
  } else {
    return currentNode;
  }
}
