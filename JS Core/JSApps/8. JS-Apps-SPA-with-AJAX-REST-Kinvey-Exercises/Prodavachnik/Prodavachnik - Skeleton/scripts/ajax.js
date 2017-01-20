/**
 * Created by User on 10.12.2016 г..
 */
function listAds() {
    $('#ads').empty();
    showView('viewAds');

    $.ajax({
        method: "GET",
        url: kinveyBaseUrl + 'appdata/' + appID + '/advertisements',
        headers: getKinveyAuthHeaders(),
        contentType: "application/json",
        success: loadAdsSuccess,
        error: handleAjaxError
    });

    function loadAdsSuccess(allAds) {
        let table = $('<table>');
        let tableHeader = $(`
                <tr>
                    <th>Title</th>
                    <th>Publisher</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Date Published</th>
                    <th>Actions</th>
                </tr>`);

        table.append(tableHeader);

        for (let ad of allAds) {
            let tr = $('<tr>');
            displayTableRow(tr, ad);
            table.append(tr);
        }
        $('#ads').append(table);

        function displayTableRow(tr, ad) {
            tr.append($(`
                    <td>${ad.Title}</td>
                    <td>${ad.Publisher}</td>
                    <td>${ad.Description}</td>
                    <td>${ad.Price}</td>
                    <td>${ad.Date}</td>
                `));

            let td = $('<td>');
            let readMoreLink = $('<a href="#">[Read More]</a>')
                .click(function () {
                    displayAdById(ad._id);
                });

            let links = [];
            links.push(readMoreLink);

            if (ad._acl.creator === sessionStorage.getItem('userID')) {

                // different solution
                // let deleteLink = $(`<a data-id="${ad._id}"  href="#">[Delete]</a>`)
                //     .click(function () {
                //         deleteAdById($(this).attr('data-id'));
                //     });

                let deleteLink = $('<a href="#">[Delete]</a>')
                    .click(function () {
                        deleteAdById(ad._id);
                    });

                let editLink = $('<a href="#">[Edit]</a>')
                    .click(function () {
                        loadAdForEditAdById(ad._id);
                    });

                links.push(' ');
                links.push(deleteLink);
                links.push(' ');
                links.push(editLink);
            }

            td.append(links);
            tr.append(td);
        }

        function displayAdById(adID) {
            // let data = {
            //     "adId": "2"
            // };
            // $.ajax({
            //     method: "POST",
            //     url: kinveyBaseUrl + 'rpc/' + appID + '/custom/viewcounter',
            //     headers: getKinveyAuthHeaders(),
            //     contentType: "application/json",
            //     data: JSON.stringify(data),
            //     success: getViewCountSuccess,
            //     error: handleAjaxError
            // });
            //
            // function getViewCountSuccess(response) {
            //     console.dir(response);
            // }

            $.ajax({
                method: "GET",
                url: kinveyBaseUrl + 'appdata/' + appID + '/advertisements/' + adID,
                headers: getKinveyAuthHeaders(),
                contentType: "application/json",
                success: getAdSuccess,
                error: handleAjaxError
            });

            $('#viewDisplayAd').empty();

            function getAdSuccess(adInfo) {
                let html = $('<div>');
                html.append(
                    $('<img>').attr('src', adInfo.Image),
                    $('<br>'),
                    $('<label>').text('Title:'),
                    $('<h1>').text(adInfo.Title),
                    $('<label>').text('Description:'),
                    $('<p>').text(adInfo.Description),
                    $('<label>').text('Publisher:'),
                    $('<div>').text(adInfo.Publisher),
                    $('<label>').text('Date:'),
                    $('<div>').text(adInfo.Date),
                    $('<label>').text('Price:'),
                    $('<div>').text(adInfo.Price)
                );

                html.appendTo('#viewDisplayAd');
                // $('#formDisplayAd p[name=id]').text(adInfo._id);
                // $('#viewDisplayAd img').attr('src', adInfo.Image);
                // $('#viewDisplayAd p[name=title]').text(adInfo.Title);
                // $('#viewDisplayAd p[name=description]').text(adInfo.Description);
                // $('#viewDisplayAd p[name=publisher]').text(adInfo.Publisher);
                // $('#viewDisplayAd p[name=datePublished]').text(adInfo.Date);
                // $('#viewDisplayAd p[name=price]').text(adInfo.Price);

                showView('viewDisplayAd');
            }
        }

        function deleteAdById(adID) {
            $.ajax({
                method: "DELETE",
                url: kinveyBaseUrl + 'appdata/' + appID + '/advertisements/' + adID,
                headers: getKinveyAuthHeaders(),
                success: deleteAdSuccess,
                error: handleAjaxError
            });

            function deleteAdSuccess() {
                listAds();
                showInfo('Ad deleted successfully!')
            }
        }

        function loadAdForEditAdById(adID) {
            $.ajax({
                method: "GET",
                url: kinveyBaseUrl + 'appdata/' + appID + '/advertisements/' + adID,
                headers: getKinveyAuthHeaders(),
                contentType: "application/json",
                success: getAdSuccess,
                error: handleAjaxError
            });

            function getAdSuccess(adInfo) {
                $('#formEditAd input[name=id]').val(adInfo._id);
                $('#formEditAd input[name=title]').val(adInfo.Title);
                $('#formEditAd textarea[name=description]').val(adInfo.Description);
                $('#formEditAd input[name=publisher]').val(adInfo.Publisher);
                $('#formEditAd input[name=datePublished]').val(adInfo.Date);
                $('#formEditAd input[name=price]').val(adInfo.Price);
                $('#formEditAd input[name=image]').val(adInfo.Image);

                showView('viewEditAd');
            }
        }
    }
}

function createAd() {
    let title = $('#formCreateAd input[name=title]').val();
    let description = $('#formCreateAd textarea[name=description]').val();
    let publisher = `${sessionStorage.getItem('username')}`;
    let date = $('#formCreateAd input[name=datePublished]').val();
    let price = $('#formCreateAd input[name=price]').val();
    let image = $('#formCreateAd input[name=image]').val();
    let [year, month, day] = date.split('-');
    date = `${month}-${day}-${year}`;

    let adData = {
        Title: title,
        Description: description,
        Publisher: publisher,
        Date: date,
        Price: price,
        Image: image
    };


    $.ajax({
        method: "POST",
        url: kinveyBaseUrl + 'appdata/' + appID + '/advertisements',
        contentType: "application/json",
        headers: getKinveyAuthHeaders(),
        data: JSON.stringify(adData),
        success: createAdSuccess,
        error: handleAjaxError
    });

    function createAdSuccess() {
        listAds();
        showInfo('Ad creation successful!')
    }
}

function editAd() {

    let Title = $('#formEditAd input[name=title]').val();
    let Description = $('#formEditAd textarea[name=description]').val();
    let Publisher = $('#formEditAd input[name=publisher]').val();
    let Date = $('#formEditAd input[name=datePublished]').val();
    let Price = $('#formEditAd input[name=price]').val();
    let Image = $('#formEditAd input[name=image]').val();
    let adData = {Title, Description, Publisher, Date, Price, Image};

    let id = $('#formEditAd input[name=id]').val();

    $.ajax({
        method: "PUT",
        url: kinveyBaseUrl + 'appdata/' + appID + '/advertisements/' + id,
        contentType: "application/json",
        headers: getKinveyAuthHeaders(),
        data: JSON.stringify(adData),
        success: editAdSuccess,
        error: handleAjaxError
    });

    function editAdSuccess() {
        listAds();
        showInfo('Ad edited successfully!')
    }
}