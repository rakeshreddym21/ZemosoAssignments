//Modify the following code such that the object properties are destructured and logged.
const person = {
  myName: "Noam Chomsky",
  age: 92,
};

// let myName = person.name;
// let age = person.age;
const {myName,age}=person;
console.log(myName);
console.log(age);
