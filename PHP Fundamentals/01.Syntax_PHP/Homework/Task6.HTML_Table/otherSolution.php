
<?php
//$name = "Gosho";
//$phoneNum = "0882-321-423";
//$age = 24;
//$address = "Hadji Dimitar";
$name = "Pesho";
$phoneNum = "0884-888-888";
$age = 67;
$address = "Suhata Reka";
echo '<body>' . '<main>' .
    '<table style="padding: 0; margin: 0; width: 250px; border-collapse: collapse; border-spacing: 0;">' .
    '<tr style="border:1px solid black;">' .
    '<th style="border:1px solid black; background-color:orange; font-weight: bold; text-align: left;">' . 'Name' . '</th>' .
    '<th style="border:1px solid black; font-weight: normal; text-align: right;">' . $name . '</th>' . '</tr>' .
    '<tr>' . '<td style="border:1px solid black; background-color:orange; font-weight: bold; text-align: left;">' . 'Phone number: ' . '</td>' .
    '<td style="border:1px solid black; font-weight: normal; text-align: right;">' . $phoneNum . '</td>' . '</tr>' .
    '<tr>' . '<td style="border:1px solid black; background-color:orange; font-weight: bold; text-align: left;">' . 'Age: ' . '</td>' .
    '<td style="border:1px solid black; font-weight: normal; text-align: right">' . $age . '</td>' . '</tr>' .
    '<tr>' . '<td style="border:1px solid black; background-color:orange; font-weight: bold; text-align: left;">' . 'Address: ' . '</td>' .
    '<td style="border:1px solid black; font-weight: normal; text-align: right">' . $address . '</td>' . '</tr>' .
    '</table>' .
    '</main>' . '</body>';
?>