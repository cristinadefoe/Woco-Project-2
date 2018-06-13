var mentorsData = require('../data/mentors.js');
var path = require('path');

module.exports = function (app) {

    app.get('/api/mentors', function (req, res) {

        // Display mentors data in json format
        res.json(mentorsData);
    });

    app.post('/api/mentors', function (req, res) {

        // Check newMentorPoints and compare it to mentorData 
        var userInput = req.body;
        var newMentorPoints = userInput.scores;
        var sameName = '';
        var sameEmail = "";
        var samePicture = '';
        var mentorGap = 5000;

        // Loop through mentor list
        for (var i = 0; i < mentorsData.length; i++) {

            // Check gap in points to compare mentors in list
            var gap = 0;
            for (var j = 0; j < newMentorPoints.length; j++) {
                gap += (Math.abs(parseInt(mentorsData[i].scores[j]) - parseInt(userInput.scores[j])));
            }

            // If difference in score is low, then a match is found
            if (gap < mentorGap) {
                console.log("Found your mentor = " + gap);
                console.log("Mentor's name = " + mentorsData[i].name);
                console.log("Mentor's email = " + mentorsData[i].email);
                console.log("Mentor's image = " + mentorsData[i].photo);

                // Create new mentor
                mentorGap = gap;
                sameName = mentorsData[i].name;
                sameEmail = mentorsData[i].email;
                samePicture = mentorsData[i].photo;
            }
        }

        // Add new user
        mentorsData.push(userInput);
        // Sending object sameName and samePicture to backend
        // Sending response back to mentors-survey.html
        res.json({ sameName: sameName, sameEmail: sameEmail, samePicture: samePicture });
    });

};
