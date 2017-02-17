<?php
$array = array("Team Building, Vitosha", "Nakov", "studying programming", "SoftUni");

usort($array, function ($a, $b) {
    return strlen($a) - strlen($b);
});

print_r($array);
