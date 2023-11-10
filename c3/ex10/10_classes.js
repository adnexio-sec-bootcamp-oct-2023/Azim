/*
Design a Vehicle class with properties like make, model, and year. Implement methods to:
1. Display vehicle details using a template literal.
2. A static method that returns the number of vehicle instances created.
Then, extend this Vehicle class with a Car subclass. The Car class should have 
additional properties like mileage and a method to calculate the age of the car 
based on the current year.
*/

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        Vehicle.incrementInstanceCount();
    }

    displayDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }

    static incrementInstanceCount() {
        if (!this.instanceCount) {
            this.instanceCount = 0;
            console.log(this.instanceCount);
        }
        this.instanceCount++;
        console.log(this.instanceCount);
    }

    static getInstanceCount() {
        return this.instanceCount || 0;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, mileage) {
        super(make, model, year);
        this.mileage = mileage;
    }

    calculateAge(currentYear) {
        return currentYear - this.year;
    }
}

const vehicle1 = new Vehicle('Toyota', 'Vios', 2023);
const vehicle2 = new Vehicle('Honda', 'CRV', 2007);
const car1 = new Car('Perodua', 'Kancil', 1999, 310000);

console.log(vehicle1.displayDetails());
console.log(vehicle2.displayDetails());
console.log(car1.displayDetails());

const currentYear = new Date().getFullYear();
console.log(`Car1 Age: ${car1.calculateAge(currentYear)}`);

console.log(`Number of vehicle instances created: ${Vehicle.getInstanceCount()}`);