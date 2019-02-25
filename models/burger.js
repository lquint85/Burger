let orm = require("../config/orm");

let burger = {
    selectAll: function (controllerCb) {
        orm.selectAll("burgers", function (res) {
            controllerCb(res);
        });
    },


insertOne: function (values, controllerCb) {
    orm.insertOne("burgers", values, function (res) {
        controllerCb(res);
        });
    },
    updateOne: function(devoured, condition, controllerCb) {
        console.log('devoured', parseInt(devoured) === 1);
        orm.updateOne("burgers", parseInt(devoured) === 1, condition, function(
            res
        ) {
            controlllerCb(res);
        });
    }
};
module.exports = burger;