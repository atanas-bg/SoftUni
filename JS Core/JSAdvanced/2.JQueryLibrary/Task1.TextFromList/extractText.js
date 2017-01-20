/**
 * Created by User on 24.10.2016 г..
 */
function extractText() {
    let joinedItems = [];
    let listItems = $('#items li');
    for (let li of listItems) {
        joinedItems.push(li.textContent);
    }
    joinedItems = joinedItems.join(', ');

    // second solution
    // joinedItems = listItems.toArray().map(li => li.textContent).join(', ');
    let result = $('#result');
    result.text(joinedItems);
}