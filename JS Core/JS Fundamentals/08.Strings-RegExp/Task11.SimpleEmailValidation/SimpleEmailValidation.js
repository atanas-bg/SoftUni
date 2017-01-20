/**
 * Created by User on 13.10.2016 г..
 */
// input : ['valid@email.bg']
// output : true

function validateEmail([email]) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+.[a-z]+$/;
    let result = pattern.test(email);
    return result;
}

console.log(validateEmail(['valid@email.bg']));
console.log(validateEmail(['valid@emai1.bg']));