<?php
if (isset($_GET['filter'])) {
    $delimiter = $_GET['delimiter'];
    $names = explode($delimiter, $_GET['names']);
    $ages = explode($delimiter, $_GET['ages']);
}

include 'PaginateStudents_FrontEnd.php.php';
