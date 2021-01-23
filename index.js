const max = (currentNode) => {
  if(currentNode.right){
    return max(currentNode.right)
  } else {
    return currentNode;
  }
}

const min = (currentNode) => {
  if(currentNode.left){
    return min(currentNode.left)
  } else {
    return currentNode;
  }
}

const inOrder = (currentNode) => {
  if(currentNode.left){
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)

  if(currentNode.right){
    inOrder(currentNode.right)
  }
}

const findOrAdd = (currentNode, newNode) => {
  if(currentNode.data == newNode.data){
    return true
  }
  if(newNode.data < currentNode.data){
    if(currentNode.left){
      return findOrAdd(currentNode.left, newNode)
    } else {
      return currentNode.left = newNode
    }
  }

  if(newNode.data > currentNode.data){
    if(currentNode.right){
      return findOrAdd(currentNode.right, newNode)
    } else {
      return currentNode.right = newNode
    }
  }
}