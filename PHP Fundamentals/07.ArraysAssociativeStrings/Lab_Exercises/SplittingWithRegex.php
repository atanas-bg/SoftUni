<?php
$text = "I love HTML, CSS, PHP and MySQL.";
$tokens = preg_split("/\W+/", $text, -1, PREG_SPLIT_NO_EMPTY);
echo json_encode($tokens);
// ["I","love","HTML","CSS","PHP","and","MySQL"]
