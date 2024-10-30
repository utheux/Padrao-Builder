import { Car } from "./Car";

export class CarBuilder implements Builder {
    car: Car;
    
    constructor() {
        this.car = new Car();
    }
    reset(): void {
        this.car = new Car();
    }
    setSeats(seats: number): void {
        this.car.seats = seats;
    }
    setEngine(engine: string): void {
        this.car.engine = engine;
    }
    setTripComputer(): void {
        this.car.tripComputer = true;
    }
    setGPS(): void {
        this.car.GPS = true;
    }
    getResult(): Car {
        return this.car;
    } 
}