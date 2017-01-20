/**
 * Created by User on 23.11.2016 г..
 */
function loadContacts() {
    // let urlAddress = 'https://phonebook-1886b.firebaseio.com/phonebook';
    let urlAddress = 'https://phonebook-nakov.firebaseio.com/phonebook';
    let phonebookList = $('#phonebook');
    $('#btnLoad').on('click', getData);

    $('#btnCreate').on('click', createContact);

    function getData() {
        $.get(urlAddress + '.json')
            .then(displayContacts)
            .catch(displayError);
    }

    function displayContacts(phonebook) {
        phonebookList.empty();
        $('#person').val('');
        $('#phone').val('');

        let contacts = Object.keys(phonebook);
        for (let key of contacts) {
            let contact = phonebook[key];
            let text = contact.person + ': ' + contact.phone + ' ';
            console.log(text);
            let li = $('<li>').text(text);
            // let link = $('<a href="#">[Delete]</a>').on('click', function () {
            let link = $('<button>[Delete]</button>').on('click', function () {
                deleteContact(key);
            });
            li.append(link);
            phonebookList.append(li);
        }
    }

    function createContact() {
        let person = $('#person').val();
        let phone = $('#phone').val();
        let newContact = {person, phone};
        let postRequest = {
            method: 'POST',
            url: urlAddress + '.json',
            data: JSON.stringify(newContact)
        };
        $.ajax(postRequest)
            .then(getData)
            .catch(displayError)
    }

    function deleteContact(key) {
        let delRequest = {
            method: 'DELETE',
            url: urlAddress + '/' + key + '.json'
        };
        $.ajax(delRequest)
            .then(getData)
            .catch(displayError)
    }

    function displayError() {
        $('#phonebook').html('<li>Error</li>');
    }
}