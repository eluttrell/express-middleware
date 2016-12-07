const express = require('express'),
      app = express(),
      morgan = require('morgan'),
      fs = require('fs'),
      accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

app.use(morgan('dev', {stream: accessLogStream}));

app.use(function middlewarePractice(request, response, next) {
    let method = request.method;
    let path = request.path;
    console.log('Method: ' + method + ', Path: ' + path);
    next();
});

app.get('/', function newMiddleware(req, res) {
  console.log('Here you are, where ever that may be...');
  res.send('This worked');
});

app.listen(1337, function() {
    console.log('Listening to 1337');
});
