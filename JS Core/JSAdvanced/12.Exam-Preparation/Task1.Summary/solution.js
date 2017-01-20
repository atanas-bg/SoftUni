/**
 * Created by User on 12.11.2016 г..
 */
function solution(selector) {
    let button = $(selector);
    button.on('click', function () {
        let text = $('div #content p').find('strong').text();
        let summary = $(`<div id="summary">
        <h2>Summary</h2>
        <p>${text}</p>
        </div>`);
        $('#content').after(summary);
        // let article = $('div #content p');
        // let highlightedText = article.find('strong').text();
        // let summary = $('<div>');
        // summary.attr('id', 'summary');
        // let header = $('<h2>Summary</h2>');
        // let docfrag = document.createDocumentFragment();
        // header.appendTo(docfrag);
        // let paragraph = $('<p>');
        // paragraph.text(highlightedText);
        // paragraph.appendTo(docfrag);
        // summary.append(docfrag);
        // article.parent().after(summary);
    });
}