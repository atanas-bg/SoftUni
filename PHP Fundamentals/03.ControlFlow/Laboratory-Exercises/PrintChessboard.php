<link href="PrintChessboard.css" rel="stylesheet">
<?php
$rows = 6;

$html = '<div class="chessboard">';
for ($row = 1; $row <= $rows; $row++) {
    $color = ($row % 2 == 0) ? 'black' : 'white';

    $html .= '    <div>';
    for ($col = 1; $col <= $rows; $col++) {
        $color = ($color == 'black') ? 'white' : 'black';
        $html .= "<span class= \"$color\"></span>";
    }
    $html .= '    </div>';
}
$html .= '</div>';
echo $html;
