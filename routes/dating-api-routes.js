var friendsArray = require('../data/search.js');
var db = require("../models");

module.exports = function (app) {

    // display table data in json format
    app.get('/api/search', function (req, res) {
        res.json(friendsArray);

    });

    app.post('/api/search', function (req, res) {
        var userInput = req.body;
        console.log(userInput)
        var dateMatch = {
            singleName: req.body.singleName,
            singlePhoto: req.body.singlePhoto,
            singleEmail: req.body.singleEmail,
            singleScores: req.body.singleScores.join(""),
        }
        // var match;
        //===========================================================================

        db.Dates.findAll({})
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    console.log(`======================= date name: ${data[i].singleName}`)
                    console.log("userInput: " + userInput);
                    var match = data[i]
                    // do I need this?
                    var diff = Math.abs(userInput.singleScores - match.singleScores)
                    console.log("Diff: " + diff);
                    if (diff < dateMatch.singleScores) {
                        match.singleName = data[i].singleName;
                        match.singlePhoto = data[i].singlePhoto;
                        match.singleEmail = data[i].singleEmail;
                        match.singleScores = diff;
                    }
                }
                console.log("working");
                console.log(dateMatch);
                console.log(match);
                res.json(match)
                // loop over the data and compare the scores in data with the userInput score
            })
            .catch(err => {
                console.log(err)
            })

        //=============================================================================
        var scoresString = req.body.singleScores.join("");
        console.log("string: " + scoresString)
        db.Dates.create({
            singleName: req.body.singleName,
            singlePhoto: req.body.singlePhoto,
            singleEmail: req.body.singleEmail,
            singleScores: scoresString,

        })
            .then(function (dbPost) {
                console.log(dbPost);
                console.log("==================== hey dude the res redirect should be coing ")
                // res.json()
                // res.redirect("/search");
                //  res.json(dbPost); 
            })
            .catch(function (err) {

                console.log(err);
            })

        friendsArray.push(userInput);

    });


    app.post("/api/clear", function () {

        // Empty out the arrays of data
        friendsArray = [];


        console.log(friendsArray);
    });


    // POST route for saving a new post
    app.post("/api/rating", function (req, res) {
        console.log(req.body);
        db.Post.create({
            photo: req.body.photo,
            name: req.body.name,
            age: req.body.age,
            location: req.body.location,
            paid: req.body.paid,
            initiation: req.body.initiation,
            appearance: req.body.appearance,
            conversation: req.body.conversation,
            manners: req.body.manners,
            attraction: req.body.attraction,
            smoochable: req.body.smoochable,
            interaction: req.body.interaction,
            date: req.body.date,
            impression: req.body.impression,
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

};

