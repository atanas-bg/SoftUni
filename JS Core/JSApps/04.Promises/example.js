/**
 * Created by User on 28.11.2016 г..
 */
console.log('Before promise.');
new Promise(function (resolve, reject) {
    console.log('Promise started.');
    setTimeout(function () {
        reject('reject done');
        //  resolve('resolve done')
    }, 500);
    console.log('Promise finished.');
})
    .then(function (result) {
        console.log('Then returned: ' + result)
    })
    .catch(function (error) {
        console.log('Error returned: ' + error)
    });

console.log('After promise.');