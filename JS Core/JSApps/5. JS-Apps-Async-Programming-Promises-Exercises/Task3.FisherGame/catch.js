/**
 * Created by User on 1.12.2016 г..
 */
function attachEvents() {
    const appID = 'kid_SJ19k-Rzl';
    const username = 'nasko';
    const password = 'nasko';
    const base64auth = btoa(username + ":" + password);
    const authHeaders = {
        "Authorization": "Basic " + base64auth,
        "Content-Type": "application/json"
    };
    const basicUrl = 'https://baas.kinvey.com/appdata/' + appID;

    $('#aside .load').click(listAllCatches);
    $('#aside .add').click(createNewCatch);


    function listAllCatches() {
        let listCatchesRequest = {
            method: "GET",
            url: basicUrl + "/biggestCatches",
            headers: authHeaders
        };

        $.ajax(listCatchesRequest)
            .then(displayCatches)
            .catch(displayError);
    }

    function displayCatches(catches) {

        let catchesContainer = $('#main #catches');
        catchesContainer.empty();
        for (let catchData of catches) {
        let catchForm = $(`<div class="catch" data-id="${catchData._id}">
            <label>Angler</label>
            <input type="text" class="angler" value="${catchData.angler}"/>
            <label>Weight</label>
            <input type="number" class="weight" value="${catchData.weight}"/>
            <label>Species</label>
            <input type="text" class="species" value="${catchData.species}"/>
            <label>Location</label>
            <input type="text" class="location" value="${catchData.location}"/>
            <label>Bait</label>
            <input type="text" class="bait" value="${catchData.bait}"/>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${catchData.captureTime}"/>
            <button class="update">Update</button>
            <button class="delete">Delete</button>
        </div>`);
            catchesContainer.append(catchForm);
        }
        $('#catches .update').click(updateCatch);
        $('#catches .delete').click(deleteCatch);
    }

    function createNewCatch() {
        let addForm = $('#addForm');
        let angler = addForm.find('.angler').val();
        let weight = addForm.find('.weight').val();
        let species = addForm.find('.species').val();
        let location = addForm.find('.location').val();
        let bait = addForm.find('.bait').val();
        let captureTime = addForm.find('.captureTime').val();

        let newCatch = {angler, weight, species, location, bait, captureTime};
        let createCatchRequest = {
            method: "POST",
            url: basicUrl + "/biggestCatches",
            headers: authHeaders,
            data: JSON.stringify(newCatch)
        };

        $.ajax(createCatchRequest)
            .then((catches)=> {
                let angler = addForm.find('.angler').val('');
                let weight = addForm.find('.weight').val('');
                let species = addForm.find('.species').val('');
                let location = addForm.find('.location').val('');
                let bait = addForm.find('.bait').val('');
                let captureTime = addForm.find('.captureTime').val('');
                listAllCatches(catches);
            })
            .catch(displayError);
    }

    function updateCatch() {
        let currentCatch = $(this).parent();
        let catchId = currentCatch.attr('data-id');
        let angler = currentCatch.find('.angler').val();
        let weight = currentCatch.find('.weight').val();
        let species = currentCatch.find('.species').val();
        let location = currentCatch.find('.location').val();
        let bait = currentCatch.find('.bait').val();
        let captureTime = currentCatch.find('.captureTime').val();

        let updatedCatch = {angler, weight, species, location, bait, captureTime};
        let updateCatchRequest = {
            method: "PUT",
            url: basicUrl + "/biggestCatches/" + catchId,
            headers: authHeaders,
            data: JSON.stringify(updatedCatch)
        };

        $.ajax(updateCatchRequest)
            .then(listAllCatches)
            .catch(displayError);

    }

    function deleteCatch() {
        let catchId = $(this).parent().attr('data-id');
        let deleteCatchRequest = {
            method: "DELETE",
            url: basicUrl + "/biggestCatches/" + catchId,
            headers: authHeaders,
        };

        $.ajax(deleteCatchRequest)
            .then(listAllCatches)
            .catch(displayError);
    }

    function displayError(error) {
        console.log("Error " + error.status + " (" + error.statusText + ")");
    }
}