/**
 * Created by User on 4.10.2016 г..
 */
// input : abba
// output : true

function isPalindrome([str]) {
    let strLength = str.length;
    for (let i = 0; i < (strLength / 2); i++) {
        if (str[i] != str[strLength - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(['abnba']));