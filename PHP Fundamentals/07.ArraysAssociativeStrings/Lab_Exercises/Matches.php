<?php
preg_match("/find[ ]*(me)/", "find me find   me", $matches);
print_r($matches);

preg_match_all("/find[ ]*(me)/", "find me find   me", $matches);
print_r($matches);
