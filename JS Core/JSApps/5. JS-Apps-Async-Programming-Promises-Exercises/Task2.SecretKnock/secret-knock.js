/**
 * Created by User on 30.11.2016 г..
 */
function secretKnock() {
    const appKey = 'kid_BJXTsSi-e';
    const appSecret = '447b8e7046f048039d95610c1b039390';
    const username = 'guest';
    const password = 'guest';
    const requestUrl = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/knock';
    let basicQueryUrl = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/knock?query=';
    let query = 'Knock Knock.';
    const authToken = 'Basic ' + btoa(username + ':' + password);
    const appAuthToken = 'Basic ' + btoa(appKey + ':' + appSecret);

    // solution with login -->
    let authHeaders = {
        "Authorization": appAuthToken,
        "Content-Type": "application/json"
    };

    let userCredentials = {
        username: "guest",
        password: "guest"
    };

    let loginRequest = {
        method: 'POST',
        url: 'https://baas.kinvey.com/user/kid_BJXTsSi-e/login',
        data: JSON.stringify(userCredentials),
        headers: authHeaders
    };
    $.ajax(loginRequest)
        .then(getSessionToken)
        .catch(displayError);

    function getSessionToken(data) {
        let sessionToken = data._kmd.authtoken;
        authHeaders.Authorization = "Kinvey " + sessionToken;  // changing Authorization after we have received the session key
        getKnock();  // calling function getKnock after we have received the session key
    }

    // <-- solution with login


    // solution with username and password
    // let authHeaders = {
    //     "Authorization": authToken,
    //     "Content-Type": "application/json"
    // };

    console.log(query);

    // getKnock();  // calling function getKnock

    function getKnock() {
        let knockRequest = {
            method: 'GET',
            url: basicQueryUrl + query,
            headers: authHeaders
        };

        $.ajax(knockRequest)
            .then(displayKnock)
            .catch(displayError);

        function displayKnock(data) {
            console.log(data.answer);
            let message = data.message;
            if (message) {  // the recursion will stop if message is undefined
                console.log(message);
                query = message;  // changing the query with the received message
                getKnock(); // calling function getKnock in recursion. The bottom of the recursion is the lack of property "message" in the last received object.
            }
        }
    }

    function displayError(error) {
        console.log(error.status + ' : ' + error.statusText);
    }
}