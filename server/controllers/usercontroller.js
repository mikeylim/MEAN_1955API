var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
    // get the users list (sending as json file) 
    index: function(req, res){
        User.find({}, function(err, users){
            res.render("index", {users: users});
        });
    },

    // create new user
    create: function(req, res){
        User.create({name: req.params.username}, function(err, user){
            res.redirect('/');
        });
    },


    // remove user
    remove: function(req, res){
        User.remove({name: req.params.username}, function(err, user){
            res.redirect("/");
        })
    },

    // get the information of user
    getInfo: function(req, res){
        User.findOne({name: req.params.username}, function(err, user){
            res.json(user);
        })
    },

    // edit name of the user
    edit: function(req, res){
        User.update({name: req.params.username}, {name: req.params.newname}, function(err, user){
            res.redirect("/");
        })
    }
}