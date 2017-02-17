<?php
//if (!file_exists("../include/settings.ini")) {
//    throw new Exception("Could not load settings.");
//}

try {
    $db = new PDO('mysql:host=localhost;dbname=test');
    // If exception is thrown, the catch block is executed
} catch (PDOException $e) {
    // Display the exception’s message
    echo "Error: " . $e->getMessage();
} finally {
    echo "This code is always executed.\n";
}

function division($x)
{
    if (!is_numeric($x)) {
        throw new Exception('Wrong type');
    } else if ($x == 0) {
        throw new Exception('Division by zero.');
    }
    return 1 / $x;
}

try {
    echo division(5) . "\n";
    echo division('string') . "\n";
    echo division(0) . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage(), "\n";
} finally {
    echo "Finally is always executed";
}
