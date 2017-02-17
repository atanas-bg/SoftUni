<?php
/**
 * Write a PHP program Navigation.php that takes data from several input fields and builds 3 navigation bars.
 * The input fields are categories with attribute name=”categories”, tags with attribute name=”tags” and months with attribute name=”months”.
 * The first navigation bar should contain a list of the categories, the second navigation bar – a list of the tags and the third should contain the months.
 * The entries in the input strings will be separated by a comma and space ", ".
 * When you print your result don’t forget to use <h2> tag  for “Categories”, “Tags”, and “Months”. Semantic HTML is required.
 */

header("Content-Type: text/html; charset=utf-8");
mb_internal_encoding("utf-8");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Navigation</title>
</head>
<body>
<form method="get">
    <div>
        Categories: <input type="text" name="categories">
    </div>
    <div>
        Tags: <input type="text" name="tags">
    </div>
    <div>
        Months: <input type="text" name="months">
    </div>
    <div>
        <input type="submit" name="submit" value="Generate">
    </div>
</form>
<?php
if (isset($_GET['categories'], $_GET['tags'], $_GET['months'])) {
    $categories = $_GET['categories'];
    $categories = explode(", ", $categories);
    $tags = $_GET['tags'];
    $tags = explode(", ", $tags);
    $months = $_GET['months'];
    $months = explode(", ", $months);
    $result = "";
    $result .= "<h2>Categories</h2>";
    $result .= "<ul>";
    foreach ($categories as $category) {
        $result .= "<li>$category</li>";
    }
    $result .= "</ul>";
    $result .= "<h2>Tags</h2>";
    $result .= "<ul>";
    foreach ($tags as $tag) {
        $result .= "<li>$tag</li>";
    }
    $result .= "</ul>";
    $result .= "<h2>Months</h2>";
    $result .= "<ul>";
    foreach ($months as $month) {
        $result .= "<li>$month</li>";
    }
    $result .= "</ul>";

    echo $result;
}
?>
</body>
</html>

