<!DOCTYPE html>
<html>

<head>
    <title>Information Table</title>
</head>

<body>

<form method="GET">
    Name: <input type="text" name="username"><br>
    Phone Number: <input type="text" name="phoneNumber"><br>
    Age: <input type="text" name="age"><br>
    Address: <input type="text" name="address"><br>
    <input type="submit" name="submit" value="Submit">
</form>

<?php
/*
* Write a PHP script InformationTable.php which generates an HTML table by given information about a person (name, phone number, age, address).
* Styling the table is optional. Semantic HTML is required.
* */
if (isset($_GET['submit'])) {
    $name = $_GET['username'];
    $phoneNumber = $_GET['phoneNumber'];
    $age = $_GET['age'];
    $address = $_GET['address'];

    if ((count($_GET) == 5) && isset($_GET['submit'])) {
        echo '<body>' . '<main>' .
            '<table style="padding: 0; margin: 0; width: 250px; border-collapse: collapse; border-spacing: 0;">' .
            '<tr style="border:1px solid black;">' .
            '<th style="border:1px solid black; background-color:orange; font-weight: bold; text-align: left;">' . 'Name' . '</th>' .
            '<th style="border:1px solid black; font-weight: normal; text-align: right;">' . $name . '</th>' . '</tr>' .
            '<tr>' . '<td style="border:1px solid black; background-color:orange; font-weight: bold; text-align: left;">' . 'Phone number: ' . '</td>' .
            '<td style="border:1px solid black; font-weight: normal; text-align: right;">' . $phoneNumber . '</td>' . '</tr>' .
            '<tr>' . '<td style="border:1px solid black; background-color:orange; font-weight: bold; text-align: left;">' . 'Age: ' . '</td>' .
            '<td style="border:1px solid black; font-weight: normal; text-align: right">' . $age . '</td>' . '</tr>' .
            '<tr>' . '<td style="border:1px solid black; background-color:orange; font-weight: bold; text-align: left;">' . 'Address: ' . '</td>' .
            '<td style="border:1px solid black; font-weight: normal; text-align: right">' . $address . '</td>' . '</tr>' .
            '</table>' .
            '</main>' . '</body>';
    }
}
?>
</body>
</html>
