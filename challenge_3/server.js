const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var db = require('./database');

app.use(express.static('public'));

app.use(bodyParser.json());

app.post('/customer', function(req, res) {
  console.log(`Server has received a POST request for the following data: ${req.body.userDetails}. Initiating database INSERT...`);
  db.connection.query('INSERT INTO customer (name, email, password, address_line1, address_line2, city, state, zip_code, phone, credit_card_no, expiry_date, cvv, billing_zip) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', req.body.userDetails, function(error, results) {
    if (error) {
      console.log('ERROR: Failed to load customer record to database', error);
      res.status(500).send('POST failed...');
    } else {
      console.log('Customer record posted to database successfully!', results);
      res.status(201).send('POST successful!');
    }
  }); 
});

const PORT = 3000
app.listen(PORT, console.log(`Listening on port ${PORT}...`));

