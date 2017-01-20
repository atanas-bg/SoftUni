/**
 * Created by User on 26.10.2016 г..
 */
function domSearch(selector, isCaseSensitive) {
    // add controls
    let addControlsContainer = $('<div>');
    addControlsContainer.addClass('add-controls');
    let addLabel = $('<label>');
    addLabel.text('Enter text:');
    let addInput = $('<input>');
    addInput.appendTo(addLabel);
    let addBtn = $('<a>');
    addBtn.addClass('button');
    addBtn.text('Add');
    addBtn.css('display', 'inline-block');
    addBtn.on('click', function () {
        let liValue = $('label input')[0].value;
        $('label input')[0].value = '';
        createLi(liValue);
    });
    addControlsContainer.append(addLabel)
                        .append(addBtn);

    // search controls
    let searchControlsContainer = $('<div>');
    searchControlsContainer.addClass('search-controls');
    let searchLabel = $('<label>');
    searchLabel.text('Search:');
    let searchInput = $('<input>');
    // searchInput.change(function () {
    //     let searchValue = $('label input')[1].value;
    //     filterList(searchValue);
    // });
    searchInput.on('input', function () {  // action input or change
        let searchValue = $('label input')[1].value;
        filterList(searchValue);
    });
    searchInput.appendTo(searchLabel);
    searchControlsContainer.append(searchLabel);

    // result controls
    let resultControlsContainer = $('<div>');
    resultControlsContainer.addClass('result-controls');
    let resultsList = $('<ul>');
    resultsList.addClass('items-list');
    resultControlsContainer.append(resultsList);

    // add to selector
    let container = $(selector);
    addControlsContainer.appendTo(container);
    searchControlsContainer.appendTo(container);
    resultControlsContainer.appendTo(container);

    function createLi(text) {
        let anchor = $('<a>').addClass('button').text('X');
        anchor.on('click', function () {
            $(this).parent().remove();
        });
        let strongTag = $('<strong>').text(text);
        let li = $('<li>').addClass('list-item');
        li.append(anchor).append(strongTag);
        $('div.result-controls ul.items-list').append(li);
    }

    function filterList(searchText) {
        let listItems = $('ul.items-list li');
        listItems.each((index, item) => {  // it can be done with for cycle, items.eq(i) and item.find('strong').text()
            "use strict";
            let itemContent = item.textContent;
            if (!isCaseSensitive) {
                itemContent = itemContent.toLowerCase();
                searchText = searchText.toLowerCase();
            }
            if (itemContent.indexOf(searchText) >= 0) { // itemContent.includes(searchText)
                $(item).removeAttr('style');
            } else {
                $(item).css('display', 'none');
            }
        });
    }
}
