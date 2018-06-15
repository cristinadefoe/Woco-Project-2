// HTML ROUTE to Home page
var path = require("path");

module.exports = function (app) {

  // Homepage - About page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  // Friends's homepage
  app.get("/friends-home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/friends-home.html"));
  });

  // Friend's survey
  app.get("/friends-survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/friends-survey.html"));
  });

  // Mentor's homepage
  app.get("/mentors-home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/mentors-home.html"));
  });

  // Mentor's survey
  app.get("/mentors-survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/mentors-survey.html"));
  });

  // Networking
  app.get("/mentors-survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/networking.html"));
  });

  // Dating survey
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Rate your date
  app.get("/rating", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/rating.html"));

    // Dating search
  });
  app.get("/search", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
  });

  // Shop

  app.get("/shop", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/shop.html"));
  });

};
