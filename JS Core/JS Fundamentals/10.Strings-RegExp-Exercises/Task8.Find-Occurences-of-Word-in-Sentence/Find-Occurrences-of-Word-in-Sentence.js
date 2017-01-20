/**
 * Created by User on 14.12.2016 г..
 */
function wordOccurrences([str, word]) {
    let pattern = `\\b${word}\\b`;
    let regex = new RegExp(pattern, 'gi');
    let match = regex.exec(str);
    let count = 0;
    while (match) {
        count += 1;
        match = regex.exec(str)
    }
    console.log(count);
}

wordOccurrences(['The waterfall was so high, that the child couldn’t see its peak.','the']);
wordOccurrences(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there']);
wordOccurrences(['How do you plan on achieving that? How? How can you even think of that?', 'how']);