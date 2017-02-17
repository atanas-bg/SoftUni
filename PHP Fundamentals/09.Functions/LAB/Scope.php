<?php

$a = 5;
//function nasko()
//{
//    echo $a;
//}

function nasko()
{
    global $a;
    echo $a . "\n";
}

nasko();

function callMe()
{
    static $count = 0; // initialized at the first call
    $count++; // executed at each function call
    echo "callMe() is called $count times\n";
}

callMe(); // callMe() is called 1 times
callMe(); // callMe() is called 2 times
