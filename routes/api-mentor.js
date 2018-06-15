// Mentor Routes
//=============================================================================
// var db = require("../models");
// var passport = require("../config/passport");
var mentorsData = require('../data/mentors.js');
// var friendsData = require('../data/friends.js');
// var friendsArray = require('../data/search.js');
var path = require('path');

module.exports = function (app) {

    app.get('/api/mentors', function (req, res) {
        res.json(mentorsData);
    });

    app.post('/api/mentors', function (req, res) {
        var userInput = req.body;
        var newMentorPoints = userInput.scores;
        var sameName = '';
        // var sameEmail = '';
        var samePicture = '';
        var mentorGap = 5000;

        for (var i = 0; i < mentorsData.length; i++) {
            var gap = 0;
            for (var j = 0; j < newMentorPoints.length; j++) {
                gap += (Math.abs(parseInt(mentorsData[i].scores[j]) - parseInt(userInput.scores[j])));
            }

            // If difference in score is low, then a match is found
            if (gap < mentorGap) {
                console.log('Found your mentor = ' + gap);
                console.log('Mentor name = ' + mentorsData[i].name);
                // console.log('Mentor email = ' + mentorsData[i].email);
                console.log('Mentor image = ' + mentorsData[i].photo);

                // Create new mentor
                mentorGap = gap;
                sameName = mentorsData[i].name;
                // sameEmail = mentorsData[i].email;
                samePicture = mentorsData[i].photo;
            }
        }

        // Add new user
        mentorsData.push(userInput);
        // Sending object sameName and samePicture to backend
        // Sending response back to survey.html
        res.json({ sameName: sameName, samePicture: samePicture });
    });

};