/**
 * Created by User on 11.11.2016 г..
 */
function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
};

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
}


let p = new Person('Ivan', 'ivan@gmail.com');
let t = new Teacher('Nasko', 'gosho@abv.bg');
t.subject = 'Informatics';
console.log("Person: " + p.name + ' (' + p.email + ')');
console.log("Teacher: " + t.name + ' (' + t.email + '), teaches ' + t.subject);