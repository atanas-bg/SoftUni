/**
 * Created by User on 14.12.2016 г..
 */
function getVariableNames(input) {
    if (Array.isArray(input)) {
        let text = input[0];
        let regex = /\b_([A-Za-z0-9]+)\b/g;
        let match = regex.exec(text);
        let result = [];
        while(match) {
            result.push(match[1]);
            match = regex.exec(text);
        }

        console.log(result.join(','))
    }
}

getVariableNames(['The _id and _age variables are both integers.']);
getVariableNames(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']);