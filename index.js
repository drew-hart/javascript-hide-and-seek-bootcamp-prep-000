function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
// the two for loops assumes there is only one level of children
  var data = document.querySelectorAll('.ranked-list')

  for (var i in data) {
    var children = data[i].children // get children HTMLCollections from data

    for (var j in children) {
      if (children[j]) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
  }
}

function deepestChild() {
  var currentNode = document.querySelector('div#grand-node')
  var nextNode = currentNode.children[0]

  while(nextNode) { // while nextNode is truthy, let's move to the next node
    currentNode = nextNode // make current equal to the next next
    nextNode = nextNode.children[0] // lets take the node + deeper and set to next
  }

  return currentNode // if nextNode is undefined, then we know that the current node is the last in the tree.
}
