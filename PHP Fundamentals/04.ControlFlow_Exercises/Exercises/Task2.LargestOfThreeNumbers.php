<?php
$numberOne = (float)(fgets(STDIN));
$numberTwo = (float)(fgets(STDIN));
$numberThird = (float)(fgets(STDIN));
$result = max($numberOne, $numberTwo, $numberThird);
echo 'Max numbers is ' . $result;
