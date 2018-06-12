var path = require('path');

module.exports = function (app) {

    // Load ABOUT page to server
    app.get('/about', function (req, res) {
        res.sendFile(path.join(__dirname + '../public/about.html'));
    });

    // Default to HOME page
    app.use('/', function (req, res) {
        res.sendFile(path.join(__dirname + '../public/index.html'));
    });

}