//configuration
var port = process.env.PORT || 3000;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Note = require("./model/noteModel.js");
var url = require('url');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', '.\\views');
app.set('view engine', 'jade');

//routes
app.get('/', function(req, res){
  if(req.query.id) {
    Note.findById(req.query.id).then(function (note) {
      res.render('Note.jade', {text: note.text, id: note.id});
    });
  }else{
    res.render('index.jade', {});
  }
});

app.get('/:id', function(req, res){
  Note.findById(req.params.id).then(function (note) {
      res.render('Note.jade', {text: note.text, id: note.id});
    });
});

app.post('/', function (req, res) {
  Note.create({
    'text' : req.body.text
  }).then(function(err){
    console.log(err, 'result of create');
  });

  res.render('index.jade', { message: 'Note saved' });
});

var server = app.listen(port);
console.log('Running on Port', port);