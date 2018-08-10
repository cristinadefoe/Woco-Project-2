// Dependencies
var path = require("path");

module.exports = function (app) {

  // About page - Home
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  // Mentor's
  app.get("/mentors", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/mentors.html"));
  });

  // Friends's
  app.get("/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/friends.html"));
  });

  // Dating survey
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Rate your date
  app.get("/rating", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/rating.html"));
  });

};
