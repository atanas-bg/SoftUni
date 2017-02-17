<?php
$rows = 5;
$cols = 4;
$count = 1;
$matrix = [];
for ($r = 0; $r < $rows; $r++) {
    $matrix[$r] = [];
    for ($c = 0; $c < $cols; $c++) {
        $matrix[$r][$c] = $count++;
    }
}
?>

<table border="1">
    <?php for ($row = 0; $row < count($matrix); $row++) : ?>
        <tr>
            <?php for ($col = 0; $col < count($matrix[$row]); $col++) : ?>
                <td><?= htmlspecialchars($matrix[$row][$col]) ?></td>
            <?php endfor ?>
        </tr>
    <?php endfor ?>
</table>
