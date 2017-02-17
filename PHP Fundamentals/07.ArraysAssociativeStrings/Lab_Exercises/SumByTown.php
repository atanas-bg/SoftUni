<?php
$towns = ['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'];
$result = [];
$length = count($towns);
for ($i = 0; $i < $length; $i += 2) {
    list($town, $income) = [$towns[$i], $towns[$i + 1]];
    if (!isset($result[$town])) {
        $result[$town] = 0;
    }
    $result[$town] += $income;
}

print_r($result);
