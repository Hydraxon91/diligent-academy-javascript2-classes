// ### Creating a Basic Shape Class

class Shape {
    constructor(color, filled){
        this.color = color;
        this.filled = filled;
    }
    getArea(){
        throw new Error('getArea() must be implemented in subclasses');
    }

    describe() { //### Adding a describe() Method
        return `A ${this.filled ? 'filled' : 'not filled'} shape with color ${this.color}.`;
    }
}

//### Creating a Rectangle Class

class Rectangle extends Shape{
    constructor(color, filled, width, height){
        super(color, filled);
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width*this.height;
    }

    describe() {
        return `A ${this.filled ? 'filled' : 'not filled'} rectangle with color ${this.color}, width ${this.width}, and height ${this.height}.`;
    }
}

// ### Creating a Circle Class

class Circle extends Shape{
    constructor(color, filled, radius){
        super(color, filled);
        this.radius = radius;
    }

    getArea(){
        return Math.PI*this.radius*this.radius;
    }

    describe() {
        return `A ${this.filled ? 'filled' : 'not filled'} circle with color ${this.color} and radius ${this.radius}.`;
    }

}

// ### Creating a Square Class

class Square extends Rectangle{
    constructor(color, filled, side){
        super(color, filled, side, side);
    }

    describe() {
        return `A ${this.filled ? 'filled' : 'not filled'} square with color ${this.color} and side length ${this.width}.`;
    }
}


const rectangle = new Rectangle('blue', true, 4, 5);
console.log(rectangle.describe());

const circle = new Circle('red', false, 3);
console.log(circle.describe());

const square = new Square('green', true, 4);
console.log(square.describe());