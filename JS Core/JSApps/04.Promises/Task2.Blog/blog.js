/**
 * Created by User on 28.11.2016 г..
 */
$(document).ready(function postsComments() {
    const kinveyAppId = "kid_HyBbuGcfe";
    const serviceUrl = "https://baas.kinvey.com/appdata/" + kinveyAppId;
    const kinveyUsername = "nasko";
    const kinveyPassword = "nasko";
    const base64auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const authHeaders = {"Authorization": "Basic " + base64auth};

    $('#btnLoadPosts').click(loadPostsClicked);
    $('#btnViewPost').click(viewPostClicked);


    function loadPostsClicked() {
        let getPostsRequest = {
            method: 'GET',
            url: serviceUrl + '/posts',
            headers: authHeaders
        };
        $.ajax(getPostsRequest)
            .then(displayPostsInDropDown)
            .catch(displayError)
    }

    function displayPostsInDropDown(posts) {
        for (let post of posts) {
            let option = $("<option>");
            option.text(post.title);
            option.val(post._id);
            $('#posts').append(option);
        }
    }

    function displayError(error) {
        let errorDiv = $('<div>').text('Error: ' + error.status + ' (' + error.statusText + ')');
        $(document.body).prepend(errorDiv);
        setTimeout(function () {
            errorDiv.fadeOut(function () {
                errorDiv.remove()
            })
        }, 2000)
    }

    function viewPostClicked() {
        let selectedPostId = $('#posts').val();
        if (!selectedPostId) return;
        // get post title and post body
        let getPostsRequest = $.ajax({
            method: 'GET',
            url: serviceUrl + '/posts/' + selectedPostId,
            headers: authHeaders
        });

        // get comments in the post
        let getCommentsRequest = $.ajax({
            method: 'GET',
            url: serviceUrl + '/comments?query={"post_id":"' + selectedPostId + '"}',
            headers: authHeaders
        });

        Promise.all([getPostsRequest, getCommentsRequest])
            .then(displayPostWithComments)
            .catch(displayError);

        function displayPostWithComments([post, comments]) {
            $('#post-title').text(post.title);
            $('#post-body').text(post.body);

            $('#post-comments').empty();
            for (let comment of comments) {
                let li = $('<li>').text(comment.text);
                $('#post-comments').append(li);
            }
        }
    }
});