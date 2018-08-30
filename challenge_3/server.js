const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.post('/account', function(req, res) {
  console.log('post request received');
  console.log(req.body)
  res.status(201).send('post success');
});

const PORT = 3000
app.listen(PORT, console.log(`Listening on port ${PORT}...`));

