/**
 * Created by user on 27.9.2016 г..
 */
// input : banana
// output: fruit
// •	Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach
// •	Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley
// •	All others are unknown


function typeOfPlant(plantName) {
    let word = plantName[0];
    switch (word) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
    }
}

typeOfPlant(["banana"]);
typeOfPlant(["kiwi"]);
typeOfPlant(["tomato"]);
typeOfPlant(["Ivan"]);