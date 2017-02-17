<?php
/*
Write a PHP script NonRepeatingDigits.php that declares an integer variable N,
and then finds all 3-digit numbers that are less or equal than N (<= N) and consist of unique digits.
Print "no" if no such numbers exist.
*/
define('MAX_NUMBER', 999);
define('MIN_NUMBER', 102);
$number = (int)(fgets(STDIN));

if ($number >= MIN_NUMBER) {
    $limitNumber = min($number, MAX_NUMBER);
    $result = array();
    for ($num = MIN_NUMBER; $num <= $limitNumber; $num++) {
        $digitsArray = str_split((string)$num);
        $digitsCount = count(array_unique($digitsArray));
        if ($digitsCount == 3) {
            array_push($result, $num);
        }
    }

    echo implode($result, ", ");
} else {
    echo "no";
}
