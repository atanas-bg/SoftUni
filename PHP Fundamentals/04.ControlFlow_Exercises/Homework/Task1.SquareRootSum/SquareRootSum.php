<?php
/**
 * Write a PHP script SquareRootSum.php that displays a table in your browser with 2 columns.
 * The first column should contain a number (even numbers from 0 to 100) and the second column should contain the square root of that number,
 * rounded to the second digit after the decimal point.
 * The last row of the table should contain the sum of all values in the Square column. Styling the page is optional.
 */
?>
<table>
    <thead border="1" cellpadding="0">
    <tr>
        <th>Number</th>
        <th>Square</th>
    </tr>
    </thead>
    <tbody>
    <?php $sum = 0; ?>
    <?php for ($i = 0; $i <= 100; $i += 2) : ?>
        <tr>
            <td><?= $i; ?></td>
            <?php $squaredNum = sprintf("%0.2f", sqrt($i)); ?>
            <td><?= $squaredNum; ?></td>
        </tr>
        <?php $sum += $squaredNum; ?>
    <?php endfor; ?>
    <tr>
        <td><?= "Total:" ?></td>
        <td><?= $sum; ?></td>
    </tr>
    </tbody>
</table>