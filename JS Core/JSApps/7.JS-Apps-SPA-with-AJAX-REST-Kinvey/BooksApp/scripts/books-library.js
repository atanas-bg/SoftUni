/**
 * Created by User on 3.12.2016 г..
 */
function startApp() {
    // Clear user auth data
    sessionStorage.clear();

    showHideMenuLinks();
    showView('viewHome');

    // Bind the navigation menu links
    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkRegister').click(showRegisterView);
    $('#linkListBooks').click(listBooks);
    $('#linkCreateBook').click(showCreateBookView);
    $('#linkLogout').click(logoutUser);

    // Bind the form submit buttons
    $('#formLogin').submit(loginUser);
    $('#formRegister').submit(registerUser);
    $('#buttonCreateBook').click(createBook);
    $('#buttonEditBook').click(editBook);

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

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppID = "kid_SyEdsXgme";
    const kinveyAppSecret =
        "0b23039345844ae187f1504e3bda80cd";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " +
        btoa(kinveyAppID + ":" + kinveyAppSecret),
    };

    function showHideMenuLinks() {
        $('#menu a').hide();
        if (sessionStorage.getItem('authToken')) {
            // logged in user
            $('#linkHome').show();
            $('#linkListBooks').show();
            $('#linkCreateBook').show();
            $('#linkLogout').show();
        } else {
            //  no logged in user
            $('#linkHome').show();
            $('#linkLogin').show();
            $('#linkRegister').show();
        }
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function loginUser(event) {
        event.preventDefault();

        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: 'POST',
            url: kinveyBaseUrl + 'user/' + kinveyAppID + '/login',
            data: JSON.stringify(userData),
            contentType: 'application/json',
            headers: kinveyAppAuthHeaders,
            success: loginUserSuccess,
            error: handleAjaxError
        });

        function loginUserSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listBooks();
            showInfo('User login successful');
        }

        function saveAuthInSession(userInfo) {
            sessionStorage.setItem("username", userInfo.username);
            sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
            sessionStorage.setItem('userId', userInfo._id);

            $('#loggedInUser').text('Welcome, ' + userInfo.username);
        }

        function showInfo(message) {
            $('#infoBox').text(message);
            $('#infoBox').show();
            setTimeout(function () {
                $('#infoBox').fadeOut();
            }, 3000);
        }
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        showView('viewRegister');
        $('#formRegister').trigger('reset');
    }

    function getKinveyUserAuthHeaders() {
        return {
            "Authorization": "Kinvey " + sessionStorage.getItem('authToken')
        }
    }

    function listBooks() {
        $('#books').empty();
        showView('viewBooks');

        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + 'appdata/' + kinveyAppID + '/books',
            headers: getKinveyUserAuthHeaders(),
            success: loadBooksSuccess,
            error: handleAjaxError
        });

        function loadBooksSuccess(books) {
            let table = $(`
            <table>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </table>`);
            for (let book of books) {
                let tr = $('<tr>');
                displayTableRow(tr, book);
                table.append(tr);
            }
            $('#books').append(table);
        }


        function displayTableRow(tr, book) {
            tr.append(
                $('<td>').text(book.title),
                $('<td>').text(book.author),
                $('<td>').text(book.description)
            );
            let td = $('<td>');

            if (book._acl.creator === sessionStorage.getItem('userId')) {
                let links = [];
                let deleteLink = $('<a href="#">[Delete]</a>')
                    .click(function () {
                        deleteBookById(book._id);
                    });

                let editLink = $('<a href="#">[Edit]</a>')
                    .click(function () {
                        loadBookForEditById(book._id);
                    });
                links.push(deleteLink);
                links.push(' ');
                links.push(editLink);

                td.append(links);
            }
            tr.append(td);
        }

        function deleteBookById(bookId) {
            $.ajax({
                method: "DELETE",
                url: kinveyBaseUrl + 'appdata/' + kinveyAppID + '/books/' + bookId,
                headers: getKinveyUserAuthHeaders(),
                success: deleteBookSuccess,
                error: handleAjaxError
            });

            function deleteBookSuccess() {
                showInfo('Book is deleted!');
                listBooks();
            }
        }

    }

    function showCreateBookView() {
        showView('viewCreateBook');
        $('#formCreateBook').trigger('reset');
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text('');
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful!');
    }

    function registerUser(event) {
        event.preventDefault();

        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: 'POST',
            url: kinveyBaseUrl + 'user/' + kinveyAppID,
            data: JSON.stringify(userData),
            contentType: 'application/json',
            headers: kinveyAppAuthHeaders,
            success: registerUserSuccess,
            error: handleAjaxError
        });

        function registerUserSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listBooks();
            showInfo('User registration successful');
        }

        function saveAuthInSession(userInfo) {
            sessionStorage.setItem("username", userInfo.username);
            sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
            sessionStorage.setItem("userId", userInfo._id);
            $('#loggedInUser').text('Welcome, ' + userInfo.username);
            listBooks();
        }
    }

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

    function createBook() {
        let bookData = {
            title: $('#formCreateBook input[name=title]').val(),
            author: $('#formCreateBook input[name=author]').val(),
            description: $('#formCreateBook textarea[name=descr]').val()
        };

        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + 'appdata/' + kinveyAppID + '/books',
            headers: getKinveyUserAuthHeaders(),
            data: bookData,
            success: createBookSuccess,
            error: handleAjaxError
        });

        function createBookSuccess() {
            showInfo('Book is created!');
            listBooks();
        }

    }

    function editBook() {
        let bookData = {
            title: $('#formEditBook input[name=title]').val(),
            author: $('#formEditBook input[name=author]').val(),
            description: $('#formEditBook textarea[name=descr]').val()
        };

        $.ajax({
            method: "PUT",
            url: kinveyBaseUrl + 'appdata/' + kinveyAppID + '/books/' + $('#formEditBook input[name=id]').val(),
            headers: getKinveyUserAuthHeaders(),
            data: bookData,
            success: editBookSuccess,
            error: handleAjaxError
        });

        function editBookSuccess() {
            showInfo('Book is edited!');
            listBooks();
        }
    }

    function loadBookForEditById(bookId) {
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + 'appdata/' + kinveyAppID + '/books/' + bookId,
            headers: getKinveyUserAuthHeaders(),
            success: loadBookForEditSuccess,
            error: handleAjaxError
        });

        function loadBookForEditSuccess(book) {
            $('#formEditBook input[name=id]').val(book._id);
            $('#formEditBook input[name=title]').val(book.title);
            $('#formEditBook input[name=author]').val(book.author);
            $('#formEditBook textarea[name=descr]').val(book.description);

            showView('viewEditBook');
        }
    }


}