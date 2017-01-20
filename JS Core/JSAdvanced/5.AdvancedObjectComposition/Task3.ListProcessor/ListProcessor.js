/**
 * Created by User on 30.10.2016 г..
 */
function process(commands) {
    let listProcessor = (function () {
        let collection = [];
        return {
            add: (str)=> collection.push(str),
            remove: (str)=> collection = collection.filter(x=>x !== str),
            print: ()=> console.log(collection.join(','))
        }
    })();

    for (let el of commands) {
        let [cmd, arg] = el.split(' ');
        // let cmd = el.shift()
        // let arg = el;
        listProcessor[cmd](arg);
    }
}

process(['add hello', 'add again', 'remove hello', 'add again', 'print']);
process(['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print']);
