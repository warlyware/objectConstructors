'use strict';

function Bootcamp(name, capacity) {
  this.name = name;
  this.capacity = capacity;
  this.students = [];
  return this;
}

var codingHouse = new Bootcamp('Coding House', 30);

function Student(name, species, age) {
  this.name = name;
  this.species = species;
  this.age = age;
  return this;
};


Bootcamp.prototype.enroll = function(animal) {
  if (this.students.length < this.capacity) {
    this.students.push(animal);
  }
};

var ryano = new Student('ryano', 'human', 26);
codingHouse.enroll(ryano);

console.log(codingHouse);