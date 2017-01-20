/**
 * Created by User on 13.10.2016 г..
 */
// input :
// I am born on 30-Dec-1994.
// This is not date: 512-Jan-1996.
// My father is born on the 29-Jul-1955.
// output :
// 30-Dec-1994 (Day: 30, Month: Dec, Year: 1994)
// 29-Jul-1955 (Day: 29, Month: Jul, Year: 1955)


function extractDates(sentences) {
    let datePattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let result = [];
    for (let sentence of sentences) {
        // let dates = sentence.match(datePattern);
        // for (let date of dates) {
        //     let [day, month, year] = date.split('-');
        //     result.push(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`)
        // }

        // second solution
        while (match = datePattern.exec(sentence)) {
            result.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
        }
    }
    console.log(result.join('\n'));
}

extractDates(['I am born on 30-Dec-1994.// This is not date: 512-Jan-1996.// My father is born on the 29-Jul-1955.']);
extractDates(['1-Jan-1999 is a valid date.    So is 01-July-2000.    I am an awful liar, by the way – Ivo, 28-Sep-2016.'])