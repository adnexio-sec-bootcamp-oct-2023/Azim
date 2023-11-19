/*
Extend the Vehicle class to create subclasses named Car and Bike. 
Introduce unique properties and methods for each subclass.
*/

/*
Create an ES6 class named Vehicle with properties like brand and speed. 
Implement methods within the class to accelerate and brake.
*/

class Vehicle {
    constructor(brand, speed){
        this.brand = brand;
        //this.model = model;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.brand} is accelerating. Current speed: ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.brand} is braking. Current speed: ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, numWheels) {
        super(brand, speed);
        this.numWheels = numWheels;
    }

    drift() {
        console.log(`${this.brand} is drifting!`);
    }
}

class Bike extends Vehicle {
    constructor(brand, speed, hasBell) {
        super(brand, speed);
        this.hasBell = hasBell;
    }

    ringBell() {
        if (this.hasBell) {
            console.log(`${this.brand} is ringing the bell!`);
        } else {
            console.log(`${this.brand} doesn't have a bell.`);
        }
    }
}

const myCar = new Car("Toyota", 60, 4);
myCar.accelerate();
myCar.drift();

const myBike = new Bike("TREX", 20, true);
myBike.accelerate();
myBike.ringBell();