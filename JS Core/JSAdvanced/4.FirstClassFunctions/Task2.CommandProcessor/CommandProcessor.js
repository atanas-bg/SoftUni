/**
 * Created by User on 28.10.2016 г..
 */
let commandProcessor = (function () {
    let text = '';
    return {
        append: (str)=> text += str,
        removeStart: (count)=> text = text.slice(count),
        removeEnd: (count)=> text += text.slice(0, text.length - count),
        print: ()=> console.log(text)
    }
})();

function processCommands(commands) {
    let commandProcessor = (function () {
        let text = '';
        return {
            append: (str)=> text += str,
            removeStart: (count)=> text = text.slice(count),
            removeEnd: (count)=> text = text.slice(0, text.length - count),
            print: ()=> console.log(text)
        }
    })();
    for (let cmd of commands){
        let [cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}

processCommands(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);

commandProcessor.append('1');
commandProcessor.append('2');
commandProcessor.append('3');
commandProcessor.print();
commandProcessor.append('4567890');
commandProcessor.print();
commandProcessor.removeStart(2);
commandProcessor.print();
commandProcessor.removeEnd(3);
commandProcessor.print();