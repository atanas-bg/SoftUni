<?php
/**
*Write a PHP script LazySundays.php which prints the dates of all Sundays in the current month.
*/
define('WEEK_DAYS', 7);
$firstDateOfMonth = mktime(0, 0, 0, date("m"), 1, date("Y"));
$lastDateOfMonth = mktime(0, 0, 0, date("m") + 1, 0, date("Y"));
$dayOfWeek = date("N", $firstDateOfMonth);

if ($dayOfWeek != 7) {
    $days = WEEK_DAYS - $dayOfWeek;
    $sundayDate = strtotime(date("Y-m-d", $firstDateOfMonth) . "+ {$days} days");
} else {
    $sundayDate = $firstDateOfMonth;
}

while ($sundayDate <= $lastDateOfMonth) {
    echo date("jS F, Y", $sundayDate), "\n";
    $sundayDate = strtotime(date("Y-m-d", $sundayDate) . "+ " . WEEK_DAYS . " days");
}
