var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs"); // read and write filesystem
var mp = path.join(__dirname, "./../models") // model path

mongoose.connect("mongodb://localhost/1955");

fs.readdirSync(mp).forEach(function(file){ // file system - read sync_ly (1 at a time)
    if(file.indexOf(".js") >= 0){
        require(mp + "/" + file);
    }
});