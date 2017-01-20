/**
 * Created by User on 26.10.2016 г..
 */
let createBook = (function createBook() {
    let id = 1;
    return function (selector, bookTitle, bookAuthor, bookIsbn) {
        let bookContainer = $('<div>');

        let title = $('<p>');
        title.addClass('title');
        title.text(bookTitle);

        let author = $('<p>');
        author.addClass('author');
        author.text(bookAuthor);

        let isbn = $('<p>');
        isbn.addClass('isbn');
        isbn.text(bookIsbn);

        let selectBtn = $('<button>Select</button>');
        selectBtn.on('click', function () {
            bookContainer.css('border', '2px solid blue')
        });

        let deselectBtn = $('<button>Deselect</button>');
        deselectBtn.on('click', function () {
            bookContainer.css('border', '');
        });

        bookContainer.append(title)
            .append(author)
            .append(isbn)
            .append(selectBtn)
            .append(deselectBtn);
        bookContainer.attr('id', 'book' + id);
        id += 1;

        let library = $(selector);
        library.append(bookContainer);
    }
}());
