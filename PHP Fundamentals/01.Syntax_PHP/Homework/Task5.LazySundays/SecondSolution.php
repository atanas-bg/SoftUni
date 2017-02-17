<?php
$month = date("F");
$year = date("Y");
$totalDays = date("t");
$firstSunday = date("j", strtotime("first Sunday of this month"));
for ($i = $firstSunday; $i <= $totalDays; $i += 7) {
    $date = strtotime("$i $month $year");
    echo date("jS F, Y", $date) . "\n";
}
