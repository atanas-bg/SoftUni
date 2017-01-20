/**
 * Created by User on 12.10.2016 г..
 */
// input : ['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']
// output : peshoo.gc, todor_43.mdb, foo.bc

function createUsernames(input) {
    // let pattern = /^([a-z-_0-9]+)@([a-z-_0-9]+).([a-z]+[-_a-z0-9]*)(.([a-z]+))?$/g;
    // let usernames = [];
    // for(let email of input) {
    //     let emailParts = pattern.exec(email);
    //     let username = emailParts[1] + '.';
    //     for (let i = 2; i < emailParts.length; i++) {
    //         username += emailParts[i].slice(0,1);
    //     }
    //     usernames.push(username);
    // }
    let usernames = [];
    for (let email of input) {
        let [username, domain] = email.split('@');
        let newUsername = username + '.';
        let parts = domain.split('.');
        parts.forEach(s => newUsername += s[0]);
        usernames.push(newUsername);
    }

    return usernames.join(', ');
}

console.log(createUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));