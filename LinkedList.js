class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    };
};

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    append(data) {
        LinkedList.checkDataType(data);
        let newNode = new Node(data);

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        };

        this.size++;
    };

    insertNewHead(data) {
        LinkedList.checkDataType(data);
        let newNode = new Node(data, this.head);

        if (this.size === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        };

        this.size++;
    };

    appendAtIndex(data, index) {
        LinkedList.checkDataType(data);
        LinkedList.validateIndex(index, this.size);

        if (index === 0) return this.insertNewHead(data);

        if (index === this.size) return this.append(data);

        const newNode = new Node(data);

        let currentNode = this.head;
        let previousNode;
        let position = 0;

        while (position < index) {
            previousNode = currentNode;
            position++;
            currentNode = currentNode.next;
        };

        newNode.next = currentNode;
        previousNode.next = newNode;

        this.size++;
    };

    getDataAt(index) {
        LinkedList.validateIndex(index, this.size - 1);

        if (this.size === 0) {
            console.log("The Linked List is empty.");
            return false;
        };

        if (index === 0) {
            let data = this.head.data;
            console.log(`The first index contains: ${data}.`);
            return data;
        };

        if (index === this.size - 1) {
            let data = this.tail.data;
            console.log(`The last index contains: ${data}.`);
            return data;
        };

        let currentNode = this.head;
        let position = 0;

        while (position < this.size) {
            if (position === index) {
                let data = currentNode.data;
                console.log(`The index ${index} contains: ${data}.`);
                return data;
            };
            position++;
            currentNode = currentNode.next;
        };
    };

    removeHead() {
        if (this.size === 0) return "The Linked List is already empty.";
        this.head = this.head.next;
        this.size--;
    };

    removeTail() {
        if (this.size === 0) return "The Linked List is already empty.";
        let currentNode = this.head;
        let position = 0;

        while (position < this.size - 2) {
            currentNode = currentNode.next;
            position++;
        };

        currentNode.next = null;
        this.tail = currentNode;
        this.size--;
    };

    removeAt(index) {
        LinkedList.validateIndex(index, this.size - 1);

        if (index === 0) return this.removeHead();
        if (index === this.size - 1) return this.removeTail();

        let currentNode = this.head;
        let previousNode;
        let position = 0;

        while (position < index) {
            position++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        };

        previousNode.next = currentNode.next;
        this.size--;
    };

    toArray() {
        let linkedListData = [];
        let currentNode = this.head;

        while (currentNode) {
            linkedListData.push(currentNode.data);
            currentNode = currentNode.next;
        };

        return linkedListData;
    };

    arrayToLinkedList(array) {
        if (!Array.isArray(array))
        throw new TypeError("This method only accepts an array.");

        let currentNode;
        let index = 0;

        if (this.head === null) {
            LinkedList.checkDataType(array[0]);
            currentNode = new Node(array[0]);
            this.head = currentNode;
            this.tail = currentNode;
            index++;
            this.size++;
        } else currentNode = this.tail;

        for (let i = index; i < array.length; i++) {
            LinkedList.checkDataType(array[i]);
            currentNode.next = new Node(array[i]);
            currentNode = currentNode.next;
            this.tail = currentNode;
            this.size++;
        };
    };

    reverseList() {
        let previousNode = null;
        let currentNode = this.head;
        let nextNode;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;

            previousNode = currentNode;
            currentNode = nextNode;
        };

        this.tail = this.head;
        this.head = previousNode;
    };

    listSize() {
        console.log(
            `The Linked List has ${this.size} element${this.size === 1 ? "" : "s"}.`
        );
        return this.size;
    };

    toString() {
        let string = this.toArray().join(" - ");
        console.log(string);
        return string;
    };

    printHeadAndTail() {
        return console.log(
            `The head of the linked list is "${this.head.data}" and the tail of the linked list is "${this.tail.data}".`
        );
    };

    printListData() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        };
    };

    clearLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        console.log("All references to the Linked List have been deleted.");
    };

    static checkDataType(data) {
        if (typeof data !== "string" && typeof data !== "number")
            throw new TypeError("The Linked List only accepts numbers or strings.");
    };

    static validateIndex(index, range) {
        if (typeof index !== "number")
            throw new TypeError("Index must be a number.");
        if (index < 0 || index > range)
            throw new RangeError(`The index ${index} is out of bounds.`);
        if (Number.isNaN(index)) throw new Error("NaN isn't a valid index.");
    };
};

