class Calculator {
    constructor(add) {
        this.add = (a, b) => a + b;
        this.subtract = (a, b) => a - b;
        this.multiply = (a, b) => a * b;
        this.divide = (a, b) => {
            if (b === 0) {
                return "infinite value";
            }
            return a / b;
        };
    }
}

const myCalculator = new Calculator();

console.log("Add: ", myCalculator.add(6, 5));
console.log("Subtract: ", myCalculator.subtract(6, 5));
console.log("Multiply: ", myCalculator.multiply(6, 5));
console.log("Division: ", myCalculator.divide(6, 5));