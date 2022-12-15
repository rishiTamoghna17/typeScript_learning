"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _student_id;
Object.defineProperty(exports, "__esModule", { value: true });
class student {
    static studentCount() {
        return 50;
    }
    get studentId() {
        return __classPrivateFieldGet(this, _student_id, "f");
    }
    set studentId(id) {
        __classPrivateFieldSet(this, _student_id, id, "f");
    }
    constructor(id, name, age, address) {
        _student_id.set(this, void 0);
        __classPrivateFieldSet(this, _student_id, id, "f");
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getNameWithAge() {
        return `${this.name} is ${this.age} years old`;
    }
    login() {
        return { id: 15, name: "jaja", age: 20 };
    }
}
_student_id = new WeakMap();
let rishi = new student(7, "rishi", 23, { city: "abc", state: "south", zip: 12345 });
console.log(rishi.studentId);
// console.log(rishi);
console.log(rishi.login());
// console.log(rishi.getNameWithAge())
class engineer extends student {
    constructor(id, name, age, address) {
        super(id, name, age, address);
    }
}
let tamoghna = new engineer(10, "tamoghna", 22, { city: "cba", state: "north", zip: 12345 });
// console.log(tamoghna);
console.log(tamoghna.studentId);
// console.log(tamoghna.getNameWithAge())
// console.log(student.studentCount());
// console.log(engineer.studentCount());
