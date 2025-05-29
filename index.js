// var -> function
// let -> block
// const -> block

/*function test(){
    for(var i=0;i<5;i++){
        console.log(i); // it will print 0 to 4
    }
    console.log(i); // it will print 5 --- means var accessible whithin function scope
}*/

/*function test2(){
    for(let i=0;i<5;i++){
        console.log(i); // it will print 0 to 4
    }
    console.log(i); // ReferenceError: i is not defined --- means let accessible whithin loop - block scope
}*/

/*const x = 1;
x = 2; // declare variable using const then can not reassign - TypeError: Assignment to constant variable.
*/

//test();
//test2();
//------------------

////----  objects ------------------

/*const person = {
    name : 'Mosh',
    walk(){},
    talk(){}
};

person.talk();
person.name = 'bbb';

const targetmember = 'name';
person[targetmember.value] = 'ABC';
*/

//------------------------
/*const person = {
    name : 'ABC',
    walk(){
        console.log(this); // this returns reference to current object -- o/p - { name: 'ABC', walk: [Function: walk] }
    }
};

person.walk();

//const walk = person.walk; //this is only reference
//console.log(walk); // o/p - [Function: walk]
//walk(); // -- undefined

const walk = person.walk.bind(person);
walk(); // -- o/p - { name: 'ABC', walk: [Function: walk] } -- bind method solves the above undefined issue
*/

//------------------
//---- arrow function ------------------

/*const square = number => number * number;
console.log(square(5));

const jobs = [
    { id : 1, isActive : true},
    { id : 2, isActive : true},
    { id : 3, isActive : false}
];

const activejobs = jobs.filter(job => job.isActive);
console.log(activejobs);
*/

//------------------
//---- arrow function and this ------------------

/*const person = {
    talk(){
        var self = this;
        setTimeout(function(){
            console.log("self", self);
        },1000);
    }
};

person.talk(); // --- o/p - self { talk: [Function: talk] }

const person_two = {
    talk(){
        var self = this;
        setTimeout(() => {
            console.log("this", this);
        },1000);
    }
};

person_two.talk(); // --- o/p - this { talk: [Function: talk] }
*/

//------------------
//---- array.map ------------------

/*const colors = ["red","green","yellow"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
*/
//------------------
//---- object destructuring ------------------

/*const address = {
    street : '',
    city : '',
    country : ''
};

//const street = address.street;
//const city  = address.city;
//const country = address.country;


// above 3 stmt is same as below 1 line - object destructing
const { street, city, country } = address;
*/
//------------------
//---- spread operator ------------------

/*const first = [1,2,3];
const second = [4,5,6];

const combine = [...first,'a',...second,'b'];
console.log(combine);

const one = {name : 'abc'};
const two = {job : 'def'};

const comb = {...one, ...two, location : 'eee'};
console.log(comb);

*/
//------------------
//---- class ------------------

/*
class Person{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log('in walk method');
    }
}

const person = new Person('ABC');

class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log('Teach');
    }
}

const teacher = new Teacher('DEF','MSC');
*/
//------------------
//// modules ////////
/*import { Teacher } from "./teacher.js"; // -- 2 modules - person.js, teacher.js
const teacher = new Teacher('DEF','MSC');
teacher.teach();
*/
//------------------
//---- named and default export ------ curly braces needed for named exports and does not need curly braces for default exports
import Teacher from "./teacher.js"; // -- code is running without curly braces because we have written Default word for class like -- export default class Teacher extends Person
const teacher = new Teacher('DEF','MSC');
teacher.teach();
