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
}

Bootcamp.prototype.findByAge = function(age) {
  return this.students.filter(function(student) {
    return student.age < age;
  });
}

Bootcamp.prototype.studentGetsJob = function(student) {
  var students = this.students;
  students.splice(students.name = ' goodbye ' + this.name + ' I will miss you');
};


var ryano = new Student('Ryano', 'human', 26);
var dan = new Student('Dan', 'human', 44);
var sean = new Student('Sean', 'human', 31);
var troy = new Student('Troy', 'human', 85);
var bob = new Student('Bob', 'human', 15);
var charlie = new Student('Charlie', 'dog', 14);

var studentArr = [ryano, dan, sean, troy, bob, charlie];
studentArr.forEach(function(student) {
  codingHouse.enroll(student);
})


codingHouse.enroll(ryano);

codingHouse.studentGetsJob(ryano);

console.log(codingHouse);
console.log(codingHouse.findByAge(24));