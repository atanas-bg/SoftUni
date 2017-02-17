<?php
/**
 * You will receive a single line from the standard input containing a word (or at least a set or characters).
 * You need to print on the standard input how many times each letter is found in order of the letter appearance, in format {letter} -> {times}
 */

$input = trim(fgets(STDIN));
$result = array_count_values(str_split($input));
foreach ($result as $key => $value) {
    echo "$key -> $value\n";
}

// second solution
$result = [];
$inputLength = strlen($input);
for ($i = 0; $i < $inputLength; $i++) {
    $symbol = $input[$i];
    if (!array_key_exists($symbol, $result)) {
        $result[$symbol] = 0;
    }
    $result[$symbol] += 1;
}

foreach ($result as $key => $value) {
    echo "$key -> $value\n";
}
