In JavaScript, classes are a way to create objects and deal with object-oriented programming. Introduced in ECMAScript 6 (ES6), classes are essentially syntactical sugar over JavaScript's existing prototype-based inheritance. They make it easier to create objects and manage inheritance.

Here's a detailed explanation and example of how classes work in JavaScript:

### Basic Syntax

A class in JavaScript is defined using the `class` keyword followed by the class name. Inside the class, you can define a constructor and methods.

```javascript
class Person {
	// The constructor method is a special method for creating and initializing an object created with a class.
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// Method
	greet() {
		console.log(
			`Hello, my name is ${this.name} and I am ${this.age} years old.`
		);
	}

	// Static Method
	static describe() {
		console.log("A person is a human being.");
	}
}

// Create an instance of the Person class
const person1 = new Person("Alice", 30);

// Accessing properties
console.log(person1.name); // Output: Alice
console.log(person1.age); // Output: 30

// Calling a method
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Calling a static method
Person.describe(); // Output: A person is a human being.
```

### Explanation

1. **Class Declaration:**

   ```javascript
   class Person {
     ...
   }
   ```

   This defines a new class named `Person`.

2. **Constructor:**

   ```javascript
   constructor(name, age) {
     this.name = name;
     this.age = age;
   }
   ```

   The `constructor` method is called automatically when a new instance of the class is created. It initializes the object's properties.

3. **Methods:**

   ```javascript
   greet() {
     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
   }
   ```

   This defines a method named `greet` that belongs to the class.

4. **Static Methods:**

   ```javascript
   static describe() {
     console.log('A person is a human being.');
   }
   ```

   Static methods are called on the class itself, not on instances of the class.

5. **Creating an Instance:**
   ```javascript
   const person1 = new Person("Alice", 30);
   ```
   This creates a new instance of the `Person` class.

### Inheritance

Classes in JavaScript support inheritance, allowing one class to inherit properties and methods from another class using the `extends` keyword.

```javascript
class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name, age); // Calls the constructor of the parent class (Person)
		this.jobTitle = jobTitle;
	}

	// Method
	describeJob() {
		console.log(`I am a ${this.jobTitle}.`);
	}
}

// Create an instance of the Employee class
const employee1 = new Employee("Bob", 25, "Software Developer");

// Accessing properties and methods from both the parent and child class
employee1.greet(); // Output: Hello, my name is Bob and I am 25 years old.
employee1.describeJob(); // Output: I am a Software Developer.
```

### Explanation

1. **Inheritance:**

   ```javascript
   class Employee extends Person {
     ...
   }
   ```

   The `Employee` class extends the `Person` class, inheriting its properties and methods.

2. **Calling the Parent Constructor:**

   ```javascript
   super(name, age);
   ```

   The `super` keyword is used to call the constructor of the parent class (`Person`).

3. **Additional Properties and Methods:**
   ```javascript
   this.jobTitle = jobTitle;
   describeJob() {
     console.log(`I am a ${this.jobTitle}.`);
   }
   ```
   The `Employee` class adds an additional property (`jobTitle`) and method (`describeJob`).

By using classes, you can create modular, reusable, and organized code that adheres to the principles of object-oriented programming.
