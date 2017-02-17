<?php
/**
 * Read a list of real numbers with fgets(STDIN) and print them in ascending order along with their number of occurrences.
 */

$numbers = trim(fgets(STDIN));
$numbers = explode(" ", $numbers);
$countedNumbers = [];
foreach ($numbers as $num) {
    if (!isset($countedNumbers[$num])) {
        $countedNumbers[$num] = 0;
    }
    $countedNumbers[$num] += 1;
}

ksort($countedNumbers);
foreach ($countedNumbers as $number => $count) {
    echo "$number -> $count times\n";
}
