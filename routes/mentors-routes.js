var path = require('path');

module.exports = function (app) {

    // Load MENTORS page to server
    app.get('/mentors', function (req, res) {
        res.sendFile(path.join(__dirname + '../public/mentors.html'));
    });

    // Default to HOME page
    app.use('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

}