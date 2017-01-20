/**
 * Created by User on 14.10.2016 г..
 */
// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
    return { index: i, value: el.toLowerCase() };
})
console.log(mapped);

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
});
console.log(mapped);

// container for the resulting order
var result = mapped.map(function(el){
    return list[el.index];
});
console.log(result);