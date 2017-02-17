<!DOCTYPE html>
<html>

<head>
    <title>Odd or Even</title>
</head>

<body>
<form method="get">
    <input type="text" name="num" placeholder="enter a number">
    <input type="submit" name="send" value="Send">
</form>

<?php
if ((count($_GET) == 2) && isset($_GET['send'])) {
    $num = $_GET['num'];
    if ((float)$num && strpos($num, ",") === false) {
        $rem = fmod($num, 2);
        if ($rem != round($rem)) {
            echo "invalid";
        } else if ($rem == 0) {
            echo "even";
        } else {
            echo "odd";
        }
    } else {
        echo "invalid";
    }
}
?>
</body>
</html>
