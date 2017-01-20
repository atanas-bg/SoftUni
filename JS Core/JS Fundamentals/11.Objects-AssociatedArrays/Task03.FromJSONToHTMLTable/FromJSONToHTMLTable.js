/**
 * Created by User on 15.10.2016 г..
 */
// input : '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'
// output :
// <table>
//   <tr><th>Name</th><th>Price</th></tr>
//   <tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>
//   <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr>
// </table>


function fromJSONToHTMLTable(input) {
    let dataArray = JSON.parse(input);

    // takes one JSON object from the dataArray
    let oneJSONObject = dataArray[0];

    // Opens a table
    let html = '<table>\n';

    // creates header row
    html += '  <tr>';
    for (let objKey of Object.keys(oneJSONObject)) {
        html += `<th>${htmlEscape(objKey)}</th>`;
    }
    html += '</tr>\n';

    // creates table rows
    for (let objData of dataArray) {
        html += '  <tr>';
        for (let objDataKey of Object.keys(objData)) {
            html += `<td>${htmlEscape(objData[objDataKey])}</td>`;
        }
        html += '</tr>\n';
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
    }


    return html;
}

console.log(fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']));