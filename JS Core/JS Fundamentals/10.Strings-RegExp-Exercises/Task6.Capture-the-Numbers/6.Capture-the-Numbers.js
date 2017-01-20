function getNumbers(input) {
    let result = [];
    let regex = /\d+/g;
    if (Array.isArray(input)) {
        let text = input.join('');
        result = text.match(regex);
        console.log(result.join(' '));

    }
}

getNumbers([`The300
What is that?
I think it’s the 3rd movie.
Lets watch it at 22:45
`]);