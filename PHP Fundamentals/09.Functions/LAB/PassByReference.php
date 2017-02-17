<?php
function changeValue(&$arg)
{
    $arg += 100;
}

$num = 2;
echo $num . "\n"; // 2
changeValue($num);
echo $num; // 102
