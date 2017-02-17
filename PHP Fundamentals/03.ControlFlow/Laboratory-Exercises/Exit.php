<?php
$filename = '/beer.php';
$file = fopen($filename, 'r')
    || exit("Unable to open file: $filename");
