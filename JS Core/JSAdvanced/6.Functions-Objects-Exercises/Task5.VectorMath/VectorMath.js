/**
 * Created by User on 2.11.2016 г..
 */
let solution = (function calcVectors() {
    "use strict";

    function add(vec1, vec2) {
        let xa = vec1[0];
        let ya = vec1[1];
        let xb = vec2[0];
        let yb = vec2[1];
        let a = xa + xb;
        let b = ya + yb;
        let result = [];
        result.push(a);
        result.push(b);
        return result;
    }

    function multiply(vec1, scalar) {
        let xa = vec1[0];
        let ya = vec1[1];
        let a = xa * scalar;
        let b = ya * scalar;
        let result = [];
        result.push(a);
        result.push(b);
        return result;
    }

    function length(vec1) {
        let xa = vec1[0];
        let ya = vec1[1];
        let length = Math.sqrt(Math.pow(xa, 2) + Math.pow(ya, 2));
        return length;
    }

    function dot(vec1, vec2) {
        let xa = vec1[0];
        let ya = vec1[1];
        let xb = vec2[0];
        let yb = vec2[1];
        let dotProduct = xa * xb + ya * yb;
        return dotProduct;
    }

    function cross(vec1, vec2) {
        let xa = vec1[0];
        let ya = vec1[1];
        let xb = vec2[0];
        let yb = vec2[1];
        let crossProduct = xa * yb - ya * xb;
        return crossProduct;

    }

    return {add, multiply, length, dot, cross};
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));