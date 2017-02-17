<?php

$a = "4";
$b = 5;
echo $a . $b . "\n";
echo gettype($a) . "\n";
echo gettype($b) . "\n";

$first = null;
echo $first;
$secondNumber;
echo $secondNumber;

$firstName = "Atanas";
$secondName =& $firstName;
$secondName = "Atanasov";

echo $firstName . "\n";
echo $secondName . "\n";

$maxInteger = 9223372036854775807;
echo gettype($maxInteger) . "\n"; // integer
$maxInteger += 1;
echo gettype($maxInteger) . "\n"; // double
echo $maxInteger;

$variable = 5.24245;
$varInt = intval($variable);
echo $varInt . "\n";
$varInt = (int)$variable;
echo $varInt . "\n";
$varFloat = floatval($variable);
echo $varFloat . "\n";
$varFloat = (float)$variable;
echo $varFloat . "\n";

$num = "3.14";
$int = (int)$num;
echo $int . "\n";
$float = (float)$num;
echo $float . "\n";

echo(true); // 1
echo(false); // (nothing)
var_dump(true); // bool(true)
var_dump(false); // bool(false)

$name = 'Fred';
echo 'Hello, $name' . "\n";
echo "Hello, $name" . "\n";
echo 'Hello, {$name}' . "\n";
echo "Hello, {$name}" . "\n";
$n = 12;
echo "You are the {$n}th person";

$students[0] = "nasko";
$students[1] = "petar";
$students = array("nasko", "petar");

$students['nasko'] = 10;
$students['petar'] = 20;
$students = array("nasko" => 10, "petar" => 20);

class Person {
    public $name;
    function name($newname) {
        $this->name = $newname;
    }
}

$nasko = new Person;
$nasko->name("Atanas");
echo "Hello, {$nasko->name}\n";

$variable; // variable is undefined
echo $variable . "\n";
$variable = 4; // variable has value 4
echo $variable . "\n";
$variable = NULL; // variable has no value
echo $variable . "\n";
unset($variable); // variable is undefined
echo $variable . "\n";

$boolVariable = true;
echo gettype($boolVariable) . "\n"; // boolean
var_dump($boolVariable); // bool(true)

//--------------------------
//function updateCounter() {
//    $counter++;
//}
//$counter = 10;
//updateCounter(); // Undefined variable: counter
//echo $counter; // 10
//
//function updateCounter() {
//    global $counter;
//    $counter++;
//}
//$counter = 10;
//updateCounter();
//echo $counter; // 11
//----------------------------
function updateCounter() {
    static $counter = 0;
    $counter++;
    echo "Counter: {$counter}\n";
}
$counter = 10;
updateCounter(); // Counter: 1
updateCounter(); // Counter: 2
echo $counter; // 10


define("CONSTANT", "Hello world.");
echo CONSTANT; // outputs "Hello world."
define("GREETING", "Hello you.", true); // not recommended
echo GREETING; // outputs "Hello you."
echo Greeting; // output "Hello you."

echo 5 / 2 . "\n";
echo 5 / 3 . "\n";
echo 5 / 2.5 . "\n";
echo 5 / 2.6 . "\n";
echo 5 % 2 . "\n";
echo 5 % 5 . "\n";

//\-------------------------|
$a = 5;
$b = 4;
var_dump($a >= $b); // bool(true)
var_dump($a != $b); // bool(true)
var_dump($a == $b); // bool(false)
var_dump($a == "5"); // bool(true)
var_dump($a === "5"); // bool(false)

echo 4<=>4; // 0
echo 4<=>5; // -1
echo 5<=>4; // 1

