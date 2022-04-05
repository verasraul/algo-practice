
const number = 5;
// const log = console.log.bind(console, "Results: ")


// create linked lists 
class LinkList {
  constructor(head = null) {
    this.head = head
  }
}

let first = new LinkList();

class Node {
  constructor( data) {
    this.next = null
    this.data = data
  }
}

//  create function to loop through linked list
function printList(){
    // create a variable to hold head index
    let current = this.head;
    let str = '';
    while (current) {
        str += current.element + ' ';
        current = current.next;
    }
    console.log(str)
}
printList(first);