<?php

$result = [];

// before finally
doBeforeFinally($result);

// after finally
doAfterFinally($result);


function doBeforeFinally(&$result)
{
    $command = trim(fgets(STDIN));
    try {
        while ($command != 'finally') {
            $oldValue = $result;
            calculateBeforeFinally($command, $result);
            $command = trim(fgets(STDIN));
        }
    } catch (Exception $e) {
        echo "Caught exception: " . $e->getMessage() . "\n";
        $result = $oldValue;
        doBeforeFinally($result);
    }
}

function doAfterFinally(&$result)
{
    $command = trim(fgets(STDIN));
    try {
        $oldValue = $result;
        calculateAfterFinally($command, $result);
    } catch (Exception $e) {
        echo "Caught exception: " . $e->getMessage() . "\n";
        $result = $oldValue;
        doAfterFinally($result);
    }
}


function sum($a, $b)
{
    return $a + $b;
}

function multiply($a, $b)
{
    return $a * $b;
}

function divide($a, $b)
{
    if ($b == 0) {
        throw  new Exception('Division by zero.');
    } else {
        return $a / $b;
    }
}

function subtract($a, $b)
{
    return $a - $b;
}

function factorial($a)
{
    $fact = 1;
    for ($i = 1; $i <= $a; $i++) {
        $fact *= $i;
    }

    return $fact;
}

function root($a)
{
    if ($a < 0) {
        throw  new Exception("Can't take the root of a negative number");
    } else {
        return sqrt($a);
    }
}

function pythagorean($a, $b)
{
    return sqrt(pow($a, 2) + pow($b, 2));
}

function triangleArea($a, $b, $c)
{
    $p = ($a + $b + $c) / 2;
    $sum = $p * ($p - $a) * ($p - $b) * ($p - $c);
    if ($sum < 0) {
        throw  new Exception("Can't take the root of a negative number");
    } else {
        $s = sqrt($sum);
        return $s;
    }
}

function quadratic($a, $b, $c)
{
    if ($a == 0) {
        throw  new Exception("Division by zero.");
    } else {
        $sum = $b * $b + 4 * $a * $c;
        if ($sum >= 0) {
            $p = ($b + sqrt($sum)) / 2 * $a;
            $q = ($b - sqrt($sum)) / 2 * $a;
            $s = $p + $q;
        } else {
            $s = 0;
        }

        return $s;
    }
}

function calculateBeforeFinally($command, &$result)
{
    switch ($command) {
        case 'sum':
            $a = trim(fgets(STDIN));
            $b = trim(fgets(STDIN));
            $result[] = sum($a, $b);
            break;
        case 'multiply':
            $a = trim(fgets(STDIN));
            $b = trim(fgets(STDIN));
            $result[] = multiply($a, $b);
            break;
        case 'divide':
            $a = trim(fgets(STDIN));
            $b = trim(fgets(STDIN));
            $result[] = divide($a, $b);
            break;
        case 'subtract':
            $a = trim(fgets(STDIN));
            $b = trim(fgets(STDIN));
            $result[] = subtract($a, $b);
            break;
        case 'factorial':
            $a = trim(fgets(STDIN));
            $result[] = factorial($a);
            break;
        case 'root':
            $a = trim(fgets(STDIN));
            $result[] = root($a);
            break;
        case 'power':
            $a = trim(fgets(STDIN)) + 0;
            $b = trim(fgets(STDIN)) + 0;
            $result[] = pow($a, $b);
            break;
        case 'absolute':
            $a = trim(fgets(STDIN));
            $result[] = abs($a);
            break;
        case 'pythagorean':
            $a = trim(fgets(STDIN));
            $b = trim(fgets(STDIN));
            $result[] = pythagorean($a, $b);
            break;
        case 'triangleArea':
            $a = trim(fgets(STDIN));
            $b = trim(fgets(STDIN));
            $c = trim(fgets(STDIN));
            $result[] = triangleArea($a, $b, $c);
            break;
        case 'quadratic':
            $a = trim(fgets(STDIN));
            $b = trim(fgets(STDIN));
            $c = trim(fgets(STDIN));
            $result[] = quadratic($a, $b, $c);
            break;
    }
}

function calculateAfterFinally($command, &$result)
{
    switch ($command) {
        case 'sum':
            if (count($result) > 1) {
                $sum = array_sum($result);
                $result = array($sum);
            }
            echo implode(", ", $result);
            break;
        case 'multiply':
            if (count($result) > 1) {
                $multiplied = array_product($result);
                $result = array($multiplied);
            }
            echo implode(", ", $result);
            break;
        case 'divide':
            while (count($result) > 1) {
                $a = array_shift($result);
                $b = array_shift($result);
                $divided = divide($a, $b);
                $result[] = $divided;
            }
            echo implode(", ", $result);
            break;
        case 'subtract':
            while (count($result) > 1) {
                $a = array_shift($result);
                $b = array_shift($result);
                $subtracted = $a - $b;
                $result[] = $subtracted;
            }
            echo implode(", ", $result);
            break;
        case 'factorial':
            $result = array_map("factorial", $result);
            echo implode(", ", $result);
            break;
        case 'root':
            $result = array_map("root", $result);
            echo implode(", ", $result);
            break;
        case 'power':
            while (count($result) > 1) {
                $a = array_shift($result);
                $b = array_shift($result);
                $powered = pow($a, $b);
                $result[] = $powered;
            }
            echo implode(", ", $result);
            break;
        case 'absolute':
            $result = array_map("abs", $result);
            echo implode(", ", $result);
            break;
        case 'pythagorean':
            while (count($result) > 1) {
                $a = array_shift($result);
                $b = array_shift($result);
                $num = pythagorean($a, $b);
                $result[] = $num;
            }
            echo implode(", ", $result);
            break;
        case 'triangleArea':
            while (count($result) > 2) {
                $a = array_shift($result);
                $b = array_shift($result);
                $c = array_shift($result);
                $s = triangleArea($a, $b, $c);
                $result[] = $s;
            }
            echo implode(", ", $result);
            break;
        case 'quadratic':
            while (count($result) > 2) {
                $a = array_shift($result);
                $b = array_shift($result);
                $c = array_shift($result);
                $s = quadratic($a, $b, $c);
                $result[] = $s;
            }
            echo implode(", ", $result);
            break;
    }

//    print_r($result);
}
