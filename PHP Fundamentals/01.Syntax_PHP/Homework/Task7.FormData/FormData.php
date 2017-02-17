<!DOCTYPE html>
<html>

<head>
    <title>Information Table</title>
</head>

<body>

<form method="GET">

    <div align="left"><br>
        <input type="text" name="name" placeholder="name"/><br>
        <input type="text" name="age" placeholder="age"/><br>
        <input type="radio" name="sex" value="Male"> Male<br>
        <input type="radio" name="sex" value="Female"> Female<br>
        <input type="submit" name="submit" value="Submit"/><br>
    </div>
</form>

<?php
/**
 *Write a PHP script GetFormData.php which retrieves the input data from an HTML form, and displays it as string.
 * The input fields should hold name, age and gender (radio buttons).
 * The returned string should be a message containing the information submitted by the form.
 * 100% accuracy is NOT required. Semantic HTML is required.
 */
if ((count($_GET) == 4) && isset($_GET['submit'])) {
    $name = $_GET['name'];
    $age = $_GET['age'];
    $sex = $_GET['sex'];

    echo "My name is " . htmlentities($name) . ". I am " . htmlentities($age) . " years old. I am " . htmlentities($sex);
}
?>
</body>
</html>
