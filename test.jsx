function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}

Person.prototype.speak = function () {
  return `Hello, my name is ${this.name}`;
};

const fred = new Person({
  //in between this and the end is the object literal!
  age: 35,
  name: "Fred",
  homeTown: "Bedrock",
});

console.log(fred);

console.log(Person.prototype);
