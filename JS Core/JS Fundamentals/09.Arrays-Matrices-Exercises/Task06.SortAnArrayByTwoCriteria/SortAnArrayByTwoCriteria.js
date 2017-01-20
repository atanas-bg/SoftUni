/**
 * Created by User on 14.10.2016 г..
 */
// input : ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']
// output :
// Jack
// Isacc
// George
// Theodor
// Harrison

function sortByLengthAlphabeticaly(input) {
    // first solution
    // input.sort();
    // input.sort((a, b) => a.length - b.length);

    // second solution
    input.sort((a, b) => {
        if (a.length != b.length) {
            return (a.length - b.length); //  value > 0 puts b before a, value < 0 puts a before b
        } else {
            return a > b;  // sorts the elements alphabeticaly increasing
        }
    });

    // third solution
    //     input.sort(twoCriteriaSort)
    //
    //     function twoCriteriaSort(cur, next) {
    //         if(cur.length > next.length) {
    //             return 1
    //         } else if(cur.length < next.length) {
    //             return -1
    //         } else {
    //             return cur > next
    //         }
    //     }

    return input.join('\n');
}

console.log(sortByLengthAlphabeticaly(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log(sortByLengthAlphabeticaly(['test', 'Deny', 'omen', 'Default']));
