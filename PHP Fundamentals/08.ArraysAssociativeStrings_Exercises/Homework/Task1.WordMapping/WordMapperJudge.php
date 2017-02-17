<?php
header("Content-Type: text/html; charset=utf-8");
mb_internal_encoding("utf-8");
?>
<!DOCTYPE html>
<html lang="en">
<head>
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
<?php
if (isset($_GET['input'])) {
    $text = $_GET['input'];
    $text = strtolower($text);
    $wordsArray = preg_split("/[^a-zA-Z]+/", $text, -1, PREG_SPLIT_NO_EMPTY);
    $countedWords = array_count_values($wordsArray);
    // second version of counting
//    $countedWords = [];
//    foreach ($wordsArray as $word) {
//        if (!isset($countedWords[$word])) {
//            $countedWords[$word] = 0;
//        }
//        $countedWords[$word] += 1;
//    }

    $html = "<table border='2'>";
    foreach ($countedWords as $word => $count) {
        $html .= "<tr><td>$word</td><td>$count</td></tr>";
    }
    $html .= "</table>";
    echo $html;
}
?>
</body>
</html>
