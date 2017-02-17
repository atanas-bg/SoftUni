<?php
$operation = $argv[1];
$firstNumber = (float)fgets(STDIN);
$secondNumber = (float)fgets(STDIN);

if ($operation == 'sum') {
    echo $firstNumber + $secondNumber;
} else if ($operation == 'subtract') {
    echo $firstNumber - $secondNumber;
} else {
    echo 'Wrong operation supplied';
}
