/*
1) 
შექმენით კლასი სახელწოდებით Car რომელიც შეიცავს, მოდელს და წელს. დაამატეთ function სახელად start,
 რომელიც აღწერს შეტყობინებას, რომელიც მიუთითებს, რომ ეს მანქანა ამა და ამ წლის დაიძრა


 


 2)შექმენით პიროვნების კლასი სახელის, ასაკისა და პროფესიის თვისებებით. ჩართეთ მეთოდი სახელწოდებით introduction(), 
 რომელიც აღწერს პიროვნების გაცნობის შეტყობინებას.

 3)გამოიყენეთ მემკვიდრეობა სადაც დაგჭირდებათ extends და ერთი კლასის ინფორმაცია უნდა გამოყენებული იყოს
 მეორე კლასში.
*/

class Car {
  constructor(model, age) {
    this.age = age;
    this.model = model;
  }

  introduction() {
    return `car's model is ${this.model} and car's age is ${this.age}`;
  }
}
console.log(new Car("opel", 50).introduction());

class human {
  constructor(name, age, proffesion) {
    this.age = age;
    this.name = name;
    this.proffesion = proffesion;
  }

  introduction() {
    return `name is ${this.name} age is ${this.age} proffesion is ${this.proffesion}`;
  }
}

console.log(new human("nika", 21, "web").introduction());



class sound {
    constructor(animal,sound){
        this.animal = animal
        this.sound = sound
    }

    giveMeInfo(){
        return (`${this.animal} says ${this.sound}`)
    }
}

class Dog extends sound{}

const dog = new Dog("cat","meow")

console.log(dog.giveMeInfo());