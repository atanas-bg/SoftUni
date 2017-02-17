<?php
/*Write a PHP script DumpVariable.php that declares a variable.
If the variable is numeric, print it by the built-in function var_dump().
If the variable is not numeric, print its type at the input.
*/
$input = array(1, 2, 3);
$output = is_numeric($input) ? var_dump(($input + 0)) : gettype($input);
echo $output;
