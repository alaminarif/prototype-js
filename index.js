function Person(name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.eat = function () {
    console.log(`Person is eating`);
  };
  person.sleep = function () {
    console.log(`Person is Sleeping`);
  };
  person.eat = function () {
    console.log(`Person is eating`);
  };

  return person;
}
