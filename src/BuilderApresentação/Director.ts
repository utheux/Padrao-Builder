export class Director {
    makeSportsCar(builder: Builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine("Sport Engine");
        builder.setTripComputer();
        builder.setGPS();
    }

    makeSUV(builder: Builder) {
        builder.reset();
        builder.setSeats(4);
        builder.setEngine("SUV Engine");
        builder.setTripComputer();
    }
}