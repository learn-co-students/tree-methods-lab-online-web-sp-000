function findOrAdd(node, newNode){
  if(node.data == newNode.data){
    return true
  }

  if(newNode.data < node.data){
    return (node.left) ? findOrAdd(node.left, newNode) : node.left = newNode;
  }

  if(newNode.data > node.data){
    return (node.right) ? findOrAdd(node.right, newNode) : node.right = newNode;
  }
}

function min(node) {
  return (node.left) ? min(node.left) : node
}

function max(node) {
  return (node.right) ? max(node.right) : node
}

function inOrder(node) {
  if (node.left) {
    inOrder(node.left)
  }

  console.log(node.data)

  if(node.right) {
    inOrder(node.right)
  }
}
