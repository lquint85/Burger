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
    updateOne: function(condition, controllerCb) {
        console.log(condition);
        orm.updateOne("burgers", true, condition, function(res) {
            controlllerCb(res);
        });
    }
};
module.exports = burger;