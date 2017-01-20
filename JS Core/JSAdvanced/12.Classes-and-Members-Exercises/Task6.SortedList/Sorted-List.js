/**
 * Created by User on 11.11.2016 г..
 */
class SortedList {
    constructor() {
        this.collection = [];
    }

    add(element) {
        this.collection.push(element);
        this.collection.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
        } else {
            throw new Error('Index is outside boundary.');
        }
    }

    get(index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        } else {
            throw new Error('Index is outside boundary.');
        }
    }

    get size() {
        return this.collection.length;
    }
}

let c = new SortedList();
c.add(2);
c.add(4);
c.add(10);
c.add(110);
c.add(120);
c.remove(0);
console.log(c);
console.log(c.size);
console.log(c.get(1));