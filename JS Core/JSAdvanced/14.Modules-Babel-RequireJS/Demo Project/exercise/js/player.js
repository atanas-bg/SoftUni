/**
 * Created by User on 16.11.2016 г..
 */
// private members
let playerName = '';

export function logPlayer() {
    console.log(`The current player is ${playerName}.`);
}

export function setName(newName) {
    playerName = newName;
}

export function getName() {
    return playerName;
}
