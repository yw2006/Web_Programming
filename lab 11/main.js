// function callAthorFn(onotherFn) {
//   console.log("this is call other function");
//   onotherFn();
// }
// let y = () => {
//   console.log("y");
// };
// callAthorFn(y);

// var arr = [100, 10, 200, 300, 400, 500, 600, 700, 800, 900];
// arr.map((x) => console.log(x));
// console.log("the poped element");
// console.log(arr.pop());
// console.log("the array after poped");
// arr.map((x) => console.log(x));
// console.log("the pushed element is \n ahmed,mohamed");
// arr.push("ahmed", "mohamed");
// arr.map((x) => console.log(x));
// arr.splice(4, 0, "removed");
// console.log("after removing from4 and remove 3 elements");
// arr.map((x) => console.log(x));
// console.log("the sifted elements is ", arr.shift());
// arr.map((x) => console.log(x));
// console.log("the and unshift elements is ", 10);
// arr.unshift(10);
// arr.map((x) => console.log(x));
// console.log(arr.lastIndexOf(10));
// // lecture today
// const content = document.getElementById("content");
// console.log(content);
// content.textContent = " hello world ahmed";
// const h1 = document.createElement('h1');
// const text = document.createTextNode('yousef walid');
// content.after(h1.appendChild(text));
// const submitType = document.getElementById("submitType");
// submitType.addEventListener('click',()=>{
//     alert('hello from alert');
// })
// start of lab 11
let person = {
  name:"ALi",
  age:25,
}
console.log(person.name)
person.major = 'cs';
delete person.age;
console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
const person1 = {}
Object.assign(person1,person,{
  job:'software engineer'
})
person1.hello=  function(){
  console.log(this)
}
person1.hello()

function Person(name, age,major){
this.name = name
this.age = age
this.major = major
}
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function (){
    console.log('speak');
}
console.log(Animal.prototype)
function Dog(name){
  Animal.call(name)
}
Dog.prototype = Object.create(Animal.prototype);
console.log(Dog.prototype)
const d = new Dog('hwhw')
d.speak()

const p = new Person('yousef',15,'cyber')
console.log(p);

class Animal1 {
  constructor (name){
    this.name = name ;
  }
  speak(){
    console.log(`${this.name} speak`)
  }
}

class Dog1 extends Animal1 {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  speak() {
    console.log(`${this.name} parks`);
  }
  details() {
    console.log(`the name is ${this.name} and the type is ${this.type}`);
  }
}
let d1 = new Dog1 ('dox','german')
console.log(JSON.stringify(d1));
console.log(JSON.parse('{"name":"ahmed"}'));
