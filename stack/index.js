class Stack {
	constructor() {
		this.stack = [];
	}

	addData(data) {
		this.stack.push(data);
	}

	removeData() {
		this.stack.pop();
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}

	getStackSize() {
		return this.stack.length;
	}

	isStackEmpty() {
		return this.stack.length === 0;
	}

	makeStackEmpty() {
		this.stack = [];
	}

	isElementPresent(data) {
		return this.stack.includes(data);
	}

	reverseStack() {
		this.stack.reverse();
	}

	printStack() {
		let str = "";
		for (let i = 0; i < this.stack.length; i++) {
			str = str + this.stack[i] + " ";
		}
		return str;
	}
}

// Usage Example

let myStack = new Stack();
console.log(myStack.stack);

myStack.addData(10);
myStack.addData(20);
myStack.addData(30);
console.log(myStack.stack);

myStack.removeData();
console.log(myStack.stack);

console.log(myStack.printStack());
