/*
Create an ES6 class named Vehicle with properties like brand and speed. 
Implement methods within the class to accelerate and brake.
*/

class Vehicle {
    constructor(brand, model, speed){
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
    }
}

const myCar = new Vehicle("Toyota", "Corolla", 60);
myCar.accelerate();
myCar.brake();