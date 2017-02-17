<?php
/**
 * Write a program that reads sequence of numbers, reverses their digits, and prints their sum.
 */

$numbers = trim(fgets(STDIN));
$numbers = explode(" ", $numbers);
$sum = 0;
foreach ($numbers as $num) {
    $sum += strrev($num);
}

echo $sum;