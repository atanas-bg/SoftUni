<?php
/**
 * Write a program that modifies a number until the average value of all of its digits is higher than 5.
 * In order to modify the number, your program should append a 9 to the end of the number,
 * when the average value of all of its digits is higher than 5 the program should stop appending.
 * If the number’s average value of all of its digits is already higher than 5, no appending should be done.
 * The input is a single number received as a string.
 * The output should consist of a single number - the final modified number which has an average value of all of its digits higher than 5.
 * The output should be printed on the console.
 */

$inputNumber = trim(fgets(STDIN));
if (is_numeric($inputNumber)) {
    $averageValue = getAverageSum($inputNumber);
    while ($averageValue <= 5) {
        $inputNumber = $inputNumber . "9";
        $averageValue = getAverageSum($inputNumber);
    }
    echo $inputNumber;
} else {
    echo 'Invalid input';
}

function getAverageSum($numberAsString)
{
    $digitsArray = str_split($numberAsString);
    $length = count($digitsArray);
    $digitsSum = array_sum($digitsArray);
    $averageSum = $digitsSum / $length;
    return $averageSum;
}
