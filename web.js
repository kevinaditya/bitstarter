var express = require('express');
var app = express();
var fs = require('fs');

var file = fs.readFileSync("index.html");
var filetext = file.toString();

app.use(express.logger());


app.get('/', function(request, response) {
  response.send(filetext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
