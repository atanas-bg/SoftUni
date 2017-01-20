/**
 * Created by User on 25.10.2016 г..
 */
function subtract() {
    // first solution
    // let wrapper = $('div#wrapper input');
    // let firstNumber = Number(wrapper[0].value);
    // let secondNumber = Number(wrapper[1].value);
    // $('div#result').text(firstNumber - secondNumber);

    // second solution
    let firstNumber = $('div#wrapper #firstNumber').val();
    let secondNumber = $('div#wrapper #secondNumber').val();
    $('div#result').text(Number(firstNumber) - Number(secondNumber));
}
