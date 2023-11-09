var numberOfWheels = 7;
let vehicleType;

switch (numberOfWheels) {
    case 2:
        vehicleType = "bike";
        break;
    case 4:
        vehicleType = "car";
        break;
    default:
        vehicleType = "UFO";
        break;
}

console.log(`The vehicle is a ${vehicleType}.`);
