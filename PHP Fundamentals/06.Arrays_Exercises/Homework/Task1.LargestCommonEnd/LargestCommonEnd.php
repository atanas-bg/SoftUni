<?php
/**
 * Read two arrays of words and find the length of the largest common end (left or right).
 */
$firstString = fgets(STDIN);
$secondString = fgets(STDIN);
$firstArray = explode(" ", $firstString);
$secondArray = explode(" ", $secondString);
$shorterLength = min(count($firstArray), count($secondArray));

// left check
$leftEnd = 0;
for ($i = 0; $i < $shorterLength; $i++) {
    if ($firstArray[$i] === $secondArray[$i]) {
        $leftEnd += 1;
    } else {
        break;
    }
}

// right check
$rightEnd = 0;

$cuttedFirstArray = array_slice($firstArray, -$shorterLength);
$cuttedSecondArray = array_slice($secondArray, -$shorterLength);
for ($i = $shorterLength - 1; $i >= 0; $i--) {
    if ($cuttedFirstArray[$i] === $cuttedSecondArray[$i]) {
        $rightEnd += 1;
    } else {
        break;
    }
}

if ($leftEnd > $rightEnd) {
    // if we wanted to show the common end
//    $largestCommonEnd = array_slice($firstArray, 0, $leftEnd);
//    $largestCommonEnd = implode(" ", $largestCommonEnd);
//    echo "The largest common end is at the left: $largestCommonEnd";
    echo $leftEnd;
} else if ($leftEnd < $rightEnd) {
    // if we wanted to show the common end
//    $largestCommonEnd = array_slice($firstArray, -$rightEnd);
//    $largestCommonEnd = implode(" ", $largestCommonEnd);
//    echo "The largest common end is at the right: $largestCommonEnd";
    echo $rightEnd;
} else {
    echo $leftEnd;
}