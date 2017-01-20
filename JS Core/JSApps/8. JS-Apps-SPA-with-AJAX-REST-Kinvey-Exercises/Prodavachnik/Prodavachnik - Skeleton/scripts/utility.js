/**
 * Created by User on 10.12.2016 г..
 */
function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();

    setTimeout(function () {
        $('#infoBox').fadeOut();
    }, 3000);
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0) {
        errorMsg = "Can not connect due to network problem!"
    }
    if (response.responseJSON && response.responseJSON.description) {
        errorMsg = response.responseJSON.description;
    }

    showError(errorMsg);
}

function showError(errorMessage) {
    $('#errorBox').text('Error: ' + errorMessage);
    $('#errorBox').show();
}