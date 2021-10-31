/*
class student {
    constructor(){ // Lo primero que se va a ejecutar
    }
    greeting(){
        console.log(`Hello Friend!`);
        }
    };
// Instanciar un objeto
const Cesar = new student();
Cesar.greeting();
*/

// Import (chalk) from "chalk";


class Device {
    constructor(Name, model, NumLeds, location){ // Lo primero que se va a ejecutar
        this.name = Name;
        this.model = model;
        this.NumLeds = NumLeds;
        this.location = location;
    }
    turnOnLed(){
        console.log(`LED turned on...`);
        }
    };

// Instanciar un objeto
const David = new Device("MyFirstDevice", "RasperryPi4", 2, 1000); //<---- Esto es el constructor
David.turnOnLed();
     