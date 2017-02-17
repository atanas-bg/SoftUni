<?php
$number = 5;
$html = "<ul>";
for ($num = 1; $num <= $number; $num++) {
//    $color = ($num % 2 == 0) ? 'green' : 'blue';
    $color = 'blue';
    if ($num % 2 == 0) {
        $color = 'green';
    }
    $html .= "<li><span style='color:$color'>$num</span></li>";
}
$html .= "</ul>";
echo $html;
