/**
 * Created by User on 30.10.2016 г..
 */
function orderRectangles(rectsList) {
    let allRects = [];
    for (let [width, height] of rectsList) {
        let rectangle = createRect(width, height);
        allRects.push(rectangle);
    }
    allRects.sort((a, b) => a.compareTo(b));
    return allRects;

    function createRect(width, height) {
        "use strict";
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }
}

// console.log(orderRectangles([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]));
console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));
