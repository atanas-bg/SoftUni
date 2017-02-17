<?php
$removeIndex = false;
foreach ($_GET as $name => $values)
{
    if(mb_substr($name, 0, 12, 'UTF-8') == 'removeButton') {
        $removeIndex = str_replace('removeButton', '', $name);
    }
}

if (isset($_GET['submit']) || isset($_GET['addButton']) || $removeIndex !== false) {
    $firstName = $_GET['first_name'];
    $secondName = $_GET['second_name'];
    $email = $_GET['email'];
    $examScore = $_GET['exam_score'];
    $sort = $_GET['sort'];
    $order = $_GET['order'];
    $count = count($firstName);
    $average = round(array_sum($examScore) / count($examScore));
}


include 'StudentSorting_FrontEnd.php';