<?php
/**
 * Write a program that reads an array of integers from the console and set of commands and executes them over the array. The commands are as follows:
 * •    add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
 * •    addMany <index> <element 1> <element 2> … <element n> – adds a set of elements at the specified index.
 * •    contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
 * •    remove <index> – removes the element at the specified index.
 * •    shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
 * o    For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
 * •    sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
 * o    For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
 * •    print – stop receiving more commands and print the last state of the array.
 */

$sequence = trim(fgets(STDIN));
$sequence = explode(" ", $sequence);
$input = trim(fgets(STDIN));
while ($input != 'print') {
    $input = explode(" ", $input);
    $command = array_splice($input, 0, 1)[0];
    switch ($command) {
        case 'add':
            $index = array_splice($input, 0, 1)[0];
            array_splice($sequence, $index, 0, $input[0]);
            break;
        case 'addMany':
            $index = array_splice($input, 0, 1)[0];
            array_splice($sequence, $index, 0, $input);
            break;
        case 'contains':
            $element = $input[0];
            $result = array_search($element, $sequence);
            if ($result !== false) {
                echo $result . "\n";
            } else {
                echo -1 . "\n";
            }
            break;
        case 'remove':
            $index = $input[0];
            array_splice($sequence, $index, 1);
            break;
        case 'shift':
            $positionsLeft = $input[0];
            $sequence = shift($sequence, $positionsLeft);
            break;
        case 'sumPairs':
            $sequence = sumPairs($sequence);
            break;
    }

    $input = trim(fgets(STDIN));
}

function shift($numbers, $positionsLeft)
{
    $length = count($numbers);
    $positionsLeft = $positionsLeft % $length;
    for ($i = 0; $i < $positionsLeft; $i++) {
        $num = array_shift($numbers);
        array_push($numbers, $num);
    }
    return $numbers;
}

function sumPairs($numbers)
{
    $length = count($numbers);

    $reducedArray = [];
    for ($i = 0; $i <= $length - 1; $i += 2) {
        if ($i == $length - 1) {
            $reducedArray[] = $numbers[$i];
        } else {
            $sumPair = $numbers[$i] + $numbers[$i + 1];
            $reducedArray[] = $sumPair;
        }
    }

    return $reducedArray;
}


$result = implode(", ", $sequence);
echo "[$result]";
