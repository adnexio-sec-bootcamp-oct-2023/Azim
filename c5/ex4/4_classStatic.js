class Vehicle {
    static totalInstances = 0;
  
    constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
      Vehicle.totalInstances++;
    }
  
    accelerate() {
      console.log(`${this.brand} is accelerating. Current speed: ${this.speed} km/h`);
      this.speed += 10;
    }
  
    brake() {
      console.log(`${this.brand} is braking. Current speed: ${this.speed} km/h`);
      this.speed -= 5;
    }
  
    static getTotalInstances() {
      console.log(`Total number of vehicle instances created: ${Vehicle.totalInstances}`);
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
  const myBike = new Bike("Schwinn", 20, true);
  
  Vehicle.getTotalInstances();