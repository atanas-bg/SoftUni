<form method="get">
    <div>
        Starting Index: <input type="text" name="start_index">
        End: <input type="text" name="end_index">
        <input type="submit" name="submit" value="Submit">
    </div>
</form>
<?php if (isset($startIndex, $endIndex)) : ?>
    <div>
        <?= $result; ?>
    </div>
<?php endif; ?>
