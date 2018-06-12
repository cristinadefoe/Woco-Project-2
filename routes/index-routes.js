// Route for HOME page

var path = require('path');

module.exports = function (app) {

    // Load HOME page to server
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

}
