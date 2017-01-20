/**
 * Created by User on 30.9.2016 г..
 */
// input : [850]
// output : 45

function convertGradsToRadians([grads]) {
    grads = Number(grads);
    grads = grads % 400;
    if (grads < 0) {
        grads += 400;
    }
    // grads += 400;
    // grads = grads % 400;
    let degrees = grads * 9 / 10;

    console.log(Math.abs(degrees));
}

convertGradsToRadians([100]);
convertGradsToRadians([400]);
convertGradsToRadians([850]);
convertGradsToRadians([-50]);
convertGradsToRadians([-4000]);