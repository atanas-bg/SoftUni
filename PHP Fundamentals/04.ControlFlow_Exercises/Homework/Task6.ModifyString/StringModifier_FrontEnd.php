<form method="get">
    <div>
        <input type="text" name="input_string">
        <input type="radio" name="check_option" value="check_palindrome">Check Palindrome
        <input type="radio" name="check_option" value="reverse_string">Reverse String
        <input type="radio" name="check_option" value="split">Split
        <input type="radio" name="check_option" value="hash_string">Hash String
        <input type="radio" name="check_option" value="shuffle_string">Shuffle String
        <input type="submit" name="submit" value="Submit">
    </div>
</form>

<?php if (isset($inputString, $checkOption)) : ?>
    <div>
        <p><?= $result; ?></p>
    </div>
<?php endif; ?>
