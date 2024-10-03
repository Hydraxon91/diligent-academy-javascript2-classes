function Person(age, name) {
    this.age = age;
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello my name is: ${this.name}`);
}

const person1 = new Person(30, 'John Doe');

person1.greet();

class Car{
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log('brumm');
        
    }
}

const car1 = new Car('Toyota', 2200);

car1.startEngine();

console.log(person1);
console.log(car1);

class ElectricCar extends Car{
    #owner = 'Me';
    constructor(model, year, batteryCapacity){
        super(model, year);
        this.batteryCapacity = batteryCapacity;
    }

    get everything(){
        return this.model;
    }

    startEngine () {
        console.log('jklé');
        
    }

}

const eCar = new ElectricCar(1,2,3,4);

eCar.model = 'hamburger'

console.log(eCar.everything);



