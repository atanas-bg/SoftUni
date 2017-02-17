<?php
$db = mysql_connect("localhost", $username, $password);
if ( ! $db) {
    die("Could not connect to database");
}
