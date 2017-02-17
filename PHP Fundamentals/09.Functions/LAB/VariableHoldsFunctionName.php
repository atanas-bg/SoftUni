<?php
function printSomething($arg)
{
    echo "This is function. Arg = $arg";
}

$a = 'printSomething';
$a(5); // This invokes the printSomething(5) function
