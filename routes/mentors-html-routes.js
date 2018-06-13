var path = require('path');

module.exports = function (app) {

    // GET Route to`/mentors-survey` which should display the survey page.
    // When user hits survey button take user to survey.html page
    app.get('/mentors-survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/mentors-survey.html'));
    });

    // GET Route to`/mentors-survey` which should display the survey page.
    // When user hits survey button take user to survey.html page
    app.get('/mentors-view', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/mentors-view.html'));
    });


    // Default, catch-all route that leads to`home.html` which displays the home page. 
    app.use("/", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });
}

