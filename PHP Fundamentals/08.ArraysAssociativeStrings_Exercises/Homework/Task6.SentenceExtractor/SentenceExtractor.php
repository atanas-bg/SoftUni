<?php
/**
 * Write a PHP program SentenceExtractor.php that reads a text and a word with fgets(STDIN)
 * and prints all sentences from the text, containing that word.
 * A sentence is any sequence of words ending with „.“, „!“ or „?“.
 */

$text = trim(fgets(STDIN));
$word = trim(fgets(STDIN));
$pattern = "/\b([^.?!]*\b$word\b[^.?!]*[.?!])/";

preg_match_all($pattern, $text, $matches, PREG_PATTERN_ORDER);
$sentences = $matches[1];
foreach ($sentences as $sentence) {
    echo $sentence . "\n";
}
