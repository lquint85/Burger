
// =============================================================
//* Dependencies
//* =============================================================
const express = require("express");
const exphbs = require("express-handlebars");
// const mysql = require("mysql");


//* Sets up the Express App
//* =============================================================
const app = express();
const PORT = process.env.PORT || 8000;


//* Sets up the Express app to handle data parsing
//* =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//* Sets up handlebars
//* =============================================================
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");


//* Defining Routes
//* =============================================================
const routes = require("./controllers//burgers_controller")
app.use(routes);


//* Starts the server to begin listening
//* =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


























// const express = require("express");
// const PORT = process.env.PORT || 8080

// let app = express();

// app.use(express.static(__dirname + "public"));

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// let exHandle = require("express-handlebars");

// app.engine("handlebars", exHandle({defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// let routes = require(".controllers/burgers_controller");s

// app.use(routes);

// app.listen(PORT, function () {
//     console.log("Listening on at localhost:" + PORT);
// })

