<?php
/**
 * You need to read numbers (the numbers will be in range [1, 2^31]) from the standard input
 * until receiving empty string and find the maximum number amongst them.
 */
$largest = 0;
while ($number = (int)fgets(STDIN)) {
    if ($number > $largest) {
        $largest = $number;
    }
}
echo 'Max: ' . $largest;
