<?php
/**
 * As in Task 5, but the output should be sorted by the times a letter has occurred in descending order, then in order of appearance.
 */

$input = trim(fgets(STDIN));
$result = array_count_values(str_split($input));

uasort($result, function ($a, $b) {
    return $b <=> $a;
});

//function cmp($a, $b) {
//    if ($a == $b) {
//        return 0;
//    }
//    return ($b < $a) ? -1 : 1;
//}
//uasort($result, 'cmp');

foreach ($result as $key => $value) {
    echo "$key -> $value\n";
}
