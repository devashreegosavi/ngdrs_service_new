import { Person } from "./person.js";
export default class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log('Teach g');
    }
}