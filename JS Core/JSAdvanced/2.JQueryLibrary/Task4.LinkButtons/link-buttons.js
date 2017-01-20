/**
 * Created by User on 25.10.2016 г..
 */
function attachEvents() {
    $('a.button').on('click', buttonClicked);

    function buttonClicked() {
        $('a.selected').removeClass('selected');
        $(this).addClass('selected');
        // $(this).attr('class', 'selected');
    }

}
