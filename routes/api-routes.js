// API ROUTE to Sequelize Passport.js 
// *****************************************************************

// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        res.json("/members");
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        }
        else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

};
// API ROUTE to Sequelize Passport.js ends here
// *****************************************************************

// API ROUTE to mentors 
// *****************************************************************
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
                // Loop over the data and compare the scores in data with the userInput score
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



        // Sending response back to mentors-survey.html


        // res.json({ sameName: sameName, sameEmail: sameEmail, samePicture: samePicture });
    });

};
// API ROUTE to mentors ends here
// *****************************************************************

// API ROUTE to friends
// *****************************************************************
var friendsData = require('../data/friends.js');
var path = require('path');
var db = require("../models");
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {

        // Display friends data in json format
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {
        var userInput = req.body;
        console.log(userInput)
        var friendMatch = {
            name: "",
            photo: "",
            email: "",
            friendDifference: 1000
        }

        db.Friend.findAll({})
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    console.log(`friend name: ${data[i].name}`)
                    var mentor = data[i]
                    var diff = Math.abs(userInput.scores - mentor.scores)
                    if (diff < friendMatch.friendDifference) {
                        friendMatch.name = friend.name;
                        friendMatch.photo = friend.photo;
                        friendMatch.email = friend.email;
                        friendMatch.friendDifference = diff;
                    }
                }

                res.json(friendMatch)
                // Loop over the data and compare the scores in data with the userInput score
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
        // Sending object sameName and samePicture to backend
        // Sending response back to mentors-survey.html


        // res.json({ sameName: sameName, sameEmail: sameEmail, samePicture: samePicture });
    });

};
// API ROUTE to friends ends here
// *****************************************************************
