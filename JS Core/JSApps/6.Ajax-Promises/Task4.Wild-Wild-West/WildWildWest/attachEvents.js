function attachEvents() {
    const appKey = 'kid_ryULEjFQe';
    const appSecret = '2f3048c453a0414c86aa758683e1ef7a';
    const username = 'nasko';
    const password = 'nasko';
    const base64auth = btoa(username + ":" + password);
    const authHeaders = {"Authorization": "Basic " + base64auth};
    const appBaseUrl = 'https://baas.kinvey.com/';

    $('#addPlayer').click(addNewPlayer);

    function addNewPlayer() {
        let playerName = $('input[id=addName]').val();
        let playerData = {
            name: playerName,
            money: 500,
            bullets: 6
        };

        $.ajax({
            method: 'POST',
            url: appBaseUrl + 'appdata/' + appKey + '/players',
            headers: authHeaders,
            data: JSON.stringify(playerData),
            contentType: "application/json",
            success: createPlayerSuccess,
            error: handleAjaxError
        });

        function createPlayerSuccess() {
            $('input[id=addName]').val('');
            loadPlayers();
        }
    }

    loadPlayers();

    function loadPlayers() {
        $.ajax({
            method: 'GET',
            url: appBaseUrl + 'appdata/' + appKey + '/players',
            headers: authHeaders,
            contentType: "application/json",
            success: loadPlayersSuccess,
            error: handleAjaxError
        });

        function loadPlayersSuccess(playersInfo) {
            $('#players').empty();

            for (let player of playersInfo) {
                let html = $(`
        <div class="player" data-id="${player._id}">
            <div class="row">
                <label>Name:</label>
                <label class="name">${player.name}</label>
            </div>
            <div class="row">
                <label>Money:</label>
                <label class="money">${player.money}</label>
            </div>
            <div class="row">
                <label>Bullets:</label>
                <label class="bullets">${player.bullets}</label>
            </div>
        </div>`);

                let playBtn = $('<button class="play">Play</button>').click(function () {
                    playGame(player._id);
                });
                let deleteBtn = $('<button class="delete">Delete</button>').click(function () {
                    deletePlayer(player._id);
                });
                html.append(playBtn)
                    .append(deleteBtn);
                html.appendTo('#players');
            }
        }
    }


    function playGame(playerID) {
        let name = $(`[data-id=${playerID}] .name`).text();
        let money = $(`[data-id=${playerID}] .money`).text();
        let bullets = $(`[data-id=${playerID}] .bullets`).text();

        let player = {name, money, bullets};

        $('#save').click(function () {
            savePlayerProgress(playerID, player);
        });
        $('#reload').click(function () {
            reloadPlayerInfo(player);
        });

        $('#canvas').show();
        $('#save').show();
        $('#reload').show();

        loadCanvas(player);
    }

    function savePlayerProgress(playerID, player) {

        let playerData = {
            name: player.name,
            money: player.money,
            bullets: player.bullets
        };

        $.ajax({
            method: 'PUT',
            url: appBaseUrl + 'appdata/' + appKey + '/players/' + playerID,
            headers: authHeaders,
            data: JSON.stringify(playerData),
            contentType: "application/json",
            success: editPlayerSuccess,
            error: handleAjaxError
        });

        function editPlayerSuccess(response) {
            $('#canvas').hide();
            $('#save').hide();
            $('#reload').hide();
            let canvas = document.getElementById('canvas');
            clearInterval(canvas.intervalId);
            loadPlayers();
        }
    }

    function reloadPlayerInfo(player) {
        if (player.money >= 60) {
            player.bullets = 6;
            player.money = player.money - 60;
        }
    }

    function deletePlayer(playerID) {
        $.ajax({
            method: 'DELETE',
            url: appBaseUrl + 'appdata/' + appKey + '/players/' + playerID,
            headers: authHeaders,
            success: deletePlayerSuccess,
            error: handleAjaxError
        });

        function deletePlayerSuccess() {
            $(`[data-id=${playerID}]`).remove();
        }
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMsg = "Can not connect due to network problem!"
        }
        if (response.responseJSON && response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        }
    }
}