class Person{
    constructor(firstname, lastname, age, car){
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
        this._car = car;
    }
}

class Car {
    constructor(brand, model, year){
        this._brand = brand;
        this._model = model;
        this._year = year;
    }
}

const car1 = new Car("Renaud", "Super 5", 1983);
const car2 = new Car("Mercedes", "Class S", 2006);

const person1 = new Person("John", "Doe", 46, car1);
const person2 = new Person("John", "Lennon", 36, car2);

console.log(person1);