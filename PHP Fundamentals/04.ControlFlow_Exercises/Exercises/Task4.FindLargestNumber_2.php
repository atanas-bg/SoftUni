<?php
/**
 * You need to read numbers (the numbers could be negative) from the standard input
 * until receiving empty string and find the maximum number amongst them.
 */
$largest = PHP_INT_MIN;
$number = trim(fgets(STDIN));
while ($number) {
    if (is_numeric($number)) { // eliminates the non-number values
        $number = (int)$number;
        if ($number > $largest) {
            $largest = $number;
        }
    }
    $number = trim(fgets(STDIN));
}
echo 'Max: ' . $largest;
