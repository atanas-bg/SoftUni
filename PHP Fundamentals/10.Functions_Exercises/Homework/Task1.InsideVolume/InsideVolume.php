<?php
/**
 * Write a function that determines whether a point is inside the volume, defined by the box, shown on the right.
The input comes as a string representing the coordinates that needs to be split and  parsed as numbers.
 * Each set of 3 elements are the x, y and z coordinates of a point.
The output should be printed to the console on a new line for each point.
 * Print inside if the point lies inside the volume and outisde otherwise.

 */

$input = trim(fgets(STDIN));
$input = explode(", ", $input);
$numCount = count($input);
for ($i = 0; $i < $numCount; $i += 3) {
    $x = $input[$i];
    $y = $input[$i + 1];
    $z = $input[$i + 2];

    if (isVolume($x, $y, $z)) {
        echo "inside\n";
    } else {
        echo "outside\n";
    }
}


function isVolume($x, $y, $z)
{
    $x1 = 10;
    $x2 = 50;
    $y1 = 20;
    $y2 = 80;
    $z1 = 15;
    $z2 = 50;

    if ($x >= $x1 && $x <= $x2) {
        if ($y >= $y1 && $y <= $y2) {
            if ($z >= $z1 && $z <= $z2) {
                return true;
            }
        }
    }

    return false;
}