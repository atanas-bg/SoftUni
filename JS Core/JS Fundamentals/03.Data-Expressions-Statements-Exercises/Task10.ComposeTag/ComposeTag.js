/**
 * Created by User on 30.9.2016 г..
 */
// input : ['smiley.gif', 'Smiley Face']
// output : <img src="smiley.gif" alt="Smiley Face">
// <img src="{file location}" alt="{alternate text}">

function printImageTag([imageFileLocation, alternateText]) {
    console.log(`<img src="${imageFileLocation}" alt="${alternateText}">`);
}

printImageTag(['smiley.gif', 'Smiley Face']);