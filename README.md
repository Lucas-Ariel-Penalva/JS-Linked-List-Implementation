# Javascript Linked List Example with utility functions

### A personal implementation of a Linked List Data Structure in Javascript.

> [From Wikipedia](https://en.wikipedia.org/wiki/Linked_list): In computer science, a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence.

I had a lot of fun learning about this topic and practicing until I became comfortable with it. To solidify my knowledge, I created this Linked List class and added many utility functions to go along with it.

Observations about this particular implementation:
* This version of the Linked List uses a typical zero-based index.
* I've decided to keep track of the Linked List tail to allow for linear O(1) insertion of new elements at the end of the Linked List.
* The Linked List only allows nodes with a *data type* of "string" or "number".

[Here's a text with excellent explanations about Linked Lists.](http://cslibrary.stanford.edu/103/LinkedListBasics.pdf)

### This implementation of the Linked List class has the following methods:

##### 1. append(data) - Creates a new node. If the List was empty, this becomes the first node (head). Otherwise, the node is appended to the end of the Linked List.

##### 2. insertNewHead(data) - Creates a new node and points it to the current head of the Linked List. The new node becomes the head.

##### 3. appendAtIndex(data, index) - Creates a new node and appends it to the specified index.

##### 4. getDataAt(index) - Returns the data of the node at the given index. 

##### 5. removeHead() - Removes the current head of the Linked List.

##### 6. removeTail() - Removes the tail of the Linked List.

##### 7. removeAt(index) - Removes the node at the given index. 

##### 8. toArray() - Returns an array with all the data from the Linked List.

##### 9. arrayToLinkedList(array) - Takes an array of strings and/or numbers, transforms it into nodes and appends them to the end of the Linked List.

##### 10. reverseList() - Reverses the Linked List.

##### 11. listSize() - Returns the size of the Linked List.

##### 12. toString() - Transforms all the data of the Linked List into a string, logs it to the console and returns it.

##### 13. printHeadAndTail() - Logs the head and the tail of the Linked List.

##### 14. printListData() - Logs all the data of the Linked List.

##### 15. clearLinkedList() - Deletes all references to the Linked List, effectively destroying it (left to garbage collection).

##### 16. static checkDataType(data) - Used within the other functions to check if the data is of type "string" or "number".

##### 17. static validateIndex(index, range) - Used within the other functions to check if the index arguments are valid.
