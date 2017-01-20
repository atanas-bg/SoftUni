/**
 * Created by User on 14.10.2016 г..
 */
// input :
// Pesho
// pesho@softuni.bg
// 90-60-90
// Hello, <!username!>!
// Welcome to your Personal profile.
// Here you can modify your profile freely.
// Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)
// Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)
// Your current phone number is: <+number+>. Would you like to change that? (Y/N)

// output :
// Hello, Pesho!
// Welcome to your Personal profile.
// Here you can modify your profile freely.
// Your current username is: Pesho. Would you like to change that? (Y/N)
// Your current email is: pesho@softuni.bg. Would you like to change that? (Y/N)
// Your current phone number is: 90-60-90. Would you like to change that? (Y/N)

// •	<!{letters}!> - put the given username in place of this
// •	<@{letters}@> - put the given email in place of this
// •	<+{letters}+> - put the given email in place of this


function fillForm(input) {
    let username = input[0];
    let email = input[1];
    let phoneNumber = input[2];
    for (let i = 3; i < input.length; i++) {
        let usernamePattern = /<![A-Za-z]+!>/g;
        let emailPattern = /<@[A-Za-z]+@>/g;
        let phoneNumberPattern = /<\+[A-Za-z]+\+>/g;
        input[i] = input[i].replace(usernamePattern, username);
        input[i] = input[i].replace(emailPattern, email);
        input[i] = input[i].replace(phoneNumberPattern, phoneNumber);
        console.log(input[i]);
    }
}

//second solution
// function fillForm(data) {
//     let [username, email, phone] =
//         [data.shift(), data.shift(), data.shift()];
//     data.forEach(line => {
//         line = line.replace(/<![a-zA-Z]+!>/g, username);
//         line = line.replace(/<@[a-zA-Z]+@>/g, email);
//         line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
//         console.log(line);
//     });
// }


fillForm(['Pesho',  'pesho@softuni.bg', '90-60-90', 'Hello, <!username!>!', 'Welcome to your Personal profile.', 'Here you can modify your profile freely.',
'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)','Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
'Your current phone number is: <+number+>. Would you like to change that? (Y/N)]']);