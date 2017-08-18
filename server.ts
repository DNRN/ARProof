import * as express from 'express';

var app = express();
var path = require('path');
//var publicFolder = __dirname + "/public/";
app.use(express.static('public'))
app.use('/resources', express.static('node_modules'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/public/" + "index.html"));
});

app.listen(8080);

console.log("Server started");