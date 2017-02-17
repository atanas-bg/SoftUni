<?php
/**
 * You are a very rich billionaire with an unhidden passion for cars.
 * You like certain car manufacturers but you don’t really care about anything else,
 * and that’s why you need your own randomizing algorithm that helps you decide how many and what color cars you should buy.
 * Write a PHP script CarRandomizer.php that receives a string of cars from an input HTML form, separated by a comma and space (“, “).
 * It then prints each car, a random color and a random quantity in a table like the one shown below.
 * Use colors by your choice. Use as quantity a random number in range [1...5]. Styling the page is optional.
 */

if (isset($_GET['show_result'])) {
    $cars = $_GET['cars'];
    $cars = explode(', ', $cars);
    $colors = ['green', 'yellow', 'black', 'blue'];
}
include 'CarRandomizer_FrontEnd.php';

