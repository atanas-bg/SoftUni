<form method="get">
    <div>
        Input string:<input type="text" name="input_string">
        <input type="submit" name="submit" value="Submit">
    </div>
</form>
<?php if (isset($inputValuesResult)) : ?>
    <table border="1">
        <tbody>
        <?php foreach ($inputValuesResult as $key => $val) : ?>
            <tr>
                <td><?= $key; ?></td>
                <td><?= $val; ?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
<?php endif; ?>