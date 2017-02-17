<?php
$greetings = ['UK' => 'Good morning', 'France' => 'Bonjour', 'Germany' => 'Guten Tag', 'Bulgaria' => 'Kak e zmei'];

foreach ($greetings as $key => $value) {
    echo "In $key people say \"$value\".";
    echo "<br>";
}
