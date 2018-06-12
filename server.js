// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./config/passport');

// Sets up Expres app
var app = express();

// Port will work on local host 8080
var PORT = process.env.PORT || 8080;

// Require all of our models for syncing
var db = require('.models');

// Standard bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Serve static files and assign to public folder so it's available to all documents
app.use(express.static('public'));

// Use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Require html-routes and api-routes files
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Require aboutRoutes file 
require('./routes/about-routes.js')(app);

// Require chatRoutes.js file
require('./routes/chat-routes.js')(app);

// Require mentorRoutes.js file
require('./routes/mentors-routes.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});