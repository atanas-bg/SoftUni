<?php
/**
 * Write a PHP script TimeUntilNewYear.php. Use the built-in function getdate() to get the current date and time.
 * Print how many hours, minutes and seconds are left until New Year and how many days, hours, minutes and seconds are left in a counter format .
 * Look at examples below to get a better idea. The examples show the current date and time in "d-m-Y G:i:s" format. Use the current time.
 * (Note: Keep the Spring/Autumn time shifts in mind in your calculations.)
 */
date_default_timezone_set('Europe/Sofia');  // set default timezone
$today = getdate();
$newYear = mktime(0, 0, 0, 1, 1, date("Y") + 1);
$interval = $newYear - $today[0]; // DST change is calculated automatically

echo "Hours until new year : " . floor($interval / 3600) . "\n";
echo "Minutes until new year : " . floor($interval / 60) . "\n";
echo "Seconds until new year : " . floor($interval) . "\n";
$days = floor($interval / (3600 * 24));
$hours = floor($interval / 3600 - $days * 24);
$minutes = floor($interval / 60 - $hours * 60 - $days * 24 * 60);
$seconds = floor($interval - $minutes * 60 - $hours * 3600 - $days * 24 * 3600);
echo "Days:Hours:Minutes:Seconds $days:$hours:$minutes:$seconds" . "\n";
