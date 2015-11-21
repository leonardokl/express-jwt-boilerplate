var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('PAI FODASTICA');
});

app.get('/:nome', function (req, res) {
  res.send(`nome: ${nome}` );
});

app.get('/api', function (req, res) {
  res.send('API');
});

app.listen(8000);
