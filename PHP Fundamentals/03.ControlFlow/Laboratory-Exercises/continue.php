<?php
$stack = ['first', 'second', 'third'];
foreach ($stack as $value) {
    if ($value == 'second') {
        continue;
    }
    echo $value . '<br>';
}
