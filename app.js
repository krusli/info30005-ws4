// imports Express. See README for more on the Node.js import
// system
const express = require('express');

// calls Express's createApplication() application factory
// method, which returns a new Express application
const app = express();

// import the users object we exported in db.js
const users = require('./models/db.js');

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

app.get('/users', function(req, res) {
  res.send(users);  // send back the JSON file for now
})

app.get('/users/:userID', function(req, res) {
  // TODO send 404 if userID is invalid
  // res.status(404).send(<whatever you want to send>);
  res.send(users[req.params.userID]);
})

// run the web server, listening on port 3000.
// For Heroku, get the port from the environment variable
let port = process.env.port || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
})
