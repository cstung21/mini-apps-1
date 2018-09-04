const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, '/client')));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(bodyParser.json());

app.post('/csv', function(req, res) {
  console.log('POST request from client has been received!');

  let data = req.body;
  console.log(data);
  console.log(typeof data)
  res.status(200).send(JSON.stringify(data));

});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));