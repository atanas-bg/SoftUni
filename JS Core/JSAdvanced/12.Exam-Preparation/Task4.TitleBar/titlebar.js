/**
 * Created by User on 12.11.2016 г..
 */
class TitleBar {
    constructor(title) {
        this.title = title;
        this.menu = [];
    }

    addLink(href, name) {
        let link = $(`<a class="menu-link" href="${href}">${name}</a>`);
        this.menu.push(link);
    }

    appendTo(selector) {
        let header = this.createHeader();
        $(selector).append(header);

        let button = header.find('.header-row .button');
        let drawer = $('.drawer');
        button.on('click', function () {
            if (drawer.css('display') == 'none') {
                drawer.css('display', 'block');
            } else {
                drawer.css('display', 'none');
            }
        });
    }

    createHeader() {
        let header = $(`<header class="header">
        <div class="header-row">
            <a class="button">&#9776;</a>
            <span class="title">${this.title}</span>
        </div>
        <div class="drawer">
            <nav class="menu">
            </nav>
        </div>
    </header>`);

        let menu = header.find('.menu');
        for(let item of this.menu){
            menu.append(item);
        }
        console.log(header.html());


            return header;
    }
}


// let header = new TitleBar('Title Bar Problem');
// header.addLink('/', 'Home');
// header.addLink('about', 'About');
// header.addLink('results', 'Results');
// header.addLink('faq', 'FAQ');
// header.appendTo('#container');
