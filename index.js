function inOrder(node) {
    let currentNode = node;
    if (currentNode.left) {
        inOrder(currentNode.left);
    }
    console.log(currentNode.data);
    if (currentNode.right) {
        inOrder(currentNode.right);
    }
}

function findOrAdd(rootNode, newNode) {
    if (rootNode.data === newNode.data) {return true} 
    if (newNode.data <= rootNode.data) {
        if (rootNode.left) {
            findOrAdd(rootNode.left, newNode);
        } 
        else {
            rootNode.left = newNode;
        }
    } 
    else {
        if (rootNode.right) {
            findOrAdd(rootNode.right, newNode);
        } 
        else {
            rootNode.right = newNode;
        }
    }
    return true;
}

function max(node) {
    if (node.right) {
        return max(node.right);
    } 
    else { 
        return node;
    }
}

function min(node) {
    if (node.left) {
        return min(node.left);
    } else {
        return node;
    }
}