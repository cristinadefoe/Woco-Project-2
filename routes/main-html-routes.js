// HTML ROUTE to Home page
var path = require("path");

module.exports = function (app) {

  app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/about.html'));
  });

  app.get('/mentors-home', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/mentors-home.html'));
  });


  app.get('/mentors-survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/mentors-survey.html'));
  });

  app.get('/mentors-view', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/mentors-view.html'));
  });

  // Default, catch-all route that leads to`home.html` which displays the home page. 
  app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/about.html'));
  });

};
