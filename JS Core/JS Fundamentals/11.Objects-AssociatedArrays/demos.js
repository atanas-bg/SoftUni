/**
 * Created by User on 15.10.2016 г..
 */
let obj = {
    name: "Ivan",
    age: 24
};

console.log("age" in obj);
console.log("3" in obj);
console.log(obj.hasOwnProperty("age"));
console.log(obj.hasOwnProperty("2"));

let jn = JSON.stringify(obj);
console.log(jn);
console.log(typeof (jn));
let jnParsed = JSON.parse(jn);
console.log(jnParsed);
console.log(typeof (jnParsed));

let data = new Map();
data.set('Ivan', 23);
data.set('Maria', 25);
console.log(data);
console.log(data.keys());
console.log(data.has('Maria'));
console.log(data.get('Maria'));
console.log(Array.from(data.keys()).length);
console.log(Array.from(data.keys()).sort((a, b) => (a < b)));
