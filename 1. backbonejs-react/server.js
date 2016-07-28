// express
var express = require('express');
var app = express();

// assets
app.use('/js', express.static(__dirname + '/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// index.html
app.use('/*', function(req, res) {
  res.sendFile('index.html', {'root': __dirname});
});

// start
app.listen(8080);

console.log('Server started...');
