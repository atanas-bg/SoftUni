<?php
$email = "bai.ivan@mail.sf.net";
$pattern = "/^[a-zA-Z0-9]+([\._]?[a-zA-Z0-9]*)*\@[a-z]+(\.[a-z]+)+$/";
$result = preg_match_all($pattern, $email);
if ($result) {
    echo "Valid";
} else {
    echo "Invalid";
}
