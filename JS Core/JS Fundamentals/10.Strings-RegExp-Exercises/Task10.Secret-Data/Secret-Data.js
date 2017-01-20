/**
 * Created by User on 15.12.2016 г..
 */
function codeData(input) {
    let clientNameRegex = /(\*[A-Z][a-z]+)(\s|\t|$)/g;
    let clientPhoneNumberRegex = /(\+[\d-]{10})(\s|\t|$)/g;
    let clientIDRegex = /(![A-Za-z\d]+)(\s|\t|$)/g;
    let secretBaseNameRegex = /(_[A-Za-z\d]+)(\s|\t|$)/g;
    let codeSymbol = "|";
    let result = [];

    if (Array.isArray(input)) {
        for (let line of input) {
            line = codeText(line, clientNameRegex);
            line = codeText(line, clientPhoneNumberRegex);
            line = codeText(line, clientIDRegex);
            line = codeText(line, secretBaseNameRegex);

            result.push(line);
        }
    }
    console.log(result);

    function codeText(line, pattern) {
        let match = pattern.exec(line);
        while (match) {
            let codedText = codeSymbol.repeat(match[1].length);
            line = line.replace(match[1], codedText);
            match = pattern.exec(line);
        }
        return line;
    }
}

// var str = 'red/white/blue'.match(/.*\/(.*?)$/);
// console.log(str)
codeData(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number. ',
    'I think it was +555-49-796',
    "I can't really remember...",
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    "I really don't know what happened there.",
    'This is all I saw, that night.',
    'I cannot explain it myself...']);