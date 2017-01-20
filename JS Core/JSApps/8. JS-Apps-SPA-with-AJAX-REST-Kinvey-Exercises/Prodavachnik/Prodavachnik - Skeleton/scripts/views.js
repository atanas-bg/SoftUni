/**
 * Created by User on 9.12.2016 г..
 */
// Show and Hide menu links when the user is logged in or not
function showHideMenuLinks() {
    $('#menu a').hide();
    if (sessionStorage.getItem('authToken')) {
        $('#menu #linkHome').show();
        $('#menu #linkListAds').show();
        $('#menu #linkCreateAd').show();
        $('#menu #linkLogout').show();
    } else {
        $('#menu #linkHome').show();
        $('#menu #linkLogin').show();
        $('#menu #linkRegister').show();
    }
}

// show view form
function showView(viewName) {
    $('main > section').hide();
    $('#' + viewName).show();
}

function showHomeView() {
    showView('viewHome');
}

function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset');
}

function showRegisterView() {
    showView('viewRegister');
    $('#formRegister').trigger('reset');
}

function showCreateAdView() {
    showView('viewCreateAd');
    $('#formCreateAd').trigger('reset');
}