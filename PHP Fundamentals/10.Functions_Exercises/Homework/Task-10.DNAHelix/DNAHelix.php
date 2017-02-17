<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 16.2.2017 г.
 * Time: 00:52 ч.
 */

$symbols = "ATCGTTAGGG";
$symbolsLength = strlen($symbols);
$number = trim(fgets(STDIN));
$number = intval($number);
$patterns = ['**12**', '*1--2*', '1----2', '*1--2*'];
$patternsLength = count($patterns);

for ($i = 0; $i < $number; $i++) {
    $firstIndex = (2 * $i) % $symbolsLength;
    $secondIndex = $firstIndex + 1;

//    first version
//    if ($i % 2 != 0) {
//        $starCount = 1;
//        $dashCount = 2;
//    } else {
//        if ($i % 4 == 0) {
//            $starCount = 2;
//            $dashCount = 0;
//        } else {
//            $starCount = 0;
//            $dashCount = 4;
//        }
//    }
//    echo str_repeat('*', $starCount) . $symbols[$index] . str_repeat('-', $dashCount) . $symbols[$secondIndex] . str_repeat('*', $starCount) . "\n";


    // second version
    $patternIndex = $i % $patternsLength;
    $line = $patterns[$patternIndex];
    $line = str_replace('1', $symbols[$firstIndex], $line);
    $line = str_replace('2', $symbols[$secondIndex], $line);

    echo $line . "\n";
}
