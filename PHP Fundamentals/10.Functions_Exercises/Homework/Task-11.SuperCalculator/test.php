<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 16.2.2017 г.
 * Time: 02:47 ч.
 */

$result = [2, -3, 4];
$r = $result;
$e = array_shift($r);
print_r($r);
//$fact1 = gmp_fact(5); // 5 * 4 * 3 * 2 * 1
//echo gmp_strval($fact1) . "\n";
function mult ($carry, $item) {
    $carry *= $item;
    return $carry;
}
$result = array_map("abs", $result);
print_r($result);

//$multiplied = array_reduce($result, "product");
//var_dump(array_reduce($result, "product", 1));

function sum($carry, $item)
{
    $carry += $item;
    return $carry;
}

function product($carry, $item)
{
    $carry *= $item;
    return $carry;
}

$a = array(1, 2, 3, 4, 5);
$x = array();

var_dump(array_reduce($a, "sum")); // int(15)
var_dump(array_reduce($result, "product", 10)); // int(1200), because: 10*1*2*3*4*5
var_dump(array_reduce($x, "sum", "No data to reduce")); // string(17) "No data to reduce"

