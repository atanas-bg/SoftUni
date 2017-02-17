<?php
/**
 * Write a program that finds the longest increasing subsequence in an array of integers.
 * The longest increasing subsequence is a portion of the array (subsequence) that is strongly increasing and has the longest possible length.
 * If several such subsequences exist, find the left most of them.
 */

$input = trim(fgets(STDIN));
$input = explode(" ", $input);
$inputLength = count($input);
$longestLength = 1;
$currentLength = 1;
$startIndex = 0;
for ($i = 1; $i < $inputLength; $i++) {
    if ($input[$i] > $input[$i - 1]) {
        $currentLength += 1;
    } else {
        if ($longestLength < $currentLength) {
            $longestLength = $currentLength;
            $startIndex = $i - $currentLength;
        }
        $currentLength = 1;
    }
}

if ($longestLength < $currentLength) {
    $longestLength = $currentLength;
    $startIndex = $i - $currentLength;
}

$result = array_slice($input, $startIndex, $longestLength);
echo implode(" ", $result);
