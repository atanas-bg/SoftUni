<?php
/**
 * You will be given the coordinates of 3 points on a 2D plane.
 * Write a program that finds the two shortest segments that connect them (without going back to the starting point).
 * When determining the listing order, use the order with the lowest numerical value (see the figure in the hints for more information).
 * The input comes as a string with  6 elements separated by “, “ that must be parsed to numbers. The order is x1, y1, x2, y2, x3, y3.
 * The output is the return value of your program as a string, representing the order in which the three points must be visited and the final distance between them.
 */

$inputCoordinates = trim(fgets(STDIN));
$inputCoordinates = explode(", ", $inputCoordinates);
list($x1, $y1, $x2, $y2, $x3, $y3) = $inputCoordinates;
$firstSecond = getDistance($x1, $y1, $x2, $y2);
$secondThird = getDistance($x2, $y2, $x3, $y3);
$firstThird = getDistance($x1, $y1, $x3, $y3);

if (($firstSecond <= $firstThird) && ($firstThird >= $secondThird)) {
    $a = $firstSecond + $secondThird;
        echo '1->2->3: ' . $a;
    }
    elseif (($firstSecond <= $secondThird) && ($firstThird < $secondThird)) {
    $b = $firstThird + $firstSecond;
        echo '2->1->3: ' . $b;
    }
else {
    $c = $secondThird + $firstThird;
        echo '1->3->2: ' . $c;
    }


function getDistance($x1, $y1, $x2, $y2)
{
    $distance = sqrt(pow($x2 - $x1, 2) + pow($y2 - $y1, 2));
    return $distance;
}
