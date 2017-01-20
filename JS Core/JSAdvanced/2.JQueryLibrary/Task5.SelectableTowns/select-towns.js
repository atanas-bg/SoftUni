/**
 * Created by User on 25.10.2016 г..
 */
function attachEvents() {
    $('ul#items li').on('click', selectDeselect);
    $('#showTownsButton').on('click', showTowns);

    function showTowns() {
        let allSelectedTowns = [];
        $('ul#items li').each((index, item) => {
            "use strict";
           if ($(item).attr('data-selected')){
               allSelectedTowns.push($(item).text());
           }
        });

        allSelectedTowns = allSelectedTowns.join(', ');

        $('div#selectedTowns').text('Selected towns: ' + allSelectedTowns);

        // second solution
        let selLi = $('#items li[data-selected=true]'); // same as: let selLi = $('#items li').filter('[data-selected=true]');
        let towns = selLi.toArray()
            .map(li => li.textContent).join(', ');
        $('#selectedTowns').text("Selected towns: " + towns);


    }

    function selectDeselect() {
        let li= $(this);
        if (li[0].hasAttribute('data-selected')) { // li.attr('data-selected') works only if attribute has value
            li.removeAttr('data-selected');
            li.css('background-color', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background-color', '#DDD');
            // li.attr('data-selected', '#DDD');  // the color is set in the attribute
            // li.css('background-color', li.attr('data-selected')) // css takes the color from the attribute
        }
    }
}
