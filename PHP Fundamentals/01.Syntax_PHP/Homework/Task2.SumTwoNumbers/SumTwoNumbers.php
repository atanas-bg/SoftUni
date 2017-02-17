<?php
/*
Write a PHP script SumTwoNumbers.php that declares two variables, firstNumber and secondNumber.
They should hold integer or floating-point numbers (hard-coded values).
Print their sum in the output in the format shown in the examples below.
The numbers should be rounded to the second number after the decimal point.
Find in Internet how to round a given number in PHP.
*/
$firstNumber = (float)fgets(STDIN);
$secondNumber = (float)fgets(STDIN);
$sum = $firstNumber + $secondNumber;
echo number_format($sum, 2, '.', '') . "\n"; // returns string
echo sprintf("%0.2f", $sum); // returns number
