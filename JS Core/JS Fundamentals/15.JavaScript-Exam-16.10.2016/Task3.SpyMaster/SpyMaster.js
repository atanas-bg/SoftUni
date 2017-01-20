/**
 * Created by User on 16.10.2016 г..
 */
// input :
// specialKey
// In this text the specialKey HELLOWORLD! is correct, but
// the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while
//     SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!

// output :


function decodeText(input) {
    let specialKey = input.shift();
    let textLines = input.slice(1);
    let patternKey = '\^\|\\s\?\(' + specialKey + '\)';
    let validKeyPattern = new RegExp(patternKey, "i");
    // let specialKeyPattern = /[\w\d,.-_:;]+\s?[a-zA-Z_]/g;
//     •	An encoded message must immediately follow the special key, being separated from it only by one or more spaces.
// •	An encoded message must be at least 8 symbols long and consist only of the symbols !, %, $, # or Capital English letters.
// •	The encoded message must be followed by a space, a dot (.), a comma (,) or the end of the string.

    let encodedMessagePattern = /\s+/g;
    let encodedMessageValidLength = 8;
    let validEncodedMessage = /[^!%$#A-Z]+$/g;

    console.log(patternKey);
    for (let line of textLines) {
        let parts = line.match(validKeyPattern);
        console.log(parts);
    }
}

decodeText([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'

]);