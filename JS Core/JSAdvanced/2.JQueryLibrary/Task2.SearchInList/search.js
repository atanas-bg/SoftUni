/**
 * Created by User on 24.10.2016 г..
 */
function search() {
    let searchText = $('#searchText').val();
    let towns = $('#towns li');
    let matches = 0;
    towns.each((index, item) => {
        if (item.textContent.includes(searchText)) {
            $(item).css('font-weight', 'bold');
            matches += 1;
        } else {
            $(item).css('font-weight', '');
        }
    });
    let result = $('#result');
    result.text(matches + ' matches found.');
}