const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var db = require('./database');

app.use(express.static('public'));

app.use(bodyParser.json());

app.post('/account', function(req, res) {
  console.log(`Server has received a POST request for the following data: ${req.body}. Initiating database INSERT...`);
  db.connection.query('INSERT INTO customer VALUES ')
  res.status(201).send('post success');
});

const PORT = 3000
app.listen(PORT, console.log(`Listening on port ${PORT}...`));

