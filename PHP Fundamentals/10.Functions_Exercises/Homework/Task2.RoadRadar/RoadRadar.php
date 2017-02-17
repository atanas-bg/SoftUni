<?php
/**
 * Write a function that determines whether a driver is within the speed limit.
 * You will receive his speed and the area where he’s driving.
 * Each area has a different limit: on the motorway the limit is 130 km/h,
 * on the interstate the limit is 90, inside a city the limit is 50 and
 * within a residential area the limit is 20 km/h. If the driver is within the limits, your function prints nothing.
 * If he’s over the limit however, your function prints the severity of the infraction.
 * For speeds up to 20 km/h over the limit, he’s speeding;
 * for speeds up to 40 over the limit, the infraction is excessive speeding
 * and for anything else, reckless driving.
 * The input comes in two rows. On the first row you will receive the current speed as a string and needs to be parsed as a number.
 * On the second row you will be given the second element which is  the area.
 * The output should be printed to the console. Note in certain cases there will be no output.
 */

$currentSpeed = trim(fgets(STDIN));
if (is_numeric($currentSpeed)) {
    $currentSpeed = intval($currentSpeed);
    $area = trim(fgets(STDIN));
    $limit = getLimit($area);
    $infraction = getInfraction($currentSpeed, $limit);
    if ($infraction) {
        echo $infraction;
    }
} else {
    echo "Not a valid input";
}

function getLimit($zone)
{
    switch ($zone) {
        case 'motorway':
            $speedLimit = 130;
            break;
        case 'interstate':
            $speedLimit = 90;
            break;
        case 'city':
            $speedLimit = 50;
            break;
        case 'residential':
            $speedLimit = 20;
            break;
        default:
            echo "Not a valid input";
            $speedLimit = 1000;
    }

    return $speedLimit;
}

function getInfraction($speed, $speedLimit)
{
    $overSpeed = $speed - $speedLimit;
    if ($overSpeed > 0) {
        $result = getInfractionSeverity($overSpeed);
    } else {
        $result = false;
    }

    return $result;
}

function getInfractionSeverity($overSpeed)
{
    switch (true) {
        case $overSpeed <= 20;
            $result = 'speeding';
            break;
        case $overSpeed <= 40;
            $result = 'excessive speeding';
            break;
        case $overSpeed > 40;
            $result = 'reckless driving';
            break;
    }

    return $result;
}
