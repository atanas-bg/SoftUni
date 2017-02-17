<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 15.2.2017 г.
 * Time: 23:47 ч.
 */
$a = function ($x, $y) {
    return $x + $y;
};
$b = function ($x, $y) {
    return $x * $y;
};

$arr = [$a, $b];
foreach ($arr as $operation) {
    echo $operation(2, 3);
}