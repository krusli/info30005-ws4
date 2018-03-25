// imports Express. See README for more on the Node.js import
// system
const express = require('express');

// calls Express's createApplication() application factory
// method, which returns a new Express application
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// import the router we defined in controllers/users.js
const usersRouter = require('./routes/users'); // don't need to specify .js

// use the usersRouter for the route /users
app.use('/users', usersRouter);

console.log(usersRouter);

// routing
// '/' is the route that Express pattern matches against.
// What this means is that when someone does a request to
// http://<server-url>/, this anonymous "callback function"
// defined below will handle the request and send back
// 'Hello world'.
/*
 * krusli> ~ curl localhost:3000
 * Hello world!%
 */
app.get('/', function(req, res) {
  res.send('Hello world!');
})

// run the web server, listening on port 3000.
// For Heroku, get the port from the environment variable
let port = process.env.port || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
})
