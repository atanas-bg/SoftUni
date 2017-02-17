<?php
/**
 * Write a program that receives data about a quiz and prints it formatted as an XML document.
 * The data comes as pairs of question-answer entries.
 */

$input = trim(fgets(STDIN));
$input = explode(", ", $input);
$inputLength = count($input);
$html = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" . "\n";

$html .= "<quiz>" . "\n";
for ($i = 0; $i < $inputLength; $i += 2) {
    $question = $input[$i];
    $answer = $input[$i + 1];
    $html .= "  <question>" . "\n";
    $html .= "    $question" . "\n";
    $html .= "  </question>" . "\n";
    $html .= "  <answer>" . "\n";
    $html .= "    $answer" . "\n";
    $html .= "  </answer>" . "\n";
}
$html .= "</quiz>" . "\n";

echo $html;

$code = <<<"HTML"
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <question>
    Dry ice is a frozen form of which gas?
  </question>
  <answer>
    Carbon Dioxide
  </answer>
  <question>
    What is the brightest star in the night sky?
  </question>
  <answer>
    Sirius
  </answer>
</quiz>
HTML;
