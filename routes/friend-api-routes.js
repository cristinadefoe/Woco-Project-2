var db = require("../models");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {

        // connect to the database and find all
        db.Friend.findAll({})

            // THEN we send the data
            .then(data => res.json(data))
            .catch(err => { console.log(err) })

    });

    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        var friendMatch = {
            name: "",
            photo: "",
            email: "",
            friendDifference: 1000,
        }

        db.Friend.findAll({})
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    console.log(`friend name: ${data[i].name}`)
                    var friend = data[i]
                    var diff = Math.abs(userInput.scores - friend.scores)
                    if (diff < friendMatch.friendDifference) {
                        friendMatch.name = friend.name;
                        friendMatch.photo = friend.photo;
                        friendMatch.email = friend.email;
                        friendMatch.friendDifference = diff;
                    }
                }

                res.json(friendMatch)
                // loop over the data and compare the scores in data with the userInput score
            })
            .catch(err => {
                console.log(err)
            })

        // Add new user
        db.Friend.create(userInput)
            .then(data => {
                console.log("from .then", data.dataValues.scores)
            })
            .catch(err => console.log(err))
    });
};