<?php
/**
 * The list keyword assigns multiple variables from array items
 * list is NOT a function, but a language construct
 * Works only for numerical arrays and assumes indexes start at 0
 */
function smallNumbers()
{
    return [0, 1, 2];
}

list($a, $b, $c) = smallNumbers();
echo "\$a = $a; \$b = $b; \$c = $c";
