/**
 * Created by User on 11.11.2016 г..
 */
function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

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

extendClass(Person);
let p = new Person('Ivan', 'ivan@abv.bg');
console.log(p);
console.log(p.toSpeciesString());
console.log(p.species);
let s = new Student('Georgi', 'georgi@abv.bg', 'Farming');
console.log(s);
console.log(s.toSpeciesString());
console.log(s.species);