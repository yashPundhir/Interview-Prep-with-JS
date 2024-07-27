what is the use of static method in js classes?

Static methods in JavaScript classes are methods that belong to the class itself rather than to instances of the class. They are defined using the `static` keyword. These methods can be called on the class itself, not on instances of the class, and are typically used for utility functions, helper methods, or functions that pertain to the class as a whole rather than to any specific instance.

### Use Cases for Static Methods

1. **Utility Functions:**
   Static methods are often used to define utility functions that perform operations related to the class but do not require access to instance-specific data.

2. **Helper Methods:**
   They can serve as helper methods to process data or perform tasks that are relevant to the class but do not need to be tied to an instance.

3. **Factory Methods:**
   Static methods can be used to create and return instances of the class, providing a way to encapsulate instance creation logic within the class itself.

4. **Configuration and Constants:**
   They can also be used to store configuration settings or constants that are shared across all instances of the class.

### Example of Static Methods

Here's an example demonstrating the use of static methods in a JavaScript class:

```javascript
class MathUtils {
	// Static method to calculate the area of a circle
	static calculateCircleArea(radius) {
		return Math.PI * radius * radius;
	}

	// Static method to convert degrees to radians
	static degreesToRadians(degrees) {
		return (degrees * Math.PI) / 180;
	}

	// Static method to convert radians to degrees
	static radiansToDegrees(radians) {
		return (radians * 180) / Math.PI;
	}
}

// Calling static methods on the class itself, not on an instance
console.log(MathUtils.calculateCircleArea(5)); // Output: 78.53981633974483
console.log(MathUtils.degreesToRadians(180)); // Output: 3.141592653589793
console.log(MathUtils.radiansToDegrees(Math.PI)); // Output: 180
```

### Explanation

1. **Static Methods Definition:**

   ```javascript
   static calculateCircleArea(radius) {
     return Math.PI * radius * radius;
   }
   ```

   The `calculateCircleArea` method is defined as static, so it can be called on the `MathUtils` class directly.

2. **Calling Static Methods:**
   ```javascript
   console.log(MathUtils.calculateCircleArea(5));
   ```
   The static method is called on the class itself (`MathUtils.calculateCircleArea`), not on an instance of the class.

### Key Points

- **No Access to Instance Data:** Static methods cannot access instance properties or methods directly since they are called on the class itself, not on instances.
- **Utility and Helper Functions:** They are ideal for functions that perform operations relevant to the class but do not need to work with instance-specific data.
- **Class-Level Operations:** Static methods are suitable for operations that are related to the class as a whole, such as factory methods, configuration, or constants.

In summary, static methods in JavaScript classes provide a way to define functions that are relevant to the class itself rather than to any individual instance, enabling more modular and organized code.

---

---

---

Give a real world application example where static is used for Utility Functions, Helper Methods, Factory Methods, Configuration and Constants?

Certainly! Here's a real-world example that demonstrates the use of static methods for utility functions, helper methods, factory methods, configuration, and constants in a JavaScript class:

### Example: User Management System

Let's consider a `User` class in a user management system. This class can have various static methods to manage users, perform utility functions, and provide configuration and constants.

#### Utility Functions

Utility functions are methods that perform common operations related to the class but do not require an instance.

```javascript
class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}

	// Utility function to validate email format
	static validateEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
}
```

#### Helper Methods

Helper methods are static methods that assist in performing certain operations.

```javascript
class User {
	// ... constructor and other methods

	// Helper method to sanitize user input
	static sanitizeInput(input) {
		return input.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
	}
}
```

#### Factory Methods

Factory methods are used to create instances of the class with some predefined settings or validations.

```javascript
class User {
	// ... constructor and other methods

	// Factory method to create a guest user
	static createGuestUser() {
		return new User("Guest", "guest@example.com");
	}

	// Factory method to create a user from JSON data
	static fromJSON(json) {
		const data = JSON.parse(json);
		if (!this.validateEmail(data.email)) {
			throw new Error("Invalid email format");
		}
		return new User(data.name, data.email);
	}
}
```

#### Configuration and Constants

Static methods or properties can hold configuration settings or constants that are shared across all instances.

```javascript
class User {
	// ... constructor and other methods

	// Static property for default role
	static DEFAULT_ROLE = "user";

	// Static method to get the default role
	static getDefaultRole() {
		return this.DEFAULT_ROLE;
	}

	// Static method for configuration settings
	static getConfig() {
		return {
			maxUsers: 100,
			adminEmail: "admin@example.com",
		};
	}
}

// Usage examples

// Utility function
console.log(User.validateEmail("test@example.com")); // Output: true

// Helper method
console.log(User.sanitizeInput(" <script>alert('Hello');</script> ")); // Output: "&lt;script&gt;alert('Hello');&lt;/script&gt;"

// Factory methods
const guestUser = User.createGuestUser();
console.log(guestUser); // Output: User { name: 'Guest', email: 'guest@example.com' }

const userData = '{"name": "John Doe", "email": "john@example.com"}';
const user = User.fromJSON(userData);
console.log(user); // Output: User { name: 'John Doe', email: 'john@example.com' }

// Configuration and constants
console.log(User.getDefaultRole()); // Output: "user"
console.log(User.getConfig()); // Output: { maxUsers: 100, adminEmail: 'admin@example.com' }
```

### Explanation

1. **Utility Function (`validateEmail`):**

   - This static method checks if an email address is in the correct format.

2. **Helper Method (`sanitizeInput`):**

   - This static method sanitizes user input to prevent HTML injection attacks.

3. **Factory Methods (`createGuestUser`, `fromJSON`):**

   - `createGuestUser` creates a new user instance with predefined guest details.
   - `fromJSON` creates a user instance from JSON data, validating the email in the process.

4. **Configuration and Constants (`DEFAULT_ROLE`, `getConfig`):**
   - `DEFAULT_ROLE` is a static property holding the default role for users.
   - `getConfig` is a static method returning configuration settings for the user management system.

These static methods help keep the class organized and provide utility functions, helper methods, factory methods, and configuration/constants that are relevant to the class as a whole.
