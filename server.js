var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var port = 8000;
var session = require("express-session");

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "/client"));
app.set("view engine", "ejs");
app.use(session({
    secret: "dojo",
    resave: true,
    saveUninitialized: true}
));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port, function(){
    console.log("listening");
});