<?php
function strIsEqual($str1, $str2, $ignoreCase = true)
{
    if ($ignoreCase) {
        $result = strtolower($str1) == strtolower($str2);
    } else {
        $result = $str1 == $str2;
    }
    return $result;
}

echo strIsEqual("nakov", "NaKOv", true); // 1 (true)
echo strIsEqual("nakov", "NAKOV"); // 1 (true)
echo strIsEqual("nakov", "Nakov", false); // "" (false)
