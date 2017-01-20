/**
 * Created by User on 13.10.2016 г..
 */
// input : ['let sum = 4 * 4,b = "wow";']
// output :
//let
//sum
//=
//4
//*
//4
//let
//b
//=
//"wow"

function splitText([text]) {
    let result = text.split(/[\s.();,]+/);
    result = result.filter(x => x != '');
    return result.join('\n');
}

console.log(splitText(['let sum = 4 * 4,b = "wow";']));
console.log(splitText(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']));