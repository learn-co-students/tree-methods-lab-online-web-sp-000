function inOrder(node) {
  if (node.left) {
    inOrder(node.left);
  }
  console.log(node.data);
  if (node.right) {
    inOrder(node.right);
  }
}

function findOrAdd(root, node) {
  if (root.data === node.data) {
    return true;
  } else {
    if (node.data < root.data) {
      if (root.left) {
        return findOrAdd(root.left, node);
      } else {
        return root.left = node;
      }
    } else {
      if (root.right) {
        return findOrAdd(root.right, node);
      } else {
        return root.right = node;
      }
    }
  }
}

function max(node) {
  return node.right ? max(node.right) : node
}

function min(node) {
  return node.left ? min(node.left) : node
}
