<?php

mb_internal_encoding("utf-8");
header('Content-Type: text/html; charset=utf-8');
$str = 'Hello, 你好，你怎么样,السلام عليكم , здрасти';
echo "<p>str = \"$str\"</p>";
for ($i = 0; $i < mb_strlen($str); $i++) {
    // $letter = $str[$i]; // this is incorrect!
    $letter = mb_substr($str, $i, 1);
    echo "str[$i] = $letter<br />\n";
}

