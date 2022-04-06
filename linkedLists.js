
const number = 5;
// const log = console.log.bind(console, "Results: ")


// create linked lists 
class LinkList {
  constructor(head = null) {
    this.head = head
  }
}

class Node {
  constructor( data) {
    this.next = null
    this.data = data
  }
}

let first = new LinkList(Node);

//  create function to loop through linked list
function printList(){
    // create a variable to hold head index
    let current = this.head;
    let str = '';
    while (current) {
        str += current.element + ' ';
        current = current.next;
    }
    console.log(str);
}
printList(first);







// log('test')

// const number = 5;
// const log = console.log.bind(console, "Results: ")
 // log('wren will show case the results')
// log(number)

// class LinkList {
//   constructor(head = null) {
//     this.head = head
//   }
// }

// class Node {
//   constructor( data) {
//     this.next = null
//     this.data = data
//   }
// }

// const firstNode = new Node('This is data Test')
// const secoundNode = new Node('This is secound data Test')
// const thirdNode = new Node('This is third data Test')
// log(firstNode)
// log(secoundNode)
// log(thridNode)

// firstNode.next = secoundNode
// secoundNode.next = thirdNode


// const linkArrayList = new LinkList(firstNode )
// log(linkArrayList.head.next)

// while next is not null 
// console new data 



// IF linklist head the 
  //showcase curruent node and  the next node 

// function travistList(linkListParam) {

//   if(linkListParam.head === null){
//     return;
// ur return no value  so that there a placeholder as head 
//   } else { 
    // get the starting node variable 
//   const currentNode = linkListParam.head
//   while(currentNode.next != null){
//     log(currentNode)
//     currentNode = currentNode.next
//     log(currentNode.data)
//         } 
//     }
// }
// travistList(linkArrayList)
