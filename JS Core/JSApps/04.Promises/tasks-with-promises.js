/**
 * Created by User on 28.11.2016 г..
 */
let p1 = new Promise(function (resolve, reject) {
    console.log('Promise p1 started.');
    setTimeout(function () {
        // reject('reject p1 done');
        resolve('resolve p1 done');
        console.log('Promise p1 finished.');
    }, 500);
});

let p2 = new Promise(function (resolve, reject) {
    console.log('Promise p2 started.');
    setTimeout(function () {
        // reject('reject p2 done');
        resolve('resolve p2 done');
        console.log('Promise p2 finished.');
    }, 500);
});

let p3 = new Promise(function (resolve, reject) {
    console.log('Promise p3 started.');
    setTimeout(function () {
        // reject('reject p3 done');
        resolve('resolve p3 done');
        console.log('Promise p3 finished.');
    }, 500);
});

Promise.all([p1, p2, p3])
    .then(function (result) {
        console.log('All tasks finished.');
        console.log('Result: ' + result.join(', '));
        nonExistingFunction();
    })
    .catch(function (error) {
        console.log('Some of the tasks failed.');
        console.log('Error: ' + error);
    });
