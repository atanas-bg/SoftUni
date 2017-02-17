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
$linesArray = [1 => $firstSecond, 2 => $secondThird, 3 => $firstThird];
arsort($linesArray);
$points = array_keys($linesArray);
$lines = array_values($linesArray);
$sum = $lines[2] + $lines[1];
if ($points[0] <= $points[2]) {
//    if ($points[0] <= $points[1]) {
        $result = "$points[0]->$points[1]->$points[2]: $sum";
//    } else {
//        $result = "$points[1]->$points[0]->$points[2]: $sum";
//    }
} else {
    if ($points[0] <= $points[1]) {
        $result = "$points[2]->$points[1]->$points[0]: $sum";
    } else {
        $result = "$points[1]->$points[2]->$points[0]: $sum";
    }
}
echo $result;


function getDistance($x1, $y1, $x2, $y2)
{
    $distance = sqrt(pow($x2 - $x1, 2) + pow($y2 - $y1, 2));
    return $distance;
}
