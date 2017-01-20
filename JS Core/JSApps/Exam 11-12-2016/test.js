/**
 * Created by User on 11.12.2016 г..
 */
function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

let str = '<br><label></label>';
console.log(fixedEncodeURI(str))