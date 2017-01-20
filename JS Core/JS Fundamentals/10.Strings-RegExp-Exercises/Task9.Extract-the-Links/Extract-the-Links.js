/**
 * Created by User on 14.12.2016 г..
 */
function extractLinksFromText(input) {
    let pattern = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/g;
    let result = [];
    for (let str of input) {
        let links = str.match(pattern);
        if (links) {
            result.push(links.join('\n'));
        }
    }
    console.log(result.join('\n'));
}

extractLinksFromText(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:',
    'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko']);

extractLinksFromText(['Need information about cheap hotels in London?', 'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.', 'Here are some reviews in some blogs:', '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg', '"Best Hotel Services!" - www.rebel21.sedecrem.moc']);