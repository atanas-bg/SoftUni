<?php
$input = trim(fgets(STDIN)); // trims the end of line
//$input = $argv[1];

//Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
//Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
//All others are unknown

switch ($input) {
    case 'banana':
    case 'apple':
    case 'kiwi':
    case 'cherry':
    case 'lemon':
    case 'grapes':
    case 'peach':
        echo "fruit";
        break;
    case 'tomato':
    case 'cucumber':
    case 'pepper':
    case 'onion':
    case 'garlic':
    case 'parsley':
        echo "vegetable";
        break;
    default:
        echo "unknown";
}
