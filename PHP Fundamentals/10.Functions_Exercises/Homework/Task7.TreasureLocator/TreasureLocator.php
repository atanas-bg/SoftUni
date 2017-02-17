<?php
/**
 * You will be given a series of coordinates, leading to a buried treasure.
 * Use the map to the right to write a program that locates on which island it is.
 * After you find where all the treasure chests are, compose a list and print it on the console.
 * If a chest is not on any of the islands, print “On the bottom of the ocean” to inform your treasure-hunting team to bring diving gear.
 * If the location is on the shore (border) of the island, it’s still considered to lie inside.
 * The input comes as a string of variable number of elements separated by “, “ that must be parsed to numbers.
 * Each pair is the coordinates to a buried treasure chest.
 * The output is a list of the locations of every treasure chest, either the name of an island or “On the bottom of the ocean”, printed on the console.
 */

$inputCoordinates = trim(fgets(STDIN));
$inputCoordinates = explode(", ", $inputCoordinates);
$coordinatesCount = count($inputCoordinates);

for ($i = 0; $i < $coordinatesCount; $i += 2) {
    $x = $inputCoordinates[$i];
    $y = $inputCoordinates[$i + 1];
    $position = getPosition($x, $y);
    echo $position . "\n";
}

function getPosition ($x, $y) {
    // check for Tuvalu
    if ($x >= 1 && $x <= 3 && $y >= 1 && $y<= 3) {
        return "Tuvalu";
    }
    // check for Tokelau
    if ($x >= 8 && $x <= 9 && $y >= 0 && $y<= 1) {
        return "Tokelau";
    }
    // check for Samoa
    if ($x >= 5 && $x <= 7 && $y >= 3 && $y<= 6) {
        return "Samoa";
    }
    // check for Tonga
    if ($x >= 0 && $x <= 2 && $y >= 6 && $y<= 8) {
        return "Tonga";
    }
    // check for Cook
    if ($x >= 4 && $x <= 9 && $y >= 7 && $y<= 8) {
        return "Cook";
    }

    return "On the bottom of the ocean";
}

