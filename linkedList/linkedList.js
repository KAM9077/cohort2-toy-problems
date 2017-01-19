/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
	if (this.head === null){
    this.tail = Node(value);
    this.head = Node(value)
	}
var x = this.head
	while(x.next !== null){
		x = x.next
	}
	x.next = Node(value);
	this.tail = value 
  }

LinkedList.prototype.removeHead = function(value) {
	if(this.head!== null){
		this.head = this.head.next;  
	}
}

LinkedList.prototype.contains = function(value) {
	var x = this.head;
	while(x !== null){
		if (x.value === value){
		return true
		}else{
			x = x.next;
		}
	}
	return false;
}


  var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
}