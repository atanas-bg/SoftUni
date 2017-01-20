/**
 * Created by User on 11.12.2016 г..
 */
function startApp() {
    const appId = 'kid_ByhZgY5Ql';
    const appSecret = 'a1820fa1a8074621bd9fa5ca7b5d6b37';
    const base64auth = btoa(appId + ":" + appSecret);
    const basicAuthHeader = {"Authorization": "Basic " + base64auth};

    const kinveyBasicUrl = 'https://baas.kinvey.com/';

    // Clear user auth data
    sessionStorage.clear();

    // show the right menu links when the user is logged in or not
    showHideMenuLinks();

    // show the home view at application start
    showView('viewAppHome');

    // Bind the navigation menu links
    $('#linkMenuAppHome').click(showHomeView);
    $('#linkMenuLogin').click(showLoginView);
    $('#linkMenuRegister').click(showRegisterView);

    $('#linkMenuUserHome').click(showMenuUserHomeView);
    $('#linkMenuMyMessages').click(showMenuMyMessagesView);
    $('#linkMenuArchiveSent').click(showMenuArchiveSentView);
    $('#linkMenuSendMessage').click(showMenuSendMessagesView);
    $('#linkMenuLogout').click(logoutUser);

    // Bind the user home view buttons
    $('#linkUserHomeMyMessages').click(showMenuMyMessagesView);
    $('#linkUserHomeSendMessage').click(showMenuSendMessagesView);
    $('#linkUserHomeArchiveSent').click(showMenuArchiveSentView);

    // Bind the form submit buttons
    $('#formLogin').submit(loginUser);
    $('#formRegister').submit(registerUser);
    $('#formSendMessage').submit(sendMessage);

    // hides the boxes after a click by  the user
    $('#infoBox, #errorBox').click(function () {
        $(this).fadeOut();
    });

    //Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show()
        },
        ajaxStop: function () {
            $('#loadingBox').hide()
        }
    });

    function showHideMenuLinks() {
        $('#menu a').hide();

        if (sessionStorage.getItem('authToken')) {
            // logged in user
            $('#linkMenuUserHome').show();
            $('#linkMenuMyMessages').show();
            $('#linkMenuArchiveSent').show();
            $('#linkMenuSendMessage').show();
            $('#linkMenuLogout').show();
        } else {
            //  no logged in user
            $('#linkMenuAppHome').show();
            $('#linkMenuLogin').show();
            $('#linkMenuRegister').show();

            // hides boxes and welcome user message
            $('#loadingBox, #infoBox, #errorBox').hide();
            $('#spanMenuLoggedInUser').hide();

            // deletes text messages
            $('#loadingBox, #infoBox, #errorBox, #spanMenuLoggedInUser').text('');
        }
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewAppHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        showView('viewRegister');
        $('#formRegister').trigger('reset');
    }

    function showMenuUserHomeView() {
        showView('viewUserHome');

    }

    function showMenuMyMessagesView() {
        $('#myMessages').empty();

        listMyMessages();
    }

    function showMenuArchiveSentView() {
        $('#sentMessages').empty();

        listSentMessages();
    }

    function showMenuSendMessagesView() {
        $('#msgRecipientUsername').empty();
        loadAllUsers();

    }

    function loginUser(event) {
        event.preventDefault();
        let username = escapeHtml($('#formLogin input[name=username]').val());
        let password = escapeHtml($('#formLogin input[name=password]').val());

        let userData = {
            username: username,
            password: password
        };
        $.ajax({
            method: 'POST',
            url: kinveyBasicUrl + 'user/' + appId + '/login',
            data: JSON.stringify(userData),
            contentType: 'application/json',
            headers: basicAuthHeader,
            success: loginUserSuccess,
            error: handleAjaxError
        });

        function loginUserSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showView('viewUserHome');
            showInfo('Login successful.');
            showWelcomeMessage(userInfo);
        }
    }

    function showWelcomeMessage(userInfo) {
        let username = unEscapeHtml(userInfo.username);

        $('#spanMenuLoggedInUser').text('Welcome, ' + username);
        $('#spanMenuLoggedInUser').show();

        $('#viewUserHomeHeading').text('Welcome, ' + username);
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem("username", userInfo.username);
        sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);

    }

    function getUserAuthTokenHeader() {
        return {"Authorization": "Kinvey " + sessionStorage.getItem('authToken')};
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function registerUser(event) {
        event.preventDefault();
        let username = $('#formRegister input[name=username]').val();
        username = escapeHtml(username);
        let password = $('#formRegister input[name=password]').val();
        password = escapeHtml(password);
        let name = $('#formRegister input[name=name]').val();
        name = escapeHtml(name);

        let userData = {
            username: username,
            password: password,
            name: name
        };

        $.ajax({
            method: 'POST',
            url: kinveyBasicUrl + 'user/' + appId,
            data: JSON.stringify(userData),
            contentType: 'application/json',
            headers: basicAuthHeader,
            success: registerUserSuccess,
            error: handleAjaxError
        });

        function registerUserSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showView('viewUserHome');
            showInfo('User registration successful.');
            showWelcomeMessage(userInfo);
        }
    }

    function logoutUser() {
        $.ajax({
            method: 'POST',
            url: kinveyBasicUrl + 'user/' + appId + '/_logout',
            headers: getUserAuthTokenHeader(),
            success: logoutUserSuccess,
            error: handleAjaxError
        });

        function logoutUserSuccess() {
            sessionStorage.clear();
            showHideMenuLinks();
            showView('viewAppHome');
            showInfo('Logout successful.');
        }
    }

    function listMyMessages() {

        let username = unEscapeHtml(sessionStorage.getItem('username'));
        let messagesQuery = `/messages?query={"recipient_username":"${username}"}`;

        $.ajax({
            method: 'GET',
            url: kinveyBasicUrl + 'appdata/' + appId + messagesQuery,
            headers: getUserAuthTokenHeader(),
            contentType: 'application/json',
            success: getMessagesSuccess,
            error: handleAjaxError
        });

        function getMessagesSuccess(messages) {

            let table = $('<table>');
            let tableHeader = $(
                `<thead>
                        <tr>
                            <th>From</th>
                            <th>Message</th>
                            <th>Date Received</th>
                        </tr>
                    </thead>`);

            table.append(tableHeader);

            if (messages.length > 0) {
                let tableBody = $('<tbody>');

                for (let message of messages) {
                    let senderName = formatSender(message.sender_name, message.sender_username);
                    let messageText = message.text;
                    let messageDate = formatDate(message._kmd.lmt);

                    let tableRow = $(`
                        <tr>
                            <td>${senderName}</td>
                            <td>${messageText}</td>
                            <td>${messageDate}</td>
                        </tr>`);

                    tableBody.append(tableRow);
                }

                table.append(tableBody);
            }
            table.appendTo('#myMessages');
        }

        showView('viewMyMessages');
    }

    function listSentMessages() {

        let username = unEscapeHtml(sessionStorage.getItem('username'));
        let messagesQuery = `/messages?query={"sender_username":"${username}"}`;

        $.ajax({
            method: 'GET',
            url: kinveyBasicUrl + 'appdata/' + appId + messagesQuery,
            headers: getUserAuthTokenHeader(),
            contentType: 'application/json',
            success: getMessagesSuccess,
            error: handleAjaxError
        });

        function getMessagesSuccess(messages) {

            let table = $('<table>');
            let tableHeader = $(
                `<thead>
                        <tr>
                            <th>To</th>
                            <th>Message</th>
                            <th>Date Sent</th>
                            <th>Actions</th>
                        </tr>
                    </thead>`);

            table.append(tableHeader);

            if (messages.length > 0) {
                let tableBody = $('<tbody>');

                for (let message of messages) {
                    let recipientUsername = message.recipient_username;
                    let messageText = message.text;
                    let messageDate = formatDate(message._kmd.lmt);

                    let tableRow = $(`
                        <tr>
                            <td>${recipientUsername}</td>
                            <td>${messageText}</td>
                            <td>${messageDate}</td>
                        </tr>`);

                    let td = $('<td>');
                    let deleteBtn = $('<button>Delete</button>').click(function () {
                        deleteMessage(message._id);
                    });
                    td.append(deleteBtn);
                    tableRow.append(td);

                    tableBody.append(tableRow);
                }
                table.append(tableBody);
            }
            table.appendTo('#sentMessages');
        }

        showView('viewArchiveSent');
    }

    function deleteMessage(messageID) {
        $.ajax({
            method: 'DELETE',
            url: kinveyBasicUrl + 'appdata/' + appId + '/messages/' + messageID,
            headers: getUserAuthTokenHeader(),
            success: deleteMessageSuccess,
            error: handleAjaxError
        });

        function deleteMessageSuccess() {
            showInfo('Message deleted.');
            showMenuArchiveSentView();
        }
    }

    function loadAllUsers() {
        $.ajax({
            method: 'GET',
            url: kinveyBasicUrl + 'user/' + appId,
            headers: getUserAuthTokenHeader(),
            success: loadAllUsersSuccess,
            error: handleAjaxError
        });

        function loadAllUsersSuccess(allUsers) {
            let selector = $('#msgRecipientUsername');

            for (let user of allUsers) {
                let userName = formatSender(user.name, user.username);
                let userOption = $(`<option value="${user.username}">${userName}</option>`);
                selector.append(userOption);
            }
            $('#formSendMessage').trigger('reset');
            showView('viewSendMessage');
        }
    }

    function sendMessage(event) {
        event.preventDefault();

        let senderName;

        // get userData
        $.ajax({
            method: 'GET',
            url: kinveyBasicUrl + 'user/' + appId + '/' + sessionStorage.getItem('userId'),
            headers: getUserAuthTokenHeader(),
            success: getUserDataSuccess,
            error: handleAjaxError
        });

        function getUserDataSuccess(userData) {
            if (userData.name) {
                senderName = userData.name;
            } else {
                senderName = null;
            }

            sendThatMessage();
        }

        let senderUsername = sessionStorage.getItem('username');
        let recipientUsername = $('#msgRecipientUsername').val();
        recipientUsername = escapeHtml(recipientUsername);
        let text = $('#msgText').val();
        text = escapeHtml(text);

        function sendThatMessage() {
            let messageData = {
                "sender_username": senderUsername,
                "sender_name": senderName,
                "recipient_username": recipientUsername,
                "text": text
            };

            $.ajax({
                method: 'POST',
                url: kinveyBasicUrl + 'appdata/' + appId + '/messages',
                headers: getUserAuthTokenHeader(),
                contentType: "application/json",
                data: JSON.stringify(messageData),
                success: sendMessageSuccess,
                error: handleAjaxError
            });

            function sendMessageSuccess() {
                $('#formSendMessage').trigger('reset');
                showInfo('Message sent.');
                showMenuArchiveSentView();
            }
        }
    }

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function unEscapeHtml(safe) {
        return safe
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
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
}