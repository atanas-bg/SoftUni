/**
 * Created by User on 24.10.2016 г..
 */
function initializeTable() {
    let createRow = $('#createLink');
    appendRowToTable('Bulgaria', 'Sofia');
    appendRowToTable('Germany', 'Berlin');
    appendRowToTable('Russia', 'Moscow');

    // creates new table row
    createRow.on('click', function () {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        appendRowToTable(country, capital);
        if (country && capital) {
            $('#newCountryText').val('');
            $('#newCapitalText').val('');
        }
    });

    function appendRowToTable(newCountry, newCapital) {
        // creates row only if the two cells have values
        if (newCountry && newCapital) {
            let table = $('#countriesTable');
            let row = $('<tr></tr>');
            let countryCell = $('<td></td>').text(newCountry);
            let capitalCell = $('<td></td>').text(newCapital);
            let commandsCell = $('<td></td>');
            let upLink = $('<a href="#" id="upLink">[Up]</a>');
            upLink.on('click', moveUpRow);
            let downLink = $('<a href="#" id="downLink">[Down]</a>');
            downLink.on('click', moveDownRow);
            let deleteLink = $('<a href="#" id="deleteLink">[Delete]</a>');
            deleteLink.on('click', deleteRow);

            commandsCell.append(upLink)
                .append(' ')
                .append(downLink)
                .append(' ')
                .append(deleteLink);

            row.append(countryCell)
                .append(capitalCell)
                .append(commandsCell);

            row.appendTo(table);
            rearrangeCommandsCell();
        }
    }

    function moveUpRow() {
        let tr = $(this).parent().parent();
        tr.insertBefore(tr.prev());
        rearrangeCommandsCell();
    }

    function moveDownRow() {
        let tr = $(this).parent().parent();
        tr.insertAfter(tr.next());
        rearrangeCommandsCell();
    }

    function deleteRow() {
        $(this).parent().parent().remove();
        rearrangeCommandsCell();
    }

    // removes Up link from the first row and Down link from the last row
    function rearrangeCommandsCell() {
        $('#countriesTable tr').find('#upLink').css('display', 'inline');
        $('#countriesTable tr').find('#downLink').css('display', 'inline');
        $('#countriesTable tr:eq(2)').find('#upLink').css('display', 'none');
        $('#countriesTable tr:last').find('#downLink').css('display', 'none');

        // $('#countriesTable tr').find('#upLink').show();
        // $('#countriesTable tr').find('#downLink').show();
        // $('#countriesTable tr:eq(2)').find('#upLink').hide();
        // $('#countriesTable tr:last').find('#downLink').hide();
    }
}