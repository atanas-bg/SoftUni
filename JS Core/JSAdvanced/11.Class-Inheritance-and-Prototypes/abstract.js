/**
 * Created by User on 11.11.2016 г..
 */
class Abstract {
    constructor(){
            console.log(new.target);
        if (new.target === Abstract) {
            throw new Error(("Cannot construct Abstract instances directly"));
        }
    }
}

class Free extends Abstract{
    constructor(){
        super();
    }
}
let r = new Free();