<?php
if (isset($_GET['show_costs'])) {
    $numYears = $_GET['years'];
    $tableHeader = ['Year', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Total:'];
    $monthsCount = 12; // count($tableHeader) - 2
    $currentDate = new DateTime();
}

include 'AnnualExpenses_FrontEnd.php';
