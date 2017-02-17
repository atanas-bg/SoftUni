<?php
if (isset($_GET['submit'])) {
    $inputString = $_GET['input_string'];
    if (isset($inputString)) {
        $inputValuesArray = explode(', ', $inputString);
        $inputValuesResult = [];
        foreach ($inputValuesArray as $value) {
            if (is_numeric($value) && strpos($value, '.') === false) {  // preg_match('/\./',$value)
                $inputValuesResult[$value] = sumNumericString($value);
            } else {
                $inputValuesResult[$value] = 'I can  not sum that';
            }
        }
    } else {
        $message = "Missing string";
        echo "<script type='text/javascript'>alert('$message');</script>";
    }
}

function sumNumericString($str)
{
    $arr = str_split($str);
    $sum = 0;
    foreach ($arr as $digit) {
        $sum += intval($digit);
    }
    return $sum;
}

include 'SumOfDigits_FrontEnd.php';
