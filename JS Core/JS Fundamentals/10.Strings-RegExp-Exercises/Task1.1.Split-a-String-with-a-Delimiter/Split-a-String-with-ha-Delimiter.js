/**
 * Created by User on 14.12.2016 г..
 */
function stringDelimiter([str, delimiter]) {
    let text = str.split(delimiter).join('\n');
    console.log(text);
}

stringDelimiter(['One-Two-Three-Four-Five', '-']);
stringDelimiter(['http://platform.softuni.bg', '.']);