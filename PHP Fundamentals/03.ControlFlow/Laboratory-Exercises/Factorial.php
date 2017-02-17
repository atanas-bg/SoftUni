<?php
$num = 5;
$factorial = 1;
for ($i = 2; $i <= $num; $i++) {
    $factorial *= $i;
}
echo $factorial;