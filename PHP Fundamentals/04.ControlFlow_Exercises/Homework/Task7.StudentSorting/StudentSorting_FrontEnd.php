<link rel="stylesheet" type="text/css" href="studentSorting.css"/>
<form method="get">
    <fieldset id="formTitle">
        <div>Form</div>
    </fieldset>
    <table class="inputTable">
        <thead>
        <tr>
            <th>First name:</th>
            <th>Second name:</th>
            <th>Email:</th>
            <th colspan="2">Exam score:</th>
        </tr>
        </thead>
        <tbody>
        <?php
        if (isset($_GET['addButton'])) {
            $count++;
            $firstName[] = '';
            $secondName[] = '';
            $email[] = '';
            $examScore[] = '';
        }

        if ($removeIndex !== false) {
            $count = $count - 1;
            array_splice($firstName, $removeIndex, 1);
            array_splice($secondName, $removeIndex, 1);
            array_splice($email, $removeIndex, 1);
            array_splice($examScore, $removeIndex, 1);
        }

        if (isset($_GET['submit']) || isset($_GET['addButton']) || $removeIndex !== false) {
            for ($i = 0; $i < $count; $i++) {
                echo <<<HTML
            <tr>
                <td>
                    <input type="text" name="first_name[]" value="$firstName[$i]">
                </td>
                <td>
                    <input type="text" name="second_name[]" value="$secondName[$i]">
                </td>
                <td>
                    <input type="email" name="email[]" value="$email[$i]">
                </td>
                <td>
                    <input type="number" name="exam_score[]" value="$examScore[$i]">
                </td>
                <td>
HTML;
                if($i !== 0){
                    echo <<<HTML
                        <input type="submit" class="button" name="removeButton$i" value="-">
HTML;
                }
                echo <<<HTML
                </td>
            </tr>
HTML;
            }
        } else {
            echo <<<HTML
            <tr>
                <td>
                    <input type="text" name="first_name[]">
                </td>
                <td>
                    <input type="text" name="second_name[]">
                </td>
                <td>
                    <input type="email" name="email[]">
                </td>
                <td>
                    <input type="number" name="exam_score[]">
                </td>
                <td>
                    <!--<input type="button" class="button" name="removeButton0" value="-">-->
                </td>
            </tr>
HTML;

        }
        ?>
        </tbody>
    </table>

    <div id="addButton">
        <input type="submit" class="button" name="addButton" value="+"></div>
    <div id="sortBy">
        Sort by: <select name="sort">
            <option value="firstName">First name</option>
            <option value="secondName">Second name</option>
            <option value="email">Email</option>
            <option value="examScore">Exam score</option>
        </select>
    </div>
    <div id="order">
        Order: <select name="order">
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
        </select>
    </div>
    <div id="submit">
        <input type="submit" class="submit" name="submit" value="SUBMIT">
    </div>
    </fieldset>
</form>

<?php if (isset($_GET['addButton'])): ?>

<?php endif; ?>

<?php if (isset($firstName, $secondName, $email, $examScore, $sort, $order)) : ?>
    <div>Result</div>
    <table>
        <thead>
        <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Exam score</th>
        </tr>
        </thead>
        <tbody>
        <?php for ($i = 0; $i < $count; $i++) : ?>
            <tr>
                <td><?= $firstName[$i]; ?></td>
                <td><?= $secondName[$i]; ?></td>
                <td><?= $email[$i]; ?></td>
                <td><?= $examScore[$i]; ?></td>
            </tr>
        <?php endfor; ?>
        <tr>
            <td colspan="3">Average Score:</td>
            <td><?= $average; ?></td>
        </tr>
        </tbody>
    </table>
<?php endif; ?>
