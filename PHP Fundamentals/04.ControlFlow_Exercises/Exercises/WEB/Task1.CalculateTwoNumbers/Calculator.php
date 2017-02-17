<?php
if (isset($_GET['calculate'])) {
    $output = "";
    $number_one = $_GET['number_one'];
    $number_two = $_GET['number_two'];
    $operation = $_GET['operation'];
    if ($operation == 'sum') {
        $output = $number_one + $number_two;
    } else if ($operation == 'subtract') {
        $output = $number_one - $number_two;
    } else {
        $output = "Invalid operation supplied";
    }
}

include 'CalculatorFrontEnd.php';
