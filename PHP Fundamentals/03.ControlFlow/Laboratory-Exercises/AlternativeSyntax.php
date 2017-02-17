<?php
$charCode = 0;
while ($charCode <= 5000) : ?>
    <div style="display: inline-block; width:80px">
        <?= $charCode++ ?> -> &#<?= $charCode ?>;
    </div>
<?php endwhile; ?>
