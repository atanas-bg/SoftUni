<?php
$currentMonth = date('m');
$timestampSunday = strtotime("first Sunday of this month");  // date in seconds
do {
    $sundayDate = date('jS F, Y', $timestampSunday);
    echo $sundayDate . "\n";
    $timestampSunday += 7 * 24 * 60 * 60;  // adds 7 days in seconds
} while ($currentMonth == date('m', $timestampSunday));
