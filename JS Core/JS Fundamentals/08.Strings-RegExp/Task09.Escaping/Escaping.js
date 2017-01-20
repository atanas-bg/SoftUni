/**
 * Created by User on 13.10.2016 г..
 */
// Raw	Encoded
// <	&lt;
// >	&gt;
// &	&amp;
// "	&quot
// '    &#39;
// input : ['<b>unescaped text</b>', 'normal text']
// output :
// <ul>
// <li>&lt;b&gt;unescaped text&lt;/b&gt;</li>
// <li>normal text</li>
// </ul>

function htmlEscape(input) {
    let symbols = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#39;'
    };
    let result = [];
    result.push('<ul>');
    for (let str of input) {
        // first solution
        // for (let i = 0; i < str.length; i++) {
        //     let ch = str[i];
        //     if (symbols.hasOwnProperty(ch)) {
        //         str = str.replace(ch, symbols[ch]);
        //     }
        // }

        // str = replace(str); // second solution

        // third solution
        String.prototype.escapeHTML = function () {
            return this.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
        }
        str = str.escapeHTML();

        result.push(`  <li>${str}</li>`);
    }
    result.push('</li>');
    return result.join('\n');

    function replace(inputStr) {  // second solution
        inputStr = inputStr.replace(/&/g, '&amp;');
        inputStr = inputStr.replace(/</g, '&lt;');
        inputStr = inputStr.replace(/>/g, '&gt;');
        inputStr = inputStr.replace(/"/g, '&quot;');
        inputStr = inputStr.replace(/'/g, '&#39;');
        return inputStr;
    }

}

console.log(htmlEscape(['<b>unescaped text</b>', 'normal text']));