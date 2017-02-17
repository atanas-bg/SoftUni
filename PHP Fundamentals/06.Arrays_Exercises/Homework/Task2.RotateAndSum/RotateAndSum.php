<?php
/**
 * To “rotate an array on the right” means to move its last element first: {1, 2, 3}  {3, 1, 2}.
Write a program to read an array of n integers (space separated on a single line) and an integer k,
 * rotate the array right k times and sum the obtained arrays after each rotation as shown below.
 */
$array = trim(fgets(STDIN));
$array = explode(" ", $array);
$rotationsK = trim(fgets(STDIN));
$arrayLength = count($array);
$sumArray = array_fill(0, $arrayLength, 0);

for ($i = 0; $i < $rotationsK; $i++) {
    $lastElement = array_splice($array, $arrayLength - 1);
    array_splice($array, 0, 0, $lastElement);
    for ($p = 0; $p < $arrayLength; $p++) {
        $sumArray[$p] += $array[$p];
    }
}

echo implode(" ", $sumArray);
