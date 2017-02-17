<?php
$rows = 5;
$cols = 4;
$count = 1;
$matrix = [];
for ($r = 0; $r < $rows; $r++) {
    $matrix[$r] = [];
    for ($c = 0; $c < $cols; $c++) {
        $matrix[$r][$c] = $count++;
    }
}
print_r($matrix);
