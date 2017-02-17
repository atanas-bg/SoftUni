<?php
$arr = ['3 5 17 12 91 5', '-1 7 4 33 6 22', '1 8 99 3 10 43'];
$rows = count($arr);
$matrix = [];
for ($i = 0; $i < $rows; $i++) {
    $matrix[$i] = explode(" ", $arr[$i]);
}
//$matrix = [[3,5,17,12,91,5], [-1,7,4,33,6,22], [1,8,99,3,0,43]];

$biggestNum = $matrix[0][0];
$smallestNum = $matrix[0][0];
foreach ($matrix as $row) {
    foreach ($row as $col) {
        if ($col > $biggestNum) {
            $biggestNum = $col;
        }

        if ($col < $smallestNum) {
            $smallestNum = $col;
        }
    }
}

echo "Smallest Number: $smallestNum\nBiggest Number: $biggestNum";
