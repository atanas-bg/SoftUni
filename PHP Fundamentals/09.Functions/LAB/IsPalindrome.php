<?php
function isPalindrome($str)
{
    for ($i = 0; $i < strlen($str) / 2; $i++)
        if ($str[$i] != $str[strlen($str) - $i - 1])
            return false;
    return true;
}

// second version
function isPalindrome2($str)
{
    $revStr = strrev($str);
    if ($str != $revStr) {
        return false;
    }
    return true;
}

echo isPalindrome('abba');
echo isPalindrome2('abba');
echo isPalindrome('abca');
echo isPalindrome2('abca');
