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
        root.left = node;
      }
    } else {
      if (root.right) {
        return findOrAdd(root.right, node);
      } else {
        root.right = node;
      }
    }
  }
}

function max(node) {
  let leftMax = node.left ? max(node.left) : node
  let rightMax = node.right ? max(node.right) : node

  if (leftMax.data > node.data && leftMax.data > rightMax.data) {
    return leftMax
  } else if (rightMax.data > node.data && rightMax.data > leftMax.data) {
    return rightMax
  } else {
    return node
  }
}

function min(node) {
  let leftMin = node.left ? min(node.left) : node
  let rightMin = node.right ? min(node.right) : node

  if (leftMin.data < node.data && leftMin.data < rightMin.data) {
    return leftMin
  } else if (rightMin.data < node.data && rightMin.data < leftMin.data) {
    return rightMin
  } else {
    return node
  }
}
