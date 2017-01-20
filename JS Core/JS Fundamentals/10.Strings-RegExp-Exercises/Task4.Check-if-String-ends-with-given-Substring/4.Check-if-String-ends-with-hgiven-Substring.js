/**
 * Created by User on 14.12.2016 г..
 */
function checkForSubstr([str, subStr]) {
    let result = str.endsWith(subStr);
    console.log(result);
}

checkForSubstr(['The new iPhone has no headphones jack.', 'o headphones jack.']);