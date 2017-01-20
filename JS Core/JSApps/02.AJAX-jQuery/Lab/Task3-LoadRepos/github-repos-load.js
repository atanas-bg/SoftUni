/**
 * Created by User on 22.11.2016 г..
 */
function load() {
    $('#repos').empty();
    let username = $('#username').val();
    let request = {
        method: 'GET',
        url: 'https://api.github.com/users/' + username + '/repos',
        contentType: 'application/json',
        success: displayRepos,
        error: displayError
    };
    $.ajax(request);

    // $.get('https://api.github.com/users/' + username + '/repos')
    //     .then(displayRepos)
    //     .catch(displayError);

    function displayRepos(data) {
        for (let repo of data) {
            let link = $('<a>');
            link.text(repo.full_name);
            link.attr('href', repo.html_url);
            let li = $('<li>');
            li.append(link);
            $('#repos').append(li);
        }
    }

    function displayError() {
        $('#repos').append($('<li>Грешка!</li>'));
    }
}