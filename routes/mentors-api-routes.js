var mentorsData = require('../data/mentors.js');
var path = require('path');
var db = require("../models");
module.exports = function (app) {

    app.get('/api/mentors', function (req, res) {

        // Display mentors data in json format
        res.json(mentorsData);
    });

    app.post('/api/mentors', function (req, res) {
        var userInput = req.body;
        console.log(userInput)
        var mentorMatch = {
            name: "",
            photo: "",
            email: "",
            mentorDifference: 1000
        }

        db.Mentor.findAll({})
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    console.log(`friend name: ${data[i].name}`)
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
        // Check newMentorPoints and compare it to mentorData 

        // var newMentorPoints = userInput.scores;
        // var sameName = '';
        // var sameEmail = "";
        // var samePicture = '';
        // var mentorGap = 5000;

        // // Loop through mentor list
        // for (var i = 0; i < mentorsData.length; i++) {

        //     // Check gap in points to compare mentors in list
        //     var gap = 0;
        //     for (var j = 0; j < newMentorPoints.length; j++) {
        //         gap += (Math.abs(parseInt(mentorsData[i].scores[j]) - parseInt(userInput.scores[j])));
        //     }

        //     // If difference in score is low, then a match is found
        //     if (gap < mentorGap) {
        //         // console.log("Found your mentor = " + gap);
        //         // console.log("Mentor's name = " + mentorsData[i].name);
        //         // console.log("Mentor's email = " + mentorsData[i].email);
        //         // console.log("Mentor's image = " + mentorsData[i].photo);

        //         // Create new mentor
        //         mentorGap = gap;
        //         sameName = mentorsData[i].name;
        //         sameEmail = mentorsData[i].email;
        //         samePicture = mentorsData[i].photo;
        //     }
        // }

        // Add new user
        mentorsData.push(userInput);
        db.Mentor.create(userInput)
            .then(data => {
                console.log("from .then", data.dataValues.scores)
            })
            .catch(err => console.log(err))
        // Sending object sameName and samePicture to backend
        // Sending response back to mentors-survey.html


        // res.json({ sameName: sameName, sameEmail: sameEmail, samePicture: samePicture });
    });

};

