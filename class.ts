import{login, user}from "./interface"

interface address {
    city: string;
    state: string;
    zip: number;
}

class student implements login {
    #id: number;
  name: string;
  age?: number;
  address: address;
  static studentCount(): number{
    return 50;
  }

  get studentId():number{
    return this.#id;
  }

  set studentId(id:number){
    this.#id = id;
  }

  constructor(id:number,name: string, age: number, address: address) {
    this.#id = id;
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getNameWithAge():string { 
    return `${this.name} is ${this.age} years old`;
   }

   login():user{
    return {id:15,name:"jaja",age:20}
   }
}
let rishi = new student(7,"rishi", 23, {city:"abc",state:"south",zip:12345});
console.log(rishi.studentId);
// console.log(rishi);
console.log(rishi.login());
// console.log(rishi.getNameWithAge())

class engineer extends student{
    constructor(id:number,name: string, age: number, address: address) {
        super(id,name, age, address);
    }


}
let tamoghna = new engineer(10,"tamoghna",22,{city:"cba",state:"north",zip:12345})
// console.log(tamoghna);
console.log(tamoghna.studentId);
// console.log(tamoghna.getNameWithAge())
// console.log(student.studentCount());
// console.log(engineer.studentCount());
