/**
 * Created by User on 29.11.2016 г..
 */
function loadCommits() {
    const basicUrl = 'https://api.github.com/repos';
    const username = $('#username').val();
    const repository = $('#repo').val();
    const commitsUrl = basicUrl + '/' + username + '/' + repository + '/commits';
    let request = {
        method: "GET",
        url: commitsUrl,
        success: displayRepos,
        error: displayError
    };
    $.ajax(request);

    function displayRepos(data) {
        $('#commits').empty();
        console.log(data);
        let keys = Object.keys(data);
        for (let key of keys) {
            let commit = data[key];
            let text = `${commit.commit.author.name}: ${commit.commit.message}`;
            let li = $('<li>').text(text);
            $('#commits').append(li);
        }
    }

    function displayError(error) {
        $('#commits').empty();
        let text = `Error: ${error.status} (${error.statusText})`;
        let li = $('<li>').text(text);
        $('#commits').append(li);
    }
};
