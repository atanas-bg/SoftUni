<form method="get">
    <div>
        Enter number of years:
        <input type="text" name="years">
        <input type="submit" name="show_costs" value="Show costs">
    </div>
</form>
<?php if (isset($numYears)) : ?>
    <table border="1">
        <thead>
        <tr>
            <?php foreach ($tableHeader as $head) : ?>
                <th><?= $head; ?></th>
            <?php endforeach; ?>
        </tr>
        </thead>
        <tbody>
        <?php for ($num = 1; $num <= $numYears; $num += 1) : ?>
            <?php $fullYearSum = 0; ?>
            <tr>
                <td><?= $currentDate->format("Y"); ?></td>
                <?php for ($i = 0; $i < $monthsCount; $i++) : ?>
                    <?php $cost = rand(0, 999); ?>
                    <td><?= $cost; ?></td>
                    <?php $fullYearSum += $cost; ?>
                <?php endfor; ?>
                <td><?= $fullYearSum; ?></td>
            </tr>
            <?php $currentDate->modify('- 1 year'); ?>
        <?php endfor; ?>
        </tbody>
    </table>
<?php endif; ?>


