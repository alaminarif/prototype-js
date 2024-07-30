// const personMethods = {
//   sleep() {
//     console.log(`Person is Sleeping`);
//   },
//   eat() {
//     console.log(`Person is eating`);
//   },
// };

// function Person(name, age) {
//   let person = {};

//   person.name = name;
//   person.age = age;

//   person.eat = personMethods.eat;

//   return person;
// }

// const sakib = Person("skib", 35);

// console.log(sakib);

// object crate
// const captain = {
//   name: "arif",
//   age: 25,
//   country: "Bangladesh",
// };

// const player = Object.create(captain);
// console.log(player.name);

//
// const personMethods = {
//   sleep() {
//     console.log(`Person is Sleeping`);
//   },
//   eat() {
//     console.log(`Person is eating`);
//   },
// };

// function Person(name, age) {
//   let person = Object.create(personMethods);

//   person.name = name;
//   person.age = age;

//   // person.eat = person Methods.eat;

//   return person;
// }

// const sakib = Person("skib", 35);

// console.log(sakib);

//
// Person.prototype = {
//   sleep() {
//     console.log(`Person is Sleeping`);
//   },
//   eat() {
//     console.log(`Person is eating`);
//   },
// };

// function Person(name, age) {
//   let person = Object.create(Person.prototype);

//   person.name = name;
//   person.age = age;

//   // person.eat = person Methods.eat;

//   return person;
// }

// const sakib = Person("skib", 35);

// console.log(sakib);

/*
Person.prototype = {
  sleep() {
    console.log(`Person is Sleeping`);
  },
  eat() {
    console.log(`Person is eating`);
  },
};

function Person(name, age) {
  // let person = Object.create(Person.prototype);

  this.name = name;
  this.age = age;

  // person.eat = person Methods.eat;

  // return person;
}

const sakib = new Person("skib", 35);

console.log(sakib.eat());

*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sleep() {
    console.log(`Person is Sleeping`);
  }
  eat() {
    console.log(`Person is eating`);
  }
}

const sakib = new Person("skib", 35);

console.log(sakib.eat());
