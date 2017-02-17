<?php
$names = array('Maria', 'John', 'Richard', 'George');
array_splice($names, 1, 2); // ['Maria', 'George']

$arr = ['a', 'b', 'c', 'd'];
array_splice($arr, 0, 1);
print_r($arr);

unset($arr[1]);
print_r($arr);

$names = array('Jack', 'Melony', 'Helen', 'David');
array_splice($names, 2, 0, 'Don');
// ['Jack', 'Melony', 'Don', 'Helen', 'David']
print_r($names);

var_export($names);
echo "\n";
echo json_encode($names);
