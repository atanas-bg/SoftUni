<?php

$text = "Learning PHP is fun! ";
$letters = [];
$text = strtoupper($text);
for ($i = 0; $i < strlen($text); $i++) {
    $char = $text[$i];
    if (ord($char) >= ord('A') && ord($char) <= ord('Z')) {
        if (isset($letters[$char])) {
            $letters[$char]++;
        } else {
            $letters[$char] = 1;
        }
    }
}
print_r($letters);

