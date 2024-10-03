# Prototypes

Task 1: 

### Creating a Basic Product
Create a Product object.
Properties: name, price, description.
Method: displayInfo() which logs the product details.

Task 2: 

### Adding a Category to Products
Add a category property to all Product objects.
Create a new method isOfType(type) that returns true if the product's category matches the given type.

Task 3: 

### Creating a Book Prototype
Create a Book object that inherits from Product.
Add a author property.
Override the displayInfo() method to include the author.

Task 4: 

### Creating a Movie Prototype
Create a Movie object that inherits from Product.
Add a director and releaseYear property.
Override the displayInfo() method to include the director and release year.

Task 5: 

### Overriding Methods in Subclasses
Create a DiscountedProduct that inherits from Product.
Add a discountPercentage property.
Override the price getter to return the discounted price.

# Classes

Task 1: 

### Creating a Basic Shape Class
Create a Shape class.
Properties: color, filled.
Method: getArea() which throws an error indicating that the method should be implemented in subclasses.

Task 2: 

### Creating a Rectangle Class
Create a Rectangle class that extends Shape.
Additional properties: width, height.
Override the getArea() method to calculate the rectangle's area.

Task 3: 

### Creating a Circle Class
Create a Circle class that extends Shape.
Additional property: radius.
Override the getArea() method to calculate the circle's area.

Task 4: 

### Creating a Square Class
Create a Square class that extends Rectangle.
Ensure that width and height are always equal.

Task 5: 

### Adding a describe() Method
Add a describe() method to the Shape class.
This method should return a string describing the shape.
Override this method in the subclasses to provide more specific descriptions.

# Advanced

Task 1: 

### Creating a Custom Array with Enhanced Functionality
Create a CustomArray class that extends the built-in Array class.
Implement additional methods:
sum(): Calculates the sum of all numeric elements.
product(): Calculates the product of all numeric elements.
average(): Calculates the average of all numeric elements.
unique(): Returns a new array containing only unique elements.

Task 2: 

### Implementing a PubSub Pattern Using Prototypes
Create a Publisher object with a subscribe method.
Create a Subscriber object with a notify method.
Use a prototype chain to connect publishers and subscribers.
Implement a publish methodon thePublisher` to notify all subscribers.

Task 3: 

### Creating a Custom Event System
Build a custom event system using prototypes.
Implement on, off, and emit methods to handle event binding, unbinding, and triggering.

Task 4: 

### Implementing a Factory Function for Creating Objects
Create a factory function that takes an object as an argument and returns a new object with the specified properties and methods.
Use the factory function to create objects of different types.

Task 5: 

### Creating a Class-Based Component System
Design a class-based component system with a Component base class.
Implement methods for rendering, updating, and lifecycle hooks.
Create a VirtualDOM class to manage the component tree.