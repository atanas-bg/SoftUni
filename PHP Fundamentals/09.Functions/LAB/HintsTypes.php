<?php
declare(strict_types = 1); // Strict mode
function example(int $arg): int
{
    // The returned result should be int
    return $arg + 1;
}
//echo example('3'); // shows error
echo example(3);