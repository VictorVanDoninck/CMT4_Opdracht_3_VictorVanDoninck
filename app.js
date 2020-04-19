const express = require("express");
const path = require('path');
const app = express();
const port =5000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render("home");
});

app.get('/portfolio', function(req, res){
  res.render("portfolio");
});

app.get('/home', function(req, res){
  res.render("home");
});

app.get('/contact', function(req, res){
  res.render("contact");
});

app.get('/collection', function(req, res){
  res.render("collection");
});

app.get('/showcase', function(req, res){
  res.render("showcase");
});

app.get('/detail01', function(req, res){
  res.render("detail01");
});

app.get('/detail02', function(req, res){
  res.render("detail02");
});

app.get('/detail03', function(req, res){
  res.render("detail03");
});

app.get('/detail04', function(req, res){
  res.render("detail04");
});

app.get('/detail05', function(req, res){
  res.render("detail05");
});

app.get('/detail06', function(req, res){
  res.render("detail06");
});

app.get('/detail07', function(req, res){
  res.render("detail07");
});

app.get('/detail08', function(req, res){
  res.render("detail08");
});

app.get('/detail09', function(req, res){
  res.render("detail09");
});

app.get('/detail09b', function(req, res){
  res.render("detail09b");
});

app.get('/detail10', function(req, res){
  res.render("detail10");
});

// heroku poort instellingen
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
