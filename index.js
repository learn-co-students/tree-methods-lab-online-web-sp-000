function inOrder(currentNode)
{
  if(currentNode.left)
  {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if (currentNode.right)
  {
    inOrder(currentNode.right)
  }
}

function findOrAdd(rootNode, newNode)
{
  if(rootNode.data == newNode.data) return true;
  //why is this not short circuting the function to return true if condition is met?
  
  if(rootNode.data > newNode.data)
  {
    if(rootNode.left)
    {
      rootNode = rootNode.left
      findOrAdd(rootNode, newNode)
    }
    rootNode.left = newNode
  }
  
  if(rootNode.data < newNode.data)
  {
    if(rootNode.right)
    {
      rootNode = rootNode.right
      findOrAdd(rootNode, newNode)
    }
    rootNode.right = newNode
  }
  return true;
}

function max(node)
{
  let maxNum = node
  if(node.right)
  {
    maxNum = node.right
    return max(node.right)
  }
return maxNum
}

function min(node)
{
  let minNum = node
  if(node.left)
  {
    minNum = node.left
    return min(node.left)
  }
return minNum
}
