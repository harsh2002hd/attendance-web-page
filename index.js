const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'attendance'
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  connection.query('SELECT * FROM records', function(error, results) {
    res.render('index.ejs', { records: results });
  });
});

app.post('/', function(req, res) {
  const record = {
    name: req.body.name,
    date: req.body.date,
    status: req.body.status
  };
  connection.query('INSERT INTO records SET ?', record, function(error, results) {
    res.redirect('/');
  });
});

app.listen(3000, function() {
  console.log('Server started on port 3000.');
});
