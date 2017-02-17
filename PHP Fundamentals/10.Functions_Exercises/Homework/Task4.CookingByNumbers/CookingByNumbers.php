<?php
/**
 * Write a program that receives a number and a list of five operations.
 * Perform the operations in sequence by starting with the input number
 * and using the result of every operation as starting point for the next.
 * Print the result of every operation in order. The operations can be one of the following:
 * •    chop – divide the number by two
 * •    dice – square root of number
 * •    spice – add 1 to number
 * •    bake – multiply number by 3
 * •    fillet – subtract 20% from number
 * The input comes in 2 lines. On the first line you will receive your starting point and must be parsed to a number.
 * On the second line you will receive 5 commands separated by “, “ each one will be the name of the operation to be performed.
 * The output should be printed on the console.
 */

$inputNumber = trim(fgets(STDIN));
if (is_numeric($inputNumber)) {
    $inputNumber = floatval($inputNumber);
    $commands = trim(fgets(STDIN));
    $commands = explode(", ", $commands);
    foreach ($commands as $command) {
        performOperation($command, $inputNumber);
        echo $inputNumber . "\n";
    }
} else {
    echo "Invalid input";
}

function performOperation($action, &$number)
{
    switch ($action) {
        case 'chop' :
            $number = $number / 2;
            break;
        case 'dice' :
            $number = sqrt($number);
            break;
        case 'spice' :
            $number = $number + 1;
            break;
        case 'bake' :
            $number = $number * 3;
            break;
        case 'fillet' :
            $number = $number - 0.2 * $number;
            break;
        default:
            $number = "Invalid input";
    }
}