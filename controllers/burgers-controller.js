
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");
// console.log(burger);
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.name, function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let id = "id = " + req.params.id;

  console.log("id", id);
  burger.updateOne(
    req.body.devoured, id, function(res) {
    // if (res.changedRows === 0) {
    //   return res.status(404).end();
    // } 
    // else {
    //   res.status(200).end();
    // }
  });
});

module.exports = router;


