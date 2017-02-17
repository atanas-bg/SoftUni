<?php
if (isset($_GET['submit'])) {
    $text = $_GET['input'];
    $text = strtolower($text);
    $wordsArray = preg_split("/\W+/", $text, -1, PREG_SPLIT_NO_EMPTY);
    $countedWords = [];
    foreach ($wordsArray as $word) {
        if (!isset($countedWords[$word])) {
            $countedWords[$word] = 0;
        }
        $countedWords[$word] += 1;
    }
}

include 'WordMapper_FrontEnd.php';