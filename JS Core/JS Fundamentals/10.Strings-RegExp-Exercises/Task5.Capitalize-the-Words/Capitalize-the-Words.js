/**
 * Created by User on 14.12.2016 г..
 */
function capitalizeWords(input) {
    let text;
    if (Array.isArray(input)) {
        text = input[0];
        text = text.toLowerCase();
        let words = text.match(/\w+/g).map(x=> x[0].toUpperCase() + x.substr(1));
        for(let word of words) {
            text = text.replace(word.toLowerCase(), word);
        }
        console.log(text);
    }
}

capitalizeWords(['Was that Easy? tRY thIs onE for SiZe!']);