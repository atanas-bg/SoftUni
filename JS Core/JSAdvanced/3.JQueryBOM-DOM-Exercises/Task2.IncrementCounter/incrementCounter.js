/**
 * Created by User on 25.10.2016 г..
 */
function increment(selector) {
    // creates elements
    let textArea = $('<textarea></textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let results = $('<ul></ul>');

    // adds values and attributes
    textArea.val(0);
    textArea.attr('disabled', 'disabled');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.attr('id', 'addBtn');

    // add classes
    textArea.addClass('counter');
    incrementBtn.addClass('btn');
    addBtn.addClass('btn');
    results.addClass('results');

    // add events
    incrementBtn.on('click', incrementNum);
    addBtn.on('click', addNum);

    let fragment = document.createDocumentFragment();
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    results.appendTo(fragment);

    let container = $(selector);
    container.append(fragment);

    function addNum() {
        let num = textArea.val();
        let li = $('<li></li>');
        li.text(num);
        results.append(li);
    }

    function incrementNum() {
        let num = parseFloat(textArea.val());
        num += 1;
        textArea.val(num);
    }
}
