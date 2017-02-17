<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Word Mapper</title>
</head>
<body>
<form method="get">
    <div>
        <textarea name="input"></textarea>
    </div>
    <div>
        <input type="submit" name="submit" value="Count words">
    </div>
</form>
<?php if (isset($text)) : ?>
    <table border="2">
        <?php foreach ($countedWords as $word => $count) : ?>
            <tr>
                <td><?= $word; ?></td>
                <td><?= $count; ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
<?php endif; ?>
</body>
</html>
<?php
if (isset($_GET['submit'])) {
    $text = $_GET['input'];
    $text = strtolower($text);
    $wordsArray = preg_split("/\W+/", $text, -1, PREG_SPLIT_NO_EMPTY);
    $countedWords = [];
    foreach ($wordsArray as $word) {
        if (!isset($countedWords[$word])) {
            $countedWords[$word] = 0;
        }
        $countedWords[$word] += 1;
    }
}