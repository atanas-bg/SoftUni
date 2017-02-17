<form method="get">
    <div>
        Enter cars:
        <input type="text" name="cars">
        <input type="submit" name="show_result" value="Show result">
    </div>
</form>
<?php if (isset($cars)) : ?>
    <table border="1">
        <thead>
        <tr>
            <th>Car</th>
            <th>Color</th>
            <th>Count</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($cars as $car) : ?>
            <tr>
                <td><?= $car; ?></td>
                <td><?= $colors[array_rand($colors, 1)]; ?></td>
                <td><?= rand(1, 5); ?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
<?php endif; ?>
