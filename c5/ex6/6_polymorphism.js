// Superclass
class Shape {
    constructor() {
        // where common properties
    }

    // Method to be overrridden
    area() {
        // implemented by subclass
    }
}

// Subclass Circle
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        // pi * r^2
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        // pi * r^2
        return this.width * this. height;
    }
}

// Subclass Triangle
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

console.log("Circle Area:", circle.area());
console.log("Rectangle Area:", rectangle.area());
console.log("Triangle Area:", triangle.area());