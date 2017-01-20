/**
 * Created by User on 11.11.2016 г..
 */
// function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`;
        }
    }

    // return {
    //     Person,
    //     Teacher,
    //     Student
    // }
// };

let p = new Person('Ivan', 'ivan@abv.bg');
let t = new Teacher('Gosho', 'gosho@abv.bg', 'Math');
let s = new Student('Nasko', 'nasko@abv.bg', 'JS');
console.log('' + p);
console.log('' + t);
console.log('' + s);
console.log(Object.getPrototypeOf(Person) == Function.prototype);
console.log(Object.getPrototypeOf(Teacher) == Person);
console.log(Object.getPrototypeOf(Student));
console.log(s.constructor.name);
console.log(s instanceof Student);
console.log(s instanceof Person);