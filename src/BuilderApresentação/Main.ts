import { CarBuilder } from "./CarBuilder";
import { CarManualBuilder } from "./CarManualBuilder";
import { Director } from "./Director";

const director = new Director();

//construindo carro esportivo
const carBuilder = new CarBuilder();
director.makeSportsCar(carBuilder);
const sportsCar = carBuilder.getResult();
console.log("Sports Car:", sportsCar)

//construindo um manual pro carro
const manualBuilder = new CarManualBuilder();
director.makeSportsCar(manualBuilder);
const sportsCarManual = manualBuilder.getResult();
console.log("Sports Car Manual:", sportsCarManual.content);
