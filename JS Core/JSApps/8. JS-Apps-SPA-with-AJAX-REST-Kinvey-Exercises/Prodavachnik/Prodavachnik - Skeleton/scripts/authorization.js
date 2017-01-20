/**
 * Created by User on 9.12.2016 г..
 */
const appID = 'kid_HywqCNuXg';
const appSecret = '93b4526b2a68401d84d3046090e33233';
const basicAuthHeaders = {"Authorization": 'Basic ' + btoa(appID + ':' + appSecret)};
const kinveyBaseUrl = 'https://baas.kinvey.com/';

function getKinveyAuthHeaders() {
    "use strict";
    return {"Authorization": 'Kinvey ' + sessionStorage.getItem('authToken')};
}


function loginUser() {
    let username = $('#formLogin input[name=username]').val();
    let password = $('#formLogin input[name=passwd]').val();
    let userData = {username, password};

    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + 'user/' + appID + '/login',
        contentType: "application/json",
        headers: basicAuthHeaders,
        data: JSON.stringify(userData),
        success: loginUserSuccess,
        error: handleAjaxError
    });
    function loginUserSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listAds();
        showInfo('User login successful!')
    }
}

function saveAuthInSession(userInfo) {
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('userID', userInfo._id);

    $('#loggedInUser').text('Welcome, ' + userInfo.username);
    $('#loggedInUser').show();
}

function registerUser() {
    let username = $('#formRegister input[name=username]').val();
    let password = $('#formRegister input[name=passwd]').val();
    let userData = {username, password};

    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + 'user/' + appID,
        contentType: "application/json",
        headers: basicAuthHeaders,
        data: JSON.stringify(userData),
        success: registerUserSuccess,
        error: handleAjaxError
    });

    function registerUserSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listAds();
        showInfo('User registration successful!')
    }
}

function logoutUser() {
    sessionStorage.clear();
    $('#loggedInUser').text('');
    showHideMenuLinks();
    showView('viewHome');
    showInfo('Logout successful!');
}