/**
 * Created by User on 6.11.2016 г..
 */
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
};

module.exports = {isOddOrEven};
