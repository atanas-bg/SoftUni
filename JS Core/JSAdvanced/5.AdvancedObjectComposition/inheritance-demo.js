/**
 * Created by User on 31.10.2016 г..
 */
let fatherCar = { brand: 'BMW',
    model: 'X5', color: 'blue',
    toString: function() { return `[brand: ${this.brand}, model: ${this.model}, color: ${this.color}]`; }
};
console.log('' + fatherCar);

let myCar = Object.create(fatherCar);
myCar.model = 'M4';
myCar.color = 'red';
console.log('' + myCar);

let workCar = Object.create(fatherCar);
workCar.model = 'i3';
workCar.color = 'silver';
workCar.type = 'electric';
workCar.toString = function() { return `[brand: ${this.brand}, model: ${this.model}, color: ${this.color}, type: ${this.type}]`; }
console.log(workCar + '');
console.log(Object.getPrototypeOf(fatherCar));
console.log(Object.getPrototypeOf(myCar));