/**
 * Created by User on 11.11.2016 г..
 */
function Mixin() {
    this.extensionFunc = function () {
        // New functionality …
    };
    return this;
}

function asCircle() {
    "use strict";
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return this;
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

asCircle.call(Circle.prototype);
let circle = new Circle(2);
console.log(circle.area());