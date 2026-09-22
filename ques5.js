class Vehicle {
    constructor(vehicleNo, driverName, distance) {
    this.vehicleNo = vehicleNo;
    this.driverName = driverName;
    this.distance = distance;
    }
    calculateFare() {
    return 0;
    }
    static platformName() {
    console.log("Booking Platform: QuickRide");
    }
}
class Car extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
    }
    calculateFare() {
    return this.distance*15;
    }
}
class Bike extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
    super(vehicleNo, driverName, distance);
    }
    calculateFare() {
    return this.distance*8;
    }
}
Vehicle.platformName();
let car = new Car("car101", "rahul", 20);
let bike = new Bike("bike202", "amit", 15);
console.log("car fare: rs." + car.calculateFare());
console.log("bike fare: rs." + bike.calculateFare());