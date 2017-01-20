/**
 * Created by User on 12.10.2016 г..
 */
// input : ['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals.
// It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']
// output : 7

function countStringOccurences(input) {
    let targetString = input[0];
    let text = input[1];
    let count = 0;
    let index = text.indexOf(targetString);
    while (index != -1) {
        count += 1;
        index = text.indexOf(targetString, index + 1);
    }
    return count;
}

console.log(countStringOccurences(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins,' +
' killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep' +
' the animal healthy and happy.']));
console.log(countStringOccurences(['the', 'The quick brown fox jumps over the lay dog.']));