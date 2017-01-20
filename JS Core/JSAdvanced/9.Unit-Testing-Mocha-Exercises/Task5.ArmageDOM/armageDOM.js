/**
 * Created by User on 8.11.2016 г..
 */
function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

module.exports = {nuke};