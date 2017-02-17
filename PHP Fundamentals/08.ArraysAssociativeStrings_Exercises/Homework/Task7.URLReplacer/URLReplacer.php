<?php
/**
 * Write a PHP program URLReplacer.php that reads a text with fgets(STDIN)
 * and replaces all URLs with the HTML syntax <a href= "…" ></a> with a special forum-style syntax [URL=…][/URL].
 */

$text = trim(fgets(STDIN));
$pattern = '/<a href="(.*?)">(.*?)<\/a>/';
preg_match_all($pattern, $text, $matches, PREG_SET_ORDER);
foreach ($matches as $match) {
    $replacement = "[URL=$match[1]]$match[2][/URL]";
    $text = str_replace($match[0], $replacement, $text);
}
echo $text;
