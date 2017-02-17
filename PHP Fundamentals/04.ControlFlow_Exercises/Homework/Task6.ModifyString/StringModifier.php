<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 5.2.2017 г.
 * Time: 20:20 ч.
 */
if (isset($_GET['submit'])) {
    $inputString = $_GET['input_string'];
    $checkOption = $_GET['check_option'];
    $result = "";
    switch ($checkOption) {
        case 'check_palindrome':
            $result = isPalindrome($inputString);
            break;
        case 'reverse_string':
            $result = strrev($inputString);
            break;
        case 'split':
            $result = extractLetters($inputString);
            break;
        case 'hash_string':
            $result = crypt($inputString, 'SoftUni');
            break;
        case 'shuffle_string':
            $result = str_shuffle($inputString);
            break;
    }
}

function isPalindrome($string)
{
    //change case to lower
    $loweredString = strtolower($string);

//    //remove all spaces
//    $loweredString = str_replace(' ', '', $loweredString);
//
//    //remove special characters
//    $loweredString = preg_replace('/[^A-Za-z0-9\-]/', '', $loweredString);

    //reverse the string
    $reverse = strrev($loweredString);

    if ($loweredString == $reverse) {
        return "$string is a palindrome!";
    } else {
        return "$string is not a palindrome!";
    }
}

function extractLetters($string)
{
    //remove special characters
    $result = preg_replace('/[^A-Za-z]/', '', $string);
//    $string = str_split($string);
//    $result = [];
//    foreach ($string as $char) {
//        if (ctype_alpha($char)) {
//            array_push($result, $char);
//        }
//    }
//    $result = implode('', $result);
    return $result;
}

include 'StringModifier_FrontEnd.php';
