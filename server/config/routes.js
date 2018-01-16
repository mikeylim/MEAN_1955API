var users = require("./../controllers/usercontroller.js");
module.exports = function(app){
    app.get('/', function(req, res){
        users.index(req, res);
    });

    app.get("/new/:username", function(req, res){
        users.create(req, res);
    })

    app.get("/remove/:username", function(req, res){
        users.remove(req, res);
    })
    app.get("/:username", function(req, res){
        users.getInfo(req, res);
    })
    app.get("/edit/:username/:newname", function(req, res){
        users.edit(req, res);
    })
};