/**
  Having a single space (" ") only after every one of those symbols: ".,!?:;" is obligatory.
  Having one or more spaces (" ") before every one of those symbols: ".,!?:;" is forbidden.
  Sequences like ". . . !" should be displayed as "...!"
  If there is a dot (".") followed by spaces, then by any digit(s) this means that the text might be a number or a
 date – make sure that there are no following spaces after the dot.
  A text inside of quotes should be trimmed (e.g. " text "  "text")
 */

function formatText([text]) {
    let patternSpacesAfterSymbols = /([.,!?:;]+)(\s*)/g;
    let patternSpacesBeforeSymbols = /(\s*)([.,!?:;]+)/g;
    let patternThreeDotsAndExclamationMark = /\.\s*\.\s*\.\s*!/g;
    let patternDate = /(\.\s+)(\d+)/g;
    let patternTextInQuotes = /(")(.+)(")/g;
    let space = '';

    space = ' ';
    text = reformat(patternSpacesAfterSymbols, text, space);

    text = reformat(patternSpacesBeforeSymbols, text);

    text = text.replace(patternThreeDotsAndExclamationMark, '...!');

    text = reformat(patternDate, text);

    text = reformatTextInQuotes(patternTextInQuotes, text);


    function reformatTextInQuotes(pattern, str) {
        let match = pattern.exec(str);
        let startIndex = 0;
        while (match) {
            let startMatchIndex = str.indexOf(match[0], startIndex);
            let length = match[0].length;
            str = str.substr(0, startMatchIndex) + match[1] + match[2].trim() + match[3] + str.substr(startMatchIndex + length);
            startIndex = startMatchIndex += 1;
            match = pattern.exec(str);
        }
        return str;
    }



    function reformat(pattern, str, space = '') {
        let match = pattern.exec(str);
        let startIndex = 0;
        while (match) {
            let startMatchIndex = str.indexOf(match[0], startIndex);
            let length = match[0].length;
            let reformattedText = match[1].trim() + match[2].trim() + space;
            str = str.substr(0, startMatchIndex) + reformattedText + str.substr(startMatchIndex + length);
            startIndex = startMatchIndex + reformattedText.length;
            match = pattern.exec(str);
        }
        return str;
    }


    console.log(text);
}

formatText(['20 . 12. 16 .']);
// formatText(['Make,sure to give:proper spacing where is needed... !'])