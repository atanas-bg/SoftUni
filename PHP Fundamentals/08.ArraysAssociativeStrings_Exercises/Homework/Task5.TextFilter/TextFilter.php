<?php
/**
 * Write a PHP program TextFilter.php that reads a text and a string of banned words from the console with fgets(STDIN).
 * All words included in the ban list should be replaced with asterisks "*", equal to the word’s length.
 * The entries in the banlist will be separated by a comma and space ", ".
 */

define("BAN_SYMBOL", "*");
$text = trim(fgets(STDIN));
$bannedWords = trim(fgets(STDIN));
$bannedWords = explode(", ", $bannedWords);
foreach ($bannedWords as $bannedWord) {
    $length = strlen($bannedWord);
    $replacement = str_repeat(BAN_SYMBOL, $length);
    $text = str_replace($bannedWord, $replacement, $text);
//    $text = preg_replace("/$bannedWord/", $replacement, $text);
}

echo $text;
