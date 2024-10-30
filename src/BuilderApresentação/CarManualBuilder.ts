import { Manual } from "./Manual";

export class CarManualBuilder implements Builder {
    manual: Manual;
    constructor() {
        this.manual = new Manual();
    }
    reset(): void {
        this.manual = new Manual();
    }
    setSeats(seats: number): void {
        this.manual.addContent(`Seats: ${seats}`);
    }
    setEngine(engine: string): void {
        this.manual.addContent(`Engine: ${engine}`);
    }
    setTripComputer(): void {
        this.manual.addContent("Trip computer: Included");
    }
    setGPS(): void {
        this.manual.addContent("GPS: Included");
    }
    getResult(): Manual {
        return this.manual;
    }
}