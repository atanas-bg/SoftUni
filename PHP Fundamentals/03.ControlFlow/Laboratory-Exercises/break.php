<?php
$stack = ['first', 'second', 'third'];
foreach ($stack as $value) {
    if ($value == 'third') {
        break;
    }
    echo $value.'<br>';
}
