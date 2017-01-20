/**
 * Created by User on 27.11.2016 г..
 */
function messages() {
    let basicUrl = 'https://messenger-6202f.firebaseio.com/messages.json';
    $('#submit').click(sendMessage);
    $('#refresh').click(getAllMessages);

    function sendMessage() {
        // let author = $('#author').val();
        // let content = $('#content').val();
        let message = {
            name: $('#author').val(),
            message: $('#content').val(),
            timestamp: Date.now()
        };
        let postRequest = {
            method: 'POST',
            url: basicUrl,
            data: JSON.stringify(message)
        };

        //$.get(basicUrl, JSON.stringify(message)).then(getAllMessages).catch(displayError);

        $.ajax(postRequest)
            .then(getAllMessages)
            .catch(displayError);

    }

    function getAllMessages() {
        let getRequest = {
            method: 'GET',
            url: basicUrl
        };
        $.ajax(getRequest)
            .then(showMessages)
            .catch(displayError);

        function showMessages(data) {
            $('#author').val('');
            $('#content').val('');
            let keys = Object.keys(data).sort((a, b)=> data[a]['timestamp'] - data[b]['timestamp']);
            let allMessagesArray = [];
            for (let key of keys) {
                let text = `${data[key]['name']}: ${data[key]['message']}`;
                allMessagesArray.push(text);
            }
            $('#messages').val(allMessagesArray.join('\n'));
        }

    }

    function displayError() {
        $('#messages').val('Error');
    }
}