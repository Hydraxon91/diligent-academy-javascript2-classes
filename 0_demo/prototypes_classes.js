//JS OOP
//Prototypes

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const personOne = new Person("John", 69)
console.log(personOne);

Person.prototype.greet = function () {
    console.log(`${this.name} says hello`);
    
}

personOne.greet();


class Car{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log("145Hp brrrrrrrrrrr");
    }
}

const car = new Car('Toyoda', 'Celica', 2000)

console.log(car);

car.startEngine();

class ElectricCar extends Car{
    #owner = 'me' //private field
    nonprivateOwner = "Scoobs"
    constructor(make, model, year, batteryCapacity){
        super(make, model, year)
        this.batteryCapacity=batteryCapacity;
    }

    static Pi = 3.14;

    get everything(){
        return this.model + this.year;
    }
}

const eCar = new ElectricCar('Toyota', 'Prius', 2000, 200000000);
console.log(eCar);
console.log(ElectricCar.Pi);
console.log(eCar.Pi);
console.log(eCar.nonprivateOwner);
console.log(eCar.everything);