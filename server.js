/**
 * Created by Jan Bart Local on 2-7-2016.
 */
var express = require('express');
var app = express();

var env = process.env.NODE_ENV || 'production';

app.use(express.static('./'));

app.set('views', './');
app.engine('html', require('ejs').renderFile);

app.get('/welcome', function (req, res) {
	res.render('index.html');
});

app.get('/competitie/*', function (req, res) {
	res.render('index.html');
});

app.get('/env', function (req, res) {
	res.json({"data": env});
});

var server = app.listen(process.env.PORT || 8080, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});