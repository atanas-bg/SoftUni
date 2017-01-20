/**
 * Created by User on 2.12.2016 г..
 */
function manageStudents() {
    const appKey = 'kid_BJXTsSi-e';
    const appSecret = '447b8e7046f048039d95610c1b039390';
    const username = 'guest';
    const password = 'guest';
    const userAuthToken = "Basic " + btoa(username + ':' + password);
    const appAuthToken = "Basic " + btoa(appKey + ':' + appSecret);
    const dataUrl = 'https://baas.kinvey.com/appdata/' + appKey + '/students';
    const loginUrl = 'https://baas.kinvey.com/user/' + appKey + '/login';

    $('#addStudBtn').click(createUser);

    // solution with user credentials
    // let authHeaders = {
    //     "Authorization": userAuthToken,
    //     "Content-Type": "application/json"
    // };
    //
    // let studentsRequest = {
    //     method: 'GET',
    //     url: dataUrl,
    //     headers: authHeaders
    // };
    // $.ajax(studentsRequest)
    //     .then(displayStudents)
    //     .catch(displayError);

    // solution with login with application credentials -->
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
        url: loginUrl,
        data: JSON.stringify(userCredentials),
        headers: authHeaders
    };

    $.ajax(loginRequest)
        .then(getSessionToken)
        .catch(displayError);

    function getSessionToken(data) {
        let sessionToken = data._kmd.authtoken;
        authHeaders.Authorization = "Kinvey " + sessionToken;
        getStudents();  // calling the function after we have received the session token
    }

    //<-- solution with login with application credentials

    function getStudents() {
        let studentsRequest = {
            method: 'GET',
            url: dataUrl,
            headers: authHeaders
        };

        $.ajax(studentsRequest)
            .then(displayStudents)
            .catch(displayError);
    }


    function displayStudents(students) {
        $('#results #table-row').remove();
        students = students.sort((a, b)=> a.ID - b.ID);
        let results = $('#results');
        for (let student of students) {
            let tableRow = $(`<tr id="table-row">
        <td>${student.ID}</td>
        <td>${student.FirstName}</td>
        <td>${student.LastName}</td>
        <td>${student.FacultyNumber}</td>
        <td>${student.Grade}</td>
    </tr>`);
            results.append(tableRow);
        }
    }

    // create user
    function createUser() {
        let addForm = $('#addForm');
        let studentID = addForm.find('.ID').val();
        let studentFirstName = addForm.find('.FirstName').val();
        let studentLastName = addForm.find('.LastName').val();
        let studentFacultyNumber = addForm.find('.FacultyNumber').val();
        let studentGrade = addForm.find('.Grade').val();

        let facultyRegex = /^\d+$/g;

        if (studentID != '' &&
            studentFirstName != '' &&
            studentLastName != '' &&
            facultyRegex.test(studentFacultyNumber) &&
            studentGrade != ''
        ) {
            let id = Number(studentID);
            let grade = Number(studentGrade);
            let studentData = {
                ID: id,
                FirstName: studentFirstName,
                LastName: studentLastName,
                FacultyNumber: studentFacultyNumber,
                Grade: grade
            };


            let request = {
                method: 'POST',
                url: dataUrl,
                headers: authHeaders,
                data: JSON.stringify(studentData)
            };

            $.ajax(request)
                .then(getStudents)
                .catch(displayError);
        }


    }

    function displayError(error) {
        console.log('Error: ' + error.status + ' (' + error.statusText + ')')
    }
}
