<?php
$colors = ['red', 'green', 'blue'];
foreach ($colors as $value) {
    echo $value . '<br>';
}

$colors = ['1' => 'red', '2' => 'green', '3' => 'blue'];
foreach ($colors as $key => $value) {
    echo 'key -> ' . $key . ' value -> ' . $value . '<br>';
}