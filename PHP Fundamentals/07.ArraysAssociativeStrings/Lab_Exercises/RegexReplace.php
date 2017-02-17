<?php
$string = 'August 20, 2014';
$pattern = '/(\w+) (\d+), (\d+)/';
$replacement = '\2-\1-\3';
echo preg_replace($pattern, $replacement, $string);
// 20-August-2014
