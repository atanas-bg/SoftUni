<?php
/**
 * Write a program that creates an array containing all letters from the alphabet (a-z).
 * Read a lowercase word from the console and print the index of each of its letters in the letters array.
 */

$lettersArray = range('a', 'z');
$lettersString = implode("", $lettersArray);
$inputWord = trim(fgets(STDIN));
$inputWord = strtolower($inputWord);
$inputWordLength = strlen($inputWord);
for ($i = 0; $i < $inputWordLength; $i++) {
    $char = $inputWord[$i];
    $index = strpos($lettersString, $char);
    echo "$char -> $index\n";
}

