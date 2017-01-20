/**
 * Created by User on 13.12.2016 г..
 */
let str = '<img src="[imgSource]" />';
str = str.replace(/\[imgSource\]/, './smiley.gif');

let str2 = 'Visit <link>http://fb.com</link> or <link>http://softuni.bg</link>.';
str = str.replace(/<link>(.*?)<\/link>/g,
    '<a href="$1">Link</a>');

console.log(str);
console.log(str2);
