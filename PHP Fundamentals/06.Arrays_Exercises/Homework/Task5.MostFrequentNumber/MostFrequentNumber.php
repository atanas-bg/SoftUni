<?php
/**
 * Write a program that finds the most frequent number in a given sequence of numbers.
 * Numbers will be in the range [0…65535].
 * In case of multiple numbers with the same maximal frequency, print the leftmost of them.
 */

$input = trim(fgets(STDIN));
$input = explode(" ", $input);
$inputLength = count($input);
$highestCount = 1;
$currentCount = 1;
$numberFrequencies = [];
for ($i = 0; $i < $inputLength; $i++) {
    $num = $input[$i];
    if (!isset($numberFrequencies[$num])) {
        $numberFrequencies[$num] = 0;
    }
    $numberFrequencies[$num] += 1;
}

$mostFrequentNumber = array_keys($numberFrequencies, max($numberFrequencies))[0];  // gets the first index of the max values
echo $mostFrequentNumber;
