/**
 * Created by User on 11.11.2016 г..
 */
let Extensible = (function () {
    "use strict";
    let id = 0;

    class Extensible {
        constructor() {
            this.id = id;
            id += 1;
        }

        extend(template) {
            let className = this.constructor.name;
            for (let key in template) {
                if (typeof(template[key]) === 'function') {
                    Extensible.prototype[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    }

    return Extensible;
})();

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
obj3.extend({
        extensionMethod: function () {
        },
        extensionProperty: 'someString'
    }
)
console.log(obj3);

