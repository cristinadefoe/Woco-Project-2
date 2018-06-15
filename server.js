// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./config/passport');
var path = require('path');

// Port will work on local host 8080
var PORT = process.env.PORT || 8080;

// Require all of our models for syncing
var db = require('./models');

// Sets up Expres app
var app = express();

// Standard bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// // Check if server is running when press node.js
// app.use(bodyParser.text({ type: "text/html" }));
// app.use(bodyParser.json({ type: "application/vnd.custom-type" }));

// Serve static files and assign to public folder so it's available to all documents
app.use(express.static('public'));

// Use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Require api-routes files
require("./routes/api-routes.js")(app);

// Require html-routes file to server
require('./routes/main-html-routes.js')(app);

// Require html-routes file to server (passport authentication)
require('./routes/html-routes.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});
