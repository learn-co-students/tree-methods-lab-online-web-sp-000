function inOrder(currNode)
{
   if(currNode.left){
    inOrder(currNode.left)
  }
  console.log(currNode.data)
  if(currNode.right){
    inOrder(currNode.right)
  }
}

function findOrAdd(node, inputNode)
{
  while(node.data != inputNode.data)
  {
    if (inputNode.data > node.data)
    {
      if (node.right === null)
      {
        node.right = inputNode
        return false
      }
      else
      {
      node = node.right
      }
    }
    else
      if (node.left === null)
      {
        node.left = inputNode
        return false
      }
      else
      {
      node = node.left
      }
  }
  return true;
}

function max(node)
{
  while(node.right !== null)
  {
    node = node.right
  }
  return node
}

function min(node)
{
    while(node.left !== null)
  {
    node = node.left
  }
  return node
}
