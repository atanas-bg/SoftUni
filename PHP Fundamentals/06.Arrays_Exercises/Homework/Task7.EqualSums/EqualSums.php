<?php
/**
 * Write a program that determines if there exists an element in the array
 * such that the sum of the elements on its left is equal to the sum of the elements on its right.
 * If there are no elements to the left / right, their sum is considered to be 0.
 * Print the index that satisfies the required condition or “no” if there is no such index.
 */

$inputNumbers = trim(fgets(STDIN));
$inputNumbers = explode(" ", $inputNumbers);
$inputNumbersLength = count($inputNumbers);
$leftSum = 0;
$rightSum = 0;
for ($p = 0; $p < $inputNumbersLength; $p++) {
    // calculate left sum
    for ($l = 0; $l < $p; $l++) {
        $leftSum += $inputNumbers[$l];
    }

    // calculate right sum
    for ($r = $p + 1; $r < $inputNumbersLength; $r++) {
        $rightSum += $inputNumbers[$r];
    }

    if ($leftSum == $rightSum) {
        echo $p;
        break;
    } else {
        $leftSum = 0;
        $rightSum = 0;
    }

    if ($p == $inputNumbersLength - 1) {
        echo "no";
    }
}

