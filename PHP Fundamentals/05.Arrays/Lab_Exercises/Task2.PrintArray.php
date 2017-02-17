<form method="get">
    <input type="text" name="input_string">
    <input type="submit" name="submit" value="Submit">
</form>
<?php
if (isset($_GET['input_string'])) {
    $inputString = $_GET['input_string'];
    $numArray = explode(',', $inputString);
    $numArrayLength = count($numArray);
    for ($i = 0, $p = $numArrayLength - 1; $i < $numArrayLength; $i++, $p--) {
        if ($i == $p) {
            echo $numArray[$i] . "<br>";
            break;
        } elseif ($i == $p - 1) {
            echo $numArray[$i] . " " . $numArray[$p] . "<br>";
            break;
        } else {
            echo ($numArray[$i] . " " . $numArray[$p]). "<br>";
        }
    }
}
