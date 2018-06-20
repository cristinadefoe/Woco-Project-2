var db = require("../models");
var mentorsData = require('../data/mentors.js');

module.exports = function (app) {

    app.get('/api/mentors', function (req, res) {

        // Display mentors data in json format
        res.json(mentorsData);
    });

    app.post('/api/mentors', function (req, res) {
        var userInput = req.body;
        var mentorMatch = {
            name: "",
            photo: "",
            email: "",
            mentorDifference: 1000,

            // name: req.body.name,
            // photo: req.body.photo,
            // email: req.body.email,
            // scores: req.body.scores.join(""),
        }

        db.Mentor.findAll({})
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    console.log(`mentor name: ${data[i].name}`)
                    var mentor = data[i]
                    var diff = Math.abs(userInput.scores - mentor.scores)
                    if (diff < mentorMatch.mentorDifference) {
                        mentorMatch.name = mentor.name;
                        mentorMatch.photo = mentor.photo;
                        mentorMatch.email = mentor.email;
                        mentorMatch.mentorDifference = diff;
                    }
                }

                res.json(mentorMatch)
                // loop over the data and compare the scores in data with the userInput score
            })
            .catch(err => {
                console.log(err)
            })

        // Add new user
        mentorsData.push(userInput);
        db.Mentor.create(userInput)
            .then(data => {
                console.log("from .then", data.dataValues.scores)
            })
            .catch(err => console.log(err))
    });
};