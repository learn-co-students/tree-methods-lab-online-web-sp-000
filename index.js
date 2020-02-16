function inOrder(currentNode) {
  if (currentNode.left) {
    let newNode = currentNode.left;
    inOrder(newNode);
  }
  console.log(currentNode.data);
  if (currentNode.right) {
    let newNode = currentNode.right;
    inOrder(newNode);
  }
}

function findOrAdd(rootNode, newNode) {
  if (rootNode.data == newNode.data) {
    return true;
  } else if (newNode.data > rootNode.data) {
    if (rootNode.right) {
      return findOrAdd(rootNode.right, newNode);
    } else {
      rootNode.right = newNode;
    }
  } else {
    if (rootNode.left) {
      return findOrAdd(rootNode.left, newNode);
    } else {
      rootNode.left = newNode;
    }
  }
}

function max(node) {
  return node.right ? max(node.right) : node;
}

function min(node) {
  return node.left ? min(node.left) : node;
}
