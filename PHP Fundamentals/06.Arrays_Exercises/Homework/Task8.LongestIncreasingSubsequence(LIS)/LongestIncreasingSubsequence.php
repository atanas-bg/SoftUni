<?php
/**
 * Read a list of integers and find the longest increasing subsequence (LIS). If several such exist, print the leftmost.
 * Example: 3 14 5 12 15 7 8 9 11 10 1   // the result is 3 5 7 8 9 11
 * Video hint (dynamic optimization): https://www.youtube.com/watch?v=N-AlTemCnMc&t=24m55s
 */

$numbers = trim(fgets(STDIN));
$numbers = explode(" ", $numbers);
$numbersLength = count($numbers);
$length = [];
$prev = [];
$maxLength = 0;
$lastIndex = -1;

for ($p = 0; $p < $numbersLength; $p++) {
    $length[$p] = 1;
    $prev[$p] = -1;

    for ($f = 0; $f < $p; $f++) {
        if ($numbers[$f] < $numbers[$p] && $length[$f] >= $length[$p]) {
            $length[$p] = 1 + $length[$f];  // keeps the end index and the length of the longest subsequence until the current number (included)
            $prev[$p] = $f;  // keeps the previous index of the longest sequence
        }
    }

    // saving the longest sequence and it's last index
    if ($length[$p] > $maxLength) {
        $maxLength = $length[$p];
        $lastIndex = $p;
    }
}

// Restore the sequence with the prev index
$longestIncreasingSubsequence = [];
for ($p = 0; $p < $maxLength; $p++) {
    $longestIncreasingSubsequence[] = $numbers[$lastIndex];
    $lastIndex = $prev[$lastIndex];
}

$longestIncreasingSubsequence = array_reverse($longestIncreasingSubsequence);

echo implode(" ", $longestIncreasingSubsequence);
