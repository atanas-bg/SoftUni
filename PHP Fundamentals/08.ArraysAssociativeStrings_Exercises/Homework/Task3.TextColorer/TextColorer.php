<?php
/**
 * Write a PHP program TextColorer.php that takes a text from a textfield with attribute name=”input” ,
 * colors each character according to its ASCII value and prints the result.
 * If the ASCII value of a character is odd, the character should be printed in blue.
 * If it’s even, it should be printed in red.For the colors use the <font> tag.
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Text Colorer</title>
    <meta charset="UTF-8">
</head>
<body>
<form method="get">
    <div>
        <textarea name="input"></textarea>
    </div>
    <div>
        <input type="submit" name="submit" value="Color text">
    </div>
</form>
<?php
if (isset($_GET['input'])) {
    $text = $_GET['input'];
    $charsArray = str_split($text);
    $result = [];
    foreach ($charsArray as $char) {
        if ($char != ' ') {
            $asciiCode = ord($char);
            if ($asciiCode % 2 == 0) {
                $result[] = "<font color='red'>$char" . " </font>";
            } else {
                $result[] = "<font color='blue'>$char" . " </font>";
            }
        }
    }
    $result = implode("", $result);
    echo $result;
}
?>
</body>
</html>
