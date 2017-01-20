/**
 * Created by User on 12.10.2016 г..
 */
// input : ['roses are red, violets are blue', ', violets are', 'red']
// output : roses are ---------------- blue

function censorText(input) {
    let text = input.shift();
    for (let censoredPhrase of input) {
        let replacedPhrase = '-'.repeat(censoredPhrase.length)
        while (text.indexOf(censoredPhrase) != -1) {
            text = text.replace(censoredPhrase, replacedPhrase);
        }
    }
    return text;
}

console.log(censorText(['roses are red, violets are blue', ', violets are', 'red']));
console.log(censorText(['David Ruben Piqtoukun (born 1950) is an Inuit artist from Paulatuk, Northwest Territories. His output includes sculpture and prints; the sculptural work is innovative in its use of mixed media. His materials and imagery bring together modern and traditional Inuit stylistic elements in a personal vision. An example of this is his work "The Passage of Time" (1999), which portrays a shaman in the form of a salmon moving through a hole in a hand. While shamanic imagery is common in much of Inuit art, the hand in this work is sheet metal, not a traditional material such as walrus ivory, caribou antler or soapstone. Ruben\'s brother, Abraham Apakark Anghik Ruben, is also a sculptor. Fellow Inuit artist Floyd Kuptana learned sculpting techniques as an apprentice to David Ruben.', 'Inuit']));
