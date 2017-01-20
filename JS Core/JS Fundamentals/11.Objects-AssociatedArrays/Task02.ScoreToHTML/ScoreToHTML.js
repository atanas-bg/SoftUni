/**
 * Created by User on 15.10.2016 г..
 */
// input : '[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'
// output :
// <table>
//   <tr><th>name</th><th>score</th></tr>
//   <tr><td>Pesho &amp; Kiro</td><td>479</td></tr>
//   <tr><td>Gosho, Maria &amp; Viki</td><td>205</td></tr>
// </table>


function parseScoreDataInTable(input) {
    let scoresData = JSON.parse(input);
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';
    for (let data of scoresData) {
        html += `  <tr><td>${htmlEscape(data["name"])}</td><td>${htmlEscape(data["score"])}</td></tr>\n`;
    }
    html += '</table>';

    function htmlEscape(text) {
        text = new String(text);
        let symbols = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&#39;'
        };

        return text.replace(/["'<>&]/g, ch => symbols[ch]);

        // second version of symbols replacement

        // for (let i = 0; i < text.length; i++) {
        //     let ch = text[i];
        //     if (symbols.hasOwnProperty(ch)) {
        //         text = text.replace(ch, symbols[ch]);
        //     }
        // }
    }

    return html;
}

console.log(parseScoreDataInTable(['[{"name": "Pesho & Kiro", "score": 479}, {"name": "Gosho, Maria & Viki", "score": 205}]']));