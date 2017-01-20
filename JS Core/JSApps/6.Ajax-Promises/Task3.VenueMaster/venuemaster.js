/**
 * Created by User on 2.12.2016 г..
 */
function attachEvents() {
    const appKey = 'kid_BJ_Ke8hZg';
    const username = 'guest';
    const password = 'pass';
    const base64auth = btoa(username + ':' + password);
    const authToken = 'Basic ' + base64auth;
    const basicUrl = 'https://baas.kinvey.com/';

    let authHeaders = {
        "Authorization": authToken,
        "Content-Type": "application/json"
    };

    $('#getVenues').click(listVenues);

    function listVenues() {
        let venueDate = $('#venueDate').val();
        let query = `rpc/kid_BJ_Ke8hZg/custom/calendar?query=${venueDate}`;
        $.ajax({
            method: "POST",
            url: basicUrl + query,
            headers: authHeaders
        })
            .then(displayVenues)
            .catch(displayError)
    }

    function displayVenues(venueIDs) {
        let venuesContainer = $('#venue-info');
        for (let venueID of venueIDs) {
            let venueUrl = `appdata/kid_BJ_Ke8hZg/venues/${venueID}`;
            $.ajax({
                method: "GET",
                url: basicUrl + venueUrl,
                headers: authHeaders
            })
                .then(getVenue)
                .catch(displayError);

            function getVenue(venue) {
                let venueTemplate = $(`<div class="venue" id="${venue._id}">
  <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
  <div class="venue-details" style="display: none;">
    <table>
      <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
      <tr>
        <td class="venue-price">${venue.price} lv</td>
        <td><select class="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select></td>
        <td><input class="purchase" type="button" value="Purchase"></td>
      </tr>
    </table>
    <span class="head">Venue description:</span>
    <p class="description">${venue.description}</p>
    <p class="description">Starting time: ${venue.startingHour}</p>
  </div>
</div>
`);
                venuesContainer.append(venueTemplate);
                let currentVenue = $(`#${venue._id}`);
                currentVenue.find('.info').click(function () {
                    let venueDetails = currentVenue.find('.venue-details');
                    if (venueDetails.css('display') == 'none') {
                        venueDetails.css('display', 'block')
                    } else {
                        venueDetails.css('display', 'none')
                    }
                });

                currentVenue.find('.purchase').click(function () {
                    venuesContainer.empty();
                    let qty = currentVenue.find('.quantity').val();
                    let name = venue.name;
                    let price = venue.price;
                    // let total = name * price;

                    let confirmationTemplate = $(`<span class="head">Confirm purchase</span>
<div class="purchase-info">
  <span>${name}</span>
  <span>${qty} x ${price}</span>
  <span>Total: ${qty * price} lv</span>
  <input type="button" value="Confirm">
</div>
`);
                    venuesContainer.append(confirmationTemplate);
                    $(':button').click(purchaseInfo);
                    function purchaseInfo() {
                        let htmlUrl = basicUrl + `rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${venue._id}&qty=${qty}`;
                        $.ajax({
                            method:"POST",
                            url: htmlUrl,
                            headers: authHeaders
                        })
                            .then(showFinalResult)
                            .catch(displayError);

                        function showFinalResult(data) {
                            // venuesContainer.empty();
                            let text = 'You may print this page as your ticket';
                            venuesContainer.append($('<p>').text(text));
                            venuesContainer.append(data.html);
                        }
                    }
                });


            }

        }
    }

    function displayError(error) {
        console.log('Error: ' + error.status + ' (' + error.statusText + ')')
    }
}